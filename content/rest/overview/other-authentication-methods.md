---
title: Other authentication methods
intro: You can use basic authentication for testing in a non-production environment.
redirect_from:
  - /v3/auth
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: Other authentication methods
---


{% ifversion fpt or ghes or ghec %}
While the API provides multiple methods for authentication, we strongly
recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) for production applications. The other
methods provided are intended to be used for scripts or testing (i.e., cases
where full OAuth would be overkill). Third party applications that rely on
{% data variables.product.product_name %} for authentication should not ask for or collect {% data variables.product.product_name %} credentials.
Instead, they should use the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

{% ifversion ghae %}

To authenticate we recommend using [OAuth](/apps/building-integrations/setting-up-and-registering-oauth-apps/) tokens, such a personal access token through the [OAuth web flow](/apps/building-oauth-apps/authorizing-oauth-apps/).

{% endif %}

## Basic Authentication

The API supports Basic Authentication as defined in
[RFC2617](http://www.ietf.org/rfc/rfc2617.txt) with a few slight differences.
The main difference is that the RFC requires unauthenticated requests to be
answered with `401 Unauthorized` responses. In many places, this would disclose
the existence of user data. Instead, the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API responds with `404 Not Found`.
This may cause problems for HTTP libraries that assume a `401 Unauthorized`
response. The solution is to manually craft the `Authorization` header.

### Via OAuth and personal access tokens

We recommend you use OAuth tokens to authenticate to the GitHub API. OAuth tokens include [personal access tokens][personal-access-tokens] and enable the user to revoke access at any time.

```shell
$ curl -u USERNAME:TOKEN {% data variables.product.api_url_pre %}/user
```

This approach is useful if your tools only support Basic Authentication but you want to take advantage of OAuth access token security features.

### Via username and password

{% ifversion fpt or ghec %}

{% note %}

**Note:** {% data variables.product.prodname_dotcom %} has discontinued password authentication to the API starting on November 13, 2020 for all {% data variables.product.prodname_dotcom_the_website %} accounts, including those on a {% data variables.product.prodname_free_user %}, {% data variables.product.prodname_pro %}, {% data variables.product.prodname_team %}, or {% data variables.product.prodname_ghe_cloud %} plan. You must now authenticate to the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API with an API token, such as an OAuth access token, GitHub App installation access token, or personal access token, depending on what you need to do with the token. For more information, see "[Troubleshooting](/rest/overview/troubleshooting#basic-authentication-errors)."
 
{% endnote %}

{% endif %}

{% ifversion ghes %}
To use Basic Authentication with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API, simply send the username and
password associated with the account.

For example, if you're accessing the API via [cURL][curl], the following command
would authenticate you if you replace `<username>` with your {% data variables.product.product_name %} username.
(cURL will prompt you to enter the password.)

```shell
$ curl -u USERNAME {% data variables.product.api_url_pre %}/user
```
If you have two-factor authentication enabled, make sure you understand how to [work with two-factor authentication](/rest/overview/other-authentication-methods#working-with-two-factor-authentication).

{% endif %}

{% ifversion fpt or ghec %}
### Authenticating for SAML SSO

{% note %}

**Note:** Integrations and OAuth applications that generate tokens on behalf of others are automatically authorized.

{% endnote %}

{% note %}

**Note:** {% data reusables.getting-started.bearer-vs-token %}

{% endnote %}

If you're using the API to access an organization that enforces [SAML SSO][saml-sso] for authentication, you'll need to create a personal access token (PAT) and [authorize the token][allowlist] for that organization. Visit the URL specified in `X-GitHub-SSO` to authorize the token for the organization.

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/repos/octodocs-test/test

> X-GitHub-SSO: required; url=https://github.com/orgs/octodocs-test/sso?authorization_request=AZSCKtL4U8yX1H3sCQIVnVgmjmon5fWxks5YrqhJgah0b2tlbl9pZM4EuMz4
{
  "message": "Resource protected by organization SAML enforcement. You must grant your personal token access to this organization.",
  "documentation_url": "https://docs.github.com"
}
```

When requesting data that could come from multiple organizations (for example, [requesting a list of issues created by the user][user-issues]), the `X-GitHub-SSO` header indicates which organizations require you to authorize your personal access token:

```shell
$ curl -v -H "Authorization: Bearer TOKEN" {% data variables.product.api_url_pre %}/user/issues

> X-GitHub-SSO: partial-results; organizations=21955855,20582480
```

The value `organizations` is a comma-separated list of organization IDs for organizations require authorization of your personal access token.
{% endif %}

{% ifversion fpt or ghes or ghec %}
## Working with two-factor authentication

When you have two-factor authentication enabled, [Basic Authentication](#basic-authentication) for _most_ endpoints in the REST API requires that you use a personal access token{% ifversion ghes %} or OAuth token instead of your username and password{% endif %}.

You can generate a new personal access token {% ifversion fpt or ghec %}using [{% data variables.product.product_name %} developer settings](https://github.com/settings/tokens/new){% endif %}{% ifversion ghes %} or with the "[Create a new authorization][/rest/reference/oauth-authorizations#create-a-new-authorization]" endpoint in the OAuth Authorizations API to generate a new OAuth token{% endif %}. For more information, see "[Creating a personal access token for the command line](/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line)". Then you would use these tokens to [authenticate using OAuth token][oauth-auth] with the {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} API.{% ifversion ghes %} The only time you need to authenticate with your username and password is when you create your OAuth token or use the OAuth Authorizations API.{% endif %}

{% endif %}

{% ifversion ghes %}
### Using the OAuth Authorizations API with two-factor authentication

When you make calls to the OAuth Authorizations API, Basic Authentication requires that you use a one-time password (OTP) and your username and password instead of tokens. When you attempt to authenticate with the OAuth Authorizations API, the server will respond with a `401 Unauthorized` and one of these headers to let you know that you need a two-factor authentication code:

`X-GitHub-OTP: required; SMS` or `X-GitHub-OTP: required; app`.  

This header tells you how your account receives its two-factor authentication codes. Depending how you set up your account, you will either receive your OTP codes via SMS or you will use an application like Google Authenticator or 1Password. For more information, see "[Configuring two-factor authentication](/articles/configuring-two-factor-authentication)." Pass the OTP in the header:

```shell
$ curl --request POST \
  --url https://api.github.com/authorizations \
  --header 'authorization: Basic PASSWORD' \
  --header 'content-type: application/json' \
  --header 'x-github-otp: OTP' \
  --data '{"scopes": ["public_repo"], "note": "test"}'
```
{% endif %}

[curl]: http://curl.haxx.se/
[oauth-auth]: /rest/overview/resources-in-the-rest-api#authentication
[personal-access-tokens]: /articles/creating-a-personal-access-token-for-the-command-line
[saml-sso]: /articles/about-identity-and-access-management-with-saml-single-sign-on
[saml-sso-tokens]: https://github.com/settings/tokens
[allowlist]: /github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on
[user-issues]: /rest/reference/issues#list-issues-assigned-to-the-authenticated-user
__reactEventHandlers$s1ff7izq2b
: 
{type: 'button', style: {…}, tabIndex: '-1', onClick: ƒ}
__reactInternalInstance$s1ff7izq2b
: 
Sc {tag: 5, key: null, elementType: 'button', type: 'button', stateNode: button, …}
accessKey
: 
""
ariaAtomic
: 
null
ariaAutoComplete
: 
null
ariaBusy
: 
null
ariaChecked
: 
null
ariaColCount
: 
null
ariaColIndex
: 
null
ariaColSpan
: 
null
ariaCurrent
: 
null
ariaDescription
: 
null
ariaDisabled
: 
null
ariaExpanded
: 
null
ariaHasPopup
: 
null
ariaHidden
: 
null
ariaInvalid
: 
null
ariaKeyShortcuts
: 
null
ariaLabel
: 
null
ariaLevel
: 
null
ariaLive
: 
null
ariaModal
: 
null
ariaMultiLine
: 
null
ariaMultiSelectable
: 
null
ariaOrientation
: 
null
ariaPlaceholder
: 
null
ariaPosInSet
: 
null
ariaPressed
: 
null
ariaReadOnly
: 
null
ariaRelevant
: 
null
ariaRequired
: 
null
ariaRoleDescription
: 
null
ariaRowCount
: 
null
ariaRowIndex
: 
null
ariaRowSpan
: 
null
ariaSelected
: 
null
ariaSetSize
: 
null
ariaSort
: 
null
ariaValueMax
: 
null
ariaValueMin
: 
null
ariaValueNow
: 
null
ariaValueText
: 
null
assignedSlot
: 
null
attributeStyleMap
: 
StylePropertyMap {size: 44}
attributes
: 
NamedNodeMap {0: type, 1: tabindex, 2: style, type: type, tabindex: tabindex, style: style, length: 3}
autocapitalize
: 
""
autofocus
: 
false
baseURI
: 
"https://www.pdffiller.com/jsfiller-desk12/?lang=en&projectId=1125457069&loader=tips&MEDIUM_PDFJS=true#e9e9572d10fe41df88368eb296555eba"
childElementCount
: 
0
childNodes
: 
NodeList []
children
: 
HTMLCollection []
classList
: 
DOMTokenList [value: '']
className
: 
""
clientHeight
: 
1056
clientLeft
: 
0
clientTop
: 
0
clientWidth
: 
816
contentEditable
: 
"inherit"
dataset
: 
DOMStringMap {}
dir
: 
""
disabled
: 
false
draggable
: 
false
elementTiming
: 
""
enterKeyHint
: 
""
firstChild
: 
null
firstElementChild
: 
null
form
: 
null
formAction
: 
"https://www.pdffiller.com/jsfiller-desk12/?lang=en&projectId=1125457069&loader=tips&MEDIUM_PDFJS=true#e9e9572d10fe41df88368eb296555eba"
formEnctype
: 
""
formMethod
: 
""
formNoValidate
: 
false
formTarget
: 
""
hidden
: 
false
id
: 
""
inert
: 
false
innerHTML
: 
""
innerText
: 
""
inputMode
: 
""
isConnected
: 
true
isContentEditable
: 
false
labels
: 
NodeList []
lang
: 
""
lastChild
: 
null
lastElementChild
: 
null
localName
: 
"button"
name
: 
""
namespaceURI
: 
"http://www.w3.org/1999/xhtml"
nextElementSibling
: 
div.wrapper-Element.jsf-document-attr-wrap.pageElement-Pagination
nextSibling
: 
div.wrapper-Element.jsf-document-attr-wrap.pageElement-Pagination
nodeName
: 
"BUTTON"
nodeType
: 
1
nodeValue
: 
null
nonce
: 
""
offsetHeight
: 
1056
offsetLeft
: 
0
offsetParent
: 
div.elementsWrapper-Content
offsetTop
: 
0
offsetWidth
: 
816
onabort
: 
null
onanimationend
: 
null
onanimationiteration
: 
null
onanimationstart
: 
null
onauxclick
: 
null
onbeforecopy
: 
null
onbeforecut
: 
null
onbeforeinput
: 
null
onbeforematch
: 
null
onbeforepaste
: 
null
onbeforexrselect
: 
null
onblur
: 
null
oncancel
: 
null
oncanplay
: 
null
oncanplaythrough
: 
null
onchange
: 
null
onclick
: 
ƒ sn()
onclose
: 
null
oncontextlost
: 
null
oncontextmenu
: 
null
oncontextrestored
: 
null
oncopy
: 
null
oncuechange
: 
null
oncut
: 
null
ondblclick
: 
null
ondrag
: 
null
ondragend
: 
null
ondragenter
: 
null
ondragleave
: 
null
ondragover
: 
null
ondragstart
: 
null
ondrop
: 
null
ondurationchange
: 
null
onemptied
: 
null
onended
: 
null
onerror
: 
null
onfocus
: 
null
onformdata
: 
null
onfullscreenchange
: 
null
onfullscreenerror
: 
null
ongotpointercapture
: 
null
oninput
: 
null
oninvalid
: 
null
onkeydown
: 
null
onkeypress
: 
null
onkeyup
: 
null
onload
: 
null
onloadeddata
: 
null
onloadedmetadata
: 
null
onloadstart
: 
null
onlostpointercapture
: 
null
onmousedown
: 
null
onmouseenter
: 
null
onmouseleave
: 
null
onmousemove
: 
null
onmouseout
: 
null
onmouseover
: 
null
onmouseup
: 
null
onmousewheel
: 
null
onpaste
: 
null
onpause
: 
null
onplay
: 
null
onplaying
: 
null
onpointercancel
: 
null
onpointerdown
: 
null
onpointerenter
: 
null
onpointerleave
: 
null
onpointermove
: 
null
onpointerout
: 
null
onpointerover
: 
null
onpointerrawupdate
: 
null
onpointerup
: 
null
onprogress
: 
null
onratechange
: 
null
onreset
: 
null
onresize
: 
null
onscroll
: 
null
onsearch
: 
null
onsecuritypolicyviolation
: 
null
onseeked
: 
null
onseeking
: 
null
onselect
: 
null
onselectionchange
: 
null
onselectstart
: 
null
onslotchange
: 
null
onstalled
: 
null
onsubmit
: 
null
onsuspend
: 
null
ontimeupdate
: 
null
ontoggle
: 
null
ontransitioncancel
: 
null
ontransitionend
: 
null
ontransitionrun
: 
null
ontransitionstart
: 
null
onvolumechange
: 
null
onwaiting
: 
null
onwebkitanimationend
: 
null
onwebkitanimationiteration
: 
null
onwebkitanimationstart
: 
null
onwebkitfullscreenchange
: 
null
onwebkitfullscreenerror
: 
null
onwebkittransitionend
: 
null
onwheel
: 
null
outerHTML
: 
"<button type=\"button\" tabindex=\"-1\" style=\"width: 100%; height: 100%; padding: 0px; margin: 0px; border: none; background: rgb(68, 51, 85); color: rgb(255, 255, 255); opacity: 0; cursor: auto; display: block; outline: none;\"></button>"
outerText
: 
""
ownerDocument
: 
document
parentElement
: 
div.elementsWrapper-Content
parentNode
: 
div.elementsWrapper-Content
part
: 
DOMTokenList [value: '']
prefix
: 
null
previousElementSibling
: 
null
previousSibling
: 
null
role
: 
null
scrollHeight
: 
1056
scrollLeft
: 
0
scrollTop
: 
0
scrollWidth
: 
816
shadowRoot
: 
null
slot
: 
""
spellcheck
: 
true
style
: 
CSSStyleDeclaration {0: 'width', 1: 'height', 2: 'padding-top', 3: 'padding-right', 4: 'padding-bottom', 5: 'padding-left', 6: 'margin-top', 7: 'margin-right', 8: 'margin-bottom', 9: 'margin-left', 10: 'border-top-width', 11: 'border-right-width', 12: 'border-bottom-width', 13: 'border-left-width', 14: 'border-top-style', 15: 'border-right-style', 16: 'border-bottom-style', 17: 'border-left-style', 18: 'border-top-color', 19: 'border-right-color', 20: 'border-bottom-color', 21: 'border-left-color', 22: 'border-image-source', 23: 'border-image-slice', 24: 'border-image-width', 25: 'border-image-outset', 26: 'border-image-repeat', 27: 'background-image', 28: 'background-position-x', 29: 'background-position-y', 30: 'background-size', 31: 'background-repeat-x', 32: 'background-repeat-y', 33: 'background-attachment', 34: 'background-origin', 35: 'background-clip', 36: 'background-color', 37: 'color', 38: 'opacity', 39: 'cursor', 40: 'display', 41: 'outline-color', 42: 'outline-style', 43: 'outline-width', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
tabIndex
: 
-1
tagName
: 
"BUTTON"
textContent
: 
""
title
: 
""
translate
: 
true
type
: 
"button"
validationMessage
: 
""
validity
: 
ValidityState {valueMissing: false, typeMismatch: false, patternMismatch: false, tooLong: false, tooShort: false, …}
value
: 
""
virtualKeyboardPolicy
: 
""
willValidate
: 
false
