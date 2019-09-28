(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "FcM5":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader!../node_modules/postcss-loader/src??ref--4-3!./index.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "QfWi":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "pyAK");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);


const jsonData = [{
    id: 1,
    title: 'Google',
    state: 'purple',
    rating: 5, // рейтинг
    review: 4, // отзывы
    reply: 3, // неотвеченные
    update: 2 // обновления
}, {
    id: 2,
    title: 'Yandex',
    state: 'gray',
    rating: 4,
    review: 3,
    reply: 2,
    update: 1
}, {
    id: 3,
    title: 'Rambler',
    state: 'orange',
    rating: 3,
    review: 2,
    reply: 1,
    update: 0
}, {
    id: 4,
    title: '2gis',
    state: 'gray',
    rating: 2,
    review: 1,
    reply: 0,
    update: 0
}, {
    id: 5,
    title: 'Waze',
    state: 'gray',
    rating: 1,
    review: 0,
    reply: 0,
    update: 0
}];

const wrapCards = document.querySelector('.wrap-cards');
const dashboardRating = document.querySelector('.wrap-mark .rating');
const dashboardReview = document.querySelector('.wrap-mark .review');
const dashboardReplay = document.querySelector('.wrap-mark .reply');
const dashboardUpdate = document.querySelector('.wrap-mark .update');
const dashboards = {
    rating: dashboardRating,
    review: dashboardReview,
    reply: dashboardReplay,
    update: dashboardUpdate
};

/**
 * Обновляет глобальные счётчики
 * @param dashboard
 * @param counts
 */
const setCount = (dashboard, counts) => {
    const indicators = Object.keys(dashboard);
    indicators.map(item => dashboard[item].innerHTML = counts[item])
};

/**
 * удаление DOM Element
 * @param el
 */

const deleteDomElement = el => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
};
/**
 * сортируем массив
 * сначала все фиолетовые, потом все оранжевые, потом все серые
 * @param arr
 * @return {DependencyReference[]|void|*}
 */
const getSortArray = arr => arr.sort((b, a) => {
    if (a.state > b.state) {
        return 1;
    }
    if (a.state < b.state) {
        return -1;
    }
    return 0
});
/**
 * шаблон карты
 * @param item
 * @return {HTMLElement}
 */
const getCard = item => {
    const card = document.createElement('div');
    card.classList.add('wrap-card', `${item.state}`);
    card.innerHTML = `
<div class="wrap-row-card">
    <div class="wrap-row">
        <div class="card-header">
            <div class="column-header">
                <h3 class="title">${item.title}</h3>
                <span class="dot">•</span>
                <p>все 30 заведений настроены</p>
            </div>
            <div class="column-header">
                <div class="wrap-switch-dots">
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                </div>
            </div>
        </div>
        <div class="card-content">
            <div class="wrap-content-btn">
                <button class="btn-synchronized active">Синхронизировано</button>
                <button class="btn-infa">Инфа</button>
                <button class="btn-price">Прайс</button>
                <button class="btn-photo">Фото</button>
                <button class="btn-stocks">Акции</button>
            </div>
        </div>
        <div class="card-footer">
            <div class="card-footer-column">
                <div class="footer-rating">
                    <div class="bg-rating-icon"></div>
                    <p>${item.rating} из 5</p>
                </div>
                <span class="dot">•</span>
                <div class="footer-review">
                    <p>${item.review} отзывов,</p>
                </div>
                <div class="footer-not-answered">
                    <p>&nbsp;${item.reply} неотвеченных</p>
                </div>
            </div>
            <div class="card-footer-column">
                <div class="footer-updates">
                    <p>${item.update} обновления</p>
                </div>
            </div>
        </div>
    </div>
</div>`;

    return card;
};
/**
 *  генерирует все блоки по массиву jsonData с учетом сортировки
 *  и устанавливает счетчики
 * @param data
 */
const initStart = data => {
    const globalCounters = {
        rating: 0,
        review: 0,
        reply: 0,
        update: 0
    };
    const sortByState = getSortArray(data);

    deleteDomElement(wrapCards);

    const counters = sortByState.reduce((acc, item) => {

        const card = getCard(item);
        wrapCards.appendChild(card);
        acc.rating += item.rating;
        acc.review += item.review;
        acc.reply += item.reply;
        acc.update += item.update;

        return acc;
    }, globalCounters);

    setCount(dashboards, counters);
};

