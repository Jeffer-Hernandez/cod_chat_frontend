class Comment{

    constructor(comment){

        if (comment.content){
            this.id = comment.id
            this.content = comment.content
        }
        else if (comment.data){ 
            this.id = comment.data.attributes.id
            this.content = comment.data.attributes.content

        }
 
        Comment.all.push(this)
    }

    static newCommentForm() {
        let body = document.getElementById('comment-form-container')
        let form = 
            `
                <form id="new-comment-form">
                    <textarea id='new-comment-body' name="content" rows="8" cols="80" value="" placeholder="What's on your mind?"></textarea>

                    <select id="discussions" name="discussions">
                    <option value="1">Discussion 1</option>
                    <option value="2">Discussion 2</option>
                    <option value="3">Discussion 3</option>
                    <option value="4">Discussion 4</option>
                    </select>
                    <br><br>

                    <input type="submit"/>
                </form>

            `
        body.insertAdjacentHTML('beforeend', form)
        // console.log(this.content)
        this.newPostComment()
        
    }

    static newPostComment(discussion_id) {
        let newForm = document.querySelector("#new-comment-form")
        
        newForm.addEventListener('submit', function(e){
            e.preventDefault()
            const discussion_id = parseInt(document.querySelector("#discussions").value)
            const content = document.querySelector("#new-comment-body").value


            apiService.postFetch(content, discussion_id)
            document.getElementById("new-comment-form").reset();

        })
    }


    displayCommentCard(discussion_id) {
        let commentContainer = document.querySelector(`[data-id=${CSS.escape(discussion_id)}]`)
        let commentElement = document.createElement('div')
        commentElement.setAttribute('id', 'comment-card')
        commentElement.dataset.id = parseInt(this.id)
        commentElement.innerHTML = 
        `<h3>${this.content}</h3>
        <button type="button" id="${this.id}" class="delete-problem"> Delete </button>`
        commentContainer.append(commentElement)
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