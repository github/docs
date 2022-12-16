---
title: Anzeigen deiner Nutzung von GitHub Advanced Security
intro: 'Du kannst die Verwendung von {% data variables.product.prodname_GH_advanced_security %} in deinem Unternehmen einsehen.'
permissions: 'Enterprise owners can view usage for {% data variables.product.prodname_GH_advanced_security %}.'
product: '{% data reusables.gated-features.ghas %}'
redirect_from:
  - /billing/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /admin/advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-licensing-for-github-advanced-security/viewing-your-github-advanced-security-usage
  - /github/setting-up-and-managing-your-enterprise/managing-use-of-advanced-security-for-organizations-in-your-enterprise-account
  - /github/setting-up-and-managing-billing-and-payments-on-github/viewing-your-github-advanced-security-usage
versions:
  ghes: '*'
  ghec: '*'
miniTocMaxHeadingLevel: 3
type: how_to
topics:
  - Advanced Security
  - Enterprise
shortTitle: View Advanced Security usage
ms.openlocfilehash: 8647ba2eb00f580256bd3f49ac2218331e45eef3
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '146180487'
---
## Informationen zu Lizenzen für {% data variables.product.prodname_GH_advanced_security %}

{% data reusables.advanced-security.about-ghas-license-seats %} Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security).

