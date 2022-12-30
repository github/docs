---
title: Informationen zur Unternehmenskonfiguration
intro: 'Du kannst das Websiteadministrator-Dashboard{% ifversion ghes %}, {% data variables.enterprise.management_console %} und die Verwaltungsshell (SSH) verwenden {% elsif ghae %} und Unternehmenseinstellungen verwenden, oder dich an den Support wenden{% endif %}, um dein Unternehmen zu verwalten.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - Fundamentals
  - SSH
redirect_from:
  - /admin/configuration/about-enterprise-configuration
shortTitle: About configuration
ms.openlocfilehash: 86012c1fc7b56367d171fd271c5f3d12125cf461
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145103040'
---
{% ifversion ghes %} {% data reusables.enterprise_site_admin_settings.about-the-site-admin-dashboard %} Weitere Informationen findest du unter [Websiteadministratordashboard](/admin/configuration/site-admin-dashboard).

{% data reusables.enterprise_site_admin_settings.about-the-management-console %} Weitere Informationen findest du unter [Zugreifen auf die Verwaltungskonsole](/admin/configuration/accessing-the-management-console).

{% data reusables.enterprise_site_admin_settings.about-ssh-access %} Weitere Informationen findest du unter [Zugreifen auf die Verwaltungsshell (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh).
{% endif %}

{% ifversion ghae %} Um mit {% data variables.product.product_name %} zu beginnen, musst du zuerst {% data variables.product.product_name %} bereitstellen. Weitere Informationen findest du unter [Bereitstellen von {% data variables.product.product_name %}](/admin/configuration/configuring-your-enterprise/deploying-github-ae).

Wenn du zum ersten Mal auf dein Unternehmen zugreifst, führst du eine anfängliche Konfiguration aus, um {% data variables.product.product_name %} einsatzbereit zu machen. Die anfängliche Konfiguration umfasst das Herstellen der Verbindung deines Unternehmens mit einem Identitätsanbieter (IdP), Authentifizieren mit SAML SSO, Konfigurieren von Richtlinien für Repositorys und Organisationen in deinem Unternehmen und Konfigurieren von SMTP für ausgehende E-Mails. Weitere Informationen findest du unter [Initialisieren von {% data variables.product.prodname_ghe_managed %}](/admin/configuration/initializing-github-ae).

Später kannst du über das Websiteadministrator-Dashboard und die Unternehmenseinstellungen dein Unternehmen weiter konfigurieren, Benutzer, Organisationen und Repositorys verwalten und Richtlinien festzulegen, die Risiken reduzieren und die Qualität erhöhen. 

Alle Unternehmen sind mit Subdomain-Isolation und Unterstützung für TLS 1.2 und höher nur für verschlüsselten Datenverkehr konfiguriert.
{% endif %}

## Weiterführende Themen

- [Verwalten von Benutzern, Organisationen und Repositorys](/admin/user-management)
- [Festlegen von Richtlinien für dein Unternehmen](/admin/policies)
