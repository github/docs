---
title: Working with GitHub Pages
shortTitle: GitHub Pages
intro: 'You can create a website directly from a {% data variables.product.product_name %} repository.'
redirect_from:
  - /categories/20/articles/
  - /categories/95/articles/
  - /categories/github-pages-features/
  - /pages/
  - /categories/96/articles/
  - /categories/github-pages-troubleshooting/
  - /categories/working-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---


### Table of Contents

{% topic_link_in_list /getting-started-with-github-pages %}
    {% link_in_list /about-github-pages %}
    {% link_in_list /creating-a-github-pages-site %}
<!-- if currentVersion == "free-pro-team@latest" -->
    {% link_in_list /adding-a-theme-to-your-github-pages-site-with-the-theme-chooser %}
<!-- endif -->
    {% link_in_list /configuring-a-publishing-source-for-your-github-pages-site %}
    {% link_in_list /creating-a-custom-404-page-for-your-github-pages-site %}
<!-- if currentVersion == "free-pro-team@latest" -->
    {% link_in_list /securing-your-github-pages-site-with-https %}
    {% link_in_list /using-submodules-with-github-pages %}
<!-- endif -->
    {% link_in_list /unpublishing-a-github-pages-site %}
{% topic_link_in_list /setting-up-a-github-pages-site-with-jekyll %}
    {% link_in_list /about-github-pages-and-jekyll %}
    {% link_in_list /creating-a-github-pages-site-with-jekyll %}
    {% link_in_list /testing-your-github-pages-site-locally-with-jekyll %}
    {% link_in_list /adding-content-to-your-github-pages-site-using-jekyll %}
    {% link_in_list /setting-a-markdown-processor-for-your-github-pages-site-using-jekyll %}
    {% link_in_list /adding-a-theme-to-your-github-pages-site-using-jekyll %}
    {% link_in_list /about-jekyll-build-errors-for-github-pages-sites %}
    {% link_in_list /troubleshooting-jekyll-build-errors-for-github-pages-sites %}
<!-- if currentVersion == "free-pro-team@latest" -->
{% topic_link_in_list /configuring-a-custom-domain-for-your-github-pages-site %}
    {% link_in_list /about-custom-domains-and-github-pages %}
    {% link_in_list /managing-a-custom-domain-for-your-github-pages-site %}
    {% link_in_list /troubleshooting-custom-domains-and-github-pages %}
<!-- endif -->

Changed

Bumped all dependencies to the latest versions, by @compulim in PR #3594
Development dependencies
@babel/cli@7.12.1
@babel/core@7.12.3
@babel/plugin-proposal-class-properties@7.12.1
@babel/plugin-proposal-object-rest-spread@7.12.1
@babel/plugin-transform-runtime@7.12.1
@babel/preset-env@7.12.1
@babel/preset-react@7.12.5
@babel/preset-typescript@7.12.1
@babel/runtime@7.12.5
@types/node@14.14.6
@types/react@16.9.55
@typescript-eslint/eslint-plugin@4.6.1
@typescript-eslint/parser@4.6.1
babel-jest@26.6.3
eslint-plugin-prettier@3.1.4
eslint-plugin-react-hooks@4.2.0
eslint-plugin-react@7.21.5
eslint@7.12.1
husky@4.3.0
jest-image-snapshot@4.2.0
jest-junit@12.0.0
jest-trx-results-processor@2.2.0
jest@26.6.3
lint-staged@10.5.1
lolex@6.0.0
node-dev@6.2.0
node-fetch@2.6.1
prettier@2.1.2
source-map-loader@1.1.2
terser-webpack-plugin@4.2.3
typescript@4.0.5
webpack-cli@4.2.0
webpack-stats-plugin@1.0.2
webpack@4.44.2
Production dependencies
@babel/runtime@7.12.5
globalize@1.6.0
markdown-it@12.0.2
react-redux@7.2.2
redux@4.0.5
sanitize-html@2.1.2
whatwg-fetch@3.4.1
Fixed

Fixes #3278. Update HOOKS.md verbiage, by @corinagum in PR #3564
Fixes #3534. Remove 2020 deprecations, by @corinagum in PR #3564
Fixes #3561. Remove MyGet mentions from samples, by @corinagum in PR #3564
Fixes #3537. Fix some carousels improperly using aria-roledescription, by @corinagum in PR #3599
Fixes #3483. IE11 anchors fixed to open securely without 'noreferrer' or 'noopener', by @corinagum in PR #3607
Samples

Fixes #3473. Fix samples using activityMiddleware (from 4.10.0 breaking changes), by @corinagum in PR #3601
[4.11.0] - 2020-11-04

Added

Resolves #3281. Added documentation on speech permissions for Cordova apps on Android, by @corinagum, in PR #3508
Resolves #3316. Refactored platform-neutral APIs into the new api package, to be reused on React Native component, in PR #3543 by @compulim
The new layering is core -> api -> component (HTML-only) -> bundle
Includes composition mode, platform-neutral React hooks, and localization resources
Most hooks are available in the new api package. Some hooks are only available on the existing component package, due to their platform dependency or coupling with visual components. For example, Web Worker, 2D canvas, useMicrophoneButton* are not available on the api package
Most implementations of middleware are only available in component package due to their coupling with visual components or platform features. Some implementations, (e.g. card action middleware and activity grouping middleware) are available on api package. For example:
Carousel layout and stacked layout is only available on component package due to their coupling with their respective visual components
For card action middleware, imBack, messageBack and postBack actions are available on api package, but call, openUrl and other platform-dependent actions are only available on component package
activityMiddleware, attachmentMiddleware, etc, now support arrays for multiple middleware
Fixed

Fixes #3489. [Accessibility]: Fix AT saying 'Bot undefined said', by @corinagum in PR #3524
Fixes #3547. [Accessibility]: Add attachment middleware for screen reader, by @compulim in PR #3548
Fixes #3371. [Accessibility]: Add alt property for image in HeroCards, by @corinagum in PR #3541
Fixes #3310. Add quantity, tap and text field to ReceiptCards, by @corinagum in PR #3541
Fixes #3514. Fix PoliCheck language errors, by @corinagum in PR #3545
Fixes #3537. [Accessibility]: Ensure aria-roledescription is only used on elements with implicit/explicit role based off of WAI ARIA role attributes, by @corinagum in PR #3551, #3583, and #3587
Fixes #3431. Activities should not be delayed due to missing activity of type "typing", by @compulim in PR #3554
Fixes #3574. Creates workaround for Cognitive Services Speech SDK 1.13.1 regarding removed support of macOS/iOS, by @compulim in PR #3576
Fixes #3570. Adaptive Card speak property should be narrated by screen reader, by @compulim in PR #3573 and PR #3584
Fixes #3571. Error box should be hidden for Adaptive Card renderer when running in production mode, by @compulim in PR #3573
Changed

Bumped development dependency node-fetch@2.6.1 in PR #3467 by @dependabot
Bumped Cognitive Services Speech SDK to 1.13.1, by @compulim in PR #3432
microsoft-cognitiveservices-speech-sdk@1.13.1
Samples

Fixes #3526. Add info on composition mode in sample 06.d, by @corinagum in PR #3541
[4.10.1] - 2020-09-09

Breaking changes

To support Content Security Policy, glamor is being replaced by create-emotion. The CSS hash and rule name is being prefixed with webchat--css with a random value.
Fixed

Fixes #3431. Removed delay of first activity with replyToId pointing to a missing activity, by @compulim in PR #3450
Fixes #3439. Use consistent return type in default CardActionContext.getSignInUrl(), by @stevengum in PR #3459
Fixes #3444. Make suggested actions container height styleOption flexible, by @corinagum in PR #3456
Changed

