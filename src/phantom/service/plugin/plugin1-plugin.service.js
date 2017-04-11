"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var plugin_service_1 = require("./plugin.service");
var Plugin1PluginService = (function (_super) {
    __extends(Plugin1PluginService, _super);
    function Plugin1PluginService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Plugin1PluginService.prototype.red = function () {
        console.log("red!");
    };
    return Plugin1PluginService;
}(plugin_service_1.PluginService));
exports.Plugin1PluginService = Plugin1PluginService;
//# sourceMappingURL=plugin1-plugin.service.js.map