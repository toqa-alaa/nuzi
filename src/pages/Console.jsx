import NotchedBtn from "../compoments/NotchedBtn";
import Options from "../compoments/Options";
function Console() {
    return (
        <div className="">
       <div className="top">
        <div className="line">MARKET place</div>
        <div className="c-logo text-center">     
               <img
                src="/NUZ_logo_3Dcoin_pose01.svg" alt="pic" /> 14.3K $NUZ</div>

        <div>    <NotchedBtn text="Connect Wallet" 
            bgColor="rgba(255, 211, 99, 1)" fontSize="16px" color="rgba(30, 30, 30, 1)" />
            </div>    
        </div>
        <div> 
            <Options/></div>
    </div>
    )
}

export default Console;

 