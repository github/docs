---
title: Ändern des Computertyps für deinen Codespace
shortTitle: Change the machine type
intro: 'Du kannst den Computertyp ändern, auf dem dein Codespace ausgeführt wird, um die für deine Arbeit geeigneten Ressourcen zu nutzen.'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/developing-in-codespaces/changing-the-machine-type-for-your-codespace
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 618b031ce0c23c2b4eba52157fca2a6625fe3dfd
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108310'
---
## Informationen zu Computertypen

{% note %}

**Hinweis:** Du kannst den Computertyp nur auswählen oder ändern, wenn du Mitglied einer Organisation bist, die {% data variables.product.prodname_github_codespaces %} verwendet, und einen Codespace in einem Repository dieser Organisation erstellst.

{% endnote %}

{% data reusables.codespaces.codespaces-machine-types %} Du kannst einen alternativen Computertyp auswählen – entweder, wenn du einen Codespace erstellst, oder jederzeit nach Erstellung eines Codespace. 

Informationen zum Auswählen eines Computertyps beim Erstellen eines Codespace findest du unter [Erstellen eines Codespace](/codespaces/developing-in-codespaces/creating-a-codespace#creating-a-codespace).

## Ändern des Computertyps

{% note %}

**Hinweis:** {% data reusables.codespaces.codespaces-machine-type-availability %}

{% endnote %}

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}

   Der aktuelle Computertyp für jeden deiner Codespaces wird angezeigt.

   ![Liste „Deine Codespaces“](/assets/images/help/codespaces/your-codespaces-list.png)

1. Klicke rechts neben dem Codespace, den du ändern möchtest, auf die Auslassungspunkte (**...**).
1. Klicke auf **Computertyp ändern**.

   ![Menüoption „Computertyp ändern“](/assets/images/help/codespaces/change-machine-type-menu-option.png)
1. Falls für deinen Codespace mehrere Computertypen verfügbar sind, wähle den gewünschten Computertyp aus.

   ![Dialogfeld mit verfügbaren Computertypen, die zur Auswahl stehen](/assets/images/help/codespaces/change-machine-type-choice.png)
1. Klicke auf **Codespace aktualisieren**. 

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.changing-machine-type-in-vscode %}

{% endvscode %}

{% cli %}

Du kannst den {% data variables.product.prodname_cli %}-Befehl `gh codespace edit --machine MACHINE-TYPE-NAME` verwenden, um den Computertyp für einen Codespace zu ändern. Bevor du diesen Befehl verwenden kannst, musst du zunächst die verfügbaren Computertypen für deinen Codespace ermitteln.

1. Gib in einem Terminal den folgenden Befehl ein, um die Liste deiner Codespaces anzuzeigen.
   
   ```
   gh codespace list
   ```
1. Optional kannst du mit dem folgenden Befehl den aktuellen Computertyp für einen Codespace ermitteln.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME
   ```

   Ersetze `CODESPACE-NAME` durch den permanenten Namen des Codespaces, zum Beispiel `octocat-myrepo-gmc7`. Die permanenten Namen werden in der Spalte **NAME** in der durch `gh codespace list` zurückgegebenen Liste aufgeführt.

   Wenn du aufgefordert wirst, den `codespace`-Bereich abzufragen, befolge die Anweisungen im Terminal.

   Die Details zum aktuellen Computer werden unter dem Feld `machine` aufgelistet.
1. Gib den folgenden Befehl ein, um die verfügbaren Computertypen für einen Codespace zu ermitteln.
   
   ```
   gh api /user/codespaces/CODESPACE-NAME/machines
   ```

   Ersetze `CODESPACE-NAME` durch den permanenten Namen des Codespaces, zum Beispiel `octocat-myrepo-gmc7`.
1. Gib den folgenden Befehl ein, um den Computertyp für einen Codespace zu ändern.

   ```
   gh codespace edit --machine MACHINE-TYPE-NAME
   ```

   Ersetze `MACHINE-TYPE-NAME` durch den Namen eines verfügbaren Computertyps für deinen Codespace, zum Beispiel `standardLinux32gb`. 
1. Navigiere mithilfe der Pfeiltasten zu dem Codespace, den du ändern möchtest, und drücke dann die <kbd>EINGABETASTE</kbd>.

{% endcli %}

{% data reusables.codespaces.about-changing-storage-size %}

{% cli %}

## Weitere Informationsquellen

- [Codespaces-Computer](/rest/codespaces/machines) in der REST-API-Dokumentation
- [`gh codespace edit`](https://cli.github.com/manual/gh_codespace_edit) im Handbuch zur {% data variables.product.prodname_cli %}

{% endcli %}
