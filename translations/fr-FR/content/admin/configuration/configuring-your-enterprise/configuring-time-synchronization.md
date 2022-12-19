---
title: Configuration de la synchronisation de l’heure
intro: '{% data variables.product.prodname_ghe_server %} synchronise automatiquement son horloge en se connectant aux serveurs NTP. Vous pouvez définir les serveurs NTP à utiliser pour synchroniser l’horloge, ou utiliser les serveurs NTP par défaut.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145103013'
---
## Modification des serveurs NTP par défaut

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. Dans la barre latérale de gauche, cliquez sur **Heure**.
    ![Bouton Heure dans la barre latérale de la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/sidebar-time.png)
3. Sous « Serveur NTP principal », tapez le nom d’hôte du serveur NTP principal. Sous « Serveur NTP secondaire », tapez le nom d’hôte du serveur NTP secondaire.
    ![Champs pour les serveurs NTP principal et secondaire dans la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. Au bas de la page, cliquez sur **Enregistrer les paramètres**.
    ![Bouton Enregistrer les paramètres dans la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Attendez la fin de l’exécution de la configuration.

## Correction d’un écart temporel important

Le protocole NTP corrige constamment les petites différences de synchronisation horaire. Vous pouvez utiliser l’interpréteur de commandes d’administration pour synchroniser immédiatement l’heure.

{% note %}

**Remarques :**
 - Vous ne pouvez pas modifier le fuseau UTC (Temps universel coordonné).
 - Vous devez éviter que votre hyperviseur tente de régler l’horloge de la machine virtuelle. Pour plus d’informations, consultez la documentation fournie par le fournisseur de virtualisation.

{% endnote %}

- Utilisez la commande `chronyc` pour synchroniser le serveur avec le serveur NTP configuré. Par exemple :

```shell
$ sudo chronyc -a makestep
```
