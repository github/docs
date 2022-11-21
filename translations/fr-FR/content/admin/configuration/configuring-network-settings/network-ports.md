---
title: Ports réseau
redirect_from:
  - /enterprise/admin/articles/configuring-firewalls
  - /enterprise/admin/articles/firewall
  - /enterprise/admin/guides/installation/network-configuration
  - /enterprise/admin/guides/installation/network-ports-to-open
  - /enterprise/admin/installation/network-ports
  - /enterprise/admin/configuration/network-ports
  - /admin/configuration/network-ports
intro: 'Ouvrez les ports réseau de manière sélective en fonction des services réseau que vous devez exposer aux administrateurs, aux utilisateurs finaux et au support par e-mail.'
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Networking
  - Security
ms.openlocfilehash: 048b27ed44cea11057c781ae3043078a825f8d1a
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160653'
---
## Ports d’administration

Certains ports d’administration sont nécessaires à la configuration de {% data variables.location.product_location %} et à l’exécution de certaines fonctionnalités. Les ports d’administration ne sont pas nécessaires dans le cadre d’une utilisation simple de la part des utilisateurs finaux.

| Port | Service | Description |
|---|---|---|
| 8443 | HTTPS | {% data variables.enterprise.management_console %} web sécurisée. Nécessaire pour une installation et une configuration de base. |
| 8080 | HTTP | {% data variables.enterprise.management_console %} web en texte brut. Non obligatoire, sauf si TLS est désactivé manuellement. |
| 122 | SSH | Accès Shell pour {% data variables.location.product_location %}. Doit être ouvert aux connexions entrantes entre tous les nœuds d’une configuration à haute disponibilité. Le port SSH par défaut (22) est dédié au trafic réseau d’applications Git et SSH. |
| 1194/UDP | VPN | Tunnel de réseau de réplication sécurisé dans une configuration à haute disponibilité. Doit être ouvert pour la communication entre tous les nœuds de la configuration.|
| 123/UDP| NTP | Nécessaire au fonctionnement du protocole TP. |
| 161/UDP | SNMP | Nécessaire au fonctionnement du protocole de supervision de réseau. |

## Ports d’application pour les utilisateurs finaux

Les ports d’application fournissent un accès à l’application web et à Git pour les utilisateurs finaux.

| Port | Service | Description |
|---|---|---|
| 443 | HTTPS | Accès à l’application web et à Git via HTTPS. |
| 80 | HTTP | Accès à l’application web. Toutes les requêtes sont redirigées vers le port HTTPS si TLS est configuré. |
| 22 | SSH | Accès à Git via SSH. Prend en charge les opérations de clonage, de récupération (fetch) et d’envoi (push) sur les dépôts publics et privés. |
| 9418 | Git | Le port de protocole Git prend en charge les opérations de clonage et de récupération (fetch) sur les dépôts publics avec une communication réseau non chiffrée. {% data reusables.enterprise_installation.when-9418-necessary %} |

{% data reusables.enterprise_installation.terminating-tls %}

## Ports de messagerie

Les ports de messagerie doivent être accessibles directement ou via un relais pour la prise en charge des e-mails entrants pour les utilisateurs finaux.

| Port | Service | Description |
|---|---|---|
| 25 | SMTP | Prise en charge de SMTP avec chiffrement (STARTTLS). |

## Ports {% data variables.product.prodname_actions %}

Les ports {% data variables.product.prodname_actions %} doivent être accessibles pour permettre aux exécuteurs auto-hébergés de se connecter à {% data variables.location.product_location %}. Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-enterprise-server) ».

| Port | Service | Description |
|---|---|---|
| 443 | HTTPS | Les exécuteurs auto-hébergés se connectent à {% data variables.location.product_location %} pour recevoir les affectations de travaux et pour télécharger les nouvelles versions de l’application d’exécuteur. Obligatoire si TLS est configuré.
| 80 | HTTP | Les exécuteurs auto-hébergés se connectent à {% data variables.location.product_location %} pour recevoir les affectations de travaux et pour télécharger les nouvelles versions de l’application d’exécuteur. Obligatoire si TLS n’est pas configuré.

Si vous activez l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %}, {% data variables.product.prodname_actions %} recherche toujours une action sur {% data variables.location.product_location %} en premier, via ces ports, avant de vérifier {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#about-resolution-for-actions-using-github-connect) ».

## Ports {% data variables.product.prodname_github_connect %}

Si vous activez {% data variables.product.prodname_github_connect %}, la connexion entre {% data variables.product.product_name %} et {% data variables.product.prodname_dotcom_the_website %} utilise HTTPS sur les ports 443 ou 80, et TLS est requis. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».

## Pour aller plus loin

- « [Configuration de TLS](/admin/configuration/configuring-network-settings/configuring-tls) »
