(window.webpackJsonp=window.webpackJsonp||[]).push([[457],{1230:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),o=s.n(i),c=s(2),n=s(7),l=s(19),r=s(39),d=s(82),h=s(1076),b=s(1247),u=s(398),g=s(11),p=s(149),m=s(240),j=s(261),O=s(5),v=s(62),_=s(1085),x=s(150),M=s(9),y=s.n(M),f=s(78),k=s(151),L=s(73),N=s(46),w=s(63),C=s(4);class I extends c.PureComponent{constructor(){super(...arguments),this.state={thumbnailLoaded:!1},this.handleImageLoad=()=>this.setState({thumbnailLoaded:!0})}render(){const{expanded:e,url:t,title:s,lang:i,publisher:o,author:c,publishedAt:n,sharedTimes:r,thumbnail:d,thumbnailDescription:h,blurhash:b}=this.props,{thumbnailLoaded:u}=this.state;return Object(a.a)("a",{className:y()("story",{expanded:e}),href:t,target:"blank",rel:"noopener"},void 0,Object(a.a)("div",{className:"story__details"},void 0,Object(a.a)("div",{className:"story__details__publisher"},void 0,o?Object(a.a)("span",{lang:i},void 0,o):Object(a.a)(w.a,{width:50}),n&&Object(C.jsxs)(C.Fragment,{children:[" · ",Object(a.a)(L.a,{timestamp:n})]})),Object(a.a)("div",{className:"story__details__title",lang:i},void 0,s||Object(a.a)(w.a,{})),Object(a.a)("div",{className:"story__details__shared"},void 0,c&&Object(C.jsxs)(C.Fragment,{children:[Object(a.a)(l.a,{id:"link_preview.author",defaultMessage:"By {name}",values:{name:Object(a.a)("strong",{},void 0,c)}})," · "]}),"number"==typeof r?Object(a.a)(N.a,{value:r,renderer:k.b}):Object(a.a)(w.a,{width:100}))),Object(a.a)("div",{className:"story__thumbnail"},void 0,d?Object(C.jsxs)(C.Fragment,{children:[Object(a.a)("div",{className:y()("story__thumbnail__preview",{"story__thumbnail__preview--hidden":u})},void 0,Object(a.a)(f.a,{hash:b})),Object(a.a)("img",{src:d,onLoad:this.handleImageLoad,alt:h,title:h,lang:i})]}):Object(a.a)(w.a,{})))}}class S extends c.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(v.o)())}render(){const{isLoading:e,links:t}=this.props,s=Object(a.a)(_.a,{id:"explore/links"},void 0,Object(a.a)(l.a,{id:"dismissable_banner.explore_links",defaultMessage:"These are news stories being shared the most on the social web today. Newer news stories posted by more different people are ranked higher."}));return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__links scrollable scrollable--flex"},void 0,s,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(l.a,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"explore__links scrollable","data-nosnippet":!0},void 0,s,e?Object(a.a)(x.a,{}):t.map(((e,t)=>Object(a.a)(I,{expanded:0===t,lang:e.get("language"),url:e.get("url"),title:e.get("title"),publisher:e.get("provider_name"),publishedAt:e.get("published_at"),author:e.get("author_name"),sharedTimes:1*e.getIn(["history",0,"accounts"])+1*e.getIn(["history",1,"accounts"]),thumbnail:e.get("image"),thumbnailDescription:e.get("image_description"),blurhash:e.get("blurhash")},e.get("id")))))}}var T=Object(g.connect)((e=>({links:e.getIn(["trends","links","items"]),isLoading:e.getIn(["trends","links","isLoading"])})))(S),P=s(3),H=s(35),z=s(15),D=s(241),F=s(242),A=s(206),q=s(1095);const E=Object(n.d)({title:{id:"search_results.title",defaultMessage:"Search for {q}"}}),R=e=>e.size>10&&e.size%10==1?e.skipLast(1):e;class W extends c.PureComponent{constructor(){super(...arguments),this.state={type:this.props.submittedType||"all"},this.handleSelectAll=()=>{const{submittedType:e,dispatch:t}=this.props;e&&t(Object(H.s)()),this.setState({type:"all"})},this.handleSelectAccounts=()=>{const{submittedType:e,dispatch:t}=this.props;"accounts"!==e&&t(Object(H.s)("accounts")),this.setState({type:"accounts"})},this.handleSelectHashtags=()=>{const{submittedType:e,dispatch:t}=this.props;"hashtags"!==e&&t(Object(H.s)("hashtags")),this.setState({type:"hashtags"})},this.handleSelectStatuses=()=>{const{submittedType:e,dispatch:t}=this.props;"statuses"!==e&&t(Object(H.s)("statuses")),this.setState({type:"statuses"})},this.handleLoadMoreAccounts=()=>this._loadMore("accounts"),this.handleLoadMoreStatuses=()=>this._loadMore("statuses"),this.handleLoadMoreHashtags=()=>this._loadMore("hashtags"),this.handleLoadMore=()=>{const{type:e}=this.state;"all"!==e&&this._loadMore(e)}}static getDerivedStateFromProps(e,t){return e.submittedType!==t.type?{type:e.submittedType||"all"}:null}_loadMore(e){const{dispatch:t}=this.props;t(Object(H.n)(e))}render(){const{intl:e,isLoading:t,q:s,results:i}=this.props,{type:o}=this.state,c="all"!==o&&(i.get(o,Object(P.List)()).size>10&&i.get(o).size%10==1);let n;const r=i.get("accounts",Object(P.List)()),h=i.get("hashtags",Object(P.List)()),b=i.get("statuses",Object(P.List)());switch(o){case"all":n=r.size+h.size+b.size>0?Object(C.jsxs)(C.Fragment,{children:[r.size>0&&Object(a.a)(q.a,{title:Object(C.jsxs)(C.Fragment,{children:[Object(a.a)(z.a,{id:"users",fixedWidth:!0}),Object(a.a)(l.a,{id:"search_results.accounts",defaultMessage:"Profiles"})]}),onClickMore:this.handleLoadMoreAccounts},"accounts",r.take(4).map((e=>Object(a.a)(F.a,{id:e},e)))),h.size>0&&Object(a.a)(q.a,{title:Object(C.jsxs)(C.Fragment,{children:[Object(a.a)(z.a,{id:"hashtag",fixedWidth:!0}),Object(a.a)(l.a,{id:"search_results.hashtags",defaultMessage:"Hashtags"})]}),onClickMore:this.handleLoadMoreHashtags},"hashtags",h.take(4).map((e=>Object(a.a)(k.a,{hashtag:e},e.get("name"))))),b.size>0&&Object(a.a)(q.a,{title:Object(C.jsxs)(C.Fragment,{children:[Object(a.a)(z.a,{id:"quote-right",fixedWidth:!0}),Object(a.a)(l.a,{id:"search_results.statuses",defaultMessage:"Posts"})]}),onClickMore:this.handleLoadMoreStatuses},"statuses",b.take(4).map((e=>Object(a.a)(A.a,{id:e},e))))]}):[];break;case"accounts":n=(e=>R(e).map((e=>Object(a.a)(F.a,{id:e},e))))(r);break;case"hashtags":n=(e=>R(e).map((e=>Object(a.a)(k.a,{hashtag:e},e.get("name")))))(h);break;case"statuses":n=(e=>R(e).map((e=>Object(a.a)(A.a,{id:e},e))))(b)}return Object(C.jsxs)(C.Fragment,{children:[Object(a.a)("div",{className:"account__section-headline"},void 0,Object(a.a)("button",{onClick:this.handleSelectAll,className:"all"===o?"active":void 0},void 0,Object(a.a)(l.a,{id:"search_results.all",defaultMessage:"All"})),Object(a.a)("button",{onClick:this.handleSelectAccounts,className:"accounts"===o?"active":void 0},void 0,Object(a.a)(l.a,{id:"search_results.accounts",defaultMessage:"Profiles"})),Object(a.a)("button",{onClick:this.handleSelectHashtags,className:"hashtags"===o?"active":void 0},void 0,Object(a.a)(l.a,{id:"search_results.hashtags",defaultMessage:"Hashtags"})),Object(a.a)("button",{onClick:this.handleSelectStatuses,className:"statuses"===o?"active":void 0},void 0,Object(a.a)(l.a,{id:"search_results.statuses",defaultMessage:"Posts"}))),Object(a.a)("div",{className:"explore__search-results","data-nosnippet":!0},void 0,Object(a.a)(D.a,{scrollKey:"search-results",isLoading:t,onLoadMore:this.handleLoadMore,hasMore:c,emptyMessage:Object(a.a)(l.a,{id:"search_results.nothing_found",defaultMessage:"Could not find anything for these search terms"}),bindToDocument:!0},void 0,n)),Object(a.a)(d.a,{},void 0,Object(a.a)("title",{},void 0,e.formatMessage(E.title,{q:s})))]})}}var J=Object(g.connect)((e=>({isLoading:e.getIn(["search","isLoading"]),results:e.getIn(["search","results"]),q:e.getIn(["search","searchTerm"]),submittedType:e.getIn(["search","type"])})))(Object(r.c)(W)),K=s(45),B=s.n(K),G=s(245),Q=s(36);class U extends c.PureComponent{constructor(){super(...arguments),this.handleLoadMore=B()((()=>{const{dispatch:e}=this.props;e(Object(v.m)())}),300,{leading:!0})}componentDidMount(){const{dispatch:e}=this.props;e(Object(v.p)())}render(){const{isLoading:e,hasMore:t,statusIds:s,multiColumn:i}=this.props,o=Object(a.a)(l.a,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"});return Object(a.a)(G.a,{trackScroll:!0,prepend:Object(a.a)(_.a,{id:"explore/statuses"},void 0,Object(a.a)(l.a,{id:"dismissable_banner.explore_statuses",defaultMessage:"These are posts from across the social web that are gaining traction today. Newer posts with more boosts and favorites are ranked higher."})),alwaysPrepend:!0,timelineId:"explore",statusIds:s,scrollKey:"explore-statuses",hasMore:t,isLoading:e,onLoadMore:this.handleLoadMore,emptyMessage:o,bindToDocument:!i,withCounters:!0})}}var V=Object(g.connect)((e=>({statusIds:Object(Q.d)(e,"trending"),isLoading:e.getIn(["status_lists","trending","isLoading"],!0),hasMore:!!e.getIn(["status_lists","trending","next"])})))(U),X=s(146),Y=s(1101);class Z extends c.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(X.f)(!0))}render(){const{isLoading:e,suggestions:t}=this.props;return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__suggestions scrollable scrollable--flex"},void 0,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(l.a,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"explore__suggestions scrollable","data-nosnippet":!0},void 0,e?Object(a.a)(x.a,{}):t.map((e=>Object(a.a)(Y.a,{id:e.get("account")},e.get("account")))))}}var $=Object(g.connect)((e=>({suggestions:e.getIn(["suggestions","items"]),isLoading:e.getIn(["suggestions","isLoading"])})))(Z);class ee extends c.PureComponent{componentDidMount(){const{dispatch:e}=this.props;e(Object(v.n)())}render(){const{isLoading:e,hashtags:t}=this.props,s=Object(a.a)(_.a,{id:"explore/tags"},void 0,Object(a.a)(l.a,{id:"dismissable_banner.explore_tags",defaultMessage:"These are hashtags that are gaining traction on the social web today. Hashtags that are used by more different people are ranked higher."}));return!e&&t.isEmpty()?Object(a.a)("div",{className:"explore__links scrollable scrollable--flex"},void 0,s,Object(a.a)("div",{className:"empty-column-indicator"},void 0,Object(a.a)(l.a,{id:"empty_column.explore_statuses",defaultMessage:"Nothing is trending right now. Check back later!"}))):Object(a.a)("div",{className:"scrollable explore__links","data-nosnippet":!0},void 0,s,e?Object(a.a)(x.a,{}):t.map((e=>Object(a.a)(k.a,{hashtag:e},e.get("name")))))}}var te=Object(g.connect)((e=>({hashtags:e.getIn(["trends","tags","items"]),isLoadingHashtags:e.getIn(["trends","tags","isLoading"])})))(ee);const se=Object(n.d)({title:{id:"explore.title",defaultMessage:"Explore"},searchResults:{id:"explore.search_results",defaultMessage:"Search results"}});class ae extends c.PureComponent{constructor(){super(...arguments),this.handleHeaderClick=()=>{this.column.scrollTop()},this.setRef=e=>{this.column=e}}render(){const{intl:e,multiColumn:t,isSearching:s}=this.props,{signedIn:i}=this.context.identity;return Object(C.jsxs)(p.a,{bindToDocument:!t,ref:this.setRef,label:e.formatMessage(se.title),children:[Object(a.a)(m.a,{icon:s?"search":"hashtag",title:e.formatMessage(s?se.searchResults:se.title),onClick:this.handleHeaderClick,multiColumn:t}),Object(a.a)("div",{className:"explore__search-header"},void 0,Object(a.a)(j.a,{})),s?Object(a.a)(J,{}):Object(C.jsxs)(C.Fragment,{children:[Object(a.a)("div",{className:"account__section-headline"},void 0,Object(a.a)(h.a,{exact:!0,to:"/explore"},void 0,Object(a.a)(l.a,{tagName:"div",id:"explore.trending_statuses",defaultMessage:"Posts"})),Object(a.a)(h.a,{exact:!0,to:"/explore/tags"},void 0,Object(a.a)(l.a,{tagName:"div",id:"explore.trending_tags",defaultMessage:"Hashtags"})),i&&Object(a.a)(h.a,{exact:!0,to:"/explore/suggestions"},void 0,Object(a.a)(l.a,{tagName:"div",id:"explore.suggested_follows",defaultMessage:"People"})),Object(a.a)(h.a,{exact:!0,to:"/explore/links"},void 0,Object(a.a)(l.a,{tagName:"div",id:"explore.trending_links",defaultMessage:"News"}))),Object(a.a)(b.a,{},void 0,Object(a.a)(u.a,{path:"/explore/tags",component:te}),Object(a.a)(u.a,{path:"/explore/links",component:T}),Object(a.a)(u.a,{path:"/explore/suggestions",component:$}),Object(a.a)(u.a,{exact:!0,path:["/explore","/explore/posts","/search"]},void 0,Object(a.a)(V,{multiColumn:t}))),Object(a.a)(d.a,{},void 0,Object(a.a)("title",{},void 0,e.formatMessage(se.title)),Object(a.a)("meta",{name:"robots",content:s?"noindex":"all"}))]})]})}}ae.contextTypes={router:o.a.object,identity:o.a.object};t.default=Object(g.connect)((e=>({layout:e.getIn(["meta","layout"]),isSearching:e.getIn(["search","submitted"])||!O.C})))(Object(r.c)(ae))}}]);
//# sourceMappingURL=explore-aeac71b4c94a1b528fb7.chunk.js.map