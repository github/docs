import { COLOR_MODE_COOKIE_NAME } from '@/frame/lib/constants'
import { CssColorMode, SupportedTheme, defaultCSSTheme } from '@/color-schemes/components/useTheme'

// This script runs synchronously in the document head before first paint. It reads the
// color_mode cookie from github.com, which is not HttpOnly, and writes data-color-mode,
// data-light-theme, and data-dark-theme attributes on html. Without it, the page paints
// with the SSR default theme before React hydrates and switches to the user's theme.
//
// data-color-mode stays concrete, never auto, and follows the effective theme because
// @primer/react-brand lacks an auto palette and light mode can carry a dark day theme.
// See src/color-schemes/README.md.
//
// The generated output is identical across requests, so CDN caches can share the HTML.
// useTheme supplies the validation allowlists and defaults so they cannot drift.
// helmet.ts hashes this exact string for the CSP script-src allowance, with no nonce
// and no unsafe-inline.
const modes = JSON.stringify(Object.values(CssColorMode))
const themes = JSON.stringify(Object.values(SupportedTheme))
const defaults = JSON.stringify(defaultCSSTheme)
const cookieName = JSON.stringify(COLOR_MODE_COOKIE_NAME)

export const colorModeScript = `(function(){
var MODES=${modes},THEMES=${themes},D=${defaults};
var css=D;
try{
var m=document.cookie.match(new RegExp('(?:^|; )'+${cookieName}+'=([^;]*)'));
if(m){
var p=JSON.parse(decodeURIComponent(m[1]));
var fMode=function(x){return MODES.indexOf(x)>-1?x:null;};
var fTheme=function(t){if(!t)return null;if(THEMES.indexOf(t.name)>-1)return t.name;if(THEMES.indexOf(t.color_mode)>-1)return t.color_mode;return null;};
css={colorMode:fMode(p.color_mode)||D.colorMode,lightTheme:fTheme(p.light_theme)||D.lightTheme,darkTheme:fTheme(p.dark_theme)||D.darkTheme};
}
}catch(e){}
try{
var h=document.documentElement;
var q=window.matchMedia?window.matchMedia('(prefers-color-scheme: dark)'):null;
var apply=function(){
var night=css.colorMode==='auto'?!!(q&&q.matches):css.colorMode==='dark';
var theme=night?css.darkTheme:css.lightTheme;
var mode=theme.indexOf('dark')===0?'dark':'light';
h.setAttribute('data-color-mode',mode);
h.setAttribute('data-'+mode+'-theme',theme);
};
h.setAttribute('data-color-mode-preference',css.colorMode);
h.setAttribute('data-light-theme',css.lightTheme);
h.setAttribute('data-dark-theme',css.darkTheme);
apply();
if(css.colorMode==='auto'&&q){
if(q.addEventListener)q.addEventListener('change',apply);
else if(q.addListener)q.addListener(apply);
}
}catch(e){}
})();`
