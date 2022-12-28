---
title: Блокировка бесед
intro: 'Владельцы репозитория и участники совместной работы, а также пользователи с доступом на запись в репозиторий могут блокировать беседы о проблемах, запросах на вытягивание, а также отложить активное взаимодействие на время или постоянно.'
redirect_from:
  - /articles/locking-conversations
  - /github/building-a-strong-community/locking-conversations
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
ms.openlocfilehash: 22d2f5cf16ce0a4c9cdda077d4ddd2bde789245f
ms.sourcegitcommit: bafb4fe4c8c086a510eafee6e54a2d172fd3a01b
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/16/2022
ms.locfileid: '148046577'
---
Рекомендуется заблокировать беседу, если вся беседа не является конструктивной или нарушает кодекс поведения вашего сообщества{% ifversion fpt or ghec %} либо [Правила сообщества](/free-pro-team@latest/github/site-policy/github-community-guidelines) GitHub{% endif %}. При блокировке беседы можно также указать причину, которая будет общедоступной.

При блокировке беседы создается событие временной шкалы, которое отображается любому пользователю с доступом для чтения к репозиторию. Однако имя пользователя, блокировавшего беседу, отображается только пользователям с доступом для записи в репозиторий. Для тех, кто не имеет доступа для записи, событие временной шкалы будет анонимным.

![Анонимизированное событие временной шкалы для заблокированной беседы](/assets/images/help/issues/anonymized-timeline-entry-for-locked-conversation.png)

Пока беседа заблокирована, только [пользователи с доступом для записи](/articles/repository-permission-levels-for-an-organization/), а также [владельцы репозитория и участники совместной работы](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-personal-account) могут добавлять, скрывать и удалять комментарии. Реакции и голоса в заблокированной беседе отключены для всех пользователей.

Чтобы найти заблокированные беседы в репозитории, который не архивирован, можно использовать квалификаторы поиска `is:locked` и `archived:false`. Беседы автоматически блокируются в архивных репозиториях. Дополнительные сведения см. в разделе [Поиск проблем и запросов на вытягивание](/search-github/searching-on-github/searching-issues-and-pull-requests#search-based-on-whether-a-conversation-is-locked).

1. При необходимости напишите комментарий, указывающий причину, по которой вы блокируете беседу.
2. В правом поле проблемы или запроса на вытягивание или над полем комментария на странице фиксации щелкните **Заблокировать беседу**.
![Ссылка на блокировку беседы](/assets/images/help/repository/lock-conversation.png)
3. При необходимости выберите причину блокировки беседы.
![Меню причины блокировки беседы](/assets/images/help/repository/locking-conversation-reason-menu.png)
4. Прочитайте сведения о блокировке бесед и щелкните **Заблокировать беседу по этой проблеме**, **Заблокировать беседу в этом запросе на вытягивание** или **Заблокировать беседу для этой фиксации**.
![Подтверждение блокировки с диалоговым окном причины](/assets/images/help/repository/lock-conversation-confirm-with-reason.png)
5. Когда вы будете готовы разблокировать беседу, щелкните **Разблокировать беседу**.
![Ссылка на разблокировку беседы](/assets/images/help/repository/unlock-conversation.png)

## Дополнительные материалы

- [Настройка проекта для внесения действенных вкладов](/communities/setting-up-your-project-for-healthy-contributions)
- [Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)
- [Управление деструктивными комментариями](/communities/moderating-comments-and-conversations/managing-disruptive-comments){% ifversion fpt or ghec %}
- [Обеспечение безопасности в {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)
- [Сообщение о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)
- [Ограничение взаимодействий в репозитории](/communities/moderating-comments-and-conversations/limiting-interactions-in-your-repository) {% endif %}
