---
title: Making a GitHub App public or private
intro: '{% data reusables.shortdesc.making-a-github-app-public-or-private %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-github-apps/about-installation-options-for-github-apps/
  - /apps/building-github-apps/installation-options-for-github-apps/
  - /apps/building-integrations/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/changing-a-github-app-s-installation-option/
  - /apps/managing-github-apps/making-a-github-app-public-or-private
  - /developers/apps/making-a-github-app-public-or-private
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Manage app visibility
---
For authentication information, see "[Authenticating with GitHub Apps](/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation)."

## تدفق التثبيت العام
wa
تحتوي عمليات التثبيت العامة على صفحة مقصودة لتمكين الأشخاص الآخرين إلى جانب مالك التطبيق من تثبيت التطبيق في مستودعاتهم. يتم توفير هذا الرابط في حقل "الرابط العام" عند إعداد تطبيق GitHub. لمزيد من المعلومات ، راجع " [تثبيت تطبيقات GitHub] (/ apps / install-github-apps /) hats ."

## Private installation flow

Private installation flows allow only the owner of a GitHub App to install it. Limited information about the GitHub App will still exist on a public page, but the **Install** button will only be available to organization administrators or the user account if the GitHub App is owned by an individual account. {% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}Private {% else %}Private (also known as internal){% endif %} GitHub Apps can only be installed on the user or organization account of the owner.

## Changing who can install your GitHub App

To change who can install the GitHub App:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
3. Select the GitHub App whose installation option you want to change.
![App selection](/assets/images/github-apps/github_apps_select-app.png)
{% data reusables.user-settings.github_apps_advanced %}
5. Depending on the installation option of your GitHub App, click either **Make public** or **Make {% ifversion fpt or ghes > 3.1 or ghae-next or ghec %}private{% else %}internal{% endif %}**.
![Button to change the installation option of your GitHub App](/assets/images/github-apps/github_apps_make_public.png)
6. Depending on the installation option of your GitHub App, click either **Yes, make this GitHub App public** or **Yes, make this GitHub App {% ifversion fpt or ghes < 3.2 or ghec %}internal{% else %}private{% endif %}**.
![Button to confirm the change of your installation option](/assets/images/github-apps/github_apps_confirm_installation_option.png)
