---
title: Совместная работа с координаторами с помощью обсуждений
shortTitle: Collaborating with maintainers
intro: 'Вы можете вносить свой вклад в цели, планы, работоспособность и сообщество для проекта в {% data variables.product.product_name %} путем взаимодействия с ответственными за проект в рамках обсуждения.'
permissions: 'People with read access to a repository can start and participate in discussions and polls in the repository. People with read access to the source repository for organization discussions can start and participate in discussions and polls in the organization. {% data reusables.enterprise-accounts.emu-permission-interact %}'
versions:
  feature: discussions
ms.openlocfilehash: f090088d55e946e67c1f0b5d790deca9fd794a90
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/05/2022
ms.locfileid: '147410254'
---
## О совместной работе с координаторами с помощью {% data variables.product.prodname_discussions %}

{% data reusables.discussions.about-discussions %} Если вы используете проект или участвуете в работе над ним, можно начать обсуждение, чтобы делать предположения и работать с координаторами и участниками сообщества в отношении ваших планов, вопросов, идей и отзывов. Дополнительные сведения см. в разделе [Сведения об обсуждениях](/discussions/collaborating-with-your-community-using-discussions/about-discussions).

{% data reusables.discussions.about-categories-and-formats %} {% data reusables.discussions.about-announcement-format %} 

Администраторы репозитория и ответственные за проект могут удалить обсуждение в этом репозитории. Точно так же администраторы и ответственные исходного репозитория для обсуждений организации могут удалить обсуждение в этой организации. Дополнительные сведения см. в разделе [Управление обсуждениями](/discussions/managing-discussions-for-your-community/managing-discussions#deleting-a-discussion).

{% data reusables.discussions.github-recognizes-members %} Эти участники отображаются в списке самых полезных участников обсуждений по проекту. По мере дальнейшего развития проекта вы можете предоставить участникам вашего сообщества более высокий уровень прав доступа. Дополнительные сведения см. в разделе [Предоставление более высокого уровня разрешений главным участникам](/discussions/guides/granting-higher-permissions-to-top-contributors)

![Самые эффективные участники обсуждений для проекта](/assets/images/help/discussions/most-helpful.png)

Дополнительные сведения об участии в обсуждениях см. в разделе [Участие в обсуждении](/discussions/collaborating-with-your-community-using-discussions/participating-in-a-discussion).

## Предварительные требования

Для совместной работы с ответственными лицами в обсуждениях администратор репозитория или ответственный за проект должен включить {% data variables.product.prodname_discussions %} для репозитория. Дополнительные сведения см. в разделе [Включение или отключение {% data variables.product.prodname_discussions %} для репозитория](/github/administering-a-repository/enabling-or-disabling-github-discussions-for-a-repository).

Для совместной работы с ответственными лицами в обсуждениях организации {% data variables.product.prodname_discussions %} должен быть включен для организации. Дополнительные сведения см. в разделе [Включение или отключение {% data variables.product.prodname_discussions %} для организации](/organizations/managing-organization-settings/enabling-or-disabling-github-discussions-for-an-organization).

## Создание обсуждения

{% data reusables.discussions.starting-a-discussion %}

## Запуск опроса

{% data reusables.discussions.starting-a-poll %}

## Фильтрация списка обсуждений

Можно выполнять поиск по обсуждениям и фильтровать список обсуждений в репозитории или организации. Дополнительные сведения см. в разделе [Поиск в обсуждениях](/search-github/searching-on-github/searching-discussions).

{% data reusables.discussions.navigate-to-repo-or-org %} {% data reusables.discussions.discussions-tab %}
1. В поле **Поиск по всем обсуждениям** введите поисковый запрос. При необходимости справа от поля поиска нажмите кнопку, чтобы отфильтровать результаты.
  ![Панель поиска и кнопки для фильтрации обсуждений](/assets/images/help/discussions/search-and-filter-controls.png)
1. В списке обсуждений щелкните обсуждение, которое нужно просмотреть.
  ![Результаты поиска обсуждений](/assets/images/help/discussions/search-result.png)

## Преобразование проблемы в обсуждение

{% data reusables.discussions.you-can-convert-an-issue %} Дополнительные сведения см. в разделе [Модерация обсуждений](/discussions/managing-discussions-for-your-community/moderating-discussions#converting-an-issue-to-a-discussion).

## Дополнительные материалы

- "[Сведения о записи и форматировании в {% data variables.product.prodname_dotcom %}](/github/writing-on-github/about-writing-and-formatting-on-github)" {%- ifversion fpt or ghec %}
- "[Обеспечение безопасности в {% data variables.product.prodname_dotcom %}](/communities/maintaining-your-safety-on-github)" {%- endif %}
