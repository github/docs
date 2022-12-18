---
title: Informationen zur Authentifizierung mit SAML Single Sign-On
intro: 'Du kannst auf {% ifversion ghae %}{% data variables.location.product_location %}{% elsif ghec %}eine Organisation zugreifen, die SAM Single Sign-On (SSO) verwendet,{% endif %} indem du dich {% ifversion ghae %}mit SAML Single Sign-On (SSO) {% endif %}über einen Identitätsanbieter (IdP) authentifizierst.'
redirect_from:
  - /articles/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/about-authentication-with-saml-single-sign-on
  - /github/authenticating-to-github/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on
versions:
  ghae: '*'
  ghec: '*'
topics:
  - SSO
shortTitle: SAML single sign-on
ms.openlocfilehash: 827db3181f742916ba4fdeefd92f25c196c28188
ms.sourcegitcommit: bf11c3e08cbb5eab6320e0de35b32ade6d863c03
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111513'
---
## Informationen zur Authentifizierung mit SAML-SSO

{% ifversion ghae %}

SAML SSO ermöglicht es einem Unternehmensbesitzer, den Zugriff auf {% data variables.product.product_name %} über einen SAML-IdP zentral zu steuern und zu sichern. Wenn du {% data variables.location.product_location %} in einem Browser aufrufst, leitet {% data variables.product.product_name %} dich an deinen IdP um, um dich zu authentifizieren. Nachdem du dich erfolgreich mit einem Konto beim IdP authentifiziert hast, wirst du von diesem wieder an {% data variables.location.product_location %} geleitet. {% data variables.product.product_name %} überprüft die Antwort deines IdP und gewährt dann Zugriff.

{% data reusables.saml.you-must-periodically-authenticate %}

Wenn du nicht auf {% data variables.product.product_name %} zugreifen kannst, wende dich an deinen lokalen Unternehmensbesitzer oder den Administrator für {% data variables.product.product_name %}. Kontaktinformationen zu deinem Unternehmen findest du gegebenenfalls, indem du unten auf einer beliebigen Seite von {% data variables.product.product_name %} auf **Support** klickst. {% data variables.product.company_short %} und {% data variables.contact.github_support %} haben keinen Zugriff auf deinen IdP und können keine Authentifizierungsprobleme beheben. 

{% endif %}

{% ifversion ghec %}

{% data reusables.saml.dotcom-saml-explanation %} Organisationsbesitzer können dein Benutzerkonto auf {% data variables.product.prodname_dotcom %} einladen, ihrer SAML SSO benutzenden Organisation beizutreten. Das erlaubt dir, Beiträge zur Organisation zu leisten und deine bestehende Identität und Beiträge auf {% data variables.product.prodname_dotcom %} zu behalten.

Wenn du Mitglied eines {% data variables.enterprise.prodname_emu_enterprise %} bist, verwendest du stattdessen ein neues Konto, das für dich bereitgestellt und von deinem Unternehmen gesteuert wird. {% data reusables.enterprise-accounts.emu-more-info-account %}

Wenn du auf Ressourcen innerhalb einer Organisation zugreifst, die SAML SSO verwendet, leitet {% data variables.product.prodname_dotcom %} dich in den meisten Fällen zur Authentifizierung an den SAML-Identitätsanbieter (IdP) der Organisation weiter. Nachdem du dich erfolgreich mit deinem Konto auf dem IdP authentifiziert hast, leitet dich der IdP zurück zu {% data variables.product.prodname_dotcom %}, wo du dann auf die Ressourcen der Organisation zugreifen kannst.

{% data reusables.saml.resources-without-sso %}

{% data reusables.saml.outside-collaborators-exemption %}

Wenn du dich kürzlich mit dem SAML-IdP deiner Organisation in deinem Browser authentifiziert hast, wirst du automatisch autorisiert, wenn du auf eine {% data variables.product.prodname_dotcom %}-Organisation zugreifst, die SAML SSO verwendet. Wenn du dich nicht kürzlich mit dem SAML-IdP deiner Organisation in deinem Browser authentifiziert hast, musst du dich beim SAML-IdP authentifizieren, bevor du auf die Organisation zugreifen kannst.

{% data reusables.saml.you-must-periodically-authenticate %}

## Verknüpfte SAML-Identitäten

Wenn du dich mit deinem IdP-Konto authentifizierst und zu {% data variables.product.prodname_dotcom %} zurückkehrst, zeichnet {% data variables.product.prodname_dotcom %} eine Verknüpfung in der Organisation oder im Unternehmen zwischen deinem persönlichen {% data variables.product.prodname_dotcom %}-Konto und der SAML-Identität, bei der du dich angemeldet hast, auf.  Diese verknüpfte Identität wird verwendet, um deine Mitgliedschaft in der betreffenden Organisation zu überprüfen und (je nach Organisations- oder Unternehmenssetup) zu bestimmen, bei welchen Organisationen und Teams du ebenfalls Mitglied bist. Jedes {% data variables.product.prodname_dotcom %}-Konto kann mit genau einer SAML-Identität pro Organisation verknüpft werden. Ebenso kann jede SAML-Identität mit genau einem {% data variables.product.prodname_dotcom %}-Konto in einer Organisation verknüpft werden. 

