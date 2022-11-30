---
title: Arbeiten mit Unterstützung für GitHub Codespaces
intro: 'Tipps zum Erhalt der besten Hilfe vom Support für {% data variables.product.prodname_github_codespaces %}.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Working with support
redirect_from:
  - /codespaces/troubleshooting/working-with-support-for-codespaces
ms.openlocfilehash: a4db589cb5d8de71e6e8c7d109e0156885c33848
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159589'
---
Damit dir der Support bei Problemen mit Codespaces helfen kann, musst du den permanenten Namen des Codespace und seine Codespaces-ID (Bezeichner) kennen. Darüber hinaus bittet dich der Support möglicherweise um einige Protokolle. Weitere Informationen zum Erstellungsprotokoll findest du unter „[{% data variables.product.prodname_github_codespaces %}-Protokolle](/codespaces/troubleshooting/github-codespaces-logs)“ und „[Informationen zum GitHub-Support](/github/working-with-github-support/about-github-support)“.

## Codespace-Namen

Jeder Codespace verfügt über einen eindeutigen Namen, der aus einer Kombination aus deinem {% data variables.product.company_short %}-Handle, zwei oder drei automatisch erstellten Wörtern und einigen zufälligen Zeichen besteht. Beispiel: `octocat-literate-space-parakeet-mld5`. Die zwei oder drei automatisch generierten Wörter bilden auch den ursprünglichen Anzeigenamen deines Codespace, in diesem Fall `literate-space-parakeet`. Du kannst den Anzeigenamen für einen Codespace ändern, aber dies wirkt sich nicht auf den permanenten Namen aus. Weitere Informationen findest du unter [Umbenennen eines Codespace](/codespaces/customizing-your-codespace/renaming-a-codespace).

So suchst du nach dem Namen eines Codespace:

- Öffne den Codespace im Browser. Die Unterdomäne der URL ist der Name des Codespace. Beispiel: `https://octocat-literate-space-parakeet-mld5.github.dev` ist die URL für den `octocat-literate-space-parakeet-mld5`-Codespace.
- Wenn du einen Codespace nicht öffnen kannst, kannst du in {% data variables.product.product_name %} auf https://github.com/codespaces auf den Namen zugreifen. Der Name wird in einem Popup angezeigt, wenn du mit dem Mauszeiger auf den Anzeigennamen eines Codespace auf https://github.com/codespaces zeigst. 
  ![Codespace-Name, auf den gezeigt wird](/assets/images/help/codespaces/find-codespace-name-github.png)

Der Name des Codespace ist auch in vielen der Protokolldateien enthalten. Beispielsweise in den Codespace-Protokollen als Wert `friendlyName`, im {% data variables.product.prodname_github_codespaces %}-Erweiterungsprotokoll nach `making GET request for` und im Browserkonsolenprotokoll nach `clientUrl`. Weitere Informationen findest du unter „[{% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs)“.

## Codespace-IDs

Jeder Codespace verfügt auch über eine ID (Bezeichner). Dies wird nicht standardmäßig in {% data variables.product.prodname_vscode %} angezeigt. Daher musst du eventuell die Einstellungen für die {% data variables.product.prodname_github_codespaces %}-Erweiterung aktualisieren, bevor du auf die ID zugreifen kannst.

1. Klicke in {% data variables.product.prodname_vscode %} (im Browser oder auf dem Desktop) in der Aktivitätsleiste links auf **Remote-Explorer**, um Details für den Codespace anzuzeigen.
{% indented_data_reference reusables.codespaces.remote-explorer spaces=3 %}
1. Wenn die Randleiste den Abschnitt „Codespaceleistung“ enthält, zeige mit dem Mauszeiger auf die „Codespace-ID“, und klicke auf das Zwischenablagesymbol, um die ID zu kopieren.
1. Wenn die Informationen nicht angezeigt werden, klicke auf {% octicon "gear" aria-label="The gear icon" %} in der unteren linken Ecke der Aktivitätsleiste, um die Registerkarte „Einstellungen“ anzuzeigen.
1. Erweitere **Erweiterungen**, und klicke auf **{% data variables.product.prodname_github_codespaces %}**, um die Einstellungen für die Erweiterung anzuzeigen. Aktiviere dann **Leistungs-Explorer anzeigen**, um den Abschnitt „Codespaceleistung“ in der Randleiste anzuzeigen.
  ![Codespace-ID und Einstellungen, die zum Anzeigen von Leistungsinformationen erforderlich sind](/assets/images/help/codespaces/find-codespace-id.png)
