// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33191 = arguments.length;
switch (G__33191) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33192 = (function (f,blockable,meta33193){
this.f = f;
this.blockable = blockable;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new cljs.core.async.t_cljs$core$async33192(self__.f,self__.blockable,meta33193__$1));
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33193","meta33193",-1625521107,null)], null);
});

cljs.core.async.t_cljs$core$async33192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33192";

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33192");
});

cljs.core.async.__GT_t_cljs$core$async33192 = (function cljs$core$async$__GT_t_cljs$core$async33192(f__$1,blockable__$1,meta33193){
return (new cljs.core.async.t_cljs$core$async33192(f__$1,blockable__$1,meta33193));
});

}

return (new cljs.core.async.t_cljs$core$async33192(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33198 = arguments.length;
switch (G__33198) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33201 = arguments.length;
switch (G__33201) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33204 = arguments.length;
switch (G__33204) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33206 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33206);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33206,ret){
return (function (){
return fn1.call(null,val_33206);
});})(val_33206,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33208 = arguments.length;
switch (G__33208) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5276__auto__)){
var ret = temp__5276__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5276__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5276__auto__)){
var retb = temp__5276__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5276__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5276__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31091__auto___33210 = n;
var x_33211 = (0);
while(true){
if((x_33211 < n__31091__auto___33210)){
(a[x_33211] = (0));

var G__33212 = (x_33211 + (1));
x_33211 = G__33212;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33213 = (i + (1));
i = G__33213;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33214 = (function (flag,meta33215){
this.flag = flag;
this.meta33215 = meta33215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33216,meta33215__$1){
var self__ = this;
var _33216__$1 = this;
return (new cljs.core.async.t_cljs$core$async33214(self__.flag,meta33215__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33216){
var self__ = this;
var _33216__$1 = this;
return self__.meta33215;
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33215","meta33215",1177252251,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33214";

cljs.core.async.t_cljs$core$async33214.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33214");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33214 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33214(flag__$1,meta33215){
return (new cljs.core.async.t_cljs$core$async33214(flag__$1,meta33215));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33214(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33217 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33217 = (function (flag,cb,meta33218){
this.flag = flag;
this.cb = cb;
this.meta33218 = meta33218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33219,meta33218__$1){
var self__ = this;
var _33219__$1 = this;
return (new cljs.core.async.t_cljs$core$async33217(self__.flag,self__.cb,meta33218__$1));
});

cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33219){
var self__ = this;
var _33219__$1 = this;
return self__.meta33218;
});

cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33218","meta33218",-1079924362,null)], null);
});

cljs.core.async.t_cljs$core$async33217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33217";

cljs.core.async.t_cljs$core$async33217.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33217");
});

cljs.core.async.__GT_t_cljs$core$async33217 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33217(flag__$1,cb__$1,meta33218){
return (new cljs.core.async.t_cljs$core$async33217(flag__$1,cb__$1,meta33218));
});

}

