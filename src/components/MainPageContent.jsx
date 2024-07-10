import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FoodOptionsDiv from "./food-options-div";
import CtaDiv from "./cta";

export default function MainPageContent() {

return (
<>
<div className="main-page-content">
<img style={{ width: "100vw" }}src='./public/assets/iteration-1/home-banner.png' alt="" />
<div className='main-page-header' >
   <p className='main-page-row1'>Teknolojik Yemekler</p>
     <p className='main-page-row2' >KOD ACIKTIRIR</p> 
     <p className='main-page-row3' >PİZZA DOYURUR</p>
      <Link to="/order" ><button className='hungry-button' >ACIKTIM</button></Link>  
      </div>
      <FoodOptionsDiv/>
      <CtaDiv/>
      <img style={{marginTop:"7rem"}}  src="/assets/iteration-2/pictures/acıktırankodlara-doyuran-lezzetler.png" alt="" />
      <FoodOptionsDiv/>

      

       </div>
</>
)
}