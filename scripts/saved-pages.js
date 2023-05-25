/*This program loads the saved match pages from session storage and adds them to the unordered list in the html on the saved.html page by creating a list item with an anchor element in it which is the title of the match  */

window.addEventListener("load", function(){
  //get the savedPages array from session storage 
  let savedPages = JSON.parse(sessionStorage.getItem("savedPages"));
  //get the unordered list for saved pages
  let savedPagesList = document.getElementById("saved-pages-list");
  
  //loop through the savedPages array and create a list item along with an anchor element containing the title of the match and link to the match page. Append these to the savedPagesList ul
  savedPages.forEach(page => {
    let listItem = document.createElement("li");
    let linkItem = document.createElement("a");
    linkItem.setAttribute("href", page.link);
    linkItem.innerHTML = page.title;
    listItem.appendChild(linkItem);
    savedPagesList.appendChild(listItem);
  });
})
