---
title: Ein Git-Repository über die Befehlszeile importieren
intro: '{% if currentVersion == "free-pro-team@latest" %}Wenn [GitHub Importer](/articles/importing-a-repository-with-github-importer) nicht für Deine Zwecke geeignet ist, z. B. wenn Dein vorhandener Code in einem privaten Netzwerk verwaltet wird, dann empfehlen wir, den Import über die Befehlszeile vorzunehmen.{% else %}Das Importieren von Git-Projekten über die Befehlszeile ist eine geeignete Methode, wenn Dein vorhandener Code in einem privaten Netzwerk verwaltet wird.{% endif %}'
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

Bevor Du startest, stelle sicher, dass Dir Folgendes vorliegt:

- Deinen {% data variables.product.product_name %}-Benutzername
- Die Klon-URL des externen Repositorys, z. B. `https://external-host.com/user/repo.git` oder `git://external-host.com/user/repo.git` (vielleicht mit einem `user@` vor dem Domänen-Namen `external-host.com`)

{% tip %}

Um die Methode vorzuführen und zu erläutern, verwenden wir

- ein externes Konto mit dem Namen **extuser**,
- einen externen Git-Host mit dem Namen `https://external-host.com`,
- ein persönliches {% data variables.product.product_name %}-Benutzerkonto mit dem Namen **ghuser**,
- ein {% data variables.product.product_name %}-Repository mit dem Namen **repo.git**.

{% endtip %}

1. [Erstelle ein neues Repository auf {% data variables.product.product_name %}](/articles/creating-a-new-repository). Du wirst Dein externes Git-Repository in dieses neue Repository importieren.
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