initStart(jsonData);

(function () {
    var states = ['purple', 'orange', 'gray'];

    function r(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function getRandomObject() {
        var obj = jsonData[Math.floor(Math.random() * jsonData.length)];
        Object.assign(obj, {
            state: states[Math.floor(Math.random() * states.length)],
            rating: r(1, 5),
            review: r(0, 200),
            reply: r(0, 20),
            update: r(0, 5)
        });

        return obj;
    }


    setInterval(function () {
        var obj = getRandomObject();
        update(obj);
    }, r(10, 30) * 1000);


    function update(obj) {
        /**
         * обновляем jsonData
         * @type {*|Array}
         */
        const data = jsonData.reduce((acc, item) => {
            item.id === obj.id ? acc.push(obj) : acc.push(item);

            return acc;
        }, []);

        initStart(data);
        console.log(obj)
    }
}());

/***/ }),

/***/ "pyAK":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/mini-css-extract-plugin/dist/loader.js!../node_modules/css-loader!../node_modules/postcss-loader/src??ref--4-3!./index.css */ "FcM5");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "UezQ")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

},[["QfWi","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5jc3M/MjZjOSIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jc3M/YjVmMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsV0FBVztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFlBQVk7QUFDckM7QUFDQTtBQUNBLDZCQUE2QixFQUFFLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxJOzs7Ozs7Ozs7Ozs7QUMvTkQsY0FBYyxtQkFBTyxDQUFDLHlKQUFnSzs7QUFFdEwsNENBQTRDLFFBQVM7O0FBRXJEO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUEsYUFBYSxtQkFBTyxDQUFDLDJEQUFnRDs7QUFFckU7O0FBRUEsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJpbmRleC5iMmY5MGJhZjU5MGMxZTljOWQxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuY29uc3QganNvbkRhdGEgPSBbe1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ0dvb2dsZScsXHJcbiAgICBzdGF0ZTogJ3B1cnBsZScsXHJcbiAgICByYXRpbmc6IDUsIC8vINGA0LXQudGC0LjQvdCzXHJcbiAgICByZXZpZXc6IDQsIC8vINC+0YLQt9GL0LLRi1xyXG4gICAgcmVwbHk6IDMsIC8vINC90LXQvtGC0LLQtdGH0LXQvdC90YvQtVxyXG4gICAgdXBkYXRlOiAyIC8vINC+0LHQvdC+0LLQu9C10L3QuNGPXHJcbn0sIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdZYW5kZXgnLFxyXG4gICAgc3RhdGU6ICdncmF5JyxcclxuICAgIHJhdGluZzogNCxcclxuICAgIHJldmlldzogMyxcclxuICAgIHJlcGx5OiAyLFxyXG4gICAgdXBkYXRlOiAxXHJcbn0sIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdSYW1ibGVyJyxcclxuICAgIHN0YXRlOiAnb3JhbmdlJyxcclxuICAgIHJhdGluZzogMyxcclxuICAgIHJldmlldzogMixcclxuICAgIHJlcGx5OiAxLFxyXG4gICAgdXBkYXRlOiAwXHJcbn0sIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6ICcyZ2lzJyxcclxuICAgIHN0YXRlOiAnZ3JheScsXHJcbiAgICByYXRpbmc6IDIsXHJcbiAgICByZXZpZXc6IDEsXHJcbiAgICByZXBseTogMCxcclxuICAgIHVwZGF0ZTogMFxyXG59LCB7XHJcbiAgICBpZDogNSxcclxuICAgIHRpdGxlOiAnV2F6ZScsXHJcbiAgICBzdGF0ZTogJ2dyYXknLFxyXG4gICAgcmF0aW5nOiAxLFxyXG4gICAgcmV2aWV3OiAwLFxyXG4gICAgcmVwbHk6IDAsXHJcbiAgICB1cGRhdGU6IDBcclxufV07XHJcblxyXG5jb25zdCB3cmFwQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcC1jYXJkcycpO1xyXG5jb25zdCBkYXNoYm9hcmRSYXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JhcC1tYXJrIC5yYXRpbmcnKTtcclxuY29uc3QgZGFzaGJvYXJkUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXAtbWFyayAucmV2aWV3Jyk7XHJcbmNvbnN0IGRhc2hib2FyZFJlcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwLW1hcmsgLnJlcGx5Jyk7XHJcbmNvbnN0IGRhc2hib2FyZFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53cmFwLW1hcmsgLnVwZGF0ZScpO1xyXG5jb25zdCBkYXNoYm9hcmRzID0ge1xyXG4gICAgcmF0aW5nOiBkYXNoYm9hcmRSYXRpbmcsXHJcbiAgICByZXZpZXc6IGRhc2hib2FyZFJldmlldyxcclxuICAgIHJlcGx5OiBkYXNoYm9hcmRSZXBsYXksXHJcbiAgICB1cGRhdGU6IGRhc2hib2FyZFVwZGF0ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINCe0LHQvdC+0LLQu9GP0LXRgiDQs9C70L7QsdCw0LvRjNC90YvQtSDRgdGH0ZHRgtGH0LjQutC4XHJcbiAqIEBwYXJhbSBkYXNoYm9hcmRcclxuICogQHBhcmFtIGNvdW50c1xyXG4gKi9cclxuY29uc3Qgc2V0Q291bnQgPSAoZGFzaGJvYXJkLCBjb3VudHMpID0+IHtcclxuICAgIGNvbnN0IGluZGljYXRvcnMgPSBPYmplY3Qua2V5cyhkYXNoYm9hcmQpO1xyXG4gICAgaW5kaWNhdG9ycy5tYXAoaXRlbSA9PiBkYXNoYm9hcmRbaXRlbV0uaW5uZXJIVE1MID0gY291bnRzW2l0ZW1dKVxyXG59O1xyXG5cclxuLyoqXHJcbiAqINGD0LTQsNC70LXQvdC40LUgRE9NIEVsZW1lbnRcclxuICogQHBhcmFtIGVsXHJcbiAqL1xyXG5cclxuY29uc3QgZGVsZXRlRG9tRWxlbWVudCA9IGVsID0+IHtcclxuICAgIHdoaWxlIChlbC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZWwucmVtb3ZlQ2hpbGQoZWwuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiDRgdC+0YDRgtC40YDRg9C10Lwg0LzQsNGB0YHQuNCyXHJcbiAqINGB0L3QsNGH0LDQu9CwINCy0YHQtSDRhNC40L7Qu9C10YLQvtCy0YvQtSwg0L/QvtGC0L7QvCDQstGB0LUg0L7RgNCw0L3QttC10LLRi9C1LCDQv9C+0YLQvtC8INCy0YHQtSDRgdC10YDRi9C1XHJcbiAqIEBwYXJhbSBhcnJcclxuICogQHJldHVybiB7RGVwZW5kZW5jeVJlZmVyZW5jZVtdfHZvaWR8Kn1cclxuICovXHJcbmNvbnN0IGdldFNvcnRBcnJheSA9IGFyciA9PiBhcnIuc29ydCgoYiwgYSkgPT4ge1xyXG4gICAgaWYgKGEuc3RhdGUgPiBiLnN0YXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoYS5zdGF0ZSA8IGIuc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gMFxyXG59KTtcclxuLyoqXHJcbiAqINGI0LDQsdC70L7QvSDQutCw0YDRgtGLXHJcbiAqIEBwYXJhbSBpdGVtXHJcbiAqIEByZXR1cm4ge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuY29uc3QgZ2V0Q2FyZCA9IGl0ZW0gPT4ge1xyXG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCd3cmFwLWNhcmQnLCBgJHtpdGVtLnN0YXRlfWApO1xyXG4gICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbjxkaXYgY2xhc3M9XCJ3cmFwLXJvdy1jYXJkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwid3JhcC1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+JHtpdGVtLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPuKAojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxwPtCy0YHQtSAzMCDQt9Cw0LLQtdC00LXQvdC40Lkg0L3QsNGB0YLRgNC+0LXQvdGLPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwLXN3aXRjaC1kb3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPuKAojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcC1jb250ZW50LWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1zeW5jaHJvbml6ZWQgYWN0aXZlXCI+0KHQuNC90YXRgNC+0L3QuNC30LjRgNC+0LLQsNC90L48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4taW5mYVwiPtCY0L3RhNCwPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXByaWNlXCI+0J/RgNCw0LnRgTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0bi1waG90b1wiPtCk0L7RgtC+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuLXN0b2Nrc1wiPtCQ0LrRhtC40Lg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWZvb3Rlci1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLXJhdGluZy1pY29uXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLnJhdGluZ30g0LjQtyA1PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvdFwiPuKAojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXItcmV2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLnJldmlld30g0L7RgtC30YvQstC+0LIsPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLW5vdC1hbnN3ZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiZuYnNwOyR7aXRlbS5yZXBseX0g0L3QtdC+0YLQstC10YfQtdC90L3Ri9GFPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1mb290ZXItY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyLXVwZGF0ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0udXBkYXRlfSDQvtCx0L3QvtCy0LvQtdC90LjRjzwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG59O1xyXG4vKipcclxuICogINCz0LXQvdC10YDQuNGA0YPQtdGCINCy0YHQtSDQsdC70L7QutC4INC/0L4g0LzQsNGB0YHQuNCy0YMganNvbkRhdGEg0YEg0YPRh9C10YLQvtC8INGB0L7RgNGC0LjRgNC+0LLQutC4XHJcbiAqICDQuCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgiDRgdGH0LXRgtGH0LjQutC4XHJcbiAqIEBwYXJhbSBkYXRhXHJcbiAqL1xyXG5jb25zdCBpbml0U3RhcnQgPSBkYXRhID0+IHtcclxuICAgIGNvbnN0IGdsb2JhbENvdW50ZXJzID0ge1xyXG4gICAgICAgIHJhdGluZzogMCxcclxuICAgICAgICByZXZpZXc6IDAsXHJcbiAgICAgICAgcmVwbHk6IDAsXHJcbiAgICAgICAgdXBkYXRlOiAwXHJcbiAgICB9O1xyXG4gICAgY29uc3Qgc29ydEJ5U3RhdGUgPSBnZXRTb3J0QXJyYXkoZGF0YSk7XHJcblxyXG4gICAgZGVsZXRlRG9tRWxlbWVudCh3cmFwQ2FyZHMpO1xyXG5cclxuICAgIGNvbnN0IGNvdW50ZXJzID0gc29ydEJ5U3RhdGUucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGdldENhcmQoaXRlbSk7XHJcbiAgICAgICAgd3JhcENhcmRzLmFwcGVuZENoaWxkKGNhcmQpO1xyXG4gICAgICAgIGFjYy5yYXRpbmcgKz0gaXRlbS5yYXRpbmc7XHJcbiAgICAgICAgYWNjLnJldmlldyArPSBpdGVtLnJldmlldztcclxuICAgICAgICBhY2MucmVwbHkgKz0gaXRlbS5yZXBseTtcclxuICAgICAgICBhY2MudXBkYXRlICs9IGl0ZW0udXBkYXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgfSwgZ2xvYmFsQ291bnRlcnMpO1xyXG5cclxuICAgIHNldENvdW50KGRhc2hib2FyZHMsIGNvdW50ZXJzKTtcclxufTtcclxuXHJcbmluaXRTdGFydChqc29uRGF0YSk7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHN0YXRlcyA9IFsncHVycGxlJywgJ29yYW5nZScsICdncmF5J107XHJcblxyXG4gICAgZnVuY3Rpb24gcihtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbU9iamVjdCgpIHtcclxuICAgICAgICB2YXIgb2JqID0ganNvbkRhdGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoganNvbkRhdGEubGVuZ3RoKV07XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihvYmosIHtcclxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdGF0ZXMubGVuZ3RoKV0sXHJcbiAgICAgICAgICAgIHJhdGluZzogcigxLCA1KSxcclxuICAgICAgICAgICAgcmV2aWV3OiByKDAsIDIwMCksXHJcbiAgICAgICAgICAgIHJlcGx5OiByKDAsIDIwKSxcclxuICAgICAgICAgICAgdXBkYXRlOiByKDAsIDUpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgb2JqID0gZ2V0UmFuZG9tT2JqZWN0KCk7XHJcbiAgICAgICAgdXBkYXRlKG9iaik7XHJcbiAgICB9LCByKDEwLCAzMCkgKiAxMDAwKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINC+0LHQvdC+0LLQu9GP0LXQvCBqc29uRGF0YVxyXG4gICAgICAgICAqIEB0eXBlIHsqfEFycmF5fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBqc29uRGF0YS5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmlkID09PSBvYmouaWQgPyBhY2MucHVzaChvYmopIDogYWNjLnB1c2goaXRlbSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgICAgaW5pdFN0YXJ0KGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9iailcclxuICAgIH1cclxufSgpKTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNC0zIS4vaW5kZXguY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTMhLi9pbmRleC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS00LTMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9