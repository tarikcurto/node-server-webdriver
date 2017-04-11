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

var InstanceSystemService = (function () {

    function InstanceSystemService() {

    }

    /**
     * 
     * @param {string} pluginList
     * @return {Array<Object>}
     */
    InstanceSystemService.instanceListByProperty = function (pluginList) {
        
        return InstanceSystemService.instanceList(JSON.parse(pluginList));
    };

    /**
     * 
     * @param {Array<{path:string, moduleName: string}>} pluginList
     * @return {Array<Object>}
     */
    InstanceSystemService.instanceList = function (pluginList) {

        var instanceList = [];

        for (var i = 0; i < pluginList.length; i++) {

            var instance = InstanceSystemService.instance(pluginList[i]);
            instanceList.push(instance);
        }

        return instanceList;
    };

    /**
     * 
     * @param {{path:string, moduleName: string}} plugin
     * @return {Object}
     */
    InstanceSystemService.instance = function (plugin) {

        var module = require(plugin.path)[plugin.moduleName];
        var instance = new module();

        return instance;
    };

    return InstanceSystemService;

})();

module.exports.InstanceSystemService = InstanceSystemService;