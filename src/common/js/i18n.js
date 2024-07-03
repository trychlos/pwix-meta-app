/*
 * pwix:meta-app/src/common/js/i18n.js
 */

import { pwixI18n } from 'meteor/pwix:i18n';

import '../i18n/en.js';
pwixI18n.namespace( I18N, 'en', MetaApp.i18n.en );

import '../i18n/fr.js';
pwixI18n.namespace( I18N, 'fr', MetaApp.i18n.fr );

MetaApp.i18n.namespace = function(){
    return I18N;
};
