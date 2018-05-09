webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .menu-overlay {\n    position: fixed;\n    z-index: 1;\n    color: white;\n    }\n\n\n  .header {\n    top: 0;\n    left: 0;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    box-shadow: 0px -5px 15px 5px #111;\n  }\n\n \n  .footer {\n    bottom: 0;\n    left: 0;\n    box-shadow: 0px 5px 15px 5px #111;\n  }\n\n  .spacer {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 1 auto;\n              flex: 1 1 auto;\n  }\n  \n  .spacer-button {\n    position: absolute;\n    top: 10px;\n    right: 0;\n  }\n\n  .site-content {\n    padding: 70px 0;\n  }\n\n  .pagination {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background-color: transparent;\n  }\n\n  .footer span {\n    font-size: 12px;\n  }\n\n  .love i {\n    font-size: 16px;\n    color: red;\n  }\n\n  .social i {\n    font-size: 30px;\n  }\n\n  .social a {\n    text-decoration: none !important;\n    color: black;\n  }\n\n  mat-toolbar {\n    background-color: #3f51b5;\n  }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Menu -->\n<mat-toolbar class=\"menu-overlay header\">\n  <span>Book Library</span>\n  <span class=\"spacer-button\">\n  <button mat-icon-button [matMenuTriggerFor]=\"addmenu\">\n    <mat-icon>toc</mat-icon>\n  </button>\n  </span>\n</mat-toolbar>\n\n<!-- Menu Options -->\n<mat-menu #addmenu>\n  <button mat-menu-item (click)=\"editDialog(null)\">\n    <mat-icon>add</mat-icon>\n    <span>New Book</span>\n  </button>\n</mat-menu>\n\n<!-- Cotent -->\n<div class=\"site-content\">\n\n  <!-- Books List -->\n<mat-grid-list cols=\"4\" rowHeight=\"2:6\">\n  <mat-grid-tile\n      *ngFor=\"let book of booksForCurrentPage\">\n      <app-book-card (editt)=\"editDialog(book)\" (delete)=\"deleteSnackbar(book)\" [book]=\"book\"></app-book-card>\n  </mat-grid-tile>\n</mat-grid-list>\n</div>\n\n\n\n<!-- Footer -->\n<mat-toolbar class=\"menu-overlay footer\">\n  <span class=\"spacer\">\n    <!-- Pagination -->\n    <mat-paginator class=\"pagination\" [length]=\"allBooks.length\" [pageSize]=\"pageSize\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onPaginationChanged($event)\">\n    </mat-paginator>\n  </span>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__ = __webpack_require__("../../../../../src/app/services/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modals_book_modal_book_modal_component__ = __webpack_require__("../../../../../src/app/modals/book-modal/book-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Pipes

// Modals

var AppComponent = (function () {
    function AppComponent(bService, snackBar, capitalize, dialog) {
        this.bService = bService;
        this.snackBar = snackBar;
        this.capitalize = capitalize;
        this.dialog = dialog;
        this.allBooks = [];
        this.booksForCurrentPage = [];
        // MatPaginator Inputs
        this.length = 0;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        // Subscritions
        this.subscriptions = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Component AppComponent Init Started!');
        this.getBooks();
        this.getBooksPerPage(this.pageSize, 0);
        this.initViewModel();
    };
    /**
     * Initialise all of the current component view model
     */
    AppComponent.prototype.initViewModel = function () {
        this.pageEvent = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* PageEvent */];
        this.pageEvent.length = this.allBooks.length;
        this.pageEvent.pageIndex = 0;
    };
    /**
     * Get all books from API
     */
    AppComponent.prototype.getBooks = function () {
        var _this = this;
        this.subscriptions.push(this.bService.GetAll().subscribe(function (books) {
            _this.allBooks = books;
        }, function (err) {
            console.error(err);
        }));
    };
    /**
     * Return number of books according to pageSize and to the appropriate pageIndex
     * @param pageSize Number of books per page
     * @param pageIndex Page Number
     */
    AppComponent.prototype.getBooksPerPage = function (pageSize, pageIndex) {
        var _this = this;
        this.subscriptions.push(this.bService.GetAllPerPage(pageSize, pageIndex).subscribe(function (books) {
            _this.booksForCurrentPage = books;
        }, function (err) {
            console.error(err);
        }));
    };
    /**
     * Handle delete book click event
     * @param book
     */
    AppComponent.prototype.deleteSnackbar = function (book) {
        var _this = this;
        var deleteQuestion = "Are you sure you want to delete " + this.capitalize.transform(book.title) + "?";
        var deleteSuccess = this.capitalize.transform(book.title) + " deleted succesfully";
        var deleteSnackBarRef = this.snackBar.open(deleteQuestion, 'Yes', {
            duration: 2000,
        });
        // will listen to the action button on the snackBar
        this.subscriptions.push(deleteSnackBarRef.onAction().subscribe(function () {
            _this.booksForCurrentPage = _this.booksForCurrentPage.filter(function (b) { return b.id !== book.id; });
            _this.allBooks = _this.allBooks.filter(function (b) { return b.id !== book.id; });
            _this.snackBar.open(deleteSuccess, null, {
                duration: 2000,
            });
        }));
    };
    /**
     * Handle edit/new dialog button click
     * @param book
     */
    AppComponent.prototype.editDialog = function (book) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__modals_book_modal_book_modal_component__["a" /* BookModalComponent */], {
            data: book,
            disableClose: true
        });
        this.subscriptions.push(dialogRef.afterClosed().subscribe(function (response) {
            if (response === null) {
                return;
            }
            var isNew = false;
            if (response.id === null) {
                response.id = _this.allBooks.length;
                isNew = true;
            }
            _this.subscriptions.push(_this.bService.AddBook(response).subscribe(function () {
                if (isNew) {
                    _this.allBooks = _this.allBooks.concat([response]);
                    // this.allBooks = [response, ...this.allBooks];
                    // this.booksForCurrentPage.pop();
                    // this.booksForCurrentPage = [response , ...this.booksForCurrentPage];
                }
                else {
                    _this.allBooks[response.id - 1] = response;
                    _this.booksForCurrentPage[response.id - 1] = response;
                }
            }, function (err) {
                console.error(err);
            }));
        }));
    };
    /**
     * Handle pagination event
     * @param event
     */
    AppComponent.prototype.onPaginationChanged = function (event) {
        this.getBooksPerPage(event.pageSize, event.pageIndex);
    };
    /**
     * Dispose all subscriptions when component destroyed
     */
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Component AppComponent Destroyed!');
        this.subscriptions.forEach(function (subscription) { return subscription.unsubscribe(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__pipes_capitalize_pipe__["a" /* CapitalizePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__pipes_capitalize_pipe__["a" /* CapitalizePipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialog */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_books_books_service__ = __webpack_require__("../../../../../src/app/services/books/books.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_in_memory_data_in_memory_data_service__ = __webpack_require__("../../../../../src/app/services/in-memory-data/in-memory-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_book_card_book_card_component__ = __webpack_require__("../../../../../src/app/components/book-card/book-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_capitalize_pipe__ = __webpack_require__("../../../../../src/app/pipes/capitalize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modals_book_modal_book_modal_component__ = __webpack_require__("../../../../../src/app/modals/book-modal/book-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validators_book_validators_validator__ = __webpack_require__("../../../../../src/app/validators/book-validators.validator.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Angular Material

// Application Services

// Imports for loading & configuring the in-memory web api


// Components




// Validators

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_book_card_book_card_component__["a" /* BookCardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
            __WEBPACK_IMPORTED_MODULE_12__modals_book_modal_book_modal_component__["a" /* BookModalComponent */],
            __WEBPACK_IMPORTED_MODULE_13__validators_book_validators_validator__["a" /* DuplicateTitleValidatorDirective */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__modals_book_modal_book_modal_component__["a" /* BookModalComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatPaginatorModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__services_in_memory_data_in_memory_data_service__["a" /* InMemoryDataService */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_books_books_service__["a" /* BooksService */],
            __WEBPACK_IMPORTED_MODULE_11__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card-avatar {\n  height: 80px;\n  border-radius: 0;\n  width: auto;\n}\n.img-book {\n  height: 350px;\n}\n.mat-expansion-panel-header-description {\n  -webkit-box-flex: 0;\n      -ms-flex-positive: 0;\n          flex-grow: 0;\n}\n\n.mat-expansion-panel {\n  margin-bottom: 5px;\n}\n.example-card {\n  max-width: 200px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.html":
/***/ (function(module, exports) {

module.exports = "  <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{book.title | capitalize }}</mat-card-title>\n        <mat-card-subtitle>{{book.author}}</mat-card-subtitle>\n        <mat-card-subtitle>{{ book.date | date:'dd/MM/yyyy' }}</mat-card-subtitle>\n      </mat-card-header>\n      <img class=\"img-book\" mat-card-image src={{book.imageUrl}} alt={{book.title}}>\n      <mat-card-content>\n        <p>\n            {{book.description}}\n        </p>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-button (click)=\"editBook()\" >Edit</button>\n        <button mat-button (click)=\"deleteBook()\">Delete</button>\n      </mat-card-actions>\n    </mat-card>"

/***/ }),

/***/ "../../../../../src/app/components/book-card/book-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_book_interface__ = __webpack_require__("../../../../../src/app/interfaces/book.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_book_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_book_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Interfaces

var BookCardComponent = (function () {
    function BookCardComponent() {
        this.book = null;
        this.editt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.delete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    BookCardComponent.prototype.editBook = function () {
        this.editt.emit(this.book);
    };
    BookCardComponent.prototype.deleteBook = function () {
        this.delete.emit(this.book);
    };
    return BookCardComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_book_interface__["IBook"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_book_interface__["IBook"]) === "function" && _a || Object)
], BookCardComponent.prototype, "book", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
], BookCardComponent.prototype, "editt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _c || Object)
], BookCardComponent.prototype, "delete", void 0);
BookCardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-book-card',
        template: __webpack_require__("../../../../../src/app/components/book-card/book-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/book-card/book-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BookCardComponent);

var _a, _b, _c;
//# sourceMappingURL=book-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/book.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=book.interface.js.map

/***/ }),

/***/ "../../../../../src/app/modals/book-modal/book-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-card {\n  box-shadow: none !important;\n  padding: 14px;\n}\n\n.mat-form-field {\n  padding: 10px 0;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/book-modal/book-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>{{dialogTitle}}</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <form [formGroup]=\"bookFormGroup\" #bookForm=\"ngForm\">\n      <mat-form-field>\n        <input matInput formControlName=\"authorFormControl\" [(ngModel)]=\"formBook.author\" placeholder=\"Author\" >\n        <mat-error *ngIf=\"bookFormGroup.get('authorFormControl').hasError('required')\">\n          Author is\n          <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"bookFormGroup.get('authorFormControl').hasError('pattern')\">\n          Author name can only contain\n          <strong>english alphabet, spaces, commas and periods</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field >\n        <input matInput formControlName=\"titleFormControl\" [(ngModel)]=\"formBook.title\" appDuplicateTitle placeholder=\"Title\">\n        <mat-error *ngIf=\"bookFormGroup.get('titleFormControl').hasError('required')\">\n          Title is\n          <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"bookFormGroup.get('titleFormControl').hasError('pattern')\">\n          Title can only contain\n          <strong>english alphabet, spaces, commas and periods</strong>\n        </mat-error>\n        <mat-error *ngIf=\"bookFormGroup.get('titleFormControl').hasError('appDuplicateTitle')\">\n          Title with the same\n          <strong>name</strong> already exist\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput formControlName=\"dateFormControl\" [(ngModel)]=\"formBook.date\" placeholder=\"Published At\" [max]=\"maxDate\"\n          [matDatepicker]=\"myDatepicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"myDatepicker\"></mat-datepicker-toggle>\n        <mat-datepicker #myDatepicker></mat-datepicker>\n        <mat-error *ngIf=\"bookFormGroup.get('dateFormControl').hasError('required')\">\n          Date is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput formControlName=\"imageUrlFormControl\" [(ngModel)]=\"formBook.imageUrl\" placeholder=\"Image Url\">\n        <mat-error *ngIf=\"bookFormGroup.get('imageUrlFormControl').hasError('required')\">\n          Image url is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field>\n        <textarea matInput formControlName=\"descriptionFormControl\" placeholder=\"Description\" [(ngModel)]=\"formBook.description\"></textarea>\n        <mat-error *ngIf=\"bookFormGroup.get('descriptionFormControl').hasError('required')\">\n          Description is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </form>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-mini-fab (click)=\"saveBook()\" [disabled]=\"!bookForm.form.valid\">\n      <mat-icon>save</mat-icon>\n    </button>\n    <button mat-mini-fab (click)=\"closeDialog()\">\n      <mat-icon>cancel</mat-icon>\n    </button>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/modals/book-modal/book-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_book_interface__ = __webpack_require__("../../../../../src/app/interfaces/book.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces_book_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__interfaces_book_interface__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var BookModalComponent = (function () {
    function BookModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // Validators
        this.maxDate = new Date(Date.now());
        // initialise all form controls and add validators
        this.bookFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            authorFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                //  Validators.minLength(3),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[A-Za-z() 0-9,.]+')
            ]),
            titleFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[A-Za-z() 0-9,.]+')
            ]),
            dateFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ]),
            imageUrlFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ]),
            descriptionFormControl: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required
            ])
        });
    }
    BookModalComponent.prototype.ngOnInit = function () {
        // if we get data bind to form model else init empty model for form.
        if (this.data) {
            this.formBook = Object.assign({}, this.data);
            this.formBook.date = new Date(this.data.date);
        }
        else {
            this.dialogTitle = 'Create New Book';
            this.formBook = {
                id: null,
                title: null,
                author: null,
                description: null,
                date: null,
            };
        }
    };
    BookModalComponent.prototype.closeDialog = function () {
        this.dialogRef.close(null);
    };
    BookModalComponent.prototype.saveBook = function () {
        this.dialogRef.close(this.formBook);
    };
    return BookModalComponent;
}());
BookModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-book-modal',
        template: __webpack_require__("../../../../../src/app/modals/book-modal/book-modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modals/book-modal/book-modal.component.css")]
    }),
    __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__interfaces_book_interface__["IBook"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__interfaces_book_interface__["IBook"]) === "function" && _b || Object])
], BookModalComponent);

