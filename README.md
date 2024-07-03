# pwix:meta-app

## What is it ?

A meta-package which gathers most of the packages used by our applications, both on client and server sides.

It materializes our design decisions about user interface and server code architecture:

- deep copy, deep equal and other Object functions are handled by lodash, and check_npms takes care of requiring it
- it is Bootstrap-based, so Bootstrap is part of the required packages
- embeds (and provides) latest FontAwesome copy
- requires pwix:layout package, so that is able to provide responsive layout utilities which adapt to the device
- provides the Page class to handle pages and routes in an organized way
- provides the Authorization class to handle permissions
- requires pwix:modal, pwix:tolert, pwix:bootbox for dialogs management
- and many more.

## Features

### Environment management

### Layout management

### Forms management

### Pages management

### Settings management

## Provides

### `MetaApp`

The exported `MetaApp` global object provides following items:

#### Functions

##### `MetaApp.configure()`

See [below](#configuration).

A reactive data-source.

## Configuration

The package's behavior can be configured through a call to the `MetaApp.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `verbosity`

    Define the expected verbosity level.

    The accepted value can be any or-ed combination of following:

    - `MetaApp.C.Verbose.NONE`

        Do not display any trace log to the console

    - `MetaApp.C.Verbose.CONFIGURE`

        Trace `MetaApp.configure()` calls and their result

    - `MetaApp.C.Verbose.FUNCTIONS`

        Trace all functions calls ibn the package.

Please note that `MetaApp.configure()` method should be called in the same terms both in client and server sides.

Remind too that Meteor packages are instanciated at application level. They are so only configurable once, or, in other words, only one instance has to be or can be configured. Addtionnal calls to `MetaApp.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

None at the moment.

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-meta-app/issues).

---
P. Wieser
- Last updated on 2023, June 5th
