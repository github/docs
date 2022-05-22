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
shortTitle: Herramientas de migración de código
---

{% ifversion fpt or ghec %}

Te recomendamos utilizar el [Importador de GitHub](/articles/about-github-importer) para importar proyectos de Subversion, Mercurial, Team Foundation Version Control (TFVC) u otro repositorio de Git. También puedes utilizar estas herramientas externas para convertir tus proyectos a Git.

{% endif %}

## Importar desde Subversion

En un entorno normal de Subversion, se almacenan varios proyectos en un único repositorio raíz. On GitHub, each of these projects will usually map to a separate Git repository for a personal account or organization. Sugerimos importar cada parte de tu repositorio de Subversion a un repositorio de GitHub separado si:

* Los colaboradores necesitan revisar o confirmar esa parte del proyecto de forma separada desde las otras partes
* Deseas que distintas partes tengan sus propios permisos de acceso

Recomendamos estas herramientas para convertir repositorio de Subversion a Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

## Importar desde Mercurial

Recomendamos [hg-fast-export](https://github.com/frej/fast-export) para convertir repositorios de Mercurial a Git.

## Importar desde TFVC

Te recomendamos utilizar [git-tfs](https://github.com/git-tfs/git-tfs) para mover los cambios entre TFVC y Git.

Para obtener más información acerca de migrarse de TFVC (un sistema de control de versiones centralizado) a Git, consulta la sección "[Planea tu migración a Git](https://docs.microsoft.com/devops/develop/git/centralized-to-git)" del sitio de documentos de Microsoft.

{% tip %}

**Sugerencia:** después de haber convertido con éxito tu proyecto a Git, puedes [subirlo a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% ifversion fpt or ghec %}

## Leer más

- "[Acerca del Importador GitHub](/articles/about-github-importer)"
- "[Importar un repositorio con Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
