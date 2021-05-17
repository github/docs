---
title: Importing data from third-party version control systems
intro: 'Using the git-import suite of tools, you can import from Subversion, Mercurial and Team Foundation Version Control to Git repositories on {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
  - /enterprise/admin/user-management/importing-data-from-third-party-version-control-systems
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

### Importing projects from Mercurial

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importing projects from Subversion

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Importing projects from Team Foundation Version Control

{% data reusables.enterprise_installation.ssh-into-instance %}
2. Make a raw clone of the project using the command below, specifying the URL of the source project, and a path to a temporary repository:
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Creates a new repository with one or more Git refs in "refs/import/" in the specified path.
  ```
{% data reusables.enterprise_migrations.review-the-import-csv %}
4. Rewrite the authors and branches using the CSV file:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. If you haven't yet, [create a new empty repository on {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository).
{% data reusables.command_line.switching_directories_procedural %}
7. Push the imported repository to {% data variables.product.prodname_ghe_server %}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### 더 읽을거리

- "[Command-line-utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
