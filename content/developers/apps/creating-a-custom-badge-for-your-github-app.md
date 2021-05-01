---
title: Creating a custom badge for your GitHub App
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

By default, a new GitHub App will have an automatically generated [identicon](https://github.com/blog/1586-identicons).
An identicon badge looks something like this:

![Identicon](/assets/images/identicon.png)

After you create a GitHub App, you can customize your app's badge by uploading a logo and selecting a background color. A badge is a square logo image inside of a circular badge. You can choose a background color for the badge, which can visually distinguish your app.

Your logo should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend an image size of at least 200px x 200px. {% if currentVersion == "free-pro-team@latest" %}See "[Tips for logo and badge images](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" for more guidance on customizing badges.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

You can change a custom badge for a GitHub App that already has an approved Marketplace listing by navigating to https://github.com/marketplace/manage.

{% endif %}

To create a custom badge:

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. In "Display information", drag-and-drop an image from a local folder or click **Upload a logo** to select an image from your computer.
![Upload a logo](/assets/images/github-apps/github_apps_upload_logo.png)
6. Crop your picture. When you're done, click **Set new avatar**.
![Crop and set logo ](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. In "Badge background color", type the [hexadecimal color code](http://www.color-hex.com/) of the background color for your badge. {% if currentVersion == "free-pro-team@latest" %}**Note:** The "Badge background color" input field will only appear after you upload an application logo.{% endif %}
![Badge background color](/assets/images/github-apps/github_apps_badge_background_color.png)

{% if currentVersion == "free-pro-team@latest" %}

### Next steps

For more information about creating a Marketplace listing for this app, see "[Listing on GitHub Marketplace](/marketplace/listing-on-github-marketplace/)".

{% endif %}
