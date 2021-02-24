class Comment {

    constructor(comment, commentAttributes, discussionId){

        this.id = comment.id
        this.content = commentAttributes.content
        this.discussionId = discussionId
        this.discussionTitle = commentAttributes.discussion.title


        Comment.all.push(this)
        // console.log(this.discussion)
    }

    static findById(id) {
        return this.all.find(comment => id === id);
    }

    

    renderComment(){
        return  `
        <div data-id=${this.id}>
        <h3>comment: ${this.content}</h3>
        </div>
        <br><br>`;             
    }

      
    renderDiscussionCard(){

        return  `
        <div data-id=${this.discussionId}>
                
        <h3>discussion: ${this.discussionTitle}</h3>

        <h3>comments: ${this.content}</h3>

        <div id="comment-container"></div>

        </div>
        <br><br>`;              
    }


    renderUpdateForm() {
        return `
        <form data-id=${this.id} >
          <h3>Edit your comment:</h3>
          <br><br>
          
          <textarea id='input-content' name="content" rows="8" cols="80" value="">${this.content}</textarea>
          <br><br>

    
          <select id="discussions" name="discussions">
            <option value="1">Loadouts</option>
            <option value="2">Tournaments</option>
            <option value="3">Community</option>
            <option value="4">What's New?</option>
          </select>
          <br><br>

    
          <input id='edit-button' type="submit" name="submit" value="Edit Comment" class="submit">

        </form>
      `;
    }
}

Comment.all = []