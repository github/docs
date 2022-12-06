---
title: Beenden und Starten eines Codespaces
intro: 'Du kannst deinen Codespace starten und beenden, um Ressourcen einzusparen und die Arbeit zu unterbrechen.'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Stop a codespace
ms.openlocfilehash: 5c34fd5b7d72f52e203cd8f8fdc1871ff6a2f014
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188248'
---
{% jetbrains %}

{% data reusables.codespaces.codespaces-jetbrains-beta-note %}

{% endjetbrains %}

## Informationen zum Beenden und Starten eines Codespaces

{% data reusables.codespaces.stopping-a-codespace %}

Unabhängig davon, wo du deine Codespaces erstellt hast oder darauf zugreifst, kannst du sie in deinem Browser unter https://github.com/codespaces anzeigen und verwalten. 

## Beenden eines Codespaces

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
 1. Klicke rechts neben dem Codespace, den du beenden möchtest, auf die Auslassungspunkte ( **...** ).
 1. Klicke auf **Codespace beenden**.
   ![Screenshot der Option zum Beenden eines Codespaces](/assets/images/help/codespaces/stop-codespace-webui.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

 Wenn du einen Codespace beenden möchtest, benutze den Unterbefehl `gh codespace stop` und wähle dann den gewünschten Codespace aus der angezeigten Liste aus.

 ```shell{:copy}
 gh codespace stop
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Gib `stop` ein, und wähle in der Liste der Optionen **Codespaces: Codespace beenden** aus.
1. Wähle in der Liste der Codespaces den Codespace aus, den du beenden möchtest.

{% endvscode %}

{% jetbrains %}

Du kannst einen Codespace auf der Seite „Deine Codespaces“ (siehe [Webbrowseranweisungen](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=webui#stopping-a-codespace)) oder mit {% data variables.product.prodname_cli %} (siehe [CLI-Anweisungen](/codespaces/developing-in-codespaces/stopping-and-starting-a-codespace?tool=cli#stopping-a-codespace)) beenden.

{% endjetbrains %}

## Neustarten eines Codespaces

{% webui %}

{% data reusables.codespaces.navigate-to-codespaces-page %}
1. Klicke auf den Namen des Codespaces, den du neu starten möchtest.
![Screenshot des beendeten Codespaces](/assets/images/help/codespaces/restart-codespace-webui.png)

{% endwebui %}

{% cli %}

Wenn du einen Codespace neu startest, kannst du ihn wahlweise in {% data variables.product.prodname_vscode %} oder in deinem Browser öffnen. 

 - Um einen Codespace neu zu starten und ihn in {% data variables.product.prodname_vscode %} zu öffnen, verwende den Unterbefehl `gh codespace code`. Wähle anschließend in der angezeigten Liste den Codespace aus, den du neu starten möchtest.

 ```shell{:copy} 
 gh codespace code
 ```

 - Um einen Codespace neu zu starten und ihn in deinem Browser zu öffnen, verwende den Unterbefehl `gh codespace open --web`. Wähle anschließend in der angezeigten Liste den Codespace aus, den du neu starten möchtest.

 ```shell{:copy}
 gh codespace open --web
 ```

{% endcli %}

{% vscode %}

{% data reusables.vs-code.open-command-palette %}
1. Gib `connect` ein, und wähle in der Liste der Optionen **Codespaces: Mit Codespace verbinden** aus.
1. Wähle in der Liste der Codespaces den Codespace aus, den du neu starten möchtest.

{% endvscode %}

{% jetbrains %}

{% data reusables.codespaces.opening-codespace-in-jetbrains %}

{% endjetbrains %}

## Weitere Informationsquellen

- [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle)
