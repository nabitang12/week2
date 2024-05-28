
function Modal(props){
    return(
        <>
        <div className="wrapper">
            <div className="modal">
                <div className="modal_title">안녕하세요</div>
                <div className="modal_context">모달 내용은 어쩌고 저쩌고..</div>
                <div className="close">
                    <button onClick={props.switch_status}>닫기</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Modal