(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{voP2:function(t,n,e){"use strict";e.r(n),e.d(n,"ChiamateModule",(function(){return H}));var c=e("Valr"),a=e("sPEm"),i=e("w1ql"),o=e("6onV"),r=e("ey9i"),s=e("PCNd"),l=e("DUip"),g=function(t){return t.chiamate},u=Object(o.q)(g,(function(t){return t.chiamataInArrivo.fromUser})),h=Object(o.q)(g,(function(t){return t.chiamataInCorso.withUser})),f=Object(o.q)(g,(function(t){return t.contattiPage.contatti})),b=Object(o.q)(g,(function(t){return t.contattiPage.currentPage})),m=e("TYT/"),p=e("AytR"),d=Object(o.n)("[Chiamata in arrivo Page] Chiamata in arrivo",Object(r.s)()),C=Object(o.n)("[Chiamata in corso Page] Chiamata in corso",Object(r.s)()),O=Object(o.n)("[Chiamate contatti Page] Contatti Success Receiving",Object(r.s)()),v=Object(o.n)("[Chiamate contatti Page] Contatti Request"),P=Object(o.n)("[Chiamate contatti Page] La pagina \xe8 stata cambiata, carica nuovi contatti",Object(r.s)()),M=e("cUzu"),_=function(){function t(t,n,e){this.http=t,this.store=n,this.router=e,this.baseUrl=p.a.server.url}return t.prototype.getContattiList=function(){return this.http.get(this.baseUrl+"/contacts")},t.prototype.chiamaContatto=function(t){this.store.dispatch(C({withUser:t,dispatchToRemote:!0})),this.router.navigate(["chiamate/chiamata-in-corso"])},t.prototype.accettaChiamata=function(t){this.store.dispatch(C({withUser:t,dispatchToRemote:!0})),this.store.dispatch(d({fromUser:null,dispatchToRemote:!0})),this.router.navigate(["chiamate/chiamata-in-corso"])},t.prototype.rifiutaChiamata=function(){this.store.dispatch(d({fromUser:null,dispatchToRemote:!0})),this.router.navigate([""])},t.prototype.terminaChiamata=function(){this.store.dispatch(C({withUser:null,dispatchToRemote:!0})),this.router.navigate([""])},t.\u0275fac=function(n){return new(n||t)(m.gc(M.b),m.gc(o.h),m.gc(l.j))},t.\u0275prov=m.Rb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),y=e("vqQA"),x=e("sSbh");function j(t,n){if(1&t){var e=m.cc();m.bc(0,"div",3),m.bc(1,"p",4),m.Oc(2,"Chiamata vocale in arrivo"),m.ac(),m.Wb(3,"img",5),m.bc(4,"p",6),m.Oc(5," Prefix "),m.bc(6,"b"),m.Oc(7),m.ac(),m.ac(),m.bc(8,"p",7),m.Oc(9),m.ac(),m.bc(10,"div",8),m.bc(11,"div",9),m.bc(12,"zlife-ngrx-button",10),m.kc("onClick",(function(){m.Ec(e);var t=n.ngIf;return m.nc().accettaChiamata(t)})),m.ac(),m.bc(13,"p"),m.Oc(14,"Rispondi"),m.ac(),m.ac(),m.bc(15,"div",11),m.bc(16,"zlife-ngrx-button",12),m.kc("onClick",(function(){return m.Ec(e),m.nc().rifiutaChiamata()})),m.ac(),m.bc(17,"p"),m.Oc(18,"Rifiuta"),m.ac(),m.ac(),m.ac(),m.ac()}if(2&t){var c=n.ngIf;m.Jb(3),m.tc("src",c.image,m.Gc),m.Jb(4),m.Rc("",c.firstName," ",c.lastName,""),m.Jb(2),m.Pc(c.role),m.Jb(3),m.tc("isIonicons",!0),m.Jb(4),m.tc("isIonicons",!0)}}function I(t,n){1&t&&(m.bc(0,"p"),m.Oc(1,"Caricamento..."),m.ac())}var w=function(){function t(t,n){this.store=t,this.chiamateService=n,this.fromUser$=this.store.select(u)}return t.prototype.accettaChiamata=function(t){this.chiamateService.accettaChiamata(t)},t.prototype.rifiutaChiamata=function(){this.chiamateService.rifiutaChiamata()},t.\u0275fac=function(n){return new(n||t)(m.Vb(o.h),m.Vb(_))},t.\u0275cmp=m.Pb({type:t,selectors:[["zlife-arrivo-chiamata"]],features:[m.Ib([{provide:r.f,useFactory:r.f.create([r.h,"chiamataInArrivo"])}])],decls:7,vars:4,consts:[["padding",""],["class","container",4,"ngIf","ngIfElse"],["loading",""],[1,"container"],[1,"incoming-call"],[3,"src"],[1,"user-detail"],[1,"role-paragraph"],[1,"buttons-container"],[1,"call-buttons","accept-call"],["elementId","accettaChiamata","icon","call","type","round",3,"isIonicons","onClick"],[1,"call-buttons"],["elementId","rifiutaChiamata","icon","close","type","round",3,"isIonicons","onClick"]],template:function(t,n){if(1&t&&(m.bc(0,"ion-header"),m.Wb(1,"zlife-status-bar"),m.ac(),m.bc(2,"ion-content",0),m.Mc(3,j,19,6,"div",1),m.oc(4,"async"),m.Mc(5,I,2,0,"ng-template",null,2,m.Nc),m.ac()),2&t){var e=m.Dc(6);m.Jb(3),m.tc("ngIf",m.pc(4,2,n.fromUser$))("ngIfElse",e)}},directives:[a.j,y.a,a.f,c.m,x.a],pipes:[c.b],styles:[".container[_ngcontent-%COMP%]{text-align:center}.container[_ngcontent-%COMP%]   .incoming-call[_ngcontent-%COMP%]{font-size:x-large}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20%}.container[_ngcontent-%COMP%]   .user-detail[_ngcontent-%COMP%]{font-size:large}.container[_ngcontent-%COMP%]   .role-paragraph[_ngcontent-%COMP%]{font-size:medium}.container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .call-buttons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .accept-call[_ngcontent-%COMP%]{margin-right:10%}"]}),t}(),k=e("wd/R"),z=e("gI3B"),U=e("67Y/"),R=e("f+Cj");function J(t,n){if(1&t&&m.Wb(0,"img",16),2&t){var e=m.nc().ngIf;m.tc("src",e.image,m.Gc)}}function S(t,n){1&t&&m.Wb(0,"img",17)}function V(t,n){if(1&t){var e=m.cc();m.bc(0,"div",2),m.Mc(1,J,1,1,"img",3),m.Mc(2,S,1,0,"ng-template",null,4,m.Nc),m.bc(4,"div"),m.bc(5,"p",5),m.Oc(6," Prefix "),m.bc(7,"b"),m.Oc(8),m.ac(),m.ac(),m.bc(9,"p",6),m.Oc(10),m.ac(),m.bc(11,"p",7),m.bc(12,"b"),m.Oc(13),m.oc(14,"async"),m.ac(),m.ac(),m.ac(),m.bc(15,"div",8),m.bc(16,"div",9),m.bc(17,"p"),m.Oc(18,"Pi\xf9 alto"),m.ac(),m.Wb(19,"ion-icon",10),m.ac(),m.bc(20,"zlife-ngrx-chunk-slider",11),m.kc("valueChange",(function(t){return m.Ec(e),m.nc().changeVolume(t)})),m.ac(),m.bc(21,"div",9),m.bc(22,"p"),m.Oc(23,"Pi\xf9 basso"),m.ac(),m.Wb(24,"ion-icon",12),m.ac(),m.ac(),m.Wb(25,"div",13),m.bc(26,"div",14),m.bc(27,"zlife-ngrx-button",15),m.kc("onClick",(function(){return m.Ec(e),m.nc().terminaChiamata()})),m.ac(),m.bc(28,"p"),m.Oc(29,"Riaggancia"),m.ac(),m.ac(),m.ac()}if(2&t){var c=n.ngIf,a=m.Dc(3),i=m.nc();m.Jb(1),m.tc("ngIf",c.image)("ngIfElse",a),m.Jb(7),m.Rc("",c.firstName," ",c.lastName,""),m.Jb(2),m.Pc(c.role),m.Jb(3),m.Pc(m.pc(14,12,i.displayDuration$)),m.Jb(7),m.tc("maxValue",5)("minValue",0)("value",3)("useColorLevels",!0)("vertical",!0),m.Jb(7),m.tc("isIonicons",!0)}}var N=function(){function t(t,n){this.store=t,this.chiamateService=n,this.withUser$=this.store.select(h).pipe(Object(U.a)((function(t){return t||{id:1,firstName:"Ettore",lastName:"Bianchi",image:null,role:"Cardiologo"}}))),this.displayDuration$=Object(z.a)(0,1e3).pipe(Object(U.a)((function(t){return k().startOf("hour").seconds(t).format("mm : ss")})))}return t.prototype.changeVolume=function(t){console.log("change volume to",t)},t.prototype.terminaChiamata=function(){this.chiamateService.terminaChiamata()},t.\u0275fac=function(n){return new(n||t)(m.Vb(o.h),m.Vb(_))},t.\u0275cmp=m.Pb({type:t,selectors:[["zlife-chiamata-in-corso"]],features:[m.Ib([{provide:r.f,useFactory:r.f.create([r.h,"chiamataInCorso"])}])],decls:5,vars:3,consts:[["padding",""],["class","container",4,"ngIf"],[1,"container"],[3,"src",4,"ngIf","ngIfElse"],["placeholderImage",""],[1,"user-details"],[1,"role-paragraph"],[1,"call-duration"],[1,"slider-container"],[1,"volume-paragraph"],["name","volume-high"],["elementId","volumeChunkSlider",3,"maxValue","minValue","value","useColorLevels","vertical","valueChange"],["name","volume-low"],[1,"break"],[1,"close-call-button"],["elementId","terminaChiamata","icon","close","type","round",3,"isIonicons","onClick"],[3,"src"],["src","./assets/placeholders/user-placeholder.svg"]],template:function(t,n){1&t&&(m.bc(0,"ion-header"),m.Wb(1,"zlife-status-bar"),m.ac(),m.bc(2,"ion-content",0),m.Mc(3,V,30,14,"div",1),m.oc(4,"async"),m.ac()),2&t&&(m.Jb(3),m.tc("ngIf",m.pc(4,1,n.withUser$)))},directives:[a.j,y.a,a.f,c.m,a.k,R.a,x.a],pipes:[c.b],styles:[".container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-content:center;align-items:center;flex-wrap:wrap;height:100%;padding-left:10%;padding-right:10%}.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:25%}.container[_ngcontent-%COMP%]   .user-details[_ngcontent-%COMP%]{font-size:large}.container[_ngcontent-%COMP%]   .role-paragraph[_ngcontent-%COMP%]{font-size:medium}.container[_ngcontent-%COMP%]   .call-duration[_ngcontent-%COMP%]{font-size:x-large}.container[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end}.container[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]   .volume-paragraph[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%}.container[_ngcontent-%COMP%]   .slider-container[_ngcontent-%COMP%]   .volume-paragraph[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:40px;height:40px;margin-left:10%}.container[_ngcontent-%COMP%]   .break[_ngcontent-%COMP%]{flex-basis:100%;height:0}.container[_ngcontent-%COMP%]   .close-call-button[_ngcontent-%COMP%]{margin-left:50%;display:flex;align-items:center;flex-direction:column}"]}),t}(),$=e("dkbr"),E=e("/733"),T=e("byPC"),W=e("CgzN");function q(t,n){if(1&t){var e=m.cc();m.Zb(0),m.bc(1,"zlife-user-card",7),m.bc(2,"zlife-ngrx-button",8),m.kc("onClick",(function(){m.Ec(e);var t=n.$implicit;return m.nc().chiamaContatto(t)})),m.ac(),m.ac(),m.Yb()}if(2&t){var c=n.$implicit;m.Jb(1),m.Nb("highlight",c.unreadMsg),m.tc("user",c)("subtitle",c.unreadMsg?"Ha chiamato <br> 04 giugno alle 19.30":null),m.Jb(1),m.tc("elementId","btn"+c.id)}}var A=[{path:"",component:function(){function t(t,n,e){this.store=t,this.router=n,this.chiamateService=e,this.store.dispatch(v()),this.contatti$=this.store.select(f).pipe(Object(U.a)((function(t){return t.slice(0)}))),this.currentPage$=this.store.select(b)}return t.prototype.pageChanged=function(t){this.store.dispatch(P({currentPage:t,dispatchToRemote:!0}))},t.prototype.chiamaContatto=function(t){this.chiamateService.chiamaContatto(t)},t.prototype.simulaArrivoChiamata=function(){this.store.dispatch(d({fromUser:{id:1,firstName:"Ettore",lastName:"Bianchi",image:"assets/icon/placeholder_face.png",role:"Cardiologo"},dispatchToRemote:!0})),this.router.navigate(["chiamate/chiamata-in-arrivo"])},t.\u0275fac=function(n){return new(n||t)(m.Vb(o.h),m.Vb(l.j),m.Vb(_))},t.\u0275cmp=m.Pb({type:t,selectors:[["zlife-chiamate-contatti-page"]],features:[m.Ib([{provide:r.f,useFactory:r.f.create([r.h,"contattiPage"])}])],decls:12,vars:4,consts:[["padding",""],[1,"container"],[1,"title"],["name","chiamata"],[1,"content"],["scrollName","contactsList",3,"elementsInPage","elements","pageChange"],[4,"zlifeListItem"],[3,"user","subtitle"],["text","Richiedi chiamata",1,"blue",3,"elementId","onClick"]],template:function(t,n){1&t&&(m.bc(0,"ion-header"),m.Wb(1,"zlife-status-bar"),m.ac(),m.bc(2,"ion-content",0),m.bc(3,"div",1),m.bc(4,"div",2),m.Wb(5,"zlife-icon",3),m.bc(6,"span"),m.Oc(7,"Chi vuoi chiamare?"),m.ac(),m.ac(),m.bc(8,"div",4),m.bc(9,"zlife-list-scroller-tracker",5),m.kc("pageChange",(function(t){return n.pageChanged(t)})),m.oc(10,"async"),m.Mc(11,q,3,5,"ng-container",6),m.ac(),m.ac(),m.ac(),m.ac()),2&t&&(m.Jb(9),m.tc("elementsInPage",3)("elements",m.pc(10,2,n.contatti$)))},directives:[a.j,y.a,a.f,$.i,E.a,T.a,W.a,x.a],pipes:[c.b],styles:["zlife-list-scroller-tracker[_ngcontent-%COMP%]{--items-margin-top:16px;--page-margin:0px}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;padding:16px}.container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{margin-left:16px;font-size:36px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{flex:1;min-height:0}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   zlife-ngrx-button[_ngcontent-%COMP%]{--font-weight:800;--font-color:#fff;--border:4px solid var(--ion-color-secondary);--background-color:var(--ion-color-secondary);--icon-height:32px;--background-color-hover:var(--ion-color-secondary-tint);--font-color-hover:var(--ion-color-secondary-contrast);--border-hover:4px solid var(--ion-color-secondary)}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   zlife-ngrx-button.green[_ngcontent-%COMP%]{--border:4px solid var(--ion-color-success-shade);--background-color:var(--ion-color-success-shade);--border-hover:4px solid var(--ion-color-success-shade);--background-color-hover:var(--ion-color-success-tint);--font-color-hover:var(--ion-color-primary-contrast)}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   zlife-ngrx-button.blue[_ngcontent-%COMP%]{--border:4px solid var(--ion-color-primary);--background-color:var(--ion-color-primary);--border-hover:4px solid var(--ion-color-primary);--background-color-hover:var(--ion-color-primary-tint)}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   zlife-ngrx-button.white[_ngcontent-%COMP%]{--border-disabled:4px solid #fff;--background-color-disabled:#fff;--font-color-disabled:#000}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmed-call[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;background-color:rgba(0,255,0,.15);padding:16px;font-size:24px;font-weight:600}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .confirmed-call[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-child{margin-left:16px}.highlight[_ngcontent-%COMP%]   zlife-ngrx-button.white[_ngcontent-%COMP%]{--border-disabled:4px solid var(--ion-color-light)!important;--background-color-disabled:var(--ion-color-light)!important}"]}),t}()},{path:"chiamata-in-arrivo",component:w},{path:"chiamata-in-corso",component:N}],L=function(){function t(){}return t.\u0275mod=m.Tb({type:t}),t.\u0275inj=m.Sb({factory:function(n){return new(n||t)},imports:[[l.l.forChild(A)],l.l]}),t}(),D=e("15JJ"),F=function(){function t(t,n,e){var c=this;this.actions$=t,this.chiamateService=n,this.store=e,this.contattiReceived$=Object(i.c)((function(){return c.actions$.pipe(Object(i.d)(v),Object(D.a)((function(t){return c.chiamateService.getContattiList()})),Object(U.a)((function(t){return O({contatti:t,dispatchToRemote:!0})})))}))}return t.\u0275fac=function(n){return new(n||t)(m.gc(i.a),m.gc(_),m.gc(o.h))},t.\u0275prov=m.Rb({token:t,factory:t.\u0275fac}),t}(),B=e("mrSG"),G=Object(o.p)({chiamataInArrivo:{fromUser:null},chiamataInCorso:{withUser:null},contattiPage:{contatti:[],currentPage:1}},Object(o.r)(d,(function(t,n){return Object(B.a)(Object(B.a)({},t),{chiamataInArrivo:Object(B.a)(Object(B.a)({},t.chiamataInArrivo),{fromUser:n.fromUser})})})),Object(o.r)(C,(function(t,n){return Object(B.a)(Object(B.a)({},t),{chiamataInCorso:Object(B.a)(Object(B.a)({},t.chiamataInCorso),{withUser:n.withUser})})})),Object(o.r)(O,(function(t,n){return Object(B.a)(Object(B.a)({},t),{contattiPage:Object(B.a)(Object(B.a)({},t.contattiPage),{contatti:n.contatti})})})));function Y(t,n){return G(t,n)}var H=function(){function t(){}return t.\u0275mod=m.Tb({type:t}),t.\u0275inj=m.Sb({factory:function(n){return new(n||t)},imports:[[c.c,L,a.q,r.b,s.a,o.j.forFeature(r.h,Y),i.b.forFeature([F])]]}),t}()}}]);