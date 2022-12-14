---
title: Configuration de l’analyse de secrets pour votre appliance
shortTitle: Configuring secret scanning
intro: 'Vous pouvez maintenant activer, configurer et désactiver l’{% data variables.product.prodname_secret_scanning %} pour {% data variables.product.product_location %}. {% data variables.product.prodname_secret_scanning_caps %} permet aux utilisateurs d’analyser le code à la recherche de secrets validés accidentellement.'
product: '{% data reusables.gated-features.secret-scanning %}'
miniTocMaxHeadingLevel: 3
redirect_from:
  - /admin/configuration/configuring-secret-scanning-for-your-appliance
  - /admin/advanced-security/configuring-secret-scanning-for-your-appliance
versions:
  ghes: '*'
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Secret scanning
  - Security
ms.openlocfilehash: c44d724293b970ff3075deb1befb2f0eae427d5c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066320'
---
{% data reusables.secret-scanning.beta %}

## À propos de l’{% data variables.product.prodname_secret_scanning %}

Si quelqu’un archive un secret dans un dépôt avec un modèle connu, l’{% data variables.product.prodname_secret_scanning %} l’intercepte au moment de l’archivage et vous aide à atténuer l’impact de la fuite. Les administrateurs de dépôt sont avertis en présence d’un secret dans un commit et peuvent rapidement examiner tous les secrets détectés dans l’onglet Securité du dépôt. Pour plus d’informations, consultez « [À propos de l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/about-secret-scanning) ».

## Vérification de la présence de {% data variables.product.prodname_GH_advanced_security %} dans votre licence

{% data reusables.advanced-security.check-for-ghas-license %}

## Prérequis pour l’{% data variables.product.prodname_secret_scanning %}

- L’indicateur de processeur [SSSE3](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf#G3.1106470) (Supplemental Streaming SIMD Extensions 3) doit être activé sur la machine virtuelle/KVM qui exécute {% data variables.product.product_location %}.

- Une licence pour {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) »){% endif %}

- L’{% data variables.product.prodname_secret_scanning_caps %} activée dans la console de gestion (consultez « [Activation de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/advanced-security/enabling-github-advanced-security-for-your-enterprise) »)

### Vérification de la prise en charge de l’indicateur SSSE3 sur vos processeurs virtuels

Le jeu d’instructions SSSE3 est nécessaire, car l’{% data variables.product.prodname_secret_scanning %} tire profit des critères spéciaux avec accélération matérielle pour rechercher les informations d’identification potentielles commitées dans vos dépôts {% data variables.product.prodname_dotcom %}. SSSE3 est activé pour la plupart des processeurs modernes. Vous pouvez vérifier si SSSE3 est activé pour les processeurs virtuels disponibles pour votre instance {% data variables.product.prodname_ghe_server %}.

1. Connectez-vous à l’interpréteur de commandes d’administration de votre instance {% data variables.product.prodname_ghe_server %}. Pour plus d’informations, consultez « [Accès à l’interpréteur de commandes d’administration (SSH)](/admin/configuration/accessing-the-administrative-shell-ssh) ».
2. Entrez la commande suivante :

   ```shell
   grep -iE '^flags.*ssse3' /proc/cpuinfo >/dev/null | echo $?
   ```

   Si elle retourne la valeur `0`, cela signifie que l’indicateur SSSE3 est disponible et activé. Vous pouvez maintenant activer l’{% data variables.product.prodname_secret_scanning %} pour {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Activation de l’{% data variables.product.prodname_secret_scanning %}](#enabling-secret-scanning) ».

   Si elle ne retourne pas `0`, SSSE3 n’est pas activé sur votre machine virtuelle/KVM. Vous devez vous reporter à la documentation du matériel/hyperviseur pour savoir comment activer l’indicateur ou le rendre disponible pour les machines virtuelles invitées.

## Activation de l’{% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Under "Security," click **{% data variables.product.prodname_secret_scanning_caps %}** .
![Case à cocher pour activer ou désactiver l’{% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/enable-secret-scanning-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

## Désactivation de l’{% data variables.product.prodname_secret_scanning %}

{% data reusables.enterprise_management_console.enable-disable-security-features %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Sous « Sécurité », désélectionnez **{% data variables.product.prodname_secret_scanning_caps %}** .
![Case à cocher pour activer ou désactiver l’{% data variables.product.prodname_secret_scanning %}](/assets/images/enterprise/management-console/secret-scanning-disable.png) {% data reusables.enterprise_management_console.save-settings %}
