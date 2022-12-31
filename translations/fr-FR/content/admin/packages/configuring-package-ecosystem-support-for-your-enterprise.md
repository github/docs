---
title: Configuration de la prise en charge de l’écosystème de packages pour votre entreprise
intro: 'Vous pouvez configurer {% data variables.product.prodname_registry %} pour votre entreprise en activant ou désactivant globalement des écosystèmes de packages individuels sur votre entreprise, notamment {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker et npm. Découvrez les autres exigences de configuration pour prendre en charge des écosystèmes de package spécifiques.'
redirect_from:
  - /enterprise/admin/packages/configuring-packages-support-for-your-enterprise
  - /admin/packages/configuring-packages-support-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
shortTitle: Configure package ecosystems
ms.openlocfilehash: 83de80e4233f671a7a923394d2fd3f6e554bba10
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147062545'
---
{% data reusables.package_registry.packages-ghes-release-stage %}

## Activation ou désactivation d’écosystèmes de package individuels

Pour empêcher le chargement de nouveaux packages, vous pouvez définir un écosystème que vous avez précédemment activé en **lecture seule** et continuer à autoriser le téléchargement de packages existants.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %}
1. Sous « Bascules d’écosystème », pour chaque type de package, sélectionnez **Activé**, **Lecture seule** ou **Désactivé**.
   {%- ifversion ghes > 3.4 %}{% note -%} **Remarque** : l’isolation de sous-domaine doit être activée pour basculer les options {% data variables.product.prodname_container_registry %}.
   {%- endnote %}{%- endif %}{%- ifversion ghes %} ![Bascules d’écosystème](/assets/images/enterprise/site-admin-settings/ecosystem-toggles.png){% else %} ![Bascules d’écosystème](/assets/images/enterprise/3.1/site-admin-settings/ecosystem-toggles.png){% endif %} {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes %}
## Connexion au registre npm officiel

Si vous avez activé les packages npm sur votre entreprise et que vous souhaitez autoriser l’accès au registre npm officiel et au registre npm {% data variables.product.prodname_registry %}, vous devez effectuer une configuration supplémentaire.

{% data variables.product.prodname_registry %} utilise un proxy transparent pour le trafic réseau, qui se connecte au registre npm officiel sur `registry.npmjs.com`. Le proxy est activé par défaut et ne peut pas être désactivé.

Pour autoriser les connexions réseau au registre npm, vous devez configurer des listes de contrôle d’accès réseau autorisant {% data variables.product.prodname_ghe_server %} à envoyer le trafic HTTPS à `registry.npmjs.com` sur le port 443 :

| Source | Destination | Port | Type |
|---|---|---|---|
| {% data variables.product.prodname_ghe_server %} | `registry.npmjs.com` | TCP/443 | HTTPS |

Notez que les connexions à `registry.npmjs.com` traversent le réseau Cloudflare et, par la suite, ne se connectent pas à une seule adresse IP statique. En fait, une connexion est établie à une adresse IP dans les plages CIDR listées ici : https://www.cloudflare.com/ips/.

Si vous souhaitez activer les sources npm en amont, sélectionnez `Enabled` pour `npm upstreaming`.

{% endif %}

## Étapes suivantes

Nous vous recommandons ensuite de vérifier si vous devez mettre à jour ou charger un certificat TLS pour l’URL hôte de vos packages. Pour plus d’informations, consultez « [Bien démarrer avec GitHub Packages pour votre entreprise](/admin/packages/getting-started-with-github-packages-for-your-enterprise) ».
