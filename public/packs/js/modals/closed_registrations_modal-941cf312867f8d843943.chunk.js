(window.webpackJsonp=window.webpackJsonp||[]).push([[584],{1126:function(e,a,t){"use strict";t.r(a);var o=t(0),s=t(19),i=t(18),n=t(11),c=t(49),r=t(5);class d extends i.a{componentDidMount(){const{dispatch:e}=this.props;e(Object(c.o)())}render(){let e;return e=this.props.message?Object(o.a)("p",{className:"prose",dangerouslySetInnerHTML:{__html:this.props.message}}):Object(o.a)("p",{className:"prose"},void 0,Object(o.a)(s.a,{id:"closed_registrations_modal.description",defaultMessage:"Creating an account on {domain} is currently not possible, but please keep in mind that you do not need an account specifically on {domain} to use Mastodon.",values:{domain:Object(o.a)("strong",{},void 0,r.i)}})),Object(o.a)("div",{className:"modal-root__modal interaction-modal"},void 0,Object(o.a)("div",{className:"interaction-modal__lead"},void 0,Object(o.a)("h3",{},void 0,Object(o.a)(s.a,{id:"closed_registrations_modal.title",defaultMessage:"Signing up on Mastodon"})),Object(o.a)("p",{},void 0,Object(o.a)(s.a,{id:"closed_registrations_modal.preamble",defaultMessage:"Mastodon is decentralized, so no matter where you create your account, you will be able to follow and interact with anyone on this server. You can even self-host it!"}))),Object(o.a)("div",{className:"interaction-modal__choices"},void 0,Object(o.a)("div",{className:"interaction-modal__choices__choice"},void 0,Object(o.a)("h3",{},void 0,Object(o.a)(s.a,{id:"interaction_modal.on_this_server",defaultMessage:"On this server"})),e),Object(o.a)("div",{className:"interaction-modal__choices__choice"},void 0,Object(o.a)("h3",{},void 0,Object(o.a)(s.a,{id:"interaction_modal.on_another_server",defaultMessage:"On a different server"})),Object(o.a)("p",{className:"prose"},void 0,Object(o.a)(s.a,{id:"closed_registrations.other_server_instructions",defaultMessage:"Since Mastodon is decentralized, you can create an account on another server and still interact with this one."})),Object(o.a)("a",{href:"https://joinmastodon.org/servers",className:"button button--block"},void 0,Object(o.a)(s.a,{id:"closed_registrations_modal.find_another_server",defaultMessage:"Find another server"})))))}}a.default=Object(n.connect)((e=>({message:e.getIn(["server","server","registrations","message"])})))(d)}}]);
//# sourceMappingURL=closed_registrations_modal-941cf312867f8d843943.chunk.js.map