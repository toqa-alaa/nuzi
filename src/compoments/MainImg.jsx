import NotchedBtn from "./NotchedBtn"
import "./MainImg.css"

function MainImg() {
    return (
        <div className="nHolder">
              <NotchedBtn bgColor="rgba(255, 211, 99) "color="rgba(30, 30, 30, 1)" padding="2px 25px" fontSize="30px" text={<>
                 <i className="fa-solid fa-circle-play"  > </i>
                playGame </>}/>
              <NotchedBtn  bgColor="rgb(55 43 39 / 90%) "  fontSize="30px" padding="2px 25px" text="explore more" />
        </div>
    )
}

export default MainImg



