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

    static openPage(discussion){
        // let newDiscussionForm = document.getElementById('new-discussion-form')
        // newDiscussionForm.addEventListener('submit', function(e){
        //     e.preventDefault()
            // console.log(apiService.findDiscussion())
            
                // .then(discussion => {
                    console.log(discussion)
                    let newDiscussion = new Discussion(discussion)
                    newDiscussion.displayDiscussion()
                // })
        
    }


    displayDiscussion() {
        let body = document.getElementById('discussion-container')
        body.innerHTML = ''
        let discussionTitle = document.createElement('h3')
        discussionTitle.setAttribute('data-id', this.id)

        console.log(discussionTitle)
        let id = discussionTitle.dataset.id
        console.log(id)
        discussionTitle.innerHTML = `<h1>${this.title}!</h1>`
        console.log(this.title)
        body.append(discussionTitle)
        this.renderComments()
        // Comment.newCommentForm(this.id)
    }

    renderComments() {
        if (this.comments) {
            this.comments.forEach(function(comment){
                let newComment= new Comment(comment)
                console.log(newComment)
                newComment.createCommentCard()
            })
        }
    }


}
