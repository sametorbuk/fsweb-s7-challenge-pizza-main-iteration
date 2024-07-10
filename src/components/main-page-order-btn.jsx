import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function WhiteOrderBtn() {
const history = useHistory()

function clickHandler() {
  history.push("/order")
}
return(<>

<button onClick={clickHandler} style={{color:"red" , backgroundColor:"white" , borderRadius:"25px"}} >Sipariş Ver</button>
</>)
}