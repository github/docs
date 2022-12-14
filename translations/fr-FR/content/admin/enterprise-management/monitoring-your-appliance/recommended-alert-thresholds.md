---
title: Seuils d’alerte recommandés
intro: 'Vous pouvez configurer une alerte pour vous avertir des problèmes de ressources système avant qu’ils n’affectent les performances de votre appliance {% data variables.product.prodname_ghe_server %}.'
redirect_from:
  - /enterprise/admin/guides/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/about-recommended-alert-thresholds
  - /enterprise/admin/installation/recommended-alert-thresholds
  - /enterprise/admin/enterprise-management/recommended-alert-thresholds
  - /admin/enterprise-management/recommended-alert-thresholds
versions:
  ghes: '*'
type: reference
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
  - Storage
shortTitle: Recommended alert thresholds
ms.openlocfilehash: 73adc62a8a322666e08da01a76568c16ed18458c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145102962'
---
## Supervision du stockage

Nous vous recommandons de superviser les dispositifs de stockage racines et utilisateur et de configurer une alerte avec des valeurs qui autorisent un temps de réponse suffisant quand l’espace disque disponible devient faible.

| severity | Seuil |
| -------- | --------- |
| **Avertissement** | L’utilisation du disque dépasse 70 % du volume total disponible |
| **Critical** | L’utilisation du disque dépasse 85 % du volume total disponible |

Vous pouvez ajuster ces valeurs en fonction de la quantité totale de stockage allouée, des modèles de croissance historiques et du temps de réponse attendu. Nous vous recommandons de surallouer des ressources de stockage pour tenir compte de la croissance et éviter les temps d’arrêt nécessaires à l’allocation de capacités de stockage supplémentaires.

## Supervision de l’utilisation moyenne du processeur et de la charge

Bien qu’il soit normal que l’utilisation du processeur fluctue au gré des opérations Git gourmandes en ressources, nous vous recommandons de configurer une alerte pour une utilisation de processeur anormalement élevée, car les pics prolongés peuvent être le signe que votre instance est sous-provisionnée. Nous vous recommandons de superviser la moyenne de charge système de quinze minutes pour des valeurs proches ou supérieures au nombre de cœurs de processeur alloués à la machine virtuelle.

| severity | Seuil |
| -------- | --------- |
| **Avertissement** | La moyenne de charge de quinze minutes dépasse d’une fois le nombre de cœurs de processeur |
| **Critical** | La moyenne de charge de quinze minutes dépasse de deux fois le nombre de cœurs de processeur |

Nous vous recommandons aussi de superviser le temps d’« appropriation » de la virtualisation pour veiller à ce que d’autres machines virtuelles s’exécutant sur le même système hôte n’utilisent pas toutes les ressources de l’instance.

## Surveillance de l'utilisation de la mémoire

La quantité de mémoire physique allouée à {% data variables.product.product_location %} peut avoir un impact important sur les performances globales et la réactivité des applications. Le système a été conçu pour utiliser de façon intensive le cache de disque du noyau pour accélérer les opérations Git. Notre recommandation est que l’ensemble de travail RSS normal s’intègre dans les 50 % de la quantité totale de RAM disponible en période de pointe.

| severity | Seuil |
| -------- | --------- |
| **Avertissement**  | L’utilisation soutenue de RSS dépasse 50 % de la quantité totale de mémoire disponible |
| **Critical** | L’utilisation soutenue de RSS dépasse 70 % de la quantité totale de mémoire disponible |

Si la mémoire est épuisée, le tueur OOM du noyau tente de libérer des ressources de mémoire en tuant de force les processus d’application gourmands en RAM, ce qui peut entraîner une interruption du service. Nous vous recommandons d’allouer à la machine virtuelle plus de mémoire que nécessaire dans le cours normal des opérations.