Bumped botframework-directlinejs@0.13.1, by @compulim in PR #3461
Support Content Security Policy, in PR #3443 by @compulim
Moved from glamor@2.20.40 to create-emotion@10.0.27
Inlined assets are now using blob: scheme, instead of data: scheme
Detect Web Worker support by loading a dummy Web Worker, instead of checking window.MessagePort and window.Worker
Data URI used in image of attachments will be converted to URL with scheme of blob:
Bumped dependencies
react-film@3.0.0
react-scroll-to-bottom@4.0.0
Bumped all dependencies to the latest versions, by @corinagum in PR #3380, #3442
Development dependencies
Root package
@babel/plugin-proposal-class-properties@7.10.4
@babel/plugin-proposal-object-rest-spread@7.11.0
@babel/plugin-transform-runtime@7.11.0
@babel/preset-env@7.11.0
@babel/preset-react@7.10.4
@babel/preset-typescript@7.10.4
@babel/runtime@7.11.2
babel-jest@26.4.0
concurrently@5.3.0
core-js@3.6.5
global-agent@2.1.12
husky@4.2.5
jest@26.2.2
jest-image-snapshot@4.1.0
jest-junit@11.1.0
jest-trx-results-processor@2.0.3
lerna@3.22.1
lint-staged@10.2.13
prettier@2.0.5
serve@11.3.2
serve-handler@6.1.3
Removed unused package @azure/storage-blob@12.1.0
Other packages
@babel/cli@7.10.5
@babel/core@7.11.0
@babel/plugin-proposal-class-properties@7.10.4
@babel/plugin-proposal-object-rest-spread@7.11.0
@babel/plugin-transform-runtime@7.11.0
@babel/preset-env@7.11.0
@babel/preset-react@7.10.4
@babel/preset-typescript@7.10.4
@types/node@14.6.0
@types/react@16.9.47
@typescript-eslint/eslint-plugin@3.10.1
@typescript-eslint/parser@3.10.1
babel-jest@26.2.2
concurrently@5.3.0
copy-webpack-plugin@6.0.3
core-js@3.6.5
cross-env@7.0.2
css-loader@4.2.0
eslint-plugin-prettier@3.1.4
eslint-plugin-react-hooks@4.1.0
eslint-plugin-react@7.20.6
eslint@7.7.0
global-agent@2.1.12
globalize-compiler@1.1.1
html-webpack-plugin@4.3.0
http-proxy-middleware@1.0.5
jest@26.2.2
node-dev@5.2.0
prettier@2.1.1
pug@3.0.0
serve@11.3.2
simple-update-in@2.2.0
source-map-loader@1.0.2
terser-webpack-plugin@4.1.0
typescript@4.0.2
webpack-cli@3.3.12
webpack-stats-plugin@0.3.2
webpack@4.44.1
Production dependencies
@babel/plugin-proposal-async-generator-functions@7.10.5
@babel/runtime@7.11.2
@babel/standalone@7.11.0
abort-controller-es5@1.2.0
botframework-directlinejs@0.13.0
core-js@3.6.5
event-iterator@2.0.0
event-target-shim-es5@1.2.0
expect@25.5.0
globalize@1.5.0
markdown-it-attrs-es5@1.2.0
markdown-it-attrs@3.0.3
markdown-it@11.0.0
math-random@2.0.1
memoize-one@5.1.1
mime@2.4.6
on-error-resume-next@1.1.0
p-defer@3.0.0
p-defer-es5@1.2.1
react-say@2.0.2-master.ee7cd76
react-scroll-to-bottom@3.0.1-master.9e2b9d8
sanitize-html@1.27.4
simple-update-in@2.2.0
url-search-params-polyfill@8.1.0
web-speech-cognitive-services@7.0.2-master.6004e4b
whatwg-fetch@3.4.0
Samples

Added Content Security Policy sample, by @compulim, in PR #3443
Update create-react-app-based samples to resolve p-defer as peer dependency, by @compulim, in PR #3457
Bump encoding@0.1.13 in 06.recomposing-ui/c.smart-display, by @compulim, in PR #3458
[4.10.0] - 2020-08-18

Breaking changes

Due to the complexity, we are no longer exposing <CarouselLayout> and <StackedLayout>. Please use <BasicTranscript> to render the transcript instead.
With the new activity grouping feature:
Customized avatar cannot be wider than styleOptions.avatarSize. If you want to show a wider avatar, please increase styleOptions.avatarSize.
If customized avatar is rendering false, bubble will still be padded to leave a gutter for the empty customized avatar. To hide gutter, please set styleOptions.botAvatarInitials and styleOptions.userAvatarInitials to falsy.
Default bubble nub offset is set to 0, previously "bottom" (or -0)
Previously, we put the bubble nub at the bottom while keeping the avatar on top. This is not consistent in the new layout.
By default, we will group avatar per status group.
If you want to switch back to previous behaviors, please set styleOptions.showAvatarInGroup to true.
Default botAvatarInitials and userAvatarInitials is changed to undefined, from "" (empty string)
When the initials is undefined, no gutter space will be reserved for the avatar.
When the initials is "" (empty string), gutter space will be reserved, but not avatar will be shown.
useRenderActivity hook is being deprecated, in favor of the new useCreateActivityRenderer hook.
useRenderActivityStatus hook is being deprecated, in favor of the new useCreateActivityStatusRenderer hook.
useRenderAvatar hook is being deprecated, in favor of the new useCreateAvatarRenderer hook.
Change in general middleware design

This change will impact middleware which use downstream result.
Previously, when a middleware is called, they are passed with a single argument.

Starting from 4.10.0, multiple arguments could be passed to the middleware. All middleware should pass all arguments to the downstream middleware. This change enables future extension to the middleware pattern.

For example, a passthrough middleware was:

() => next => card => next(card)
It should become:

() => next => (...args) => next(...args)
This also applies to the render function returned by activity middleware. The previous signature was:

() => next => card => children => next(card)(children)
It should become:

() => next => (...setupArgs) => (...renderArgs) => next(...setupArgs)(...renderArgs)
Note: Please read the following section for another change in the activity middleware signature for decorators.
Change in activity middleware

This change will impact activity middleware used for decoration.
Previously, when an activity middleware hid a specific activity from view, it returned a function, () => false.

Starting in 4.10.0, if an activity needs to be hidden from the view, the middleware should return false instead of () => false. This change allows transcript to correctly group activities and ignore activities that are not in view.

To avoid the TypeError: x is not a function error, all middleware should be aware that downstream middleware may return false instead of a function.

For example, when an event activity is hidden from the view, the terminator middleware will now return false. All decoration middleware should check if the downstream result is false (or falsy value), and return the value as-is to upstream middleware.

Previously, a simple decorator was:

() => next => (...setupArgs) => (...renderArgs) => {
  const render = next(...setupArgs);
  const element = render(...renderArgs);

  return element && <div>{element}</div>;
}
It should check the result from downstream middleware. If it is falsy, it should return as-is to the upstream middleware:

() => next => (...setupArgs) => {
  const render = next(...setupArgs);

  return render && (...renderArgs) => {
    const element = render(...renderArgs);

    return element && <div>{element}</div>;
  };
}
Changed

Bumped all dependencies to the latest versions, by @compulim in PR #3380, #3388, and #3418
Development dependencies
Root package
@babel/plugin-proposal-class-properties@7.10.4
@babel/plugin-proposal-object-rest-spread@7.11.0
@babel/plugin-transform-runtime@7.11.0
@babel/preset-env@7.11.0
@babel/preset-react@7.10.4
@babel/preset-typescript@7.10.4
@babel/runtime@7.11.0
babel-jest@26.2.2
concurrently@5.2.0
core-js@3.6.5
global-agent@2.1.12
husky@4.2.5
jest@26.2.2
jest-image-snapshot@4.1.0
jest-junit@11.1.0
jest-trx-results-processor@2.0.3
lerna@3.22.1
lint-staged@10.2.11
prettier@2.0.5
serve@11.3.2
serve-handler@6.1.3
Removed unused package @azure/storage-blob@12.1.0
Other packages
@babel/cli@7.10.5
@babel/core@7.11.0
@babel/plugin-proposal-class-properties@7.10.4
@babel/plugin-proposal-object-rest-spread@7.11.0
@babel/plugin-transform-runtime@7.11.0
@babel/preset-env@7.11.0
@babel/preset-react@7.10.4
@babel/preset-typescript@7.10.4
@types/node@14.0.27
@typescript-eslint/eslint-plugin@3.8.0
@typescript-eslint/parser@3.8.0
babel-jest@26.2.2
concurrently@5.2.0
copy-webpack-plugin@6.0.3
core-js@3.6.5
cross-env@7.0.2
css-loader@4.2.0
eslint-plugin-prettier@3.1.4
eslint-plugin-react-hooks@4.0.8
eslint-plugin-react@7.20.5
eslint@7.6.0
global-agent@2.1.12
globalize-compiler@1.1.1
html-webpack-plugin@4.3.0
http-proxy-middleware@1.0.5
jest@26.2.2
node-dev@5.1.0
prettier@2.0.5
pug@3.0.0
serve@11.3.2
simple-update-in@2.2.0
source-map-loader@1.0.1
terser-webpack-plugin@3.1.0
typescript@3.9.7
webpack-cli@3.3.12
webpack-stats-plugin@0.3.2
webpack@4.44.1
Production dependencies
@babel/plugin-proposal-async-generator-functions@7.10.5
@babel/runtime@7.11.0
@babel/standalone@7.11.0
abort-controller-es5@1.2.0
botframework-directlinejs@0.13.0
core-js@3.6.5
event-iterator@2.0.0
event-target-shim-es5@1.2.0
expect@25.5.0
globalize@1.5.0
markdown-it-attrs-es5@1.2.0
markdown-it-attrs@3.0.3
markdown-it@11.0.0
math-random@2.0.0
memoize-one@5.1.1
on-error-resume-next@1.1.0
p-defer-es5@1.2.1
react-say@2.0.1
sanitize-html@1.27.2
simple-update-in@2.2.0
url-search-params-polyfill@8.1.0
web-speech-cognitive-services@7.0.1
whatwg-fetch@3.2.0
Added

