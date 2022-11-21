---
title: Einrichten von Visual Studio-Abonnements mit GitHub Enterprise
intro: 'Durch das {% data variables.product.prodname_vs %}-Abonnement deines Teams kann auch der Zugriff auf {% data variables.product.prodname_enterprise %} gewährt werden.'
versions:
  ghec: '*'
type: how_to
topics:
  - Enterprise
  - Licensing
shortTitle: Set up
ms.openlocfilehash: ae030de637593aa723a5d2990485881ae30b333c
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120625'
---
## Informationen zum Setup von {% data variables.visual_studio.prodname_vss_ghe %}

{% data reusables.enterprise-accounts.vss-ghe-description %} Weitere Informationen findest du unter [Informationen zu {% data variables.visual_studio.prodname_vss_ghe %}](/billing/managing-licenses-for-visual-studio-subscriptions-with-github-enterprise/about-visual-studio-subscriptions-with-github-enterprise).

In dieser Anleitung wird erklärt, wie dein Team Lizenzen für {% data variables.product.prodname_vs %}-Abonnent*innen erhalten und mit der Arbeit mit {% data variables.product.prodname_enterprise %} beginnen kann.

Wenn du dir lieber ein Video ansehen möchtest, kannst du dir [Einrichten deiner {% data variables.product.prodname_enterprise %}-Lizenzen mit {% data variables.product.prodname_vs %}-Abonnements](https://www.youtube.com/watch?v=P_zBgp_BE_I) auf dem YouTube-Kanal von Microsoft Visual Studio ansehen.

## Rollen für {% data variables.visual_studio.prodname_vss_ghe %}

Vor der Einrichtung von {% data variables.visual_studio.prodname_vss_ghe %} solltest du die Rollen für dieses kombinierte Angebot kennen.

| Role | Dienst | BESCHREIBUNG | Weitere Informationen |
| :- | :- | :- | :- |
| **Abonnementsadministrator** | {% data variables.product.prodname_vs %}-Abonnement | Eine Person, die Lizenzen für {% data variables.product.prodname_vs %}-Abonnements zuweist | [Übersicht über Administratoraufgaben](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) in Microsoft-Dokumentation |
| **Abonnent** | {% data variables.product.prodname_vs %}-Abonnement | Eine Person, die eine Lizenz für ein {% data variables.product.prodname_vs %}-Abonnement verwendet | [Dokumentation zu Visual Studio-Abonnements](https://docs.microsoft.com/en-us/visualstudio/subscriptions/) in Microsoft-Dokumentation |
| **Unternehmensbesitzer** | {% data variables.product.prodname_dotcom %} | Eine Person, die über ein persönliches Konto verfügt, das Administrator eines Unternehmens auf {% data variables.location.product_location %} ist | [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-owner) |
| **Organisationsbesitzer** | {% data variables.product.prodname_dotcom %} | Eine Person, die über ein persönliches Konto verfügt, das Besitzer einer Organisation im Unternehmen deines Teams auf {% data variables.location.product_location %} ist | [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization#organization-owners) |
| **Unternehmensmitglied** | {% data variables.product.prodname_dotcom %} | Eine Person, die über ein persönliches Konto verfügt, das Mitglied eines Unternehmens auf {% data variables.location.product_location %} ist | [Rollen in einem Unternehmen](/admin/user-management/managing-users-in-your-enterprise/roles-in-an-enterprise#enterprise-members)  |

## Voraussetzungen

- Das {% data variables.product.prodname_vs %}-Abonnement deines Teams muss {% data variables.product.prodname_enterprise %} enthalten. Weitere Informationen findest du unter [{% data variables.product.prodname_vs %}-Abonnements und -Vorteile](https://visualstudio.microsoft.com/subscriptions/) auf der {% data variables.product.prodname_vs %}-Website und in der [Übersicht über Administratoraufgaben](https://docs.microsoft.com/en-us/visualstudio/subscriptions/admin-responsibilities) in Microsoft-Dokumentation.
 
 - Dein Team muss ein Unternehmen auf {% data variables.location.product_location %} besitzen. Wenn du nicht sicher bist, ob dein Team über ein Unternehmen verfügt, wende dich an deine*n {% data variables.product.prodname_dotcom %}-Administrator*in. Wende dich an {% data variables.contact.contact_enterprise_sales %}, wenn du nicht sicher bist, wer in deinem Team für {% data variables.product.prodname_dotcom %} zuständig ist. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).

## Einrichten von {% data variables.visual_studio.prodname_vss_ghe %}

Ein Mitglied deines Teams muss die folgenden Aufgaben erledigen, um {% data variables.visual_studio.prodname_vss_ghe %} einzurichten.

In manchen Fällen kann eine einzelne Person die Aufgaben erledigen, da diese über alle Rollen verfügt. Möglicherweise musst du diese Aufgaben jedoch auf mehrere Personen verteilen. Weitere Informationen findest du unter [Rollen für {% data variables.visual_studio.prodname_vss_ghe %}](#roles-for-visual-studio-subscriptions-with-github-enterprise).

1. Ein Unternehmensbesitzer muss mindestens eine Organisation in deinem Unternehmen auf {% data variables.location.product_location %} erstellen. Weitere Informationen findest du unter [Hinzufügen von Organisationen zu deinem Unternehmen](/admin/user-management/managing-organizations-in-your-enterprise/adding-organizations-to-your-enterprise).

1. Der*Die Abonnementadministrator*in muss einem Abonnenten bzw. einer Abonnenten im  {% data variables.product.prodname_vs %} eine Lizenz für {% data variables.visual_studio.prodname_vss_admin_portal_with_url %} zuweisen. Weitere Informationen findest du unter [Übersicht über das Abonnementadministrator-Portal für {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/using-admin-portal) und [Zuweisen von {% data variables.product.prodname_vs %}-Lizenzen im Abonnementadministrator-Portal für {% data variables.product.prodname_vs %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-license) in Microsoft-Dokumentation.

1. Wenn der*die Abonnementadministrator*in den Abonnent*innen in {% data variables.product.prodname_vs %} Lizenzen zugewiesen hat, bevor er {% data variables.product.prodname_enterprise %} zum Abonnement hinzugefügt hat, kann der*die Abonnementadministrator*in die Abonnent*innen optional in das kombinierte Angebot im {% data variables.product.prodname_vs %}-Verwaltungsportal verschieben. Weitere Informationen findest du unter [Verwalten von {% data variables.product.prodname_vs %}-Abonnements mit {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/assign-github#moving-to-visual-studio-with-github-enterprise) in Microsoft-Dokumentation.

1. Wenn der*die Abonnementadministrator*in die E-Mail-Benachrichtigungen nicht deaktiviert hat, erhält der*die Abonnent*in zwei Bestätigungs-E-Mails. Weitere Informationen findest du unter [{% data variables.product.prodname_vs %}-Abonnements mit {% data variables.product.prodname_enterprise %}](https://docs.microsoft.com/en-us/visualstudio/subscriptions/access-github#what-is-the-visual-studio-subscription-with-github-enterprise-setup-process) in Microsoft-Dokumentation.

1. Ein Organisationsbesitzern muss den Abonnenten in die Organisation auf {% data variables.location.product_location %} aus Schritt 1 einladen. Der Abonnent kann die Einladung über ein vorhandenes persönliches Konto auf {% data variables.product.prodname_dotcom_the_website %} annehmen oder ein neues Konto erstellen. Nachdem der*die Abonnent*in der Organisation beigetreten ist, wird er*sie zu einem Unternehmensmitglied. Weitere Informationen findest du unter [Einladen von Benutzer*innen in deine Organisation](/organizations/managing-membership-in-your-organization/inviting-users-to-join-your-organization).

   {% tip %}

   **Tipps**:

   - Auch wenn es nicht erforderlich ist, wird empfohlen, dass der*die Organisationsbesitzer*in eine Einladung an dieselbe E-Mail-Adresse sendet, die für den Benutzerprinzipalnamen (UPN) des Abonnenten bzw. der Abonnentin verwendet wird. Wenn die E-Mail-Adresse auf {% data variables.location.product_location %} mit dem UPN des Abonnenten bzw. der Abonnentin übereinstimmt, kannst du gewährleisten, dass kein anderes Unternehmen die Lizenz des Abonnenten bzw. der Abonnentin beansprucht.
   - Wenn der Abonnent die Einladung zur Organisation über ein vorhandenes persönliches Konto auf {% data variables.location.product_location %} annimmt, wird empfohlen, dass er die E-Mail-Adresse, die er für {% data variables.product.prodname_vs %} verwendet, zu seinem persönlichen Konto auf {% data variables.location.product_location %} hinzufügt. Weitere Informationen findest du unter [Hinzufügen einer E-Mail-Adresse zu deinem {% data variables.product.prodname_dotcom %}-Konto](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account).
   - Wenn der*die Organisationsbesitzer*in eine große Anzahl von Abonnent*innen einladen muss, kann ein Skript diesen Prozess beschleunigen. Weitere Informationen findest du im [PowerShell-Beispielskript](https://github.com/github/platform-samples/blob/master/api/powershell/invite_members_to_org.ps1) im `github/platform-samples`-Repository.

    {% endtip %}

Nachdem {% data variables.visual_studio.prodname_vss_ghe %} für Abonnenten in deinem Team eingerichtet wurde, können Unternehmensbesitzer die Lizenzierungsinformationen auf {% data variables.location.product_location %} anzeigen. Weitere Informationen findest du unter [Anzeigen des Abonnements und der Nutzung für dein Unternehmenskonto](/billing/managing-billing-for-your-github-account/viewing-the-subscription-and-usage-for-your-enterprise-account).

## Weiterführende Themen

- [Erste Schritte mit {% data variables.product.prodname_ghe_cloud %}](/get-started/onboarding/getting-started-with-github-enterprise-cloud)
