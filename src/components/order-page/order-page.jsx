import "./order-page.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import PizzasSizeOptions from "./pizzas-size-options"

import { useState  } from "react"
import axios from "axios"
import CheckboxComp from "./pizza-checkbox"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { FormFeedback, FormGroup } from "reactstrap"


const ingredientsArray1 = ["Pepperoni" , "Tavuk Izgara" , "Mısır","Sarımsak"]
const ingredientsArray2 = ["Sosis","Soğan","Sucuk","Biber","Kabak"]
const ingredientsArray3 = ["Kanada Jambonu","Domates","Jalepeno","Ananas"]

const initialValues = {
    boyut:"",
    hamur:"",
    malzemeler:[]
    
    }

    const errorMessages = {
        malzemeler: "Lütfen en az 4 tanesini seçiniz",
        count: "Lütfen en az 1 adet seçiniz",
        size: "Lütfen pizza boyutunu belirleyiniz",
        category:"Lütfen hamur kalınğını seçiniz"
      };
      




export default function OrderPageContent(props) {
const {formData , setFormData , pizzaCountApp , setPizzaCountApp} = props
const [selectedIngredients , setSelecetedIngredients]=useState(0)
const [pizzaCount , setPizzaCount] = useState(0)
const [textAreaValue , setTextAreaValue] = useState("")
const history = useHistory()

const [errors , setErrors] = useState({
    malzemeler: false,
    count: false,
    size: true,
    category:false

})

 function handleChangeError(event) {
let {name , value , type} = event.target

if (name === 'size') {
    if (formData.size !== "") {
      setErrors({ ...errors, [name]: false });
    } else {
      setErrors({ ...errors, [name]: true });
    }
  }

  if (name === 'category') {
    if (value !== "") {
      setErrors({ ...errors, [name]: false });
    } else {
      setErrors({ ...errors, [name]: true });
    }
  }
  
  if (name === 'malzemeler') {
    if (formData["malzemeler"].length >= 4) {
      setErrors({ ...errors, [name]: false });
    } else {
      setErrors({ ...errors, [name]: true });
    }
  }

  



 }


 function clickIngredientsHandler(event){
    const checkbox= event.target
 
    if(checkbox.checked) {
        if(selectedIngredients < 10) {
         setSelecetedIngredients(selectedIngredients+1)
         const upgrade= [...formData["malzemeler"] , event.target.value]
         setFormData({...formData , ["malzemeler"]:upgrade})
         {console.log(formData)}
        } else {
         checkbox.checked= false;
         alert("En fazla 10 adet seçim yapabilirsiniz")
        }
 
    } else {
     setSelecetedIngredients(selectedIngredients-1)
     const filterIngredients = formData["malzemeler"].filter((item)=> item !== event.target.value)
     setFormData({...formData , ["malzemeler"]:filterIngredients })
    }
}


function textAreaHandler(event){

setTextAreaValue(event.target.value)
}

function clickCountIncrease() {
setPizzaCountApp(pizzaCountApp+1)
setPizzaCount(pizzaCount+1)
}

function clickCountDecrease() {
   
    if(pizzaCount >= 1) {
        setPizzaCount(pizzaCount-1)
        setPizzaCountApp(pizzaCountApp-1)
    } else {
        return
    }
}

function submitHandler(event) {
    event.preventDefault();
}


function submitPostHandler() {
   
    history.push("/success")
   axios.post("https://reqres.in/api/pizza" , formData)
   .then((response)=> console.log(response.data))
   .catch((error)=> console.log(error))
}


return (
<>
<header className="order-page-header">
<h3>Teknolojik Yemekler</h3>

</header>

<div className="order-page-content">
<div className="pizza-info-content">
<nav>

<img src="./assets/iteration-2/pictures/form-banner.png" alt="" /> 
<Link style={{color:"gray"}} className="header-button" to="/" >Anasayfa-</Link>

<Link style={{color:"gray"}} className="header-button" to="/order" >Sipariş Oluştur</Link>
</nav>
    <p className="pizza-info-content-row1" >Position Absolute Acı Pizza</p>
    <div className="pizza-info-content-row2" >
     <p className="pizzas-price" >89.95₺</p>
     <p className="pizzas-point" >4.9★ </p>
     <p>(200)</p>
 </div>
    <p>Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza domates , peynir ve genellikle çeşitli malzemelerle kaplanmış , daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen genellikle yuvarlak , düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir. </p>




</div>

<form onSubmit={submitHandler} >
<PizzasSizeOptions handleChangeError={handleChangeError}  errorMessages={errorMessages} errors={errors}   formData={formData} setFormData={setFormData}  />

<FormGroup>
<h4 style={{margin:"0" , textAlign:"left" , marginTop:"3rem", color:"black" , fontSize:"1.5"}}>Ek Malzemeler</h4>
{errors.malzemeler && <FormFeedback style={{color:"red"}}>{errorMessages.malzemeler}</FormFeedback>}
</FormGroup>

<div className="pizzas-ingredients-div">

<div className="pizza-infredients-checkbox-div-left">

{ingredientsArray1.map((item)=>{
    return <CheckboxComp handleChangeError={handleChangeError}  errorMessages={errorMessages} errors={errors}  value={item} clickIngredientsHandler={clickIngredientsHandler} />
})}


</div>
<div className="pizza-infredients-checkbox-div-mid">

{ingredientsArray2.map((item)=>{
    return <CheckboxComp handleChangeError={handleChangeError}   errorMessages={errorMessages} errors={errors}  value={item} clickIngredientsHandler={clickIngredientsHandler} />
})}

</div>
<div className="pizza-infredients-checkbox-div-right">

{ingredientsArray3.map((item)=>{
    return <CheckboxComp handleChangeError={handleChangeError}  errorMessages={errorMessages} errors={errors} value={item} clickIngredientsHandler={clickIngredientsHandler} />
})}
    
</div>






</div>


<FormGroup>

<label className="labelForNote" htmlFor="not-name">Ad Soyad</label>
<textarea value={textAreaValue} onChange={textAreaHandler} placeholder="Ad Soyad" className="areaForName" name="" id="not-name"></textarea>

</FormGroup>


<label className="labelForNote" htmlFor="not-area">Sipariş Notu</label>
<textarea placeholder="Siparişine eklemek istediğin bir not var mı ?" className="areaForNote" name="" id="not-area"></textarea>

<div className="order-count-and-info-div" >

<div className="order-count-settings-div">
<button onClick={clickCountDecrease} className="count-decrease-btn"  >-</button>
<p>{pizzaCount}</p>
<button onClick={clickCountIncrease} className="count-increase-btn" >+</button>

</div>


<div className="total-info-and-submit-div">
<p style={{fontWeight:"bold"}}>Sipariş Toplamı:</p>
<p>Seçimler {formData["malzemeler"].length*5}₺</p>
<p style={{color:"#CE2829" , fontWeight:"bold"}}  >Toplam:{pizzaCount*89.95+ formData["malzemeler"].length*5}₺</p>
{console.log(formData)}
<button onClick={submitPostHandler} disabled={formData.size ==="" || formData["malzemeler"].length<4} style={{backgroundColor:"#FDC913"}} type="submit" >Sipariş ver</button>
</div>

</div>

</form>




</div>
</>
)


}