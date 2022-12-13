---
title: Gestion des paramètres de sécurité et d’analyse pour votre organisation
intro: 'Vous pouvez contrôler les fonctionnalités qui sécurisent et analysent le code des projets de votre organisation sur {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107700'
---
## À propos de la gestion des paramètres de sécurité et d’analyse

{% data variables.product.prodname_dotcom %} peut vous aider à sécuriser les dépôts dans votre organisation. Vous pouvez gérer les fonctionnalités de sécurité et d’analyse pour tous les dépôts existants ou nouveaux que les membres créent dans votre organisation. {% ifversion ghec %}Si vous disposez d’une licence pour {% data variables.product.prodname_GH_advanced_security %}, vous pouvez également gérer l’accès à ces fonctionnalités. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Les organisations qui utilisent {% data variables.product.prodname_ghe_cloud %} avec une licence pour {% data variables.product.prodname_GH_advanced_security %} peuvent également gérer l’accès à ces fonctionnalités. Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## Affichage des paramètres de sécurité et d’analyse

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

La page affichée vous permet d’activer ou de désactiver toutes les fonctionnalités de sécurité et d’analyse pour les dépôts de votre organisation.

{% ifversion ghec %}Si votre organisation appartient à une entreprise avec une licence pour {% data variables.product.prodname_GH_advanced_security %}, la page contient également des options permettant d’activer et de désactiver les fonctionnalités de {% data variables.product.prodname_advanced_security %}. Les dépôts qui utilisent {% data variables.product.prodname_GH_advanced_security %} sont listés en bas de la page.{% endif %}

{% ifversion ghes %}Si vous avez une licence pour {% data variables.product.prodname_GH_advanced_security %}, la page contient également des options permettant d’activer et de désactiver les fonctionnalités de {% data variables.product.prodname_advanced_security %}. Les dépôts qui utilisent {% data variables.product.prodname_GH_advanced_security %} sont listés en bas de la page.{% endif %}

{% ifversion ghae %} La page contient également des options permettant d’activer et de désactiver les fonctionnalités de {% data variables.product.prodname_advanced_security %}. Les dépôts qui utilisent {% data variables.product.prodname_GH_advanced_security %} sont listés en bas de la page.{% endif %}

## Activation ou désactivation d’une fonctionnalité pour tous les référentiels existants

Vous pouvez activer ou désactiver des fonctionnalités pour tous les dépôts. {% ifversion fpt or ghec %}L’impact de vos modifications sur les dépôts de votre organisation est déterminé par leur visibilité :

- **Graphe des dépendances** : vos modifications affectent seulement les dépôts privés, car la fonctionnalité est toujours activée pour les dépôts publics.
- **{% data variables.product.prodname_dependabot_alerts %}**  : vos modifications affectent tous les dépôts.
- **{% data variables.product.prodname_dependabot_security_updates %}**  : vos modifications affectent tous les dépôts.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}**  : vos modifications affectent seulement les dépôts privés, car {% data variables.product.prodname_GH_advanced_security %} et les fonctionnalités associées sont toujours activés pour les dépôts publics.
- **{% data variables.product.prodname_secret_scanning_caps %}**  : vos modifications affectent les dépôts où {% data variables.product.prodname_GH_advanced_security %} est également activé. Cette option contrôle si {% data variables.product.prodname_secret_scanning_GHAS %} est ou non activé. {% data variables.product.prodname_secret_scanning_partner_caps %} s’exécute toujours sur tous les dépôts publics.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

**Remarque :** Si vous rencontrez une erreur indiquant « GitHub Advanced Security ne peut pas être activé en raison d’un paramètre de stratégie pour l’organisation », contactez votre administrateur d’entreprise et demandez-lui de modifier la stratégie GitHub Advanced Security pour votre entreprise. Pour plus d’informations, consultez « [Application de stratégies pour Advanced Security dans votre entreprise](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise) ».
{% endnote %} {% endif %}

