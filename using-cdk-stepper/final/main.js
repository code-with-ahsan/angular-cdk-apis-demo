(self["webpackChunkusing_cdk_stepper"] = self["webpackChunkusing_cdk_stepper"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game.component */ 8339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [
    {
        path: '',
        redirectTo: 'game',
        pathMatch: 'full',
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_0__.GameComponent,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
    constructor() {
        this.title = 'Creating a multi-step game with CDK Stepper API';
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 1, consts: [["role", "banner", 1, "toolbar"], ["width", "40", "alt", "Angular Logo", "src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], [1, "spacer"], ["role", "main", 1, "content"], [1, "content__container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".content__container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFdBQUE7QUFBSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudCB7XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */", "[_nghost-%COMP%] {\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n      Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n      'Segoe UI Symbol';\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n    margin: 8px 0;\n  }\n\n  p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .spacer[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0 16px;\n  }\n\n  .toolbar[_ngcontent-%COMP%]   .notif-bell[_ngcontent-%COMP%] {\n    margin: 0 20px 0 16px;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 120px auto 32px;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n    flex: 1;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%] {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: #888;\n  }\n\n  .card-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n  }\n\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card[_ngcontent-%COMP%] {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 60px;\n  }\n\n  svg#rocket[_ngcontent-%COMP%] {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke[_ngcontent-%COMP%] {\n    height: calc(100vh - 95px);\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #125699;\n  }\n\n  .terminal[_ngcontent-%COMP%] {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal[_ngcontent-%COMP%]::before {\n    content: '\\2022 \\2022 \\2022';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link[_ngcontent-%COMP%]:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer[_ngcontent-%COMP%] {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%] {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27, 31, 35, 0.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,\n      sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]:hover {\n    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n    border-color: rgba(27, 31, 35, 0.35);\n    background-position: -0.5em;\n  }\n\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n  \n  @media screen and (max-width: 767px) {\n    .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\n      width: 100%;\n    }\n\n    .card[_ngcontent-%COMP%]:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke[_ngcontent-%COMP%] {\n      display: none;\n      visibility: hidden;\n    }\n  }"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dice/dice.component */ 8990);
/* harmony import */ var _components_value_guesser_value_guesser_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/value-guesser/value-guesser.component */ 2493);
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.component */ 8339);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/leader-board/leader-board.component */ 2063);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _components_game_stepper_game_stepper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game-stepper/game-stepper.component */ 1761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__.CdkStepperModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_2__.DiceComponent,
        _components_value_guesser_value_guesser_component__WEBPACK_IMPORTED_MODULE_3__.ValueGuesserComponent,
        _game_game_component__WEBPACK_IMPORTED_MODULE_4__.GameComponent,
        _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_5__.LeaderBoardComponent,
        _components_game_stepper_game_stepper_component__WEBPACK_IMPORTED_MODULE_6__.GameStepperComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__.CdkStepperModule] }); })();


/***/ }),

