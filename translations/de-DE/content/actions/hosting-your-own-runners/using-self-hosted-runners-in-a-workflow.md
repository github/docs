---
title: Verwenden selbstgehosteten Runnern in einem Workflow
intro: 'Um selbst-gehostete Runner in einem Workflow zu verwenden, kannst du mittels Labels den Runner-Typ für einen Job angeben.'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
  - /actions/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
shortTitle: Use runners in a workflow
ms.openlocfilehash: 5c0ff57f5b3eda79e3fcf8b09706ed19f981b8ae
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147573417'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Informationen zum Erstellen von benutzerdefinierten und Standardbezeichnungen findest du unter „[Verwenden von Bezeichnungen mit selbstgehosteten Runnern](/actions/hosting-your-own-runners/using-labels-with-self-hosted-runners)“.

## Verwenden selbstgehosteten Runnern in einem Workflow

Mithilfe von Bezeichnungen kannst du Workflowaufträge entsprechend ihrer gemeinsamen Merkmale an bestimmte Typen von selbstgehosteten Runnern senden. Wenn dein Auftrag beispielsweise eine bestimmte Hardwarekomponente oder ein bestimmtes Softwarepaket benötigt, kannst du einem Runner eine benutzerdefiniertes Bezeichnung zuweisen und dann deinen Auftrag so konfigurieren, dass er nur auf Runnern mit dieser Bezeichnung ausgeführt wird.

{% data reusables.actions.self-hosted-runner-labels-runs-on %}

