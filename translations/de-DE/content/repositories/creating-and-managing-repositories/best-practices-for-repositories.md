---
title: Bewährte Methoden für Repositorys
shortTitle: Best practices
intro: 'Erfahre, wie du Repositorys am effektivsten nutzen kannst.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: f14bef158431c8251f26a4d917f4207d8e7dbc8a
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163478'
---
## Erstellen einer README-Datei

Damit es für andere einfacher ist, deine Arbeit nachzuvollziehen und sich darin zurechtzufinden, empfehlen wir, dass du für jedes Repository eine README-Datei erstellst. 

{% data reusables.repositories.about-READMEs %} Weitere Informationen findest du unter [Informationen zu README-Dateien](/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes).

## Branching anstelle von Forking

Zur Vereinfachung der Zusammenarbeit empfehlen wir, dass reguläre Mitarbeiter von einem einzigen Repository aus arbeiten und Pull Requests nicht zwischen Repositorys, sondern zwischen Branches erstellen. Das Forking eignet sich am besten für die Aufnahme von Beiträgen von Personen, die nicht direkt an einem Projekt beteiligt sind, wie z. B. Open-Source-Mitwirkende.

Um bei Nutzung eines Workflows für das Branching die Qualität wichtiger Branches (z. B. `main`) zu gewährleisten, kannst du geschützte Branches mit erforderlichen Statusüberprüfungen und Pull Request-Überprüfungen verwenden. Weitere Informationen findest du unter [Informationen zu geschützten Branches](/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).

## Verwenden von {% data variables.large_files.product_name_long %}

Um die Leistung zu optimieren, begrenzt {% data variables.location.product_location %} die Größe von Dateien, die in Repositorys zulässig sind. Weitere Informationen findest du unter [Informationen zu großen Dateien auf {% data variables.product.prodname_dotcom %}](/repositories/working-with-files/managing-large-files/about-large-files-on-github).

Zum Nachverfolgen großer Dateien in einem Git-Repository empfehlen wir die Verwendung von {% data variables.large_files.product_name_long %} ({% data variables.large_files.product_name_short %}). Weitere Informationen findest du unter [Informationen zu {% data variables.large_files.product_name_long %}](/repositories/working-with-files/managing-large-files/about-git-large-file-storage).
