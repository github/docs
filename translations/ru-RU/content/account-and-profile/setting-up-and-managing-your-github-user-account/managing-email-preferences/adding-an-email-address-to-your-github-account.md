---
title: Добавление адреса электронной почты в учетную запись GitHub
intro: '{% data variables.product.product_name %} allows you to add as many email addresses to your account as you like. If you set an email address in your local Git configuration, you will need to add it to your account settings in order to connect your commits to your account. For more information about your email address and commits, see "[Setting your commit email address](/articles/setting-your-commit-email-address/)."'
redirect_from:
- /articles/adding-an-email-address-to-your-github-account
- /github/setting-up-and-managing-your-github-user-account/adding-an-email-address-to-your-github-account
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Add an email address
ms.openlocfilehash: 3d7efd2e72ed1ab23ccf2e686f4a1c1c7653cc1f
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145093161"
---
{% ifversion fpt or ghec %}

{% note %}

**Примечания** 
  - {% data reusables.user-settings.no-verification-disposable-emails %}
  -  Если вы являетесь членом {% data variables.product.prodname_emu_enterprise %}, вы не можете вносить изменения в свой адрес электронной почты на {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endnote %}

{% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %} {% data reusables.user-settings.add_and_verify_email %} {% data reusables.user-settings.select_primary_email %}

## <a name="further-reading"></a>Дополнительные материалы

- [Управление параметрами электронной почты](/articles/managing-email-preferences/)
