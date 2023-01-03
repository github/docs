---
title: Сведения о членстве в организации
intro: You can become a member of an organization to collaborate with coworkers or open-source contributors across many repositories at once.
redirect_from:
- /articles/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/about-organization-membership
- /github/setting-up-and-managing-your-github-user-account/managing-your-membership-in-organizations/about-organization-membership
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Organization membership
ms.openlocfilehash: 6a7afd8aee12e2c471f564122fb21f07d710f808
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 05/17/2022
ms.locfileid: "145088813"
---
Владелец организации может пригласить вас присоединиться к ней в качестве участника, менеджера по выставлению счетов или владельца. Владелец организации или участник с правами администратора репозитория может пригласить вас к сотрудничеству в одном или нескольких репозиториях в качестве внешнего участника совместной работы. Дополнительные сведения см. в статье "[Роли в организации](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization)".

Организации, в которых вы участвуете, доступны на странице вашего профиля. Дополнительные сведения см. в разделе [Доступ для организации](/articles/accessing-an-organization).

Когда вы принимаете приглашение присоединиться к организации, владельцы организации могут просматривать следующие сведения:

- данные вашего общедоступного профиля;
- ваш адрес электронной почты;
- включена ли у вас двухфакторная авторизация;
- репозитории, к которым у вас есть доступ в организации, и уровень этого доступа;
- некоторые действия в организации;
- страна, откуда поступил запрос;
- ваш IP-адрес.

Дополнительные сведения см. в <a href="/articles/github-privacy-statement/" class="dotcom-only">заявлении о конфиденциальности {% data variables.product.prodname_dotcom %}</a>.

  {% note %}

  **Примечание**. Владельцы не могут просматривать IP-адреса участников в журнале аудита организации. В случае инцидента безопасности, например компрометации учетной записи или случайного раскрытия конфиденциальных данных, владельцы организации могут запросить сведения о доступе к частным репозиториям. Возвращаемые нами сведения могут содержать ваш IP-адрес.

  {% endnote %}

По умолчанию для участника организации настроен частный уровень видимости. Вы можете сообщить о членстве в отдельных организациях в своем профиле. Дополнительные сведения см. в разделе [Публикация или скрытие сведений о членстве в организации](/articles/publicizing-or-hiding-organization-membership).

{% ifversion fpt or ghec %}

Если ваша организация принадлежит к корпоративной учетной записи, вы автоматически являетесь участником этой учетной записи и сведения о вас доступны ее владельцам. Дополнительные сведения см. в разделе [Сведения о корпоративных учетных записях](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts){% ifversion fpt %}" в документации по {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

{% endif %}

Вы можете в любое время покинуть организацию. Дополнительные сведения см. в разделе [Удаление себя из организации](/articles/removing-yourself-from-an-organization).

## <a name="further-reading"></a>Дополнительные материалы

- [Сведения об организациях](/articles/about-organizations)
- [Управление членством в организациях](/articles/managing-your-membership-in-organizations)
