import React from "react";
import Stock from "./Stock";

function StockContainer( props ){

  console.log("Props in Stock Ctr", props)


///js


////



const oneOfMyStocksWasClicked=(clickedStock)=>{
   console.log("TELEPHONE CALL FROM <Stock/>",
 clickedStock)
 props.alertMainContainer(clickedStock)

 //alertMainContainer={oneOfMyStocksConstainresSTocksWasClicked}
}

//   }
return (<div>
    <h2>Stocks</h2>
    {
      props.listOfStocks.map(indvStocks =>{ //console.log(indvStocks)
//   console.log(indvStocks)
      return(
      
        <Stock key={indvStocks.id} 
            stocksToRender={indvStocks}
            
            handleClickForRespectiveSide={oneOfMyStocksWasClicked}
//       //WIG whereI'm going>Stock ={Name HERE - What I Am Here}
//             name={indvStocks.name}
       />
// 


    //give it the whole object stockToRender={indvStock}
  )

})

}


{/* /render stock list here/     */}
    
    
    
    </div>);
}

export default StockContainer;
