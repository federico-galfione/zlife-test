(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0U59":function(t,e,n){"use strict";n.r(e),n.d(e,"CaregiverInitModule",(function(){return l}));var r=n("Valr"),i=n("DUip"),s=n("AytR"),o=n("JjMQ"),c=n("krHK"),u=n("VnD/"),a=n("P6uZ"),p=n("15JJ"),f=n("TYT/"),b=n("cUzu"),h=n("6onV"),d=function(){function t(t,e,n){var r=this;this.route=t,this.http=e,this.store=n,this.store.select((function(t){return t.remoteSession.userId})).pipe(Object(u.a)((function(t){return!!t})),Object(a.a)(),Object(p.a)((function(t){return r.http.get(s.a.server.url+"/support/requests/"+r.route.snapshot.params.requestId+"/"+t)}))).subscribe((function(t){r.store.dispatch(Object(o.b)(t.state)),c.a.resizeScreenTo(t.screen.width,t.screen.height)}))}return t.\u0275fac=function(e){return new(e||t)(f.Ub(i.a),f.Ub(b.b),f.Ub(h.h))},t.\u0275cmp=f.Ob({type:t,selectors:[["zlife-caregiver-init"]],decls:0,vars:0,template:function(t,e){},encapsulation:2}),t}(),l=function(){function t(){}return t.\u0275mod=f.Sb({type:t}),t.\u0275inj=f.Rb({factory:function(e){return new(e||t)},imports:[[r.c,i.l.forChild([{path:"",component:d}])]]}),t}()}}]);