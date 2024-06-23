
export default function WrapperMid({children, color, locate}) {
    return (
        <div className={"wrapper-mid " + color} id={locate}>
            {children}
        </div>
    )
}