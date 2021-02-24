class Discussion {

    static allDiscussions = []

    constructor(discussion){

        this.id = discussion.id 
        this.title = discussion.attributes.title
        this.comments = discussion.attributes.comments
        // console.log(discussion.attributes.title)
        Discussion.allDiscussions.push(this)
        // console.log(this.comments)

    }

    // static openPage(discussion){
    //     // let newDiscussionForm = document.getElementById('new-discussion-form')
    //     // newDiscussionForm.addEventListener('submit', function(e){
    //     //     e.preventDefault()
    //         // console.log(apiService.findDiscussion())
            
    //             // .then(discussion => {
    //                 // console.log(discussion)
    //                 let newDiscussion = new Discussion(discussion)
    //                 // console.log(newDiscussion)
    //                 newDiscussion.displayDiscussion()
    //             // })
        
    // }

    createDiscussionCard() {
        let h = document.createElement('h3')
        h.setAttribute('data-id', this.id)
        h.innerHTML = `${this.title}`
        let deleteForm = ` <button type="button" id="${this.id}" class="solve-problem"> Delete </button>`
        h.insertAdjacentHTML('beforeend', deleteForm)
        this.appendDiscussion(h)
    }

    appendDiscussion(h){
        let comments = document.getElementsByClassName('discussion-container')
        discussions[0].append(h)
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

    displayDiscussion() {
        let body = document.getElementById('discussions-container')
        body.innerHTML = ''
        let discussionIdElement = document.createElement('h1')
        discussionIdElement.setAttribute('data-id', this.id)

        // console.log(discussionIdElement)
        let id = discussionIdElement.dataset.id
        // console.log(id)
        discussionIdElement.innerHTML = `<h1>${this.title}!</h1>`
        console.log(this.title)
        body.append(discussionIdElement)
        this.renderComments()
    }

    renderComments() {
        if (this.comments) {
            this.comments.forEach(function(comment){
                let newComment= new Comment(comment)
                // console.log(newComment)
                newComment.createCommentCard()
            })
        }
    }


}
