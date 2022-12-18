# Initalize a new WebDriverIO framework with Cucummber
- Init nodejs project: `npn init`
Log: 
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (webdriverio-cucummber-for-tutorial) 
version: (1.0.0) 1.0.1
description: example-webdriverio-with-cucumber
entry point: (index.js) 
test command: test
git repository: https://github.com/josdoaitran/webdriverio-everything
keywords: webdriverio, testing4everyone, cucumber
author: JosDoaiTrab
license: (ISC)
```
- Init Webdriverio in the project: `npm init wdio .`
Log:
```
? A project named "webdriverio-cucummber-for-tutorial" was detected at 
"/Users/doai.tran/Documents/Personal/webdriverio-everything/webdriverio-cucummber-for-tutorial", correct? Yes
? Where should your tests be launched? local - for e2e testing of web and mobile applications
? Where is your automation backend located? On my local machine
? Which framework do you want to use? Cucumber (https://cucumber.io/)
? Do you want to use a compiler? No!
? Do you want WebdriverIO to autogenerate some test files? Yes
? Where should these feature files be located? 
/Users/doai.tran/Documents/Personal/webdriverio-everything/webdriverio-cucummber-for-tutorial/features/**/*.feature
? Where should these step definitions be located? 
/Users/doai.tran/Documents/Personal/webdriverio-everything/webdriverio-cucummber-for-tutorial/features/step-definitions/steps.js
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes
? Where are your page objects located? 
/Users/doai.tran/Documents/Personal/webdriverio-everything/webdriverio-cucummber-for-tutorial/features/pageobjects/**/*.js
? Which reporter do you want to use? spec, allure
? Do you want to add a plugin to your test setup? wait-for
? Do you want to add a service to your test setup? selenium-standalone, appium
? What is the base url? http://localhost
? Do you want me to run `npm install` Yes
```
- Install Cucumber plugin in Visual Studio Code: https://marketplace.visualstudio.com/items?itemName=CucumberOpen.cucumber-official

References:
- https://webdriver.io/docs/frameworks/
- 