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

export class ApiService {

    private terminalService: CommandService;

    public constructor() {

        this.terminalService = new CommandService();
        this.terminalService.nameCommandService.nameCommandData = {value: "phantomjs " + PHANTOM_SCRIPT};
    }

    public run(){

        console.log(this.terminalService.instanceExecution().executeSync());
    }
}