import { COLOR_MODE_COOKIE_NAME } from '@/frame/lib/constants'
import { CssColorMode, SupportedTheme, defaultCSSTheme } from '@/color-schemes/components/useTheme'

// A tiny script that runs synchronously in the document <head>, before the
// browser's first paint. It reads the `color_mode` cookie (set by github.com,
// not HttpOnly) and writes the matching `data-color-mode`, `data-light-theme`,
// and `data-dark-theme` attributes onto the <html> element. Without this, the
// page first paints with the SSR default theme and only switches to the user's
// real theme after the React bundle hydrates, causing a visible flash.
//
// The output is identical for every request, so the HTML stays shared-cacheable
// in our CDN. The validation allowlists and defaults are derived from the same
// enums used by `useTheme`, so they can't drift, and `helmet.ts` hashes this
// exact string for the CSP `script-src` allowance (no nonce, no unsafe-inline).
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
h.setAttribute('data-color-mode',css.colorMode);
h.setAttribute('data-light-theme',css.lightTheme);
h.setAttribute('data-dark-theme',css.darkTheme);
}catch(e){}
})();`
