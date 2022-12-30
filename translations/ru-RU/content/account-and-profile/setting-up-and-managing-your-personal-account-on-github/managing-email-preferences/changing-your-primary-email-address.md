---
title: Изменение основного адреса электронной почты
intro: 'Вы можете в любое время изменить адрес электронной почты, связанный с вашей личной учетной записью.'
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Primary email address
ms.openlocfilehash: 5624a44c888b20350497fd2a4ec5a0d07186cdfe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145165284'
---
{% note %}

**Примечание.** Изменить основной адрес электронной почты на адрес электронной почты, который уже задан в качестве резервного, невозможно.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. Чтобы добавить новый адрес электронной почты, который будет использоваться в качестве основного, в разделе "Добавление адреса электронной почты" введите новый адрес электронной почты и нажмите кнопку **Добавить**.
   ![Кнопка добавления другого адреса электронной почты](/assets/images/help/settings/add_another_email_address.png)
4. В разделе "Основной адрес электронной почты" в раскрывающемся меню выберите адрес электронной почты, который вы хотите задать в качестве основного, а затем нажмите кнопку **Сохранить**.
   ![Кнопка установки адреса в качестве основного](/assets/images/help/settings/set_as_primary_email.png)
5. Чтобы удалить старый адрес электронной почты из учетной записи, рядом со старым адресом электронной почты щелкните {% octicon "trash" aria-label="The trash symbol" %}.
{% ifversion fpt or ghec %}
6. Проверьте новый основной адрес электронной почты. Без проверенного адреса электронной почты вы не сможете использовать все функции {% data variables.product.product_name %}. Дополнительные сведения см. в статье "[Проверка адреса электронной почты](/articles/verifying-your-email-address)".
{% endif %}
