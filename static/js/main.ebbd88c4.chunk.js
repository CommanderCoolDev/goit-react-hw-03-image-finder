(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(e,t,a){},29:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(26),a(16)),i=a(3),l=a(4),u=a(6),h=a(5),d=a(10);var m={fetchImg:function(e,t){var a="https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("23034123-dfb7a22dd10a0f412f945dcd2","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(t){return t.ok?t.json():Promise.reject(new Error("There is no images for ".concat(e)))}))}},j=(a(27),a(1)),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):Object(d.b)("Go clearly!")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:"Searchbar",children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Try me!"})}),Object(j.jsx)("input",{placeholder:"lets search smth....",className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.query,onChange:this.handleChange})]})})}}]),a}(n.Component),p=(a(29),document.querySelector("#modal-root")),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeydown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdrop=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(o.createPortal)(Object(j.jsx)("div",{onClick:this.handleBackdrop,className:"Overlay",children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:t,alt:a})})}),p)}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.largeImageURL,a=e.src,n=e.alt,r=this.state.showModal;return Object(j.jsxs)("li",{className:"ImageGalleryItem",children:[Object(j.jsx)("img",{onClick:this.toggleModal,alt:n,src:a,className:""}),r&&Object(j.jsx)(g,{onClose:this.toggleModal,src:t,alt:n})]})}}]),a}(n.Component);function O(e){var t=e.images;return Object(j.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(j.jsx)(f,{src:e.webformatURL,alt:e.tags,largeImageURL:e.largeImageURL},e.id)}))})}var y=a(20),v=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).scroll=function(){e.props.onClick(),y.animateScroll.scrollToBottom()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("button",{onClick:this.scroll,className:"Button",type:"button",children:"Load more"})}}]),a}(n.Component),x=a(21),w=a.n(x),S=(a(58),"idle"),k="pending",C="resolved",N="rejected",q=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",error:null,page:1,status:"idle",images:[]},e.handleFormSubmit=function(t){e.setState({query:t,page:1,images:[]})},e.renderImg=function(){var t=e.state,a=t.query,n=t.page;e.setState({status:k}),m.fetchImg(a,n).then((function(t){0!==t.hits.length?e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t.hits)),page:e.page+1,status:C}})):e.setState({error:new Error("No search results for ".concat(a)),status:N})})).catch((function(t){return e.setState({error:t,status:N})}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.renderImg()}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{onSubmit:this.handleFormSubmit}),Object(j.jsx)(d.a,{autoClose:4e3}),a===S&&Object(j.jsxs)("div",{className:"imgGreet",children:["Hello!",Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2016/03/31/15/04/alien-1292972_960_720.png",alt:""})]}),Object(j.jsx)(O,{images:this.state.images}),a===N&&Object(j.jsxs)("div",{className:"imgGreet",children:[t.message,Object(j.jsx)("img",{src:"https://cdn.pixabay.com/photo/2016/02/19/10/13/pug-1209129_960_720.jpg",alt:""})]}),a===k&&Object(j.jsx)(w.a,{type:"Puff",color:"#3fb566",height:100,width:200,timeout:3e3}),a===C&&Object(j.jsx)(v,{onClick:this.renderImg})]})}}]),a}(n.Component),I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,60)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),I()}},[[59,1,2]]]);
//# sourceMappingURL=main.ebbd88c4.chunk.js.map