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
Object.defineProperty(exports, "__esModule", { value: true });
var tarikcurto_node_terminal_1 = require("tarikcurto.node-terminal");
var phantom_config_1 = require("../../config/phantom.config");
var PHANTOM_ENV = "phantomjs";
var ApiService = (function () {
    function ApiService() {
        this.pluginList = [];
        this.terminalService = new tarikcurto_node_terminal_1.CommandService();
    }
    ApiService.prototype.setUrl = function (url) {
        this.url = url;
    };
    ApiService.prototype.setPluginList = function (pluginList) {
        this.pluginList = pluginList;
    };
    ApiService.prototype.setWorkPath = function (workPath) {
        this.workPath = workPath;
    };
    ApiService.prototype.addPlugin = function (moduleName, path) {
        this.pluginList.push({ moduleName: moduleName, path: path });
    };
    ApiService.prototype.build = function () {
        this.buildCommand();
        return this.terminalService.instanceExecution().executeSync();
    };
    ApiService.prototype.buildCommand = function () {
        this.terminalService.nameCommandService.nameCommandData = { value: PHANTOM_ENV + " " + JSON.stringify(phantom_config_1.PHANTOM_SCRIPT) };
        this.terminalService.argumentCommandService.argumentCommandData.push({ key: '--url', value: this.url });
        this.terminalService.argumentCommandService.argumentCommandData.push({ key: '--pluginList', value: JSON.stringify(this.pluginList) });
        if (this.workPath !== null) {
            this.terminalService.argumentCommandService.argumentCommandData.push({ key: '--workPath', value: this.workPath });
        }
    };
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map