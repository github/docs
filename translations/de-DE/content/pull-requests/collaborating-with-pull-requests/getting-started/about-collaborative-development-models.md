---
title: Informationen zu gemeinschaftlichen Entwicklungsmodellen
intro: 'Die Art und Weise, wie du Pull Requests verwendest, hängt von der Art des Entwicklungsmodells in deinem Projekt ab. Du kannst das Forken-und-Pullen-Modell oder das Modell mit freigegebenen Repositorys anwenden.'
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
ms.openlocfilehash: 2a054071dc801ac035f3925e81895200c0a7375d
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '146139184'
---
## „Forken und Pullen“-Modell

Mit dem „Forken und Pullen“-Modell kann jeder ein bestehendes Repository forken und Veränderungen an seine persönlichen Forks pushen. Du benötigst keine Berechtigungen zum Quell-Repository, um an eine benutzereigene Fork zu übertragen. Die Änderungen können vom Projektbetreuer in das Quell-Repository gezogen werden. Wenn du einen Pull Request öffnest, der Änderungen von deiner benutzereigenen Fork zu einem Branch im Quell- (vorgelagerten) Repository vorschlägt, kannst du allen Personen mit Push Zugriff auf das vorgelagerte Repository erlauben, Änderungen an deinen Pull Requests zu machen.  Dieses Modell ist bei Open-Source-Projekten beliebt, da es Probleme für neue Mitarbeiter reduziert und Benutzern ermöglicht, unabhängig und ohne vorherige Koordination zu arbeiten.

{% tip %}

**Tipp:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## „Freigegebenes Repository“-Modell

Beim „Freigegebenes Repository“-Modell erhalten Mitarbeiter Pushzugriff auf ein einzelnes freigegebenes Repository, und Themenbranches werden erstellt, wenn Änderungen vorgenommen werden müssen. Pull Requests sind in diesem Modell nützlich, da sie einen Code-Review und eine allgemeine Diskussion über eine Reihe von Änderungen initiieren, bevor die Änderungen in den Hauptentwicklungs-Branch integriert werden. Dieses Modell kommt häufiger bei kleinen Teams und Organisationen zur Anwendung, die an privaten Projekten zusammenarbeiten.

## Weitere Informationsquellen

- [Informationen zu Pull Requests](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [Erstellen eines Pull Requests vom einem Fork des Repositorys](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)
- [Zulassen von Änderungen an einem Pull Request-Branch, der über einen Fork erstellt wurde](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)
