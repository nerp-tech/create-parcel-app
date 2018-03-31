#!/usr/bin/env node

/**
 * Original work Copyright (c) 2015-present, Facebook, Inc.
 * Modified work Copyright (c) 2018-present, N.E.R.P.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var chalk = require('chalk');

var currentNodeVersion = process.versions.node;
var semver = currentNodeVersion.split('.');
var major = semver[0];

if (major < 4) {
    console.error(
        chalk.red(
            'You are running Node ' +
            currentNodeVersion +
            '.\n' +
            'Create Parcel App requires Node 4 or higher. \n' +
            'Please update your version of Node.'
        )
    );
    process.exit(1);
}


require('./createParcelApp');