/***/ 8990:
/*!***************************************************!*\
  !*** ./src/app/components/dice/dice.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DiceComponent": () => (/* binding */ DiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var src_app_constants_roll_transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/roll-transitions */ 8797);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function DiceComponent_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 4);
} }
function DiceComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DiceComponent_li_2_span_1_Template, 1, 0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const side_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-side", side_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", side_r1.dots);
} }
class DiceComponent {
    constructor(el) {
        this.el = el;
        this.dice = {
            sides: [],
        };
        this.diceRolled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.dice.sides = new Array(6).fill(0).map((_, index) => {
            let value = index + 1;
            return {
                value,
                dots: new Array(index + 1).fill(0),
            };
        });
        this.rollTransition = src_app_constants_roll_transitions__WEBPACK_IMPORTED_MODULE_0__.RollTransitions.TransitionOne;
        this.selectedSide = this.dice.sides[0];
    }
    ngOnInit() { }
    rollDice() {
        const index = Math.floor(Math.random() * 6);
        this.selectedSide = this.dice.sides[index];
        this.toggleRollTransition();
        setTimeout(() => {
            // we emit after the dice's animation has finished
            this.diceRolled.emit(this.selectedSide);
        }, 2000);
    }
    toggleRollTransition() {
        if (this.rollTransition === src_app_constants_roll_transitions__WEBPACK_IMPORTED_MODULE_0__.RollTransitions.TransitionOne) {
            this.rollTransition = src_app_constants_roll_transitions__WEBPACK_IMPORTED_MODULE_0__.RollTransitions.TransitionTwo;
        }
        else {
            this.rollTransition = src_app_constants_roll_transitions__WEBPACK_IMPORTED_MODULE_0__.RollTransitions.TransitionOne;
        }
    }
}
DiceComponent.ɵfac = function DiceComponent_Factory(t) { return new (t || DiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
DiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DiceComponent, selectors: [["app-dice"]], outputs: { diceRolled: "diceRolled" }, decls: 3, vars: 5, consts: [[1, "die-container"], ["class", "die-container__die__item", 4, "ngFor", "ngForOf"], [1, "die-container__die__item"], ["class", "dot", 4, "ngFor", "ngForOf"], [1, "dot"]], template: function DiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DiceComponent_li_2_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("die-container__die die-container__die--", ctx.rollTransition, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-roll", ctx.selectedSide.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dice.sides);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.die-container[_ngcontent-%COMP%] {\n  align-items: center;\n  display: grid;\n  grid-gap: 2rem;\n  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));\n  grid-template-rows: auto;\n  justify-items: center;\n  padding: 2rem;\n  perspective: 600px;\n}\n\n.die-container__die[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  height: 6rem;\n  list-style-type: none;\n  transform-style: preserve-3d;\n  width: 6rem;\n  margin: 0;\n  padding: 0;\n}\n\n.die-container__die__item[_ngcontent-%COMP%] {\n  background-color: #d1281c;\n  box-shadow: inset -0.35rem 0.35rem 0.75rem rgba(0, 0, 0, 0.3), inset 0.25rem -0.25rem 0.25rem rgba(0, 0, 0, 0.15);\n  display: grid;\n  grid-column: 1;\n  grid-row: 1;\n  grid-template-areas: \"one two three\" \"four five six\" \"seven eight nine\";\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(3, 1fr);\n  height: 100%;\n  padding: 1rem;\n  width: 100%;\n  border-radius: 6px;\n}\n\n.die-container__die--roll-transition-1[_ngcontent-%COMP%] {\n  transition: transform 1.5s ease-out;\n}\n\n.die-container__die--roll-transition-2[_ngcontent-%COMP%] {\n  transition: transform 1.25s ease-out;\n}\n\n.die-container__die--roll-transition-1[data-roll=\"1\"][_ngcontent-%COMP%] {\n  transform: rotateX(360deg) rotateY(720deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-1[data-roll=\"2\"][_ngcontent-%COMP%] {\n  transform: rotateX(450deg) rotateY(720deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-1[data-roll=\"3\"][_ngcontent-%COMP%] {\n  transform: rotateX(360deg) rotateY(630deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-1[data-roll=\"4\"][_ngcontent-%COMP%] {\n  transform: rotateX(360deg) rotateY(810deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-1[data-roll=\"5\"][_ngcontent-%COMP%] {\n  transform: rotateX(270deg) rotateY(720deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-1[data-roll=\"6\"][_ngcontent-%COMP%] {\n  transform: rotateX(360deg) rotateY(900deg) rotateZ(360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"1\"][_ngcontent-%COMP%] {\n  transform: rotateX(-360deg) rotateY(-720deg) rotateZ(-360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"2\"][_ngcontent-%COMP%] {\n  transform: rotateX(-270deg) rotateY(-720deg) rotateZ(-360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"3\"][_ngcontent-%COMP%] {\n  transform: rotateX(-360deg) rotateY(-810deg) rotateZ(-360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"4\"][_ngcontent-%COMP%] {\n  transform: rotateX(-360deg) rotateY(-630deg) rotateZ(-360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"5\"][_ngcontent-%COMP%] {\n  transform: rotateX(-450deg) rotateY(-720deg) rotateZ(-360deg);\n}\n\n.die-container__die--roll-transition-2[data-roll=\"6\"][_ngcontent-%COMP%] {\n  transform: rotateX(-360deg) rotateY(-900deg) rotateZ(-360deg);\n}\n\n.dot[_ngcontent-%COMP%] {\n  align-self: center;\n  background-color: #fff;\n  border-radius: 50%;\n  box-shadow: inset -0.15rem 0.15rem 0.25rem rgba(0, 0, 0, 0.5);\n  display: block;\n  height: 1.25rem;\n  justify-self: center;\n  width: 1.25rem;\n}\n\n[data-side=\"1\"][_ngcontent-%COMP%] {\n  transform: rotate3d(0, 0, 0, 90deg) translateZ(46px);\n}\n\n[data-side=\"2\"][_ngcontent-%COMP%] {\n  transform: rotate3d(-1, 0, 0, 90deg) translateZ(46px);\n}\n\n[data-side=\"3\"][_ngcontent-%COMP%] {\n  transform: rotate3d(0, 1, 0, 90deg) translateZ(46px);\n}\n\n[data-side=\"4\"][_ngcontent-%COMP%] {\n  transform: rotate3d(0, -1, 0, 90deg) translateZ(46px);\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%] {\n  transform: rotate3d(1, 0, 0, 90deg) translateZ(46px);\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%] {\n  transform: rotate3d(1, 0, 0, 180deg) translateZ(46px);\n}\n\n[data-side=\"1\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: five;\n}\n\n[data-side=\"2\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: one;\n}\n\n[data-side=\"2\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: nine;\n}\n\n[data-side=\"3\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: one;\n}\n\n[data-side=\"3\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: five;\n}\n\n[data-side=\"3\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(3) {\n  grid-area: nine;\n}\n\n[data-side=\"4\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: one;\n}\n\n[data-side=\"4\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: three;\n}\n\n[data-side=\"4\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(3) {\n  grid-area: seven;\n}\n\n[data-side=\"4\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(4) {\n  grid-area: nine;\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: one;\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: three;\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(3) {\n  grid-area: five;\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(4) {\n  grid-area: seven;\n}\n\n[data-side=\"5\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(5) {\n  grid-area: nine;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(1) {\n  grid-area: one;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: three;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(3) {\n  grid-area: four;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(4) {\n  grid-area: six;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(5) {\n  grid-area: seven;\n}\n\n[data-side=\"6\"][_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-of-type(6) {\n  grid-area: nine;\n}\n\n@media (min-width: 900px) {\n  .die-container__die[_ngcontent-%COMP%] {\n    perspective: 1300px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0FBREY7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMERBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUo7O0FBRUk7RUFDRSx5QkFBQTtFQUNBLGlIQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUVBQ0U7RUFHRixxQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKTjs7QUFPSTtFQUNFLG1DQUFBO0FBTE47O0FBUUk7RUFDRSxvQ0FBQTtBQU5OOztBQVNJO0VBQ0UsMERBQUE7QUFQTjs7QUFTSTtFQUNFLDBEQUFBO0FBUE47O0FBU0k7RUFDRSwwREFBQTtBQVBOOztBQVNJO0VBQ0UsMERBQUE7QUFQTjs7QUFTSTtFQUNFLDBEQUFBO0FBUE47O0FBU0k7RUFDRSwwREFBQTtBQVBOOztBQVVJO0VBQ0UsNkRBQUE7QUFSTjs7QUFVSTtFQUNFLDZEQUFBO0FBUk47O0FBVUk7RUFDRSw2REFBQTtBQVJOOztBQVVJO0VBQ0UsNkRBQUE7QUFSTjs7QUFVSTtFQUNFLDZEQUFBO0FBUk47O0FBVUk7RUFDRSw2REFBQTtBQVJOOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkRBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0Usb0RBQUE7QUFURjs7QUFXQTtFQUNFLHFEQUFBO0FBUkY7O0FBVUE7RUFDRSxvREFBQTtBQVBGOztBQVNBO0VBQ0UscURBQUE7QUFORjs7QUFRQTtFQUNFLG9EQUFBO0FBTEY7O0FBT0E7RUFDRSxxREFBQTtBQUpGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGOztBQUFBO0VBQ0UsY0FBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7QUFJRjs7QUFGQTtFQUNFLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtBQVNGOztBQVBBO0VBQ0UsZ0JBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGNBQUE7QUFZRjs7QUFWQTtFQUNFLGdCQUFBO0FBYUY7O0FBWEE7RUFDRSxlQUFBO0FBY0Y7O0FBWkE7RUFDRSxjQUFBO0FBZUY7O0FBYkE7RUFDRSxnQkFBQTtBQWdCRjs7QUFkQTtFQUNFLGVBQUE7QUFpQkY7O0FBZEE7RUFFSTtJQUNFLG1CQUFBO0VBZ0JKO0FBQ0YiLCJmaWxlIjoiZGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0cmFuc2xhdGUtejogNDZweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4uZGllLWNvbnRhaW5lciB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoOHJlbSwgMWZyKSk7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xyXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBlcnNwZWN0aXZlOiA2MDBweDtcclxuXHJcbiAgJl9fZGllIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxMjgxYztcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgLTAuMzVyZW0gMC4zNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgICAgICBpbnNldCAwLjI1cmVtIC0wLjI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAgIGdyaWQtcm93OiAxO1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICdvbmUgdHdvIHRocmVlJ1xyXG4gICAgICAgICdmb3VyIGZpdmUgc2l4J1xyXG4gICAgICAgICdzZXZlbiBlaWdodCBuaW5lJztcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0xIHtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEuNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTIge1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS4yNXMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPScxJ10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDcyMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPScyJ10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNDUwZGVnKSByb3RhdGVZKDcyMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPSczJ10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDYzMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPSc0J10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDgxMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPSc1J10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMjcwZGVnKSByb3RhdGVZKDcyMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG4gICAgJi0tcm9sbC10cmFuc2l0aW9uLTFbZGF0YS1yb2xsPSc2J10ge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKSByb3RhdGVZKDkwMGRlZykgcm90YXRlWigzNjBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nMSddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNjBkZWcpIHJvdGF0ZVkoLTcyMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nMiddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yNzBkZWcpIHJvdGF0ZVkoLTcyMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nMyddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNjBkZWcpIHJvdGF0ZVkoLTgxMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nNCddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNjBkZWcpIHJvdGF0ZVkoLTYzMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nNSddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC00NTBkZWcpIHJvdGF0ZVkoLTcyMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICAgICYtLXJvbGwtdHJhbnNpdGlvbi0yW2RhdGEtcm9sbD0nNiddIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0zNjBkZWcpIHJvdGF0ZVkoLTkwMGRlZykgcm90YXRlWigtMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRvdCB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IC0wLjE1cmVtIDAuMTVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG59XHJcblxyXG5bZGF0YS1zaWRlPScxJ10ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMCwgOTBkZWcpIHRyYW5zbGF0ZVooJHRyYW5zbGF0ZS16KTtcclxufVxyXG5bZGF0YS1zaWRlPScyJ10ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlM2QoLTEsIDAsIDAsIDkwZGVnKSB0cmFuc2xhdGVaKCR0cmFuc2xhdGUteik7XHJcbn1cclxuW2RhdGEtc2lkZT0nMyddIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDEsIDAsIDkwZGVnKSB0cmFuc2xhdGVaKCR0cmFuc2xhdGUteik7XHJcbn1cclxuW2RhdGEtc2lkZT0nNCddIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIC0xLCAwLCA5MGRlZykgdHJhbnNsYXRlWigkdHJhbnNsYXRlLXopO1xyXG59XHJcbltkYXRhLXNpZGU9JzUnXSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZykgdHJhbnNsYXRlWigkdHJhbnNsYXRlLXopO1xyXG59XHJcbltkYXRhLXNpZGU9JzYnXSB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAwLCAwLCAxODBkZWcpIHRyYW5zbGF0ZVooJHRyYW5zbGF0ZS16KTtcclxufVxyXG5bZGF0YS1zaWRlPScxJ10gLmRvdDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgZ3JpZC1hcmVhOiBmaXZlO1xyXG59XHJcbltkYXRhLXNpZGU9JzInXSAuZG90Om50aC1vZi10eXBlKDEpIHtcclxuICBncmlkLWFyZWE6IG9uZTtcclxufVxyXG5bZGF0YS1zaWRlPScyJ10gLmRvdDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgZ3JpZC1hcmVhOiBuaW5lO1xyXG59XHJcbltkYXRhLXNpZGU9JzMnXSAuZG90Om50aC1vZi10eXBlKDEpIHtcclxuICBncmlkLWFyZWE6IG9uZTtcclxufVxyXG5bZGF0YS1zaWRlPSczJ10gLmRvdDpudGgtb2YtdHlwZSgyKSB7XHJcbiAgZ3JpZC1hcmVhOiBmaXZlO1xyXG59XHJcbltkYXRhLXNpZGU9JzMnXSAuZG90Om50aC1vZi10eXBlKDMpIHtcclxuICBncmlkLWFyZWE6IG5pbmU7XHJcbn1cclxuW2RhdGEtc2lkZT0nNCddIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGdyaWQtYXJlYTogb25lO1xyXG59XHJcbltkYXRhLXNpZGU9JzQnXSAuZG90Om50aC1vZi10eXBlKDIpIHtcclxuICBncmlkLWFyZWE6IHRocmVlO1xyXG59XHJcbltkYXRhLXNpZGU9JzQnXSAuZG90Om50aC1vZi10eXBlKDMpIHtcclxuICBncmlkLWFyZWE6IHNldmVuO1xyXG59XHJcbltkYXRhLXNpZGU9JzQnXSAuZG90Om50aC1vZi10eXBlKDQpIHtcclxuICBncmlkLWFyZWE6IG5pbmU7XHJcbn1cclxuW2RhdGEtc2lkZT0nNSddIC5kb3Q6bnRoLW9mLXR5cGUoMSkge1xyXG4gIGdyaWQtYXJlYTogb25lO1xyXG59XHJcbltkYXRhLXNpZGU9JzUnXSAuZG90Om50aC1vZi10eXBlKDIpIHtcclxuICBncmlkLWFyZWE6IHRocmVlO1xyXG59XHJcbltkYXRhLXNpZGU9JzUnXSAuZG90Om50aC1vZi10eXBlKDMpIHtcclxuICBncmlkLWFyZWE6IGZpdmU7XHJcbn1cclxuW2RhdGEtc2lkZT0nNSddIC5kb3Q6bnRoLW9mLXR5cGUoNCkge1xyXG4gIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuW2RhdGEtc2lkZT0nNSddIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xyXG4gIGdyaWQtYXJlYTogbmluZTtcclxufVxyXG5bZGF0YS1zaWRlPSc2J10gLmRvdDpudGgtb2YtdHlwZSgxKSB7XHJcbiAgZ3JpZC1hcmVhOiBvbmU7XHJcbn1cclxuW2RhdGEtc2lkZT0nNiddIC5kb3Q6bnRoLW9mLXR5cGUoMikge1xyXG4gIGdyaWQtYXJlYTogdGhyZWU7XHJcbn1cclxuW2RhdGEtc2lkZT0nNiddIC5kb3Q6bnRoLW9mLXR5cGUoMykge1xyXG4gIGdyaWQtYXJlYTogZm91cjtcclxufVxyXG5bZGF0YS1zaWRlPSc2J10gLmRvdDpudGgtb2YtdHlwZSg0KSB7XHJcbiAgZ3JpZC1hcmVhOiBzaXg7XHJcbn1cclxuW2RhdGEtc2lkZT0nNiddIC5kb3Q6bnRoLW9mLXR5cGUoNSkge1xyXG4gIGdyaWQtYXJlYTogc2V2ZW47XHJcbn1cclxuW2RhdGEtc2lkZT0nNiddIC5kb3Q6bnRoLW9mLXR5cGUoNikge1xyXG4gIGdyaWQtYXJlYTogbmluZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XHJcbiAgLmRpZS1jb250YWluZXIge1xyXG4gICAgJl9fZGllIHtcclxuICAgICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1761:
/*!*******************************************************************!*\
  !*** ./src/app/components/game-stepper/game-stepper.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStepperComponent": () => (/* binding */ GameStepperComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);




function GameStepperComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0, 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.selected.stepLabel.template);
} }
function GameStepperComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.selected.label, " ");
} }
class GameStepperComponent extends _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper {
}
GameStepperComponent.ɵfac = /*@__PURE__*/ function () { let ɵGameStepperComponent_BaseFactory; return function GameStepperComponent_Factory(t) { return (ɵGameStepperComponent_BaseFactory || (ɵGameStepperComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](GameStepperComponent)))(t || GameStepperComponent); }; }();
GameStepperComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameStepperComponent, selectors: [["app-game-stepper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepper, useExisting: GameStepperComponent }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 8, consts: [[1, "game-stepper"], [3, "ngTemplateOutlet", 4, "ngIf", "ngIfElse"], ["showLabelText", ""], [1, "game-stepper__content"], [3, "ngTemplateOutlet"], [1, "game-stepper__navigation"], ["cdkStepperPrevious", "", 1, "game-stepper__navigation__button", "btn", "btn-primary"], ["cdkStepperNext", "", 1, "game-stepper__navigation__button", "btn", "btn-primary", 3, "disabled"]], template: function GameStepperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameStepperComponent_ng_container_3_Template, 1, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameStepperComponent_ng_template_4_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2190 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u2192 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.stepLabel)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.steps.get(ctx.selectedIndex - 1) ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("visibility", ctx.steps.get(ctx.selectedIndex + 1) ? "visible" : "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.selected.completed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperPrevious, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_1__.CdkStepperNext], styles: [".game-stepper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.game-stepper__navigation[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.game-stepper__navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n.game-stepper__content[_ngcontent-%COMP%] {\n  min-height: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.game-stepper[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], .game-stepper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUtc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQUk7RUFDRSxhQUFBO0FBRU47QUFFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFKO0FBR0U7O0VBRUUsaUJBQUE7QUFESiIsImZpbGUiOiJnYW1lLXN0ZXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1zdGVwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fbmF2aWdhdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgPiBidXR0b24ge1xyXG4gICAgICBtYXJnaW46IDAgOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyLFxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2063:
/*!*******************************************************************!*\
  !*** ./src/app/components/leader-board/leader-board.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderBoardComponent": () => (/* binding */ LeaderBoardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);


function LeaderBoardComponent_ng_container_4_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r4.score);
} }
function LeaderBoardComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LeaderBoardComponent_ng_container_4_li_1_Template, 5, 2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx_r0.scores, 0, 5));
} }
function LeaderBoardComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No scores to show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LeaderBoardComponent {
    constructor() {
        this.scores = [];
    }
    ngOnInit() { }
}
LeaderBoardComponent.ɵfac = function LeaderBoardComponent_Factory(t) { return new (t || LeaderBoardComponent)(); };
LeaderBoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeaderBoardComponent, selectors: [["app-leader-board"]], inputs: { scores: "scores" }, decls: 7, vars: 2, consts: [[1, "leaderboard"], [4, "ngIf", "ngIfElse"], ["noContent", ""], [4, "ngFor", "ngForOf"], [1, "leaderboard__no-content"]], template: function LeaderBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Leaderboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LeaderBoardComponent_ng_container_4_Template, 3, 5, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LeaderBoardComponent_ng_template_5_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.scores && ctx.scores.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.SlicePipe], styles: [".leaderboard[_ngcontent-%COMP%] {\n  width: 285px;\n  height: 308px;\n  margin: 0 auto;\n  background: linear-gradient(to bottom, #3a404d, #181c26);\n  border-radius: 10px;\n  box-shadow: 0 7px 30px rgba(62, 9, 11, 0.3);\n}\n.leaderboard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 14px 13px 8px;\n  font-size: 18px;\n  color: #e1e1e1;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.leaderboard__no-content[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  background-color: #fff;\n  padding: 10px 0;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  counter-reset: leaderboard;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  font-size: 14px;\n  counter-increment: leaderboard;\n  padding: 18px 10px 18px 50px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: translateZ(0) scale(1, 1);\n  display: flex;\n  align-items: center;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: counter(leaderboard);\n  position: absolute;\n  z-index: 2;\n  top: 22px;\n  left: 15px;\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  color: #c24448;\n  background: #fff;\n  border-radius: 20px;\n  text-align: center;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   mark[_ngcontent-%COMP%] {\n  z-index: 2;\n  background: none;\n  color: #fff;\n  flex: 1;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  text-align: right;\n  color: white;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #fa6855;\n  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease-in-out;\n  opacity: 0;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  background: #fa6855;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)::after {\n  background: #fa6855;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  background: #e0574f;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)::after {\n  background: #e0574f;\n  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.08);\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   mark[_ngcontent-%COMP%]::before, .leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   mark[_ngcontent-%COMP%]::after {\n  border-top: 6px solid #ba4741;\n  bottom: -7px;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  background: #d7514d;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)::after {\n  background: #d7514d;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.11);\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   mark[_ngcontent-%COMP%]::before, .leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   mark[_ngcontent-%COMP%]::after {\n  border-top: 2px solid #b0433f;\n  bottom: -3px;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  background: #cd4b4b;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)::after {\n  background: #cd4b4b;\n  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   mark[_ngcontent-%COMP%]::before, .leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   mark[_ngcontent-%COMP%]::after {\n  top: -7px;\n  bottom: auto;\n  border-top: none;\n  border-bottom: 6px solid #a63d3d;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  background: #c24448;\n  border-radius: 0 0 10px 10px;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)::after {\n  background: #c24448;\n  box-shadow: 0 -2.5px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 0 0 10px 10px;\n}\n.leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   mark[_ngcontent-%COMP%]::before, .leaderboard[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   mark[_ngcontent-%COMP%]::after {\n  top: -9px;\n  bottom: auto;\n  border-top: none;\n  border-bottom: 8px solid #993639;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYWRlci1ib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7cUJBQUE7QUFHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUVBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQURGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0E7RUFDRSwwQkFBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFFQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQUFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7QUFHRjtBQURBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUlGO0FBRkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFFQSxnQ0FBQTtFQUNBLFVBQUE7QUFLRjtBQUhBO0VBQ0UsbUJBQUE7QUFNRjtBQUpBO0VBQ0UsbUJBQUE7QUFPRjtBQUxBO0VBQ0UsbUJBQUE7QUFRRjtBQU5BO0VBQ0UsbUJBQUE7RUFDQSx1Q0FBQTtBQVNGO0FBUEE7O0VBRUUsNkJBQUE7RUFDQSxZQUFBO0FBVUY7QUFSQTtFQUNFLG1CQUFBO0FBV0Y7QUFUQTtFQUNFLG1CQUFBO0VBQ0EsdUNBQUE7QUFZRjtBQVZBOztFQUVFLDZCQUFBO0VBQ0EsWUFBQTtBQWFGO0FBWEE7RUFDRSxtQkFBQTtBQWNGO0FBWkE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0FBZUY7QUFiQTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFnQkY7QUFkQTtFQUNFLG1CQUFBO0VBQ0EsNEJBQUE7QUFpQkY7QUFmQTtFQUNFLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtBQWtCRjtBQWhCQTs7RUFFRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUFtQkYiLCJmaWxlIjoibGVhZGVyLWJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZSBjcmVkaXRzIGh0dHBzOi8vYm9vdHNuaXBwLmNvbS9zbmlwcGV0cy9leEFlNlxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5MZWFkZXJib2FyZFxyXG4tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5sZWFkZXJib2FyZCB7XHJcbiAgd2lkdGg6IDI4NXB4O1xyXG4gIGhlaWdodDogMzA4cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjM2E0MDRkLCAjMTgxYzI2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM2E0MDRkLCAjMTgxYzI2KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgN3B4IDMwcHggcmdiYSg2MiwgOSwgMTEsIDAuMyk7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxM3B4IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjZTFlMWUxO1xyXG4gIH1cclxuICBvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAmX19uby1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIHtcclxuICBjb3VudGVyLXJlc2V0OiBsZWFkZXJib2FyZDtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb3VudGVyLWluY3JlbWVudDogbGVhZGVyYm9hcmQ7XHJcbiAgcGFkZGluZzogMThweCAxMHB4IDE4cHggNTBweDtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgc2NhbGUoMSwgMSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEsIDEpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6OmJlZm9yZSB7XHJcbiAgY29udGVudDogY291bnRlcihsZWFkZXJib2FyZCk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdG9wOiAyMnB4O1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjYzI0NDQ4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIGxpIG1hcmsge1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmbGV4OiAxO1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaSBzbWFsbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmE2ODU1O1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjg1NTtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDEpOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZhNjg1NTtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDIpIHtcclxuICBiYWNrZ3JvdW5kOiAjZTA1NzRmO1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMik6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTA1NzRmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDIpIG1hcms6OmJlZm9yZSxcclxuLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgyKSBtYXJrOjphZnRlciB7XHJcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICNiYTQ3NDE7XHJcbiAgYm90dG9tOiAtN3B4O1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMykge1xyXG4gIGJhY2tncm91bmQ6ICNkNzUxNGQ7XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCgzKTo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkNzUxNGQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTEpO1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoMykgbWFyazo6YmVmb3JlLFxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDMpIG1hcms6OmFmdGVyIHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2IwNDMzZjtcclxuICBib3R0b206IC0zcHg7XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg0KSB7XHJcbiAgYmFja2dyb3VuZDogI2NkNGI0YjtcclxufVxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDQpOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogI2NkNGI0YjtcclxuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNCkgbWFyazo6YmVmb3JlLFxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDQpIG1hcms6OmFmdGVyIHtcclxuICB0b3A6IC03cHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICNhNjNkM2Q7XHJcbn1cclxuLmxlYWRlcmJvYXJkIG9sIGxpOm50aC1jaGlsZCg1KSB7XHJcbiAgYmFja2dyb3VuZDogI2MyNDQ0ODtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNSk6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzI0NDQ4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTIuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG59XHJcbi5sZWFkZXJib2FyZCBvbCBsaTpudGgtY2hpbGQoNSkgbWFyazo6YmVmb3JlLFxyXG4ubGVhZGVyYm9hcmQgb2wgbGk6bnRoLWNoaWxkKDUpIG1hcms6OmFmdGVyIHtcclxuICB0b3A6IC05cHg7XHJcbiAgYm90dG9tOiBhdXRvO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkICM5OTM2Mzk7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2493:
/*!*********************************************************************!*\
  !*** ./src/app/components/value-guesser/value-guesser.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValueGuesserComponent": () => (/* binding */ ValueGuesserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8583);



function ValueGuesserComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValueGuesserComponent_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const value_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.guessValue(value_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("values__value-box--selected", value_r1 === ctx_r0.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](value_r1);
} }
const _c0 = function () { return [1, 2, 3, 4, 5, 6]; };
class ValueGuesserComponent {
    constructor() {
        this.valueGuessed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.selected = null;
    }
    ngOnInit() { }
    reset() {
        this.selected = null;
    }
    guessValue(value) {
        this.selected = value;
        this.valueGuessed.emit(value);
    }
}
ValueGuesserComponent.ɵfac = function ValueGuesserComponent_Factory(t) { return new (t || ValueGuesserComponent)(); };
ValueGuesserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ValueGuesserComponent, selectors: [["app-value-guesser"]], outputs: { valueGuessed: "valueGuessed" }, decls: 2, vars: 2, consts: [[1, "values"], ["class", "values__value-box", 3, "values__value-box--selected", "click", 4, "ngFor", "ngForOf"], [1, "values__value-box", 3, "click"], [1, "values__value-box__number"]], template: function ValueGuesserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValueGuesserComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.values[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.values__value-box[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  background-color: #333;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 16px;\n  cursor: pointer;\n}\n\n.values__value-box--selected[_ngcontent-%COMP%], .values__value-box[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWd1ZXNzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUVGOztBQURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBR0o7O0FBRkk7RUFFRSx5QkFBQTtBQUdOIiwiZmlsZSI6InZhbHVlLWd1ZXNzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnZhbHVlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gICZfX3ZhbHVlLWJveCB7XHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogNXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmLS1zZWxlY3RlZCxcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 8797:
/*!***********************************************!*\
  !*** ./src/app/constants/roll-transitions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RollTransitions": () => (/* binding */ RollTransitions)
/* harmony export */ });
var RollTransitions;
(function (RollTransitions) {
    RollTransitions["TransitionOne"] = "roll-transition-1";
    RollTransitions["TransitionTwo"] = "roll-transition-2";
})(RollTransitions || (RollTransitions = {}));


