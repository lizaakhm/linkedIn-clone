import { Avatar } from "@mui/material";
import follobtn from "./followbutton.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import "./NewsFeed.css";
import chatsign from "./chatsign.svg";

const NewsFeed = ({ name, description, message, avatar }) => {
  return (
    <div className="feed">
      <div className="feed_header">
        <Avatar style={{ width: "63px", height: "63px" }} />
        <div className="feed_info">
          <h2>Anthony J Jackson</h2>
          <p className="user_prof">
            CEO, Innovation, Technology & Growth at Trinity Consulting
          </p>
        </div>
        <div className="icons">
          <div className="feed_icons">
            <MoreVertIcon
              style={{ fill: "#25314C", fontSize: "medium", cursor: "pointer" }}
            />
            <CloseIcon style={{ fontSize: "medium", cursor: "pointer" }} />
          </div>
          <img
            src={follobtn}
            alt="Btn"
            style={{ width: "90px", height: "33px", cursor: "pointer" }}
          />
        </div>
      </div>
      <p className="status_text">hihihihihihihihihihi</p>
      <div className="post_img"></div>
      <div className="comment">80 Comments</div>
      <div className="line"></div>
      <div className="comments">
        <img
          src={chatsign}
          alt="chatsign"
          style={{ width: "14px", height: "14px" }}
        />
        <p className="comment_p">Comment</p>
      </div>
    </div>
  );
};

export default NewsFeed;
