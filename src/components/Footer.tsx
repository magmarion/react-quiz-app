/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

/**
 * A footer component that displays a copyright notice.
 *
 * It is a stateless functional component.
 *
 * @returns {JSX.Element} The footer element.
 */
const Footer = () => (
  <footer css={footerStyle}>
    <p>&copy; 2025 Mind Mint Quiz made by Elnur Guliyev. All rights reserved.</p>
  </footer>
);

export default Footer;

const footerStyle = css`
  padding: 1rem;
  background-color: #181c14;
  color: white;
  text-align: center;
`;