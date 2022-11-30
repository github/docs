---
title: Usar submódulos con las Páginas de GitHub
intro: 'Puedes usar submódulos con las {% data variables.product.prodname_pages %} para incluir otros proyectos en el código de tu sitio.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880802'
---
Si el repositorio para tu sitio de {% data variables.product.prodname_pages %} contiene submódulos, sus contenidos se extraerán automáticamente cuando se compile tu sitio.

Solo puedes usar submódulos que apunten a los repositorios públicos, porque el servidor de {% data variables.product.prodname_pages %} no puede acceder a los repositorios privados.

Use la dirección URL `https://` de solo lectura para los submódulos, incluidos los submódulos anidados. Puede realizar este cambio en el archivo _.gitmodules_.

## Información adicional

- "[Herramientas de Git - submódulos](https://git-scm.com/book/en/Git-Tools-Submodules)" del libro _Pro Git_
- "[Solución de problemas de errores de compilación de Jekyll para sitios de {% data variables.product.prodname_pages %}](/articles/troubleshooting-jekyll-build-errors-for-github-pages-sites)"
