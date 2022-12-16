---
title: 'Verwalten deiner Rolle in einer Organisation, die deinem Unternehmen gehört'
intro: 'Du kannst deine Mitgliedschaft in jeder Organisation verwalten, die deinem Unternehmen gehört, und deine Rolle innerhalb der Organisation ändern.'
permissions: Enterprise owners can manage their role in an organization owned by the enterprise.
versions:
  feature: enterprise-owner-join-org
type: how_to
topics:
  - Administrator
  - Enterprise
  - Organizations
shortTitle: Manage your organization roles
ms.openlocfilehash: e7a95602fe103dcbccb80bc2dfec6a67f8b4b312
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884237'
---
## Informationen zur Rollenverwaltung

Du kannst wählen, dass du einer Organisation im Besitz deines Unternehmens als Mitglied oder als Organisationsbesitzer beitrittst, deine Rolle innerhalb der Organisation änderst oder die Organisation verlassen möchtest.

{% ifversion ghec %} {% warning %}

**Warnung**: Wenn eine Organisation SCIM zum Bereitstellen von Benutzern verwendet, könnte ein Beitritt zur Organisation auf diese Weise unbeabsichtigte Folgen haben. Weitere Informationen findest du unter [Informationen über SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% endwarning %} {% endif %}

Informationen zum Verwalten der Rollen anderer Personen in einer Organisation findest du unter [Verwalten der Mitgliedschaft in deiner Organisation](/organizations/managing-membership-in-your-organization) und [Verwalten des Zugriffs von Personen auf deine Organisation mit Rollen](/organizations/managing-peoples-access-to-your-organization-with-roles).

## Verwalten deiner Rolle über die Unternehmenseinstellungen

Du kannst einer Organisation, die deinem Unternehmen gehört, beitreten und deine Rolle in der Organisation direkt über die Einstellungen deines Unternehmenskontos verwalten.

{% ifversion ghec %}

Wenn eine Organisation Einmaliges Anmelden (Single Sign-On, SSO) mit SAML (SAML SSO) erzwingt, kannst du ihr nicht mithilfe der Unternehmenseinstellungen beitreten. Stattdessen musst du der Organisation mithilfe von deren Identitätsanbieter (Identity Provider, IdP) beitreten. Dann kannst du deine Rolle in deinen Unternehmenseinstellungen verwalten. Weitere Informationen findest du unter [Beitreten zu einer Organisation, die SAML SSO erzwingt](#joining-an-organization-that-enforces-saml-sso).

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
1. Wähle auf der Registerkarte **Organisationen** rechts neben der Organisation, in der du deine Rolle verwalten möchtest, das Dropdownmenü {% octicon "gear" aria-label="The gear icon" %} aus, und klicke auf die Aktion, die du ausführen möchtest.

   ![Screenshot des Dropdownmenüs für das Zahnradsymbol für eine Organisation](/assets/images/help/business-accounts/change-role-in-org.png)

{% ifversion ghec %}

## Beitreten zu einer Organisation, die SAML SSO erzwingt

Wenn eine Organisation die SAML-SSO erzwingt, kannst du ihr nicht über die Unternehmenseinstellungen beitreten. Stattdessen musst du der Organisation mithilfe von deren Identitätsanbieter (Identity Provider, IdP) beitreten.

1. Du musst ihrem IdP den Zugriff auf die Anwendung für {% data variables.product.prodname_ghe_cloud %} zugewiesen haben, die von der Organisation verwendet wird. Wenn du deinen IdP nicht selbst konfigurieren kannst, wende dich an deinen IdP-Administrator.
1. Authentifiziere dich bei der Organisation mithilfe der SAML-SSO.

   - Wenn die Organisation SCIM verwendet, akzeptiere deren Einladung, die durch die SCIM-Integration generiert wird.
   - Wenn die Organisation SCIM nicht verwendet, wechsle zur folgenden URL, indem du „ORGANIZATION“ durch den Namen der Organisation ersetzt. Folge dann den Aufforderungen zur Authentifizierung.

    `https://github.com/orgs/ORGANIZATION/sso`

Nachdem du der Organisation beigetreten bist, kannst du deine Rolle in der Organisation mithilfe der Unternehmenseinstellungen verwalten, z. B. ein Organisationsbesitzer werden. Weitere Informationen findest du unter [Verwalten deiner Rolle über die Unternehmenseinstellungen](#managing-your-role-with-the-enterprise-settings).

{% endif %}
