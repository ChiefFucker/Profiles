// ==UserScript==
// @name	Smart Dark Mode
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
        let saveSettings = _ => {
            GM.setValue('alwaysOnList', document.querySelector('#SDM_on_textarea').value.replace(/^, ?/, ''));
            GM.setValue('alwaysOffList', document.querySelector('#SDM_off_textarea').value.replace(/^, ?/, ''));
            GM.setValue('settings', `['${document.querySelector('#SDM_hotkey').checked ? 'hotKeySetOn' : 'hotKeySetOff'}','${document.querySelector('#SDM_hotkey_input').value}','${document.querySelector('#SDM_timeSet').checked ? 'setTimeOn' : 'setTimeOff'}','${document.querySelector('#SDM_timeSet_input_from').value}','${document.querySelector('#SDM_timeSet_input_to').value}']`);
        }
        let toggleOption = _ => {
            let e = document.querySelector('#SDM_body');
            if (e.style.display == 'none') {
                e.style.display = 'block';
            } else {
                e.style.display = 'none';
            }
        }
        let applyFilter = _ => document.head.appendChild(drkMo);
        let toggleFilter = _ => {
            if (document.querySelector('style.drkMo') == null) {
                applyFilter();
                document.querySelector('#SDM_toggle').checked = true;
            } else {
                document.querySelectorAll('style.drkMo').forEach(e => e.remove());
                document.querySelector('#SDM_toggle').checked = false;
            }
        }

        // add option div in DOM
        document.body.insertAdjacentHTML('beforeend', `
<div id="SDM_body" style="display: none">
    <div id="SDM_header">
        <input id="SDM_about_tab_button" type="radio" name="SDM_tab_toggle" checked>
        <label for="SDM_about_tab_button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/> </svg>
        </label>
        <div id="SDM_right_side">
            <input id="SDM_settings_tab_button" type="radio" name="SDM_tab_toggle">
            <label for="SDM_settings_tab_button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z" style="fill:none;stroke:#bdc1c6;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>
            </label>
            <a id="SDM_add_page" class="SDM_header_buttons" title="${langTxt(1)}">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/> </svg>
            </a>
            <input id="SDM_toggle" type="checkbox">
            <label for="SDM_toggle" class="SDM_header_buttons" title="${settings[1]}">
                <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
            </label>
            <a id="SDM_close_window" class="SDM_header_buttons">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/> <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/> </svg>
            </a>
        </div>
    </div>
    <input id="SDM_on_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_on_tab_button">On</label>
    <input id="SDM_off_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_off_tab_button">Off</label>
    <div id="SDM_main">
        <div id="SDM_about_tab" class="SDM_tab" style="display: block"></div>
        <div id="SDM_settings_tab" class="SDM_tab" style="display: none">
            <div>
                <input id="SDM_hotkey" type="checkbox" ${settings[0] == 'hotKeySetOn' ? 'checked' : ''}>
                <label for="SDM_hotkey" class="SDM_checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
                </label>
                <span>${langTxt(3)}</span>
                <input id="SDM_hotkey_input" type="textarea" value="${settings[1]}">
            </div>
            <div>
                <input id="SDM_timeSet" type="checkbox" ${settings[2] == 'setTimeOn' ? 'checked' : ''}>
                <label for="SDM_timeSet" class="SDM_checkbox">
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_off" fill="currentColor" viewBox="0 0 16 16"> <path d="M11 4a4 4 0 0 1 0 8H8a4.992 4.992 0 0 0 2-4 4.992 4.992 0 0 0-2-4h3zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5z"/> </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="SDM_on" fill="currentColor" viewBox="0 0 16 16"> <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/> </svg>
                </label>
                <span>${langTxt(4)}</span>
                <input id="SDM_timeSet_input_from" class="SDM_timeSet_input"type="textarea" value="${settings[3]}" maxlength="5">
                <span>~</span>
                <input id="SDM_timeSet_input_to" class="SDM_timeSet_input"type="textarea" value="${settings[4]}" maxlength="5">
            </div>
        </div>
        <textarea id="SDM_on_textarea" class="SDM_tab" style="display: none" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOnList}</textarea>
        <textarea id="SDM_off_textarea" class="SDM_tab" style="display: none" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOffList}</textarea>
    </div>
</div>

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
        };

        // tampermonkey menu
        GM_registerMenuCommand('On/Off', toggleFilter);
        GM_registerMenuCommand('Filter', toggleOption);
    })()
})
