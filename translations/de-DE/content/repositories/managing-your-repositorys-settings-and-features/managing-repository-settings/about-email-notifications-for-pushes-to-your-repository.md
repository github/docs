---
title: Informationen zu E-Mail-Benachrichtigungen für Pushes an Ihr Repository
intro: 'Du kannst festlegen, dass E-Mail-Benachrichtigungen automatisch an eine bestimmte E-Mail-Adresse gesendet werden, wenn jemand an das Repository überträgt.'
permissions: People with admin permissions in a repository can enable email notifications for pushes to your repository.
redirect_from:
  - /articles/managing-notifications-for-pushes-to-a-repository
  - /articles/receiving-email-notifications-for-pushes-to-a-repository
  - /articles/about-email-notifications-for-pushes-to-your-repository
  - /github/receiving-notifications-about-activity-on-github/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/about-email-notifications-for-pushes-to-your-repository
  - /github/administering-a-repository/managing-repository-settings/about-email-notifications-for-pushes-to-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Email notifications for pushes
ms.openlocfilehash: ee12b8f8270921abd1fe70c748449e46fd472e2c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145132171'
---
{% data reusables.notifications.outbound_email_tip %}

In jeder E-Mail-Benachrichtigung für einen Push an ein Repository werden die neuen Commits und Links zu einem Diff aufgelistet, der nur diese Commits enthält. In der E-Mail-Benachrichtigung siehst Du Folgendes:

- Den Namen des Repositorys, in dem der Commit erstellt wurde
- Den Branch, in dem der Commit erstellt wurde
- Den SHA1 des Commits, einschließlich eines Links zum Diff in {% data variables.product.product_name %}
- Den Autor des Commits
- Das Erstellungsdatum des Commits
- Die Dateien, die im Rahmen des Commits geändert wurden
- Die Commit-Mitteilung

Du kannst E-Mail-Benachrichtigungen filtern, die Du für Pushes an ein Repository erhältst. Weitere Informationen findest du unter [Konfigurieren von Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications).

## E-Mail-Benachrichtigungen für Pushes in Dein Repository aktivieren

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.sidebar-notifications %}
5. Gib bis zu zwei E-Mail-Adressen (getrennt durch Leerzeichen) ein, an die Du Benachrichtigungen senden möchtest. Wenn Du E-Mails an mehr als zwei Konten senden möchtest, legst Du eine der E-Mail-Adressen als Gruppen-E-Mail-Adresse fest.
![Textfeld für die E-Mail-Adresse](/assets/images/help/settings/email_services_addresses.png)
1. Wenn du einen eigenen Server verwendest, kannst du die Integrität von E-Mails über **Approved-Header** überprüfen. Ein **Approved-Header** ist ein Token oder Geheimnis, das du in dieses Feld eingibst und das dann mit der E-Mail gesendet wird. Wenn der `Approved`-Header einer E-Mail mit dem Token übereinstimmt, kannst du darauf vertrauen, dass die E-Mail von {% data variables.product.product_name %} stammt.
![Textfeld für den Approved-Header von E-Mails](/assets/images/help/settings/email_services_approved_header.png)
7. Klicke auf **Benachrichtigungen einrichten**.
![Schaltfläche „Benachrichtigungen einrichten“](/assets/images/help/settings/setup_notifications_settings.png)

## Weiterführende Themen
- „[Informationen zu Benachrichtigungen](/github/managing-subscriptions-and-notifications-on-github/about-notifications)“

