// ==UserScript==
// @name          SBIS UI-Customizer v1.3.0.rc3
// @namespace     SBIS
// @version       1.3.0.rc3
// @date          01.09.2017 10:28:26
// @author        Новожилов И. А.
// @description   Пользовательская настройка web интерфейса сайтов SBIS
// @homepage      https://github.com/sbis-team/ui-customizer
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA1ElEQVR42s3TOQvCQBAF4HjggWcnaCF4K1YiaQTvwhiiphBBsBAsLcT/X/gW3sIoum6ZgQ8yJDM77G4cJ2qxgrTIO6QjB3NTgw1kRN4jHXlYmxqcoS7yEelowfZXsRptCguofpmgCQGEnCIli2uwFPkN4qJBEk7i/QEasoH64AJZTqDHVE3HfPZZNIAra95CbdAdhpBgscvVJhADD3amTfQ4RYWFOh5Q5iK+7TEG3PWQ5291jHtOoOMIXZEX/k3whOLHReqLvMRFrK9ym+RVnkXr73sBExASEE+L5FQAAAAASUVORK5CYII=
// @icon64        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADzElEQVR42u1aW0hUQRje9ZpaZhJZUZB2o0QiiiK1ICKkGyWVUBQYFPRglvmgkfTQxaCLmZRBhZQFBZb1kiBFQVEkQeBDdLGCHorQLlDQvez74Vs4CLs7szvretz54OPsOeefmX++88+cf+asx2NhYWFhYWFhoY/h4G0eQ8VOcEcY5TPpw9BoCDAB7OUxVJwjQ8Uk+jDOCmAFsAJYAawAVgD3CdAKXo1lAZ6BT90qQDJYAyaFUccFMlSk0IfE/uz4GLAC3MZzOW4HR/XjHCA+lIOlPK+gDyMj2XF50rXgT4ZdG69f5/kP3k+KoADyxI+Cv9hmK6+38fwbeAAcYrrzqVx0/AMbOfacyGVHxIk7tDctQAbYQR9OgDl97k8Dm+nDA9BrUoCLfMJFQeyK+XSaDQsgnbkB/gaXB7FdzfaNCbCIqm5RtC+nfaFBAYpZZ5nmJG1kcrwGvgTjFO0TwDfgJYMC3ARfgPEafreDl8PtvITRF7Bes5yM0Q8KYagiQCIn3oOaPpwFe8IVIJ2hV6lZroLl0g0IMJ51bdb0YRfLpYYjQDIr2a1ZrpLlMgwIMJZ1bdX0odqEAB6O52bNMk0MPxNDQOaer+BJTR/Og29NTIKnOZ5TFO3TwI8UQWWcnlGwawG7WbcKhoGfwVMmBMhj8lGraH8M/ANODzKxzQJHg1ngTL49/GEew7lB0YcG5gyTTeUC+x1zQVyAUN0TZM6QJ7iXEdXLpKWEv7tZ3t+YraddTQAf5DW5j3bVJjNBafA4K34MrnM4Ksf14CPeP+xn7Evq+pzR1MLOJ5KS6Fxh+Sdgtp/ONTlS3bUMdV+avIG+yf1DplNhH1bQQWmkk9eqeC6dWxWgbB0nxvkBbBaCn8AuP28QL8V+xTY7eL3L4cPKSC+HxYkF4GLHhDNbIVOUFVqmQv35HL+NQSJSUu25DuHyNbJVI5C197sIrcHrmP0FEyyLPowYyFtiS8CHmguTiax7zUDeElMV4Aj4PYTw7FGYyV0hQAOTEl28VkjBXSFAleLCqG+iJFGzcTAIMId2JRp1L1Ws2xUCeJmgdCpOhAlMqtoVbF3zYUTe2X+ZyQXa1Ynn4kjygBmDSQAP1/Nif5cJjLdPlBSA95gqlyrW6bpPY5Iqv2e5+47rvnWEJDXLNOpz5bfBNG5vye5xEVNq2ULbFMLujf08Hk0BprLxKVEUII8+ZEdDgEKP+geQSAng2ynKjVUBojoECth4QawKkGNg/LlagJh/C1gBYl0A+Zv8Lc11fl9INlgWRvlM+hCVv8tbWFhYWFhYuBv/AfqkHP1yGxiiAAAAAElFTkSuQmCC
// @supportURL    https://github.com/sbis-team/ui-customizer/issues
// @include       *inside.tensor.ru/*
// @exclude       *inside.tensor.ru/obj/*
// @exclude       *inside.tensor.ru/shared/*
// @exclude       *inside.tensor.ru/docview/*
// @exclude       *inside.tensor.ru/auth/*
// @include       *online.sbis.ru/*
// @exclude       *online.sbis.ru/obj/*
// @exclude       *online.sbis.ru/shared/*
// @exclude       *online.sbis.ru/docview/*
// @exclude       *online.sbis.ru/auth/*
// @run-at        document-start
// @grant         unsafeWindow
// @grant         GM_setClipboard
// @noframes
// ==/UserScript==
/* jshint esnext:true */
(function (window, verinfo, settings, sources) {
"use strict";
var JSModules = {};
window.UICustomizerDefine = UICustomizerDefine;
window.UICustomizerRequire = UICustomizerRequire;
window.UICustomizerEvent = UICustomizerEvent;
var globalContainer = document.createElement('userscript');
globalContainer.id = 'SBIS-UI-Customizer';
document.getElementsByTagName('html')[0].appendChild(globalContainer);
UICustomizerRequire(['Engine'], function (Engine) {
Engine.init(verinfo, settings, sources, {
GM_info: GM_info,
GM_setClipboard: GM_setClipboard
});
});
function UICustomizerDefine(name, dependences, constructor) {
if (typeof dependences === 'function') {
constructor = dependences;
dependences = [];
}
UICustomizerRequire(dependences, function () {
try {
JSModules[name] = constructor.apply(null, dependences);
} catch (err) {
console.error(name, '-', err);
}
});
}
function UICustomizerRequire(dependences, func) {
if (typeof dependences === 'function') {
func = dependences;
dependences = [];
}
for (let i = 0; i < dependences.length; i++) {
let name = dependences[i];
if (!(name in JSModules)) {
let module = document.createElement('script');
module.id = `SBIS-UI-Customizer-${name}-script`;
module.className = 'SBIS-UI-Customizer';
module.type = 'text/javascript';
module.innerHTML = sources.js[name + '.js'];
globalContainer.appendChild(module);
}
if (typeof (dependences[i] = JSModules[name]) !== 'object') {
console.error('Модуль', name, 'недоступен');
return false;
}
}
func.apply(null, dependences);
}
function UICustomizerEvent(moduleName, eventName) {
var args = [];
for (let i = 2; i < arguments.length; i++) {
args.push(arguments[i]);
}
UICustomizerRequire([moduleName], function (module) {
try {
module[eventName].apply(module, args);
} catch (err) {
console.error(moduleName + '.' + eventName, '-', err);
}
});
}
})(unsafeWindow, {
"version": "1.3.0.rc3",
"date": "01.09.2017 10:28:26",
"notes": {
"added": [
"Добавлена новая кнопка для поручений, планов, и прочих типов документов 'Копировать описание'. Копирует в буфер описание с ссылкой на документ.",
"'Копировать описание' проверено на: поручение, план, отгул, проект, этап, обращение, выполнить на рабочем, авария эксплуатации, инцидент"
],
"changed": [],
"fixed": [],
"issues": []
}
}, /* jshint -W033 */
(() => {
return {
"HomePage": {
"title": "Главная страница",
"view": "section",
"options": {
"HideAccordion": {
"title": "Скрыть пункты аккордеона",
"view": "group",
"module": "AccordionHideItems",
"options": {
"Main": {
"title": "Основные",
"view": "block",
"options": {
"Documents": {
"title": "Документы",
"view": "option",
"type": "boolean",
"value": false
},
"Staff": {
"title": "Сотрудники",
"view": "option",
"type": "boolean",
"value": false
},
"Tasks": {
"title": "Задачи",
"view": "option",
"type": "boolean",
"value": false
},
"Contacts": {
"title": "Контакты",
"view": "option",
"type": "boolean",
"value": false
},
"Calendar": {
"title": "Календарь",
"view": "option",
"type": "boolean",
"value": false
},
"MyPage": {
"title": "Моя страница",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Other": {
"title": "Прочие",
"view": "block",
"options": {
"Company": {
"title": "Компании",
"view": "option",
"type": "boolean",
"value": false
},
"Business": {
"title": "Бизнес",
"view": "option",
"type": "boolean",
"value": false
},
"Accounting": {
"title": "Учет",
"view": "option",
"type": "boolean",
"value": false
},
"UTS": {
"title": "УЦ",
"view": "option",
"type": "boolean",
"value": false
},
"Telephony": {
"title": "Телефония",
"view": "option",
"type": "boolean",
"value": false
},
"Retail": {
"title": "Магазин",
"view": "option",
"type": "boolean",
"value": false
},
"Presto": {
"title": "Presto",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
},
"HideOther": {
"title": "Скрыть прочие блоки",
"view": "group",
"module": "OtherBlocksHide",
"options": {
"Banners": {
"title": "Баннеры",
"view": "block",
"options": {
"Owl": {
"title": "Сова > Как просто",
"view": "option",
"type": "boolean",
"value": false
},
"AsJust": {
"title": "\"Как просто\" над лентой",
"view": "option",
"type": "boolean",
"value": false
},
"SideRight": {
"title": "Правый баннер",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
},
"Modify": {
"title": "Изменить внешний вид",
"view": "group",
"module": "HomePageModify",
"options": {
/*
"News": {
"title": "Новости",
"view": "block",
"options": {
"HideAuthor": {
"title": "Скрыть автора из списка",
"view": "option",
"type": "boolean",
"value": false
},
"SmallImg": {
"title": "Уменьшить фото новости",
"view": "option",
"type": "boolean",
"value": false
},
"HideAttachments": {
"title": "Скрыть вложения под спойлер",
"view": "option",
"type": "boolean",
"value": false
},
"HideFooterBtn": {
"title": "Скрыть оценки и репосты",
"view": "option",
"type": "boolean",
"value": false
},
"SlimBorder": {
"title": "Тонкие границы новости",
"view": "option",
"type": "boolean",
"value": false
}
}
},
*/
"Other": {
"title": "Прочее",
"view": "block",
"options": {
"StretchPage": {
"title": "Растянуть сайт на всю страницу",
"view": "option",
"type": "boolean",
"value": false
},
"TapeEventsMinFoto": {
"title": "Уменьшить фото в ленте событий",
"view": "option",
"type": "boolean",
"value": false
},
/*
"HideTapeEvents": {
"title": "Скрыть ленту событий",
"view": "option",
"type": "boolean",
"value": false
},
*/
"HideHeaderText": {
"title": "Скрыть текст кнопок в шапке",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
}
}
},
"CardTask": {
"title": "Карточка задачи и ошибки",
"view": "section",
"options": {
"TaskToolbarBtns": {
"title": "Кнопки в шапке",
"view": "group",
"module": "TaskToolbarBtns",
"options": {
"Show": {
"title": "Показать",
"view": "block",
"options": {
"Schedule": {
"title": "Время по документу",
"view": "option",
"type": "boolean",
"value": false
},
"Monitoring": {
"title": "Поставить на контроль",
"view": "option",
"type": "boolean",
"value": false
},
"Agreement": {
"title": "Отправить на согласование",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Hide": {
"title": "Скрыть",
"view": "block",
"options": {
"Print": {
"title": "Распечатать",
"view": "option",
"type": "boolean",
"value": false
},
"Save": {
"title": "Скачать",
"view": "option",
"type": "boolean",
"value": false
},
"LinkOld": {
"title": "Получить ссылку (старая)",
"view": "option",
"type": "boolean",
"value": false
},
"Delete": {
"title": "Удалить",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Add": {
"title": "Добавить",
"view": "block",
"options": {
"BranchName": {
"title": "Имя ветки",
"view": "option",
"type": "boolean",
"value": false
},
"СommitMsg": {
"title": "Комментарий для коммита",
"view": "option",
"type": "boolean",
"value": false
},
"TaskURL": {
"title": "Ссылка на задачу",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
}
}
},
"CardMR": {
"title": "Карточка MR",
"view": "section",
"options": {
"MRToolbarBtns": {
"title": "Кнопки в шапке",
"view": "group",
"module": "MRToolbarBtns",
"options": {
"Show": {
"title": "Показать",
"view": "block",
"options": {
"Schedule": {
"title": "Время по документу",
"view": "option",
"type": "boolean",
"value": false
},
"Monitoring": {
"title": "Поставить на контроль",
"view": "option",
"type": "boolean",
"value": false
},
"Agreement": {
"title": "Отправить на согласование",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Hide": {
"title": "Скрыть",
"view": "block",
"options": {
"Print": {
"title": "Распечатать",
"view": "option",
"type": "boolean",
"value": false
},
"Save": {
"title": "Скачать",
"view": "option",
"type": "boolean",
"value": false
},
"LinkOld": {
"title": "Получить ссылку (старая)",
"view": "option",
"type": "boolean",
"value": false
},
"Delete": {
"title": "Удалить",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Add": {
"title": "Добавить",
"view": "block",
"options": {
"TaskURL": {
"title": "Ссылка на MR",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
}
}
},
"CardErrand": {
"title": "Карточка поручения и пр.",
"view": "section",
"options": {
"ErrandToolbarBtns": {
"title": "Кнопки в шапке",
"view": "group",
"module": "ErrandToolbarBtns",
"options": {
"Show": {
"title": "Показать",
"view": "block",
"options": {
"Schedule": {
"title": "Время по документу",
"view": "option",
"type": "boolean",
"value": false
},
"Monitoring": {
"title": "Поставить на контроль",
"view": "option",
"type": "boolean",
"value": false
},
"Agreement": {
"title": "Отправить на согласование",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Hide": {
"title": "Скрыть",
"view": "block",
"options": {
"Print": {
"title": "Распечатать",
"view": "option",
"type": "boolean",
"value": false
},
"Save": {
"title": "Скачать",
"view": "option",
"type": "boolean",
"value": false
},
"LinkOld": {
"title": "Получить ссылку (старая)",
"view": "option",
"type": "boolean",
"value": false
},
"Delete": {
"title": "Удалить",
"view": "option",
"type": "boolean",
"value": false
}
}
},
"Add": {
"title": "Добавить",
"view": "block",
"options": {
"TaskURL": {
"title": "Ссылка на задание",
"view": "option",
"type": "boolean",
"value": false
},
"CopyInfo": {
"title": "Копировать описание",
"view": "option",
"type": "boolean",
"value": false
}
}
}
}
}
}
}
}
})()
, {'css':{'HomePageModify-FixHeight.css':`
.sn-NewsPage__oneNews-contentArticle {
height: 20px;
}
.sn-NewsPage__oneNews-contentLogoBrif,
.sn-NewsPage__oneNews-contentText:not(.sn-NewsPage__oneNews-NewsOnlyMedia) {
min-height: 100px !important;
max-height: 100px !important;
}
.sn-NewsPage__oneNews-contentLogoBrif {
margin-bottom: 2px !important;
overflow: hidden;
}
.sn-NewsPage__oneNews-itemAll,
.sn-NewsPage__oneNews {
min-height: 156px;
}
`,'HomePageModify-HideAttachments.css':`
.sn-NewsPage__oneNews-contentCollage:before {
content: 'Показать вложения...';
color: #8991A9;
font-size: 12px;
}
.sn-NewsPage__oneNews-contentCollage {
height: auto !important;
margin-top: 0px;
display: inline-block;
margin: 0px 0px 2px 0px !important;
}
.sn-NewsPage__oneNews-contentCollage .socnet-collage,
.sn-NewsPage__oneNews-contentCollage .socnet-collage__content {
display: none;
}
.sn-NewsPage__oneNews-contentCollage:hover {
display: block;
z-index: 1;
position: relative;
}
.sn-NewsPage__oneNews-contentCollage:hover .socnet-collage,
.sn-NewsPage__oneNews-contentCollage:hover .socnet-collage__content {
display: block;
background: white;
border: 1px solid #f4f4f4;
}
`,'HomePageModify-HideAuthor.css':`
.sn-NewsPage__oneNews-headerPhoto,
.sn-NewsPage__oneNews-headerName,
.sn-NewsPage__oneNews-headerPosition,
.sn-NewsPage__oneNews-headerDestination,
.sn-NewsPage__repostHeader .sn-NewsPage__oneNews-headerDate,
.sn-NewsPage__oneNews-itemAll .sn-NewsPage__oneNews-repostComment,
.sn-NewsPage__oneNews-itemAll .sn-RepostIcon,
.sn-NewsPage__oneNews-itemAll .activity__ActivityMarker {
display: none !important;
}
.sn-NewsPage__oneNews>.sn-NewsPage__oneNews-itemAll {
padding: 3px 6px 3px 6px !important;
}
.sn-NewsPage__oneNews-headerTop,
.sn-NewsPage__oneNews-contentButtons div {
z-index: 1;
}
.sn-NewsPage__oneNews-header {
margin: 0px !important;
}
.sn-NewsPage__repostHeader,
.sn-NewsPage__oneNews-header,
.sn-NewsPage__oneNews-headerTop {
height: auto !important;
}
.sn-NewsPage .controls-ItemsToolbar {
top: 8px !important;
}
.sn-NewsPage .sn-DraftIcon,
.sn-NewsPage .sn-FavoriteIcon,
.sn-NewsPage .sn-PinIcon {
top: -4px !important;
right: 88px !important;
}
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-DraftIcon,
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-FavoriteIcon {
right: 85px !important;
}
.sn-NewsPage__oneNews-headerRead {
top: 0 !important;
margin-top: 0 !important;
background-color: #fff;
line-height: 16px;
padding-left: 80px;
}
.sn-NewsPage__oneNews-contentButtons div {
padding-top: 0px !important;
}
.sn-NewsPage__oneNews-headerDate {
max-width: none !important;
line-height: inherit !important;
margin-top: 0 !important;
}
`,'HomePageModify-HideFooterBtn.css':`
.sn-NewsPage__oneNews-footer {
display: none !important;
}
.sn-NewsPage__oneNews-itemAll {
padding: 3px 12px 3px 12px !important;
}
`,'HomePageModify-HideHeaderText.css':`
.engine-OnlineBaseInnerMinCoreView__headerCell .header-ConfigurationButton .controls-Button__text,
#header [sbisname="ConfigurationLink"] .controls-Link__field,
#header div.user-button-component .controls-Link__field {
display: none !important;
}
`,'HomePageModify-HideTapeEvents.css':`
.online-OnlineBaseInnerView__notificationCenter {
display: none !important;
}
.online-OnlineBaseInnerView__notificationButton {
display: none !important;
}
#headerLeft {
display: block !important;
}
`,'HomePageModify-SlimBorder.css':`
.sn-NewsPage__oneNews-itemAll {
margin-top: 0 !important;
border-radius: 0 !important;
}
.sn-NewsPage__oneNews-contentArticle {
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
}
.np-View__twoColumns .np-News__item[style*="left: 0px"] .sn-NewsPage__oneNews-itemAll {
margin-right: 1px !important;
border-radius: 0 !important;
}
.np-View__twoColumns .np-News__item:not([style*="left: 0px"]) .sn-NewsPage__oneNews-itemAll {
margin-left: 0 !important;
}
.sn-NewsPage .controls-ItemsToolbar {
top: 14px;
}
`,'HomePageModify-SmallImg.css':`
img.sn-NewsPage__oneNews-contentLogo {
width: 64px !important;
height: 64px !important;
}
div.sn-NewsPage__oneNews-withLogo {
margin-left: 74px !important;
}
.sn-NewsPage__oneNews-contentLogoBrif,
.sn-NewsPage__oneNews-contentText:not(.sn-NewsPage__oneNews-NewsOnlyMedia) {
min-height: 64px !important;
max-height: 64px !important;
}
.sn-NewsPage__oneNews-itemAll,
.sn-NewsPage__oneNews {
min-height: 120px !important;
}
`,'HomePageModify-StretchPage.css':`
div.news-SpecialNews {
display: none !important;
}
#min-width,
.engine-OnlineBaseInnerMinCoreView__content {
max-width: none;
}
@media screen and (min-width: 1618px) {
.online-OnlineBaseInnerView__notificationCenter {
right: 17px !important;
left: inherit !important;
}
.engine-OnlineBaseInnerMinCoreView .online-OnlineBaseInnerView__notificationCenter {
right: inherit !important;
}
}
`,'HomePageModify-TapeEventsMinFoto.css':`
div.Staff-EventRibbon-ShortList-ItemTemplate__photoCnt {
text-align: center;
}
div.Staff-EventRibbon-ShortList-ItemTemplate__photoCnt .Person-PersonPhoto,
div.Staff-EventRibbon-ShortList-ItemTemplate__photoCnt .Person-PersonPhoto__with-miniCard {
width: 42px !important;
height: 42px !important;
}
`,'SettingsButton.css':`
#SBIS-UI-Customizer-SettingsButton {
margin-bottom: 4px;
padding-bottom: 8px;
padding-top: 4px;
height: 100%;
font-size: 15px;
border-bottom: 1px solid #e4e4e4;
}
#SBIS-UI-Customizer-SettingsButton .row {
padding: 6px 0px 6px;
}
#SBIS-UI-Customizer-SettingsButton .row:hover {
cursor: pointer;
background: #F0F4FB;
}
#SBIS-UI-Customizer-SettingsButton .icon {
float: left;
margin: 2px 0px 0 15px;
height: 16px;
width: 16px;
}
#SBIS-UI-Customizer-SettingsButton .title {
margin-left: 37px;
}
#SBIS-UI-Customizer-SettingsButton .title:hover {
color: #313E78;
}
#SBIS-UI-Customizer-SettingsButton-Header {
float: right;
margin-right: 8px;
margin-top: 2px;
}
#SBIS-UI-Customizer-SettingsButton-Header .icon {
height: 16px;
width: 16px;
cursor: pointer;
}
#SBIS-UI-Customizer-SettingsButton .icon>svg,
#SBIS-UI-Customizer-SettingsButton-Header .icon>svg {
fill: #587AB0;
}
#SBIS-UI-Customizer-SettingsButton .icon>svg>g,
#SBIS-UI-Customizer-SettingsButton-Header .icon>svg>g {
stroke: #587AB0;
}
#SBIS-UI-Customizer-SettingsButton .icon:hover>svg,
#SBIS-UI-Customizer-SettingsButton-Header .icon:hover>svg {
fill: #313E78;
}
#SBIS-UI-Customizer-SettingsButton .icon:hover>svg>g,
#SBIS-UI-Customizer-SettingsButton-Header .icon:hover>svg>g {
stroke: #313E78;
}
.engine-OnlineBaseInnerMinCoreView__headerCell #SBIS-UI-Customizer-SettingsButton-Header {
float: left;
margin-top: 1px;
}
`,'SettingsDialog.css':`
#SBIS-UI-Customizer-SettingsDialog-Area {
background: #FFFFFF;
border-left: 2px solid #DDDDDD;
border-bottom: 2px solid #DDDDDD;
border-bottom-left-radius: 5px;
position: absolute;
top: 0;
right: 0;
z-index: 1000000;
}
#SBIS-UI-Customizer-SettingsDialog {
width: 520px;
}
#SBIS-UI-Customizer-SettingsDialog > .header {
height: 24px;
padding: 12px;
border-bottom: 1px solid #EAEAEA;
}
#SBIS-UI-Customizer-SettingsDialog > .header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
}
#SBIS-UI-Customizer-SettingsDialog > .feedback {
position: absolute;
right: 48px;
height: 16px;
top: 16px;
display: inline-block;
}
#SBIS-UI-Customizer-SettingsDialog > .feedback i {
cursor: pointer;
margin-right: 4px;
height: 16px;
width: 16px;
display: inline-block;
}
#SBIS-UI-Customizer-SettingsDialog > .feedback i.separator {
width: 4px;
border-right: 1px solid #E4E4E4;
}
#SBIS-UI-Customizer-SettingsDialog > .feedback i svg {
fill: #587AB0;
}
#SBIS-UI-Customizer-SettingsDialog > .feedback i:hover svg {
fill: #FF7033;
}
#SBIS-UI-Customizer-SettingsDialog > .Settings-panel {
overflow-y: auto;
}
.SBIS-UI-Customizer .SettingsDialog-section {
float: left;
width: 100%;
}
.SBIS-UI-Customizer .SettingsDialog-section:last-child > .header {
border-bottom: none;
border-bottom-left-radius: 3px;
}
.SBIS-UI-Customizer .SettingsDialog-section.active > .header {
background: #F3F3F3;
}
.SBIS-UI-Customizer .SettingsDialog-section > .header {
padding: 6px 12px;
cursor: pointer;
border-bottom: 1px solid #F5F5F5;
}
.SBIS-UI-Customizer .SettingsDialog-section > .header:hover {
background: #F0F5FB;
}
.SBIS-UI-Customizer .SettingsDialog-section > .header .title {
font-size: 18px;
color: #313E78;
font-weight: bold;
}
.SBIS-UI-Customizer .SettingsDialog-section .slider {
float: left;
width: 100%;
border-bottom: 1px solid #EAEAEA;
display: none;
}
.SBIS-UI-Customizer .SettingsDialog-section.active .slider {
display: block;
}
.SBIS-UI-Customizer .SettingsDialog-section:last-child .slider {
border-bottom: none;
}
.SBIS-UI-Customizer .SettingsDialog-group {
float: left;
width: 100%;
}
.SBIS-UI-Customizer .SettingsDialog-group > .box {
float: left;
width: 100%;
border-bottom: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer .SettingsDialog-section .SettingsDialog-group:last-child > .box {
border-bottom: none;
}
.SBIS-UI-Customizer .SettingsDialog-group > .header {
border-bottom: 1px solid #F5F5F5;
}
.SBIS-UI-Customizer .SettingsDialog-group > .header .title {
font-size: 16px;
padding: 4px 12px;
display: inline-block;
}
.SBIS-UI-Customizer .SettingsDialog-block {
float: left;
width: 250px;
}
.SBIS-UI-Customizer .SettingsDialog-block > .title {
color: #313E78;
font-size: 14px;
font-weight: bold;
padding: 6px 12px 0;
display: inline-block;
}
.SBIS-UI-Customizer .SettingsDialog-block > .box {
padding: 0px 0px 6px 12px;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label {
cursor: pointer;
display: inline-block;
padding: 2px 0;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean input {
-webkit-appearance: none;
/*-moz-appearance: none;*/
border: 1px solid #ADADAD;
vertical-align: middle;
height: 14px;
width: 14px;
position: relative;
cursor: pointer;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label:hover input {
background: #F0F5FB;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean input:checked:after{
content: '\\2714';
font-size: 14px;
position: absolute;
left: 0;
color: #FF7033;
font-weight: bold;
line-height: 12px;
vertical-align: middle;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean span {
vertical-align: middle;
padding-left: 4px;
}
.SBIS-UI-Customizer .SettingsDialog-option-boolean label:hover span {
text-decoration: underline;
color: #FF7033;
}
`,'SocNet.css':`
.SBIS-UI-Customizer-SocNet-InputDialog {
background: #FFFFFF;
border-left: 2px solid #DDDDDD;
border-bottom: 2px solid #DDDDDD;
border-bottom-left-radius: 5px;
position: absolute;
top: 0;
right: 0;
z-index: 1000001;
}
.SBIS-UI-Customizer-SocNet-InputDialog > .header {
height: 24px;
padding: 12px;
border-bottom: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer-SocNet-InputDialog > .header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
}
.SBIS-UI-Customizer-SocNet-InputDialog textarea {
width: 350px;
resize: none;
padding: 6px;
margin: 8px;
border: 1px solid #EAEAEA;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send {
position: absolute;
top: 12px;
right: 44px;
padding: 2px 8px;
cursor: pointer;
border: 1px solid #ff7033;
border-radius: 16px;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send:hover{
background: #FDECD9;
}
.SBIS-UI-Customizer-SocNet-InputDialog .send:active {
background: #FDD2C0
}
`,'TaskToolbarBtns-ExtraButtons.css':`
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons {
display: inline-block;
border-right: 1px solid #E4E4E4;
margin-right: 5px;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i {
vertical-align: middle;
cursor: pointer;
margin-right: 4px;
height: 24px;
width: 24px;
display: inline-block;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i svg {
fill: #587AB0;
}
.SBIS-UI-Customizer.TaskToolbarBtns-ExtraButtons i:hover svg {
fill: #FF7033;
}
`,'VersionInformer.css':`
.SBIS-UI-Customizer .VersionInformer .background {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 7000000;
background-color: #000;
opacity: 0.1;
}
.SBIS-UI-Customizer .VersionInformer .area {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 7000001;
}
.SBIS-UI-Customizer .VersionInformer .dialog {
min-width: 600px;
max-width: 800px;
display: inline-block;
background: #FFFFFF;
border: 2px solid #DDDDDD;
border-top-width: 0px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .header {
height: 24px;
padding: 12px;
border-bottom: 1px solid #EAEAEA;
border-top: 3px solid #135091;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .header .title {
font-weight: bold;
font-size: 20px;
color: #313e78;
padding-right: 16px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .header .info {
float: right;
color: #999;
font-size: 12px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .content {
padding: 12px 16px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .content > .group {
padding-bottom: 8px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .content > .group > .title {
color: #313E78;
font-weight: bold;
font-size: 15px;
line-height: 24px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .content > .group > ul {
padding-left: 26px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .content > .group > ul > li {
padding-bottom: 8px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer {
padding: 16px 0;
border-top: 1px solid #EAEAEA;
background: #F5F5F5;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer > .links {
float: left;
padding: 0 12px;
line-height: 25px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer > .links.right {
float: right;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer > .links > a {
border-right: 1px solid #EAEAEA;
padding-right: 6px;
padding-left: 2px;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer > .links > a:last-child {
border-right: none;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer .button {
border: 1px solid #ff7033;
margin: auto;
border-radius: 16px;
padding: 2px;
width: 100px;
text-align: center;
cursor: pointer;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer .button:hover {
background-color: #fdecd9;
}
.SBIS-UI-Customizer .VersionInformer .dialog > .footer .button:active {
background-color: #fdd2c0 !important;
}
`},'js':{'AccordionHideItems.js':`
UICustomizerDefine('AccordionHideItems', ['Engine'], function (Engine) {
"use strict";
const selectors = {
'Documents': '.nav-menu-container a[data-id="documents"]',
'Staff': '.nav-menu-container a[data-id="staff"]',
'Tasks': '.nav-menu-container a[data-id="work"]',
'Contacts': '.nav-menu-container a[data-id="contacts"]',
'Calendar': '.nav-menu-container a[data-id="calendar"]',
'MyPage': '.nav-menu-container a[data-id="myProfile"]',
'Company': '.nav-menu-container a[data-id="contragents"]',
'Business': '.nav-menu-container a[data-id="business"]',
'Accounting': '.nav-menu-container a[data-id="accounting"]',
'UTS': '.nav-menu-container a[data-id="ca_navication"]',
'Telephony': '.nav-menu-container a[data-id="tel"]',
'Retail': '.nav-menu-container a[data-id="retail"]',
'Presto': '.nav-menu-container a[data-id="presto"]'
};
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
for (let groupName in settings.options) {
let group = settings.options[groupName];
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.displayNone(selectors[name]);
}
}
}
if (css) {
Engine.appendCSS('AccordionHideItems', css);
} else {
Engine.removeCSS('AccordionHideItems');
}
}
});
`,'Engine.js':`
UICustomizerDefine('Engine', function () {
"use strict";
const htmlre = /\\{\\{([\\w]+)\\}\\}/g;
const migrateSettingsGroup = {};
var verinfo, baseSettings, sources, gmapi, settings;
var SbisService, InformationPopupManager;
var _onload = false;
var _onloadEvents = [];
window.onload = function () {
_onloadEvents.forEach(function (fn) {
fn();
});
_onload = true;
_onloadEvents = null;
};
var _waitRequire = false;
var _waitRequireEvents = [];
var _waitRequireID = setInterval(function () {
if (typeof require !== 'undefined') {
_waitRequireEvents.forEach(function (fn) {
fn();
});
_waitRequire = true;
_waitRequireEvents = null;
clearInterval(_waitRequireID);
}
}, 100);
var _waitID = null;
var _wait = {};
var _waitSync = {};
var _waitOnce = {};
document.addEventListener("DOMNodeInserted", function (ev) {
_waiting();
_waitingSync();
}, false);
return {
init: init,
getVerInfo: getVerInfo,
waitRequire: waitRequire,
onload: onload,
wait: wait,
waitSync: waitSync,
unsubscribeWait: unsubscribeWait,
unsubscribeWaitSync: unsubscribeWaitSync,
waitOnce: waitOnce,
unsubscribeWaitOnce: unsubscribeWaitOnce,
getHTML: getHTML,
createElement: createElement,
createComponent: createComponent,
removeByQuery: removeByQuery,
generateCSS: {
custom: generateCSS_custom,
displayNone: generateCSS_displayNone,
inlineBlock: generateCSS_inlineBlock
},
getCSS: getCSS,
appendCSS: appendCSS,
removeCSS: removeCSS,
getSVG: getSVG,
getSettings: getSettings,
setSetting: setSetting,
cutTags: cutTags,
cutOverflow: cutOverflow,
copyToClipboard: copyToClipboard,
getDate: getDate,
rpc: {
sbis: rpc_sbis
},
openInformationPopup: openInformationPopup
};
function init(_verinfo, _baseSettings, _sources, _gmapi) {
/* jshint -W040 */
delete this.init;
verinfo = _verinfo;
baseSettings = _baseSettings;
sources = _sources;
gmapi = _gmapi;
settings = _copyObject(baseSettings);
var localSettings = localStorage.getItem('SBIS-UI-Customizer-Settings');
if (localSettings) {
localSettings = JSON.parse(localSettings);
_applySettings(settings, localSettings);
}
localStorage.setItem('SBIS-UI-Customizer-Settings', JSON.stringify(_minimizeSettings(settings)));
var lastversion = localStorage.getItem('SBIS-UI-Customizer-LastVersion');
if (lastversion || localSettings) {
if (lastversion !== verinfo.version) {
UICustomizerRequire(['VersionInformer'], function (VersionInformer) {
VersionInformer.open();
});
}
} else {
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
}
UICustomizerRequire(['SettingsButton'], function (SettingsButton) {
SettingsButton.init();
});
}
function getVerInfo() {
return _copyObject(verinfo);
}
function onload(fn) {
if (_onload) {
fn();
} else {
_onloadEvents.push(fn);
}
}
function waitRequire(fn) {
if (_waitRequire) {
fn();
} else {
_waitRequireEvents.push(fn);
}
}
function wait(selector, fn) {
if (!(selector in _wait)) {
_wait[selector] = new Set();
}
_wait[selector].add(fn);
_waiting();
}
function waitSync(selector, fn) {
if (!(selector in _waitSync)) {
_waitSync[selector] = new Set();
}
_waitSync[selector].add(fn);
_waitingSync();
}
function unsubscribeWait(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _wait[selector];
} else {
if (selector in _wait) {
let set = _wait[selector];
set.delete(fn);
if (!set.size) {
delete _wait[selector];
}
}
}
}
function unsubscribeWaitSync(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _waitSync[selector];
} else {
if (selector in _waitSync) {
let set = _waitSync[selector];
set.delete(fn);
if (!set.size) {
delete _waitSync[selector];
}
}
}
}
function waitOnce(selector, fn) {
if (!(selector in _waitOnce)) {
_waitOnce[selector] = new Set();
}
_waitOnce[selector].add(fn);
_waiting();
}
function unsubscribeWaitOnce(selector, fn) {
if (typeof (fn) === 'undefined') {
delete _waitOnce[selector];
} else {
if (selector in _waitOnce) {
let set = _waitOnce[selector];
set.delete(fn);
if (!set.size) {
delete _waitOnce[selector];
}
}
}
}
function _waiting() {
if (!_waitID) {
_waitID = setTimeout(_waitingHandler, 1);
}
}
function _waitingHandler() {
for (let i in _wait) {
let elms = document.querySelectorAll(i);
let ret_elms = [];
for (let j = 0; j < elms.length; j++) {
let elm = elms[j];
if (!elm.UIC_Found) {
elm.UIC_Found = true;
ret_elms.push(elm);
}
}
if (ret_elms.length > 0) {
for (let item of _wait[i]) {
item(ret_elms);
}
}
}
for (let i in _waitOnce) {
let elm = document.querySelector(i);
if (elm) {
for (let item of _waitOnce[i]) {
item(elm);
}
delete _waitOnce[i];
}
}
_waitID = null;
}
function _waitingSync() {
for (let i in _waitSync) {
let elms = document.querySelectorAll(i);
let ret_elms = [];
for (let j = 0; j < elms.length; j++) {
let elm = elms[j];
if (!elm.UIC_Found) {
elm.UIC_Found = true;
ret_elms.push(elm);
}
}
if (ret_elms.length > 0) {
for (let item of _waitSync[i]) {
item(ret_elms);
}
}
}
}
function getHTML(name, data) {
name += '.xhtml';
if (name in sources.xhtml) {
let xhtml = sources.xhtml[name];
if (data) {
xhtml = xhtml.replace(htmlre, function (str, key) {
return key in data ? data[key] : str;
});
}
return xhtml;
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function createElement(name, data) {
var html = getHTML(name, data);
var cnt = document.createElement('div');
cnt.className = 'SBIS-UI-Customizer ' + name;
cnt.innerHTML = html;
return cnt;
}
function createComponent(name, data) {
var html = getHTML(name, data);
var cnt = document.createElement('div');
cnt.id = 'SBIS-UI-Customizer-' + name;
cnt.className = 'SBIS-UI-Customizer';
cnt.innerHTML = html;
return cnt;
}
function removeByQuery(query) {
var elms = document.querySelectorAll(query);
for (let i = 0; i < elms.length; i++) {
elms[i].remove();
}
}
function generateCSS_custom(selector, rule, value) {
return \`\${selector} { \${rule}: \${value}; }\`;
}
function generateCSS_displayNone(selector) {
return \`\${selector} { display: none !important; }\`;
}
function generateCSS_inlineBlock(selector) {
return \`\${selector} { display: inline-block !important; }\`;
}
function getCSS(name) {
name += '.css';
if (name in sources.css) {
return sources.css[name];
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function appendCSS(name, use_css) {
let fullname = name + '.css';
if (fullname in sources.css || use_css) {
var id = \`SBIS-UI-Customizer-\${fullname}\`;
var elm = document.getElementById(id);
if (!elm) {
elm = document.createElement('style');
elm.id = id;
elm.type = 'text/css';
elm.className = 'SBIS-UI-Customizer';
document.getElementById('SBIS-UI-Customizer').appendChild(elm);
}
elm.innerHTML = use_css || getCSS(name);
}
}
function removeCSS(name) {
let fullname = name + '.css';
var id = \`SBIS-UI-Customizer-\${fullname}\`;
var elm = document.getElementById(id);
if (elm) {
elm.remove();
}
}
function getSVG(name) {
name += '.svg';
if (name in sources.svg) {
return sources.svg[name];
} else {
throw Error('Неизвестное имя файла: ' + name);
}
}
function getSettings(minimize) {
return minimize ? _minimizeSettings(_copyObject(settings)) : _copyObject(settings);
}
function setSetting(name, value) {
var names = name.split('.');
var setting = settings;
var moduleSettings = null;
while (names.length > 0) {
setting = setting[names.shift()];
if (setting.module) {
moduleSettings = setting;
}
if (names.length > 0) {
setting = setting.options;
}
}
switch (setting.type) {
case 'boolean':
setting.value = !!value;
break;
}
_applySettings_toModule(moduleSettings);
}
function cutTags(text) {
return (text + '')
.replace(/<\\/?\\w+[^>]*>/g, '')
.replace(/&nbsp;/g, ' ')
.replace(/\\n\\s+\\n/g, '\\n\\n')
.replace(/\\n\\n+/g, '\\n\\n')
.replace(/\\n\\n+$/g, '\\n');
}
function cutOverflow(text, maxLine, maxLength) {
text = (text + '').split('\\n');
maxLine = maxLine || 80;
maxLength = maxLength || 256;
let result = [];
for (let i = 0; i < text.length; i++) {
let line = text[i];
if (line.length > maxLine) {
line = line.split(' ');
let newLine = '';
while (line.length > 0) {
let word = line.shift();
let testLine = newLine + (newLine ? ' ' : '') + word;
if (testLine.length < maxLine) {
newLine = testLine;
} else {
if (newLine) {
result.push(newLine);
}
while (word.length > maxLine) {
result.push(word.substring(0, maxLine));
word = word.substring(maxLine);
}
newLine = word;
}
}
result.push(newLine);
} else {
result.push(line);
}
}
result = result.join('\\n');
if (result.length > maxLength) {
result = result.substring(0, maxLength - 3) + '...';
}
return result;
}
function copyToClipboard(text) {
gmapi.GM_setClipboard(text, { type: 'text', mimetype: 'text/plain' });
}
function getDate(date) {
date = date || new Date();
var d = ('0' + date.getDate()).slice(-2);
var m = ('0' + (date.getMonth() + 1)).slice(-2);
var y = String(date.getFullYear()).slice(-2);
return d + '.' + m + '.' + y;
}
function rpc_sbis(obj) {
if (!SbisService) {
return require(['js!WS.Data/Source/SbisService'], function (svr) {
SbisService = svr;
rpc_sbis(obj);
});
}
var service = obj.service ? ('/' + obj.service) : '';
var method = obj.method.split('.');
var params = obj.params || {};
var callback = obj.callback;
var errback = obj.errback;
var bl = new SbisService({
endpoint: {
address: service + '/service/',
contract: method[0]
}
}).call(method[1], params);
if (callback) {
bl.addCallback(callback);
}
if (errback) {
bl.addErrback(errback);
}
}
function openInformationPopup(text, status) {
if (!InformationPopupManager) {
return require(['js!SBIS3.CONTROLS.Utils.InformationPopupManager'], function (ipm) {
InformationPopupManager = ipm;
return openInformationPopup(text, status);
});
}
status = status ? status : 'success';
InformationPopupManager.showNotification({
status: status,
caption: text
});
}
function _copyObject(obj) {
var newObj = {};
for (let name in obj) {
let val = obj[name];
if (val instanceof Array) {
newObj[name] = obj[name].slice();
} else if (typeof val === 'object') {
newObj[name] = _copyObject(obj[name]);
} else {
newObj[name] = obj[name];
}
}
return newObj;
}
function _applySettings(target, source, ptName) {
for (let name in target) {
let sName = name;
if (!(sName in source)) {
if (name in migrateSettingsGroup) {
sName = migrateSettingsGroup[name];
} else {
continue;
}
}
let fName = ptName ? \`\${ptName}.\${name}\` : name;
let tVal = target[name];
let sVal = source[sName];
let tType = typeof tVal;
let sType = typeof sVal;
if (
tType === 'object' &&
'options' in tVal &&
sType === 'object'
) {
_applySettings(tVal.options, sVal, fName);
} else if (
tType === 'object' &&
'value' in tVal &&
sType !== 'object' &&
typeof tVal.value === sType
) {
tVal.value = sVal;
} else {
console.error(Error(\`Неверный тип опции \${fName}\`));
}
if (tVal.module) {
_applySettings_toModule(tVal);
}
}
}
function _applySettings_toModule(moduleSettings) {
UICustomizerRequire([moduleSettings.module], function (module) {
module.applySettings.call(module, moduleSettings);
localStorage.setItem('SBIS-UI-Customizer-Settings', JSON.stringify(_minimizeSettings(settings)));
});
}
function _minimizeSettings(conf) {
var min = {};
for (let name in conf) {
let obj = conf[name];
if ('value' in obj) {
min[name] = obj.value;
} else if ('options' in obj) {
min[name] = _minimizeSettings(obj.options);
}
}
return min;
}
});
`,'ErrandToolbarBtns.js':`
UICustomizerDefine('ErrandToolbarBtns', ['Engine', 'TaskToolbarBtns'], function (Engine, Task) {
"use strict";
var property = {
btns: {
TaskURL: {
icon: 'link'
},
CopyInfo: {
icon: 'info'
}
},
ExcludeDocTypeName: ['Merge request', 'Ошибка в разработку', 'Задача в разработку'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.ErrandToolbarBtns span[data-id="edoDeleteDocument"]'
}
};
return {
applySettings: applySettings,
copyToClipboard: copyToClipboard
};
function applySettings(settings) {
Task.applySettings(settings, 'ErrandToolbarBtns', property);
}
function copyToClipboard(elm, action) {
var msg = '';
var text = '';
var opener = elm.parentElement.parentElement.wsControl;
var record = opener.getLinkedContext().getValue('record');
switch (action) {
case 'CopyInfo':
msg = 'Описание скопировано в буфер обмена';
let docName = record.get('РП.Документ').get('Регламент').get('Название');
let number =
(record.has('Номер') ? record.get('Номер') : '') ||
'';
let face =
(record.has('ЛицоСоздал.Название') ? record.get('ЛицоСоздал.Название') : '') ||
(record.has('Лицо1.Название') ? record.get('Лицо1.Название') : '') ||
(record.has('Автор.Название') ? record.get('Автор.Название') : '') ||
'';
if (docName === 'Обращение') {
let clt = record.get('Лицо.Название') || '';
face = clt ? (face + ' (' + clt + ')') : face;
}
let info_text =
(record.has('РазличныеДокументы.Информация') ? record.get('РазличныеДокументы.Информация') : '') ||
(record.has('Примечание') ? record.get('Примечание') : '') ||
(record.has('ДокументРасширение.Название') ? record.get('ДокументРасширение.Название') : '') ||
'';
number = number ? (' № ' + number) : '';
face = face ? (' ' + face) : '';
info_text = Engine.cutOverflow(Engine.cutTags(info_text), 98, 1024);
text =
docName + number + ' от ' +
Engine.getDate(record.get('ДокументРасширение.ДатаВремяСоздания')) +
face + '\\n' +
location.protocol + '//' +
location.host + '/opendoc.html?guid=' +
record.get('ИдентификаторДокумента') + '\\n\\n' +
info_text;
break;
}
Engine.copyToClipboard(text);
Engine.openInformationPopup(rk(msg));
}
});
`,'HomePageModify.js':`
UICustomizerDefine('HomePageModify', ['Engine'], function (Engine) {
"use strict";
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
/*
let news = settings.options.News.options;
if (news.HideAuthor.value && news.HideFooterBtn.value) {
css += Engine.getCSS('HomePageModify-FixHeight');
}
*/
for (let groupName in settings.options) {
let group = settings.options[groupName];
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.getCSS('HomePageModify-' + name);
}
}
}
/*
if (news.HideAuthor.value && news.SlimBorder.value) {
css += Engine.generateCSS.custom(
'.sn-NewsPage .sn-DraftIcon, .sn-NewsPage .sn-FavoriteIcon, .sn-NewsPage .sn-PinIcon',
'top',
'0px !important'
);
}
*/
if (css) {
Engine.appendCSS('HomePageModify', css);
} else {
Engine.removeCSS('HomePageModify');
}
}
});
`,'MRToolbarBtns.js':`
UICustomizerDefine('MRToolbarBtns', ['Engine', 'TaskToolbarBtns'], function (Engine, Task) {
"use strict";
var property = {
btns: {
TaskURL: {
icon: 'link'
}
},
ApplyDocTypeName: ['Merge request'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.MRToolbarBtns span[data-id="edoDeleteDocument"]'
}
};
return {
applySettings: applySettings
};
function applySettings(settings) {
Task.applySettings(settings, 'MRToolbarBtns', property);
}
});
`,'OtherBlocksHide.js':`
UICustomizerDefine('OtherBlocksHide', ['Engine'], function (Engine) {
"use strict";
const selectors = {
'Owl': 'div[data-component="SBIS3.Engine.HowEasy"]',
'AsJust': \`
.ExpandOurOrg__div,
.middle__OurOrgHowEasy
\`,
'SideRight': 'div.news-SpecialNews'
};
return {
applySettings: applySettings
};
function applySettings(settings) {
var css = '';
for (let groupName in settings.options) {
let group = settings.options[groupName];
if (group.module) {
continue;
}
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.displayNone(selectors[name]);
}
}
}
if (css) {
Engine.appendCSS('OtherBlocksHide', css);
} else {
Engine.removeCSS('OtherBlocksHide');
}
}
});
`,'SettingsButton.js':`
UICustomizerDefine('SettingsButton', ['Engine'], function (Engine) {
"use strict";
return {
init: init
};
function init() {
Engine.appendCSS('SettingsButton');
Engine.waitOnce('div.account_management__user-panel .account_management__user-panel-buttons-list .controls-ListView__itemsContainer', function (elm) {
var container = Engine.createComponent('SettingsButton', {
icon: Engine.getSVG('settings')
});
elm.parentElement.insertBefore(container, elm);
});
Engine.waitOnce('#header #headerLeft', function (elm) {
var container = Engine.createComponent('SettingsButton-Header', {
icon: Engine.getSVG('settings')
});
elm.parentElement.insertBefore(container, elm);
});
Engine.waitOnce('.engine-OnlineBaseInnerMinCoreView__headerCell .header-ConfigurationButton', function (elm) {
var container = Engine.createComponent('SettingsButton-Header', {
icon: Engine.getSVG('settings')
});
elm.parentElement.insertBefore(container, elm);
});
}
});
`,'SettingsDialog.js':`
UICustomizerDefine('SettingsDialog', ['Engine', 'SocNet'], function (Engine, SocNet) {
"use strict";
var dialog;
return {
open: open,
close: close,
toggleSection: toggleSection,
onchangeOptionBoolean: onchangeOptionBoolean
};
function open() {
var up = document.querySelector('div[templatename="js!SBIS3.AccountsManagement.UserPanel"]');
if (up) {
up.wsControl.hide();
}
if (dialog) {
dialog.style.display = '';
} else {
_createDialog();
}
_resize();
window.addEventListener('resize', _resize);
}
function close() {
dialog.style.display = 'none';
window.removeEventListener('resize', _resize);
}
function toggleSection(section) {
var classList = section.parentElement.classList;
if (classList.contains('active')) {
classList.remove('active');
} else {
classList.add('active');
}
}
function onchangeOptionBoolean(element) {
var optname = element.getAttribute('optname');
var value = element.checked;
Engine.setSetting(optname, value);
}
function _createDialog() {
Engine.appendCSS('SettingsDialog');
dialog = document.createElement('div');
dialog.id = 'SBIS-UI-Customizer-SettingsDialog-Area';
var template = Engine.createComponent('SettingsDialog');
var feedback = document.createElement('div');
feedback.className = 'feedback';
feedback.innerHTML = SocNet.getFeedbackButtons();
template.appendChild(feedback);
_buildSettings(template);
dialog.appendChild(template);
document.body.appendChild(dialog);
open();
}
function _buildSettings(parent) {
var stgs = Engine.getSettings();
var container = document.createElement('div');
container.className = 'Settings-panel';
for (let i in stgs) {
stgs[i].fullName = i;
container.appendChild(_buildComponent(stgs[i]));
}
parent.appendChild(container);
}
function _buildComponent(options) {
switch (options.view) {
case 'section':
return _buildSection(options);
case 'group':
return _buildGroup(options);
case 'block':
return _buildBlock(options);
case 'option':
return _buildOption(options);
}
}
function _buildSection(options) {
var section = Engine.createElement('SettingsDialog-section', {
title: options.title
});
var slider = document.createElement('div');
slider.className = 'slider';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
slider.appendChild(_buildComponent(options.options[i]));
}
section.appendChild(slider);
return section;
}
function _buildGroup(options) {
var group = Engine.createElement('SettingsDialog-group', {
title: options.title
});
var box = document.createElement('div');
box.className = 'box';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
box.appendChild(_buildComponent(options.options[i]));
}
group.appendChild(box);
return group;
}
function _buildBlock(options) {
var block = Engine.createElement('SettingsDialog-block', {
title: options.title
});
var box = document.createElement('div');
box.className = 'box';
for (let i in options.options) {
options.options[i].fullName = options.fullName + '.' + i;
box.appendChild(_buildComponent(options.options[i]));
}
block.appendChild(box);
return block;
}
function _buildOption(options) {
var tmpl = \`SettingsDialog-option-\${options.type}\`;
var option = Engine.createElement(tmpl, {
title: options.title,
optname: options.fullName,
value: options.value ? 'checked' : ''
});
return option;
}
function _resize() {
var panel = dialog.children[0].children[3];
panel.style['max-height'] = (document.body.clientHeight - 49) + 'px';
}
});
`,'SocNet.js':`
UICustomizerDefine('SocNet', ['Engine'], function (Engine) {
"use strict";
var GroupUUID = '2d110a8e-7edb-469a-a3cb-5eb6d8095c10';
var ChatUUID = '3af31f44-c91a-4bbf-8470-3dd423f0b6eb';
var AuthorUUID = 'd7dde799-21cb-49ea-89cf-de56e4f7f78b';
if (location.host === 'test-online.sbis.ru') {
GroupUUID = 'ceeeedd4-8d0e-4dd0-9635-88f1758c3ef3';
ChatUUID = '83adaca3-d02b-490b-bbbf-95ce9953797d';
AuthorUUID = '8cab8a51-da51-40fd-bef3-6f090edbdeaa';
}
var feedbackButtons = '';
Engine.appendCSS('SocNet');
return {
getFeedbackButtons: getFeedbackButtons,
sendFeedback: sendFeedback
};
function getFeedbackButtons() {
if (!feedbackButtons) {
feedbackButtons = Engine.getHTML('SocNet-FeedbackButtons', {
'LikeIt': Engine.getSVG('thumbsup'),
'SendQuestion': Engine.getSVG('comment-discussion'),
'SendFeedback': Engine.getSVG('megaphone'),
'ReportError': Engine.getSVG('bug')
});
}
return feedbackButtons;
}
function sendFeedback(elm, action) {
switch (action) {
case 'SendQuestion':
_showInputDialog('Задать вопрос', 'Задайте вопрос, оставьте предложение, пожелание...', function (msg) {
_SendQuestion(msg);
});
break;
case 'SendFeedback':
_showInputDialog('Оставить отзыв', 'Оставьте отзыв о данном плагине, опишите что Вам понравилось, а что нет...', function (msg) {
_SendFeedback(msg);
});
break;
case 'ReportError':
_showInputDialog('Сообщить о проблеме', 'Опишите проблему возникшую с данным плагином...', function (msg) {
_ReportError(msg);
});
}
}
function _showInputDialog(title, hint, callback) {
var dlg = document.createElement('div');
dlg.className = "SBIS-UI-Customizer-SocNet-InputDialog";
dlg.innerHTML = Engine.getHTML('SocNet-InputDialog', {
'title': title,
'hint': hint
});
dlg.children[3].onkeydown = function (event) {
if (event.ctrlKey && event.keyCode === 13) {
if (dlg.children[3].value) {
callback(dlg.children[3].value);
dlg.remove();
}
}
};
dlg.children[1].onclick = function () {
if (dlg.children[3].value) {
callback(dlg.children[3].value);
dlg.remove();
}
};
document.body.appendChild(dlg);
dlg.children[3].focus();
}
function _SendQuestion(msg) {
_JoinToGroup(function () {
Engine.rpc.sbis({
method: 'Персона.СОтправить',
params: {
"Получатели": [],
"Текст": msg,
"Диалог": ChatUUID,
"Документ": null,
"Сообщение": null,
"Файлы": [],
"Опции": {
"d": [
false,
false
],
"s": [
{ "t": "Логическое", "n": "МассовоеСообщение" },
{ "t": "Логическое", "n": "СлитьСПредыдущим" }
],
"_type": "record"
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup(rk('Ваше сообщение успешно отправлено в чат "SBIS UI-Customizer"'));
}
});
});
}
function _SendFeedback(msg) {
_JoinToGroup(function () {
Engine.rpc.sbis({
method: 'Event.CreateNews',
params: {
"Object": {
"d": [
GroupUUID,
null,
1,
1,
false,
msg
],
"s": [
{ "n": "Channel", "t": "UUID" },
{ "n": "News", "t": "UUID" },
{ "n": "Visibility", "t": "Число целое" },
{ "n": "EventType", "t": "Число целое" },
{ "n": "FromGroup", "t": "Логическое" },
{ "n": "Text", "t": "Строка" }
],
"_type": "record"
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup(rk('Ваш отзыв успешно отправлен в группу "SBIS UI-Customizer"'));
}
});
});
}
function _ReportError(msg) {
var guid = $ws.helpers.createGUID();
var ver = Engine.getVerInfo();
msg = 'Ошибка: SBIS UI-Customizer ' + ver.version + '\\nСборка от: ' +
ver.date + '\\n\\nСообщение:\\n' + msg + '\\n\\n--- Настройки плагина ---\\n' +
JSON.stringify(Engine.getSettings(true)) +
'\\n------------------------';
Engine.rpc.sbis({
method: 'Персона.СОтправить',
params: {
"Получатели": [AuthorUUID],
"Текст": msg,
"Диалог": guid,
"Документ": null,
"Сообщение": null,
"Файлы": [],
"Опции": {
"d": [
false,
false,
false
],
"s": [
{ "t": "Логическое", "n": "МассовоеСообщение" },
{ "t": "Логическое", "n": "СлитьСПредыдущим" },
{ "t": "Логическое", "n": "ВсемУчастникамТемы" }
],
"_type": "record"
}
},
callback: function () {
UICustomizerEvent('SettingsDialog', 'close');
Engine.openInformationPopup(rk('Ваше сообщение успешно отправлено автору плагина'));
}
});
}
function _JoinToGroup(callback) {
Engine.rpc.sbis({
method: 'Subscription.Create',
params: {
'Filter': {
'd': [
false,
GroupUUID,
false
],
's': [
{ 'n': 'Admin', 't': 'Логическое' },
{ 'n': 'Channel', 't': 'Строка' },
{ 'n': 'Obligatory', 't': 'Логическое' }
]
}
},
callback: callback
});
}
});
`,'TaskToolbarBtns.js':`
UICustomizerDefine('TaskToolbarBtns', ['Engine'], function (Engine) {
"use strict";
const PARSE_ERROR = 'TaskToolbarBtns: Ошибка разбора карточки задачи';
const ReplaceDocTypeName = {
'Ошибка в разработку': 'Ошибка',
'Задача в разработку': 'Задача'
};
var property = {
btns: {
TaskURL: {
icon: 'link'
},
BranchName: {
icon: 'git-branch'
},
СommitMsg: {
icon: 'git-commit'
}
},
ApplyDocTypeName: ['Ошибка в разработку', 'Задача в разработку'],
selectors: {
'Schedule': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoShowDocTime"]',
'Monitoring': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoShowMonitoringDialog"]',
'Agreement': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoSendToAgreement"]',
'Print': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoPrintDocument"]',
'Save': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoSaveDocumentOnDisk"]',
'LinkOld': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoGetLink"]',
'Delete': 'div.SBIS-UI-Customizer.TaskToolbarBtns span[data-id="edoDeleteDocument"]'
}
};
var BranchNameUserLogin = '';
var idReadedUserLogin = false;
return {
applySettings: applySettings,
copyToClipboard: copyToClipboard
};
function applySettings(settings, moduleName, moduleProperty) {
var group, css = '';
moduleName = moduleName ? moduleName : 'TaskToolbarBtns';
moduleProperty = moduleProperty ? moduleProperty : property;
group = settings.options.Show;
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.inlineBlock(moduleProperty.selectors[name]);
}
}
group = settings.options.Hide;
for (let name in group.options) {
if (group.options[name].value) {
css += Engine.generateCSS.displayNone(moduleProperty.selectors[name]);
}
}
group = settings.options.Add;
let addExtraButtons = false;
moduleProperty.ExtraButtonsHTML = '';
for (let name in group.options) {
if (group.options[name].value) {
addExtraButtons = true;
let btn = Engine.getHTML(moduleName + '-' + name);
btn = btn.replace(/\\{\\{icon\\}\\}/, Engine.getSVG(moduleProperty.btns[name].icon));
moduleProperty.ExtraButtonsHTML += btn;
} else {
Engine.removeByQuery('.SBIS-UI-Customizer.' + moduleName + '-ExtraButtons .' + name);
}
}
if (addExtraButtons) {
let extbtn = Engine.getCSS('TaskToolbarBtns-ExtraButtons');
if (moduleName !== 'TaskToolbarBtns') {
extbtn = extbtn.replace(/TaskToolbarBtns/g, moduleName);
}
css += extbtn;
if (moduleProperty.WaitHandler) {
Engine.unsubscribeWait('.edo-Dialog__toolbar', moduleProperty.WaitHandler);
}
moduleProperty.WaitHandler = _appendExtraButtons(moduleName, moduleProperty);
Engine.wait('.edo-Dialog__toolbar', moduleProperty.WaitHandler);
} else {
if (moduleProperty.WaitHandler) {
Engine.unsubscribeWait('.edo-Dialog__toolbar', moduleProperty.WaitHandler);
delete moduleProperty.WaitHandler;
}
if (css) {
moduleProperty.WaitHandler = _appendButtonsClass(moduleName, moduleProperty);
Engine.wait('.edo-Dialog__toolbar', moduleProperty.WaitHandler);
}
Engine.removeByQuery('.SBIS-UI-Customizer.' + moduleName + '-ExtraButtons');
}
if (css) {
Engine.appendCSS(moduleName, css);
} else {
Engine.removeCSS(moduleName);
}
}
function copyToClipboard(elm, action) {
var msg = '';
var text = '';
var opener = elm.parentElement.parentElement.wsControl;
var record = opener.getLinkedContext().getValue('record');
switch (action) {
case 'СommitMsg':
msg = 'Описание скопировано в буфер обмена';
let docName = record.get('РП.Документ').get('Регламент').get('Название');
docName = ReplaceDocTypeName[docName] || docName;
text =
docName + ' № ' +
record.get('Номер') +
' v' + _extractVersionName(record.get('РП.ВехаДокумента')) + ' от ' +
Engine.getDate(record.get('ДокументРасширение.ДатаВремяСоздания')) + ' ' +
record.get('ЛицоСоздал.Название') + '\\n' +
location.protocol + '//' +
location.host + '/opendoc.html?guid=' +
record.get('ИдентификаторДокумента') + '\\n\\n' +
Engine.cutOverflow(Engine.cutTags(record.get('РазличныеДокументы.Информация')), 98, 1024);
break;
case 'TaskURL':
msg = 'Ссылка скопирована в буфер обмена';
text =
location.protocol + '//' +
location.host + '/opendoc.html?guid=' +
record.get('ИдентификаторДокумента');
break;
case 'BranchName':
if (!idReadedUserLogin) {
return _readUserLogin(function () {
copyToClipboard(elm, action);
});
}
msg = 'Имя ветки скопировано в буфер обмена';
text =
_extractVersionName(record.get('РП.ВехаДокумента')) + '/' +
(record.get('РП.Документ').get('Регламент').get('Название') === 'Ошибка в разработку' ? 'bugfix' : 'feature') + '/' +
(BranchNameUserLogin ? BranchNameUserLogin + '/' : '') +
record.get('Номер');
break;
}
Engine.copyToClipboard(text);
Engine.openInformationPopup(rk(msg));
}
function _readUserLogin(callback) {
if (!idReadedUserLogin) {
idReadedUserLogin = true;
Engine.rpc.sbis({
service: 'auth',
method: 'САП.ТекущийПользователь',
callback: function (data) {
BranchNameUserLogin = data.getRow().get('ЛогинПользователя');
callback();
}
});
} else {
callback();
}
}
function _extractVersionName(milestones) {
let versionName = 'dev';
let version = Infinity;
milestones.each(function (record) {
let curNames = record.get('ДокументРасширение.Название').replace(/[ \\(\\)]/g, '\\n').split('\\n');
for (let i = 0; i < curNames.length; i++) {
let curName = curNames[i].replace(/[^\\d\\.]/g, '').replace(/^[\\.]+/, '').replace(/[\\.]+$/, '');
if (curName) {
let n = Number(curName.replace(/\\./g, ''));
if (!isNaN(n)) {
if (n < version) {
version = n;
versionName = curName;
}
break;
}
}
}
});
return versionName;
}
function _appendExtraButtons(moduleName, moduleProperty) {
return function _appendExtraButtonsEH(elms) {
for (let i = 0; i < elms.length; i++) {
let elm = elms[i];
_isTask(elm, moduleProperty, _appendExtraButtonsH(elm, moduleName, moduleProperty));
}
};
}
function _appendExtraButtonsH(elm, moduleName, moduleProperty) {
return function () {
let btns = document.createElement('div');
btns.className = 'SBIS-UI-Customizer ' + moduleName + '-ExtraButtons';
btns.innerHTML = moduleProperty.ExtraButtonsHTML;
elm.insertBefore(btns, elm.children[0]);
elm.classList.add('SBIS-UI-Customizer');
elm.classList.add(moduleName);
};
}
function _appendButtonsClass(moduleName, moduleProperty) {
return function _appendButtonsClassEH(elms) {
for (let i = 0; i < elms.length; i++) {
let elm = elms[i];
_isTask(elm, moduleProperty, _appendButtonsClassH(elm, moduleName));
}
};
}
function _appendButtonsClassH(elm, moduleName) {
return function () {
elm.classList.add('SBIS-UI-Customizer');
elm.classList.add(moduleName);
};
}
function _isTask(elm, moduleProperty, callback) {
function checkControl() {
var ctx;
if (elm.wsControl && (ctx = elm.wsControl.getLinkedContext())) {
record = ctx.getValue('record');
if (record && record.getIdProperty && ~['@СвязьПапок', '@Документ'].indexOf(record.getIdProperty())) {
check(record);
} else {
ctx.subscribe('onFieldChange', checkEvent);
}
} else {
console.error(PARSE_ERROR);
}
}
function checkEvent(e, fieldName, val) {
/*jshint -W040 */
if (fieldName === 'record' && val.getIdProperty() === '@Документ') {
this.unsubscribe('onFieldChange', checkEvent);
check(val);
}
}
function check(record) {
let docName = record.get('РП.Документ').get('Регламент').get('Название');
if (moduleProperty.ApplyDocTypeName && ~moduleProperty.ApplyDocTypeName.indexOf(docName)) {
return callback();
}
if (moduleProperty.ExcludeDocTypeName && !~moduleProperty.ExcludeDocTypeName.indexOf(docName)) {
return callback();
}
}
var record, docName;
if (location.pathname === '/opendoc.html' && !elm.wsControl) {
return require(['js!SBIS3.CORE.Control'], function () {
$ws.single.ControlStorage.waitChildByName('ServiceButtons').addCallback(function () {
checkControl();
});
});
}
var card = elm.parentElement;
while (card && card.getAttribute('data-component') !== 'SBIS3.EDO2.Dialog' && card.parentElement) {
card = card.parentElement;
}
if (card && card.getAttribute('data-component') === 'SBIS3.EDO2.Dialog') {
try {
record = card.wsControl.getTopParent()._options.componentOptions.record;
if (record) {
return check(record);
}
} catch (e) {
return setTimeout(() => {
_isTask(elm, moduleProperty, callback);
}, 100);
}
}
checkControl();
}
});
`,'VersionInformer.js':`
UICustomizerDefine('VersionInformer', ['Engine'], function (Engine) {
"use strict";
var _dialog = '';
return {
open: open,
close: close
};
function open() {
var verinfo = Engine.getVerInfo();
var notes = verinfo.notes;
var content = '';
if (notes.added.length) {
content += '<div class="group"><span class="title">Новые возможности</span><ul>';
for (let i = 0; i < notes.added.length; i++) {
content += '<li>' + notes.added[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.changed.length) {
content += '<div class="group"><span class="title">Небольшие изменения</span><ul>';
for (let i = 0; i < notes.changed.length; i++) {
content += '<li>' + notes.changed[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.fixed.length) {
content += '<div class="group"><span class="title">Исправленные ошибки</span><ul>';
for (let i = 0; i < notes.fixed.length; i++) {
content += '<li>' + notes.fixed[i] + '</li>';
}
content += '</ul></div>';
}
if (notes.issues.length) {
content += '<div class="group"><span class="title">Выполненные задачи</span><ul>';
for (let i = 0; i < notes.issues.length; i++) {
let note = notes.issues[i];
if (note instanceof Array) {
let id = note[0].replace(/.*\\/(\\d+).*/g, '$1');
content += '<li>[<a target="_blank" href="' + note[0] +
'">issue#' + id + '</a>] ' + note[1] + '</li>';
} else {
content += '<li>' + note + '</li>';
}
}
content += '</ul></div>';
}
if (!content) {
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
return true;
}
Engine.appendCSS('VersionInformer');
_dialog = Engine.createElement('VersionInformer', {
title: verinfo.version,
date: verinfo.date,
content: content
});
Engine.waitOnce('body', function (body) {
body.appendChild(_dialog);
_resize();
window.addEventListener('resize', _resize);
window.addEventListener('keydown', _esc);
});
}
function close() {
var verinfo = Engine.getVerInfo();
_dialog.remove();
_dialog = null;
Engine.removeCSS('VersionInformer');
window.removeEventListener('resize', _resize);
window.removeEventListener('keydown', _esc);
localStorage.setItem('SBIS-UI-Customizer-LastVersion', verinfo.version);
}
function _resize() {
var area = _dialog.children[0].children[1];
var dlg = area.children[0];
dlg.style.marginTop = Math.round((area.clientHeight / 2 - dlg.clientHeight / 2)) + 'px';
dlg.style.marginLeft = Math.round((area.clientWidth / 2 - dlg.clientWidth / 2)) + 'px';
}
function _esc(event) {
if (event.key === 'Escape') {
close();
}
}
});
`},'svg':{'bug.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M11 10h3V9h-3V8l3.17-1.03-.34-.94L11 7V6c0-.55-.45-1-1-1V4c0-.48-.36-.88-.83-.97L10.2 2H12V1H9.8l-2 2h-.59L5.2 1H3v1h1.8l1.03 1.03C5.36 3.12 5 3.51 5 4v1c-.55 0-1 .45-1 1v1l-2.83-.97-.34.94L4 8v1H1v1h3v1L.83 12.03l.34.94L4 12v1c0 .55.45 1 1 1h1l1-1V6h1v7l1 1h1c.55 0 1-.45 1-1v-1l2.83.97.34-.94L11 11v-1zM9 5H6V4h3v1z"/></svg>
`,'comment-discussion.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"/></svg>
`,'git-branch.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 10 18"><path d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-commit.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 14 18"><path d="M10.86 7c-.45-1.72-2-3-3.86-3-1.86 0-3.41 1.28-3.86 3H0v2h3.14c.45 1.72 2 3 3.86 3 1.86 0 3.41-1.28 3.86-3H14V7h-3.14zM7 10.2c-1.22 0-2.2-.98-2.2-2.2 0-1.22.98-2.2 2.2-2.2 1.22 0 2.2.98 2.2 2.2 0 1.22-.98 2.2-2.2 2.2z"/></svg>
`,'git-compare.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 14 18"><path d="M5 12H4c-.27-.02-.48-.11-.69-.31-.21-.2-.3-.42-.31-.69V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V11c.03.78.34 1.47.94 2.06.6.59 1.28.91 2.06.94h1v2l3-3-3-3v2zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm11 9.48V5c-.03-.78-.34-1.47-.94-2.06-.6-.59-1.28-.91-2.06-.94H9V0L6 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 12 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-merge.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 12 18"><path d="M10 7c-.73 0-1.38.41-1.73 1.02V8C7.22 7.98 6 7.64 5.14 6.98c-.75-.58-1.5-1.61-1.89-2.44A1.993 1.993 0 0 0 2 .99C.89.99 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2a1.993 1.993 0 0 0 1-3.72V7.67c.67.7 1.44 1.27 2.3 1.69.86.42 2.03.63 2.97.64v-.02c.36.61 1 1.02 1.73 1.02 1.11 0 2-.89 2-2 0-1.11-.89-2-2-2zm-6.8 6c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm8 6c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'git-pull-request.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 12 18"><path d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
`,'info.svg':`
<svg height="24" viewBox="-5 -5 58 58" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.945 15.774c1.26 0 2.053-.864 2.02-1.944 0-1.115-.756-1.979-1.943-1.979-1.151 0-1.979.863-1.979 1.979 0 1.08.791 1.944 1.906 1.944"/><path d="m25.602 34.941v-14.796c0-1.303-1.053-1.413-1.351-1.418h-.566c0 0-1.251.012-1.251 1.152v15.303c.023.346.175.967 1 .967h1.181c.351-.028.986-.211.986-1.208"/><path d="m24 0c-13.254 0-24 10.744-24 24 0 13.254 10.745 24 24 24 13.256 0 24-10.746 24-24 0-13.256-10.744-24-24-24m0 44c-11.04 0-20-8.955-20-20 0-11.05 8.955-20 20-20 11.05 0 20 8.954 20 20 0 11.05-8.953 20-20 20"/></svg>
`,'link.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -1 16 18"><path d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg>
`,'megaphone.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M10 1c-.17 0-.36.05-.52.14C8.04 2.02 4.5 4.58 3 5c-1.38 0-3 .67-3 2.5S1.63 10 3 10c.3.08.64.23 1 .41V15h2v-3.45c1.34.86 2.69 1.83 3.48 2.31.16.09.34.14.52.14.52 0 1-.42 1-1V2c0-.58-.48-1-1-1zm0 12c-.38-.23-.89-.58-1.5-1-.16-.11-.33-.22-.5-.34V3.31c.16-.11.31-.2.47-.31.61-.41 1.16-.77 1.53-1v11zm2-6h4v1h-4V7zm0 2l4 2v1l-4-2V9zm4-6v1l-4 2V5l4-2z"/></svg>
`,'settings.svg':`
<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512"><g fill="none" stroke="#000" stroke-linejoin="round" stroke-linecap="round" stroke-width="12" stroke-miterlimit="10"><path d="m439.7 197.4c1.8 5.6 2.7 11.8 2.9 18.6.4 21.8-14.7 46.4-43.9 53.2"/><path d="m398.7 161.2c11.2 3.3 20.5 8.2 27.6 14.8"/><path d="m377 269.1c-14.5-3.4-26.1-10.9-34.5-23.1-6.3-9.2-9.4-19.5-9.4-30.7 0-13 4.1-24.5 12.3-34.6 8.2-10 18.8-16.3 31.6-19.2"/><path d="m134.9 161.2c3.9 1.4 7.7 2.5 11.2 4.1 21.7 9.5 34.3 31 32.5 55.3-1.7 22.1-18.5 41.9-40.7 47.6"/><path d="m113.3 269.5c-27.9-8.4-43.8-26.4-43.8-56.1 0-22.4 15.8-45.5 43.8-52.1"/><path d="m217.1 267.4c6.6-6.7 15-11.8 24.5-14.3 1.1-.3 2.1-.6 3.6-1"/><path d="m241.7 358.7c-23.8-6.3-40.5-28.4-40.3-53 0-3.6.4-7.1 1.1-10.6"/><path d="m266.9 252.1c11.8 2.7 21.6 8.2 29.6 16.9 27.5 30.1 13.2 79.3-26.2 89.7"/></g><path d="m124.1 148.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.3 5-5 5"/><path d="m124.1 446.6c-2.8 0-5-2.2-5-5v-57.2c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v57.2c0 2.7-2.3 5-5 5"/><path d="m124.1 410.9c-2.8 0-5-2.2-5-5v-120.6c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v120.6c0 2.8-2.3 5-5 5"/><path d="m387.9 148.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.3 5-5 5"/><path d="m387.9 446.6c-2.8 0-5-2.2-5-5v-57.2c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v57.2c0 2.7-2.3 5-5 5"/><path d="m387.9 392.2c-2.8 0-5-2.2-5-5v-101.9c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v101.9c0 2.7-2.3 5-5 5"/><path d="m256 446.6c-2.8 0-5-2.2-5-5v-73c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v73c0 2.7-2.2 5-5 5"/><path d="m256 241.8c-2.8 0-5-2.2-5-5v-98.5c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v98.5c0 2.8-2.2 5-5 5"/><path d="m256 145c-2.8 0-5-2.2-5-5v-69.6c0-2.8 2.2-5 5-5 2.8 0 5 2.2 5 5v69.6c0 2.7-2.2 5-5 5"/></svg>
`,'thumbsup.svg':`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M14 14c-.05.69-1.27 1-2 1H5.67L4 14V8c1.36 0 2.11-.75 3.13-1.88 1.23-1.36 1.14-2.56.88-4.13-.08-.5.5-1 1-1 .83 0 2 2.73 2 4l-.02 1.03c0 .69.33.97 1.02.97h2c.63 0 .98.36 1 1l-1 6L14 14zm0-8h-2.02l.02-.98C12 3.72 10.83 0 9 0c-.58 0-1.17.3-1.56.77-.36.41-.5.91-.42 1.41.25 1.48.28 2.28-.63 3.28-1 1.09-1.48 1.55-2.39 1.55H2C.94 7 0 7.94 0 9v4c0 1.06.94 2 2 2h1.72l1.44.86c.16.09.33.14.52.14h6.33c1.13 0 2.84-.5 3-1.88l.98-5.95c.02-.08.02-.14.02-.2-.03-1.17-.84-1.97-2-1.97H14z"/></svg>
`},'xhtml':{'ErrandToolbarBtns-CopyInfo.xhtml':`
<i class="CopyInfo" onclick="UICustomizerEvent('ErrandToolbarBtns','copyToClipboard',this,'CopyInfo')" title="Скопировать описание">{{icon}}</i>
`,'ErrandToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на поручение">{{icon}}</i>
`,'MRToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на MR">{{icon}}</i>
`,'SettingsButton-Header.xhtml':`
<div class="icon" title="Персонализация" onclick="UICustomizerEvent('SettingsDialog','open')">
{{icon}}
</div>
`,'SettingsButton.xhtml':`
<div class="row" onclick="UICustomizerEvent('SettingsDialog','open')">
<div class="icon">{{icon}}</div>
<div class="title">Персонализация</div>
</div>
`,'SettingsDialog-block.xhtml':`
<span class="title">{{title}}</span>
`,'SettingsDialog-group.xhtml':`
<div class='header'>
<span class="title">{{title}}</span>
</div>
`,'SettingsDialog-option-boolean.xhtml':`
<label>
<input type="checkbox" {{value}} optname="{{optname}}" onchange="UICustomizerEvent('SettingsDialog','onchangeOptionBoolean',this)">
<span>{{title}}</span>
</label>
`,'SettingsDialog-section.xhtml':`
<div class='header' onclick="UICustomizerEvent('SettingsDialog','toggleSection',this)">
<span class="title">{{title}}</span>
</div>
`,'SettingsDialog.xhtml':`
<div class="controls-PopupMixin__closeButton" onclick="UICustomizerEvent('SettingsDialog','close')"></div>
<div class="header">
<span class="title">Персонализация</span>
</div>
`,'SocNet-FeedbackButtons.xhtml':`
<!--i class="LikeIt" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'LikeIt')" title="Мне нравится!">{{LikeIt}}</i-->
<!--i class="separator"></i-->
<i class="SendQuestion" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'SendQuestion')" title="Задать вопрос в чате">{{SendQuestion}}</i>
<i class="SendFeedback" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'SendFeedback')" title="Написать отзыв в группе">{{SendFeedback}}</i>
<i class="separator"></i>
<i class="ReportError" onclick="UICustomizerEvent('SocNet','sendFeedback',this,'ReportError')" title="Сообщить об ошибке">{{ReportError}}</i>
`,'SocNet-InputDialog.xhtml':`
<div class="controls-PopupMixin__closeButton" onclick="this.parentElement.remove()"></div>
<div class="send">Отправить</div>
<div class="header">
<span class="title">{{title}}</span>
</div>
<textarea autofocus rows="5" placeholder="{{hint}}"></textarea>
`,'TaskToolbarBtns-BranchName.xhtml':`
<i class="BranchName" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'BranchName')" title="Скопировать имя ветки">{{icon}}</i>
`,'TaskToolbarBtns-TaskURL.xhtml':`
<i class="TaskURL" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'TaskURL')" title="Скопировать ссылку на задачу">{{icon}}</i>
`,'TaskToolbarBtns-СommitMsg.xhtml':`
<i class="СommitMsg" onclick="UICustomizerEvent('TaskToolbarBtns','copyToClipboard',this,'СommitMsg')" title="Скопировать описание для коммита">{{icon}}</i>
`,'VersionInformer.xhtml':`
<div class="VersionInformer">
<div class="background"></div>
<div class="area">
<div class="dialog" onclick="event.stopPropagation();">
<div class="header">
<span class="title">Обновление SBIS UI-Customizer {{title}}</span>
<div class="info">от {{date}}</div>
</div>
<div class="content">{{content}}</div>
<div class="footer">
<div class="links">
<a target="_blank" href="https://github.com/sbis-team/ui-customizer/blob/release/CHANGELOG.md">История изменений</a>
<a target="_blank" href="https://github.com/sbis-team/ui-customizer/issues">Список задач</a>
</div>
<div class="links right">
<a target="_blank" href="https://github.com/sbis-team/ui-customizer/blob/release/README.md">Документация</a>
</div>
<div class="button" onclick="UICustomizerEvent( 'VersionInformer', 'close') ">ОК</div>
</div>
</div>
</div>
</div>
`}});