(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(25)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(9),r=n.n(o),c=n(10),i=n(2),m=n(3),l=n(5),u=n(4),d=n(6),p=n(1),h=n.n(p),f=n(11),b=n(7),E=(n(19),n(20),function(e){return s.a.createElement("div",{className:"post_comment"},s.a.createElement("p",{className:"post__comment-body"},e.comment.body),s.a.createElement("p",{className:"post__comment-author"},s.a.createElement("span",null,e.comment.name),s.a.createElement("span",null,e.comment.email)))}),v=(n(21),function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={commentLoaded:!1},n.handleShowComments=function(){n.setState(function(e){return{commentLoaded:!e.commentLoaded}})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.comments,t=this.state.commentLoaded&&e.map(function(e){return s.a.createElement(E,{key:e.id,comment:e})});return s.a.createElement("div",{className:"post__comment-list"},s.a.createElement("div",{className:"post__comment-list-header"},s.a.createElement("h4",null,"Comments"),s.a.createElement("button",{type:"button",name:"isLoadComments",className:"comments_button",onClick:this.handleShowComments},"Show Comments")),t)}}]),t}(s.a.Component)),C=(n(22),function(e){var t=Object.values(e.user.address).filter(function(e){return"object"!==typeof e}).join(", ");return s.a.createElement("p",{className:"post___author"},s.a.createElement("span",null,e.user.username),s.a.createElement("span",null,e.user.email),s.a.createElement("span",null,t))}),y=(n(23),function(e){return s.a.createElement("section",{className:"post"},s.a.createElement("h3",{className:"post__header"},e.post.title),s.a.createElement("div",{className:"post__content-wrapper"},s.a.createElement("p",{className:"post__body"},e.post.body),s.a.createElement(C,{key:e.post.user.id,user:e.post.user}),s.a.createElement(v,{comments:e.post.postComments})))}),j=(n(24),function(e){var t=e.isLoaded||s.a.createElement("button",{type:"button",className:"button",onClick:e.handleClick},e.isLoading?"Loaidng...":"Load Posts"),n=e.isLoaded&&e.postWithUsersAndComments.map(function(e){return s.a.createElement(y,{key:e.id,post:e})}),a=e.isLoaded&&s.a.createElement("input",{className:"post__filter",type:"text",placeholder:"filter by title or posts text",onChange:e.handlePostFilter,value:e.filterValue});return s.a.createElement("div",{className:"post-list"},s.a.createElement("h1",null,"Dynamic list of posts"),t,a,n)}),_=function(){var e=Object(b.a)(h.a.mark(function e(){var t,n,a,s,o,r,c,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://jsonplaceholder.typicode.com",e.next=3,fetch("".concat(t,"/posts"));case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.next=9,fetch("".concat(t,"/users"));case 9:return s=e.sent,e.next=12,s.json();case 12:return o=e.sent,e.next=15,fetch("".concat(t,"/comments"));case 15:return r=e.sent,e.next=18,r.json();case 18:return c=e.sent,i=a.map(function(e){return Object(f.a)({},e,{user:o.find(function(t){return t.id===e.userId}),postComments:c.filter(function(t){return t.postId===e.id})})}),e.abrupt("return",i);case 21:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),L=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={postWithUsersAndComments:[],postWithUsersAndCommentsOrigin:[],isLoading:!1,isLoaded:!1,filterValue:""},n.handleClick=Object(b.a)(h.a.mark(function e(){var t;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,_();case 3:t=e.sent,n.setState({postWithUsersAndComments:t,postWithUsersAndCommentsOrigin:t,isLoading:!1,isLoaded:!0});case 5:case"end":return e.stop()}},e)})),n.handlePostFilter=function(e){var t=e.target.value;n.setState({filterValue:t}),n.setState(function(e){return{postWithUsersAndComments:Object(c.a)(e.postWithUsersAndCommentsOrigin).filter(function(e){return[e.title,e.body].join(" ").includes(t)})}})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(j,{postWithUsersAndComments:this.state.postWithUsersAndComments,isLoading:this.state.isLoading,isLoaded:this.state.isLoaded,handleClick:this.handleClick,handlePostFilter:this.handlePostFilter,filterValue:this.state.filterValue}))}}]),t}(s.a.Component);r.a.render(s.a.createElement(L,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.995124c5.chunk.js.map