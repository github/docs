---
title: Durchsuchen der Releases eines Repositorys
intro: 'Du kannst mit Schlüsselwörtern, Tags und anderen Qualifizierern nach bestimmten Versionen in einem Repository suchen.'
permissions: Anyone with read access to a repository can search that repository's releases.
shortTitle: Searching releases
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '>= 3.4'
topics:
  - Repositories
ms.openlocfilehash: a61e49521452befdcddf2724cad837062c7d54a1
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109654'
---
## Suchen nach Releases in einem Repository

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.releases %}
1. Um die Releases des Repositorys zu durchsuchen, gib deine Abfrage oben auf der Seite „Releases“ im Suchfeld ein, und drücke die **EINGABETASTE**.
![Suchfeld für Releases](/assets/images/help/releases/search-releases.png)

## Suchsyntax für die Suche nach Releases in einem Repository

Du kannst in deiner Suchabfrage Text angeben, der mit dem Titel, dem Text und dem Tag der Releases im Repository abgeglichen wird. Du kannst auch die folgenden Qualifizierer kombinieren, um bestimmte Releases zu finden.

| Qualifizierer        | Beispiel
| ------------- | -------------
| `draft:true` | **draft:true** stimmt nur mit Entwurfsreleases überein.
| `draft:false` | **draft:false** stimmt nur mit veröffentlichten Versionen überein.
| `prerelease:true` | **prerelease:true** stimmt nur mit Vorabreleases überein.
| `prerelease:false` | **prerelease:false** stimmt nur mit nicht vorab veröffentlichten Releases überein.
| <code>tag:<em>TAG</em></code> | **tag:v1** stimmt mit einem Release mit dem v1-Tag und allen Neben- oder Patchversionen innerhalb von v1 überein, z. B. v1.0, v1.2 und v1.2.5.
| <code>created:<em>DATE</em></code> | **created:2021** stimmt mit Releases überein, die im Jahr 2021 erstellt wurden. Du kannst auch Datumsbereiche angeben. Weitere Informationen findest du unter [Grundlagen der Suchsyntax](/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates).
