---
title: Лицензирование репозитория
intro: 'Общедоступные репозитории в GitHub часто применяются для совместного использования ПО с открытым кодом. Чтобы репозиторий действительно был репозиторием с открытым кодом, вам потребуется лицензировать его, чтобы другие пользователи могли использовать, изменять и распространять программное обеспечение.'
redirect_from:
  - /articles/open-source-licensing
  - /articles/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/licensing-a-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 98ccb37379d8d639e02e98afab5bd170cca581c7
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098014'
---
## Выбор подходящей лицензии

Мы создали [choosealicense.com](https://choosealicense.com), чтобы помочь вам понять, как лицензировать код. Лицензия на программное обеспечение сообщает другим пользователям, что им можно делать с исходным кодом, а что делать нельзя, поэтому им важно принять обоснованное решение.

Вы не обязаны выбирать лицензию. Однако без лицензии применяются законы об авторских правах по умолчанию, то есть вы сохраняете все права на исходный код, а остальным запрещено воспроизводить и распространять вашу работу и создавать производные от нее. Если вы создаете проект с открытым кодом, мы настоятельно рекомендуем включить лицензию с открытым кодом. [Руководство по открытому коду](https://opensource.guide/legal/#which-open-source-license-is-appropriate-for-my-project) предоставляет дополнительные рекомендации по выбору правильной лицензии для проекта.

{% note %}

**Примечание:** Если вы публикуете исходный код в общедоступном репозитории на {% данных variables.product.product_name %}, {% ifversion fpt или ghec %}согласно [условиям обслуживания](/free-pro-team@latest/github/site-policy/github-terms-of-service), {% endif %}другие пользователи {% данных variables.location.product_location %} имеют право просматривать и вилку репозитория. Если вы уже создали репозиторий и больше не хотите, чтобы пользователи имели доступ к нему, вы можете сделать репозиторий закрытым. При изменении видимости репозитория на частный, существующие вилки или локальные экземпляры, созданные другими пользователями, по-прежнему будут существовать. Дополнительные сведения см. в разделе [Настройка видимости репозитория](/github/administering-a-repository/setting-repository-visibility).

{% endnote %}

## Определение расположения лицензии

Большинство пользователей помещают текст лицензии в файл с именем `LICENSE.txt` (или `LICENSE.md`) `LICENSE.rst`в корень репозитория. [Вот пример от Hubot](https://github.com/github/hubot/blob/master/LICENSE.md).

В некоторых проектах сведения о лицензии приводятся в файле README. Например, README проекта может включать примечание о том, что этот проект лицензирован в соответствии с условиями лицензии MIT.

Рекомендуется включить в проект отдельные файл лицензии.

## Поиск в GitHub по типу лицензии

Вы можете отфильтровать репозитории на основе их лицензии или семейства лицензий с помощью квалификатора `license` и точного ключевого слова лицензии:

Лицензия | Ключевое слово лицензии
---  | ---
| Academic Free License v3.0 | `afl-3.0` |
| Apache license 2.0 | `apache-2.0` |
| Artistic license 2.0 | `artistic-2.0` |
| Boost Software License 1.0 | `bsl-1.0` |
| BSD 2-clause "Simplified" license | `bsd-2-clause` |
| BSD 3-clause "New" or "Revised" license | `bsd-3-clause` |
| BSD 3-clause Clear license | `bsd-3-clause-clear` |
| Creative Commons license family | `cc` |
| Creative Commons Zero v1.0 Universal | `cc0-1.0` |
| Creative Commons Attribution 4.0 | `cc-by-4.0` |
| Creative Commons Attribution Share Alike 4.0 | `cc-by-sa-4.0` |
| Do What The F*ck You Want To Public License | `wtfpl` |
| Educational Community License v2.0 | `ecl-2.0` |
| Eclipse Public License 1.0 | `epl-1.0` |
| Eclipse Public License 2.0 | `epl-2.0` |
| European Union Public License 1.1 | `eupl-1.1` |
| GNU Affero General Public License v3.0 | `agpl-3.0` |
| GNU General Public License family | `gpl` |
| GNU General Public License v2.0 | `gpl-2.0` |
| GNU General Public License v3.0 | `gpl-3.0` |
| GNU Lesser General Public License family | `lgpl` |
| GNU Lesser General Public License v2.1 | `lgpl-2.1` |
| GNU Lesser General Public License v3.0 | `lgpl-3.0` |
| ISC | `isc` |
| LaTeX Project Public License v1.3c | `lppl-1.3c` |
| Microsoft Public License | `ms-pl` |
| MIT | `mit` |
| Mozilla Public License 2.0 | `mpl-2.0` |
| Open Software License 3.0 | `osl-3.0` |
| PostgreSQL License | `postgresql` |
| SIL Open Font License 1.1 | `ofl-1.1` |
| University of Illinois/NCSA Open Source License | `ncsa` |
| The Unlicense | `unlicense` |
| zLib License | `zlib` |

При поиске по семейству лицензий результаты будут включать все лицензии в этом семействе. Например, при использовании запроса `license:gpl` результаты будут включать репозитории, лицензированные в соответствии с GNU General Public License v2.0 и GNU General Public License v3.0. Дополнительные сведения см. в статье "[Поиск репозиториев](/search-github/searching-on-github/searching-for-repositories/#search-by-license)".

## Обнаружение лицензии

Gem Ruby с открытым кодом [Licensee](https://github.com/licensee/licensee) сравнивает файл *LICENSE* репозитория с коротким списком известных лицензий. Licensee также предоставляет [Licenses API](/rest/reference/licenses) и [дает нам представление о том, как лицензированы репозитории в {% data variables.product.product_name %}](https://github.com/blog/1964-open-source-license-usage-on-github-com). Если ваш репозиторий использует лицензию, которая не указана на [веб-сайте выбора лицензии](https://choosealicense.com/appendix/), вы можете [запросить лицензию](https://github.com/github/choosealicense.com/blob/gh-pages/CONTRIBUTING.md#adding-a-license).

Если репозиторий использует лицензию, указанную на веб-сайте выбора лицензии, и она не отображается в верхней части страницы репозитория, он может содержать несколько лицензий или другие сложности. Чтобы вашу лицензию было легко обнаружить, упростите файл *LICENSE* и укажите сложность в другом месте, например в файле *README* репозитория.

## Применение лицензии к репозиторию с существующей лицензией

Средство выбора лицензии доступно только при создании нового проекта на GitHub. Вы можете вручную добавить лицензию с помощью браузера. Дополнительные сведения о добавлении лицензии в репозиторий см. в статье [Добавление лицензии в репозиторий](/articles/adding-a-license-to-a-repository).

![Снимок экрана: средство выбора лицензии на сайте GitHub.com](/assets/images/help/repository/repository-license-picker.png)

## Отказ от ответственности

Цель лицензирования открытого кода GitHub заключается в предоставлении отправной точки, чтобы помочь вам сделать обоснованный выбор. GitHub отображает сведения о лицензиях, чтобы помочь пользователям получать сведения о лицензиях с открытым кодом и проектах, которые их используют. Мы надеемся, что это поможет, но, пожалуйста, имейте в виду, что мы не юристы и можем ошибаться, как и все остальные. По этой причине GitHub предоставляет информацию на условиях "как есть" и не дает никаких гарантий в отношении какой-либо информации или лицензий, предоставленных в нем или им, а также отказывается от ответственности за ущерб, вызванный использованием информации о лицензиях. Если у вас возникли вопросы о выборе лицензии для вашего кода или любые другие юридические вопросы по этой теме, всегда лучше проконсультироваться с профессионалом.

## Дополнительные материалы

- Раздел руководств по открытому коду [Юридическая сторона открытого кода](https://opensource.guide/legal/){% ifversion fpt or ghec %}
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}){% endif %}
