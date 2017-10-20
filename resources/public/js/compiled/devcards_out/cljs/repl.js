// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40206){
var map__40207 = p__40206;
var map__40207__$1 = ((((!((map__40207 == null)))?((((map__40207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40207.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40207):map__40207);
var m = map__40207__$1;
var n = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40209_40231 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40210_40232 = null;
var count__40211_40233 = (0);
var i__40212_40234 = (0);
while(true){
if((i__40212_40234 < count__40211_40233)){
var f_40235 = cljs.core._nth.call(null,chunk__40210_40232,i__40212_40234);
cljs.core.println.call(null,"  ",f_40235);

var G__40236 = seq__40209_40231;
var G__40237 = chunk__40210_40232;
var G__40238 = count__40211_40233;
var G__40239 = (i__40212_40234 + (1));
seq__40209_40231 = G__40236;
chunk__40210_40232 = G__40237;
count__40211_40233 = G__40238;
i__40212_40234 = G__40239;
continue;
} else {
var temp__5278__auto___40240 = cljs.core.seq.call(null,seq__40209_40231);
if(temp__5278__auto___40240){
var seq__40209_40241__$1 = temp__5278__auto___40240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40209_40241__$1)){
var c__30979__auto___40242 = cljs.core.chunk_first.call(null,seq__40209_40241__$1);
var G__40243 = cljs.core.chunk_rest.call(null,seq__40209_40241__$1);
var G__40244 = c__30979__auto___40242;
var G__40245 = cljs.core.count.call(null,c__30979__auto___40242);
var G__40246 = (0);
seq__40209_40231 = G__40243;
chunk__40210_40232 = G__40244;
count__40211_40233 = G__40245;
i__40212_40234 = G__40246;
continue;
} else {
var f_40247 = cljs.core.first.call(null,seq__40209_40241__$1);
cljs.core.println.call(null,"  ",f_40247);

var G__40248 = cljs.core.next.call(null,seq__40209_40241__$1);
var G__40249 = null;
var G__40250 = (0);
var G__40251 = (0);
seq__40209_40231 = G__40248;
chunk__40210_40232 = G__40249;
count__40211_40233 = G__40250;
i__40212_40234 = G__40251;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40252 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30048__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40252);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40252)))?cljs.core.second.call(null,arglists_40252):arglists_40252));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40213_40253 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40214_40254 = null;
var count__40215_40255 = (0);
var i__40216_40256 = (0);
while(true){
if((i__40216_40256 < count__40215_40255)){
var vec__40217_40257 = cljs.core._nth.call(null,chunk__40214_40254,i__40216_40256);
var name_40258 = cljs.core.nth.call(null,vec__40217_40257,(0),null);
var map__40220_40259 = cljs.core.nth.call(null,vec__40217_40257,(1),null);
var map__40220_40260__$1 = ((((!((map__40220_40259 == null)))?((((map__40220_40259.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40220_40259.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40220_40259):map__40220_40259);
var doc_40261 = cljs.core.get.call(null,map__40220_40260__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40262 = cljs.core.get.call(null,map__40220_40260__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40258);

cljs.core.println.call(null," ",arglists_40262);

if(cljs.core.truth_(doc_40261)){
cljs.core.println.call(null," ",doc_40261);
} else {
}

var G__40263 = seq__40213_40253;
var G__40264 = chunk__40214_40254;
var G__40265 = count__40215_40255;
var G__40266 = (i__40216_40256 + (1));
seq__40213_40253 = G__40263;
chunk__40214_40254 = G__40264;
count__40215_40255 = G__40265;
i__40216_40256 = G__40266;
continue;
} else {
var temp__5278__auto___40267 = cljs.core.seq.call(null,seq__40213_40253);
if(temp__5278__auto___40267){
var seq__40213_40268__$1 = temp__5278__auto___40267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40213_40268__$1)){
var c__30979__auto___40269 = cljs.core.chunk_first.call(null,seq__40213_40268__$1);
var G__40270 = cljs.core.chunk_rest.call(null,seq__40213_40268__$1);
var G__40271 = c__30979__auto___40269;
var G__40272 = cljs.core.count.call(null,c__30979__auto___40269);
var G__40273 = (0);
seq__40213_40253 = G__40270;
chunk__40214_40254 = G__40271;
count__40215_40255 = G__40272;
i__40216_40256 = G__40273;
continue;
} else {
var vec__40222_40274 = cljs.core.first.call(null,seq__40213_40268__$1);
var name_40275 = cljs.core.nth.call(null,vec__40222_40274,(0),null);
var map__40225_40276 = cljs.core.nth.call(null,vec__40222_40274,(1),null);
var map__40225_40277__$1 = ((((!((map__40225_40276 == null)))?((((map__40225_40276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40225_40276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40225_40276):map__40225_40276);
var doc_40278 = cljs.core.get.call(null,map__40225_40277__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40279 = cljs.core.get.call(null,map__40225_40277__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40275);

cljs.core.println.call(null," ",arglists_40279);

if(cljs.core.truth_(doc_40278)){
cljs.core.println.call(null," ",doc_40278);
} else {
}

var G__40280 = cljs.core.next.call(null,seq__40213_40268__$1);
var G__40281 = null;
var G__40282 = (0);
var G__40283 = (0);
seq__40213_40253 = G__40280;
chunk__40214_40254 = G__40281;
count__40215_40255 = G__40282;
i__40216_40256 = G__40283;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__40227 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40228 = null;
var count__40229 = (0);
var i__40230 = (0);
while(true){
if((i__40230 < count__40229)){
var role = cljs.core._nth.call(null,chunk__40228,i__40230);
var temp__5278__auto___40284__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___40284__$1)){
var spec_40285 = temp__5278__auto___40284__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40285));
} else {
}

var G__40286 = seq__40227;
var G__40287 = chunk__40228;
var G__40288 = count__40229;
var G__40289 = (i__40230 + (1));
seq__40227 = G__40286;
chunk__40228 = G__40287;
count__40229 = G__40288;
i__40230 = G__40289;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__40227);
if(temp__5278__auto____$1){
var seq__40227__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40227__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__40227__$1);
var G__40290 = cljs.core.chunk_rest.call(null,seq__40227__$1);
var G__40291 = c__30979__auto__;
var G__40292 = cljs.core.count.call(null,c__30979__auto__);
var G__40293 = (0);
seq__40227 = G__40290;
chunk__40228 = G__40291;
count__40229 = G__40292;
i__40230 = G__40293;
continue;
} else {
var role = cljs.core.first.call(null,seq__40227__$1);
var temp__5278__auto___40294__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___40294__$2)){
var spec_40295 = temp__5278__auto___40294__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40295));
} else {
}

var G__40296 = cljs.core.next.call(null,seq__40227__$1);
var G__40297 = null;
var G__40298 = (0);
var G__40299 = (0);
seq__40227 = G__40296;
chunk__40228 = G__40297;
count__40229 = G__40298;
i__40230 = G__40299;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1508469661951
