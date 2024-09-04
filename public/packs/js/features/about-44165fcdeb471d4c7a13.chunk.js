(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{1137:function(e,a,t){"use strict";t.r(a);var s=t(0),o=t(2),i=t(7),n=t(19),d=t(39),c=t(9),l=t.n(c),b=t(82),r=t(3),m=t(11),u=t(49),v=t(149),p=t(15),h=t(357),j=t(63),O=t(242),_=t(257),g=t(4);const f=Object(i.d)({title:{id:"column.about",defaultMessage:"About"},rules:{id:"about.rules",defaultMessage:"Server rules"},blocks:{id:"about.blocks",defaultMessage:"Moderated servers"},silenced:{id:"about.domain_blocks.silenced.title",defaultMessage:"Limited"},silencedExplanation:{id:"about.domain_blocks.silenced.explanation",defaultMessage:"You will generally not see profiles and content from this server, unless you explicitly look it up or opt into it by following."},suspended:{id:"about.domain_blocks.suspended.title",defaultMessage:"Suspended"},suspendedExplanation:{id:"about.domain_blocks.suspended.explanation",defaultMessage:"No data from this server will be processed, stored or exchanged, making any interaction or communication with users from this server impossible."}}),M={silence:{title:f.silenced,explanation:f.silencedExplanation},suspend:{title:f.suspended,explanation:f.suspendedExplanation}};class k extends o.PureComponent{constructor(){super(...arguments),this.state={collapsed:!this.props.open},this.handleClick=()=>{const{onOpen:e}=this.props,{collapsed:a}=this.state;this.setState({collapsed:!a},(()=>e&&e()))}}render(){const{title:e,children:a}=this.props,{collapsed:t}=this.state;return Object(s.a)("div",{className:l()("about__section",{active:!t})},void 0,Object(s.a)("div",{className:"about__section__title",role:"button",tabIndex:0,onClick:this.handleClick},void 0,Object(s.a)(p.a,{id:t?"chevron-right":"chevron-down",fixedWidth:!0})," ",e),!t&&Object(s.a)("div",{className:"about__section__body"},void 0,a))}}class w extends o.PureComponent{constructor(){super(...arguments),this.handleDomainBlocksOpen=()=>{const{dispatch:e}=this.props;e(Object(u.m)())}}componentDidMount(){const{dispatch:e}=this.props;e(Object(u.o)()),e(Object(u.n)())}render(){var e,a;const{multiColumn:t,intl:o,server:i,extendedDescription:d,domainBlocks:c}=this.props,l=i.get("isLoading");return Object(s.a)(v.a,{bindToDocument:!t,label:o.formatMessage(f.title)},void 0,Object(s.a)("div",{className:"scrollable about"},void 0,Object(s.a)("div",{className:"about__header"},void 0,Object(s.a)(h.a,{blurhash:i.getIn(["thumbnail","blurhash"]),src:i.getIn(["thumbnail","url"]),srcSet:null==(e=i.getIn(["thumbnail","versions"]))?void 0:e.map(((e,a)=>`${e} ${a.replace("@","")}`)).join(", "),className:"about__header__hero"}),Object(s.a)("h1",{},void 0,l?Object(s.a)(j.a,{width:"10ch"}):i.get("domain")),Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.powered_by",defaultMessage:"Decentralized social media powered by {mastodon}",values:{mastodon:Object(s.a)("a",{href:"https://joinmastodon.org",className:"about__mail",target:"_blank"},void 0,"Mastodon")}}))),Object(s.a)("div",{className:"about__meta"},void 0,Object(s.a)("div",{className:"about__meta__column"},void 0,Object(s.a)("h4",{},void 0,Object(s.a)(n.a,{id:"server_banner.administered_by",defaultMessage:"Administered by:"})),Object(s.a)(O.a,{id:i.getIn(["contact","account","id"]),size:36,minimal:!0})),Object(s.a)("hr",{className:"about__meta__divider"}),Object(s.a)("div",{className:"about__meta__column"},void 0,Object(s.a)("h4",{},void 0,Object(s.a)(n.a,{id:"about.contact",defaultMessage:"Contact:"})),l?Object(s.a)(j.a,{width:"10ch"}):Object(s.a)("a",{className:"about__mail",href:`mailto:${i.getIn(["contact","email"])}`},void 0,i.getIn(["contact","email"])))),Object(s.a)(k,{open:!0,title:o.formatMessage(f.title)},void 0,d.get("isLoading")?Object(g.jsxs)(g.Fragment,{children:[Object(s.a)(j.a,{width:"100%"}),Object(s.a)("br",{}),Object(s.a)(j.a,{width:"100%"}),Object(s.a)("br",{}),Object(s.a)(j.a,{width:"100%"}),Object(s.a)("br",{}),Object(s.a)(j.a,{width:"70%"})]}):(null==(a=d.get("content"))?void 0:a.length)>0?Object(s.a)("div",{className:"prose",dangerouslySetInnerHTML:{__html:d.get("content")}}):Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.not_available",defaultMessage:"This information has not been made available on this server."}))),Object(s.a)(k,{title:o.formatMessage(f.rules)},void 0,!l&&(i.get("rules",Object(r.List)()).isEmpty()?Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.not_available",defaultMessage:"This information has not been made available on this server."})):Object(s.a)("ol",{className:"rules-list"},void 0,i.get("rules").map((e=>Object(s.a)("li",{},e.get("id"),Object(s.a)("span",{className:"rules-list__text"},void 0,e.get("text")))))))),Object(s.a)(k,{title:o.formatMessage(f.blocks),onOpen:this.handleDomainBlocksOpen},void 0,c.get("isLoading")?Object(g.jsxs)(g.Fragment,{children:[Object(s.a)(j.a,{width:"100%"}),Object(s.a)("br",{}),Object(s.a)(j.a,{width:"70%"})]}):c.get("isAvailable")?Object(g.jsxs)(g.Fragment,{children:[Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.domain_blocks.preamble",defaultMessage:"Mastodon generally allows you to view content from and interact with users from any other server in the fediverse. These are the exceptions that have been made on this particular server."})),Object(s.a)("div",{className:"about__domain-blocks"},void 0,c.get("items").map((e=>Object(s.a)("div",{className:"about__domain-blocks__domain"},e.get("domain"),Object(s.a)("div",{className:"about__domain-blocks__domain__header"},void 0,Object(s.a)("h6",{},void 0,Object(s.a)("span",{title:`SHA-256: ${e.get("digest")}`},void 0,e.get("domain"))),Object(s.a)("span",{className:"about__domain-blocks__domain__type",title:o.formatMessage(M[e.get("severity")].explanation)},void 0,o.formatMessage(M[e.get("severity")].title))),Object(s.a)("p",{},void 0,(e.get("comment")||"").length>0?e.get("comment"):Object(s.a)(n.a,{id:"about.domain_blocks.no_reason_available",defaultMessage:"Reason not available"}))))))]}):Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.not_available",defaultMessage:"This information has not been made available on this server."}))),Object(s.a)(_.a,{}),Object(s.a)("div",{className:"about__footer"},void 0,Object(s.a)("p",{},void 0,Object(s.a)(n.a,{id:"about.disclaimer",defaultMessage:"Mastodon is free, open-source software, and a trademark of Mastodon gGmbH."})))),Object(s.a)(b.a,{},void 0,Object(s.a)("title",{},void 0,o.formatMessage(f.title)),Object(s.a)("meta",{name:"robots",content:"all"})))}}a.default=Object(m.connect)((e=>({server:e.getIn(["server","server"]),extendedDescription:e.getIn(["server","extendedDescription"]),domainBlocks:e.getIn(["server","domainBlocks"])})))(Object(d.c)(w))}}]);
//# sourceMappingURL=about-44165fcdeb471d4c7a13.chunk.js.map