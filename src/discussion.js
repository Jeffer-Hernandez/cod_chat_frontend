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
        let userGreeting = document.createElement('p')
        userGreeting.setAttribute('data-id', this.id)
        let id = userGreeting.dataset.id
        userGreeting.innerHTML = `<h1>Hey, ${this.name}!</h1>`
        body.append(userGreeting)
        this.renderProblems()
        Problem.newProblemForm(this.id)
    }


}
