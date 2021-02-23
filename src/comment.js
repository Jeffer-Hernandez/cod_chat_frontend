class Comment {

    constructor(commentData, commentDataAttributes){

        this.id = commentData.id
        this.content = commentDataAttributes.content
        this.discussion = commentDataAttributes.discussion
        Comment.all.push(this)
    }

    static findById(id) {
        return this.all.find(comment => id === id);
    }

    render(){
        return  `
                <div data-id=${this.id}>
                <h3>comment: ${this.content}</h3>
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