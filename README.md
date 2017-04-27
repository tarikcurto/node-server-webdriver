Welcome to **node-webdriver**
===================

Node-webdriver is an open source tool for **web crawling and testing**, employing Core of PhantomJS.

Current version is developed under **TypeScript OOP** and **modular JS**.

Tool works with events and allows the execution of multiple tasks.

With **node-webdriver** you can perform **reliable and scalable** works on the web.

Let's go to develop!
-------------


First you need [download PhantomJS](http://phantomjs.org/download.html) and **define** it in your system environment as **phantomjs**. 

- Now, we need **node-webdriver**:

```
npm install tarikcurto.node-webdriver
```

```
git clone https://github.com/tarikcurto/node-webdriver.git
```


- Next step is **import webdriver-api module** from JS or TypeScript file:
```
const ApiService =  require('tarikcurto.node-webdriver').ApiService;
```
```
import {ApiService} from "tarikcurto.node-webdriver";
```

- **Instance** api service:
```
let apiService = new ApiService();
```

- Define startup **URL**:
```
apiService.setUrl("https://www.google.es");
```

- Create a **webdriver plugin**.

Webdriver plugins are task containers that are used to evaluate scripts on a website.

Plugins works with web page events (onWebPageRequestedFile, onWebPageChanged...). See full events list on `src/phantom/interface/plugin.interface.ts`.

```
import {PluginService, PluginInterface} from "tarikcurto.node-webdriver";

export class SampleWebdriverPlugin extends PluginService implements PluginInterface {

    public constructor() {
        super();
    }

    onWebPageOpen(status: string){

		console.log("Page status is " + status);
    }
}
```

- **Add plugin** to execution:
```
apiService.addPlugin("SampleWebdriverPlugin", __dirname + "/SampleWebdriverPlugin.js");
```

- Define **work path** (optional):
```
apiService.setWorkPath("C:\\tmp");
```

- And finally, **execute node-webdriver**!:
```
let result: string = apiService.build();
```

For bugs
-------------

- You can open a issue on [tarikcurto/node-webdriver issue](https://github.com/tarikcurto/node-webdriver/issues/new).

About me
-------------

- I am a passionate developer of 20 years that currently lives in Spain. 
-  You can contact me through [centro.tarik@live.com](mailto:centro.tarik@live.com)!