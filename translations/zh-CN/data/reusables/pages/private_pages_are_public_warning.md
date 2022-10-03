---
ms.openlocfilehash: c3e82ab5103e82750cfec55553865b4f874d4f8f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147880555"
---
{% warning %}

{% ifversion fpt %} 警告：{% data variables.product.prodname_pages %} 站点可以在 Internet 上公开，即使该站点的存储库是私有的。 如果站点的存储库中有敏感数据，你可能想要在发布前删除数据。 有关详细信息，请参阅[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)。
{% elsif ghec %} 警告：除非你的企业使用 {% data variables.product.prodname_emus %}，否则默认情况下 {% data variables.product.prodname_pages %} 站点可以在 Internet 上公开，即使该站点的存储库是私有的或内部的。 可以通过管理站点的访问控制来私下发布站点。 否则，如果站点的存储库中有敏感数据，你可能想要在发布前删除数据。 有关详细信息，请参阅“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”和“[更改 {% data variables.product.prodname_pages %} 站点的可见性](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site)”。
{% elsif ghae %} 警告：{% data variables.product.prodname_pages %} 站点对所有企业成员可见，即使该站点的存储库是私有的也是如此。 如果站点的存储库中有敏感数据，你可能想要在发布前删除数据。 有关详细信息，请参阅[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)。
{% elsif ghes %} 警告：如果你的站点管理员启用了公共页面，{% data variables.product.prodname_pages %} 站点将在 Internet 上公开，即使该站点的存储库是私有的或内部的也是如此。 如果站点的存储库中有敏感数据，你可能想要在发布前删除数据。 有关详细信息，请参阅“[为企业配置 {% data variables.product.prodname_pages %}](/admin/configuration/configuring-github-pages-for-your-enterprise#enabling-public-sites-for-github-pages)”和“[关于存储库](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)”。
{% endif %}

{% endwarning %}
