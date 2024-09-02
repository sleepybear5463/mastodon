(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{1229:function(e,t,a){"use strict";a.r(t);var s=a(0),o=a(1),i=a.n(o),l=a(7),c=a(19),r=a(39),d=a(3),n=a(16),u=a.n(n),p=a(18),h=a(11),g=a(154),b=a(49),m=a(21),j=a(23),O=a(2),v=a(25),_=a(1090),f=a(4);const k=Object(l.d)({dislike:{id:"report.reasons.dislike",defaultMessage:"I don't like it"},dislike_description:{id:"report.reasons.dislike_description",defaultMessage:"It is not something you want to see"},spam:{id:"report.reasons.spam",defaultMessage:"It's spam"},spam_description:{id:"report.reasons.spam_description",defaultMessage:"Malicious links, fake engagement, or repetitive replies"},legal:{id:"report.reasons.legal",defaultMessage:"It's illegal"},legal_description:{id:"report.reasons.legal_description",defaultMessage:"You believe it violates the law of your or the server's country"},violation:{id:"report.reasons.violation",defaultMessage:"It violates server rules"},violation_description:{id:"report.reasons.violation_description",defaultMessage:"You are aware that it breaks specific rules"},other:{id:"report.reasons.other",defaultMessage:"It's something else"},other_description:{id:"report.reasons.other_description",defaultMessage:"The issue does not fit into other categories"},status:{id:"report.category.title_status",defaultMessage:"post"},account:{id:"report.category.title_account",defaultMessage:"profile"}});class y extends O.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e,category:t}=this.props;switch(t){case"dislike":e("thanks");break;case"violation":e("rules");break;default:e("statuses")}},this.handleCategoryToggle=(e,t)=>{const{onChangeCategory:a}=this.props;t&&a(e)}}render(){const{category:e,startedFrom:t,rules:a,intl:o}=this.props,i=a.size>0?["dislike","spam","legal","violation","other"]:["dislike","spam","legal","other"];return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(c.a,{id:"report.category.title",defaultMessage:"Tell us what's going on with this {type}",values:{type:o.formatMessage(k[t])}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.category.subtitle",defaultMessage:"Choose the best match"})),Object(s.a)("div",{},void 0,i.map((t=>Object(s.a)(_.a,{name:"category",value:t,checked:e===t,onToggle:this.handleCategoryToggle,label:o.formatMessage(k[t]),description:o.formatMessage(k[`${t}_description`])},t)))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(v.a,{onClick:this.handleNextClick,disabled:null===e},void 0,Object(s.a)(c.a,{id:"report.next",defaultMessage:"Next"})))]})}}var M=Object(h.connect)((e=>({rules:e.getIn(["server","server","rules"],Object(d.List)())})))(Object(r.c)(y)),C=a(80),S=a(34),N=a(246),x=a.n(N),w=a(10),I=a(52);const T=Object(l.d)({placeholder:{id:"report.placeholder",defaultMessage:"Type or paste additional comments"}}),R=Object(S.a)([e=>e.get("statuses"),(e,t)=>t],((e,t)=>t.map((t=>e.getIn([t,"in_reply_to_account_id"])))),{resultEqualityCheck:h.shallowEqual});var D=e=>{let{comment:t,domain:a,statusIds:o,isRemote:i,isSubmitting:l,selectedDomains:r,onSubmit:n,onChangeComment:u,onToggleDomain:p}=e;const h=Object(C.a)(),g=Object(I.b)(),b=Object(O.useRef)(!1),m=Object(O.useCallback)((()=>n()),[n]),j=Object(O.useCallback)((e=>u(e.target.value)),[u]),_=Object(O.useCallback)((e=>p(e.target.value,e.target.checked)),[p]),k=Object(O.useCallback)((e=>{13===e.keyCode&&(e.ctrlKey||e.metaKey)&&m()}),[m]),y=Object(I.c)((e=>a?R(e,o):Object(d.List)())),M=Object(I.c)((e=>e.get("accounts"))),S=a?Object(d.OrderedSet)([a]).union(y.map((e=>M.getIn([e,"acct"],"").split("@")[1])).filter((e=>!!e))):Object(d.OrderedSet)();return Object(O.useEffect)((()=>{if(b.current)return;b.current=!0,S.forEach((e=>{p(e,!0)}));Object(d.OrderedSet)(y.filter((e=>e&&!M.has(e)))).forEach((e=>{g(Object(w.O)(e))}))})),Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(c.a,{id:"report.comment.title",defaultMessage:"Is there anything else you think we should know?"})),Object(s.a)("textarea",{className:"report-dialog-modal__textarea",placeholder:h.formatMessage(T.placeholder),value:t,onChange:j,onKeyDown:k,disabled:l}),i&&Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send an anonymized copy of the report there as well?"})),S.map((e=>Object(s.a)("label",{className:"report-dialog-modal__toggle"},`toggle-${e}`,Object(s.a)(x.a,{checked:r.includes(e),disabled:l,onChange:_,value:e}),Object(s.a)(c.a,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:e}}))))]}),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(v.a,{onClick:m,disabled:l},void 0,Object(s.a)(c.a,{id:"report.submit",defaultMessage:"Submit report"})))]})};class F extends O.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e}=this.props;e("statuses")},this.handleRulesToggle=(e,t)=>{const{onToggle:a}=this.props;a(e,t)}}render(){const{rules:e,selectedRuleIds:t}=this.props;return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(c.a,{id:"report.rules.title",defaultMessage:"Which rules are being violated?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.rules.subtitle",defaultMessage:"Select all that apply"})),Object(s.a)("div",{},void 0,e.map((e=>Object(s.a)(_.a,{name:"rule_ids",value:e.get("id"),checked:t.includes(e.get("id")),onToggle:this.handleRulesToggle,label:e.get("text"),multiple:!0},e.get("id"))))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(v.a,{onClick:this.handleNextClick,disabled:t.size<1},void 0,Object(s.a)(c.a,{id:"report.next",defaultMessage:"Next"})))]})}}var q=Object(h.connect)((e=>({rules:e.getIn(["server","server","rules"])})))(F),z=a(150),P=a(36),B=a(37),E=a(51),L=a(15),U=a(1100),Y=a(73),A=a(121);const K=Object(l.d)({public_short:{id:"privacy.public.short",defaultMessage:"Public"},unlisted_short:{id:"privacy.unlisted.short",defaultMessage:"Unlisted"},private_short:{id:"privacy.private.short",defaultMessage:"Followers only"},direct_short:{id:"privacy.direct.short",defaultMessage:"Mentioned people only"}});class $ extends O.PureComponent{constructor(){super(...arguments),this.handleStatusesToggle=(e,t)=>{const{onToggle:a}=this.props;a(e,t)}}render(){const{status:e,checked:t,intl:a}=this.props;if(e.get("reblog"))return null;const o={public:{icon:"globe",text:a.formatMessage(K.public_short)},unlisted:{icon:"unlock",text:a.formatMessage(K.unlisted_short)},private:{icon:"lock",text:a.formatMessage(K.private_short)},direct:{icon:"at",text:a.formatMessage(K.direct_short)}}[e.get("visibility")],i=Object(s.a)("div",{className:"status-check-box__status poll__option__text"},void 0,Object(s.a)("div",{className:"detailed-status__display-name"},void 0,Object(s.a)("div",{className:"detailed-status__display-avatar"},void 0,Object(s.a)(B.a,{account:e.get("account"),size:46})),Object(s.a)("div",{},void 0,Object(s.a)(E.a,{account:e.get("account")})," · ",Object(s.a)("span",{className:"status__visibility-icon"},void 0,Object(s.a)(L.a,{id:o.icon,title:o.text}))," ",Object(s.a)(Y.a,{timestamp:e.get("created_at")}))),Object(s.a)(A.a,{status:e}),Object(s.a)(U.a,{status:e}));return Object(s.a)(_.a,{name:"status_ids",value:e.get("id"),checked:t,onToggle:this.handleStatusesToggle,label:e.get("search_index"),labelComponent:i,multiple:!0})}}var J=Object(r.c)($);var W=Object(h.connect)((()=>{const e=Object(P.i)();return(t,a)=>{let{id:s}=a;return{status:e(t,{id:s})}}}))(J);class H extends O.PureComponent{constructor(){super(...arguments),this.handleNextClick=()=>{const{onNextStep:e}=this.props;e("comment")}}render(){const{availableStatusIds:e,selectedStatusIds:t,onToggle:a,isLoading:o}=this.props;return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,Object(s.a)(c.a,{id:"report.statuses.title",defaultMessage:"Are there any posts that back up this report?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.statuses.subtitle",defaultMessage:"Select all that apply"})),Object(s.a)("div",{className:"report-dialog-modal__statuses"},void 0,o?Object(s.a)(z.a,{}):e.union(t).map((e=>Object(s.a)(W,{id:e,checked:t.includes(e),onToggle:a},e)))),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(v.a,{onClick:this.handleNextClick},void 0,Object(s.a)(c.a,{id:"report.next",defaultMessage:"Next"})))]})}}var V=Object(h.connect)(((e,t)=>{let{accountId:a}=t;return{availableStatusIds:Object(d.OrderedSet)(e.getIn(["timelines",`account:${a}:with_replies`,"items"])),isLoading:e.getIn(["timelines",`account:${a}:with_replies`,"isLoading"])}}))(H);class G extends O.PureComponent{constructor(){super(...arguments),this.handleCloseClick=()=>{const{onClose:e}=this.props;e()},this.handleUnfollowClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(w.ab)(t.get("id"))),a()},this.handleMuteClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(w.V)(t.get("id"))),a()},this.handleBlockClick=()=>{const{dispatch:e,account:t,onClose:a}=this.props;e(Object(w.K)(t.get("id"))),a()}}render(){const{account:e,submitted:t}=this.props;return Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h3",{className:"report-dialog-modal__title"},void 0,t?Object(s.a)(c.a,{id:"report.thanks.title_actionable",defaultMessage:"Thanks for reporting, we'll look into this."}):Object(s.a)(c.a,{id:"report.thanks.title",defaultMessage:"Don't want to see this?"})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,t?Object(s.a)(c.a,{id:"report.thanks.take_action_actionable",defaultMessage:"While we review this, you can take action against @{name}:",values:{name:e.get("username")}}):Object(s.a)(c.a,{id:"report.thanks.take_action",defaultMessage:"Here are your options for controlling what you see on Mastodon:"})),e.getIn(["relationship","following"])&&Object(f.jsxs)(f.Fragment,{children:[Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(c.a,{id:"report.unfollow",defaultMessage:"Unfollow @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.unfollow_explanation",defaultMessage:"You are following this account. To not see their posts in your home feed anymore, unfollow them."})),Object(s.a)(v.a,{secondary:!0,onClick:this.handleUnfollowClick},void 0,Object(s.a)(c.a,{id:"account.unfollow",defaultMessage:"Unfollow"})),Object(s.a)("hr",{})]}),Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(c.a,{id:"account.mute",defaultMessage:"Mute @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.mute_explanation",defaultMessage:"You will not see their posts. They can still follow you and see your posts and will not know that they are muted."})),Object(s.a)(v.a,{secondary:!0,onClick:this.handleMuteClick},void 0,e.getIn(["relationship","muting"])?Object(s.a)(c.a,{id:"account.muted",defaultMessage:"Muted"}):Object(s.a)(c.a,{id:"report.mute",defaultMessage:"Mute"})),Object(s.a)("hr",{}),Object(s.a)("h4",{className:"report-dialog-modal__subtitle"},void 0,Object(s.a)(c.a,{id:"account.block",defaultMessage:"Block @{name}",values:{name:e.get("username")}})),Object(s.a)("p",{className:"report-dialog-modal__lead"},void 0,Object(s.a)(c.a,{id:"report.block_explanation",defaultMessage:"You will not see their posts. They will not be able to see your posts or follow you. They will be able to tell that they are blocked."})),Object(s.a)(v.a,{secondary:!0,onClick:this.handleBlockClick},void 0,e.getIn(["relationship","blocking"])?Object(s.a)(c.a,{id:"account.blocked",defaultMessage:"Blocked"}):Object(s.a)(c.a,{id:"report.block",defaultMessage:"Block"})),Object(s.a)("div",{className:"flex-spacer"}),Object(s.a)("div",{className:"report-dialog-modal__actions"},void 0,Object(s.a)(v.a,{onClick:this.handleCloseClick},void 0,Object(s.a)(c.a,{id:"report.close",defaultMessage:"Done"})))]})}}var Q=Object(h.connect)((()=>({})))(G);const X=Object(l.d)({close:{id:"lightbox.close",defaultMessage:"Close"}});class Z extends p.a{constructor(){super(...arguments),this.state={step:"category",selectedStatusIds:Object(d.OrderedSet)(this.props.statusId?[this.props.statusId]:[]),selectedDomains:Object(d.OrderedSet)(),comment:"",category:null,selectedRuleIds:Object(d.OrderedSet)(),isSubmitting:!1,isSubmitted:!1},this.handleSubmit=()=>{const{dispatch:e,accountId:t}=this.props,{selectedStatusIds:a,selectedDomains:s,comment:o,category:i,selectedRuleIds:l}=this.state;this.setState({isSubmitting:!0}),e(Object(g.b)({account_id:t,status_ids:a.toArray(),forward_to_domains:s.toArray(),comment:o,forward:s.size>0,category:i,rule_ids:l.toArray()},this.handleSuccess,this.handleFail))},this.handleSuccess=()=>{this.setState({isSubmitting:!1,isSubmitted:!0,step:"thanks"})},this.handleFail=()=>{this.setState({isSubmitting:!1})},this.handleStatusToggle=(e,t)=>{const{selectedStatusIds:a}=this.state;t?this.setState({selectedStatusIds:a.add(e)}):this.setState({selectedStatusIds:a.remove(e)})},this.handleDomainToggle=(e,t)=>{t?this.setState((t=>({selectedDomains:t.selectedDomains.add(e)}))):this.setState((t=>({selectedDomains:t.selectedDomains.remove(e)})))},this.handleRuleToggle=(e,t)=>{t?this.setState((t=>({selectedRuleIds:t.selectedRuleIds.add(e)}))):this.setState((t=>({selectedRuleIds:t.selectedRuleIds.remove(e)})))},this.handleChangeCategory=e=>{this.setState({category:e})},this.handleChangeComment=e=>{this.setState({comment:e})},this.handleNextStep=e=>{this.setState({step:e})}}componentDidMount(){const{dispatch:e,accountId:t}=this.props;e(Object(m.r)(t,{withReplies:!0})),e(Object(b.o)())}render(){const{accountId:e,account:t,intl:a,onClose:o}=this.props;if(!t)return null;const{step:i,selectedStatusIds:l,selectedRuleIds:r,selectedDomains:d,comment:n,category:u,isSubmitting:p,isSubmitted:h}=this.state,g=t.get("acct").split("@")[1],b=!!g;let m;switch(i){case"category":m=Object(s.a)(M,{onNextStep:this.handleNextStep,startedFrom:this.props.statusId?"status":"account",category:u,onChangeCategory:this.handleChangeCategory});break;case"rules":m=Object(s.a)(q,{onNextStep:this.handleNextStep,selectedRuleIds:r,onToggle:this.handleRuleToggle});break;case"statuses":m=Object(s.a)(V,{onNextStep:this.handleNextStep,accountId:e,selectedStatusIds:l,onToggle:this.handleStatusToggle});break;case"comment":m=Object(s.a)(D,{onSubmit:this.handleSubmit,isSubmitting:p,isRemote:b,comment:n,domain:g,onChangeComment:this.handleChangeComment,statusIds:l,selectedDomains:d,onToggleDomain:this.handleDomainToggle});break;case"thanks":m=Object(s.a)(Q,{submitted:h,account:t,onClose:o})}return Object(s.a)("div",{className:"modal-root__modal report-dialog-modal"},void 0,Object(s.a)("div",{className:"report-modal__target"},void 0,Object(s.a)(j.a,{className:"report-modal__close",title:a.formatMessage(X.close),icon:"times",onClick:o,size:20}),Object(s.a)(c.a,{id:"report.target",defaultMessage:"Report {target}",values:{target:Object(s.a)("strong",{},void 0,t.get("acct"))}})),Object(s.a)("div",{className:"report-dialog-modal__container"},void 0,m))}}Z.propTypes={accountId:i.a.string.isRequired,statusId:i.a.string,dispatch:i.a.func.isRequired,intl:i.a.object.isRequired,account:u.a.map.isRequired};t.default=Object(h.connect)((()=>{const e=Object(P.e)();return(t,a)=>{let{accountId:s}=a;return{account:e(t,s)}}}))(Object(r.c)(Z))}}]);
//# sourceMappingURL=report_modal-66071f28e1cc29c27e01.chunk.js.map