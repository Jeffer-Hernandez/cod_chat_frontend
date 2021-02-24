class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    //read
    findDiscussion(){
        fetch(`${this.baseUrl}/discussions`)
        .then(res => res.json())   
        .then(json => {
        json.data.forEach(discussion => {
            console.log(discussion)
            let newDiscussion = new Discussion(discussion)
            console.log(newDiscussion)
            newDiscussion.displayDiscussion()
        })
        })
    }

    // renderDiscussions() {
    //     if (this.discussions) {
    //         this.discussions.forEach(function(discussion){
    //             let newDiscussion = new Discussion(discussion)
    //             newDiscussion.displayDiscussion()
    //         })
    //     }
    // }


    //create
    postComment(e, discussion_id){
        return fetch(`${this.baseUrl}/comments`, {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(
                    {
                        comment: {
                            content: e.target.children[3].value,
                            discussion_id: discussion_id
                        }
                    }
                )
            })
            .then(resp => resp.json())
    }

    //delete
    deleteComment(e) {
    fetch(`${this.baseUrl}/comments/${e.target.parentNode.dataset.id}`, {
        method: "DELETE"
    })
}      

}