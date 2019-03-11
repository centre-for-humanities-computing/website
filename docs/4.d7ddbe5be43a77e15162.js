webpackJsonp([4],{IDfc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("Xo5g"),n={name:"Person",data:function(){return{avatarSize:120}},props:{name:{type:String,required:!0},title:{type:String,required:!0},src:{type:String},specializations:{type:Array},functions:{type:Array}},computed:{bodyTitle:function(){return'<span class="name">'+this.name+'</span> (<span class="prefix">'+this.title+"</span>)"},bodySubtitle:function(){var t="";return this.functions&&this.functions.length&&(t='<span class="job">'+this.functions.join('</span>, <span class="job">')+"</span>"),t},bodyBody:function(){var t="";return this.specializations&&this.specializations.length&&(t='<span class="specialization">'+this.specializations.join('</span>, <span class="specialization">')+"</span>"),t}},methods:{setAvatarSize:function(){this.avatarSize=Math.min(Math.max(28,window.innerWidth/8),400)}},components:{ABadge:i.a,ABody:i.b},mounted:function(){var t=this;this.$nextTick(function(){window.addEventListener("resize",t.setAvatarSize),t.setAvatarSize()})},updated:function(){var t=this;this.$nextTick(function(){t.setAvatarSize()})}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"person"},[e("v-layout",{attrs:{row:""}},[e("v-flex",{attrs:{xs3:"",lg2:""}},[e("v-card-title",{attrs:{"primary-title":""}},[e("a-badge",{attrs:{color:"grey lighten-4",src:this.src,size:this.avatarSize}})],1)],1),this._v(" "),e("v-flex",{attrs:{xs9:"",lg10:""}},[e("a-body",{attrs:{title:this.bodyTitle,subtitle:this.bodySubtitle,body:this.bodyBody}})],1)],1)],1)},staticRenderFns:[]};var a={name:"People",computed:{people:{get:function(){var t=this._.clone(this.$store.state.people.cards);return function(t){for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),i=[t[s],t[e]];t[e]=i[0],t[s]=i[1]}}(t),t}}},components:{Person:s("VU/8")(n,r,!1,function(t){s("zIVl")},null,null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"grid"},this._l(this.people,function(t,s){return e("person",{key:s,attrs:{title:t.title,name:t.name,src:t.src,specializations:t.specializations,functions:t.functions}})}),1)},staticRenderFns:[]},l=s("VU/8")(a,o,!1,null,null,null);e.default=l.exports},Xo5g:function(t,e,s){"use strict";var i={name:"Badge",props:{src:{type:String},size:{type:Number,default:96},defaultIcon:{type:String,default:"person"}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-avatar",{attrs:{size:this.size,color:"grey lighten-4"}},[this.src?e("img",{attrs:{src:this.src}}):e("v-icon",{attrs:{size:this.size}},[this._v(this._s(this.defaultIcon))])],1)},staticRenderFns:[]},r=s("VU/8")(i,n,!1,null,null,null).exports,a={name:"Body",props:{title:{type:String,required:!0},subtitle:{type:String},body:{type:String,required:!0}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{"full-height":"",fluid:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-card-text",[s("div",{staticClass:"heading"},[s("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.subtitle?s("div",[s("em",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.subtitle)}})]):t._e()]),t._v(" "),s("p",{staticClass:"body",attrs:{"mt-8":""},domProps:{innerHTML:t._s(t.body)}})])],1)],1)},staticRenderFns:[]},l=s("VU/8")(a,o,!1,null,null,null).exports;s.d(e,"a",function(){return c}),s.d(e,"b",function(){return u});var c=r,u=l},zIVl:function(t,e){}});
//# sourceMappingURL=4.d7ddbe5be43a77e15162.js.map