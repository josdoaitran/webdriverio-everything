## Install NodeJs
https://nodejs.org/en/download/
https://www.tutorialspoint.com/nodejs/nodejs_environment_setup.htm

Check Nodejs with command: `node --version` and `nom --version`

```
❯ node --version
v15.11.0

❯ npm --version
7.6.0

```

## Create NodeJs project and all Webdriverio:
(We setup Webdriverio version 7)

To add a full WebdriverIO setup to an existing or new project using the WebdriverIO Starter Toolkit, run:

### Using NPM, If you're in the root directory of an existing project, run:

`npm init wdio .`
We need to have WebdriverIO CLI on our project,
https://www.npmjs.com/package/@wdio/cli
```
"devDependencies": {
    "@wdio/cli": "^7.16.12"
  }
```
### Another way, we can create a nodejs project first and add WebdriverIO into projects.

```
npm int -y
npm install @wdio/cli
```

## Configure Webdriverio project

Run this command to configure your webdriverio project
```
npx wdio config
```

? Where is your automation backend located? (Use arrow keys)
❯ On my local machine 
  + In the cloud using Experitest 
  + In the cloud using Sauce Labs 
  + In the cloud using Browserstack or Testingbot or LambdaTest or a different service 
  + I have my own Selenium cloud

We select `On my local machine`

? Which framework do you want to use? (Use arrow keys)
❯ mocha 
  + jasmine 
  + cucumber

? Which framework do you want to use? mocha

? Do you want to use a compiler? No!

? Where are your test specs located? ./test/specs/**/*.js

? Do you want WebdriverIO to autogenerate some test files? Yes

? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? Yes

? Where are your page objects located? ./test/pageobjects/**/*.js

? Which reporter do you want to use? spec, allure

? Do you want to add a plugin to your test setup? wait-for

? Do you want to add a service to your test setup? chromedriver

? What is the base url? https://the-internet.herokuapp.com/

? Do you want me to run `npm install` Yes

Installing wdio packages:
- @wdio/local-runner
- @wdio/mocha-framework
- @wdio/spec-reporter
- @wdio/allure-reporter
- wdio-wait-for
- wdio-chromedr

=> WebDriverIO will auto-generate the examle test scripts.
## Run example Web automation test with WebDriverio:
Run this command: `npx wdio run wdio.conf.js` to trigger simple test to this site: https://the-internet.herokuapp.com/
