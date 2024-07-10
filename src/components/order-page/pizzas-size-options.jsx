import { useState } from "react"

import "./pizzas-size-options.css"


export default function PizzasSizeOptions(props) {
    const {formData , setFormData} = props
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
<p>{`Boyut Seçiminiz:  ${selectedSize}`}</p>

<label htmlFor="small" >Küçük</label>
<input onClick={clickSizeHandler}  className="size-input" id="small" type="radio" value="S" name="size-change"/>

<label htmlFor="medium">Orta</label>
<input onClick={clickSizeHandler} className="size-input" id="medium"  type="radio" value="M" name="size-change"/>

<label htmlFor="large">Büyük</label>
<input onClick={clickSizeHandler} className="size-input" id="large"  type="radio" value="L" name="size-change"/>
</div>

<div className="pizza-thickness-options-div">


<label style={{marginLeft: "10.5rem" , top:"1.1rem"}} htmlFor="category">Hamur Seç</label>
<select onChange={thicknesHandler} style={{position:"relative" , top:"2.5rem" , right:"5rem"}} name="category" id="category">
<option  value="" disabled selected>--- Kalınlık Seçiniz ---</option>
 <option  value="Süpperince">Süpper ince</option>
 <option   value="Orta">Orta</option>
 <option   value="Kalın">Kalın</option>
</select>




</div>



</div>


</>

)

}