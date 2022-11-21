---
title: Forks durchsuchen
intro: 'Standardmäßig werden [Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) nicht in Suchergebnissen angezeigt. Du kannst sie in Repositorysuchen einbeziehen, und in Codesuchen, wenn sie bestimmte Kriterien erfüllen.'
redirect_from:
  - /articles/searching-in-forks
  - /github/searching-for-information-on-github/searching-in-forks
  - /github/searching-for-information-on-github/searching-on-github/searching-in-forks
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub search
ms.openlocfilehash: 6375fdecd7dba47447b37207467e008f0e7b3fc0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147785790'
---
Wenn du in den Ergebnissen der [Repositorysuche](/search-github/searching-on-github/searching-for-repositories) Forks anzeigen möchtest, füge `fork:true` oder `fork:only` in deine Abfrage ein.

Forks werden nur für die [Codesuche](/search-github/searching-on-github/searching-code) indiziert, wenn sie mehr Sterne aufweisen als das übergeordnete Repository. Code in Forks, die weniger Sterne als das übergeordnete Repository aufweisen, können nicht durchsucht werden. Wenn du in den Ergebnissen der Codesuche Forks anzeigen möchtest, die mehr Sterne als das übergeordnete Repository aufweisen, füge `fork:true` oder `fork:only` zu deiner Anfrage hinzu.

Der Qualifizierer `fork:true` liefert alle Ergebnisse, die deiner Suchanfrage entsprechen, einschließlich Forks. Der Qualifizierer `fork:only` ermittelt _nur_ Forks, die deiner Suchanfrage entsprechen.

| Qualifizierer  | Beispiel
| ------------- | -------------
| `fork:true` | [**github fork:true**](https://github.com/search?q=github+fork%3Atrue&type=Repositories) ermittelt alle Repositorys, die das Wort „github“ enthalten, einschließlich Forks.
| | [**android language:java fork:true**](https://github.com/search?q=android+language%3Ajava+fork%3Atrue&type=Code) sucht nach Code mit dem Wort „android“, der in Java geschrieben ist, sowohl in Forks als auch in regulären Repositorys.
| `fork:only` | [**github fork:only**](https://github.com/search?q=github+fork%3Aonly&type=Repositories) gibt alle Forkrepositorys zurück, die das Wort „github“ enthalten.
| | [**forks:>500 fork:only**](https://github.com/search?q=forks%3A%3E500+fork%3Aonly&type=Repositories) sucht nach Repositorys mit mehr als 500 Forks und gibt nur diejenigen zurück, bei denen es sich um Forks handelt.

## Weitere Informationsquellen

- [Informationen zu Forks](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
- [Informationen zur Suche auf GitHub](/search-github/getting-started-with-searching-on-github/about-searching-on-github)
