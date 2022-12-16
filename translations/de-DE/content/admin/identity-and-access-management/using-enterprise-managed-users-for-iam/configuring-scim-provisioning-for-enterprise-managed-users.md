---
title: Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users
shortTitle: Provisioning managed users
intro: 'Du kannst deinen Identitätsanbieter so konfigurieren, dass neue Benutzer bereitgestellt und ihre Mitgliedschaft in deinem Unternehmen und deinen Teams verwaltet wird.'
product: '{% data reusables.gated-features.emus %}'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/authentication/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users
  - /admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/configuring-scim-provisioning-for-enterprise-managed-users
versions:
  ghec: '*'
topics:
  - Accounts
  - Enterprise
ms.openlocfilehash: 3cf1f917f0bfd0e02a1b712958f8d72a041b7281
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160696'
---
## Informationen zur Bereitstellung für {% data variables.product.prodname_emus %}

Du musst die Bereitstellung für {% data variables.product.prodname_emus %} konfigurieren, um Benutzerkonten für deine Unternehmensmitglieder zu erstellen, zu verwalten und zu deaktivieren. 

Nachdem du die Bereitstellung für {% data variables.product.prodname_emus %} konfigurierst, werden Benutzer, die der {% data variables.product.prodname_emu_idp_application %}-Anwendung bei deinem Identitätsanbieter zugewiesen wurden, über SCIM als neue {% data variables.enterprise.prodname_managed_users %} auf {% data variables.product.prodname_dotcom %} bereitgestellt, und die {% data variables.enterprise.prodname_managed_users %} werden deinem Unternehmen hinzugefügt. Wenn du der Anwendung eine Gruppe zuweist, werden alle Benutzer innerhalb der Gruppe als neue {% data variables.enterprise.prodname_managed_users %} bereitgestellt.

Wenn du die Informationen aktualisierst, die der Identität eines Benutzers auf deinem IdP zugeordnet sind, aktualisiert dein IdP das Konto des Benutzers auf {% data variables.product.prodname_dotcom_the_website %}. Wenn du die Zuweisung eines Benutzers zur {% data variables.product.prodname_emu_idp_application %}-Anwendung aufhebst oder ein Benutzerkonto bei deinem Identitätsanbieter deaktivierst, kommuniziert dein Identitätsanbieter mit {% data variables.product.prodname_dotcom %} so, dass alle Sitzungen ungültig gemacht werden und das Konto des Mitglieds deaktiviert wird. Die Informationen des deaktivierten Kontos werden gespeichert und der Benutzername wird in einen Hash des ursprünglichen Benutzernamens geändert, wobei der Kurzcode angefügt wurde. Wenn du einen Benutzer der {% data variables.product.prodname_emu_idp_application %}-Anwendung neu zuweist oder sein Konto bei deinem IdP reaktivierst, wird das {% data variables.enterprise.prodname_managed_user %} auf {% data variables.product.prodname_dotcom %} reaktiviert und der Benutzername wiederhergestellt.

Du kannst Gruppen in deinem IdP dazu verwenden, die Mitgliedschaft in Teams innerhalb der Organisationen deines Unternehmens zu verwalten. Dadurch kannst du den Repositoryzugriff und die Berechtigungen über deinen IdP konfigurieren. Weitere Informationen findest du unter [Verwalten von Teammitgliedschaften mit Identitätsanbietergruppen](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/managing-team-memberships-with-identity-provider-groups).

## Voraussetzungen

Ehe du die Bereitstellung für {% data variables.product.prodname_emus %} konfigurieren kannst, musst du SAML{% ifversion oidc-for-emu %} oder OIDC{% endif %} Single Sign-On konfigurieren. {% ifversion oidc-for-emu %}

- Weitere Informationen zum Konfigurieren von OIDC findest du unter [Konfigurieren von OIDC für Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).
- {% endif %}Informationen zum Konfigurieren von SAML findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Enterprise Managed Users](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-saml-single-sign-on-for-enterprise-managed-users).

## Erstellen eines {% data variables.product.pat_generic %}

