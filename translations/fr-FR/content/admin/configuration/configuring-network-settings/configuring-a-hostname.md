---
title: Configuration d’un nom d’hôte
intro: "Nous vous recommandons de définir un nom d’hôte pour votre appliance au lieu d’utiliser une adresse\_IP codée en dur."
redirect_from:
  - /enterprise/admin/guides/installation/configuring-hostnames
  - /enterprise/admin/installation/configuring-a-hostname
  - /enterprise/admin/configuration/configuring-a-hostname
  - /admin/configuration/configuring-a-hostname
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: a12955707c3ebcfbb65e5be8053ea0b62bc82072
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147723230'
---
Si vous configurez un nom d’hôte plutôt qu’une adresse IP codée de manière irréversible, vous pouvez modifier le matériel physique sur lequel s’exécute {% data variables.product.product_location %} sans affecter les utilisateurs ou les logiciels clients.

Le paramètre de nom d’hôte de la {% data variables.enterprise.management_console %} doit être défini sur un nom de domaine complet approprié (FQDN) qui peut être résolu sur Internet ou dans votre réseau interne. Par exemple, si votre paramètre de nom d’hôte est défini sur `github.companyname.com.`, les requêtes web et d’API seront redirigées automatiquement vers le nom d’hôte configuré dans la {% data variables.enterprise.management_console %}. Notez que `localhost` n’est pas un paramètre de nom d’hôte valide. 

Les noms d’hôte doivent comprendre moins de 63 caractères, d’après la [section 2.3.4 du RFC Domain Names Specification](https://datatracker.ietf.org/doc/html/rfc1035#section-2.3.4).

Après avoir configuré un nom d’hôte, vous pouvez activer l’isolation de sous-domaine pour renforcer la sécurité de {% data variables.product.product_location %}. Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/guides/installation/enabling-subdomain-isolation/) ».

Pour plus d’informations sur les types de nom d’hôte pris en charge, consultez la [section 2.1 de la RFC HTTP](https://tools.ietf.org/html/rfc1123#section-2).

{% data reusables.enterprise_installation.changing-hostname-not-supported %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.hostname-menu-item %}
4. Tapez le nom d’hôte que vous souhaitez définir pour {% data variables.product.product_location %}.
  ![Champ permettant de définir un nom d’hôte](/assets/images/enterprise/management-console/hostname-field.png)
5. Pour tester les paramètres DNS et SSL du nouveau nom d’hôte, cliquez sur **Tester les paramètres de domaine**.
  ![Bouton Tester les paramètres de domaine](/assets/images/enterprise/management-console/test-domain-settings.png) {% data reusables.enterprise_management_console.test-domain-settings-failure %} {% data reusables.enterprise_management_console.save-settings %}

Pour atténuer diverses vulnérabilités de scripting intersite, nous vous recommandons d’activer l’isolation de sous-domaine pour {% data variables.product.product_location %} après avoir configuré un nom d’hôte. Pour plus d’informations, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/guides/installation/enabling-subdomain-isolation/) ».
