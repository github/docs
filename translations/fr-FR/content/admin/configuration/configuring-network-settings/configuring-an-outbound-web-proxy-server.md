---
title: Configuration d’un serveur proxy web de trafic sortant
intro: 'Un serveur proxy fournit un niveau de sécurité supplémentaire pour {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/guides/installation/configuring-a-proxy-server
  - /enterprise/admin/installation/configuring-an-outbound-web-proxy-server
  - /enterprise/admin/configuration/configuring-an-outbound-web-proxy-server
  - /admin/configuration/configuring-an-outbound-web-proxy-server
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure an outbound proxy
ms.openlocfilehash: 4285f24dd45d127efec4ace66729bf6fd1f188c5
ms.sourcegitcommit: 9a7b3a9ccb983af5df2cd94da7fecf7a8237529b
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147876791'
---
## À propos des proxys avec {% data variables.product.product_name %}

Quand un serveur proxy est activé pour {% data variables.product.product_location %}, les messages sortants envoyés par {% data variables.product.prodname_ghe_server %} sont d’abord envoyés via le serveur proxy, sauf si l’hôte de destination est ajouté en tant qu’exclusion de proxy HTTP. Parmi les types de messages sortants figurent les webhooks sortants, le chargement de bundles et la récupération d’avatars hérités. L’URL du serveur proxy est constituée du protocole, du domaine ou de l’adresse IP, puis du numéro de port, par exemple `http://127.0.0.1:8123`.

{% note %}

**Remarque :** Pour connecter {% data variables.product.product_location %} à {% data variables.product.prodname_dotcom_the_website %}, votre configuration proxy doit autoriser la connexion à `github.com` et `api.github.com`. Pour plus d’informations, consultez « [Connexion de votre compte d’entreprise à {% data variables.product.prodname_dotcom_the_website %}](/admin/configuration/managing-connections-between-your-enterprise-accounts/connecting-your-enterprise-account-to-github-enterprise-cloud) ».

{% endnote %}

{% data reusables.actions.proxy-considerations %} Pour plus d’informations sur l’utilisation de {% data variables.product.prodname_actions %} avec {% data variables.product.prodname_ghe_server %}, consultez « [Bien démarrer avec {% data variables.product.prodname_actions %} pour {% data variables.product.prodname_ghe_server %}](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server) ».

## Configuration d’un serveur proxy web de trafic sortant

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
1. Sous **Serveur proxy HTTP**, tapez l’URL de votre serveur proxy.
  ![Champ de saisie de l’URL du serveur proxy HTTP](/assets/images/enterprise/management-console/http-proxy-field.png)
  
5. Si vous le souhaitez, sous **Exclusion du proxy HTTP**, tapez les hôtes qui ne nécessitent pas d’accès proxy, en séparant les hôtes avec des virgules. Pour exclure tous les hôtes d’un domaine d’un accès proxy obligatoire, vous pouvez utiliser `.` comme préfixe générique.  Par exemple : `.octo-org.tentacle`
  ![Champ de saisie d’exclusions du proxy HTTP](/assets/images/enterprise/management-console/http-proxy-exclusion-field.png)

{% data reusables.enterprise_management_console.save-settings %}
