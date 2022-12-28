---
title: Отображение состояний проверки для всех фиксаций
shortTitle: Displaying verification for all commits
intro: 'Вы можете включить строгий режим для проверки подписи фиксации, чтобы пометить все фиксации и теги состоянием проверки подписи.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: 0622814d683df3decf7eac407a6e9bf2bd7e2afa
ms.sourcegitcommit: 58f69d95fcc8a2fd1c2fb736a0ad8e7ee1858be4
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/07/2022
ms.locfileid: '148012647'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## Сведения о строгом режиме

При работе на локальном компьютере GIT позволяет указывать автора изменений и удостоверение автора фиксаций. Из-за этого другие пользователи могут сомневаться в том, что фиксации и метки были на самом деле созданы вами. Чтобы решить эту проблему, можно подписывать фиксации и метки. Дополнительные сведения см. в разделах [Подписывание фиксаций](/github/authenticating-to-github/signing-commits) и [Подписывание меток](/github/authenticating-to-github/signing-tags). {% data variables.product.prodname_dotcom %} помечает подписанные фиксации и метки определенным состоянием проверки. 

По умолчанию фиксации и метки помечаются как проверенные, если они подписаны с помощью успешно проверенного ключа GPG{% ifversion ssh-commit-verification %}, SSH,{% endif %} или S/MIME. Если фиксация или метка имеют подпись, которую нельзя проверить, {% data variables.product.prodname_dotcom %} оставляет их в состоянии "Не проверено". Во всех остальных случаях состояние проверки не отображается.

Однако вы можете повысить уверенность других пользователей в принадлежности ваших фиксаций и меток именно вам, включив строгий режим в параметрах {% data variables.product.prodname_dotcom %}. Если включен строгий режим, все фиксации и метки принимают одно из трех состояний проверки.

![Состояния проверки подписи](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Включать строгий режим следует только в том случае, если вы подписываете все фиксации и метки и используете подтвержденный адрес электронной почты для учетной записи на {% data variables.product.product_name %} в качестве адреса для фиксаций. После включения этого режима все неподписанные фиксации и метки, создаваемые локально и отправляемые в {% data variables.product.prodname_dotcom %}, будут помечаться как непроверенные.

{% data reusables.identity-and-permissions.verification-status-check %}

## Включение строгого режима

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. На странице параметров SSH в разделе "Строгий режим" установите флажок **Помечать неподписанные фиксации как непроверенные**.

   ![Флажок "Помечать неподписанные фиксации как непроверенные"](/assets/images/help/commits/vigilant-mode-checkbox.png)
