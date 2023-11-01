import { Avatar } from "@mui/material";
import follobtn from "./followbutton.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import "./NewsFeed.css";

const NewsFeed = ({ name, description, message, avatar }) => {
  return (
    <div className="feed">
      <div className="feed_header">
        <Avatar style={{ width: "63px", height: "63px" }} />
        <div className="feed_info">
          <h2>Anthony J Jackson</h2>
          <p>CEO, Innovation, Technology & Growth at Trin</p>
          <p>5 d.</p>
        </div>
        <div className="icons">
          <div className="feed_icons">
            <MoreVertIcon style={{ fill: "#25314C", fontSize: "medium" }} />
            <CloseIcon style={{ fontSize: "medium" }} />
          </div>
          <img
            src={follobtn}
            alt="Btn"
            style={{ width: "90px", height: "33px", cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="feed_body">
        <p>
          Smart innovation in Taiwan - Gogoro technology electric scooter
          battery swap solutions make urban sustainability possible.
        </p>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default NewsFeed;
