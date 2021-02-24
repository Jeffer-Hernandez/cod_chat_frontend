class ApiService {

    constructor(){
        this.baseUrl = `http://localhost:3000/api/v1`
    }

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

}