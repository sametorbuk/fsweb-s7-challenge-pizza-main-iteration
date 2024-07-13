import { useState , useEffect} from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Switch , useLocation} from 'react-router-dom/cjs/react-router-dom.min'
import MainPageContent from './components/MainPageContent'
import OrderPageContent from './components/order-page/order-page'
import SuccessPage from './components/succes-page'

const initialValues = {
boyut:"",
hamur:"",
malzemeler:[]

}


function App() {
 const [formData , setFormData] = useState(initialValues)

   const [pizzaCountApp , setPizzaCountApp]=useState(0)

   function countMinusHandler(){
    setPizzaCountApp(pizzaCountApp+1)
   }

  function countPlusHandler(){
    setPizzaCountApp(pizzaCountApp-1)
  }



  return (
    <>
      
   
   
   
      
      <Switch>
      
        <Route path="/" exact>
        <MainPageContent/>
       </Route>
         
         <Route path="/order">
           <OrderPageContent formData={formData} setFormData={setFormData} countPlusHandler={countPlusHandler} countMinusHandler={countMinusHandler} pizzaCountApp={pizzaCountApp} setPizzaCountApp={setPizzaCountApp}/>
         </Route>
          <Route path="/success">
            <SuccessPage hamur={formData.hamur} boyut={formData.boyut} malzemeler={formData.malzemeler} pizzaCountApp={pizzaCountApp}/>

          </Route>
          </Switch>
        
    </>
  )
}

export default App
