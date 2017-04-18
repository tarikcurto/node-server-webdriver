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
const system = require("system");
const args = system.args;
const webPage = require("webpage");
const fs = require('fs');
const ArgumentSystemService = require("./argument-system.service").ArgumentSystemService;
const InstanceSystemService = require("./instance-system.service").InstanceSystemService;
const EventSystemService = require("./event-system.service").EventSystemService;

/*
 Execution preferences
 */
var page = webPage.create();
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
var workPath = (function(){
    if(executionUserProperties.workPath !== undefined){
        fs.changeWorkingDirectory(executionUserProperties.workPath);
    }
    return fs.workingDirectory;
}());

/*
 Page execution events
 */
EventSystemService(phantom, page, pageUrl, pluginInstanceList);