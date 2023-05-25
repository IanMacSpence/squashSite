// Check if there are already comments stored in session storage
if (!sessionStorage.getItem('comments')) {
  // Create seed comments
  const seedComments = [
    {
      comment: 'Congrats on the win!'
    },
    {
      comment: 'This was a close one. Well done!'
    },
    {
      comment: "Looks like you're progressing. Keep it up!"
    }
  ];

  // Store seed comments in session storage
  sessionStorage.setItem('comments', JSON.stringify(seedComments));
}


// Check if there are any comments stored in session storage
if (sessionStorage.getItem('comments')) {
  const comments = JSON.parse(sessionStorage.getItem('comments'));
  displayComments(comments);
}

// Add event listener to the comment form
document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const comment = document.getElementById('comment').value;

  // Create a new comment object
  const newComment = {
    comment: comment
  };

  // Get existing comments from session storage or initialize an empty array
  const comments = sessionStorage.getItem('comments')
    ? JSON.parse(sessionStorage.getItem('comments'))
    : [];

  // Add the new comment to the array
  comments.push(newComment);

  // Save the updated comments array in session storage
  sessionStorage.setItem('comments', JSON.stringify(comments));

  // Clear the comment form field
  document.getElementById('comment').value = '';

  // Display the comments
  displayComments(comments);
});

// Function to display the comments
function displayComments(comments) {
  const commentsContainer = document.getElementById('commentsContainer');
  commentsContainer.innerHTML = '';

  comments.forEach((comment, index) => {
    // Create the comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // Create the comment content element
    const commentContent = document.createElement('div');
    commentContent.classList.add('commentContent');
    commentContent.textContent = comment.comment;

    // Create the comment actions element
    const commentActions = document.createElement('div');
    commentActions.classList.add('commentActions');

    // Create the edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editComment(index);
    });
    editButton.classList.add("btn", "btn-primary")

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteComment(index);
    });
    deleteButton.classList.add("btn", "btn-danger")

    // Append the buttons to the comment actions element
    commentActions.appendChild(editButton);
    commentActions.appendChild(deleteButton);

    // Append the comment content and actions to the comment element
    commentElement.appendChild(commentContent);
    commentElement.appendChild(commentActions);

    // Append the comment element to the comments container
    commentsContainer.appendChild(commentElement);
  });
}

// Function to edit a comment
function editComment(index) {
  const comments = JSON.parse(sessionStorage.getItem('comments'));
  const comment = comments[index];
  const newComment = prompt('Edit comment:', comment.comment);
  if (newComment !== null) {
    comments[index].comment = newComment;
    sessionStorage.setItem('comments', JSON.stringify(comments));
    displayComments(comments);
  }
}

// Function to delete a comment
function deleteComment(index) {
  const comments = JSON.parse(sessionStorage.getItem('comments'));
  comments.splice(index, 1);
  sessionStorage.setItem('comments', JSON.stringify(comments));
  displayComments(comments);
}
