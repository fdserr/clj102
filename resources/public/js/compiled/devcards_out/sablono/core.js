// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__37950__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37947 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37948 = cljs.core.seq.call(null,vec__37947);
var first__37949 = cljs.core.first.call(null,seq__37948);
var seq__37948__$1 = cljs.core.next.call(null,seq__37948);
var tag = first__37949;
var body = seq__37948__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37951__i = 0, G__37951__a = new Array(arguments.length -  0);
while (G__37951__i < G__37951__a.length) {G__37951__a[G__37951__i] = arguments[G__37951__i + 0]; ++G__37951__i;}
  args = new cljs.core.IndexedSeq(G__37951__a,0,null);
} 
return G__37950__delegate.call(this,args);};
G__37950.cljs$lang$maxFixedArity = 0;
G__37950.cljs$lang$applyTo = (function (arglist__37952){
var args = cljs.core.seq(arglist__37952);
return G__37950__delegate(args);
});
G__37950.cljs$core$IFn$_invoke$arity$variadic = G__37950__delegate;
return G__37950;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30930__auto__ = (function sablono$core$update_arglists_$_iter__37953(s__37954){
return (new cljs.core.LazySeq(null,(function (){
var s__37954__$1 = s__37954;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__37954__$1);
if(temp__5278__auto__){
var s__37954__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37954__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__37954__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__37956 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__37955 = (0);
while(true){
if((i__37955 < size__30929__auto__)){
var args = cljs.core._nth.call(null,c__30928__auto__,i__37955);
cljs.core.chunk_append.call(null,b__37956,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37957 = (i__37955 + (1));
i__37955 = G__37957;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37956),sablono$core$update_arglists_$_iter__37953.call(null,cljs.core.chunk_rest.call(null,s__37954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37956),null);
}
} else {
var args = cljs.core.first.call(null,s__37954__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37953.call(null,cljs.core.rest.call(null,s__37954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31332__auto__ = [];
var len__31325__auto___37963 = arguments.length;
var i__31326__auto___37964 = (0);
while(true){
if((i__31326__auto___37964 < len__31325__auto___37963)){
args__31332__auto__.push((arguments[i__31326__auto___37964]));

var G__37965 = (i__31326__auto___37964 + (1));
i__31326__auto___37964 = G__37965;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30930__auto__ = (function sablono$core$iter__37959(s__37960){
return (new cljs.core.LazySeq(null,(function (){
var s__37960__$1 = s__37960;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__37960__$1);
if(temp__5278__auto__){
var s__37960__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37960__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__37960__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__37962 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__37961 = (0);
while(true){
if((i__37961 < size__30929__auto__)){
var style = cljs.core._nth.call(null,c__30928__auto__,i__37961);
cljs.core.chunk_append.call(null,b__37962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37966 = (i__37961 + (1));
i__37961 = G__37966;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37962),sablono$core$iter__37959.call(null,cljs.core.chunk_rest.call(null,s__37960__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37962),null);
}
} else {
var style = cljs.core.first.call(null,s__37960__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37959.call(null,cljs.core.rest.call(null,s__37960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq37958){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37958));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to37967 = (function sablono$core$link_to37967(var_args){
var args__31332__auto__ = [];
var len__31325__auto___37970 = arguments.length;
var i__31326__auto___37971 = (0);
while(true){
if((i__31326__auto___37971 < len__31325__auto___37970)){
args__31332__auto__.push((arguments[i__31326__auto___37971]));

var G__37972 = (i__31326__auto___37971 + (1));
i__31326__auto___37971 = G__37972;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37967.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.link_to37967.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37967.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37967.cljs$lang$applyTo = (function (seq37968){
var G__37969 = cljs.core.first.call(null,seq37968);
var seq37968__$1 = cljs.core.next.call(null,seq37968);
return sablono.core.link_to37967.cljs$core$IFn$_invoke$arity$variadic(G__37969,seq37968__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37967);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37973 = (function sablono$core$mail_to37973(var_args){
var args__31332__auto__ = [];
var len__31325__auto___37980 = arguments.length;
var i__31326__auto___37981 = (0);
while(true){
if((i__31326__auto___37981 < len__31325__auto___37980)){
args__31332__auto__.push((arguments[i__31326__auto___37981]));

var G__37982 = (i__31326__auto___37981 + (1));
i__31326__auto___37981 = G__37982;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37973.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.mail_to37973.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37976){
var vec__37977 = p__37976;
var content = cljs.core.nth.call(null,vec__37977,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30048__auto__ = content;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37973.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37973.cljs$lang$applyTo = (function (seq37974){
var G__37975 = cljs.core.first.call(null,seq37974);
var seq37974__$1 = cljs.core.next.call(null,seq37974);
return sablono.core.mail_to37973.cljs$core$IFn$_invoke$arity$variadic(G__37975,seq37974__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37973);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37983 = (function sablono$core$unordered_list37983(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30930__auto__ = (function sablono$core$unordered_list37983_$_iter__37984(s__37985){
return (new cljs.core.LazySeq(null,(function (){
var s__37985__$1 = s__37985;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__37985__$1);
if(temp__5278__auto__){
var s__37985__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37985__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__37985__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__37987 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__37986 = (0);
while(true){
if((i__37986 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__37986);
cljs.core.chunk_append.call(null,b__37987,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37988 = (i__37986 + (1));
i__37986 = G__37988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37987),sablono$core$unordered_list37983_$_iter__37984.call(null,cljs.core.chunk_rest.call(null,s__37985__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37987),null);
}
} else {
var x = cljs.core.first.call(null,s__37985__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37983_$_iter__37984.call(null,cljs.core.rest.call(null,s__37985__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37983);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37989 = (function sablono$core$ordered_list37989(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30930__auto__ = (function sablono$core$ordered_list37989_$_iter__37990(s__37991){
return (new cljs.core.LazySeq(null,(function (){
var s__37991__$1 = s__37991;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__37991__$1);
if(temp__5278__auto__){
var s__37991__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37991__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__37991__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__37993 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__37992 = (0);
while(true){
if((i__37992 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__37992);
cljs.core.chunk_append.call(null,b__37993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37994 = (i__37992 + (1));
i__37992 = G__37994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37993),sablono$core$ordered_list37989_$_iter__37990.call(null,cljs.core.chunk_rest.call(null,s__37991__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37993),null);
}
} else {
var x = cljs.core.first.call(null,s__37991__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37989_$_iter__37990.call(null,cljs.core.rest.call(null,s__37991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37989);
/**
 * Create an image element.
 */
sablono.core.image37995 = (function sablono$core$image37995(var_args){
var G__37997 = arguments.length;
switch (G__37997) {
case 1:
return sablono.core.image37995.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37995.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37995.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37995.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37995.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37995);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37999_SHARP_,p2__38000_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37999_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38000_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__38001_SHARP_,p2__38002_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38001_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38002_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__38004 = arguments.length;
switch (G__38004) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field38006 = (function sablono$core$color_field38006(var_args){
var G__38008 = arguments.length;
switch (G__38008) {
case 1:
return sablono.core.color_field38006.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field38006.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field38006.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37937__auto__);
});

sablono.core.color_field38006.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.color_field38006.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38006);

/**
 * Creates a date input field.
 */
sablono.core.date_field38009 = (function sablono$core$date_field38009(var_args){
var G__38011 = arguments.length;
switch (G__38011) {
case 1:
return sablono.core.date_field38009.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field38009.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field38009.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37937__auto__);
});

sablono.core.date_field38009.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.date_field38009.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38009);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field38012 = (function sablono$core$datetime_field38012(var_args){
var G__38014 = arguments.length;
switch (G__38014) {
case 1:
return sablono.core.datetime_field38012.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field38012.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field38012.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37937__auto__);
});

sablono.core.datetime_field38012.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.datetime_field38012.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38012);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field38015 = (function sablono$core$datetime_local_field38015(var_args){
var G__38017 = arguments.length;
switch (G__38017) {
case 1:
return sablono.core.datetime_local_field38015.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field38015.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field38015.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37937__auto__);
});

sablono.core.datetime_local_field38015.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.datetime_local_field38015.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38015);

/**
 * Creates a email input field.
 */
sablono.core.email_field38018 = (function sablono$core$email_field38018(var_args){
var G__38020 = arguments.length;
switch (G__38020) {
case 1:
return sablono.core.email_field38018.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field38018.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field38018.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37937__auto__);
});

sablono.core.email_field38018.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.email_field38018.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38018);

/**
 * Creates a file input field.
 */
sablono.core.file_field38021 = (function sablono$core$file_field38021(var_args){
var G__38023 = arguments.length;
switch (G__38023) {
case 1:
return sablono.core.file_field38021.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field38021.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field38021.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37937__auto__);
});

sablono.core.file_field38021.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.file_field38021.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38021);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field38024 = (function sablono$core$hidden_field38024(var_args){
var G__38026 = arguments.length;
switch (G__38026) {
case 1:
return sablono.core.hidden_field38024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field38024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field38024.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37937__auto__);
});

sablono.core.hidden_field38024.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.hidden_field38024.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38024);

/**
 * Creates a month input field.
 */
sablono.core.month_field38027 = (function sablono$core$month_field38027(var_args){
var G__38029 = arguments.length;
switch (G__38029) {
case 1:
return sablono.core.month_field38027.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field38027.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field38027.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37937__auto__);
});

sablono.core.month_field38027.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.month_field38027.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38027);

/**
 * Creates a number input field.
 */
sablono.core.number_field38030 = (function sablono$core$number_field38030(var_args){
var G__38032 = arguments.length;
switch (G__38032) {
case 1:
return sablono.core.number_field38030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field38030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field38030.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37937__auto__);
});

sablono.core.number_field38030.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.number_field38030.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38030);

/**
 * Creates a password input field.
 */
sablono.core.password_field38033 = (function sablono$core$password_field38033(var_args){
var G__38035 = arguments.length;
switch (G__38035) {
case 1:
return sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37937__auto__);
});

sablono.core.password_field38033.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.password_field38033.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38033);

/**
 * Creates a range input field.
 */
sablono.core.range_field38036 = (function sablono$core$range_field38036(var_args){
var G__38038 = arguments.length;
switch (G__38038) {
case 1:
return sablono.core.range_field38036.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field38036.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field38036.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37937__auto__);
});

sablono.core.range_field38036.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.range_field38036.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38036);

/**
 * Creates a search input field.
 */
sablono.core.search_field38039 = (function sablono$core$search_field38039(var_args){
var G__38041 = arguments.length;
switch (G__38041) {
case 1:
return sablono.core.search_field38039.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field38039.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field38039.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37937__auto__);
});

sablono.core.search_field38039.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.search_field38039.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38039);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field38042 = (function sablono$core$tel_field38042(var_args){
var G__38044 = arguments.length;
switch (G__38044) {
case 1:
return sablono.core.tel_field38042.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field38042.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field38042.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37937__auto__);
});

sablono.core.tel_field38042.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.tel_field38042.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38042);

/**
 * Creates a text input field.
 */
sablono.core.text_field38045 = (function sablono$core$text_field38045(var_args){
var G__38047 = arguments.length;
switch (G__38047) {
case 1:
return sablono.core.text_field38045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field38045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field38045.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37937__auto__);
});

sablono.core.text_field38045.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.text_field38045.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38045);

/**
 * Creates a time input field.
 */
sablono.core.time_field38048 = (function sablono$core$time_field38048(var_args){
var G__38050 = arguments.length;
switch (G__38050) {
case 1:
return sablono.core.time_field38048.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field38048.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field38048.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37937__auto__);
});

sablono.core.time_field38048.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.time_field38048.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38048);

/**
 * Creates a url input field.
 */
sablono.core.url_field38051 = (function sablono$core$url_field38051(var_args){
var G__38053 = arguments.length;
switch (G__38053) {
case 1:
return sablono.core.url_field38051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field38051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field38051.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37937__auto__);
});

sablono.core.url_field38051.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.url_field38051.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38051);

/**
 * Creates a week input field.
 */
sablono.core.week_field38054 = (function sablono$core$week_field38054(var_args){
var G__38056 = arguments.length;
switch (G__38056) {
case 1:
return sablono.core.week_field38054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field38054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field38054.cljs$core$IFn$_invoke$arity$1 = (function (name__37937__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37937__auto__);
});

sablono.core.week_field38054.cljs$core$IFn$_invoke$arity$2 = (function (name__37937__auto__,value__37938__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37937__auto__,value__37938__auto__);
});

sablono.core.week_field38054.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38054);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38074 = (function sablono$core$check_box38074(var_args){
var G__38076 = arguments.length;
switch (G__38076) {
case 1:
return sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38074.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38074.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38074);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38078 = (function sablono$core$radio_button38078(var_args){
var G__38080 = arguments.length;
switch (G__38080) {
case 1:
return sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38078.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38078.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38078);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38082 = (function sablono$core$select_options38082(coll){
var iter__30930__auto__ = (function sablono$core$select_options38082_$_iter__38083(s__38084){
return (new cljs.core.LazySeq(null,(function (){
var s__38084__$1 = s__38084;
while(true){
var temp__5278__auto__ = cljs.core.seq.call(null,s__38084__$1);
if(temp__5278__auto__){
var s__38084__$2 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38084__$2)){
var c__30928__auto__ = cljs.core.chunk_first.call(null,s__38084__$2);
var size__30929__auto__ = cljs.core.count.call(null,c__30928__auto__);
var b__38086 = cljs.core.chunk_buffer.call(null,size__30929__auto__);
if((function (){var i__38085 = (0);
while(true){
if((i__38085 < size__30929__auto__)){
var x = cljs.core._nth.call(null,c__30928__auto__,i__38085);
cljs.core.chunk_append.call(null,b__38086,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38087 = x;
var text = cljs.core.nth.call(null,vec__38087,(0),null);
var val = cljs.core.nth.call(null,vec__38087,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38087,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38082.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38093 = (i__38085 + (1));
i__38085 = G__38093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38086),sablono$core$select_options38082_$_iter__38083.call(null,cljs.core.chunk_rest.call(null,s__38084__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38086),null);
}
} else {
var x = cljs.core.first.call(null,s__38084__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38090 = x;
var text = cljs.core.nth.call(null,vec__38090,(0),null);
var val = cljs.core.nth.call(null,vec__38090,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38090,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38082.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38082_$_iter__38083.call(null,cljs.core.rest.call(null,s__38084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30930__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38082);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38094 = (function sablono$core$drop_down38094(var_args){
var G__38096 = arguments.length;
switch (G__38096) {
case 2:
return sablono.core.drop_down38094.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38094.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down38094.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38094.call(null,name,options,null);
});

sablono.core.drop_down38094.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38094.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38094);
/**
 * Creates a text area element.
 */
sablono.core.text_area38098 = (function sablono$core$text_area38098(var_args){
var G__38100 = arguments.length;
switch (G__38100) {
case 1:
return sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area38098.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30048__auto__ = value;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38098.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38098);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38102 = (function sablono$core$label38102(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38102);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38103 = (function sablono$core$submit_button38103(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38103);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38104 = (function sablono$core$reset_button38104(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38104);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38105 = (function sablono$core$form_to38105(var_args){
var args__31332__auto__ = [];
var len__31325__auto___38112 = arguments.length;
var i__31326__auto___38113 = (0);
while(true){
if((i__31326__auto___38113 < len__31325__auto___38112)){
args__31332__auto__.push((arguments[i__31326__auto___38113]));

var G__38114 = (i__31326__auto___38113 + (1));
i__31326__auto___38113 = G__38114;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38105.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

sablono.core.form_to38105.cljs$core$IFn$_invoke$arity$variadic = (function (p__38108,body){
var vec__38109 = p__38108;
var method = cljs.core.nth.call(null,vec__38109,(0),null);
var action = cljs.core.nth.call(null,vec__38109,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38105.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38105.cljs$lang$applyTo = (function (seq38106){
var G__38107 = cljs.core.first.call(null,seq38106);
var seq38106__$1 = cljs.core.next.call(null,seq38106);
return sablono.core.form_to38105.cljs$core$IFn$_invoke$arity$variadic(G__38107,seq38106__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38105);

//# sourceMappingURL=core.js.map?rel=1508469658869
