
import WhiteOrderBtn from "./main-page-order-btn"
import "./cta.css"

export default function CtaDiv() {
return (<>
<div className="cta-div">
<img className="cta-div-img" src="/assets/iteration-2/cta/kart-1.png" alt="" />

<div className="cta-div-right">
<img className="cta-div-right-img" src="/assets/iteration-2/cta/kart-2.png" alt="" />
<img className="cta-div-right-img" src="/assets/iteration-2/cta/kart-3.png" alt="" />

</div>
 
<div className="cta-div-left-info-and-order">
    <h1 style={{margin:"0" , color:"white"}}>Özel</h1>
    <h1 style={{margin:"0",  color:"white"}}>Lezzetus</h1>
    <p style={{margin:"0" ,  color:"white"}}>Position:Absolute Acı Pizza</p>
    <WhiteOrderBtn/>
    </div>

    <div className="cta-div-right-top-info-and-order">
    <h2 style={{margin:"0" , color:"white"}}>Hackathlon</h2>
    <h2 style={{margin:"0",  color:"white", marginBottom:"2rem", whiteSpace:"nowrap"}}>Burger Menü</h2>
    
    <WhiteOrderBtn/>
    </div>

    <div className="cta-div-right-bottom-info-and-order">
    <h2 style={{margin:"0" , color:"red" , fontWeight:"bold"}}>Çooooook hızlı</h2>
    <h2 style={{margin:"0",  color:"black", marginBottom:"2rem" , fontWeight:"bold" , whiteSpace:"nowrap"}}>Npm gibi kurye</h2>
    
    <WhiteOrderBtn/>
    </div>




</div>
</>)
}