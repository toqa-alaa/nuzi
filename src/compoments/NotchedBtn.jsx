import './NotchedBtn.css'
function NotchedBtn({ text ,bgColor, fontSize, color,padding  }) {
    return (
      <div className='notched'>
        <div     className="NotchedBtn"
      style={{
        backgroundColor: bgColor,
        fontSize: fontSize,
        color:color,
        padding:padding,
      }}> {text}  </div>
      </div>
    );
  }
  
  export default NotchedBtn;