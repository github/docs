---
title: Informationen zur Identitäts- und Zugriffsverwaltung mit SAML-SSO
intro: 'Wenn du die Identitäten und Anwendungen von Benutzer*innen zentral mit einem Identitätsanbieter (IdP) verwaltest, kannst du einmalige SAML-Anmeldung (Security Assertion Markup Language) konfigurieren, um die Ressourcen deiner Organisation in {% data variables.product.prodname_dotcom %} zu schützen.'
redirect_from:
  - /articles/about-identity-and-access-management-with-saml-single-sign-on
  - /github/setting-up-and-managing-organizations-and-teams/about-identity-and-access-management-with-saml-single-sign-on
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: IAM with SAML SSO
ms.openlocfilehash: 63ed023c1ca5d52ea7b06f5fd485c5e0b34c9750
ms.sourcegitcommit: 6b649e03ca2fef38c9ebbeec92102219849380e2
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/31/2022
ms.locfileid: '148120617'
---
{% data reusables.saml.ghec-only %}

## Informationen zu SAML SSO

{% data reusables.saml.dotcom-saml-explanation %}

{% data reusables.saml.saml-accounts %}

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Organisationsbesitzer können SAML-SSO für eine einzelne Organisation erzwingen, oder Unternehmensbesitzer können SAML-SSO für alle Organisationen in einem Unternehmenskonto erzwingen. Weitere Informationen findest du unter [Konfigurieren des einmaligen Anmeldens mit SAML für Unternehmen](/enterprise-cloud@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/configuring-saml-single-sign-on-for-your-enterprise).

Bevor Du SAML SSO für Deine Organisation aktivierst, musst Du Deinen IdP mit Deiner Organisation verbinden. Weitere Informationen findest du unter [Verbinden deines Identitätsanbieters mit deiner Organisation](/organizations/managing-saml-single-sign-on-for-your-organization/connecting-your-identity-provider-to-your-organization).

SAML SSO kann in einer Organisation entweder deaktiviert, aktiviert aber nicht erzwungen, oder aktiviert und erzwungen sein. Nachdem Du SAML SSO für Deine Organisation aktiviert hast und die Mitglieder Deiner Organisation sich erfolgreich mit Deinem IdP authentifizieren können, kannst Du die SAML SSO Konfiguration erzwingen. Weitere Informationen zum Erzwingen von SAML-SSO für deine {% data variables.product.prodname_dotcom %}-Organisation findest du unter [Erzwingen von SAML-SSO für deine Organisation](/articles/enforcing-saml-single-sign-on-for-your-organization).

Mitglieder müssen sich regelmäßig bei Deinem IdP anmelden, um sich zu authentifizieren und Zugang zu den Ressourcen Deiner Organisation zu erhalten. Die Dauer dieser Anmeldephase wird von Deinem IdP festgelegt und beträgt in der Regel 24 Stunden. Durch diese Verpflichtung zur regelmäßigen Anmeldung wird die Dauer des Zugriffs begrenzt, und die Benutzer müssen sich erneut identifizieren, um fortzufahren.

Um auf die geschützten Ressourcen der Organisation über das API und Git in der Befehlszeile zuzugreifen, müssen Mitglieder sich mit einem {% data variables.product.pat_generic %} oder SSH-Schlüssel autorisieren und authentifizieren. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) und [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/github/authenticating-to-github/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

Wenn ein Mitglied zum ersten Mal SAML SSO für den Zugriff auf deine Organisation verwendet, erstellt {% data variables.product.prodname_dotcom %} automatisch einen Datensatz, der deine Organisation, das Konto des Mitglieds bei {% data variables.location.product_location %} und das Konto des Mitglieds bei deinem Identitätsanbieter miteinander verknüpft. Du kannst die verknüpfte SAML-Identität, aktive Sitzungen und autorisierte Anmeldeinformationen für Mitglieder Deiner Organisation oder Deines Enterprise-Kontos anzeigen und widerrufen. Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization) und [Anzeigen und Verwalten des SAML-Zugriffs eines Benutzers auf dein Unternehmenskonto](/enterprise-cloud@latest/admin/user-management/managing-users-in-your-enterprise/viewing-and-managing-a-users-saml-access-to-your-enterprise).

