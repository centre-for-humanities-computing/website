webpackJsonp([3],{"8J2w":function(t,e){},T6IS:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"Clock",data:function(){return{timestamp:this.moment(),interval:null}},computed:{secondDegrees:function(){return 6*this.timestamp.seconds()},minuteDegrees:function(){return 6*this.timestamp.minutes()+this.secondDegrees/60},hourDegrees:function(){return this.timestamp.hours()%12/12*360+90+this.minuteDegrees/12},secondTransform:function(){return{transform:"rotate("+this.secondDegrees+"deg)"}},minuteTransform:function(){return{transform:"rotate("+this.minuteDegrees+"deg)"}},hourTransform:function(){return{transform:"rotate("+this.hourDegrees+"deg)"}}},mounted:function(){var t=this;this.interval=setInterval(function(){t.timestamp=t.moment()},1e3)}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clock"},[e("div",{staticClass:"circle"},[e("div",{staticClass:"face"},[e("div",{staticClass:"hour",style:this.hourTransform}),this._v(" "),e("div",{staticClass:"minute",style:this.minuteTransform}),this._v(" "),e("div",{staticClass:"second",style:this.secondTransform})])])])},staticRenderFns:[]};var i={name:"Stream",components:{Clock:s("VU/8")(n,r,!1,function(t){s("8J2w")},"data-v-8336e536",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"stream"},[e("v-container",[e("v-layout",{attrs:{"align-center":""}},[e("v-flex",{attrs:{"offset-xs4":"",xs4:""}},[e("v-card",{attrs:{color:"grey lighten-4"}},[e("v-card-text",[e("clock")],1)],1)],1)],1),this._v(" "),e("v-layout",{staticStyle:{height:"200px"},attrs:{"align-center":""}},[e("v-flex",{attrs:{xs12:""}},[e("v-card",[e("v-card-title",[e("h1",[this._v("API Streams coming soon...")])])],1)],1)],1)],1)],1)},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("bs8y")},"data-v-21091fe6",null);e.default=o.exports},bs8y:function(t,e){}});
//# sourceMappingURL=3.fc0b7ac78247d0d56555.js.map