(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{fOOd:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeModule",(function(){return F}));var o=n("Valr"),i=n("QJY3"),c=n("sPEm"),s=n("w1ql"),r=n("6onV"),a=n("ey9i"),u=n("PCNd"),f=n("dkbr"),l=n("DUip"),p=n("/Ilh"),b=n("qERf"),h=n("M0ag"),m=n("F/XL"),d=n("15JJ"),g=Object(r.n)("[Home Page] Home Section success list",Object(a.A)()),j=Object(r.n)("[Home Page] Load Sections Request list"),v=Object(r.o)(a.m),y=Object(r.q)(v,(function(e){return e.homePage.sections})),S=n("TYT/"),O=n("vqQA"),k=n("/733"),R=n("byPC"),I=n("fEV7");function P(e,t){1&e&&S.Wb(0,"ion-progress-bar",6)}function w(e,t){if(1&e){var n=S.cc();S.bc(0,"zlife-menu-section",7),S.kc("onItemClick",(function(e){return S.Ec(n),S.nc().onItemClick(e)})),S.ac()}2&e&&S.tc("section",t.$implicit)}function $(e,t){if(1&e){var n=S.cc();S.bc(0,"ion-fab",8),S.kc("click",(function(){return S.Ec(n),S.nc().terminateSession()})),S.bc(1,"ion-fab-button"),S.Wb(2,"ion-icon",9),S.ac(),S.ac()}}var z=[{path:"",component:function(){function e(e,t,n){var o=this;this.store=e,this.router=t,this.modalController=n,this.isRemoteSessionLoading$=this.store.select(a.v),this.isSessionRunning$=this.store.select(b.c),this.store.dispatch(j()),this.menu$=this.store.select(y).pipe(Object(h.b)()),this.canRequestRemoteSupport$=this.store.select((function(e){return e.remoteSession.userId})).pipe(Object(d.a)((function(e){return e?o.store.select((function(e){return!e.remoteSession.isSessionRunning})):Object(m.a)(!1)})))}return e.prototype.onItemClick=function(e){this[e]&&"function"==typeof this[e]?this[e].call(this):this.router.navigate([e])},e.prototype.requestRemoteSupport=function(){var e=this;this.store.select(a.w).subscribe((function(t){e.store.dispatch(p.f({dispatchToRemote:!1}))}))},e.prototype.terminateSession=function(){this.store.dispatch(p.j({dispatchToRemote:!0}))},e.\u0275fac=function(t){return new(t||e)(S.Vb(r.h),S.Vb(l.j),S.Vb(c.s))},e.\u0275cmp=S.Pb({type:e,selectors:[["zlife-home-page"]],features:[S.Ib([{provide:a.i,useFactory:a.i.create([a.m,"homePage"])}])],decls:10,vars:10,consts:[["title","HomePage"],["padding",""],["type","indeterminate","color","danger",4,"ngIf"],["scrollName","homeSections",3,"elementsInPage","elements"],[3,"section","onItemClick",4,"zlifeListItem"],["vertical","top","horizontal","end","edge","","slot","fixed",3,"click",4,"ngIf"],["type","indeterminate","color","danger"],[3,"section","onItemClick"],["vertical","top","horizontal","end","edge","","slot","fixed",3,"click"],["name","trash-outline"]],template:function(e,t){1&e&&(S.bc(0,"ion-header"),S.Wb(1,"zlife-status-bar",0),S.ac(),S.bc(2,"ion-content",1),S.Mc(3,P,1,0,"ion-progress-bar",2),S.oc(4,"async"),S.bc(5,"zlife-list-scroller-tracker",3),S.oc(6,"async"),S.Mc(7,w,1,1,"zlife-menu-section",4),S.ac(),S.Mc(8,$,3,0,"ion-fab",5),S.oc(9,"async"),S.ac()),2&e&&(S.Jb(3),S.tc("ngIf",S.pc(4,4,t.isRemoteSessionLoading$)),S.Jb(2),S.tc("elementsInPage",2)("elements",S.pc(6,6,t.menu$)),S.Jb(3),S.tc("ngIf",S.pc(9,8,t.isSessionRunning$)))},directives:[c.j,O.a,c.f,o.m,k.a,R.a,c.l,I.a,c.g,c.h,c.k],pipes:[o.b],styles:[""]}),e}()}],C=function(){function e(){}return e.\u0275mod=S.Tb({type:e}),e.\u0275inj=S.Sb({factory:function(t){return new(t||e)},imports:[[l.l.forChild(z)],l.l]}),e}(),q=n("67Y/"),J=n("AytR"),T=n("cUzu"),V=function(){function e(e){this.http=e,this.baseUrl=J.a.server.url}return e.prototype.getSections=function(){return this.http.get(this.baseUrl+"/features")},e.\u0275fac=function(t){return new(t||e)(S.gc(T.b))},e.\u0275prov=S.Rb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),E=function(){function e(e,t,n,o){var i=this;this.actions$=e,this.homeService=t,this.store=n,this.router=o,this.sectionsReceived$=Object(s.c)((function(){return i.actions$.pipe(Object(s.d)(j),Object(d.a)((function(e){return i.homeService.getSections()})),Object(q.a)((function(e){return g({list:e,dispatchToRemote:!0})})))}))}return e.\u0275fac=function(t){return new(t||e)(S.gc(s.a),S.gc(V),S.gc(r.h),S.gc(l.j))},e.\u0275prov=S.Rb({token:e,factory:e.\u0275fac}),e}(),H=n("mrSG"),L=Object(r.p)({homePage:{sections:[]}},Object(r.r)(g,(function(e,t){return Object(H.a)(Object(H.a)({},e),{homePage:Object(H.a)(Object(H.a)({},e.homePage),{sections:t.list})})})));function M(e,t){return L(e,t)}var F=function(){function e(){}return e.\u0275mod=S.Tb({type:e}),e.\u0275inj=S.Sb({factory:function(t){return new(t||e)},providers:[],imports:[[o.c,c.q,a.c,C,r.j.forFeature(a.m,M),s.b.forFeature([E]),f.a,u.a,i.k]]}),e}()}}]);