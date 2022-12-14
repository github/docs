---
title: Wechseln deiner SAML-Konfiguration von einer Organisation zu einem Unternehmenskonto
intro: Erfahre mehr über spezielle Überlegungen und bewährte Methoden zum Ersetzen einer SAML-Konfiguration auf Organisationsebene durch eine SAML-Konfiguration auf Unternehmensebene.
permissions: Enterprise owners can configure SAML single sign-on for an enterprise account.
versions:
  ghec: '*'
topics:
  - Authentication
  - Enterprise
  - Organizations
type: how_to
shortTitle: From organization to enterprise
redirect_from:
  - /github/setting-up-and-managing-your-enterprise/configuring-identity-and-access-management-for-your-enterprise-account/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/authentication/managing-identity-and-access-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
  - /admin/identity-and-access-management/managing-iam-for-your-enterprise/switching-your-saml-configuration-from-an-organization-to-an-enterprise-account
ms.openlocfilehash: 0fa75185767984db574fc12a9e84404d5da9e002
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145102903'
---
## Informationen zum einmaligen Anmelden mit SAML bei Unternehmenskonten

{% data reusables.saml.dotcom-saml-explanation %} {% data reusables.saml.about-saml-enterprise-accounts %}

{% data reusables.saml.switching-from-org-to-enterprise %} 

Wenn du SAML-SSO auf Organisationsebene konfigurierst, muss jede Organisation mit einem eindeutigen SSO-Mandanten bei deinem IdP konfiguriert sein. Dies bedeutet, dass deine Mitglieder für jede Organisation, bei der sie sich erfolgreich authentifiziert haben, einem eindeutigen SAML-Identitätsdatensatz zugeordnet werden. Wenn du SAML-SSO stattdessen für dein Unternehmenskonto konfigurierst, verfügt jedes Unternehmensmitglied nur über eine SAML-Identität, die für alle Organisationen verwendet wird, die sich im Besitz des Unternehmenskontos befinden.

Nachdem du SAML-SSO für dein Unternehmenskonto konfiguriert hast, überschreibt die neue Konfiguration die vorhandenen SAML-SSO-Konfigurationen für Organisationen im Besitz des Unternehmenskontos.

Unternehmensmitglieder werden nicht benachrichtigt, wenn ein*e Unternehmensbesitzer*in SAML für das Unternehmenskonto aktiviert. Wenn SAML-SSO zuvor auf Organisationsebene erzwungen wurde, sollte für Mitglieder bei der direkten Navigation zu Organisationsressourcen kein großer Unterschied bemerkbar sein. Die Mitglieder müssen sich weiterhin über SAML authentifizieren. Wenn Mitglieder über das IdP-Dashboard zu den Ressourcen der Organisation navigieren, müssen sie auf die neue Kachel der App auf Unternehmensebene und nicht auf die alte Kachel der App auf Organisationsebene klicken. Die Mitglieder können dann die Organisation auswählen, zu der sie navigieren möchten. 

Alle persönlichen Zugriffstoken (PATs), SSH-Schlüssel, {% data variables.product.prodname_oauth_apps %} und {% data variables.product.prodname_github_apps %}, die zuvor für die Organisation autorisiert waren, sind weiterhin für diese autorisiert. Die Mitglieder müssen jedoch alle PATs, SSH-Schlüssel, {% data variables.product.prodname_oauth_apps %} und {% data variables.product.prodname_github_apps %} autorisieren, die nie für die Verwendung mit SAML-SSO für die Organisation autorisiert wurden.

Die Bereitstellung mit SCIM wird derzeit nicht unterstützt, wenn SAML-SSO für ein Unternehmenskonto konfiguriert ist. Wenn du SCIM derzeit für eine Organisation verwendest, die sich im Besitz deines Unternehmenskontos befindet, kannst du diese Funktionalität nicht mehr verwenden, wenn du zu einer Konfiguration auf Unternehmensebene wechselst.

Du musst keine SAML-Konfigurationen auf Organisationsebene entfernen, bevor du SAML-SSO für dein Unternehmenskonto konfigurierst. Dies wird jedoch empfohlen. Wenn SAML in Zukunft für das Unternehmenskonto deaktiviert wird, werden alle verbleibenden SAML-Konfigurationen auf Organisationsebene wirksam. Durch das Entfernen der Konfigurationen auf Organisationsebene können unvorhergesehene Probleme vermieden werden.

## Wechseln deiner SAML-Konfiguration von einer Organisation zu einem Unternehmenskonto

1. Erzwinge SAML-SSO für dein Unternehmenskonto, und stelle sicher, dass alle Organisationsmitglieder der IdP-App, die für das Unternehmenskonto verwendet wird, zugewiesen sind oder Zugriff darauf haben. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).
1. Entferne optional alle vorhandenen SAML-Konfigurationen für Organisationen, die sich im Besitz des Unternehmenskontos befinden. Unter [Informationen zum einmaligen Anmelden mit SAML für Unternehmenskonten](#about-saml-single-sign-on-for-enterprise-accounts) findest du Informationen dazu, ob Konfigurationen entfernt werden sollten oder nicht.
1. Wenn du SAML-Konfigurationen auf Organisationsebene beibehalten hast, solltest du die Kachel der Apps auf Organisationsebene in deinem IdP ausblenden, um Missverständnisse zu vermeiden.
1. Benachrichtige deine Unternehmensmitglieder über die Änderung.
   -  Mitglieder können nicht mehr auf ihre Organisationen zugreifen, indem sie auf die SAML-App der Organisation im IdP-Dashboard klicken. Du musst die neue App verwenden, die für das Unternehmenskonto konfiguriert ist.
   - Mitglieder müssen alle PATs oder SSH-Schlüssel autorisieren, die zuvor nicht für die Verwendung von SAML-SSO für ihre Organisation autorisiert wurden. Weitere Informationen findest du unter [Autorisieren eines persönlichen Zugriffstokens für die Verwendung mit SAML-SSO](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) oder [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML-SSO](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).
   - Mitglieder müssen möglicherweise {% data variables.product.prodname_oauth_apps %} erneut autorisieren, die bereits für die Organisation autorisiert wurden. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit SAML Single Sign-On](/github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on#about-oauth-apps-github-apps-and-saml-sso).
