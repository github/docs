---
title: Herramientas de migración de código fuente
intro: Puedes utilizar herramientas externas para mover tus proyectos a GitHub.
redirect_from:
  - /articles/importing-from-subversion/
  - /articles/source-code-migration-tools
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}

We recommend using [GitHub Importer](/articles/about-github-importer) to import projects from Subversion, Mercurial, Team Foundation Version Control (TFVC), or another Git repository. También puedes utilizar estas herramientas externas para convertir tus proyectos a Git.

{% endif %}

### Importar desde Subversion

En un entorno normal de Subversion, se almacenan varios proyectos en un único repositorio raíz. En GitHub, cada uno de estos proyectos generalmente se mapeará a un repositorio de Git separado para una cuenta de usuario o de organización. Sugerimos importar cada parte de tu repositorio de Subversion a un repositorio de GitHub separado si:

* Los colaboradores necesitan revisar o confirmar esa parte del proyecto de forma separada desde las otras partes
* Deseas que distintas partes tengan sus propios permisos de acceso

Recomendamos estas herramientas para convertir repositorio de Subversion a Git:

- [`git-svn`](https://git-scm.com/docs/git-svn)
- [svn2git](https://github.com/nirvdrum/svn2git)

### Importar desde Mercurial

Recomendamos [hg-fast-export](https://github.com/frej/fast-export) para convertir repositorios de Mercurial a Git.

### Importing from TFVC

We recommend [git-tfs](https://github.com/git-tfs/git-tfs) for moving changes between TFVC and Git.

{% tip %}

**Sugerencia:** después de haber convertido con éxito tu proyecto a Git, puedes [subirlo a {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/pushing-commits-to-a-remote-repository/).

{% endtip %}

{% if currentVersion == "free-pro-team@latest" %}

### Leer más

- "[Acerca del Importador GitHub](/articles/about-github-importer)"
- "[Importar un repositorio con Importador GitHub](/articles/importing-a-repository-with-github-importer)"
- [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %})

{% endif %}
