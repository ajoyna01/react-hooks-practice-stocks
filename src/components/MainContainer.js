import React, { useEffect, useState }  from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";
// the fetched data is available in maincontainer and needs to be available to portfolio and 
//stock container. how to pass that info to them.... props ? destructured?
function MainContainer() {


const [stocks, setStocks] = useState( [] );
console.log("STATE OF OUR STOCKS:", stocks)

const[portfolioStocks, setPortfolioStocks] = useState( [] );
console.log("STATE OF OUR STOCKS:", portfolioStocks)
useEffect(() =>{ console.log("IN USE EFFECT")

  fetch("http://localhost:3001/stocks")
  .then(response => response.json())
  .then(stocksArray => setStocks(stocksArray),
    
    
);

}, [] ) 


const oneOfMyStocksConstainersStocksWasClicked=(clickedStock)=>{
  console.log("TELEPHONE CALL FROM <StockContainer/>",
 clickedStock)

 setPortfolioStocks( [...portfolioStocks, clickedStock])

// const newList=portfolioStocks.filter((portfolioStock)=> clickedStock.id !== portfolioStock.id)
//   setPortfolioStocks( [...newList])
//   console.log(newList)
}
//Filter Practice
const sellOrRemoveAStock=(clickedStock)=>{
  let filteredPortfolioStocks=portfolioStocks.filter(eachPortfolioStock =>
    eachPortfolioStock.id !== clickedStock.id
    )   
    console.log("FILTERED ...", filteredPortfolioStocks)
  //For Setting State- [portfolioStocks] state


  
 setPortfolioStocks([...filteredPortfolioStocks])

}
 



return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer listOfStocks={stocks}
            alertMainContainer={oneOfMyStocksConstainersStocksWasClicked}/>
            {/* //WIF={WIM} */}
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocksToMap={portfolioStocks}
            alertMainContainer={sellOrRemoveAStock}
                        // {/* //WIF={WIM} */}

            />
            </div>
      </div>
    </div>
  );
}

export default MainContainer;

//This only works in a vacuum
// const deleteFetchExample=()=> {
//   fetch("http://localhost:3001/1", {
//     method: 'DELETE'})

//     let filteredAllStocks = stocks.filter( stock.id !== 1
// 
//)}
//setPortfolioStocks( [...filteredAllStocks])