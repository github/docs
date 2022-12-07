---
title: À propos de l’utilisation de vos données par GitHub
redirect_from:
  - /articles/about-github-s-use-of-your-data
  - /articles/about-githubs-use-of-your-data
  - /github/understanding-how-github-uses-and-protects-your-data/about-githubs-use-of-your-data
intro: '{% data variables.product.product_name %} utilise les données de votre dépôt pour vous connecter à des outils, des personnes, des projets et des informations appropriés.'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Policy
  - Legal
shortTitle: GitHub's use of your data
ms.openlocfilehash: f49f90a981b92d2c7d5d34b0fac28ec05adbadd0
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128869'
---
## À propos de l’utilisation de vos données par {% data variables.product.product_name %}

{% data variables.product.product_name %} agrège les métadonnées et analyse les modèles de contenu afin de fournir des insights généralisés dans le produit. Il utilise des données provenant de dépôts publics, ainsi que des métadonnées et des données agrégées provenant de dépôts privés lorsque le propriétaire d’un dépôt a choisi de partager les données avec {% data variables.product.product_name %} en activant le graphe des dépendances. Si vous activez le graphe des dépendances pour un dépôt privé, {% data variables.product.product_name %} effectue une analyse en lecture seule de ce dépôt privé spécifique.

Si vous activez l’utilisation des données pour un dépôt privé, nous continuerons à traiter vos données privées, votre code source ou vos secrets commerciaux comme confidentiels et privés, conformément à nos [Conditions d’utilisation](/free-pro-team@latest/github/site-policy/github-terms-of-service). Les informations que nous apprenons proviennent uniquement des données agrégées. Pour plus d’informations, consultez « [Gestion des paramètres d’utilisation des données pour votre dépôt privé](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository) ».

{% data reusables.repositories.about-github-archive-program %} Pour plus d’informations, consultez « [À propos de l’archivage du contenu et des données sur {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program) ».

{% data reusables.user-settings.export-data %} Pour plus d’informations, consultez « [Demande d’archive des données de votre compte personnel](/articles/requesting-an-archive-of-your-personal-account-s-data) ».

Nous annoncerons de nouvelles fonctionnalités importantes qui utilisent des métadonnées ou des données agrégées sur le [blog {% data variables.product.prodname_dotcom %}](https://github.com/blog).

## Comment les données améliorent les recommandations en matière de sécurité

Comme exemple de la façon dont vos données peuvent être utilisées, nous pouvons détecter une faille de sécurité dans les dépendances de votre dépôt public et vous en avertir. Pour plus d’informations, consultez « [À propos des {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies) ».

Pour détecter des failles de sécurité potentielles, {% data variables.product.product_name %} analyse le contenu de votre fichier manifeste de dépendance pour dresser la liste des dépendances de votre projet.

{% data variables.product.product_name %} apprend également des modifications que vous apportez à votre manifeste de dépendance. Par exemple, si vous mettez à niveau une dépendance vulnérable vers une version sécurisée après avoir reçu une alerte de sécurité et que d’autres personnes font de même, {% data variables.product.product_name %} apprend à corriger la vulnérabilité et peut recommander un correctif similaire aux dépôts affectés.

## Confidentialité et partage de données

Les données de dépôt privé sont analysées par la machine et ne sont jamais lues par le personnel de {% data variables.product.product_name %}. Aucun œil humain ne verra jamais le contenu de vos dépôts privés, sauf dans les cas décrits dans nos [Conditions d’utilisation](/free-pro-team@latest/github/site-policy/github-terms-of-service#3-access).

Vos données personnelles individuelles ou de dépôt ne seront pas partagées avec des tiers. Nous pouvons partager avec nos partenaires des données agrégées tirées de notre analyse.
