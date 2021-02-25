class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    //read
    getDiscussion(){
        fetch(`${this.baseUrl}/discussions`)
        .then(res => res.json())   
        .then(json => {
        json.data.forEach(discussion => {
            // console.log(discussion)
            let newDiscussion = new Discussion(discussion)
            // console.log(newDiscussion)
            // newDiscussion.displayDiscussion()
            newDiscussion.displayDiscussionCard()
        })
        })
        // Comment.newCommentForm(this.id)
    }



    //create
    postFetch(content, discussion_id){
        const bodyData = {content, discussion_id}
        fetch(endPoint, {
          // POST request
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(bodyData)
        })
        .then(response => response.json())
        .then(comment => {
        console.log(comment.data.attributes.content)
        // let commentData = comment.data

        let newComment = new Comment(comment)
        console.log(newComment)
        newComment.displayCommentCard(discussion_id)

        })
    }


    // //delete
    // deleteComment(e) {
    // fetch(`${this.baseUrl}/comments/${e.target.parentNode.dataset.id}`, {
    //     method: "DELETE"
    // })
    // }      

}