// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const entryPoint2 = document.querySelector(".cards-container");


axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {

    //console.log(response); 

    //const prebootstrap = response.data.articles.bootstrap;
    //const postbootstrap = Object.values(prebootstrap);
    //console.log(postbootstrap);

    //const prejavascript = response.data.articles.javascript;
    //const postjavascript = Object.values(prejavascript);
    //console.log(postjavascript);

    //const prejquery = response.data.articles.jquery;
    //const postjquery = Object.values(prejquery);
    //console.log(postjquery);

    //const prenode = response.data.articles.node;
    //const postnode = Object.values(prenode);
    //console.log(postnode);

    //const pretechnology = response.data.articles.technology;
    //const posttechnology = Object.values(pretechnology);
    //console.log(posttechnology);

    const obj1 = response.data.articles;
    const array1 = Object.values(obj1);
    console.log(array1);

    
    array1.forEach(item => {
        console.log(item);
        item.forEach(item2 => {
        //console.log(item2);
        const newAdds = articleCard(item2);
        entryPoint2.appendChild(newAdds);
        });
     });  
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });

function articleCard(data) {

    const varCard = document.createElement('div');
    const varHeadline = document.createElement('div');
    const varAuthor = document.createElement('div');
    const varImgContainer = document.createElement('div');
    const varImg = document.createElement('img');
    const varAuthorName = document.createElement('span');
  
    varHeadline.textContent = data.headline;
    varImg.src = data.authorPhoto;
    varAuthorName.textContent = `By ${data.authorName}`;
  
    varCard.classList.add("card");
    varHeadline.classList.add("headline");
    varAuthor.classList.add("author");
    varImgContainer.classList.add("img-container");
  
    varCard.appendChild(varHeadline);
    varCard.appendChild(varAuthor);
    varAuthor.appendChild(varImgContainer);
    varImgContainer.appendChild(varImg);
    varAuthor.appendChild(varAuthorName);
  
    return varCard;
  };