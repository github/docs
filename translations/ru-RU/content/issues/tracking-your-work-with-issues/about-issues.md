---
title: О проблемах
intro: 'Используйте {% data variables.product.prodname_github_issues %} для отслеживания идей, отзывов, задач и ошибок для работы с {% data variables.product.company_short %}.'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/about-issues
  - /articles/creating-issues
  - /articles/about-issues
  - /github/managing-your-work-on-github/about-issues
  - /issues/tracking-your-work-with-issues/creating-issues/about-issues
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
ms.openlocfilehash: e3352dbbc88da85680885b728dcb393d5ae3579f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147422735'
---
## Интеграция с GitHub

Проблемы позволяют отслеживать работу в {% data variables.product.company_short %}, где происходит разработка. При упоминании проблемы в другой проблеме или запросе на вытягивание на временной шкале проблемы отражается перекрестная ссылка для отслеживания связанных работ. Чтобы указать, что работа выполняется, можно связать проблему с запросом на вытягивание. При объединении запроса на вытягивание связанная проблема автоматически закрывается.

Дополнительные сведения о ключевых словах см. в разделе [Связывание запроса на вытягивание с проблемой](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

## Быстрое создание проблем

Проблемы можно создавать различными способами, поэтому вы можете выбрать наиболее удобный метод для рабочего процесса. Например, можно создать проблему из репозитория,{% ifversion fpt or ghec %} элемента в списке задач,{% endif %} заметки в проекте, комментарии в запросе на вытягивание, определенной строки кода или URL-запроса. Вы также можете создать проблему на основе выбранной платформы: с помощью веб-интерфейса, {% data variables.product.prodname_desktop %}, {% data variables.product.prodname_cli %}, GraphQL и REST API или {% data variables.product.prodname_mobile %}. Дополнительные сведения см. в статье "[Создание проблемы](/issues/tracking-your-work-with-issues/creating-issues/creating-an-issue)".

## Отслеживание результатов работы

Вы можете упорядочить проблемы по проектам и присвоить им приоритет. {% ifversion fpt or ghec %}Для отслеживания проблем в рамках более крупной проблемы можно использовать списки задач. {% endif %} Для классификации связанных проблем можно использовать метки и вехи.

Дополнительные сведения о проектах см. в разделе {% ifversion projects-v2 %}[О проектах](/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects). {% else %}[Организация работы с досками проектов](/issues/organizing-your-work-with-project-boards).{% endif %} {% ifversion fpt or ghec %}Дополнительные сведения о списках задач см. в разделе [О списках задач](/issues/tracking-your-work-with-issues/creating-issues/about-task-lists). {% endif %}Дополнительные сведения о метках и вехах см. в разделе "[Использование меток и вех для отслеживания работы](/issues/using-labels-and-milestones-to-track-work)".

## Получайте актуальные новости

Чтобы быть в курсе последних комментариев к проблеме, можно подписаться на проблему, чтобы получать уведомления о последних комментариях. Чтобы быстро найти ссылки на недавно обновленные проблемы, на которые вы подписаны, откройте панель мониторинга. Дополнительные сведения см. в разделах [Сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications) и [Сведения о личной панели мониторинга](/articles/about-your-personal-dashboard).

## Управление сообществом

Чтобы помочь участникам открыть значимые проблемы, предоставляющие необходимые сведения, можно использовать {% ifversion fpt or ghec %}формы проблем и {% endif %}шаблоны проблем. Дополнительные сведения см. в разделе "[Использование шаблонов для описания важных проблем и выполнения запросов на вытягивание](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)".

{% ifversion fpt or ghec %}Для поддержки сообщества можно сообщить о комментариях, которые нарушают [правила сообщества](/free-pro-team@latest/github/site-policy/github-community-guidelines) {% data variables.product.prodname_dotcom %}. Дополнительные сведения см. в разделе "[Отчеты о нарушении или спаме](/communities/maintaining-your-safety-on-github/reporting-abuse-or-spam)".{% endif %}

## Эффективное взаимодействие

Вы можете @mention участников совместной работы, которые имеют доступ к репозиторию в проблеме, чтобы привлечь их внимание к комментариям. Чтобы связать связанные проблемы в том же репозитории, можно ввести `#` перед заголовком проблемы, а затем щелкнуть проблему, которую нужно связать. Чтобы сообщить об ответственности, можно назначить проблемы. Если вы часто вводите один и тот же комментарий, можно использовать сохраненные ответы.
{% ifversion fpt or ghec %} Дополнительные сведения см. в разделах "[Базовый синтаксис записи и форматирования](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" и "[Назначение проблем и запросов на вытягивание другим пользователям GitHub](/issues/tracking-your-work-with-issues/assigning-issues-and-pull-requests-to-other-github-users)".
{% endif %} {% ifversion discussions %}
## Сравнение проблем и обсуждений

Некоторые беседы больше подходят для {% data variables.product.prodname_discussions %}. {% data reusables.discussions.you-can-use-discussions %} Рекомендации по использованию проблемы или обсуждения см. в статье "[Взаимодействие в GitHub](/github/getting-started-with-github/quickstart/communicating-on-github)".

Если беседа в проблеме лучше подходит для обсуждения, ее можно преобразовать в обсуждение.
{% endif %}