Du benötigst ein {% data variables.product.pat_v1 %} mit dem Bereich **admin:enterprise**, das zum Setupbenutzer gehört, um die Bereitstellung für {% data variables.enterprise.prodname_emu_enterprise %} zu konfigurieren.

{% warning %}

**Warnung:** Wenn das Token abläuft oder ein bereitgestellter Benutzer das Token erstellt, funktioniert die Bereitstellung mit SCIM möglicherweise unerwartet nicht mehr. Stelle sicher, dass du das Token erstellst, während du als Setupbenutzer angemeldet bist, und dass das Ablaufdatum des Tokens auf „Kein Ablauf“ festgelegt ist.

{% endwarning %}

1. Melde dich auf {% data variables.product.prodname_dotcom_the_website %} als Setupbenutzer für dein neues Unternehmen mit dem Namen **@<em>KURZCODE</em>_admin** an.
{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.personal_access_tokens %} {% data reusables.user-settings.generate_new_token %}
1. Gib dem Token unter **Hinweis** einen aussagekräftigen Namen.
   ![Screenshot, auf dem der Name des Tokens angezeigt wird](/assets/images/help/enterprises/emu-pat-name.png)
1. Wähle das Dropdownmenü **Ablaufdatum** aus, und klicke dann auf **Kein Ablauf**.
   ![Screenshot, auf dem das Ablaufdatum des Tokens auf „Kein Ablauf“ festgelegt wurde](/assets/images/help/enterprises/emu-pat-no-expiration.png)
1. Wähle den Bereich **admin:enterprise** aus.
   ![Screenshot, auf dem der Bereich „admin:enterprise“ angezeigt wird](/assets/images/help/enterprises/enterprise-pat-scope.png)
1. Klicke dann auf **Token generieren**.
   ![Die Schaltfläche „Token generieren“](/assets/images/help/settings/generate_token.png)
1. Klicke auf {% octicon "paste" aria-label="The copy icon" %}, um das Token in deine Zwischenablage zu kopieren.
   ![Das neu erstellte Token](/assets/images/help/settings/personal_access_tokens.png)
2. Speichere das neue Token sicher in einem Kennwort-Manager, um es später verwenden zu können.

## Konfigurieren der Bereitstellung für {% data variables.product.prodname_emus %}

Nachdem du dein {% data variables.product.pat_generic %} erstellt und sicher gespeichert hast, kannst du die Bereitstellung bei deinem Identitätsanbieter konfigurieren. 

{% data reusables.scim.emu-scim-rate-limit %}

Um die Bereitstellung zu konfigurieren, folge dem entsprechenden Link in der nachstehenden Tabelle.

| Identitätsanbieter | SSO-Methode | Weitere Informationen | |---|---|---|{% ifversion oidc-for-emu %} | Azure AD | OIDC | [Tutorial: Tutorial: Konfigurieren von GitHub Enterprise Managed User (OIDC) für die automatische Benutzerbereitstellung](https://docs.microsoft.com/azure/active-directory/saas-apps/github-enterprise-managed-user-oidc-provisioning-tutorial) in der Azure AD-Dokumentation |{% endif %} | Azure AD | SAML | [Tutorial: Konfigurieren von GitHub Enterprise Managed User für die automatische Benutzerbereitstellung](https://docs.microsoft.com/en-us/azure/active-directory/saas-apps/github-enterprise-managed-user-provisioning-tutorial) in der Azure AD-Dokumentation | | Okta | SAML | [Konfigurieren der SCIM-Bereitstellung für Enterprise Managed Users mit Okta](/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/configuring-scim-provisioning-for-enterprise-managed-users-with-okta) |

{% note %}

**Hinweis:** Azure AD unterstützt die Bereitstellung geschachtelter Gruppen nicht. Weitere Informationen findest du unter [Funktionsweise der Anwendungsbereitstellung in Azure Active Directory](https://learn.microsoft.com/en-us/azure/active-directory/app-provisioning/how-provisioning-works#assignment-based-scoping).

{% endnote %}
