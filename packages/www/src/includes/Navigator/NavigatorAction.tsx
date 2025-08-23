export function NavigatorAction({ label, url }: any) {
    return (
        <a
            data-tooltip-target="tooltip-share"
            data-tooltip-placement="left"
            className="z-50 flex items-center justify-center w-auto h-8 px-2 text-black duration-500 delay-100 bg-white border border-gray-700 rounded-md opacity-0 hover:shadow-lg shadow-black bg-opacity-60 backdrop-blur-sm group-hover:opacity-100 hover:text-gray-900 dark:border-gray-600 dark:hover:text-white dark:text-gray-400 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            href={url}
        >
            <span className="text-black text-md">{label}</span>
        </a>
    );
}