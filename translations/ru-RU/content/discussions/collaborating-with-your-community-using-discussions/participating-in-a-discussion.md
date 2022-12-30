---
title: Участие в обсуждении
intro: 'Вы можете взаимодействовать с сообществом и ответственными специалистами на форуме в репозитории проекта в {% data variables.product.product_name %}.'
permissions: 'People with read access to a repository can participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can participate in discussions and polls in that organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
shortTitle: Participate in discussion
ms.openlocfilehash: 07db8d3583c218e592ca1b68171292e52fcfc12f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410238'
---
## Сведения об участии в обсуждении

{% data reusables.discussions.about-discussions %} Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

Помимо начала или просмотра обсуждений и опросов, можно оставлять комментарии в ответ на исходный комментарий автора обсуждения. Кроме того, вы также можете создать цепочку комментариев, ответив на конкретный комментарий, который другой член сообщества оставил в ходе обсуждения, и отреагировать на комментарии с помощью эмодзи.

{% ifversion fpt or ghec %}Вы можете заблокировать пользователей и сообщить о нарушении правил, чтобы гарантировать, что среда обсуждений в {% data variables.product.product_name %} безопасна и приятна для вас. Дополнительные сведения см. в разделе [Обеспечение безопасности в {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github).{% endif %}

## Предварительные требования

Для участия в обсуждении в репозитории или организации необходимо включить {% data variables.product.prodname_discussions %} в репозитории или организации. Дополнительные сведения см. в разделах [Включение или отключение {% data variables.product.prodname_discussions %} для репозитория](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository) и [Включение или отключение GitHub Discussions для организации](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Создание обсуждения

{% data reusables.discussions.starting-a-discussion %}

## Создание опроса

{% data reusables.discussions.starting-a-poll %}

## Помечание комментария как ответа

Авторы обсуждений и пользователи с ролью "Рассмотрение" или ролями с более высокими разрешениями для репозитория могут пометить комментарий как ответ на обсуждение в репозитории.
Точно так же авторы обсуждений и пользователи с ролью рассмотрения или более высокой ролью для исходного репозитория для обсуждений в организации могут пометить комментарий как ответ на обсуждение в организации.

{% data reusables.discussions.marking-a-comment-as-an-answer %}
