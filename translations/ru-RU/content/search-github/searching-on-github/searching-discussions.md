---
title: Поиск обсуждений
intro: 'Вы можете искать обсуждения в {% data variables.product.product_name %} и фильтровать результаты с помощью квалификаторов поиска.'
versions:
  feature: discussions
topics:
  - GitHub search
redirect_from:
  - /github/searching-for-information-on-github/searching-discussions
  - /github/searching-for-information-on-github/searching-on-github/searching-discussions
ms.openlocfilehash: 4a1224d05cd78a0b701e7bc2a9e93a1c5a837bcd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147410454'
---
## Сведения о поиске обсуждений

Вы можете искать обсуждения глобально на всем сайте {% data variables.product.product_name %}, в определенной организации или в определенном репозитории. Дополнительные сведения см. в разделе [Поиск в {% data variables.product.prodname_dotcom %}](/github/searching-for-information-on-github/about-searching-on-github).

{% data reusables.search.syntax_tips %}

## Поиск по названию, тексту или комментариям

С помощью квалификатора `in` можно ограничить поиск обсуждений заголовком, текстом или комментариями. Вы также можете сочетать квалификаторы для поиска по комбинации заголовка, текста или комментариев. Если опустить квалификатор `in`, {% data variables.product.product_name %} выполнит поиск по заголовку, тексту и комментариям.

