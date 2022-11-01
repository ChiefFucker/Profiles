// ==UserScript==
// @name             【深色模式】
// @description	It is a smart dark theme that automatically switches to a dark screen when the background color of the homepage is bright. Provides a filter function that allows users to add or exclude URLs to apply directly.
// @version           2022.10.08.09.39
// @author            ndaesik
// @icon              https://lh3.googleusercontent.com/81tKJiCnAHzX1YojaGl1h33INWH-PcMN7S1N5eaTf4aUyO5Y7iKJ4cTI8JcZL55iP4bbWyFsJWfFrX4Doe-KaXaI0g
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
let alwaysOnList = await GM.getValue('alwaysOnList', '');
let alwaysOffList = await GM.getValue('alwaysOffList', 'youtube.com/live_chat');
let checkUrlExist = list => { return (list.replaceAll(/\s/g,'').split(/[\r\n]+|,/g) != '' && list.replaceAll(/\s/g,'').split(/[\r\n]+|,/g).filter(a => window.document.URL.indexOf(a) > -1).length > 0) ? true : false }
let saveTextarea = _ => {
        GM.setValue('alwaysOnList', document.querySelector('#SDM_on_textarea').value.replace(/^, ?/, ''));
        GM.setValue('alwaysOffList', document.querySelector('#SDM_off_textarea').value.replace(/^, ?/, ''));
    }
