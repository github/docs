---
title: Синтаксис для форм категорий обсуждений
shortTitle: Syntax for discussion category forms
intro: Для определения полей в формах категорий обсуждений можно использовать синтаксис YAML.
versions:
  feature: discussion-category-forms
ms.openlocfilehash: 73bb77967d5a7db3452e067c35d567a8279a0cb2
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 12/09/2022
ms.locfileid: '148193563'
---
{% data reusables.discussions.discussion-category-forms-beta %}

## Сведения о синтаксисе YAML для форм категорий обсуждений

Вы можете создать настраиваемые формы категорий обсуждений, добавив файл определения формы YAML в папку `/.github/DISCUSSION_TEMPLATE/` в репозитории. {% data reusables.actions.learn-more-about-yaml %} 

{% data reusables.discussions.discussion-category-forms-name %}

Для каждого поля можно определить тип входных данных, проверку и метку по умолчанию.

Когда участник сообщества заполняет форму обсуждения, его ответы на каждый входные данные преобразуются в markdown и добавляются в текст обсуждения. Участники сообщества могут изменять свои обсуждения, созданные с помощью формы обсуждения, а другие пользователи могут взаимодействовать с обсуждением, как обсуждение, созданное с помощью других методов.

В этом примере файла конфигурации YAML определяется форма категории общих обсуждений.

{% data reusables.discussions.discussion-category-forms-sample %}

## Общий синтаксис

Файл конфигурации для формы категории обсуждения должен содержать `body` ключ, а `body` должен содержать по крайней мере 1 поле, отличное от Markdown.

```YAML{:copy}
body:
- type: input
  id: suggestion
  attributes:
    label: Suggestion
    description: "How might we make this project better?"
    placeholder: "Adding a CODE_OF_CONDUCT.md file would be a great idea."
  validations:
    required: true
```

Для каждой формы проблемы можно задать следующие ключи верхнего уровня.

| Ключ | Описание | Обязательно | Тип |
| :-- | :-- | :-- | :-- | :-- |
| `body` | Определение типов входных данных в форме обсуждения. | Обязательно | Array |
| `labels` | Метки, которые будут автоматически добавлены в обсуждения, созданные с помощью этого шаблона. | Необязательно | Массив или строка с разделителями-запятыми |
| `title` | Заголовок по умолчанию, который будет предварительно заполнен в форме отправки обсуждения. | Необязательно | Строка |

Чтобы добавить поля в форму, включите в `body` ключ массив элементов формы. Список доступных элементов и их синтаксис см. в разделе [Синтаксис для схемы формы {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).
