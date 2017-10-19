# Test-Assets-UI


![](http://dashif.org/wp-content/uploads/2014/12/dashif-logo-283x100.jpg)

## Introduction

The DASH-IF Testvector database is a tool to allow a dynamic management of the testvectors provided by the DASH Industry Forum. This includes:

- Categorized DASH-IF features and feature groups
- Test cases for the individual features.
- Test vectors for the test cases.
- Dynamic management of the attributes all the models

A live demo of the tool can be found [here](http://testassets.dashif.org/) . This repository provides the client-side functionality of the tool.
It is supposed to run alongside the [Test-Assets-Dataset](https://github.com/Dash-Industry-Forum/Test-Assets-Dataset-Public).

## Installing / Getting started

The Test-Assets-UI relies on the [Test-Assets-Dataset](https://github.com/Dash-Industry-Forum/Test-Assets-Dataset-Public) for full functionality. In order to install the UI please follow the instructions below:

### Prerequisites
This project requires node.js and the node package manager (npm) to be installed.

### Setup

```shell
git clone https://github.com/Dash-Industry-Forum/Test-Assets-UI-Public 
cd Test-Assets-UI
npm install
npm start
```

### Configuration

Configuration files can be found in `\config`. In order to set the port for the http server which hosting this interface please adjust the `server.port`parameter.
Moreover, for communication with the Test-Assets-Dataset the url to the backend server needs to be set. This can be done by adjusting the `BASE_URL` in `public\js\constants\Constants.js`.

### Bulding
This project contains a small Grunt script for minification. By running `grunt` in the root folder of this project the minified files are created and copied to the `dist`folder. 

### Starting

    npm start
    Open http://localhost<port>/index.html in your browser



## Licensing