Resolves #3250. Added activity grouping feature, by @compulim, in PR #3365
Resolves #3354. Added access key (ALT + SHIFT + A for Windows and CTRL + OPTION + A for Mac) to suggested actions, by @compulim, in PR #3367
Resolves #3247. Support activity ID on useObserveScrollPosition and useScrollTo hook, by @compulim, in PR #3372
Added support for Redux DevTools, by @tpdewolf and @compulim, in PR #3277
Resolves #3249. Convert typed emoticons into Emoji, by @corinagum and @compulim, in PR #3405
Fixed

Fixes #2675. Added alt text to images in suggested actions, by @compulim in PR #3375
Fixes #3383. Fixed notification toast should not break when most fields are undefined, by @compulim in PR #3384
Samples

Fixes #2828. Updated 04.api/h.clear-after-idle sample, by @compulim, in PR #3376
Added custom Emoji set sample, by @corinagum, in PR #3405
[4.9.2] - 2020-07-14

Added

Resolves #3182. Added stacked suggested actions height properties, by @corinagum, in PR #3235
Localized strings in Cantonese (yue), by @compulim, in PR #3289
Fixed

Fixes #3265. Fix styling specificity regression on microphone button, by @corinagum in PR #3276
Fixes #3279. Fix relative timestamp errored out when showing a time before yesterday, by @compulim in PR #3282
Fixes #3236, by @compulim in PR #3287
Isolated screen reader only live region for incoming activities and added a new <ScreenReaderActivity> component
Removed screen reader text for activities outside of live region, including <CarouselFilmstrip>, <StackedLayout>, <TextContent>, and <Timestamp>
Updated some accessibility texts
Rectified activities render order by delaying activities with replyToId that reference an activity which is not ACK-ed, for up to 5 seconds
Disabled widgets will have tabindex="-1" set, instead of disabled attribute
Remove tabindex="-1" from Adaptive Cards container
Hide activities of type invoke
Fixes #3294. Fix blank screen on missing middlewares, by @compulim in PR #3295
Fixes #3297. Fix className prop is not honored in <ReactWebChat>, by @compulim in PR #3300
Samples

Resolves #3218 and #2811. Adds documentation on reconnecting to a conversation in minimizable sample, by @corinagum, in PR #3239
Resolves #2939. Sample for activity grouping, by @compulim, in PR #3415
[4.9.1] - 2020-06-09

Breaking changes

Affecting Adaptive Cards, legacy cards and suggested actions
For openUrl card action, we are now allow-listing the URL scheme using the same allow list from the default Markdown + sanitize engine, which includes data, http, https, ftp, mailto, sip, and tel
To allow-list a different set of URL schemes, please implement the card action middleware to override this behavior
Added

Resolves #3205. Added Direct Line App Service Extension protocol, by @compulim in PR #3206
Resolves #3225. Support allowed scheme with openUrl card action, by @compulim in PR #3226
Resolves #3252. Added useObserveScrollPosition and useScrollTo hooks, by @compulim in PR #3268
Resolves #3271. Added composition mode, which splits up <ReactWebChat> into <Composer> and <BasicWebChat>, by @compulim in PR #3268
Fixed

Fixes #1340. Card container should not be focusable if they do not have tapAction, by @compulim in PR #3193
Fixed #3196. Cards with tapAction should be executable by ENTER or SPACEBAR key, by @compulim in PR #3197
Fixed #3203. "New messages" button should be narrated by assistive technology, by @compulim in PR #3204
Fixed #3217. Make sure rel="noopener noreferrer is not sanitized, by @compulim in PR #3220
Fixed #3223. Tap an openUrl card action should open URL in a new tab with noopener noreferrer set, by @compulim in PR #3224
Changed

Bumped Adaptive Cards dependencies, by @compulim in PR #3193
adaptivecards@1.2.6
Bumped dependencies due to a bug in Babel and Node.js, by @compulim in PR #3177
Development dependencies
@babel/preset-env@7.10.0
Production dependencies
abort-controller-es5@1.1.0
event-target-shim-es5@1.1.0
markdown-it-attrs-es5@1.1.0
p-defer-es5@1.1.0
web-speech-cognitive-services@7.0.0
Updated localization strings for Estonian (Estonia) (et-EE), by @LiweiMa in PR #3183
Bumped botframework-directlinejs@0.12.0, by @compulim in PR #3206
Samples

Resolves #3205. Added Direct Line App Service Extension chat adapter sample, by @compulim in PR #3206
Resolves #3271. Added enable composition mode sample, by @compulim in PR #3268
Resolves #3252. Added save and restore scroll position sample, by @compulim in PR #3268
Resolves #3271. Updated post activity event sample to use composition mode, by @compulim in PR #3268
[4.9.0] - 2020-05-11

Added

Resolves #2897. Moved from JUnit to VSTest reporter with file attachments, by @compulim in PR #2990
Added aria-label attribute support for default Markdown engine, by @patniko in PR #3022
Resolves #2969. Support sovereign cloud for Cognitive Services Speech Services, by @compulim in PR #3040
Resolves #2481. Support selecting different audio input devices for Cognitive Services Speech Services, by @compulim in PR #3079
Resolves #2850. Added new useFocus hook and deprecating useFocusSendBox hook, by @compulim in PR #3123
Modify setFocus argument of useTextBoxSubmit to support main and sendBoxWithoutKeyboard
Fixes #1427. Support disabled prop and added actionPerformedClassName in Adaptive Card and other legacy cards, by @compulim in PR #3150
Fixed

Fixes #2989. Fix observeOnce to use ES Observable call pattern, by @compulim in PR #2993
Fixes #3024. Using bridge package markdown-it-attrs-es5 for consuming markdown-it-attrs for IE11, by @compulim in PR #3025
Fixes #2818. Fix user ID is not set when passing to embed as query parameter, by @p-nagpal in PR #3031
Fixes #3026. Fix link rel attribute in the renderMarkdown function, by @tdurnford in PR #3033
Fixes #2933. Fix text should not be ignored in messageBack action in hero card, by @geea-develop and @compulim in PR #3003
Fixes #2562. Fix timestamps should not stop updating, by @compulim in PR #3066
Fixes #2953. Direct Line Speech should not synthesize when the speak property is falsy, by @compulim in PR #3059
Fixes #2876. messageBack and postBack should send even if both text and value is falsy or undefined, by @compulim in PR #3120
Fixes #2668. Disable Web Audio on insecure connections, by @compulim in PR #3079
Fixes #2850. After click suggested action, should focus to send box without keyboard, by @compulim in PR #3123
Fixes #3133. Associate ARIA labels with buttons in hero card and Adaptive Cards, by @compulim in PR #3146.
Remove browser-based detection from <ScreenReaderText> because it is no longer needed.
After stripping Markdown syntax for accessibility labels, cache the result to improve rendering performance.
Skip stripping Markdown for non-Markdown text content.
Fixes #3155. Patch incoming activities with null fields, by @compulim in PR #3154
Fixes #2669 and #3136. The "New messages" button will be accessible through TAB key, inbetween the last read and first unread activity, by @compulim in PR #3150.
After the "New message" button is clicked, focus will be moved to the first interactive UI of unread activity or the send box.
Fixes #3135. If the current widget is disabled, it will keep focus until the next TAB key is pressed, by @compulim in PR #3150
Changed

