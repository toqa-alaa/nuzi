import PageNav from "../compoments/PageNav"
import PageFooter from "../compoments/PageFooter"
import RoadHeader from "../compoments/RoadHeader"
import "./MarketPlace.css"



function MarketPlace() {
    return (
        <div>
            <PageNav/>
            <section className="MarketPlace"> <RoadHeader/></section>

            <PageFooter/>
       
        </div>
    )
}

export default MarketPlace
