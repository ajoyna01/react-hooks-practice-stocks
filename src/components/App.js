import React from "react";

import Header from "./Header";
import MainContainer from "./MainContainer";
// ✅fetch in App to be sure info is available everywhere even tho 
//it looks like it's only needed in MainContainer
  //ᐈafter fetching, the info needs to render to the page under Stock Container
//------------------1st deliverable-----------
//allow user to buy stock (click event), simple just clicking on stock card <---where the clickev s
        //should be attached
//then stock card should move to Portfolio
//-------------------2nd deliverable-------------
//allow user to sell stock (click event) that will remove the stock card from their portfolio 
//  but leaves it untouched in Stock Container

function App() {
//const variables
  
  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
