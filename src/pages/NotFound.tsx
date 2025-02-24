import { Link } from "react-router";
import { TbFaceIdError } from "react-icons/tb";

/**
 * The NotFound component renders a user-friendly message indicating that the requested page
 * cannot be found. It includes an icon, a message stating "Page not found", and a link to
 * navigate back to the home page. This component is typically used as a fallback route for
 * non-existent paths in a React application using React Router.
 */

function NotFound() {

    return (
        <div className="h-full flex flex-col justify-center items-start gap-2 max-w-2xl mx-auto p-4">
            <div className="flex items-center gap-2 text-2xl font-bold text-slate-400">
                <TbFaceIdError size={40} />
                <span>Page not found</span>
            </div>

            <h1 className="text-2xl font-bold text-slate-400 mt-2">
                This site can't be reached.
            </h1>

            <Link
                to="/"
                className="mt-4 btn btn-secondary">
                Go Back
            </Link>
        </div >
    )
}

export default NotFound;
