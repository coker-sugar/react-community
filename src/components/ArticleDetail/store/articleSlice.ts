import { createSlice } from '@reduxjs/toolkit';


const loadState = () => {
    try {
        const serializedState = localStorage.getItem('articleState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveState = (state:any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('articleState', serializedState);
    } catch (err) {
        // 忽略写入错误
    }
};

const initialState = loadState() ||  {
    article: {
        id: 101,
        title: "游戏中角色运动的一些问题（附代码）",
        content: "记录了以前学习游戏开发时遇到的一些角色运动问题和学到的解决方案，不保证这些解决方法是完美的，但希望能对你有所帮助~介绍了机器学习中的监督学习算法，包括线性回归、逻辑回归、决策树等，以及它们的应用场景。",
        time: "2024-5-24",
        author: "李小龙",
        img: "http://qwrfdf.png",
        comments: [
            {
                id:"101-1",
                commentContent: "非常有用的解决方案，感谢分享！",
                commentators: "Alice",
                commentTime: "2024-5-25",
                likeComment: 10,
                children: [
                    {
                        id: "101-1-1",
                        commentContent: "对于初学者来说，这是一篇很好的文章。",
                        commentators: "Henry",
                        commentTime: "2024-5-31",
                        likeComment: 11
                    },
                    {
                        id: "101-1-2",
                        commentContent: "解释得非常清楚，代码示例也很有帮助。",
                        commentators: "Eve",
                        commentTime: "2024-5-28",
                        likeComment: 15
                    }
                ]
            },
            {
                id:"101-2",
                commentContent: "请问这些算法的实现代码有提供吗？",
                commentators: "Bob",
                commentTime: "2024-5-26",
                likeComment: 5
            }
        ],
        commentCount: 2,
        likeCount: 30
    }
};

const addCommentToLevel = (commentArray:any, comment:any, targetId:string) => {
    for (const item of commentArray) {
        if (item.id === targetId) {
            if (!item.children) {
                item.children = [];
            }
            item.children.push(comment);
            item.commentCount += 1
            return true;
        }
    }
    return false;
};
const changeShow = (commentArray:any,  targetId:string) => {
    for (const item of commentArray) {
        if (item.id === targetId) {
            item.commentShow = !item.commentShow
            console.log(item.commentShow);
            return true;
        }
    }
    return false;
};


const changeLike = (commentArray:any,  targetId:string) => {
    for (const item of commentArray) {
        if (item.id === targetId) {
            if(item.commentLike == 'true') {
                item.commentLike = false
                item.likeComment -= 1
            } else {
                item.commentLike = true
                item.likeComment += 1
            }
            return true;
        }
    }
    return false;
};

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        addComment: (state, action) => {
            state.article.comments.push(action.payload);
            state.article.commentCount += 1;
            saveState(state);
        },
        addChildComment: (state, action) => {
            const { comment, targetId } = action.payload;
            addCommentToLevel(state.article.comments, comment, targetId);
            saveState(state);
        },
        changeCommentShow:(state, action) => {
            const targetId = action.payload;
            changeShow(state.article.comments,targetId);
            saveState(state);
        },
        changeCommentLike:(state, action) => {
            const targetId = action.payload;
            changeLike(state.article.comments,targetId);
            saveState(state);
        },

        
        setArticle: (state, action) => {
            state.article = action.payload;
            saveState(state);
        },
        
    }
});

export const { addComment,setArticle,addChildComment,changeCommentShow,changeCommentLike } = articleSlice.actions;
export default articleSlice.reducer;
