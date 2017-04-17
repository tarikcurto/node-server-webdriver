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

 export class ArgumentSystemService{

     private argumentList: Array<string>;

     public scriptFile: string;

     public propertyList: {url?, pluginList?};

     public constructor(argumentList: Array<string>){

         this.argumentList = argumentList;
         this.propertyList = {};

         this.setScriptFile()
         this.setPropertyList();
     }

     private setScriptFile(){

         this.scriptFile = this.argumentList[0];
     }

     private setPropertyList(){

         for (var i = 1; i < this.argumentList.length; i++) {
             this.setProperty(i);
         }
     }

     private setProperty(index: number){

         let argumentData: Array<string> = /-?-([a-zA-Z0-9]{1,})=([\w\W]{1,})/.exec(this.argumentList[index]);
         this.propertyList[argumentData[1]] = argumentData[2];
     }

 }