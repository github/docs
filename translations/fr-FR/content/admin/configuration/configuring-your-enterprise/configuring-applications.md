---
title: Configuration d’applications
intro: 'Vous pouvez configurer les paramètres d’application internes pour {% data variables.product.product_location %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-applications
  - /enterprise/admin/configuration/configuring-applications
  - /admin/configuration/configuring-applications
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
ms.openlocfilehash: bcc51bdabb5dc0b5ecdd4f77db9246a60c8df496
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106958'
---
## Ajustement de la mise en cache d’images

Vous pouvez choisir la durée pendant laquelle {% data variables.product.product_location %} met en cache les avatars. L’augmentation de la durée de mise en cache augmente d’autant la durée de chargement de l’avatar d’un utilisateur. Configurer la durée de mise en cache avec une valeur trop faible peut surcharger les processus de travail de {% data variables.product.product_location %}. 

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
3. Dans la barre latérale de gauche, cliquez sur **Applications**.
![Onglet Applications dans la barre latérale des paramètres](/assets/images/enterprise/management-console/sidebar-applications.png)
4. Sous « Durée de mise en cache des images d’avatar (secondes) », tapez la durée en secondes durant laquelle vous voulez que {% data variables.product.product_location %} mette en cache les images d’avatar.
![Champ de formulaire de mise en cache d’images d’avatar](/assets/images/enterprise/management-console/add-image-caching-value-field.png) {% data reusables.enterprise_management_console.save-settings %}
