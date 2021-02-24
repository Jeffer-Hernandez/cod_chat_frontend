class Discussion {

    static allDiscussions = []

    constructor(discussion){

        this.id = discussion.id 
        this.title = discussion.title
        this.comments = discussion.comments
        
        Discussion.all.push(this)
        // console.log(this.comments)

    }

    displayDiscussion() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let discussionTitle = document.createElement('p')
        discussionTitle.setAttribute('data-id', this.id)
        let id = discussionTitle.dataset.id
        discussionTitle.innerHTML = `<h1>${this.title}!</h1>`
        body.append(discussionTitle)
        this.renderComments()
        Comment.newCommentForm(this.id)
    }




}
