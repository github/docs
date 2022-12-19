---
title: 在个人资料中公开或隐藏您的私人贡献
intro: Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.
redirect_from:
- /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
- /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Profiles
shortTitle: Private contributions
ms.openlocfilehash: d3ca9c3bef9324baa73b96eb6dc26bdd75960b37
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 05/17/2022
ms.locfileid: "145066983"
---
如果公开您的私有贡献，对您处理的私有仓库没有访问权限的人员将无法查看您的私有贡献详情， 而只能看到您在指定日期的贡献数。 您的公共贡献会包含详细信息。 有关详细信息，请参阅“[查看个人资料页面上的贡献](/articles/viewing-contributions-on-your-profile-page)”。

{% note %}

**注意：** {% ifversion fpt or ghes or ghec %}在 {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %} 上，你的个人资料上的公共贡献{% ifversion fpt or ghec %}对世界上能访问 {% data variables.product.prodname_dotcom_the_website %} 的任何人{% elsif ghes %}仅对其他 {% data variables.product.product_location%} 用户{% endif %}可见。{% elsif ghae %}在 {% data variables.product.prodname_ghe_managed %} 上，只有你企业的其他成员才可看到你的个人资料上的贡献。{% endif %}

{% endnote %}

## <a name="changing-the-visibility-of-your-private-contributions"></a>更改私有贡献的可见性

{% data reusables.profile.access_profile %}
1. 在个人资料中公开或隐藏您的私有贡献：
    - 要公开你的私有贡献，在贡献图上方，使用“贡献设置”下拉菜单，然后选择“私有贡献” 。 访问者将会看到您的私有贡献数，但没有更多详细信息。
  ![从“贡献设置”下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-on.png)
    - 要隐藏你的私有贡献，在贡献图上方，使用“贡献设置”下拉菜单，然后取消选择“私有贡献” 。 访问者将只看到你的公共贡献。
   ![从“贡献设置”下拉菜单允许访问者查看私有贡献](/assets/images/help/profile/private-contributions-off.png)

## <a name="further-reading"></a>延伸阅读

- “[在个人资料页中查看贡献](/articles/viewing-contributions-on-your-profile-page)”
- “[为什么我的贡献未显示在我的个人资料上？](/articles/why-are-my-contributions-not-showing-up-on-my-profile)”
