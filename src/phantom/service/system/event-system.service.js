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


var EventSystemService = (function () {

    function EventSystemService(phantom, page, pageUrl, pluginInstanceList) {

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

        page.open(pageUrl, function (status) {

            for (var i = 0; i < pluginInstanceList.length; i++) {
                if (typeof pluginInstanceList[i]["onWebPageOpen"] !== "undefined")
                    pluginInstanceList[i]["onWebPageOpen"](status);
            }
            phantom.exit();
        });
    }

    return EventSystemService;

}());

module.exports.EventSystemService = EventSystemService;