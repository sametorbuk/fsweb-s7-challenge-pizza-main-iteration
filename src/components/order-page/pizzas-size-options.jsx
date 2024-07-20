import { useState } from "react"
import { FormGroup , FormFeedback} from "reactstrap"
import "./pizzas-size-options.css"


export default function PizzasSizeOptions(props) {
    const {formData , setFormData ,errors , errorMessages , handleChangeError} = props
     const [selectedSize , setSelectedSize] = useState("")

function clickSizeHandler(event) {
    const size = event.target.value
    setSelectedSize(size)
    setFormData({...formData , ["boyut"]:size})
   
}
 
function thicknesHandler(event) {
    const selected = event.target.value
    setFormData({...formData , ["hamur"]:selected})
}


return (

<> 

<div className="pizza-size-and-thickness-options-div">

<div className="pizza-size-options-div">
    <FormGroup>
<p>{`Boyut Seçiminiz:  ${selectedSize}`}</p>
{errors.size && <FormFeedback style={{color:"red"}}>{errorMessages.size}</FormFeedback>}
</FormGroup>

<label htmlFor="small" >Küçük</label>
<input onChange={(event) => {
     clickSizeHandler(event);
      handleChangeError(event);
    }} className="size-input" id="small" type="radio" value="S" name="size"/>

<label htmlFor="medium">Orta</label>
<input onChange={(event) => {
     clickSizeHandler(event);
      handleChangeError(event);
    }} className="size-input" id="medium"  type="radio" value="M" name="size"/>

<label htmlFor="large">Büyük</label>
<input onChange={(event) => {
     clickSizeHandler(event);
      handleChangeError(event);
    }} className="size-input" id="large"  type="radio" value="L" name="size"/>
</div>

<div className="pizza-thickness-options-div">

<FormGroup>
<label style={{marginLeft: "10.5rem" , top:"1.1rem"}} htmlFor="category">Hamur Seç</label>
<select onChange={(event) => {
      thicknesHandler(event);
      handleChangeError(event);
    }} style={{position:"relative" , top:"2.5rem" , right:"5rem"}} name="category" id="category">
<option  value="" disabled selected>--- Kalınlık Seçiniz ---</option>
 <option  value="Süpperince">Süpper ince</option>
 <option   value="Orta">Orta</option>
 <option   value="Kalın">Kalın</option>
</select>
{errors.category && <FormFeedback style={{color:"red"}} >{errorMessages.category}</FormFeedback>}

</FormGroup>



</div>



</div>


</>

)

}