{% ifversion ghas-committers-calculator %} Du kannst berechnen, wie viele zusätzliche Arbeitsplätze verwendet werden, wenn du {% data variables.product.prodname_GH_advanced_security %} für weitere Organisationen und Repositorys über das Websiteadministrator-Dashboard aktivierst. Weitere Informationen findest du unter [Websiteadministrator-Dashboard](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#advanced-security-active-committers).
{% endif %}

## Anzeigen der {% data variables.product.prodname_GH_advanced_security %}-Lizenznutzung für dein Unternehmenskonto

Du kannst überprüfen, wie viele Arbeitsplätze deine Lizenz enthält, und wie viele von ihnen derzeit verwendet werden.

{% ifversion fpt or ghec %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} Der Abschnitt „{% data variables.product.prodname_GH_advanced_security %}“ zeigt Details zur aktuellen Nutzung an.
  ![{% data variables.product.prodname_GH_advanced_security %} in den Einstellungen für die Unternehmenslizenzierung](/assets/images/help/enterprises/enterprise-licensing-tab-ghas.png): Wenn die Anzahl der Arbeitsplätze erschöpft ist, wird der Abschnitt rot und zeigt „Limit überschritten“ an. Du solltest entweder die Verwendung von {% data variables.product.prodname_GH_advanced_security %} reduzieren oder mehr Arbeitsplätze kaufen. Weitere Informationen findest du unter [Informationen zur Abrechnung für {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security#getting-the-most-out-of-github-advanced-security).
  ![{% data variables.product.prodname_GH_advanced_security %} zeigt in den Einstellungen für Unternehmenslizenzierung „Limit überschritten“ an.](/assets/images/help/enterprises/enterprise-licensing-tab-ghas-no-seats.png)
4. Um optional eine detaillierte Aufschlüsselung der Nutzung pro Organisation anzuzeigen, klicke auf der linken Randleiste auf **Abrechnung**.
  ![Registerkarte „Abrechnung“ in der Unternehmenskontoeinstellungen-Randleiste](/assets/images/help/business-accounts/settings-billing-tab.png): Im Abschnitt „{% data variables.product.prodname_GH_advanced_security %}“ wird die Anzahl der Committer und eindeutigen Committer für jede Organisation angezeigt.
  ![{% data variables.product.prodname_GH_advanced_security %} in Unternehmensabrechnungseinstellungen](/assets/images/help/billing/ghas-orgs-list-enterprise-dotcom.png)
5. Klicke optional auf den Namen einer Organisation, in der du Besitzer bist, um die Sicherheits- und Analyseeinstellungen für die Organisation anzuzeigen.
  ![Im Besitz befindliche Organisation im {% data variables.product.prodname_GH_advanced_security %}-Abschnitt der Unternehmensabrechnungseinstellungen](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Scrolle auf der Seite „Sicherheit und Analyse“ zum Abschnitt „{% data variables.product.prodname_GH_advanced_security %}-Repositorys“, um eine detaillierte Aufschlüsselung der Verwendung nach Repository für diese Organisation anzuzeigen.
  ![Abschnitt „{% data variables.product.prodname_GH_advanced_security %}-Repositorys“](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Unternehmen](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% elsif ghes %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %} Der Abschnitt „{% data variables.product.prodname_GH_advanced_security %}“ zeigt Details zur aktuellen Nutzung an. Du kannst die Gesamtzahl der verwendeten Arbeitsplätze sowie eine Tabelle mit der Anzahl der Committer und eindeutigen Committer für jede Organisation anzeigen.
  ![{% data variables.product.prodname_GH_advanced_security %}-Abschnitt der Enterprise-Lizenz](/assets/images/help/billing/ghas-orgs-list-enterprise-ghes.png)
5. Klicke optional auf den Namen einer Organisation, in der du Besitzer bist, um die Sicherheits- und Analyseeinstellungen für die Organisation anzuzeigen.
  ![Im Besitz befindliche Organisation im {% data variables.product.prodname_GH_advanced_security %}-Abschnitt der Unternehmensabrechnungseinstellungen](/assets/images/help/billing/ghas-orgs-list-enterprise-click-org.png)
6. Scrolle auf der Seite „Sicherheit und Analyse“ zum Abschnitt „{% data variables.product.prodname_GH_advanced_security %}-Repositorys“, um eine detaillierte Aufschlüsselung der Verwendung nach Repository für diese Organisation anzuzeigen.
  ![Abschnitt „{% data variables.product.prodname_GH_advanced_security %}-Repositorys“](/assets/images/help/enterprises/settings-security-analysis-ghas-repos-list.png) Weitere Informationen findest du unter [Verwalten von Sicherheits- und Analyseeinstellungen für dein Unternehmen](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).

{% endif %}

{% ifversion ghec or ghes > 3.3 or ghae-issue-5378 %}

## Herunterladen der {% data variables.product.prodname_GH_advanced_security %}-Lizenznutzungsinformationen

Du kannst eine CSV-Datei mit {% data variables.product.prodname_GH_advanced_security %}-Lizenznutzungsinformationen auf Unternehmens- und Organisationsebene herunterladen. Die CSV-Datei enthält Informationen zu den einzelnen verwendeten {% data variables.product.prodname_advanced_security %}-Arbeitsplätzen, einschließlich:

- Der Benutzername der Person, die den Arbeitsplatz belegt
- Die Repositorys mit {% data variables.product.prodname_advanced_security %}-Unterstützung, in denen Commits vorgenommen wurden
- Die Organisationen, der Personen angehören, die Arbeitsplätze belegen
- Die letzten Commitdatumsangaben

Du kannst diese Informationen nutzen, um Einblicke in die Nutzung deiner {% data variables.product.prodname_advanced_security %}-Lizenzen zu erhalten, z. B. welche Mitglieder deines Unternehmens einen {% data variables.product.prodname_advanced_security %}-Arbeitsplatz nutzen oder wie {% data variables.product.prodname_advanced_security %}-Lizenzen in deinen Organisationen genutzt werden.

Du kannst die {% data variables.product.prodname_advanced_security %}-CSV-Datei zur Lizenznutzung über die {% data variables.product.product_name %}-Benutzeroberfläche oder die REST-API herunterladen.

### Herunterladen der {% data variables.product.prodname_advanced_security %}-Lizenznutzungsinformationen über die Benutzeroberfläche

#### Auf Organisationsebene

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.billing_plans %}
1. Klicke unter „{% data variables.product.prodname_GH_advanced_security %}“ auf {% octicon "download" aria-label="The download icon" %} neben „Committer“.
  ![Schaltfläche zum Herunterladen für Daten auf Organisationsebene](/assets/images/help/billing/download-organization-GHAS-usage-data.png)

#### Auf Unternehmensebene

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.license-tab %}
1. Klicke unter „{% data variables.product.prodname_GH_advanced_security %}“ auf {% octicon "download" aria-label="The download icon" %} neben „Committer“.
  ![Schaltfläche zum Herunterladen für Daten auf Unternehmensebene](/assets/images/help/billing/download-enterprise-GHAS-usage-data.png)

### Herunterladen der {% data variables.product.prodname_advanced_security %}-Lizenznutzungsinformationen über die REST-API

Du kannst {% data variables.product.prodname_advanced_security %}-Nutzungsinformationen über die Abrechnungs-API abrufen.

{% ifversion ghec %}

Verwende für Daten auf Organisationsebene den `/orgs/{org}/settings/billing/advanced-security`-Endpunkt. Weitere Informationen findest du unter [Abrechnung](/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization) in der {% data variables.product.prodname_dotcom %}-REST-API-Dokumentation.

{% endif %}

Verwende für Daten auf Unternehmensebene den `/enterprises/{enterprise}/settings/billing/advanced-security`-Endpunkt. Weitere Informationen findest du in der {% data variables.product.prodname_dotcom %}-REST-API-Dokumentation unter [{% data variables.product.prodname_enterprise %}-Administration](/rest/reference/enterprise-admin#get-github-advanced-security-active-committers-for-an-enterprise).

{% endif %}
