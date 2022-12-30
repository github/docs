---
title: Utilisation de la dernière version des actions groupées officielles
intro: 'Vous pouvez mettre à jour les actions regroupées avec votre entreprise, ou utiliser les actions directement à partir de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
  - GitHub Connect
redirect_from:
  - /admin/github-actions/using-the-latest-version-of-the-official-bundled-actions
shortTitle: Use the latest bundled actions
ms.openlocfilehash: a86c731602bc39cc35fbff823ebdbfbdf2dec2c9
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107028'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Votre instance d’entreprise comprend un certain nombre d’actions intégrées dont vous pouvez vous servir dans vos workflows. Pour plus d’informations sur les actions groupées, consultez « [Actions groupées officielles de votre instance d’entreprise](/admin/github-actions/about-using-actions-in-your-enterprise#official-actions-bundled-with-your-enterprise-instance) ».

Ces actions groupées sont un instantané des actions officielles qui se trouvent à un instant T sur https://github.com/actions. Autrement dit, il est possible que des versions plus récentes de ces actions soient disponibles. Vous pouvez utiliser l’outil `actions-sync` pour mettre à jour ces actions ou configurer {% data variables.product.prodname_github_connect %} pour autoriser l’accès aux actions les plus récentes sur {% data variables.product.prodname_dotcom_the_website %}. Les étapes de cette procédure sont décrites dans les sections suivantes.

## Utilisation `actions-sync` pour mettre à jour les actions groupées

Pour mettre à jour les actions groupées, vous pouvez utiliser l’outil `actions-sync` pour mettre à jour l’instantané. Pour plus d’informations sur l’utilisation de `actions-sync`, consultez « [Synchronisation manuelle des actions de {% data variables.product.prodname_dotcom_the_website %}](/admin/github-actions/manually-syncing-actions-from-githubcom) ».

## Utilisation de {% data variables.product.prodname_github_connect %} pour accéder aux actions les plus récentes

Vous pouvez utiliser {% data variables.product.prodname_github_connect %} pour autoriser {% data variables.product.product_name %} à utiliser les actions de {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Activation de l’accès automatique aux actions {% data variables.product.prodname_dotcom_the_website %} à l’aide de {% data variables.product.prodname_github_connect %}](/admin/github-actions/enabling-automatic-access-to-githubcom-actions-using-github-connect) ».

Une fois {% data variables.product.prodname_github_connect %} configuré, vous pouvez utiliser la version la plus récente d’une action en supprimant son dépôt local dans l’organisation `actions` de votre instance. Par exemple, si votre instance d’entreprise utilise la version `v1` de l’action `actions/checkout` et que vous devez utiliser `{% data reusables.actions.action-checkout %}` qui n’est pas disponible dans votre instance d’entreprise, effectuez les étapes suivantes pour pouvoir utiliser l’action `checkout` la plus récente de {% data variables.product.prodname_dotcom_the_website %} :

1. À partir d’un compte propriétaire d’entreprise de {% data variables.product.product_name %}, accédez au dépôt que vous souhaitez supprimer de l’organisation d’*actions* (en l’occurrence, `checkout`).
1. Par défaut, les administrateurs de site ne sont pas propriétaires de l’organisation d’*actions* groupées. Pour obtenir l’accès permettant de supprimer le dépôt `checkout`, vous devez utiliser les outils d’administration de site. Cliquez sur {% octicon "rocket" aria-label="The rocket ship" %} dans le coin supérieur droit d’une page du dépôt.
  ![Icône de fusée donnant accès aux paramètres d’administration de site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
1. Cliquez sur {% octicon "shield-lock" %} **Sécurité** pour obtenir une vue d’ensemble de la sécurité du dépôt.
  ![En-tête de sécurité du dépôt](/assets/images/enterprise/site-admin-settings/access-repo-security-info.png)
1. Sous « Accès privilégié », cliquez sur **Déverrouiller**.
  ![Bouton Déverrouiller](/assets/images/enterprise/site-admin-settings/unlock-priviledged-repo-access.png)
1. Sous **Raison**, tapez la raison du déverrouillage du dépôt, puis cliquez sur **Déverrouiller**.
  ![Boîte de dialogue de confirmation](/assets/images/enterprise/site-admin-settings/confirm-unlock-repo-access.png)
1. Maintenant que le dépôt est déverrouillé, vous pouvez quitter les pages d’administration de site et supprimer le dépôt dans l’organisation `actions`. En haut de la page, cliquez sur le nom du dépôt, en l’occurrence **checkout**, pour revenir à la page récapitulative.
  ![Lien de nom du dépôt](/assets/images/enterprise/site-admin-settings/display-repository-admin-summary.png)
1. Sous « Informations sur le dépôt », cliquez sur **Afficher le code** pour quitter les pages d’administration de site et afficher le dépôt `checkout`.
1. Supprimez le dépôt `checkout` dans l’organisation `actions`. Pour savoir comment supprimer un dépôt, consultez « [Suppression d’un dépôt](/github/administering-a-repository/deleting-a-repository) ».
  ![Lien Afficher le code](/assets/images/enterprise/site-admin-settings/exit-admin-page-for-repository.png)
1. Configurez le YAML de votre workflow pour utiliser `{% data reusables.actions.action-checkout %}`.
1. Chaque fois que votre workflow s’exécute, l’exécuteur utilise la version spécifiée de `actions/checkout` de {% data variables.product.prodname_dotcom_the_website %}.

   {% note %}

   **Remarque :** La première fois que l’action `checkout` est utilisée à partir de {% data variables.product.prodname_dotcom_the_website %}, l’espace de noms `actions/checkout` est automatiquement mis hors service sur {% data variables.location.product_location %}. Si vous voulez revenir à une utilisation de la copie locale de l’action, vous devez d’abord annuler la mise hors service de l’espace de noms. Pour plus d’informations, consultez « [Mise hors service automatique des espaces de noms pour les actions accessibles sur {% data variables.product.prodname_dotcom_the_website%}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#automatic-retirement-of-namespaces-for-actions-accessed-on-githubcom) ».

   {% endnote %}
