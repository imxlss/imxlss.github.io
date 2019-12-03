(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{207:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/dlau/koa-body",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"koa-body-中间件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-body-中间件","aria-hidden":"true"}},[this._v("#")]),this._v(" koa-body 中间件")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("koa-body是一个用来解析请求体的中间件。支持"),s("code",[this._v("multipart")]),this._v(", "),s("code",[this._v("urlencoded")]),this._v(" 和 "),s("code",[this._v("JSON")]),this._v("请求体。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"koa-body获取参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#koa-body获取参数","aria-hidden":"true"}},[this._v("#")]),this._v(" koa-body获取参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("multipart表单")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("files"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 文件参数")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非文件参数")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("普通表单")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// POST表单")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// GET表单")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置参数")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("formidable 配置参数")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("描述")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("keepExtensions")])]),t._v(" "),a("td",[t._v("保留原来的文件后缀")]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("multiples")])]),t._v(" "),a("td",[t._v("是否支持多文件上传")]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("onFileBegin")])]),t._v(" "),a("td",[t._v("文件开始上传的回调")]),t._v(" "),a("td",[a("code",[t._v("Boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("uploadDir")])]),t._v(" "),a("td",[t._v("文件上传的目录")]),t._v(" "),a("td",[a("code",[t._v("String")])]),t._v(" "),a("td",[a("code",[t._v("os.tmpDir()")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"遇到的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到的坑","aria-hidden":"true"}},[this._v("#")]),this._v(" 遇到的坑")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("p",[this._v("不要和 "),s("code",[this._v("koa-bodyparser")]),this._v(" 同时使用")])]),this._v(" "),s("li",[s("p",[this._v("文件的获取")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("v4版本：ctx.request.files")]),this._v(" "),s("li",[this._v("v4之前版本: ctx.request.body.files")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用范例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用范例","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用范例")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.js")]),t._v("\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("koaBody")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  multipart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  formidable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    keepExtensions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否包含拓展名")]),t._v("\n    maxFileSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传文件大小限制")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onFileBegin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`xxx`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重命名上传文件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    uploadDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`xxx`")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上传文件保存的目录")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])}],!1,null,null,null);s.default=n.exports}}]);