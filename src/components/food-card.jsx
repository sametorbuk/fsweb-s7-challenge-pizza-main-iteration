import "./food-card.css"


export default function FoodCard(props) {
const {path , name , price , point} =props
return(<>


<div className="food-card-content">
<img src={path} alt="" />
<p style={{fontWeight:"bold"}} >{name}</p>
<div className="food-card-content-bottom" >
<p style={{flex:"2"}}>{point}★</p>
<p style={{flex:"0.8"}} >(200)</p>
<p>{price}₺</p>
</div>


</div>


</>)



}