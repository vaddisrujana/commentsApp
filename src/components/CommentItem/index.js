import './index.css'

const CommentItem = props => {
  const {
    commentList,
    initialContainerBackgroundClassNames,
    toggleIsLiked,
    onDelete,
  } = props
  const {name, comment, isLiked, id} = commentList
  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const onClickLike = () => {
    toggleIsLiked(id)
  }

  const deleteComment = () => {
    onDelete(id)
  }
  return (
    <li>
      <div className="back">
        <div className="back5">
          <div className="back1">
            <p className="badge">{name.slice(0, 1)}</p>
          </div>
          <div className="back2">
            <p>
              {name} <span className="span">less than a minute ago</span>
            </p>
            <p>{comment}</p>
          </div>
        </div>
        <div className="back6">
          <button
            type="button"
            className="back4"
            id="like"
            onClick={onClickLike}
          >
            <img src={likeImgUrl} className="like" alt="like" />
            <label htmlFor="like">like</label>
          </button>
          <button
            type="button"
            onClick={deleteComment}
            className="delete1"
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
