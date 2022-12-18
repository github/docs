---
title: Arbeiten mit Unterstützung für Codespaces
intro: Tipps für die beste Unterstützung vom Support für {% data variables.product.prodname_codespaces %}
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Working with support
ms.openlocfilehash: f072b48eebd5bdc613da725a0ac7a1b5bb0fbb8d
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145090360"
---
Damit dir der Support bei Problemen mit Codespaces helfen kann, musst du den Namen des Codespace und seine Codespaces-ID (Bezeichner) kennen. Darüber hinaus bittet dich der Support eventuell um einige Protokolle. Weitere Informationen findest du unter [Codespacesprotokolle](/codespaces/troubleshooting/codespaces-logs) und [Informationen zum GitHub-Support](/github/working-with-github-support/about-github-support).

### <a name="codespace-names"></a>Codespace-Namen

Jeder Codespace verfügt über einen eindeutigen Namen, der aus einer Kombination aus deinem {% data variables.product.company_short %}-Handle, dem Repositorynamen und einigen zufälligen Zeichen besteht. Durch die zusätzlichen Zeichen kannst du Codespaces für unterschiedliche Branches im selben Repository verwenden. Beispiel: `octocat-myrepo-gmc7`.

So suchst du nach dem Namen eines Codespace:

- Öffne den Codespace im Browser. Die Unterdomäne der URL ist der Name des Codespace. Beispiel: `https://octocat-myrepo-gmc7.github.dev` ist die URL für den `octocat-myrepo-gmc7`-Codespace.
- Wenn du einen Codespace nicht öffnen kannst, kannst du in {% data variables.product.product_name %} auf https://github.com/codespaces auf den Namen zugreifen. Der Name wird in einem Popup angezeigt, wenn du mit dem Mauszeiger auf die Option **Im Browser öffnen** auf https://github.com/codespaces zeigst. 
  ![Codespace-Name, auf den gezeigt wird](/assets/images/help/codespaces/find-codespace-name-github.png)

Der Name des Codespace ist auch in vielen der Protokolldateien enthalten. Beispielsweise in den Codespace-Protokollen als Wert `friendlyName`, im {% data variables.product.prodname_github_codespaces %}-Erweiterungsprotokoll nach `making GET request for` und im Browserkonsolenprotokoll nach `clientUrl`. Weitere Informationen findest du unter [Codespacesprotokolle](/codespaces/troubleshooting/codespaces-logs).

### <a name="codespaces-ids"></a>Codespace-IDs

Jeder Codespace verfügt auch über eine ID (Bezeichner). Dies wird nicht standardmäßig in {% data variables.product.prodname_vscode %} angezeigt. Daher musst du eventuell die Einstellungen für die {% data variables.product.prodname_github_codespaces %}-Erweiterung aktualisieren, bevor du auf die ID zugreifen kannst.

1. Klicke in {% data variables.product.prodname_vscode %} (im Browser oder auf dem Desktop) in der Aktivitätsleiste links auf **Remote-Explorer**, um Details für den Codespace anzuzeigen.
2. Wenn die Randleiste den Abschnitt „Codespaceleistung“ enthält, zeige mit dem Mauszeiger auf die „Codespace-ID“, und klicke auf das Zwischenablagesymbol, um die ID zu kopieren.
3. Wenn die Informationen nicht angezeigt werden, klicke auf {% octicon "gear" aria-label="The gear icon" %} in der unteren linken Ecke der Aktivitätsleiste, um die Registerkarte „Einstellungen“ anzuzeigen.
4. Erweitere **Erweiterungen**, und klicke auf **{% data variables.product.prodname_github_codespaces %}**, um die Einstellungen für die Erweiterung anzuzeigen. Aktiviere dann **Leistungs-Explorer anzeigen**, um den Abschnitt „Codespaceleistung“ in der Randleiste anzuzeigen.
  ![Codespace-ID und Einstellungen, die zum Anzeigen von Leistungsinformationen erforderlich sind](/assets/images/help/codespaces/find-codespace-id.png)
