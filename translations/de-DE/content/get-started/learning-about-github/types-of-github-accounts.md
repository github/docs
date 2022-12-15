---
title: Arten von GitHub-Konten
intro: 'Konten für {% data variables.product.product_name %} ermöglichen dir, den Zugriff auf Code zu organisieren und zu steuern.'
redirect_from:
  - /manage-multiple-clients
  - /managing-clients
  - /articles/what-s-the-difference-between-user-and-organization-accounts
  - /articles/differences-between-user-and-organization-accounts
  - /articles/types-of-github-accounts
  - /github/getting-started-with-github/types-of-github-accounts
  - /github/getting-started-with-github/learning-about-github/types-of-github-accounts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
  - CLI
  - Mobile
  - Desktop
  - Security
ms.openlocfilehash: 9316fcb8b069b0b596c89d10ac1f89d86f1a62b7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145131181'
---
## Informationen zu Konten auf {% data variables.product.product_name %}

Mit {% data variables.product.product_name %} kannst du Code speichern und gemeinsam daran arbeiten. Mit Konten kannst du den Zugriff auf diesen Code organisieren und steuern. Es gibt drei Arten von Konten auf {% data variables.product.product_name %}.
- Persönliche Konten
- Organisationskonten
- Unternehmenskonten

Jede Person, die {% data variables.product.product_name %} nutzt, meldet sich bei einem persönlichen Konto an. Ein Organisationskonto erleichtert die Zusammenarbeit zwischen mehreren persönlichen Konten, und {% ifversion fpt or ghec %}ein Unternehmenskonto{% else %} (das Unternehmenskonto für {% data variables.product.product_location %}){% endif %} ermöglicht die zentrale Verwaltung mehrerer Organisationen.

## Persönliche Konten

Jede Person, die {% data variables.product.product_location %} nutzt, meldet sich bei einem persönlichen Konto an. Dein persönliches Konto stellt deine Identität auf {% data variables.product.product_location %} dar und weist einen Benutzernamen und ein Profil auf. Sieh dir beispielsweise das [Profil von @octocat](https://github.com/octocat) an.

Dein persönliches Konto kann Ressourcen wie Repositorys, Pakete und Projekte besitzen. Jedes Mal, wenn du eine Aktion auf {% data variables.product.product_location %} durchführst (z. B. das Erstellen eines Issues oder das Überprüfen eines Pull Requests), wird die Aktion deinem persönlichen Konto zugeordnet.

{% ifversion fpt or ghec %}Für jedes persönliche Konto wird entweder {% data variables.product.prodname_free_user %} oder {% data variables.product.prodname_pro %} verwendet. Alle persönlichen Konten können eine unbegrenzte Anzahl öffentlicher und privater Repositorys besitzen, wobei unbegrenzt viele Projektmitarbeiter*innen an diesen Repositorys teilhaben können. Wenn du {% data variables.product.prodname_free_user %} verwendest, stehen privaten Repositorys im Besitz deines persönlichen Kontos eingeschränkte Features zur Verfügung. Du kannst auf {% data variables.product.prodname_pro %} upgraden, um Zugriff auf alle Features für private Repositorys zu erhalten. Weitere Informationen findest du unter [{% data variables.product.prodname_dotcom %}-Produkte](/articles/githubs-products). {% else %}Du kannst eine unbegrenzte Anzahl von Repositorys erstellen, die deinem persönlichen Konto gehören, wobei unbegrenzt viele Projektmitarbeiter*innen an diesen Repositorys teilhaben können.{% endif %}

{% tip %}

**Tipp**: Persönliche Konten sind für Menschen vorgesehen. Du kannst jedoch Konten erstellen, um Aktivitäten auf {% data variables.product.product_name %} zu automatisieren. Diese Art von Konto wird als Computerbenutzer bezeichnet. Beispielsweise kannst du ein Computerbenutzerkonto erstellen, um CI-Workflows (Continuous Integration) zu automatisieren.

{% endtip %}

{% ifversion fpt or ghec %} Die meisten Menschen verwenden ein persönliches Konto für ihre gesamte Arbeit auf {% data variables.product.prodname_dotcom_the_website %} (sowohl für Open-Source-Projekte als auch bezahlte Tätigkeiten). Wenn du derzeit mehr als ein persönliches Konto verwendest, das du für dich selbst eingerichtet hast, wird empfohlen, die Konten zusammenzuführen. Weitere Informationen findest du unter [Zusammenführen mehrerer persönlicher Konten](/articles/merging-multiple-user-accounts).
{% endif %}

## Organisationskonten

Organisation sind geteilte Konten, in denen eine unbegrenzte Anzahl von Personen gleichzeitig in vielen Projekten zusammenarbeiten kann. 

Wie persönliche Konten können Organisationen Ressourcen wie Repositorys, Pakete und Projekte besitzen. Du kannst sich jedoch nicht bei einer Organisation anmelden. Stattdessen meldet sich jede Person bei ihrem eigenen persönlichen Konto an, und alle Aktionen, die sie an den Ressourcen der Organisation durchführt, werden ihrem persönlichen Konto zugerechnet. Jedes persönliche Konto kann Mitglied in mehreren Organisationen sein.

Den persönlichen Konten in einer Organisation können unterschiedliche Rollen zugewiesen werden, die unterschiedliche Zugriffsstufen auf die Organisation und ihre Daten gewähren. Alle Mitglieder können in Repositorys und Projekten zusammenarbeiten, aber nur Organisationsbesitzer*innen und Sicherheitsmanager*innen können die Einstellungen der Organisation verwalten und den Zugriff auf die Daten der Organisation mit anspruchsvollen Sicherheits- und Verwaltungsfeatures steuern. Weitere Informationen findest du unter [Rollen in einer Organisation](/organizations/managing-peoples-access-to-your-organization-with-roles/roles-in-an-organization) und [Schützen der Organisation](/organizations/keeping-your-organization-secure).

![Diagramm: Benutzer müssen sich bei ihren persönlichen Konten anmelden, um auf Ressourcen einer Organisation zugreifen zu können.](/assets/images/help/overview/sign-in-pattern.png)

{% ifversion fpt or ghec %} Selbst wenn du Mitglied einer Organisation bist, die das einmalige Anmelden mit SAML verwendet, musst du dich bei deinem persönlichen Konto auf {% data variables.product.prodname_dotcom_the_website %} anmelden. Dieses persönliche Konto wird mit deiner Identität im Identitätsanbieter (IdP) der Organisation verknüpft. Weitere Informationen findest du unter [Informationen zur Authentifizierung mit dem einmaligen Anmelden mit SAML](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/about-authentication-with-saml-single-sign-on){% ifversion fpt %} in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}{% else %}.{% endif %}

