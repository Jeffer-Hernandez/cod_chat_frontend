class Comment{

    constructor(comment){

        this.id = comment.id
        this.content = comment.content
        Comment.all.push(this)
        // console.log(this.discussion)
    }

    static newCommentForm(discussion_id) {
        let body = document.getElementById('container')
        let form = 
            `
                <form id="new-comment-form">
                    <input type="text" id="comment-description"/>
                    <input type="submit"/>
                </form>
            `
        body.insertAdjacentHTML('beforeend', form)
        Comment.makeComment(discussion_id)
    }


   
}

Comment.all = []