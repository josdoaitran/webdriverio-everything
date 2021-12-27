# Yarn
Package manager: https://yarnpkg.com/

How to Install Yarn in MacOs/Ubuntu/Windows?

## On MacOsx: 

*Method 1: Using NPM.*

In the OS X terminal you need to type:

`npm install --global yarn`

*Method 2: Using HomeBrew Package Manager:*

`brew install yarn`

*Method 3: Using curl:*

You need to type the following command in the terminal

`curl -o- -L https://yarnpkg.com/install.sh | bash`

NOTE: the above command works for both Linux and macOS.

## Ubuntu/Debian (Linux)
*Method 1: Using npm manager.*

It’s valid to use the standard method to install with npm, using the following commands in the terminal

`npm install --global yarn`

*Method 2: Using curl.*

Step 1: You can install it with the Debian package repository by first configuring the repository first using the following commands.

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```
How to install Yarn in MacOs/Ubuntu/Windows?
Demo of the above 2 commands

Step 2: And then once after successful install of the above command use

`sudo apt install yarn`

## Windows
https://yarnpkg.com/package/windows-release

Run this command:
```
npm install windows-release
```

## Referencess:
https://www.geeksforgeeks.org/how-to-install-yarn-in-macos-ubuntu-windows/
