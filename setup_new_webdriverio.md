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
