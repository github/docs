---
title: Configuration de GitHub Pages pour votre entreprise
intro: 'Vous pouvez activer ou désactiver {% data variables.product.prodname_pages %} pour votre entreprise{% ifversion ghes %}, et choisir si vous souhaitez rendre les sites accessibles publiquement{% endif %}.'
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145103034'
---
{% ifversion ghes %}

## Activation des sites publics pour {% data variables.product.prodname_pages %}

Si le mode privé est activé dans votre entreprise, le public ne peut pas accéder aux sites {% data variables.product.prodname_pages %} hébergés par votre entreprise, sauf si vous activez les sites publics.

{% warning %}

**Avertissement :** Si vous activez les sites publics pour {% data variables.product.prodname_pages %}, chaque site de chaque dépôt de votre entreprise sera accessible au public.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
4. Sélectionner **Pages publiques**.
  ![Case à cocher permettant d’activer les pages publiques](/assets/images/enterprise/management-console/public-pages-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Désactivation de {% data variables.product.prodname_pages %} pour votre entreprise

Si l’isolation de sous-domaine est désactivée pour votre entreprise, vous devez aussi désactiver {% data variables.product.prodname_pages %} pour vous protéger contre les vulnérabilités de sécurité potentielles. Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/admin/configuration/enabling-subdomain-isolation) ».

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Désélectionnez **Activer les pages**.
  ![Case à cocher permettant de désactiver {% data variables.product.prodname_pages %}](/assets/images/enterprise/management-console/pages-select-button.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghae %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.policies-tab %} {% data reusables.enterprise-accounts.pages-tab %}
1. Sous « Stratégies Pages », désélectionnez **Activer {% data variables.product.prodname_pages %}** .
  ![Case à cocher permettant de désactiver {% data variables.product.prodname_pages %}](/assets/images/enterprise/business-accounts/enable-github-pages-checkbox.png) {% data reusables.enterprise-accounts.pages-policies-save %}

{% endif %}

{% ifversion ghes > 3.4 %}

## Configuration d’en-têtes de réponse {% data variables.product.prodname_pages %} pour votre entreprise

Vous pouvez ajouter ou remplacer des en-têtes de réponse pour des sites {% data variables.product.prodname_pages %} hébergés par {% data variables.product.product_location %}.

{% warning %}

**Avertissement :** Vérifiez que vos en-têtes de réponse sont correctement configurés avant l’enregistrement. Des configurations incorrectes peuvent avoir un impact négatif sur la sécurité de {% data variables.product.product_location %}.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.pages-tab %}
1. Tapez les paramètres d’en-têtes, puis cliquez sur **Ajouter des en-têtes**.
   - Dans le champ **Nom de l’en-tête Http**, tapez le nom de l’en-tête. La longueur du nom de l’en-tête doit être inférieure à 128 caractères.
   - Dans le champ **Valeur de l’en-tête Http**, tapez la valeur de l’en-tête. La longueur de la valeur de l’en-tête doit être inférieure à 300 caractères.
![Nom de l’en-tête de réponse {% data variables.product.prodname_pages %} et champs de valeur dans la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/pages-override-header-section.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}

{% ifversion ghes %}
## Pour aller plus loin

- « [Activation du mode privé](/admin/configuration/enabling-private-mode) » {% endif %}
