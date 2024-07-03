Package.describe({
    name: 'pwix:meta-app',
    version: '1.0.0-rc',
    summary: 'A Meteor meta-package which gathers all packages needed by our applications',
    git: 'https://github.com/trychlos/pwix-meta-app.git',
    documentation: 'README.md'
});

Package.onUse( function( api ){
    configure( api );
    api.export([
        'MetaApp'
    ]);
    api.mainModule( 'src/client/js/index.js', 'client' );
    api.mainModule( 'src/server/js/index.js', 'server' );
});

Package.onTest( function( api ){
    configure( api );
    api.use( 'tinytest' );
    api.use( 'pwix:meta-app' );
    api.mainModule( 'test/js/index.js' );
});

function configure( api ){
    const _use = function(){
        api.use( ...arguments );
        api.imply( ...arguments );
    };
    api.versionsFrom([ '2.9.0', '3.0-rc.0' ]);
    _use( 'check' );
    _use( 'blaze-html-templates@2.0.0 || 3.0.0-alpha300.0', 'client' );
    _use( 'ecmascript' );
    _use( 'less@4.0.0', 'client' );
    _use( 'mongo@1.16.1 || 2.0.0-rc300.2' );
    _use( 'ostrio:flow-router-extra@3.10.0 || 3.11.0-rc300.0' );
    // pwix packages are used by dependancy level/alpha
    // level zero
    _use( 'pwix:blaze-layout@2.3.2' );
    _use( 'pwix:collection-behaviours@2.0.0' );
    _use( 'pwix:date@1.0.0' );
    _use( 'pwix:env-settings@1.6.0 || 2.0.0-rc' );
    _use( 'pwix:i18n@1.5.7' );
    _use( 'pwix:jquery-ui@1.0.3' );
    _use( 'pwix:jstree@1.0.6' );
    _use( 'pwix:orderable-stack@1.0.0-rc' );
    _use( 'pwix:ssr@0.9.0-rc || 1.0.0-rc' );
    _use( 'pwix:toggle-switch@0.3.3' );
    _use( 'pwix:tolert@1.4.2' );
    _use( 'pwix:ui-bootstrap5@2.0.0' );
    _use( 'pwix:ui-fontawesome6@1.0.0-rc' );
    _use( 'pwix:ui-layout@2.0.0-rc' );
    _use( 'pwix:ui-utils@1.0.0-rc' );
    // level 1
    _use( 'pwix:collection-timestampable@2.0.0' );
    _use( 'pwix:modal@1.10.0 || 2.0.0' );
    _use( 'pwix:options@2.1.1' );
    _use( 'pwix:plus-button@0.11.2 || 1.0.0-rc' );
    _use( 'pwix:tabbed@1.0.0-rc' );
    _use( 'pwix:typed-message@1.2.0' );
    // level 2
    _use( 'pwix:accounts-tools@2.0.0' );
    _use( 'pwix:bootbox@1.5.5' );
    _use( 'pwix:cookie-manager@2.0.0' );
    _use( 'pwix:editor@1.4.1' );
    _use( 'pwix:roles@1.3.0' );
    // level 3
    _use( 'pwix:accounts-ui@1.5.0' );
    _use( 'pwix:date-input@1.0.0' );
    _use( 'pwix:modal-info@1.4.4' );
    // level 4
    //_use( 'pwix:collections-manager@0.10.0' );
    //_use( 'pwix:forums@1.1.3' );
    _use( 'pwix:startup-app-admin@1.3.0' );
    _use( 'pwix:tabular@1.0.0-rc' );
    // level 5
    _use( 'pwix:accounts-manager@1.0.0-rc' );
    // new/unleveled
    // others...
    _use( 'reactive-dict' );
    _use( 'reactive-var' );
    _use( 'tmeasday:check-npm-versions@1.0.2 || 2.0.0-beta.0', 'server' );
    _use( 'tracker' );
    _use( 'tracker', 'client' );
}
