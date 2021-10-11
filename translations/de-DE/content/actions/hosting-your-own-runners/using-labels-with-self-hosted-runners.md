---
title: Labels mit selbst-gehosteten Runnern verwenden
intro: Mit Labels kannst Du Deine selbst-gehosteten Runner nach ihren Eigenschaften organisieren.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
type: tutorial
shortTitle: Label runners
---

{% data reusables.actions.ae-self-hosted-runners-notice %}
{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

Informationen zum Einsatz von Labels zur Weiterleitung von Jobs an bestimmte Typen von selbst-gehosteten Runnern findest Du unter „[Nutze selbstgehostete Läufer in einem Workflow](/actions/hosting-your-own-runners/using-self-hosted-runners-in-a-workflow)“.

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

## Einen benutzerdefinierten Label erstellen
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
 {% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
 1. In the "Labels" section, click {% octicon "gear" aria-label="The Gear icon" %}.
 1. In the "Find or create a label" field, type the name of your new label and click **Create new label**. Das benutzerdefinierte Label wird erstellt und dem selbst-gehosteten Runner zugewiesen. Benutzerdefinierte Labels können von selbst-gehosteten Runnern entfernt werden, aber sie können derzeit nicht manuell gelöscht werden. {% data reusables.github-actions.actions-unused-labels %}
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Gib im Feld „Filter-Labels“ den Namen Deines neuen Labels ein und klicke auf **Neues Label erstellen**. ![Runner-Label hinzufügen](/assets/images/help/settings/actions-add-runner-label.png)

Das benutzerdefinierte Label wird erstellt und dem selbst-gehosteten Runner zugewiesen. Benutzerdefinierte Labels können von selbst-gehosteten Runnern entfernt werden, aber sie können derzeit nicht manuell gelöscht werden. {% data reusables.github-actions.actions-unused-labels %}
{% endif %}
## Ein Label einem selbst-gehosteten Runner zuweisen
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.runner-label-settings %}
  1. To assign a label to your self-hosted runner, in the "Find or create a label" field, click the label.
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Klicke auf ein Label, um es Deinem selbst-gehosteten Runner zuzuweisen.
{% endif %}
## Ein benutzerdefiniertes Labels von einem selbst-gehosteten Runner entfernen
{% ifversion fpt %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.settings-sidebar-actions-runner-selection %}
{% data reusables.github-actions.runner-label-settings %}
  1. In the "Find or create a label" field, assigned labels are marked with the
{% octicon "check" aria-label="The Check icon" %} icon. Click on a marked label to unassign it from your self-hosted runner.
{% endif %}
{% ifversion ghae or ghes %}
{% data reusables.github-actions.self-hosted-runner-navigate-to-repo-org-enterprise %}
{% data reusables.github-actions.self-hosted-runner-list %}
{% data reusables.github-actions.self-hosted-runner-list-group %}
{% data reusables.github-actions.self-hosted-runner-labels-view-assigned-labels %}
1. Klicke auf das zugewiesene Label, um es von Deinem selbst gehosteten Runner zu entfernen. {% data reusables.github-actions.actions-unused-labels %}
{% endif %}
## Das Konfigurationsskript zum Erstellen und Zuweisen von Labels verwenden

Du kannst das Konfigurationsskript auf dem selbs-gehosteten Runner verwenden, um benutzerdefinierte Labels zu erstellen und zuzuweisen. Zum Beispiel weist dieser Befehl dem selbst-gehosteten Runner ein Label namens `gpu` zu.

```shell
./config.sh --labels gpu
```

Das Label wird erstellt, wenn es noch nicht existiert. Mit diesem Ansatz kannst Du den Runnern auch die Standardlabels wie z.B. `x64` oder `Linux` zuweisen. Wenn Standardblabels mit dem Konfigurationsskript zugewiesen werden, akzeptiert {% data variables.product.prodname_actions %} diese als gegeben und überprüft nicht, ob der Runner dieses Betriebssystem oder diese Architektur tatsächlich verwendet.

Du kannst mehrere Labels durch Kommas getrennt angeben. Ein Beispiel:

```shell
./config.sh --labels gpu,x64,linux
```

{% note %}

** Hinweis:** Wenn Du einen existierenden Runner ersetzt, musst Du alle benutzerdefinierten Labels neu zuweisen.

{% endnote %}
