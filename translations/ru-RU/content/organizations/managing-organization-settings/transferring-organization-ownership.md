---
title: Передача владения организацией
intro: 'Чтобы сделать другого пользователя владельцем учетной записи организации, необходимо добавить нового владельца {% ifversion fpt or ghec %}, убедиться в том, что сведения о выставлении счетов обновлены,{% endif %} а затем удалить себя из учетной записи.'
redirect_from:
  - /articles/needs-polish-how-do-i-give-ownership-to-an-organization-to-someone-else
  - /articles/transferring-organization-ownership
  - /github/setting-up-and-managing-organizations-and-teams/transferring-organization-ownership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Transfer ownership
ms.openlocfilehash: 2605af47d008eff7ee786d80f64142a267676ee1
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145069637'
---
{% ifversion ghec %} {% note %}

**Примечание.** {% data reusables.enterprise-accounts.invite-organization %}

{% endnote %}{% endif %}

1. Если вы являетесь единственным участником с правами *владельца*, предоставьте другому участнику организации роль владельца. Дополнительные сведения см. в разделе [Назначение владельца организации](/organizations/managing-peoples-access-to-your-organization-with-roles/maintaining-ownership-continuity-for-your-organization#appointing-an-organization-owner).
2. Обратитесь к новому владельцу и убедитесь, что он имеет [доступ к параметрам организации](/articles/accessing-your-organization-s-settings).
{% ifversion fpt or ghec %}
3. Если в данное время вы занимаетесь оплатой GitHub в организации, вам также потребуется, чтобы новый владелец или [менеджер по выставлению счетов](/articles/adding-a-billing-manager-to-your-organization/) обновили платежные реквизиты организации. Дополнительные сведения см. в разделе [Добавление или изменение метода оплаты](/articles/adding-or-editing-a-payment-method).

  {% warning %}

  **Предупреждение**. Удаление себя из организации **не** обновляет сведения о выставлении счетов в файле для учетной записи организации. Новый владелец или менеджер по выставлению счетов должны обновить сведения о выставлении счетов в файле, чтобы удалить кредитную карту или данные о счете PayPal.

  {% endwarning %}

{% endif %}
4. [Удалите себя](/articles/removing-yourself-from-an-organization) из организации.
