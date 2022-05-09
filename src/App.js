import React, {useState} from 'react';
import './styles/app.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput"
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "JavaScript",
            body: "lorem"
        },
        {
            id: 2,
            title: "JavaScript",
            body: "lorem"
        },
        {
            id: 3,
            title: "JavaScript",
            body: "lorem"
        }
    ])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{
                margin: "15px 0"
            }}/>
            <div>
                <MySelect

                    defaultValue="Сортировка"
                    options=[{
                    value: 1,
                    name: "name",
                }]
                />
            </div>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title="Список постов"/>
                :
                <h1 style={{textAlign: "center"}}>Посты не найдены</h1>

            }

        </div>
    );
}

export default App;