let toggleOption = _ => {
        let e = document.querySelector('#SDM_body');
        if (e.style.display == 'none') {
            e.style.display = 'block';
        } else {
            e.style.display = 'none';
            saveTextarea()
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
            <svg viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"></path>
            </svg>
        </label>
        <div id="SDM_right_side">
            <a id="SDM_add_page" class="SDM_header_buttons">
                <svg viewBox="0 0 500 500">
                    <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path>
                </svg>
            </a>
            <input id="SDM_toggle" type="checkbox">
            <label for="SDM_toggle" class="SDM_header_buttons" title="Ctrl + D">
                <svg class="SDM_off" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M192 352C138.1 352 96 309 96 256C96 202.1 138.1 160 192 160C245 160 288 202.1 288 256C288 309 245 352 192 352zM384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384C490 64 576 149.1 576 256C576 362 490 448 384 448zM384 128H192C121.3 128 64 185.3 64 256C64 326.7 121.3 384 192 384H384C454.7 384 512 326.7 512 256C512 185.3 454.7 128 384 128z"></path>
                </svg>
                <svg class="SDM_on" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z"></path>
                </svg>
            </label>
            <a id="SDM_close_window" class="SDM_header_buttons">
                <svg viewBox="0 0 500 500">
                    <path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path>
                </svg>
            </a>
        </div>
    </div>
    <input id="SDM_on_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_on_tab_button">On</label>
    <input id="SDM_off_tab_button" type="radio" name="SDM_tab_toggle"><label for="SDM_off_tab_button">Off</label>
    <div id="SDM_main">
        <textarea id="SDM_on_textarea" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOnList}</textarea>
        <textarea id="SDM_off_textarea" spellcheck="false" placeholder="example.com,\nlotemipsum.com">${alwaysOffList}</textarea>
        <div id="SDM_about_tab"></div>
    </div>
</div>

<style>
#SDM_body {background-color: #171717!important; height: 430px!important; position: fixed!important; top: 25px!important; right: 25px!important; width: 316px!important; z-index: 2147483647!important; box-shadow: 0 -1px 2px 0 rgb(0 0 0 / 30%), 0 -2px 6px 2px rgb(0 0 0 / 15%)!important; user-select: none!important;}
#SDM_body :not(#SDM_all) {color:#bdc1c6!important;}
#SDM_body :is(div, textarea, input, label) {all: initial;}
#SDM_body [type="radio"],
#SDM_body [type="checkbox"] {visibility: hidden!important; width: 0!important; position: absolute!important;}

#SDM_header {display: block!important; width: 100%!important; height: 34px!important; padding-top: 10px!important;}
#SDM_header svg {width: 16px!important;}
#SDM_header #SDM_toggle + label svg,
#SDM_header #SDM_about_tab_button svg {width: 19px!important;}
#SDM_header #SDM_toggle + label svg {display: none!important;}
#SDM_header #SDM_toggle:not(:checked) + label svg.SDM_off,
#SDM_header #SDM_toggle:checked + label svg.SDM_on {display: inline!important;}
#SDM_header #SDM_toggle + label svg.SDM_on path,
#SDM_header svg:hover path,
#SDM_header input:checked + label path {fill: orange!important;}
#SDM_header > #SDM_about_tab_button + label {float: left!important; padding-left: 15px!important;}
#SDM_header > #SDM_about_tab_button:checked ~ #SDM_right_side #SDM_add_page {pointer-events: none!important; opacity: 0.3!important;}
#SDM_header > #SDM_right_side {float: right!important; padding-right: 15px!important;}
#SDM_header > #SDM_right_side .SDM_header_buttons {padding-left: 15px!important; line-height: 15px!important; height: 15px!important; text-decoration: none!important;}
#SDM_header ~ label {float:left!important; font-weight: bold!important; opacity: .3!important; height: 34px!important; line-height:34px!important; width: 50%!important; display: inline-block!important; vertical-align:top!important; user-select: none!important; text-align: center!important; border-bottom: 2px transparent solid!important;}
#SDM_header ~ label:hover {opacity: 1!important;}
#SDM_header ~ input:checked + label {opacity: 1!important; border-color: orange!important;}

#SDM_main {box-shadow: inset 0 7px 9px -7px rgba(0,0,0,.4)!important; background-color: #202124!important;}
#SDM_main > :not(#SDM_all) {background-color: transparent!important; height: 328px!important; font-size: 14px!important; padding: 12px!important; max-width: calc(316px - 24px)!important; min-width: calc(316px - 24px)!important; width: calc(316px - 24px)!important; border:0!important;}
#SDM_main > textarea {outline: none!important; resize: none!important; color-scheme: dark!important}
#SDM_main > textarea::placeholder {color: #bdc1c6!important; opacity:0.3!important; font-weight: normal!important;}
#SDM_main > textarea, :is(#SDM_on_tab_button,#SDM_off_tab_button):checked ~ #SDM_main #SDM_about_tab {display: none!important;}
#SDM_main > #SDM_about_tab {display: block!important; white-space: pre-line!important;}
#SDM_on_tab_button:checked ~ #SDM_main #SDM_on_textarea,
#SDM_off_tab_button:checked ~ #SDM_main #SDM_off_textarea {display: block!important;}
</style>
`)

// color inverter CSS
let drkMo = document.createElement('style')
drkMo.innerText = `
html {color-scheme: dark!important; color: #000}
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
if( checkUrlExist( alwaysOnList ) ) {
    applyFilter()
} else if ( checkUrlExist( alwaysOffList ) ) {
    // do nothing
} else {
    let bdyH0 = window.parent.document.body.offsetHeight == 0;
    let frame = self != top;
    let elems = document.querySelectorAll('body > :not(script)');
    let check = (o, t = 0) => {
            let n = n => {return parseInt(getComputedStyle(document.querySelectorAll(o)[t]).getPropertyValue('background-color').match(/\d+/g)[n])};
            return (n(0)*0.299+n(1)*0.587+n(2)*0.114) > 186 || n(3) == 0;
        }
    if((!frame && !bdyH0 || frame) && check('html') && check('body')) applyFilter();
    if(!frame && bdyH0) {for (let i = 0; i < elems.length; i++) {if (elems[i].scrollHeight > window.innerHeight && check('body > :not(script)',i)) applyFilter()}};
}

// SDM_toggle function
document.querySelector('style.drkMo') ? (document.querySelector('#SDM_toggle').checked = true) : (document.querySelector('#SDM_toggle').checked = false);
document.querySelector('#SDM_toggle').onclick = _ => toggleFilter();

// SDM_toggle with hotkey
document.addEventListener("keydown", e => {
    let press = (send) => e.key.toUpperCase() == send.toUpperCase()
        if (e.ctrlKey && document.activeElement.localName !== ("input"||"textarea")) {
        if (press('d')) {
            e.preventDefault()
            toggleFilter()
        }
    }
})

// SDM_add_page function
document.querySelector('#SDM_add_page').onclick = _ => {
    let domain = `, ${new URL(document.URL).hostname.replace('www.','')}`;
    if (document.querySelector('#SDM_on_tab_button:checked') != null) {document.querySelector('#SDM_on_textarea').value += domain};
    if (document.querySelector('#SDM_off_tab_button:checked') != null) {document.querySelector('#SDM_off_textarea').value += domain};
    saveTextarea()
}

// SDM_close_window function
document.querySelector('#SDM_close_window').onclick = _ => toggleOption();

// SDM_about_tab description
function fillDescription() {
    switch (window.navigator.language) {
        case 'ko':
            return `"On" 탭 URL은 테마를 적용하지만 "Off" 탭은 적용하지 않습니다.\n도메인은 쉼표와 줄 바꿈으로 구분됩니다.`;
        case 'zh-TW':
        case 'zh-HK':
        case 'zh-SG':
            return `" On" 標籤 URL 應用主題但不應用" Off" 標籤 。\n域分爲逗號和換行 。`;
        case 'es':
            return `La URL de la pestaña "On" aplica el tema, pero la pestaña "Off" no.La línea principal se divide en coma y cambio de línea.`;
        case 'fr':
            return `L'URL de l'onglet On applique le thème, mais pas l'onglet Off.\nLes domaines sont séparés par des virgules et des lignes.`;
        case 'de':
            return `Die URL der Registerkarte "On" setzt das Thema an, aber nicht die Registerkarte "Off".\nDomains werden durch Kommata und Zeilenumbrüche getrennt.`;
        case 'it':
            return `La scheda "On" URL applica il tema, ma non la scheda "Off".\nI domini sono separati da una virgola e da un'interruzione di riga.`;
        case 'vi':
            return `URL của tab "On" áp dụng chủ đề nhưng tab "Off" không áp dụng.\nDomain được phân loại bằng dấu phẩy và thay đổi dòng.`;
        case 'th':
            return `ที่อยู่ URL ของแท็บ "On" ใช้ธีม แต่ไม่ใช้แท็บ "Off"\nโดเมนถูกแบ่งออกเป็นลูกน้ำและการสลับบรรทัด`;
        case 'id':
            return `URL tab "On" menerapkan tema, namun tab "Off" tidak diterapkan.\nDomain terbagi menjadi koma dan perubahan baris.`;
        case 'zh-CN':
            return `" On" 标签 URL 应用主题但不应用" Off" 标签 。\n域分为逗号和换行 。`;
        case 'ja':
            return `"On"タブURLはテーマを適用しますが、"Off"タブは適用されません。\nドメインはコンマと行違いに区分されます。`;
        case 'ru':
            return `URL вкладки "On" применяет тему, но вкладка "Off" не применяется.\ndomain делится на запятую и запятую.`;
        default:
            return `"On" tab URLs apply themes, but not "Off" tab URLs.\nDomains are separated by commas and line breaks.`;
    }
}
document.querySelector('#SDM_about_tab').textContent = fillDescription();

// tampermonkey menu
GM_registerMenuCommand('On/Off', toggleFilter);
GM_registerMenuCommand('Filter', toggleOption);
})()})
