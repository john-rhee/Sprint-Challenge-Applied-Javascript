// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(date,title,temp) {

    const varHeader = document.createElement('div');
    const varDate = document.createElement('span');
    const varTitle = document.createElement('h1');
    const varTemp = document.createElement('span');
  
    varDate.textContent = date;
    varTitle.textContent = title;
    varTemp.textContent = temp;
  
    varHeader.classList.add("header");
    varDate.classList.add("date");
    varTemp.classList.add("temp");
  
    varHeader.appendChild(varDate);
    varHeader.appendChild(varTitle);
    varHeader.appendChild(varTemp);
  
    return varHeader;
  };
  
  const headerContainer = document.querySelector('.header-container');
  
  headerContainer.appendChild(Header('MARCH 28, 2019','Lambda Times','98°'));