Bumped all dependencies to the latest versions, by @compulim in PR #2985, #3012 and #3150
Development dependencies
Root package
@azure/storage-blob@12.1.0
@babel/plugin-proposal-class-properties@7.8.3
@babel/plugin-proposal-object-rest-spread@7.8.3
@babel/plugin-transform-runtime@7.8.3
@babel/preset-env@7.8.7
@babel/preset-react@7.8.3
@babel/preset-typescript@7.8.3
@babel/runtime@7.8.7
babel-jest@25.1.0
concurrently@5.1.0
core-js@3.6.4
cross-env@7.0.2
get-port@5.1.1
husky@4.2.3
jest@25.1.0
jest-image-snapshot@2.12.0
lerna@3.20.2
lint-staged@10.1.1
selenium-webdriver@4.0.0-alpha.7
Other packages
@babel/core@7.8.7
@babel/preset-env@7.8.7
babel-jest@25.1.0
babel-plugin-istanbul@6.0.0
concurrently@5.1.0
eslint-plugin-prettier@3.1.2
eslint-plugin-react-hooks@2.5.0
eslint-plugin-react@7.18.3
eslint@6.8.0
terser-webpack-plugin@2.3.5
typescript@3.8.3
webpack-cli@3.3.11
webpack-stats-plugin@0.3.1
webpack@4.42.0
Production dependencies
core
@babel/runtime@7.8.7
redux-saga@1.1.3
bundle
@babel/runtime@7.8.7
core-js@3.6.4
url-search-params-polyfill@8.0.0
component
react-film@2.1.0
react-redux@7.2.0
react-scroll-to-bottom@2.0.0
redux@4.0.5
directlinespeech
@babel/runtime@7.8.7
core-js@3.6.4
embed
@babel/runtime@7.8.7
core-js@3.6.4
Bumped Chrome Docker image to 3.141.59-zirconium (Chrome 80.0.3987.106), by @compulim in PR #2992
Added 4.8.0 to embed/servicingPlan.json, by @compulim in PR #2986
Bumped microsoft-cognitiveservices-speech-sdk@1.10.1 and web-speech-cognitive-services@6.1.0, by @compulim in PR #3040
Resolved #2886 and #2987, converged all references of microsoft-cognitiveservices-speech-sdk to reduce footprint, by @compulim in PR #3079
Samples

Resolves #2806, added Single sign-on with On Behalf Of Token Authentication sample, by @tdurnford in #2865
Resolves #2481, added selectable audio input device sample, by @compulim in PR #3079
Resolves #1427, added disable cards after submission sample, by @compulim in PR #3150
[4.8.1] - 2020-04-15

Fixed

Fixes #3075. Fix usability issues around accessibility, by @compulim in PR #3076
Fix timestamp should not be narrated more than once.
Associate the activity text with its attachments, by adding a role="region" to the activity DOM element.
Fixes #3074. Keep props.locale when sending to the bot, by @compulim in PR #3095
Fixes #3096. Use <ScreenReaderText> instead of aria-label for message bubbles, by @compulim in PR #3097
[4.8.0] - 2020-03-05

Breaking changes

Localization
locale prop: zh-YUE has been renamed to yue to conform with Unicode standard. zh-YUE will continue to work with warnings
Most strings have been validated and retranslated by the Microsoft localization team, with the exception of English (US), Egyptian Arabic, Jordan Arabic, and Chinese Yue
If the new strings are undesirable, please use the overideLocalizedStrings prop for customization
String IDs have been refreshed and now use a standard format
useLocalize and useLocalizeDate is deprecated. Please use useLocalizer and useDateFormatter instead
Customizable typing indicator: data and hook related to typing indicator are being revamped in PR #2912
lastTypingAt reducer is deprecated, use typing instead. The newer reducer contains typing indicator from the user
useLastTypingAt() hook is deprecated, use useActiveTyping(duration?: number) instead. For all typing information, pass Infinity to duration argument
Customizable activity status: new nextVisibleActivity to control activity status visibility
Previously, we use timestampClassName to control if the activity should show or hide timestamp. The timestampClassName was added as a class attribute the DOM element which contains the timestamp
Today, activity and nextVisibleActivity are passed to the middleware, so the activityRendererMiddleware can decide whether the timestamp should be shown or not. For example, developers can group timestamp based on activity type
Added

Resolves #2753. Added support for updating an activity by the ID, by @compulim in PR #2825
Added custom hooks - useTimer and useIntervalSince - to replace the headless Timer component, by @tdurnford, in PR #2771
Resolves #2720, added customizable activity status using activityStatusMiddleware props, by @compulim, in PR #2788
Added default onError prop to the Dictation component, by @tonyanziano, in PR #2866
Resolves #1976. Added RTL support with localization for Hebrew and Arabic, by @corinagum, in PR #2890
Resolves #2755. Added notification system and toast UI, by @compulim, in PR #2883
Please read this article on how to use notification
Slow connection timer can now be set using styleOptions.slowConnectionAfter (in milliseconds)
Resolves #2871. Moved typing indicator to transcript, by @compulim, in PR #2883
Resolves #2756. Improved localizability and add override support for localized strings, by @compulim in PR #2894
Will be translated into 44 languages, plus 2 community-contributed translations
For details, please read the documentation on the localization
Resolves #2213. Added customization for typing activity, by @compulim, in PR #2912
Resolves #2754. Added telemetry system, by @compulim, in PR #2922
Resolves #2857. Added the ability to customize the avatar on a per activity basis, by @compulim, in PR #2943
Resolves #2944. Updated Azure locale mapping in embed page, by @compulim in PR #2965
Fixed

Fixes #2611. Fix sample 21: hooks errors, by @corinagum in PR #2740
Fixes #2609. Fix sample 12: minimizable button is causing another reconnect on restore, by @compulim in PR #2758
Fixes #2773. Import ES5 version of the following bundles, by @compulim in PR #2774
abort-controller
event-target-shim
p-defer
Fixes the following issues and improves test reliability, by @compulim in PR #2777
Fixes #2612. Wait until language change
Fixes #2653. Scroll-to-bottom check will do 5 consecutive checks to determine stickiness.
Fixes #2691. Wait until button is shown/hid before taking screenshot
Fixes #2737. Use driver.wait for conditions
Fixes #2776. Wait until button is shown/hid before taking screenshot
Use a new timeout fetchImage for images
Fixes #2780. Added the tel protocol to the allowedSchema in the sanitize-html options, by @tdurnford in PR #2787
Fixes #2747. Moved Timestamp into the SendStatus component and removed the Timestamp style set, by @tdurnford in PR #2786
Fixes #2647. Update the CroppedImage component PropType, by @tdurnford in PR #2795
Fixes #2794. Fix change locale sample, by @corinagum in PR #2798
Fixes #2510. Host hybrid-react and clear-after-idle samples, by @corinagum in PR #2798
Fixes #2772. Updated Adaptive Cards HostConfig to include container styles, by @tdurnford in PR #2810
Fixes #2145. Updated Adaptive Cards styles to include action styles, by @tdurnford in PR #2810
Fixes #2459. Updated Cognitive Services Speech Services to use latest fetch credentials signature, by @compulim in PR #2740
Fixes #1673. Configured suggested action and carousel flippers to blur on click, by @tdunford in PR #2801
Fixes #2822. Fixed credentials should return authorizationToken and subscriptionKey as string and allow empty LUIS reference grammar ID, by @compulim in PR #2824
Fixes #2751. Move documentation to docs folder, by @corinagum in PR #2832
Fixes #2838. Fixed concatMiddleware should allow any middleware to call its downstream middleware twice, by @compulim in PR #2839
Fixes #2864. Replaced DownloadAttachment and UploadAttachment with FileAttachment, which shows the download link and icon if the attachment contains the contentUrl, by @compulim in PR #2868
Fixes #2877. Updated Cognitive Services Speech Services samples to use both pre-4.8 and 4.8 API signature, by @compulim in PR #2916
Fixes #2757. New message indicator should only show up for new messages, by @compulim in PR #2915
Fixes #2945. Toast should not overlap with each other, by @compulim in PR #2952
Fixes #2946. Updated JSON filenames for localization strings, by @compulim in PR #2949
Fixes #2560. Bumped to react-dictate-button@1.2.2 to workaround a bug from Angular/zone.js, by @compulim in PR #2960
Fixes #2923. Added download attribute to file attachment (<FileContent>), by @compulim in PR #2963
Fixes #2904. Fixed border radius when rendering bubble nub in RTL, by @compulim in PR #2943
Fixes #2966. Collapsed toast should show at most 2 lines of text, by @compulim in PR #2967
Fixes #2941, #2921, and #2948. Update documentation and fix redux sample, by @corinagum in PR #2968
Fixes #2972. Compatibility fix for IE11, by @compulim in PR #2973
Fixes #2977. sr-Cyrl and sr-Latn should display Serbian texts, by @compulim in PR #2978
Fixes #2979. Lock microsoft-cognitiveservices-speech-sdk to 1.8.1, by @compulim in PR #2980
Changed

