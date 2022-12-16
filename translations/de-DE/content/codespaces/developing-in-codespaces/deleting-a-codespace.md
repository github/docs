---
title: Einen Codespace löschen
intro: 'Du kannst einen Codespace löschen, wenn du ihn nicht länger benötigst.'
redirect_from:
  - /github/developing-online-with-github-codespaces/deleting-a-codespace
  - /github/developing-online-with-codespaces/deleting-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Delete a codespace
ms.openlocfilehash: 24b53cc0cead2b6b15894ada4c799abc8e1c6e7a
ms.sourcegitcommit: 1f3bd126ca000982c538f1621d47722737740943
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188256'
---
Es gibt verschiedene Möglichkeiten, einen Codespace zu löschen: im Terminal mithilfe der {% data variables.product.prodname_cli %}, in {% data variables.product.prodname_vscode %} oder in deinem Webbrowser. Verwende die Registerkarten in diesem Artikel, um Anweisungen für jede dieser Methoden zum Löschen eines Codespace anzuzeigen.

{% note %}

**Hinweis:** Du kannst einen Codespace nicht in der JetBrains Gateway-Instanz, der JetBrains-Clientanwendung oder in JupyterLab löschen.

{% endnote %}

Für das Speichern von Codespaces entstehen Kosten. Du solltest daher alle Codespaces löschen, die du nicht mehr benötigst. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_github_codespaces %}](/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces).

{% data reusables.codespaces.max-number-codespaces %}

## Einen Codespace löschen

{% webui %}

{% data reusables.codespaces.your-codespaces-procedure-step %}
1. Klicke rechts neben dem Codespace, den du löschen möchtest, auf {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %} und anschließend auf **{% octicon "trash" aria-label="The trash icon" %} Löschen**.

   ![Schaltfläche „Löschen“](/assets/images/help/codespaces/delete-codespace.png)

{% endwebui %}

{% vscode %}

{% data reusables.codespaces.deleting-a-codespace-in-vscode %}

{% endvscode %}


{% cli %}

{% data reusables.cli.cli-learn-more %}

Um einen Codespace zu löschen, verwende den Unterbefehl `gh codespace delete`, und wähle dann einen Codespace aus der angezeigten Liste aus.

```shell
gh codespace delete
```

Falls noch nicht gespeicherte Änderungen vorliegen, wirst du aufgefordert, den Löschvorgang zu bestätigen. Du kannst das Löschen mit dem Flag `--force` erzwingen, um diese Aufforderung zu vermeiden.

Weitere Informationen zu diesem Befehl findest du im [{% data variables.product.prodname_cli %}-Leitfaden](https://cli.github.com/manual/gh_codespace_delete).

{% endcli %}

## Massenlöschen von Codespaces

{% webui %}

Du kannst {% data variables.product.prodname_cli %} verwenden, um mehrere oder alle deine Codespaces mit einem einzigen Befehl zu löschen. Weitere Informationen findest du auf der Registerkarte „{% data variables.product.prodname_cli %}“ im oberen Bereich dieser Seite.

{% endwebui %}

{% vscode %}

Du kannst {% data variables.product.prodname_cli %} verwenden, um mehrere oder alle deine Codespaces mit einem einzigen Befehl zu löschen. Weitere Informationen findest du auf der Registerkarte „{% data variables.product.prodname_cli %}“ im oberen Bereich dieser Seite.

{% endvscode %}


{% cli %}

Du kannst mehrere oder alle deine Codespaces mit einem einzigen Befehl löschen, indem du `gh codespace delete` gefolgt von einem dieser Flags verwendest:

`--all`: Löscht alle Codespaces.

`--repo REPOSITORY`: Löscht alle Codespaces für dieses Repository. Alternativ kannst du mit dem Flag `--days` nach dem Alter des Codespace filtern.

`--days NUMBER`: Löscht alle Codespaces, deren Alter die angegebene Anzahl von Tagen überschreitet. Kann zusammen mit dem Flag `--repo` verwendet werden.

Standardmäßig wirst du aufgefordert, das Löschen aller Codespaces zu bestätigen, die nicht gespeicherte Änderungen enthalten. Du kannst das Flag `--force` verwenden, um diese Bestätigung zu überspringen. 

### Beispiel

Lösche alle Codespaces für das Repository `octo-org/octo-repo`, die du vor mehr als 7 Tagen erstellt hast.

```
gh codespace delete --repo octo-org/octo-repo --days 7
```

{% endcli %}

## Löschen der Codespaces in deiner Organisation

Als Organisationsinhaber*in kannst du {% data variables.product.prodname_cli %} verwenden, um alle Codespaces in deiner Organisation zu löschen.

{% webui %}

Weitere Informationen findest du auf der Registerkarte „{% data variables.product.prodname_cli %}“ im oberen Bereich dieser Seite.

{% endwebui %}

{% vscode %}

Weitere Informationen findest du auf der Registerkarte „{% data variables.product.prodname_cli %}“ im oberen Bereich dieser Seite.

{% endvscode %}

{% cli %}

1. Gib einen dieser Befehle ein, um eine Liste der Codespaces anzuzeigen.
   * `gh codespace delete --org ORGANIZATION` listet die aktuellen Codespaces in der angegebenen Organisation auf. 
   * `gh codespace delete --org ORGANIZATION --user USER` listet nur die Codespaces auf, die vom angegebenen Benutzer erstellt wurden.
   Du musst ein Inhaber der angegebenen Organisation sein.
1. Navigiere in der Liste der Codespaces zu dem Codespace, den du löschen möchtest.
1. Drücke die <kbd>EINGABETASTE</kbd>, um den ausgewählten Codespace zu löschen.

   Wenn der Codespace nicht gespeicherte Änderungen enthält, wirst du aufgefordert, die Löschung zu bestätigen.

{% endcli %}

Du kannst auch die REST-API verwenden, um Codespaces für deine Organisation zu löschen. Weitere Informationen findest du unter [Codespaces in Organisationen](/rest/codespaces/organizations#delete-a-codespace-from-the-organization).

## Weitere Informationsquellen
- [Der Codespace-Lebenszyklus](/codespaces/getting-started/the-codespace-lifecycle)
- [Konfigurieren des automatischen Löschens deiner Codespaces](/codespaces/customizing-your-codespace/configuring-automatic-deletion-of-your-codespaces)
