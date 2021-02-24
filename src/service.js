class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

    //read/ create
    findOrCreateDiscussion(e){
        return fetch(`${this.baseUrl}/discussions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(
                {
                    discussion: {
                        title: e.target.children[1].value
                    }
                })
            })
                .then(resp => {
                    let json = resp.json()
                    console.log(json) 
                    return json     
                })
    }

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