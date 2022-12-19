---
title: 在个人资料上显示你的私有贡献和成就
intro: '您的 {% data variables.product.product_name %} 个人资料显示过去一年中您的仓库贡献图。 除公共存储库{% endif %}中的活动外，还可选择显示{% ifversion fpt or ghes or ghec %}专用和内部{% else %}专用{% endif %}存储库{% ifversion fpt or ghes or ghec %}中的匿名活动。'
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
shortTitle: Private contributions and achievements
ms.openlocfilehash: b40e3835bf1548ff4ced75d1207de9a5b493dc90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079534'
---
如果公开您的私有贡献，对您处理的私有仓库没有访问权限的人员将无法查看您的私有贡献详情， 而只能看到您在指定日期的贡献数。 您的公共贡献会包含详细信息。 有关详细信息，请参阅“[查看个人资料页面上的贡献](/articles/viewing-contributions-on-your-profile-page)”。

{% note %}

**注意：** {% ifversion fpt or ghes or ghec %}在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} 上，你的个人资料上的公共贡献{% ifversion fpt or ghec %}对世界上能访问 {% data variables.product.prodname_dotcom_the_website %} 的任何人{% elsif ghes %}仅对其他 {% data variables.product.product_location%} 用户{% endif %}可见。{% elsif ghae %}在 {% data variables.product.prodname_ghe_managed %} 上，只有你企业的其他成员才可看到你的个人资料上的贡献。{% endif %}

{% endnote %}

## 更改私有贡献的可见性

{% data reusables.profile.access_profile %}
1. 在个人资料中公开或隐藏您的私有贡献：
    - 要公开你的私有贡献，在贡献图上方，使用“贡献设置”下拉菜单，然后选择“私有贡献” 。 访问者将会看到您的私有贡献数，但没有更多详细信息。
  ![从“贡献设置”下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-on.png)
    - 要隐藏你的私有贡献，在贡献图上方，使用“贡献设置”下拉菜单，然后取消选择“私有贡献” 。 访问者将只看到你的公共贡献。
   ![从“贡献设置”下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-off.png)

## 更改成就的可见性

{% data reusables.user-settings.access_settings %}
1. 在个人资料上显示或隐藏成就：
    - 要在个人资料上显示成就，请导航到“个人资料设置”，然后选择“在我的个人资料上显示成就”旁边的复选框。 
  ![使访问者能够从配置文件设置查看成就](/assets/images/achievements-profile-settings-off.png)
    - 要在个人资料上隐藏成就，请导航到“个人资料设置”，然后取消选中“在我的个人资料上显示成就”旁边的复选框。 
  ![在个人资料设置中隐藏访问者的成就](/assets/images/achievements-profile-settings-on.png)

## 延伸阅读

- “[在个人资料页中查看贡献](/articles/viewing-contributions-on-your-profile-page)”
- “[为什么我的贡献未显示在我的个人资料上？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
