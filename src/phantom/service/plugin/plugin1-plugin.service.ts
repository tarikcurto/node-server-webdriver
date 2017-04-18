import {PluginService} from "./plugin.service";
import {PluginInterface} from "../../interface/plugin/plugin.interface";

export class Plugin1PluginService extends PluginService implements PluginInterface {

    public constructor() {
        super();
    }

    onWebPageOpen(status: string){

    }
}