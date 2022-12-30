---
title: Verwenden größerer Runner
shortTitle: Larger runners
intro: '{% data variables.product.prodname_dotcom %} bietet größere Runner mit mehr RAM und CPU.'
miniTocMaxHeadingLevel: 3
product: '{% data reusables.gated-features.hosted-runners %}'
versions:
  feature: actions-hosted-runners
ms.openlocfilehash: bbae77f1f027dd4a238de6ba636eb3cb842790b1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106435'
---
## Übersicht über {% data variables.actions.hosted_runner %}

Neben den [in {% data variables.product.prodname_dotcom %} gehosteten Standardrunnern](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources) bietet {% data variables.product.prodname_dotcom %} Kunden mit den {% data variables.product.prodname_team %}- und {% data variables.product.prodname_ghe_cloud %}-Plänen auch eine Auswahl von {% data variables.actions.hosted_runner %}n mit mehr RAM und CPU an. Diese Runner werden von {% data variables.product.prodname_dotcom %} gehostet und verfügen über eine Vorinstallation der Runneranwendung und anderer Tools.

Wenn {% data variables.actions.hosted_runner %} für deine Organisation aktiviert sind, wird automatisch eine standardmäßige Runnergruppe erstellt, die vier vorkonfigurierte {% data variables.actions.hosted_runner %} enthält.

Wenn du einer Organisation einen {% data variables.actions.hosted_runner %} hinzufügst, definierst du einen Computertyp aus einer Auswahl verfügbarer Hardwarespezifikationen und Betriebssystemimages. {% data variables.product.prodname_dotcom %} erstellt dann mehrere Instanzen dieses Runners, die im Rahmen der von dir definierten Grenzwerte für die automatische Skalierung hoch- und herunterskaliert werden können, um den Anforderungen deiner Organisation zu entsprechen.

## Computerspezifikationen für {% data variables.actions.hosted_runner %} 

|Größe (vCPU) | Arbeitsspeicher (GB) | Speicher (SSD) |
| ------------- | ------------- | ------------- |
|4 Kerne | 16 RAM  | 150 GB|
| 8 Kerne | 32 RAM | 300 GB |
|16 Kerne| 64 RAM | 600 GB |
|32 Kerne| 128 RAM| 1.200GB|
|64 Kerne| 256 RAM | 2040 GB|

## Architekturübersicht über {% data variables.actions.hosted_runner %}

