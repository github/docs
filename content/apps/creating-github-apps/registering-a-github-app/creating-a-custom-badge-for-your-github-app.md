---
title: Creating a custom badge for your GitHub App
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
  - /developers/apps/building-github-apps/creating-a-custom-badge-for-your-github-app
  - /apps/creating-github-apps/creating-github-apps/creating-a-custom-badge-for-your-github-app
  - /apps/creating-github-apps/setting-up-a-github-app/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: Custom badge
---

## About badges

Every {% data variables.product.prodname_github_app %} has a badge. A badge is a square image inside a circular background.

By default, a new GitHub App will use an automatically generated identicon as a badge. An identicon badge looks something like this:

![Screenshot of an identicon, which consists of white pixels in a random pattern on a circular yellow background.](/assets/images/help/apps/identicon.png)

After you register a GitHub App, you can customize your app's badge by uploading a logo and selecting a background color. Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image dimension of 200 pixels by 200 pixels.

{% ifversion fpt or ghec %}

For more information about badges for {% data variables.product.prodname_github_apps %} in {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app#guidelines-for-logos)." You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.

{% endif %}

## Creating a custom badge

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
1. Under "Display information", drag and drop an image from a local folder or click **Upload a logo** to select an image from your computer.
1. Optionally, crop your image.
1. Click **Set new avatar**.
1. Under "Badge background color", type the hexadecimal color code of the background color for your badge.

{% ifversion fpt or ghec %}
   {% note %}

   **Note:** The "Badge background color" input field will only appear after you upload a logo.

   {% endnote %}
{% endif %}

{% ifversion fpt or ghec %}

## Next steps

For more information about listing your {% data variables.product.prodname_github_app %} in {% data variables.product.prodname_marketplace %}, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace)."

{% endif %}
