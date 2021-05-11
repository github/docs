---
title: Importar dados de sistemas de controle de versão de terceiros
intro: 'Usando o conjunto de ferramentas git-import, é possível fazer importações dos controles de versão do Subversion, do Mercurial e do Team Foundation para repositórios do Git no {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Importar projetos do Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Faça um clone bruto do projeto usando o comando abaixo. Especifique a URL do projeto de origem e um caminho para um repositório temporário:
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rescreva os autores e branches usando o arquivo CSV:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Caso ainda não tenha feito isso, [crie um repositório vazio no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Faça push do repositório importado para o {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importar projetos do Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Faça um clone bruto do projeto usando o comando abaixo. Especifique a URL do projeto de origem e um caminho para um repositório temporário:
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rescreva os autores e branches usando o arquivo CSV:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Caso ainda não tenha feito isso, [crie um repositório vazio no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Faça push do repositório importado para o {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importar projetos do Team Foundation

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Faça um clone bruto do projeto usando o comando abaixo. Especifique a URL do projeto de origem e um caminho para um repositório temporário:
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rescreva os autores e branches usando o arquivo CSV:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. Caso ainda não tenha feito isso, [crie um repositório vazio no {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Faça push do repositório importado para o {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Leia mais

- "[Command-line-utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
