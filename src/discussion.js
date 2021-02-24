class Discussion {

    static allDiscussions = []

    constructor(discussion){

        this.id = discussion.id 
        this.title = discussion.title
        this.comments = discussion.comments
        
        Discussion.all.push(this)
        console.log(this.comments)

    }

    static findById(id) {
        let thisDiscussion =  Discussion.all.find(discussion => id === id);
        return thisDiscussion
    }
  
    renderDiscussionCard(){

        return  `
        <div data-id=${this.id}>
                
        <h3>discussion: ${this.title}</h3>

        <h3>comments: ${this.comments}</h3>



        </div>
        <br><br>`;              
    }

    renderNoDiscussionCard(){

        return  `
        <div data-id=${this.id}>
                
        <h3>discussion: ${this.title}</h3>

        <h3>comments: Soo empty..</h3>



        </div>
        <br><br>`;              
    }


}
