---
title: Révision des changements de dépendances dans une demande de tirage
intro: 'Si une demande de tirage contient des modifications de dépendances, vous pouvez afficher un résumé de ce qui a changé et déterminer s’il existe des vulnérabilités connues dans l’une des dépendances.'
product: '{% data reusables.gated-features.dependency-review %}'
versions:
  fpt: '*'
  ghes: '>= 3.2'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Pull requests
  - Dependency review
  - Advanced Security
  - Vulnerabilities
  - Dependencies
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-issues-and-pull-requests/reviewing-dependency-changes-in-a-pull-request
  - /github/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request
shortTitle: Review dependency changes
ms.openlocfilehash: 34cefbae8b7ccfd32773a47de2509a6eccc7a799
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106604'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Sign up for the dependency review beta" and "Reviewing dependency changes in a pull request".-->

## À propos de la vérification des dépendances

{% data reusables.dependency-review.feature-overview %}

{% ifversion ghec %} Avant de pouvoir utiliser une révision des dépendances dans un dépôt privé, vous devez activer le graphique de dépendance. Pour plus d’informations, consultez « [Exploration des dépendances d’un dépôt](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository) ».{% endif %}

{% ifversion ghes %} Avant de pouvoir utiliser une révision des dépendances, vous devez activer le graphe de dépendances et connecter {% data variables.location.product_location %} à {% data variables.product.prodname_dotcom_the_website %}. Pour plus d’informations, consultez « [Activation des alertes pour les dépendances vulnérables sur {% data variables.product.prodname_ghe_server %}](/admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server)."{% endif %}

La révision des dépendances vous permet d’effectuer un « shift-left ». Vous pouvez utiliser les informations prédictives fournies pour intercepter les dépendances vulnérables avant qu’elles atteignent la production. Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/about-dependency-review) ».

{% ifversion fpt or ghec or ghes > 3.5 or ghae > 3.5 %}

Vous pouvez utiliser {% data variables.product.prodname_dependency_review_action %} pour vous aider à appliquer des révisions de dépendances sur les demandes de tirage (pull requests) dans votre référentiel. {% data reusables.dependency-review.dependency-review-action-overview %}

{% ifversion dependency-review-action-configuration %} Vous pouvez configurer {% data variables.product.prodname_dependency_review_action %} pour mieux répondre à vos besoins en spécifiant le type de vulnérabilité de dépendance que vous souhaitez intercepter. Pour plus d’informations, consultez « [Configuration de l’évaluation des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review#configuring-the-dependency-review-github-action) ». {% endif %}

{% endif %}
## Révision des dépendances dans une demande de tirage

{% data reusables.repositories.sidebar-pr %} {% data reusables.repositories.choose-pr-review %} {% data reusables.repositories.changed-files %}

1. Si la demande de tirage contient de nombreux fichiers, utilisez le menu déroulant **Filtre de fichiers** pour écarter les fichiers qui n’enregistrent pas de dépendances. Cela vous aidera à concentrer votre révision sur les modifications de dépendances.

   ![Menu du filtre de fichiers](/assets/images/help/pull_requests/file-filter-menu-json.png) La révision des dépendances fournit une vue plus claire de ce qui a changé dans des fichiers de verrouillage volumineux, où la différence de source n’est pas rendue par défaut.

  {% note %}

   **Remarque :** des différences enrichies de révision des dépendances ne sont pas disponibles pour les fichiers JavaScript statiques validés comme `jquery.js`.

   {% endnote %}

1. À droite de l’en-tête d’un fichier manifeste ou d’un fichier de verrouillage, affichez la révision des dépendances en cliquant sur le bouton des différences enrichies **{% octicon "file" aria-label="The rich diff icon" %}** .

   ![Bouton des différences enrichies](/assets/images/help/pull_requests/dependency-review-rich-diff.png)

2. Vérifiez les dépendances répertoriées dans la révision des dépendances.

   ![Avertissements de vulnérabilité dans une révision des dépendances](/assets/images/help/pull_requests/dependency-review-vulnerability.png)

   Toutes les dépendances ajoutées ou modifiées qui présentent des vulnérabilités sont répertoriées en premier, classées par gravité, puis par nom de dépendance. Cela signifie que les dépendances dont la gravité est la plus élevée figurent toujours en haut d’une révision des dépendances. Les autres dépendances sont répertoriées dans l’ordre alphabétique des noms de dépendance.

   L’icône en regard de chaque dépendance indique si celle-ci a été ajoutée (<span style="color:#22863a">{% octicon "diff-added" aria-label="Dependency added icon" %}</span>), mise à jour (<span style="color:#b08800">{% octicon "diff-modified" aria-label="Dependency modified icon" %}</span>) ou supprimée (<span style="color:#cb2431">{% octicon "diff-removed" aria-label="Dependency removed icon" %}</span>) dans cette demande de tirage.

   Les informations sont les suivantes :

   * Version, ou plage de versions, de la dépendance nouvelle, mise à jour ou supprimée.
   * Pour une version spécifique d’une dépendance :
      * Âge de cette mise en production de la dépendance.
      * Nombre de projets dépendants de ce logiciel. Ces informations sont extraites du graphique de dépendance. La vérification du nombre de dépendants peut vous aider à éviter d’ajouter accidentellement la mauvaise dépendance.
      * Licence utilisée par cette dépendance si cette information est disponible. Ceci est utile si vous voulez éviter que du code avec certaines licences soit utilisé dans votre projet.

   Quand une dépendance a une vulnérabilité connue, le message d’avertissement les informations suivantes :

   * Brève description de la vulnérabilité.
   * Numéro d’identification des vulnérabilités et expositions courantes (CVE) ou {% data variables.product.prodname_security_advisories %} (GHSA). Vous pouvez cliquer sur cet ID pour en savoir plus sur la vulnérabilité.
   * Gravité de la vulnérabilité.
   * Version de la dépendance dans laquelle la vulnérabilité a été corrigée. Si vous examinez une demande de tirage pour quelqu’un, vous pourriez demander au contributeur de mettre à jour la dépendance vers la version corrigée ou une mise en production ultérieure.

{% data reusables.repositories.return-to-source-diff %}
