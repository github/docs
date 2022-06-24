---
title: 在您的个人资料中显示您的私人贡献和成就
intro: '您的 {% data variables.product.product_name %} 个人资料显示过去一年中您的仓库贡献图。 除了公共存储库的活动外，您还可以选择显示 {% ifversion fpt or ghes or ghec %}私人和内部{% else %}私人{% endif %} 仓库中的匿名活动{% ifversion fpt or ghes or ghec %}{% endif %}。'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: 私人贡献和成就
---

如果公开您的私有贡献，对您处理的私有仓库没有访问权限的人员将无法查看您的私有贡献详情， 而只能看到您在指定日期的贡献数。 您的公共贡献会包含详细信息。 更多信息请参阅“[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)”。

{% note %}

**注意：** {% ifversion fpt or ghes or ghec %}在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} 上，您的个人资料上的公共贡献{% ifversion fpt or ghec %}对世界上能访问 {% data variables.product.prodname_dotcom_the_website %} 的任何人{% elsif ghes %}仅对其他 {% data variables.product.product_location%} 用户{% endif %}可见。{% elsif ghae %}在 {% data variables.product.prodname_ghe_managed %} 上，只有您企业的其他成员才可看到您的个人资料上的贡献。{% endif %}

{% endnote %}

## 更改私有贡献的可见性

{% data reusables.profile.access_profile %}
1. 在个人资料中公开或隐藏您的私有贡献：
    - 要公开您的私有贡献，在贡献图上方，使用 **Contribution settings（贡献设置）**下拉菜单，然后选择 **Private contributions（私有贡献）**。 访问者将会看到您的私有贡献数，但没有更多详细信息。 ![从贡献设置下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-on.png)
    - 要隐藏您的私有贡献，在贡献图上方，使用 **Contribution settings（贡献设置）**下拉菜单，然后取消选择 **Private contributions（私有贡献）**。访问者只会看到您的公共贡献。 ![从贡献设置下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-off.png)

## 更改成就的可见性

{% data reusables.user-settings.access_settings %}
1. 在个人资料上显示或隐藏成就：
    - 要在个人主页上显示成就，请导航到 **Profile settings（个人资料设置）**，然后选中 **Show Achievements on my profile（在我的个人资料中显示成就）**旁边的复选框。 ![使访问者能够从个人资料设置查看成就](/assets/images/achievements-profile-settings-off.png)
    - 要从您的个人资料中隐藏成就，请导航到 **Profile settings（个人资料设置）**，然后取消选中 **Show Achievements on my profile（在我的个人资料上显示成就）**旁边的复选框。 ![在个人资料设置中对访问者隐藏成就](/assets/images/achievements-profile-settings-on.png)

## 延伸阅读

- "[在个人资料页面中查看贡献](/articles/viewing-contributions-on-your-profile-page)"
- “[为什么我的贡献没有在我的个人资料中显示？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
