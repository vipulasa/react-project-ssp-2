export default function Link({ href, children }) {
    return (
        <>
            <a href={href}>
                {children}
            </a>
        </>
    );
}