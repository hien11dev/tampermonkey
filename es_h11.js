// ==UserScript==
// @name         ES_H11
// @namespace    H11
// @author       H11
// @copyright    H11
// @version      0.1.5
// @updateURL    https://raw.githubusercontent.com/hien11dev/tampermonkey/master/es_h11.js
// @downloadURL  https://raw.githubusercontent.com/hien11dev/tampermonkey/master/es_h11.js
// @description  tampermonkey
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @icon         https://cdn.icon-icons.com/icons2/798/PNG/512/5_icon-icons.com_65772.png
// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_getResourceURL
// @grant        GM_getValue
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_setValue
// @include      http://*
// @include      https://*
// @match        *://*/*
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    jQuery('.odds-button, .boxBot, .odds-button2,[class*="banner"],.modal.show').remove();
    $('#app .nh-read__container').css({width: 1200, maxWidth: 1200});
    $('#js-read__content div').remove();
})();
