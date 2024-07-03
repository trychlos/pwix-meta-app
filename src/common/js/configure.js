/*
 * pwix:meta-app/src/common/js/configure.js
 */

import _ from 'lodash';

import { ReactiveVar } from 'meteor/reactive-var';

let _conf = {};
MetaApp._conf = new ReactiveVar( _conf );

MetaApp._defaults = {
    verbosity: MetaApp.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server.
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
MetaApp.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( _conf, MetaApp._defaults, o );
        MetaApp._conf.set( _conf );
        _verbose( MetaApp.C.Verbose.CONFIGURE, 'pwix:meta-app configure() with', o );
    }
    // also acts as a getter
    return MetaApp._conf.get();
}

_.merge( _conf, MetaApp._defaults );
MetaApp._conf.set( _conf );
