---
title: Gestion des paramètres de sécurité et d’analyse pour votre dépôt
intro: 'Vous pouvez contrôler les fonctionnalités qui sécurisent et analysent le code de votre projet sur {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108685'
---
{% ifversion fpt or ghec %}
## Activation ou désactivation des fonctionnalités de sécurité et d’analyse pour les dépôts publics

Vous pouvez gérer un sous-ensemble de fonctionnalités de sécurité et d’analyse pour les dépôts publics. D’autres fonctionnalités sont activées définitivement, y compris l’analyse du graphique des dépendances et du secret.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, cliquez sur **Désactiver** ou **Activer**.
  ![Bouton « Activer » ou « Désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse » dans un référentiel public](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## Activation ou désactivation des fonctionnalités de sécurité et d’analyse{% ifversion fpt or ghec %} pour les dépôts privés{% endif %}

Vous pouvez gérer les fonctionnalités de sécurité et d’analyse de votre dépôt {% ifversion fpt or ghec %}privé ou interne {% endif %}. {% ifversion ghes or ghec %} Si votre organisation appartient à une entreprise avec une licence pour {% data variables.product.prodname_GH_advanced_security %} , les options supplémentaires sont disponibles. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec {% data variables.product.prodname_advanced_security %} ont des options supplémentaires disponibles. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, cliquez sur **Désactiver** ou **Activer**. {% ifversion not fpt %} Le contrôle de « {% data variables.product.prodname_GH_advanced_security %} » est désactivé si votre entreprise n’a pas de licences disponibles pour {% data variables.product.prodname_advanced_security %}.{% endif %} {% ifversion fpt %} ![Capture d’écran du bouton « Activer » ou « Désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Capture d’écran du bouton « Activer » ou « Désactiver » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![Capture d’écran du bouton « Activer » ou « Désactiver » les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  **Remarque :** Si vous désactivez {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}évaluation de la dépendance, {% endif %}{% data variables.product.prodname_secret_scanning %} et {% data variables.product.prodname_code_scanning %} sont désactivés. Tous les workflows, les chargements SARIF ou les appels d’API pour {% data variables.product.prodname_code_scanning %} échouent.
  {% endnote %} {% endif %}

  {% endif %}

  {% ifversion ghae %}
4. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, cliquez sur **Désactiver** ou **Activer**. Avant de pouvoir activer « {% data variables.product.prodname_secret_scanning %} » pour votre référentiel, vous devez d’abord activer {% data variables.product.prodname_GH_advanced_security %}.
   ![Activer ou désactiver {% data variables.product.prodname_GH_advanced_security %} ou {% data variables.product.prodname_secret_scanning %} pour votre référentiel ](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## Octroi de l’accès aux alertes de sécurité

Les alertes de sécurité d’un référentiel sont visibles par les personnes disposant d’un accès Administrateur au référentiel et, lorsque le référentiel appartient à une organisation, propriétaires d’une organisation. Vous pouvez donner aux équipes et aux personnes supplémentaires l’accès aux alertes.

{% note %}

Les propriétaires d’organisations et les administrateurs de référentiels peuvent accorder uniquement l’accès aux alertes de sécurité, telles que les alertes {% data variables.product.prodname_secret_scanning %} aux personnes ou aux équipes qui ont accès en écriture au référentiel.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Sous « Accès aux alertes », dans le champ de recherche, commencez à taper le nom de la personne ou de l’équipe que vous souhaitez trouver, puis cliquez sur un nom dans la liste des correspondances.
   {% ifversion fpt or ghec or ghes %} ![Champ de recherche pour accorder aux personnes ou aux équipes l’accès aux alertes de sécurité](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) {% endif %}
   
   {% ifversion ghae %} ![Champ de recherche pour accorder aux personnes ou aux équipes l’accès aux alertes de sécurité](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) {% endif %}
   
5. Cliquez sur **Save changes**.
   {% ifversion fpt or ghes or ghec %} ![Bouton « Enregistrer les modifications » pour les modifications apportées aux paramètres d’alerte de sécurité](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) {% endif %}
   
   {% ifversion ghae %} ![Bouton « Enregistrer les modifications » pour les modifications apportées aux paramètres d’alerte de sécurité](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) {% endif %}

## Suppression de l’accès aux alertes de sécurité

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Sous « Accéder aux alertes », à droite de la personne ou de l’équipe dont vous souhaitez supprimer l’accès, cliquez sur {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes %}  
   ![Bouton « x » pour supprimer l’accès d’une personne aux alertes de sécurité pour votre dépôt](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![Bouton « x » pour supprimer l’accès d’une personne aux alertes de sécurité pour votre dépôt](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. Cliquez sur **Save changes**.

## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »
- « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) »