| Квалификатор | Пример |
| :- | :- |
| `in:title` | Запросу [**welcome in:title**](https://github.com/search?q=welcome+in%3Atitle&type=Discussions) соответствуют обсуждения со словом "welcome" в заголовке. |
| `in:body` | Запросу [**onboard in:title,body**](https://github.com/search?q=onboard+in%3Atitle%2Cbody&type=Discussions) соответствуют обсуждения со словом "onboard" в заголовке или тексте. |
| `in:comments` | Запросу [**thanks in:comments**](https://github.com/search?q=thanks+in%3Acomment&type=Discussions) соответствуют обсуждения со словом "thanks" в комментариях к обсуждению. |

## Поиск в репозиториях пользователя или организации

Для поиска обсуждений во всех репозиториях, принадлежащих определенному пользователю или организации, можно использовать квалификатор `user` или `org`. Для поиска обсуждений в определенном репозитории можно использовать квалификатор `repo`.

| Квалификатор | Пример |
| :- | :- |
| <code>user:<em>USERNAME</em></code> | Запросу [**user:octocat feedback**](https://github.com/search?q=user%3Aoctocat+feedback&type=Discussions) соответствуют обсуждения со словом "feedback" в репозиториях, принадлежащих @octocat. |
| <code>org:<em>ORGNAME</em></code> | Запросу [**org:github**](https://github.com/search?q=org%3Agithub&type=Discussions&utf8=%E2%9C%93) соответствуют обсуждения в репозиториях, принадлежащих организации GitHub. |
| <code>repo:<em>USERNAME/REPOSITORY</em></code> | Запросу [**repo:nodejs/node created:<2021-01-01**](https://github.com/search?q=repo%3Anodejs%2Fnode+created%3A%3C2020-01-01&type=Discussions) соответствуют обсуждения из проекта среды выполнения Node.js @nodejs, созданные до января 2021 года. |

## Фильтрация по видимости репозитория

Вы можете выполнять фильтрацию по видимости репозитория, содержащего обсуждения, с помощью квалификатора `is`. Дополнительные сведения см. в разделе [Сведения о репозиториях](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

| Квалификатор | Пример | :- | :- |{% ifversion fpt or ghes or ghec %} | `is:public` | Запросу [**is:public**](https://github.com/search?q=is%3Apublic&type=Discussions) соответствуют обсуждения в общедоступных репозиториях.{% endif %}{% ifversion ghec %} | `is:internal` | Запросу [**is:internal**](https://github.com/search?q=is%3Ainternal&type=Discussions) соответствуют обсуждения во внутренних репозиториях.{% endif %} | `is:private` | Запросу [**is:private tiramisu**](https://github.com/search?q=is%3Aprivate+tiramisu&type=Discussions) соответствуют обсуждения со словом "tiramisu" в доступных вам частных репозиториях.

## Поиск по автору

Квалификатор `author` позволяет находить обсуждения, созданные определенным пользователем.

| Квалификатор | Пример |
| :- | :- |
| <code>author:<em>USERNAME</em></code> | Запросу [**cool author:octocat**](https://github.com/search?q=cool+author%3Aoctocat&type=Discussions) соответствуют обсуждения со словом "cool", созданные @octocat. |
| | Запросу [**bootstrap in:body author:octocat**](https://github.com/search?q=bootstrap+in%3Abody+author%3Aoctocat&type=Discussions) соответствуют обсуждения со словом "bootstrap" в тексте, созданные @octocat. |

## Поиск по комментатору

Квалификатор `commenter` позволяет находить обсуждения, содержащие комментарий определенного пользователя.

| Квалификатор | Пример |
| :- | :- |
| <code>commenter:<em>USERNAME</em></code> | Запросу [**github commenter:becca org:github**](https://github.com/search?utf8=%E2%9C%93&q=github+commenter%3Abecca+org%3Agithub&type=Discussions) соответствуют обсуждения со словом "github" и комментарием от пользователя @becca в репозиториях, принадлежащих GitHub.

## Поиск по пользователю, участвующему в обсуждении

С помощью квалификатора `involves` можно находить обсуждения, в которых участвует определенный пользователь. Квалификатор возвращает обсуждения, созданные определенным пользователем, в которых он упоминается или в которых содержатся комментарии пользователя. Квалификатор `involves` является логическим ИЛИ, применяемым к квалификаторам `author`, `mentions` и `commenter` для одного пользователя.

| Квалификатор | Пример |
| :- | :- |
| <code>involves:<em>USERNAME</em></code> | Запросу **[involves:becca involves:octocat](https://github.com/search?q=involves%3Abecca+involves%3Aoctocat&type=Discussions)** соответствуют обсуждения, в которых участвует пользователь @becca или @octocat.
| | Запросу [**NOT beta in:body involves:becca**](https://github.com/search?q=NOT+beta+in%3Abody+involves%3Abecca&type=Discussions) соответствуют обсуждения, в которых участвует пользователь @becca и которые не содержат слова "beta" в тексте.

## Поиск по количеству комментариев

Для поиска по количеству комментариев вы можете использовать квалификатор `comments` вместе с квалификаторами "больше чем", "меньше чем" и квалификаторами диапазона. Для получения дополнительной информации см. раздел [Основные сведения о различных ролях](/github/searching-for-information-on-github/understanding-the-search-syntax).

| Квалификатор | Пример |
| :- | :- |
| <code>comments:<em>n</em></code> | Запросу [**comments:&gt;100**](https://github.com/search?q=comments%3A%3E100&type=Discussions) соответствуют обсуждения с более чем 100 комментариями.
| | Запросу [**comments:500..1000**](https://github.com/search?q=comments%3A500..1000&type=Discussions) соответствуют проблемы с количеством комментариев от 500 до 1000.

## Поиск по времени создания или последнего обновления обсуждения

Обсуждения можно фильтровать по времени создания или последнего обновления. Для фильтрации по времени создания обсуждения можно использовать квалификатор `created`, а для фильтрации по времени последнего обновления — квалификатор `updated`.

Оба квалификатора принимают дату в качестве параметра. {% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Квалификатор | Пример |
| :- | :- |
| <code>created:<em>YYYY-MM-DD</em></code> | Запросу [**created:>2020-11-15**](https://github.com/search?q=created%3A%3E%3D2020-11-15&type=discussions) соответствуют обсуждения, созданные после 15 ноября 2020 г.
| <code>updated:<em>YYYY-MM-DD</em></code> | Запросу [**weird in:body updated:>=2020-02-01**](https://github.com/search?q=weird+in%3Abody+updated%3A%3E%3D2020-12-01&type=Discussions) соответствуют обсуждения со словом "weird" в тексте, которые были обновлены после 1 февраля 2020 г.

## Дополнительные материалы

- [Сортировка результатов поиска](/search-github/getting-started-with-searching-on-github/sorting-search-results/)
