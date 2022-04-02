---
titleAppVeyor
AppVeyor
Sign in
tabs
Current build History
LOG
Prepare v0.110.1 release
278
a year ago by musa Ibrahim
master 76b83136
a year ago in 1 min 6 sec
Environment: ATOM_CHANNEL=beta
1 min 6 sec
Jobs Console Messages Tests Artifacts
Build started
git clone -q --depth=10 --branch=master https://github.com/atom/tabs.git C:\projects\tabs
git checkout -qf 76b8313602f43be9ec543b7180aa16a1119e75e5
Running Install scripts
Install-Product node 4
Uninstalling node 8.12.0 (x86)...
Installing node 4.9.1 (x86)...
iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/atom/ci/master/build-package.ps1'))
Downloading latest Atom release...
Downloading atom.zip (187,950,794 bytes)...1%
Downloading atom.zip (187,950,794 bytes)...10%
Downloading atom.zip (187,950,794 bytes)...20%
Downloading atom.zip (187,950,794 bytes)...30%
Downloading atom.zip (187,950,794 bytes)...40%
Downloading atom.zip (187,950,794 bytes)...50%
Downloading atom.zip (187,950,794 bytes)...60%
Downloading atom.zip (187,950,794 bytes)...70%
Downloading atom.zip (187,950,794 bytes)...80%
Downloading atom.zip (187,950,794 bytes)...90%
Downloading atom.zip (187,950,794 bytes)...100%
Using Atom version: 
Atom    : 1.54.0-beta0
Electron: 6.1.12
Chrome  : 76.0.3809.146
Node    : 12.4.0
Using APM version: 
apm  2.5.2
npm  6.14.8
node 12.4.0 ia32
atom 1.54.0-beta0
python 2.7.15
git 2.19.1.windows.1
visual studio 2013
Downloading package dependencies...
Installing locked modules done
Linting package...
  Γ£ô lib\tab-bar-view.coffee
  Γ£ô lib\tab-view.coffee
Γ£ô Ok! ┬╗ 0 errors and 0 warnings in 2 files
Linting package specs...
  Γ£ô spec\event-helpers.coffee
  Γ£ô spec\tabs-spec.coffee
Γ£ô Ok! ┬╗ 0 errors and 0 warnings in 2 files
Running specs...
[2540:1112/112353.637:INFO:CONSOLE(134)] "document.registerElement is deprecated and will be removed in M80, around February 2020. Please use window.customElements.define instead. See https://www.chromestatus.com/features/4642138092470272 and https://developers.google.com/web/updates/2019/07/web-components-time-to-upgrade for more details.", source: C:\projects\tabs\Atom Beta\resources\app.asar\src\styles-element.js (134)
....................................................................................................................................
Finished in 9.994 seconds
132 tests, 475 assertions, 0 failures, 0 skipped
Build success
 Your account and profile on GitHub
shortTitle: Account and profile
intro: 'Make {% data variables.product.product_name %} work best for you by adjusting the settings for your user account, personalizing your profile page, and managing the notifications you receive for activity on {% data variables.product.prodname_dotcom %}.'
introLinks:
  quickstart: /get-started/onboarding/getting-started-with-your-github-account
featuredLinks:
  guides:
    - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
    - '{% ifversion ghae %}/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard{% endif %}'
    - /account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
    - '{% ifversion ghae %}/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile{% endif %}'
    - /account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/about-notifications
  popular:
    - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-your-theme-settings
    - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/setting-your-commit-email-address
    - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
    - /account-and-profile/managing-subscriptions-and-notifications-on-github/setting-up-notifications/configuring-notifications
  guideCards:
    - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile
    - /account-and-profile/managing-subscriptions-and-notifications-on-github/viewing-and-triaging-notifications/managing-notifications-from-your-inbox
    - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
    - '{% ifversion ghes or ghae %}/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-the-default-branch-name-for-your-repositories{% endif %}'
changelog:
  label: 'profiles, github-themes, notifications'
  versions:
    fpt: '*'
    ghec: '*'
layout: product-landing
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - Profiles
  - Notifications
children:
  - /setting-up-and-managing-your-github-user-account
  - /setting-up-and-managing-your-github-profile
  - /managing-subscriptions-and-notifications-on-github
---

