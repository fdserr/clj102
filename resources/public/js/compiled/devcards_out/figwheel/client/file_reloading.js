// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30048__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30048__auto__){
return or__30048__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30048__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36717_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36717_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__36718 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36719 = null;
var count__36720 = (0);
var i__36721 = (0);
while(true){
if((i__36721 < count__36720)){
var n = cljs.core._nth.call(null,chunk__36719,i__36721);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36722 = seq__36718;
var G__36723 = chunk__36719;
var G__36724 = count__36720;
var G__36725 = (i__36721 + (1));
seq__36718 = G__36722;
chunk__36719 = G__36723;
count__36720 = G__36724;
i__36721 = G__36725;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36718);
if(temp__5278__auto__){
var seq__36718__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36718__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__36718__$1);
var G__36726 = cljs.core.chunk_rest.call(null,seq__36718__$1);
var G__36727 = c__30979__auto__;
var G__36728 = cljs.core.count.call(null,c__30979__auto__);
var G__36729 = (0);
seq__36718 = G__36726;
chunk__36719 = G__36727;
count__36720 = G__36728;
i__36721 = G__36729;
continue;
} else {
var n = cljs.core.first.call(null,seq__36718__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36730 = cljs.core.next.call(null,seq__36718__$1);
var G__36731 = null;
var G__36732 = (0);
var G__36733 = (0);
seq__36718 = G__36730;
chunk__36719 = G__36731;
count__36720 = G__36732;
i__36721 = G__36733;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__36743_36751 = cljs.core.seq.call(null,deps);
var chunk__36744_36752 = null;
var count__36745_36753 = (0);
var i__36746_36754 = (0);
while(true){
if((i__36746_36754 < count__36745_36753)){
var dep_36755 = cljs.core._nth.call(null,chunk__36744_36752,i__36746_36754);
topo_sort_helper_STAR_.call(null,dep_36755,(depth + (1)),state);

var G__36756 = seq__36743_36751;
var G__36757 = chunk__36744_36752;
var G__36758 = count__36745_36753;
var G__36759 = (i__36746_36754 + (1));
seq__36743_36751 = G__36756;
chunk__36744_36752 = G__36757;
count__36745_36753 = G__36758;
i__36746_36754 = G__36759;
continue;
} else {
var temp__5278__auto___36760 = cljs.core.seq.call(null,seq__36743_36751);
if(temp__5278__auto___36760){
var seq__36743_36761__$1 = temp__5278__auto___36760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36743_36761__$1)){
var c__30979__auto___36762 = cljs.core.chunk_first.call(null,seq__36743_36761__$1);
var G__36763 = cljs.core.chunk_rest.call(null,seq__36743_36761__$1);
var G__36764 = c__30979__auto___36762;
var G__36765 = cljs.core.count.call(null,c__30979__auto___36762);
var G__36766 = (0);
seq__36743_36751 = G__36763;
chunk__36744_36752 = G__36764;
count__36745_36753 = G__36765;
i__36746_36754 = G__36766;
continue;
} else {
var dep_36767 = cljs.core.first.call(null,seq__36743_36761__$1);
topo_sort_helper_STAR_.call(null,dep_36767,(depth + (1)),state);

var G__36768 = cljs.core.next.call(null,seq__36743_36761__$1);
var G__36769 = null;
var G__36770 = (0);
var G__36771 = (0);
seq__36743_36751 = G__36768;
chunk__36744_36752 = G__36769;
count__36745_36753 = G__36770;
i__36746_36754 = G__36771;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36747){
var vec__36748 = p__36747;
var seq__36749 = cljs.core.seq.call(null,vec__36748);
var first__36750 = cljs.core.first.call(null,seq__36749);
var seq__36749__$1 = cljs.core.next.call(null,seq__36749);
var x = first__36750;
var xs = seq__36749__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36748,seq__36749,first__36750,seq__36749__$1,x,xs,get_deps__$1){
return (function (p1__36734_SHARP_){
return clojure.set.difference.call(null,p1__36734_SHARP_,x);
});})(vec__36748,seq__36749,first__36750,seq__36749__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__36772 = cljs.core.seq.call(null,provides);
var chunk__36773 = null;
var count__36774 = (0);
var i__36775 = (0);
while(true){
if((i__36775 < count__36774)){
var prov = cljs.core._nth.call(null,chunk__36773,i__36775);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36776_36784 = cljs.core.seq.call(null,requires);
var chunk__36777_36785 = null;
var count__36778_36786 = (0);
var i__36779_36787 = (0);
while(true){
if((i__36779_36787 < count__36778_36786)){
var req_36788 = cljs.core._nth.call(null,chunk__36777_36785,i__36779_36787);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36788,prov);

var G__36789 = seq__36776_36784;
var G__36790 = chunk__36777_36785;
var G__36791 = count__36778_36786;
var G__36792 = (i__36779_36787 + (1));
seq__36776_36784 = G__36789;
chunk__36777_36785 = G__36790;
count__36778_36786 = G__36791;
i__36779_36787 = G__36792;
continue;
} else {
var temp__5278__auto___36793 = cljs.core.seq.call(null,seq__36776_36784);
if(temp__5278__auto___36793){
var seq__36776_36794__$1 = temp__5278__auto___36793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36776_36794__$1)){
var c__30979__auto___36795 = cljs.core.chunk_first.call(null,seq__36776_36794__$1);
var G__36796 = cljs.core.chunk_rest.call(null,seq__36776_36794__$1);
var G__36797 = c__30979__auto___36795;
var G__36798 = cljs.core.count.call(null,c__30979__auto___36795);
var G__36799 = (0);
seq__36776_36784 = G__36796;
chunk__36777_36785 = G__36797;
count__36778_36786 = G__36798;
i__36779_36787 = G__36799;
continue;
} else {
var req_36800 = cljs.core.first.call(null,seq__36776_36794__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36800,prov);

var G__36801 = cljs.core.next.call(null,seq__36776_36794__$1);
var G__36802 = null;
var G__36803 = (0);
var G__36804 = (0);
seq__36776_36784 = G__36801;
chunk__36777_36785 = G__36802;
count__36778_36786 = G__36803;
i__36779_36787 = G__36804;
continue;
}
} else {
}
}
break;
}

var G__36805 = seq__36772;
var G__36806 = chunk__36773;
var G__36807 = count__36774;
var G__36808 = (i__36775 + (1));
seq__36772 = G__36805;
chunk__36773 = G__36806;
count__36774 = G__36807;
i__36775 = G__36808;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36772);
if(temp__5278__auto__){
var seq__36772__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36772__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__36772__$1);
var G__36809 = cljs.core.chunk_rest.call(null,seq__36772__$1);
var G__36810 = c__30979__auto__;
var G__36811 = cljs.core.count.call(null,c__30979__auto__);
var G__36812 = (0);
seq__36772 = G__36809;
chunk__36773 = G__36810;
count__36774 = G__36811;
i__36775 = G__36812;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36772__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36780_36813 = cljs.core.seq.call(null,requires);
var chunk__36781_36814 = null;
var count__36782_36815 = (0);
var i__36783_36816 = (0);
while(true){
if((i__36783_36816 < count__36782_36815)){
var req_36817 = cljs.core._nth.call(null,chunk__36781_36814,i__36783_36816);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36817,prov);

var G__36818 = seq__36780_36813;
var G__36819 = chunk__36781_36814;
var G__36820 = count__36782_36815;
var G__36821 = (i__36783_36816 + (1));
seq__36780_36813 = G__36818;
chunk__36781_36814 = G__36819;
count__36782_36815 = G__36820;
i__36783_36816 = G__36821;
continue;
} else {
var temp__5278__auto___36822__$1 = cljs.core.seq.call(null,seq__36780_36813);
if(temp__5278__auto___36822__$1){
var seq__36780_36823__$1 = temp__5278__auto___36822__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36780_36823__$1)){
var c__30979__auto___36824 = cljs.core.chunk_first.call(null,seq__36780_36823__$1);
var G__36825 = cljs.core.chunk_rest.call(null,seq__36780_36823__$1);
var G__36826 = c__30979__auto___36824;
var G__36827 = cljs.core.count.call(null,c__30979__auto___36824);
var G__36828 = (0);
seq__36780_36813 = G__36825;
chunk__36781_36814 = G__36826;
count__36782_36815 = G__36827;
i__36783_36816 = G__36828;
continue;
} else {
var req_36829 = cljs.core.first.call(null,seq__36780_36823__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36829,prov);

var G__36830 = cljs.core.next.call(null,seq__36780_36823__$1);
var G__36831 = null;
var G__36832 = (0);
var G__36833 = (0);
seq__36780_36813 = G__36830;
chunk__36781_36814 = G__36831;
count__36782_36815 = G__36832;
i__36783_36816 = G__36833;
continue;
}
} else {
}
}
break;
}

