(window.webpackJsonp=window.webpackJsonp||[]).push([[477],{1128:function(t,e,a){"use strict";a.r(e);var i=a(0),c=a(2),s=a(7),o=a(19),d=a(39),l=a(82),n=a(6),p=a(149),r=a(64);const u=Object(s.d)({title:{id:"privacy_policy.title",defaultMessage:"Privacy Policy"}});class b extends c.PureComponent{constructor(){super(...arguments),this.state={content:null,lastUpdated:null,isLoading:!0}}componentDidMount(){Object(n.a)().get("/api/v1/instance/privacy_policy").then((t=>{let{data:e}=t;this.setState({content:e.content,lastUpdated:e.updated_at,isLoading:!1})})).catch((()=>{this.setState({isLoading:!1})}))}render(){const{intl:t,multiColumn:e}=this.props,{isLoading:a,content:c,lastUpdated:d}=this.state;return Object(i.a)(p.a,{bindToDocument:!e,label:t.formatMessage(u.title)},void 0,Object(i.a)("div",{className:"scrollable privacy-policy"},void 0,Object(i.a)("div",{className:"column-title"},void 0,Object(i.a)("h3",{},void 0,Object(i.a)(o.a,{id:"privacy_policy.title",defaultMessage:"Privacy Policy"})),Object(i.a)("p",{},void 0,Object(i.a)(o.a,{id:"privacy_policy.last_updated",defaultMessage:"Last updated {date}",values:{date:a?Object(i.a)(r.a,{width:"10ch"}):Object(i.a)(s.a,{value:d,year:"numeric",month:"short",day:"2-digit"})}}))),Object(i.a)("div",{className:"privacy-policy__body prose",dangerouslySetInnerHTML:{__html:c}})),Object(i.a)(l.a,{},void 0,Object(i.a)("title",{},void 0,t.formatMessage(u.title)),Object(i.a)("meta",{name:"robots",content:"all"})))}}e.default=Object(d.c)(b)}}]);
//# sourceMappingURL=privacy_policy-890a117b25f8c42f0517.chunk.js.map