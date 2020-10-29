---
title: Creating a custom badge for your OAuth App
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

By default, a new OAuth App will have an automatically generated [identicon](https://github.com/blog/1586-identicons). 默认肖像徽章如下所示：

![默认肖像](/assets/images/identicon.png)

After you create an OAuth App, you can customize the app's badge by uploading a logo and selecting a background color. 徽章是圆形徽章内的方形徽标图像。 You can choose a background color for the badge, which can be used to visually distinguish your app.

徽标应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获得最佳渲染效果，建议图像大小至少为 200px x 200px。 {% if currentVersion == "free-pro-team@latest" %}See "[Tips for logo and badge images](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)" for more guidance on customizing badges.{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

您可以导航至 https://github.com/marketplace/manage，为拥有已批准 Marketplace 列表的 GitHub 应用程序更改自定义徽章。

{% endif %}

要创建自定义徽章：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
1. In "Application logo", drag-and-drop an image from a local folder or click **Upload new logo** to select an image from your computer. ![上传徽标](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 裁剪图片。 When you're done, click **Set new application logo**. ![裁剪和设置徽标](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. 在“Badge background color（徽章背景颜色）”中，输入徽章背景颜色的[十六进制颜色代码](http://www.color-hex.com/)。
{% if currentVersion == "free-pro-team@latest" %}**Note:** The "Badge background color" input field will be visible after an application logo has been uploaded.{% endif %}
![徽章背景颜色](/assets/images/oauth-apps/oauth_apps_badge_background_color.png)
{% data reusables.user-settings.update_oauth_app %}

{% if currentVersion == "free-pro-team@latest" %}

### 后续步骤

有关为此应用程序创建 Marketplace 列表的更多信息，请参阅“[GitHub Marketplace 上的列表](/marketplace/listing-on-github-marketplace/)”。

{% endif %}