Wenn Mitglieder ein neues Repository erstellen, während sie bei einer SAML-SSO-Sitzung angemeldet sind, ist die standardmäßige Sichtbarkeit dieses Repositorys privat. Andernfalls ist die Standardsichtbarkeit öffentlich. Weitere Informationen zur Sichtbarkeit von Repositorys findest du unter [Informationen zu Repository](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).

Organisationsmitglieder müssen auch eine aktive SAML-Sitzung haben, um eine {% data variables.product.prodname_oauth_app %} zu autorisieren. Du kannst Dich von dieser Anforderung abmelden, indem Du {% data variables.contact.contact_support %} kontaktierst. {% data variables.product.product_name %} empfiehlt nicht, sich von dieser Anforderung abzumelden, weil dies Deine Organisation einem höheren Risiko von Kontoübernahmen und potenziellen Datenverlust aussetzt.

{% data reusables.saml.saml-single-logout-not-supported %}

## Unterstützte SAML-Dienste

{% data reusables.saml.saml-supported-idps %}

Einige Identitätsanbieter unterstützen die Bereitstellung des Zugriffs auf eine {% data variables.product.prodname_dotcom %}-Organisation über SCIM. Weitere Informationen findest du unter [Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.scim.enterprise-account-scim %} 

## Mitglieder zu einer Organisation mit SAML SSO hinzufügen

Nachdem du SAML-SSO aktiviert hast, gibt es mehrere Möglichkeiten, deiner Organisation neue Mitglieder hinzuzufügen. Organisationsinhaber können neue Mitglieder manuell auf {% data variables.product.product_name %} oder über das API einladen. Weitere Informationen findest du unter [Einladen von Benutzern zum Beitritt zu deiner Organisation](/articles/inviting-users-to-join-your-organization) und [Mitglieder](/rest/reference/orgs#add-or-update-organization-membership).

Wenn du neue Benutzer ohne Einladung eines Organisationsbesitzers bereitstellen möchtest, kannst du die URL `https://github.com/orgs/ORGANIZATION/sso/sign_up` verwenden und dabei _ORGANIZATION_ durch den Namen deiner Organisation ersetzen. Du kannst beispielsweise Deinen IdP so konfigurieren, dass jeder, der Zugriff auf den IdP hat, auf einen Link im Dashboard des IdP klicken kann, um Deiner {% data variables.product.prodname_dotcom %}-Organisation beizutreten.

{% note %}

**Hinweis:** Die Bereitstellung neuer Benutzer über `https://github.com/orgs/ORGANIZATION/sso/sign_up` wird nur unterstützt, wenn SAML SSO auf Organisationsebene konfiguriert ist. Sie wird nicht unterstützt, wenn SAML SSO auf Unternehmenskontoebene konfiguriert ist. Weitere Informationen zu SAML SSO findest du unter [Informationen zu SAML for Enterprise IAM](/admin/identity-and-access-management/using-saml-for-enterprise-iam/about-saml-for-enterprise-iam).

{% endnote %}

Wenn Dein IdP SCIM unterstützt, kann {% data variables.product.prodname_dotcom %} automatisch Mitglieder einladen, Deiner Organisation beizutreten, wenn Du den Zugriff auf Deine IdP erlaubst. Wenn Du den Zugriff eines Mitglieds auf Deine {% data variables.product.prodname_dotcom %}-Organisation auf Deinem SAML IdP entfernst, wird das Mitglied automatisch aus der {% data variables.product.prodname_dotcom %}-Organisation entfernt. Weitere Informationen findest du unter [Informationen zu SCIM für Organisationen](/organizations/managing-saml-single-sign-on-for-your-organization/about-scim-for-organizations).

{% data reusables.organizations.team-synchronization %}

{% data reusables.saml.saml-single-logout-not-supported %}

## Weiterführende Themen

- [Referenz zur SAML-Konfiguration](/admin/identity-and-access-management/using-saml-for-enterprise-iam/saml-configuration-reference)
- [Informationen zur zweistufigen Authentifizierung und zu SAML-SSO](/articles/about-two-factor-authentication-and-saml-single-sign-on)
- [Informationen zur Authentifizierung mit SAML-SSO](/github/authenticating-to-github/about-authentication-with-saml-single-sign-on)
