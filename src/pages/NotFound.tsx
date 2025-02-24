import { TbFaceIdError } from "react-icons/tb";

function NotFound() {

    return (
        <div className="h-full flex flex-col justify-center items-center gap-2">
            <div className="flex items-center gap-2 text-2xl font-bold text-slate-400">
                <TbFaceIdError size={40} />
            <span>Page not found</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-400 mt-2">
                This site can't be reached.
            </h1>
        </div>
    )
}

export default NotFound;
