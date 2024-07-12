
import FooterDiv from "./footer-div"
import "./success-page.css"


export default function SuccessPage(props) {
   const {hamur , boyut , malzemeler , pizzaCountApp} = props

    return(<>
    <div className="success-page-content">
    <p className="success-page-title">Teknolojik Yemekler</p>
    <p>lezzetin yolda</p>
    <p className="success-page-order-accept-text">Sipariş Alındı</p>
    

    <div className="success-page-order-info-div">

       <p style={{fontWeight:"bold"}} className="success-page-pizzas-info-text">Position Absolute Acı Pizza</p>
       <p className="success-page-pizzas-info-text">Boyut: {boyut}</p>
       <p className="success-page-pizzas-info-text">Hamur: {hamur}</p>
       <p className="success-page-pizzas-info-text">Ex Malzemeler: {malzemeler.join(",")}</p>

       
       <div className="success-page-total-div">
           
           <p className="success-page-pizzas-info-text" >Sipariş Toplamı</p>
           <p className="success-page-pizzas-info-text">Seçimler:{malzemeler.length*5}₺</p>
           <p className="success-page-pizzas-info-text">Toplam: {(pizzaCountApp*89.95)+malzemeler.length*5}₺</p>




       </div>




       </div>


     <FooterDiv/>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>)




}