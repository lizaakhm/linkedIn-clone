import "./Post.css"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ImageIcon from '@mui/icons-material/Image';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

const Post = () => {
    const postAttachments = [
        {
            icon: <ImageIcon/>,
            text: "Photo"
        },
        {
            icon: <PlayCircleOutlineRoundedIcon/>,
            text: "Video"
        },
        {
            icon: <EditCalendarRoundedIcon/>,
            text: "Event"
        },
        {
            icon: <NewspaperRoundedIcon/>,
            text: "Write Article"
        },
    ]

    return ( 
        <div className="post">
            <AccountCircleRoundedIcon className="avatar" style={{width: "53px", height:"53px", borderRadius: "50%",}}/>
            <div className="post_input">  
                <input type="text" placeholder="Post something..." />
                <div className="input_additional_components">
                        {postAttachments.map((postAttach, index) => (
                    <div className="input_component" key={index}>
                        {postAttach.icon}
                        <p>{postAttach.text}</p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
     );
}
 
export default Post;
