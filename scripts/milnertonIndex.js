/*This file handles the functionality of the like and save buttons being clicked
When the buttons are clicked, they fire functions that update information to session storage and add styles to the buttons. */


//LIKE BUTTON
//get the like button element
let milnertonLikeButton = document.getElementById("milnerton-like");

//change the state of the like and toggle liked class
milnertonLikeButton.addEventListener("click", function(){
  let milnertonLikeState = JSON.parse(sessionStorage.getItem("milnertonLikeState"));
  milnertonLikeState = !milnertonLikeState;
  sessionStorage.setItem("milnertonLikeState", milnertonLikeState);
  milnertonLikeButton.classList.toggle("liked");
})


//SAVED BUTTON
//get the saved button element
let milnertonSaveButton = document.getElementById("milnerton-save");

//toggle the saved style on the button and add the milnerton match page title and url to the session storage so that it can be displayed on the saved.html page
milnertonSaveButton.addEventListener("click", function(){
  //if the state is not saved, change state to saved and add to info to session storage
  let milnertonSavedState = JSON.parse(sessionStorage.getItem("milnertonSavedState"));
  
  let savedPages = JSON.parse(sessionStorage.getItem("savedPages"));
  if(!milnertonSavedState){
    milnertonSavedState = !milnertonSavedState;
    let milnertonPage = {title: "Milnerton (Home) - 6 April 2022", link: "milnerton-match.html"};
    savedPages.push(milnertonPage);
    alert(`There are ${savedPages.length} items in the Save for Later folder.`)
  } 
  //if state is saved, remove the info from session storage. You'll need to find the object with the title and remove it from the object array
  else {
    //filter method is used to remove the page based on its title
    savedPages = savedPages.filter(item => item.title !== "Milnerton (Home) - 6 April 2022");
    milnertonSavedState = !milnertonSavedState;
  }
  milnertonSaveButton.classList.toggle("saved");
  sessionStorage.setItem("savedPages", JSON.stringify(savedPages));
  sessionStorage.setItem("milnertonSavedState", JSON.stringify(milnertonSavedState));

  
})

//on page load
window.addEventListener("load", function(){
  if(sessionStorage.getItem("hasCodeRunBefore") === null){
    //initiate session storage
    sessionStorage.setItem("savedPages", JSON.stringify([]));
    sessionStorage.setItem("milnertonSavedState", JSON.stringify(false));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else{
      //set the like button style
      let milnertonLikeState = JSON.parse(sessionStorage.getItem("milnertonLikeState"));
      if (milnertonLikeState){
        milnertonLikeButton.classList.add("liked");
      }
      //set the saved button style
      let milnertonSavedState = JSON.parse(sessionStorage.getItem("milnertonSavedState"));
      if(milnertonSavedState){
        milnertonSaveButton.classList.add("saved");
      }
  }
})

