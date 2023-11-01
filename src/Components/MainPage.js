import "./MainPage.css";
import Post from "./Post";
import RecommendationComponent from "./RecommendationComponent";
import Sidebar from "./Sidebar";
import GlobalFooter from "./GlobalFooter";
import NewsFeed from "./NewsFeed";

const MainPage = () => {
  return (
    <div className="page">
    <div className="main_page">
       <div className="main_page_sidebar">
      <Sidebar />
       </div>
      <div className="main">
        <Post />
        <NewsFeed />
      </div>
     <div className="main_page_right">
      <RecommendationComponent />
      </div>
    </div>
    <div className="footer">
      <GlobalFooter />
      </div>
    </div>
  );
};

export default MainPage;
