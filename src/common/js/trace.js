/*
 * pwix:meta-app/src/common/js/trace.js
 */

_verbose = function( level ){
    if( MetaApp.configure().verbosity & level ){
        let args = [ ...arguments ];
        args.shift();
        console.debug( ...args );
    }
};

_trace = function( functionName ){
    _verbose( MetaApp.C.Verbose.FUNCTIONS, ...arguments );
};
