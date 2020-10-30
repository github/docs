---
title: 个性化您的个人资料
intro: '您可以在个人资料中设置头像和添加个人简历，与其他 {% data variables.product.product_name %} 用户共享您自己的信息。'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### 更改头像

您的头像可帮助在 {% data variables.product.product_name %} 的拉取请求、评论、参与页面及图形中识别您。

在注册帐户时，{% data variables.product.product_name %} 会提供一个随机生成的“默认肖像”。 [默认肖像](https://github.com/blog/1586-identicons)从用户 ID 的哈希生成，因此无法控制其颜色或图案。 您可以将默认肖像替换为能代表您的图片。

{% tip %}

**提示**：头像应为 1 MB 以下的 PNG、JPG 或 GIF 文件。 为获取质量最佳的渲染，建议图像的像素保持在大约 500 x 500 像素。

{% endtip %}

#### 设置头像

{% data reusables.user_settings.access_settings %}
2. 在 **Profile Picture（头像）**下，单击 {% octicon "pencil" aria-label="The edit icon" %} **Edit（编辑）**。 ![编辑头像](/assets/images/help/profile/edit-profile-photo.png)
3. 单击 **Upload a photo...（上传图片...）**。 ![更新头像](/assets/images/help/profile/edit-profile-picture-options.png)
3. 裁剪图片。 完成后，单击 **Set new profile picture（设置新头像）**。 ![裁剪上传的照片](/assets/images/help/profile/avatar_crop_and_save.png)

#### 将头像重置为默认肖像

{% data reusables.user_settings.access_settings %}
2. 在 **Profile Picture（头像）**下，单击 {% octicon "pencil" aria-label="The edit icon" %} **Edit（编辑）**。 ![编辑头像](/assets/images/help/profile/edit-profile-photo.png)
3. 要还原为默认肖像，请单击 **Remove photo（删除照片）**。 如果您的电子邮件地址与[个人全球统一标识](https://en.gravatar.com/)关联，则无法还原到默认肖像。 此时请单击 **Revert to Gravatar（还原到个人全球统一标识）**。 ![更新头像](/assets/images/help/profile/edit-profile-picture-options.png)

### 更改个人资料名称

您可以更改显示在个人资料中的名称。 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.17" %}此名称也可能显示在您对组织拥有的私有仓库所发表的评论旁边。 更多信息请参阅“[管理组织中成员名称的显示](/articles/managing-the-display-of-member-names-in-your-organization)”。{% endif %}

{% data reusables.user_settings.access_settings %}
2. 在“Name（名称）”下，键入要显示在个人资料中的名称。 ![个人资料设置中的名称字段](/assets/images/help/profile/name-field.png)

### 在个人资料中添加个人简历

在个人资料中添加个人简历，与其他 {% data variables.product.product_name %} 用户共享您自己的信息。 借助 [@提及](/articles/basic-writing-and-formatting-syntax)和表情符号，可以包含您当前或以前的工作经历、工作类型甚至您喜欢的咖啡种类。

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

For a longer-form and more prominent way of displaying customized information about yourself, you can also use a profile README. For more information on the profile README, see "[Managing your profile README](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)."

{% endif %}

{% note %}

**注：** 如果为个人资料启用了活动概述部分，并且您在个人资料的个人简历中 @提及您所属的组织，则该组织会先出现在活动概述中。 更多信息请参阅“[在您的个人资料中显示活动概述](/articles/showing-an-overview-of-your-activity-on-your-profile)”。

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. 在 **Bio（个人简历）**下，添加您要显示在个人资料中的内容。 个人资料字段限于 160 个字符。 ![更新个人资料中的个人简历](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **提示：**当您 @提及组织时，只有您所属的组织才会自动填写。 您也可 @提及您不是其成员的组织，例如前雇主，但不会自动填写该组织名称。

  {% endtip %}

3. 单击 **Update profile（更新个人资料）**。 ![更新个人资料按钮](/assets/images/help/profile/update-profile-button.png)

### 设置状态

您可以设置状态以显示您当前在 {% data variables.product.product_name %} 上的可用性。 您的状态将会显示：
- 在您的 {% data variables.product.product_name %} 个人资料页面上。
- 当有人在 {% data variables.product.product_name %} 上将鼠标放在您的用户名或头像上时。
- 在您属于其成员的团队页面上时。 更多信息请参阅“[关于团队](/articles/about-teams/#team-pages)”。
- 在您属于其成员的组织的组织仪表板上。 更多信息请参阅“[关于组织仪表板](/articles/about-your-organization-dashboard/)”。

在设置状态时，您也可以让人们知道您在 {% data variables.product.product_name %} 上的可用性有限。

![@提及的用户名在用户名旁边显示“忙碌”注释](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![申请的审查者在用户名旁边显示“忙碌”注释](/assets/images/help/profile/request-a-review-limited-availability-status.png)

如果选择“Busy（忙碌）”选项，当人们 @提及您的用户名、向您分配议题或拉取请求或者申请您进行拉取请求审查时，您的用户名旁边将会出现一条表示您在忙碌的注释。

1. 在 {% data variables.product.product_name %} 的右上角，单击您的头像，然后单击 **Set your status（设置状态）**，或者，如果您已设置状态，则单击当前状态。 ![个人资料中用于设置状态的按钮](/assets/images/help/profile/set-status-on-profile.png)
2. 要添加自定义文本到状态，请单击文本字段，然后输入状态消息。 ![用于输入状态消息的字段](/assets/images/help/profile/type-a-status-message.png)
3. （可选）要设置表情符号状态，请单击笑脸图标并从列表中选择表情符号。 ![用于选择表情符号状态的按钮](/assets/images/help/profile/select-emoji-status.png)
4. （可选）如果想表示您的可用性受限，请选择“Busy（忙碌）”。 ![在编辑状态选项中选择的忙碌选项](/assets/images/help/profile/limited-availability-status.png)
5. 使用 **Clear status（清除状态）**下拉菜单，选择状态的到期时间。 如果不选择状态到期时间，您的状态将保持到您清除或编辑状态为止。 ![用于选择状态到期时间的下拉菜单](/assets/images/help/profile/status-expiration.png)
6. 使用下拉菜单，单击您要向其显示状态的组织。 如果不选择组织，您的状态将是公共的。 ![用于选择您的状态可见者的下拉菜单](/assets/images/help/profile/status-visibility.png)
7. 单击 **Set status（设置状态）**。 ![用于设置状态的按钮](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### 在个人资料中显示徽章

当您参与某些计划时， {% data variables.product.prodname_dotcom %} 会自动在您的个人资料中显示徽章。

| 徽章                                                              | 计划                                                                | 描述                                                                                                                                                                                                                                                                 |
| --------------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {% octicon "north-star" aria-label="The North Star icon" %}     | **{% data variables.product.prodname_arctic_vault %} 贡献者** | 如果您在存档于 2020 Arctic Vault 计划的仓库默认分支上编写了任何提交，您的个人资料上会获得一个 {% data variables.product.prodname_arctic_vault %} 贡献者徽章。 有关该计划的更多信息，请参阅 [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com)。                                  |
| {% octicon "cpu" aria-label="The Developer Program icon" %}     | **开发者计划成员**                                                       | 如果您是 GitHub 开发者计划的注册成员，使用 GitHub API 构建应用程序后，您的个人资料上将获得开发者计划成员徽章。 有关 GitHub 开发者计划的更多信息，请参阅 [GitHub 开发者](/program/)。                                                                                                                                                |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **GitHub 赞助者**                                                    | 如果您通过 {% data variables.product.prodname_sponsors %} 赞助了开源贡献者，您的个人资料中将获得一个 GitHub Sponge 徽章。 更多信息请参阅“[赞助开源贡献者](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)”。                                       |
| {% octicon "star-fill" aria-label="The star icon" %}            | **Pro**                                                           | 如果您使用 {% data variables.product.prodname_pro %}，您的个人资料中将获得一个 PRO 徽章。 有关 {% data variables.product.prodname_pro %} 的更多信息，请参阅“[{% data variables.product.prodname_dotcom %} 的产品](/github/getting-started-with-github/githubs-products#github-pro)”。 |

### 在个人资料中禁用徽章

您可以对您参与的 {% data variables.product.prodname_dotcom %} 计划禁用某些徽章，包括 PRO 和 {% data variables.product.prodname_arctic_vault %} 徽章。

{% data reusables.user_settings.access_settings %}
2. 在“Profile settings（个人资料设置）”下，取消选择您想要禁用的徽章。 ![不再在个人资料中显示徽章的复选框](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. 单击 **Update preferences（更新首选项）**。

{% endif %}

### 延伸阅读

- "[关于个人资料](/articles/about-your-profile)"
