System.register(['angular2/platform/browser', './book.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, book_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (book_component_1_1) {
                book_component_1 = book_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(book_component_1.bookComponent);
        }
    }
});
//# sourceMappingURL=main.js.map