---
title: Accès à la console de gestion
intro: '{% data reusables.enterprise_site_admin_settings.about-the-management-console %}'
redirect_from:
  - /enterprise/admin/articles/about-the-management-console
  - /enterprise/admin/articles/management-console-for-emergency-recovery
  - /enterprise/admin/articles/web-based-management-console
  - /enterprise/admin/categories/management-console
  - /enterprise/admin/articles/accessing-the-management-console
  - /enterprise/admin/guides/installation/web-based-management-console
  - /enterprise/admin/installation/accessing-the-management-console
  - /enterprise/admin/configuration/accessing-the-management-console
  - /admin/configuration/accessing-the-management-console
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
shortTitle: Access the management console
ms.openlocfilehash: 60cd45e9e33dfbd037c831b96bed806dddcf6a21
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107124'
---
## À propos de la {% data variables.enterprise.management_console %}

Servez-vous de la {% data variables.enterprise.management_console %} pour les activités d’administration de base :
- **Configuration initiale** : Parcourez le processus de configuration initiale la première fois que vous lancez {% data variables.location.product_location %} en accédant à l’adresse IP de {% data variables.location.product_location %} dans votre navigateur.
- **Configuration des stratégies d’authentification pour la {% data variables.enterprise.management_console %}**  : Définissez des limites de débit pour les tentatives de connexion et la durée de verrouillage si une personne dépasse la limite de débit. 
- **Configuration des paramètres de base de votre instance** : Configurez le système DNS, le nom d’hôte, SSL, l’authentification utilisateur, l’e-mail, les services de supervision et le transfert de journaux dans la page Paramètres.
- **Planification de fenêtres de maintenance** : Mettez {% data variables.location.product_location %} en mode hors connexion durant les opérations de maintenance à l’aide de la {% data variables.enterprise.management_console %} ou de l’interpréteur de commandes d’administration.
- **Résolution des problèmes** : Générez un bundle de support ou affichez des informations de diagnostic générales.
- **Gestion de licence** : Consultez ou mettez à jour votre licence {% data variables.product.prodname_enterprise %}.

Vous pouvez toujours accéder à la {% data variables.enterprise.management_console %} en utilisant l’adresse IP de {% data variables.location.product_location %}, même quand l’instance est en mode maintenance ou que l’application connaît une défaillance critique ou même quand le nom d’hôte ou SSL sont mal configurés.

Pour accéder à la {% data variables.enterprise.management_console %}, vous devez utiliser le mot de passe d’administrateur établi pendant la configuration initiale de {% data variables.location.product_location %}. Vous devez aussi pouvoir vous connecter à l’hôte de machine virtuelle sur le port 8443. Si vous avez des difficultés à accéder à la {% data variables.enterprise.management_console %}, vérifiez les configurations de intermédiaires de pare-feu et de groupe de sécurité. 

Le hachage du mot de passe de la {% data variables.enterprise.management_console %} est stocké dans `/data/user/common/secrets.conf`, et ce fichier est automatiquement synchronisé entre l’appliance principale et les réplicas à haute disponibilité. Toute modification du mot de passe de l’appliance principale est automatiquement répliquée sur les réplicas à haute disponibilité. Pour plus d’informations sur la haute disponibilité, consultez « [À propos de la configuration à haute disponibilité](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration) ».

## Accès à la {% data variables.enterprise.management_console %} en tant qu’administrateur de site

La première fois que vous accédez à la {% data variables.enterprise.management_console %} en tant qu’administrateur de site, vous devez charger votre fichier de licence {% data variables.product.prodname_enterprise %} pour vous authentifier dans l’application. Pour plus d’informations, consultez « [Gestion de votre licence pour {% data variables.product.prodname_enterprise %}](/billing/managing-your-license-for-github-enterprise) ».

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %}

## Accès à la {% data variables.enterprise.management_console %} en tant qu’utilisateur non authentifié

1. Accédez à cette URL dans votre navigateur, en remplaçant `hostname` par votre véritable nom d’hôte ou adresse IP {% data variables.product.prodname_ghe_server %} :
  ```shell
  http(s)://HOSTNAME/setup
  ```
{% data reusables.enterprise_management_console.type-management-console-password %}

## Déblocage de la {% data variables.enterprise.management_console %} après des tentatives de connexion avortées

La {% data variables.enterprise.management_console %} se verrouille après {% ifversion enterprise-authentication-rate-limits %}avoir atteint le nombre de tentatives de connexion ayant échoué configuré par vos stratégies d’authentification. Pour plus d’informations, consultez « [Configuration des limites de taux des stratégies d’authentification](/admin/configuration/configuring-your-enterprise/configuring-rate-limits#configuring-authentication-policy-rate-limits) ».{% else %}dix échecs de tentatives de connexion en l’espace de dix minutes. Vous devez attendre que l’écran de connexion se débloque automatiquement avant de tenter une nouvelle connexion. L’écran de connexion se débloque automatiquement dès que la période précédente de dix minutes compte moins de dix tentatives de connexion avortées. Le compteur se réinitialise après une connexion réussie.{% endif %}

{% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}

## Résolution des problèmes d’échec de connexion à la {% data variables.enterprise.management_console %}

Si vous ne pouvez pas vous connecter à la {% data variables.enterprise.management_console %} sur {% data variables.location.product_location %}, vous pouvez consulter les informations suivantes pour résoudre le problème.

### Erreur : « Votre session a expiré » pour les connexions via un équilibreur de charge

Si vous accédez à {% data variables.location.product_location %} via un équilibreur de charge et que les connexions à la {% data variables.enterprise.management_console %} échouent avec un message indiquant que votre session a expiré, vous devrez peut-être reconfigurer votre équilibreur de charge. Pour plus d’informations, consultez « [Utilisation de {% data variables.product.product_name %} avec un équilibreur de charge](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console) ».