Bumped all dependencies to latest versions, by @corinagum in PR #2740
Development dependencies
Root package
@babel/plugin-proposal-class-properties@7.8.3
@babel/plugin-proposal-object-rest-spread@7.8.3
@babel/plugin-transform-runtime@7.8.3
@babel/preset-env@7.8.4
@babel/preset-react@7.8.3
@babel/preset-typescript@7.8.3
@babel/runtime@7.8.4
core-js@3.5.0
coveralls@3.0.9
husky@3.1.0
jest-image-snapshot@2.11.1
lerna@3.19.0
lint-staged@9.5.0
Other packages
@babel/cli@7.8.4
@babel/core@7.8.4
@babel/plugin-proposal-class-properties@7.8.3
@babel/plugin-proposal-object-rest-spread@7.8.3
@babel/plugin-transform-runtime@7.8.3
@babel/preset-env@7.8.4
@babel/preset-react@7.8.3
@babel/preset-typescript@7.8.3
@types/node@12.12.18
@types/react@16.8.25
@typescript-eslint/eslint-plugin@2.12.0
@typescript-eslint/parser@2.12.0
copy-webpack-plugin@5.1.1
eslint-plugin-react-hooks@2.3.0
eslint-plugin-react@7.17.0
eslint@6.7.2
http-proxy-middleware@0.20.0
terser-webpack-plugin@2.3.0
typescript@3.7.3
webpack@4.41.3
Production dependencies
core
math-random@1.0.4
bundle
@babel/runtime@7.8.4
core-js@3.5.0
sanitize-html@1.20.0
component
sanitize-html@1.20.1
embed
@babel/runtime@7.8.4
core-js@3.5.0
Resolves #2748, updated build scripts and CI pipeline, by @compulim, in PR #2767
component: Bumps react-film@2.0.2, by @tdurnford in PR #2801
Removes sendTyping and deprecation notes in PR #2845, by @corinagum, in PR #2918
component: Bumps react-dictate-button@1.2.2, by @compulim in PR #2960
Samples

Bump samples to Web Chat 4.7.0, by @compulim in PR #2726
Resolves #2641. Reorganize Web Chat samples, by @corinagum, in PR #2762
Resolves #2755, added "how to use notification and customize the toast UI" sample, by @compulim, in PR #2883
Resolves #2213. Added Customize Typing Indicator Demo, by @compulim, in PR #2912
Resolves #2754. Added telemetry collection using Azure Application Insights and telemetry collection using Google Analytics, by @compulim, in PR #2922
Resolves #2857. Added Customize Avatar Demo, by @compulim, in PR #2943
[4.7.1] - 2019-12-13

Changed

Moved core-js from dev dependencies to dependencies in botframework-directlinespeech-sdk package, by @tonyanziano, in PR #2727
[4.7.0] - 2019-12-12

Breaking changes

adaptiveCardHostConfig is being renamed to adaptiveCardsHostConfig
If you are using the deprecated adaptiveCardHostConfig, we will rename it automatically
Added

Resolves #2539, added React hooks for customization, by @compulim, in the following PRs:
PR #2540: useActivities, useReferenceGrammarID, useSendBoxShowInterims
PR #2541: useStyleOptions, useStyleSet
PR #2542: useLanguage, useLocalize, useLocalizeDate
PR #2543: useAdaptiveCardsHostConfig, useAdaptiveCardsPackage, useRenderMarkdownAsHTML
PR #2544: useAvatarForBot, useAvatarForUser
PR #2547: useEmitTypingIndicator, usePeformCardAction, usePostActivity, useSendEvent, useSendFiles, useSendMessage, useSendMessageBack, useSendPostBack
PR #2548: useDisabled
PR #2549: useSuggestedActions
PR #2550: useConnectivityStatus, useGroupTimestamp, useTimeoutForSend, useUserID, useUsername
PR #2551: useLastTypingAt, useSendTypingIndicator, useTypingIndicator
PR #2552: useFocusSendBox, useScrollToEnd, useSendBoxValue, useSubmitSendBox, useTextBoxSubmit, useTextBoxValue
PR #2553: useDictateInterims, useDictateState, useGrammars, useMarkActivityAsSpoken, useMicrophoneButton, useShouldSpeakIncomingActivity, useStartDictate, useStopDictate, useVoiceSelector, useWebSpeechPonyfill
PR #2554: useRenderActivity, useRenderAttachment
PR #2644: Added internal/useWebChatUIContext for cleaner code
PR #2652: Update samples to use hooks
Bring your own Adaptive Cards package by specifying adaptiveCardsPackage prop, by @compulim in PR #2543
Fixes #2597. Modify watch script to start and add tableflip script for throwing node_modules, by @corinagum in PR #2598
Adds Arabic Language Support, by @midineo, in PR #2593
Adds AdaptiveCardsComposer and AdaptiveCardsContext for composability for Adaptive Cards, by @compulim, in PR #2648
Adds Direct Line Speech support, by @compulim in PR #2621
Adds microsoft-cognitiveservices-sdk@1.8.1, in PR #2704
Fixes #2692. Rename sample 17 to 17.a, by @corinagum in PR #2695
Fixed

Fixes #2565. Fixed Adaptive Card host config should generate from style options with default options merged, by @compulim in PR #2566
Resolves #2337. Remove Cognitive Services Preview warning, by @corinagum in PR #2578
Fixes #2559. De-bump remark and strip-markdown, by @corinagum in PR #2576
Fixes #2512. Adds check to ensure Adaptive Card's content is an Object, by @tdurnford in PR #2590
Fixes #1780, #2277, and #2285. Make Suggested Actions accessible, Fix Markdown card in carousel being read multiple times, and label widgets of Connectivity Status and Suggested Actions containers, by @corinagum in PR #2613
Fixes #2608. Focus will return to sendbox after clicking New Messages or a Suggested Actions button, by @corinagum in PR #2628
Resolves #2597. Modify watch script to start and add tableflip script for throwing node_modules, by @corinagum in PR #2598
Resolves #1835. Adds suggestedActionLayout to defaultStyleOptions, by @spyip, in PR #2596
Resolves #2331. Updated timer to use React Hooks, by @spyip in PR #2546
Resolves #2620. Adds Chinese localization files, by @spyip in PR #2631
Fixes #2639. Fix passed in prop time from string to boolean, by @corinagum in PR #2640
component: Updated timer to use functional component, by @spyip in PR #2546
Fixes #2651. Add ends-with string module to ES5 bundle, by @corinagum in PR #2654
Fixes #2658. Fix rendering of markdown images in IE11, by @corinagum in PR #2659
Fixes #2662 and #2666. Fix various issues related to Direct Line Speech, by @compulim in PR #2671
Added triple-buffering to reduce pops/cracks.
Enable Safari by upsampling to 48000 Hz.
Support detailed output format on Web Chat side.
Fixes #2700. Enable <SayComposer> and Adaptive Cards in recompose story, in PR #2649
Moved <SayComposer> from <BasicTranscript> to <Composer>
Moved WebSpeechPonyfill patching code from <BasicTranscript> to <Composer>
Fixes #2699. Disable speech recognition and synthesis when using Direct Line Speech under IE11, by @compulim, in PR #2649
Fixes #2709. Reduce wasted render of activities by memoizing partial result of <BasicTranscript>, by @compulim in PR #2710
Fixes #2710. Suggested actions container should persist for AT, by @corinagum in PR #2710
Fixes #2718. Add Object.is polyfill for IE11, by @compulim in PR #2719
Fixes #2723. Fix renderMarkdown should not be called if it is undefined in minimal bundle, by @compulim in PR #2724
Fixes #2655. "Taking longer than usual to connect" should not show up after reconnect succeeded, by @curiousite and @compulim in PR #2656
Fixes #2942. Fix typing indicator should not show up for the user, by @compulim in PR #2950
Changed

Bumped all dependencies to latest version, by @compulim, in PR #2533 and PR #2621
Development dependencies
Root package
@azure/storage-blob@12.0.0
@babel/plugin-proposal-class-properties@7.5.5
@babel/plugin-proposal-object-rest-spread@7.6.2
@babel/plugin-transform-runtime@7.6.2
@babel/preset-env@7.6.3
@babel/preset-react@7.6.3
@babel/preset-typescript@7.6.0
@babel/runtime@7.6.3
babel-jest@24.9.0
core-js@3.3.6
coveralls@3.0.7
husky@3.0.9
jest-image-snapshot@2.11.0
jest@24.9.0
lerna@3.18.3
lint-staged@9.4.2
selenium-webdriver@4.0.0-alpha.5
serve-handler@6.1.2
Other packages
@babel/cli@7.6.4
@babel/core@7.6.4
@babel/plugin-proposal-class-properties@7.5.5
@babel/plugin-proposal-object-rest-spread@7.6.2
@babel/plugin-transform-runtime@7.6.2
@babel/preset-env@7.6.3
@babel/preset-react@7.6.3
@babel/preset-typescript@7.6.0
@types/node@12.12.3
@types/react@16.9.11
@typescript-eslint/eslint-plugin@2.6.0
@typescript-eslint/parser@2.6.0
babel-plugin-istanbul@5.2.0
concurrently@5.0.0
copy-webpack-plugin@5.0.4
eslint-plugin-prettier@3.1.1
eslint-plugin-react-hooks@2.2.0
eslint-plugin-react@7.16.0
eslint@6.6.0
http-proxy-middleware@0.20.0
jest@24.9.0
terser-webpack-plugin@2.2.1
typescript@3.6.4
webpack-cli@3.3.10
webpack@4.41.2
Production dependencies
core
@babel/runtime@7.6.3
jsonwebtoken@8.5.1
math-random
redux-saga@1.1.1
simple-update-in@2.1.1
bundle
@babel/runtime@7.6.3
core-js@3.3.6
markdown-it@10.0.0
memoize-one@5.1.1
sanitize-html@1.19.0
url-search-params-polyfill@7.0.0
component
bytes@3.1.0
memoize-one@5.1.1
react-dictate-button@1.2.1
react-redux@7.1.1
remark@11.0.1
sanitize-html@1.20.1
simple-update-in@2.1.1
strip-markdown@3.1.1
embed
@babel/runtime@7.6.3
core-js@3.3.6
component: Bumps adaptivecards@1.2.3, by @corinagum in PR #2523
Bumps Chrome in Docker to 78.0.3904.70, by @spyip in PR #2545
bundle: Webpack will now use webpack-stats-plugin instead of webpack-visualizer-plugin, by @compulim in PR #2584
This will fix #2583 by not bringing in transient dependency of React
To view the bundle stats, browse to https://chrisbateman.github.io/webpack-visualizer/ and drop the file /packages/bundle/dist/stats.json
Resolves #2674. Update embed docs, by @corinagum, in PR #2696
Samples

