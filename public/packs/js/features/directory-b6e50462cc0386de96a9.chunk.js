(window.webpackJsonp=window.webpackJsonp||[]).push([[455],{1132:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(1),i=a.n(o),l=a(2),c=a(7),r=a(39),n=a(82),d=a(3),h=a(11),m=a(137),p=a(116),u=a(149),b=a(240),g=a(249),v=a(150),O=a(1106),j=a(250),f=a(1111),C=a(4);const M=Object(c.d)({title:{id:"column.directory",defaultMessage:"Browse profiles"},recentlyActive:{id:"directory.recently_active",defaultMessage:"Recently active"},newArrivals:{id:"directory.new_arrivals",defaultMessage:"New arrivals"},local:{id:"directory.local",defaultMessage:"From {domain} only"},federated:{id:"directory.federated",defaultMessage:"From known fediverse"}});class y extends l.PureComponent{constructor(){super(...arguments),this.state={order:null,local:null},this.handlePin=()=>{const{columnId:e,dispatch:t}=this.props;t(e?Object(m.h)(e):Object(m.e)("DIRECTORY",this.getParams(this.props,this.state)))},this.getParams=(e,t)=>({order:null===t.order?e.params.order||"active":t.order,local:null===t.local?e.params.local||!1:t.local}),this.handleMove=e=>{const{columnId:t,dispatch:a}=this.props;a(Object(m.g)(t,e))},this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e},this.handleChangeOrder=e=>{const{dispatch:t,columnId:a}=this.props;a?t(Object(m.f)(a,["order"],e.target.value)):this.setState({order:e.target.value})},this.handleChangeLocal=e=>{const{dispatch:t,columnId:a}=this.props;a?t(Object(m.f)(a,["local"],"1"===e.target.value)):this.setState({local:"1"===e.target.value})},this.handleLoadMore=()=>{const{dispatch:e}=this.props;e(Object(p.g)(this.getParams(this.props,this.state)))}}componentDidMount(){const{dispatch:e}=this.props;e(Object(p.h)(this.getParams(this.props,this.state)))}componentDidUpdate(e,t){const{dispatch:a}=this.props,s=this.getParams(e,t),o=this.getParams(this.props,this.state);s.order===o.order&&s.local===o.local||a(Object(p.h)(o))}render(){const{isLoading:e,accountIds:t,intl:a,columnId:o,multiColumn:i,domain:l}=this.props,{order:c,local:r}=this.getParams(this.props,this.state),d=!!o,h=Object(s.a)("div",{className:"scrollable"},void 0,Object(s.a)("div",{className:"filter-form"},void 0,Object(s.a)("div",{className:"filter-form__column",role:"group"},void 0,Object(s.a)(O.a,{name:"order",value:"active",label:a.formatMessage(M.recentlyActive),checked:"active"===c,onChange:this.handleChangeOrder}),Object(s.a)(O.a,{name:"order",value:"new",label:a.formatMessage(M.newArrivals),checked:"new"===c,onChange:this.handleChangeOrder})),Object(s.a)("div",{className:"filter-form__column",role:"group"},void 0,Object(s.a)(O.a,{name:"local",value:"1",label:a.formatMessage(M.local,{domain:l}),checked:r,onChange:this.handleChangeLocal}),Object(s.a)(O.a,{name:"local",value:"0",label:a.formatMessage(M.federated),checked:!r,onChange:this.handleChangeLocal}))),Object(s.a)("div",{className:"directory__list"},void 0,e?Object(s.a)(v.a,{}):t.map((e=>Object(s.a)(f.a,{id:e},e)))),Object(s.a)(g.a,{onClick:this.handleLoadMore,visible:!e}));return Object(C.jsxs)(u.a,{bindToDocument:!i,ref:this.setRef,label:a.formatMessage(M.title),children:[Object(s.a)(b.a,{icon:"address-book-o",title:a.formatMessage(M.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:d,multiColumn:i}),i&&!d?Object(s.a)(j.a,{scrollKey:"directory"},void 0,h):h,Object(s.a)(n.a,{},void 0,Object(s.a)("title",{},void 0,a.formatMessage(M.title)),Object(s.a)("meta",{name:"robots",content:"noindex"}))]})}}y.contextTypes={router:i.a.object},t.default=Object(h.connect)((e=>({accountIds:e.getIn(["user_lists","directory","items"],Object(d.List)()),isLoading:e.getIn(["user_lists","directory","isLoading"],!0),domain:e.getIn(["meta","domain"])})))(Object(r.c)(y))}}]);
//# sourceMappingURL=directory-b6e50462cc0386de96a9.chunk.js.map