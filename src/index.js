const express = require('express');
const rfr = require('rfr');
const BodyParser = require('body-parser');
const https = require('https');
const Async = require('async');
const Proc = require('child_process');
const Request = require('request');
const compareVersions = require('compare-versions');
const Fs = require('fs-extra');
const _ = require('lodash');
const Keypair = require('keypair');
const Getos = require('getos');

const Package = rfr('package.json');

Log.info('+ ------------------------------------ +');
Log.info(`| Dukt Daemon v${Package.version}                     |`);
Log.info('|        https://dukthosting.net       |');
Log.info('|                                      |');
Log.info('|  Copyright 2015 - 2020 Joshua Ellis  |');
Log.info('|           and contributors           |');
Log.info('+ ------------------------------------ +');

module.exports = Daemon;