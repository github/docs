---
title: Konfigurieren des einmaligen Anmeldens mit SAML für dein Unternehmen mithilfe von Okta
intro: 'Du kannst mit dem einmaligen Anmelden mit SAML (Security Assertion Markup Language) mit Okta den Zugriff auf dein Unternehmenskonto automatisch auf {% data variables.product.product_name %} verwalten.'
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/configuring-saml-single-sign-on-for-your-enterprise-account-using-okta
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise-using-okta
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
type: how_to
shortTitle: Configure SAML SSO with Okta
ms.openlocfilehash: e9cbf6e70fb5e07f9cd2c5e27d9b952921e18fdc
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148109665'
---
{% data reusables.enterprise-accounts.emu-saml-note %}

## Informationen zu SAML mit Okta

Du kannst den Zugriff auf dein Unternehmenskonto in {% data variables.product.product_name %} und anderen Webanwendungen über eine zentrale Schnittstelle steuern, indem du das einmalige Anmelden (Single Sign-On, SSO) mit SAML mithilfe von Okta, einem Identitätsanbieter (Identity Provider, IdP), für das Unternehmenskonto konfigurierst.

Das SAML-SSO steuert und schützt den Zugriff auf Ressourcen des Unternehmenskontos wie Organisationen, Repositorys, Issues und Pull Requests. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

{% data reusables.saml.switching-from-org-to-enterprise %} Weitere Informationen findest du unter [Umstellen der SAML-Konfiguration von einer Organisation auf ein Unternehmenskonto](/github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account).

Alternativ kannst du das SAML-SSO auch mithilfe von Okta für eine Organisation konfigurieren, die {% data variables.product.prodname_ghe_cloud %} verwendet. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML und SCIM mithilfe von Okta](/organizations/managing-saml-single-sign-on-for-your-organization/configuring-saml-single-sign-on-and-scim-using-okta).

## Die {% data variables.product.prodname_ghe_cloud %}-Anwendung in Okta hinzufügen

{% data reusables.saml.okta-sign-into-your-account %}
1. Navigiere im Okta Integration Network zur Anwendung [{% data variables.product.prodname_ghe_cloud %} - Enterprise Accounts](https://www.okta.com/integrations/github-enterprise-cloud-enterprise-accounts), und klicke auf **Add Integration** (Integration hinzufügen).
{% data reusables.saml.okta-dashboard-click-applications %}
1. Gib optional rechts neben „Application label“ (Anwendungsbezeichnung) einen beschreibenden Namen für die Anwendung ein.
1. Gib rechts neben „{% data variables.product.prodname_dotcom %} Enterprises“ (GitHub-Unternehmen) den Namen deines Unternehmenskontos ein. Wenn die URL deines Unternehmenskontos beispielsweise `https://github.com/enterprises/octo-corp` lautet, gib `octo-corp` ein.
1. Klicken Sie auf **Fertig**.

## SAML SSO aktivieren und testen

{% data reusables.saml.okta-sign-into-your-account %} {% data reusables.saml.okta-dashboard-click-applications %} {% data reusables.saml.click-enterprise-account-application %} {% data reusables.saml.assign-yourself-to-okta %} {% data reusables.saml.okta-sign-on-tab %}
1. Klicke rechts neben „Settings“ (Einstellungen) auf **Edit** (Bearbeiten).
1. Öffne unter „Configured SAML Attributes“ (Konfigurierte SAML-Attribute) rechts neben „Groups“ (Gruppen) das Dropdownmenü, und wähle **Matches regex** (Stimmt mit RegEx über) aus.
1. Gib rechts neben dem Dropdownmenü `.*.*` ein.
1. Klicken Sie auf **Speichern**.
{% data reusables.saml.okta-view-setup-instructions %}
1. Aktiviere SAML für dein Unternehmenskonto mithilfe der Informationen in der Setupanleitung. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
