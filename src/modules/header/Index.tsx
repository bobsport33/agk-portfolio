import React from "react";
import { styled } from "@pigment-css/react";
import Link from "@/components/Link/Index";

const HeaderContainer = styled("div")`
	height: 65px;
	display: flex;
	justify-content: space-between;
	padding: var(--padding);

	.header {
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
			<div>Logo</div>
			<div className="header__links">
				<Link text="My Work" href="/" />
				<Link text="Resume" href="/resume" />
				<Link text="Contact" href="/contact" />
			</div>
		</HeaderContainer>
	);
};

export default Header;
