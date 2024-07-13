


export default function CheckboxComp(props) {
const {value , clickIngredientsHandler , handleChangeError} = props

return(<>

<label className="ingredients-label" htmlFor={value}>{value}</label>
      <input name="malzemeler" onChange={(event) => {
      clickIngredientsHandler(event);
      handleChangeError(event);
    }}  type="checkbox" id={value} value={value} key={value} />

</>)





}