Wenn du dich mit einer SAML-Identität anmeldest, die bereits mit einem anderen {% data variables.product.prodname_dotcom %}-Konto verknüpft ist, erhältst du eine Fehlermeldung, die angibt, dass du dich nicht mit dieser SAML-Identität anmelden kannst. Diese Situation kann eintreten, wenn du versuchst, ein neues {% data variables.product.prodname_dotcom %}-Konto zum Arbeiten in deiner Organisation zu verwenden. Wenn du diese SAML-Identität nicht mit dem betreffenden {% data variables.product.prodname_dotcom %}-Konto verwenden möchtest, musst du dich von dieser SAML-Identität abmelden und die SAML-Anmeldung dann wiederholen. Wenn du diese SAML-Identität mit deinem {% data variables.product.prodname_dotcom %}-Konto verwenden möchtest, musst du deine*n Administrator*in bitten, deine SAML-Identität von deinem alten Konto zu trennen, damit du sie mit deinem neuen Konto verknüpfen kannst.  Je nach Setup deiner Organisation oder deines Unternehmens muss dein*e Administrator*in möglicherweise auch deine Identität innerhalb deines SAML-Anbieters neu zuweisen.  Weitere Informationen findest du unter [Anzeigen und Verwalten des SAML-Zugriffs eines Mitglieds auf deine Organisation](/organizations/granting-access-to-your-organization-with-saml-single-sign-on/viewing-and-managing-a-members-saml-access-to-your-organization#viewing-and-revoking-a-linked-identity).

Wenn die SAML-Identität, mit der du dich anmeldest, nicht mit der SAML-Identität übereinstimmt, die derzeit mit deinem {% data variables.product.prodname_dotcom %}-Konto verknüpft ist, erhältst du eine Warnung, dass du im Begriff bist, dein Konto neu zu verknüpfen. Da deine SAML-Identität verwendet wird, um den Zugriff und die Teammitgliedschaft zu steuern, kann das Fortsetzen der neuen SAML-Identität dazu führen, dass du den Zugriff auf Teams und Organisationen innerhalb von {% data variables.product.prodname_dotcom %} verlierst. Fahre nur fort, wenn du weißt, dass du in Zukunft diese neue SAML-Identität für die Authentifizierung verwenden sollst. 

## Autorisieren von {% data variables.product.pat_generic %} und SSH-Schlüsseln mit SAML SSO

Um die API oder Git in der Befehlszeile für den Zugriff auf geschützte Inhalte in einer Organisation mit SAML SSO zu verwenden, musst du ein autorisiertes {% data variables.product.pat_generic %} über HTTPS oder einen autorisierten SSH-Schlüssel verwenden.

Wenn du kein {% data variables.product.pat_generic %} oder keinen SSH-Schlüssel hast, kannst du ein {% data variables.product.pat_generic %} für die Befehlszeile erstellen oder einen neuen SSH-Schlüssel generieren. Weitere Informationen findest du unter [Erstellen eines {% data variables.product.pat_generic %}](/github/authenticating-to-github/creating-a-personal-access-token) oder [Generieren und Hinzufügen eines neuen SSH-Schlüssels zu ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Um ein neues oder vorhandenes {% data variables.product.pat_generic %} oder einen SSH-Schlüssel in einer Organisation zu verwenden, die SAML SSO verwendet oder erzwingt, musst du das Token autorisieren oder den SSH-Schlüssel für die Verwendung bei einer SAML SSO-Organisation autorisieren. Weitere Informationen findest du unter [Autorisieren eines {% data variables.product.pat_generic %} für die Verwendung mit SAML Single Sign-On](/articles/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on) oder [Autorisieren eines SSH-Schlüssels für die Verwendung mit SAML Single Sign-On](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on).

## Informationen zu {% data variables.product.prodname_oauth_apps %}, {% data variables.product.prodname_github_apps %} und SAML SSO

Du musst jedes Mal eine aktive SAML-Sitzung haben, wenn du eine {% data variables.product.prodname_oauth_app %} oder {% data variables.product.prodname_github_app %} autorisierst, um auf eine Organisation zuzugreifen, die SAML SSO verwendet oder erzwingt. Du kannst eine aktive SAML-Sitzung erstellen, indem du in deinem Browser zu `https://github.com/orgs/ORGANIZATION-NAME/sso` navigierst.

Nachdem ein Unternehmens- oder Organisationsbesitzer SAML-SSO für eine Organisation aktiviert oder erzwingt und du dich erstmals über SAML authentifiziert hast, musst du alle {% data variables.product.prodname_oauth_apps %} oder {% data variables.product.prodname_github_apps %}, die du zuvor für den Zugriff auf die Organisation autorisiert hast, erneut autorisieren. 

Um die {% data variables.product.prodname_oauth_apps %} anzuzeigen, die du autorisiert hast, besuche deine [{% data variables.product.prodname_oauth_apps %}-Seite](https://github.com/settings/applications). Um die {% data variables.product.prodname_github_apps %} anzuzeigen, die du autorisiert hast, besuche deine [{% data variables.product.prodname_github_apps %}-Seite](https://github.com/settings/apps/authorizations).

{% endif %}

## Weiterführende Themen

{% ifversion ghec %}- „[Informationen zum Identitäts- und Zugriffsmanagement mit SAML Single Sign-On](/organizations/managing-saml-single-sign-on-for-your-organization/about-identity-and-access-management-with-saml-single-sign-on)“{% endif %} {% ifversion ghae %}- „[Informationen zur Identitäts- und Zugriffsverwaltung für dein Unternehmen](/admin/authentication/about-identity-and-access-management-for-your-enterprise)“{% endif %}
