---
title: Creating a custom badge for your OAuth App
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---

By default, a new OAuth App will have an automatically generated [identicon](https://github.com/blog/1586-identicons). An identicon badge looks something like this:

![Identicon](/assets/images/identicon.png)

After you create an OAuth App, you can customize the app's badge by uploading a logo and selecting a background color. A badge is a square logo image inside of a circular badge. You can choose a background color for the badge, which can be used to visually distinguish your app.

Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image size of at least 200px x 200px. {% if currentVersion == "free-pro-team@latest" %}See "[Tips for logo and badge images](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" for more guidance on customizing badges.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.

{% endif %}

To create a custom badge:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
1. In "Application logo", drag-and-drop an image from a local folder or click **Upload new logo** to select an image from your computer. ![Upload a logo](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. Schneiden Sie das Bild zu. When you're done, click **Set new application logo**. ![Crop and set logo](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. In "Badge background color", type the [hexadecimal color code](http://www.color-hex.com/) of the background color for your badge. {% if currentVersion == "free-pro-team@latest" %}**Note:** The "Badge background color" input field will be visible after an application logo has been uploaded.{% endif %} ![Badge background color](/assets/images/oauth-apps/oauth_apps_badge_background_color.png)
{% data reusables.user-settings.update_oauth_app %}

{% if currentVersion == "free-pro-team@latest" %}

### Nächste Schritte:

For more information about creating a Marketplace listing for this app, see "[Listing on GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
