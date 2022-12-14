---
title: Utilisation de GitHub Enterprise Server avec un équilibreur de charge
intro: 'Utilisez un équilibreur de charge devant une seule instance de {% data variables.product.prodname_ghe_server %} ou une paire d’instances dans une configuration à haute disponibilité.'
redirect_from:
  - /enterprise/admin/guides/installation/using-github-enterprise-with-a-load-balancer
  - /enterprise/admin/installation/using-github-enterprise-server-with-a-load-balancer
  - /enterprise/admin/configuration/using-github-enterprise-server-with-a-load-balancer
  - /admin/configuration/using-github-enterprise-server-with-a-load-balancer
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - High availability
  - Infrastructure
  - Networking
shortTitle: Use a load balancer
ms.openlocfilehash: dcbd1261d127e48140f6b6843ef4ec3c35fb84f4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147167314'
---
## À propos des équilibreurs de charge

{% data reusables.enterprise_clustering.load_balancer_intro %}

{% data reusables.enterprise_clustering.load_balancer_dns %}

## Gestion des informations sur les connexions clientes

Sachant que les connexions clientes à {% data variables.product.prodname_ghe_server %} proviennent de l’équilibreur de charge, l’adresse IP cliente peut être perdue.

{% data reusables.enterprise_clustering.proxy_preference %}

{% data reusables.enterprise_clustering.proxy_xff_firewall_warning %}

{% data reusables.enterprise_installation.terminating-tls %}

### Activation de la prise en charge du protocole PROXY sur {% data variables.product.product_location %}

Nous vous recommandons vivement d’activer la prise en charge du protocole PROXY pour votre instance et l’équilibreur de charge. Conformez-vous aux instructions fournies par votre fournisseur pour activer le protocole PROXY sur votre équilibreur de charge. Pour plus d'informations, consultez la [documentation du protocole PROXY](http://www.haproxy.org/download/1.8/doc/proxy-protocol.txt).

{% data reusables.enterprise_installation.proxy-incompatible-with-aws-nlbs %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Sous **Équilibreurs de charge externes**, sélectionnez **Activer la prise en charge du protocole PROXY**.
![Case à cocher permettant d’activer la prise en charge du protocole PROXY](/assets/images/enterprise/management-console/enable-proxy.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.proxy_protocol_ports %}

### Activation de la prise en charge de X-Forwarded-For sur {% data variables.product.product_location %}

{% data reusables.enterprise_clustering.x-forwarded-for %}

{% warning %}

**Avertissement** : Si vous configurez la prise en charge de `X-Forwarded-For` sur {% data variables.product.product_location %} et l’équilibreur de charge, vous risquez de ne pas pouvoir vous connecter à la {% data variables.enterprise.management_console %}. Pour plus d’informations, consultez « [Erreur : « Votre session a expiré » pour les connexions à la {% data variables.enterprise.management_console %}](/admin/configuration/configuring-network-settings/using-github-enterprise-server-with-a-load-balancer#error-your-session-has-expired-for-connections-to-the-management-console) ».

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. Sous **Équilibreurs de charge externes**, sélectionnez **Autoriser l’en-tête HTTP X-Forwarded-For**.
![Case à cocher permettant d’autoriser l’en-tête HTTP X-Forwarded-For](/assets/images/enterprise/management-console/allow-xff.png) {% data reusables.enterprise_management_console.save-settings %}

{% data reusables.enterprise_clustering.without_proxy_protocol_ports %}

## Configuration des contrôles d’intégrité

Les contrôles d’intégrité permettent à un équilibreur de charge d’arrêter l’envoi de trafic à un nœud qui ne répond pas si une vérification préconfigurée échoue sur ce nœud. Si l’instance est hors connexion pour des raisons de maintenance ou à la suite d’une défaillance inattendue, l’équilibreur de charge peut afficher une page d’état. Dans une configuration à haute disponibilité (HA), un équilibreur de charge peut être utilisé dans le cadre d’une stratégie de basculement. Cependant, le basculement automatique des paires HA n’est pas pris en charge. Vous devez promouvoir manuellement l’instance de réplica pour qu’elle commence à traiter les requêtes. Pour plus d’informations, consultez « [Configuration de {% data variables.product.prodname_ghe_server %} pour la haute disponibilité](/enterprise/admin/guides/installation/configuring-github-enterprise-server-for-high-availability/) ».

{% data reusables.enterprise_clustering.health_checks %} {% data reusables.enterprise_site_admin_settings.maintenance-mode-status %}

## Résolution des problèmes de connectivité via un équilibreur de charge

Si vous ne pouvez pas vous connecter aux services de {% data variables.product.product_location %} via un équilibreur de charge, vous pouvez passer en revue les informations suivantes pour résoudre le problème.

{% note %}

**Remarque** : Testez toujours les changements apportés à votre infrastructure réseau et à la configuration de l’instance dans un environnement de préproduction. Pour plus d’informations, consultez « [Configuration d’une instance intermédiaire](/admin/installation/setting-up-a-github-enterprise-server-instance/setting-up-a-staging-instance) ».

{% endnote %}

### Erreur : « Votre session a expiré » pour les connexion à la {% data variables.enterprise.management_console %}

Si vous activez la prise en charge de l’en-tête `X-Forwarded-For` sur l’instance et l’équilibreur de charge, vous ne pourrez peut-être pas accéder à la {% data variables.enterprise.management_console %} de votre instance. Pour plus d’informations sur la {% data variables.enterprise.management_console %} et les ports nécessaires aux connexions, consultez « [Accès à la console de gestion](/admin/configuration/configuring-your-enterprise/accessing-the-management-console) » et « [Ports réseau](/admin/configuration/configuring-network-settings/network-ports) ».

Si {% data variables.product.product_location %} indique que votre session a expiré quand vous vous connectez à la {% data variables.enterprise.management_console %} via un équilibreur de charge, essayez l’une des configurations suivantes sur votre équilibreur de charge.

- Désactivez les en-têtes `X-Forwarded-For` pour les connexions à votre instance sur les ports 8080 et 8443.
- Configurez votre équilibreur de charge pour qu’il fonctionne sur la couche 4, puis utilisez le protocole PROXY au lieu de `X-Forwarded-For` pour le mode pass-through des adresses IP clientes. Pour plus d’informations, consultez « [Activation de la prise en charge du protocole PROXY sur {% data variables.product.product_location %}](#enabling-proxy-protocol-support-on-your-github-enterprise-server-instance) ».

Pour plus d’informations, consultez la documentation de votre équilibreur de charge.

### Les mises à jour automatiques des problèmes et des exécutions de vérifications ne fonctionnent pas

Quand {% data variables.product.product_location %} est accessible via un équilibreur de charge ou un proxy inverse, les mises à jour automatiques attendues, par exemple les nouveaux commentaires sur les problèmes ainsi que les changements apportés aux badges de notification ou à la sortie des exécutions de vérifications, ne s’affichent pas toujours tant que la page n’est pas actualisée. Cela est très courant quand le proxy inverse ou l’équilibreur de charge s’exécute en mode Couche 7, ou qu’il ne prend pas en charge le protocole [websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) nécessaire. 

Pour activer les mises à jour automatiques, vous devrez peut-être reconfigurer l’équilibreur de charge ou le proxy. Pour plus d’informations, consultez la documentation de votre équilibreur de charge.
