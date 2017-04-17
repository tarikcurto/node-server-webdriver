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

import {CommandService, ExecutionService, SessionExecutionService} from "tarikcurto.node-terminal";
import {PHANTOM_SCRIPT} from "../../config/phantom.config";

const PHANTOM_ENV = "phantomjs";

export class ApiService {

    private terminalService: CommandService;

    private url: string;

    private pluginList:Array<{moduleName:string, path:string}>;

    public constructor() {

        this.pluginList = [];
        this.terminalService = new CommandService();
    }

    public setUrl(url){

        this.url = url;
    }

    public setPluginList(pluginList: Array<{moduleName:string, path:string}>){

        this.pluginList = pluginList;
    }

    public addPlugin(moduleName: string, path: string){

        this.pluginList.push({moduleName: moduleName, path: path});
    }

    public build(){

        this.buildCommand();
        return this.terminalService.instanceExecution().executeSync();
    }

    private buildCommand(){

        this.terminalService.nameCommandService.nameCommandData = {value: PHANTOM_ENV + " " + JSON.stringify(PHANTOM_SCRIPT)};
        this.terminalService.argumentCommandService.argumentCommandData.push({key: '--url', value: this.url});
        this.terminalService.argumentCommandService.argumentCommandData.push({key: '--pluginList', value: JSON.stringify(this.pluginList)});
    }
}