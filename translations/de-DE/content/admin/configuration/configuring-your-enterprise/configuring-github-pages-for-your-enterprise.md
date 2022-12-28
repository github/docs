---
title: Konfigurieren von GitHub Seiten für dein Unternehmen
intro: 'Du kannst {% data variables.product.prodname_pages %} für dein Unternehmen aktivieren oder deaktivieren{% ifversion ghes %} und wählen, ob Websites öffentlich zugänglich sein sollen{% endif %}.'
redirect_from:
  - /enterprise/admin/guides/installation/disabling-github-enterprise-pages
  - /enterprise/admin/guides/installation/configuring-github-enterprise-pages
  - /enterprise/admin/installation/configuring-github-pages-on-your-appliance
  - /enterprise/admin/configuration/configuring-github-pages-on-your-appliance
  - /admin/configuration/configuring-github-pages-on-your-appliance
  - /enterprise/admin/guides/installation/configuring-github-pages-for-your-enterprise
  - /admin/configuration/configuring-github-pages-for-your-enterprise
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Pages
shortTitle: Configure GitHub Pages
ms.openlocfilehash: 1cb2bd78f006bfd86a3f0a2e42db4fcf2cea3b73
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145103035'
---
{% ifversion ghes %}

## Aktivieren von öffentlichen Websites für {% data variables.product.prodname_pages %}

Wenn in deinem Unternehmen der private Modus aktiviert ist, kann niemand aus dem öffentlichen Internet auf {% data variables.product.prodname_pages %}-Websites zugreifen, die von deinem Unternehmen gehostet werden, es sei denn, du aktivierst öffentliche Websites.

{% warning %}

**Warnung**: Wenn du öffentliche Websites für {% data variables.product.prodname_pages %} aktivierst, ist jede Website in jedem Repository in deinem Unternehmen für die Öffentlichkeit zugänglich.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. Wähle **Öffentliche Seiten** aus.
  ![Kontrollkästchen zum Aktivieren von öffentlichen Seiten](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Deaktivieren von {% data variables.product.prodname_pages %} für dein Unternehmen

Wenn für dein Unternehmen die Unterdomänenisolation deaktiviert ist, solltest du auch {% data variables.product.prodname_pages %} deaktivieren, um dich vor möglichen Sicherheitsrisiken zu schützen. Weitere Informationen findest du unter [Aktivieren der Unterdomänenisolation](/admin/configuration/enabling-subdomain-isolation).

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Deaktiviere **Seiten aktivieren**.
  ![Kontrollkästchen zum Deaktivieren von {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. Deaktiviere unter „Seitenrichtlinien“ die Option **{% data variables.product.prodname_pages %} aktivieren**.
  ![Kontrollkästchen zum Deaktivieren von {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Konfigurieren von {% data variables.product.prodname_pages %}-Antwortheadern für dein Unternehmen

Du kannst Antwortheader für deine {% data variables.product.prodname_pages %}-Websites, die von {% data variables.product.product_location %} gehostet werden, hinzufügen oder außer Kraft setzen.

{% warning %}

**Warnung**: Stelle vor dem Speichern sicher, dass deine Antwortheader ordnungsgemäß konfiguriert sind. Falsche Konfigurationen können sich negativ auf die Sicherheit von {% data variables.product.product_location %} auswirken.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Gib die Headereinstellungen ein, und klicke dann auf **Header hinzufügen**.
   - Gib im Feld **HTTP-Headername** den Headernamen ein. Der Headername muss kürzer als 128 Zeichen sein.
   - Gib im Feld **HTTP-Headerwert** den Headerwert ein. Der Headerwert muss kürzer als 300 Zeichen sein.
![Die {% data variables.product.prodname_pages %}-Felder für Antwortheadername und -wert in der {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Weitere Informationsquellen

- [Aktivieren des privaten Modus](/admin/configuration/enabling-private-mode) {% endif %}
