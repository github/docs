---
title: Organisation umbenennen
intro: 'Wenn sich der Name deines Projekts oder deines Unternehmens geändert hat, kannst du den Namen deiner Organisation entsprechend anpassen.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 088094a03e2416b4da0e3011978ab5e9edd316b2
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106220'
---
{% tip %}

**Tipp**: Nur Organisationsbesitzer können eine Organisation umbenennen. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

## Was geschieht, wenn ich den Namen meiner Organisation ändere?

Nach der Änderung Deines Organisationsnamens wird Dein alter Organisationsname frei, und jemand anders kann diesen Namen für sich beanspruchen. Die meisten Referenzen auf Deine Repositorys unter dem alten Organisationsnamen werden nach einer Änderung Deines Organisationsnamens automatisch dem neuen Namen angepasst. Einige Links auf Dein Profil werden jedoch nicht automatisch weitergeleitet.

### Automatische Änderungen

- {% data variables.product.prodname_dotcom %} leitet Referenzen auf Ihre Repositorys automatisch weiter.  Weblinks zu vorhandenen **Repositorys** deiner Organisation funktionieren weiterhin. Allerdings kann diese Anpassung nach der Veranlassung der Änderung einige Minuten dauern.
- Du kannst Deine lokalen Repositorys weiterhin mittels Push auf die bisherige Remote-Tracking-URL übertragen, ohne diese zu aktualisieren. Jedoch wird nach einer Änderung des Organisationsnamens die Aktualiserung der URLs aller vorhandenen Remote-Repositorys empfohlen. Schließlich kann Dein alter Organisationsname nach dessen Änderung von jemand anderem verwendet werden, und es ist durchaus möglich, dass Repositorys einer neuen Organisation mit gleichem Namen die Weiterleitungseinträge für Deine Repositorys überschreiben. Weitere Informationen findest du unter [Verwalten von Remoterepositorys](/github/getting-started-with-github/managing-remote-repositories).
- Bisherige Git-Commits werden den Benutzern Deiner Organisation korrekt zugeordnet.

### Änderungen, die nicht automatisch erfolgen

Nach der Änderung Deines Organisationsnamens können folgende Probleme auftreten:
- Links zu deiner vorherigen Organisationsprofilseite, z. B. `https://{% data variables.command_line.backticks %}/previousorgname`, geben einen 404-Fehler zurück. Es empfiehlt sich, Links zu deiner Organisation von anderen Websites{% ifversion fpt or ghec %}, wie z. B. deinen Profilen in LinkedIn oder Twitter,{% endif %} zu aktualisieren.
- API-Anforderungen mit dem alten Organisationsnamen geben einen 404-Fehler zurück. Wir empfehlen Dir die Aktualisierung Deines alten Organisationsnamens in Deinen API-Anforderungen.
- Es gibt keine automatischen [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)-Weiterleitungen für Teams, die den alten Namen der Organisation verwenden.{% ifversion ghec %}
- Wenn SAML-SSO (Single Sign-On) für die Organisation aktiviert ist, musst du den Organisationsnamen in der Anwendung für {% data variables.product.prodname_ghe_cloud %} bei deinem Identitätsanbieter (Identity Provider, IdP) aktualisieren. Wenn du den Organisationsnamen bei deinem IdP nicht aktualisierst, können Mitglieder der Organisation sich nicht mehr bei deinem IDP authentifizieren, um auf die Ressourcen der Organisation zuzugreifen. Weitere Informationen findest du unter [Verbinden deines Identitätsanbieters mit deiner Organisation](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization).{% endif %}

## Namen Deiner Organisation ändern

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %}
4. Klicke im unteren Bereich der Einstellungsseite unter „Organisation umbenennen“ auf **Organisation umbenennen**.
  ![Schaltfläche „Organisation umbenennen“](/assets/images/help/settings/settings-rename-organization.png)

## Weiterführende Themen

* [Warum sind meine Commits mit dem falschen Benutzer verknüpft?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)
