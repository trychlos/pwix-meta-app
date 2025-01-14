// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by core-app.js.
import { name as packageName } from "meteor/pwix:meta-app";

// Write your tests here!
// Here is an example.
Tinytest.add( 'core-app - example', function( test ){
    test.equal( packageName, 'core-app' );
});
