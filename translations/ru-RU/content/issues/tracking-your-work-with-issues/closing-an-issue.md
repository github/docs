---
title: Закрытие запроса
intro: 'Вы можете закрыть проблему, когда будут исправлены ошибки, выполнены нужные действия или принято решение о том, что никакие действия не требуются.'
permissions: 'Anyone can close an issue they opened.<br><br>Repository owners, collaborators on repositories owned by a personal account, and people with triage permissions or greater on repositories owned by an organization can close issues opened by others. {% data reusables.enterprise-accounts.emu-permission-repo %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Issues
  - Project management
shortTitle: Close an issue
ms.openlocfilehash: 889775474dc94f10c62e59916e1fa13b263b3474
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060429'
---
{% note %}

**Примечание.** Вы также можете автоматически закрывать проблемы, используя ключевые слова в запросах на вытягивание и сообщениях о фиксации. Дополнительные сведения см. в разделе [Связывание запроса на вытягивание с проблемой](/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword#linking-a-pull-request-to-an-issue-using-a-keyword).

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issues %}
1. В списке проблем щелкните проблему, которую хотите закрыть.
{%- ifversion issue-close-reasons %}
1. Если потребуется изменить причину закрытия проблемы, выберите {% octicon "triangle-down" aria-label="The down triangle octicon" %} рядом с пунктом "Закрыть проблему" и щелкните новую причину.
   ![Снимок экрана: раскрывающееся меню с причинами закрытия проблемы](/assets/images/help/issues/close-issue-select-reason.png)
2. Нажмите кнопку **Закрыть проблему**.
   ![Снимок экрана: кнопка "Закрыть проблему"](/assets/images/help/issues/close-issue-with-reason.png) {%- else %}
1. В нижней части страницы щелкните **Закрыть проблему**.
   ![Снимок экрана: кнопка "Закрыть проблему"](/assets/images/help/issues/close-issue.png) {% endif %}
