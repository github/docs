---
title: Génération d’un contrôle d’intégrité pour votre entreprise
intro: 'Vous pouvez obtenir des informations sur l’intégrité générale et les requêtes Git et API de {% data variables.product.product_location %} en générant un contrôle d’intégrité.'
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
product: '{% data reusables.gated-features.generated-health-checks %}'
ms.openlocfilehash: f02fc61f050fc01a69f9fafe2dcdc95d91322dfa
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '146460019'
---
{% note %}

**Remarque :** La fonctionnalité de génération d’un contrôle d’intégrité est actuellement en version bêta pour {% data variables.product.prodname_ghe_server %} et est susceptible d’évoluer.

{% endnote %}

## À propos des contrôles d’intégrité générés

Vous pouvez créer un bundle de support pour {% data variables.product.product_location %} qui contient un grande quantité de données, comme des fichiers de diagnostic et des fichiers journaux. Pour faciliter l’analyse et l’interprétation de ces données, vous pouvez générer un contrôle d’intégrité. Pour plus d’informations sur les bundles de support, consultez « [Fournir des données au {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles) ».

Un contrôle d’intégrité fournit les informations suivantes sur {% data variables.product.product_location %}.
- Insights sur l’état d’intégrité général de {% data variables.product.product_location %}, comme l’état de mise à niveau, l’espace de stockage et le nombre de licences utilisées
- Section de sécurité axée sur l’isolation des sous-domaines et l’authentification utilisateur
- Analyse des demandes Git, avec des détails sur les dépôts les plus actifs et les utilisateurs Git 
- Analyse des demandes d’API, notamment les heures le pointe, les points de terminaison les plus sollicités et les appelants les plus actifs

Si vous souhaitez générer un contrôle d’intégrité pour {% data variables.product.prodname_ghe_cloud %}, contactez {% data variables.contact.github_support %}. Pour plus d’informations, consultez la page « [Création d’un ticket de support](/support/contacting-github-support/creating-a-support-ticket) ».

## Génération d’un contrôle d’intégrité

Avant de pouvoir générer un contrôle d’intégrité, vous devez créer un bundle de support. Pour plus d’informations, consultez « [Fournir des données à {% data variables.contact.github_support %}](/support/contacting-github-support/providing-data-to-github-support#creating-and-sharing-support-bundles) ».

1. Accédez au [{% data variables.contact.support_portal %}](https://support.github.com/).
2. Dans le coin supérieur droit de la page, cliquez sur **Premium**.

   ![Capture d’écran du lien « Premium » dans l’en-tête du portail de support GitHub.](/assets/images/enterprise/support/support-portal-header-premium.png)
   
3. À droite de **Contrôles d’intégrité**, cliquez sur **Demander un contrôle d’intégrité**.

   ![Capture d’écran du bouton « Demander un contrôle d’intégrité ».](/assets/images/enterprise/support/support-portal-request-health-check.png)
   
4. Sous « Sélectionner un compte d’entreprise », sélectionnez le menu déroulant, puis cliquez sur un compte d’entreprise.

   ![Capture d’écran du menu déroulant « compte d’entreprise ».](/assets/images/enterprise/support/health-check-dialog-ea.png)
   
5. Sous « Charger un bundle de support », cliquez sur **Choisir un fichier** et choisissez un fichier à charger. Cliquez ensuite sur **Demander un contrôle d’intégrité**.

   ![Capture d’écran des boutons « Choisir un fichier » et « Demander un contrôle d’intégrité ».](/assets/images/enterprise/support/health-check-dialog-choose-file.png)
   

Une fois que vous avez demandé un contrôle d’intégrité, un travail est planifié pour générer le contrôle d’intégrité. À l’issue de l’opération, dont la durée peut varier de plusieurs heures à un jour, le contrôle d’intégrité généré s’affiche dans la section « Contrôles d’intégrité » du {% data variables.contact.support_portal %}.

![Capture d’écran de la section Contrôles d’intégrité du {% data variables.contact.support_portal %}.](/assets/images/enterprise/support/support-portal-health-checks-section.png)
