/*
 * Copyright 2017 Tarik Curto - centro.tarik@live.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
var tarikcurto_node_webdriver_1 = require("tarikcurto.node-webdriver");
var PageStatusPlugin = (function (_super) {
    __extends(PageStatusPlugin, _super);
    function PageStatusPlugin() {
        return _super.call(this) || this;
    }
    PageStatusPlugin.prototype.onWebPageOpen = function (status) {
        console.log("Page status is " + status);
    };
    return PageStatusPlugin;
}(tarikcurto_node_webdriver_1.PluginService));
exports.PageStatusPlugin = PageStatusPlugin;
//# sourceMappingURL=page-status.plugin.js.map