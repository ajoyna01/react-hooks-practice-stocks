import React from "react";
import Stock from "./Stock";

function PortfolioContainer(props) {
  console.log(props)

  return (<div>

{/* <PortfolioContainer portfolioStocksToMap={portfolioStocks}
            alertMainContainer={sellOrRemoveAStock}
            /> */}
      <h2>My Portfolio</h2>
      {
        props.portfolioStocksToMap.map(eachStock =>{ console.log(eachStock)
          
          return (

            <Stock key={eachStock.id} 
            stocksToRender={eachStock}
            handleClickForRespectiveSide={props.alertMainContainer}
      />
      //give it the whole object stockToRender={indvStock}
      )
  
      })
  
        //render your portfolio stocks here
      }
    </div>);
}

export default PortfolioContainer;
