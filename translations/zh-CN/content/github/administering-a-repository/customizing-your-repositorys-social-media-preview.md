---
title: 自定义仓库的社交媒体预览
intro: 您可以自定义仓库在社交媒体平台上的图像显示。
redirect_from:
  - /articles/customizing-your-repositorys-social-media-preview
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - 仓库
---

在添加图像之前，请展开仓库链接以显示关于仓库和所有者头像的基本信息。 为仓库添加图像有助于在各种社交平台上识别您的项目。

{% if currentversion != "github-ae@latest" %}您可以将映像上传到私有仓库，但您的映像只能从公共仓库分享。{% endif %}

{% tip %}
提示：您的图像应为大小在 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获取质量最佳的渲染，建议图像的像素保持在 640 x 320 像素。
{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. 在“Social preview（社交预览）”下，单击 **Edit（编辑）**
    - 要添加新图像，请单击 **Upload an image...（上传图像）**
    - 要删除图像，请单击 **Remove image（删除图像）**

    ![社交预览下拉菜单](/assets/images/help/repository/social-preview.png)