var _a, _b;
// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html',
//   styleUrls: ['dialog-overview-example.css'],
// })
// export class DialogOverviewExample {
//   animal: string;
//   name: string;
//   constructor(public dialog: MatDialog) {}
//   openDialog(): void {
//     let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: { name: this.name, animal: this.animal }
//     });
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }
// }
// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// } 
//# sourceMappingURL=book-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/capitalize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    /**
     * capitalize and remove special chars pipe
     * @param value string to capitalize and clean special chars from
     */
    // Transform as CapitalizePipe function get the value from Book-Card
    CapitalizePipe.prototype.transform = function (value) {
        if (value) {
            var words_1 = value.replace(/[^A-Za-z() 0-9,.]/g, '').split(' ');
            var upperCasedTitle_1 = '';
            words_1.forEach(function (word, index) {
                var noSpaceLastConcat = ' ';
                // if reached last word dont add space
                if (words_1.length === index + 1) {
                    noSpaceLastConcat = '';
                }
                upperCasedTitle_1 = upperCasedTitle_1.concat(word.charAt(0).toUpperCase() + word.slice(1) + noSpaceLastConcat);
            });
            return upperCasedTitle_1;
        }
        return value;
    };
    return CapitalizePipe;
}());
CapitalizePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'capitalize' })
], CapitalizePipe);