var G__36834 = cljs.core.next.call(null,seq__36772__$1);
var G__36835 = null;
var G__36836 = (0);
var G__36837 = (0);
seq__36772 = G__36834;
chunk__36773 = G__36835;
count__36774 = G__36836;
i__36775 = G__36837;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__36838_36842 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36839_36843 = null;
var count__36840_36844 = (0);
var i__36841_36845 = (0);
while(true){
if((i__36841_36845 < count__36840_36844)){
var ns_36846 = cljs.core._nth.call(null,chunk__36839_36843,i__36841_36845);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36846);

var G__36847 = seq__36838_36842;
var G__36848 = chunk__36839_36843;
var G__36849 = count__36840_36844;
var G__36850 = (i__36841_36845 + (1));
seq__36838_36842 = G__36847;
chunk__36839_36843 = G__36848;
count__36840_36844 = G__36849;
i__36841_36845 = G__36850;
continue;
} else {
var temp__5278__auto___36851 = cljs.core.seq.call(null,seq__36838_36842);
if(temp__5278__auto___36851){
var seq__36838_36852__$1 = temp__5278__auto___36851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36838_36852__$1)){
var c__30979__auto___36853 = cljs.core.chunk_first.call(null,seq__36838_36852__$1);
var G__36854 = cljs.core.chunk_rest.call(null,seq__36838_36852__$1);
var G__36855 = c__30979__auto___36853;
var G__36856 = cljs.core.count.call(null,c__30979__auto___36853);
var G__36857 = (0);
seq__36838_36842 = G__36854;
chunk__36839_36843 = G__36855;
count__36840_36844 = G__36856;
i__36841_36845 = G__36857;
continue;
} else {
var ns_36858 = cljs.core.first.call(null,seq__36838_36852__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36858);

var G__36859 = cljs.core.next.call(null,seq__36838_36852__$1);
var G__36860 = null;
var G__36861 = (0);
var G__36862 = (0);
seq__36838_36842 = G__36859;
chunk__36839_36843 = G__36860;
count__36840_36844 = G__36861;
i__36841_36845 = G__36862;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30048__auto__ = goog.require__;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__36863__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36864__i = 0, G__36864__a = new Array(arguments.length -  0);
while (G__36864__i < G__36864__a.length) {G__36864__a[G__36864__i] = arguments[G__36864__i + 0]; ++G__36864__i;}
  args = new cljs.core.IndexedSeq(G__36864__a,0,null);
} 
return G__36863__delegate.call(this,args);};
G__36863.cljs$lang$maxFixedArity = 0;
G__36863.cljs$lang$applyTo = (function (arglist__36865){
var args = cljs.core.seq(arglist__36865);
return G__36863__delegate(args);
});
G__36863.cljs$core$IFn$_invoke$arity$variadic = G__36863__delegate;
return G__36863;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36866_SHARP_,p2__36867_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36866_SHARP_)].join('')),p2__36867_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36868_SHARP_,p2__36869_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36868_SHARP_)].join(''),p2__36869_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36870 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36870.addCallback(((function (G__36870){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36870))
);

G__36870.addErrback(((function (G__36870){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36870))
);

return G__36870;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36871 = cljs.core._EQ_;
var expr__36872 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36871.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36872))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36871,expr__36872){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36871,expr__36872))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36871,expr__36872){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36874){if((e36874 instanceof Error)){
var e = e36874;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36874;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36871,expr__36872))
} else {
if(cljs.core.truth_(pred__36871.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36872))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36871.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36872))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36871.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36872))){
return ((function (pred__36871,expr__36872){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36875){if((e36875 instanceof Error)){
var e = e36875;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36875;

}
}})());
});
;})(pred__36871,expr__36872))
} else {
return ((function (pred__36871,expr__36872){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36871,expr__36872))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36876,callback){
var map__36877 = p__36876;
var map__36877__$1 = ((((!((map__36877 == null)))?((((map__36877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36877):map__36877);
var file_msg = map__36877__$1;
var request_url = cljs.core.get.call(null,map__36877__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36877,map__36877__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36877,map__36877__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__){
return (function (state_36901){
var state_val_36902 = (state_36901[(1)]);
if((state_val_36902 === (7))){
var inst_36897 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
var statearr_36903_36920 = state_36901__$1;
(statearr_36903_36920[(2)] = inst_36897);

(statearr_36903_36920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (1))){
var state_36901__$1 = state_36901;
var statearr_36904_36921 = state_36901__$1;
(statearr_36904_36921[(2)] = null);

(statearr_36904_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (4))){
var inst_36881 = (state_36901[(7)]);
var inst_36881__$1 = (state_36901[(2)]);
var state_36901__$1 = (function (){var statearr_36905 = state_36901;
(statearr_36905[(7)] = inst_36881__$1);

return statearr_36905;
})();
if(cljs.core.truth_(inst_36881__$1)){
var statearr_36906_36922 = state_36901__$1;
(statearr_36906_36922[(1)] = (5));

} else {
var statearr_36907_36923 = state_36901__$1;
(statearr_36907_36923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (6))){
var state_36901__$1 = state_36901;
var statearr_36908_36924 = state_36901__$1;
(statearr_36908_36924[(2)] = null);

(statearr_36908_36924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (3))){
var inst_36899 = (state_36901[(2)]);
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36901__$1,inst_36899);
} else {
if((state_val_36902 === (2))){
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36901__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36902 === (11))){
var inst_36893 = (state_36901[(2)]);
var state_36901__$1 = (function (){var statearr_36909 = state_36901;
(statearr_36909[(8)] = inst_36893);

return statearr_36909;
})();
var statearr_36910_36925 = state_36901__$1;
(statearr_36910_36925[(2)] = null);

(statearr_36910_36925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (9))){
var inst_36885 = (state_36901[(9)]);
var inst_36887 = (state_36901[(10)]);
var inst_36889 = inst_36887.call(null,inst_36885);
var state_36901__$1 = state_36901;
var statearr_36911_36926 = state_36901__$1;
(statearr_36911_36926[(2)] = inst_36889);

(statearr_36911_36926[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (5))){
var inst_36881 = (state_36901[(7)]);
var inst_36883 = figwheel.client.file_reloading.blocking_load.call(null,inst_36881);
var state_36901__$1 = state_36901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36901__$1,(8),inst_36883);
} else {
if((state_val_36902 === (10))){
var inst_36885 = (state_36901[(9)]);
var inst_36891 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36885);
var state_36901__$1 = state_36901;
var statearr_36912_36927 = state_36901__$1;
(statearr_36912_36927[(2)] = inst_36891);

(statearr_36912_36927[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36902 === (8))){
var inst_36887 = (state_36901[(10)]);
var inst_36881 = (state_36901[(7)]);
var inst_36885 = (state_36901[(2)]);
var inst_36886 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36887__$1 = cljs.core.get.call(null,inst_36886,inst_36881);
var state_36901__$1 = (function (){var statearr_36913 = state_36901;
(statearr_36913[(9)] = inst_36885);

(statearr_36913[(10)] = inst_36887__$1);

return statearr_36913;
})();
if(cljs.core.truth_(inst_36887__$1)){
var statearr_36914_36928 = state_36901__$1;
(statearr_36914_36928[(1)] = (9));

} else {
var statearr_36915_36929 = state_36901__$1;
(statearr_36915_36929[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33131__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33042__auto__ = null;
var figwheel$client$file_reloading$state_machine__33042__auto____0 = (function (){
var statearr_36916 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36916[(0)] = figwheel$client$file_reloading$state_machine__33042__auto__);

(statearr_36916[(1)] = (1));

return statearr_36916;
});
var figwheel$client$file_reloading$state_machine__33042__auto____1 = (function (state_36901){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_36901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e36917){if((e36917 instanceof Object)){
var ex__33045__auto__ = e36917;
var statearr_36918_36930 = state_36901;
(statearr_36918_36930[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36917;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36931 = state_36901;
state_36901 = G__36931;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33042__auto__ = function(state_36901){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33042__auto____1.call(this,state_36901);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33042__auto____0;
figwheel$client$file_reloading$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33042__auto____1;
return figwheel$client$file_reloading$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__))
})();
var state__33133__auto__ = (function (){var statearr_36919 = f__33132__auto__.call(null);
(statearr_36919[(6)] = c__33131__auto__);

return statearr_36919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__))
);

return c__33131__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36932,callback){
var map__36933 = p__36932;
var map__36933__$1 = ((((!((map__36933 == null)))?((((map__36933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36933.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36933):map__36933);
var file_msg = map__36933__$1;
var namespace = cljs.core.get.call(null,map__36933__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36933,map__36933__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36933,map__36933__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36935){
var map__36936 = p__36935;
var map__36936__$1 = ((((!((map__36936 == null)))?((((map__36936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36936.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36936):map__36936);
var file_msg = map__36936__$1;
var namespace = cljs.core.get.call(null,map__36936__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36938){
var map__36939 = p__36938;
var map__36939__$1 = ((((!((map__36939 == null)))?((((map__36939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36939):map__36939);
var file_msg = map__36939__$1;
var namespace = cljs.core.get.call(null,map__36939__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30036__auto__){
var or__30048__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
var or__30048__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30048__auto____$1)){
return or__30048__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36941,callback){
var map__36942 = p__36941;
var map__36942__$1 = ((((!((map__36942 == null)))?((((map__36942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36942.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36942):map__36942);
var file_msg = map__36942__$1;
var request_url = cljs.core.get.call(null,map__36942__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36942__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33131__auto___36992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___36992,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___36992,out){
return (function (state_36977){
var state_val_36978 = (state_36977[(1)]);
if((state_val_36978 === (1))){
var inst_36951 = cljs.core.seq.call(null,files);
var inst_36952 = cljs.core.first.call(null,inst_36951);
var inst_36953 = cljs.core.next.call(null,inst_36951);
var inst_36954 = files;
var state_36977__$1 = (function (){var statearr_36979 = state_36977;
(statearr_36979[(7)] = inst_36954);

(statearr_36979[(8)] = inst_36953);

(statearr_36979[(9)] = inst_36952);

return statearr_36979;
})();
var statearr_36980_36993 = state_36977__$1;
(statearr_36980_36993[(2)] = null);

(statearr_36980_36993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36978 === (2))){
var inst_36954 = (state_36977[(7)]);
var inst_36960 = (state_36977[(10)]);
var inst_36959 = cljs.core.seq.call(null,inst_36954);
var inst_36960__$1 = cljs.core.first.call(null,inst_36959);
var inst_36961 = cljs.core.next.call(null,inst_36959);
var inst_36962 = (inst_36960__$1 == null);
var inst_36963 = cljs.core.not.call(null,inst_36962);
var state_36977__$1 = (function (){var statearr_36981 = state_36977;
(statearr_36981[(11)] = inst_36961);

(statearr_36981[(10)] = inst_36960__$1);

return statearr_36981;
})();
if(inst_36963){
var statearr_36982_36994 = state_36977__$1;
(statearr_36982_36994[(1)] = (4));

} else {
var statearr_36983_36995 = state_36977__$1;
(statearr_36983_36995[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36978 === (3))){
var inst_36975 = (state_36977[(2)]);
var state_36977__$1 = state_36977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36977__$1,inst_36975);
} else {
if((state_val_36978 === (4))){
var inst_36960 = (state_36977[(10)]);
var inst_36965 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36960);
var state_36977__$1 = state_36977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36977__$1,(7),inst_36965);
} else {
if((state_val_36978 === (5))){
var inst_36971 = cljs.core.async.close_BANG_.call(null,out);
var state_36977__$1 = state_36977;
var statearr_36984_36996 = state_36977__$1;
(statearr_36984_36996[(2)] = inst_36971);

(statearr_36984_36996[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36978 === (6))){
var inst_36973 = (state_36977[(2)]);
var state_36977__$1 = state_36977;
var statearr_36985_36997 = state_36977__$1;
(statearr_36985_36997[(2)] = inst_36973);

(statearr_36985_36997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36978 === (7))){
var inst_36961 = (state_36977[(11)]);
var inst_36967 = (state_36977[(2)]);
var inst_36968 = cljs.core.async.put_BANG_.call(null,out,inst_36967);
var inst_36954 = inst_36961;
var state_36977__$1 = (function (){var statearr_36986 = state_36977;
(statearr_36986[(7)] = inst_36954);

(statearr_36986[(12)] = inst_36968);

return statearr_36986;
})();
var statearr_36987_36998 = state_36977__$1;
(statearr_36987_36998[(2)] = null);

(statearr_36987_36998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33131__auto___36992,out))
;
return ((function (switch__33041__auto__,c__33131__auto___36992,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____0 = (function (){
var statearr_36988 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36988[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__);

(statearr_36988[(1)] = (1));

return statearr_36988;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____1 = (function (state_36977){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_36977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e36989){if((e36989 instanceof Object)){
var ex__33045__auto__ = e36989;
var statearr_36990_36999 = state_36977;
(statearr_36990_36999[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36977;
state_36977 = G__37000;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__ = function(state_36977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____1.call(this,state_36977);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___36992,out))
})();
var state__33133__auto__ = (function (){var statearr_36991 = f__33132__auto__.call(null);
(statearr_36991[(6)] = c__33131__auto___36992);

return statearr_36991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___36992,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37001,opts){
var map__37002 = p__37001;
var map__37002__$1 = ((((!((map__37002 == null)))?((((map__37002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37002.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37002):map__37002);
var eval_body = cljs.core.get.call(null,map__37002__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37002__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30036__auto__ = eval_body;
if(cljs.core.truth_(and__30036__auto__)){
return typeof eval_body === 'string';
} else {
return and__30036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37004){var e = e37004;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37005_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37005_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37006){
var vec__37007 = p__37006;
var k = cljs.core.nth.call(null,vec__37007,(0),null);
var v = cljs.core.nth.call(null,vec__37007,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37010){
var vec__37011 = p__37010;
var k = cljs.core.nth.call(null,vec__37011,(0),null);
var v = cljs.core.nth.call(null,vec__37011,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37017,p__37018){
var map__37019 = p__37017;
var map__37019__$1 = ((((!((map__37019 == null)))?((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37019):map__37019);
var opts = map__37019__$1;
var before_jsload = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37020 = p__37018;
var map__37020__$1 = ((((!((map__37020 == null)))?((((map__37020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37020.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37020):map__37020);
var msg = map__37020__$1;
var files = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37020__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37174){
var state_val_37175 = (state_37174[(1)]);
if((state_val_37175 === (7))){
var inst_37036 = (state_37174[(7)]);
var inst_37034 = (state_37174[(8)]);
var inst_37037 = (state_37174[(9)]);
var inst_37035 = (state_37174[(10)]);
var inst_37042 = cljs.core._nth.call(null,inst_37035,inst_37037);
var inst_37043 = figwheel.client.file_reloading.eval_body.call(null,inst_37042,opts);
var inst_37044 = (inst_37037 + (1));
var tmp37176 = inst_37036;
var tmp37177 = inst_37034;
var tmp37178 = inst_37035;
var inst_37034__$1 = tmp37177;
var inst_37035__$1 = tmp37178;
var inst_37036__$1 = tmp37176;
var inst_37037__$1 = inst_37044;
var state_37174__$1 = (function (){var statearr_37179 = state_37174;
(statearr_37179[(7)] = inst_37036__$1);

(statearr_37179[(8)] = inst_37034__$1);

(statearr_37179[(11)] = inst_37043);

(statearr_37179[(9)] = inst_37037__$1);

(statearr_37179[(10)] = inst_37035__$1);

return statearr_37179;
})();
var statearr_37180_37263 = state_37174__$1;
(statearr_37180_37263[(2)] = null);

(statearr_37180_37263[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (20))){
var inst_37077 = (state_37174[(12)]);
var inst_37085 = figwheel.client.file_reloading.sort_files.call(null,inst_37077);
var state_37174__$1 = state_37174;
var statearr_37181_37264 = state_37174__$1;
(statearr_37181_37264[(2)] = inst_37085);

(statearr_37181_37264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (27))){
var state_37174__$1 = state_37174;
var statearr_37182_37265 = state_37174__$1;
(statearr_37182_37265[(2)] = null);

(statearr_37182_37265[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (1))){
var inst_37026 = (state_37174[(13)]);
var inst_37023 = before_jsload.call(null,files);
var inst_37024 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37025 = (function (){return ((function (inst_37026,inst_37023,inst_37024,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37014_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37014_SHARP_);
});
;})(inst_37026,inst_37023,inst_37024,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37026__$1 = cljs.core.filter.call(null,inst_37025,files);
var inst_37027 = cljs.core.not_empty.call(null,inst_37026__$1);
var state_37174__$1 = (function (){var statearr_37183 = state_37174;
(statearr_37183[(14)] = inst_37023);

(statearr_37183[(13)] = inst_37026__$1);

(statearr_37183[(15)] = inst_37024);

return statearr_37183;
})();
if(cljs.core.truth_(inst_37027)){
var statearr_37184_37266 = state_37174__$1;
(statearr_37184_37266[(1)] = (2));

} else {
var statearr_37185_37267 = state_37174__$1;
(statearr_37185_37267[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (24))){
var state_37174__$1 = state_37174;
var statearr_37186_37268 = state_37174__$1;
(statearr_37186_37268[(2)] = null);

(statearr_37186_37268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (39))){
var inst_37127 = (state_37174[(16)]);
var state_37174__$1 = state_37174;
var statearr_37187_37269 = state_37174__$1;
(statearr_37187_37269[(2)] = inst_37127);

(statearr_37187_37269[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (46))){
var inst_37169 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37188_37270 = state_37174__$1;
(statearr_37188_37270[(2)] = inst_37169);

(statearr_37188_37270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (4))){
var inst_37071 = (state_37174[(2)]);
var inst_37072 = cljs.core.List.EMPTY;
var inst_37073 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37072);
var inst_37074 = (function (){return ((function (inst_37071,inst_37072,inst_37073,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37015_SHARP_){
var and__30036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37015_SHARP_);
if(cljs.core.truth_(and__30036__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37015_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37015_SHARP_)));
} else {
return and__30036__auto__;
}
});
;})(inst_37071,inst_37072,inst_37073,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37075 = cljs.core.filter.call(null,inst_37074,files);
var inst_37076 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37077 = cljs.core.concat.call(null,inst_37075,inst_37076);
var state_37174__$1 = (function (){var statearr_37189 = state_37174;
(statearr_37189[(12)] = inst_37077);

(statearr_37189[(17)] = inst_37071);

(statearr_37189[(18)] = inst_37073);

return statearr_37189;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37190_37271 = state_37174__$1;
(statearr_37190_37271[(1)] = (16));

} else {
var statearr_37191_37272 = state_37174__$1;
(statearr_37191_37272[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (15))){
var inst_37061 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37192_37273 = state_37174__$1;
(statearr_37192_37273[(2)] = inst_37061);

(statearr_37192_37273[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (21))){
var inst_37087 = (state_37174[(19)]);
var inst_37087__$1 = (state_37174[(2)]);
var inst_37088 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37087__$1);
var state_37174__$1 = (function (){var statearr_37193 = state_37174;
(statearr_37193[(19)] = inst_37087__$1);

return statearr_37193;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37174__$1,(22),inst_37088);
} else {
if((state_val_37175 === (31))){
var inst_37172 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37174__$1,inst_37172);
} else {
if((state_val_37175 === (32))){
var inst_37127 = (state_37174[(16)]);
var inst_37132 = inst_37127.cljs$lang$protocol_mask$partition0$;
var inst_37133 = (inst_37132 & (64));
var inst_37134 = inst_37127.cljs$core$ISeq$;
var inst_37135 = (cljs.core.PROTOCOL_SENTINEL === inst_37134);
var inst_37136 = (inst_37133) || (inst_37135);
var state_37174__$1 = state_37174;
if(cljs.core.truth_(inst_37136)){
var statearr_37194_37274 = state_37174__$1;
(statearr_37194_37274[(1)] = (35));

} else {
var statearr_37195_37275 = state_37174__$1;
(statearr_37195_37275[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (40))){
var inst_37149 = (state_37174[(20)]);
var inst_37148 = (state_37174[(2)]);
var inst_37149__$1 = cljs.core.get.call(null,inst_37148,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37150 = cljs.core.get.call(null,inst_37148,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37151 = cljs.core.not_empty.call(null,inst_37149__$1);
var state_37174__$1 = (function (){var statearr_37196 = state_37174;
(statearr_37196[(21)] = inst_37150);

(statearr_37196[(20)] = inst_37149__$1);

return statearr_37196;
})();
if(cljs.core.truth_(inst_37151)){
var statearr_37197_37276 = state_37174__$1;
(statearr_37197_37276[(1)] = (41));

} else {
var statearr_37198_37277 = state_37174__$1;
(statearr_37198_37277[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (33))){
var state_37174__$1 = state_37174;
var statearr_37199_37278 = state_37174__$1;
(statearr_37199_37278[(2)] = false);

(statearr_37199_37278[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (13))){
var inst_37047 = (state_37174[(22)]);
var inst_37051 = cljs.core.chunk_first.call(null,inst_37047);
var inst_37052 = cljs.core.chunk_rest.call(null,inst_37047);
var inst_37053 = cljs.core.count.call(null,inst_37051);
var inst_37034 = inst_37052;
var inst_37035 = inst_37051;
var inst_37036 = inst_37053;
var inst_37037 = (0);
var state_37174__$1 = (function (){var statearr_37200 = state_37174;
(statearr_37200[(7)] = inst_37036);

(statearr_37200[(8)] = inst_37034);

(statearr_37200[(9)] = inst_37037);

(statearr_37200[(10)] = inst_37035);

return statearr_37200;
})();
var statearr_37201_37279 = state_37174__$1;
(statearr_37201_37279[(2)] = null);

(statearr_37201_37279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (22))){
var inst_37095 = (state_37174[(23)]);
var inst_37090 = (state_37174[(24)]);
var inst_37087 = (state_37174[(19)]);
var inst_37091 = (state_37174[(25)]);
var inst_37090__$1 = (state_37174[(2)]);
var inst_37091__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37090__$1);
var inst_37092 = (function (){var all_files = inst_37087;
var res_SINGLEQUOTE_ = inst_37090__$1;
var res = inst_37091__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37095,inst_37090,inst_37087,inst_37091,inst_37090__$1,inst_37091__$1,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37016_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37016_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37095,inst_37090,inst_37087,inst_37091,inst_37090__$1,inst_37091__$1,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37093 = cljs.core.filter.call(null,inst_37092,inst_37090__$1);
var inst_37094 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37095__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37094);
var inst_37096 = cljs.core.not_empty.call(null,inst_37095__$1);
var state_37174__$1 = (function (){var statearr_37202 = state_37174;
(statearr_37202[(23)] = inst_37095__$1);

(statearr_37202[(24)] = inst_37090__$1);

(statearr_37202[(26)] = inst_37093);

(statearr_37202[(25)] = inst_37091__$1);

return statearr_37202;
})();
if(cljs.core.truth_(inst_37096)){
var statearr_37203_37280 = state_37174__$1;
(statearr_37203_37280[(1)] = (23));

} else {
var statearr_37204_37281 = state_37174__$1;
(statearr_37204_37281[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (36))){
var state_37174__$1 = state_37174;
var statearr_37205_37282 = state_37174__$1;
(statearr_37205_37282[(2)] = false);

(statearr_37205_37282[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (41))){
var inst_37149 = (state_37174[(20)]);
var inst_37153 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37154 = cljs.core.map.call(null,inst_37153,inst_37149);
var inst_37155 = cljs.core.pr_str.call(null,inst_37154);
var inst_37156 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37155)].join('');
var inst_37157 = figwheel.client.utils.log.call(null,inst_37156);
var state_37174__$1 = state_37174;
var statearr_37206_37283 = state_37174__$1;
(statearr_37206_37283[(2)] = inst_37157);

(statearr_37206_37283[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (43))){
var inst_37150 = (state_37174[(21)]);
var inst_37160 = (state_37174[(2)]);
var inst_37161 = cljs.core.not_empty.call(null,inst_37150);
var state_37174__$1 = (function (){var statearr_37207 = state_37174;
(statearr_37207[(27)] = inst_37160);

return statearr_37207;
})();
if(cljs.core.truth_(inst_37161)){
var statearr_37208_37284 = state_37174__$1;
(statearr_37208_37284[(1)] = (44));

} else {
var statearr_37209_37285 = state_37174__$1;
(statearr_37209_37285[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (29))){
var inst_37095 = (state_37174[(23)]);
var inst_37090 = (state_37174[(24)]);
var inst_37093 = (state_37174[(26)]);
var inst_37087 = (state_37174[(19)]);
var inst_37091 = (state_37174[(25)]);
var inst_37127 = (state_37174[(16)]);
var inst_37123 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37126 = (function (){var all_files = inst_37087;
var res_SINGLEQUOTE_ = inst_37090;
var res = inst_37091;
var files_not_loaded = inst_37093;
var dependencies_that_loaded = inst_37095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37127,inst_37123,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37125){
var map__37210 = p__37125;
var map__37210__$1 = ((((!((map__37210 == null)))?((((map__37210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37210):map__37210);
var namespace = cljs.core.get.call(null,map__37210__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37127,inst_37123,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37127__$1 = cljs.core.group_by.call(null,inst_37126,inst_37093);
var inst_37129 = (inst_37127__$1 == null);
var inst_37130 = cljs.core.not.call(null,inst_37129);
var state_37174__$1 = (function (){var statearr_37212 = state_37174;
(statearr_37212[(28)] = inst_37123);

(statearr_37212[(16)] = inst_37127__$1);

return statearr_37212;
})();
if(inst_37130){
var statearr_37213_37286 = state_37174__$1;
(statearr_37213_37286[(1)] = (32));

} else {
var statearr_37214_37287 = state_37174__$1;
(statearr_37214_37287[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (44))){
var inst_37150 = (state_37174[(21)]);
var inst_37163 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37150);
var inst_37164 = cljs.core.pr_str.call(null,inst_37163);
var inst_37165 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37164)].join('');
var inst_37166 = figwheel.client.utils.log.call(null,inst_37165);
var state_37174__$1 = state_37174;
var statearr_37215_37288 = state_37174__$1;
(statearr_37215_37288[(2)] = inst_37166);

(statearr_37215_37288[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (6))){
var inst_37068 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37216_37289 = state_37174__$1;
(statearr_37216_37289[(2)] = inst_37068);

(statearr_37216_37289[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (28))){
var inst_37093 = (state_37174[(26)]);
var inst_37120 = (state_37174[(2)]);
var inst_37121 = cljs.core.not_empty.call(null,inst_37093);
var state_37174__$1 = (function (){var statearr_37217 = state_37174;
(statearr_37217[(29)] = inst_37120);

return statearr_37217;
})();
if(cljs.core.truth_(inst_37121)){
var statearr_37218_37290 = state_37174__$1;
(statearr_37218_37290[(1)] = (29));

} else {
var statearr_37219_37291 = state_37174__$1;
(statearr_37219_37291[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (25))){
var inst_37091 = (state_37174[(25)]);
var inst_37107 = (state_37174[(2)]);
var inst_37108 = cljs.core.not_empty.call(null,inst_37091);
var state_37174__$1 = (function (){var statearr_37220 = state_37174;
(statearr_37220[(30)] = inst_37107);

return statearr_37220;
})();
if(cljs.core.truth_(inst_37108)){
var statearr_37221_37292 = state_37174__$1;
(statearr_37221_37292[(1)] = (26));

} else {
var statearr_37222_37293 = state_37174__$1;
(statearr_37222_37293[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (34))){
var inst_37143 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
if(cljs.core.truth_(inst_37143)){
var statearr_37223_37294 = state_37174__$1;
(statearr_37223_37294[(1)] = (38));

} else {
var statearr_37224_37295 = state_37174__$1;
(statearr_37224_37295[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (17))){
var state_37174__$1 = state_37174;
var statearr_37225_37296 = state_37174__$1;
(statearr_37225_37296[(2)] = recompile_dependents);

(statearr_37225_37296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (3))){
var state_37174__$1 = state_37174;
var statearr_37226_37297 = state_37174__$1;
(statearr_37226_37297[(2)] = null);

(statearr_37226_37297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (12))){
var inst_37064 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37227_37298 = state_37174__$1;
(statearr_37227_37298[(2)] = inst_37064);

(statearr_37227_37298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (2))){
var inst_37026 = (state_37174[(13)]);
var inst_37033 = cljs.core.seq.call(null,inst_37026);
var inst_37034 = inst_37033;
var inst_37035 = null;
var inst_37036 = (0);
var inst_37037 = (0);
var state_37174__$1 = (function (){var statearr_37228 = state_37174;
(statearr_37228[(7)] = inst_37036);

(statearr_37228[(8)] = inst_37034);

(statearr_37228[(9)] = inst_37037);

(statearr_37228[(10)] = inst_37035);

return statearr_37228;
})();
var statearr_37229_37299 = state_37174__$1;
(statearr_37229_37299[(2)] = null);

(statearr_37229_37299[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (23))){
var inst_37095 = (state_37174[(23)]);
var inst_37090 = (state_37174[(24)]);
var inst_37093 = (state_37174[(26)]);
var inst_37087 = (state_37174[(19)]);
var inst_37091 = (state_37174[(25)]);
var inst_37098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37100 = (function (){var all_files = inst_37087;
var res_SINGLEQUOTE_ = inst_37090;
var res = inst_37091;
var files_not_loaded = inst_37093;
var dependencies_that_loaded = inst_37095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37098,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37099){
var map__37230 = p__37099;
var map__37230__$1 = ((((!((map__37230 == null)))?((((map__37230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37230.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37230):map__37230);
var request_url = cljs.core.get.call(null,map__37230__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37098,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37101 = cljs.core.reverse.call(null,inst_37095);
var inst_37102 = cljs.core.map.call(null,inst_37100,inst_37101);
var inst_37103 = cljs.core.pr_str.call(null,inst_37102);
var inst_37104 = figwheel.client.utils.log.call(null,inst_37103);
var state_37174__$1 = (function (){var statearr_37232 = state_37174;
(statearr_37232[(31)] = inst_37098);

return statearr_37232;
})();
var statearr_37233_37300 = state_37174__$1;
(statearr_37233_37300[(2)] = inst_37104);

(statearr_37233_37300[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (35))){
var state_37174__$1 = state_37174;
var statearr_37234_37301 = state_37174__$1;
(statearr_37234_37301[(2)] = true);

(statearr_37234_37301[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (19))){
var inst_37077 = (state_37174[(12)]);
var inst_37083 = figwheel.client.file_reloading.expand_files.call(null,inst_37077);
var state_37174__$1 = state_37174;
var statearr_37235_37302 = state_37174__$1;
(statearr_37235_37302[(2)] = inst_37083);

(statearr_37235_37302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (11))){
var state_37174__$1 = state_37174;
var statearr_37236_37303 = state_37174__$1;
(statearr_37236_37303[(2)] = null);

(statearr_37236_37303[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (9))){
var inst_37066 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37237_37304 = state_37174__$1;
(statearr_37237_37304[(2)] = inst_37066);

(statearr_37237_37304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (5))){
var inst_37036 = (state_37174[(7)]);
var inst_37037 = (state_37174[(9)]);
var inst_37039 = (inst_37037 < inst_37036);
var inst_37040 = inst_37039;
var state_37174__$1 = state_37174;
if(cljs.core.truth_(inst_37040)){
var statearr_37238_37305 = state_37174__$1;
(statearr_37238_37305[(1)] = (7));

} else {
var statearr_37239_37306 = state_37174__$1;
(statearr_37239_37306[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (14))){
var inst_37047 = (state_37174[(22)]);
var inst_37056 = cljs.core.first.call(null,inst_37047);
var inst_37057 = figwheel.client.file_reloading.eval_body.call(null,inst_37056,opts);
var inst_37058 = cljs.core.next.call(null,inst_37047);
var inst_37034 = inst_37058;
var inst_37035 = null;
var inst_37036 = (0);
var inst_37037 = (0);
var state_37174__$1 = (function (){var statearr_37240 = state_37174;
(statearr_37240[(7)] = inst_37036);

(statearr_37240[(8)] = inst_37034);

(statearr_37240[(9)] = inst_37037);

(statearr_37240[(32)] = inst_37057);

(statearr_37240[(10)] = inst_37035);

return statearr_37240;
})();
var statearr_37241_37307 = state_37174__$1;
(statearr_37241_37307[(2)] = null);

(statearr_37241_37307[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (45))){
var state_37174__$1 = state_37174;
var statearr_37242_37308 = state_37174__$1;
(statearr_37242_37308[(2)] = null);

(statearr_37242_37308[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (26))){
var inst_37095 = (state_37174[(23)]);
var inst_37090 = (state_37174[(24)]);
var inst_37093 = (state_37174[(26)]);
var inst_37087 = (state_37174[(19)]);
var inst_37091 = (state_37174[(25)]);
var inst_37110 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37112 = (function (){var all_files = inst_37087;
var res_SINGLEQUOTE_ = inst_37090;
var res = inst_37091;
var files_not_loaded = inst_37093;
var dependencies_that_loaded = inst_37095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37110,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37111){
var map__37243 = p__37111;
var map__37243__$1 = ((((!((map__37243 == null)))?((((map__37243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37243):map__37243);
var namespace = cljs.core.get.call(null,map__37243__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37243__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37110,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37113 = cljs.core.map.call(null,inst_37112,inst_37091);
var inst_37114 = cljs.core.pr_str.call(null,inst_37113);
var inst_37115 = figwheel.client.utils.log.call(null,inst_37114);
var inst_37116 = (function (){var all_files = inst_37087;
var res_SINGLEQUOTE_ = inst_37090;
var res = inst_37091;
var files_not_loaded = inst_37093;
var dependencies_that_loaded = inst_37095;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37110,inst_37112,inst_37113,inst_37114,inst_37115,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37095,inst_37090,inst_37093,inst_37087,inst_37091,inst_37110,inst_37112,inst_37113,inst_37114,inst_37115,state_val_37175,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37117 = setTimeout(inst_37116,(10));
var state_37174__$1 = (function (){var statearr_37245 = state_37174;
(statearr_37245[(33)] = inst_37115);

(statearr_37245[(34)] = inst_37110);

return statearr_37245;
})();
var statearr_37246_37309 = state_37174__$1;
(statearr_37246_37309[(2)] = inst_37117);

(statearr_37246_37309[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (16))){
var state_37174__$1 = state_37174;
var statearr_37247_37310 = state_37174__$1;
(statearr_37247_37310[(2)] = reload_dependents);

(statearr_37247_37310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (38))){
var inst_37127 = (state_37174[(16)]);
var inst_37145 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37127);
var state_37174__$1 = state_37174;
var statearr_37248_37311 = state_37174__$1;
(statearr_37248_37311[(2)] = inst_37145);

(statearr_37248_37311[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (30))){
var state_37174__$1 = state_37174;
var statearr_37249_37312 = state_37174__$1;
(statearr_37249_37312[(2)] = null);

(statearr_37249_37312[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (10))){
var inst_37047 = (state_37174[(22)]);
var inst_37049 = cljs.core.chunked_seq_QMARK_.call(null,inst_37047);
var state_37174__$1 = state_37174;
if(inst_37049){
var statearr_37250_37313 = state_37174__$1;
(statearr_37250_37313[(1)] = (13));

} else {
var statearr_37251_37314 = state_37174__$1;
(statearr_37251_37314[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (18))){
var inst_37081 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
if(cljs.core.truth_(inst_37081)){
var statearr_37252_37315 = state_37174__$1;
(statearr_37252_37315[(1)] = (19));

} else {
var statearr_37253_37316 = state_37174__$1;
(statearr_37253_37316[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (42))){
var state_37174__$1 = state_37174;
var statearr_37254_37317 = state_37174__$1;
(statearr_37254_37317[(2)] = null);

(statearr_37254_37317[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (37))){
var inst_37140 = (state_37174[(2)]);
var state_37174__$1 = state_37174;
var statearr_37255_37318 = state_37174__$1;
(statearr_37255_37318[(2)] = inst_37140);

(statearr_37255_37318[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37175 === (8))){
var inst_37034 = (state_37174[(8)]);
var inst_37047 = (state_37174[(22)]);
var inst_37047__$1 = cljs.core.seq.call(null,inst_37034);
var state_37174__$1 = (function (){var statearr_37256 = state_37174;
(statearr_37256[(22)] = inst_37047__$1);

return statearr_37256;
})();
if(inst_37047__$1){
var statearr_37257_37319 = state_37174__$1;
(statearr_37257_37319[(1)] = (10));

} else {
var statearr_37258_37320 = state_37174__$1;
(statearr_37258_37320[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33041__auto__,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____0 = (function (){
var statearr_37259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37259[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__);

(statearr_37259[(1)] = (1));

return statearr_37259;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____1 = (function (state_37174){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_37174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e37260){if((e37260 instanceof Object)){
var ex__33045__auto__ = e37260;
var statearr_37261_37321 = state_37174;
(statearr_37261_37321[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37260;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37322 = state_37174;
state_37174 = G__37322;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__ = function(state_37174){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____1.call(this,state_37174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33133__auto__ = (function (){var statearr_37262 = f__33132__auto__.call(null);
(statearr_37262[(6)] = c__33131__auto__);

return statearr_37262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__,map__37019,map__37019__$1,opts,before_jsload,on_jsload,reload_dependents,map__37020,map__37020__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33131__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37325,link){
var map__37326 = p__37325;
var map__37326__$1 = ((((!((map__37326 == null)))?((((map__37326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37326):map__37326);
var file = cljs.core.get.call(null,map__37326__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__37326,map__37326__$1,file){
return (function (p1__37323_SHARP_,p2__37324_SHARP_){
if(cljs.core._EQ_.call(null,p1__37323_SHARP_,p2__37324_SHARP_)){
return p1__37323_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__37326,map__37326__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37329){
var map__37330 = p__37329;
var map__37330__$1 = ((((!((map__37330 == null)))?((((map__37330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37330):map__37330);
var match_length = cljs.core.get.call(null,map__37330__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37330__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37328_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37328_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37332_SHARP_,p2__37333_SHARP_){
return cljs.core.assoc.call(null,p1__37332_SHARP_,cljs.core.get.call(null,p2__37333_SHARP_,key),p2__37333_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37334 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37334);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37334);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37335,p__37336){
var map__37337 = p__37335;
var map__37337__$1 = ((((!((map__37337 == null)))?((((map__37337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37337):map__37337);
var on_cssload = cljs.core.get.call(null,map__37337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37338 = p__37336;
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37338):map__37338);
var files_msg = map__37338__$1;
var files = cljs.core.get.call(null,map__37338__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1508469657933
