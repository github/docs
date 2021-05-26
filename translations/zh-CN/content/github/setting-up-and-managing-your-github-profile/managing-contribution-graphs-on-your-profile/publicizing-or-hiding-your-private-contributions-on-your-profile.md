---
title: 在个人资料中公开或隐藏您的私人贡献
intro: '您的 {% data variables.product.product_name %} 个人资料显示过去一年中您的仓库贡献图。 除了显示公共仓库中的活动之外，您还可以选择匿名显示{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}私有和内部{% else %}私有{% endif %}仓库中的活动{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}{% endif %}。'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---
如果公开您的私有贡献，对您处理的私有仓库没有访问权限的人员将无法查看您的私有贡献详情， 而只能看到您在指定日期的贡献数。 您的公共贡献会包含详细信息。 更多信息请参阅“[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)”。

### 更改私有贡献的可见性

默认情况下，访问者在您的个人资料中只能查看公共贡献。

{% data reusables.profile.access_profile %}
2. 在个人资料中公开或隐藏您的私有贡献：
    - 要公开您的私有贡献，在贡献图上方，使用 **Contribution settings（贡献设置）**下拉菜单，然后选择 **Private contributions（私有贡献）**。 访问者将会看到您的私有贡献数，但没有更多详细信息。 ![从贡献设置下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-on.png)
    - 要隐藏您的私有贡献，在贡献图上方，使用 **Contribution settings（贡献设置）**下拉菜单，然后取消选择 **Private contributions（私有贡献）**。访问者只会看到您的公共贡献。 ![从贡献设置下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-off.png)

### 延伸阅读

- "[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)"
- “[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
