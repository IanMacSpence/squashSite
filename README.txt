For this task, I created separate pages that provided more detail about each squash match that was played. I did this so that I could have content for the "save for later" function. 

For each match, I created functionality for comments, a like button and a save for later button. I also wrote code for this to be stored in session storage. The like and save for later buttons is displayed across different pages using the session storage. The funtionality for the comments and buttons are stored in separate javascript files, i.e. two for each match. Separating the functionalities into separate js files helps with modularity of the code which makes it easier to read and debug. 

At the time of the first part of this project, the focus was on html, css and bootstrap and DOM manipulation etc hadn't been covered yet. I decided to only focus on adding the required content and functionality for it. Ideally, had DOM manipulation been covered at the time, I would've created match objects which could've stored the data for the cards on the results page, the extra information on the match page and the like state, the save for later state and the comments for each match. This is something that could perhaps be developed in the future for a final portfolio, but for now, I just focused on adding the required content and functionality. 

It is best to review the files related to Milnerton for comments

Things for the future:
> Use a more OO approach for the matches
> Add a "add match" feature
> Add edit features for the matches
> Add sign-in functionality which could also affect what the user would be able to see based on their role (admin, customer, non-subscribed etc)
> Make code more effecient by using OO but also improving the JS files to make them less repetitive to save space. It would be ideal to find a way to have just one file for comments and one file for buttons, instead of a file for each match. 
> The Nabvar and Footer are repetitive. Could store them in separate files and use an iframe to include them on each webpage. It would make editing them a lot easier as I would only need to edit them in one place. Or could look into different options like EJS when backend is covered in the course