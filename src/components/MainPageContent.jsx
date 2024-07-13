import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FoodOptionsDiv from "./food-options-div";
import CtaDiv from "./cta";
import FoodCard from "./food-card";
import FooterDiv from "./footer-div";

export default function MainPageContent() {
const foodCardArray = [{
path:"/assets/iteration-2/pictures/food-1.png",
name:"Terminal Pizza",
point:"3.5",
price:"75"
},{
path:"/assets/iteration-2/pictures/food-2.png",
name:"Position Absolute Pizza",
point:"4.5",
price:"90"
},{
path:"/assets/iteration-2/pictures/food-3.png",
name:"useEffect Burger",
point:"3.9",
price:"80"
}]



return (
<>
<div className="main-page-content">
<img style={{ width: "100vw" }}src='./public/assets/iteration-1/home-banner.png' alt="" />
<div className='main-page-header' >
   <p style={{ fontFamily: "Londrina Solid"}} className='main-page-row1'>Teknolojik Yemekler</p>
   <p style={{color:"#FDC913" , fontFamily:"Satisfy" , fontSize:"1.5rem" , margin:"0"}}>fırsatı kaçırma</p>
     <p className='main-page-row2' >KOD ACIKTIRIR</p> 
     <p className='main-page-row3' >PİZZA DOYURUR</p>
      <Link to="/order" ><button className='hungry-button' >ACIKTIM</button></Link>  
      </div>
      <FoodOptionsDiv/>
      <CtaDiv/>
      <img style={{marginTop:"7rem"}}  src="/assets/iteration-2/pictures/acıktırankodlara-doyuran-lezzetler.png" alt="" />
      <FoodOptionsDiv/>


       <div className="food-card-div">
      {foodCardArray.map((card)=> {
            return <FoodCard path={card.path} name={card.name} price={card.price} point={card.point} />
      })}
        </div>

        

      

       </div>
</>
)
}