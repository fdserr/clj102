// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.interpreter');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('goog.object');
goog.require('cljsjs.react');

/**
 * @interface
 */
sablono.interpreter.IInterpreter = function(){};

/**
 * Interpret a Clojure data structure as a React fn call.
 */
sablono.interpreter.interpret = (function sablono$interpreter$interpret(this$){
if((!((this$ == null))) && (!((this$.sablono$interpreter$IInterpreter$interpret$arity$1 == null)))){
return this$.sablono$interpreter$IInterpreter$interpret$arity$1(this$);
} else {
var x__30781__auto__ = (((this$ == null))?null:this$);
var m__30782__auto__ = (sablono.interpreter.interpret[goog.typeOf(x__30781__auto__)]);
if(!((m__30782__auto__ == null))){
return m__30782__auto__.call(null,this$);
} else {
var m__30782__auto____$1 = (sablono.interpreter.interpret["_"]);
if(!((m__30782__auto____$1 == null))){
return m__30782__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IInterpreter.interpret",this$);
}
}
}
});

/**
 * Updates the state of the wrapped input element.
 */
sablono.interpreter.update_state = (function sablono$interpreter$update_state(component,next_props,property,value){
var next_state = ({});
goog.object.extend(next_state,next_props,({"onChange": goog.object.get(component,"onChange")}));

goog.object.set(next_state,property,value);

return component.setState(next_state);
});
sablono.interpreter.wrap_form_element = (function sablono$interpreter$wrap_form_element(element,property){
return React.createClass(({"displayName": ["wrapped-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(element)].join(''), "getInitialState": (function (){
var this$ = this;
var state = ({});
goog.object.extend(state,this$.props,({"onChange": goog.object.get(this$,"onChange")}));

return state;
}), "onChange": (function (event){
var this$ = this;
var temp__5278__auto__ = this$.props.onChange;
if(cljs.core.truth_(temp__5278__auto__)){
var handler = temp__5278__auto__;
handler.call(null,event);

return sablono.interpreter.update_state.call(null,this$,this$.props,property,goog.object.getValueByKeys(event,"target",property));
} else {
return null;
}
}), "componentWillReceiveProps": (function (new_props){
var this$ = this;
var state_value = goog.object.getValueByKeys(this$,"state",property);
var element_value = goog.object.get(ReactDOM.findDOMNode(this$),property);
if(cljs.core.not_EQ_.call(null,state_value,element_value)){
return sablono.interpreter.update_state.call(null,this$,new_props,property,element_value);
} else {
return sablono.interpreter.update_state.call(null,this$,new_props,property,goog.object.get(new_props,property));
}
}), "render": (function (){
var this$ = this;
return React.createElement(element,this$.state);
})}));
});
sablono.interpreter.wrapped_input = sablono.interpreter.wrap_form_element.call(null,"input","value");
sablono.interpreter.wrapped_checked = sablono.interpreter.wrap_form_element.call(null,"input","checked");
sablono.interpreter.wrapped_select = sablono.interpreter.wrap_form_element.call(null,"select","value");
sablono.interpreter.wrapped_textarea = sablono.interpreter.wrap_form_element.call(null,"textarea","value");
/**
 * Returns true if `type` and `props` are used a controlled input,
 *   otherwise false.
 */
sablono.interpreter.controlled_input_QMARK_ = (function sablono$interpreter$controlled_input_QMARK_(type,props){
var and__30036__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__30036__auto__){
var G__37392 = type;
switch (G__37392) {
case "input":
return (typeof props.checked !== 'undefined') || (typeof props.value !== 'undefined');

break;
case "select":
return typeof props.value !== 'undefined';

break;
case "textarea":
return typeof props.value !== 'undefined';

break;
default:
return false;

}
} else {
return and__30036__auto__;
}
});
/**
 * Returns either `type` or a wrapped element for controlled
 *   inputs.
 */
