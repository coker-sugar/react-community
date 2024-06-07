// postSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [
        {
            id: 101,
            title: "游戏中角色运动的一些问题（附代码）",
            content: "记录了以前学习游戏开发时遇到的一些角色运动问题和学到的解决方案，不保证这些解决方法是完美的，但希望能对你有所帮助~介绍了机器学习中的监督学习算法，包括线性回归、逻辑回归、决策树等，以及它们的应用场景。",
            time: "2024-5-24",
            author: "李小龙",
            img: "http://qwrfdf.png",
            comments: [
                {
                    commentId: 1,
                    commentContent: "非常有用的解决方案，感谢分享！",
                    commentators: "Alice",
                    commentTime: "2024-5-25",
                    likeComment: 10,
                    children: [
                        {
                            commentId: 2,
                            commentContent: "对于初学者来说，这是一篇很好的文章。",
                            commentators: "Henry",
                            commentTime: "2024-5-31",
                            likeComment: 11
                        },
                        {
                            commentId: 3,
                            commentContent: "解释得非常清楚，代码示例也很有帮助。",
                            commentators: "Eve",
                            commentTime: "2024-5-28",
                            likeComment: 15
                        }
                    ]
                },
                {
                    commentId: 4,
                    commentContent: "请问这些算法的实现代码有提供吗？",
                    commentators: "Bob",
                    commentTime: "2024-5-26",
                    likeComment: 5
                }
            ],
            commentCount: 2,
            likeCount: 30
        }
    ]
};

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addComment: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                post.comments.push(action.payload.comment);
                post.commentCount += 1;
            }
        },
        likeComment: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                const comment = post.comments.find(comment => comment.commentId === action.payload.commentId);
                if (comment) {
                    comment.likeComment += 1;
                }
            }
        },
        likePost: (state, action) => {
            const post = state.posts.find(post => post.id === action.payload.postId);
            if (post) {
                post.likeCount += 1;
            }
        }
    }
});

export const { addComment, likeComment, likePost } = postSlice.actions;
export default postSlice.reducer;