Clear Conversation After Idle, by @tdurnford, in PR #2375
Smart Display, by @compulim, in PR #2649
[4.6.0] - 2019-10-31

Breaking changes

We will no longer include react and react-dom in our NPM package, instead, we will requires peer dependencies of react@^16.8.6 and react-dom@^16.8.6
Changed

*: Bumps all dev dependencies to latest version, by @compulim, in PR #2182 and PR #2308
@babel/*@7.5.4
jest@24.8.0
lerna@3.15.0
react-redux@7.1.0
typescript@3.5.3
webpack@4.35.3
*: Bumps @babel/runtime@7.5.4, by @compulim, in PR #2182
*: Bumps Docker container for headless Chrome to selenium/standalone-chrome:3.141.59-radium, by @compulim, in PR #2182
*: Moves from babel-plugin-version-transform to babel-plugin-transform-inline-environment-variables, by @compulim, in PR #2182
*: Bumps ESLint and related dependencies to latest version, by @compulim, in PR #2185
eslint-plugin-react@7.14.2
eslint@6.0.1
*: Bumps React, Redux and their related dependencies to latest version, by @compulim, in PR #2184
react-dom@16.8.6
react-redux@5.1.1
react@16.8.6
redux@4.0.4
Removed redux-promise-middleware
*: Bumps lodash-*(https://www.npmjs.com/package/lodash), by @compulim, in PR #2199
lodash@4.17.14
lodash.mergewith@4.6.2
lodash.template@4.5.0
lodash.templatesettings@4.2.0
mixin-deep@1.3.2
set-value@2.0.1
union-value@1.0.1
Bumps web-speech-cognitive-services@4.0.1-master.6b2b9e3, by @compulim in PR #2246, PR #2274, and PR #2338
Fix for React hooks constraints: both app and component must share the same reference of react and react-dom, in PR #2274
/: Install react and react-dom to devDependencies
bundle: Move react and react-dom from dependencies to peerDependencies
component: Remove react and react-dom from devDependencies
playground: Remove react and react-dom from dependencies
samples/*: Move to production version of Web Chat, and bump to react@16.8.6 and react-dom@16.8.6
Moved the typing indicator to the send box and removed the typing indicator logic from the sagas, by @tdurnford, in PR #2321
component: Move Composer to React hooks and functional components, by @compulim, in PR #2308
component: Fix #1818 Move to functional components by @corinagum, in PR #2322
Fix #2292. Added function to select voice to props, selectVoice(), by @compulim, in PR #2338
Bumping dependencies, by @compulim, in PR #2500
*: web-speech-cognitive-services@5.0.1
bundle: botframework-directlinejs@0.11.6
component: react-film@1.3.0
Fixed

Fixes #2328. Updating submitSendBoxSaga.js to send sendBoxValue.trim(), by @jimmyjames177414 in PR #2331
Fixes #2160. Clear suggested actions after clicking on a suggested actions of type openUrl, by @tdurnford in PR #2190
Fixes #1954. Estimate clock skew and adjust timestamp for outgoing activity, by @compulim in PR #2208
Fixes #2240. Fix microphone button should be re-enabled after error, by @compulim in PR #2241
Fixes #2250. Fix React warnings related prop types, by @compulim in PR #2253
Fixes #2245. Fix speech synthesis not working on Safari by priming the engine on the first microphone button click, by @compulim in PR #2246
Fixes #1514. Added reference grammar ID when using Cognitive Services Speech Services, by @compulim in PR #2246
Fixes #1515. Added dynamic phrases when using Cognitive Services Speech Services, by @compulim in PR #2246
Fixes #2273. Add ScreenReaderText component, by @corinagum in PR #2278
Fixes #2231. Fallback to English (US) if date time formatting failed, by @compulim in PR #2286
Fixes #2298. Speech synthesize errors to be ignored, by @compulim in PR #2300
Fixes #2243. Fixed sagas to correctly mark activities with speaking attachments, by @tdurnford in PR #2320
Fixes #2365. Fix Adaptive Card pushButton appearance on Chrome, by @corinagum in PR #2382
Fixes #2379. Speech synthesis can be configured off by passing null, by @compulim in PR #2408
Fixes #2418. Connectivity status should not waste-render every 400 ms, by @compulim in PR #2419
Fixes #2415 and #2416. Fix receipt card rendering, by @compulim in PR #2417
Fixes #2415 and #2416. Fix Adaptive Cards cannot be disabled on-the-fly, by @compulim in PR #2417
Fixes #2360. Timestamp should update on language change, by @compulim in PR #2414
Fixes #2428. Should interrupt speech synthesis after microphone button is clicked, by @compulim in PR #2429
Fixes #2435. Fix microphone button getting stuck on voice-triggered expecting input hint without a speech synthesis engine, by @compulim in PR #2445
Fixes #2472. Update samples to use repo's version of React, by @corinagum in PR #2478
Fixes #2473. Fix samples 13 using wrong region for Speech Services credentials, by @compulim in PR #2482
Fixes #2420. Fix saga error should not result in an unhandled exception, by @compulim in PR #2421
Fixes #2513. Fix core-js not loading properly, by @compulim in PR #2514
Fixes #2516. Disable microphone input for expecting input hint on Safari, by @compulim in PR #2517 and PR #2520
Fixes #2518. Synthesis of bot activities with input hint expecting, should be interruptible, by @compulim in PR #2520
Fixes #2519. On Safari, microphone should turn on after synthesis of bot activities with input hint expecting, by @compulim in PR #2520
Fixes #2521. webchat-es5.js should not contains non-ES5 code and must be loadable by IE11, by @compulim in PR #2522
Fixes #2524. Version was not burnt into source code correctly, by @compulim in PR #2525
Added

Resolves #2157, added emitTypingIndicator action and dispatcher, by @compulim, in PR #2413
Resolves #2307. Added options to hide ScrollToEnd button, by @nt-7 in PR #2332
Added bubble nub and style options, by @compulim, in PR #2137 and PR #2487
Resolves #1808. Added documentation on activity types, by @corinagum in PR #2228
Added timestampFormat option to the default style options and created AbsoluteTime component, by @tdurnford, in PR #2295
embed: Added ES5 polyfills and dev server, by @compulim, in PR #2315
Resolves #2380. Added botAvatarBackgroundColor and userAvatarBackgroundColor to the default style options, by @tdurnford in PR #2384
Added full screen capability to IFRAME in the YouTubeContent and VimeoContent components by @tdurnford in PR #2399
Resolves #2461, added isomorphic-react and isomorphic-react-dom packages, by @compulim and @corinagum, in PR #2478 and PR #2486
Added missing Norwegian (nb-NO) translations, by @taarskog
Added missing Italian (it-IT) translations, by @AntoT84
Resolve #2481. Support alternative audio input source by adding audioConfig prop to createCognitiveServicesSpeechServicesPonyfillFactory, by @corinagum, in PR #2491
Added missing Finnish (fi-FI) translations, by @sk91swd, in PR #2501
Samples

Single sign-on for Microsoft Teams apps, by @compulim in #2196
Customize Web Chat with Reaction Buttons. Updated reaction handlers to send messageReaction activities, by @tdurnford in #2239
Select voice for speech synthesis, by @compulim, in PR #2338
Using different versions of React on a hosting app via NPM packages, by @compulim, in PR #2509
[4.5.3] - 2019-10-10

Changed

bundle: Bumped DirectLineJS to support metadata when uploading attachments, in PR #2433
botframework-directlinejs@0.11.5
Removed DirectLineJS as a dev dependency for component because it was not referenced
Fixed

Fixes #2248. Remove download links from user-uploaded attachment without thumbnails, by @compulim in PR #2262
Fixes Emulator:#1823. Fix Sendbox "Type your message" being read twice by AT, by @corinagum in PR #2423
Fixes #2422. Store thumbnail URL using the activity's attachment.thumbnailUrl field, by @compulim in PR #2433
Added

Make thumbnails when uploading GIF/JPEG/PNG and store it in channelData.attachmentThumbnails, by @compulim, in PR #2206, requires modern browsers with following features:
Web Workers API
createImageBitmap
MessageChannel/MessagePort
OffscreenCanvas
Specifically OffscreenCanvas.getContext('2d')
Render thumbnail for image attachments using activity.attachments[].thumbnailUrl, by @compulim in PR #2433
[4.5.2] - 2019-08-07

Fixes #2273. Add ScreenReaderText component, by @corinagum in PR #2278
[4.5.1] - 2019-08-01

Fixed

Fixes #2187. Bump core-js and update core-js modules on index-es5.js, by @corinagum in PR #2195
Fixes #2193. Fix Adaptive Card/attachments do not get read by Narrator, by @corinagum in PR #2226
Fixes #2150. Fix timestamps read by Narrator, by @corinagum in PR #2226
Fixes #2250. Fix React warnings related prop types, by @compulim in PR #2253
[4.5.0] - 2019-07-10

Added

*: Added eslint to static code analysis, by @compulim, in PR #1970
Added pt-PT language, by @bodyzatva in PR #2005 and PR #2020
Added documentation for using Web Chat dev build, by @corinagum, in PR #2074
Added the Web Chat version to DirectLine's botAgent option, by @tdurnford, in PR #2101
Added richCardWrapTitle to defaultStyleOptions, by @tdurnford, in PR #2115
Added test harness for speech recognition and synthesis for #2122, by @compulim, in PR #2153
Changed

*: Bumps to lerna@3.13.4, by @corinagum, in PR #1989
*: Bumps to:
lerna@3.13.4,
react-scripts@3.0.0,
webpack@4.30.0, by @corinagum, in PR #1965
bundle: Bumps to adaptivecards@1.2.0, by @corinagum, in PR #2064
Fixed

Fixes #1974. Update /docs/ folder to /media/ and delete unused images, by @corinagum in PR #1975
Fixes #1980. Changed sendBoxTextArea styles to break words longer than the textarea, by @tdurnford in PR #1986
Fixes #1969. Move styleSets related to Adaptive Cards to full bundle, by @corinagum in PR #1987
Fixes #1429. Changed Markdown-It options to render newline characters correctly, by @tdurnford in PR #1988
Fixes #1736. Fixed only first activity in a batch is spoken, by @compulim in PR #2016
Fixes #2008. Fixed playground due to recent eslint changes, by @compulim in PR #2009
Fixes #1876. Accessibility fixes on Web Chat transcript, by @corinagum in PR #2018
Fixes #1829. Fixed long text not being synthesized by Cognitive Services by bumping to react-say@1.2.0, by @compulim in PR #2035
Fixes #1982. Move to prettier! by @corinagum in PR #2038
Fixes #1429. Added Markdown string preprocessing so the renderer will respect CRLF carriage returns (\r\n), by @tdurnford in PR #2055
Fixes #2057. Added sip: protocol to sanitize HTML options, by @tdurnford in PR #2061
Fixes #2062. Fixed Markdown rendering issue in cards, by @tdurnford in PR #2063
Fixes #1896. Added data schema to render base64 images, by @denscollo in PR#2067
Fixes #2068. Fixed Adaptive Cards validate and rich card speak issues, by @tdurnford in PR #2075
Fixes #1966. Update Localization files for es-ES, ja-JP, zh-HANS, zh-HANT, zh-YUE, by @corinagum in PR #2077
Fixes #2078. Update Localization files for tr-TR by @vefacaglar
Fixes #2069. Fixed Markdown renderer issue in playground, by @tdurnford in PR#2073
Fixes #1971. Fix mobile UX of Sendbox, SendButton, and SuggestedAction focus, by @corinagum in PR #2087
Fixes #1627. Fixed timestamps randomly stopped from updating, by @compulim in PR #2090
Fixes #2001. Strip Markdown from ARIA labels, so screen readers do not speak Markdown in text, by @corinagum in PR #2096
Fixes #1926. Fixed scroll stickiness issue when submitting an Adaptive Card form with suggested actions opened, by @compulim in PR #2107
Fixes #2110. Fixed sendBox input/textarea background color issue, by @tdurnford in PR #2111
Fixes #2104. Remove deprecated /master/webchat**.js links from samples, by @corinagum in PR #2105
Fixes #1863. Remove title, subtitle, and text of cards from being spoken by @corinagum in PR #2118
Fixes #2134. Added azure-pipelines.yml for embed package, by @compulim in PR #2135
Fixes #2106. Fix AdaptiveCardHostConfig warning associated with the CommonCard component, by @tdurnford in PR #2108
Fixes #1872. Fixed observeOnce to unsubscribe properly, by @compulim in PR #2140
Fixes #2022. Fixed "expectingInput" in inputHint is not respected, by @compulim and @corinagum in PR #2149 and PR #2166
Samples

*: Single sign-on for enterprise apps, by @compulim in #2002
*: Upload to Azure Storage, by @compulim in #2127
*: Speech UI demo. Reconfigured to use Cognitive Services properly, by @compulim in PR #2132
*: Single sign-on for Intranet apps, by @compulim in #2144
*: Change locale on-the-fly, by @compulim in #2451
[4.4.1] - 2019-05-02

Added

Adds handling of reconnection, by @compulim, in PR #1880
Adds embed page, by @compulim, in PR #1910, PR #1928 and PR #1938
Changed

Deployment: Bumps to blobxfer@1.7.1, by @compulim, in PR #1897
Deployment: Adds charset to content type of JavaScript files on CDN, by @compulim, in PR #1897
component: Bumps to react-film@1.2.1-master.db29968, by @corinagum and @compulim, in PR #1900 and PR #1924
Build: Bumps to @babel/*, by @corinagum, in PR #1918
component: Carousel flippers on carousel layout and suggested actions will use initial cursor style, by @compulim, in PR #1924
Fixed

Fixes #1423. Added sample for hosting WebChat in Angular, by @omarsourour in PR #1813
Fixes#1767. Remove cursor: pointer from buttons, by @corinagum in PR #1819
Fixes #1774. Add styleSetOption to allow word break. Default to break-word, by @corinagum in PR #1832
Fixes #1847. Bump react-say, which adds babel-runtime dependency, by @corinagum in PR #1849
Adds #1524 Add Offline UI: connecting for the first time, by @corinagum, in PR #1866
Fixes #1768. Add style options to be able to modify all Send Box borders, by @corinagum in PR #1871
Fixes #1827. Remove renderer for unknown activities, by @corinagum in PR #1873
Fixes #1586. Fix theming of suggested actions buttons, by @corinagum in PR #1883
Fixes #1837, #1643. Fix style conflicts with bootstrap and bump memoize-one, by @corinagum in PR #1884
Fixes #1877. Add viewport meta tag and fix a few sample links, by @corinagum in PR #1919
Fixes #1789. Focus send box after message is being sent, by @corinagum in PR #1915
Fixes #1920. Added disabled property to send button, by @tdurnford in PR #1922
Fixes #1525. Add JavaScript error Offline UI, by @corinagum in PR #1927
Fixes #1934. Fix spacing of empty ConnectivityStatus component, by @corinagum in PR #1939
Fixes #1943. Fix extra vertical padding in IE11 and Firefox, by @compulim in PR #1949
Fixes #1945. QA fixes for 4.4, by @corinagum in PR #1950
Fixes #1947. Fix scrollbar in suggested action should be hidden in Firefox, remove gaps, and use style set for customizing react-film, by @compulim in PR #1953
Fixes #1948. Fixed sample 04.api/g.chat-send-history to work with Firefox and Microsoft Edge, by @tdurnford in PR #1956
Fixes #1304. Move Adaptive Cards from component to bundle, by @compulim and @corinagum in PR #1936
Fixes #1990. Bump Adaptive Cards & fix textarea font-family from monospace to Web Chat's primaryFont, by @corinagum in PR #2064
[4.3.0] - 2019-03-04

Added

Resolves #1383. Added options to hide upload button, by @compulim in PR #1491
Adds support of avatar image, thru styleOptions.botAvatarImage and styleOptions.userAvatarImage, in PR #1486
Adds ability to style sendbox background and text color, thru styleOptions.sendBoxBackground and styleOptions.sendBoxTextColor, in PR #1575
core: Adds sendEvent, in PR #1286
core: Adds CONNECT_FULFILLING action to workaround redux-saga design decision, in PR #1286
component: Added missing Spanish (es-ES) by @schgressive in PR #1615
Adds missing Spanish (es-ES) by @schgressive in PR #1615
Resolves #1602. Fix suggested actions regression of buttons, by @corinagum in PR #1616
component: Allow font family and adaptive cards text color to be set via styleOptions, by @a-b-r-o-w-n, in PR #1670
component: Add fallback logic to browser which do not support window.Intl, by @compulim, in PR #1696
*: Adds username back to activity, fixed #1321, by @compulim, in PR #1682
component: Allow root component height and width customization via styleOptions.rootHeight and styleOptions.rootWidth, by @tonyanziano, in PR #1702
component: Added cardActionMiddleware to customize the behavior of card action, by @compulim, in PR #1704
bundle: Add watermark and streamUrl parameters to createDirectLine, by @corinagum, in PR #1817
component: Added textarea option to SendBox per issues #17 and #124, by @tdurnford, in PR #1889
component: Added suggestedAction images per issue #1739, by @tdurnford, in PR #1909
Changed

Bumps botframework-directlinejs to 0.11.4 in PR #1783
Moves botAvatarImage and userAvatarImage to styleOptions.botAvatarImage and styleOptions.userAvatarImage respectively, in PR #1486
Fixes string interpolation error in Russian localization and fallback for browsers without Intl support by @odysseus1973 in PR #1509
playground: Bumps to botframework-directlinejs@0.10.0, in PR #1511
playground: Bumps to react-scripts@2.1.1, in PR #1535
*: Bumps to adaptivecards@1.1.2, in #1558
core: Fixes #1344. Use random user ID if not specified, by @compulim in PR #1612
component: Bump to react-film@1.1.2 and react-scroll-to-bottom@1.3.1, by @compulim, in PR #1621 and PR #1725
Expand german by @matmuenzel in PR #1740
Update Russian and Japanese by @corinagum in PR #1747
Update Spanish by @ckgrafico in PR #1757
Update Danish by @simon_lfr in PR #1810
Update Swedish by @pekspro in PR #1797
Update Dutch by @imicknl in PR #1812
Fixed

Fixes #1360. Added roles to components of Web Chat, by @corinagum in PR #1462
Fixes #1409. Added microphone status as screen reader only text, by @corinagum in PR #1490
Fixes #1605, #1316, #1341, #1411. Fix color contrast ratios & downloadIcon narrator accessibility by @corinagum in PR #1494
Fixes #1264, #1308, #1318, #1334,#1425. Update icons with accessibilty, Sent message accessibility, and fix sample README.md, @corinagum in PR #1506 and #1542
Fixes #1512. Fix #1512: fix sanitization of anchors (allow title attributes), by @corinagum in PR #1530
Fixes #1499.
Fix screen reader handling of name, activity, and timestamp,
connectCarouselFilmStrip: Fixed botAvatarInitials and userAvatarInitials functionality from recent name change,
BasicTranscript: Fixed user activity should not be recreated after receive ACK from Direct Line,
by @corinagum in PR #1528
component: Fix #1560, #1625 and #1635. Fixed carousel layout not showing date and alignment issues, by @compulim in PR #1561 and #1641
playground: Fixes #1562. Fixed timestamp grouping "Don't group" and added "Don't show timestamp", by @compulim in PR #1563
component: Fixes #1576. Rich card without tap should be rendered properly, by @compulim in PR #1577
core: Some sagas missed handling successive actions, in PR #1286
core: incomingActivitySaga may throw null-ref exception if the first activity is from user, in PR #1286
component: Fixes #1328. Should not start microphone if input hint is set to ignoringInput, in PR #1286
component: Fixes outgoing typing indicators are not sent and acknowledged properly, in PR #1286
Fixes #1402. Add messageBack support, by @corinagum in PR #1581
Fixes #1539. Fix outgoing typing indicators are not sent and acknowledged properly, in PR #1541
component: Fix #1547. Fixed unhandled activity type should be forwarded to custom middleware, by @compulim in PR #1569
playground: Fix #1610. Fixed bot and user avatar initials not working, by @compulim in PR #1611
bundle: Fix #1613. Pass conversationId to DirectLineJS constructor, by @neetu-das in PR #1614
component: Fix #1626. Fixed Number.isNaN is not available in IE11, by @compulim in PR #1628
bundle: Fix #1652. Pass pollingInterval to DirectLineJS constructor, by @neetu-das in PR #1655
core: Reworked logic on connect/disconnect for reliability on handling corner cases, by @compulim in PR #1649
core: Fix #1521. Add connectivity status component and update localization, by @corinagum in PR #1679
core: Fix #1057. Fixed suggested actions destined for other recipients should not show up, by @compulim in PR #1706
component: Fixed pt-br locale not being selected, added X minutes ago and missing translations, by @pedropacheco92 in PR #1745
component: Fix #1741 where scrollToEndButton does not have type="button"by @corinagum in PR #1743
component: Fix #1625 to update README.md by @corinagum in PR #1752
Removed

botAvatarImage and userAvatarImage props, as they are moved inside styleOptions, in PR #1486
sendTyping props is now renamed to sendTypingIndicator, by @compulim, in PR #1584
Samples

core: Programmatic access to post activity, in #1568
component: Hide upload button, in #1491
component: Avatar image, in #1486
core: Incoming activity to JavaScript event, in #1567
core: Send welcome event, in PR #1286
core: Send typing indicator, in #1541
component: Password input activity, in #1569
*: Updated minimizable Web Chat sample to use WEB_CHAT/SEND_EVENT action, in #1631
component: Hybrid speech engine, in #1617
component: Use Speech Services token for speech UI sample, in #1634
component: Selectable Activity, in #1624
component: Chat Send History, in #1678
*: Update README.md's for samples 05-10 #1444 and improve accessibility of anchors #1681, by @corinagum in PR #1710
component: Customizing open URL behavior, in PR #1704
[4.2.0] - 2018-12-11

Added

Build: Development build now include instrumentation code, updated build scripts
npm run build will build for development with instrumentation code
npm run prepublishOnly will build for production
npm run watch will also run Webpack in watch loop
Build: Automated testing using visual regression testing technique in #1323
Docker-based automated testing using headless Chrome and Web Driver
Screenshot comparison using jest-image-snapshot and pixelmatch
Code is instrumented using istanbul
Test report is hosted on Coveralls
Added French localization, by @tao1 in PR #1327
Resolve #1344, by updating README.md and adding validation logic for userID props, in #1447
If userID props present and also embedded in Direct Line token, will use the one from Direct Line token
If userID props present, they must be string and not prefixed with dl_, to avoid confusion between userID props and Direct Line embedded user ID (which is forgery-proof)
If userID props does not pass the validation test or not specified, Web Chat will use default-user instead
Added support for Cognitive Services Speech to Text and Text to Speech in PR #1442
Changed

Core: Saga will run after custom middleware, in #1331
Custom middleware run before saga to allow user to modify default behavior
Build: Bump dependencies, in #1303
@babel
@babel/cli@7.1.2
@babel/core@7.1.2
@babel/plugin-proposal-class-properties@7.1.0
@babel/plugin-proposal-object-rest-spread@7.0.0
@babel/plugin-transform-runtime@7.1.0
@babel/preset-env@7.1.0
@babel/preset-react@7.0.0
@babel/preset-typescript@7.1.0
@babel/runtime@7.1.2
concurrently@4.0.1
jest
babel-jest@23.6.0
jest@23.6.0
ts-jest@23.10.4
typescript@3.1.6
webpack
webpack@4.24.0
webpack-command@0.4.2
Fixes Russian localization by @odysseus1973 in PR #1377
Fixed

Fixes #1397. Patched activities without from field, in PR #1405
Fixes #1237. Added new sample called migration, by @corinagum in PR #1398
Fixes #1332. Updated sample names and add table to README, by @corinagum in PR #1435
Fixes #1125. Added error handling for Adaptive Card JSON render, by @corinagum in PR #1395
Build: Webpack watch mode now emits non-minified code for shorter dev RTT, in #1331
Samples

Backchannel: Inject custom data into every POST_ACTIVITY, in #1331
UI: Minimizable Web Chat, in #1290
Others: Using Web Chat v3, in #1287
Speech: Cognitive Services Speech to Text and Text to Speech (both subscription key and authorization token flow)
Speech: Cognitive Services Speech to Text using lexical result (text normalization)
[4.1.0] - 2018-10-31

Added

Initial release of Web Chat v4
