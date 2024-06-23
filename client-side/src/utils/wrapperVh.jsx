
export default function WrapperFullScreen ({children, locate, styleWrapper}) {
    return (
        <div className={"full-screen " + styleWrapper}  id={locate}>
            {children}
        </div>
    )
}