Weitere Informationen findest du unter [Workflowsyntax für {% data variables.product.prodname_actions %}](/github/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions#jobsjob_idruns-on).

## Standard-Labels verwenden, um Jobs zu lenken

Ein selbst-gehosteter Runner erhält automatisch bestimmte Labels, wenn er zu {% data variables.product.prodname_actions %} hinzugefügt wird. Diese werden verwendet, um das Betriebssystem und die Hardwareplattform anzuzeigen:

* `self-hosted`: Standardbezeichnung, die auf alle selbstgehosteten Runner angewendet wird.
* `linux`, `windows` oder `macOS`: Wird je nach Betriebssystem des Runners angewendet.
* `x64`, `ARM`oder `ARM64`: Wird je nach Hardwarearchitektur angewendet.

Du kannst die YAML deines Workflows verwenden, um Aufträge an eine Kombination dieser Bezeichnungen zu senden. In diesem Beispiel ist ein selbst-gehosteter Runner, der allen drei Labels entspricht, berechtigt, den Job auszuführen:

```yaml
runs-on: [self-hosted, linux, ARM64]
```

- `self-hosted` – Auftrag auf einem selbstgehosteten Runner ausführen.
- `linux` – Nur Linux-basierten Runner verwenden.
- `ARM64` – Nur auf ARM64-Hardware basierenden Runner verwenden.

Die Standard-Labels sind fest und können weder geändert noch entfernt werden. Erwäge die Verwendung benutzerdefinierter Bezeichnungen, wenn du mehr Kontrolle über das Auftragsrouting benötigst.

## Benutzerdefinierte Labels verwenden, um Jobs zu lenken

Du kannst jederzeit eigene Bezeichnungen erstellen und deinen selbstgehosteten Runnern zuordnen. Mit benutzerdefinierten Bezeichnungen kannst du Aufträge an bestimmte Typen von selbstgehosteten Runnern senden, je nachdem, welche Bezeichnungen sie haben. 

Wenn du z. B. einen Auftrag hast, der einen bestimmten Typ von Grafikhardware erfordert, kannst du eine benutzerdefinierte Bezeichnung mit dem Namen `gpu` erstellen und den Runnern zuordnen, auf denen diese Hardware installiert ist. Ein selbst-gehosteter Runner, der allen zugewiesenen Labels entspricht, ist dann berechtigt, den Job auszuführen. 

Dieses Beispiel zeigt einen Job, der Standard- und benutzerdefinierte Labels kombiniert:

```yaml
runs-on: [self-hosted, linux, x64, gpu]
```

- `self-hosted` – Auftrag auf einem selbstgehosteten Runner ausführen.
- `linux` – Nur Linux-basierten Runner verwenden.
- `x64` – Nur auf x64-Hardware basierenden Runner verwenden.
- `gpu` – Diese benutzerdefinierte Bezeichnung wurde manuell selbstgehosteten Runnern zugewiesen, auf denen die GPU-Hardware installiert ist. 

Diese Bezeichnungen funktionieren kumulativ. Ein selbstgehosteter Runner muss also alle vier Bezeichnungen aufweisen, um den Auftrag verarbeiten zu können.

## Routingrangfolge für selbstgehostete Runner

Wenn du einen Auftrag an einen selbstgehosteten Runner weiterleitest, sucht {% data variables.product.prodname_dotcom %} nach einem Runner, der mit den `runs-on`-Bezeichnungen des Auftrags übereinstimmt:

{% ifversion fpt or ghes > 3.3 or ghae or ghec %}
- Wenn {% data variables.product.prodname_dotcom %} einen online und im Leerlauf befindlichen Runner findet, der mit den `runs-on`-Bezeichnungen des Auftrags übereinstimmt, wird der Auftrag dem Runner zugewiesen und zugesendet.
  - Wenn der Runner den zugewiesenen Auftrag nicht innerhalb von 60 Sekunden abholt, wird der Auftrag erneut in die Warteschlange gestellt, sodass er von einem neuen Runner angenommen werden kann.
- Wenn {% data variables.product.prodname_dotcom %} keinen online und im Leerlauf befindlichen Runner findet, der mit den `runs-on`-Bezeichnungen des Auftrags übereinstimmt, bleibt der Auftrag in der Warteschlange, bis ein Runner online geht.
- Wenn der Auftrag länger als 24 Stunden in der Warteschlange bleibt, schlägt der Auftrag fehl.
{% elsif ghes = 3.3 %}
- {% data variables.product.prodname_dotcom %} sucht nach einem Runner zuerst auf Repositoryebene, dann auf Organisationsebene und zuletzt auf Unternehmensebene.
- Wenn {% data variables.product.prodname_dotcom %} auf einer bestimmten Ebene einen online und im Leerlauf befindlichen Runner findet, der mit den `runs-on`-Bezeichnungen des Auftrags übereinstimmt, wird der Auftrag dem Runner zugewiesen und zugesendet.
  - Wenn der Runner den zugewiesenen Auftrag nicht innerhalb von 60 Sekunden abholt, wird der Auftrag auf allen Ebenen in die Warteschlange gestellt und wartet darauf, dass ein übereinstimmender Runner auf einer beliebigen Ebene online geht und den Auftrag abholt.
- Wenn {% data variables.product.prodname_dotcom %} auf keiner Ebene einen online und im Leerlauf befindlichen Runner findet, wird der Auftrag auf allen Ebenen in die Warteschlange gestellt und wartet darauf, dass ein übereinstimmender Runner auf einer beliebigen Ebene online geht und den Auftrag abholt.
- Wenn der Auftrag länger als 24 Stunden in der Warteschlange bleibt, schlägt der Auftrag fehl.
{% else %}
1. {% data variables.product.prodname_dotcom %} sucht nach einem Runner zuerst auf Repositoryebene, dann auf Organisationsebene und zuletzt auf Unternehmensebene.
2. Der Auftrag wird dann an den ersten übereinstimmenden Runner gesendet, der online ist und sich im Leerlauf befindet.
   - Wenn alle übereinstimmenden online befindlichen Runner belegt sind, wird der Auftrag auf der Ebene mit der höchsten Anzahl übereinstimmender online befindlicher Runner in die Warteschlange gestellt.
   - Wenn alle übereinstimmenden Runner offline sind, wird der Auftrag auf der Ebene mit der höchsten Anzahl übereinstimmender online befindlicher Runner in die Warteschlange gestellt.
   - Wenn auf keiner Ebene übereinstimmende Runner vorhanden sind, schlägt der Auftrag fehl.
   - Wenn der Auftrag länger als 24 Stunden in der Warteschlange bleibt, schlägt der Auftrag fehl.
{% endif %}
