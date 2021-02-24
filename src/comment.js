class Comment{

    constructor(comment){

        this.id = comment.id
        this.content = comment.content
        Comment.all.push(this)
        // console.log(this.discussion)
    }

    // static newCommentForm(discussion_id) {
        // let body = document.getElementById('comments-container')
    //     let form = 
    //         `
    //             <form id="new-comment-form">
    //                 <input type="text" id="comment-description"/>
    //                 <input type="submit"/>
    //             </form>
    //         `
    //     body.insertAdjacentHTML('beforeend', form)
        // Comment.makeComment(discussion_id)
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


    createCommentCard() {
        let p = document.createElement('p')
        p.setAttribute('data-id', this.id)
        p.innerHTML = `${this.content}`
        let deleteForm = ` <button type="button" id="${this.id}" class="solve-problem"> Delete </button>`
        p.insertAdjacentHTML('beforeend', deleteForm)
        this.appendComment(p)
    }

    appendComment(p){
        let comments = document.getElementsByClassName('comments-container')
        comments[0].append(p)
        let button = document.getElementById(`${this.id}`)
        this.delete(button)
    }

    delete(button){
        button.addEventListener('click', function(e){
            e.preventDefault()
            apiService.deleteComment(e)
                e.target.parentElement.remove();
        })
    }


   
}

Comment.all = []