class Discussion {

    constructor(discussion, discussionAttributes){

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
                
        <h3>discussion: ${this.title}</h3>
        
        </div>
        <br><br>`;              
    }

}

Discussion.all = []