new Vue({
    el: '#boardArea',
    data () {
        return {
            boards : []
        }
    },
    mounted () {
        axios
        .post('/getBoardList', "id")
        .then(response => {
            console.log("========= success =========");
            console.log(response);
            console.log("========= success =========");
            this.boards = response.data;
        })
        .catch(error => {
            console.log("========= error =========");
            console.log(error);
            console.log("========= error =========");
        })
//        .then(function(response) {
//            console.log("========= success =========");
//            console.log(response);
//            console.log("========= success =========");
//            this.boards = response.data;
//        })
//        .catch(function(error) {
//            console.log("========= error =========");
//            console.log(error);
//            console.log("========= error =========");
//        })
    }
})