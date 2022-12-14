---
title: "Bien démarrer avec GitHub\_Packages pour votre entreprise"
shortTitle: Getting started with GitHub Packages
intro: 'Vous pouvez commencer à utiliser {% data variables.product.prodname_registry %} sur {% data variables.product.product_location %} en activant la fonctionnalité, en configurant le stockage tiers, en configurant les écosystèmes que vous souhaitez prendre en charge et en mettant à jour votre certificat TLS.'
redirect_from:
  - /enterprise/admin/packages/enabling-github-packages-for-your-enterprise
  - /admin/packages/enabling-github-packages-for-your-enterprise
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Packages
ms.openlocfilehash: 2389eba768a8b2f865165b43dde0e1b6381c6ae7
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '146199961'
---
{% data reusables.package_registry.packages-cluster-support %}

## Étape 1 : Vérifier si {% data variables.product.prodname_registry %} est disponible pour votre entreprise

{% data variables.product.prodname_registry %} est disponible dans {% data variables.product.prodname_ghe_server %} 3.0 et versions supérieures. Si vous utilisez une version antérieure de {% data variables.product.prodname_ghe_server %}, vous devez effectuer une mise à niveau pour utiliser {% data variables.product.prodname_registry %}. Pour plus d’informations sur la mise à niveau de votre instance de {% data variables.product.prodname_ghe_server %}, consultez « [À propos des mises à niveau vers de nouvelles mises en production](/admin/overview/about-upgrades-to-new-releases) ».
## Étape 2 : Activer {% data variables.product.prodname_registry %} et configurer le stockage externe

{% data variables.product.prodname_registry %} sur {% data variables.product.prodname_ghe_server %} utilise un stockage blob externe pour stocker vos packages.

Après avoir activé {% data variables.product.prodname_registry %} pour {% data variables.product.product_location %}, vous devez préparer votre compartiment de stockage tiers. La quantité de stockage nécessaire dépend de votre utilisation de {% data variables.product.prodname_registry %} et les instructions d’installation peuvent varier selon le fournisseur de stockage.

Fournisseurs de stockage externes pris en charge
- Amazon Web Services (AWS) S3 {% ifversion ghes %}
- Stockage Blob Azure {% endif %}
- MinIO

Pour activer {% data variables.product.prodname_registry %} et configurer le stockage tiers, consultez :
  - « [Activation de GitHub Packages avec AWS](/admin/packages/enabling-github-packages-with-aws) »{% ifversion ghes %}
  - « [Activation de GitHub Packages avec Stockage Blob Azure](/admin/packages/enabling-github-packages-with-azure-blob-storage) »{% endif %}
  - « [Activation de GitHub Packages avec MinIO](/admin/packages/enabling-github-packages-with-minio) »

## Étape 3 : Spécifier les écosystèmes de packages à prendre en charge sur votre instance

Choisissez les écosystèmes de packages que vous souhaitez activer, désactiver ou définir en lecture seule sur {% data variables.product.product_location %}. Les options disponibles sont {% ifversion ghes > 3.4 %}{% data variables.product.prodname_container_registry %}, {% endif %}Docker, RubyGems, npm, Apache Maven, Gradle et NuGet.  Pour plus d’informations, consultez « [Configuration de la prise en charge de l’écosystème de packages pour votre entreprise](/enterprise/admin/packages/configuring-package-ecosystem-support-for-your-enterprise) ».

## Étape 4 : Vérifiez que vous disposez d’un certificat TLS pour l’URL hôte de votre package si nécessaire

Si l’isolation de sous-domaine est activée pour {% data variables.product.product_location %}, vous devez créer et charger un certificat TLS qui autorise l’URL hôte du package pour chaque écosystème que vous souhaitez utiliser, par exemple `{% data reusables.package_registry.container-registry-hostname %}`. Vérifiez que chaque URL hôte de package inclut `https://`.

  Vous pouvez créer le certificat manuellement ou utiliser _Let’s Encrypt_. Si vous utilisez déjà _Let’s Encrypt_, vous devez demander un nouveau certificat TLS après l’activation de {% data variables.product.prodname_registry %}. Pour plus d’informations sur les URL hôtes de packages, consultez « [Activation de l’isolation de sous-domaine](/enterprise/admin/configuration/enabling-subdomain-isolation) ». Pour plus d’informations sur le chargement de certificats TLS vers {% data variables.product.product_name %}, consultez « [Configuration de TLS](/enterprise/admin/configuration/configuring-tls) ».

## Étape 5 : rechercher et renommer des noms réservés

Si vous souhaitez utiliser l’écosystème Docker avec l’isolation de sous-domaine désactivée, vous **devez** commencer par renommer tout utilisateur ou organisation nommé `v2` sur {% data variables.product.product_location %} avant d’activer la prise en charge de l’écosystème Docker dans {% data variables.enterprise.management_console %}. Docker utilise un nom de compte `v2` pour gérer les conflits de chemin d’accès avec l’API Docker. Une fois la prise en charge du registre Docker activée, vous ne pouvez plus utiliser ce nom.

Vous pouvez afficher la liste complète des connexions réservées à une utilisation interne en accédant à la page « Connexions réservées » dans le tableau de bord d’administrateur du site. Pour plus d’informations, consultez « [Connexions réservées](/admin/configuration/configuring-your-enterprise/site-admin-dashboard#reserved-logins). »