Die {% data variables.actions.hosted_runner %} werden auf Organisationsebene verwaltet, wobei sie in Gruppen angeordnet werden, die mehrere Instanzen des Runners enthalten können. Sie können auch auf Unternehmensebene erstellt und für Organisationen in der Hierarchie freigegeben werden. Nachdem du eine Gruppe erstellt hast, kannst du der Gruppe einen Runner hinzufügen und deine Workflows so aktualisieren, dass sie die Bezeichnung als Ziel verwenden, die dem {% data variables.actions.hosted_runner %} zugewiesen ist. Du kannst auch steuern, welche Repositorys Aufträge zur Verarbeitung an die Gruppe senden dürfen. Weitere Informationen zu Gruppen findest du unter [Steuern des Zugriffs auf {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners).

Im folgenden Diagramm wurde eine Klasse gehosteter Runner namens `ubuntu-20.04-16core` mit benutzerdefinierter Hardware und Betriebssystemkonfiguration definiert.

![Diagramm zur Erläuterung von {% data variables.actions.hosted_runner %}](/assets/images/hosted-runner.png)

1. Instanzen dieses Runners werden automatisch erstellt und einer Gruppe namens `ubuntu-20.04-16core` hinzugefügt. 
2. Den Runnern wurde die Bezeichnung `ubuntu-20.04-16core` zugewiesen. 
3. Workflowaufträge verwenden die Bezeichnung `ubuntu-20.04-16core` in ihrem `runs-on` Schlüssel, um den Typ des Runners anzugeben, den sie zum Ausführen des Auftrags benötigen.
4. {% data variables.product.prodname_actions %} überprüft die Runnergruppe, um festzustellen, ob dein Repository zum Senden von Aufträgen an den Runner autorisiert ist.
5. Der Auftrag wird in der nächsten verfügbaren Instanz des `ubuntu-20.04-16core`-Runners ausgeführt.

## Automatische Skalierung von {% data variables.actions.hosted_runner %}n

Deine {% data variables.actions.hosted_runner %} lassen sich so konfigurieren, dass sie automatisch deinen Anforderungen entsprechend skaliert werden können. Wenn Aufträge zur Verarbeitung übermittelt werden, können für die Auftragsausführung automatisch mehr Computer bereitgestellt werden, bis ein vordefinierter Höchstwert erreicht wird. Jeder Computer verarbeitet immer nur einen Auftrag, sodass diese Einstellungen effektiv die Anzahl der Aufträge festlegen, die gleichzeitig ausgeführt werden können. 

Während des Runnerbereitstellungsvorgangs kannst du durch Konfiguration der Option _Max_ deine Kosten kontrollieren, indem du die maximale parallele Anzahl von Computern festlegst, die in dieser Gruppe erstellt werden. Durch einen höheren Wert kann die Blockierung von Workflows aufgrund paralleler Vorgänge vermieden werden.

## Netzwerkbetrieb für {% data variables.actions.hosted_runner %}

Standardmäßig erhalten {% data variables.actions.hosted_runner %} eine dynamische IP-Adresse, die sich für jede Auftragsausführung ändert. Optional können {% data variables.product.prodname_ghe_cloud %}-Kunden ihre {% data variables.actions.hosted_runner %} so konfigurieren, dass diese eine statische IP-Adresse aus dem IP-Adresspool von {% data variables.product.prodname_dotcom %} erhalten. Wenn diese Option aktiviert ist, erhalten Instanzen der {% data variables.actions.hosted_runner %} eine Adresse aus einem für den Runner eindeutigen Bereich, sodass du anhand dieses Bereichs eine Firewallpositivliste konfigurieren kannst. {% ifversion fpt %}Du kannst insgesamt bis zu 10 statische IP-Adressbereiche für alle deine {% data variables.actions.hosted_runner %} verwenden{% endif %}{% ifversion ghec %}Du kannst bis zu 10 statische IP-Adressbereiche für die {% data variables.actions.hosted_runner %} verwenden, die auf Unternehmensebene erstellt wurden. Außerdem kannst du bis zu 10 statische IP-Adressbereiche für die {% data variables.actions.hosted_runner %} verwenden, die auf Organisationsebene für jede Organisation in deinem Unternehmen erstellt wurden{% endif %}.

{% note %}

**Hinweis**: Wenn Runner mehr als 30 Tage lang ungenutzt bleiben, werden ihre IP-Adressbereiche automatisch entfernt und können nicht wiederhergestellt werden.

{% endnote %}

## Planung für {% data variables.actions.hosted_runner %}

### Erstellen einer Runnergruppe

Runnergruppen werden verwendet, um Gruppen von VMs zu sammeln und um sie herum eine Sicherheitsgrenze zu erstellen. Anschließend kannst du entscheiden, welche Organisationen oder Repositorys Aufträge auf diesen Computergruppen ausführen dürfen. Während des Bereitstellungsvorgangs für {% data variables.actions.hosted_runner %} kann der Runner einer vorhandenen Gruppe hinzugefügt werden, andernfalls wird er in einer Standardgruppe aufgenommen. Du kannst eine Gruppe erstellen, indem du die Schritte unter [Steuern des Zugriffs auf {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners) ausführst.

### Grundlegendes zur Abrechnung

{% note %}

**Hinweis**: {% data variables.actions.hosted_runner %} nutzen keine inbegriffenen Berechtigungsminuten und sind für öffentliche Repositorys nicht kostenfrei.

{% endnote %}

Im Vergleich zu in standardmäßigen, {% data variables.product.prodname_dotcom %} gehosteten Runnern werden {% data variables.actions.hosted_runner %} anders abgerechnet. Weitere Informationen findest du unter [Minutentarife](/billing/managing-billing-for-github-actions/about-billing-for-github-actions#per-minute-rates).

## Hinzufügen eines {% data variables.actions.hosted_runner %}s zu einem Unternehmen

Du kannst {% data variables.actions.hosted_runner %} einem Unternehmen hinzufügen, in dem sie mehreren Organisationen zugewiesen werden können. Anschließend können die Organisationsadministratoren steuern, von welchen Repositorys die Runner verwenden werden können. Um einem Unternehmen einen {% data variables.actions.hosted_runner %} hinzufügen zu können, musst du ein Unternehmensbesitzer sein.

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.actions-tab %} {% data reusables.enterprise-accounts.actions-runners-tab %} {% data reusables.actions.add-hosted-runner %}
1. Um Organisationen den Zugriff auf deine {% data variables.actions.hosted_runner %} zu ermöglichen, gib die Liste der Organisationen an, die sie verwenden können. Weitere Informationen findest du unter [Verwalten des Zugriffs auf deine Runner](#managing-access-to-your-runners).

## Hinzufügen eines {% data variables.actions.hosted_runner %}s zu einer Organisation

Du kannst einen {% data variables.actions.hosted_runner %} einer Organisation hinzufügen, in der die Organisationsadministratoren steuern, von welchen Repositorys er verwendet werden kann. 

{% data reusables.actions.add-hosted-runner-overview %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.organizations.settings-sidebar-actions-runners %} {% data reusables.actions.add-hosted-runner %}
1. Um einem Repository den Zugriff auf deine {% data variables.actions.hosted_runner %} zu ermöglichen, füge es der Liste der Repositorys hinzu, die die Runner verwenden können. Weitere Informationen findest du unter [Verwalten des Zugriffs auf deine Runner](#managing-access-to-your-runners).

## Ausführen von Aufträgen in deinem Runner

Sobald dein Runnertyp definiert wurde, kannst du deine Workflow-YAML-Dateien aktualisieren, um Aufträge zur Verarbeitung an deine neu erstellten Runnerinstanzen zu senden. In diesem Beispiel wird eine Runnergruppe mit Ubuntu 16-Core-Runnern aufgefüllt, denen die Bezeichnung `ubuntu-20.04-16core` zugewiesen wurde. Wenn ein Runner mit dieser Bezeichnung vorliegt, verwendet der Auftrag `check-bats-version` den Schlüssel `runs-on`, um den Runner bei jeder Auftragsausführung als Ziel zu verwenden:

```yaml
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-20.04-16core
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm install -g bats
      - run: bats -v
```

Um herauszufinden, welche Runner für dein Repository und deine Organisation aktiviert sind, musst du dich an den Administrator deiner Organisation wenden. Dein Organisationsadministrator kann neue Runner und Runnergruppen erstellen und Berechtigungen konfigurieren, um festzulegen, welche Repositorys auf eine Runnergruppe zugreifen können.

## Verwalten des Zugriffs auf deine Runner

{% note %}

**Hinweis**: Bevor deine Workflows Aufträge an {% data variables.actions.hosted_runner %} senden können, musst du zuerst Berechtigungen für die Runnergruppe konfigurieren. Weitere Informationen findest du in den folgenden Abschnitten.

{% endnote %}

Anhand von Runnergruppen wird gesteuert, welche Repositorys Aufträge in deinen {% data variables.actions.hosted_runner %}n ausführen können. Du musst den Zugriff auf die Gruppe aus jeder Ebene der Verwaltungshierarchie gewähren, je nachdem, wo du den {% data variables.actions.hosted_runner %} definiert hast:

- **Runner auf Unternehmensebene**: Konfiguriere die Runnergruppe, um Zugriff auf alle erforderlichen Organisationen zu gewähren. Darüber hinaus musst du für jede Organisation die Gruppe konfigurieren und angeben, welchen Repositorys der Zugriff gestattet wird.
- **Runner auf Organisationsebene**: Konfiguriere die Runnergruppe, indem du angibst, welchen Repositorys der Zugriff gestattet wird.

Das folgende Diagramm zeigt beispielsweise eine Runnergruppe namens `grp-ubuntu-20.04-16core` auf Unternehmensebene. Bevor das Repository namens `octo-repo` die Runner in der Gruppe verwenden kann, musst du die Gruppe zuerst auf Unternehmensebene konfigurieren, um den Zugriff aus der Organisation `octo-org` zu ermöglichen. Anschließend musst du die Gruppe auf Organisationsebene konfigurieren, um den Zugriff aus `octo-repo` zu erlauben:

![Diagramm zur Erläuterung von Gruppen mit {% data variables.actions.hosted_runner %}n](/assets/images/hosted-runner-mgmt.png)

### Gewähren des Zugriffs auf eine Runnergruppe für Repositorys

In diesem Verfahren wird veranschaulicht, wie du Gruppenberechtigungen auf Unternehmens- und Organisationsebene konfigurierst:

{% data reusables.actions.runner-groups-navigate-to-repo-org-enterprise %} {% data reusables.actions.settings-sidebar-actions-runner-groups-selection %}
  - Für Runnergruppen in einem Unternehmen: Ändere unter **Organisationszugriff** die Organisationen, die auf die Runnergruppe zugreifen können.
  - Für Runnergruppen in einer Organisation: Ändere unter **Repositoryzugriff** die Repositorys, die auf die Runnergruppe zugreifen können.

{% warning %}

**Warnung**:

{% data reusables.actions.hosted-runner-security %}

Weitere Informationen findest du unter [Steuern des Zugriffs auf {% data variables.actions.hosted_runner %}](/actions/using-github-hosted-runners/controlling-access-to-larger-runners).

{% endwarning %}
