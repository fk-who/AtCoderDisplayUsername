// ==UserScript==
// @name         AtCoder display username
// @version      0.01
// @description  AtCoderで特定ユーザの提出を検索した際、タイトルにユーザー名を表示するuserscript
// @author       fjkmg
// @match        https://atcoder.jp/contests/*/submissions?*f.User=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=atcoder.jp
// @grant        none
// ==/UserScript==


window.addEventListener('load', ()=>{
    let url = new URL(window.location.href);
    let params = url.searchParams;
    let user = params.get("f.User");
    if (user){
        document.title = document.title.replace("すべて", `${user} さん`);
    }
});
