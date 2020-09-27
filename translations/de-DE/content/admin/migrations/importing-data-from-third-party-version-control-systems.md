---
title: Daten aus Drittanbieter-Quellcodeverwaltungssystemen importieren
intro: 'Mit der Reihe an „git-import“-Tools können Sie in Git-Repositorys auf {{ site.data.variables.product.prodname_ghe_server }} Elemente von Subversion, Mercurial und der Team Foundation-Versionskontrolle importieren.'
redirect_from:
  - /enterprise/admin/migrations/importing-data-from-third-party-version-control-systems
versions:
  enterprise-server: '*'
---

### Projekte aus Mercurial importieren

{{ site.data.reusables.enterprise_installation.ssh-into-instance }}
2. Erstellen Sie einen Klon im Rohdatenformat des Projekts. Führen Sie dazu den folgenden Befehl aus. Geben Sie dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-hg-raw <em>HG-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Erstellt ein neues Repository mit mindestens einem Git-Ref in „refs/import/“ am angegebenen Pfad.
  ```
{{ site.data.reusables.enterprise_migrations.review-the-import-csv }}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor hg --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [Erstellen Sie ein leeres Repository auf {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository), falls Sie dies nicht bereits erledigt haben.
{{ site.data.reusables.command_line.switching_directories_procedural }}
7. Übertragen Sie das importierte Repository per Push-Vorgang an {{ site.data.variables.product.prodname_ghe_server }}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Projekte aus Subversion importieren

{{ site.data.reusables.enterprise_installation.ssh-into-instance }}
2. Erstellen Sie einen Klon im Rohdatenformat des Projekts. Führen Sie dazu den folgenden Befehl aus. Geben Sie dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-svn-raw <em>SVN-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Erstellt ein neues Repository mit mindestens einem Git-Ref in „refs/import/“ am angegebenen Pfad.
  ```
{{ site.data.reusables.enterprise_migrations.review-the-import-csv }}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor svn --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [Erstellen Sie ein leeres Repository auf {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository), falls Sie dies nicht bereits erledigt haben.
{{ site.data.reusables.command_line.switching_directories_procedural }}
7. Übertragen Sie das importierte Repository per Push-Vorgang an {{ site.data.variables.product.prodname_ghe_server }}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Projekte aus der Team Foundation-Versionskontrolle importieren

{{ site.data.reusables.enterprise_installation.ssh-into-instance }}
2. Erstellen Sie einen Klon im Rohdatenformat des Projekts. Führen Sie dazu den folgenden Befehl aus. Geben Sie dazu die URL des Quellprojekts und einen Pfad zum temporären Repository an:
  ```shell
  $ git-import-tfs-raw <em>TEAM-FOUNDATION-CLONE-URL</em> /<em>PATH</em>/<em>REPO-NAME</em>.git
  # Erstellt ein neues Repository mit mindestens einem Git-Ref in „refs/import/“ am angegebenen Pfad.
  ```
{{ site.data.reusables.enterprise_migrations.review-the-import-csv }}
4. Schreibt die Autoren und Branches mit der CSV-Datei um:
  ```shell
  $ git-import-rewrite --flavor tfs --authors /<em>PATH</em>/<em>AUTHORS-MAP-FILE</em>.csv /<em>PATH</em>/<em>REPO-NAME</em>.git
  ```
5. [Erstellen Sie ein leeres Repository auf {{ site.data.variables.product.prodname_ghe_server }}](/enterprise/{{ currentVersion }}/user/articles/creating-a-new-repository), falls Sie dies nicht bereits erledigt haben.
{{ site.data.reusables.command_line.switching_directories_procedural }}
7. Übertragen Sie das importierte Repository per Push-Vorgang an {{ site.data.variables.product.prodname_ghe_server }}:
  ```shell
  $ git push --mirror <em>PUSH-URL-ON-GITHUB-ENTERPRISE</em>
  ```

### Weiterführende Informationen

- "[Command-line-utilities](/enterprise/{{ currentVersion }}/admin/guides/installation/command-line-utilities/#import-and-export)"
