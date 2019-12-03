(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(_,v,e){"use strict";e.r(v);var t=e(0),a=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"http-缓存机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存机制","aria-hidden":"true"}},[_._v("#")]),_._v(" HTTP 缓存机制")]),_._v(" "),e("p",[_._v("缓存是指代理服务器或客户端本地磁盘内保存的资源副本。")]),_._v(" "),e("p",[_._v("按照缓存策略分为"),e("code",[_._v("强制缓存")]),_._v("和"),e("code",[_._v("协商缓存")]),_._v("，分别利用了不同的 Http 首部字段。")]),_._v(" "),e("h2",{attrs:{id:"强制缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 强制缓存")]),_._v(" "),e("p",[e("code",[_._v("强制缓存")]),_._v("表示不需要向原服务器请求资源。")]),_._v(" "),e("p",[_._v("涉及到的首部字段：")]),_._v(" "),e("p",[e("code",[_._v("Expires（http 1.0）")]),_._v("：资源失效的日期")]),_._v(" "),e("p",[e("code",[_._v("Cache-Control（http 1.1）")]),_._v("：通过设置指令控制缓存的行为，优先级高于 Expires。")]),_._v(" "),e("p",[_._v("常用指令：")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("max-age")]),_._v("：表示资源保存为缓存的最长时间")]),_._v(" "),e("li",[e("code",[_._v("public")]),_._v("：表示其他用户也可利用缓存")]),_._v(" "),e("li",[e("code",[_._v("private")]),_._v("：只有特定用户可利用缓存")]),_._v(" "),e("li",[e("code",[_._v("no-cache")]),_._v("：防止从缓存中返回过期的资源。使用前要向服务器进行确认。")]),_._v(" "),e("li",[e("code",[_._v("no-store")]),_._v("：不进行缓存")])]),_._v(" "),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[_._v("#")]),_._v(" 协商缓存")]),_._v(" "),e("p",[e("code",[_._v("协商缓存")]),_._v("表示使用缓存前先向服务器确认资源是否发生了变动。")]),_._v(" "),e("p",[_._v("涉及到的首部字段：")]),_._v(" "),e("p",[e("code",[_._v("Last-Modified（http 1.0）")]),_._v("：资源上次修改的时间")]),_._v(" "),e("p",[e("code",[_._v("If-Modified-Since")]),_._v("：请求首部字段；比较资源的更新时间")]),_._v(" "),e("p",[e("code",[_._v("ETag（http 1.1）")]),_._v("：实体的唯一标识")]),_._v(" "),e("p",[e("code",[_._v("If-None-Match")]),_._v("：请求首部字段；比较"),e("code",[_._v("ETag")]),_._v("，不一致时处理")]),_._v(" "),e("p",[e("code",[_._v("If-Macth")]),_._v("：与"),e("code",[_._v("If-None-Match")]),_._v("作用相反")])])}],!1,null,null,null);v.default=a.exports}}]);