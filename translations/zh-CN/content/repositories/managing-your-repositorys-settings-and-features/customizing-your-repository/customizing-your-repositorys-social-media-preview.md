---
title: 自定义仓库的社交媒体预览
intro: 您可以自定义仓库在社交媒体平台上的图像显示。
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/customizing-your-repositorys-social-media-preview
  - /github/administering-a-repository/managing-repository-settings/customizing-your-repositorys-social-media-preview
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Social media preview
ms.openlocfilehash: a778b0fd95533a15806cc0034769fbf0feb3b217
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145129348'
---
在添加图像之前，请展开仓库链接以显示关于仓库和所有者头像的基本信息。 为仓库添加图像有助于在各种社交平台上识别您的项目。

## 添加图像以自定义存储库的社交媒体预览

{% ifversion not ghae %}您可以将映像上传到私有仓库，但您的映像只能从公共仓库分享。{% endif %}

{% tip %}

**提示：** 图像应为小于 1 MB 的 PNG、JPG 或 GIF 文件。 为获取质量最佳的渲染，建议图像的像素保持在 640 x 320 像素。

{% endtip %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. 在“社交预览”下，单击“编辑”
    - 若要添加新图像，请单击“上传图像…”。
    - 若要删除图像，请单击“删除图像”

    ![社交预览下拉菜单](/assets/images/help/repository/social-preview.png)

## 关于透明度

我们支持具有透明度的 PNG 图像。 许多通信平台支持深色模式，因此使用透明的社交媒体预览可能会有所帮助。 下面的透明图像可在深色背景上使用；但并非始终可行。 

使用具有透明度的图像时，需记住它在不同颜色背景或不支持透明度的平台上的外观。

{% tip %}

**提示：** 如果不确定，建议使用具有纯色背景的图像。
{% endtip %}

![社交媒体预览透明度](/assets/images/help/repository/social-preview-transparency.png)
