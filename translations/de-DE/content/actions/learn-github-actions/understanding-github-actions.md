---
title: Grundlegendes zu GitHub Actions
shortTitle: Understanding GitHub Actions
intro: 'Hier erfährst du mehr über die Grundlagen von {% data variables.product.prodname_actions %}, einschließlich der Kernkonzepte und wesentlichen Terminologie.'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/automating-your-workflow-with-github-actions/core-concepts-for-github-actions
  - /actions/getting-started-with-github-actions/core-concepts-for-github-actions
  - /actions/learn-github-actions/introduction-to-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Fundamentals
ms.openlocfilehash: b1e82506da6ede65b5ab93f94ce67dee681f81f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147763572'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

{% data reusables.actions.about-actions %} Du kannst Workflows erstellen, mit denen du alle Pull Requests für dein Repository erstellen und testen sowie gemergte Pull Requests für die Produktion bereitstellen kannst.

{% data variables.product.prodname_actions %} ist nicht auf DevOps beschränkt und kann auch für andere Ereignisse in deinem Repository Workflows ausführen. So kannst du z. B. einen Workflow für das automatische Hinzufügen geeigneter Bezeichnungen ausführen, sobald in deinem Repository ein neues Issue erstellt wird.

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dotcom %} stellt virtuelle Linux-, Windows- und macOS-Computer für die Ausführung deiner Workflows bereit. Alternativ dazu kannst du eigene selbstgehostete Runner in deinem Rechenzentrum oder deiner Cloudinfrastruktur hosten.

{% elsif ghes or ghae %}

Zum Ausführen von Workflows für {% data variables.product.product_location %} musst du deine eigenen virtuellen Linux-, Windows- oder macOS-Computer hosten. {% data reusables.actions.self-hosted-runner-locations %}

{% endif %}

{% ifversion ghec or ghes or ghae %}

Weitere Informationen zur Einführung von {% data variables.product.prodname_actions %} in deinem Unternehmen findest du unter [Einführen von {% data variables.product.prodname_actions %} in deinem Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/introducing-github-actions-to-your-enterprise).

{% endif %}

## Die Komponenten von {% data variables.product.prodname_actions %}

Du kannst konfigurieren, dass bei einem _Ereignis_ in deinem Repository ein {% data variables.product.prodname_actions %}-_Workflow_ ausgelöst wird. Dabei kann es sich etwa um das Öffnen eines Pull Requests oder das Erstellen eines Issues handeln.  Der Workflow enthält einen oder mehrere _Aufträge_, die nacheinander oder gleichzeitig ausgeführt werden können.  Jeder Auftrag wird innerhalb eines eigenen _Runners_ der VM oder in einem Container ausgeführt und verfügt über einen oder mehrere _Schritte_. Diese führen entweder ein von Ihnen definiertes Skript oder eine _Aktion_ aus. Dabei handelt es sich um eine wiederverwendbare Erweiterung zur Vereinfachung des Workflows.

![Übersicht über Workflow](/assets/images/help/images/overview-actions-simple.png)

### Workflows

{% data reusables.actions.about-workflows-long %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}Du kannst auch auf einen Workflow in einem anderen Workflow verweisen. Informationen hierzu findest du unter [Wiederverwenden von Workflows](/actions/learn-github-actions/reusing-workflows).{% endif %}

Weitere Informationen zu Workflows findest du unter [Verwenden von Workflows](/actions/using-workflows).

### Ereignisse

