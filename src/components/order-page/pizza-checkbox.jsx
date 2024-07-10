


export default function CheckboxComp(props) {
const {value , clickIngredientsHandler} = props

return(<>

<label className="ingredients-label" htmlFor={value}>{value}</label>
      <input onChange={clickIngredientsHandler} type="checkbox" id={value} value={value} />

</>)





}