---
title: "Activation de GitHub\_Packages avec Stockage\_Blob Azure"
intro: 'Configurez {% data variables.product.prodname_registry %} en faisant de Stockage Blob Azure votre stockage externe.'
versions:
  ghes: '*'
type: tutorial
topics:
  - Enterprise
  - Packages
  - Storage
shortTitle: Enable Packages with Azure
ms.openlocfilehash: b851f698baba60323cbaaa69122cacdc92ec83c2
ms.sourcegitcommit: 3ece72cf2d90987575d369c44101d19d3bb06f76
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190386'
---
{% warning %}

**Avertissements :**
- Il est essentiel de définir les stratégies d’accès restrictives dont vous avez besoin pour votre compartiment de stockage, car {% data variables.product.company_short %} n’applique pas d’autorisations d’objet spécifiques ou de listes de contrôle d’accès (ACL) supplémentaires à la configuration de votre compartiment de stockage. Par exemple, si vous rendez votre compartiment public, les données du compartiment sont accessibles sur l’Internet public.
- Nous vous recommandons d’utiliser un compartiment dédié pour {% data variables.product.prodname_registry %}, séparé du compartiment que vous utilisez pour le stockage {% data variables.product.prodname_actions %}.
- Veillez à configurer le compartiment à utiliser à l’avenir. Nous vous déconseillons de modifier votre stockage après avoir commencé à utiliser {% data variables.product.prodname_registry %}.

{% endwarning %}

## Prérequis

Pour pouvoir activer et configurer {% data variables.product.prodname_registry %} sur {% data variables.location.product_location_enterprise %}, vous devez préparer votre compartiment Stockage Blob Azure. Pour préparer votre compartiment Stockage Blob Azure, nous vous recommandons de consulter les documents officiels correspondants sur le [site officiel de la documentation Stockage Blob Azure](https://docs.microsoft.com/en-us/azure/storage/blobs/).

## Activation de {% data variables.product.prodname_registry %} avec Stockage Blob Azure

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_site_admin_settings.packages-tab %} {% data reusables.package_registry.enable-enterprise-github-packages %}
1. Sous « Stockage de packages », sélectionnez **Stockage Blob Azure** et entrez le nom de votre conteneur Azure pour votre compartiment de stockage de packages ainsi que la chaîne de connexion Azure.

    - Vous devez créer un conteneur de stockage avant de définir le nom du conteneur et la chaîne de connexion.

  ![Zones pour le nom du conteneur de stockage d’objets blob et la chaîne de connexion Azure](/assets/images/help/package-registry/azure-blob-storage-settings.png)

  {% note %}

  **Remarque :** Vous pouvez trouver votre chaîne de connexion Azure en accédant au menu Clé d’accès dans votre compte de stockage Azure. 
  L’utilisation d’un jeton SAP ou d’une URL SAS en tant que chaîne de connexion n’est pas prise en charge actuellement.
  
  {% endnote %}

{% data reusables.enterprise_management_console.save-settings %}

## Étapes suivantes

{% data reusables.package_registry.next-steps-for-packages-enterprise-setup %}
