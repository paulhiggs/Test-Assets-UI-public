# Test-Assets-UI

## Introduction

The VR-IF Testvector database is a tool to allow a dynamic management of the testvectors provided by the VR Industry Forum. This is a fork of the DASH-IF Testvector database. This framework includes:

- Testcontent: the source VR contents.
- Testvectors generated from Testcontents.
- Dynamic management of the attributes of all the models

This repository provides the client-side functionality of the tool.
It is supposed to run alongside the [Test-Assets-Dataset](https://github.com/VR-IF/Test-Assets-Dataset-Public).

## Installing / Getting started

The Test-Assets-UI relies on the [Test-Assets-Dataset](https://github.com/VR-IF/Test-Assets-Dataset-Public) for full functionality. In order to install the UI please follow the instructions below:

### Prerequisites
This project requires node.js and the node package manager (npm) to be installed.

### Setup

```shell
git clone https://github.com/VR-IF/Test-Assets-UI-public
cd Test-Assets-UI-public
npm install
npm start
```

### Configuration

Configuration files can be found in `\config`. In order to set the port for the http server which hosting this interface please adjust the `server.port`parameter.
Moreover, for communication with the Test-Assets-Dataset the url to the backend server needs to be set. This can be done by adjusting the `BASE_URL` in `public\js\constants\Constants.js`.

### Building
This project contains a small Grunt script for minification. By running `grunt` in the root folder of this project the minified files are created and copied to the `dist`folder. 

### Starting

    npm start
    Open http://localhost<port>/index.html in your browser



## Licensing

Copyright 2016 DASH-IF

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


