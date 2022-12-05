---
title: Verwenden von GitHub CLI-Erweiterungen
intro: 'Hier erfährst du, wie du benutzerdefinierte Erweiterungen verwenden kannst, die von anderen {% data variables.product.prodname_cli %}-Benutzern geschrieben wurden.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 14bd68ea6cec8df656e59c05f6cd3fa313857158
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145068532'
---
## Informationen zu {% data variables.product.prodname_cli %}-Erweiterungen

{% note %}

**Hinweis:** Erweiterungen außerhalb von {% data variables.product.product_name %} und {% data variables.product.prodname_cli %} sind nicht von {% data variables.product.product_name %} zertifiziert und werden durch separate Nutzungsbedingungen, Datenschutzrichtlinien und Supportdokumentation geregelt. Um das Risiko bei der Verwendung von Drittanbietererweiterungen zu minimieren, überprüfe den Quellcode der Erweiterung, bevor du die Erweiterung installierst oder aktualisierst.

{% endnote %}

{% data reusables.cli.cli-extensions %} Weitere Informationen zum Erstellen von {% data variables.product.prodname_cli %}-Erweiterungen findest du unter [Erstellen von {% data variables.product.prodname_cli %}-Erweiterungen](/github-cli/github-cli/creating-github-cli-extensions).

Erweiterungen werden lokal installiert und sind auf den Benutzer beschränkt. Wenn du also von einem anderen Computer aus auf {% data variables.product.prodname_cli %} zugreifst oder ein anderer Benutzer von deinem Computer aus auf {% data variables.product.prodname_cli %} zugreift, ist die Erweiterung nicht verfügbar.

## Suchen nach Erweiterungen

Du findest Erweiterungen, indem du [Repositorys mit dem `gh-extension`-Thema](https://github.com/topics/gh-extension) durchsuchst.

## Installieren von Erweiterungen

Um eine Erweiterung zu installieren, verwende den `extensions install`-Unterbefehl. Ersetze den `repo`-Parameter durch das Repository der Erweiterung. Du kannst die vollständige URL wie z. B. `https://github.com/octocat/gh-whoami` verwenden, oder einfach den Besitzer und das Repository, z. B. `octocat/gh-whoami`.

Wenn der Besitzer und das Repository verwendet werden, installiert `gh` die Erweiterung mithilfe des Hostnamens, bei dem `gh` derzeit authentifiziert ist. Das vollständige URL-Format ist nützlich, wenn Erweiterungen von einem anderen Host aus installiert werden. Benutzer in {% data variables.product.prodname_ghe_server %} sollten beispielsweise die vollständige Repository-URL verwenden, um Erweiterungen von {% data variables.product.prodname_dotcom_the_website %} oder einem anderen Host aus zu installieren.

Verwende zum Installieren einer Erweiterung in der Entwicklung aus dem aktuellen Verzeichnis `.` als Wert für den `repo`-Parameter.

```shell
gh extension install <em>repo</em>
```

Wenn du bereits eine Erweiterung mit demselben Namen installiert hast, ist der Befehl nicht erfolgreich ausführbar. Wenn du z. B. `octocat/gh-whoami` installiert hast, musst du dies deinstallieren, bevor du `hubot/gh-whoami` installierst.

## Anzeigen installierter Erweiterungen

Um alle installierten Erweiterungen anzuzeigen, verwende den `extensions list`-Unterbefehl. Die Ausgabe teilt dir auch mit, für welche Erweiterungen Updates verfügbar sind.

```shell
gh extension list
```

## Aktualisieren von Erweiterungen

Um eine Erweiterung zu aktualisieren, verwende den `extensions upgrade`-Unterbefehl. Ersetze den `extension`-Parameter durch den Namen der Erweiterung.

```shell
gh extension upgrade <em>extension</em>
```

Um alle installierten Erweiterungen zu aktualisieren, verwende das `--all`-Flag.

```shell
gh extension upgrade --all
```

## Deinstallieren von Erweiterungen

Um eine Erweiterung zu deinstallieren, verwende den `extensions remove`-Unterbefehl. Ersetze den `extension`-Parameter durch den Namen der Erweiterung.

```shell
gh extension remove <em>extension</em>
```
