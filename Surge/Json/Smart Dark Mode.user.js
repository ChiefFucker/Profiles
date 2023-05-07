// ==UserScript==
// @name             【深色模式】
// @match             *://*/*
// @grant             GM.getValue
// @grant             GM.setValue
// @grant             GM_registerMenuCommand
// @run-at            document-start
// ==/UserScript==

// prevent blink
if (self == top) {
    let preventBlinkCSS = document.createElement('style')
    preventBlinkCSS.innerText = `* {background:#202124!important; border-color:#3c4043!important; color-scheme:dark!important; color:#bdc1c6!important; transition: unset!important}`
    preventBlinkCSS.classList.add('preventBlinkCSS')
    document.head?.appendChild(preventBlinkCSS)
}

// main.js
window.addEventListener('load', _ => {
    (async _ => {
        let settings = await GM.getValue('settings', Promise.resolve(['hotKeySetOn', 'Ctrl + D', 'setTimeOff', '18:00', '07:00']));
        settings = JSON.parse(settings.replace(/'/g, '"'));
        let alwaysOnList = await GM.getValue('alwaysOnList', Promise.resolve(''));
        let alwaysOffList = await GM.getValue('alwaysOffList', Promise.resolve('youtube.com/live_chat'));
        let checkUrlExist = list => {
            return (list.replaceAll(/\s/g, '').split(/[\r\n]+|,/g) != '' && list.replaceAll(/\s/g, '').split(/[\r\n]+|,/g).filter(a => window.document.URL.indexOf(a) > -1).length > 0) ? true : false
        }
<style>
#SDM_body {background-color: #171717!important; height: 430px!important; position: fixed!important; top: 25px!important; right: 25px!important; width: 316px!important; z-index: 2147483647!important; box-shadow: 0 4px 6px 0 #171717!important; user-select: none!important;}
#SDM_body :not(#SDM_all) {color:#bdc1c6!important;}
#SDM_body :is(div, textarea, input, label) {all: initial;}
#SDM_body [type="radio"],
#SDM_body [type="checkbox"] {visibility: hidden!important; width: 0!important; position: absolute!important;}
#SDM_body svg {width: 16px!important; height: 16px!important}
#SDM_body [type="checkbox"] + label svg {display: none!important;}
#SDM_body [type="checkbox"]:not(:checked) + label svg.SDM_off,
#SDM_body [type="checkbox"]:checked + label svg.SDM_on {display: inline!important;}
#SDM_body [type="checkbox"] + label svg.SDM_on path,
#SDM_body svg:hover path,
#SDM_body input:checked + label path {fill: orange!important;}

#SDM_header {display: block!important; width: 100%!important; height: 34px!important; padding-top: 10px!important;}
#SDM_header input#SDM_settings_tab_button + label svg:hover path,
#SDM_header input#SDM_settings_tab_button:checked + label path {fill:none!important; stroke:orange!important;}

#SDM_header > #SDM_about_tab_button + label {float: left!important; padding-left: 15px!important;}
#SDM_header > [name="SDM_tab_toggle"]:checked ~ #SDM_right_side #SDM_add_page,
#SDM_header [name="SDM_tab_toggle"]:checked ~ #SDM_add_page {pointer-events: none!important; opacity:.3!important;}
#SDM_header > #SDM_right_side label {height:16px!important; width: 16px!important}
#SDM_header > #SDM_right_side {display:flex!important; align-items:center!important; float: right!important; padding-right: 15px!important;}
#SDM_header > #SDM_right_side .SDM_header_buttons {padding-left: 12px!important; line-height: 15px!important; height: 15px!important; text-decoration: none!important;}
#SDM_header ~ label {float:left!important; font-weight: bold!important; opacity: .3!important; height: 34px!important; line-height:34px!important; width: 50%!important; display: inline-block!important; vertical-align:top!important; user-select: none!important; text-align: center!important; border-bottom: 2px transparent solid!important;}
#SDM_header ~ label:hover {opacity: 1!important;}
#SDM_header ~ input:checked + label:not(#_) {opacity: 1!important; border-color: orange!important; color: orange!important}

#SDM_main {display:inline-block!important; box-shadow: inset 0 7px 9px -7px rgba(0,0,0,.4)!important; background-color: #202124!important;}
#SDM_main > #SDM_about_tab {white-space:pre-line!important}
#SDM_main > :not(#SDM_all) {background-color: transparent!important; height: 328px!important; font-size: 16px!important; padding: 12px!important; max-width: calc(316px - 24px)!important; min-width: calc(316px - 24px)!important; width: calc(316px - 24px)!important; border:0!important;}
#SDM_main > textarea {outline: none!important; resize: none!important; color-scheme: dark!important}
#SDM_main > textarea::placeholder {color: #bdc1c6!important; opacity:.3!important; font-weight: normal!important;}
#SDM_main > #SDM_settings_tab label {padding-left:5px!important;}
#SDM_main > #SDM_settings_tab > div {display:block!important; margin-top: 20px!important;}
#SDM_main > #SDM_settings_tab [type="checkbox"]:not(:checked) + label ~ * {opacity:.3!important}
#SDM_main > #SDM_settings_tab label + span {display:inline-block!important; width:125px!important; margin-left:10px!important}
#SDM_main > #SDM_settings_tab label + span + #SDM_hotkey_input {width:120px!important}
#SDM_main > #SDM_settings_tab label + span ~ .SDM_timeSet_input {width:40px!important}
#SDM_main > #SDM_settings_tab label + span + input:focus {background-color:#bdc1c6!important; color:#171717!important}
</style>
`)

        // color inverter CSS
        let drkMo = document.createElement('style')
        drkMo.innerText = `
html {color-scheme: dark!important; color: #000; background: #fff;}
html * {color-scheme: light!important; text-shadow: 0 0 .1px}
html body {background: none!important}
#SDM_body,
html, html :is(img, image, embed, video, canvas, option, object, :fullscreen:not(iframe), iframe:not(:fullscreen)),
html body>* [style*="url("]:not([style*="cursor:"]):not([type="text"]) {filter: invert(1)hue-rotate(180deg)!important}
html body>* [style*="url("]:not([style*="cursor:"]) :not(#_),
html:not(#_) :is(canvas, option, object) :is(img, image, embed, video),
html:not(#_) :is(video:fullscreen, img[src*="/svg/"], img[src*=".svg."], img[src*="fonts.gstatic.com/s/i/"]) {filter: unset!important}`
        drkMo.classList.add('drkMo')

        // apply main CSS
        document.querySelector('.preventBlinkCSS')?.remove()
        if (checkUrlExist(alwaysOnList) && checkTimeSet()) {
            applyFilter()
        } else if (checkUrlExist(alwaysOffList)) {
            // do nothing
        } else if (checkTimeSet()) {
            let bdyH0 = window.parent.document.body.offsetHeight == 0;
            let frame = self != top;
            let elems = document.querySelectorAll('body > :not(script)');
            let check = (o, t = 0) => {
                let n = n => {
                    return parseInt(getComputedStyle(document.querySelectorAll(o)[t]).getPropertyValue('background-color').match(/\d+/g)[n])
                };
                return (n(0) * 0.299 + n(1) * 0.587 + n(2) * 0.114) > 186 || n(3) == 0;
            }
            if ((!frame && !bdyH0 || frame) && check('html') && check('body')) applyFilter();
            if (!frame && bdyH0) {
                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].scrollHeight > window.innerHeight && check('body > :not(script)', i)) applyFilter()
                }
            };
        } else {
            // do nothing
        }
        // tampermonkey menu
        GM_registerMenuCommand('On/Off', toggleFilter);
        GM_registerMenuCommand('Filter', toggleOption);
    })()
})
