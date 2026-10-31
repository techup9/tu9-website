import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import { posts } from './data/posts.js';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
      </Route>

      {/* Keep links to the old static pages working. */}
      <Route path="index.html" element={<Navigate to="/" replace />} />
      <Route path="blog.html" element={<Navigate to="/blog" replace />} />
      <Route path="blog-post-standard.html" element={<Navigate to={`/blog/${posts[0].slug}`} replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
