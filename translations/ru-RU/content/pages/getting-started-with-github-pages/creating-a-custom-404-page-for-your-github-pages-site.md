---
title: Создание настраиваемой страницы 404 для сайта GitHub Pages
intro: 'Пользовательскую страницу с ошибкой 404 можно отображать, когда пользователи пытаются получить доступ к несуществующим страницам на сайте.'
redirect_from:
  - /articles/custom-404-pages
  - /articles/creating-a-custom-404-page-for-your-github-pages-site
  - /github/working-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Create custom 404 page
ms.openlocfilehash: 1b10946277d90773b847b929d85a3b6cf8212a4e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880568'
---
{% data reusables.pages.navigate-site-repo %} {% data reusables.pages.navigate-publishing-source %} {% data reusables.files.add-file %}
3. В поле имени файла введите `404.html` или `404.md`.
  ![Поле имени файла](/assets/images/help/pages/404-file-name.png)
4. Если вы дали вашему файлу имя `404.md`, добавьте в начало файла следующий вступительный блок YAML:
  ```yaml
  ---
  permalink: /404.html
  ---
  ```
5. Под вступительным блоком YAML (если он существует) добавьте содержимое, которое вы хотите отобразить на своей странице 404.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Дополнительные материалы

- [Вступительный блок](http://jekyllrb.com/docs/frontmatter) в документации Jekyll
