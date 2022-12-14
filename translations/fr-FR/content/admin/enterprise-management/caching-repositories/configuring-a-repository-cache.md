---
title: Configuration d’un cache de référentiel
intro: 'Vous pouvez configurer un cache de référentiel pour {% data variables.product.product_name %} en créant une instance, en connectant le cache du référentiel à votre instance principale et en configurant la réplication des réseaux de référentiels vers le cache du référentiel.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
ms.openlocfilehash: 682e169c55ef7ded453934720bf47f8843bc4acc
ms.sourcegitcommit: 1d757a4f3e1947fdd3868208b63041de30c9f60c
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/03/2022
ms.locfileid: '148132378'
---
{% data reusables.enterprise.repository-caching-release-phase %}

## À propos de la configuration de la mise en cache du référentiel

{% data reusables.enterprise.repository-caching-config-summary %} Ensuite, vous pouvez définir des stratégies d’emplacement de données qui régissent les réseaux de référentiel qui sont répliqués dans le cache du référentiel.

La mise en cache du référentiel n’est pas prise en charge avec le clustering.

## DNS pour les caches de référentiel

L’instance principale et le cache de référentiel doivent avoir des noms DNS différents. Par exemple, si votre instance principale est à l’adresse `github.example.com`, vous pouvez décider de nommer un cache `europe-ci.github.example.com` ou `github.asia.example.com`.

Pour que vos machines CI récupèrent à partir du cache du référentiel au lieu de l’instance principale, vous pouvez utiliser le paramètre de configuration `url.<base>.insteadOf` de Git. Pour plus d’informations, consultez [`git-config`](https://git-scm.com/docs/git-config#Documentation/git-config.txt-urlltbasegtinsteadOf) dans la documentation Git. 

Par exemple, le `.gitconfig` global pour la machine CI inclurait ces lignes.

```
[url "https://europe-ci.github.example.com/"]
    insteadOf = https://github.example.com/
```

Ensuite, quand on lui dit d’extraire `https://github.example.com/myorg/myrepo`, Git récupère depuis `https://europe-ci.github.example.com/myorg/myrepo` à la place.

## Configuration d’un cache de référentiel

{% ifversion ghes = 3.3 %} {% data reusables.enterprise_installation.ssh-into-instance %}
1. Pour activer la mise en cache du référentiel, exécutez la commande suivante.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %}
1. Configurez une nouvelle instance {% data variables.product.prodname_ghe_server %} sur la plateforme de votre choix. Cette instance sera votre cache de référentiel. Pour plus d’informations, consultez « [Configuration d’une instance {% data variables.product.prodname_ghe_server %}](/admin/guides/installation/setting-up-a-github-enterprise-server-instance) ».
{% data reusables.enterprise_installation.replica-steps %}
1. Connectez-vous à l’adresse IP du cache du référentiel à l’aide de SSH.

   ```shell
   $ ssh -p 122 admin@REPLICA-IP
   ```
{%- ifversion ghes = 3.3 %}
1. Sur votre réplica de cache, activez l’indicateur de fonctionnalité pour la mise en cache du référentiel.
   
   ```
   $ ghe-config cluster.cache-enabled true
   ```
{%- endif %} {% data reusables.enterprise_installation.generate-replication-key-pair %} {% data reusables.enterprise_installation.add-ssh-key-to-primary %}
1. Pour vérifier la connexion à l’appliance principale et activer le mode réplica pour le cache du référentiel, réexécutez `ghe-repl-setup`.

   ```shell
   $ ghe-repl-setup PRIMARY-IP
   ```

