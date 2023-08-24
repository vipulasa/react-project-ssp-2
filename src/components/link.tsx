export default function Link({ href, children }) {

    // const activeStyles = 'border-indigo-500 text-gray-900 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium';

    const inactiveStyles = 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium';

    // todo find the url from the router and set the active style
    // const isActive = false;


    return (
        <>
            <a href={href} className={inactiveStyles}>
                {children}
            </a>
        </>
    );
}