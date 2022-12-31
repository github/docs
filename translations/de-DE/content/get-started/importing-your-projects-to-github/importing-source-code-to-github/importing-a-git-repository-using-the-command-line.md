---
title: Ein Git-Repository über die Befehlszeile importieren
intro: "{% ifversion fpt %}Wenn [GitHub Importer](/articles/importing-a-repository-with-github-importer) für deine Zwecke nicht geeignet ist, z.\_B. wenn dein vorhandener Code in einem privaten Netzwerk gehostet ist, wird das Importieren mithilfe der Befehlszeile empfohlen.{% else %}Das Importieren von Git-Projekten mit der Befehlszeile eignet sich dann, wenn dein Code in einem privaten Netzwerk gehostet ist.{% endif %}"
redirect_from:
  - /articles/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-a-git-repository-using-the-command-line
  - /github/importing-your-projects-to-github/importing-source-code-to-github/importing-a-git-repository-using-the-command-line
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Import repo locally
ms.openlocfilehash: bd3a5e5ffca38250a74851444f6cac4cbb06eb53
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131254'
---
Bevor du startest, stelle sicher, dass Dir Folgendes vorliegt:

- Dein {% data variables.product.product_name %}-Benutzername
- Die Klon-URL für das externe Repository, z. B. `https://external-host.com/user/repo.git` oder `git://external-host.com/user/repo.git` (eventuell mit `user@` vor dem Domänennamen `external-host.com`)

{% tip %}

Um die Methode vorzuführen und zu erläutern, verwenden wir

- Ein externes Konto mit dem Namen **extuser**
- Einen externen Git-Host namens `https://external-host.com`
- Ein persönliches Konto für {% data variables.product.product_name %} mit der Bezeichnung **ghuser**
- Ein Repository auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} mit dem Namen **repo.git**

{% endtip %}

1. [Erstelle ein neues Repository auf {% data variables.product.product_name %}.](/articles/creating-a-new-repository) Du wirst dein externes Git-Repository in dieses neue Repository importieren.
2. Erstelle in der Befehlszeile einen „leeren“ Klon des Repositorys mit der externen Klon-URL. Dadurch wird eine vollständige Kopie der Daten angelegt, aber ohne Arbeitsverzeichnis für die Bearbeitung von Dateien. Außerdem wird der saubere Export aller alten Daten gewährleistet.
  ```shell
  $ git clone --bare https://external-host.com/<em>extuser</em>/<em>repo.git</em>
  # Makes a bare clone of the external repository in a local directory
  ```
3. Übertrage das lokal geklonte Repository mit der „mirror"-Option (Spiegel-Option) zu {% data variables.product.product_name %}, wodurch sichergestellt wird, dass alle Verweise wie Branches und Tags in das importierte Repository kopiert werden.
  ```shell
  $ cd <em>repo.git</em>
  $ git push --mirror https://{% data variables.command_line.codeblock %}/<em>ghuser</em>/<em>repo.git</em>
  # Pushes the mirror to the new repository on {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}
  ```
4. Entferne das temporäre lokale Repository.
  ```shell
  $ cd ..
  $ rm -rf <em>repo.git</em>
  ```
