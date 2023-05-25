
//LIKE BUTTON
//get the like button element
let bergvlietLikeButton = document.getElementById("bergvliet-like");

//change the state of the like and toggle liked class
bergvlietLikeButton.addEventListener("click", function(){
  let bergvlietLikeState = JSON.parse(sessionStorage.getItem("bergvlietLikeState"));
  bergvlietLikeState = !bergvlietLikeState;
  sessionStorage.setItem("bergvlietLikeState", bergvlietLikeState);
  bergvlietLikeButton.classList.toggle("liked");
})


//SAVED BUTTON
//get the saved button element
let bergvlietSaveButton = document.getElementById("bergvliet-save");

//toggle the saved style on the button and add the bergvliet match page title and url to the session storage so that it can be displayed on the saved.html page
bergvlietSaveButton.addEventListener("click", function(){
  //if the state is not saved, change state to saved and add to info to session storage
  let bergvlietSavedState = JSON.parse(sessionStorage.getItem("bergvlietSavedState"));
  
  let savedPages = JSON.parse(sessionStorage.getItem("savedPages"));
  if(!bergvlietSavedState){
    bergvlietSavedState = !bergvlietSavedState;
    let bergvlietPage = {title: "Bergvliet (Away) - 13 April 2022", link: "bergvliet-match.html"};
    savedPages.push(bergvlietPage);
    alert(`There are ${savedPages.length} items in the Save for Later folder.`)
  } else {
    savedPages = savedPages.filter(item => item.title !== "Bergvliet (Away) - 13 April 2022");
    bergvlietSavedState = !bergvlietSavedState;
  }
  bergvlietSaveButton.classList.toggle("saved");
  sessionStorage.setItem("savedPages", JSON.stringify(savedPages));
  sessionStorage.setItem("bergvlietSavedState", JSON.stringify(bergvlietSavedState));

  //if state is saved, remove the info from session storage. You'll need to find the object with the title and remove it from the object array
})

window.addEventListener("load", function(){
  if(sessionStorage.getItem("hasCodeRunBefore") === null){
    //initiate session storage
    sessionStorage.setItem("savedPages", JSON.stringify([]));
    sessionStorage.setItem("bergvlietSavedState", JSON.stringify(false));
    sessionStorage.setItem("hasCodeRunBefore", true);
  } else{
      //set the like button style
      let bergvlietLikeState = JSON.parse(sessionStorage.getItem("bergvlietLikeState"));
      if (bergvlietLikeState){
        bergvlietLikeButton.classList.add("liked");
      }
      //set the saved button style
      let bergvlietSavedState = JSON.parse(sessionStorage.getItem("bergvlietSavedState"));
      if(bergvlietSavedState){
        bergvlietSaveButton.classList.add("saved");
      }
  }
})
