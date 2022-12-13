---
title: 'Schnellstart: GitHub CLI'
intro: 'Verwende die {% data variables.product.prodname_cli %} zum Arbeiten mit {% data variables.product.company_short %} in der Befehlszeile.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
ms.openlocfilehash: 004f848e973aa66d19b9de6b922d65dba76f1aea
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068538'
---
## Informationen zu {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Erste Schritte

1. [Installiere](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} unter macOS, Windows oder Linux.
1. Authentifiziere dich in der Befehlszeile bei {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} Verwende das `--hostname`-Flag, um dich bei {% data variables.product.product_location %} zu authentifizieren.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Beginne mit der Arbeit mit {% data variables.product.company_short %} in der Befehlszeile. Suche z. B. mit `gh issue status` oder `gh issue list --assignee @me` nach einem Issue, an dem du arbeiten möchtest. Erstelle einen Pull Request mit `gh pr create`. Überprüfe einen Pull Request mit `gh pr checkout`, `gh pr diff` und `gh pr review`.

## Nächste Schritte

- Informiere die {% data variables.product.prodname_cli %}, welcher Text-Editor für Befehle verwendet werden soll, die einen Text-Editor öffnen. Gib beispielsweise `gh config set editor "code -w"` ein, um ihren bevorzugten Text-Editor auf {% data variables.product.prodname_vscode %} festzulegen. Weitere Informationen findest du unter [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Definiere Aliase für Befehle, die du häufig ausführst. Wenn du z. B. `gh alias set prd "pr create --draft"` ausführst, kannst du `gh prd` ausführen, um schnell einen Entwurfs-Pull Request zu öffnen. Weitere Informationen findest du unter [`gh alias`](https://cli.github.com/manual/gh_alias).

- Erstelle benutzerdefinierte Befehle mit {% data variables.product.prodname_cli %}-Erweiterungen, oder füge sie hinzu. Weitere Informationen findest du unter [Verwenden von {% data variables.product.prodname_cli %}-Erweiterungen](/github-cli/github-cli/using-github-cli-extensions) und [Erstellen von {% data variables.product.prodname_cli %}-Erweiterungen](/github-cli/github-cli/creating-github-cli-extensions).

- Weitere Informationen zu allen Befehlen, die du mit {% data variables.product.prodname_cli %} ausführen kannst, findest du in der [{% data variables.product.prodname_cli %}-Referenz](/github-cli/github-cli/github-cli-reference).
