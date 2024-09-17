---
title: Creating a custom badge for your OAuth app
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
  - /developers/apps/building-oauth-apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - OAuth apps
shortTitle: Create custom badges
---
By default, a new {% data variables.product.prodname_oauth_app %} will have an automatically generated [identicon](https://github.com/blog/1586-identicons).
An identicon badge looks something like this:

![Screenshot of an identicon, which consists of white pixels in a random pattern on a circular yellow background.](/assets/images/help/apps/identicon.png)

After you create an {% data variables.product.prodname_oauth_app %}, you can customize the app's badge by uploading a logo and selecting a background color. A badge is a square logo image inside of a circular badge. You can choose a background color for the badge, which can be used to visually distinguish your app.

Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image size of at least 200px x 200px. {% ifversion fpt or ghec %}See "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace/writing-a-listing-description-for-your-app#guidelines-for-logos)" for more guidance on customizing badges.{% endif %}

{% ifversion fpt or ghec %}

You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.

{% endif %}

To create a custom badge:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
1. In "Application logo", drag-and-drop an image from a local folder or click **Upload new logo** to select an image from your computer.
1. Crop your picture. When you're done, click **Set new application logo**.
1. In "Badge background color", type the [hexadecimal color code](http://www.color-hex.com/) of the background color for your badge. {% ifversion fpt or ghec %}**Note:** The "Badge background color" input field will be visible after an application logo has been uploaded.{% endif %}
{% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## Next steps

For more information about creating a Marketplace listing for this app, see "[AUTOTITLE](/apps/publishing-apps-to-github-marketplace/listing-an-app-on-github-marketplace)".

{% endif %}
