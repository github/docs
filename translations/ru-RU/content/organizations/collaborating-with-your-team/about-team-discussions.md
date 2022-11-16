---
title: Сведения об обсуждениях в команде
intro: 'Ваша команда может совместно планировать работу, делиться новостями или обсуждать различные темы в публикациях на странице группы в организации.'
redirect_from:
  - /articles/about-team-discussions
  - /github/building-a-strong-community/about-team-discussions
  - /github/setting-up-and-managing-organizations-and-teams/about-team-discussions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 173a067c99ff6ab10ceb6d7f0a7ef288de58b658
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145135209'
---
{% data reusables.organizations.team-discussions-purpose %}

Любой участник организации может делать публикации на странице вашей команды или участвовать в публичном обсуждении. {% data reusables.organizations.team-discussions-permissions %}

![Вкладка "Обсуждения" на странице команды с общедоступными и частными обсуждениями](/assets/images/help/organizations/team-page-discussions-tab.png)

Вы можете создать ссылку на любое обсуждение команды, чтобы ссылаться на него в других местах. Вы можете закрепить важные записи на странице вашей команды, создавать на нее быструю ссылку в дальнейшем. Дополнительные сведения см. в разделе [Закрепление обсуждения команды](/organizations/collaborating-with-your-team/pinning-a-team-discussion).

![Вкладка закрепленных обсуждений на странице группы с закрепленным обсуждением](/assets/images/help/organizations/team-discussions-pinned.png)

{% data reusables.organizations.team-discussions-default %} Владельцы могут отключить обсуждения команды для всей организации. Дополнительные сведения см. в разделе [Отключение обсуждений группы для вашей организации](/articles/disabling-team-discussions-for-your-organization).

## Уведомления для обсуждений группы

Когда кто-то публикует или отвечает на публичное обсуждение на странице команды, участники команды и участники любых дочерних команд будут получать уведомления по электронной почте или веб-уведомления. Когда кто-то публикует или отвечает на частное обсуждение на странице команды, уведомления будут получать только участники команды.

{% tip %}

**Совет.** В зависимости от параметров уведомлений вы будете получать обновления по электронной почте, на странице веб-уведомлений в {% data variables.product.product_name %} или по обоим каналам. Дополнительные сведения см. в разделе [Настройка уведомлений](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications).

{% endtip %}

По умолчанию, если ваше имя пользователя упоминается в обсуждении команды, вы будете получать уведомления о публикации, в котором упоминается ваше имя пользователя, а также обо всех ответах на эту публикацию. Кроме того, по умолчанию при ответе на публикацию вы будете получать уведомления о других ответах на публикацию.

Чтобы отключить уведомления для обсуждений группы, вы можете отменить подписку на конкретную публикацию обсуждения или изменить параметры уведомлений, чтобы отменить отслеживание или полностью игнорировать обсуждения конкретной команды. Вы можете подписаться на уведомления для конкретной публикации обсуждения, даже если вы отменили отслеживание обсуждения этой команды.

Дополнительные сведения см. в разделах [Просмотр подписок](/github/managing-subscriptions-and-notifications-on-github/viewing-your-subscriptions) и [Вложенные команды](/articles/about-teams/#nested-teams).

{% ifversion fpt or ghec %}

## Обсуждения в организации

Такие обсуждения также способны улучшить коммуникацию в организации. Дополнительные сведения см. в разделе [Включение или отключение GitHub Discussions для организации](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

{% endif %}

## Дополнительные материалы

- [Краткое руководство по обмену данными в {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/quickstart-for-communicating-on-github)
- [Сведения о командах](/articles/about-teams)
- [Создание обсуждения команды](/organizations/collaborating-with-your-team/creating-a-team-discussion)
- [Редактирование или удаление обсуждения команды](/organizations/collaborating-with-your-team/editing-or-deleting-a-team-discussion)
