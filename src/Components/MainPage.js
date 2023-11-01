import "./MainPage.css";
import Post from "./Post";
import RecommendationComponent from "./RecommendationComponent";
import Sidebar from "./Sidebar";
import GlobalFooter from "./GlobalFooter";
import NewsFeed from "./NewsFeed";
import Header2 from "../Header2";
import Footer from "../Footer";

const MainPage = () => {
  return (
    <div className="page">
      <Header2 />
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
        <Footer />
      </div>
    </div>
  );
};

export default MainPage;
