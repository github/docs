---
title: Kann ich Konten für Personen in meiner Organisation erstellen?
intro: 'Du kannst zwar Benutzer*innen zu einer von dir erstellten Organisation hinzufügen, aber darfst keine persönlichen Benutzerkonten im Auftrag einer anderen Person erstellen.'
redirect_from:
  - /articles/can-i-create-accounts-for-those-in-my-organization
  - /articles/can-i-create-accounts-for-people-in-my-organization
  - /github/setting-up-and-managing-organizations-and-teams/can-i-create-accounts-for-people-in-my-organization
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Create accounts for people
ms.openlocfilehash: 9ddbb857d86a3cada3f11a20a3ed1fab7bb263b8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101508'
---
## Informationen zu persönlichen Konten

Da der Zugriff auf eine Organisation durch die Anmeldung bei einem persönlichen Konto erfolgt, muss jedes Teammitglied ein persönliches Konto erstellen. Wenn du die Benutzernamen aller Personen hast, die du deiner Organisation hinzufügen möchtest, kannst du die Benutzer Teams hinzufügen.

{% ifversion fpt or ghec %} {% ifversion fpt %}Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können{% else %}Du kannst{% endif %} SAML Single Sign-On verwenden, um den Zugriff persönlicher Konten auf die Ressourcen der Organisation über einen Identitätsanbieter (IdP) zentral zu verwalten. Weitere Informationen findest du unter [Informationen zur Identitäts- und Zugriffsverwaltung mit SAML Single Sign-On (SSO)](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %}

Du kannst auch {% data variables.product.prodname_emus %} in Erwägung ziehen. {% data reusables.enterprise-accounts.emu-short-summary %} {% endif %}

## Benutzer zu deiner Organisation hinzufügen

1. Stelle allen Personen Anweisungen zum [Erstellen eines persönlichen Kontos](/articles/signing-up-for-a-new-github-account) zur Verfügung.
2. Frage alle Personen, die Mitglied deiner Organisation werden sollen, nach ihrem Benutzernamen.
3. [Lade die neuen persönlichen Konten ein, deiner Organisation beizutreten](/articles/inviting-users-to-join-your-organization). Verwende [Organisationsrollen](/articles/permission-levels-for-an-organization) und [Repositoryberechtigungen](/articles/repository-permission-levels-for-an-organization), um den Zugriff auf Konten einzuschränken.
