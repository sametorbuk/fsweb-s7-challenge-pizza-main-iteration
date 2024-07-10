
import FooterDiv from "./footer-div"
import "./success-page.css"


export default function SuccessPage(props) {
   const {hamur , boyut , malzemeler , pizzaCountApp} = props

    return(<>
    <div className="success-page-content">
    <p>Teknolojik Yemekler</p>
    <p>lezzetin yolda</p>
    <p>Sipariş Alındı</p>
    

    <div className="success-page-order-info-div">

       <p>Position Absolute Acı Pizza</p>
       <p>Boyut: {boyut}</p>
       <p>Hamur: {hamur}</p>
       <p>Ex Malzemeler: {malzemeler}</p>

       
       <div className="success-page-total-div">
           
           <p>Sipariş Toplamı</p>
           <p>Seçimler:{malzemeler.length*5}</p>
           <p>Toplam: {pizzaCountApp*85+malzemeler.length*5}</p>




       </div>




       </div>


     <FooterDiv/>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    </>)




}