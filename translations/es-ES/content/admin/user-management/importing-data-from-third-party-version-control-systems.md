---
title: Importar datos desde sistemas de control de versiones de terceros
intro: 'Usando el conjunto de herramientas git-import, puedes importar desde Subversion, Mercurial y Team Foundation Version Control a los repositorios Git en {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Migration
---

### Importar proyectos de Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Haz un clon sin procesar del proyecto mediante el comando a continuación, especificando la URL del proyecto de origen y una ruta a un repositorio temporal:
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Crea un nuevo repositorio con uno o más ref de Git en "refs/import/" en la ruta especificada.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Reescribe los autores y las ramas utilizando el archivo CSV:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si aún no lo has hecho, [ crea un nuevo repositorio vacío en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Sube el repositorio importado a {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importar proyectos de Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Haz un clon sin procesar del proyecto mediante el comando a continuación, especificando la URL del proyecto de origen y una ruta a un repositorio temporal:
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Crea un nuevo repositorio con uno o más ref de Git en "refs/import/" en la ruta especificada.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Reescribe los autores y las ramas utilizando el archivo CSV:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si aún no lo has hecho, [ crea un nuevo repositorio vacío en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Sube el repositorio importado a {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importar proyectos de Team Foundation Version Control

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Haz un clon sin procesar del proyecto mediante el comando a continuación, especificando la URL del proyecto de origen y una ruta a un repositorio temporal:
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Crea un nuevo repositorio con uno o más ref de Git en "refs/import/" en la ruta especificada.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Reescribe los autores y las ramas utilizando el archivo CSV:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Si aún no lo has hecho, [ crea un nuevo repositorio vacío en {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Sube el repositorio importado a {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Leer más

- "[Command-line-utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
