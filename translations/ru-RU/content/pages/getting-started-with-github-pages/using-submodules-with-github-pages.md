---
title: Использование подмодулей вместе с GitHub Pages
intro: 'Дополнительные модули можно использовать с {% data variables.product.prodname_pages %}, чтобы включить другие проекты в код сайта.'
redirect_from:
  - /articles/using-submodules-with-pages
  - /articles/using-submodules-with-github-pages
  - /github/working-with-github-pages/using-submodules-with-github-pages
product: '{% data reusables.gated-features.pages %}'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Pages
shortTitle: Use submodules with Pages
ms.openlocfilehash: cfe863c3a7d77d006ee4c78e9d58302fb01e4dd4
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ru-RU
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880801'
---
Если репозиторий для сайта {% data variables.product.prodname_pages %} содержит подмодули, их содержимое будет автоматически извлекаться при сборке сайта.

Можно использовать только подмодули, указывающие на общедоступные репозитории, так как сервер {% data variables.product.prodname_pages %} не может получать доступ к частным репозиториям.

Используйте для своих подмодулей, в том числе вложенных подмодулей, URL-адрес `https://` только для чтения. Это изменение можно внести в файле _.gitmodules_.

## Дополнительные материалы

- Раздел [Инструменты Git — подмодули](https://git-scm.com/book/en/Git-Tools-Submodules) в книге _Pro Git_
- [Устранение ошибок сборки Jekyll для сайтов {% data variables.product.prodname_pages %} сайтов](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)
