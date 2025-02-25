import React, { useState } from "react";
import styled from "styled-components";
import CommentItem from "../ui/Detail/CommentItem";

const Wrap = styled.div`
  margin: 4px 0;
`;

const StyledCommentItem = styled(CommentItem)`
  &:last-child ${CommentItem.WrappedComponent} {
    border-bottom: none;
  }
`;

function CommentList(props) {
  const { comments } = props;
  const [likedComments, setLikedComments] = useState([]);

  const handleLikeClick = (commentId) => {
    setLikedComments((prev) =>
      prev.includes(commentId)
        ? prev.filter((id) => id !== commentId)
        : [...prev, commentId]
    );
  };

  return (
    <Wrap>
      {comments.map((comment, index) => {
        return (
          <StyledCommentItem
            key={comment.id}
            comment={comment}
            selected={likedComments.includes(comment.id)}
            onLikeClick={() => handleLikeClick(comment.id)}
          />
        );
      })}
    </Wrap>
  );
}

export default CommentList;
