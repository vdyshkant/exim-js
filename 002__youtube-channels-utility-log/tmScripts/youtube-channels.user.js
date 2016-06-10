// ==UserScript==
// @name         youtube-channels
// @namespace    http://youtube.com
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var a = document.querySelector("#watch7-user-header .yt-user-info .spf-link"),
        ahref = a.getAttribute("href"),
        aInner = a.innerHTML,
        blackUrl  = new Array(),
        blackName = new Array(),
        usefulUrl = new Array(),
        usefulName = new Array();

    // addToList(0, "BLANK", "BLANK");
    addToList(0, "channel/UCViyTpY5rWF5Y_4fMQ4Diaw", "Andy Regen");
    addToList(1, "channel/UCCakwJzUw-XpBkJ_EldCocA", "Кирилл Englisher");
    addToList(1, "channel/UCgdF4GdqtKIHgc3GvSUwH7Q", "English Professionally - phrasal verbs in English, English grammar lessons and English words");

    checkList(blackUrl, blackName, "blacklisted");
    checkList(usefulUrl, usefulName, "useful", "it-works");



    function addToList(listType, url, name) {
        if (listType === "black" || listType === 0) {
            blackUrl[blackUrl.length] = url;
            blackName[blackName.length] = name;
        } else if (listType === "useful" || listType === 1) {
            usefulUrl[usefulUrl.length]  = url;
            usefulName[usefulName.length] = name;
        } else {
            console.log("script done incorrectly");
        }
    }

    function checkList(listUrl, listName, listCssClass, final) {
        for (var i = 0; i < listUrl.length; i++) {
            if (ahref.indexOf(listUrl[i]) != -1 && aInner === listName[i]) { // if channel link and channel name are the same as those in arrays;
                addCssClass(listCssClass);
            } else if (ahref.indexOf(listUrl[i]) === -1 && aInner === listName[i]) { // if channel link changed;
                a.classList.add("url-changed");
                addCssClass(listCssClass);
            } else if (ahref.indexOf(listUrl[i]) != -1 && aInner != listName[i]) { // if channel name changed;
                a.classList.add("name-changed");
                addCssClass(listCssClass);
            } else {
                a.classList.add(final);
            }
        }
    }

    function addCssClass(listName) {
        a.classList.remove("it-works");
        a.classList.add(listName);
    }

})();