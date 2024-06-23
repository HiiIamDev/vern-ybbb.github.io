
export default function Proggrams ({
    children,
    locate
}) {
    return (
        <>
            <br />
            <div className="wrapper pr" id={locate}>
                <div className="container pr">
                    {children}
                </div>
            </div>
        </>
    )
}