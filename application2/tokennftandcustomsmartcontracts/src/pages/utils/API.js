import axios from "axios";

export default {
    
    //COMMENT CALLS  TO DB -------
    deleteComment: function (commentData) {
        return axios.post("/api/comment/deleteComment/" + commentData._id);
    },
    saveComment: function(commentData) {
        return axios.post("/api/comment/saveComment", commentData);
    },
    getComments: function() {
        return axios.get("/api/comment/getComments");
    }
};