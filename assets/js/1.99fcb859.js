(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{142:function(t,e,i){},143:function(t,e,i){!function(e){var i={src:"https://platform.twitter.com/widgets.js",loading:!1,listeners:[],interval:50,load:function(t){var i=this;if(t&&this.listeners.push(t),e.twttr&&e.twttr.widgets)setTimeout(function(){i._done()});else if(!this.loading){this.loading=!0;var n=document.createElement("script");n.type="text/javascript",n.src=this.src,n.addEventListener("error",function(){i._done(new Error("Twitter widgets JS failed to load. Is there an ad blocker enabled?"))}),document.body.appendChild(n),this._poll()}},_poll:function(){if(e.twttr&&e.twttr.widgets)return this._done();var t=this;setTimeout(function(){t._poll()},this.interval)},_done:function(t){for(;this.listeners.length;)this.listeners.pop()(t,e.twttr)}};t.exports?t.exports=i:e.TwitterWidgetsLoader=i}(window)},144:function(t,e,i){"use strict";var n=i(142);i.n(n).a},146:function(t,e,i){"use strict";i.r(e);var n=i(143),s={name:"DudeTweets",mounted:function(){n.load(function(t,e){t||e.widgets.createTimeline({url:"https://twiter.com/hashtag/jointhedude"},document.getElementById("feed"))})}},r=(i(144),i(0)),o=Object(r.a)(s,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"twitter border-1 border-dude-blue rounded"},[e("a",{staticClass:"twitter-timeline",attrs:{id:"feed",href:"https://twitter.com/hashtag/JoinTheDude","data-widget-id":"666335403570393090"}},[this._v("#JoinTheDude Tweets")])])}],!1,null,null,null);o.options.__file="DudeTweets.vue";e.default=o.exports}}]);