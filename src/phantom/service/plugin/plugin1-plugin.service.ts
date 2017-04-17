import {PluginService} from "./plugin.service";
import {PluginInterface} from "../../interface/plugin/plugin.interface";

export class Plugin1PluginService extends PluginService implements PluginInterface {

    public constructor(){
        super();
    }

    onWebPageResourceRequested(requestData: any, networkRequest: Object) {
        console.log("\n\n",JSON.stringify(requestData));
    }
}