sablono.interpreter.element_class = (function sablono$interpreter$element_class(type,props){
if(sablono.interpreter.controlled_input_QMARK_.call(null,type,props)){
var G__37394 = type;
switch (G__37394) {
case "input":
var G__37395 = (function (){var and__30036__auto__ = cljs.core.object_QMARK_.call(null,props);
if(and__30036__auto__){
return props.type;
} else {
return and__30036__auto__;
}
})();
switch (G__37395) {
case "radio":
return sablono.interpreter.wrapped_checked;

break;
case "checkbox":
return sablono.interpreter.wrapped_checked;

break;
default:
return sablono.interpreter.wrapped_input;

}

break;
case "select":
return sablono.interpreter.wrapped_select;

break;
case "textarea":
return sablono.interpreter.wrapped_textarea;

break;
default:
return type;

}
} else {
return type;
}
});
sablono.interpreter.create_element = (function sablono$interpreter$create_element(var_args){
var args__31332__auto__ = [];
var len__31325__auto___37401 = arguments.length;
var i__31326__auto___37402 = (0);
while(true){
if((i__31326__auto___37402 < len__31325__auto___37401)){
args__31332__auto__.push((arguments[i__31326__auto___37402]));

var G__37403 = (i__31326__auto___37402 + (1));
i__31326__auto___37402 = G__37403;
continue;
} else {
}
break;
}

var argseq__31333__auto__ = ((((2) < args__31332__auto__.length))?(new cljs.core.IndexedSeq(args__31332__auto__.slice((2)),(0),null)):null);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31333__auto__);
});

sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,children){
var class$ = sablono.interpreter.element_class.call(null,type,props);
var children__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,children);
if(cljs.core.empty_QMARK_.call(null,children__$1)){
return React.createElement(class$,props);
} else {
return cljs.core.apply.call(null,React.createElement,class$,props,children__$1);
}
});

sablono.interpreter.create_element.cljs$lang$maxFixedArity = (2);

sablono.interpreter.create_element.cljs$lang$applyTo = (function (seq37398){
var G__37399 = cljs.core.first.call(null,seq37398);
var seq37398__$1 = cljs.core.next.call(null,seq37398);
var G__37400 = cljs.core.first.call(null,seq37398__$1);
var seq37398__$2 = cljs.core.next.call(null,seq37398__$1);
return sablono.interpreter.create_element.cljs$core$IFn$_invoke$arity$variadic(G__37399,G__37400,seq37398__$2);
});

sablono.interpreter.attributes = (function sablono$interpreter$attributes(attrs){
var temp__5278__auto__ = cljs.core.clj__GT_js.call(null,sablono.util.html_to_dom_attrs.call(null,attrs));
if(cljs.core.truth_(temp__5278__auto__)){
var js_attrs = temp__5278__auto__;
var class$ = js_attrs.className;
var class$__$1 = ((cljs.core.array_QMARK_.call(null,class$))?clojure.string.join.call(null," ",class$):class$);
if(clojure.string.blank_QMARK_.call(null,class$__$1)){
delete js_attrs["className"];
} else {
js_attrs.className = class$__$1;
}

return js_attrs;
} else {
return null;
}
});
/**
 * Interpret the seq `x` as HTML elements.
 */
sablono.interpreter.interpret_seq = (function sablono$interpreter$interpret_seq(x){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,sablono.interpreter.interpret),x);
});
/**
 * Render an element vector as a HTML element.
 */
sablono.interpreter.element = (function sablono$interpreter$element(element){
var vec__37404 = sablono.normalize.element.call(null,element);
var type = cljs.core.nth.call(null,vec__37404,(0),null);
var attrs = cljs.core.nth.call(null,vec__37404,(1),null);
var content = cljs.core.nth.call(null,vec__37404,(2),null);
return cljs.core.apply.call(null,sablono.interpreter.create_element,type,sablono.interpreter.attributes.call(null,attrs),sablono.interpreter.interpret_seq.call(null,content));
});
/**
 * Interpret the vector `x` as an HTML element or a the children of
 *   an element.
 */
sablono.interpreter.interpret_vec = (function sablono$interpreter$interpret_vec(x){
if(cljs.core.truth_(sablono.util.element_QMARK_.call(null,x))){
return sablono.interpreter.element.call(null,x);
} else {
return sablono.interpreter.interpret_seq.call(null,x);
}
});
cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Cons.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.ChunkedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.List.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.IndexedSeq.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_seq.call(null,this$__$1);
});

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Subvec.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.sablono$interpreter$IInterpreter$interpret$arity$1 = (function (this$){
var this$__$1 = this;
return sablono.interpreter.interpret_vec.call(null,this$__$1);
});

goog.object.set(sablono.interpreter.IInterpreter,"_",true);

goog.object.set(sablono.interpreter.interpret,"_",(function (this$){
return this$;
}));

goog.object.set(sablono.interpreter.IInterpreter,"null",true);

goog.object.set(sablono.interpreter.interpret,"null",(function (this$){
return null;
}));

//# sourceMappingURL=interpreter.js.map?rel=1508469658186
