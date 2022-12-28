---
title: Сведения о файлах сведений
intro: 'Можно добавить файл сведений в репозиторий, чтобы сообщить другим людям, чем полезен проект, что они могут с ним делать и как его использовать.'
redirect_from:
  - /articles/section-links-on-readmes-and-blob-pages
  - /articles/relative-links-in-readmes
  - /articles/about-readmes
  - /github/creating-cloning-and-archiving-repositories/about-readmes
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-readmes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 146f1a33eb4de224625b9603b27d2f383e55c54d
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163339'
---
## Сведения о файлах сведений

{% data reusables.repositories.about-READMEs %}

Дополнительные сведения о предоставлении рекомендаций для проекта см. в разделе {% ifversion fpt or ghec %}"[Добавление правил поведения в ваш проект](/communities/setting-up-your-project-for-healthy-contributions/adding-a-code-of-conduct-to-your-project)" and {% endif %}"[Настройка вашего проекта для эффективного внесения вклада](/communities/setting-up-your-project-for-healthy-contributions)."

Файл README часто является первым объектом, который пользователь видит в репозитории. Файлы README обычно включают в себя следующие сведения:
- что делает проект;
- почему проект полезен;
- как пользователи могут приступить к работе с проектом;
- где пользователи могут получить помощь по проекту;
- кто поддерживает проект и вносит вклад в проект.

Если поместить файл README в скрытый каталог `.github`, корневой каталог или каталог `docs`, {% data variables.product.product_name %} распознает и автоматически отобразит файл README для посетителей репозитория.

Если репозиторий содержит несколько файлов README, файл для отображения выбирается из расположений в следующем порядке: каталог `.github`, корневой каталог репозитория и, наконец, каталог `docs`.

![Главная страница репозитория github/scientist и его файл README](/assets/images/help/repository/repo-with-readme.png)

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

{% endif %}

![Файл README в репозитории username/username](/assets/images/help/repository/username-repo-with-readme.png)

## Автоматическое оглавление для файлов README

Для просмотра любого файла Markdown в репозитории, включая файлы README, {% data variables.product.product_name %} автоматически создаст оглавление на основе заголовков разделов. Вы можете просмотреть оглавление файла README, щелкнув значок меню {% octicon "list-unordered" aria-label="The unordered list icon" %} в левом верхнем углу отображаемой страницы.

![Файл README с автоматически созданным оглавлением](/assets/images/help/repository/readme-automatic-toc.png)

## Ссылки на разделы в файлах README и на страницах BLOB-объектов

{% data reusables.repositories.section-links %}

## Относительные ссылки и пути к изображениям в файлах README

{% data reusables.repositories.relative-links %}

## Вики

Файл README должен содержать только ту информацию, которая необходима разработчикам, чтобы приступить к использованию проекта и внести свой вклад в проект. Более длинную документацию удобнее размещать на вики-сайтах. Дополнительные сведения см. в статье "[Сведения о вики-страницах](/communities/documenting-your-project-with-wikis/about-wikis)".

## Дополнительные материалы

- [Добавление файла в репозиторий](/articles/adding-a-file-to-a-repository)
- 18F's "[Создание понятных README](https://github.com/18F/open-source-guide/blob/18f-pages/pages/making-readmes-readable.md)" {%- ifversion fpt or ghec %} 
- [Добавление значка "Открыть в GitHub Codespaces"](/codespaces/setting-up-your-project-for-codespaces/adding-a-codespaces-badge) {%- endif %}   
