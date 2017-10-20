// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e40494){if((e40494 instanceof Error)){
var e = e40494;
return "Error: Unable to stringify";
} else {
throw e40494;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__40497 = arguments.length;
switch (G__40497) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__40495_SHARP_){
if(typeof p1__40495_SHARP_ === 'string'){
return p1__40495_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__40495_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___40500 = arguments.length;
var i__31326__auto___40501 = (0);
while(true){
if((i__31326__auto___40501 < len__31325__auto___40500)){
args__31332__auto__.push((arguments[i__31326__auto___40501]));

var G__40502 = (i__31326__auto___40501 + (1));
i__31326__auto___40501 = G__40502;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq40499){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40499));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31332__auto__ = [];
var len__31325__auto___40504 = arguments.length;
var i__31326__auto___40505 = (0);
while(true){
if((i__31326__auto___40505 < len__31325__auto___40504)){
args__31332__auto__.push((arguments[i__31326__auto___40505]));

var G__40506 = (i__31326__auto___40505 + (1));
i__31326__auto___40505 = G__40506;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq40503){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40503));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40507){
var map__40508 = p__40507;
var map__40508__$1 = ((((!((map__40508 == null)))?((((map__40508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40508):map__40508);
var message = cljs.core.get.call(null,map__40508__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40508__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30048__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33131__auto___40587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___40587,ch){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___40587,ch){
return (function (state_40559){
var state_val_40560 = (state_40559[(1)]);
if((state_val_40560 === (7))){
var inst_40555 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40561_40588 = state_40559__$1;
(statearr_40561_40588[(2)] = inst_40555);

(statearr_40561_40588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (1))){
var state_40559__$1 = state_40559;
var statearr_40562_40589 = state_40559__$1;
(statearr_40562_40589[(2)] = null);

(statearr_40562_40589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (4))){
var inst_40512 = (state_40559[(7)]);
var inst_40512__$1 = (state_40559[(2)]);
var state_40559__$1 = (function (){var statearr_40563 = state_40559;
(statearr_40563[(7)] = inst_40512__$1);

return statearr_40563;
})();
if(cljs.core.truth_(inst_40512__$1)){
var statearr_40564_40590 = state_40559__$1;
(statearr_40564_40590[(1)] = (5));

} else {
var statearr_40565_40591 = state_40559__$1;
(statearr_40565_40591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (15))){
var inst_40519 = (state_40559[(8)]);
var inst_40534 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40519);
var inst_40535 = cljs.core.first.call(null,inst_40534);
var inst_40536 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40535);
var inst_40537 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40536)].join('');
var inst_40538 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40537);
var state_40559__$1 = state_40559;
var statearr_40566_40592 = state_40559__$1;
(statearr_40566_40592[(2)] = inst_40538);

(statearr_40566_40592[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (13))){
var inst_40543 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40567_40593 = state_40559__$1;
(statearr_40567_40593[(2)] = inst_40543);

(statearr_40567_40593[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (6))){
var state_40559__$1 = state_40559;
var statearr_40568_40594 = state_40559__$1;
(statearr_40568_40594[(2)] = null);

(statearr_40568_40594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (17))){
var inst_40541 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40569_40595 = state_40559__$1;
(statearr_40569_40595[(2)] = inst_40541);

(statearr_40569_40595[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (3))){
var inst_40557 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40559__$1,inst_40557);
} else {
if((state_val_40560 === (12))){
var inst_40518 = (state_40559[(9)]);
var inst_40532 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40518,opts);
var state_40559__$1 = state_40559;
if(cljs.core.truth_(inst_40532)){
var statearr_40570_40596 = state_40559__$1;
(statearr_40570_40596[(1)] = (15));

} else {
var statearr_40571_40597 = state_40559__$1;
(statearr_40571_40597[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (2))){
var state_40559__$1 = state_40559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40559__$1,(4),ch);
} else {
if((state_val_40560 === (11))){
var inst_40519 = (state_40559[(8)]);
var inst_40524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40525 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40519);
var inst_40526 = cljs.core.async.timeout.call(null,(1000));
var inst_40527 = [inst_40525,inst_40526];
var inst_40528 = (new cljs.core.PersistentVector(null,2,(5),inst_40524,inst_40527,null));
var state_40559__$1 = state_40559;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40559__$1,(14),inst_40528);
} else {
if((state_val_40560 === (9))){
var inst_40519 = (state_40559[(8)]);
var inst_40545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40546 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40519);
var inst_40547 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40546);
var inst_40548 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40547)].join('');
var inst_40549 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40548);
var state_40559__$1 = (function (){var statearr_40572 = state_40559;
(statearr_40572[(10)] = inst_40545);

return statearr_40572;
})();
var statearr_40573_40598 = state_40559__$1;
(statearr_40573_40598[(2)] = inst_40549);

(statearr_40573_40598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (5))){
var inst_40512 = (state_40559[(7)]);
var inst_40514 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40515 = (new cljs.core.PersistentArrayMap(null,2,inst_40514,null));
var inst_40516 = (new cljs.core.PersistentHashSet(null,inst_40515,null));
var inst_40517 = figwheel.client.focus_msgs.call(null,inst_40516,inst_40512);
var inst_40518 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40517);
var inst_40519 = cljs.core.first.call(null,inst_40517);
var inst_40520 = figwheel.client.autoload_QMARK_.call(null);
var state_40559__$1 = (function (){var statearr_40574 = state_40559;
(statearr_40574[(9)] = inst_40518);

(statearr_40574[(8)] = inst_40519);

return statearr_40574;
})();
if(cljs.core.truth_(inst_40520)){
var statearr_40575_40599 = state_40559__$1;
(statearr_40575_40599[(1)] = (8));

} else {
var statearr_40576_40600 = state_40559__$1;
(statearr_40576_40600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (14))){
var inst_40530 = (state_40559[(2)]);
var state_40559__$1 = state_40559;
var statearr_40577_40601 = state_40559__$1;
(statearr_40577_40601[(2)] = inst_40530);

(statearr_40577_40601[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (16))){
var state_40559__$1 = state_40559;
var statearr_40578_40602 = state_40559__$1;
(statearr_40578_40602[(2)] = null);

(statearr_40578_40602[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (10))){
var inst_40551 = (state_40559[(2)]);
var state_40559__$1 = (function (){var statearr_40579 = state_40559;
(statearr_40579[(11)] = inst_40551);

return statearr_40579;
})();
var statearr_40580_40603 = state_40559__$1;
(statearr_40580_40603[(2)] = null);

(statearr_40580_40603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40560 === (8))){
var inst_40518 = (state_40559[(9)]);
var inst_40522 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40518,opts);
var state_40559__$1 = state_40559;
if(cljs.core.truth_(inst_40522)){
var statearr_40581_40604 = state_40559__$1;
(statearr_40581_40604[(1)] = (11));

} else {
var statearr_40582_40605 = state_40559__$1;
(statearr_40582_40605[(1)] = (12));

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
});})(c__33131__auto___40587,ch))
;
return ((function (switch__33041__auto__,c__33131__auto___40587,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____0 = (function (){
var statearr_40583 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40583[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__);

(statearr_40583[(1)] = (1));

return statearr_40583;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____1 = (function (state_40559){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_40559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e40584){if((e40584 instanceof Object)){
var ex__33045__auto__ = e40584;
var statearr_40585_40606 = state_40559;
(statearr_40585_40606[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40607 = state_40559;
state_40559 = G__40607;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__ = function(state_40559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____1.call(this,state_40559);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33042__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___40587,ch))
})();
var state__33133__auto__ = (function (){var statearr_40586 = f__33132__auto__.call(null);
(statearr_40586[(6)] = c__33131__auto___40587);

return statearr_40586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___40587,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40608_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40608_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_40610 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40610){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e40609){if((e40609 instanceof Error)){
var e = e40609;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40610], null));
} else {
var e = e40609;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_40610))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40611){
var map__40612 = p__40611;
var map__40612__$1 = ((((!((map__40612 == null)))?((((map__40612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40612):map__40612);
var opts = map__40612__$1;
var build_id = cljs.core.get.call(null,map__40612__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40612,map__40612__$1,opts,build_id){
return (function (p__40614){
var vec__40615 = p__40614;
var seq__40616 = cljs.core.seq.call(null,vec__40615);
var first__40617 = cljs.core.first.call(null,seq__40616);
var seq__40616__$1 = cljs.core.next.call(null,seq__40616);
var map__40618 = first__40617;
var map__40618__$1 = ((((!((map__40618 == null)))?((((map__40618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40618):map__40618);
var msg = map__40618__$1;
var msg_name = cljs.core.get.call(null,map__40618__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40616__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40615,seq__40616,first__40617,seq__40616__$1,map__40618,map__40618__$1,msg,msg_name,_,map__40612,map__40612__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40615,seq__40616,first__40617,seq__40616__$1,map__40618,map__40618__$1,msg,msg_name,_,map__40612,map__40612__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40612,map__40612__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40620){
var vec__40621 = p__40620;
var seq__40622 = cljs.core.seq.call(null,vec__40621);
var first__40623 = cljs.core.first.call(null,seq__40622);
var seq__40622__$1 = cljs.core.next.call(null,seq__40622);
var map__40624 = first__40623;
var map__40624__$1 = ((((!((map__40624 == null)))?((((map__40624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40624):map__40624);
var msg = map__40624__$1;
var msg_name = cljs.core.get.call(null,map__40624__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40622__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40626){
var map__40627 = p__40626;
var map__40627__$1 = ((((!((map__40627 == null)))?((((map__40627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40627):map__40627);
var on_compile_warning = cljs.core.get.call(null,map__40627__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40627__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40627,map__40627__$1,on_compile_warning,on_compile_fail){
return (function (p__40629){
var vec__40630 = p__40629;
var seq__40631 = cljs.core.seq.call(null,vec__40630);
var first__40632 = cljs.core.first.call(null,seq__40631);
var seq__40631__$1 = cljs.core.next.call(null,seq__40631);
var map__40633 = first__40632;
var map__40633__$1 = ((((!((map__40633 == null)))?((((map__40633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40633):map__40633);
var msg = map__40633__$1;
var msg_name = cljs.core.get.call(null,map__40633__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__40631__$1;
var pred__40635 = cljs.core._EQ_;
var expr__40636 = msg_name;
if(cljs.core.truth_(pred__40635.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40636))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40635.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40636))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40627,map__40627__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__,msg_hist,msg_names,msg){
return (function (state_40725){
var state_val_40726 = (state_40725[(1)]);
if((state_val_40726 === (7))){
var inst_40645 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40645)){
var statearr_40727_40774 = state_40725__$1;
(statearr_40727_40774[(1)] = (8));

} else {
var statearr_40728_40775 = state_40725__$1;
(statearr_40728_40775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (20))){
var inst_40719 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40729_40776 = state_40725__$1;
(statearr_40729_40776[(2)] = inst_40719);

(statearr_40729_40776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (27))){
var inst_40715 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40730_40777 = state_40725__$1;
(statearr_40730_40777[(2)] = inst_40715);

(statearr_40730_40777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (1))){
var inst_40638 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40638)){
var statearr_40731_40778 = state_40725__$1;
(statearr_40731_40778[(1)] = (2));

} else {
var statearr_40732_40779 = state_40725__$1;
(statearr_40732_40779[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (24))){
var inst_40717 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40733_40780 = state_40725__$1;
(statearr_40733_40780[(2)] = inst_40717);

(statearr_40733_40780[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (4))){
var inst_40723 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40725__$1,inst_40723);
} else {
if((state_val_40726 === (15))){
var inst_40721 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40734_40781 = state_40725__$1;
(statearr_40734_40781[(2)] = inst_40721);

(statearr_40734_40781[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (21))){
var inst_40674 = (state_40725[(2)]);
var inst_40675 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40676 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40675);
var state_40725__$1 = (function (){var statearr_40735 = state_40725;
(statearr_40735[(7)] = inst_40674);

return statearr_40735;
})();
var statearr_40736_40782 = state_40725__$1;
(statearr_40736_40782[(2)] = inst_40676);

(statearr_40736_40782[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (31))){
var inst_40704 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40704)){
var statearr_40737_40783 = state_40725__$1;
(statearr_40737_40783[(1)] = (34));

} else {
var statearr_40738_40784 = state_40725__$1;
(statearr_40738_40784[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (32))){
var inst_40713 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40739_40785 = state_40725__$1;
(statearr_40739_40785[(2)] = inst_40713);

(statearr_40739_40785[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (33))){
var inst_40700 = (state_40725[(2)]);
var inst_40701 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40701);
var state_40725__$1 = (function (){var statearr_40740 = state_40725;
(statearr_40740[(8)] = inst_40700);

return statearr_40740;
})();
var statearr_40741_40786 = state_40725__$1;
(statearr_40741_40786[(2)] = inst_40702);

(statearr_40741_40786[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (13))){
var inst_40659 = figwheel.client.heads_up.clear.call(null);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(16),inst_40659);
} else {
if((state_val_40726 === (22))){
var inst_40680 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40681 = figwheel.client.heads_up.append_warning_message.call(null,inst_40680);
var state_40725__$1 = state_40725;
var statearr_40742_40787 = state_40725__$1;
(statearr_40742_40787[(2)] = inst_40681);

(statearr_40742_40787[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (36))){
var inst_40711 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40743_40788 = state_40725__$1;
(statearr_40743_40788[(2)] = inst_40711);

(statearr_40743_40788[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (29))){
var inst_40691 = (state_40725[(2)]);
var inst_40692 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40693 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40692);
var state_40725__$1 = (function (){var statearr_40744 = state_40725;
(statearr_40744[(9)] = inst_40691);

return statearr_40744;
})();
var statearr_40745_40789 = state_40725__$1;
(statearr_40745_40789[(2)] = inst_40693);

(statearr_40745_40789[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (6))){
var inst_40640 = (state_40725[(10)]);
var state_40725__$1 = state_40725;
var statearr_40746_40790 = state_40725__$1;
(statearr_40746_40790[(2)] = inst_40640);

(statearr_40746_40790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (28))){
var inst_40687 = (state_40725[(2)]);
var inst_40688 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40689 = figwheel.client.heads_up.display_warning.call(null,inst_40688);
var state_40725__$1 = (function (){var statearr_40747 = state_40725;
(statearr_40747[(11)] = inst_40687);

return statearr_40747;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(29),inst_40689);
} else {
if((state_val_40726 === (25))){
var inst_40685 = figwheel.client.heads_up.clear.call(null);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(28),inst_40685);
} else {
if((state_val_40726 === (34))){
var inst_40706 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(37),inst_40706);
} else {
if((state_val_40726 === (17))){
var inst_40665 = (state_40725[(2)]);
var inst_40666 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40667 = figwheel.client.auto_jump_to_error.call(null,opts,inst_40666);
var state_40725__$1 = (function (){var statearr_40748 = state_40725;
(statearr_40748[(12)] = inst_40665);

return statearr_40748;
})();
var statearr_40749_40791 = state_40725__$1;
(statearr_40749_40791[(2)] = inst_40667);

(statearr_40749_40791[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (3))){
var inst_40657 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40657)){
var statearr_40750_40792 = state_40725__$1;
(statearr_40750_40792[(1)] = (13));

} else {
var statearr_40751_40793 = state_40725__$1;
(statearr_40751_40793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (12))){
var inst_40653 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40752_40794 = state_40725__$1;
(statearr_40752_40794[(2)] = inst_40653);

(statearr_40752_40794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (2))){
var inst_40640 = (state_40725[(10)]);
var inst_40640__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_40725__$1 = (function (){var statearr_40753 = state_40725;
(statearr_40753[(10)] = inst_40640__$1);

return statearr_40753;
})();
if(cljs.core.truth_(inst_40640__$1)){
var statearr_40754_40795 = state_40725__$1;
(statearr_40754_40795[(1)] = (5));

} else {
var statearr_40755_40796 = state_40725__$1;
(statearr_40755_40796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (23))){
var inst_40683 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40683)){
var statearr_40756_40797 = state_40725__$1;
(statearr_40756_40797[(1)] = (25));

} else {
var statearr_40757_40798 = state_40725__$1;
(statearr_40757_40798[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (35))){
var state_40725__$1 = state_40725;
var statearr_40758_40799 = state_40725__$1;
(statearr_40758_40799[(2)] = null);

(statearr_40758_40799[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (19))){
var inst_40678 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40678)){
var statearr_40759_40800 = state_40725__$1;
(statearr_40759_40800[(1)] = (22));

} else {
var statearr_40760_40801 = state_40725__$1;
(statearr_40760_40801[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (11))){
var inst_40649 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40761_40802 = state_40725__$1;
(statearr_40761_40802[(2)] = inst_40649);

(statearr_40761_40802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (9))){
var inst_40651 = figwheel.client.heads_up.clear.call(null);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(12),inst_40651);
} else {
if((state_val_40726 === (5))){
var inst_40642 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_40725__$1 = state_40725;
var statearr_40762_40803 = state_40725__$1;
(statearr_40762_40803[(2)] = inst_40642);

(statearr_40762_40803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (14))){
var inst_40669 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40669)){
var statearr_40763_40804 = state_40725__$1;
(statearr_40763_40804[(1)] = (18));

} else {
var statearr_40764_40805 = state_40725__$1;
(statearr_40764_40805[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (26))){
var inst_40695 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_40725__$1 = state_40725;
if(cljs.core.truth_(inst_40695)){
var statearr_40765_40806 = state_40725__$1;
(statearr_40765_40806[(1)] = (30));

} else {
var statearr_40766_40807 = state_40725__$1;
(statearr_40766_40807[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (16))){
var inst_40661 = (state_40725[(2)]);
var inst_40662 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40663 = figwheel.client.heads_up.display_exception.call(null,inst_40662);
var state_40725__$1 = (function (){var statearr_40767 = state_40725;
(statearr_40767[(13)] = inst_40661);

return statearr_40767;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(17),inst_40663);
} else {
if((state_val_40726 === (30))){
var inst_40697 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40698 = figwheel.client.heads_up.display_warning.call(null,inst_40697);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(33),inst_40698);
} else {
if((state_val_40726 === (10))){
var inst_40655 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40768_40808 = state_40725__$1;
(statearr_40768_40808[(2)] = inst_40655);

(statearr_40768_40808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (18))){
var inst_40671 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_40672 = figwheel.client.heads_up.display_exception.call(null,inst_40671);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(21),inst_40672);
} else {
if((state_val_40726 === (37))){
var inst_40708 = (state_40725[(2)]);
var state_40725__$1 = state_40725;
var statearr_40769_40809 = state_40725__$1;
(statearr_40769_40809[(2)] = inst_40708);

(statearr_40769_40809[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40726 === (8))){
var inst_40647 = figwheel.client.heads_up.flash_loaded.call(null);
var state_40725__$1 = state_40725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40725__$1,(11),inst_40647);
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
});})(c__33131__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33041__auto__,c__33131__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____0 = (function (){
var statearr_40770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40770[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__);

(statearr_40770[(1)] = (1));

return statearr_40770;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____1 = (function (state_40725){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_40725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e40771){if((e40771 instanceof Object)){
var ex__33045__auto__ = e40771;
var statearr_40772_40810 = state_40725;
(statearr_40772_40810[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40811 = state_40725;
state_40725 = G__40811;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__ = function(state_40725){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____1.call(this,state_40725);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__,msg_hist,msg_names,msg))
})();
var state__33133__auto__ = (function (){var statearr_40773 = f__33132__auto__.call(null);
(statearr_40773[(6)] = c__33131__auto__);

return statearr_40773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__,msg_hist,msg_names,msg))
);

return c__33131__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33131__auto___40840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___40840,ch){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___40840,ch){
return (function (state_40826){
var state_val_40827 = (state_40826[(1)]);
if((state_val_40827 === (1))){
var state_40826__$1 = state_40826;
var statearr_40828_40841 = state_40826__$1;
(statearr_40828_40841[(2)] = null);

(statearr_40828_40841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40827 === (2))){
var state_40826__$1 = state_40826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40826__$1,(4),ch);
} else {
if((state_val_40827 === (3))){
var inst_40824 = (state_40826[(2)]);
var state_40826__$1 = state_40826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40826__$1,inst_40824);
} else {
if((state_val_40827 === (4))){
var inst_40814 = (state_40826[(7)]);
var inst_40814__$1 = (state_40826[(2)]);
var state_40826__$1 = (function (){var statearr_40829 = state_40826;
(statearr_40829[(7)] = inst_40814__$1);

return statearr_40829;
})();
if(cljs.core.truth_(inst_40814__$1)){
var statearr_40830_40842 = state_40826__$1;
(statearr_40830_40842[(1)] = (5));

} else {
var statearr_40831_40843 = state_40826__$1;
(statearr_40831_40843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40827 === (5))){
var inst_40814 = (state_40826[(7)]);
var inst_40816 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_40814);
var state_40826__$1 = state_40826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40826__$1,(8),inst_40816);
} else {
if((state_val_40827 === (6))){
var state_40826__$1 = state_40826;
var statearr_40832_40844 = state_40826__$1;
(statearr_40832_40844[(2)] = null);

(statearr_40832_40844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40827 === (7))){
var inst_40822 = (state_40826[(2)]);
var state_40826__$1 = state_40826;
var statearr_40833_40845 = state_40826__$1;
(statearr_40833_40845[(2)] = inst_40822);

(statearr_40833_40845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40827 === (8))){
var inst_40818 = (state_40826[(2)]);
var state_40826__$1 = (function (){var statearr_40834 = state_40826;
(statearr_40834[(8)] = inst_40818);

return statearr_40834;
})();
var statearr_40835_40846 = state_40826__$1;
(statearr_40835_40846[(2)] = null);

(statearr_40835_40846[(1)] = (2));


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
});})(c__33131__auto___40840,ch))
;
return ((function (switch__33041__auto__,c__33131__auto___40840,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33042__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33042__auto____0 = (function (){
var statearr_40836 = [null,null,null,null,null,null,null,null,null];
(statearr_40836[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33042__auto__);

(statearr_40836[(1)] = (1));

return statearr_40836;
});
var figwheel$client$heads_up_plugin_$_state_machine__33042__auto____1 = (function (state_40826){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_40826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e40837){if((e40837 instanceof Object)){
var ex__33045__auto__ = e40837;
var statearr_40838_40847 = state_40826;
(statearr_40838_40847[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40848 = state_40826;
state_40826 = G__40848;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33042__auto__ = function(state_40826){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33042__auto____1.call(this,state_40826);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33042__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33042__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___40840,ch))
})();
var state__33133__auto__ = (function (){var statearr_40839 = f__33132__auto__.call(null);
(statearr_40839[(6)] = c__33131__auto___40840);

return statearr_40839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___40840,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__){
return (function (state_40854){
var state_val_40855 = (state_40854[(1)]);
if((state_val_40855 === (1))){
var inst_40849 = cljs.core.async.timeout.call(null,(3000));
var state_40854__$1 = state_40854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40854__$1,(2),inst_40849);
} else {
if((state_val_40855 === (2))){
var inst_40851 = (state_40854[(2)]);
var inst_40852 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_40854__$1 = (function (){var statearr_40856 = state_40854;
(statearr_40856[(7)] = inst_40851);

return statearr_40856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40854__$1,inst_40852);
} else {
return null;
}
}
});})(c__33131__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____0 = (function (){
var statearr_40857 = [null,null,null,null,null,null,null,null];
(statearr_40857[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__);

(statearr_40857[(1)] = (1));

return statearr_40857;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____1 = (function (state_40854){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_40854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e40858){if((e40858 instanceof Object)){
var ex__33045__auto__ = e40858;
var statearr_40859_40861 = state_40854;
(statearr_40859_40861[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40862 = state_40854;
state_40854 = G__40862;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__ = function(state_40854){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____1.call(this,state_40854);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33042__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__))
})();
var state__33133__auto__ = (function (){var statearr_40860 = f__33132__auto__.call(null);
(statearr_40860[(6)] = c__33131__auto__);

return statearr_40860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__))
);

return c__33131__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__,figwheel_version,temp__5278__auto__){
return (function (state_40869){
var state_val_40870 = (state_40869[(1)]);
if((state_val_40870 === (1))){
var inst_40863 = cljs.core.async.timeout.call(null,(2000));
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40869__$1,(2),inst_40863);
} else {
if((state_val_40870 === (2))){
var inst_40865 = (state_40869[(2)]);
var inst_40866 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_40867 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_40866);
var state_40869__$1 = (function (){var statearr_40871 = state_40869;
(statearr_40871[(7)] = inst_40865);

return statearr_40871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40869__$1,inst_40867);
} else {
return null;
}
}
});})(c__33131__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____0 = (function (){
var statearr_40872 = [null,null,null,null,null,null,null,null];
(statearr_40872[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__);

(statearr_40872[(1)] = (1));

return statearr_40872;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____1 = (function (state_40869){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_40869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e40873){if((e40873 instanceof Object)){
var ex__33045__auto__ = e40873;
var statearr_40874_40876 = state_40869;
(statearr_40874_40876[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40877 = state_40869;
state_40869 = G__40877;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__ = function(state_40869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____1.call(this,state_40869);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__,figwheel_version,temp__5278__auto__))
})();
var state__33133__auto__ = (function (){var statearr_40875 = f__33132__auto__.call(null);
(statearr_40875[(6)] = c__33131__auto__);

return statearr_40875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__,figwheel_version,temp__5278__auto__))
);

return c__33131__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__40878){
var map__40879 = p__40878;
var map__40879__$1 = ((((!((map__40879 == null)))?((((map__40879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40879.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40879):map__40879);
var file = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__40879__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__40881 = "";
var G__40881__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40881),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__40881);
var G__40881__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40881__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__40881__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = line;
if(cljs.core.truth_(and__30036__auto__)){
return column;
} else {
return and__30036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40881__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__40881__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__40882){
var map__40883 = p__40882;
var map__40883__$1 = ((((!((map__40883 == null)))?((((map__40883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40883):map__40883);
var ed = map__40883__$1;
var formatted_exception = cljs.core.get.call(null,map__40883__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__40883__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__40883__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__40885_40889 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__40886_40890 = null;
var count__40887_40891 = (0);
var i__40888_40892 = (0);
while(true){
if((i__40888_40892 < count__40887_40891)){
var msg_40893 = cljs.core._nth.call(null,chunk__40886_40890,i__40888_40892);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40893);

var G__40894 = seq__40885_40889;
var G__40895 = chunk__40886_40890;
var G__40896 = count__40887_40891;
var G__40897 = (i__40888_40892 + (1));
seq__40885_40889 = G__40894;
chunk__40886_40890 = G__40895;
count__40887_40891 = G__40896;
i__40888_40892 = G__40897;
continue;
} else {
var temp__5278__auto___40898 = cljs.core.seq.call(null,seq__40885_40889);
if(temp__5278__auto___40898){
var seq__40885_40899__$1 = temp__5278__auto___40898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40885_40899__$1)){
var c__30979__auto___40900 = cljs.core.chunk_first.call(null,seq__40885_40899__$1);
var G__40901 = cljs.core.chunk_rest.call(null,seq__40885_40899__$1);
var G__40902 = c__30979__auto___40900;
var G__40903 = cljs.core.count.call(null,c__30979__auto___40900);
var G__40904 = (0);
seq__40885_40889 = G__40901;
chunk__40886_40890 = G__40902;
count__40887_40891 = G__40903;
i__40888_40892 = G__40904;
continue;
} else {
var msg_40905 = cljs.core.first.call(null,seq__40885_40899__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_40905);

var G__40906 = cljs.core.next.call(null,seq__40885_40899__$1);
var G__40907 = null;
var G__40908 = (0);
var G__40909 = (0);
seq__40885_40889 = G__40906;
chunk__40886_40890 = G__40907;
count__40887_40891 = G__40908;
i__40888_40892 = G__40909;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__40910){
var map__40911 = p__40910;
var map__40911__$1 = ((((!((map__40911 == null)))?((((map__40911.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40911.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40911):map__40911);
var w = map__40911__$1;
var message = cljs.core.get.call(null,map__40911__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__40913 = cljs.core.seq.call(null,plugins);
var chunk__40914 = null;
var count__40915 = (0);
var i__40916 = (0);
while(true){
if((i__40916 < count__40915)){
var vec__40917 = cljs.core._nth.call(null,chunk__40914,i__40916);
var k = cljs.core.nth.call(null,vec__40917,(0),null);
var plugin = cljs.core.nth.call(null,vec__40917,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40923 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40913,chunk__40914,count__40915,i__40916,pl_40923,vec__40917,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_40923.call(null,msg_hist);
});})(seq__40913,chunk__40914,count__40915,i__40916,pl_40923,vec__40917,k,plugin))
);
} else {
}

var G__40924 = seq__40913;
var G__40925 = chunk__40914;
var G__40926 = count__40915;
var G__40927 = (i__40916 + (1));
seq__40913 = G__40924;
chunk__40914 = G__40925;
count__40915 = G__40926;
i__40916 = G__40927;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__40913);
if(temp__5278__auto__){
var seq__40913__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40913__$1)){
var c__30979__auto__ = cljs.core.chunk_first.call(null,seq__40913__$1);
var G__40928 = cljs.core.chunk_rest.call(null,seq__40913__$1);
var G__40929 = c__30979__auto__;
var G__40930 = cljs.core.count.call(null,c__30979__auto__);
var G__40931 = (0);
seq__40913 = G__40928;
chunk__40914 = G__40929;
count__40915 = G__40930;
i__40916 = G__40931;
continue;
} else {
var vec__40920 = cljs.core.first.call(null,seq__40913__$1);
var k = cljs.core.nth.call(null,vec__40920,(0),null);
var plugin = cljs.core.nth.call(null,vec__40920,(1),null);
if(cljs.core.truth_(plugin)){
var pl_40932 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__40913,chunk__40914,count__40915,i__40916,pl_40932,vec__40920,k,plugin,seq__40913__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_40932.call(null,msg_hist);
});})(seq__40913,chunk__40914,count__40915,i__40916,pl_40932,vec__40920,k,plugin,seq__40913__$1,temp__5278__auto__))
);
} else {
}

var G__40933 = cljs.core.next.call(null,seq__40913__$1);
var G__40934 = null;
var G__40935 = (0);
var G__40936 = (0);
seq__40913 = G__40933;
chunk__40914 = G__40934;
count__40915 = G__40935;
i__40916 = G__40936;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__40938 = arguments.length;
switch (G__40938) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__40939_40944 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__40940_40945 = null;
var count__40941_40946 = (0);
var i__40942_40947 = (0);
while(true){
if((i__40942_40947 < count__40941_40946)){
var msg_40948 = cljs.core._nth.call(null,chunk__40940_40945,i__40942_40947);
figwheel.client.socket.handle_incoming_message.call(null,msg_40948);

var G__40949 = seq__40939_40944;
var G__40950 = chunk__40940_40945;
var G__40951 = count__40941_40946;
var G__40952 = (i__40942_40947 + (1));
seq__40939_40944 = G__40949;
chunk__40940_40945 = G__40950;
count__40941_40946 = G__40951;
i__40942_40947 = G__40952;
continue;
} else {
var temp__5278__auto___40953 = cljs.core.seq.call(null,seq__40939_40944);
if(temp__5278__auto___40953){
var seq__40939_40954__$1 = temp__5278__auto___40953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40939_40954__$1)){
var c__30979__auto___40955 = cljs.core.chunk_first.call(null,seq__40939_40954__$1);
var G__40956 = cljs.core.chunk_rest.call(null,seq__40939_40954__$1);
var G__40957 = c__30979__auto___40955;
var G__40958 = cljs.core.count.call(null,c__30979__auto___40955);
var G__40959 = (0);
seq__40939_40944 = G__40956;
chunk__40940_40945 = G__40957;
count__40941_40946 = G__40958;
i__40942_40947 = G__40959;
continue;
} else {
var msg_40960 = cljs.core.first.call(null,seq__40939_40954__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_40960);

var G__40961 = cljs.core.next.call(null,seq__40939_40954__$1);
var G__40962 = null;
var G__40963 = (0);
var G__40964 = (0);
seq__40939_40944 = G__40961;
chunk__40940_40945 = G__40962;
count__40941_40946 = G__40963;
i__40942_40947 = G__40964;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31332__auto__ = [];
var len__31325__auto___40969 = arguments.length;
var i__31326__auto___40970 = (0);
while(true){
if((i__31326__auto___40970 < len__31325__auto___40969)){
args__31332__auto__.push((arguments[i__31326__auto___40970]));

var G__40971 = (i__31326__auto___40970 + (1));
i__31326__auto___40970 = G__40971;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((0) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31333__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__40966){
var map__40967 = p__40966;
var map__40967__$1 = ((((!((map__40967 == null)))?((((map__40967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40967):map__40967);
var opts = map__40967__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq40965){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40965));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e40972){if((e40972 instanceof Error)){
var e = e40972;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e40972;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__40973){
var map__40974 = p__40973;
var map__40974__$1 = ((((!((map__40974 == null)))?((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40974):map__40974);
var msg_name = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1508469662515
