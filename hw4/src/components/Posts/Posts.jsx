import React, {useState} from "react";
import axios from "axios";
import Loader from "../Loader/Loader";


const PostsList = () => {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showForm, setShowForm] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [errors, setErrors] = React.useState({});
  const [submitting, setSubmitting] = React.useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const result = await axios.get(
        "https://dummyjson.com/posts"
      );

      setPosts(result.data.posts);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Заголовок не может быть пустым";
    }

    if (!body.trim()) {
      newErrors.body = "Текст поста не может быть пустым";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const submit_fn = async () => {
    if (!validate()) return;

    try {
      setSubmitting(true);

      const result = await axios.post(
        "https://dummyjson.com/posts/add",
        {
          title,
          body,
          userId: 1,
        }
      );

      const newPost = {
        ...result.data,
        id: Date.now(),
      };

      setPosts((prev) => [newPost, ...prev]);

      setTitle("");
      setBody("");
      setErrors({});
      setShowForm(false);

      alert("Пост успешно добавлен!");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const delete_fn = (id) => {
    setPosts((prev) =>
      prev.filter((post) => post.id !== id)
    );
  };

  const deleteAllPosts = () => {
    const confirmDelete = window.confirm(
      "Удалить все посты?"
    );

    if (confirmDelete) {
      setPosts([]);
    }
  };

  return (
    <div>
      <button onClick={fetchPosts}>
        Показать посты
      </button>

      <button onClick={deleteAllPosts}>
        Удалить все посты
      </button>

      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Скрыть форму" : "Добавить пост"}
      </button>

      {showForm && (
        <div>
          <h3>Новый пост</h3>

          <div>
            <input
              type="text"
              placeholder="Заголовок"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            {errors.title && (
              <p style={{ color: "red" }}>
                {errors.title}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Текст поста"
              value={body}
              onChange={(e) =>
                setBody(e.target.value)
              }
            />

            {errors.body && (
              <p style={{ color: "red" }}>
                {errors.body}
              </p>
            )}
          </div>

          <button
            onClick={submit_fn}
            disabled={submitting}
          >
            {submitting
              ? "Отправка..."
              : "Отправить"}
          </button>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>

              <button
                onClick={() =>
                  delete_fn(post.id)
                }
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostsList;