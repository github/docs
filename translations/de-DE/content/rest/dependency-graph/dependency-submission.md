---
title: Abhängigkeitsübermittlung
intro: 'Mit der Abhängigkeitsübermittlungs-API kannst du Abhängigkeiten für Projekte übermitteln, z. B. die Abhängigkeiten, die gelöst werden, wenn ein Projekt erstellt oder kompiliert wird.'
versions:
  feature: dependency-submission-api
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 72ffb8376c33972ab02c0a5fb48504b92fef3cec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147080388'
---
## Informationen zur Abhängigkeitsübermittlungs-API

{% data reusables.dependency-submission.dependency-submission-api-beta %}

{% data reusables.dependency-submission.about-dependency-submission %}

Abhängigkeiten werden in Form einer Momentaufnahme an die Abhängigkeitsübermittlungs-API übermittelt. Eine Momentaufnahme ist eine Reihe von Abhängigkeiten, die einem Commit-SHA und anderen Metadaten zugeordnet sind, die den aktuellen Status deines Repositorys für einen Commit widerspiegeln.  Du kannst dich entscheiden, vordefinierte Aktionen zu verwenden, oder eigene Aktionen zu erstellen, um jedes Mal, wenn dein Projekt erstellt wird, deine Abhängigkeiten im erforderlichen Format an die Abhängigkeitsübermittlungs-API zu übermitteln. Weitere Informationen zur Abhängigkeitsübermittlungs-API findest du unter [Verwenden der Abhängigkeitsübermittlungs-API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api).

Du kannst mehrere Sätze von Abhängigkeiten, die in deinem Abhängigkeitsdiagramm enthalten sein sollen, an die Abhängigkeitsübermittlungs-API übermitteln. Die API verwendet die `job.correlator`-Eigenschaft und die `detector.name`-Kategorie der Momentaufnahme, um sicherzustellen, dass die neuesten Übermittlungen für jeden Workflow angezeigt werden. Die `correlator`-Eigenschaft selbst ist das primäre Feld, mit dem du unabhängige Übermittlungen auseinander hältst. Ein Beispiel `correlator` könnte eine einfache Kombination aus zwei Variablen sein, die in Aktionen verfügbar sind: `<GITHUB_WORKFLOW> <GITHUB_JOB>`.
