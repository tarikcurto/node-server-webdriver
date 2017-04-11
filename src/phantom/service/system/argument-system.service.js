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

var ArgumentSystemService = (function () {
    
    function ArgumentSystemService(argumentList) {
        
        this.argumentList = argumentList;
        this.scriptFile = "";
        this.propertyList = {};
        
        this.defineScriptFile();
        this.definePropertyList();
    }
    
    ArgumentSystemService.prototype.defineScriptFile = function () {
        
        this.scriptFile = this.argumentList[0];
    };
    
    ArgumentSystemService.prototype.definePropertyList = function () {
        
        for (var i = 1; i < this.argumentList.length; i++) {
            this.defineProperty(this.argumentList[i]);
        }
    };
    
    ArgumentSystemService.prototype.defineProperty = function (argument) {
        
        var argumentData = /-?-([a-zA-Z0-9]{1,})=([\w\W]{1,})/.exec(argument);
        this.propertyList[argumentData[1]] = argumentData[2];
    };
    
    return ArgumentSystemService;
    
}());

module.exports.ArgumentSystemService = ArgumentSystemService;