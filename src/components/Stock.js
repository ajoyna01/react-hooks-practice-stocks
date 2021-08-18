import React,{useState} from "react";
// props is an object that was holding{stocksToRender {} , HANDLECLICKFORRESPECTIVESIDE f(), name (var), price (var)}
function Stock({stocksToRender , handleClickForRespectiveSide}) {
  //console.log ()
  const[wasIAdded, noMoreAdding]= useState(false)
  // function Stock(props) {
  //   console.log (props)
///JS
  const clickHandler=()=>{
  console.log("INSIDE <Stock/>",stocksToRender.name)
   
  
  //WE WANT SOMETHIN EQUITABLE
  // handleClickForRespectiveSide(stocksToRender)




  if(wasIAdded === false){
    noMoreAdding(true)
  
    handleClickForRespectiveSide(stocksToRender)
  // if props.handlClickForRespectiveSide(props.stockToRender)
  } else{ console.log("I SAID, NO MORE ADDING")}
}
  return (<div>
      
      
      <div className="card">
        <div className="card-body"  onClick={clickHandler}>
          <h5 className="card-title">{stocksToRender.name}</h5>
          <p className="card-text">{stocksToRender.price}</p>
          
          <button>X</button>
          {/* this button does nothing */}
          {/* <h5 className="card-title">{props.stocksToRender.name}</h5>
          <p className="card-text">{props.stocksToRender.price}</p> */}
        </div>
      </div>
    
    
    </div>
  );
}
export default Stock;
/// alternative with props being passed
//so the parent writes the function, and the child uses that function to do something