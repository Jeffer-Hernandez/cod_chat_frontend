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

  

    displayDiscussionCard() {
        let discussionContainer = document.getElementById('discussion-container')
        // discussionContainer.innerHTML= ''

        let discussionElement = document.createElement('div')
        discussionElement.dataset.id = parseInt(this.id)
        discussionElement.setAttribute('id', 'discussion-card')
        // console.log(discussionElement)
        discussionElement.innerHTML =  `<h3>${this.title}</h3>`
        discussionContainer.appendChild(discussionElement)
        this.renderComments()

    }

    renderComments() {
        
        if (this.comments) {
            let discussion_id = this.id
            this.comments.forEach(function(comment){
                let newComment= new Comment(comment)
                newComment.displayCommentCard(discussion_id)
            })
        }
    }

   

    


    

    


}
