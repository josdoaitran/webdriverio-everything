# webdriverio-everything
![image](https://user-images.githubusercontent.com/17884068/147403460-8a51e402-c8b9-46a1-a217-313c58901d1a.png)

# Overview:
https://webdriver.io/
Browser and Mobile application automation testing framework with NodeJS

## Beginer level:

- Setup , Basic Javascript
- First script with WebDriverio
- JS Framework Develop from Scratch
- Test Runner: Cross browser, Parallel execution.
- Reports: Allure


## Advanced level:

- Webdriverio + Intergrate with Browser Stack.
- BDD with Webdriverio and test framework: [Link text Here](https://webdriver.io/docs/frameworks/)
- Sync vs Async mode: [Link text Here](https://webdriver.io/docs/sync-vs-async/)


## NodeJs setup and Webdriverio Get started
Link: https://webdriver.io/docs/gettingstarted

Detailed Steps: https://github.com/josdoaitran/webdriverio-everything/blob/main/setup_new_webdriverio.md


## Run Test with WebDriverio:
Run this command: `npx wdio run wdio.conf.js`

## WebdriverIO Sync Mode update:
Reference: https://webdriver.io/docs/sync-vs-async/
- Sync mode is disabled in node.js v16
- Use `async/await` to interact with browsers / devices


## Javascript basic:
https://github.com/josdoaitran/JavaScriptForTester/tree/main/basicJavascript.


## Build tools:
- npm
- yarn

## Plugin on Editor for Webdriverio:
- https://plugins.jetbrains.com/plugin/16147-webdriverio
- 

## Alure report:
- Install allure report commandline with this command: `npm i allure-commandline -g`
- In order to generate Allure report, we can run this command: `allure generate allure-results && allure open`
```
> allure generate allure-results && allure open
Report successfully generated to allure-reportn
Starting web server...
2022-11-27 23:15:02.293:INFO::main: Logging initialized @682ms to org.eclipse.jetty.util.log.StdErrLog
Server started at <http://192.168.1.96:50616/>. Press <Ctrl+C> to exit

```
- On your project, we will see the new folder, `allure-report` beside `allure-results` folder.

