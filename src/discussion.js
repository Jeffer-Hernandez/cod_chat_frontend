class Discussion {

    constructor(discussion, discussionAttributes, commentIds){

        this.id = discussion.id
        this.title = discussionAttributes.title
        this.comments = commentIds
        
        Discussion.all.push(this)
        
    }

    getCommentIds(){
        return this.comments
    }


    findCommentById(id){
        comment = Comment.findById(id)
        

    }

  
    render(comment){
        return  `
        <div data-id=${this.id}>
                
        <h3>discussion: ${this.title}</h3>


        <h3>comments: ${comment}</h3>

        </div>
        <br><br>`;              
    }

}

Discussion.all = []