class Discussion {

    constructor(discussion, discussionAttributes, discussionComments){

        this.id = discussion.id
        this.title = discussionAttributes.title
        this.comments = discussionComments
        
        Discussion.all.push(this)
        console.log(this.comments)

    }

  
    renderDiscussionCard(){

        return  `
        <div data-id=${this.id}>
                
        <h3>discussion: ${this.title}</h3>

        <h3>comments: ${this.comments}</h3>

        </div>
        <br><br>`;              
    }


}

Discussion.all = []