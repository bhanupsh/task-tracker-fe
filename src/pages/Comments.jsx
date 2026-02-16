
import { useState, useEffect } from "react";
import { fetchAPI } from "../api/apiClient";


export default function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {       
        fetchAPI("/comments", {
        method: "GET",
        }).then((data) => {
            setComments(data.comments);
        }).catch((err) => {
            alert(err.message);
        });   
    }, []); // empty dependency array to run only once on mount

    

  return (
    <div>
      <h2>Comments</h2>
      {comments.length ? (  
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>{comment.text}</li>       
            ))} 
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  )
}
