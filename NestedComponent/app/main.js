System.register(['angular2/platform/browser', './character-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, character_list_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (character_list_component_1_1) {
                character_list_component_1 = character_list_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(character_list_component_1.CharacterListComponent);
        }
    }
});
//# sourceMappingURL=main.js.map