return (new cljs.core.async.t_cljs$core$async33217(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33220_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33220_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33221_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30048__auto__ = wport;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33222 = (i + (1));
i = G__33222;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30048__auto__ = ret;
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5278__auto__ = (function (){var and__30036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30036__auto__;
}
})();
if(cljs.core.truth_(temp__5278__auto__)){
var got = temp__5278__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___33228 = arguments.length;
var i__31326__auto___33229 = (0);
while(true){
if((i__31326__auto___33229 < len__31325__auto___33228)){
args__31332__auto__.push((arguments[i__31326__auto___33229]));

var G__33230 = (i__31326__auto___33229 + (1));
i__31326__auto___33229 = G__33230;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((1) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31333__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33225){
var map__33226 = p__33225;
var map__33226__$1 = ((((!((map__33226 == null)))?((((map__33226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33226):map__33226);
var opts = map__33226__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33223){
var G__33224 = cljs.core.first.call(null,seq33223);
var seq33223__$1 = cljs.core.next.call(null,seq33223);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33224,seq33223__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33232 = arguments.length;
switch (G__33232) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33131__auto___33278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___33278){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___33278){
return (function (state_33256){
var state_val_33257 = (state_33256[(1)]);
if((state_val_33257 === (7))){
var inst_33252 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33258_33279 = state_33256__$1;
(statearr_33258_33279[(2)] = inst_33252);

(statearr_33258_33279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (1))){
var state_33256__$1 = state_33256;
var statearr_33259_33280 = state_33256__$1;
(statearr_33259_33280[(2)] = null);

(statearr_33259_33280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (4))){
var inst_33235 = (state_33256[(7)]);
var inst_33235__$1 = (state_33256[(2)]);
var inst_33236 = (inst_33235__$1 == null);
var state_33256__$1 = (function (){var statearr_33260 = state_33256;
(statearr_33260[(7)] = inst_33235__$1);

return statearr_33260;
})();
if(cljs.core.truth_(inst_33236)){
var statearr_33261_33281 = state_33256__$1;
(statearr_33261_33281[(1)] = (5));

} else {
var statearr_33262_33282 = state_33256__$1;
(statearr_33262_33282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (13))){
var state_33256__$1 = state_33256;
var statearr_33263_33283 = state_33256__$1;
(statearr_33263_33283[(2)] = null);

(statearr_33263_33283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (6))){
var inst_33235 = (state_33256[(7)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33256__$1,(11),to,inst_33235);
} else {
if((state_val_33257 === (3))){
var inst_33254 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33256__$1,inst_33254);
} else {
if((state_val_33257 === (12))){
var state_33256__$1 = state_33256;
var statearr_33264_33284 = state_33256__$1;
(statearr_33264_33284[(2)] = null);

(statearr_33264_33284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (2))){
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33256__$1,(4),from);
} else {
if((state_val_33257 === (11))){
var inst_33245 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
if(cljs.core.truth_(inst_33245)){
var statearr_33265_33285 = state_33256__$1;
(statearr_33265_33285[(1)] = (12));

} else {
var statearr_33266_33286 = state_33256__$1;
(statearr_33266_33286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (9))){
var state_33256__$1 = state_33256;
var statearr_33267_33287 = state_33256__$1;
(statearr_33267_33287[(2)] = null);

(statearr_33267_33287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (5))){
var state_33256__$1 = state_33256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33268_33288 = state_33256__$1;
(statearr_33268_33288[(1)] = (8));

} else {
var statearr_33269_33289 = state_33256__$1;
(statearr_33269_33289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (14))){
var inst_33250 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33270_33290 = state_33256__$1;
(statearr_33270_33290[(2)] = inst_33250);

(statearr_33270_33290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (10))){
var inst_33242 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33271_33291 = state_33256__$1;
(statearr_33271_33291[(2)] = inst_33242);

(statearr_33271_33291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (8))){
var inst_33239 = cljs.core.async.close_BANG_.call(null,to);
var state_33256__$1 = state_33256;
var statearr_33272_33292 = state_33256__$1;
(statearr_33272_33292[(2)] = inst_33239);

(statearr_33272_33292[(1)] = (10));


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
});})(c__33131__auto___33278))
;
return ((function (switch__33041__auto__,c__33131__auto___33278){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_33273 = [null,null,null,null,null,null,null,null];
(statearr_33273[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_33273[(1)] = (1));

return statearr_33273;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_33256){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33274){if((e33274 instanceof Object)){
var ex__33045__auto__ = e33274;
var statearr_33275_33293 = state_33256;
(statearr_33275_33293[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33294 = state_33256;
state_33256 = G__33294;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_33256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_33256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___33278))
})();
var state__33133__auto__ = (function (){var statearr_33276 = f__33132__auto__.call(null);
(statearr_33276[(6)] = c__33131__auto___33278);

return statearr_33276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___33278))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33295){
var vec__33296 = p__33295;
var v = cljs.core.nth.call(null,vec__33296,(0),null);
var p = cljs.core.nth.call(null,vec__33296,(1),null);
var job = vec__33296;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33131__auto___33467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results){
return (function (state_33303){
var state_val_33304 = (state_33303[(1)]);
if((state_val_33304 === (1))){
var state_33303__$1 = state_33303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33303__$1,(2),res,v);
} else {
if((state_val_33304 === (2))){
var inst_33300 = (state_33303[(2)]);
var inst_33301 = cljs.core.async.close_BANG_.call(null,res);
var state_33303__$1 = (function (){var statearr_33305 = state_33303;
(statearr_33305[(7)] = inst_33300);

return statearr_33305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33303__$1,inst_33301);
} else {
return null;
}
}
});})(c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results))
;
return ((function (switch__33041__auto__,c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_33306 = [null,null,null,null,null,null,null,null];
(statearr_33306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__);

(statearr_33306[(1)] = (1));

return statearr_33306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1 = (function (state_33303){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33307){if((e33307 instanceof Object)){
var ex__33045__auto__ = e33307;
var statearr_33308_33468 = state_33303;
(statearr_33308_33468[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33469 = state_33303;
state_33303 = G__33469;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = function(state_33303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1.call(this,state_33303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results))
})();
var state__33133__auto__ = (function (){var statearr_33309 = f__33132__auto__.call(null);
(statearr_33309[(6)] = c__33131__auto___33467);

return statearr_33309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___33467,res,vec__33296,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33310){
var vec__33311 = p__33310;
var v = cljs.core.nth.call(null,vec__33311,(0),null);
var p = cljs.core.nth.call(null,vec__33311,(1),null);
var job = vec__33311;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31091__auto___33470 = n;
var __33471 = (0);
while(true){
if((__33471 < n__31091__auto___33470)){
var G__33314_33472 = type;
var G__33314_33473__$1 = (((G__33314_33472 instanceof cljs.core.Keyword))?G__33314_33472.fqn:null);
switch (G__33314_33473__$1) {
case "compute":
var c__33131__auto___33475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33471,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (__33471,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function (state_33327){
var state_val_33328 = (state_33327[(1)]);
if((state_val_33328 === (1))){
var state_33327__$1 = state_33327;
var statearr_33329_33476 = state_33327__$1;
(statearr_33329_33476[(2)] = null);

(statearr_33329_33476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (2))){
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33327__$1,(4),jobs);
} else {
if((state_val_33328 === (3))){
var inst_33325 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33327__$1,inst_33325);
} else {
if((state_val_33328 === (4))){
var inst_33317 = (state_33327[(2)]);
var inst_33318 = process.call(null,inst_33317);
var state_33327__$1 = state_33327;
if(cljs.core.truth_(inst_33318)){
var statearr_33330_33477 = state_33327__$1;
(statearr_33330_33477[(1)] = (5));

} else {
var statearr_33331_33478 = state_33327__$1;
(statearr_33331_33478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (5))){
var state_33327__$1 = state_33327;
var statearr_33332_33479 = state_33327__$1;
(statearr_33332_33479[(2)] = null);

(statearr_33332_33479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (6))){
var state_33327__$1 = state_33327;
var statearr_33333_33480 = state_33327__$1;
(statearr_33333_33480[(2)] = null);

(statearr_33333_33480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33328 === (7))){
var inst_33323 = (state_33327[(2)]);
var state_33327__$1 = state_33327;
var statearr_33334_33481 = state_33327__$1;
(statearr_33334_33481[(2)] = inst_33323);

(statearr_33334_33481[(1)] = (3));


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
});})(__33471,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
;
return ((function (__33471,switch__33041__auto__,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_33335 = [null,null,null,null,null,null,null];
(statearr_33335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__);

(statearr_33335[(1)] = (1));

return statearr_33335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1 = (function (state_33327){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33336){if((e33336 instanceof Object)){
var ex__33045__auto__ = e33336;
var statearr_33337_33482 = state_33327;
(statearr_33337_33482[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33483 = state_33327;
state_33327 = G__33483;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = function(state_33327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1.call(this,state_33327);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__;
})()
;})(__33471,switch__33041__auto__,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
})();
var state__33133__auto__ = (function (){var statearr_33338 = f__33132__auto__.call(null);
(statearr_33338[(6)] = c__33131__auto___33475);

return statearr_33338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(__33471,c__33131__auto___33475,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
);


break;
case "async":
var c__33131__auto___33484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33471,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (__33471,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function (state_33351){
var state_val_33352 = (state_33351[(1)]);
if((state_val_33352 === (1))){
var state_33351__$1 = state_33351;
var statearr_33353_33485 = state_33351__$1;
(statearr_33353_33485[(2)] = null);

(statearr_33353_33485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33352 === (2))){
var state_33351__$1 = state_33351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33351__$1,(4),jobs);
} else {
if((state_val_33352 === (3))){
var inst_33349 = (state_33351[(2)]);
var state_33351__$1 = state_33351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33351__$1,inst_33349);
} else {
if((state_val_33352 === (4))){
var inst_33341 = (state_33351[(2)]);
var inst_33342 = async.call(null,inst_33341);
var state_33351__$1 = state_33351;
if(cljs.core.truth_(inst_33342)){
var statearr_33354_33486 = state_33351__$1;
(statearr_33354_33486[(1)] = (5));

} else {
var statearr_33355_33487 = state_33351__$1;
(statearr_33355_33487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33352 === (5))){
var state_33351__$1 = state_33351;
var statearr_33356_33488 = state_33351__$1;
(statearr_33356_33488[(2)] = null);

(statearr_33356_33488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33352 === (6))){
var state_33351__$1 = state_33351;
var statearr_33357_33489 = state_33351__$1;
(statearr_33357_33489[(2)] = null);

(statearr_33357_33489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33352 === (7))){
var inst_33347 = (state_33351[(2)]);
var state_33351__$1 = state_33351;
var statearr_33358_33490 = state_33351__$1;
(statearr_33358_33490[(2)] = inst_33347);

(statearr_33358_33490[(1)] = (3));


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
});})(__33471,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
;
return ((function (__33471,switch__33041__auto__,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_33359 = [null,null,null,null,null,null,null];
(statearr_33359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__);

(statearr_33359[(1)] = (1));

return statearr_33359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1 = (function (state_33351){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33360){if((e33360 instanceof Object)){
var ex__33045__auto__ = e33360;
var statearr_33361_33491 = state_33351;
(statearr_33361_33491[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33492 = state_33351;
state_33351 = G__33492;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = function(state_33351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1.call(this,state_33351);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__;
})()
;})(__33471,switch__33041__auto__,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
})();
var state__33133__auto__ = (function (){var statearr_33362 = f__33132__auto__.call(null);
(statearr_33362[(6)] = c__33131__auto___33484);

return statearr_33362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(__33471,c__33131__auto___33484,G__33314_33472,G__33314_33473__$1,n__31091__auto___33470,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33314_33473__$1)].join('')));

}

var G__33493 = (__33471 + (1));
__33471 = G__33493;
continue;
} else {
}
break;
}

var c__33131__auto___33494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___33494,jobs,results,process,async){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___33494,jobs,results,process,async){
return (function (state_33384){
var state_val_33385 = (state_33384[(1)]);
if((state_val_33385 === (1))){
var state_33384__$1 = state_33384;
var statearr_33386_33495 = state_33384__$1;
(statearr_33386_33495[(2)] = null);

(statearr_33386_33495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (2))){
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33384__$1,(4),from);
} else {
if((state_val_33385 === (3))){
var inst_33382 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33384__$1,inst_33382);
} else {
if((state_val_33385 === (4))){
var inst_33365 = (state_33384[(7)]);
var inst_33365__$1 = (state_33384[(2)]);
var inst_33366 = (inst_33365__$1 == null);
var state_33384__$1 = (function (){var statearr_33387 = state_33384;
(statearr_33387[(7)] = inst_33365__$1);

return statearr_33387;
})();
if(cljs.core.truth_(inst_33366)){
var statearr_33388_33496 = state_33384__$1;
(statearr_33388_33496[(1)] = (5));

} else {
var statearr_33389_33497 = state_33384__$1;
(statearr_33389_33497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (5))){
var inst_33368 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33384__$1 = state_33384;
var statearr_33390_33498 = state_33384__$1;
(statearr_33390_33498[(2)] = inst_33368);

(statearr_33390_33498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (6))){
var inst_33370 = (state_33384[(8)]);
var inst_33365 = (state_33384[(7)]);
var inst_33370__$1 = cljs.core.async.chan.call(null,(1));
var inst_33371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33372 = [inst_33365,inst_33370__$1];
var inst_33373 = (new cljs.core.PersistentVector(null,2,(5),inst_33371,inst_33372,null));
var state_33384__$1 = (function (){var statearr_33391 = state_33384;
(statearr_33391[(8)] = inst_33370__$1);

return statearr_33391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33384__$1,(8),jobs,inst_33373);
} else {
if((state_val_33385 === (7))){
var inst_33380 = (state_33384[(2)]);
var state_33384__$1 = state_33384;
var statearr_33392_33499 = state_33384__$1;
(statearr_33392_33499[(2)] = inst_33380);

(statearr_33392_33499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33385 === (8))){
var inst_33370 = (state_33384[(8)]);
var inst_33375 = (state_33384[(2)]);
var state_33384__$1 = (function (){var statearr_33393 = state_33384;
(statearr_33393[(9)] = inst_33375);

return statearr_33393;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33384__$1,(9),results,inst_33370);
} else {
if((state_val_33385 === (9))){
var inst_33377 = (state_33384[(2)]);
var state_33384__$1 = (function (){var statearr_33394 = state_33384;
(statearr_33394[(10)] = inst_33377);

return statearr_33394;
})();
var statearr_33395_33500 = state_33384__$1;
(statearr_33395_33500[(2)] = null);

(statearr_33395_33500[(1)] = (2));


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
});})(c__33131__auto___33494,jobs,results,process,async))
;
return ((function (switch__33041__auto__,c__33131__auto___33494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_33396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__);

(statearr_33396[(1)] = (1));

return statearr_33396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1 = (function (state_33384){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33397){if((e33397 instanceof Object)){
var ex__33045__auto__ = e33397;
var statearr_33398_33501 = state_33384;
(statearr_33398_33501[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33502 = state_33384;
state_33384 = G__33502;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = function(state_33384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1.call(this,state_33384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___33494,jobs,results,process,async))
})();
var state__33133__auto__ = (function (){var statearr_33399 = f__33132__auto__.call(null);
(statearr_33399[(6)] = c__33131__auto___33494);

return statearr_33399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___33494,jobs,results,process,async))
);


var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__,jobs,results,process,async){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__,jobs,results,process,async){
return (function (state_33437){
var state_val_33438 = (state_33437[(1)]);
if((state_val_33438 === (7))){
var inst_33433 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
var statearr_33439_33503 = state_33437__$1;
(statearr_33439_33503[(2)] = inst_33433);

(statearr_33439_33503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (20))){
var state_33437__$1 = state_33437;
var statearr_33440_33504 = state_33437__$1;
(statearr_33440_33504[(2)] = null);

(statearr_33440_33504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (1))){
var state_33437__$1 = state_33437;
var statearr_33441_33505 = state_33437__$1;
(statearr_33441_33505[(2)] = null);

(statearr_33441_33505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (4))){
var inst_33402 = (state_33437[(7)]);
var inst_33402__$1 = (state_33437[(2)]);
var inst_33403 = (inst_33402__$1 == null);
var state_33437__$1 = (function (){var statearr_33442 = state_33437;
(statearr_33442[(7)] = inst_33402__$1);

return statearr_33442;
})();
if(cljs.core.truth_(inst_33403)){
var statearr_33443_33506 = state_33437__$1;
(statearr_33443_33506[(1)] = (5));

} else {
var statearr_33444_33507 = state_33437__$1;
(statearr_33444_33507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (15))){
var inst_33415 = (state_33437[(8)]);
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33437__$1,(18),to,inst_33415);
} else {
if((state_val_33438 === (21))){
var inst_33428 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
var statearr_33445_33508 = state_33437__$1;
(statearr_33445_33508[(2)] = inst_33428);

(statearr_33445_33508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (13))){
var inst_33430 = (state_33437[(2)]);
var state_33437__$1 = (function (){var statearr_33446 = state_33437;
(statearr_33446[(9)] = inst_33430);

return statearr_33446;
})();
var statearr_33447_33509 = state_33437__$1;
(statearr_33447_33509[(2)] = null);

(statearr_33447_33509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (6))){
var inst_33402 = (state_33437[(7)]);
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33437__$1,(11),inst_33402);
} else {
if((state_val_33438 === (17))){
var inst_33423 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
if(cljs.core.truth_(inst_33423)){
var statearr_33448_33510 = state_33437__$1;
(statearr_33448_33510[(1)] = (19));

} else {
var statearr_33449_33511 = state_33437__$1;
(statearr_33449_33511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (3))){
var inst_33435 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33437__$1,inst_33435);
} else {
if((state_val_33438 === (12))){
var inst_33412 = (state_33437[(10)]);
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33437__$1,(14),inst_33412);
} else {
if((state_val_33438 === (2))){
var state_33437__$1 = state_33437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33437__$1,(4),results);
} else {
if((state_val_33438 === (19))){
var state_33437__$1 = state_33437;
var statearr_33450_33512 = state_33437__$1;
(statearr_33450_33512[(2)] = null);

(statearr_33450_33512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (11))){
var inst_33412 = (state_33437[(2)]);
var state_33437__$1 = (function (){var statearr_33451 = state_33437;
(statearr_33451[(10)] = inst_33412);

return statearr_33451;
})();
var statearr_33452_33513 = state_33437__$1;
(statearr_33452_33513[(2)] = null);

(statearr_33452_33513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (9))){
var state_33437__$1 = state_33437;
var statearr_33453_33514 = state_33437__$1;
(statearr_33453_33514[(2)] = null);

(statearr_33453_33514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (5))){
var state_33437__$1 = state_33437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33454_33515 = state_33437__$1;
(statearr_33454_33515[(1)] = (8));

} else {
var statearr_33455_33516 = state_33437__$1;
(statearr_33455_33516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (14))){
var inst_33417 = (state_33437[(11)]);
var inst_33415 = (state_33437[(8)]);
var inst_33415__$1 = (state_33437[(2)]);
var inst_33416 = (inst_33415__$1 == null);
var inst_33417__$1 = cljs.core.not.call(null,inst_33416);
var state_33437__$1 = (function (){var statearr_33456 = state_33437;
(statearr_33456[(11)] = inst_33417__$1);

(statearr_33456[(8)] = inst_33415__$1);

return statearr_33456;
})();
if(inst_33417__$1){
var statearr_33457_33517 = state_33437__$1;
(statearr_33457_33517[(1)] = (15));

} else {
var statearr_33458_33518 = state_33437__$1;
(statearr_33458_33518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (16))){
var inst_33417 = (state_33437[(11)]);
var state_33437__$1 = state_33437;
var statearr_33459_33519 = state_33437__$1;
(statearr_33459_33519[(2)] = inst_33417);

(statearr_33459_33519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (10))){
var inst_33409 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
var statearr_33460_33520 = state_33437__$1;
(statearr_33460_33520[(2)] = inst_33409);

(statearr_33460_33520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (18))){
var inst_33420 = (state_33437[(2)]);
var state_33437__$1 = state_33437;
var statearr_33461_33521 = state_33437__$1;
(statearr_33461_33521[(2)] = inst_33420);

(statearr_33461_33521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33438 === (8))){
var inst_33406 = cljs.core.async.close_BANG_.call(null,to);
var state_33437__$1 = state_33437;
var statearr_33462_33522 = state_33437__$1;
(statearr_33462_33522[(2)] = inst_33406);

(statearr_33462_33522[(1)] = (10));


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
});})(c__33131__auto__,jobs,results,process,async))
;
return ((function (switch__33041__auto__,c__33131__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_33463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__);

(statearr_33463[(1)] = (1));

return statearr_33463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1 = (function (state_33437){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33464){if((e33464 instanceof Object)){
var ex__33045__auto__ = e33464;
var statearr_33465_33523 = state_33437;
(statearr_33465_33523[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33524 = state_33437;
state_33437 = G__33524;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__ = function(state_33437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1.call(this,state_33437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__,jobs,results,process,async))
})();
var state__33133__auto__ = (function (){var statearr_33466 = f__33132__auto__.call(null);
(statearr_33466[(6)] = c__33131__auto__);

return statearr_33466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__,jobs,results,process,async))
);

return c__33131__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33526 = arguments.length;
switch (G__33526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33529 = arguments.length;
switch (G__33529) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33532 = arguments.length;
switch (G__33532) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33131__auto___33581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___33581,tc,fc){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___33581,tc,fc){
return (function (state_33558){
var state_val_33559 = (state_33558[(1)]);
if((state_val_33559 === (7))){
var inst_33554 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33560_33582 = state_33558__$1;
(statearr_33560_33582[(2)] = inst_33554);

(statearr_33560_33582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (1))){
var state_33558__$1 = state_33558;
var statearr_33561_33583 = state_33558__$1;
(statearr_33561_33583[(2)] = null);

(statearr_33561_33583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (4))){
var inst_33535 = (state_33558[(7)]);
var inst_33535__$1 = (state_33558[(2)]);
var inst_33536 = (inst_33535__$1 == null);
var state_33558__$1 = (function (){var statearr_33562 = state_33558;
(statearr_33562[(7)] = inst_33535__$1);

return statearr_33562;
})();
if(cljs.core.truth_(inst_33536)){
var statearr_33563_33584 = state_33558__$1;
(statearr_33563_33584[(1)] = (5));

} else {
var statearr_33564_33585 = state_33558__$1;
(statearr_33564_33585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (13))){
var state_33558__$1 = state_33558;
var statearr_33565_33586 = state_33558__$1;
(statearr_33565_33586[(2)] = null);

(statearr_33565_33586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (6))){
var inst_33535 = (state_33558[(7)]);
var inst_33541 = p.call(null,inst_33535);
var state_33558__$1 = state_33558;
if(cljs.core.truth_(inst_33541)){
var statearr_33566_33587 = state_33558__$1;
(statearr_33566_33587[(1)] = (9));

} else {
var statearr_33567_33588 = state_33558__$1;
(statearr_33567_33588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (3))){
var inst_33556 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33558__$1,inst_33556);
} else {
if((state_val_33559 === (12))){
var state_33558__$1 = state_33558;
var statearr_33568_33589 = state_33558__$1;
(statearr_33568_33589[(2)] = null);

(statearr_33568_33589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (2))){
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33558__$1,(4),ch);
} else {
if((state_val_33559 === (11))){
var inst_33535 = (state_33558[(7)]);
var inst_33545 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33558__$1,(8),inst_33545,inst_33535);
} else {
if((state_val_33559 === (9))){
var state_33558__$1 = state_33558;
var statearr_33569_33590 = state_33558__$1;
(statearr_33569_33590[(2)] = tc);

(statearr_33569_33590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (5))){
var inst_33538 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33539 = cljs.core.async.close_BANG_.call(null,fc);
var state_33558__$1 = (function (){var statearr_33570 = state_33558;
(statearr_33570[(8)] = inst_33538);

return statearr_33570;
})();
var statearr_33571_33591 = state_33558__$1;
(statearr_33571_33591[(2)] = inst_33539);

(statearr_33571_33591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (14))){
var inst_33552 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
var statearr_33572_33592 = state_33558__$1;
(statearr_33572_33592[(2)] = inst_33552);

(statearr_33572_33592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (10))){
var state_33558__$1 = state_33558;
var statearr_33573_33593 = state_33558__$1;
(statearr_33573_33593[(2)] = fc);

(statearr_33573_33593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33559 === (8))){
var inst_33547 = (state_33558[(2)]);
var state_33558__$1 = state_33558;
if(cljs.core.truth_(inst_33547)){
var statearr_33574_33594 = state_33558__$1;
(statearr_33574_33594[(1)] = (12));

} else {
var statearr_33575_33595 = state_33558__$1;
(statearr_33575_33595[(1)] = (13));

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
});})(c__33131__auto___33581,tc,fc))
;
return ((function (switch__33041__auto__,c__33131__auto___33581,tc,fc){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_33576 = [null,null,null,null,null,null,null,null,null];
(statearr_33576[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_33576[(1)] = (1));

return statearr_33576;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_33558){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33577){if((e33577 instanceof Object)){
var ex__33045__auto__ = e33577;
var statearr_33578_33596 = state_33558;
(statearr_33578_33596[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33597 = state_33558;
state_33558 = G__33597;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_33558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_33558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___33581,tc,fc))
})();
var state__33133__auto__ = (function (){var statearr_33579 = f__33132__auto__.call(null);
(statearr_33579[(6)] = c__33131__auto___33581);

return statearr_33579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___33581,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__){
return (function (state_33618){
var state_val_33619 = (state_33618[(1)]);
if((state_val_33619 === (7))){
var inst_33614 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33620_33638 = state_33618__$1;
(statearr_33620_33638[(2)] = inst_33614);

(statearr_33620_33638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (1))){
var inst_33598 = init;
var state_33618__$1 = (function (){var statearr_33621 = state_33618;
(statearr_33621[(7)] = inst_33598);

return statearr_33621;
})();
var statearr_33622_33639 = state_33618__$1;
(statearr_33622_33639[(2)] = null);

(statearr_33622_33639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (4))){
var inst_33601 = (state_33618[(8)]);
var inst_33601__$1 = (state_33618[(2)]);
var inst_33602 = (inst_33601__$1 == null);
var state_33618__$1 = (function (){var statearr_33623 = state_33618;
(statearr_33623[(8)] = inst_33601__$1);

return statearr_33623;
})();
if(cljs.core.truth_(inst_33602)){
var statearr_33624_33640 = state_33618__$1;
(statearr_33624_33640[(1)] = (5));

} else {
var statearr_33625_33641 = state_33618__$1;
(statearr_33625_33641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (6))){
var inst_33605 = (state_33618[(9)]);
var inst_33601 = (state_33618[(8)]);
var inst_33598 = (state_33618[(7)]);
var inst_33605__$1 = f.call(null,inst_33598,inst_33601);
var inst_33606 = cljs.core.reduced_QMARK_.call(null,inst_33605__$1);
var state_33618__$1 = (function (){var statearr_33626 = state_33618;
(statearr_33626[(9)] = inst_33605__$1);

return statearr_33626;
})();
if(inst_33606){
var statearr_33627_33642 = state_33618__$1;
(statearr_33627_33642[(1)] = (8));

} else {
var statearr_33628_33643 = state_33618__$1;
(statearr_33628_33643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (3))){
var inst_33616 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33618__$1,inst_33616);
} else {
if((state_val_33619 === (2))){
var state_33618__$1 = state_33618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33618__$1,(4),ch);
} else {
if((state_val_33619 === (9))){
var inst_33605 = (state_33618[(9)]);
var inst_33598 = inst_33605;
var state_33618__$1 = (function (){var statearr_33629 = state_33618;
(statearr_33629[(7)] = inst_33598);

return statearr_33629;
})();
var statearr_33630_33644 = state_33618__$1;
(statearr_33630_33644[(2)] = null);

(statearr_33630_33644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (5))){
var inst_33598 = (state_33618[(7)]);
var state_33618__$1 = state_33618;
var statearr_33631_33645 = state_33618__$1;
(statearr_33631_33645[(2)] = inst_33598);

(statearr_33631_33645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (10))){
var inst_33612 = (state_33618[(2)]);
var state_33618__$1 = state_33618;
var statearr_33632_33646 = state_33618__$1;
(statearr_33632_33646[(2)] = inst_33612);

(statearr_33632_33646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33619 === (8))){
var inst_33605 = (state_33618[(9)]);
var inst_33608 = cljs.core.deref.call(null,inst_33605);
var state_33618__$1 = state_33618;
var statearr_33633_33647 = state_33618__$1;
(statearr_33633_33647[(2)] = inst_33608);

(statearr_33633_33647[(1)] = (10));


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
});})(c__33131__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33042__auto____0 = (function (){
var statearr_33634 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33634[(0)] = cljs$core$async$reduce_$_state_machine__33042__auto__);

(statearr_33634[(1)] = (1));

return statearr_33634;
});
var cljs$core$async$reduce_$_state_machine__33042__auto____1 = (function (state_33618){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33635){if((e33635 instanceof Object)){
var ex__33045__auto__ = e33635;
var statearr_33636_33648 = state_33618;
(statearr_33636_33648[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33649 = state_33618;
state_33618 = G__33649;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33042__auto__ = function(state_33618){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33042__auto____1.call(this,state_33618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33042__auto____0;
cljs$core$async$reduce_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33042__auto____1;
return cljs$core$async$reduce_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__))
})();
var state__33133__auto__ = (function (){var statearr_33637 = f__33132__auto__.call(null);
(statearr_33637[(6)] = c__33131__auto__);

return statearr_33637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__))
);

return c__33131__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__,f__$1){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__,f__$1){
return (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (1))){
var inst_33650 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33655__$1,(2),inst_33650);
} else {
if((state_val_33656 === (2))){
var inst_33652 = (state_33655[(2)]);
var inst_33653 = f__$1.call(null,inst_33652);
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33655__$1,inst_33653);
} else {
return null;
}
}
});})(c__33131__auto__,f__$1))
;
return ((function (switch__33041__auto__,c__33131__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33042__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33042__auto____0 = (function (){
var statearr_33657 = [null,null,null,null,null,null,null];
(statearr_33657[(0)] = cljs$core$async$transduce_$_state_machine__33042__auto__);

(statearr_33657[(1)] = (1));

return statearr_33657;
});
var cljs$core$async$transduce_$_state_machine__33042__auto____1 = (function (state_33655){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33658){if((e33658 instanceof Object)){
var ex__33045__auto__ = e33658;
var statearr_33659_33661 = state_33655;
(statearr_33659_33661[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33662 = state_33655;
state_33655 = G__33662;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33042__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33042__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33042__auto____0;
cljs$core$async$transduce_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33042__auto____1;
return cljs$core$async$transduce_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__,f__$1))
})();
var state__33133__auto__ = (function (){var statearr_33660 = f__33132__auto__.call(null);
(statearr_33660[(6)] = c__33131__auto__);

return statearr_33660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__,f__$1))
);

return c__33131__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33664 = arguments.length;
switch (G__33664) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__){
return (function (state_33689){
var state_val_33690 = (state_33689[(1)]);
if((state_val_33690 === (7))){
var inst_33671 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33691_33712 = state_33689__$1;
(statearr_33691_33712[(2)] = inst_33671);

(statearr_33691_33712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (1))){
var inst_33665 = cljs.core.seq.call(null,coll);
var inst_33666 = inst_33665;
var state_33689__$1 = (function (){var statearr_33692 = state_33689;
(statearr_33692[(7)] = inst_33666);

return statearr_33692;
})();
var statearr_33693_33713 = state_33689__$1;
(statearr_33693_33713[(2)] = null);

(statearr_33693_33713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (4))){
var inst_33666 = (state_33689[(7)]);
var inst_33669 = cljs.core.first.call(null,inst_33666);
var state_33689__$1 = state_33689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33689__$1,(7),ch,inst_33669);
} else {
if((state_val_33690 === (13))){
var inst_33683 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33694_33714 = state_33689__$1;
(statearr_33694_33714[(2)] = inst_33683);

(statearr_33694_33714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (6))){
var inst_33674 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33674)){
var statearr_33695_33715 = state_33689__$1;
(statearr_33695_33715[(1)] = (8));

} else {
var statearr_33696_33716 = state_33689__$1;
(statearr_33696_33716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (3))){
var inst_33687 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33689__$1,inst_33687);
} else {
if((state_val_33690 === (12))){
var state_33689__$1 = state_33689;
var statearr_33697_33717 = state_33689__$1;
(statearr_33697_33717[(2)] = null);

(statearr_33697_33717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (2))){
var inst_33666 = (state_33689[(7)]);
var state_33689__$1 = state_33689;
if(cljs.core.truth_(inst_33666)){
var statearr_33698_33718 = state_33689__$1;
(statearr_33698_33718[(1)] = (4));

} else {
var statearr_33699_33719 = state_33689__$1;
(statearr_33699_33719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (11))){
var inst_33680 = cljs.core.async.close_BANG_.call(null,ch);
var state_33689__$1 = state_33689;
var statearr_33700_33720 = state_33689__$1;
(statearr_33700_33720[(2)] = inst_33680);

(statearr_33700_33720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (9))){
var state_33689__$1 = state_33689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33701_33721 = state_33689__$1;
(statearr_33701_33721[(1)] = (11));

} else {
var statearr_33702_33722 = state_33689__$1;
(statearr_33702_33722[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (5))){
var inst_33666 = (state_33689[(7)]);
var state_33689__$1 = state_33689;
var statearr_33703_33723 = state_33689__$1;
(statearr_33703_33723[(2)] = inst_33666);

(statearr_33703_33723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (10))){
var inst_33685 = (state_33689[(2)]);
var state_33689__$1 = state_33689;
var statearr_33704_33724 = state_33689__$1;
(statearr_33704_33724[(2)] = inst_33685);

(statearr_33704_33724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33690 === (8))){
var inst_33666 = (state_33689[(7)]);
var inst_33676 = cljs.core.next.call(null,inst_33666);
var inst_33666__$1 = inst_33676;
var state_33689__$1 = (function (){var statearr_33705 = state_33689;
(statearr_33705[(7)] = inst_33666__$1);

return statearr_33705;
})();
var statearr_33706_33725 = state_33689__$1;
(statearr_33706_33725[(2)] = null);

(statearr_33706_33725[(1)] = (2));


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
});})(c__33131__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_33707 = [null,null,null,null,null,null,null,null];
(statearr_33707[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_33707[(1)] = (1));

return statearr_33707;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_33689){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33708){if((e33708 instanceof Object)){
var ex__33045__auto__ = e33708;
var statearr_33709_33726 = state_33689;
(statearr_33709_33726[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33727 = state_33689;
state_33689 = G__33727;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_33689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_33689);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__))
})();
var state__33133__auto__ = (function (){var statearr_33710 = f__33132__auto__.call(null);
(statearr_33710[(6)] = c__33131__auto__);

return statearr_33710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__))
);

return c__33131__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30781__auto__ = (((_ == null))?null:_);
var m__30782__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,_);
} else {
var m__30782__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33728 = (function (ch,cs,meta33729){
this.ch = ch;
this.cs = cs;
this.meta33729 = meta33729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33730,meta33729__$1){
var self__ = this;
var _33730__$1 = this;
return (new cljs.core.async.t_cljs$core$async33728(self__.ch,self__.cs,meta33729__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33730){
var self__ = this;
var _33730__$1 = this;
return self__.meta33729;
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33729","meta33729",1061273669,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33728";

cljs.core.async.t_cljs$core$async33728.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async33728");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33728 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33728(ch__$1,cs__$1,meta33729){
return (new cljs.core.async.t_cljs$core$async33728(ch__$1,cs__$1,meta33729));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33728(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33131__auto___33950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___33950,cs,m,dchan,dctr,done){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___33950,cs,m,dchan,dctr,done){
return (function (state_33865){
var state_val_33866 = (state_33865[(1)]);
if((state_val_33866 === (7))){
var inst_33861 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33867_33951 = state_33865__$1;
(statearr_33867_33951[(2)] = inst_33861);

(statearr_33867_33951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (20))){
var inst_33764 = (state_33865[(7)]);
var inst_33776 = cljs.core.first.call(null,inst_33764);
var inst_33777 = cljs.core.nth.call(null,inst_33776,(0),null);
var inst_33778 = cljs.core.nth.call(null,inst_33776,(1),null);
var state_33865__$1 = (function (){var statearr_33868 = state_33865;
(statearr_33868[(8)] = inst_33777);

return statearr_33868;
})();
if(cljs.core.truth_(inst_33778)){
var statearr_33869_33952 = state_33865__$1;
(statearr_33869_33952[(1)] = (22));

} else {
var statearr_33870_33953 = state_33865__$1;
(statearr_33870_33953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (27))){
var inst_33806 = (state_33865[(9)]);
var inst_33733 = (state_33865[(10)]);
var inst_33813 = (state_33865[(11)]);
var inst_33808 = (state_33865[(12)]);
var inst_33813__$1 = cljs.core._nth.call(null,inst_33806,inst_33808);
var inst_33814 = cljs.core.async.put_BANG_.call(null,inst_33813__$1,inst_33733,done);
var state_33865__$1 = (function (){var statearr_33871 = state_33865;
(statearr_33871[(11)] = inst_33813__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33814)){
var statearr_33872_33954 = state_33865__$1;
(statearr_33872_33954[(1)] = (30));

} else {
var statearr_33873_33955 = state_33865__$1;
(statearr_33873_33955[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (1))){
var state_33865__$1 = state_33865;
var statearr_33874_33956 = state_33865__$1;
(statearr_33874_33956[(2)] = null);

(statearr_33874_33956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (24))){
var inst_33764 = (state_33865[(7)]);
var inst_33783 = (state_33865[(2)]);
var inst_33784 = cljs.core.next.call(null,inst_33764);
var inst_33742 = inst_33784;
var inst_33743 = null;
var inst_33744 = (0);
var inst_33745 = (0);
var state_33865__$1 = (function (){var statearr_33875 = state_33865;
(statearr_33875[(13)] = inst_33745);

(statearr_33875[(14)] = inst_33783);

(statearr_33875[(15)] = inst_33743);

(statearr_33875[(16)] = inst_33742);

(statearr_33875[(17)] = inst_33744);

return statearr_33875;
})();
var statearr_33876_33957 = state_33865__$1;
(statearr_33876_33957[(2)] = null);

(statearr_33876_33957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (39))){
var state_33865__$1 = state_33865;
var statearr_33880_33958 = state_33865__$1;
(statearr_33880_33958[(2)] = null);

(statearr_33880_33958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (4))){
var inst_33733 = (state_33865[(10)]);
var inst_33733__$1 = (state_33865[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var state_33865__$1 = (function (){var statearr_33881 = state_33865;
(statearr_33881[(10)] = inst_33733__$1);

return statearr_33881;
})();
if(cljs.core.truth_(inst_33734)){
var statearr_33882_33959 = state_33865__$1;
(statearr_33882_33959[(1)] = (5));

} else {
var statearr_33883_33960 = state_33865__$1;
(statearr_33883_33960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (15))){
var inst_33745 = (state_33865[(13)]);
var inst_33743 = (state_33865[(15)]);
var inst_33742 = (state_33865[(16)]);
var inst_33744 = (state_33865[(17)]);
var inst_33760 = (state_33865[(2)]);
var inst_33761 = (inst_33745 + (1));
var tmp33877 = inst_33743;
var tmp33878 = inst_33742;
var tmp33879 = inst_33744;
var inst_33742__$1 = tmp33878;
var inst_33743__$1 = tmp33877;
var inst_33744__$1 = tmp33879;
var inst_33745__$1 = inst_33761;
var state_33865__$1 = (function (){var statearr_33884 = state_33865;
(statearr_33884[(13)] = inst_33745__$1);

(statearr_33884[(15)] = inst_33743__$1);

(statearr_33884[(16)] = inst_33742__$1);

(statearr_33884[(18)] = inst_33760);

(statearr_33884[(17)] = inst_33744__$1);

return statearr_33884;
})();
var statearr_33885_33961 = state_33865__$1;
(statearr_33885_33961[(2)] = null);

(statearr_33885_33961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (21))){
var inst_33787 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33889_33962 = state_33865__$1;
(statearr_33889_33962[(2)] = inst_33787);

(statearr_33889_33962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (31))){
var inst_33813 = (state_33865[(11)]);
var inst_33817 = done.call(null,null);
var inst_33818 = cljs.core.async.untap_STAR_.call(null,m,inst_33813);
var state_33865__$1 = (function (){var statearr_33890 = state_33865;
(statearr_33890[(19)] = inst_33817);

return statearr_33890;
})();
var statearr_33891_33963 = state_33865__$1;
(statearr_33891_33963[(2)] = inst_33818);

(statearr_33891_33963[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (32))){
var inst_33806 = (state_33865[(9)]);
var inst_33805 = (state_33865[(20)]);
var inst_33807 = (state_33865[(21)]);
var inst_33808 = (state_33865[(12)]);
var inst_33820 = (state_33865[(2)]);
var inst_33821 = (inst_33808 + (1));
var tmp33886 = inst_33806;
var tmp33887 = inst_33805;
var tmp33888 = inst_33807;
var inst_33805__$1 = tmp33887;
var inst_33806__$1 = tmp33886;
var inst_33807__$1 = tmp33888;
var inst_33808__$1 = inst_33821;
var state_33865__$1 = (function (){var statearr_33892 = state_33865;
(statearr_33892[(9)] = inst_33806__$1);

(statearr_33892[(22)] = inst_33820);

(statearr_33892[(20)] = inst_33805__$1);

(statearr_33892[(21)] = inst_33807__$1);

(statearr_33892[(12)] = inst_33808__$1);

return statearr_33892;
})();
var statearr_33893_33964 = state_33865__$1;
(statearr_33893_33964[(2)] = null);

(statearr_33893_33964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (40))){
var inst_33833 = (state_33865[(23)]);
var inst_33837 = done.call(null,null);
var inst_33838 = cljs.core.async.untap_STAR_.call(null,m,inst_33833);
var state_33865__$1 = (function (){var statearr_33894 = state_33865;
(statearr_33894[(24)] = inst_33837);

return statearr_33894;
})();
var statearr_33895_33965 = state_33865__$1;
(statearr_33895_33965[(2)] = inst_33838);

(statearr_33895_33965[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (33))){
var inst_33824 = (state_33865[(25)]);
var inst_33826 = cljs.core.chunked_seq_QMARK_.call(null,inst_33824);
var state_33865__$1 = state_33865;
if(inst_33826){
var statearr_33896_33966 = state_33865__$1;
(statearr_33896_33966[(1)] = (36));

} else {
var statearr_33897_33967 = state_33865__$1;
(statearr_33897_33967[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (13))){
var inst_33754 = (state_33865[(26)]);
var inst_33757 = cljs.core.async.close_BANG_.call(null,inst_33754);
var state_33865__$1 = state_33865;
var statearr_33898_33968 = state_33865__$1;
(statearr_33898_33968[(2)] = inst_33757);

(statearr_33898_33968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (22))){
var inst_33777 = (state_33865[(8)]);
var inst_33780 = cljs.core.async.close_BANG_.call(null,inst_33777);
var state_33865__$1 = state_33865;
var statearr_33899_33969 = state_33865__$1;
(statearr_33899_33969[(2)] = inst_33780);

(statearr_33899_33969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (36))){
var inst_33824 = (state_33865[(25)]);
var inst_33828 = cljs.core.chunk_first.call(null,inst_33824);
var inst_33829 = cljs.core.chunk_rest.call(null,inst_33824);
var inst_33830 = cljs.core.count.call(null,inst_33828);
var inst_33805 = inst_33829;
var inst_33806 = inst_33828;
var inst_33807 = inst_33830;
var inst_33808 = (0);
var state_33865__$1 = (function (){var statearr_33900 = state_33865;
(statearr_33900[(9)] = inst_33806);

(statearr_33900[(20)] = inst_33805);

(statearr_33900[(21)] = inst_33807);

(statearr_33900[(12)] = inst_33808);

return statearr_33900;
})();
var statearr_33901_33970 = state_33865__$1;
(statearr_33901_33970[(2)] = null);

(statearr_33901_33970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (41))){
var inst_33824 = (state_33865[(25)]);
var inst_33840 = (state_33865[(2)]);
var inst_33841 = cljs.core.next.call(null,inst_33824);
var inst_33805 = inst_33841;
var inst_33806 = null;
var inst_33807 = (0);
var inst_33808 = (0);
var state_33865__$1 = (function (){var statearr_33902 = state_33865;
(statearr_33902[(9)] = inst_33806);

(statearr_33902[(27)] = inst_33840);

(statearr_33902[(20)] = inst_33805);

(statearr_33902[(21)] = inst_33807);

(statearr_33902[(12)] = inst_33808);

return statearr_33902;
})();
var statearr_33903_33971 = state_33865__$1;
(statearr_33903_33971[(2)] = null);

(statearr_33903_33971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (43))){
var state_33865__$1 = state_33865;
var statearr_33904_33972 = state_33865__$1;
(statearr_33904_33972[(2)] = null);

(statearr_33904_33972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (29))){
var inst_33849 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33905_33973 = state_33865__$1;
(statearr_33905_33973[(2)] = inst_33849);

(statearr_33905_33973[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (44))){
var inst_33858 = (state_33865[(2)]);
var state_33865__$1 = (function (){var statearr_33906 = state_33865;
(statearr_33906[(28)] = inst_33858);

return statearr_33906;
})();
var statearr_33907_33974 = state_33865__$1;
(statearr_33907_33974[(2)] = null);

(statearr_33907_33974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (6))){
var inst_33797 = (state_33865[(29)]);
var inst_33796 = cljs.core.deref.call(null,cs);
var inst_33797__$1 = cljs.core.keys.call(null,inst_33796);
var inst_33798 = cljs.core.count.call(null,inst_33797__$1);
var inst_33799 = cljs.core.reset_BANG_.call(null,dctr,inst_33798);
var inst_33804 = cljs.core.seq.call(null,inst_33797__$1);
var inst_33805 = inst_33804;
var inst_33806 = null;
var inst_33807 = (0);
var inst_33808 = (0);
var state_33865__$1 = (function (){var statearr_33908 = state_33865;
(statearr_33908[(30)] = inst_33799);

(statearr_33908[(9)] = inst_33806);

(statearr_33908[(20)] = inst_33805);

(statearr_33908[(21)] = inst_33807);

(statearr_33908[(29)] = inst_33797__$1);

(statearr_33908[(12)] = inst_33808);

return statearr_33908;
})();
var statearr_33909_33975 = state_33865__$1;
(statearr_33909_33975[(2)] = null);

(statearr_33909_33975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (28))){
var inst_33824 = (state_33865[(25)]);
var inst_33805 = (state_33865[(20)]);
var inst_33824__$1 = cljs.core.seq.call(null,inst_33805);
var state_33865__$1 = (function (){var statearr_33910 = state_33865;
(statearr_33910[(25)] = inst_33824__$1);

return statearr_33910;
})();
if(inst_33824__$1){
var statearr_33911_33976 = state_33865__$1;
(statearr_33911_33976[(1)] = (33));

} else {
var statearr_33912_33977 = state_33865__$1;
(statearr_33912_33977[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (25))){
var inst_33807 = (state_33865[(21)]);
var inst_33808 = (state_33865[(12)]);
var inst_33810 = (inst_33808 < inst_33807);
var inst_33811 = inst_33810;
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33811)){
var statearr_33913_33978 = state_33865__$1;
(statearr_33913_33978[(1)] = (27));

} else {
var statearr_33914_33979 = state_33865__$1;
(statearr_33914_33979[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (34))){
var state_33865__$1 = state_33865;
var statearr_33915_33980 = state_33865__$1;
(statearr_33915_33980[(2)] = null);

(statearr_33915_33980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (17))){
var state_33865__$1 = state_33865;
var statearr_33916_33981 = state_33865__$1;
(statearr_33916_33981[(2)] = null);

(statearr_33916_33981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (3))){
var inst_33863 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33865__$1,inst_33863);
} else {
if((state_val_33866 === (12))){
var inst_33792 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33917_33982 = state_33865__$1;
(statearr_33917_33982[(2)] = inst_33792);

(statearr_33917_33982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (2))){
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(4),ch);
} else {
if((state_val_33866 === (23))){
var state_33865__$1 = state_33865;
var statearr_33918_33983 = state_33865__$1;
(statearr_33918_33983[(2)] = null);

(statearr_33918_33983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (35))){
var inst_33847 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33919_33984 = state_33865__$1;
(statearr_33919_33984[(2)] = inst_33847);

(statearr_33919_33984[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (19))){
var inst_33764 = (state_33865[(7)]);
var inst_33768 = cljs.core.chunk_first.call(null,inst_33764);
var inst_33769 = cljs.core.chunk_rest.call(null,inst_33764);
var inst_33770 = cljs.core.count.call(null,inst_33768);
var inst_33742 = inst_33769;
var inst_33743 = inst_33768;
var inst_33744 = inst_33770;
var inst_33745 = (0);
var state_33865__$1 = (function (){var statearr_33920 = state_33865;
(statearr_33920[(13)] = inst_33745);

(statearr_33920[(15)] = inst_33743);

(statearr_33920[(16)] = inst_33742);

(statearr_33920[(17)] = inst_33744);

return statearr_33920;
})();
var statearr_33921_33985 = state_33865__$1;
(statearr_33921_33985[(2)] = null);

(statearr_33921_33985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (11))){
var inst_33742 = (state_33865[(16)]);
var inst_33764 = (state_33865[(7)]);
var inst_33764__$1 = cljs.core.seq.call(null,inst_33742);
var state_33865__$1 = (function (){var statearr_33922 = state_33865;
(statearr_33922[(7)] = inst_33764__$1);

return statearr_33922;
})();
if(inst_33764__$1){
var statearr_33923_33986 = state_33865__$1;
(statearr_33923_33986[(1)] = (16));

} else {
var statearr_33924_33987 = state_33865__$1;
(statearr_33924_33987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (9))){
var inst_33794 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33925_33988 = state_33865__$1;
(statearr_33925_33988[(2)] = inst_33794);

(statearr_33925_33988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (5))){
var inst_33740 = cljs.core.deref.call(null,cs);
var inst_33741 = cljs.core.seq.call(null,inst_33740);
var inst_33742 = inst_33741;
var inst_33743 = null;
var inst_33744 = (0);
var inst_33745 = (0);
var state_33865__$1 = (function (){var statearr_33926 = state_33865;
(statearr_33926[(13)] = inst_33745);

(statearr_33926[(15)] = inst_33743);

(statearr_33926[(16)] = inst_33742);

(statearr_33926[(17)] = inst_33744);

return statearr_33926;
})();
var statearr_33927_33989 = state_33865__$1;
(statearr_33927_33989[(2)] = null);

(statearr_33927_33989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (14))){
var state_33865__$1 = state_33865;
var statearr_33928_33990 = state_33865__$1;
(statearr_33928_33990[(2)] = null);

(statearr_33928_33990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (45))){
var inst_33855 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33929_33991 = state_33865__$1;
(statearr_33929_33991[(2)] = inst_33855);

(statearr_33929_33991[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (26))){
var inst_33797 = (state_33865[(29)]);
var inst_33851 = (state_33865[(2)]);
var inst_33852 = cljs.core.seq.call(null,inst_33797);
var state_33865__$1 = (function (){var statearr_33930 = state_33865;
(statearr_33930[(31)] = inst_33851);

return statearr_33930;
})();
if(inst_33852){
var statearr_33931_33992 = state_33865__$1;
(statearr_33931_33992[(1)] = (42));

} else {
var statearr_33932_33993 = state_33865__$1;
(statearr_33932_33993[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (16))){
var inst_33764 = (state_33865[(7)]);
var inst_33766 = cljs.core.chunked_seq_QMARK_.call(null,inst_33764);
var state_33865__$1 = state_33865;
if(inst_33766){
var statearr_33933_33994 = state_33865__$1;
(statearr_33933_33994[(1)] = (19));

} else {
var statearr_33934_33995 = state_33865__$1;
(statearr_33934_33995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (38))){
var inst_33844 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33935_33996 = state_33865__$1;
(statearr_33935_33996[(2)] = inst_33844);

(statearr_33935_33996[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (30))){
var state_33865__$1 = state_33865;
var statearr_33936_33997 = state_33865__$1;
(statearr_33936_33997[(2)] = null);

(statearr_33936_33997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (10))){
var inst_33745 = (state_33865[(13)]);
var inst_33743 = (state_33865[(15)]);
var inst_33753 = cljs.core._nth.call(null,inst_33743,inst_33745);
var inst_33754 = cljs.core.nth.call(null,inst_33753,(0),null);
var inst_33755 = cljs.core.nth.call(null,inst_33753,(1),null);
var state_33865__$1 = (function (){var statearr_33937 = state_33865;
(statearr_33937[(26)] = inst_33754);

return statearr_33937;
})();
if(cljs.core.truth_(inst_33755)){
var statearr_33938_33998 = state_33865__$1;
(statearr_33938_33998[(1)] = (13));

} else {
var statearr_33939_33999 = state_33865__$1;
(statearr_33939_33999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (18))){
var inst_33790 = (state_33865[(2)]);
var state_33865__$1 = state_33865;
var statearr_33940_34000 = state_33865__$1;
(statearr_33940_34000[(2)] = inst_33790);

(statearr_33940_34000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (42))){
var state_33865__$1 = state_33865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33865__$1,(45),dchan);
} else {
if((state_val_33866 === (37))){
var inst_33824 = (state_33865[(25)]);
var inst_33733 = (state_33865[(10)]);
var inst_33833 = (state_33865[(23)]);
var inst_33833__$1 = cljs.core.first.call(null,inst_33824);
var inst_33834 = cljs.core.async.put_BANG_.call(null,inst_33833__$1,inst_33733,done);
var state_33865__$1 = (function (){var statearr_33941 = state_33865;
(statearr_33941[(23)] = inst_33833__$1);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33834)){
var statearr_33942_34001 = state_33865__$1;
(statearr_33942_34001[(1)] = (39));

} else {
var statearr_33943_34002 = state_33865__$1;
(statearr_33943_34002[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33866 === (8))){
var inst_33745 = (state_33865[(13)]);
var inst_33744 = (state_33865[(17)]);
var inst_33747 = (inst_33745 < inst_33744);
var inst_33748 = inst_33747;
var state_33865__$1 = state_33865;
if(cljs.core.truth_(inst_33748)){
var statearr_33944_34003 = state_33865__$1;
(statearr_33944_34003[(1)] = (10));

} else {
var statearr_33945_34004 = state_33865__$1;
(statearr_33945_34004[(1)] = (11));

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
});})(c__33131__auto___33950,cs,m,dchan,dctr,done))
;
return ((function (switch__33041__auto__,c__33131__auto___33950,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33042__auto__ = null;
var cljs$core$async$mult_$_state_machine__33042__auto____0 = (function (){
var statearr_33946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33946[(0)] = cljs$core$async$mult_$_state_machine__33042__auto__);

(statearr_33946[(1)] = (1));

return statearr_33946;
});
var cljs$core$async$mult_$_state_machine__33042__auto____1 = (function (state_33865){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_33865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e33947){if((e33947 instanceof Object)){
var ex__33045__auto__ = e33947;
var statearr_33948_34005 = state_33865;
(statearr_33948_34005[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34006 = state_33865;
state_33865 = G__34006;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33042__auto__ = function(state_33865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33042__auto____1.call(this,state_33865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33042__auto____0;
cljs$core$async$mult_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33042__auto____1;
return cljs$core$async$mult_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___33950,cs,m,dchan,dctr,done))
})();
var state__33133__auto__ = (function (){var statearr_33949 = f__33132__auto__.call(null);
(statearr_33949[(6)] = c__33131__auto___33950);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___33950,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34008 = arguments.length;
switch (G__34008) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m);
} else {
var m__30782__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,state_map);
} else {
var m__30782__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30781__auto__ = (((m == null))?null:m);
var m__30782__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,m,mode);
} else {
var m__30782__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31332__auto__ = [];
var len__31325__auto___34020 = arguments.length;
var i__31326__auto___34021 = (0);
while(true){
if((i__31326__auto___34021 < len__31325__auto___34020)){
args__31332__auto__.push((arguments[i__31326__auto___34021]));

var G__34022 = (i__31326__auto___34021 + (1));
i__31326__auto___34021 = G__34022;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((3) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31333__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34014){
var map__34015 = p__34014;
var map__34015__$1 = ((((!((map__34015 == null)))?((((map__34015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34015.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34015):map__34015);
var opts = map__34015__$1;
var statearr_34017_34023 = state;
(statearr_34017_34023[(1)] = cont_block);


var temp__5278__auto__ = cljs.core.async.do_alts.call(null,((function (map__34015,map__34015__$1,opts){
return (function (val){
var statearr_34018_34024 = state;
(statearr_34018_34024[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34015,map__34015__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5278__auto__)){
var cb = temp__5278__auto__;
var statearr_34019_34025 = state;
(statearr_34019_34025[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34010){
var G__34011 = cljs.core.first.call(null,seq34010);
var seq34010__$1 = cljs.core.next.call(null,seq34010);
var G__34012 = cljs.core.first.call(null,seq34010__$1);
var seq34010__$2 = cljs.core.next.call(null,seq34010__$1);
var G__34013 = cljs.core.first.call(null,seq34010__$2);
var seq34010__$3 = cljs.core.next.call(null,seq34010__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34011,G__34012,G__34013,seq34010__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34026 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34027){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34027 = meta34027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34028,meta34027__$1){
var self__ = this;
var _34028__$1 = this;
return (new cljs.core.async.t_cljs$core$async34026(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34027__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34028){
var self__ = this;
var _34028__$1 = this;
return self__.meta34027;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34027","meta34027",1923035978,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34026";

cljs.core.async.t_cljs$core$async34026.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34026");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34026 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34026(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34027){
return (new cljs.core.async.t_cljs$core$async34026(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34027));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34026(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33131__auto___34190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34130){
var state_val_34131 = (state_34130[(1)]);
if((state_val_34131 === (7))){
var inst_34045 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34132_34191 = state_34130__$1;
(statearr_34132_34191[(2)] = inst_34045);

(statearr_34132_34191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (20))){
var inst_34057 = (state_34130[(7)]);
var state_34130__$1 = state_34130;
var statearr_34133_34192 = state_34130__$1;
(statearr_34133_34192[(2)] = inst_34057);

(statearr_34133_34192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (27))){
var state_34130__$1 = state_34130;
var statearr_34134_34193 = state_34130__$1;
(statearr_34134_34193[(2)] = null);

(statearr_34134_34193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (1))){
var inst_34032 = (state_34130[(8)]);
var inst_34032__$1 = calc_state.call(null);
var inst_34034 = (inst_34032__$1 == null);
var inst_34035 = cljs.core.not.call(null,inst_34034);
var state_34130__$1 = (function (){var statearr_34135 = state_34130;
(statearr_34135[(8)] = inst_34032__$1);

return statearr_34135;
})();
if(inst_34035){
var statearr_34136_34194 = state_34130__$1;
(statearr_34136_34194[(1)] = (2));

} else {
var statearr_34137_34195 = state_34130__$1;
(statearr_34137_34195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (24))){
var inst_34081 = (state_34130[(9)]);
var inst_34104 = (state_34130[(10)]);
var inst_34090 = (state_34130[(11)]);
var inst_34104__$1 = inst_34081.call(null,inst_34090);
var state_34130__$1 = (function (){var statearr_34138 = state_34130;
(statearr_34138[(10)] = inst_34104__$1);

return statearr_34138;
})();
if(cljs.core.truth_(inst_34104__$1)){
var statearr_34139_34196 = state_34130__$1;
(statearr_34139_34196[(1)] = (29));

} else {
var statearr_34140_34197 = state_34130__$1;
(statearr_34140_34197[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (4))){
var inst_34048 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34048)){
var statearr_34141_34198 = state_34130__$1;
(statearr_34141_34198[(1)] = (8));

} else {
var statearr_34142_34199 = state_34130__$1;
(statearr_34142_34199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (15))){
var inst_34075 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34075)){
var statearr_34143_34200 = state_34130__$1;
(statearr_34143_34200[(1)] = (19));

} else {
var statearr_34144_34201 = state_34130__$1;
(statearr_34144_34201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (21))){
var inst_34080 = (state_34130[(12)]);
var inst_34080__$1 = (state_34130[(2)]);
var inst_34081 = cljs.core.get.call(null,inst_34080__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34082 = cljs.core.get.call(null,inst_34080__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34083 = cljs.core.get.call(null,inst_34080__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34130__$1 = (function (){var statearr_34145 = state_34130;
(statearr_34145[(9)] = inst_34081);

(statearr_34145[(12)] = inst_34080__$1);

(statearr_34145[(13)] = inst_34082);

return statearr_34145;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34130__$1,(22),inst_34083);
} else {
if((state_val_34131 === (31))){
var inst_34112 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34112)){
var statearr_34146_34202 = state_34130__$1;
(statearr_34146_34202[(1)] = (32));

} else {
var statearr_34147_34203 = state_34130__$1;
(statearr_34147_34203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (32))){
var inst_34089 = (state_34130[(14)]);
var state_34130__$1 = state_34130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34130__$1,(35),out,inst_34089);
} else {
if((state_val_34131 === (33))){
var inst_34080 = (state_34130[(12)]);
var inst_34057 = inst_34080;
var state_34130__$1 = (function (){var statearr_34148 = state_34130;
(statearr_34148[(7)] = inst_34057);

return statearr_34148;
})();
var statearr_34149_34204 = state_34130__$1;
(statearr_34149_34204[(2)] = null);

(statearr_34149_34204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (13))){
var inst_34057 = (state_34130[(7)]);
var inst_34064 = inst_34057.cljs$lang$protocol_mask$partition0$;
var inst_34065 = (inst_34064 & (64));
var inst_34066 = inst_34057.cljs$core$ISeq$;
var inst_34067 = (cljs.core.PROTOCOL_SENTINEL === inst_34066);
var inst_34068 = (inst_34065) || (inst_34067);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34068)){
var statearr_34150_34205 = state_34130__$1;
(statearr_34150_34205[(1)] = (16));

} else {
var statearr_34151_34206 = state_34130__$1;
(statearr_34151_34206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (22))){
var inst_34089 = (state_34130[(14)]);
var inst_34090 = (state_34130[(11)]);
var inst_34088 = (state_34130[(2)]);
var inst_34089__$1 = cljs.core.nth.call(null,inst_34088,(0),null);
var inst_34090__$1 = cljs.core.nth.call(null,inst_34088,(1),null);
var inst_34091 = (inst_34089__$1 == null);
var inst_34092 = cljs.core._EQ_.call(null,inst_34090__$1,change);
var inst_34093 = (inst_34091) || (inst_34092);
var state_34130__$1 = (function (){var statearr_34152 = state_34130;
(statearr_34152[(14)] = inst_34089__$1);

(statearr_34152[(11)] = inst_34090__$1);

return statearr_34152;
})();
if(cljs.core.truth_(inst_34093)){
var statearr_34153_34207 = state_34130__$1;
(statearr_34153_34207[(1)] = (23));

} else {
var statearr_34154_34208 = state_34130__$1;
(statearr_34154_34208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (36))){
var inst_34080 = (state_34130[(12)]);
var inst_34057 = inst_34080;
var state_34130__$1 = (function (){var statearr_34155 = state_34130;
(statearr_34155[(7)] = inst_34057);

return statearr_34155;
})();
var statearr_34156_34209 = state_34130__$1;
(statearr_34156_34209[(2)] = null);

(statearr_34156_34209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (29))){
var inst_34104 = (state_34130[(10)]);
var state_34130__$1 = state_34130;
var statearr_34157_34210 = state_34130__$1;
(statearr_34157_34210[(2)] = inst_34104);

(statearr_34157_34210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (6))){
var state_34130__$1 = state_34130;
var statearr_34158_34211 = state_34130__$1;
(statearr_34158_34211[(2)] = false);

(statearr_34158_34211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (28))){
var inst_34100 = (state_34130[(2)]);
var inst_34101 = calc_state.call(null);
var inst_34057 = inst_34101;
var state_34130__$1 = (function (){var statearr_34159 = state_34130;
(statearr_34159[(7)] = inst_34057);

(statearr_34159[(15)] = inst_34100);

return statearr_34159;
})();
var statearr_34160_34212 = state_34130__$1;
(statearr_34160_34212[(2)] = null);

(statearr_34160_34212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (25))){
var inst_34126 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34161_34213 = state_34130__$1;
(statearr_34161_34213[(2)] = inst_34126);

(statearr_34161_34213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (34))){
var inst_34124 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34162_34214 = state_34130__$1;
(statearr_34162_34214[(2)] = inst_34124);

(statearr_34162_34214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (17))){
var state_34130__$1 = state_34130;
var statearr_34163_34215 = state_34130__$1;
(statearr_34163_34215[(2)] = false);

(statearr_34163_34215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (3))){
var state_34130__$1 = state_34130;
var statearr_34164_34216 = state_34130__$1;
(statearr_34164_34216[(2)] = false);

(statearr_34164_34216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (12))){
var inst_34128 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34130__$1,inst_34128);
} else {
if((state_val_34131 === (2))){
var inst_34032 = (state_34130[(8)]);
var inst_34037 = inst_34032.cljs$lang$protocol_mask$partition0$;
var inst_34038 = (inst_34037 & (64));
var inst_34039 = inst_34032.cljs$core$ISeq$;
var inst_34040 = (cljs.core.PROTOCOL_SENTINEL === inst_34039);
var inst_34041 = (inst_34038) || (inst_34040);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34041)){
var statearr_34165_34217 = state_34130__$1;
(statearr_34165_34217[(1)] = (5));

} else {
var statearr_34166_34218 = state_34130__$1;
(statearr_34166_34218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (23))){
var inst_34089 = (state_34130[(14)]);
var inst_34095 = (inst_34089 == null);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34095)){
var statearr_34167_34219 = state_34130__$1;
(statearr_34167_34219[(1)] = (26));

} else {
var statearr_34168_34220 = state_34130__$1;
(statearr_34168_34220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (35))){
var inst_34115 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
if(cljs.core.truth_(inst_34115)){
var statearr_34169_34221 = state_34130__$1;
(statearr_34169_34221[(1)] = (36));

} else {
var statearr_34170_34222 = state_34130__$1;
(statearr_34170_34222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (19))){
var inst_34057 = (state_34130[(7)]);
var inst_34077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34057);
var state_34130__$1 = state_34130;
var statearr_34171_34223 = state_34130__$1;
(statearr_34171_34223[(2)] = inst_34077);

(statearr_34171_34223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (11))){
var inst_34057 = (state_34130[(7)]);
var inst_34061 = (inst_34057 == null);
var inst_34062 = cljs.core.not.call(null,inst_34061);
var state_34130__$1 = state_34130;
if(inst_34062){
var statearr_34172_34224 = state_34130__$1;
(statearr_34172_34224[(1)] = (13));

} else {
var statearr_34173_34225 = state_34130__$1;
(statearr_34173_34225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (9))){
var inst_34032 = (state_34130[(8)]);
var state_34130__$1 = state_34130;
var statearr_34174_34226 = state_34130__$1;
(statearr_34174_34226[(2)] = inst_34032);

(statearr_34174_34226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (5))){
var state_34130__$1 = state_34130;
var statearr_34175_34227 = state_34130__$1;
(statearr_34175_34227[(2)] = true);

(statearr_34175_34227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (14))){
var state_34130__$1 = state_34130;
var statearr_34176_34228 = state_34130__$1;
(statearr_34176_34228[(2)] = false);

(statearr_34176_34228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (26))){
var inst_34090 = (state_34130[(11)]);
var inst_34097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34090);
var state_34130__$1 = state_34130;
var statearr_34177_34229 = state_34130__$1;
(statearr_34177_34229[(2)] = inst_34097);

(statearr_34177_34229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (16))){
var state_34130__$1 = state_34130;
var statearr_34178_34230 = state_34130__$1;
(statearr_34178_34230[(2)] = true);

(statearr_34178_34230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (38))){
var inst_34120 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34179_34231 = state_34130__$1;
(statearr_34179_34231[(2)] = inst_34120);

(statearr_34179_34231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (30))){
var inst_34081 = (state_34130[(9)]);
var inst_34082 = (state_34130[(13)]);
var inst_34090 = (state_34130[(11)]);
var inst_34107 = cljs.core.empty_QMARK_.call(null,inst_34081);
var inst_34108 = inst_34082.call(null,inst_34090);
var inst_34109 = cljs.core.not.call(null,inst_34108);
var inst_34110 = (inst_34107) && (inst_34109);
var state_34130__$1 = state_34130;
var statearr_34180_34232 = state_34130__$1;
(statearr_34180_34232[(2)] = inst_34110);

(statearr_34180_34232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (10))){
var inst_34032 = (state_34130[(8)]);
var inst_34053 = (state_34130[(2)]);
var inst_34054 = cljs.core.get.call(null,inst_34053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34055 = cljs.core.get.call(null,inst_34053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34056 = cljs.core.get.call(null,inst_34053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34057 = inst_34032;
var state_34130__$1 = (function (){var statearr_34181 = state_34130;
(statearr_34181[(16)] = inst_34055);

(statearr_34181[(17)] = inst_34054);

(statearr_34181[(7)] = inst_34057);

(statearr_34181[(18)] = inst_34056);

return statearr_34181;
})();
var statearr_34182_34233 = state_34130__$1;
(statearr_34182_34233[(2)] = null);

(statearr_34182_34233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (18))){
var inst_34072 = (state_34130[(2)]);
var state_34130__$1 = state_34130;
var statearr_34183_34234 = state_34130__$1;
(statearr_34183_34234[(2)] = inst_34072);

(statearr_34183_34234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (37))){
var state_34130__$1 = state_34130;
var statearr_34184_34235 = state_34130__$1;
(statearr_34184_34235[(2)] = null);

(statearr_34184_34235[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34131 === (8))){
var inst_34032 = (state_34130[(8)]);
var inst_34050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34032);
var state_34130__$1 = state_34130;
var statearr_34185_34236 = state_34130__$1;
(statearr_34185_34236[(2)] = inst_34050);

(statearr_34185_34236[(1)] = (10));


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
});})(c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33041__auto__,c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33042__auto__ = null;
var cljs$core$async$mix_$_state_machine__33042__auto____0 = (function (){
var statearr_34186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34186[(0)] = cljs$core$async$mix_$_state_machine__33042__auto__);

(statearr_34186[(1)] = (1));

return statearr_34186;
});
var cljs$core$async$mix_$_state_machine__33042__auto____1 = (function (state_34130){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34187){if((e34187 instanceof Object)){
var ex__33045__auto__ = e34187;
var statearr_34188_34237 = state_34130;
(statearr_34188_34237[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34238 = state_34130;
state_34130 = G__34238;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33042__auto__ = function(state_34130){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33042__auto____1.call(this,state_34130);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33042__auto____0;
cljs$core$async$mix_$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33042__auto____1;
return cljs$core$async$mix_$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33133__auto__ = (function (){var statearr_34189 = f__33132__auto__.call(null);
(statearr_34189[(6)] = c__33131__auto___34190);

return statearr_34189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30782__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v,ch);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34240 = arguments.length;
switch (G__34240) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30781__auto__ = (((p == null))?null:p);
var m__30782__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,p,v);
} else {
var m__30782__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34244 = arguments.length;
switch (G__34244) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30048__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30048__auto__)){
return or__30048__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30048__auto__,mults){
return (function (p1__34242_SHARP_){
if(cljs.core.truth_(p1__34242_SHARP_.call(null,topic))){
return p1__34242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30048__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34246 = meta34246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34247,meta34246__$1){
var self__ = this;
var _34247__$1 = this;
return (new cljs.core.async.t_cljs$core$async34245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34246__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34247){
var self__ = this;
var _34247__$1 = this;
return self__.meta34246;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5278__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5278__auto__)){
var m = temp__5278__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34246","meta34246",1417801467,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34245";

cljs.core.async.t_cljs$core$async34245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34245");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34245 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34246){
return (new cljs.core.async.t_cljs$core$async34245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34246));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33131__auto___34365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34365,mults,ensure_mult,p){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34365,mults,ensure_mult,p){
return (function (state_34319){
var state_val_34320 = (state_34319[(1)]);
if((state_val_34320 === (7))){
var inst_34315 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34321_34366 = state_34319__$1;
(statearr_34321_34366[(2)] = inst_34315);

(statearr_34321_34366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (20))){
var state_34319__$1 = state_34319;
var statearr_34322_34367 = state_34319__$1;
(statearr_34322_34367[(2)] = null);

(statearr_34322_34367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (1))){
var state_34319__$1 = state_34319;
var statearr_34323_34368 = state_34319__$1;
(statearr_34323_34368[(2)] = null);

(statearr_34323_34368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (24))){
var inst_34298 = (state_34319[(7)]);
var inst_34307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34298);
var state_34319__$1 = state_34319;
var statearr_34324_34369 = state_34319__$1;
(statearr_34324_34369[(2)] = inst_34307);

(statearr_34324_34369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (4))){
var inst_34250 = (state_34319[(8)]);
var inst_34250__$1 = (state_34319[(2)]);
var inst_34251 = (inst_34250__$1 == null);
var state_34319__$1 = (function (){var statearr_34325 = state_34319;
(statearr_34325[(8)] = inst_34250__$1);

return statearr_34325;
})();
if(cljs.core.truth_(inst_34251)){
var statearr_34326_34370 = state_34319__$1;
(statearr_34326_34370[(1)] = (5));

} else {
var statearr_34327_34371 = state_34319__$1;
(statearr_34327_34371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (15))){
var inst_34292 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34328_34372 = state_34319__$1;
(statearr_34328_34372[(2)] = inst_34292);

(statearr_34328_34372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (21))){
var inst_34312 = (state_34319[(2)]);
var state_34319__$1 = (function (){var statearr_34329 = state_34319;
(statearr_34329[(9)] = inst_34312);

return statearr_34329;
})();
var statearr_34330_34373 = state_34319__$1;
(statearr_34330_34373[(2)] = null);

(statearr_34330_34373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (13))){
var inst_34274 = (state_34319[(10)]);
var inst_34276 = cljs.core.chunked_seq_QMARK_.call(null,inst_34274);
var state_34319__$1 = state_34319;
if(inst_34276){
var statearr_34331_34374 = state_34319__$1;
(statearr_34331_34374[(1)] = (16));

} else {
var statearr_34332_34375 = state_34319__$1;
(statearr_34332_34375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (22))){
var inst_34304 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
if(cljs.core.truth_(inst_34304)){
var statearr_34333_34376 = state_34319__$1;
(statearr_34333_34376[(1)] = (23));

} else {
var statearr_34334_34377 = state_34319__$1;
(statearr_34334_34377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (6))){
var inst_34250 = (state_34319[(8)]);
var inst_34298 = (state_34319[(7)]);
var inst_34300 = (state_34319[(11)]);
var inst_34298__$1 = topic_fn.call(null,inst_34250);
var inst_34299 = cljs.core.deref.call(null,mults);
var inst_34300__$1 = cljs.core.get.call(null,inst_34299,inst_34298__$1);
var state_34319__$1 = (function (){var statearr_34335 = state_34319;
(statearr_34335[(7)] = inst_34298__$1);

(statearr_34335[(11)] = inst_34300__$1);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34300__$1)){
var statearr_34336_34378 = state_34319__$1;
(statearr_34336_34378[(1)] = (19));

} else {
var statearr_34337_34379 = state_34319__$1;
(statearr_34337_34379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (25))){
var inst_34309 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34338_34380 = state_34319__$1;
(statearr_34338_34380[(2)] = inst_34309);

(statearr_34338_34380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (17))){
var inst_34274 = (state_34319[(10)]);
var inst_34283 = cljs.core.first.call(null,inst_34274);
var inst_34284 = cljs.core.async.muxch_STAR_.call(null,inst_34283);
var inst_34285 = cljs.core.async.close_BANG_.call(null,inst_34284);
var inst_34286 = cljs.core.next.call(null,inst_34274);
var inst_34260 = inst_34286;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34339 = state_34319;
(statearr_34339[(12)] = inst_34261);

(statearr_34339[(13)] = inst_34262);

(statearr_34339[(14)] = inst_34260);

(statearr_34339[(15)] = inst_34263);

(statearr_34339[(16)] = inst_34285);

return statearr_34339;
})();
var statearr_34340_34381 = state_34319__$1;
(statearr_34340_34381[(2)] = null);

(statearr_34340_34381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (3))){
var inst_34317 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34319__$1,inst_34317);
} else {
if((state_val_34320 === (12))){
var inst_34294 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34341_34382 = state_34319__$1;
(statearr_34341_34382[(2)] = inst_34294);

(statearr_34341_34382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (2))){
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34319__$1,(4),ch);
} else {
if((state_val_34320 === (23))){
var state_34319__$1 = state_34319;
var statearr_34342_34383 = state_34319__$1;
(statearr_34342_34383[(2)] = null);

(statearr_34342_34383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (19))){
var inst_34250 = (state_34319[(8)]);
var inst_34300 = (state_34319[(11)]);
var inst_34302 = cljs.core.async.muxch_STAR_.call(null,inst_34300);
var state_34319__$1 = state_34319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34319__$1,(22),inst_34302,inst_34250);
} else {
if((state_val_34320 === (11))){
var inst_34274 = (state_34319[(10)]);
var inst_34260 = (state_34319[(14)]);
var inst_34274__$1 = cljs.core.seq.call(null,inst_34260);
var state_34319__$1 = (function (){var statearr_34343 = state_34319;
(statearr_34343[(10)] = inst_34274__$1);

return statearr_34343;
})();
if(inst_34274__$1){
var statearr_34344_34384 = state_34319__$1;
(statearr_34344_34384[(1)] = (13));

} else {
var statearr_34345_34385 = state_34319__$1;
(statearr_34345_34385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (9))){
var inst_34296 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34346_34386 = state_34319__$1;
(statearr_34346_34386[(2)] = inst_34296);

(statearr_34346_34386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (5))){
var inst_34257 = cljs.core.deref.call(null,mults);
var inst_34258 = cljs.core.vals.call(null,inst_34257);
var inst_34259 = cljs.core.seq.call(null,inst_34258);
var inst_34260 = inst_34259;
var inst_34261 = null;
var inst_34262 = (0);
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34347 = state_34319;
(statearr_34347[(12)] = inst_34261);

(statearr_34347[(13)] = inst_34262);

(statearr_34347[(14)] = inst_34260);

(statearr_34347[(15)] = inst_34263);

return statearr_34347;
})();
var statearr_34348_34387 = state_34319__$1;
(statearr_34348_34387[(2)] = null);

(statearr_34348_34387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (14))){
var state_34319__$1 = state_34319;
var statearr_34352_34388 = state_34319__$1;
(statearr_34352_34388[(2)] = null);

(statearr_34352_34388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (16))){
var inst_34274 = (state_34319[(10)]);
var inst_34278 = cljs.core.chunk_first.call(null,inst_34274);
var inst_34279 = cljs.core.chunk_rest.call(null,inst_34274);
var inst_34280 = cljs.core.count.call(null,inst_34278);
var inst_34260 = inst_34279;
var inst_34261 = inst_34278;
var inst_34262 = inst_34280;
var inst_34263 = (0);
var state_34319__$1 = (function (){var statearr_34353 = state_34319;
(statearr_34353[(12)] = inst_34261);

(statearr_34353[(13)] = inst_34262);

(statearr_34353[(14)] = inst_34260);

(statearr_34353[(15)] = inst_34263);

return statearr_34353;
})();
var statearr_34354_34389 = state_34319__$1;
(statearr_34354_34389[(2)] = null);

(statearr_34354_34389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (10))){
var inst_34261 = (state_34319[(12)]);
var inst_34262 = (state_34319[(13)]);
var inst_34260 = (state_34319[(14)]);
var inst_34263 = (state_34319[(15)]);
var inst_34268 = cljs.core._nth.call(null,inst_34261,inst_34263);
var inst_34269 = cljs.core.async.muxch_STAR_.call(null,inst_34268);
var inst_34270 = cljs.core.async.close_BANG_.call(null,inst_34269);
var inst_34271 = (inst_34263 + (1));
var tmp34349 = inst_34261;
var tmp34350 = inst_34262;
var tmp34351 = inst_34260;
var inst_34260__$1 = tmp34351;
var inst_34261__$1 = tmp34349;
var inst_34262__$1 = tmp34350;
var inst_34263__$1 = inst_34271;
var state_34319__$1 = (function (){var statearr_34355 = state_34319;
(statearr_34355[(12)] = inst_34261__$1);

(statearr_34355[(17)] = inst_34270);

(statearr_34355[(13)] = inst_34262__$1);

(statearr_34355[(14)] = inst_34260__$1);

(statearr_34355[(15)] = inst_34263__$1);

return statearr_34355;
})();
var statearr_34356_34390 = state_34319__$1;
(statearr_34356_34390[(2)] = null);

(statearr_34356_34390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (18))){
var inst_34289 = (state_34319[(2)]);
var state_34319__$1 = state_34319;
var statearr_34357_34391 = state_34319__$1;
(statearr_34357_34391[(2)] = inst_34289);

(statearr_34357_34391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34320 === (8))){
var inst_34262 = (state_34319[(13)]);
var inst_34263 = (state_34319[(15)]);
var inst_34265 = (inst_34263 < inst_34262);
var inst_34266 = inst_34265;
var state_34319__$1 = state_34319;
if(cljs.core.truth_(inst_34266)){
var statearr_34358_34392 = state_34319__$1;
(statearr_34358_34392[(1)] = (10));

} else {
var statearr_34359_34393 = state_34319__$1;
(statearr_34359_34393[(1)] = (11));

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
});})(c__33131__auto___34365,mults,ensure_mult,p))
;
return ((function (switch__33041__auto__,c__33131__auto___34365,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34360[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34360[(1)] = (1));

return statearr_34360;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34319){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34361){if((e34361 instanceof Object)){
var ex__33045__auto__ = e34361;
var statearr_34362_34394 = state_34319;
(statearr_34362_34394[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34395 = state_34319;
state_34319 = G__34395;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34319);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34365,mults,ensure_mult,p))
})();
var state__33133__auto__ = (function (){var statearr_34363 = f__33132__auto__.call(null);
(statearr_34363[(6)] = c__33131__auto___34365);

return statearr_34363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34365,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34397 = arguments.length;
switch (G__34397) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34400 = arguments.length;
switch (G__34400) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34403 = arguments.length;
switch (G__34403) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33131__auto___34470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34442){
var state_val_34443 = (state_34442[(1)]);
if((state_val_34443 === (7))){
var state_34442__$1 = state_34442;
var statearr_34444_34471 = state_34442__$1;
(statearr_34444_34471[(2)] = null);

(statearr_34444_34471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (1))){
var state_34442__$1 = state_34442;
var statearr_34445_34472 = state_34442__$1;
(statearr_34445_34472[(2)] = null);

(statearr_34445_34472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (4))){
var inst_34406 = (state_34442[(7)]);
var inst_34408 = (inst_34406 < cnt);
var state_34442__$1 = state_34442;
if(cljs.core.truth_(inst_34408)){
var statearr_34446_34473 = state_34442__$1;
(statearr_34446_34473[(1)] = (6));

} else {
var statearr_34447_34474 = state_34442__$1;
(statearr_34447_34474[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (15))){
var inst_34438 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34448_34475 = state_34442__$1;
(statearr_34448_34475[(2)] = inst_34438);

(statearr_34448_34475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (13))){
var inst_34431 = cljs.core.async.close_BANG_.call(null,out);
var state_34442__$1 = state_34442;
var statearr_34449_34476 = state_34442__$1;
(statearr_34449_34476[(2)] = inst_34431);

(statearr_34449_34476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (6))){
var state_34442__$1 = state_34442;
var statearr_34450_34477 = state_34442__$1;
(statearr_34450_34477[(2)] = null);

(statearr_34450_34477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (3))){
var inst_34440 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34442__$1,inst_34440);
} else {
if((state_val_34443 === (12))){
var inst_34428 = (state_34442[(8)]);
var inst_34428__$1 = (state_34442[(2)]);
var inst_34429 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34428__$1);
var state_34442__$1 = (function (){var statearr_34451 = state_34442;
(statearr_34451[(8)] = inst_34428__$1);

return statearr_34451;
})();
if(cljs.core.truth_(inst_34429)){
var statearr_34452_34478 = state_34442__$1;
(statearr_34452_34478[(1)] = (13));

} else {
var statearr_34453_34479 = state_34442__$1;
(statearr_34453_34479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (2))){
var inst_34405 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34406 = (0);
var state_34442__$1 = (function (){var statearr_34454 = state_34442;
(statearr_34454[(9)] = inst_34405);

(statearr_34454[(7)] = inst_34406);

return statearr_34454;
})();
var statearr_34455_34480 = state_34442__$1;
(statearr_34455_34480[(2)] = null);

(statearr_34455_34480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (11))){
var inst_34406 = (state_34442[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34442,(10),Object,null,(9));
var inst_34415 = chs__$1.call(null,inst_34406);
var inst_34416 = done.call(null,inst_34406);
var inst_34417 = cljs.core.async.take_BANG_.call(null,inst_34415,inst_34416);
var state_34442__$1 = state_34442;
var statearr_34456_34481 = state_34442__$1;
(statearr_34456_34481[(2)] = inst_34417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (9))){
var inst_34406 = (state_34442[(7)]);
var inst_34419 = (state_34442[(2)]);
var inst_34420 = (inst_34406 + (1));
var inst_34406__$1 = inst_34420;
var state_34442__$1 = (function (){var statearr_34457 = state_34442;
(statearr_34457[(10)] = inst_34419);

(statearr_34457[(7)] = inst_34406__$1);

return statearr_34457;
})();
var statearr_34458_34482 = state_34442__$1;
(statearr_34458_34482[(2)] = null);

(statearr_34458_34482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (5))){
var inst_34426 = (state_34442[(2)]);
var state_34442__$1 = (function (){var statearr_34459 = state_34442;
(statearr_34459[(11)] = inst_34426);

return statearr_34459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34442__$1,(12),dchan);
} else {
if((state_val_34443 === (14))){
var inst_34428 = (state_34442[(8)]);
var inst_34433 = cljs.core.apply.call(null,f,inst_34428);
var state_34442__$1 = state_34442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34442__$1,(16),out,inst_34433);
} else {
if((state_val_34443 === (16))){
var inst_34435 = (state_34442[(2)]);
var state_34442__$1 = (function (){var statearr_34460 = state_34442;
(statearr_34460[(12)] = inst_34435);

return statearr_34460;
})();
var statearr_34461_34483 = state_34442__$1;
(statearr_34461_34483[(2)] = null);

(statearr_34461_34483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (10))){
var inst_34410 = (state_34442[(2)]);
var inst_34411 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34442__$1 = (function (){var statearr_34462 = state_34442;
(statearr_34462[(13)] = inst_34410);

return statearr_34462;
})();
var statearr_34463_34484 = state_34442__$1;
(statearr_34463_34484[(2)] = inst_34411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34443 === (8))){
var inst_34424 = (state_34442[(2)]);
var state_34442__$1 = state_34442;
var statearr_34464_34485 = state_34442__$1;
(statearr_34464_34485[(2)] = inst_34424);

(statearr_34464_34485[(1)] = (5));


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
});})(c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33041__auto__,c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34465[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34465[(1)] = (1));

return statearr_34465;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34442){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34466){if((e34466 instanceof Object)){
var ex__33045__auto__ = e34466;
var statearr_34467_34486 = state_34442;
(statearr_34467_34486[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34487 = state_34442;
state_34442 = G__34487;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33133__auto__ = (function (){var statearr_34468 = f__33132__auto__.call(null);
(statearr_34468[(6)] = c__33131__auto___34470);

return statearr_34468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34470,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34490 = arguments.length;
switch (G__34490) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___34544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34544,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34544,out){
return (function (state_34522){
var state_val_34523 = (state_34522[(1)]);
if((state_val_34523 === (7))){
var inst_34501 = (state_34522[(7)]);
var inst_34502 = (state_34522[(8)]);
var inst_34501__$1 = (state_34522[(2)]);
var inst_34502__$1 = cljs.core.nth.call(null,inst_34501__$1,(0),null);
var inst_34503 = cljs.core.nth.call(null,inst_34501__$1,(1),null);
var inst_34504 = (inst_34502__$1 == null);
var state_34522__$1 = (function (){var statearr_34524 = state_34522;
(statearr_34524[(9)] = inst_34503);

(statearr_34524[(7)] = inst_34501__$1);

(statearr_34524[(8)] = inst_34502__$1);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34504)){
var statearr_34525_34545 = state_34522__$1;
(statearr_34525_34545[(1)] = (8));

} else {
var statearr_34526_34546 = state_34522__$1;
(statearr_34526_34546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (1))){
var inst_34491 = cljs.core.vec.call(null,chs);
var inst_34492 = inst_34491;
var state_34522__$1 = (function (){var statearr_34527 = state_34522;
(statearr_34527[(10)] = inst_34492);

return statearr_34527;
})();
var statearr_34528_34547 = state_34522__$1;
(statearr_34528_34547[(2)] = null);

(statearr_34528_34547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (4))){
var inst_34492 = (state_34522[(10)]);
var state_34522__$1 = state_34522;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34522__$1,(7),inst_34492);
} else {
if((state_val_34523 === (6))){
var inst_34518 = (state_34522[(2)]);
var state_34522__$1 = state_34522;
var statearr_34529_34548 = state_34522__$1;
(statearr_34529_34548[(2)] = inst_34518);

(statearr_34529_34548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (3))){
var inst_34520 = (state_34522[(2)]);
var state_34522__$1 = state_34522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34522__$1,inst_34520);
} else {
if((state_val_34523 === (2))){
var inst_34492 = (state_34522[(10)]);
var inst_34494 = cljs.core.count.call(null,inst_34492);
var inst_34495 = (inst_34494 > (0));
var state_34522__$1 = state_34522;
if(cljs.core.truth_(inst_34495)){
var statearr_34531_34549 = state_34522__$1;
(statearr_34531_34549[(1)] = (4));

} else {
var statearr_34532_34550 = state_34522__$1;
(statearr_34532_34550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (11))){
var inst_34492 = (state_34522[(10)]);
var inst_34511 = (state_34522[(2)]);
var tmp34530 = inst_34492;
var inst_34492__$1 = tmp34530;
var state_34522__$1 = (function (){var statearr_34533 = state_34522;
(statearr_34533[(11)] = inst_34511);

(statearr_34533[(10)] = inst_34492__$1);

return statearr_34533;
})();
var statearr_34534_34551 = state_34522__$1;
(statearr_34534_34551[(2)] = null);

(statearr_34534_34551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (9))){
var inst_34502 = (state_34522[(8)]);
var state_34522__$1 = state_34522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34522__$1,(11),out,inst_34502);
} else {
if((state_val_34523 === (5))){
var inst_34516 = cljs.core.async.close_BANG_.call(null,out);
var state_34522__$1 = state_34522;
var statearr_34535_34552 = state_34522__$1;
(statearr_34535_34552[(2)] = inst_34516);

(statearr_34535_34552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (10))){
var inst_34514 = (state_34522[(2)]);
var state_34522__$1 = state_34522;
var statearr_34536_34553 = state_34522__$1;
(statearr_34536_34553[(2)] = inst_34514);

(statearr_34536_34553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34523 === (8))){
var inst_34503 = (state_34522[(9)]);
var inst_34501 = (state_34522[(7)]);
var inst_34502 = (state_34522[(8)]);
var inst_34492 = (state_34522[(10)]);
var inst_34506 = (function (){var cs = inst_34492;
var vec__34497 = inst_34501;
var v = inst_34502;
var c = inst_34503;
return ((function (cs,vec__34497,v,c,inst_34503,inst_34501,inst_34502,inst_34492,state_val_34523,c__33131__auto___34544,out){
return (function (p1__34488_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34488_SHARP_);
});
;})(cs,vec__34497,v,c,inst_34503,inst_34501,inst_34502,inst_34492,state_val_34523,c__33131__auto___34544,out))
})();
var inst_34507 = cljs.core.filterv.call(null,inst_34506,inst_34492);
var inst_34492__$1 = inst_34507;
var state_34522__$1 = (function (){var statearr_34537 = state_34522;
(statearr_34537[(10)] = inst_34492__$1);

return statearr_34537;
})();
var statearr_34538_34554 = state_34522__$1;
(statearr_34538_34554[(2)] = null);

(statearr_34538_34554[(1)] = (2));


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
});})(c__33131__auto___34544,out))
;
return ((function (switch__33041__auto__,c__33131__auto___34544,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34539[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34539[(1)] = (1));

return statearr_34539;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34522){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34540){if((e34540 instanceof Object)){
var ex__33045__auto__ = e34540;
var statearr_34541_34555 = state_34522;
(statearr_34541_34555[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34556 = state_34522;
state_34522 = G__34556;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34544,out))
})();
var state__33133__auto__ = (function (){var statearr_34542 = f__33132__auto__.call(null);
(statearr_34542[(6)] = c__33131__auto___34544);

return statearr_34542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34544,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34558 = arguments.length;
switch (G__34558) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___34603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34603,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34603,out){
return (function (state_34582){
var state_val_34583 = (state_34582[(1)]);
if((state_val_34583 === (7))){
var inst_34564 = (state_34582[(7)]);
var inst_34564__$1 = (state_34582[(2)]);
var inst_34565 = (inst_34564__$1 == null);
var inst_34566 = cljs.core.not.call(null,inst_34565);
var state_34582__$1 = (function (){var statearr_34584 = state_34582;
(statearr_34584[(7)] = inst_34564__$1);

return statearr_34584;
})();
if(inst_34566){
var statearr_34585_34604 = state_34582__$1;
(statearr_34585_34604[(1)] = (8));

} else {
var statearr_34586_34605 = state_34582__$1;
(statearr_34586_34605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (1))){
var inst_34559 = (0);
var state_34582__$1 = (function (){var statearr_34587 = state_34582;
(statearr_34587[(8)] = inst_34559);

return statearr_34587;
})();
var statearr_34588_34606 = state_34582__$1;
(statearr_34588_34606[(2)] = null);

(statearr_34588_34606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (4))){
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34582__$1,(7),ch);
} else {
if((state_val_34583 === (6))){
var inst_34577 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34589_34607 = state_34582__$1;
(statearr_34589_34607[(2)] = inst_34577);

(statearr_34589_34607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (3))){
var inst_34579 = (state_34582[(2)]);
var inst_34580 = cljs.core.async.close_BANG_.call(null,out);
var state_34582__$1 = (function (){var statearr_34590 = state_34582;
(statearr_34590[(9)] = inst_34579);

return statearr_34590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34582__$1,inst_34580);
} else {
if((state_val_34583 === (2))){
var inst_34559 = (state_34582[(8)]);
var inst_34561 = (inst_34559 < n);
var state_34582__$1 = state_34582;
if(cljs.core.truth_(inst_34561)){
var statearr_34591_34608 = state_34582__$1;
(statearr_34591_34608[(1)] = (4));

} else {
var statearr_34592_34609 = state_34582__$1;
(statearr_34592_34609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (11))){
var inst_34559 = (state_34582[(8)]);
var inst_34569 = (state_34582[(2)]);
var inst_34570 = (inst_34559 + (1));
var inst_34559__$1 = inst_34570;
var state_34582__$1 = (function (){var statearr_34593 = state_34582;
(statearr_34593[(8)] = inst_34559__$1);

(statearr_34593[(10)] = inst_34569);

return statearr_34593;
})();
var statearr_34594_34610 = state_34582__$1;
(statearr_34594_34610[(2)] = null);

(statearr_34594_34610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (9))){
var state_34582__$1 = state_34582;
var statearr_34595_34611 = state_34582__$1;
(statearr_34595_34611[(2)] = null);

(statearr_34595_34611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (5))){
var state_34582__$1 = state_34582;
var statearr_34596_34612 = state_34582__$1;
(statearr_34596_34612[(2)] = null);

(statearr_34596_34612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (10))){
var inst_34574 = (state_34582[(2)]);
var state_34582__$1 = state_34582;
var statearr_34597_34613 = state_34582__$1;
(statearr_34597_34613[(2)] = inst_34574);

(statearr_34597_34613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34583 === (8))){
var inst_34564 = (state_34582[(7)]);
var state_34582__$1 = state_34582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34582__$1,(11),out,inst_34564);
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
});})(c__33131__auto___34603,out))
;
return ((function (switch__33041__auto__,c__33131__auto___34603,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34598[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34598[(1)] = (1));

return statearr_34598;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34582){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34599){if((e34599 instanceof Object)){
var ex__33045__auto__ = e34599;
var statearr_34600_34614 = state_34582;
(statearr_34600_34614[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34615 = state_34582;
state_34582 = G__34615;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34582);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34603,out))
})();
var state__33133__auto__ = (function (){var statearr_34601 = f__33132__auto__.call(null);
(statearr_34601[(6)] = c__33131__auto___34603);

return statearr_34601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34603,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34617 = (function (f,ch,meta34618){
this.f = f;
this.ch = ch;
this.meta34618 = meta34618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34619,meta34618__$1){
var self__ = this;
var _34619__$1 = this;
return (new cljs.core.async.t_cljs$core$async34617(self__.f,self__.ch,meta34618__$1));
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34619){
var self__ = this;
var _34619__$1 = this;
return self__.meta34618;
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34620 = (function (f,ch,meta34618,_,fn1,meta34621){
this.f = f;
this.ch = ch;
this.meta34618 = meta34618;
this._ = _;
this.fn1 = fn1;
this.meta34621 = meta34621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34622,meta34621__$1){
var self__ = this;
var _34622__$1 = this;
return (new cljs.core.async.t_cljs$core$async34620(self__.f,self__.ch,self__.meta34618,self__._,self__.fn1,meta34621__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34622){
var self__ = this;
var _34622__$1 = this;
return self__.meta34621;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34616_SHARP_){
return f1.call(null,(((p1__34616_SHARP_ == null))?null:self__.f.call(null,p1__34616_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34618","meta34618",-499291493,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34617","cljs.core.async/t_cljs$core$async34617",1354297281,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34621","meta34621",-560904023,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34620";

cljs.core.async.t_cljs$core$async34620.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34620");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34620 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34620(f__$1,ch__$1,meta34618__$1,___$2,fn1__$1,meta34621){
return (new cljs.core.async.t_cljs$core$async34620(f__$1,ch__$1,meta34618__$1,___$2,fn1__$1,meta34621));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34620(self__.f,self__.ch,self__.meta34618,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30036__auto__ = ret;
if(cljs.core.truth_(and__30036__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34618","meta34618",-499291493,null)], null);
});

cljs.core.async.t_cljs$core$async34617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34617";

cljs.core.async.t_cljs$core$async34617.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34617");
});

cljs.core.async.__GT_t_cljs$core$async34617 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34617(f__$1,ch__$1,meta34618){
return (new cljs.core.async.t_cljs$core$async34617(f__$1,ch__$1,meta34618));
});

}

return (new cljs.core.async.t_cljs$core$async34617(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34623 = (function (f,ch,meta34624){
this.f = f;
this.ch = ch;
this.meta34624 = meta34624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34625,meta34624__$1){
var self__ = this;
var _34625__$1 = this;
return (new cljs.core.async.t_cljs$core$async34623(self__.f,self__.ch,meta34624__$1));
});

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34625){
var self__ = this;
var _34625__$1 = this;
return self__.meta34624;
});

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34624","meta34624",695064564,null)], null);
});

cljs.core.async.t_cljs$core$async34623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34623";

cljs.core.async.t_cljs$core$async34623.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34623");
});

cljs.core.async.__GT_t_cljs$core$async34623 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34623(f__$1,ch__$1,meta34624){
return (new cljs.core.async.t_cljs$core$async34623(f__$1,ch__$1,meta34624));
});

}

return (new cljs.core.async.t_cljs$core$async34623(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34626 = (function (p,ch,meta34627){
this.p = p;
this.ch = ch;
this.meta34627 = meta34627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34628,meta34627__$1){
var self__ = this;
var _34628__$1 = this;
return (new cljs.core.async.t_cljs$core$async34626(self__.p,self__.ch,meta34627__$1));
});

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34628){
var self__ = this;
var _34628__$1 = this;
return self__.meta34627;
});

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34627","meta34627",-2042983743,null)], null);
});

cljs.core.async.t_cljs$core$async34626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34626";

cljs.core.async.t_cljs$core$async34626.cljs$lang$ctorPrWriter = (function (this__30719__auto__,writer__30720__auto__,opt__30721__auto__){
return cljs.core._write.call(null,writer__30720__auto__,"cljs.core.async/t_cljs$core$async34626");
});

cljs.core.async.__GT_t_cljs$core$async34626 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34626(p__$1,ch__$1,meta34627){
return (new cljs.core.async.t_cljs$core$async34626(p__$1,ch__$1,meta34627));
});

}

return (new cljs.core.async.t_cljs$core$async34626(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34630 = arguments.length;
switch (G__34630) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___34670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34670,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34670,out){
return (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (7))){
var inst_34647 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34653_34671 = state_34651__$1;
(statearr_34653_34671[(2)] = inst_34647);

(statearr_34653_34671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (1))){
var state_34651__$1 = state_34651;
var statearr_34654_34672 = state_34651__$1;
(statearr_34654_34672[(2)] = null);

(statearr_34654_34672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (4))){
var inst_34633 = (state_34651[(7)]);
var inst_34633__$1 = (state_34651[(2)]);
var inst_34634 = (inst_34633__$1 == null);
var state_34651__$1 = (function (){var statearr_34655 = state_34651;
(statearr_34655[(7)] = inst_34633__$1);

return statearr_34655;
})();
if(cljs.core.truth_(inst_34634)){
var statearr_34656_34673 = state_34651__$1;
(statearr_34656_34673[(1)] = (5));

} else {
var statearr_34657_34674 = state_34651__$1;
(statearr_34657_34674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (6))){
var inst_34633 = (state_34651[(7)]);
var inst_34638 = p.call(null,inst_34633);
var state_34651__$1 = state_34651;
if(cljs.core.truth_(inst_34638)){
var statearr_34658_34675 = state_34651__$1;
(statearr_34658_34675[(1)] = (8));

} else {
var statearr_34659_34676 = state_34651__$1;
(statearr_34659_34676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (3))){
var inst_34649 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34651__$1,inst_34649);
} else {
if((state_val_34652 === (2))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34651__$1,(4),ch);
} else {
if((state_val_34652 === (11))){
var inst_34641 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34660_34677 = state_34651__$1;
(statearr_34660_34677[(2)] = inst_34641);

(statearr_34660_34677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (9))){
var state_34651__$1 = state_34651;
var statearr_34661_34678 = state_34651__$1;
(statearr_34661_34678[(2)] = null);

(statearr_34661_34678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (5))){
var inst_34636 = cljs.core.async.close_BANG_.call(null,out);
var state_34651__$1 = state_34651;
var statearr_34662_34679 = state_34651__$1;
(statearr_34662_34679[(2)] = inst_34636);

(statearr_34662_34679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (10))){
var inst_34644 = (state_34651[(2)]);
var state_34651__$1 = (function (){var statearr_34663 = state_34651;
(statearr_34663[(8)] = inst_34644);

return statearr_34663;
})();
var statearr_34664_34680 = state_34651__$1;
(statearr_34664_34680[(2)] = null);

(statearr_34664_34680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (8))){
var inst_34633 = (state_34651[(7)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34651__$1,(11),out,inst_34633);
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
});})(c__33131__auto___34670,out))
;
return ((function (switch__33041__auto__,c__33131__auto___34670,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34651){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34666){if((e34666 instanceof Object)){
var ex__33045__auto__ = e34666;
var statearr_34667_34681 = state_34651;
(statearr_34667_34681[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34682 = state_34651;
state_34651 = G__34682;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34670,out))
})();
var state__33133__auto__ = (function (){var statearr_34668 = f__33132__auto__.call(null);
(statearr_34668[(6)] = c__33131__auto___34670);

return statearr_34668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34670,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34684 = arguments.length;
switch (G__34684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33131__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto__){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto__){
return (function (state_34747){
var state_val_34748 = (state_34747[(1)]);
if((state_val_34748 === (7))){
var inst_34743 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34749_34787 = state_34747__$1;
(statearr_34749_34787[(2)] = inst_34743);

(statearr_34749_34787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (20))){
var inst_34713 = (state_34747[(7)]);
var inst_34724 = (state_34747[(2)]);
var inst_34725 = cljs.core.next.call(null,inst_34713);
var inst_34699 = inst_34725;
var inst_34700 = null;
var inst_34701 = (0);
var inst_34702 = (0);
var state_34747__$1 = (function (){var statearr_34750 = state_34747;
(statearr_34750[(8)] = inst_34724);

(statearr_34750[(9)] = inst_34700);

(statearr_34750[(10)] = inst_34699);

(statearr_34750[(11)] = inst_34702);

(statearr_34750[(12)] = inst_34701);

return statearr_34750;
})();
var statearr_34751_34788 = state_34747__$1;
(statearr_34751_34788[(2)] = null);

(statearr_34751_34788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (1))){
var state_34747__$1 = state_34747;
var statearr_34752_34789 = state_34747__$1;
(statearr_34752_34789[(2)] = null);

(statearr_34752_34789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (4))){
var inst_34688 = (state_34747[(13)]);
var inst_34688__$1 = (state_34747[(2)]);
var inst_34689 = (inst_34688__$1 == null);
var state_34747__$1 = (function (){var statearr_34753 = state_34747;
(statearr_34753[(13)] = inst_34688__$1);

return statearr_34753;
})();
if(cljs.core.truth_(inst_34689)){
var statearr_34754_34790 = state_34747__$1;
(statearr_34754_34790[(1)] = (5));

} else {
var statearr_34755_34791 = state_34747__$1;
(statearr_34755_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (15))){
var state_34747__$1 = state_34747;
var statearr_34759_34792 = state_34747__$1;
(statearr_34759_34792[(2)] = null);

(statearr_34759_34792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (21))){
var state_34747__$1 = state_34747;
var statearr_34760_34793 = state_34747__$1;
(statearr_34760_34793[(2)] = null);

(statearr_34760_34793[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (13))){
var inst_34700 = (state_34747[(9)]);
var inst_34699 = (state_34747[(10)]);
var inst_34702 = (state_34747[(11)]);
var inst_34701 = (state_34747[(12)]);
var inst_34709 = (state_34747[(2)]);
var inst_34710 = (inst_34702 + (1));
var tmp34756 = inst_34700;
var tmp34757 = inst_34699;
var tmp34758 = inst_34701;
var inst_34699__$1 = tmp34757;
var inst_34700__$1 = tmp34756;
var inst_34701__$1 = tmp34758;
var inst_34702__$1 = inst_34710;
var state_34747__$1 = (function (){var statearr_34761 = state_34747;
(statearr_34761[(9)] = inst_34700__$1);

(statearr_34761[(10)] = inst_34699__$1);

(statearr_34761[(11)] = inst_34702__$1);

(statearr_34761[(12)] = inst_34701__$1);

(statearr_34761[(14)] = inst_34709);

return statearr_34761;
})();
var statearr_34762_34794 = state_34747__$1;
(statearr_34762_34794[(2)] = null);

(statearr_34762_34794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (22))){
var state_34747__$1 = state_34747;
var statearr_34763_34795 = state_34747__$1;
(statearr_34763_34795[(2)] = null);

(statearr_34763_34795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (6))){
var inst_34688 = (state_34747[(13)]);
var inst_34697 = f.call(null,inst_34688);
var inst_34698 = cljs.core.seq.call(null,inst_34697);
var inst_34699 = inst_34698;
var inst_34700 = null;
var inst_34701 = (0);
var inst_34702 = (0);
var state_34747__$1 = (function (){var statearr_34764 = state_34747;
(statearr_34764[(9)] = inst_34700);

(statearr_34764[(10)] = inst_34699);

(statearr_34764[(11)] = inst_34702);

(statearr_34764[(12)] = inst_34701);

return statearr_34764;
})();
var statearr_34765_34796 = state_34747__$1;
(statearr_34765_34796[(2)] = null);

(statearr_34765_34796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (17))){
var inst_34713 = (state_34747[(7)]);
var inst_34717 = cljs.core.chunk_first.call(null,inst_34713);
var inst_34718 = cljs.core.chunk_rest.call(null,inst_34713);
var inst_34719 = cljs.core.count.call(null,inst_34717);
var inst_34699 = inst_34718;
var inst_34700 = inst_34717;
var inst_34701 = inst_34719;
var inst_34702 = (0);
var state_34747__$1 = (function (){var statearr_34766 = state_34747;
(statearr_34766[(9)] = inst_34700);

(statearr_34766[(10)] = inst_34699);

(statearr_34766[(11)] = inst_34702);

(statearr_34766[(12)] = inst_34701);

return statearr_34766;
})();
var statearr_34767_34797 = state_34747__$1;
(statearr_34767_34797[(2)] = null);

(statearr_34767_34797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (3))){
var inst_34745 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34747__$1,inst_34745);
} else {
if((state_val_34748 === (12))){
var inst_34733 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34768_34798 = state_34747__$1;
(statearr_34768_34798[(2)] = inst_34733);

(statearr_34768_34798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (2))){
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34747__$1,(4),in$);
} else {
if((state_val_34748 === (23))){
var inst_34741 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34769_34799 = state_34747__$1;
(statearr_34769_34799[(2)] = inst_34741);

(statearr_34769_34799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (19))){
var inst_34728 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34770_34800 = state_34747__$1;
(statearr_34770_34800[(2)] = inst_34728);

(statearr_34770_34800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (11))){
var inst_34713 = (state_34747[(7)]);
var inst_34699 = (state_34747[(10)]);
var inst_34713__$1 = cljs.core.seq.call(null,inst_34699);
var state_34747__$1 = (function (){var statearr_34771 = state_34747;
(statearr_34771[(7)] = inst_34713__$1);

return statearr_34771;
})();
if(inst_34713__$1){
var statearr_34772_34801 = state_34747__$1;
(statearr_34772_34801[(1)] = (14));

} else {
var statearr_34773_34802 = state_34747__$1;
(statearr_34773_34802[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (9))){
var inst_34735 = (state_34747[(2)]);
var inst_34736 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34747__$1 = (function (){var statearr_34774 = state_34747;
(statearr_34774[(15)] = inst_34735);

return statearr_34774;
})();
if(cljs.core.truth_(inst_34736)){
var statearr_34775_34803 = state_34747__$1;
(statearr_34775_34803[(1)] = (21));

} else {
var statearr_34776_34804 = state_34747__$1;
(statearr_34776_34804[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (5))){
var inst_34691 = cljs.core.async.close_BANG_.call(null,out);
var state_34747__$1 = state_34747;
var statearr_34777_34805 = state_34747__$1;
(statearr_34777_34805[(2)] = inst_34691);

(statearr_34777_34805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (14))){
var inst_34713 = (state_34747[(7)]);
var inst_34715 = cljs.core.chunked_seq_QMARK_.call(null,inst_34713);
var state_34747__$1 = state_34747;
if(inst_34715){
var statearr_34778_34806 = state_34747__$1;
(statearr_34778_34806[(1)] = (17));

} else {
var statearr_34779_34807 = state_34747__$1;
(statearr_34779_34807[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (16))){
var inst_34731 = (state_34747[(2)]);
var state_34747__$1 = state_34747;
var statearr_34780_34808 = state_34747__$1;
(statearr_34780_34808[(2)] = inst_34731);

(statearr_34780_34808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34748 === (10))){
var inst_34700 = (state_34747[(9)]);
var inst_34702 = (state_34747[(11)]);
var inst_34707 = cljs.core._nth.call(null,inst_34700,inst_34702);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34747__$1,(13),out,inst_34707);
} else {
if((state_val_34748 === (18))){
var inst_34713 = (state_34747[(7)]);
var inst_34722 = cljs.core.first.call(null,inst_34713);
var state_34747__$1 = state_34747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34747__$1,(20),out,inst_34722);
} else {
if((state_val_34748 === (8))){
var inst_34702 = (state_34747[(11)]);
var inst_34701 = (state_34747[(12)]);
var inst_34704 = (inst_34702 < inst_34701);
var inst_34705 = inst_34704;
var state_34747__$1 = state_34747;
if(cljs.core.truth_(inst_34705)){
var statearr_34781_34809 = state_34747__$1;
(statearr_34781_34809[(1)] = (10));

} else {
var statearr_34782_34810 = state_34747__$1;
(statearr_34782_34810[(1)] = (11));

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
});})(c__33131__auto__))
;
return ((function (switch__33041__auto__,c__33131__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____0 = (function (){
var statearr_34783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34783[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__);

(statearr_34783[(1)] = (1));

return statearr_34783;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____1 = (function (state_34747){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object)){
var ex__33045__auto__ = e34784;
var statearr_34785_34811 = state_34747;
(statearr_34785_34811[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34812 = state_34747;
state_34747 = G__34812;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__ = function(state_34747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____1.call(this,state_34747);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto__))
})();
var state__33133__auto__ = (function (){var statearr_34786 = f__33132__auto__.call(null);
(statearr_34786[(6)] = c__33131__auto__);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto__))
);

return c__33131__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34814 = arguments.length;
switch (G__34814) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34817 = arguments.length;
switch (G__34817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34820 = arguments.length;
switch (G__34820) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___34867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34867,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34867,out){
return (function (state_34844){
var state_val_34845 = (state_34844[(1)]);
if((state_val_34845 === (7))){
var inst_34839 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34846_34868 = state_34844__$1;
(statearr_34846_34868[(2)] = inst_34839);

(statearr_34846_34868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (1))){
var inst_34821 = null;
var state_34844__$1 = (function (){var statearr_34847 = state_34844;
(statearr_34847[(7)] = inst_34821);

return statearr_34847;
})();
var statearr_34848_34869 = state_34844__$1;
(statearr_34848_34869[(2)] = null);

(statearr_34848_34869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (4))){
var inst_34824 = (state_34844[(8)]);
var inst_34824__$1 = (state_34844[(2)]);
var inst_34825 = (inst_34824__$1 == null);
var inst_34826 = cljs.core.not.call(null,inst_34825);
var state_34844__$1 = (function (){var statearr_34849 = state_34844;
(statearr_34849[(8)] = inst_34824__$1);

return statearr_34849;
})();
if(inst_34826){
var statearr_34850_34870 = state_34844__$1;
(statearr_34850_34870[(1)] = (5));

} else {
var statearr_34851_34871 = state_34844__$1;
(statearr_34851_34871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (6))){
var state_34844__$1 = state_34844;
var statearr_34852_34872 = state_34844__$1;
(statearr_34852_34872[(2)] = null);

(statearr_34852_34872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (3))){
var inst_34841 = (state_34844[(2)]);
var inst_34842 = cljs.core.async.close_BANG_.call(null,out);
var state_34844__$1 = (function (){var statearr_34853 = state_34844;
(statearr_34853[(9)] = inst_34841);

return statearr_34853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34844__$1,inst_34842);
} else {
if((state_val_34845 === (2))){
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34844__$1,(4),ch);
} else {
if((state_val_34845 === (11))){
var inst_34824 = (state_34844[(8)]);
var inst_34833 = (state_34844[(2)]);
var inst_34821 = inst_34824;
var state_34844__$1 = (function (){var statearr_34854 = state_34844;
(statearr_34854[(10)] = inst_34833);

(statearr_34854[(7)] = inst_34821);

return statearr_34854;
})();
var statearr_34855_34873 = state_34844__$1;
(statearr_34855_34873[(2)] = null);

(statearr_34855_34873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (9))){
var inst_34824 = (state_34844[(8)]);
var state_34844__$1 = state_34844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34844__$1,(11),out,inst_34824);
} else {
if((state_val_34845 === (5))){
var inst_34824 = (state_34844[(8)]);
var inst_34821 = (state_34844[(7)]);
var inst_34828 = cljs.core._EQ_.call(null,inst_34824,inst_34821);
var state_34844__$1 = state_34844;
if(inst_34828){
var statearr_34857_34874 = state_34844__$1;
(statearr_34857_34874[(1)] = (8));

} else {
var statearr_34858_34875 = state_34844__$1;
(statearr_34858_34875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (10))){
var inst_34836 = (state_34844[(2)]);
var state_34844__$1 = state_34844;
var statearr_34859_34876 = state_34844__$1;
(statearr_34859_34876[(2)] = inst_34836);

(statearr_34859_34876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34845 === (8))){
var inst_34821 = (state_34844[(7)]);
var tmp34856 = inst_34821;
var inst_34821__$1 = tmp34856;
var state_34844__$1 = (function (){var statearr_34860 = state_34844;
(statearr_34860[(7)] = inst_34821__$1);

return statearr_34860;
})();
var statearr_34861_34877 = state_34844__$1;
(statearr_34861_34877[(2)] = null);

(statearr_34861_34877[(1)] = (2));


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
});})(c__33131__auto___34867,out))
;
return ((function (switch__33041__auto__,c__33131__auto___34867,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34862[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34862[(1)] = (1));

return statearr_34862;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34844){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34863){if((e34863 instanceof Object)){
var ex__33045__auto__ = e34863;
var statearr_34864_34878 = state_34844;
(statearr_34864_34878[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34879 = state_34844;
state_34844 = G__34879;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34844);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34867,out))
})();
var state__33133__auto__ = (function (){var statearr_34865 = f__33132__auto__.call(null);
(statearr_34865[(6)] = c__33131__auto___34867);

return statearr_34865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34867,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34881 = arguments.length;
switch (G__34881) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___34947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___34947,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___34947,out){
return (function (state_34919){
var state_val_34920 = (state_34919[(1)]);
if((state_val_34920 === (7))){
var inst_34915 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34921_34948 = state_34919__$1;
(statearr_34921_34948[(2)] = inst_34915);

(statearr_34921_34948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (1))){
var inst_34882 = (new Array(n));
var inst_34883 = inst_34882;
var inst_34884 = (0);
var state_34919__$1 = (function (){var statearr_34922 = state_34919;
(statearr_34922[(7)] = inst_34883);

(statearr_34922[(8)] = inst_34884);

return statearr_34922;
})();
var statearr_34923_34949 = state_34919__$1;
(statearr_34923_34949[(2)] = null);

(statearr_34923_34949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (4))){
var inst_34887 = (state_34919[(9)]);
var inst_34887__$1 = (state_34919[(2)]);
var inst_34888 = (inst_34887__$1 == null);
var inst_34889 = cljs.core.not.call(null,inst_34888);
var state_34919__$1 = (function (){var statearr_34924 = state_34919;
(statearr_34924[(9)] = inst_34887__$1);

return statearr_34924;
})();
if(inst_34889){
var statearr_34925_34950 = state_34919__$1;
(statearr_34925_34950[(1)] = (5));

} else {
var statearr_34926_34951 = state_34919__$1;
(statearr_34926_34951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (15))){
var inst_34909 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34927_34952 = state_34919__$1;
(statearr_34927_34952[(2)] = inst_34909);

(statearr_34927_34952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (13))){
var state_34919__$1 = state_34919;
var statearr_34928_34953 = state_34919__$1;
(statearr_34928_34953[(2)] = null);

(statearr_34928_34953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (6))){
var inst_34884 = (state_34919[(8)]);
var inst_34905 = (inst_34884 > (0));
var state_34919__$1 = state_34919;
if(cljs.core.truth_(inst_34905)){
var statearr_34929_34954 = state_34919__$1;
(statearr_34929_34954[(1)] = (12));

} else {
var statearr_34930_34955 = state_34919__$1;
(statearr_34930_34955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (3))){
var inst_34917 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34919__$1,inst_34917);
} else {
if((state_val_34920 === (12))){
var inst_34883 = (state_34919[(7)]);
var inst_34907 = cljs.core.vec.call(null,inst_34883);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34919__$1,(15),out,inst_34907);
} else {
if((state_val_34920 === (2))){
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34919__$1,(4),ch);
} else {
if((state_val_34920 === (11))){
var inst_34899 = (state_34919[(2)]);
var inst_34900 = (new Array(n));
var inst_34883 = inst_34900;
var inst_34884 = (0);
var state_34919__$1 = (function (){var statearr_34931 = state_34919;
(statearr_34931[(10)] = inst_34899);

(statearr_34931[(7)] = inst_34883);

(statearr_34931[(8)] = inst_34884);

return statearr_34931;
})();
var statearr_34932_34956 = state_34919__$1;
(statearr_34932_34956[(2)] = null);

(statearr_34932_34956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (9))){
var inst_34883 = (state_34919[(7)]);
var inst_34897 = cljs.core.vec.call(null,inst_34883);
var state_34919__$1 = state_34919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34919__$1,(11),out,inst_34897);
} else {
if((state_val_34920 === (5))){
var inst_34883 = (state_34919[(7)]);
var inst_34892 = (state_34919[(11)]);
var inst_34887 = (state_34919[(9)]);
var inst_34884 = (state_34919[(8)]);
var inst_34891 = (inst_34883[inst_34884] = inst_34887);
var inst_34892__$1 = (inst_34884 + (1));
var inst_34893 = (inst_34892__$1 < n);
var state_34919__$1 = (function (){var statearr_34933 = state_34919;
(statearr_34933[(12)] = inst_34891);

(statearr_34933[(11)] = inst_34892__$1);

return statearr_34933;
})();
if(cljs.core.truth_(inst_34893)){
var statearr_34934_34957 = state_34919__$1;
(statearr_34934_34957[(1)] = (8));

} else {
var statearr_34935_34958 = state_34919__$1;
(statearr_34935_34958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (14))){
var inst_34912 = (state_34919[(2)]);
var inst_34913 = cljs.core.async.close_BANG_.call(null,out);
var state_34919__$1 = (function (){var statearr_34937 = state_34919;
(statearr_34937[(13)] = inst_34912);

return statearr_34937;
})();
var statearr_34938_34959 = state_34919__$1;
(statearr_34938_34959[(2)] = inst_34913);

(statearr_34938_34959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (10))){
var inst_34903 = (state_34919[(2)]);
var state_34919__$1 = state_34919;
var statearr_34939_34960 = state_34919__$1;
(statearr_34939_34960[(2)] = inst_34903);

(statearr_34939_34960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34920 === (8))){
var inst_34883 = (state_34919[(7)]);
var inst_34892 = (state_34919[(11)]);
var tmp34936 = inst_34883;
var inst_34883__$1 = tmp34936;
var inst_34884 = inst_34892;
var state_34919__$1 = (function (){var statearr_34940 = state_34919;
(statearr_34940[(7)] = inst_34883__$1);

(statearr_34940[(8)] = inst_34884);

return statearr_34940;
})();
var statearr_34941_34961 = state_34919__$1;
(statearr_34941_34961[(2)] = null);

(statearr_34941_34961[(1)] = (2));


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
});})(c__33131__auto___34947,out))
;
return ((function (switch__33041__auto__,c__33131__auto___34947,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_34942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34942[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_34942[(1)] = (1));

return statearr_34942;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_34919){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_34919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e34943){if((e34943 instanceof Object)){
var ex__33045__auto__ = e34943;
var statearr_34944_34962 = state_34919;
(statearr_34944_34962[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34963 = state_34919;
state_34919 = G__34963;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_34919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_34919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___34947,out))
})();
var state__33133__auto__ = (function (){var statearr_34945 = f__33132__auto__.call(null);
(statearr_34945[(6)] = c__33131__auto___34947);

return statearr_34945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___34947,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34965 = arguments.length;
switch (G__34965) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33131__auto___35035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33131__auto___35035,out){
return (function (){
var f__33132__auto__ = (function (){var switch__33041__auto__ = ((function (c__33131__auto___35035,out){
return (function (state_35007){
var state_val_35008 = (state_35007[(1)]);
if((state_val_35008 === (7))){
var inst_35003 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35009_35036 = state_35007__$1;
(statearr_35009_35036[(2)] = inst_35003);

(statearr_35009_35036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (1))){
var inst_34966 = [];
var inst_34967 = inst_34966;
var inst_34968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35007__$1 = (function (){var statearr_35010 = state_35007;
(statearr_35010[(7)] = inst_34968);

(statearr_35010[(8)] = inst_34967);

return statearr_35010;
})();
var statearr_35011_35037 = state_35007__$1;
(statearr_35011_35037[(2)] = null);

(statearr_35011_35037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (4))){
var inst_34971 = (state_35007[(9)]);
var inst_34971__$1 = (state_35007[(2)]);
var inst_34972 = (inst_34971__$1 == null);
var inst_34973 = cljs.core.not.call(null,inst_34972);
var state_35007__$1 = (function (){var statearr_35012 = state_35007;
(statearr_35012[(9)] = inst_34971__$1);

return statearr_35012;
})();
if(inst_34973){
var statearr_35013_35038 = state_35007__$1;
(statearr_35013_35038[(1)] = (5));

} else {
var statearr_35014_35039 = state_35007__$1;
(statearr_35014_35039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (15))){
var inst_34997 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35015_35040 = state_35007__$1;
(statearr_35015_35040[(2)] = inst_34997);

(statearr_35015_35040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (13))){
var state_35007__$1 = state_35007;
var statearr_35016_35041 = state_35007__$1;
(statearr_35016_35041[(2)] = null);

(statearr_35016_35041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (6))){
var inst_34967 = (state_35007[(8)]);
var inst_34992 = inst_34967.length;
var inst_34993 = (inst_34992 > (0));
var state_35007__$1 = state_35007;
if(cljs.core.truth_(inst_34993)){
var statearr_35017_35042 = state_35007__$1;
(statearr_35017_35042[(1)] = (12));

} else {
var statearr_35018_35043 = state_35007__$1;
(statearr_35018_35043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (3))){
var inst_35005 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35007__$1,inst_35005);
} else {
if((state_val_35008 === (12))){
var inst_34967 = (state_35007[(8)]);
var inst_34995 = cljs.core.vec.call(null,inst_34967);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35007__$1,(15),out,inst_34995);
} else {
if((state_val_35008 === (2))){
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35007__$1,(4),ch);
} else {
if((state_val_35008 === (11))){
var inst_34971 = (state_35007[(9)]);
var inst_34975 = (state_35007[(10)]);
var inst_34985 = (state_35007[(2)]);
var inst_34986 = [];
var inst_34987 = inst_34986.push(inst_34971);
var inst_34967 = inst_34986;
var inst_34968 = inst_34975;
var state_35007__$1 = (function (){var statearr_35019 = state_35007;
(statearr_35019[(11)] = inst_34985);

(statearr_35019[(7)] = inst_34968);

(statearr_35019[(8)] = inst_34967);

(statearr_35019[(12)] = inst_34987);

return statearr_35019;
})();
var statearr_35020_35044 = state_35007__$1;
(statearr_35020_35044[(2)] = null);

(statearr_35020_35044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (9))){
var inst_34967 = (state_35007[(8)]);
var inst_34983 = cljs.core.vec.call(null,inst_34967);
var state_35007__$1 = state_35007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35007__$1,(11),out,inst_34983);
} else {
if((state_val_35008 === (5))){
var inst_34971 = (state_35007[(9)]);
var inst_34975 = (state_35007[(10)]);
var inst_34968 = (state_35007[(7)]);
var inst_34975__$1 = f.call(null,inst_34971);
var inst_34976 = cljs.core._EQ_.call(null,inst_34975__$1,inst_34968);
var inst_34977 = cljs.core.keyword_identical_QMARK_.call(null,inst_34968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34978 = (inst_34976) || (inst_34977);
var state_35007__$1 = (function (){var statearr_35021 = state_35007;
(statearr_35021[(10)] = inst_34975__$1);

return statearr_35021;
})();
if(cljs.core.truth_(inst_34978)){
var statearr_35022_35045 = state_35007__$1;
(statearr_35022_35045[(1)] = (8));

} else {
var statearr_35023_35046 = state_35007__$1;
(statearr_35023_35046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (14))){
var inst_35000 = (state_35007[(2)]);
var inst_35001 = cljs.core.async.close_BANG_.call(null,out);
var state_35007__$1 = (function (){var statearr_35025 = state_35007;
(statearr_35025[(13)] = inst_35000);

return statearr_35025;
})();
var statearr_35026_35047 = state_35007__$1;
(statearr_35026_35047[(2)] = inst_35001);

(statearr_35026_35047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (10))){
var inst_34990 = (state_35007[(2)]);
var state_35007__$1 = state_35007;
var statearr_35027_35048 = state_35007__$1;
(statearr_35027_35048[(2)] = inst_34990);

(statearr_35027_35048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35008 === (8))){
var inst_34971 = (state_35007[(9)]);
var inst_34975 = (state_35007[(10)]);
var inst_34967 = (state_35007[(8)]);
var inst_34980 = inst_34967.push(inst_34971);
var tmp35024 = inst_34967;
var inst_34967__$1 = tmp35024;
var inst_34968 = inst_34975;
var state_35007__$1 = (function (){var statearr_35028 = state_35007;
(statearr_35028[(14)] = inst_34980);

(statearr_35028[(7)] = inst_34968);

(statearr_35028[(8)] = inst_34967__$1);

return statearr_35028;
})();
var statearr_35029_35049 = state_35007__$1;
(statearr_35029_35049[(2)] = null);

(statearr_35029_35049[(1)] = (2));


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
});})(c__33131__auto___35035,out))
;
return ((function (switch__33041__auto__,c__33131__auto___35035,out){
return (function() {
var cljs$core$async$state_machine__33042__auto__ = null;
var cljs$core$async$state_machine__33042__auto____0 = (function (){
var statearr_35030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35030[(0)] = cljs$core$async$state_machine__33042__auto__);

(statearr_35030[(1)] = (1));

return statearr_35030;
});
var cljs$core$async$state_machine__33042__auto____1 = (function (state_35007){
while(true){
var ret_value__33043__auto__ = (function (){try{while(true){
var result__33044__auto__ = switch__33041__auto__.call(null,state_35007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33044__auto__;
}
break;
}
}catch (e35031){if((e35031 instanceof Object)){
var ex__33045__auto__ = e35031;
var statearr_35032_35050 = state_35007;
(statearr_35032_35050[(5)] = ex__33045__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35051 = state_35007;
state_35007 = G__35051;
continue;
} else {
return ret_value__33043__auto__;
}
break;
}
});
cljs$core$async$state_machine__33042__auto__ = function(state_35007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33042__auto____1.call(this,state_35007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33042__auto____0;
cljs$core$async$state_machine__33042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33042__auto____1;
return cljs$core$async$state_machine__33042__auto__;
})()
;})(switch__33041__auto__,c__33131__auto___35035,out))
})();
var state__33133__auto__ = (function (){var statearr_35033 = f__33132__auto__.call(null);
(statearr_35033[(6)] = c__33131__auto___35035);

return statearr_35033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33133__auto__);
});})(c__33131__auto___35035,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1508469654220
