const discussionEndPoint = "http://localhost:3000/api/v1/discussions";
const commentEndPoint = "http://localhost:3000/api/v1/comments";

document.addEventListener('DOMContentLoaded', () => {



});






// function getDiscussions() {
//     let discussionComments = [];
//     let discussion1Comments = [];
//     let discussion2Comments = [];
//     let discussion3Comments = [];
//     let discussion4Comments = [];
//     fetch(discussionEndPoint)
//     .then(res => res.json())
//     .then(json => {
//     // JSON data will be nested due to Serializer
//         json.data.forEach(discussion => {
            

//             let discussionId = discussion.id
//             let numberOfCommentsPerDiscussion = discussion.relationships.comments.data.length
            
//             if (discussionId == 1 && numberOfCommentsPerDiscussion > 0){
//                 // console.log(discussion.attributes.comments)
                
//                 let comments = discussion.attributes.comments
               
//                 comments.forEach(function(item) {
//                 // console.log(item)

//                 discussion1Comments.push(item.content)
//                 })
            
//                 let newDiscussion = new Discussion(discussion.id, discussion.attributes.title, discussion1Comments)
//                 document.querySelector('#discussion-container').innerHTML += newDiscussion.renderDiscussionCard()
//             }
//             else if (discussionId == 2 && numberOfCommentsPerDiscussion > 0){
//                 // console.log(discussion.attributes.comments)
                
//                 let comments = discussion.attributes.comments
               
//                 comments.forEach(function(item) {
//                 // console.log(item)

//                 discussion2Comments.push(item.content)
//                 })
            
//                 let newDiscussion2 = new Discussion(discussion.id, discussion.attributes.title, discussion2Comments)
//                 document.querySelector('#discussion-container').innerHTML += newDiscussion2.renderDiscussionCard()
//             }
//             else if (discussionId == 3 && numberOfCommentsPerDiscussion > 0){
//                 // console.log(discussion.attributes.comments)
                
//                 let comments = discussion.attributes.comments
               
//                 comments.forEach(function(item) {
//                 // console.log(item)

//                 discussion3Comments.push(item.content)
//                 })
            
//                 let newDiscussion3 = new Discussion(discussion.id, discussion.attributes.title, discussion3Comments)
//                 document.querySelector('#discussion-container').innerHTML += newDiscussion3.renderDiscussionCard()
//             }
//             else if (discussionId == 4 && numberOfCommentsPerDiscussion > 0){
//                 // console.log(discussion.attributes.comments)
                
//                 let comments = discussion.attributes.comments
               
//                 comments.forEach(function(item) {
//                 // console.log(item)

//                 discussion4Comments.push(item.content)
//                 })
            
//                 let newDiscussion4 = new Discussion(discussion.id, discussion.attributes.title, discussion4Comments)
//                 document.querySelector('#discussion-container').innerHTML += newDiscussion4.renderDiscussionCard()
//             }
//             else {
//                 let noCommentDiscussion = new Discussion(discussion.id, discussion.attributes.title, discussionComments)
//                 document.querySelector('#discussion-container').innerHTML += noCommentDiscussion.renderNoDiscussionCard()
//             }
//         })
//     })
// }
                 

// // function getDiscussionComments(){
// //     let commentStrings = [];
// //     Discussion.getCommentIds()


// // }


// function getComments() {
//     fetch(commentEndPoint)
//     .then(res => res.json())
//     .then(json => {
//     // JSON data will be nested due to Serializer
//     json.data.forEach(comment => {
//     discussionId = comment.relationships.discussion.data.id
//     let newComment = new Comment(comment, comment.attributes, discussionId)
//       })
//     })
// }

// function createFormHandler(e){
//     e.preventDefault()
  
//     const content = document.querySelector("#input-content").value
//     const discussion_id = parseInt(document.querySelector("#discussions").value)
//     // console.log(content, discussion_id)
//     postFetch(content, discussion_id )
// }

// function postFetch(content, discussion_id){
//     let newDiscussionComment = [];
//     const bodyData = {content, discussion_id}
//     fetch(commentEndPoint, {
//       // POST request
//       method: "POST",
//       headers: {"Content-Type": "application/json"},
//       body: JSON.stringify(bodyData)
//     })
//     .then(response => response.json())
//     .then(comment => {
  
  
//     let commentData = comment.data
//     let discussionId = commentData.attributes.discussion_id
//     // console.log(discussionId)
//     // console.log(newDiscussionComment)
//     // render JSON response
//     let newComment = new Comment(commentData, commentData.attributes, discussionId)
//     console.log(newComment)

        

//     let newDiscussion = new Discussion(discussionId, newComment.discussionTitle, newDiscussionComment)
//     document.querySelector('#discussion-container').innerHTML += newDiscussion.renderDiscussionCard()
//     })
// }