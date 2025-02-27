/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { TbFaceIdError } from 'react-icons/tb';

/**
 * A functional component that renders a 404 error page.
 * 
 * This component displays an error icon and message indicating
 * that the requested page could not be found. It provides a link
 * for users to navigate back to the home page.
 * 
 * @returns The JSX code to render the 404 error page.
 */

function NotFound() {
    return (
        <div css={containerStyle}>
            <div css={errorMessageStyle}>
                <TbFaceIdError css={iconStyle} />
                <span>Page not found</span>
            </div>

            <h1 css={headingStyle}>This site can't be reached.</h1>

            <Link to="/" css={linkStyle}> Go Back </Link>
        </div>
    );
}

export default NotFound;

const containerStyle = css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
    max-width: 42rem;
    margin: 0 auto;
    padding: 1rem;
`;

const errorMessageStyle = css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: #94a3b8;
`;

const iconStyle = css`
    font-size: 2.5rem;
`;

const headingStyle = css`
    font-size: 1.5rem;
    font-weight: 700;
    color: #94a3b8;
    margin-top: 0.5rem;
`;

const linkStyle = css`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #858c94;
    color: white;
    font-weight: 600;
    border-radius: 0.375rem;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: #6c747c;
    }
`;