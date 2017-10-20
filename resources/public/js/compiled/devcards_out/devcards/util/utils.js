// Compiled by ClojureScript 1.9.908 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5276__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5276__auto__)){
var doc = temp__5276__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__31173__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37345_37347 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37346_37348 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37345_37347,_STAR_print_fn_STAR_37346_37348,sb__31173__auto__){
return (function (x__31174__auto__){
return sb__31173__auto__.append(x__31174__auto__);
});})(_STAR_print_newline_STAR_37345_37347,_STAR_print_fn_STAR_37346_37348,sb__31173__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37346_37348;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37345_37347;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__31173__auto__)].join('');
}catch (e37343){if((e37343 instanceof Error)){
var e1 = e37343;
try{return obj.toString();
}catch (e37344){if((e37344 instanceof Error)){
var e2 = e37344;
return ["<<Un-printable Type>>"].join('');
} else {
throw e37344;

}
}} else {
throw e37343;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_37349 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_37349;
}});

//# sourceMappingURL=utils.js.map?rel=1508469657991
