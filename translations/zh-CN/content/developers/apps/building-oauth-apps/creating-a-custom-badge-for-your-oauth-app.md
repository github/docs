---
title: 为 OAuth 应用程序创建自定义徽章
intro: '{% data reusables.shortdesc.creating_custom_badges_oauth_apps %}'
redirect_from:
  - /apps/building-oauth-apps/creating-custom-badges-for-oauth-apps
  - /developers/apps/creating-a-custom-badge-for-your-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
shortTitle: Create custom badges
ms.openlocfilehash: b9f5b8048b14c11e7eb0c43a88a18b3a63ca5f34
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085050'
---
默认情况下，新的 OAuth 应用将具有自动生成的[默认肖像](https://github.com/blog/1586-identicons)。
默认肖像徽章如下所示：

![默认肖像](/assets/images/identicon.png)

创建 OAuth 应用程序后，可以通过上传徽标和选择背景颜色自定义应用程序的徽章。 徽章是圆形徽章内的方形徽标图像。 您可以为徽章选择背景颜色，以便从视觉上区分您的应用程序。

徽标应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获得最佳渲染效果，建议图像大小至少为 200px x 200px。 {% ifversion fpt or ghec %}有关自定义徽章的详细指南，请参阅“[徽标和徽章图像的提示](/marketplace/listing-on-github-marketplace/writing-github-marketplace-listing-descriptions/#guidelines-for-logos)”。{% endif %}

{% ifversion fpt or ghec %}

可以通过导航到 https://github.com/marketplace/manage 来更改已具有已批准的市场列表的 GitHub 应用的自定义徽章。

{% endif %}

要创建自定义徽章：

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %} {% data reusables.user-settings.modify_oauth_app %}
1. 在“应用程序徽标”中，从本地文件夹拖放图像，或单击“上传新徽标”，从计算机选择图像。
![上传徽标](/assets/images/oauth-apps/oauth_apps_upload_logo.png)
6. 裁剪图片。 完成后，单击“设置新应用程序徽标”。
![裁剪和设置徽标](/assets/images/oauth-apps/oauth_apps_crop_and_set_logo.png)
7. 在“徽章背景色”中，键入徽章背景色的[十六进制颜色代码](http://www.color-hex.com/)。 {% ifversion fpt or ghec %}**注意：** “徽章背景色”输入字段将在上传应用程序徽标后可见。{% endif %} ![徽章背景色](/assets/images/oauth-apps/oauth_apps_badge_background_color.png) {% data reusables.user-settings.update_oauth_app %}

{% ifversion fpt or ghec %}

## 后续步骤

有关为此应用创建市场列表的详细信息，请参阅“[GitHub 市场一览](/marketplace/listing-on-github-marketplace/)”。

{% endif %}