Wenn du jedoch Mitglied eines Unternehmens bist, das {% data variables.product.prodname_emus %} anstelle des von dir erstellten persönlichen Kontos nutzt, wird dir vom IdP des Unternehmens ein neues Konto zur Verfügung gestellt. Du musst sich bei dem IdP und nicht mit einem Benutzernamen und Kennwort für {% data variables.product.prodname_dotcom_the_website %} authentifizieren, um auf Organisationen im Besitz dieses Unternehmens zuzugreifen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users){% ifversion fpt %} in der {% data variables.product.prodname_ghe_cloud %}-Dokumentation.{% else %}.{% endif %} {% endif %}

Du kannst auch geschachtelte Untergruppen aus Organisationsmitgliedern erstellen (sogenannte Teams), um die Struktur deiner Gruppe darzustellen und die Zugriffsverwaltung zu vereinfachen. Weitere Informationen findest du unter [Informationen zu Teams](/organizations/organizing-members-into-teams/about-teams).

{% data reusables.organizations.organization-plans %}

Weitere Informationen zu den Features von Organisationen findest du unter [Informationen zu Organisationen](/organizations/collaborating-with-groups-in-organizations/about-organizations).

## Unternehmenskonten

{% ifversion fpt %} {% data variables.product.prodname_ghe_cloud %} und {% data variables.product.prodname_ghe_server %} beinhalten Unternehmenskonten, mit denen Administrator*innen Richtlinien und Abrechnungen für mehrere Organisationen zentral verwalten und das Innersourcing zwischen den Organisationen ermöglichen können. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/enterprise-cloud@latest/admin/overview/about-enterprise-accounts) in der Dokumentation zu {% data variables.product.prodname_ghe_cloud %}.
{% elsif ghec %} Mit Unternehmenskonten kannst du Richtlinien und Abrechnungen für mehrere Organisationen zentral verwalten. Du kannst dein Unternehmenskonto verwenden, um Richtlinien und Abrechnungen zentral zu verwalten. Im Gegensatz zu Organisationen können Unternehmenskonten Ressourcen wie Repositorys, Pakete oder Projekte nicht direkt besitzen. Diese Ressourcen befinden sich stattdessen im Besitz von Organisationen im Unternehmenskonto. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).
{% elsif ghes or ghae %} Dein Unternehmenskonto ist eine Sammlung aller Organisation {% ifversion ghae %}im Besitz von{% elsif ghes %}auf{% endif %} {% data variables.product.product_location %}. Du kannst dein Unternehmenskonto verwenden, um Richtlinien und Abrechnungen zentral zu verwalten. Im Gegensatz zu Organisationen können Unternehmenskonten Ressourcen wie Repositorys, Pakete oder Projekte nicht direkt besitzen. Diese Ressourcen befinden sich stattdessen im Besitz von Organisationen im Unternehmenskonto. Weitere Informationen findest du unter [Informationen zu Unternehmenskonten](/admin/overview/about-enterprise-accounts).
{% endif %}

## Weitere Informationsquellen

{% ifversion fpt or ghec %}
- [Registrieren eines neuen {% data variables.product.prodname_dotcom %}-Kontos](/articles/signing-up-for-a-new-github-account){% endif %}
- [Erstellen eines neuen Organisationskontos](/articles/creating-a-new-organization-account)
- Das Video [Organisieren von Personen für erfolgreiches Zusammenarbeiten](https://vimeo.com/333786093) in den {% data variables.product.company_short %}-Ressourcen
