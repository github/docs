---
title: 为 OAuth 应用程序创建自定义徽章
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

默认情况下，新的 OAuth 应用程序拥有一个自动生成的[默认肖像](https://github.com/blog/1586-identicons)。 默认肖像徽章如下所示：

![默认肖像](/assets/images/identicon.png)

创建 OAuth 应用程序后，可以通过上传徽标和选择背景颜色自定义应用程序的徽章。 徽章是圆形徽章内的方形徽标图像。 您可以为徽章选择背景颜色，以便从视觉上区分您的应用程序。

徽标应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获得最佳渲染效果，建议图像大小至少为 200px x 200px。 {% if currentVersion == "free-pro-team@latest" %}请参阅“[徽标和徽章图像提示](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)”，了解更详细的自定义徽章指南。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

您可以导航至 https://github.com/marketplace/manage，为拥有已批准 Marketplace 列表的 GitHub 应用程序更改自定义徽章。

{% endif %}

要创建自定义徽章：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
{% data reusables.user-settings.modify_oauth_app %}
1. 在“Application logo（应用程序徽标）”中，从本地文件夹拖放图像，或单击 **Upload new logo（上传新徽标）**，从计算机选择图像。 ![上传徽标](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 裁剪图片。 完成后，单击 **Set new application logo（设置新应用程序徽标）**。 ![裁剪和设置徽标](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. 在“Badge background color（徽章背景颜色）”中，输入徽章背景颜色的[十六进制颜色代码](http://www.color-hex.com/)。
{% if currentVersion == "free-pro-team@latest" %}**注：**“徽章背景颜色”输入字段将在上传应用程序徽标后显示。{% endif %}
![徽章背景颜色](/assets/images/oauth-apps/oauth_apps_badge_background_color.png)
{% data reusables.user-settings.update_oauth_app %}

{% if currentVersion == "free-pro-team@latest" %}

### 后续步骤

有关为此应用程序创建 Marketplace 列表的更多信息，请参阅“[GitHub Marketplace 上的列表](/marketplace/listing-on-github-marketplace/)”。

{% endif %}
