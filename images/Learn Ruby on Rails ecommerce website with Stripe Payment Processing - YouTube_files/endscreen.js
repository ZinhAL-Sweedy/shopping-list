(function(g){var window=this;var qwa=function(a,b,c,d){var e=b.gc();g.S(a.element,"ytp-suggestion-set",!!e.videoId);var f=b.getPlaylistId();d=b.dc(c,d?d:"mqdefault.jpg");var k=b instanceof g.tP?g.$V(b.lengthSeconds):null,l=!!f,f=l&&"RD"==g.ZQ(f).type,m=b instanceof g.tP?b.Aa:null;c={title:b.title,author:b.author,author_and_views:e.shortViewCount?b.author+" \u2022 "+e.shortViewCount:b.author,watch:g.T("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:k,url:b.gn(c),is_live:m,is_list:l,is_mix:f,background:d?"background-image: url("+
d+")":""};b instanceof g.aR&&(c.playlist_length=b.getLength());a.update(c)},U7=function(a,b){g.UV.call(this,{H:"div",
ca:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.o=a;this.O=!1},V7=function(a){var b={H:"div",
N:"ytp-upnext",R:{"aria-label":"{{watch}}"},L:[{H:"div",N:"ytp-cued-thumbnail-overlay-image",R:{style:"{{background}}"}},{H:"span",N:"ytp-upnext-top",L:[{H:"span",N:"ytp-upnext-header",L:[g.T("YTP_PLAYLIST_UP_NEXT")]},{H:"span",N:"ytp-upnext-title",L:["{{title}}"]},{H:"span",N:"ytp-upnext-author",L:["{{author}}"]}]},{H:"a",N:"ytp-upnext-autoplay-icon",R:{href:"{{url}}","aria-label":g.T("YTP_AUTOPLAY_NEXT")},L:[{H:"svg",R:{height:"100%",version:"1.1",viewBox:"0 0 98 98",width:"100%"},L:[{H:"circle",
N:"ytp-svg-autoplay-circle",R:{cx:"49",cy:"49",fill:"#000","fill-opacity":"0.8",r:"48"}},{H:"circle",N:"ytp-svg-autoplay-ring",R:{cx:"-49",cy:"49","fill-opacity":"0",r:"46.5",stroke:"#FFFFFF","stroke-dasharray":"293","stroke-dashoffset":"-293","stroke-width":"4",transform:"rotate(-90)"}},{H:"polygon",N:"ytp-svg-autoplay-triangle",R:{fill:"#fff",points:"32,27 72,49 32,71"}}]}]},{H:"span",N:"ytp-upnext-bottom",L:[{H:"span",N:"ytp-upnext-cancel"},{H:"span",N:"ytp-upnext-paused",L:[g.T("YTP_AUTOPLAY_PAUSED_3")]}]},
{H:"span",N:"ytp-upnext-close"}]};g.X.call(this,b);this.B=null;var c=this.wa["ytp-upnext-cancel"],b=this.wa["ytp-upnext-close"];this.B=new g.X({H:"button",ca:["ytp-upnext-cancel-button","ytp-button"],R:{tabindex:0,"aria-label":g.T("YTP_AUTOPLAY_CANCEL")},L:[g.T("YTP_CANCEL")]});g.L(this,this.B);this.B.W("click",this.gA,this);this.B.Ea(c);c=new g.X({H:"button",ca:["ytp-upnext-close-button","ytp-button"],R:{"aria-label":g.T("YTP_AUTOPLAY_CANCEL")}});g.L(this,c);c.W("click",this.gA,this);c.Ea(b);this.o=
a;this.K=this.wa["ytp-svg-autoplay-ring"];this.F=this.D=this.A=this.C=null;this.G=new g.Ct(this.Dm,5E3,this);g.L(this,this.G);this.J=0;this.T(this.wa["ytp-upnext-autoplay-icon"],"click",this.QP);this.dA();this.T(a,"autonavvisibility",this.dA);this.T(a,"mdxnowautoplaying",this.gP);this.T(a,"mdxautoplaycanceled",this.hP);this.T(a,"mdxautoplayupnext",this.kC);3==this.o.Wa()&&(a=(a=g.RU(g.MU(this.o)))?a.qH():null)&&this.kC(a)},rwa=function(a,b){a.C=b;
qwa(a,b,g.W(a.o),"hqdefault.jpg")},W7=function(a,b){a.A||(g.oG("a11y-announce",g.T("YTP_PLAYLIST_UP_NEXT")+" "+a.C.title),a.J=(0,g.BG)(),a.A=new g.Ct((0,g.y)(a.Gp,a,b),25),a.Gp(b));
g.Rp(a.element,"ytp-upnext-autoplay-paused")},Y7=function(a){X7(a);
a.J=(0,g.BG)();a.Gp();g.R(a.element,"ytp-upnext-autoplay-paused")},X7=function(a){a.A&&(a.A.dispose(),a.A=null)},swa=function(a){U7.call(this,a,"subscribecard-endscreen");
var b=a.ha();this.A=new g.X({H:"div",N:"ytp-subscribe-card",L:[{H:"img",N:"ytp-author-image",R:{src:b.profilePicture}},{H:"div",N:"ytp-subscribe-card-right",L:[{H:"div",N:"ytp-author-name",L:[b.author]},{H:"div",N:"html5-subscribe-button-container"}]}]});g.L(this,this.A);this.A.Ea(this.element);this.B=new g.G1(g.T("YTP_SUBSCRIBE"),null,g.T("YTP_UNSUBSCRIBE"),null,!0,!1,b.Bl,b.subscribed,"trailer-endscreen",null,null,a);g.L(this,this.B);this.B.Ea(this.A.wa["html5-subscribe-button-container"]);this.hide()},
Z7=function(a){var b=g.W(a),b=b.A&&!b.F;
g.X.call(this,{H:"a",N:"ytp-videowall-still",R:{href:"{{url}}",target:b?"_blank":"","aria-label":"{{watch}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},L:[{H:"div",N:"ytp-videowall-still-image",R:{style:"{{background}}"}},{H:"span",N:"ytp-videowall-still-info",L:[{H:"span",N:"ytp-videowall-still-info-bg",L:[{H:"span",N:"ytp-videowall-still-info-content",R:g.cF||g.Re?{style:"will-change: opacity"}:void 0,L:[{H:"span",N:"ytp-videowall-still-info-title",L:["{{title}}"]},
{H:"span",N:"ytp-videowall-still-info-author",L:["{{author_and_views}}"]},{H:"span",N:"ytp-videowall-still-info-live",L:[g.T("YTP_LIVE")]},{H:"span",N:"ytp-videowall-still-info-duration",L:["{{duration}}"]}]}]}]},{H:"span",ca:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],L:[{H:"span",N:"ytp-videowall-still-listlabel-icon"},g.T("YTP_PLAYLIST"),{H:"span",N:"ytp-videowall-still-listlabel-length",L:[" (",{H:"span",L:["{{playlist_length}}"]},")"]}]},{H:"span",ca:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],L:[{H:"span",N:"ytp-videowall-still-listlabel-mix-icon"},g.T("YTP_MIX"),{H:"span",N:"ytp-videowall-still-listlabel-length",L:[" (50+)"]}]}]});this.B=b;this.o=a;this.A=null;this.W("click",this.C);this.W("keypress",this.D);if(g.W(a).da){a=a.app.da;b=this.element;g.ib(a.A,b);var c=String(a.G++);b.setAttribute("data-visual-id",c);g.Me(this,(0,g.y)(a.F,a,b))}},$7=function(a){U7.call(this,a,"videowall-endscreen");
this.ea=a;this.G=0;this.B=[];this.J=this.D=this.C=null;this.K=this.U=!1;this.F=new g.XF(this);g.L(this,this.F);this.M=new g.Ct(g.za(g.R,this.element,"ytp-show-tiles"),0);g.L(this,this.M);var b=new g.X({H:"button",ca:["ytp-button","ytp-endscreen-previous"],R:{"aria-label":g.T("YTP_PREVIOUS")},L:[g.cE()]});g.L(this,b);b.Ea(this.element);b.W("click",this.IL,this);this.P=new g.uV({H:"div",N:"ytp-endscreen-content"});g.L(this,this.P);this.P.Ea(this.element);b=new g.X({H:"button",ca:["ytp-button","ytp-endscreen-next"],
R:{"aria-label":g.T("YTP_NEXT")},L:[g.dE()]});g.L(this,b);b.Ea(this.element);b.W("click",this.HL,this);this.A=new V7(a);g.L(this,this.A);g.nV(this.o,this.A.element,4);this.hide()},a8=function(a){return g.oV(a.o)&&a.Kp()&&!a.J},twa=function(a){return(0,g.H)(a.ag,function(a){return g.OZ(a)})},uwa=function(a,b,c){return 0==b&&a.C.length&&2<=c/2&&2<=c/2&&g.W(a.o).experiments.g("video_wall_emphasize_first")?4:2},b8=function(a){var b=a.ds();
b!=a.U&&(a.U=b,a.o.Y("autonavvisibility"))},c8=function(a){g.LV.call(this,a);
g.ZD({});this.o=null;this.isAvailable=!0;this.A=new g.XF(this);g.L(this,this.A);this.B=g.W(a);vwa(a)?this.o=new $7(this.g):this.B.ra?this.o=new swa(this.g):this.o=new U7(this.g);g.L(this,this.o);g.nV(this.g,this.o.element,4);this.oB();this.A.T(a,"videodatachange",this.oB,this);this.A.T(a,"crn_endscreen",this.jL,this);this.A.T(a,"crx_endscreen",this.kL,this)},vwa=function(a){a=g.W(a);
return a.Kc&&!a.ra};g.p(U7,g.UV);U7.prototype.create=function(){this.O=!0};
U7.prototype.destroy=function(){this.O=!1};
U7.prototype.Kp=function(){return!1};
U7.prototype.ds=function(){return!1};g.p(V7,g.X);g.h=V7.prototype;g.h.Dm=function(){this.D&&(this.G.stop(),this.Ca(this.F),this.F=null,this.D.close(),this.D=null)};
g.h.dA=function(){g.TV(this,g.NU(this.o))};
g.h.HP=function(){window.focus();this.Dm()};
g.h.hide=function(){g.X.prototype.hide.call(this)};
g.h.Gp=function(a){a=a||g.W(this.o).experiments.o("autoplay_time")||1E4;var b=Math.min((0,g.BG)()-this.J,a);a=Math.min(b/a,1);this.K.setAttribute("stroke-dashoffset",-293*(a+1));1<=a&&3!=this.o.Wa()?this.select(!0):this.A&&this.A.start()};
g.h.select=function(a){a=void 0===a?!1:a;var b=g.W(this.o);if(b.experiments.g("autonav_notifications")&&a&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;g.aV(this.o,"xwebnotifications",{permission:c});"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=this.C.gc(),this.Dm(),this.D=new window.Notification(g.T("YTP_PLAYLIST_UP_NEXT"),{body:c.title,icon:c.dc(b)}),this.F=this.T(this.D,"click",this.HP),this.G.start())}X7(this);
this.o.rj(!1,a)};
g.h.QP=function(a){!g.ye(this.B.element,g.NF(a))&&g.yZ(a,this.o)&&this.select()};
g.h.gA=function(){g.bV(this.o,"autonavcancel");g.PU(this.o,!0)};
g.h.gP=function(a){this.o.Wa();this.show();W7(this,a)};
g.h.kC=function(a){this.o.Wa();this.C&&this.C.gc().videoId==a.gc().videoId||rwa(this,a)};
g.h.hP=function(){this.o.Wa();X7(this);this.hide()};
g.h.X=function(){X7(this);this.Dm();g.X.prototype.X.call(this)};g.p(swa,U7);g.p(Z7,g.X);Z7.prototype.Fj=function(){var a=this.A.gc().videoId,b=this.A.getPlaylistId();g.r2(this.o.app,a,this.A.Td,b,void 0,void 0)};
Z7.prototype.C=function(a){g.rV(this.o,this.element);g.yZ(a,this.o,this.B,this.A.Td||void 0)&&this.Fj()};
Z7.prototype.D=function(a){switch(a.keyCode){case 13:case 32:g.SF(a)||(this.Fj(),g.UF(a))}};g.p($7,U7);g.h=$7.prototype;g.h.create=function(){U7.prototype.create.call(this);var a=this.o.ha();a&&(this.C=twa(a),this.D=a);this.ph();this.F.T(this.o,"appresize",this.ph);this.F.T(this.o,"videodatachange",this.JL);this.F.T(this.o,"autonavchange",this.fz);this.F.T(this.o,"autonavcancel",this.GL);this.F.T(this.element,"transitionend",this.VQ)};
g.h.destroy=function(){g.ZF(this.F);g.Oe(this.B);this.B=[];this.C=null;U7.prototype.destroy.call(this);g.Rp(this.element,"ytp-show-tiles");this.M.stop()};
g.h.Kp=function(){return 1!=this.D.autonavState};
g.h.show=function(){U7.prototype.show.call(this);g.Rp(this.element,"ytp-show-tiles");g.W(this.o).isMobile?g.Dt(this.M):this.M.start();(this.K||this.J&&this.J!=this.D.clientPlaybackNonce)&&g.PU(this.o,!1);var a=a8(this);g.oV(this.o)&&g.W(this.o).experiments.g("ui_logging")&&g.aV(this.o,"end",{cancelButtonShow:a?"1":"0",state:this.Kp()?"enabled":"disabled"});a?(b8(this),2==this.D.autonavState?g.W(this.o).experiments.g("fast_autonav_in_background")&&3==this.o.Kn()?this.A.select(!0):W7(this.A):3==this.D.autonavState&&
Y7(this.A)):(g.PU(this.o,!0),b8(this))};
g.h.hide=function(){U7.prototype.hide.call(this);Y7(this.A);b8(this)};
g.h.VQ=function(a){g.NF(a)==this.element&&this.ph()};
g.h.ph=function(){if(this.C&&this.C.length){g.R(this.element,"ytp-endscreen-paginate");var a=g.vh(this.element),b=a.width/a.height,c=96/54,d=2,e=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.C.length,m=Math.pow(2,2),n=uwa(this,0,k),q=uwa(this,1,k);var r=l*m+(Math.pow(n,2)-m);r+=Math.pow(q,2)-m;for(r-=m;0<r&&(d<f||e<k);){var w=d/2,A=e/2,D=d<=f-2&&r>=A*m,B=e<=k-2&&r>=w*m;if((w+1)/A*c/b>b/(w/(A+1)*c)&&B)r-=w*m,e+=2;else if(D)r-=A*m,d+=2;else if(B)r-=w*m,e+=2;else break}c=!1;f=2+n;r>=3*
m&&6>=l*m-r&&(e>=f||d>=f)&&2>=q&&(c=!0);m=96*d;r=54*e;b=m/r<b?a.height/r:a.width/m;b=Math.min(b,2);m*=b;r*=b;m*=g.Jd(a.width/m||1,1,1.21);r*=g.Jd(a.height/r||1,1,1.21);m=Math.floor(Math.min(a.width,m));r=Math.floor(Math.min(a.height,r));a=this.P.element;g.uh(a,m,r);g.ch(a,{marginLeft:m/-2+"px",marginTop:r/-2+"px"});rwa(this.A,this.C[0]);g.S(this.element,"ytp-endscreen-takeover",a8(this));b8(this);m+=4;r+=4;b=0;f=!1;for(k=0;k<d;k++)for(w=0;w<e;w++)if(A=2<q&&1<=b&&!f?b+1:b,D=0,c&&k>=d-2&&w>=e-2?D=1:
0==w%2&&0==k%2&&(w<n&&k<n?0==w&&0==k&&(D=n):2<q&&w>=e-q&&k>=d-q?w==e-q&&k==d-q&&(f=!0,A=1,D=q):D=2),A=g.Kd(A+this.G,l),0!=D){B=this.B[b];B||(B=new Z7(this.o),this.B[b]=B,a.appendChild(B.element));var M=Math.floor(r*w/e),Z=Math.floor(m*k/d),Za=Math.floor(r*(w+D)/e)-M-4,nb=Math.floor(m*(k+D)/d)-Z-4;g.jh(B.element,Z,M);g.uh(B.element,nb,Za);g.ch(B.element,"transitionDelay",(w+k)/20+"s");g.S(B.element,"ytp-videowall-still-mini",1==D);g.S(B.element,"ytp-videowall-still-large",2<D);D=B;A=this.C[A];D.A=
A;qwa(D,A,g.W(D.o),g.Pp(D.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg");B=A.Td;A=D.o;g.W(A).da&&(A=A.app.da,B=B&&B.itct,D=D.element.getAttribute("data-visual-id"),g.pV(A,"onLogServerVeCreated",{id:D,tracking_params:B}));b++}g.S(this.element,"ytp-endscreen-paginate",b<l);for(d=this.B.length-1;d>=b;d--)e=this.B[d],g.re(e.element),g.Ne(e);this.B.length=b}};
g.h.JL=function(){var a=this.o.ha();this.D!=a&&(this.G=0,this.C=twa(a),this.D=a,this.ph())};
g.h.HL=function(){this.G+=this.B.length;this.ph()};
g.h.IL=function(){this.G-=this.B.length;this.ph()};
g.h.AJ=function(){return!!this.A.A};
g.h.fz=function(a){1==a?(this.K=!1,this.J=this.D.clientPlaybackNonce,X7(this.A),this.g&&this.ph()):(this.K=!0,this.g&&a8(this)&&(2==a?W7(this.A):3==a&&Y7(this.A)))};
g.h.GL=function(a){if(a){for(a=0;a<this.B.length;a++)g.sV(this.ea,this.B[a].element,!0);this.fz(1)}else this.J=null,this.K=!1;this.ph()};
g.h.ds=function(){return this.g&&a8(this)};g.p(c8,g.LV);g.h=c8.prototype;g.h.bz=function(){var a=this.g.ha(),b=!vwa(this.g)||!(!a.ag||!a.ag.length),a=g.OP(a,"ypc_module"),c=g.s2(this.g.app);return(b||!1)&&!a&&!c};
g.h.az=function(){return this.o.ds()};
g.h.xJ=function(){return this.az()?this.o.AJ():!1};
g.h.X=function(){g.jV(this.g,"endscreen");g.LV.prototype.X.call(this)};
g.h.load=function(){g.LV.prototype.load.call(this);this.o.show();g.W(this.g).ra&&.01>Math.random()&&g.aV(this.g,"end",{trailerEndscreenShow:1})};
g.h.unload=function(){g.LV.prototype.unload.call(this);this.o.hide();this.o.destroy();this.isAvailable=!1};
g.h.jL=function(a){this.bz()&&(this.o.O||this.o.create(),"load"==a.getId()&&this.load())};
g.h.kL=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.oB=function(){g.jV(this.g,"endscreen");var a=Math.max(1E3*(this.g.ha().lengthSeconds-10),0),a=new g.yJ(a,0x8000000000000,{id:"preload",namespace:"endscreen"}),b=new g.yJ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.gV(this.g,[a,b])};g.cW("endscreen",c8);})(_yt_player);
