---
title: 为 GitHub 应用程序创建自定义徽章
intro: '{% data reusables.shortdesc.creating_custom_badges_github_apps %}'
redirect_from:
  - /apps/building-github-apps/creating-custom-badges-for-github-apps
  - /developers/apps/creating-a-custom-badge-for-your-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
shortTitle: 自定义徽章
---

默认情况下，新的 GitHub 应用程序拥有一个自动生成的[默认肖像](https://github.com/blog/1586-identicons)。 默认肖像徽章如下所示：

![默认肖像](/assets/images/identicon.png)

创建 GitHub 应用程序后，可以通过上传徽标和选择背景颜色自定义应用程序的徽章。 徽章是圆形徽章内的方形徽标图像。 您可以为徽章选择背景颜色，以便从视觉上与应用程序区分开。

徽标应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获得最佳渲染效果，建议图像大小至少为 200px x 200px。 {% ifversion fpt or ghec %}请参阅“[徽标和徽章图像提示](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)”，了解更详细的自定义徽章指南。{% endif %}

{% ifversion fpt or ghec %}

您可以导航至 https://github.com/marketplace/manage，为拥有已批准 Marketplace 列表的 GitHub 应用程序更改自定义徽章。

{% endif %}

要创建自定义徽章：

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
{% data reusables.user-settings.modify_github_app %}
5. 在“Display information（显示信息）”中，从本地文件夹拖放图像，或单击 **Upload a logo（上传徽标）**，从计算机选择图像。 ![上传徽标](/assets/images/github-apps/github_apps_upload_logo.png)
6. 裁剪图片。 完成后，单击 **Set new avatar（设置新头像）**。 ![裁剪和设置徽标 ](/assets/images/github-apps/github_apps_crop_and_set_avatar.png)
7. 在“Badge background color（徽章背景颜色）”中，输入徽章背景颜色的[十六进制颜色代码](http://www.color-hex.com/)。 {% ifversion fpt or ghec %}**注：**只有在上传应用程序徽标后才会显示“徽章背景颜色”输入字段。{% endif %} ![徽章背景颜色](/assets/images/github-apps/github_apps_badge_background_color.png)

{% ifversion fpt or ghec %}

## 后续步骤

有关为此应用程序创建 Marketplace 列表的更多信息，请参阅“[GitHub Marketplace 上的列表](/marketplace/listing-on-github-marketplace/)”。

{% endif %}
