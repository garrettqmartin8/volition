/* cookies.js 1.2.4 https://github.com/franciscop/cookies.js */
var cookies=function(a,b){function c(a,b){a=a||{};for(var c in b)void 0===a[c]&&(a[c]=b[c]);return a}function d(a){var b=a;return b instanceof Date||(b=new Date,b.setTime(b.getTime()+1e3*a)),b.toUTCString()}if(c(cookies,{expires:31536e3,path:"/",secure:"https:"===window.location.protocol,nulltoremove:!0,autojson:!0,autoencode:!0,encode:function(a){return encodeURIComponent(a)},decode:function(a){return decodeURIComponent(a)}}),b=c(b,cookies),"string"==typeof a){var e=document.cookie.split(/;\s*/).map(b.autoencode?b.decode:function(a){return a}).map(function(a){return a.split("=")}).reduce(function(a,b){return a[b[0]]=b[1],a},{})[a];if(!b.autojson)return e;try{return JSON.parse(e)}catch(f){return e}}for(var g in a){var h=void 0===a[g]||b.nulltoremove&&null===a[g],i=b.autojson?JSON.stringify(a[g]):a[g],j=b.autoencode?b.encode(i):i;h&&(j="");var k=b.encode(g)+"="+j+(b.expires?";expires="+d(h?-1e4:b.expires):"")+";path="+b.path+(b.domain?";domain="+b.domain:"")+(b.secure?";secure":"");b.test&&b.test(k),document.cookie=k}return cookies};!function(a){"object"==typeof exports&&"object"==typeof module?module.exports=cookies:"function"==typeof define&&define.amd?define("cookies",[],cookies):"object"==typeof exports?exports.cookies=cookies:a.cookies=cookies}(this);
