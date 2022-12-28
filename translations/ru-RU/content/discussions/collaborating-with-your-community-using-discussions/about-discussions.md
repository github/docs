---
title: Сведения об обсуждениях
intro: 'Используйте обсуждения, чтобы задавать вопросы и отвечать на них, обмениваться информацией, делать объявления, а также проводить обсуждения о проекте в {% data variables.product.product_name %}.'
versions:
  feature: discussions
ms.openlocfilehash: 4ac74c35b34310b62595bd5ac9a5588a7ef3476a
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/12/2022
ms.locfileid: '147886953'
---
## Сведения о {% data variables.product.prodname_discussions %}

С помощью {% data variables.product.prodname_discussions %} сообщество участников проекта может создавать беседы в репозитории проекта или организации и участвовать в них. Обсуждения позволяют координаторам проекта, участникам и посетителям собирать данные и достигать следующих целей в центральном расположении, не используя сторонние инструменты.

- Предоставление общего доступа к объявлениям и информации, сбор обратной связи, планирование и принятие решений
- Постановка вопросов, обсуждение и ответ на вопросы, а также добавление для обсуждений метки "Отвечено"
- Создание опросов для оценки мнения сообщества
- Создание комфортной атмосферы для посетителей и участников для обсуждения целей, процессов разработки, администрирования и рабочих процессов

![Вкладка "Обсуждения" для репозитория](/assets/images/help/discussions/hero.png)

Вы можете использовать обсуждения репозитория для обсуждения тем, относящихся к репозиторию. Если проект охватывает несколько репозиториев, вы можете использовать обсуждения на уровне организации для обсуждения тем, которые не относятся к отдельному репозиторию.

Вам не нужно закрывать обсуждение так же, как вы закрываете проблему или запрос на вытягивание.

Если администратор репозитория или координатор проектов включает {% data variables.product.prodname_discussions %} для репозитория, все пользователи, которые имеют доступ к репозиторию, могут создавать обсуждения для репозитория и участвовать в них. Если владелец организации включает {% data variables.product.prodname_discussions %} для организации, любой пользователь с доступом на просмотр исходного репозитория может создать обсуждение на уровне организации.

Администраторы репозитория и координаторы проектов могут управлять обсуждениями и категориями обсуждений в репозитории, а также закреплять обсуждения, чтобы повысить их видимость. Модераторы и участники совместной работы могут помечать комментарии как ответы, блокировать обсуждения и преобразовывать проблемы в обсуждения. Аналогичным образом, для обсуждений на уровне организации роль пользователя в исходном репозитории определяет то, как пользователь может взаимодействовать с обсуждениями на уровне организации. Дополнительные сведения см. в разделе [Роли репозитория для организации](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).

Дополнительные сведения об управлении обсуждениями см. в разделе [Управление обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions).

## Сведения об опросах

Вы можете создавать опросы в определенной категории, чтобы оценить интерес к новым идеям и направлению проекта. Любой пользователь с доступом на чтение к репозиторию может создавать опросы, голосовать в опросах и просматривать их результаты. {% ifversion fpt or ghec %} Пользователи, выполнившие выход из системы, могут просматривать результаты опросов в общедоступных репозиториях.{% endif %}

Опрос должен включать вопрос и по крайней мере два варианта ответа. Всего можно добавить не более восьми вариантов ответа, длина каждого из которых может быть не более 128 символов. 

Участники не могут изменять свои ответы. Изменение опроса приведет к сбросу всех уже отданных голосов.

Дополнительные сведения о создании опросов см. в разделе [Создание опроса](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion#creating-a-poll).

## Сведения об упорядочении обсуждений

Вы можете упорядочить обсуждения с помощью категорий и меток.

{% data reusables.discussions.you-can-categorize-discussions %} {% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.repository-category-limit %}

Для обсуждений в формате вопросов и ответов можно помечать отдельные комментарии как ответ на обсуждение. {% data reusables.discussions.github-recognizes-members %}

{% data reusables.discussions.about-announcement-format %}

Дополнительные сведения см. в разделе [Управление категориями обсуждений](/discussions/managing-discussions-for-your-community/managing-categories-for-discussions).

{% data reusables.discussions.you-can-label-discussions %}

## Рекомендации по {% data variables.product.prodname_discussions %}

Участники или координаторы сообщества могут начать обсуждение, чтобы задать вопрос или обсудить информацию, которая влияет на сообщество. Дополнительные сведения см. в разделе [Совместная работа с координаторами посредством обсуждений](/discussions/collaborating-with-your-community-using-discussions/collaborating-with-maintainers-using-discussions).

Участвуйте в обсуждении, чтобы задавать вопросы и отвечать на них, предоставлять отзывы и взаимодействовать с сообществом проекта. Дополнительные сведения см. в разделе [Участие в обсуждении](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion).

Вы можете выделить обсуждения, которые содержат важные, полезные или образцовые беседы между участниками сообщества. Дополнительные сведения см. в разделе [Управление обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions#pinning-a-discussion).

{% data reusables.discussions.you-can-convert-an-issue %} Дополнительные сведения см. в разделе [Модерация обсуждений](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion).

## Отправка отзывов

Вы можете отправить свои комментарии {% data variables.product.prodname_discussions %}, используя {% data variables.product.company_short %}. Чтобы присоединиться к беседе, см. [обсуждения {% data variables.product.prodname_github_community %}](https://github.com/orgs/community/discussions/categories/discussions).

## Дополнительные материалы

- [Сведения о записи и форматировании в {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)
- [Поиск обсуждений](/search-github/searching-on-github/searching-discussions)
- [Общие сведения об уведомлениях](/github/managing-subscriptions-and-notifications-on-github/about-notifications)
- "[Модерация комментариев и бесед](/communities/moderating-comments-and-conversations)"{% ifversion fpt or ghec %}
- "[Обеспечение безопасности в {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)"{% endif %}
