---
title: Migrieren von SAML zu OIDC
shortTitle: Migrating from SAML to OIDC
intro: 'Wenn du SAML zum Authentifizieren von Mitgliedern in deinem {% data variables.enterprise.prodname_emu_enterprise %} verwendest, kannst du zu OpenID Connect (OIDC) migrieren und von der Unterstützung der Richtlinie für bedingten Zugriff deines Identitätsanbieters profitieren.'
product: '{% data reusables.gated-features.emus %}'
versions:
  feature: oidc-for-emu
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
ms.openlocfilehash: 36c93c94bfda1d0ebc951b0a8325691afa0199bb
ms.sourcegitcommit: c562c85cc75ffe1eb4e9595d8adc09ec71697ab1
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180045'
---
{% data reusables.enterprise-accounts.azure-emu-support-oidc %}

## Informationen zum Migrieren deines {% data variables.enterprise.prodname_emu_enterprise %} von SAML zu OIDC

Wenn dein {% data variables.enterprise.prodname_emu_enterprise %} SAML-SSO zum Authentifizieren bei Azure Active Directory (Azure AD) verwendet, kannst du zu OIDC migrieren. {% data reusables.enterprise-accounts.emu-cap-validates %}

Bei der Migration von SAML zu OIDC wird dem Anzeigenamen von {% data variables.enterprise.prodname_managed_users %} und Gruppen, die zuvor für SAML bereitgestellt wurden, aber nicht von der {% data variables.product.prodname_emu_idp_oidc_application %}-Anwendung bereitgestellt werden, der Zusatz „(SAML)“ angehängt.

Wenn {% data variables.product.prodname_emus %} neu für dich ist und du noch keine Authentifizierung für dein Unternehmen konfiguriert hast, musst du nicht migrieren und kannst sofort OIDC Single Sign-On einrichten. Weitere Informationen findest du unter [Konfigurieren von OIDC für Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/configuring-oidc-for-enterprise-managed-users).

## Migrieren deines Unternehmens

{% note %}

**Hinweis:** Um dich als Setupbenutzer anzumelden, benötigst du einen Wiederherstellungscode. Wenn du noch nicht über deine Wiederherstellungscodes verfügst, kannst du auf die Codes zugreifen, während du als Unternehmensbesitzer angemeldet bist. Weitere Informationen findest du unter [Herunterladen der SSO-Wiederherstellungscodes für dein Unternehmenskonto](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-single-sign-on-recovery-codes).

{% endnote %}

1. Bevor du mit der Migration beginnst, melde dich bei Azure an, und deaktiviere die Bereitstellung in der vorhandenen Anwendung {% data variables.product.prodname_emu_idp_application %}.
1. Wenn du in Azure AD [Richtlinien für den bedingten Zugriff mit einer Netzwerkstandortbedingung](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/location-condition) verwendest und du derzeit eine IP-Zulassungsliste mit deinem Unternehmenskonto oder einer der Organisationen verwendest, die zum Unternehmenskonto auf {% data variables.product.prodname_dotcom_the_website %} gehören, deaktiviere die IP-Zulassungslisten. Weitere Informationen findest du unter [Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise) und [Verwalten zulässiger IP-Adressen für dein Unternehmen](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization).
1.  Melde dich auf {% data variables.product.prodname_dotcom_the_website %} als Setupbenutzer für dein Unternehmen mit dem Benutzernamen **@<em>KURZCODE</em>_admin** an. 
1. Wenn du aufgefordert wirst, mit deinem Identitätsanbieter fortzufahren, klicke auf **Wiederherstellungscode verwenden**, und melde dich mit einem der Wiederherstellungscodes deines Unternehmens an.
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}
1. Klicke unten auf der Seite neben „Zu OpenID Connect SSO migrieren“ auf **Konfigurieren mit Azure**.  
   {% warning %} 

   **Warnung:** Die Migration kann bis zu einer Stunde dauern, und es ist wichtig, dass während der Migration keine Benutzer bereitgestellt werden. Du kannst überprüfen, ob die Migration noch ausgeführt wird, indem du zur Seite mit den Sicherheitseinstellungen deines Unternehmens zurückkehrst. Wenn die Option „SAML-Authentifizierung erforderlich“ noch aktiviert ist, wird die Migration noch ausgeführt.

   {% endwarning %}

   ![Screenshot der Schaltfläche „Konfigurieren mit Azure“](/assets/images/help/enterprises/saml-to-oidc-button.png)
1. Lies beide Warnungen, und klicke, um fortzufahren.
{% data reusables.enterprise-accounts.emu-azure-admin-consent %}
1. Während du als Setupbenutzer*in auf {% data variables.product.prodname_dotcom_the_website %} angemeldet bist, erstelle in einer neuen Registerkarte oder einem neuen Fenster ein {% data variables.product.pat_v1 %} mit dem Bereich **admin:enterprise** und **ohne Ablaufdatum**, und kopiere es in die Zwischenablage. Weitere Informationen zum Erstellen eines neuen Tokens findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/setting-up-and-managing-your-enterprise/managing-your-enterprise-users-with-your-identity-provider/configuring-scim-provisioning-for-enterprise-managed-users#creating-a-personal-access-token).
1. Gib im Azure-Portal in den Einstellungen für die {% data variables.product.prodname_emu_idp_oidc_application %}-Anwendung unter „Mandanten-URL“ `https://api.github.com/scim/v2/enterprises/YOUR_ENTERPRISE` ein, um YOUR_ENTERPRISE durch den Namen deines Unternehmenskontos zu ersetzen.  
   
   Wenn die URL deines Unternehmenskontos beispielsweise `https://github.com/enterprises/octo-corp` lautet, lautet der Name des Unternehmenskontos `octo-corp`.
1. Füge unter „Geheimes Token“ das {% data variables.product.pat_v1 %} mit dem zuvor erstellten Bereich **admin:enterprise** ein.
1. Klicke zum Testen der Konfiguration auf **Verbindung testen**.
1. Um deine Änderungen zu speichern, klicke oben im Formular auf **Speichern**.
1. Kopiere im Azure-Portal die Benutzer und Gruppen aus der alten {% data variables.product.prodname_emu_idp_application %}-Anwendung in die neue {% data variables.product.prodname_emu_idp_oidc_application %}-Anwendung.
1. Teste deine Konfiguration, indem du einen einzelnen neuen Benutzer bereitstellst.
1. Wenn dein Test erfolgreich ist, starte die Bereitstellung für alle Benutzer durch Klicken auf **Bereitstellung starten**.
