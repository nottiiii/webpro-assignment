import Vue from 'vue'

export default {
    getAllMember (callback) {
        Vue.$http.get('http://localhost:3000/users')
        .then((response) => {
            callback(response.data)
        })
        .catch((error) => {
            callback(error)
        })
    }
}

