---
title: Anzeigen von Überprüfungsstatus für alle deine Commits
shortTitle: Displaying verification for all commits
intro: 'Du kannst den wachsamen Modus für die Überprüfung der Commitsignatur aktivieren, um alle deine Commits und Tags mit einem Signaturüberprüfungsstatus zu kennzeichnen.'
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/displaying-verification-statuses-for-all-of-your-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/displaying-verification-statuses-for-all-of-your-commits
ms.openlocfilehash: ce306b1275b2da8d7ad985ed0c696659798723c0
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653346'
---
{% data reusables.identity-and-permissions.vigilant-mode-beta-note %}

## Informationen zum wachsamen Modus

Wenn du lokal auf deinem Computer arbeitest, kannst du mit Git den Autor deiner Änderungen und die Identität des Committers festlegen. Dies macht es möglicherweise anderen Personen schwierig, sicher sein zu können, dass Commits und Tags, die du erstellst, tatsächlich von dir erstellt wurden. Um dabei zu helfen, dieses Problem zu beheben, kannst du deine Commits und Tags signieren. Weitere Informationen findest du unter [Signieren von Commits](/github/authenticating-to-github/signing-commits) und [Signatur-Tags](/github/authenticating-to-github/signing-tags). {% data variables.product.prodname_dotcom %} markiert signierte Commits und Tags mit einem Überprüfungsstatus. 

Standardmäßig werden Commits und Tags als „Überprüft“ markiert, wenn sie mit einem GPG-{% ifversion ssh-commit-verification %}, SSH-{% endif %} oder S/MIME-Schlüssel signiert sind, der erfolgreich überprüft wurde. Wenn ein Commit oder Tag eine Signatur aufweist, die nicht überprüft werden kann {% data variables.product.prodname_dotcom %}, wird der Commit oder Tag als „Nicht überprüft“ gekennzeichnet. In allen anderen Fällen wird kein Überprüfungsstatus angezeigt.

Du kannst anderen Benutzern jedoch erhöhtes Vertrauen in die Identität geben, die deinen Commits und Tags zugeordnet ist, indem du den wachsamen Modus in deinen {% data variables.product.prodname_dotcom %}-Einstellungen aktivierst. Wenn der wachsame Modus aktiviert ist, werden alle deine Commits und Tags mit einem von drei Überprüfungsstatus gekennzeichnet.

![Überprüfungsstatus der Signatur](/assets/images/help/commits/signature-verification-statuses.png)

{% data reusables.identity-and-permissions.vigilant-mode-verification-statuses %}

Du solltest nur den wachsamen Modus aktivieren, wenn du alle Commits und Tags signierst und eine E-Mail-Adresse verwendest, die für dein Konto auf {% data variables.product.product_name %} als Committer-E-Mail-Adresse überprüft wird. Nachdem du diesen Modus aktiviert hast, werden alle nicht signierten Commits oder Tags, die du lokal generiert und an {% data variables.product.prodname_dotcom %} übergeben hast, als „Nicht überprüft" markiert.

{% data reusables.identity-and-permissions.verification-status-check %}

## Aktivieren des wachsamen Modus

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Wähle auf der Seite „SSH-Einstellungen“ unter „Wachsamer Modus“ **Nicht signierte Commits als nicht bestätigt kennzeichnen** aus.

   ![Kontrollkästchen: Nicht signierte Commits als nicht bestätigt kennzeichnen](/assets/images/help/commits/vigilant-mode-checkbox.png)
