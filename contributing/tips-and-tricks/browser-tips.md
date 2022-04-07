# Browser tips

## Purpose

Hacks and tricks for your browser.

## Browser-agnostic

### JavaScript bookmarks

These bookmarks do cool stuff with JavaScript. To use them, copy the JavaScript, edit the bookmark in your browser, and paste the JavaScript _as the bookmark's URL_. Clicking the bookmark will execute the JavaScript.

⚠️ For Safari, you'll need to do the following:

1. Enable the **Develop** menu by going to **Safari** > **Preferences** > **Advanced** and enabling **Show Develop menu in menu bar**. 
2. Allow JavaScript in bookmarks by going to **Develop** and enabling **Allow JavaScript from Smart Search field**.

### "View in development" toggle

When you're looking at an article in our documentation on docs.github.com or on a staging server at herokuapp.com, a bookmark with the following JavaScript will load the same path you're viewing, but on your local server running at localhost:4000:

```javascript
javascript:(()%20=>%20{%20window.location.href%20=%20window.location.href.replace(/https:\/\/docs\.github\.com/,%20'http://localhost:4000').replace(/https:\/\/.*\..*\.(com|net|dev|io|org|ms)/,%20'http://localhost:4000')%20})()
```

### "View in production" toggle

When you're looking at an article in our documentation on a staging server at herokuapp.com or on your local server running at localhost:4000, a bookmark with the following JavaScript will load the same path you're viewing, but on the production documentation site at docs.github.com:

```javascript
javascript:(()%20=>%20{%20window.location.href%20=%20window.location.href.replace(/http:\/\/localhost:4000/,%20'https://docs.github.com').replace(/https:\/\/.*\..*\.(com|net|dev|io|org|ms)/,%20'https://docs.github.com')%20})()
```

Hat tip to **[@sarahs](https://github.com/sarahs)**!

### Add deployment links to PRs

This bookmarklet modifies the "Files changed" page of a pull request. For each markdown file, it adds links to the preview deployment of the file. 

Three links are added: dotcom / GHEC / GHES / AE

<img src="../images/bookmarklet-pr-links.png" width="600">

Some of these links may get you a "page not found" if that version of the page doesn't exist (there's no way to tell from the information on the "Files changed" page).

To install the bookmarklet:

1. Drag this link onto your browser's Bookmarks/Favorites toolbar: [PR links](#).
1. Select all of the following JavaScript and copy it to the clipboard:
   ```
   javascript:void%20function(){!async%20function(){function%20a(a,b,c){var%20d=document.createElement(%22A%22);return%20d.innerHTML=b,d.href=c,d.target=%22_blank%22,a.appendChild(d),a}const%20b=/https:\/\/github.com\/github\/([^\/]*)\/pull\/\d*\/files/;if(!window.location.href.match(b))return%20void%20window.alert(%22You're%20not%20on%20a%20PR%20'Files%20changed'%20page.%20\uD83D\uDE43%22);let%20c=window.location.href.replace(/files.*/g,%22%22),d=await%20fetch(c).then(function(a){return%20a.text()}).then(function(a){for(var%20b=new%20DOMParser,c=b.parseFromString(a,%22text/html%22),d=c.getElementsByClassName(%22TimelineItem%22),e=0;e%3Cd.length;e++)for(var%20f,g=d[e],h=g.getElementsByTagName(%22a%22),k=0;k%3Ch.length;k++)if(f=h[k],f.innerText.match(/View%20deployment/)){var%20l=f.getAttribute(%22href%22);return%20l}});if(null==d)return%20void%20window.alert(%22No%20preview%20deployment%20found!%20\uD83D\uDE2D%22);d=d.replace(/\/$/,%22%22);var%20e=d+%22/en/free-pro-team%40latest%22,f=d+%22/en/enterprise-cloud%40latest%22,g=d+%22/en/enterprise-server%40latest%22,h=d+%22/en/github-ae%40latest%22;const%20j=document.querySelectorAll(%22div.file-info%22);for(var%20k,l=0;l%3Cj.length;l++)if(k=j[l].querySelector(%22a%22).title,0===k.search(%22data/%22))continue;else{var%20m=/\.md$/,n=0%3C=k.search(m);if(n){console.log(%22link:%20%22+k),k=k.replace(m,%22%22),k=k.replace(/^content/,%22%22),k=k.replace(/\/index/,%22%22);var%20o=document.createElement(%22SPAN%22);o.style.fontFamily=%22-apple-system,BlinkMacSystemFont,Segoe%20UI,Helvetica,Arial,sans-serif%22,o.innerHTML=%22%26nbsp;%20View:%20%22,o=a(o,%22dotcom%22,e+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22GHEC%22,f+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22GHES%22,g+k),o.innerHTML+=%22%20/%20%22,o=a(o,%22AE%22,h+k),j[l].appendChild(o)}}}()}();
   ```
1. Right-click the bookmark and click **Edit** or **Properties** (depending on your browser).
1. Select everything in the **URL** or **Location** field and replace it by pasting the JavaScript you copied.
1. Click **Save**.

To use the bookmarklet:

1. Go to a PR that has a current staging deployment. 
2. Go to the "Files changed" page. 
3. Click the bookmarklet on your toolbar. 
4. Click the appropriate link next to the file name. 

#### JavaScript source

The code above is created by putting the original JavaScript through the bookmarklet creator here: https://chriszarate.github.io/bookmarkleter/

You can see the [original JavaScript source here](pr-link-source.js).

### Open a docs article in VS Code

This bookmarklet opens a currently displayed GitHub help page in VS Code. 

To install the bookmarklet:
  1. Copy the JavaScript below.
  2. Browse to https://chriszarate.github.io/bookmarkleter/
  3. Paste into the text box.
  4. Change the title of the bookmarklet from the default "My Bookmarklet" to something like "Open in VSC".
  5. Edit the JavaScript, changing the value of `path_to_git_repos` to the appropriate path on your computer.
  7. Drag the link near the bottom of the page onto your bookmarks/Favorites bar.

To use the bookmarklet:<br>
Browse to a standard GitHub docs page and click the bookmarklet to open the markdown file for that page in VS Code. 

Note:<br>
It only works for the dotcom version of the documentation and it doesn't work on map topics.

```
/* The path to the directory that contains your local copy of the docs-internal Git repo directory: */   
var path_to_git_repos = '/Users/alistair/git-repos/';

var filepath = window.location.pathname; 
filepath = filepath.replace('/en/', 'docs-internal/content/');
filepath = 'vscode://file' + path_to_git_repos + filepath + '.md';
window.open(filepath, '_blank');
```