Bei einem Ereignis handelt es sich um eine bestimmte Aktivität in einem Repository, die die Ausführung eines Workflows auslöst. Die Aktivität kann beispielsweise von {% data variables.product.prodname_dotcom %} stammen, wenn ein Pull Request erstellt, ein Issue geöffnet oder ein Commit per Push in ein Repository übertragen wird.  Die Ausführung eines Workflows kann auch nach einem Zeitplan, durch [Posten in einer REST-API](/rest/reference/repos#create-a-repository-dispatch-event) oder manuell ausgelöst werden.

Eine vollständige Liste der Ereignisse zum Auslösen von Workflows findest du unter [Ereignisse, die Workflows auslösen](/actions/reference/events-that-trigger-workflows).

### Aufträge

Ein Auftrag umfasst mehrere _Schritte_ in einem Workflow, die im gleichen Runner ausgeführt werden.  Jeder Schritt besteht entweder aus einem Shellskript oder aus einer _Aktion_, die ausgeführt werden.  Die Schritte werden nacheinander ausgeführt und sind voneinander abhängig.  Da alle Schritte im gleichen Runner ausgeführt werden, kannst du Daten eines Schritts für andere Schritte freigeben.  So kann z. B. in einem Schritt eine Anwendung erstellt und im nächsten Schritt die erstellte Anwendung getestet werden.

Du kannst einen Auftrag so konfigurieren, dass er Abhängigkeiten zu anderen Aufträgen enthält. Standardmäßig verfügen Aufträge nicht über Abhängigkeiten und werden gleichzeitig ausgeführt.  Verfügt ein Auftrag über eine Abhängigkeit zu einem anderen Auftrag, wird er erst nach dessen Abschluss ausgeführt.  Du kannst z. B. mehrere Buildaufträge für unterschiedliche Architekturen ohne Abhängigkeiten erstellen und anschließend einen Auftrag zur Paketerstellung, der von diesen abhängig ist.  Dadurch werden die Buildaufträge gleichzeitig ausgeführt, und der Auftrag zur Paketerstellung wird erst ausgeführt, nachdem diese erfolgreich abgeschlossen wurden.

Weitere Informationen zu Aufträgen findest du unter [Verwenden von Aufträgen](/actions/using-jobs).

### Aktionen

Bei einer _Aktion_ handelt es sich um eine benutzerdefinierte Anwendung für die {% data variables.product.prodname_actions %}-Plattform zur Ausführung einer komplexen und häufig ausgeführten Aufgabe.  Mit einer Aktion kannst du die Menge des Codes in deinen Workflowdateien reduzieren.  Mit einer Aktion kannst du dein Git-Repository aus {% data variables.product.prodname_dotcom %} abrufen, die korrekte Toolkette für deine Buildumgebung einrichten oder die Authentifizierung bei deinem Cloudanbieter einrichten.

Du kannst eigene Aktionen schreiben oder im {% data variables.product.prodname_marketplace %} nach Aktionen für deine Workflows suchen.

{% data reusables.actions.internal-actions-summary %}

Weitere Informationen findest du unter [Erstellen von Aktionen](/actions/creating-actions).

### Runner

{% data reusables.actions.about-runners %} Ein Runner kann immer nur einen Auftrag ausführen. {% ifversion ghes or ghae %} Für {% data variables.product.product_name %} musst du eigene Runner hosten. {% elsif fpt or ghec %}{% data variables.product.company_short %} stellt Runner für Ubuntu Linux, Microsoft Windows und macOS zum Ausführen von Workflows bereit. Jede Workflowausführung erfolgt in einer neu bereitgestellten VM. {% ifversion actions-hosted-runners %} {% data variables.product.prodname_dotcom %} bietet zudem {% data variables.actions.hosted_runner %}, die in größeren Konfigurationen verfügbar sind. Weitere Informationen findest du unter [Verwenden von {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/using-larger-runners). {% endif %}Wenn du ein anderes Betriebssystem oder eine bestimmte Hardwarekonfiguration benötigst, kannst du deine eigenen Runner hosten.{% endif %} Weitere Informationen{% ifversion fpt or ghec %} zu selbstgehosteten Runnern{% endif %} findest du unter [Hosten eigener Runner](/actions/hosting-your-own-runners).

{% data reusables.actions.workflow-basic-example-and-explanation %}

## Komplexere Beispiele
{% data reusables.actions.link-to-example-library %}

## Nächste Schritte

- Weitere Informationen zu {% data variables.product.prodname_actions %} findest du unter [Suchen und Anpassen von Aktionen](/actions/learn-github-actions/finding-and-customizing-actions).
{% ifversion fpt or ghec or ghes %}
- Informationen zu Abrechnungsfunktionen für {% data variables.product.prodname_actions %} findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_actions %}](/actions/reference/usage-limits-billing-and-administration#about-billing-for-github-actions).
{% endif %}

## Kontaktaufnahme mit dem Support

{% data reusables.actions.contacting-support %}

{% ifversion ghec or ghes or ghae %}
## Weitere Informationsquellen

- [Informationen zu {% data variables.product.prodname_actions %} für Unternehmen](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises) {% endif %}
