import React from 'react'
import axios from 'axios'

// import {withRouter} from 'next/router'

// function Post(props) {
//     console.log(props.id)
//   return (
//     <div>
//       you are looking at post #{props.router.query.id}
//       {/* you are looking at post #{id} */}
//     </div>
//   )
// }

// export default withRouter(Post);

function Post({id, comments}) {
  return (
    <div>
      <h1>Comments for post #{id}</h1>
      {comments.map(comment => (
        // <h6 key = {comment.id}>{comment.body}</h6>
       <Comment {...comment} key={comment.id}/>
      ))}
    </div>
  )
}

const Comment = ({email, body}) => (
    <>
        <h6>{email}</h6>
        <p>{body}</p>
    </>
)
Post.getInitialProps = async({ query }) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
    const {data} = res;
    // console.log(data[0]);
    return {...query, comments: data};
}

export default Post;
