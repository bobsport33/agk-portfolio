import React from "react";
import { styled } from "@pigment-css/react";
import NextLink from "next/link";

interface LinkProps {
	text: string;
	href: string;
	target?: string;
	color?: string;
	hoverColor?: string;
	activeColor?: string;
}

const StyledLink = styled(NextLink)`
	--link-color: var(--secondary);
	--link-hover-color: #003bbd;
	--link-active-color: #002a8f;

	font-size: 1.5rem;
	color: var(--link-color);
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: var(--link-hover-color);
	}

	&:active {
		color: var(--link-active-color);
	}
`;

const Link = ({ text, href, color, hoverColor, activeColor }: LinkProps) => {
	const isExternal = href.startsWith("http");

	const style = {
		...(color && { "--link-color": color }),
		...(hoverColor && { "--link-hover-color": hoverColor }),
		...(activeColor && { "--link-active-color": activeColor }),
	} as React.CSSProperties;

	if (isExternal) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				style={style}
			>
				{text}
			</a>
		);
	}

	return (
		<StyledLink href={href} style={style}>
			{text}
		</StyledLink>
	);
};

export default Link;
