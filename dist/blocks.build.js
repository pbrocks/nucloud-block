!function(e){function t(n){if(l[n])return l[n].exports;var c=l[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var l={};t.m=e,t.c=l,t.d=function(e,l,n){t.o(e,l)||Object.defineProperty(e,l,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(l,"a",l),l},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});l(1)},function(e,t,l){"use strict";var n=l(2),c=(l.n(n),l(3)),a=(l.n(c),l(4)),r=wp.i18n.__,m=wp.blocks.registerBlockType,u=wp.editor.InspectorControls,p=wp.components,i=p.PanelBody,o=p.PanelRow,d=p.TextControl;m("nucloud/map-embed",{title:r("nuCloud Map Embed"),icon:a.a,category:"embed",keywords:[r("map"),r("nucloud"),r("embed")],attributes:{element_id:{default:"",type:"string"},layer:{default:"",type:"string"},map_height:{default:"500",type:"number"},map_id:{default:"5",type:"number"},marker:{default:"",type:"number"}},edit:function(e){var t=e.attributes,l=t.element_id,n=t.map_id,c=t.map_height,a=t.marker,m=t.layer,p=e.className,s=e.setAttributes;return[wp.element.createElement(u,null,wp.element.createElement(i,{title:r("Map Settings","nucloud"),initialOpen:!0},wp.element.createElement(o,null,wp.element.createElement(d,{label:r("Map ID","nucloud"),help:r("Enter the ID for the map you would like to embed","nucloud"),onChange:function(e){return s(parseInt({map_id:e}))},value:n,type:"number"})),wp.element.createElement(o,null,wp.element.createElement(d,{label:r("Map Height","nucloud"),help:r("Enter the height of the embed in pixels","nucloud"),onChange:function(t,l){e.setAttributes({attr:parseInt(l)})}(0,{map_height:c}),value:c,type:"number"})),wp.element.createElement(o,null,wp.element.createElement(d,{label:r("Display Marker","nucloud"),help:r("Enter a marker ID to display a stop by default. (Overrides layers)","nucloud"),onChange:function(e){return s({marker:e})},value:a,type:"number"})),wp.element.createElement(o,null,wp.element.createElement(d,{label:r("Display Layers","nucloud"),help:r("Enter a comma separated list of layer names to display them by default","nucloud"),onChange:function(e){return s({layer:e})},value:m})),wp.element.createElement(o,null,wp.element.createElement(d,{label:r("Custom Element ID","nucloud"),help:r("Specify an ID to apply to the iframe that renders your map. Default: 'nucloud-map'","nucloud"),onChange:function(e){return s({element_id:e})},value:l})))),wp.element.createElement("div",{className:p},wp.element.createElement("iframe",{src:"https://cdn-map1.nucloud.com/nucloudmap/index.html?map="+n+"&marker="+a+"&layer="+m,height:c}))]},save:function(e){return null}})},function(e,t){},function(e,t){},function(e,t,l){"use strict";var n=wp.element.createElement("svg",{width:"122",height:"81",xmlns:"http://www.w3.org/2000/svg"},wp.element.createElement("rect",{fill:"none",id:"canvas_background",height:"81",width:"122"}),wp.element.createElement("g",null,wp.element.createElement("g",{id:"svg_1"},wp.element.createElement("g",{id:"svg_13"},wp.element.createElement("path",{id:"svg_2",d:"m70.843001,43.855c0,4.618 0.649,8.423 1.428,11.564c0.777,3.139 2.175,5.595 4.191,7.371c2.015,1.772 4.746,2.659 8.198,2.659c3.353,0 6.51,-0.996 9.475,-2.988c2.963,-1.999 5.125,-4.6 6.485,-7.808c1.115,-2.825 1.676,-9.001 1.676,-18.534l0,-11.688c-9.651,4.773 -20.177,9.249 -31.385,13.336l0,4.741c-0.003,1.216 -0.068,1.347 -0.068,1.347z",fill:"none"}),wp.element.createElement("path",{id:"svg_3",d:"m0.002001,68.908c0,3.889 0.922,6.878 2.769,8.971c1.845,2.087 4.202,3.133 7.069,3.133c2.965,0 5.382,-1.012 7.252,-3.026c1.87,-2.017 2.806,-5.046 2.806,-9.086l0,-16.546c-6.705,1.438 -13.346,2.688 -19.896,3.743l0,12.811z",fill:"#13B5EA"}),wp.element.createElement("path",{id:"svg_4",d:"m21.355001,27.312c1.361,-3.698 3.499,-6.604 6.413,-8.722c2.916,-2.117 6.149,-3.176 9.694,-3.176c5.442,0 9.073,1.74 10.896,5.215c1.823,3.482 2.834,8.581 2.834,15.148c0,0 -0.057,0.202 0.017,0.676l0.813,-23.736c0,-3.987 0.088,-7.792 1.884,-9.76c0.356,-0.396 0.742,-0.731 1.146,-1.047c-3.237,-1.215 -6.764,-1.826 -10.596,-1.826c-5.393,0 -10.167,1.076 -14.319,3.229c-4.155,2.154 -7.98,5.536 -11.479,10.14l0,-2.397c0,-2.377 -0.427,-4.384 -1.277,-6.037c-0.85,-1.643 -1.978,-2.881 -3.388,-3.7c-1.41,-0.824 -2.986,-1.233 -4.737,-1.233c-2.867,0 -5.125,0.93 -6.779,2.804c-1.651,1.874 -2.477,4.702 -2.477,8.494l0,44.715c6.55,-1.057 13.191,-2.307 19.896,-3.743l0,-8.405c0.002,-8.128 0.488,-13.673 1.459,-16.639z",fill:"#B2DCF5"}),wp.element.createElement("path",{id:"svg_5",d:"m102.297001,36.119c0,9.533 -0.561,15.709 -1.676,18.534c-1.36,3.208 -3.522,5.809 -6.485,7.808c-2.965,1.992 -6.123,2.989 -9.475,2.989c-3.451,0 -6.184,-0.888 -8.199,-2.66c-2.017,-1.776 -3.414,-4.232 -4.19,-7.371c-0.778,-3.143 -1.297,-6.652 -1.297,-11.271c0,0 -0.099,0.162 -0.062,-1.64l0,26.395c0,3.986 -0.914,7.001 -2.733,9.046c-0.405,0.457 -0.842,0.852 -1.302,1.207c3.006,1.08 6.288,1.627 9.838,1.627c3.985,0 7.531,-0.497 10.642,-1.486c3.108,-0.995 5.975,-2.509 8.599,-4.542c2.624,-2.038 5.127,-4.558 7.509,-7.561l0,2.542c0,3.538 0.885,6.29 2.66,8.25c1.772,1.963 4.021,2.944 6.74,2.944c2.722,0 4.941,-0.947 6.668,-2.846c1.726,-1.896 2.587,-4.737 2.587,-8.53l0,-56.089c-6.111,3.78 -12.721,7.455 -19.822,10.966l-0.002,11.688l0,0z",fill:"#13B5EA"}),wp.element.createElement("path",{id:"svg_6",d:"m119.424001,2.955c-1.798,-1.969 -4.18,-2.955 -7.145,-2.955c-2.963,0 -5.366,1.001 -7.216,2.996c-1.845,1.992 -2.767,4.957 -2.767,8.898l0,12.537c7.102,-3.511 13.71,-7.186 19.822,-10.966l0,-1.582c0.002,-3.982 -0.898,-6.962 -2.694,-8.928z",fill:"#B2DCF5"}),wp.element.createElement("path",{id:"svg_7",d:"m71.378001,68.824l-0.467,-26.314c-0.154,-1.018 -0.391,-2.585 -0.67,-4.492c-5.783,2.096 -11.754,4.081 -17.887,5.951c1.61,10.79 4.02,28.043 2.569,25.622c2.09,3.49 5.042,6.229 8.856,8.213c0.998,0.519 2.027,0.969 3.096,1.353c0.46,-0.354 1.481,-0.722 1.886,-1.177c1.823,-2.046 2.617,-5.168 2.617,-9.156z",fill:"#13B5EA"}),wp.element.createElement("path",{id:"svg_8",d:"m51.209001,11.891l0,24.563c0.198,1.269 0.629,4.052 1.146,7.516c6.133,-1.87 12.104,-3.855 17.887,-5.951c-1.426,-9.693 -3.975,-27.939 -2.467,-24.855c-2.038,-4.166 -5.123,-7.39 -9.253,-9.663c-1.114,-0.617 -2.272,-1.14 -3.47,-1.589c-0.404,0.315 -0.791,0.652 -1.146,1.048c-1.796,1.965 -2.697,4.945 -2.697,8.931z",fill:"#B2DCF5"}),wp.element.createElement("path",{id:"svg_9",d:"m52.355001,43.969c-0.38,0.114 -0.764,0.227 -1.146,0.343l0,7.047c0,7.925 1.238,14.002 3.715,18.232c1.451,2.421 -0.068,-15.049 -2.569,-25.622z",fill:"#13B5EA"}),wp.element.createElement("path",{id:"svg_10",d:"m51.209001,36.453l0,7.857c0.382,-0.115 0.767,-0.229 1.146,-0.343c-0.517,-3.462 -0.948,-6.245 -1.146,-7.514z",fill:"#B2DCF5"}),wp.element.createElement("path",{id:"svg_11",d:"m70.914001,42.51l0,-4.741c-0.226,0.082 -0.447,0.167 -0.671,0.249c-0.118,2.305 0.514,3.474 0.671,4.492z",fill:"#13B5EA"}),wp.element.createElement("path",{id:"svg_12",d:"m70.242001,38.018c0.225,-0.082 0.445,-0.167 0.67,-0.249l0,-5.931c0,-4.377 -0.195,-7.975 -0.584,-10.796c-0.389,-2.822 -1.239,-5.446 -2.553,-7.88c-1.508,-3.084 1.041,15.161 2.467,24.856z",fill:"#B2DCF5"})))));t.a=n}]);