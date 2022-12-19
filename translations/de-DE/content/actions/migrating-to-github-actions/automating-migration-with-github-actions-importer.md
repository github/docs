---
title: Automatisieren der Migration mit GitHub Actions Importer
intro: 'Verwende {% data variables.product.prodname_actions_importer %}, um die Migration zu {% data variables.product.prodname_actions %} zu planen und zu automatisieren.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
miniTocMaxHeadingLevel: 3
topics:
  - Migration
  - CI
  - CD
shortTitle: 'Automate migration with {% data variables.product.prodname_actions_importer %}'
ms.openlocfilehash: 391455eb90a3a71ab0e0cb5a1573a0ee48527d8e
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159681'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

[Rechtliche Hinweise](#legal-notice)

{% note %}

**Hinweis**: {% data variables.product.prodname_actions_importer %} ist derzeit als Public Preview verfügbar. Besuche die [Registrierungsseite](https://github.com/features/actions-importer/signup), um den Zugang zur Vorschauversion zu beantragen. Sobald dir dieser Zugang erteilt wurde, kannst du die CLI-Erweiterung `gh-actions-importer` verwenden.

{% endnote %}

## Informationen zu {% data variables.product.prodname_actions_importer %}

Du kannst {% data variables.product.prodname_actions_importer %} verwenden, um die Migration deiner CI/CD-Pipelines von Azure DevOps, CircleCI, GitLab, Jenkins und Travis CI zu {% data variables.product.prodname_actions %} zu planen und zu automatisieren.

{% data variables.product.prodname_actions_importer %} wird als Docker-Container verteilt und verwendet eine [{% data variables.product.prodname_dotcom %}-CLI-Erweiterung](https://cli.github.com) für die Interaktion mit dem Container.

Jeder Workflow, der von {% data variables.product.prodname_actions_importer %} konvertiert wird, sollte auf seine Korrektheit überprüft werden, bevor er als Produktionsworkload verwendet wird. Das Ziel besteht darin, eine Konvertierungsrate von 80 % für jeden Workflow zu erzielen. Die tatsächliche Konvertierungsrate hängt jedoch von der Zusammensetzung jeder einzelnen Pipeline ab, die konvertiert wird.

## Unterstützte CI-Plattformen

Du kannst {% data variables.product.prodname_actions_importer %} verwenden, um von den folgenden Plattformen zu migrieren:

- Azure DevOps
- CircleCI
- GitLab
- Jenkins
- Travis CI

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen für die unterstützten Plattformen zugreifen.

## Voraussetzungen

Für {% data variables.product.prodname_actions_importer %} gelten die folgenden Voraussetzungen:

- Du benötigst Zugang zur Public Preview von {% data variables.product.prodname_actions_importer %}.
{%- ifversion ghes < 3.5 or ghae %}
- Verwende ein {% data variables.product.pat_generic %} mit dem Bereich `read:packages`.
{%- else %}
- Du benötigst Anmeldeinformationen für die Authentifizierung bei {% data variables.product.prodname_registry %} {% data variables.product.prodname_container_registry %}. Weitere Informationen findest du unter [Arbeiten mit der Containerregistrierung](/packages/working-with-a-github-packages-registry/working-with-the-container-registry#authenticating-to-the-container-registry).
{% endif %}
- Eine Umgebung, in der du Linux-basierte Container ausführen und die erforderlichen Tools installieren kannst:
  - Docker ist [installiert](https://docs.docker.com/get-docker/) und wird ausgeführt.
  - Die [{% data variables.product.prodname_dotcom %}-CLI](https://cli.github.com) ist installiert.

  {% note %}

  **Hinweis**: Der {% data variables.product.prodname_actions_importer %}-Container und die CLI müssen nicht auf demselben Server wie deine CI-Plattform installiert werden.

  {% endnote %}

### Installieren der {% data variables.product.prodname_actions_importer %}-CLI-Erweiterung

1. So installierst du die {% data variables.product.prodname_actions_importer %}-CLI-Erweiterung:

   ```bash
   $ gh extension install github/gh-actions-importer
   ```
1. Überprüfe, ob die Erweiterung installiert ist:

   ```bash
   $ gh actions-importer -h
   Options:
     -?, -h, --help  Show help and usage information

   Commands:
     update     Update to the latest version of the GitHub Actions Importer.
     version    Display the version of the GitHub Actions Importer.
     configure  Start an interactive prompt to configure credentials used to authenticate with your CI server(s).
     audit      Plan your CI/CD migration by analyzing your current CI/CD footprint.
     forecast   Forecast GitHub Actions usage from historical pipeline utilization.
     dry-run    Convert a pipeline to a GitHub Actions workflow and output its yaml file.
     migrate    Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.
   ```

### Aktualisieren der {% data variables.product.prodname_actions_importer %}-CLI

Vergewissere dich regelmäßig, dass die aktuelle Version von {% data variables.product.prodname_actions_importer %} ausgeführt wird, indem du den Befehl `update` ausführst:

```bash
$ gh actions-importer update
```

Du musst bei {% data variables.product.prodname_container_registry %} authentifiziert sein, damit dieser Befehl erfolgreich ausgeführt wird. Alternativ kannst du Anmeldeinformationen mithilfe der Parameter `--username` und `--password-stdin` angeben:

```bash
$ echo $GITHUB_TOKEN | gh actions-importer update --username $GITHUB_HANDLE --password-stdin
```

### Authentifizieren über die Befehlszeile

Du musst Anmeldeinformationen konfigurieren, die es {% data variables.product.prodname_actions_importer %} ermöglichen, mit {% data variables.product.prodname_dotcom %} und deinem aktuellen CI-Server zu kommunizieren. Du kannst diese Anmeldeinformationen mithilfe von Umgebungsvariablen oder einer `.env.local`-Datei konfigurieren. Die Umgebungsvariablen können in einer interaktiven Eingabeaufforderung konfiguriert werden, indem du den folgenden Befehl ausführst:

```bash
$ gh actions-importer configure
```

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen zur Verwendung von Umgebungsvariablen zugreifen.

## Verwenden der {% data variables.product.prodname_actions_importer %}-CLI

Verwende die Unterbefehle von `gh actions-importer`, um die Migration zu {% data variables.product.prodname_actions %} zu beginnen, einschließlich `audit`, `forecast`, `dry-run` und `migrate`.

### Überwachen vorhandener CI-Pipelines

Der Unterbefehl `audit` kann verwendet werden, um die CI/CD-Migration zu planen, indem der aktuelle CI/CD-Speicherbedarf analysiert wird. Diese Analyse kann verwendet werden, um eine Zeitachse für die Migration zu {% data variables.product.prodname_actions %} zu entwerfen.

Um eine Überwachung auszuführen, verwende den folgenden Befehl, um die verfügbaren Optionen zu ermitteln:

```bash
$ gh actions-importer audit -h
Description:
  Plan your CI/CD migration by analyzing your current CI/CD footprint.

[...]

Commands:
  azure-devops  An audit will output a list of data used in an Azure DevOps instance.
  circle-ci     An audit will output a list of data used in a CircleCI instance.
  gitlab        An audit will output a list of data used in a GitLab instance.
  jenkins       An audit will output a list of data used in a Jenkins instance.
  travis-ci     An audit will output a list of data used in a Travis CI instance.
```

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen zur Durchführung einer Überwachung zugreifen.

### Vorhersagen der Nutzung

Der Unterbefehl `forecast` überprüft die Pipelinenutzung in der Vergangenheit, um eine Prognose der {% data variables.product.prodname_actions %}-Nutzung zu erstellen.

Um eine Vorhersage auszuführen, verwende den folgenden Befehl, um die verfügbaren Optionen zu ermitteln:

```bash
$ gh actions-importer forecast -h
Description:
  Forecasts GitHub Actions usage from historical pipeline utilization.

[...]

Commands:
  azure-devops  Forecasts GitHub Actions usage from historical Azure DevOps pipeline utilization.
  jenkins       Forecasts GitHub Actions usage from historical Jenkins pipeline utilization.
  gitlab        Forecasts GitHub Actions usage from historical GitLab pipeline utilization.
  circle-ci     Forecasts GitHub Actions usage from historical CircleCI pipeline utilization.
  travis-ci     Forecasts GitHub Actions usage from historical Travis CI pipeline utilization.
  github        Forecasts GitHub Actions usage from historical GitHub pipeline utilization.
```

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen zur Ausführung einer Vorhersage zugreifen.

### Testen des Migrationsprozesses

Der Unterbefehl `dry-run` kann verwendet werden, um eine Pipeline in ihre {% data variables.product.prodname_actions %}-Entsprechung zu konvertieren und dann den Workflow in das lokale Dateisystem zu schreiben.

Um einen Testlauf auszuführen, verwende den folgenden Befehl, um die verfügbaren Optionen zu ermitteln:

```bash
$ gh actions-importer dry-run -h
Description:
  Convert a pipeline to a GitHub Actions workflow and output its yaml file.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and output its yaml file.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and output the yaml file(s).
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and output the yaml file.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and output its yaml file.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and output its yaml file.
```

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen zur Ausführung eines Testlaufs zugreifen.

### Migrieren einer Pipeline zu {% data variables.product.prodname_actions %}

Der Unterbefehl `migrate` kann verwendet werden, um eine Pipeline in ihre GitHub Actions-Entsprechung zu konvertieren und dann einen Pull Request mit dem Inhalt zu erstellen.

Um eine Migration auszuführen, verwende den folgenden Befehl, um die verfügbaren Optionen zu ermitteln:

```bash
$ gh actions-importer migrate -h
Description:
  Convert a pipeline to a GitHub Actions workflow and open a pull request with the changes.

[...]

Commands:
  azure-devops  Convert an Azure DevOps pipeline to a GitHub Actions workflow and open a pull request with the changes.
  circle-ci     Convert a CircleCI pipeline to GitHub Actions workflows and open a pull request with the changes.
  gitlab        Convert a GitLab pipeline to a GitHub Actions workflow and open a pull request with the changes.
  jenkins       Convert a Jenkins job to a GitHub Actions workflow and open a pull request with the changes.
  travis-ci     Convert a Travis CI pipeline to a GitHub Actions workflow and and open a pull request with the changes.
```

Sobald du Zugang zur Vorschauversion hast, kannst du auf weiterführende Referenzdokumentationen zur Durchführung einer Migration zugreifen.

## Rechtliche Hinweise

Teile wurden von https://github.com/github/gh-actions-importer/ unter der MIT-Lizenz übernommen:

```
MIT License

Copyright (c) 2022 GitHub

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
