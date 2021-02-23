class Discussion {

    constructor(comment, commentAttributes){

        this.id = discussion.id
        this.title = discussionAttributes.title
        Discussion.all.push(this)
    }

    static findById(id) {
        return this.all.find(comment => id === id);
    }

    render(){
        return  `
        <div data-id=${this.id}>
                
        <h3>discussion: ${this.discussion.title}</h3>
        <h3>comment:${this.content}</h3>
        
        </div>
        <br><br>`;              
    }

}

Comment.all = []