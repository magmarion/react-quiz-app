/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

const HomeLayout = () => (
    <div css={layoutStyle}>
        <Header />
        <main css={mainStyle}>
            <div css={containerStyle}>
                {/* Background Blur Effect */}
                <div css={blurEffectStyle} aria-hidden="true">
                    <div
                        css={gradientStyle}
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, \
                                 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, \
                                 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <Outlet />
            </div>
        </main>
        <Footer />
    </div>
);

export default HomeLayout;

// Emotion Styles
const layoutStyle = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const mainStyle = css`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`;

const containerStyle = css`
    max-width: 56rem;
    width: 100%;
`;

const blurEffectStyle = css`
    position: absolute;
    pointer-events: none;
    inset: 0;
    top: calc(100% - 13rem);
    z-index: -10;
    overflow: hidden;
    filter: blur(3rem);
    @media (min-width: 640px) {
        top: calc(100% - 50rem);
    }
`;

const gradientStyle = css`
    position: relative;
    aspect-ratio: 1155 / 678;
    width: 36.125rem;
    margin: 0 auto;
    background: linear-gradient(to top right, #2aaf64, #181c14);
    opacity: 0.3;
    @media (min-width: 640px) {
        width: 72.1875rem;
    }
`;