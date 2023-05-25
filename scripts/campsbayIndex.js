
//LIKE BUTTON
//get the like button element
let campsbayLikeButton = document.getElementById("campsbay-like");

//change the state of the like and toggle liked class
campsbayLikeButton.addEventListener("click", function(){
  let campsbayLikeState = JSON.parse(sessionStorage.getItem("campsbayLikeState"));
  campsbayLikeState = !campsbayLikeState;
  sessionStorage.setItem("campsbayLikeState", campsbayLikeState);
  campsbayLikeButton.classList.toggle("liked");
})


//SAVED BUTTON
//get the saved button element
let campsbaySaveButton = document.getElementById("campsbay-save");

//toggle the saved style on the button and add the campsbay match page title and url to the session storage so that it can be displayed on the saved.html page
campsbaySaveButton.addEventListener("click", function(){
  //if the state is not saved, change state to saved and add to info to session storage
  let campsbaySavedState = JSON.parse(sessionStorage.getItem("campsbaySavedState"));
  
  let savedPages = JSON.parse(sessionStorage.getItem("savedPages"));
  if(!campsbaySavedState){
    campsbaySavedState = !campsbaySavedState;
    let campsbayPage = {title: "Camps Bay (Home) - 20 April 2022", link: "campsbay-match.html"};
    savedPages.push(campsbayPage);
    alert(`There are ${savedPages.length} items in the Save for Later folder.`)
  } else {
    savedPages = savedPages.filter(item => item.title !== "Camps Bay (Home) - 20 April 2022");
    campsbaySavedState = !campsbaySavedState;
  }
  campsbaySaveButton.classList.toggle("saved");
  sessionStorage.setItem("savedPages", JSON.stringify(savedPages));
  sessionStorage.setItem("campsbaySavedState", JSON.stringify(campsbaySavedState));

  //if state is saved, remove the info from session storage. You'll need to find the object with the title and remove it from the object array
})

window.addEventListener("load", function(){
  if(sessionStorage.getItem("hasCodeRunBefore") === null){
    //initiate session storage
    sessionStorage.setItem("savedPages", JSON.stringify([]));
    sessionStorage.setItem("campsbaySavedState", JSON.stringify(false));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else{
      //set the like button style
      let campsbayLikeState = JSON.parse(sessionStorage.getItem("campsbayLikeState"));
      if (campsbayLikeState){
        campsbayLikeButton.classList.add("liked");
      }
      //set the saved button style
      let campsbaySavedState = JSON.parse(sessionStorage.getItem("campsbaySavedState"));
      if(campsbaySavedState){
        campsbaySaveButton.classList.add("saved");
      }
  }
})
