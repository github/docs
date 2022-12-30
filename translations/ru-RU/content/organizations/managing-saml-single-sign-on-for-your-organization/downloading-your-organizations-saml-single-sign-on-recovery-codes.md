---
title: Загрузка кодов для восстановления единого входа SAML в организации
intro: 'Администраторы организации должны загрузить коды восстановления единого входа SAML в своей организации, чтобы обеспечить доступ к {% data variables.product.product_name %}, даже если поставщик удостоверений для организации недоступен.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145125667'
---
Коды восстановления не должны быть общими или распределенными. Рекомендуется сохранить их с помощью диспетчера паролей, например [LastPass](https://lastpass.com/) или [1Password](https://1password.com/).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. В разделе "Единый вход SAML" в примечании о кодах восстановления нажмите кнопку **Сохранить коды восстановления**.
![Ссылка для просмотра и сохранения кодов восстановления](/assets/images/help/saml/saml_recovery_codes.png)
6. Сохраните коды восстановления, нажав кнопку **Загрузить**, **Печать** или **Копировать**.
![Кнопки загрузки, печати или копирования кодов восстановления](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Примечание.** Коды восстановления помогут вам вернуться в {% data variables.product.product_name %}, если ваш поставщик удостоверений недоступен. При создании новых кодов восстановления те коды восстановления, которые отображаются на странице "Коды восстановления для единого входа", будут автоматически обновлены.

  {% endnote %}

7. После использования кода восстановления для восстановления доступа к {% data variables.product.product_name %} его нельзя будет использовать повторно. Доступ к {% data variables.product.product_name %} будет сохраняться только в течение 24 часов, а после этого вам будет предложено выполнить вход с помощью единого входа.

## Дополнительные материалы

- [Сведения об управлении удостоверениями и доступом с помощью единого входа SAML](/articles/about-identity-and-access-management-with-saml-single-sign-on)
- [Доступ к организации, если поставщик удостоверений недоступен](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)
