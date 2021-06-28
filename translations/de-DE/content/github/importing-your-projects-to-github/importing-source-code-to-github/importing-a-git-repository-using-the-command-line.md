---
title: Ein Git-Repository über die Befehlszeile importieren
intro: '{% if currentVersion == "free-pro-team@latest" %}If [GitHub Importer](/articles/importing-a-repository-with-github-importer) is not suitable for your purposes, such as if your existing code is hosted on a private network, then we recommend importing using the command line.{% else %}Importing Git projects using the command line is suitable when your existing code is hosted on a private network.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Bevor Du startest, stelle sicher, dass Dir Folgendes vorliegt:

- Ihr {% data variables.product.product_name %}-Benutzername
- Die Klon-URL des externen Repositorys, z. B. `https://external-host.com/user/repo.git` oder `git://external-host.com/user/repo.git` (vielleicht mit einem `user@` vor dem Domänen-Namen `external-host.com`)

{% tip %}

Um die Methode vorzuführen und zu erläutern, verwenden wir

- ein externes Konto mit dem Namen **extuser**,
- einen externen Git-Host mit dem Namen `https://external-host.com`,
- ein persönliches {% data variables.product.product_name %}-Benutzerkonto mit dem Namen **ghuser**,
- ein {% data variables.product.product_name %}-Repository mit dem Namen **repo.git**.

{% endtip %}

1. [Erstellen Sie ein neues Repository auf {% data variables.product.product_name %}](/articles/creating-a-new-repository). Du wirst Dein externes Git-Repository in dieses neue Repository importieren.
2. Erstelle in der Befehlszeile einen „leeren“ Klon des Repositorys mit der externen Klon-URL. Dadurch wird eine vollständige Kopie der Daten angelegt, aber ohne Arbeitsverzeichnis für die Bearbeitung von Dateien. Außerdem wird der saubere Export aller alten Daten gewährleistet.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # erstellt einen leeren Klon des externen Repository in ein lokales Verzeichnis
  ```
3. Übertrage das lokal geklonte Repository mit der „mirror"-Option (Spiegel-Option) zu {% data variables.product.product_name %}, wodurch sichergestellt wird, dass alle Verweise wie Branches und Tags in das importierte Repository kopiert werden.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Uebertraegt den Spiegel auf das neue {% data variables.product.product_name %} Repository
  ```
4. Entferne das temporäre lokale Repository.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
