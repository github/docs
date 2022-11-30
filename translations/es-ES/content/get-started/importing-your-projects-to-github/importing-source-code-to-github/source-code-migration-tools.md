---
title: Herramientas de migración de código fuente
intro: Puedes utilizar herramientas externas para mover tus proyectos a GitHub.
redirect_from:
  - /articles/importing-from-subversion
  - /articles/source-code-migration-tools
  - /github/importing-your-projects-to-github/source-code-migration-tools
  - /github/importing-your-projects-to-github/importing-source-code-to-github/source-code-migration-tools
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Code migration tools
ms.openlocfilehash: 7877d435e7971f669d9d49a70d2d2450371b5159
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882171'
---
{% ifversion fpt or ghec %}

Se recomienda usar [GitHub Importer](/articles/about-github-importer) para importar proyectos desde Subversion, Mercurial, Control de versiones de Team Foundation (TFVC) u otro repositorio de Git. También puedes utilizar estas herramientas externas para convertir tus proyectos a Git.

{% endif %}

## Importar desde Subversion

En un entorno normal de Subversion, se almacenan varios proyectos en un único repositorio raíz. En GitHub, cada uno de estos proyectos generalmente se asignará a un repositorio de Git independiente para una cuenta personal o de organización. Sugerimos importar cada parte de tu repositorio de Subversion a un repositorio de GitHub separado si:

* Los colaboradores necesitan revisar o confirmar esa parte del proyecto de forma separada desde las otras partes
* Deseas que distintas partes tengan sus propios permisos de acceso

Recomendamos estas herramientas para convertir repositorio de Subversion a Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importar desde Mercurial

Se recomienda [hg-fast-export](https://github.com/frej/fast-export) para convertir repositorios de Mercurial a Git.

## Importar desde TFVC

Se recomienda [git-tfs](https://github.com/git-tfs/git-tfs) para mover los cambios entre TFVC y Git.

Para más información sobre cómo pasar de TFVC (un sistema de control de versiones centralizado) a Git, vea "[Planificación de la migración a Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" en el sitio de Microsoft Docs.

{% tip %}

**Sugerencia:** Después de convertir correctamente el proyecto a Git, puede [insertarlo en {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Información adicional

- "[Acerca de GitHub Importer](/articles/about-github-importer)"
- "[Importar un repositorio con el Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