/***/ }),

/***/ 4919:
/*!******************************************************!*\
  !*** ./src/app/core/services/leaderboard.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeaderboardService": () => (/* binding */ LeaderboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);

class LeaderboardService {
    constructor() {
        this.gameName = 'guessGame';
    }
    getScores() {
        try {
            return JSON.parse(localStorage.getItem(this.gameName)) || [];
        }
        catch (e) {
            return [];
        }
    }
    setScores(newScoreEntry) {
        let scores = this.getScores();
        const existingScoreIndex = scores.findIndex((scoreItem) => {
            return scoreItem.name === newScoreEntry.name;
        });
        if (existingScoreIndex !== -1) {
            const newScore = scores[existingScoreIndex].score + newScoreEntry.score;
            scores[existingScoreIndex] = Object.assign(Object.assign({}, scores[existingScoreIndex]), { score: newScore });
        }
        else {
            scores = [...scores, newScoreEntry];
            scores.sort((a, b) => {
                return b.score - a.score;
            });
        }
        localStorage.setItem(this.gameName, JSON.stringify(scores));
        return scores;
    }
}
LeaderboardService.ɵfac = function LeaderboardService_Factory(t) { return new (t || LeaderboardService)(); };
LeaderboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LeaderboardService, factory: LeaderboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8339:
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameComponent": () => (/* binding */ GameComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ 1394);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/dice/dice.component */ 8990);
/* harmony import */ var _components_value_guesser_value_guesser_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/value-guesser/value-guesser.component */ 2493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _core_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/leaderboard.service */ 4919);
/* harmony import */ var _components_game_stepper_game_stepper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/game-stepper/game-stepper.component */ 1761);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/leader-board/leader-board.component */ 2063);













function GameComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Enter your name");
} }
function GameComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Player Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Please enter player name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const nameControl_r6 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", nameControl_r6.getError("required") && !nameControl_r6.pristine ? "block" : "none");
} }
function GameComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, "Guess what the value will be when the die is rolled");
} }
function GameComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" You rock ", ctx_r3.nameForm.get("name").value, "! You got 50 points ");
} }
function GameComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Oops! Try again! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function GameComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](0, " Results");
} }
class GameComponent {
    constructor(leaderboardService) {
        this.leaderboardService = leaderboardService;
        this.guessedValue = null;
        this.isCorrectGuess = null;
        this.nameForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
        });
        this.scores = [];
    }
    ngOnInit() {
        this.scores = this.leaderboardService.getScores();
    }
    submitName() {
        this.stepper.next();
    }
    rollTheDice(guessedValue) {
        this.isCorrectGuess = null;
        this.guessedValue = guessedValue;
        this.diceComponent.rollDice();
    }
    showResult(diceSide) {
        this.isCorrectGuess = this.guessedValue === diceSide.value;
        if (!this.isCorrectGuess) {
            return;
        }
        this.scores = this.leaderboardService.setScores({
            name: this.nameForm.get('name').value,
            score: 50,
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_leaderboard_service__WEBPACK_IMPORTED_MODULE_2__.LeaderboardService)); };
GameComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepper, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_dice_dice_component__WEBPACK_IMPORTED_MODULE_0__.DiceComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_components_value_guesser_value_guesser_component__WEBPACK_IMPORTED_MODULE_1__.ValueGuesserComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.diceComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.valueGuesserComponent = _t.first);
    } }, decls: 15, vars: 9, consts: [[3, "linear"], [3, "completed"], ["cdkStepLabel", ""], [3, "formGroup", "ngSubmit"], ["class", "mb-3", 4, "ngIf"], [3, "valueGuessed"], [3, "diceRolled"], [3, "ngSwitch"], ["class", "alert alert-success", 4, "ngSwitchCase"], ["class", "alert alert-danger", 4, "ngSwitchCase"], [3, "scores"], [1, "mb-3"], ["for", "nameInput", 1, "form-label"], ["type", "text", "formControlName", "name", "id", "nameInput", "placeholder", "Enter your name", 1, "form-control"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-game-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "cdk-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, GameComponent_ng_template_2_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function GameComponent_Template_form_ngSubmit_3_listener() { return ctx.submitName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, GameComponent_div_4_Template, 6, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "cdk-step", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, GameComponent_ng_template_6_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "app-value-guesser", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueGuessed", function GameComponent_Template_app_value_guesser_valueGuessed_7_listener($event) { return ctx.rollTheDice($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "app-dice", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("diceRolled", function GameComponent_Template_app_dice_diceRolled_8_listener($event) { return ctx.showResult($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, GameComponent_div_10_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, GameComponent_div_11_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "cdk-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, GameComponent_ng_template_13_Template, 1, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-leader-board", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linear", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("completed", !!ctx.nameForm.get("name").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.nameForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.nameForm.get("name"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("completed", ctx.isCorrectGuess !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.isCorrectGuess);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scores", ctx.scores);
    } }, directives: [_components_game_stepper_game_stepper_component__WEBPACK_IMPORTED_MODULE_3__.GameStepperComponent, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStep, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__.CdkStepLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_value_guesser_value_guesser_component__WEBPACK_IMPORTED_MODULE_1__.ValueGuesserComponent, _components_dice_dice_component__WEBPACK_IMPORTED_MODULE_0__.DiceComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _components_leader_board_leader_board_component__WEBPACK_IMPORTED_MODULE_4__.LeaderBoardComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName], styles: ["[_nghost-%COMP%] {\n  display: block;\n  max-width: 690px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXgtd2lkdGg6IDY5MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map