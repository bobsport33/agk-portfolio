import React from "react";
import { styled } from "@pigment-css/react";
import Link from "@/components/Link/Index";

import AGK from "@/public/logo/AGK-logo.svg";

const HeaderContainer = styled("div")`
	height: 65px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: var(--padding);

	.header {
		&__logo {
			height: 55px;

			& svg {
				height: 100%;
				width: auto;
			}
		}
		&__links {
			display: flex;
			gap: 30px;
			align-items: flex-end;
		}
	}
`;

const Header = () => {
	return (
		<HeaderContainer>
			<div className="header__logo">
				<AGK />
			</div>
			<div className="header__links">
				<Link text="My Work" href="/" />
				<Link text="Resume" href="/resume" />
				<Link text="Contact" href="/contact" />
			</div>
		</HeaderContainer>
	);
};

export default Header;