//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/books/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Injectable all the class to angular
var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
    }
    BooksService.prototype.GetAll = function () {
        return this.http
            .get('api/books')
            .map(function (response) {
            return response;
        });
    };
    BooksService.prototype.GetAllPerPage = function (pageSize, pageIndex) {
        return this.http
            .get('api/books')
            .map(function (response) { return response; })
            .map(function (data) {
            return data.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize);
        });
    };
    BooksService.prototype.AddBook = function (book) {
        return this.http
            .post('api/books', book)
            .map(function () { });
    };
    return BooksService;
}());
BooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BooksService);

var _a;
// .map(response => {
//   this.allBooks = response as IBook[];
//  return response as IBook[]; 
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/in-memory-data/in-memory-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var books = [{
                "id": 1,
                "author": "Myrtie Pleavin",
                "title": "Show, The",
                "date": "6/1/2017",
                "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
                "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg"
            },
            { "id": 2, "author": "Tamar Arnout", "title": "Your Sister's Sister", "date": "4/25/2017", "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 3, "author": "Charlena Priel", "title": "Fifth Element, The", "date": "9/29/2017", "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 4, "author": "Kippie Radnage", "title": "Superman", "date": "12/25/2016", "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.", "imageUrl": "data:image/jpeg;base64,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" },
            { "id": 5, "author": "Dione Kinnerk", "title": "Think Like a Man Too", "date": "12/18/2016", "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.", "imageUrl": "data:image/jpeg;base64,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" },
            { "id": 6, "author": "Pen Inchboard", "title": "Good Son, The", "date": "2/4/2017", "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 7, "author": "Zaria Cathesyed", "title": "Sandakan 8 (Sandakan hachibanshokan bohkyo)", "date": "9/23/2017", "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.", "imageUrl": "data:image/jpeg;base64,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" },
            { "id": 8, "author": "Gearalt Cawsy", "title": "Tracks", "date": "11/19/2016", "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 9, "author": "Jacklyn Crat", "title": "Midnight Mary", "date": "7/24/2017", "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.", "imageUrl": "http://www.hebrewreader.com/wp-content/uploads/2015/07/17527.jpg" },
            { "id": 10, "author": "Morgen Rubie", "title": "March or Die", "date": "12/7/2016", "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "imageUrl": "http://www.hebrewreader.com/wp-content/uploads/2015/07/17527.jpg" },
            { "id": 11, "author": "Olag Ingre", "title": "Girl from Jones Beach, The", "date": "12/13/2016", "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 12, "author": "Sissy Bleaden", "title": "Convict 13", "date": "10/7/2017", "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.", "imageUrl": "http://www.hebrewreader.com/wp-content/uploads/2015/07/17527.jpg" },
            { "id": 13, "author": "Drona Nield", "title": "Eve and the Fire Horse", "date": "8/5/2017", "description": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 14, "author": "Chris Twyford", "title": "M*A*S*H (a.k.a. MASH)", "date": "4/11/2017", "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.", "imageUrl": "data:image/jpeg;base64,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" },
            { "id": 15, "author": "Jesse De Brett", "title": "Black Moon Rising", "date": "6/3/2017", "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 16, "author": "Janine Burgess", "title": "Hansel & Gretel", "date": "5/19/2017", "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.", "imageUrl": "http://www.hebrewreader.com/wp-content/uploads/2015/07/17527.jpg" },
            { "id": 17, "author": "Persis Emsley", "title": "Love and a Bullet", "date": "8/23/2017", "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 18, "author": "Brockie Ferrara", "title": "Skin Too Few: The Days of Nick Drake, A", "date": "3/31/2017", "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.", "imageUrl": "http://www.hebrewreader.com/wp-content/uploads/2015/07/17527.jpg" },
            { "id": 19, "author": "Ana Geipel", "title": "40-Year-Old Virgin, The", "date": "4/26/2017", "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.", "imageUrl": "data:image/jpeg;base64,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" },
            { "id": 20, "author": "Wilbert Larchier", "title": "Borrowers, The", "date": "12/12/2016", "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.", "imageUrl": "http://leagueofcomicgeeks.com/media/library/images/dc/dc-relaunch-superman-1-cover.jpg" },
            { "id": 21, "author": "Stephen Phillp", "title": "Swamp Shark", "date": "12/16/2016", "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 22, "author": "Carlyle Ashingden", "title": "Hoosiers (a.k.a. Best Shot)", "date": "9/8/2017", "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 23, "author": "Wilton O'Nolan", "title": "Waste Land", "date": "5/1/2017", "description": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.", "imageUrl": "http://cdn3.vox-cdn.com/assets/4242181/lord_of_the_rings_book_cover_by_mrstingyjr-d5vwgct.jpg" },
            { "id": 24, "author": "Cacilie Whelan", "title": "To Tulsa and Back: On Tour with J.J. Cale", "date": "9/20/2017", "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.", "imageUrl": "data:image/jpeg;base64,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" },
        ];
        return { books: books };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/validators/book-validators.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuplicateTitleValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__ = __webpack_require__("../../../../../src/app/services/books/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DuplicateTitleValidatorDirective = DuplicateTitleValidatorDirective_1 = (function () {
    function DuplicateTitleValidatorDirective(bService) {
        this.bService = bService;
        this.validator = this.duplicateTitleValidator(bService.allBooks);
    }
    DuplicateTitleValidatorDirective.prototype.validate = function (control) {
        return this.validator(control);
    };
    DuplicateTitleValidatorDirective.prototype.duplicateTitleValidator = function (books) {
        var originalBookTitle;
        return function (control) {
            if (control.value) {
                if (books.find(function (book) { return book.title === control.value; })) {
                    originalBookTitle = books.find(function (book) { return book.title === control.value; }).title;
                }
            }
            // if no collection or collection size is equal to 0 then the value is valid
            if (!books || books.length <= 0) {
                return null;
            }
            var bookWithGivenTitle = books.find(function (book) { return book.title === control.value; });
            // if not found a book with the same title then the value is valid
            // if (!bookWithGivenTitle || !(originalBookTitle === control.value) {
            if (!bookWithGivenTitle || originalBookTitle === control.value) {
                return null;
            }
            return {
                appDuplicateTitle: {
                    valid: false
                }
            };
        };
    };
    return DuplicateTitleValidatorDirective;
}());
DuplicateTitleValidatorDirective = DuplicateTitleValidatorDirective_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[appDuplicateTitle]',
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* NG_VALIDATORS */],
                useExisting: DuplicateTitleValidatorDirective_1,
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_books_books_service__["a" /* BooksService */]) === "function" && _a || Object])
], DuplicateTitleValidatorDirective);

var DuplicateTitleValidatorDirective_1, _a;
//# sourceMappingURL=book-validators.validator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map