(this["webpackJsonpcodeial-final"]=this["webpackJsonpcodeial-final"]||[]).push([[0],{102:function(e,t){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),c=a.n(s),o=(a(65),a(3)),i=a(4),l=a(6),u=a(5),m=a(7),d=a(8),p=a(9),h="http://codeial.com:8000/api/v2",f=function(){return"".concat(h,"/users/login")},g=function(){return"".concat(h,"/users/signup")},v=function(){return"".concat(h,"/users/edit")},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;return"".concat(h,"/posts?page=").concat(e,"&limit=").concat(t)},b=function(e){return"".concat(h,"/users/").concat(e)},O=function(){return"".concat(h,"/friendship/fetch_user_friends")},S=function(e){return"".concat(h,"/friendship/create_friendship?user_id=").concat(e)},C=function(e){return"".concat(h,"/friendship/remove_friendship?user_id=").concat(e)},j=function(){return"".concat(h,"/posts/create")},_=function(){return"".concat(h,"/comments")},N=function(e,t){return"".concat(h,"/likes/toggle?likeable_id=").concat(e,"&likeable_type=").concat(t)},w=function(e){return"".concat(h,"/users/search?text=").concat(e)};function I(e){console.log("params",e);var t=[];for(var a in e){var n=encodeURIComponent(a),r=encodeURIComponent(e[a]);t.push(n+"="+r)}return console.log("formBody",t.join("&")),t.join("&")}function y(){return localStorage.getItem("token")}function k(){return function(e){var t=E();fetch(t).then((function(e){return e.json()})).then((function(t){console.log("data",t),e({type:"UPDATE_POSTS",posts:t.data.posts})}))}}function T(e,t,a,n){return function(r){var s=N(e,t);fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(s){console.log("Like data",s),s.success&&r("Post"===t?function(e,t){return{type:"UPDATE_POST_LIKES",postId:e,userId:t}}(e,a):function(e,t,a){return{type:"UPDATE_COMMENT_LIKES",commentId:e,userId:t,postId:a}}(e,a,n))}))}}var P=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.posts;return console.log("post ",this.props),r.a.createElement("div",{className:"posts-list"},r.a.createElement(ae,null),e.map((function(e){return r.a.createElement(re,{post:e,key:e._id})})))}}]),a}(n.Component);var U=Object(m.b)((function(e){return{posts:e.posts}}))(P);function A(e){return{type:"USER_SEARCH_RESULT_SUCCESS",users:e}}function L(e){return function(t){var a=w(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(e){console.log("Search data",e),e.success?t(A(e.data.users)):t(A([]))}))}}var R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).logOut=function(){localStorage.removeItem("token"),e.props.dispatch({type:"LOG_OUT"})},e.handleSearch=function(t){var a=t.target.value;e.props.dispatch(L(a))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.search.results;return r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"left-nav"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"https://ninjasfiles.s3.amazonaws.com/0000000000003454.png",alt:"logo"}))),r.a.createElement("div",{className:"search-container"},r.a.createElement("img",{className:"search-icon",src:"https://image.flaticon.com/icons/svg/483/483356.svg",alt:"search-icon"}),r.a.createElement("input",{placeholder:"Search",onChange:this.handleSearch}),a.length>0&&r.a.createElement("div",{className:"search-results"},r.a.createElement("ul",null,a.map((function(e){return r.a.createElement(p.b,{to:"/user/".concat(e._id)},r.a.createElement("li",{className:"search-results-row",key:e._id},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"}),r.a.createElement("span",null,e.name)))}))))),r.a.createElement("div",{className:"right-nav"},t.isLoggedIn&&r.a.createElement("div",{className:"user"},r.a.createElement(p.b,{to:"/settings"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp",id:"user-dp"})),r.a.createElement("span",null,t.user.name)),r.a.createElement("div",{className:"nav-links"},r.a.createElement("ul",null,!t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"LogIn")),t.isLoggedIn&&r.a.createElement("li",{onClick:this.logOut},"LogOut"),!t.isLoggedIn&&r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup"},"Register"))))))}}]),a}(r.a.Component);var F=Object(m.b)((function(e){return{auth:e.auth,search:e.search}}))(R),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.posts,a=e.friends,n=e.isLoggedIn;return console.log("props",this.props),r.a.createElement("div",{className:"home"},r.a.createElement(U,{posts:t}),n&&r.a.createElement(ee,{friends:a}),n&&r.a.createElement(de,null))}}]),a}(n.Component);var x=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"404:Nothing found here!"))},M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentWillUnmount=function(){n.props.dispatch({type:"CLEAR_AUTH_STATE"})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),console.log(n.state);var t=n.state,a=t.email,r=t.password;a&&r&&n.props.dispatch(function(e,t){return function(a){a({type:"LOGIN_START"});var n=f();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(console.log("data",e),e.success)return localStorage.setItem("token",e.data.token),void a((t=e.data.user,{type:"LOGIN_SUCCESS",user:t}));var t;a({type:"LOGIN_FAILED",error:e.message})}))}}(a,r))},n.state={email:"",password:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.error,a=e.inProgress,n=e.isLoggedIn,s=(this.props.location.state||{from:{pathname:"/"}}).from;return n?r.a.createElement(d.a,{to:s}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"},"Log In"),t&&r.a.createElement("div",{className:"alert error-dailog"},t),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:this.handleEmailChange,value:this.state.email})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:this.handlePasswordChange,value:this.state.password})),r.a.createElement("div",{className:"field"},a?r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Logging in..."):r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Log In")))}}]),a}(n.Component);var G=Object(m.b)((function(e){return{auth:e.auth}}))(M),H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).componentWillUnmount=function(){n.props.dispatch({type:"CLEAR_AUTH_STATE"})},n.handleUsernameChange=function(e){n.setState({name:e.target.value})},n.handleEmailChange=function(e){n.setState({email:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleConfirmPasswordChange=function(e){n.setState({confirmPassword:e.target.value})},n.handleFormSubmit=function(e){e.preventDefault(),console.log(n.state);var t=n.state,a=t.email,r=t.password,s=t.name,c=t.confirmPassword;a&&r&&s&&c&&n.props.dispatch(function(e,t,a,n){return function(r){r({type:"SIGNUP_START"}),console.log("hello");var s=g();console.log(s),fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:I({name:e,email:t,password:a,confirm_password:n})}).then((function(e){return e.json()})).then((function(e){if(console.log("signup data",e),e.success)return console.log("hello"),localStorage.setItem("token",e.data.token),void r((t=e.data.user,{type:"SIGNUP_SUCCESS",user:t}));var t;r({type:"SIGNUP_FAILED",error:e.message})}))}}(s,a,r,c))},n.state={name:"",email:"",password:"",confirmPassword:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.auth,t=e.error,a=e.inProgress;return e.isLoggedIn?r.a.createElement(d.a,{to:"/"}):r.a.createElement("form",{className:"login-form"},r.a.createElement("span",{className:"login-signup-header"},"Sign Up"),t&&r.a.createElement("div",{className:"alert error-dailog"},t),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"text",placeholder:"name",required:!0,onChange:this.handleUsernameChange,value:this.state.name})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:this.handleEmailChange,value:this.state.email})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:this.handlePasswordChange,value:this.state.password})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"password",placeholder:"Confirm-Password",required:!0,onChange:this.handleConfirmPasswordChange,value:this.state.confirmPassword})),r.a.createElement("div",{className:"field"},r.a.createElement("button",{onClick:this.handleFormSubmit,disabled:a},"Sign Up")))}}]),a}(n.Component);var B=Object(m.b)((function(e){return{auth:e.auth}}))(H),z=a(27),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e,t){n.setState(Object(z.a)({},e,t))},n.handleUpdate=function(){var e=n.state,t=e.name,a=e.password,r=e.confirmPassword,s=n.props.auth.user;n.props.dispatch(function(e,t,a,n){return function(r){var s=v();fetch(s,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:I({name:e,password:t,confirm_password:a,id:n})}).then((function(e){return e.json()})).then((function(e){(console.log("EDIT PROFILE data",e),e.success&&(r({type:"EDIT_USER_SUCCESSFUL",user:e.data.user}),e.data.token))?localStorage.setItem("token",e.data.token):r({type:"EDIT_USER_FAILED",error:e.message})}))}}(t,a,r,s._id))},n.componentWillUnmount=function(){n.props.dispatch({type:"CLEAR_AUTH_STATE"})},n.state={name:e.auth.user.name,password:"",confirmPassword:"",editMode:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.auth,a=t.user,n=t.error,s=this.state.editMode;return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"})),n&&r.a.createElement("div",{className:"alert error-dailog"},n),!1===n&&r.a.createElement("div",{className:"alert success-dailog"},"Profile Successfully Updated"),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},a.email)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),s?r.a.createElement("input",{type:"text",onChange:function(t){return e.handleChange("name",t.target.value)},value:this.state.name}):r.a.createElement("div",{className:"field-value"},a.name)),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"New Password"),r.a.createElement("input",{type:"password",placeholder:"password",onChange:function(t){return e.handleChange("password",t.target.value)},value:this.state.password})),s&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Confirm Password"),r.a.createElement("input",{type:"password",placeholder:"Confirm password",onChange:function(t){return e.handleChange("confirmPassword",t.target.value)},value:this.state.confirmPassword})),r.a.createElement("div",{className:"btn-grp"},s?r.a.createElement("button",{className:"button save-btn",onClick:this.handleUpdate},"Save"):r.a.createElement("button",{className:"button save-btn",onClick:function(){return e.handleChange("editMode",!0)}},"Edit Profile"),s&&r.a.createElement("div",{className:"go-back",onClick:function(){return e.handleChange("editMode",!1)}},"Go Back")))}}]),a}(r.a.Component);var q=Object(m.b)((function(e){return{auth:e.auth}}))(K),W=a(20),J=a.n(W),V=a(38);function Q(e){return function(t){t({type:"FETCH_USER_PROFILE"});var a=b(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(e){(console.log("fetch PROFILE data",e),e.success)?t({type:"USER_PROFILE_SUCCESS",user:e.data.user}):t({type:"USER_PROFILE_FAILURE",error:e.message})}))}}function X(e){return{type:"REMOVE_FRIEND",userId:e}}var Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).checkFriendOfUser=function(){var e=n.props.friends,t=n.props.match.params.userId;return-1!==e.map((function(e){return e.to_user._id})).indexOf(t)},n.handleAddFriend=Object(V.a)(J.a.mark((function e(){var t,a,r,s,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.userId,console.log("userId",t),a=S(t),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}},e.next=6,fetch(a,r);case 6:return s=e.sent,e.next=9,s.json();case 9:c=e.sent,console.log("url",a,c),c.success?(console.log("add friends",c),n.setState({success:!0,successMsg:"Added friend Successfully!"}),n.props.dispatch({type:"ADD_FRIEND",friend:c.data.friendship})):(console.log("error in add frnd",c),n.setState({success:null,error:c.message}));case 12:case"end":return e.stop()}}),e)}))),n.handleRemoveFriend=Object(V.a)(J.a.mark((function e(){var t,a,r,s,c;return J.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.match.params.userId,a=C(t),r={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}},e.next=5,fetch(a,r);case 5:return s=e.sent,e.next=8,s.json();case 8:c=e.sent,console.log("remove frnd",c),c.success?(n.setState({success:!0,successMsg:"removed friend Successfully"}),n.props.dispatch(X(t))):n.setState({success:null,error:c.message});case 11:case"end":return e.stop()}}),e)}))),n.state={success:null,error:null,successMsg:null},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match;e.params.userId&&this.props.dispatch(Q(e.params.userId))}},{key:"componentDidUpdate",value:function(e){var t=e.match.params,a=this.props.match.params;t&&a&&t.userId!==a.userId&&this.props.dispatch(Q(a.userId))}},{key:"render",value:function(){var e=this.props,t=e.match.params,a=e.profile,n=a.user;console.log("userProfile",this.props),console.log("userProfile props",t);var s=this.state,c=s.success,o=s.error,i=s.successMsg,l=this.checkFriendOfUser();return a.inProgress?r.a.createElement("h1",null,"Loading!"):r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-dp"})),c&&r.a.createElement("div",{className:"alert success-dailog"},i),o&&r.a.createElement("div",{className:"alert error-dailog"},o),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Name"),r.a.createElement("div",{className:"field-value"},n.name)),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"field-label"},"Email"),r.a.createElement("div",{className:"field-value"},n.email)),r.a.createElement("div",{className:"btn-grp"},!l&&r.a.createElement("button",{className:"button save-btn",onClick:this.handleAddFriend},"Add Friend"),l&&r.a.createElement("button",{className:"button save-btn",onClick:this.handleRemoveFriend},"Remove Friend")))}}]),a}(r.a.Component);var Z=Object(m.b)((function(e){return{profile:e.profile,friends:e.friends}}))(Y);var $=function(e){return r.a.createElement("div",null,r.a.createElement(p.b,{className:"friends-item",to:"user/".concat(e.friend._id)},r.a.createElement("div",{className:"friends-img"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})),r.a.createElement("div",{className:"friends-name"},e.friend.email)))},ee=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.friends;return r.a.createElement("div",{className:"friends-list"},r.a.createElement("div",{className:"header"},"Friends"),e&&0===e.length&&r.a.createElement("div",{className:"no-friends"},"No friends found!"),e&&e.map((function(e){return r.a.createElement($,{friend:e.to_user,key:e._id})})))}}]),a}(r.a.Component),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({content:e.target.value})},n.handleAddPost=function(){var e;n.props.dispatch((e=n.state.content,function(t){var a=j();fetch(a,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:I({content:e})}).then((function(e){return e.json()})).then((function(e){console.log("create Post",e),e.success&&t({type:"ADD_POST",post:e.data.post})}))})),n.setState({content:""})},n.state={content:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"create-post"},r.a.createElement("textarea",{className:"add-post",value:this.state.content,onChange:this.handleChange}),r.a.createElement("div",null,r.a.createElement("button",{id:"add-post-btn",onClick:this.handleAddPost},"Add Post")))}}]),a}(r.a.Component),ae=Object(m.b)()(te),ne=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({comment:e.target.value})},n.handleKeyDown=function(e){var t,a,r=n.props.post,s=n.state.comment;"Enter"===e.key&&(n.props.dispatch((t=s,a=r._id,function(e){var n=_();fetch(n,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())},body:I({post_id:a,content:t})}).then((function(e){return e.json()})).then((function(t){console.log("create Comment",t),t.success&&e(function(e,t){return{type:"ADD_COMMENT",comment:e,postId:t}}(t.data.comment,a))}))})),n.setState({comment:""}))},n.handleAddLike=function(){var e=n.props,t=e.post,a=e.user;n.props.dispatch(T(t._id,"Post",a._id))},n.state={comment:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.post,a=e.user,n=t.likes.includes(a._id);return r.a.createElement("div",{className:"post-wrapper",key:t._id},r.a.createElement("div",{className:"post-header"},r.a.createElement("div",{className:"post-avatar"},r.a.createElement(p.b,{to:"/user/".concat(t.user._id)},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2154/2154651.svg",alt:"user-pic"})),r.a.createElement("div",null,r.a.createElement("span",{className:"post-author"},t.user.name),r.a.createElement("span",{className:"post-time"},"a minute ago"))),r.a.createElement("div",{className:"post-content"},t.content),r.a.createElement("div",{className:"post-actions"},r.a.createElement("button",{className:"post-like no-btn",onClick:this.handleAddLike},n?r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1076/1076984.svg",alt:"like post"}):r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1077/1077035.svg",alt:"likes-icon"}),r.a.createElement("span",null,t.likes.length)),r.a.createElement("div",{className:"post-comments-icon"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1380/1380338.svg",alt:"comments-icon"}),r.a.createElement("span",null,t.comments.length))),r.a.createElement("div",{className:"post-comment-box"},r.a.createElement("input",{placeholder:"Start typing a comment",onChange:this.handleChange,onKeyDown:this.handleKeyDown,value:this.state.comment})),r.a.createElement("div",{className:"post-comments-list"},t.comments.map((function(e){return r.a.createElement(ce,{postId:t._id,comment:e,key:e._id})})))))}}]),a}(r.a.Component);var re=Object(m.b)((function(e){return{user:e.auth.user}}))(ne),se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).handleAddCommentLike=function(){var t=e.props,a=t.comment,n=t.user,r=t.postId;e.props.dispatch(T(a._id,"Comment",n._id,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.comment;return r.a.createElement("div",{className:"post-comment-item"},r.a.createElement("div",{className:"post-comment-header"},r.a.createElement("span",{className:"post-comment-author"},e.user.name),r.a.createElement("span",{className:"post-comment-time"},e.createdAt),r.a.createElement("span",{className:"post-comment-likes"},e.likes.length,r.a.createElement("button",{className:" no-btn",onClick:this.handleAddCommentLike},"likes"))),r.a.createElement("div",{className:"post-comment-content"},e.content))}}]),a}(r.a.Component);var ce=Object(m.b)((function(e){return{user:e.auth.user}}))(se),oe=a(14),ie=a(26),le=(a(72),a(56)),ue=a.n(le),me=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setupConnections=function(){var e=n.socket,t=Object(ie.a)(n);n.socket.on("connect",(function(){console.log("CONNECTION ESTABLISHED"),e.emit("join_room",{user_email:this.userEmail,chatroom:"codeial"}),e.on("user_joined",(function(e){}))})),n.socket.on("receive_message",(function(e){var a=t.state.messages,n={};n.content=e.message,e.user_email===t.userEmail&&(n.self=!0),t.setState({messages:[].concat(Object(oe.a)(a),[n]),typedMessage:""})}))},n.handleSubmit=function(){var e=n.state.typedMessage;e&&n.userEmail&&n.socket.emit("send_message",{message:e,user_email:n.userEmail,chatroom:"codeial"})},n.toggleClass=function(){var e=n.state.open;n.setState({open:!e})},n.state={messages:[],typedMessage:"",open:!0},n.socket=ue.a.connect("http://54.237.158.65:5000"),n.userEmail=e.user.email,n.userEmail&&n.setupConnections(),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.messages,n=t.typedMessage;return r.a.createElement("div",{className:this.state.open?"chat-container open":"chat-container close"},r.a.createElement("div",{className:"chat-header"},"Chat",this.state.open?r.a.createElement("img",{src:"https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png",alt:"",height:17,onClick:this.toggleClass}):r.a.createElement("img",{src:"https://www.iconsdb.com/icons/preview/white/plus-5-xxl.png",alt:"",height:17,onClick:this.toggleClass})),r.a.createElement("div",{className:"chat-messages"},a.map((function(e){return r.a.createElement("div",{className:e.self?"chat-buuble self-chat":"chat-bubble other-chat"},e.content)}))),r.a.createElement("div",{className:"chat-footer"},r.a.createElement("input",{type:"text",value:n,onChange:function(t){return e.setState({typedMessage:t.target.value})}}),r.a.createElement("button",{onClick:this.handleSubmit},"Submit")))}}]),a}(n.Component);var de=Object(m.b)((function(e){return{user:e.auth.user}}))(me),pe=a(57),he=function(e){var t=e.path,a=e.isLoggedIn,n=e.component;return r.a.createElement(d.b,{path:t,render:function(e){return a?r.a.createElement(n,e):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}})},fe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(k());var e,t=localStorage.token;if(t){var a=pe(t);console.log("user",a),this.props.dispatch(function(e){return{type:"AUTHENTICATE_USER",user:e}}({_id:a._id,name:a.name,email:a.email})),this.props.dispatch((e=a._id,function(t){var a=O(e);fetch(a,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer ".concat(y())}}).then((function(e){return e.json()})).then((function(e){console.log("friends data",e),e.success?t({type:"FETCH_FRIENDS_SUCCESS",friends:e.data.friends}):t({type:"FETCH_FRIENDS_FAILURE",error:e.message})}))}))}}},{key:"render",value:function(){var e=this.props,t=e.posts,a=e.auth,n=e.friends;return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(F,null)),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(D,Object.assign({},e,{posts:t,friends:n,isLoggedIn:a.isLoggedIn}))}}),r.a.createElement(d.b,{path:"/login",component:G}),r.a.createElement(d.b,{path:"/signup",component:B}),r.a.createElement(he,{path:"/settings",component:q,isLoggedIn:a.isLoggedIn}),r.a.createElement(he,{path:"/user/:userId",component:Z,isLoggedIn:a.isLoggedIn}),r.a.createElement(d.b,{component:x})))}}]),a}(r.a.Component);var ge=Object(m.b)((function(e){return{posts:e.posts,auth:e.auth,friends:e.friends}}))(fe),ve=a(16),Ee=a(58),be=a(1);var Oe={user:{},isLoggedIn:!1,inProgress:!1,error:null};var Se={user:{},inProgress:!1,error:null,success:null};var Ce=[];var je={results:[]};var _e=Object(ve.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_POSTS":return t.posts;case"ADD_POST":return[t.post].concat(Object(oe.a)(e));case"ADD_COMMENT":var a=e.map((function(e){return e._id===t.postId?Object(be.a)(Object(be.a)({},e),{},{comments:[t.comment].concat(Object(oe.a)(e.comments))}):e}));return a;case"UPDATE_POST_LIKES":var n=e.map((function(e){return e._id===t.postId?Object(be.a)(Object(be.a)({},e),{},{likes:[].concat(Object(oe.a)(e.likes),[t.userId])}):e}));return n;case"UPDATE_COMMENT_LIKES":var r=e.map((function(e){if(e._id===t.postId){var a=e.comments.map((function(e){return e._id===t.commentId?Object(be.a)(Object(be.a)({},e),{},{likes:[].concat(Object(oe.a)(e.likes),[t.userId])}):e}));return Object(be.a)(Object(be.a)({},e),{},{comments:Object(oe.a)(a)})}return e}));return r;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_START":case"SIGNUP_START":return Object(be.a)(Object(be.a)({},e),{},{inProgress:!0});case"LOGIN_SUCCESS":case"SIGNUP_SUCCESS":return Object(be.a)(Object(be.a)({},e),{},{user:t.user,isLoggedIn:!0,inProgress:!1,error:null});case"LOGIN_FAILED":case"SIGNUP_FAILED":return Object(be.a)(Object(be.a)({},e),{},{inProgress:!1,error:t.error});case"AUTHENTICATE_USER":return Object(be.a)(Object(be.a)({},e),{},{isLoggedIn:!0,user:t.user});case"LOG_OUT":return Object(be.a)(Object(be.a)({},e),{},{user:{},isLoggedIn:!1});case"CLEAR_AUTH_STATE":return Object(be.a)(Object(be.a)({},e),{},{error:null});case"EDIT_USER_SUCCESSFUL":return Object(be.a)(Object(be.a)({},e),{},{user:t.user,error:!1});case"EDIT_USER_FAILED":return Object(be.a)(Object(be.a)({},e),{},{error:t.error});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_PROFILE_SUCCESS":return Object(be.a)(Object(be.a)({},e),{},{inProgress:!1,user:t.user,success:!0});case"USER_PROFILE_FAILURE":return Object(be.a)(Object(be.a)({},e),{},{inProgress:!1,error:t.error});case"FETCH_USER_PROFILE":return Object(be.a)(Object(be.a)({},e),{},{inProgress:!0});default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FRIENDS_SUCCESS":return Object(oe.a)(t.friends);case"FETCH_FRIENDS_FAILURE":return t.error;case"ADD_FRIEND":return e.concat(t.friend);case"REMOVE_FRIEND":var a=e.filter((function(e){return e.to_user._id!==t.userId}));return a;default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_SEARCH_RESULT_SUCCESS":return Object(be.a)(Object(be.a)({},e),{},{results:t.users});default:return e}}}),Ne=a(59),we=a.n(Ne);var Ie=Object(ve.d)(_e,Object(ve.a)(Ee.a,we.a));console.log("store",Ie.getState()),c.a.render(r.a.createElement(m.a,{store:Ie},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null))),document.getElementById("root"))},60:function(e,t,a){e.exports=a(107)},65:function(e,t,a){},72:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.7f6ce7d4.chunk.js.map