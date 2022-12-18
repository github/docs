---
title: Exportation des statistiques du serveur
shortTitle: Export Server Statistics
intro: 'Vous pouvez utiliser vos propres outils pour analyser votre utilisation de {% data variables.product.prodname_ghe_server %} au fil du temps en téléchargeant vos métriques {% data variables.product.prodname_server_statistics %} dans un fichier CSV ou JSON.'
versions:
  feature: server-statistics
redirect_from:
  - /early-access/github/analyze-how-your-team-works-with-server-statistics/exploring-server-statistics
ms.openlocfilehash: 4e8fa1d040303ec569d11a8a41708ede10b3e76e
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718164'
---
Vous pouvez télécharger les données des {% data variables.product.prodname_server_statistics %} des 365 derniers jours dans un fichier CSV ou JSON. Ces données, qui incluent des métriques agrégées sur les référentiels, les problèmes et les demandes de tirage (pull requests), peuvent vous aider à anticiper les besoins de votre organisation, à comprendre le fonctionnement de votre équipe et à mettre en évidence la valeur ajoutée que vous tirez de {% data variables.product.prodname_ghe_server %}. 

Avant de pouvoir télécharger ces données, vous devez activer les {% data variables.product.prodname_server_statistics %}. Pour plus d’informations, consultez « [Activation des {% data variables.product.prodname_server_statistics %} pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise) ». 

Pour afficher un aperçu des métriques disponibles en téléchargement, consultez « [À propos des {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics) ».

Pour télécharger ces métriques, vous devez être propriétaire d’une entreprise ou d’une organisation sur {% data variables.product.prodname_ghe_cloud %}.
  - Si {% data variables.product.product_location %} est connectée à un compte d’entreprise sur {% data variables.product.prodname_ghe_cloud %}, consultez « [Téléchargement de métriques à partir de votre compte d’entreprise](#downloading-metrics-from-your-enterprise-account) ».
  - Si {% data variables.product.product_location %} est connectée à une organisation sur {% data variables.product.prodname_ghe_cloud %}, consultez « [Téléchargement de métriques à partir de votre organisation](#downloading-metrics-from-your-organization) ».

Pour en savoir plus sur {% data variables.product.prodname_github_connect %}, consultez « [À propos de {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect) ».

## Téléchargement de métriques à partir de votre compte d’entreprise

1. En haut à droite de {% data variables.product.prodname_ghe_cloud %}, cliquez sur votre photo de profil, puis sur **Vos entreprises**.
  ![Menu déroulant dans lequel l’option « Vos entreprises » est sélectionnée](/assets/images/help/enterprises/enterprise-admin-account-settings.png)

2. En regard du compte d’entreprise souhaité, cliquez sur **Paramètres**.
  ![Bouton Paramètres en regard du compte d’administrateur d’entreprise](/assets/images/help/enterprises/enterprise-admin-account-settings-button.png)

3. Sur la gauche, cliquez sur **GitHub Connect**.
  ![Option GitHub Connect sous le compte d’administrateur d’entreprise](/assets/images//help/enterprises/enterprise-admin-github-connect.png)

{% data reusables.server-statistics.csv-download %}

## Téléchargement de métriques à partir de votre organisation

1. En haut à droite de {% data variables.product.prodname_ghe_cloud %}, cliquez sur votre photo de profil, puis sur **Vos organisations**.
  ![Menu déroulant dans lequel l’option « Vos organisations » est sélectionnée](/assets/images/help/enterprises/github-enterprise-cloud-organizations.png)

2. Dans la liste des organisations, en regard de l’organisation qui est connectée à {% data variables.product.product_location %}, cliquez sur **Paramètres**.
  ![Bouton Paramètres en regard de l’organisation {% data variables.product.prodname_ghe_cloud %}](/assets/images/help/enterprises/settings-for-ghec-org.png)

3. Sur la gauche, cliquez sur **GitHub Connect**.
  ![Option GitHub Connect sur la barre latérale gauche des paramètres d’un compte d’organisation](/assets/images/help/enterprises/github-connect-option-for-ghec-org.png)

{% data reusables.server-statistics.csv-download %}
