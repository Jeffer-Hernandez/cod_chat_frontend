class Comment{

    constructor(comment){

        this.id = comment.id
        this.content = comment.content
        Comment.all.push(this)
        // console.log(this.discussion)
    }

    // static newCommentForm(discussion_id) {
    //     let body = document.getElementById('comments-container')
    //     let form = 
    //         `
    //             <form id="new-comment-form">
    //                 <input type="text" id="comment-description"/>
    //                 <input type="submit"/>
    //             </form>
    //         `
    //     body.insertAdjacentHTML('beforeend', form)
    //     Comment.makeComment(discussion_id)
    // }

    static makeComment(discussion_id) {
        let newForm = document.getElementById('new-comment-form')
        newForm.addEventListener('submit', function(e){
            e.preventDefault()
            apiService.postComment(e, discussion_id)
                .then(json => {
                    console.log(json)
                    newForm.reset()
                    let newComment= new Comment(json)
                    newComment.createCommentCard()
                })
        })
    }





   
}

Comment.all = []