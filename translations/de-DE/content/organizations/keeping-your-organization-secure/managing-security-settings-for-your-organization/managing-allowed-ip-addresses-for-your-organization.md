---
title: Verwaltung erlaubter IP-Adressen für deine Organisation
intro: 'Du kannst den Zugriff auf die privaten Ressourcen deiner Organisation einschränken, indem du eine Liste von IP-Adressen konfigurierst, die zu einer Verbindung berechtigt sind.'
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-allowed-ip-addresses-for-your-organization
versions:
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage allowed IP addresses
permissions: Organization owners can manage allowed IP addresses for an organization.
ms.openlocfilehash: f0484aae26b5acb8bac07c7b002af2d623d7dfef
ms.sourcegitcommit: 7a74d5796695bb21c30e4031679253cbc16ceaea
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/28/2022
ms.locfileid: '148184028'
---
## Informationen zu zulässigen IP-Adressen

Du kannst den Zugriff auf private Organisationsobjekte beschränken, indem du eine Zulassungsliste für bestimmte IP-Adressen konfigurierst. {% data reusables.identity-and-permissions.ip-allow-lists-example-and-restrictions %}

{% ifversion ghec %} {% note %}

**Hinweis:** Nur Organisationen, die {% data variables.product.prodname_ghe_cloud %} verwenden, können Zulassungslisten für IP-Adressen verwenden. {% data reusables.enterprise.link-to-ghec-trial %}

{% endnote %} {% endif %}

{% data reusables.identity-and-permissions.ip-allow-lists-cidr-notation %}

{% data reusables.identity-and-permissions.ip-allow-lists-enable %}

Wenn du eine Zulassungsliste einrichtest, kannst du auch festlegen, dass alle IP-Adressen, die für {% data variables.product.prodname_github_apps %} konfiguriert sind und die du in deiner Organisation installierst, automatisch zu deiner Zulassungsliste hinzugefügt werden. Die Person, die eine {% data variables.product.prodname_github_app %} erstellt, kann eine Zulassungsliste für ihre Anwendung mit den IP-Adressen konfigurieren, an denen die Anwendung ausgeführt wird. Indem du deine Zulassungsliste so konfigurierst, dass sie von dieser Zulassungsliste erbt, vermeidest du, dass Verbindungsanforderungen von der Anwendung abgelehnt werden. Weitere Informationen findest du unter [Zulassen des Zugriffs auf {% data variables.product.prodname_github_apps %}](#allowing-access-by-github-apps).

Du kannst auch zulässige IP-Adressen auf Unternehmenskontoebene konfigurieren, und alle Organisationen im Besitz des Unternehmens erben die Einträge in der Zulassungsliste des Unternehmenskontos. {% data reusables.identity-and-permissions.org-enterprise-allow-list-interaction %} Weitere Informationen findest du unter [Erzwingen von Richtlinien für Sicherheitseinstellungen in deinem Unternehmen](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-security-settings-in-your-enterprise#managing-allowed-ip-addresses-for-organizations-in-your-enterprise).

## Eine zugelassene IP-Adresse hinzufügen

{% data reusables.identity-and-permissions.about-adding-ip-allow-list-entries %}

{% data reusables.identity-and-permissions.ipv6-allow-lists %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-add-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-add-description %} {% data reusables.identity-and-permissions.ip-allow-lists-add-entry %} {% data reusables.identity-and-permissions.check-ip-address %}

## Zugelassene IP-Adressen aktivieren

{% data reusables.identity-and-permissions.about-enabling-allowed-ip-addresses %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Wähle unter „Liste zugelassener IP-Adressen“ die Option **Liste zugelassener IP-Adressen aktivieren** aus.
  ![Kontrollkästchen zum Zulassen von IP-Adressen](/assets/images/help/security/enable-ip-allowlist-organization-checkbox.png)
1. Klicke auf **Speichern**.

## Zulassen des Zugriffs durch {% data variables.product.prodname_github_apps %}

Wenn du eine Zulassungsliste verwendest, kannst du auch festlegen, dass alle IP-Adressen, die für {% data variables.product.prodname_github_apps %} konfiguriert sind und die du in deiner Organisation installierst, automatisch zu deiner Zulassungsliste hinzugefügt werden. 

{% data reusables.identity-and-permissions.ip-allow-lists-address-inheritance %}

{% data reusables.apps.ip-allow-list-only-apps %}

Weitere Informationen zum Erstellen einer Zulassungsliste für eine {% data variables.product.prodname_github_app %}, die du erstellt hast, findest du unter [Verwalten zugelassener IP-Adressen für eine GitHub-App](/developers/apps/building-github-apps/managing-allowed-ip-addresses-for-a-github-app).

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
1. Wähle unter „Liste zugelassener IP-Adressen“ die Option **Konfiguration der Liste zugelassener IP-Adressen für installierte GitHub-Apps aktivieren** aus.
  ![Kontrollkästchen zum Zulassen von IP-Adressen für GitHub-Apps](/assets/images/help/security/enable-ip-allowlist-githubapps-checkbox.png)
1. Klicke auf **Speichern**.

## Eine zugelassene IP-Adresse bearbeiten

{% data reusables.identity-and-permissions.about-editing-ip-allow-list-entries %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-ip %} {% data reusables.identity-and-permissions.ip-allow-lists-edit-description %}
1. Klicke auf **Aktualisieren**.
{% data reusables.identity-and-permissions.check-ip-address %}

## Überprüfen der Zulässigkeit einer IP-Adresse

{% data reusables.identity-and-permissions.about-checking-ip-address %}

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.check-ip-address-step %}

## Eine zugelassene IP-Adresse löschen

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %} {% data reusables.identity-and-permissions.ip-allow-lists-delete-entry %} {% data reusables.identity-and-permissions.ip-allow-lists-confirm-deletion %}

## {% data variables.product.prodname_actions %} mit einer IP-Zulassungsliste verwenden

{% data reusables.actions.ip-allow-list-self-hosted-runners %}
