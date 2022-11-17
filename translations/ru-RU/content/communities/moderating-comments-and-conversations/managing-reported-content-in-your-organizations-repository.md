---
title: 'Управление содержимым, на которое пожаловались, в репозитории организации'
intro: 'После того как участник сообщит о содержимом, нарушающем правила, в репозитории, ответственные за обслуживание репозитория смогут просматривать отчет и управлять ими.'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /github/building-a-strong-community/managing-reported-content-in-your-organizations-repository
topics:
  - Community
shortTitle: Manage reported content
ms.openlocfilehash: 6b2107acd7a045e089814177dbabae24915d7ae1
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/11/2022
ms.locfileid: '145117651'
---
Любой пользователь с разрешениями администратора в репозитории может просматривать содержимое репозитория, на которое пожаловались, и управлять им.

## Об управлении содержимым, на которое пожаловались

Перед просмотром содержимого, на которое пожаловались, или управлением им необходимо включить его для репозитория. Дополнительные сведения см. в разделе [Управление тем, как участники сообщают о нарушениях в репозитории вашей организации](/communities/moderating-comments-and-conversations/managing-how-contributors-report-abuse-in-your-organizations-repository).

Можно отслеживать, просматривать и реагировать на жалобы о содержимом с нарушением. В списке "Отчеты о злоупотреблениях" можно просматривать все отчеты и переходить непосредственно к каждому комментарию, на который пожаловались, на {% data variables.product.prodname_dotcom %}.

{% data reusables.community.tools-for-moderating %}

После завершения модерации содержимого с нарушением можно пометить жалобу как разрешенную. Если вы решите, что не закончили модерацию, можно пометить жалобу как неразрешенную.

## Просмотр содержимого, на которое жалуется участник

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. Справа от содержимого, на которое пожаловались и которое вы хотите просмотреть, щелкните {% octicon "kebab-horizontal" aria-label="The edit icon" %}, а затем **Просмотреть содержимое**.
  !["Просмотреть содержимое" в раскрывающемся списке "Изменить" для содержимого, на которое пожаловались](/assets/images/help/repository/reported-content-report-view-content.png)

## Разрешение жалобы

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %}
4. Справа от жалобы, которую вы хотите разрешить, щелкните {% octicon "kebab-horizontal" aria-label="The edit icon" %}, а затем **Пометить как разрешенную**.
  !["Пометить как разрешенную" в раскрывающемся списке "Изменить" для содержимого, на которое пожаловались](/assets/images/help/repository/reported-content-mark-report-as-resolved.png)

## Отмена разрешения жалобы

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-moderation-reported-content %} {% data reusables.repositories.reported-content-resolved-tab %}
5. Справа от жалобы, для которой вы хотите отменить разрешение, щелкните {% octicon "kebab-horizontal" aria-label="The edit icon" %}, а затем **Пометить как неразрешенную**.
  !["Пометить как неразрешенную" в раскрывающемся списке "Изменить" для содержимого, на которое пожаловались](/assets/images/help/repository/reported-content-mark-report-as-unresolved.png)

## Дополнительные материалы

- "[Сведения об управлении сообществом и модерации](/communities/setting-up-your-project-for-healthy-contributions/about-community-management-and-moderation)"
