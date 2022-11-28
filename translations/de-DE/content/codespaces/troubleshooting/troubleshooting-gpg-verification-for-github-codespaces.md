---
title: Problembehandlung für die GPG-Überprüfung für GitHub Codespaces
shortTitle: GPG verification
intro: Dieser Artikel enthält Tipps zur Problembehandlung bei Fehlern im Zusammenhang mit dem Signieren deiner Commits in Codespaces.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167119'
---
Wenn du die GPG-Überprüfung aktivierst, signiert {% data variables.product.prodname_github_codespaces %} automatisch deine Commits in Codespaces, die du aus ausgewählten Repositorys erstellst. Weitere Informationen findest du unter [Verwalten der GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces).

{% data reusables.codespaces.gpg-in-active-codespaces %}

Wenn {% data variables.product.prodname_github_codespaces %} einen Commit nicht signieren kann, wird möglicherweise ein Fehler wie der folgende angezeigt.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

Dieser Fehler kann in den folgenden Fällen auftreten: 

- Du hast die GPG-Überprüfung deaktiviert und versuchst, einen regulären, nicht signierten Commit in einem vorhandenen Codespace durchzuführen.
- Du hast die GPG-Überprüfung aktiviert, aber die Git-Konfiguration überschrieben, die erforderlich ist, damit {% data variables.product.prodname_github_codespaces %} deine Commits signieren kann, etwa indem du {% data variables.product.prodname_github_codespaces %} mit einem Dotfiles-Repository verknüpft hast, das Git-Konfigurationsdateien enthält.

## Fehler nach dem Deaktivieren der GPG-Überprüfung

Wenn du die GPG-Überprüfung aktivierst, signiert {% data variables.product.prodname_github_codespaces %} standardmäßig alle Commits, die du in Codespaces vornimmst. Hierzu wird der Git-Konfigurationswert `commit.gpgsign` auf `true` festgelegt.

Wenn du die GPG-Überprüfung deaktiviert hast und in einem vorhandenen Codespace arbeitest, wird dieser Wert dennoch auf `true` festgelegt. Das bedeutet, dass {% data variables.product.prodname_github_codespaces %} versucht, deine Commits zu signieren. Dieser Vorgang ist jedoch nicht erfolgreich, weil du die Einstellung für die GPG-Überprüfung deaktiviert hast.

Um weiterhin reguläre, nicht signierte Commits in deinem Codespace durchzuführen, setze `commit.gpgsign` auf den Standardwert `false` zurück, indem du folgenden Befehl im Terminal eingibst:

```Shell{:copy}
git config --unset commit.gpgsign
```

Um zu überprüfen, ob der Wert ordnungsgemäß aus deiner Konfiguration entfernt wurde, kannst du `git config --list` eingeben. In der Liste sollte kein Wert für `commit.gpgsign` angezeigt werden.

## Fehler, die durch in Konflikt stehende Konfiguration verursacht werden

Um deine Commits automatisch zu signieren, legt {% data variables.product.prodname_github_codespaces %} bestimmte Git-Konfigurationswerte in deinem Codespace fest. Wenn du die von {% data variables.product.prodname_github_codespaces %} festgelegten Werte überschreibst, kannst du deine Commits möglicherweise nicht signieren. 

Möglicherweise überschreibst du diese Werte versehentlich, wenn du {% data variables.product.prodname_github_codespaces %} mit einem Dotfiles-Repository verknüpft hast, das Git-Konfigurationsdateien enthält. Weitere Informationen zur Verwendung von Dotfiles mit {% data variables.product.prodname_github_codespaces %} findest du unter [Personalisieren von {% data variables.product.prodname_github_codespaces %} für dein Konto](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles).

### Überprüfen auf in Konflikt stehende Konfigurationen

Um deine Commits mit GPG zu signieren, legt {% data variables.product.prodname_github_codespaces %} automatisch die folgenden Git-Konfigurationswerte auf Systemebene fest:

| Konfigurationseinstellung | Erforderlicher Wert |
| --------------------- | -------------- |
| `user.name` | Muss mit dem vollständigen Namen übereinstimmen, der für dein {% data variables.product.prodname_dotcom %}-Profil festgelegt ist. |
| `credential.helper` | Muss auf `/.codespaces/bin/gitcredential_github.sh` festgelegt werden. |
| `gpg.program` | Muss auf `/.codespaces/bin/gh-gpgsign` festgelegt werden. |

Um zu überprüfen, ob diese Werte in einem Codespace ordnungsgemäß festgelegt sind, kannst du den Befehl `git config --list --show-origin` verwenden. Da {% data variables.product.prodname_github_codespaces %} diese Konfiguration auf Systemebene festlegt, sollten die erforderlichen Konfigurationseinstellungen aus `/usr/local/etc/gitconfig` stammen.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

Zusätzlich zu den oben aufgeführten Werten können Fehler auftreten, wenn die in deinen Codespaces verwendeten Dotfiles einen der folgenden Werte enthalten:

- Git-Konfigurationswert `user.signingkey`
- Git-Konfigurationswert `commit.gpgsign`
- Manuell festgelegter `GITHUB_TOKEN`-Wert

### Entfernen von in Konflikt stehenden Konfigurationen

Wenn du die automatische GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %} aktiviert lassen möchtest, musst du alle in Konflikt stehenden Konfigurationen aus den in deinen Codespaces verwendeten Dotfiles entfernen.

Wenn die globale Datei `.gitconfig` auf deinem lokalen Computer beispielsweise einen `gpg.program`-Wert enthält und du diese Datei an ein Dotfiles-Repository gepusht hast, das mit {% data variables.product.prodname_github_codespaces %} verknüpft ist, solltest du `gpg.program` aus dieser Datei entfernen und den Wert stattdessen auf Systemebene auf deinem lokalen Computer festlegen.

{% note %}

**Hinweis:** An deinem Dotfiles-Repository vorgenommene Änderungen gelten für von dir erstellte neue Codespaces, aber nicht für vorhandene Codespaces.

{% endnote %}

1. Öffne auf deinem lokalen Computer ein Terminal.
2. Verwende den Befehl `git config --global --unset`, um den in Konflikt stehenden Wert aus `~/.gitconfig` (Mac/Linux) oder `C:\Users\YOUR-USER\.gitconfig` (Windows) zu entfernen.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Pushe die Änderung in dein Dotfiles-Repository auf {% data variables.product.prodname_dotcom %}.
4. Um deine lokale Konfiguration beizubehalten, lege optional den Wert erneut in einer Git-Konfigurationsdatei fest, die du nicht an dein Dotfiles-Repository pusht. 

   Beispielsweise kannst du das Flag `--system` verwenden, um die Konfiguration in der Datei auf Systemebene auf `PATH/etc/gitconfig` festzulegen. `PATH` ist dabei das Verzeichnis, in dem Git auf deinem System installiert ist.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Wenn dein Dotfiles-Repository ein Installationsskript in einer erkannten Datei wie `install.sh` enthält, kannst du die Umgebungsvariable `$CODESPACES` verwenden, um bedingte Logik (etwa `gpg.program` nur dann festlegen, wenn du dich nicht in einem Codespace befindest) hinzuzufügen. Im folgenden Beispiel wird `true` von `-z "$CODESPACES"` zurückgegeben, wenn du dich nicht in einem Codespace befindest.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Weiterführende Themen
- [Informationen zur Verifizierung einer Commitsignatur](/authentication/managing-commit-signature-verification/about-commit-signature-verification)
- [`git config`](https://git-scm.com/docs/git-config) in der offiziellen Git-Dokumentation
