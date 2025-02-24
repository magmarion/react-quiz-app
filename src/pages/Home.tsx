import { Link } from 'react-router-dom';
// import clickSound2 from '../assets/clickSound2.mp3'; // Adjust path as needed
import mouseClick from '../assets/mouse-click.mp3';

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
        front: 'bg-[#007bff]',
        edge: 'bg-gradient-to-l from-[#001a33] via-[#003366] to-[#001a2a]', // Dark blue gradient
    },
    secondary: {
        front: 'bg-[#2aaf64]', // Green (HSL(140,70%,40%))
        edge: 'bg-gradient-to-l from-[#103d26] via-[#1f7c4d] to-[#0e331f]', // Dark green gradient
    },
    tertiary: {
        front: 'bg-[#ff9900]', // Orange (HSL(30,100%,50%))
        edge: 'bg-gradient-to-l from-[#663300] via-[#cc6600] to-[#552800]',
    },
    quaternary: {
        front: 'bg-[#3a3a5f]',
        edge: 'bg-gradient-to-l from-[#000000] via-[#2a2a4e] to-[#3a3a5f]',
    },
    quinary: {
        front: 'bg-[#FF4C4C]',  // Red background for the front
        edge: 'bg-gradient-to-l from-[#9B2226] via-[#FF4C4C] to-[#9B2226]',
    },
};

/**
 * A button component with a raised, rounded, and gradient background.
 *
 * Accepts the following props:
 * - `to`: The path to navigate to when the button is clicked.
 * - `label`: The text to display on the button.
 * - `variant`: The color variant of the button. One of 'primary', 'secondary', 'tertiary', 'quaternary', or 'quinary'.
 *
 * The button has a gradient background that changes depending on the variant. The gradient is a light-to-dark
 * gradient with a subtle 3D effect. The button also has a subtle shadow effect.
 *
 * The button is an anchor element with a rounded corner. When you hover over the button, the shadow and gradient
 * effects are animated. When you click the button, the shadow and gradient effects are reversed.
 *
 * The button also has a focus ring that is visible when you focus the button. The focus ring is a thin, rounded
 * rectangle that is the same color as the button's text color.
 */
const CategoryButton = ({ to, label, variant }: CategoryButtonProps) => {
    const { front, edge } = variantStyles[variant];

    const handleClick = () => {
        playClickSound();
    };

    return (
        <Link to={to} className="relative group inline-block outline-none focus:outline-offset-4"
            onClick={handleClick}
        >
            {/* Shadow */}
            <span
                className="absolute top-[5px] left-0 w-full h-full rounded-[12px] bg-black/25
                   will-change-transform translate-y-[2px] transition-transform duration-[600ms]
                   ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[10px]
                   group-active:translate-y-[-6px]"
            ></span>

            {/* Edge */}
            <span className={`absolute top-[3px] left-0 w-full h-full rounded-[12px] ${edge}`}></span>

            {/* Front */}
            <span
                className={`relative block px-6 py-2 rounded-[12px] text-white text-lg font-semibold ${front}
                    will-change-transform translate-y-[-4px] transition-transform duration-[800ms]
                    ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-[-10px]
                    group-active:translate-y-[-2px] focus:ring-2 focus:ring-offset-2 focus:ring-${variant}`}
            >
                {label}
            </span>
        </Link>
    );
};

/**
 * The Home component is the main entry point of the Quiz App.
 * It displays a title, a paragraph, and a set of buttons to select a quiz category.
 * The buttons are rendered with the CategoryButton component.
 */
const Home = () => (
    <div className="text-center">
        <h1 className="happy-monkey text-4xl font-bold mb-4">Welcome to the Mind Mint Quiz!</h1>
        <p className="mb-6 text-lg">Select a quiz category:</p>
        <div className="flex justify-center flex-wrap gap-4">
            <CategoryButton to="/quiz/react" label="REACT" variant="primary" />
            <CategoryButton to="/quiz/math" label="MATH" variant="secondary" />
            <CategoryButton to="/quiz/astronomy" label="ASTRONOMY"
                variant="tertiary" />
            <CategoryButton to="/quiz/physics" label="PHYSICS" variant="quaternary" />
            <CategoryButton to="/quiz/error" label="NO SOURCE" variant="quinary" />
        </div>
    </div>
);

export default Home;
