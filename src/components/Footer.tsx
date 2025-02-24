/**
 * A simple footer component with a copyright notice.
 *
 * It is meant to be a static footer that is always visible at the bottom of the page.
 * It contains a copyright notice with the current year and the name of the author.
 *
 * The footer has a dark gray background and white text. It is horizontally centered.
 */
const Footer = () => (
  <footer className="p-4 bg-[#181C14] text-white text-center">
    <p>&copy; 2025 Quiz Island made by Elnur Guliyev. All rights reserved.</p>
    {/* Ytterligare länkar eller info kan läggas till här */}
  </footer>

);
export default Footer;