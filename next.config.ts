import type { RuleSetRule } from "webpack";
import { withPigment } from "@pigment-css/nextjs-plugin";

const nextConfig = {
	webpack(config: any) {
		const rules = config.module?.rules as RuleSetRule[];

		// Find the existing SVG loader
		const fileLoaderRule = rules.find(
			(rule): rule is RuleSetRule =>
				rule.test instanceof RegExp && rule.test.test(".svg")
		);

		if (!fileLoaderRule) {
			return config;
		}

		rules.push(
			// Reapply existing loader for ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			// SVGR for all other SVG imports
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: {
					not: [
						...((fileLoaderRule.resourceQuery as any)?.not ?? []),
						/url/,
					],
				},
				use: ["@svgr/webpack"],
			}
		);

		// Exclude SVGs from the original loader
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default withPigment(nextConfig);
