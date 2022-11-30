---
title: Pushen von Änderungen an GitHub
shortTitle: Pushing changes
intro: 'Während du Änderungen an deinem Projekt lokal committest, kannst du diese Änderungen an {% data variables.product.prodname_dotcom %} pushen, damit andere Personen über das Remoterepository darauf zugreifen können.'
permissions: People with write permissions can push changes to a repository.
redirect_from:
  - /desktop/contributing-to-projects/pushing-changes-to-github
  - /desktop/contributing-and-collaborating-using-github-desktop/pushing-changes-to-github
versions:
  fpt: '*'
ms.openlocfilehash: b881fa5d9e66c4a63b8c648d87072037a8cba543
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145090139'
---
## Informationen zum Pushen von Änderungen an {% data variables.product.prodname_dotcom %}

Wenn du Änderungen pushst, sendest du die committeten Änderungen in deinem lokalen Repository an das Remoterepository auf {% data variables.product.prodname_dotcom %}. Wenn du dein Projekt lokal änderst und möchtest, dass andere Personen Zugriff auf die Änderungen haben, musst du die Änderungen an {% data variables.product.prodname_dotcom %} verschieben.

Bevor du Änderungen pushst, solltest du deinen lokalen Branch aktualisieren, um alle Commits einzuschließen, die dem Remoterepository hinzugefügt wurden. Wenn jemand Commits auf dem Remoterepository vorgenommen hat, die sich nicht in deinem lokalen Branch befinden, wirst du von {% data variables.product.prodname_desktop %} aufgefordert, die neuen Commits abzurufen, bevor du deine Änderungen pushst, um Mergekonflikte zu vermeiden. Weitere Informationen findest du unter [Synchronisieren deines Branchs](/desktop/contributing-to-projects/syncing-your-branch).

{% data reusables.desktop.protected-branches %}

## Pushen von Änderungen an {% data variables.product.prodname_dotcom %}

{% note %}

**Hinweis:** {% data variables.product.prodname_desktop %} lehnt einen Push ab, wenn bestimmte Grenzwerte überschritten werden.

- Ein Push enthält eine große Datei von über {% data variables.large_files.max_github_size %}.
- Die Gesamtgröße eines Pushs liegt über {% data variables.large_files.max_file_size %}.

Wenn du {% data variables.large_files.product_name_long %} so konfigurierst, dass deine großen Dateien nachverfolgt werden, kannst du große Dateien pushen, die normalerweise abgelehnt werden. Weitere Informationen findest du unter [Informationen zu {% data variables.large_files.product_name_long %} und {% data variables.product.prodname_desktop %}](/desktop/getting-started-with-github-desktop/about-git-large-file-storage-and-github-desktop).

{% endnote %}

{% data reusables.desktop.push-origin %}
2. Wenn {% data variables.product.prodname_desktop %} dich auffordert, neue Commits aus dem Remoterepository abzurufen, klicke auf **Abrufen**.
  ![Schaltfläche „Abrufen“](/assets/images/help/desktop/fetch-newer-commits.png)
3. Klicke optional auf **Pull Request erstellen**, um einen Pull Request zur Zusammenzuarbeit an deinen Änderungen zu öffnen. Weitere Informationen findest du unter [Erstellen eines Issues oder Pull Requests](/desktop/contributing-to-projects/creating-an-issue-or-pull-request) und ![Schaltfläche „Pull Request erstellen“](/assets/images/help/desktop/create-pull-request.png).

## Weitere Informationsquellen
- [Push](/github/getting-started-with-github/github-glossary/#push) im {% data variables.product.prodname_dotcom %}-Gossar
- [Committen und Überprüfen von Änderungen an deinem Projekt](/desktop/contributing-to-projects/committing-and-reviewing-changes-to-your-project)
