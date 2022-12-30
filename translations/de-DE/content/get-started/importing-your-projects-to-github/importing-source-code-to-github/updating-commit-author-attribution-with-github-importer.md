---
title: Zuordnung von Commit-Autoren mit GitHub Importer aktualisieren
intro: Während eines Imports kannst du die Commits in deinem Repository mit den GitHub-Konten der Commitautor*innen abgleichen.
redirect_from:
  - /articles/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/updating-commit-author-attribution-with-github-importer
  - /github/importing-your-projects-to-github/importing-source-code-to-github/updating-commit-author-attribution-with-github-importer
versions:
  fpt: '*'
  ghec: '*'
shortTitle: Update author GitHub Importer
ms.openlocfilehash: 900f71e966f8f8f00a4645286b52592abf06ac48
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145131237'
---
GitHub Importer sucht nach GitHub-Benutzern, deren E-Mail-Adressen mit denen der Autoren der Commits im importierten Repository übereinstimmen. Dann kannst du einen Commit mit seinem Autoren verbinden, entweder mittels seiner E-Mail-Adresse oder seinem GitHub-Benutzernamen.

## Commit-Autoren aktualisieren

1. Klicke nach dem Import deines Repositorys auf der Importstatusseite auf **Autoren abgleichen**.
![Schaltfläche „Autoren abgleichen“](/assets/images/help/importer/match-authors-button.png)
2. Klicke neben dem Autor, dessen Informationen du aktualisieren möchtest, auf **Verbinden**.
![Liste der Commit-Autoren](/assets/images/help/importer/connect-commit-author.png)
3. Gib die E-Mail-Adresse oder den GitHub-Benutzernamen des Autors ein, und drücke dann die **EINGABETASTE**.

## Commits einem GitHub-Benutzer mit einer öffentlichen E-Mail-Adresse zuordnen

Wenn der Autor eines Commits des importierten Repositorys über ein GitHub-Konto verfügt, das der E-Mail-Adresse zugeordnet ist, unter der er seine Commits verfasst, und er seine [E-Mail-Adresse für Commits nicht als privat festgelegt hat](/articles/setting-your-commit-email-address), ordnet GitHub Importer die mit dem Commit verbundene E-Mail-Adresse der öffentlichen E-Mail-Adresse dessen GitHub-Kontos zu. Dadurch wird auch der Commit dem GitHub-Konto des Autors zugeordnet.

## Commits einem GitHub-Benutzer ohne öffentliche E-Mail-Adresse zuordnen

Wenn der Autor eines Commits des importierten Repositorys in seinem GitHub-Profil keine öffentliche E-Mail-Adresse festgelegt hat, seine [E-Mail-Adresse für Commits aber auch nicht als privat festgelegt ist](/articles/setting-your-commit-email-address), kann GitHub Importer die dem Commit zugeordnete E-Mail-Adresse vermutlich nicht dem GitHub-Konto des Autors zuordnen.

Dies kann der Commit-Autor durch Festlegung seiner E-Mail-Adresse als privat lösen. Seine Commits werden dann `<username>@users.noreply.github.com` zugeschrieben, und die importierten Commits werden seinem GitHub Konto zugeordnet.

## Commits über die E-Mail-Adresse zuordnen

Wenn die E-Mail-Adresse des Autors nicht mit seinem GitHub-Konto verknüpft ist, kann er nach dem Import [die Adresse dem Konto hinzufügen](/articles/adding-an-email-address-to-your-github-account), und die Commits werden korrekt zugeordnet.

Wenn der Autor über kein GitHub-Konto verfügt, ordnet GitHub Importer dessen Commits der mit den Commits verbundenen E-Mail-Adresse zu.

## Weiterführende Themen

- [Informationen zu GitHub Importer](/articles/about-github-importer)
- [Ein Repository mit GitHub Importer importieren](/articles/importing-a-repository-with-github-importer)
- [Hinzufügen einer E-Mail-Adresse zu deinem Konto](/articles/adding-an-email-address-to-your-github-account/)
- [E-Mail-Adresse für Commits festlegen](/articles/setting-your-commit-email-address)
