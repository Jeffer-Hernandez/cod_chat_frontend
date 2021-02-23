const discussionEndPoint = "http://localhost:3000/api/v1/discussions";
const commentEndPoint = "http://localhost:3000/api/v1/comments";

document.addEventListener('DOMContentLoaded', () => {
  getDiscussions()
  getComments()

  const createCommentForm = document.querySelector("#create-comment-form")
  createCommentForm.addEventListener("submit", (e) => createFormHandler(e))


});

function getDiscussions() {
    fetch(discussionEndPoint)
    .then(res => res.json())
    .then(json => {
    // JSON data will be nested due to Serializer
    json.data.forEach(discussion => {
        console.log(discussion.relationships.comments)

        

        
        
    let newDiscussion = new Discussion(discussion, discussion.attributes)

    document.querySelector('#discussion-container').innerHTML += newDiscussion.render()
      })
    })
}

function getComments() {
    fetch(commentEndPoint)
    .then(res => res.json())
    .then(json => {
    // JSON data will be nested due to Serializer
    json.data.forEach(comment => {
    let newComment = new Comment(comment, comment.attributes)
    document.querySelector('#comment-container').innerHTML += newComment.render()
      })
    })
}

function createFormHandler(e){
    e.preventDefault()
  
    const content = document.querySelector("#input-content").value
    const discussion_id = parseInt(document.querySelector("#discussions").value)
    console.log(content, discussion_id)
    postFetch(content, discussion_id )
}

function postFetch(content, discussion_id){
    const bodyData = {content, discussion_id}
    fetch(commentEndPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(comment => {
    console.log(comment)
  
    commentData = comment.data
    // render JSON response
    let newComment = new Comment(commentData, commentData.attributes)
  
    document.querySelector('#discussion-container').innerHTML += newComment.render()
    })
}