{% ifversion ghes < 3.6 %}
1. Définissez un `cache-location` pour le cache du référentiel, en remplaçant *CACHE-LOCATION* par un identificateur alphanumérique, comme la région où le cache est déployé. Définissez également un nom de centre de données pour ce cache ; de nouveaux caches tenteront d’effectuer un seed à partir d’un autre cache dans le même centre de données.

   ```shell
   $ ghe-repl-node --cache CACHE-LOCATION --datacenter REPLICA-DC-NAME
   ```
{% else %}
1. Pour configurer le cache du référentiel, utilisez la commande `ghe-repl-node` et incluez les paramètres nécessaires.
    - Définissez un `cache-location` pour le cache du référentiel, en remplaçant *CACHE-LOCATION* par un identificateur alphanumérique, comme la région où le cache est déployé.  La valeur *CACHE-LOCATION* ne doit pas être l’un des sous-domaines réservés pour une utilisation avec l’isolation de sous-domaine, comme `assets` ou `media`.  Pour obtenir la liste des noms réservés, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/guides/installation/enabling-subdomain-isolation#about-subdomain-isolation) ».
    - Définissez un `cache-domain` pour le cache du référentiel, en remplaçant *EXTERNAL-CACHE-DOMAIN* par le nom d’hôte que les clients Git utiliseront pour accéder au cache du référentiel. Si vous ne spécifiez pas `cache-domain`, {% data variables.product.product_name %} ajoute le préfixe *CACHE-LOCATION* en tant que sous-domaine au nom d’hôte configuré pour votre instance. Pour plus d’informations, consultez « [Configuration d’un nom d’hôte](/admin/configuration/configuring-network-settings/configuring-a-hostname) ».
    - De nouveaux caches tenteront d’effectuer un seed à partir d’un autre cache dans le même centre de données. Définissez un `datacenter` pour le cache du référentiel, en remplaçant *REPLICA-DC-NAME* par le nom du centre de données où vous déployez le nœud.

    ```shell
    $ ghe-repl-node --cache CACHE-LOCATION --cache-domain EXTERNAL-CACHE-DOMAIN --datacenter REPLICA-DC-NAME
    ```
{% endif %}

{% data reusables.enterprise_installation.replication-command %} {% data reusables.enterprise_installation.verify-replication-channel %}
1. Pour activer la réplication des réseaux de référentiel dans le cache du référentiel, définissez une stratégie d’emplacement des données. Pour plus d’informations, consultez « [Stratégies d’emplacement des données](#data-location-policies) ».

## Stratégies d’emplacement des données

Vous pouvez contrôler la localité des données en configurant des stratégies d’emplacement des données pour vos référentiels avec la commande `spokesctl cache-policy`. Les stratégies d’emplacement des données déterminent quels réseaux de référentiel sont répliqués sur quels caches de référentiel. Par défaut, aucun réseau de référentiels ne sera répliqué sur tous les caches de référentiel jusqu’à ce qu’une stratégie d’emplacement des données soit configurée.

Les stratégies d’emplacement des données affectent uniquement le contenu Git. Le contenu de la base de données, comme les problèmes et les commentaires de demande de tirage, sera répliqué sur tous les nœuds, quelle que soit la stratégie.

{% note %}

**Remarque :** Les stratégies d’emplacement des données ne sont pas identiques au contrôle d’accès. Vous devez utiliser des rôles de référentiel pour contrôler quels utilisateurs peuvent accéder à un référentiel. Pour plus d’informations sur les rôles de référentiel, consultez « [Rôles de référentiel pour une organisation](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization) ».

{% endnote %} 

Vous pouvez configurer une stratégie pour répliquer tous les réseaux avec l’indicateur `--default`. Par exemple, cette commande crée une stratégie pour répliquer une copie unique de chaque réseau de référentiels dans l’ensemble de caches de référentiel dont le `cache_location` est « kansas ».

 ```
 $ ghe-spokesctl cache-policy set --default 1 kansas
 ```

Pour configurer la réplication pour un réseau de référentiels, spécifiez le référentiel qui est la racine du réseau. Un réseau de référentiels inclut un référentiel et toutes les duplications du référentiel. Vous ne pouvez pas répliquer une partie d’un réseau sans répliquer l’ensemble du réseau.

```
$ ghe-spokesctl cache-policy set <owner/repository> 1 kansas
```

Vous pouvez remplacer une stratégie qui réplique tous les réseaux et exclut des réseaux spécifiques en spécifiant un nombre de réplicas égal à zéro pour le réseau. Par exemple, cette commande spécifie que tout cache de référentiel à l’emplacement « kansas » ne peut contenir aucune copie de ce réseau.

```
$ ghe-spokesctl cache-policy set <owner/repository> 0 kansas
```

Les nombres de réplicas supérieurs à 1 dans un emplacement de cache donné ne sont pas pris en charge.
