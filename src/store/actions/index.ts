// 定义如何改变 state 的对象

// Action Types
export const ADD_COMMENT = 'ADD_COMMENT';
export const LIKE_COMMENT = 'LIKE_COMMENT';
export const LIKE_POST = 'LIKE_POST';

// Action Creators
export const addComment = (postId:any, comment:any) => ({
    type: ADD_COMMENT,
    payload: { postId, comment }
});

export const likeComment = (postId:any, commentId:any) => ({
    type: LIKE_COMMENT,
    payload: { postId, commentId }
});

export const likePost = (postId:any) => ({
    type: LIKE_POST,
    payload: { postId }
});
