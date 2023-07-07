import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentList = []

class Comments extends Component {
  state = {
    commentList: initialCommentList,
    name: '',
    comment: '',
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  onDelete = id => {
    const {commentList} = this.state
    const filteredList = commentList.filter(each => each.id !== id)
    this.setState({
      commentList: filteredList,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state
    return (
      <div className="background">
        <h1>Comments</h1>
        <div className="background1">
          <div className="background2">
            <p>Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment} className="form-background">
              <input
                type="text"
                value={name}
                onChange={this.onChangeName}
                className="input1"
                placeholder="Your Name"
              />

              <textarea
                className="input1"
                type="text"
                value={comment}
                onChange={this.onChangeComment}
                placeholder="Your Comment"
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <div className="background3">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
        </div>
        <hr className="line" />
        <p>
          <span>{commentList.length}</span> Comments
        </p>
        <ul>
          {commentList.map(each => (
            <CommentItem
              commentList={each}
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              toggleIsLiked={this.toggleIsLiked}
              key={each.id}
              onDelete={this.onDelete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