1. Accédez aux paramètres de sécurité et d’analyse pour votre organisation. Pour plus d’informations, consultez « [Affichage des paramètres de sécurité et d’analyse](#displaying-the-security-and-analysis-settings) ».
2. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, cliquez sur **Désactiver tout** ou **Activer tout**. {% ifversion ghes or ghec %}Le contrôle pour « {% data variables.product.prodname_GH_advanced_security %} » est désactivé si vous n’avez aucun siège disponible dans votre licence {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% ifversion fpt %} ![Bouton « Activer tout » ou « Désactiver tout » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} ![Bouton « Activer tout » ou « Désactiver tout » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) {% endif %} {% ifversion ghes %} ![Bouton « Activer tout » ou « Désactiver tout » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %} ![Bouton « Activer tout » ou « Désactiver tout » pour les fonctionnalités « Configurer la sécurité et l’analyse »](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Si vous le souhaitez, activez la fonctionnalité par défaut pour les nouveaux dépôts dans votre organisation.
   {% ifversion fpt or ghec %} ![Bouton « Activer par défaut » pour les nouveaux dépôts](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Cliquez sur **Désactiver la FONCTIONNALITÉ** ou **Activer la FONCTIONNALITÉ** pour désactiver ou activer la fonctionnalité pour tous les dépôts dans votre organisation.
   {% ifversion fpt or ghec %} ![Bouton pour désactiver ou activer la fonctionnalité](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. Cliquez sur **Activer/Désactiver tout** ou **Activer/Désactiver pour les dépôts éligibles** pour confirmer la modification.
   ![Bouton permettant d’activer la fonctionnalité pour tous les dépôts éligibles dans l’organisation](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## Activation ou désactivation automatique d’une fonctionnalité quand de nouveaux dépôts sont ajoutés

1. Accédez aux paramètres de sécurité et d’analyse pour votre organisation. Pour plus d’informations, consultez « [Affichage des paramètres de sécurité et d’analyse](#displaying-the-security-and-analysis-settings) ».
2. Sous « Sécurité et analyse du code », à droite de la fonctionnalité, activez ou désactivez la fonctionnalité par défaut pour les nouveaux dépôts{% ifversion fpt or ghec %} ou pour tous les nouveaux dépôts privés{% endif %} dans votre organisation.
   {% ifversion fpt or ghec %} ![Capture d’écran d’une case à cocher pour activer une fonctionnalité pour les nouveaux dépôts](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![Capture d’écran d’une case à cocher pour activer une fonctionnalité pour les nouveaux dépôts](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![Capture d’écran d’une case à cocher pour activer une fonctionnalité pour les nouveaux dépôts](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## Autoriser {% data variables.product.prodname_dependabot %} à accéder aux dépendances privées

{% data variables.product.prodname_dependabot %} peut vérifier les références de dépendance obsolètes dans un projet et générer automatiquement une demande de tirage pour les mettre à jour. Pour cela, {% data variables.product.prodname_dependabot %} doit avoir accès à tous les fichiers de dépendance ciblés. En règle générale, les mises à jour de version échouent si une ou plusieurs dépendances sont inaccessibles. Pour plus d’informations, consultez « [À propos des mises à jour de version de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates) ».

Par défaut, {% data variables.product.prodname_dependabot %} ne peut pas mettre à jour les dépendances qui se trouvent dans des dépôts privés ou des registres de packages privés. Cependant, si une dépendance se trouve dans un dépôt {% data variables.product.prodname_dotcom %} privé au sein de la même organisation que le projet qui utilise cette dépendance, vous pouvez autoriser {% data variables.product.prodname_dependabot %} à mettre à jour correctement la version en lui donnant accès au dépôt hôte.

Si votre code dépend de packages dans un registre privé, vous pouvez autoriser {% data variables.product.prodname_dependabot %} à mettre à jour les versions de ces dépendances en configurant cela au niveau du dépôt. Pour cela, ajoutez des détails d’authentification au fichier _dependabot.yml_ pour le dépôt. Pour plus d’informations, consultez « [Options de configuration pour le fichier dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries) ».

Pour autoriser {% data variables.product.prodname_dependabot %} à accéder à un dépôt {% data variables.product.prodname_dotcom %} privé :

1. Accédez aux paramètres de sécurité et d’analyse pour votre organisation. Pour plus d’informations, consultez « [Affichage des paramètres de sécurité et d’analyse](#displaying-the-security-and-analysis-settings) ».
1. Sous « Accès de {% data variables.product.prodname_dependabot %} à un dépôt privé », cliquez sur **Ajouter des dépôts privés** ou **Ajouter des dépôts internes et privés**.
   ![Bouton Ajouter des dépôts](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Commencez à taper le nom du dépôt que vous souhaitez autoriser.
   ![Champ de recherche de dépôts avec une liste déroulante filtrée](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Cliquez sur le dépôt que vous souhaitez autoriser.

1. Si vous le souhaitez, pour supprimer un dépôt de la liste, à la droite du dépôt, cliquez sur {% octicon "x" aria-label="The X icon" %}.
   ![Bouton « X » pour supprimer un dépôt](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## Suppression de l’accès à {% data variables.product.prodname_GH_advanced_security %} dans des dépôts individuels d’une organisation

Vous pouvez gérer l’accès aux fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour un dépôt à partir de son onglet « Paramètres ». Pour plus d’informations, consultez « [Gestion des paramètres de sécurité et d’analyse pour votre dépôt](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository) ». Cependant, vous pouvez aussi désactiver les fonctionnalités de {% data variables.product.prodname_GH_advanced_security %} pour un dépôt à partir de l’onglet « Paramètres » pour l’organisation.

1. Accédez aux paramètres de sécurité et d’analyse pour votre organisation. Pour plus d’informations, consultez « [Affichage des paramètres de sécurité et d’analyse](#displaying-the-security-and-analysis-settings) ».
1. Pour voir la liste de tous les dépôts de votre organisation avec {% data variables.product.prodname_GH_advanced_security %} activé, faites défiler jusqu’à la section « Dépôts {% data variables.product.prodname_GH_advanced_security %} ».
  ![Section Dépôts {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) Le tableau liste le nombre de commiteurs uniques pour chaque dépôts. C’est le nombre de sièges que vous pouvez libérer sur votre licence en supprimant l’accès à {% data variables.product.prodname_GH_advanced_security %}. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) ».
1. Pour supprimer l’accès à {% data variables.product.prodname_GH_advanced_security %} d’un dépôt et libérer des sièges utilisés par tous des commiteurs qui sont uniques au dépôt, cliquez sur le {% octicon "x" aria-label="X symbol" %} adjacent.
1. Dans la boîte de dialogue de confirmation, cliquez sur **Supprimer le dépôt** pour supprimer l’accès aux fonctionnalités de {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Remarque :** Si vous supprimez l’accès à {% data variables.product.prodname_GH_advanced_security %} pour un dépôt, vous devez communiquer avec l’équipe de développement concernée afin qu’ils sachent que la modification était intentionnelle. Ceci garantit qu’ils ne perdent pas de temps à déboguer des exécutions d’analyse du code en échec.

{% endnote %}

{% endif %}

## Pour aller plus loin

- « [Sécurisation de votre dépôt](/code-security/getting-started/securing-your-repository) »{% ifversion not fpt %}
- « [À propos de l’analyse des secrets](/github/administering-a-repository/about-secret-scanning) »{% endif %}{% ifversion not ghae %}
- « [À propos du graphe de dépendances](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph) »{% endif %}
- « [À propos de la sécurité de la chaîne d’approvisionnement](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security) »
