---
title: О приоритете запроса в службу поддержки
intro: 'Вы можете сообщить о серьезности проблемы и о том, как она влияет на вас и вашу команду, определив приоритет вашего обращения в службу поддержки.'
shortTitle: Ticket priority
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Support
ms.openlocfilehash: bce2a30ad25b93274e982991f81be5b1b796c685
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '145140097'
---
При обращении в {% data variables.contact.enterprise_support %} можно выбрать один из приоритетов {% ifversion ghes or ghae %}four{% else %}three{% endif %} для запроса в службу поддержки: {% ifversion ghes or ghae %}{% data variables.product.support_ticket_priority_urgent %},{% endif %} {% data variables.product.support_ticket_priority_high %}, {% data variables.product.support_ticket_priority_normal %} или {% data variables.product.support_ticket_priority_low %}.

{% ifversion ghes or ghae %}

{% data reusables.support.github-can-modify-ticket-priority %}

{% ifversion ghes %}

## Приоритет запроса в службу поддержки для {% data variables.product.prodname_ghe_server %}

{% data reusables.support.ghes-priorities %}

## Приоритет запроса в службу поддержки для {% data variables.product.prodname_advanced_security %}

| Приоритет | Описание |
| :---: | --- |
| {% data variables.product.support_ticket_priority_high %} | {% data variables.product.prodname_advanced_security %} не функционирует, остановлен или серьезно поврежден, при этом конечный пользователь не имеет возможности использовать программное обеспечение, и обходное решение недоступно. |
| {% data variables.product.support_ticket_priority_normal %} | {% data variables.product.prodname_advanced_security %} функционирует несогласованно, отрицательно влияя на использование и уровень производительности конечного пользователя. |
| {% data variables.product.support_ticket_priority_low %} | {% data variables.product.prodname_advanced_security %} функционирует согласованно, однако пользователь запрашивает незначительные изменения в программном обеспечении, например, обновления документации, исправление косметических дефектов или улучшения.|

{% elsif ghae %} {% data reusables.support.ghae-priorities %} {% endif %}

{% elsif ghec %}

<!-- /github/working-with-github-support/github-enterprise-cloud-support.md -->

{% data reusables.support.zendesk-old-tickets %}

Вы можете отправлять приоритетные вопросы, если вы приобрели {% data variables.product.prodname_ghe_cloud %} или являетесь участником, сторонним участником совместной работы или менеджером по выставлению счетов организации {% data variables.product.prodname_dotcom %}, которая в настоящее время подписана на {% data variables.product.prodname_ghe_cloud %}.

Вопросы, которые удовлетворяют критериям приоритетных ответов:
- Включите вопросы, связанные с невозможностью доступа к основным функциям управления версиями {% data variables.product.prodname_dotcom %}.
- Включите ситуации, связанные с безопасностью учетной записи
- Не включайте периферийные службы и функции, такие как вопросы о Gists, {% data variables.product.prodname_pages %}, или уведомления по электронной почте
- Включайте вопросы только об организациях, использующих {% data variables.product.prodname_ghe_cloud %}

Чтобы получить приоритетный ответ, необходимо следующее:
- Отправьте свой вопрос в [{% data variables.contact.enterprise_support %}](https://support.github.com/contact?tags=docs-generic) с проверенного адреса электронной почты, связанного с организацией, которая в настоящее время использует {% data variables.product.prodname_ghe_cloud %}
- Отправка нового запроса в службу поддержки для каждой отдельной приоритетной ситуации
- Отправьте свой вопрос с понедельника по пятницу по местному времени
- Необходимо понимать, что ответ на приоритетный вопрос будет получен по электронной почте
- Организуйте сотрудничество с {% data variables.contact.github_support %} и предоставьте всю информацию, которую запрашивает {% data variables.contact.github_support %}

{% note %}

**Примечание.** Вопросы не удовлетворяют критериям приоритетного ответа, если они отправляют во время местных праздничных и нерабочих дней, действующих в вашей юрисдикции.

{% endnote %}

Целевое восьмичасовое время ответа:
- Начинается, когда {% data variables.contact.github_support %} получает соответствующий вопрос
- Не начинается, пока вы не предоставите достаточную информацию для ответа на вопрос, если только вы не указали, что у вас нет достаточной информации
- Не применяется в выходные дни в вашем часовом поясе или во время местных праздничных дней, действующих в вашей юрисдикции

{% note %}

**Примечание.** {% data variables.contact.github_support %} не гарантирует решение вашего приоритетного вопроса. {% data variables.contact.github_support %} может повышать или понижать приоритет проблемы до/от статуса приоритетного вопроса с учетом разумной оценки информации, которую вы нам предоставляете.

{% endnote %}

{% endif %}

## Дополнительные материалы

- [Отправка в службу поддержки](/support/contacting-github-support/creating-a-support-ticket)
