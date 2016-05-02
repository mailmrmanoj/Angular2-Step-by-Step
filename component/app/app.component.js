System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.book = { id: 1, name: 'Book 1' };
                    this.color = 'red';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-book',
                        template: "\n\t\t\t<h1>Book Store</h1>\n\t\t\t<p>Displaying Data - Define Three types of data binding.</p>\n\t\t\t<span>Interpolation --- </span><h3> {{book.name}}</h3> <!-- Data Binding (Called Interpolation)  -->\n\t\t\t<span>Property Binding--- </span><h3 [innerText]= \"book.name\"></h3> <!-- Data Binding (Called property binding) -->\n\t\t\t<span>Event Binding --- </span><div [style.color]=\"color\">{{book.name}}</div> <!-- Data Binding (Called event binding) -->\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map