(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{3:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(8),c=n.n(o),s=n(10),i=n(4),l=n(5),u=n(7),h=n(6),m=(n(3),n(0)),g=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:" "},e.handleChange=function(t){var n=t.target;e.setState({inputValue:n.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchFormButton",children:Object(m.jsx)("span",{className:"SearchFormButtonLabel",children:"Search"})}),Object(m.jsx)("input",{className:"SearchFormInput",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})]})})}}]),n}(a.Component),d=function(e){var t=e.webformatURL,n=e.tags,a=e.largeImage;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,alt:n,className:"ImageGalleryItemImage",onClick:a})})},p=function(e){var t=e.images,n=e.onLargeImage;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,o=e.largeImageURL;return Object(m.jsx)(d,{webformatURL:a,tags:r,largeImage:function(){return n(o)}},t)}))})};window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});var j=function(e){var t=e.onButton;return Object(m.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},b=n(11),f=n.n(b),y=function(){return Object(m.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})},O=document.querySelector("#modal-root"),v=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)("div",{className:"Overlay",children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),O)}}]),n}(a.Component),S="https://pixabay.com/api/",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n={method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}},a="?q=".concat(e,"&page=").concat(t,"&key=17901819-89869377453f6777a0034661b&image_type=photo&orientation=horizontal&per_page=12");return fetch(S+a,{options:n}).then((function(e){return e.json().then((function(e){return e.hits}))}))},w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],loading:!1,error:null,largeImg:null,searchQuery:" ",page:1},e.fetchImagesByQuery=function(){var t=e.state,n=t.searchQuery,a=t.page;e.setState({loading:!0}),x(n,a).then((function(t){return e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t,page:1,images:[]})},e.setLargeImage=function(t){e.setState({largeImg:t})},e.closeModal=function(){e.setState({largeImg:null})},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImagesByQuery()}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.loading,a=e.error,r=e.largeImg;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{onSubmit:this.handleSearchFormSubmit}),a&&Object(m.jsxs)("p",{children:["Whoops, something went wrong: ",a.massage]}),t.length>0&&Object(m.jsx)(p,{images:t,onLargeImage:this.setLargeImage}),n&&Object(m.jsx)(y,{}),t.length>0&&!n&&Object(m.jsx)(j,{onButton:this.fetchImagesByQuery}),r&&Object(m.jsx)(v,{onClose:this.closeModal,children:Object(m.jsx)("img",{src:r,alt:""})})]})}}]),n}(a.Component);n(37);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.3cceff39.chunk.js.map