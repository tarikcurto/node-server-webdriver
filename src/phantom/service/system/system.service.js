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

/*
 Imports
 */
const phantom;
const system = require('system');
const args = system.args;
const webPage = require('webpage');
const ArgumentSystemService = require("./argument-system.service").ArgumentSystemService;
const InstanceSystemService = require('./instance-system.service').InstanceSystemService;

/*
 Execution preferences
 */
var page = webPage.create();
var pageEvaluate = page.evaluate;
var argumentSystemService = new ArgumentSystemService(args);
var executionUserProperties = argumentSystemService.propertyList;
var pageUrl = (function () {
    if (executionUserProperties.url !== undefined) {
        return executionUserProperties.url;
    }
    throw new Error("Start url not is set!");
})();
var pluginInstanceList = (function () {
    if (executionUserProperties.pluginList !== undefined) {
        return InstanceSystemService.instanceListByProperty(executionUserProperties.pluginList);
    }
    return [];
})();

/*
 Execution events
 */

page.onAlert = function (message) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageAlert"] !== "undefined")
            pluginInstanceList[i]["onWebPageAlert"](message);
    }
};

page.onClosing = function (closingPage) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageClosing"] !== "undefined")
            pluginInstanceList[i]["onWebPageClosing"](closingPage);
    }
};

page.onResourceError = function (resourceError) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageResourceError"] !== "undefined")
            pluginInstanceList[i]["onWebPageResourceError"](resourceError);
    }
};

page.onResourceReceived = function (response) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageResourceReceived"] !== "undefined")
            pluginInstanceList[i]["onWebPageResourceReceived"](response);
    }
};

page.onResourceRequested = function (requestData, networkRequest) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageResourceRequested"] !== "undefined")
            pluginInstanceList[i]["onWebPageResourceRequested"](requestData, networkRequest);
    }
};

page.onResourceTimeout = function (request) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageResourceTimeout"] !== "undefined")
            pluginInstanceList[i]["onWebPageResourceTimeout"](request);
    }
};

page.onUrlChanged = function (targetUrl) {
    for (var i = 0; i < pluginInstanceList.length; i++) {
        if (typeof pluginInstanceList[i]["onWebPageUrlChanged"] !== "undefined")
            pluginInstanceList[i]["onWebPageUrlChanged"](targetUrl);
    }
};

/*
 Page executions
 */
page.open(pageUrl, function (status) {

    console.log(status);
    phantom.exit();
});