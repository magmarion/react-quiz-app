/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import mouseClick from '../assets/mouse-click.mp3';

/**
 * Play a mouse click sound.
 *
 * Tries to play the sound using the `Audio` API. If the sound is not playable
 * (e.g. because the browser does not support the `Audio` API), it logs an
 * error to the console.
 */
const playClickSound = () => {
    try {
        const audio = new Audio(mouseClick);
        audio.volume = 0.3;
        audio.play();
    } catch (error) {
        console.log('Error playing audio:', error);
    }
};

type CategoryButtonProps = {
    to: string;
    label: string;
    variant: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary';
};

const variantStyles = {
    primary: {
        front: css({ backgroundColor: '#007bff' }),
        edge: css({ background: 'linear-gradient(to left, #001a33, #003366, #001a2a)' }),
    },
    secondary: {
        front: css({ backgroundColor: '#2aaf64' }),
        edge: css({ background: 'linear-gradient(to left, #103d26, #1f7c4d, #0e331f)' }),
    },
    tertiary: {
        front: css({ backgroundColor: '#ff9900' }),
        edge: css({ background: 'linear-gradient(to left, #663300, #cc6600, #552800)' }),
    },
    quaternary: {
        front: css({ backgroundColor: '#3a3a5f' }),
        edge: css({ background: 'linear-gradient(to left, #000000, #2a2a4e, #3a3a5f)' }),
    },
    quinary: {
        front: css({ backgroundColor: '#FF4C4C' }),
        edge: css({ background: 'linear-gradient(to left, #9B2226, #FF4C4C, #9B2226)' }),
    },
};

/**
 * A button component that navigates to a specified route and plays a click sound on interaction.
 * 
 * The button has a 3D effect with shadow, edge, and front layers for a visually appealing look.
 * It changes position on hover and active states, providing a dynamic user experience.
 * 
 * @param {string} to - The URL path to navigate to when the button is clicked.
 * @param {string} label - The text label displayed on the button.
 * @param {'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'quinary'}     variant - The style variant of the button, determining its color scheme.
 */

const CategoryButton = ({ to, label, variant }: CategoryButtonProps) => {
    const { front, edge } = variantStyles[variant];

    const handleClick = () => {
        playClickSound();
    };

    return (
        <Link
            to={to}
            css={css`
                position: relative;
                display: inline-block;
                outline: none;
                &:focus {
                    outline-offset: 4px;
                }
            `}
            onClick={handleClick}
        >
            {/* Shadow */}
            <span css={css`
                    position: absolute;
                    top: 5px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    background-color: rgba(0, 0, 0, 0.25);
                    will-change: transform;
                    transform: translateY(2px);
                    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
                    &:hover {
                        transform: translateY(10px);
                    }
                    &:active {
                        transform: translateY(-6px);
                    }
                    `}
            ></span>

            {/* Edge */}
            <span css={css`
                    position: absolute;
                    top: 3px;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 12px;
                    ${edge}
                    `}
            ></span>

            {/* Front */}
            <span css={css`
                    position: relative;
                    display: block;
                    padding: 8px 24px;
                    border-radius: 12px;
                    color: white;
                    font-size: 18px;
                    font-weight: 600;
                    ${front}
                    will-change: transform;
                    transform: translateY(-4px);
                    transition: transform 800ms cubic-bezier(0.3, 0.7, 0.4, 1);
                    &:hover {
                        transform: translateY(-10px);
                    }
                    &:active {
                        transform: translateY(-2px);
                    }
                    &:focus {
                        outline: 2px solid;
                        outline-offset: 2px;
                    }
                    `}
            >
                {label}
            </span>
        </Link>
    );
};

/**
 * The Home component renders the main landing page of the Mind Mint Quiz Island application.
 *
 * It displays a welcome message and a selection of quiz category buttons for the user to choose from.
 * Each button navigates to a specific quiz category when clicked, allowing the user to start a quiz
 * in that category. The buttons have a 3D effect for visual appeal and are styled with different
 * color schemes based on their variant.
 *
 * @returns {JSX.Element} The Home component containing a header and category buttons.
 */

const Home = () => (
    <div css={css`
            text-align: center;
            `}
    >
        <h1
            css={css`
                font-family: 'Happy Monkey', cursive;
                font-size: 2.25rem;
                font-weight: 700;
                margin-bottom: 1rem;
            `}
        >
            Welcome to the Mind Mint Quiz Island!
        </h1>
        <p css={css`
                margin-bottom: 1.5rem;
                font-size: 1.125rem;
                `}
        >
            Select a quiz category:
        </p>
        <div css={css`
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                gap: 1rem;
                `}
        >
            <CategoryButton to="/quiz/react" label="REACT" variant="primary" />
            <CategoryButton to="/quiz/math" label="MATH" variant="secondary" />
            <CategoryButton to="/quiz/astronomy" label="ASTRONOMY" variant="tertiary" />
            <CategoryButton to="/quiz/physics" label="PHYSICS" variant="quaternary" />
            <CategoryButton to="/quiz/error" label="NO SOURCE" variant="quinary" />
        </div>
    </div>
);

export default Home;