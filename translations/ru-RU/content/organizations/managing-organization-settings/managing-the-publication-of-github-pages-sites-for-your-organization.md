---
title: Управление публикацией сайтов GitHub Pages для организации
intro: 'Вы можете управлять тем, могут ли члены организации публиковать {% data variables.product.prodname_pages %} сайты из репозиториев организации{% ifversion ghec %}, а также ограничить видимость, которую члены могут выбрать для сайтов{% endif %}.'
permissions: 'Organization owners can manage the publication of {% data variables.product.prodname_pages %} sites from repositories in the organization.'
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/disabling-publication-of-github-pages-sites-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-the-publication-of-github-pages-sites-for-your-organization
topics:
  - Organizations
  - Teams
shortTitle: Manage Pages site publication
ms.openlocfilehash: cce086c19dd6f20de28dde599c13074c48851753
ms.sourcegitcommit: ac00e2afa6160341c5b258d73539869720b395a4
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/09/2022
ms.locfileid: '147878533'
---
{% ifversion fpt %} Вы можете разрешить или запретить участникам организации публиковать сайты {% data variables.product.prodname_pages %}. Организации, использующие {% data variables.product.prodname_ghe_cloud %}, также могут разрешать сайты, опубликованные в открытом доступе, сайты, опубликованные в закрытом доступе, и те, и другие, а также ни те, ни другие. Дополнительные сведения см. в [документации по {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization).
{% elsif ghec %} Вы можете разрешить участникам организации создавать сайты, опубликованные в открытом доступе, сайты, опубликованные в закрытом доступе, и те, и другие, а также ни те, ни другие. Дополнительные сведения об управлении доступом для сайтов {% data variables.product.prodname_pages %} см. в разделе [Изменение видимости сайта {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/changing-the-visibility-of-your-github-pages-site).
{% endif %}

Если вы запретите публикацию сайтов {% data variables.product.prodname_pages %}, все опубликованные сайты останутся опубликованными. Публикацию сайта можно отменить вручную. Дополнительные сведения см. в разделе [Отмена публикации сайта {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/unpublishing-a-github-pages-site).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.member-privileges %}{% ifversion fpt %}
1. В разделе "Создание страниц" установие или снимите флажок **Открытый доступ**.

   ![Флажки разрешения или запрета на создание сайтов {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes-fpt.png){% elsif ghec %}
1. В разделе "Создание страниц" выберите типы видимости, которые вы хотите разрешить, и отмените выбор типов видимости, которые вы хотите запретить.

   ![Флажки разрешения или запрета на создание сайтов {% data variables.product.prodname_pages %}](/assets/images/help/organizations/github-pages-creation-checkboxes.png){% else %}
1. В разделе "Создание страниц" установите или снимите флажок **Разрешить участникам публиковать сайты**.

   ![Снятый флажок "Разрешить участникам публиковать сайты"](/assets/images/help/organizations/org-settings-pages-disable-publication-checkbox.png){% endif %}{% ifversion fpt or ghec %}

   {% indented_data_reference reusables.pages.privately-publish-ghec-only spaces=3%}{% endif %}

1. Выберите команду **Сохранить**.

## Дополнительные материалы

- [Сведения о {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages)
