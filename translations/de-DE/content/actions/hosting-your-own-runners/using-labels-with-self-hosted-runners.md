---
title: Verwenden von Bezeichnungen mit selbstgehosteten Runnern
intro: Mit Labels kannst du deine selbst-gehosteten Runner nach ihren Eigenschaften organisieren.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Label runners
ms.openlocfilehash: 3b26db5c8b6494ebb63cc3ce9cc9a0109bac4545
ms.sourcegitcommit: 929818065a8545476e4cf8e2cab6517f40345ef0
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163252'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Informationen zum Verwenden von Bezeichnungen für das Weiterleiten von Aufträgen zu bestimmten Typen von selbstgehosteten Runnern findest du unter [Verwenden von selbstgehosteten Runnern in einem Workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow). {% ifversion target-runner-groups %}Du kannst Aufträge auch an Runner in einer bestimmten Gruppe weiterleiten. Weitere Informationen findest du unter [Festlegen von Runnern in einer Gruppe als Ziel](/actions/using-jobs/choosing-the-runner-for-a-job#targeting-runners-in-a-group). {% endif %}

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

## Einen benutzerdefinierten Label erstellen

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %}
 1. Klicke im Abschnitt „Bezeichnungen“ auf {% octicon "gear" aria-label="The Gear icon" %}.
 1. Gib im Feld „Bezeichnung suchen oder erstellen“ den Namen deiner neuen Bezeichnung ein, und klicke auf **Neue Bezeichnung erstellen**.
 Das benutzerdefinierte Label wird erstellt und dem selbst-gehosteten Runner zugewiesen. Benutzerdefinierte Labels können von selbst-gehosteten Runnern entfernt werden, aber sie können derzeit nicht manuell gelöscht werden. {% data reusables.actions.actions-unused-labels %} {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Gib im Feld „Bezeichnungen filtern“ den Namen deiner neuen Bezeichnung ein, und klicke auf **Neue Bezeichnung erstellen**.
    ![Hinzufügen einer Runnerbezeichnung](/assets/images/help/settings/actions-add-runner-label.png)
    
Das benutzerdefinierte Label wird erstellt und dem selbst-gehosteten Runner zugewiesen. Benutzerdefinierte Labels können von selbst-gehosteten Runnern entfernt werden, aber sie können derzeit nicht manuell gelöscht werden. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Ein Label einem selbst-gehosteten Runner zuweisen

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Wenn du deinem selbstgehosteten Runner eine Bezeichnung zuweisen möchtest, klickst du im Feld „Bezeichnung suchen oder erstellen“ auf die Bezeichnung. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Klicke auf ein Label, um es Deinem selbst-gehosteten Runner zuzuweisen. {% endif %}

## Ein benutzerdefiniertes Labels von einem selbst-gehosteten Runner entfernen

{% ifversion fpt or ghec or ghes > 3.3 or ghae > 3.3 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-selection %} {% data reusables.actions.runner-label-settings %}
  1. Im Feld „Bezeichnung suchen oder erstellen“ werden zugewiesene Bezeichnungen mit dem Symbol {% octicon "check" aria-label="The Check icon" %} markiert. Klicke auf eine markierte Bezeichnung, um die Zuweisung zu deinem selbstgehosteten Runner aufzuheben. {% elsif ghae or ghes < 3.4 %} {% data reusables.actions.self-hosted-runner-navigate-to-repo-org-enterprise %} {% data reusables.actions.self-hosted-runner-list %} {% data reusables.actions.self-hosted-runner-list-group %} {% data reusables.actions.self-hosted-runner-labels-view-assigned-labels %}
1. Klicke auf das zugewiesene Label, um es von Deinem selbst gehosteten Runner zu entfernen. {% data reusables.actions.actions-unused-labels %} {% endif %}

## Programmgesteuertes Zuweisen von Bezeichnungen

Du kannst einem selbstgehosteten Runner nach seiner Erstellung oder während seiner ersten Konfiguration programmgesteuert Bezeichnungen zuweisen.

* Um einem vorhandenen selbstgehosteten Runner programmgesteuert Bezeichnungen zuzuweisen, musst du die REST-API verwenden. Weitere Informationen findest du in der REST-API für [selbstgehostete Runner](/rest/actions/self-hosted-runners).
* Um einem selbstgehosteten Runner während der Erstkonfiguration programmgesteuert Bezeichnungen zuzuweisen, kannst du mit dem Parameter `labels` Bezeichnungsnamen an das Skript `config` übergeben.

  {% note %}
  
  **Hinweis:** Du kannst das Skript `config` nicht verwenden, um einem vorhandenen selbstgehosteten Runner Bezeichnungen zuzuweisen.
  
  {% endnote %}

  Mit diesem Befehl wird zum Beispiel eine Bezeichnung namens `gpu` zugewiesen, wenn du einen neuen selbstgehosteten Runner konfigurierst:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu
  ```

  Das Label wird erstellt, wenn es noch nicht existiert. Mit diesem Ansatz kannst du den Runnern auch die Standardbezeichnungen wie z. B. `x64` oder `linux` zuweisen. Wenn Standardblabels mit dem Konfigurationsskript zugewiesen werden, akzeptiert {% data variables.product.prodname_actions %} diese als gegeben und überprüft nicht, ob der Runner dieses Betriebssystem oder diese Architektur tatsächlich verwendet.

  Du kannst mehrere Labels durch Kommas getrennt angeben. Zum Beispiel:

  ```
  ./config.sh --url <REPOSITORY_URL> --token <REGISTRATION_TOKEN> --labels gpu,x64,linux
  ```

  {% note %}

  ** Hinweis:** Wenn Du einen existierenden Runner ersetzt, musst Du alle benutzerdefinierten Labels neu zuweisen.

  {% endnote %}
