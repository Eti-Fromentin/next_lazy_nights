(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{286:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Catalog",function(){return r(2944)}])},4699:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var a=r(5893),n=r(7294),o=r(9669),c=r.n(o),s=r(1163),i=r(2873),u=r(1911),l=r(7126);r(933),r(92),r(8770);function d(e){var t,r=e.torefresh,o=e.category,u=function(e){return Math.floor(Math.random()*e)},d=(0,n.useState)([]),h=d[0],f=d[1],_=(0,n.useState)(!1),g=_[0],m=_[1],p=u(400),C=u(250),v=u(50),x="lazy"===(t=o)?"&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&with_genres=878&sort_by=vote_count.desc&page=".concat(p):"happy"===t?"&with_genres=35&with_genres=28&with_genres=12&with_genres=878&without_genres=10749&sort_by=vote_count.desc&page=".concat(C):"blue"===t?"&with_genres=10749&without_genres=28&without_genres=80&without_genres=99&without_genres=27&without_genres=10751&without_genres=10770&sort_by=popularity.desc&page=".concat(v):"catalog"===t?"&with_genres=35&with_genres=28&with_genres=12&with_genres=10749&with_genres=80&with_genres=10751&with_genres=14&with_genres=27&with_genres=878&with_genres=53&without_genres=99&sort_by=vote_count.desc&page=".concat(p):void 0,w=(0,s.useRouter)(),j="/Catalog"===w.pathname?40:15;return(0,n.useEffect)((function(){c().get("https://api.themoviedb.org/3/discover/movie?api_key=".concat("d174ca19b8b8536a5dcd5988d5132531","&primary_release_date.gte=1970-01-01&with_original_language=en").concat(x)).then((function(e){return e.data})).then((function(e){return f(e.results)}))}),[g,r]),(0,a.jsx)("div",{children:h.length?(0,a.jsxs)("div",{children:[(0,a.jsx)(i.t,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"myMovieSwiper",children:h.length&&h.filter((function(e){return e.poster_path})).slice(0,"".concat(j)).map((function(e,t){return(0,a.jsx)(i.o,{children:(0,a.jsx)(l.Z,{title:e.title,desc:e.overview,img:e.poster_path,id:e.id},t)},t)}))}),"/Catalog"!==w.pathname&&(0,a.jsx)("button",{className:"refreshButton",onClick:function(){m(!g)},children:"Refresh"})]}):"Loading"})}u.ZP.use([u.tl,u.W_])},7363:function(e,t,r){"use strict";var a=r(5893),n=r(7294),o=r(2873),c=r(1911),s=r(9669),i=r.n(s),u=r(1163),l=r(3342);r(933),r(92),r(8770);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){d(e,t,r[t])}))}return e}c.ZP.use([c.tl,c.W_]),t.Z=function(){var e=(0,n.useState)(),t=e[0],r=e[1],c=(0,n.useState)(!1),s=c[0],d=c[1],f=(0,u.useRouter)(),_="/Catalog"===f.pathname?50:10;return(0,n.useEffect)((function(){i().get("https://lazy-back.site.etifrom.dev/api/takeaway/").then((function(e){return e.data})).then((function(e){return r(e)}))}),[]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(o.t,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:t&&t.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).slice(0,"".concat(_)).map((function(e,t){return(0,a.jsx)(o.o,{children:(0,a.jsx)(l.Z,h({},e,{category:"takeaway"}),t)},t)}))}),"/Catalog"!==f.pathname&&(0,a.jsx)("button",{className:"refreshButton",onClick:function(){d(!s)},children:"Refresh"})]})})}},5019:function(e,t,r){"use strict";var a=r(5893),n=r(7294),o=r(2873),c=r(1911),s=r(9669),i=r.n(s),u=r(1163),l=r(3166),d=r(3342);r(933),r(92),r(8770);c.ZP.use([c.tl,c.W_]),t.Z=function(e){var t=e.torefresh,r="https://api.spoonacular.com/recipes/findByNutrients?minCholesterol=30&minCarbs=30&minFat=50&minCalories=600&maxSugar=10&number=300&random=true&apiKey=".concat("7706683273f24fdcaf86cbbb8929f962"),c=(0,n.useState)(),s=c[0],h=c[1],f=(0,n.useState)(!1),_=f[0],g=f[1],m=(0,n.useContext)(l.Z),p=m.allFavorites,C=m.fetchAllFavorites,v=(0,u.useRouter)(),x="/Catalog"===v.pathname?40:15;return(0,n.useEffect)((function(){C(),i().get(r).then((function(e){return e.data})).then((function(e){return h(e.filter((function(e){return e.calories>700||parseInt(e.fat)>70})))}))}),[t]),(0,n.useEffect)((function(){}),[p,_]),(0,a.jsx)("div",{children:(0,a.jsxs)("div",{children:[(0,a.jsx)(o.t,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:s&&s.slice(0,"".concat(x)).map((function(e,t){return(0,a.jsx)(o.o,{children:(0,a.jsx)(d.Z,{name:e.title,calories:e.calories,sugar:e.sugar,imgUrl:e.image,carbs:e.carbs,fat:e.fat,protein:e.protein,category:"recipe"},t)},t)}))}),"/Catalog"!==v.pathname&&(0,a.jsx)("button",{className:"refreshButton",onClick:function(){g(!_)},children:"Refresh"})]})})}},2944:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var a=r(5893),n=r(7294),o=r(2873),c=r(1911),s=r(9669),i=r.n(s),u=r(3166),l=r(5019),d=r(4699),h=r(7363),f=r(3342),_=(r(933),r(92),r(8770),r(5675)),g=r(1421),m=r.n(g);var p=function(e){var t=e.product,r=function(){s(!c)},o=(0,n.useState)(!0),c=o[0],s=o[1],i=t.itemCategory?t.itemName:t.product_name,u=t.itemCategory?t.imgUrl:t.selected_images.front.display.fr,l=t.itemCategory?t.itemName:t.generic_name,d=t.itemCategory?t.calories:t.nutriments.energy_value,h=t.itemCategory?t.carbs:t.nutriments.carbohydrates,f=t.itemCategory?t.fat:t.nutriments.fat,g=t.itemCategory?t.carbs:t.nutriments.proteins,p=t.itemCategory?t.sugar:t.nutriments.sugars;return(0,n.useEffect)((function(){}),[isFavorite]),(0,a.jsxs)("div",{className:m().productCard,children:[c?(0,a.jsx)("div",{className:m().productImgContainer,children:(0,a.jsxs)("div",{className:m().productFront,children:[(0,a.jsx)("h3",{className:m().productDescTitle,children:i}),(0,a.jsx)(_.default,{className:m().productCardImage,id:m().productCardImage,src:u,alt:i,layout:"fill"})]})}):(0,a.jsxs)("div",{className:m().productBack,children:[(0,a.jsxs)("div",{className:m().productDescBack,children:[(0,a.jsx)("h2",{className:m().productDescTitleBack,children:i}),(0,a.jsx)("h3",{className:m().productDescName,children:l}),(0,a.jsxs)("div",{className:m().productDescDetails,children:[(0,a.jsx)("p",{children:"Per 100g:"}),(0,a.jsxs)("div",{className:m().productDescDetailsLi,children:["Calories: ",d," KCal"]}),(0,a.jsxs)("div",{className:m().productDescDetailsLi,children:["Carbs: ",h," g"]}),(0,a.jsxs)("div",{className:m().productDescDetailsLi,children:["Fat: ",f," g"]}),(0,a.jsxs)("div",{className:m().productDescDetailsLi,children:["Protein: ",g," g"]}),(0,a.jsxs)("div",{className:m().productDescDetailsLi,children:["Sugar: ",p," g"]})]})]}),(0,a.jsx)("button",{className:m().materialIconsOutlined,id:m().close,onClick:r,children:"cancel"})]}),(0,a.jsx)("div",{className:m().btnRow,children:(0,a.jsx)("button",{className:m().materialIconsOutlined,onClick:r,children:"info"})})]})};var C=function(e){var t=e.setResult,r=e.result,o=e.setCamera,c=e.fetchedProduct,s=e.setFetchedProduct,u=(0,n.useState)(!0),l=u[0],d=u[1];return(0,n.useEffect)((function(){i().get("https://world.openfoodfacts.org/api/v0/product/".concat(r,".json")).then((function(e){return e.data})).then((function(e){1===e.status?(o(!1),s(e.product),d(!l)):t(null)}))}),[]),(0,n.useEffect)((function(){}),[l]),(0,a.jsx)("div",{children:l?(0,a.jsx)("div",{children:"Loading..."}):(0,a.jsx)(p,{product:c})})},v=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"width":{"min":450},"height":{"min":300},"facingMode":"environment","aspectRatio":{"min":1,"max":2}}},"locator":{"patchSize":"medium","halfSample":false},"numOfWorkers":4,"frequency":15,"decoder":{"readers":["upc_reader","ean_reader"]},"locate":true}'),x=r(6369),w=r.n(x);var j=function(e){var t=e.onDetected;(0,n.useEffect)((function(){return w().init(v,(function(e){e&&alert.error(e,"error msg"),w().start()})),w().onProcessed((function(e){var t=w().canvas.ctx.overlay,r=w().canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(r.getAttribute("width")),Number(r.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){w().ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&w().ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&w().ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),w().onDetected(r),function(){w().stop()}}),[]);var r=function(e){t(e.codeResult.code)};return(0,a.jsx)("div",{id:"interactive",className:"viewport"})},b=r(8711),y=r.n(b);var N=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],o=(0,n.useState)(null),c=o[0],s=o[1],i=(0,n.useState)(),u=i[0],l=i[1];return(0,a.jsxs)("div",{className:y().BarCodeReader,children:[(0,a.jsx)("h2",{className:y().BarCodeReaderTitle,children:"How fat is it ?"}),(0,a.jsxs)("h2",{className:y().BarCodeReaderh2,children:["In search of a product worthy of your Lazy Nights? ",(0,a.jsx)("br",{}),"Try our product scanner by clicking the button below:"]}),(0,a.jsx)("button",{className:y().CameraButton,onClick:function(){r(!t),s(null),l(null)},children:t?"Stop":"Scan"}),(0,a.jsx)("div",{className:y().BarCodeProductCard,children:c&&(0,a.jsx)(C,{setResult:s,result:c,setCamera:r,fetchedProduct:u,setFetchedProduct:l})}),(0,a.jsx)("div",{className:y().BarCodeReaderContainer,children:t&&(0,a.jsx)(j,{onDetected:function(e){s(e)}})})]})},P=r(2180),B=r.n(P);function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){D(e,t,r[t])}))}return e}c.ZP.use([c.tl,c.W_]);var k=function(){var e=(0,n.useState)([]),t=e[0],r=e[1],c=(0,n.useState)([]),s=c[0],_=c[1],g=(0,n.useContext)(u.Z),m=g.allFavorites,p=g.fetchAllFavorites,C=(0,n.useState)(!1),v=C[0],x=C[1];return(0,n.useEffect)((function(){p(),i().get("https://lazy-back.site.etifrom.dev/api/softs_drinks/").then((function(e){return e.data})).then((function(e){return r(e)}))}),[]),(0,n.useEffect)((function(){i().get("https://lazy-back.site.etifrom.dev/api/alcohol_drinks/").then((function(e){return e.data})).then((function(e){return _(t.concat(e))}))}),[t]),(0,n.useEffect)((function(){}),[m,s]),(0,n.useEffect)((function(){window.scrollTo(0,0)}),[]),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{className:B().catalogTitle,children:"A la carte"}),(0,a.jsx)("h3",{className:B().catalogDesc,children:"Discover all items and choose your favorite ! "}),(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:B().refreshButton,onClick:function(){x(!v)},children:"Refresh all foods and drinks"}),(0,a.jsx)("h3",{className:B().CatalogSectionTitle,children:"Recipes:"}),(0,a.jsx)(l.Z,{torefresh:v}),(0,a.jsx)("hr",{className:B().catalogHrline}),(0,a.jsx)("h3",{className:B().CatalogSectionTitle,children:"Take Away:"}),(0,a.jsx)(h.Z,{}),(0,a.jsx)("hr",{className:B().catalogHrline}),(0,a.jsx)("h3",{className:B().CatalogSectionTitle,children:"All Drinks:"}),(0,a.jsx)("div",{children:(0,a.jsx)(o.t,{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:s&&s.map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})).map((function(e,t){return(0,a.jsx)(o.o,{children:(0,a.jsx)(f.Z,R({},e,{category:"drinks"}),t)},t)}))})}),(0,a.jsx)("hr",{className:B().catalogHrline}),(0,a.jsx)("h3",{className:B().CatalogSectionTitle,children:"Movies:"}),(0,a.jsx)(d.Z,{torefresh:v,category:"catalog"})]}),(0,a.jsx)(N,{})]})}},8711:function(e){e.exports={BarCodeReader:"BarCodeReader_BarCodeReader__OUlEg",BarCodeReaderContainer:"BarCodeReader_BarCodeReaderContainer__cmYkw",BarCodeProductCard:"BarCodeReader_BarCodeProductCard__tR_G7",interactive:"BarCodeReader_interactive__qGlSO",viewport:"BarCodeReader_viewport__loR8a",BarCodeReaderTitle:"BarCodeReader_BarCodeReaderTitle__K8yFh",BarCodeReaderh2:"BarCodeReader_BarCodeReaderh2__ahp8n",CameraButton:"BarCodeReader_CameraButton__z0uKg",Result:"BarCodeReader_Result__Nw_Hw"}},2180:function(e){e.exports={catalogTitle:"Catalog_catalogTitle__noByx",catalogDesc:"Catalog_catalogDesc__PpEwh",CatalogLogo:"Catalog_CatalogLogo__hV3zT",CatalogSectionTitle:"Catalog_CatalogSectionTitle__XGKt6",catalogHrline:"Catalog_catalogHrline__IQBoP",refreshButton:"Catalog_refreshButton__We9SI"}},1421:function(e){e.exports={productCard:"ProductCard_productCard__0yNWJ",productFront:"ProductCard_productFront__mLFAx",productImgContainer:"ProductCard_productImgContainer__lZq1B",materialIconsOutlined:"ProductCard_materialIconsOutlined__mHf9i",close:"ProductCard_close__QQmEW",isFavorite:"ProductCard_isFavorite__EQr_w",notFavorite:"ProductCard_notFavorite__PGPaX",productCardImage:"ProductCard_productCardImage__LwRsq",productBack:"ProductCard_productBack__4rChE",productDescBack:"ProductCard_productDescBack__sjvZ8",productDescTitle:"ProductCard_productDescTitle__6iNwZ",productDescTitleBack:"ProductCard_productDescTitleBack__mRLhD",productDescName:"ProductCard_productDescName__EIJyn",productDescDetails:"ProductCard_productDescDetails__e_eML",productDescDetailsLi:"ProductCard_productDescDetailsLi__2LFCh",btnRow:"ProductCard_btnRow__IT_mG"}}},function(e){e.O(0,[958,869,882,230,774,888,179],(function(){return t=286,e(e.s=t);var t}));var t=e.O();_N_E=t}]);