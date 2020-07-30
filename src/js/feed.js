// DOM elements
const postsList = document.querySelector(".posts-list");

//
const postsArray = Array.from(postsList.children);

// get post bounding rectangle as displayed on the viewport
const postBoundingRect = postsArray[0].getBoundingClientRect();
// need height or width depending on the sliding direction
const postHeight = postBoundingRect.height;

// arranging the posts next to each other in the dom
postsArray.forEach((post, index) => {
	post.style.top = `${postHeight * index}px`;
});

// event listener for keyboard based navigation through the feed
document.addEventListener("keydown", (e) => {
	// console.log(e.key)
	// const currentPost = postsList.querySelector('.current-post');
	// console.log(currentPost)
});
