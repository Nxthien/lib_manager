!function(t,e,n){"function"==typeof define&&define.amd?define(["jquery"],function(o){return n(o,t,e),o.mobile}):n(t.jQuery,t,e)}(this,document,function(t,e,n){!function(t,e,n,o){function i(t){for(;t&&"undefined"!=typeof t.originalEvent;)t=t.originalEvent;return t}function r(e,n){var r,s,a,c,u,l,h,p,d,v=e.type;if(e=t.Event(e),e.type=n,r=e.originalEvent,s=t.event.props,v.search(/^(mouse|click)/)>-1&&(s=S),r)for(h=s.length;h;)c=s[--h],e[c]=r[c];if(v.search(/mouse(down|up)|click/)>-1&&!e.which&&(e.which=1),-1!==v.search(/^touch/)&&(a=i(r),v=a.touches,u=a.changedTouches,l=v&&v.length?v[0]:u&&u.length?u[0]:o))for(p=0,d=M.length;d>p;p++)c=M[p],e[c]=l[c];return e}function s(e){for(var n,o,i={};e;){n=t.data(e,k);for(o in n)n[o]&&(i[o]=i.hasVirtualBinding=!0);e=e.parentNode}return i}function a(e,n){for(var o;e;){if((o=t.data(e,k))&&(!n||o[n]))return e;e=e.parentNode}return null}function c(){H=!1}function u(){H=!0}function l(){Q=0,z.length=0,F=!1,u()}function h(){c()}function p(){d(),x=setTimeout(function(){x=0,l()},t.vmouse.resetTimerDuration)}function d(){x&&(clearTimeout(x),x=0)}function v(e,n,o){var i;return(o&&o[e]||!o&&a(n.target,e))&&(i=r(n,e),t(n.target).trigger(i)),i}function f(e){var n=t.data(e.target,X);if(!(F||Q&&Q===n)){var o=v("v"+e.type,e);o&&(o.isDefaultPrevented()&&e.preventDefault(),o.isPropagationStopped()&&e.stopPropagation(),o.isImmediatePropagationStopped()&&e.stopImmediatePropagation())}}function m(e){var n,o,r=i(e).touches;if(r&&1===r.length&&(n=e.target,(o=s(n)).hasVirtualBinding)){Q=q++,t.data(n,X,Q),d(),h(),j=!1;var a=i(e).touches[0];B=a.pageX,N=a.pageY,v("vmouseover",e,o),v("vmousedown",e,o)}}function g(t){H||(j||v("vmousecancel",t,s(t.target)),j=!0,p())}function b(e){if(!H){var n=i(e).touches[0],o=j,r=t.vmouse.moveDistanceThreshold,a=s(e.target);(j=j||Math.abs(n.pageX-B)>r||Math.abs(n.pageY-N)>r)&&!o&&v("vmousecancel",e,a),v("vmousemove",e,a),p()}}function w(t){if(!H){u();var e,n=s(t.target);if(v("vmouseup",t,n),!j){var o=v("vclick",t,n);o&&o.isDefaultPrevented()&&(e=i(t).changedTouches[0],z.push({touchID:Q,x:e.clientX,y:e.clientY}),F=!0)}v("vmouseout",t,n),j=!1,p()}}function T(e){var n,o=t.data(e,k);if(o)for(n in o)if(o[n])return!0;return!1}function D(){}function y(e){var n=e.substr(1);return{setup:function(){T(this)||t.data(this,k,{});t.data(this,k)[e]=!0,I[e]=(I[e]||0)+1,1===I[e]&&V.bind(n,f),t(this).bind(n,D),L&&(I.touchstart=(I.touchstart||0)+1,1===I.touchstart&&V.bind("touchstart",m).bind("touchend",w).bind("touchmove",b).bind("scroll",g))},teardown:function(){--I[e],I[e]||V.unbind(n,f),L&&(--I.touchstart,I.touchstart||V.unbind("touchstart",m).unbind("touchmove",b).unbind("touchend",w).unbind("scroll",g));var o=t(this),i=t.data(this,k);i&&(i[e]=!1),o.unbind(n,D),T(this)||o.removeData(k)}}}var E,k="virtualMouseBindings",X="virtualTouchID",Y="vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),M="clientX clientY pageX pageY screenX screenY".split(" "),P=t.event.mouseHooks?t.event.mouseHooks.props:[],S=t.event.props.concat(P),I={},x=0,B=0,N=0,j=!1,z=[],F=!1,H=!1,L="addEventListener"in n,V=t(n),q=1,Q=0;t.vmouse={moveDistanceThreshold:10,clickDistanceThreshold:10,resetTimerDuration:1500};for(var A=0;A<Y.length;A++)t.event.special[Y[A]]=y(Y[A]);L&&n.addEventListener("click",function(e){var n,o,i,r,s,a=z.length,c=e.target;if(a)for(n=e.clientX,o=e.clientY,E=t.vmouse.clickDistanceThreshold,i=c;i;){for(r=0;a>r;r++)if(s=z[r],0,i===c&&Math.abs(s.x-n)<E&&Math.abs(s.y-o)<E||t.data(i,X)===s.touchID)return e.preventDefault(),void e.stopPropagation();i=i.parentNode}},!0)}(t,0,n),t.mobile={},function(t){var e={touch:"ontouchend"in n};t.mobile.support=t.mobile.support||{},t.extend(t.support,e),t.extend(t.mobile.support,e)}(t),function(t,e,o){function i(e,n,o){var i=o.type;o.type=n,t.event.dispatch.call(e,o),o.type=i}var r=t(n);t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "),function(e,n){t.fn[n]=function(t){return t?this.bind(n,t):this.trigger(n)},t.attrFn&&(t.attrFn[n]=!0)});var s=t.mobile.support.touch,a="touchmove scroll",c=s?"touchstart":"mousedown",u=s?"touchend":"mouseup",l=s?"touchmove":"mousemove";t.event.special.scrollstart={enabled:!0,setup:function(){function e(t,e){i(r,(n=e)?"scrollstart":"scrollstop",t)}var n,o,r=this;t(r).bind(a,function(i){t.event.special.scrollstart.enabled&&(n||e(i,!0),clearTimeout(o),o=setTimeout(function(){e(i,!1)},50))})}},t.event.special.tap={tapholdThreshold:750,setup:function(){var e=this,n=t(e);n.bind("vmousedown",function(o){function s(){clearTimeout(u)}function a(){s(),n.unbind("vclick",c).unbind("vmouseup",s),r.unbind("vmousecancel",a)}function c(t){a(),l===t.target&&i(e,"tap",t)}if(o.which&&1!==o.which)return!1;var u,l=o.target;o.originalEvent,n.bind("vmouseup",s).bind("vclick",c),r.bind("vmousecancel",a),u=setTimeout(function(){i(e,"taphold",t.Event("taphold",{target:l}))},t.event.special.tap.tapholdThreshold)})}},t.event.special.swipe={scrollSupressionThreshold:30,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,start:function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e;return{time:(new Date).getTime(),coords:[n.pageX,n.pageY],origin:t(e.target)}},stop:function(t){var e=t.originalEvent.touches?t.originalEvent.touches[0]:t;return{time:(new Date).getTime(),coords:[e.pageX,e.pageY]}},handleSwipe:function(e,n){n.time-e.time<t.event.special.swipe.durationThreshold&&Math.abs(e.coords[0]-n.coords[0])>t.event.special.swipe.horizontalDistanceThreshold&&Math.abs(e.coords[1]-n.coords[1])<t.event.special.swipe.verticalDistanceThreshold&&e.origin.trigger("swipe").trigger(e.coords[0]>n.coords[0]?"swipeleft":"swiperight")},setup:function(){var e=t(this);e.bind(c,function(n){function i(e){s&&(r=t.event.special.swipe.stop(e),Math.abs(s.coords[0]-r.coords[0])>t.event.special.swipe.scrollSupressionThreshold&&e.preventDefault())}var r,s=t.event.special.swipe.start(n);e.bind(l,i).one(u,function(){e.unbind(l,i),s&&r&&t.event.special.swipe.handleSwipe(s,r),s=r=o})})}},t.each({scrollstop:"scrollstart",taphold:"tap",swipeleft:"swipe",swiperight:"swipe"},function(e,n){t.event.special[e]={setup:function(){t(this).bind(n,t.noop)}}})}(t)});