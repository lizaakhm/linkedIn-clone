import avatar from "./avatar.png";

const RecommendationComponent = () => {
    return ( 
        <div className="RecommendationComponent">
            <h3>Add to your feed</h3>
            <div className="profilestofollow">
                <div className="profiletofollow">
                    <div className="infoaboutprofile">
                        
                    </div>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
     );
}
 
export default RecommendationComponent;