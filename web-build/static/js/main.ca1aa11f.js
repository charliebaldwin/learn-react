(()=>{var e={6057:(e,t,n)=>{var a={"./adaptive-icon.png":3090,"./cool_file.mp3":388,"./favicon.png":2663,"./icon.png":7270,"./oran.png":5087,"./roto-headshot-square.png":2119,"./splash.png":6958};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=o,e.exports=i,i.id=6057},472:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var a=n(3426),i=n(2010),o=n(9385),r=n(3287),l=n(2629);i.default.create({image:{width:320,height:440,borderRadius:18}});var s=n(885),u=n(5326),d=n(1054),c=n(5004),f=n(6184),h=n(3719),m=n(258),g=n(8510),v=n(694),x=n(2543),b={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/2+"vmin "+shadowShared.value/2+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.35)"};}',location:"/Users/charlie/Development/learn-react/components/NavButton.js"},p={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:(shadowShared.value+.5)/3+"vmin "+(shadowShared.value+.5)/3+"vmin "+(shadowShared.value/3+.5)+"vmin rgba(0, 0, 0, .5)"};}',location:"/Users/charlie/Development/learn-react/components/NavButton.js"};function y(e){var t=e.label,n=e.icon,a=(e.onPress,e.onPressGroup),i=e.index,r=e.currIndex,y=e.sections,j=e.scrollerY,S=e.scrollerH,C=(0,f.useSharedValue)(0),k=function(e){C.value=(0,h.withTiming)(e,{duration:160,easing:m.Easing.inOut(m.Easing.quad)})},_=g.default(u.default),I=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${C.value/2}vmin ${C.value/2}vmin ${C.value}vmin rgba(0, 0, 0, 0.35)`}};return e._closure={shadowShared:C},e.__initData=b,e.__workletHash=3987499059661,e}()),E=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${(C.value+.5)/3}vmin ${(C.value+.5)/3}vmin ${C.value/3+.5}vmin rgba(0, 0, 0, .5)`}};return e._closure={shadowShared:C},e.__initData=p,e.__workletHash=0x9e941a747a3,e}()),R=((0,f.useSharedValue)(1),c.useState(0)),O=(0,s.default)(R,2),P=O[0];O[1];return(0,l.jsx)(o.default,{style:[w.buttonContainer,{padding:0}],onLayout:function(e){y[i].setScrollerY(e.nativeEvent.layout.y),S.value=e.nativeEvent.layout.height-0},children:(0,l.jsxs)(_,{style:r==i?[w.buttonEnabled,E]:[w.buttonDisabled,I],onPress:function(){k(0),j.value=P+0,a(i)},onHoverIn:function(){k(1.3)},onHoverOut:function(){k(0)},children:[(0,l.jsx)(x.default,{style:w.buttonIcon,name:n,size:w.buttonLabel.fontSize,color:r==i?"white":"black"}),(0,l.jsx)(d.default,{style:[{color:r==i?"white":"black"},w.buttonLabel],children:t})]})})}var w=i.default.create({buttonContainer:{flex:1,maxHeight:"7vh",alignItems:"center",justifyContent:"center",borderColor:"green",borderWidth:0},buttonEnabled:{zIndex:10,position:"relative",backgroundColor:"#000",borderRadius:"max(10px, 1.8vmin)",width:"100%",height:"100%",paddingLeft:"2vh",paddingVertical:"2vh",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},buttonDisabled:{zIndex:1,position:"relative",backgroundColor:"transparent",borderRadius:"max(10px, 1.8vmin)",borderWidth:0,borderColor:"#000",width:"100%",height:"100%",paddingLeft:"2vh",paddingVertical:"2vh",flexDirection:"row",alignItems:"center",justifyContent:"flex-start"},buttonIcon:{paddingRight:"3vmin"},buttonLabel:{fontSize:"calc(4pt + 3vmin )",lineHeight:"calc(4pt + 2.5vmin )",fontWeight:600,textAlign:"left",fontFamily:"Kanit",borderColor:"green",borderWidth:0}}),j={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/2+"vmin "+shadowShared.value/2+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.35)"};}',location:"/Users/charlie/Development/learn-react/components/Button.js"};function S(e){var t=e.label,n=e.onPress,a=e.icon,i=(0,f.useSharedValue)(.7),r=function(e){i.value=(0,h.withTiming)(e,{duration:100,easing:m.Easing.inOut(m.Easing.quad)})},s=g.default(u.default),c=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${i.value/2}vmin ${i.value/2}vmin ${i.value}vmin rgba(0, 0, 0, 0.35)`}};return e._closure={shadowShared:i},e.__initData=j,e.__workletHash=3987499059661,e}());return(0,l.jsx)(o.default,{style:C.buttonContainer,children:(0,l.jsxs)(s,{style:[C.button,c],onPress:n,onHoverIn:function(){r(1.5)},onHoverOut:function(){r(.7)},children:[(0,l.jsx)(x.default,{name:a,size:C.buttonLabel.fontSize,color:"white",style:C.buttonIcon}),(0,l.jsx)(d.default,{style:C.buttonLabel,children:t})]})})}var C=i.default.create({buttonContainer:{flex:1,alignItems:"center",justifyContent:"center"},button:{backgroundColor:"#000",borderRadius:"max(10px, 1.8vmin)",width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingHorizontal:"1.5vw",gap:"1.5vw"},buttonLabel:{fontSize:"calc(4pt + 3vmin )",lineHeight:"calc(4pt + 2.5vmin )",color:"#fff",fontWeight:600,textAlign:"left",fontFamily:"Kanit"},buttonIcon:{}}),k=n(7554);function _(e){var t=e.textStyles;return(0,l.jsxs)(o.default,{children:[(0,l.jsx)(d.default,{style:t.sectionTitle,children:"contact"}),(0,l.jsxs)(o.default,{style:{height:60,width:"100%",flexDirection:"row",alignItems:"center"},children:[(0,l.jsx)(x.default,{name:"mail",size:t.label.fontSize,color:"black"}),(0,l.jsx)(d.default,{style:t.label,children:(0,l.jsx)("a",{href:"mailto:charlie@charliebaldwin.com",children:"charlie@charliebaldwin.com"})})]}),(0,l.jsxs)(o.default,{style:{height:60,width:"100%",flexDirection:"row",alignItems:"center"},children:[(0,l.jsx)(x.default,{name:"call",size:t.label.fontSize,color:"black"}),(0,l.jsx)(d.default,{style:t.label,children:(0,l.jsx)("a",{href:"tel:16507395634",children:"+1 (650) 739-5634"})})]})]})}function I(e){var t=e.tailSpacing,n=e.children,a=e.index,i=e.sections;return(0,l.jsxs)(o.default,{onLayout:function(e){i[a].setPageY(e.nativeEvent.layout.y)},children:[n,(0,l.jsx)(o.default,{style:{height:t,backgroundColor:"transparent",borderWidth:0,borderColor:"#fafafa",borderRadius:20}})]})}i.default.create({container:{}});function E(e){var t=e.textStyles;return(0,l.jsxs)(o.default,{children:[(0,l.jsx)(d.default,{style:t.title,children:"hi, I'm Charlie."}),(0,l.jsx)(d.default,{style:t.sectionTitle,children:"I\u2019m a UI and technical artist making games."}),(0,l.jsx)(o.default,{style:{height:"5vh"}}),(0,l.jsx)(d.default,{style:t.body,children:"scroll to see some of my work, or use the sidebar to jump to the section you\u2019re looking for."})]})}function R(e){var t=e.textStyles,n=e.onPressWork,a=function(e){n({title:e})};return(0,l.jsxs)(o.default,{children:[(0,l.jsx)(d.default,{style:t.sectionTitle,children:"works"}),(0,l.jsx)(d.default,{style:t.label,children:"group 1"}),(0,l.jsxs)(o.default,{style:D.worksContainer,children:[(0,l.jsx)(P,{title:"project 1",onPress:a}),(0,l.jsx)(P,{title:"project 2",onPress:a}),(0,l.jsx)(P,{title:"project 3",onPress:a}),(0,l.jsx)(P,{title:"project 4",onPress:a})]}),(0,l.jsx)(d.default,{style:t.label,children:"group 2"}),(0,l.jsxs)(o.default,{style:D.worksContainer,children:[(0,l.jsx)(P,{title:"project 1",onPress:a}),(0,l.jsx)(P,{title:"project 2",onPress:a}),(0,l.jsx)(P,{title:"project 3",onPress:a}),(0,l.jsx)(P,{title:"project 4",onPress:a}),(0,l.jsx)(P,{title:"project 5",onPress:a})]})]})}var O={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/2+"vmin "+shadowShared.value/2+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.35)"};}',location:"/Users/charlie/Development/learn-react/components/SectionWorks.js"};function P(e){var t=e.title,n=e.onPress,a=(0,f.useSharedValue)(1),i=function(e){a.value=(0,h.withTiming)(e,{duration:160,easing:m.Easing.inOut(m.Easing.quad)})},r=g.default(u.default),s=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${a.value/2}vmin ${a.value/2}vmin ${a.value}vmin rgba(0, 0, 0, 0.35)`}};return e._closure={shadowShared:a},e.__initData=O,e.__workletHash=3987499059661,e}());return(0,l.jsxs)(r,{style:[D.work,s],onHoverIn:function(){i(3)},onHoverOut:function(){i(1)},onPress:function(){n(t)},children:[(0,l.jsx)(o.default,{style:D.workButton}),(0,l.jsx)(d.default,{style:D.workLabel,children:t})]})}var D=i.default.create({worksContainer:{display:"flex",flexFlow:"row wrap-reverse",justifyContent:"space-evenly",alignItems:"flex-start",width:"100%",marginBottom:20},work:{flexBasis:"14vw",flexGrow:1,flexDirection:"column",alignItems:"stretch",marginHorizontal:10,marginVertical:20,borderColor:"#000",borderWidth:0,borderRadius:35},workButton:{aspectRatio:1.618,backgroundColor:"#bbb",borderRadius:30},workLabel:{fontSize:"min(28pt, 1.4vw)",fontWeight:500,textAlign:"center",fontFamily:"Kanit",lineHeight:40,padding:5,marginBottom:10}});function H(e){var t=e.textStyles;return(0,l.jsx)(o.default,{children:(0,l.jsx)(d.default,{style:t.sectionTitle,children:"roles"})})}function T(e){var t=e.textStyles;return(0,l.jsxs)(o.default,{style:{alignItems:"center"},children:[(0,l.jsxs)(o.default,{style:Y.container,children:[(0,l.jsxs)(o.default,{style:Y.textContainer,children:[(0,l.jsx)(d.default,{style:t.sectionTitle,children:"about me"}),(0,l.jsxs)(d.default,{style:t.body,children:["\t","Lorem ipsum fermentum odio eu feugiat pretium nibh ipsum consequat. Cras tincidunt lobortis feugiat vivamus at. Odio euismod lacinia at quis risus sed. Porta non pulvinar neque laoreet suspendisse interdum consectetur. Pretium aenean pharetra magna ac placerat. Pretium fusce id velit ut tortor. Viverra tellus in hac habitasse platea dictumst vestibulum.",(0,l.jsx)("br",{}),"\t","Dui vivamus arcu felis bibendum ut tristique et egestas. Natoque penatibus et magnis dis parturient montes. Dolor sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Dictum sit amet justo donec. Enim sed faucibus turpis in. Cras sed felis eget velit. Viverra maecenas accumsan lacus vel facilisis. Leo urna molestie at elementum eu facilisis sed odio. Purus sit amet luctus venenatis. Eget gravida cum sociis natoque penatibus et magnis dis. Adipiscing at in tellus integer feugiat scelerisque varius morbi."]})]}),(0,l.jsx)(o.default,{style:Y.imageContainer,children:(0,l.jsx)(o.default,{style:Y.image,children:(0,l.jsx)(r.default,{style:{flex:1,borderRadius:"1vw"},resizeMode:"contain",source:n(2119)})})})]}),(0,l.jsx)(o.default,{style:{width:"100%",height:"max(8vh, 40px)",paddingHorizontal:"5vw",marginVertical:"5vh"},children:(0,l.jsx)(S,{label:"download resume",icon:"document-text"})})]})}var Y=i.default.create({container:{flexDirection:"row"},body:{fontSize:24,fontWeight:400,textAlign:"left",fontFamily:"Kanit",lineHeight:32},textContainer:{flex:1,flexBasis:"65%",flexShrink:2,paddingRight:"4vw",flexDirection:"column"},imageContainer:{flex:2,flexGrow:2,alignItems:"flex-end"},image:{width:"100%",aspectRatio:1,borderRadius:"1vw",boxShadow:"5px 5px 12px rgba(0,0,0,.4)"},filler:{height:500,width:"100%",marginTop:20,marginBottom:30,backgroundColor:"#ddd",borderRadius:20}}),z=n(9294),L=n(6434);function A(e){e.enabled,e.setEnabled,e.content,e.textStyles;return(0,l.jsxs)(o.default,{style:V.galleryContainer,children:[(0,l.jsx)(o.default,{style:V.mediaContainer,children:(0,l.jsx)(o.default,{style:V.media,children:(0,l.jsx)(r.default,{style:{flex:1,borderRadius:"1vw"},resizeMode:"contain",source:n(5087)})})}),(0,l.jsxs)(o.default,{style:V.buttonsContainer,children:[(0,l.jsx)(B,{icon:"image",thumbnail:"oran.png"}),(0,l.jsx)(B,{icon:"image",thumbnail:"roto-headshot-square.png"}),(0,l.jsx)(B,{icon:"image",thumbnail:"favicon.png"}),(0,l.jsx)(B,{icon:"layers",thumbnail:"icon.png"})]}),(0,l.jsx)(o.default,{style:V.buttonSelectorContainer,children:(0,l.jsx)(o.default,{style:V.buttonSelector})})]})}var W={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/3+"vmin "+shadowShared.value/3+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.5)"};}',location:"/Users/charlie/Development/learn-react/components/MediaGallery.js"};function B(e){var t=e.icon,a=e.thumbnail,i=(0,f.useSharedValue)(.3),o=function(e){i.value=(0,h.withTiming)(e,{duration:100,easing:m.Easing.inOut(m.Easing.quad)})},r=g.default(u.default),s=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${i.value/3}vmin ${i.value/3}vmin ${i.value}vmin rgba(0, 0, 0, 0.5)`}};return e._closure={shadowShared:i},e.__initData=W,e.__workletHash=1697204959614,e}());return(0,l.jsx)(r,{style:[V.button,s],onHoverIn:function(){o(1.3)},onHoverOut:function(){o(.3)},children:(0,l.jsx)(L.default,{style:{flex:1,borderRadius:15,fontSize:"4vmin",aspectRatio:1,alignItems:"center",justifyContent:"center"},resizeMode:"cover",source:n(6057)(`./${a}`),children:(0,l.jsx)(x.default,{name:t,size:V.button.fontSize,color:"white"})})})}var V=i.default.create({galleryContainer:{flex:1,flexDirection:"column",alignItems:"stretch"},mediaContainer:{flex:9,flexDirection:"column",justifyContent:"center",alignContent:"stretch"},buttonsContainer:{flex:1,flexDirection:"row",justifyContent:"center",alignContent:"stretch",gap:10,paddingVertical:10,borderWidth:0,borderColor:"blue",borderRadius:8},buttonSelectorContainer:{flex:.25,flexDirection:"row",alignItems:"stretch",justifyContent:"center"},media:{flex:1,borderRadius:30,boxShadow:"3px 3px 13px rgba(0,0,0,.3)",backgroundColor:"#000",borderWidth:0,borderColor:"orange"},button:{fontSize:"4vmin",aspectRatio:1,backgroundColor:"#bbb",borderRadius:15,alignItems:"center",justifyContent:"center"},buttonSelector:{width:75,backgroundColor:"#000",borderTopRightRadius:15,borderTopLeftRadius:15}});function $(e){var t=e.enabled,n=e.setEnabled,a=e.content,i=e.textStyles;return(0,l.jsxs)(z.default,{transparent:!0,visible:t,animationType:"fade",children:[(0,l.jsx)(o.default,{style:q.background}),(0,l.jsx)(u.default,{onPress:function(){n(!1)},style:{width:"100%",height:"100%",display:"flex"},children:(0,l.jsxs)(o.default,{style:q.panel,children:[(0,l.jsxs)(o.default,{style:q.headerContainer,children:[(0,l.jsx)(d.default,{style:i.sectionTitle,children:a.title}),(0,l.jsx)(d.default,{style:[i.sectionTitle,{fontSize:42,textAlign:"right"}],children:"roto, 2023"})]}),(0,l.jsxs)(o.default,{style:q.bodyContainer,children:[(0,l.jsx)(o.default,{style:q.bodyColumnL,children:(0,l.jsx)(d.default,{style:i.body,children:"sample body text sample body text sample body text sample body text sample body text sample body text sample body text sample body text"})}),(0,l.jsx)(o.default,{style:q.bodyColumnR,children:(0,l.jsx)(A,{})})]})]})})]})}var q=i.default.create({background:{backgroundColor:"#000",opacity:.75,width:"100%",height:"100%",position:"absolute"},panel:{flex:1,flexDirection:"column",alignItems:"stretch",margin:30,marginLeft:150,padding:30,paddingBottom:0,backgroundColor:"#fff",borderRadius:30,boxShadow:"5px 5px 20px rgba(0,0,0,.4)"},headerContainer:{flex:1,flexDirection:"row",borderWidth:0,borderColor:"blue",borderRadius:10},bodyContainer:{flex:11,flexDirection:"row",alignItems:"stretch",borderWidth:0,borderColor:"red",borderRadius:10},bodyColumnL:{flex:1,flexGrow:1,marginBottom:30,paddingHorizontal:20,paddingVertical:20,borderWidth:0,borderColor:"yellow",borderRadius:10},bodyColumnR:{aspectRatio:1}}),F=n(1236),N={code:"function anonymous(){const{withTiming,currSection,Easing}=this._closure;return{transform:[{translateY:withTiming(currSection.value.scrollerY,{duration:400,easing:Easing.inOut(Easing.poly(4))})}]};}",location:"/Users/charlie/Development/learn-react/components/NavBar.js"};function U(e){var t=e.sections,n=e.currSection,a=e.onNavClicked,i=c.useState(0),r=(0,s.default)(i,2),u=r[0],d=r[1],g=(0,f.useSharedValue)(0),x=(0,f.useSharedValue)(47),b=function(e){d(e),a(e),console.log(e)},p=(0,v.useAnimatedStyle)(function(){var e=function(){return{transform:[{translateY:(0,h.withTiming)(n.value.scrollerY,{duration:400,easing:m.Easing.inOut(m.Easing.poly(4))})}]}};return e._closure={withTiming:h.withTiming,currSection:n,Easing:m.Easing},e.__initData=N,e.__workletHash=0xe720b823c64,e}());return(0,l.jsxs)(o.default,{style:M.columns,onLayout:function(){b(u)},children:[(0,l.jsx)(o.default,{style:M.scrollerContainer,children:(0,l.jsx)(F.default,{style:[M.scroller,p,{height:x}]})}),(0,l.jsxs)(o.default,{style:M.buttonsContainer,children:[(0,l.jsx)(y,{label:"home",onPressGroup:b,index:0,currIndex:n.value.index,icon:"home",sections:t,scrollerY:g,scrollerH:x}),(0,l.jsx)(y,{label:"works",onPressGroup:b,index:1,currIndex:n.value.index,icon:"grid",sections:t,scrollerY:g,scrollerH:x}),(0,l.jsx)(y,{label:"roles",onPressGroup:b,index:2,currIndex:n.value.index,icon:"briefcase",sections:t,scrollerY:g,scrollerH:x}),(0,l.jsx)(y,{label:"about me",onPressGroup:b,index:3,currIndex:n.value.index,icon:"body",sections:t,scrollerY:g,scrollerH:x}),(0,l.jsx)(y,{label:"contact",onPressGroup:b,index:4,currIndex:n.value.index,icon:"mail",sections:t,scrollerY:g,scrollerH:x})]})]})}var M=i.default.create({columns:{flexDirection:"row",backgroundColor:"#fff",borderTopRightRadius:20,borderBottomRightRadius:20},scrollerContainer:{flex:"1",alignItems:"flex-end",paddingRight:".5vw"},scroller:{width:70,borderRadius:"max(10px, 1.8vmin)",backgroundColor:"#000",boxShadow:"0.25vmin 0.25vmin 0.5vmin rgba(0, 0, 0, 0.5)"},buttonsContainer:{justifyContent:"left",marginLeft:10,height:"auto",flexDirection:"column",gap:".5vmin",flex:20}});var G={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/3+"vmin "+shadowShared.value/3+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.5)"};}',location:"/Users/charlie/Development/learn-react/components/IconButton.js"};function K(e){e.label;var t=e.onPress,n=e.isVisible,a=e.icon,i=(0,f.useSharedValue)(.5),r=function(e){i.value=(0,h.withTiming)(e,{duration:150,easing:m.Easing.inOut(m.Easing.quad)})},s=g.default(u.default),d=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${i.value/3}vmin ${i.value/3}vmin ${i.value}vmin rgba(0, 0, 0, 0.5)`}};return e._closure={shadowShared:i},e.__initData=G,e.__workletHash=1697204959614,e}());return(0,l.jsx)(o.default,{style:[{opacity:n?1:0},J.buttonContainer],children:(0,l.jsx)(s,{style:[J.button,d],onPress:t,onHoverIn:function(){r(1.5)},onHoverOut:function(){r(.5)},children:(0,l.jsx)(x.default,{name:a,size:J.button.fontSize,color:"white"})})})}var J=i.default.create({buttonContainer:{width:65,height:65,alignItems:"center",justifyContent:"center",padding:6},button:{backgroundColor:"#000",color:"#fff",borderRadius:"max(8px, 1.3vmin)",width:"6vmin",fontSize:"3vmin",aspectRatio:1,justifyContent:"center",alignItems:"center"},buttonIcon:{paddingRight:8}}),Q=n(1699),X=n(388),Z={code:'function anonymous(){const{shadowShared}=this._closure;return{boxShadow:shadowShared.value/2+"vmin "+shadowShared.value/2+"vmin "+shadowShared.value+"vmin rgba(0, 0, 0, 0.35)"};}',location:"/Users/charlie/Development/learn-react/components/SoundButton.js"};function ee(e){var t=e.label,n=(e.onPress,e.icon),a=(0,f.useSharedValue)(.7),i=function(e){a.value=(0,h.withTiming)(e,{duration:100,easing:m.Easing.inOut(m.Easing.quad)})},r=g.default(u.default),c=(0,v.useAnimatedStyle)(function(){var e=function(){return{boxShadow:`${a.value/2}vmin ${a.value/2}vmin ${a.value}vmin rgba(0, 0, 0, 0.35)`}};return e._closure={shadowShared:a},e.__initData=Z,e.__workletHash=3987499059661,e}()),b=(0,Q.default)(X),p=(0,s.default)(b,1)[0];return(0,l.jsx)(o.default,{style:te.buttonContainer,children:(0,l.jsxs)(r,{style:[te.button,c],onPress:p,onHoverIn:function(){i(1.5)},onHoverOut:function(){i(.7)},children:[(0,l.jsx)(x.default,{name:n,size:te.buttonLabel.fontSize,color:"white",style:te.buttonIcon}),(0,l.jsx)(d.default,{style:te.buttonLabel,children:t})]})})}var te=i.default.create({buttonContainer:{flex:1,alignItems:"center",justifyContent:"center"},button:{backgroundColor:"#000",borderRadius:"max(10px, 1.8vmin)",width:"100%",height:"100%",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingHorizontal:"1.5vw",gap:"1.5vw"},buttonLabel:{fontSize:"calc(4pt + 3vmin )",lineHeight:"calc(4pt + 2.5vmin )",color:"#fff",fontWeight:600,textAlign:"left",fontFamily:"Kanit"},buttonIcon:{}});n(9787);function ne(e){var t=c.useRef(),n=(0,c.useState)(0),a=(0,s.default)(n,2),i=a[0],r=a[1],u=(0,c.useState)(0),d=(0,s.default)(u,2),h=(d[0],d[1]),m=(0,c.useState)(0),g=(0,s.default)(m,2),v=(g[0],g[1]),x=(0,c.useState)(0),b=(0,s.default)(x,2),p=b[0],y=b[1],w=(0,c.useState)(0),j=(0,s.default)(w,2),S=j[0],C=j[1],O=(0,c.useState)(0),P=(0,s.default)(O,2),D=P[0],Y=P[1],z=(0,c.useState)(0),L=(0,s.default)(z,2),A=L[0],W=L[1],B=(0,c.useState)(0),V=(0,s.default)(B,2),q=V[0],F=V[1],N=(0,c.useState)(0),M=(0,s.default)(N,2),G=M[0],J=M[1],Q=(0,c.useState)(0),X=(0,s.default)(Q,2),Z=X[0],te=X[1],ne=(0,c.useState)(0),oe=(0,s.default)(ne,2),re=oe[0],le=oe[1],se=(0,c.useState)(0),ue=(0,s.default)(se,2),de=ue[0],ce=ue[1],fe=(0,c.useState)(0),he=(0,s.default)(fe,2),me=[{index:0,name:"home",pageY:p,setPageY:y,scrollerY:G,setScrollerY:J},{index:1,name:"works",pageY:S,setPageY:C,scrollerY:Z,setScrollerY:te},{index:2,name:"roles",pageY:D,setPageY:Y,scrollerY:re,setScrollerY:le},{index:3,name:"about",pageY:A,setPageY:W,scrollerY:de,setScrollerY:ce},{index:4,name:"contact",pageY:q,setPageY:F,scrollerY:he[0],setScrollerY:he[1]}],ge=(0,c.useState)(0),ve=(0,s.default)(ge,2),xe=ve[0],be=ve[1],pe=(0,f.useSharedValue)(me[0]),ye=(0,c.useState)(!1),we=(0,s.default)(ye,2),je=we[0],Se=we[1],Ce=(0,c.useState)({title:"empty modal"}),ke=(0,s.default)(Ce,2),_e=ke[0];ke[1];return(0,l.jsxs)(o.default,{style:ae.group,children:[(0,l.jsx)($,{enabled:je,setEnabled:Se,content:_e,textStyles:ie}),(0,l.jsx)(o.default,{style:ae.sidebarLeft,children:(0,l.jsx)(U,{onNavClicked:function(e){be(e),pe.value=me[e];var n=me[e].pageY-50;t.current.scrollTo({x:0,y:n,animated:!1}),console.log(n)},sections:me,currSection:pe})}),(0,l.jsx)(o.default,{style:ae.colMain,children:(0,l.jsx)(k.default,{ref:t,style:ae.scrollgroup,directionalLockEnabled:!0,showsVerticalScrollIndicator:!0,onLayout:function(e){var t=e.nativeEvent.layout.height;v(t)},onScroll:function(e){var t=e.nativeEvent.contentOffset.y;r(t),xe<me.length-1&&t>=me[xe+1].pageY-200?(pe.value=me[xe+1],be(xe+1)):xe>0&&t<me[xe].pageY-200&&(pe.value=me[xe-1],be(xe-1))},scrollEventThrottle:32,children:(0,l.jsxs)(o.default,{onLayout:function(e){var t=e.nativeEvent.layout.height;h(t)},style:ae.sectionsContainer,children:[(0,l.jsxs)(I,{tailSpacing:200,index:0,sections:me,children:[(0,l.jsx)(o.default,{style:{height:"20vh"}}),(0,l.jsx)(E,{textStyles:ie})]}),(0,l.jsx)(I,{tailSpacing:200,index:1,sections:me,children:(0,l.jsx)(R,{textStyles:ie,onPressWork:function(e){Se(!0)}})}),(0,l.jsx)(I,{tailSpacing:50,index:2,sections:me,children:(0,l.jsx)(H,{textStyles:ie})}),(0,l.jsx)(I,{tailSpacing:30,index:3,sections:me,children:(0,l.jsx)(T,{textStyles:ie})}),(0,l.jsx)(o.default,{style:{height:50,marginBottom:100},children:(0,l.jsx)(ee,{label:"mikaela click this!",icon:"volume-high"})}),(0,l.jsx)(I,{tailSpacing:1e3,index:4,sections:me,children:(0,l.jsx)(_,{textStyles:ie})})]})})}),(0,l.jsx)(o.default,{style:ae.sidebarRight,children:(0,l.jsx)(o.default,{style:{flex:1,justifyContent:"center",alignContent:"center",paddingBottom:30},children:(0,l.jsx)(K,{icon:"caret-up",isVisible:i>0,onPress:function(){t.current.scrollTo({x:0,y:scrollY,animated:!0})}})})})]})}var ae=i.default.create({group:{width:"100%",height:"100%",flexDirection:"row",alignItems:"stretch",backgroundColor:"#fff"},scrollgroup:{height:"100vh",padding:0,width:"80%",borderRadius:20},sidebarLeft:{flex:2.5,minWidth:160,justifyContent:"center"},sidebarRight:{flex:1,flexShrink:10,justifyContent:"center",alignItems:"center"},colMain:{flex:10,flexDirection:"row",alignItems:"center",paddingHorizontal:"0vw",borderRadius:30},sectionsContainer:{marginRight:"16vw",marginLeft:"8vw"},title:{fontSize:96,fontWeight:700,fontFamily:"Kanit"},full:{width:"100%",height:"100%"}}),ie=i.default.create({title:{fontSize:"min(96pt, 5vw)",fontWeight:700,textAlign:"left",fontFamily:"Kanit",width:"75%"},sectionTitle:{fontSize:"min(64pt, 3vw)",fontWeight:600,textAlign:"left",fontFamily:"Kanit",lineHeight:"min(60pt, 3vw)",width:"60%",paddingBottom:"1vw"},body:{fontSize:"min(18pt, 1.5vw)",fontWeight:400,textAlign:"left",fontFamily:"Kanit",lineHeight:"min(24pt, 2vw)"},label:{fontSize:"min(36pt, 1.8vw)",fontWeight:600,textAlign:"left",fontFamily:"Kanit",lineHeight:36,paddingLeft:"1.5vw",width:"55%"}}),oe=(n(7513),n(7270),{code:"function anonymous(){const{withTiming,translateY,Easing}=this._closure;return{transform:[{translateY:withTiming(translateY.value*10,{duration:500,easing:Easing.out(Easing.poly(6))})}]};}",location:"/Users/charlie/Development/learn-react/App.js"});function re(){var e=(0,f.useSharedValue)(0);(0,v.useAnimatedStyle)(function(){var t=function(){return{transform:[{translateY:(0,h.withTiming)(10*e.value,{duration:500,easing:m.Easing.out(m.Easing.poly(6))})}]}};return t._closure={withTiming:h.withTiming,translateY:e,Easing:m.Easing},t.__initData=oe,t.__workletHash=2483923703238,t}());return(0,l.jsx)(o.default,{style:le.container,children:(0,l.jsx)(ne,{children:(0,l.jsx)(a.default,{style:"auto"})})})}var le=i.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center"},imageContainer:{flex:1,paddingTop:58,shadowColor:"black",shadowRadius:0,shadowOffset:{width:3,height:3},shadowOpacity:.3},footerContainer:{alignItems:"center"},title:{color:"#fff"},animBox:{backgroundColor:"#fff",width:100,height:100},shadowBox:{width:200,height:200,backgroundColor:"red",borderRadius:30,borderCurve:"continuous",shadowColor:"black",shadowRadius:0,shadowOffset:{width:3,height:3},shadowOpacity:.3}})},3411:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=3411,e.exports=t},388:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/cool_file.2173e72de542cdb13ba2.mp3"},3090:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/adaptive-icon.e4e802086f8059b5b5ba.png"},2663:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/favicon.fa4783d1ba9f4f78d8f8.png"},7270:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/icon.608e4d9dafd9fd3d79c3.png"},5087:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/oran.102c3035dc56d3cb7d1e.png"},2119:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/roto-headshot-square.707975e4cb02e8546d89.png"},6958:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/splash.59202d4616ada0a93f98.png"},2183:()=>{},3024:()=>{},2715:()=>{},3611:()=>{},8353:()=>{},1210:()=>{},7488:()=>{},3454:()=>{}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,a,i,o)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,i,o]=e[d],l=!0,s=0;s<a.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](a[s])))?a.splice(s--,1):(l=!1,o<r&&(r=o));if(l){e.splice(d--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,i,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(a,i){if(1&i&&(a=this(a)),8&i)return a;if("object"===typeof a&&a){if(4&i&&a.__esModule)return a;if(16&i&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var l=2&i&&a;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>r[e]=()=>a[e]));return r.default=()=>a,n.d(o,r),o}})(),n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,a)=>(n.f[a](e,t),t)),[])),n.u=e=>"static/js/"+e+".0b1be2f1.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="web:";n.l=(a,i,o,r)=>{if(e[a])e[a].push(i);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var c=u[d];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+o){l=c;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=a),e[a]=[i];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var i=e[a];if(delete e[a],l.parentNode&&l.parentNode.removeChild(l),i&&i.forEach((e=>e(n))),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.f.j=(t,a)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)a.push(i[2]);else{var o=new Promise(((n,a)=>i=e[t]=[n,a]));a.push(i[2]=o);var r=n.p+n.u(t),l=new Error;n.l(r,(a=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,i[1](l)}}),"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,a)=>{var i,o,[r,l,s]=a,u=0;if(r.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var d=s(n)}for(t&&t(a);u<r.length;u++)o=r[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=self.webpackChunkweb=self.webpackChunkweb||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=n.O(void 0,[638],(()=>n(6271)));a=n.O(a)})();
//# sourceMappingURL=main.ca1aa11f.js.map