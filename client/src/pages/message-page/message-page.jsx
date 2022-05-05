import React from 'react';
import './message-page.css';
import NavbarComponent from '../../components/navbar/Navbar.component';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from '../../components/chat-feed/chat-feed';
import { useLocation,Redirect } from 'react-router';
function MessagePage(props) {
  const location = useLocation();
  if(!location.state||!location.state.user||!location.state.user.isAuthenticated){
    return <Redirect to="/signin" />;
  }
  const username=location.state.user.user.email;
  return (
    <div>
      <NavbarComponent/>
      <ChatEngine
        height="100vh"
        projectID="aaaf75bf-1492-46a8-9c36-f79e7f94ac01"
        userName={username}
        userSecret="111111"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default MessagePage;

// import React,{useEffect} from 'react';
// import { connect } from "react-redux";
// import './message-page.css';
// import NavbarComponent from '../../components/navbar/Navbar.component';
// import { getCurrentProfile } from "../../redux/profile/profile.actions";
// import Spinner from "../../components/spinner/Spinner.component";
// import Conversations from '../../components/conversations/conversations';

// const MessagePage=({
//   getCurrentProfile,
//   auth: { user },
//   profile: { profile, loading },
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   console.log(profile);
//   return (
//     <>
//       <NavbarComponent/>
//       {(loading && profile === null) || !user ? (
//         <div className="full-height-spinner">
//           <Spinner />
//         </div>
//       ) : (
//       <div className="messenger">
//       <div className="chatMenu">
//         <div className="chatMenuWrapper">
//           <input placeholder="Search for developers" className="chatMenuInput"/>
//           <Conversations profile={profile}/>
//           <Conversations profile={profile}/>
//           <Conversations profile={profile}/>
//           <Conversations profile={profile}/>
//           <Conversations profile={profile}/>
//         </div>
//       </div>
//       <div className="chatBox">
//         <div className="chatBoxWrapper">
//           <div className="chatBoxTop"></div>
//           <div className="chatBoxBottom"></div>
//         </div>
//       </div>
//       <div className="chatOnline">
//         <div className="chatOnlineWrapper">
//           online
//         </div>
//       </div>
//       </div>
//       )}
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   profile: state.profile,
// });

// export default connect(mapStateToProps, { getCurrentProfile })(MessagePage);