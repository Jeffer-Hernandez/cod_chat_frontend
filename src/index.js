const apiService = new ApiService()
endPoint = "http://localhost:3000/api/v1/comments/"

document.addEventListener('DOMContentLoaded', () => {
    Comment.newCommentForm()
    apiService.getDiscussion()  
    
})




