---
title: Создание рекомендаций для участников репозитория
intro: 'Вы можете создать рекомендации, чтобы сообщить о том, как пользователи должны участвовать в проекте.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
redirect_from:
  - /articles/how-do-i-set-up-guidelines-for-contributors
  - /articles/setting-guidelines-for-repository-contributors
  - /github/building-a-strong-community/setting-guidelines-for-repository-contributors
topics:
  - Community
shortTitle: Contributor guidelines
ms.openlocfilehash: 3085567f51950890c168b795aff3cac89b92a3a6
ms.sourcegitcommit: 5f40f9341dd1e953f4be8d1642f219e628e00cc8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/04/2022
ms.locfileid: '148009143'
---
## Сведения о рекомендациях по участию в разработке
Чтобы пользователи, участвующие в разработке проекта, могли качественно выполнять свою работу, добавьте файл с рекомендациями по внесению вклада в корневой каталог `docs` репозитория проекта или в папку `.github`. Когда кто-то открывает запрос на вытягивание или создает проблему, он увидит ссылку на этот файл. Ссылка на рекомендации по участию в разработке также отображается на странице `contribute` репозитория. Пример страницы `contribute` см. здесь: [статье github/docs/contribute](https://github.com/github/docs/contribute). 

![contributing-guidelines](/assets/images/help/pull_requests/contributing-guidelines.png)

Для владельца репозитория рекомендации по участию в разработке представляют собой способ информирования о том, как люди должны вносить свой вклад.

Следуя рекомендация, участники могут быть уверены, что они отправляют правильно сформированные запросы на вытягивание и открывают полезные проблемы.

Как для владельцев, так и для участников, рекомендации по участию в разработке экономят время и силы, затрачиваемые на неправильное созданные запросы на вытягивание или проблемы, которые приходится отклонять и отправлять заново.

{% ifversion fpt or ghes or ghec %}

Вы можете создать рекомендации по участию в разработке по умолчанию для организации{% ifversion fpt or ghes or ghec %} или личной учетной записи{% endif %}. Дополнительные сведения см. в статье "[Создание файла работоспособности сообщества по умолчанию](//communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% endif %}

{% tip %}

**Совет.** Издатели репозитория могут предоставлять конкретные рекомендации по проблемам, создавая шаблон запроса на вытягивание или проблему для репозитория. Дополнительные сведения см. в статье "[Сведения о шаблонах проблем и запросов на вытягивание](/articles/about-issue-and-pull-request-templates).

{% endtip %}

## Добавление файла *CONTRIBUTING*

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Решите, где следует хранить рекомендации по участию в разработке: в корневом каталоге репозитория `docs` или в каталоге `.github`. Затем в поле имени файла введите имя и расширение файла. В именах файлов рекомендаций по участию в разработке не учитывается регистр. Файлы отображаются в виде форматированного текста, если расширение файла находится в поддерживаемом формате. Дополнительные сведения см. в статье [Работа с файлами, не связанными с кодом](/repositories/working-with-files/using-files/working-with-non-code-files#rendering-differences-in-prose-documents).
  ![Имя нового файла](/assets/images/help/repository/new-file-name.png)
    - Чтобы сделать рекомендации по участию в разработке видимыми в корневом каталоге репозитория, введите *CONTRIBUTING*.
    - Чтобы сделать рекомендации по участию в разработке видимыми в каталоге `docs` репозитория, введите *docs/* , чтобы создать каталог, а затем введите *CONTRIBUTING*.
    - Если репозиторий содержит несколько файлов *CONTRIBUTING*, файл, отображаемый по ссылкам, выбирается из расположений в следующем порядке: каталог `.github`, корневой каталог репозитория и, наконец, каталог `docs`.
4. Добавьте рекомендации по участию в разработке в новый файл. Это могут быть:
    - Действия по созданию полезных проблем или запросов на вытягивание.
    - Ссылки на внешнюю документацию, списки рассылки или правила поведения.
    - Ожидания сообщества и поведенческие ожидания.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Примеры рекомендаций по участию в разработке

Если вы в замешательстве, вот несколько хороших примеров рекомендаций:

- [Рекомендации по вкладу](https://github.com/github/docs/blob/main/CONTRIBUTING.md) в {% данных variables.product.prodname_docs %}.
- [Рекомендации по участию в разработке](https://github.com/rails/rails/blob/main/CONTRIBUTING.md) для Ruby on Rails.
- [Рекомендации по участию в разработке](https://github.com/opengovernment/opengovernment/blob/master/CONTRIBUTING.md) для Open Government.

## Дополнительные материалы
- Раздел "[Начало разработки проекта с открытым кодом](https://opensource.guide/starting-a-project/)" руководства по проектам с открытым кодом{% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}{% ifversion fpt or ghes or ghec %}
- "[Добавление лицензии в репозиторий](/articles/adding-a-license-to-a-repository)"{% endif %}
