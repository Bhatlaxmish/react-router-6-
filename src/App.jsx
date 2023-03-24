import { RouterProvider, Route, Routes, BrowserRouter, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';/* instead of broweserRouter  routerprovider */

import BlogLayout from './pages/BlogLayout';
import BlogPostsPage ,{loader as blogpostloader} from './pages/BlogPosts';
import NewPostPage from './pages/NewPost';
import PostDetailPage from './pages/PostDetail';
import RootLayout from './components/RootLayout';
import WelcomePage from './pages/Welcome';


const router=createBrowserRouter(createRoutesFromElements(

<Route path='/' elements={<RootLayout/>}>
          <Route index element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogPostsPage />} loader={blogpostloader} />
            <Route path=":id" element={<PostDetailPage />} />
          </Route>
          <Route path="/blog/new" element={<NewPostPage />} />
        </Route>
));
function App() {
  return (
    <RouterProvider route={router}/>
   
  );
}

export default App;
