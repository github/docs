---
title: Steuern der Auftragsausführung mithilfe von Bedingungen
shortTitle: Using conditions to control job execution
intro: 'Verhindere, dass ein Auftrag ausgeführt wird, wenn deine Bedingungen nicht erfüllt sind.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 4
ms.openlocfilehash: 2f39111eb4dca06231b582d0d955d2ea68088926
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107088'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Übersicht

{% note %}

**Hinweis:** Der Status eines übersprungenen Auftrags wird als „Erfolgreich“ gemeldet. Die Zusammenführung eines Pull Requests wird dadurch nicht verhindert, selbst wenn es sich um eine erforderliche Überprüfung handelt.

{% endnote %}

{% data reusables.actions.jobs.section-using-conditions-to-control-job-execution %}

Für einen übersprungenen Auftrag wird der folgende Status angezeigt:

![Skipped-required-run-details](/assets/images/help/repository/skipped-required-run-details.png)
