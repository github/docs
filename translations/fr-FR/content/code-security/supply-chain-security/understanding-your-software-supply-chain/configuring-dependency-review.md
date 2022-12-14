---
title: Configuration de la révision des dépendances
intro: Vous pouvez utiliser la révision des dépendances pour intercepter les vulnérabilités avant qu’elles ne soient ajoutées à votre projet.
miniTocMaxHeadingLevel: 3
shortTitle: Configure dependency review
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Advanced Security
  - Dependency review
  - Vulnerabilities
  - Dependencies
  - Pull requests
ms.openlocfilehash: b5e5ccb5107cd96d1a88f896fd46d5b948a365cd
ms.sourcegitcommit: c2aa10a61db44ee111c09565b6114dd5c97b6e2e
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163351'
---
## À propos de la vérification des dépendances

{% data reusables.dependency-review.feature-overview %}   

Pour plus d’informations, consultez « [À propos de la révision des dépendances](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review) » ou « [Examen des modifications de dépendances dans une demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-dependency-changes-in-a-pull-request) ».

## À propos de la configuration de la révision des dépendances

{% ifversion fpt %} La révision des dépendances est disponible dans tous les dépôts publics au sein de tous les produits et ne peut pas être désactivée. La révision des dépendances est disponible dans les dépôts privés appartenant aux organisations qui utilisent GitHub Enterprise Cloud et qui disposent d’une licence pour [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security). Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/configuring-dependency-review).

{% elsif ghec %} La révision des dépendances est incluse dans {% data variables.product.product_name %} pour les dépôts publics. Pour utiliser la révision des dépendances dans les dépôts privés appartenant aux organisations, vous devez disposer d’une licence pour [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) et le graphe de dépendances doit être activé.

{% data reusables.dependabot.enabling-disabling-dependency-graph-private-repo %}
1. Si {% data variables.product.prodname_GH_advanced_security %} n’est pas activé, cliquez sur **Activer** en regard de la fonctionnalité.
   ![Capture d’écran de la fonctionnalité de sécurité avancée de GitHub avec le bouton « Activer » en évidence](/assets/images/help/security/enable-ghas-private-repo.png)

{% elsif ghes or ghae %}

La révision des dépendances est disponible quand le graphe de dépendances est activé pour {% data variables.location.product_location %} et que {% data variables.product.prodname_advanced_security %} est activé pour l’organisation ou le dépôt.{% ifversion ghes %} Pour plus d’informations, consultez « [Activation de {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/enabling-github-advanced-security-for-your-enterprise) ».{% endif %}

### Vérification de l’activation du graphique des dépendances

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Sous « Configurer les fonctionnalités de sécurité et d’analyse », vérifiez si le graphique des dépendances est activé. 
1. Si le graphique des dépendances est activé, cliquez sur **Activer** en regard de « {% data variables.product.prodname_GH_advanced_security %} » pour activer {% data variables.product.prodname_advanced_security %}, y compris la révision des dépendances. Le bouton Activer est désactivé si votre entreprise n’a pas de licences disponibles pour {% data variables.product.prodname_advanced_security %}.{% ifversion ghes %} ![Capture d’écran des fonctionnalités de « Sécurité et analyse du code »](/assets/images/enterprise/3.4/repository/code-security-and-analysis-enable-ghas-3.4.png){% endif %}

{% endif %}

{% ifversion dependency-review-action-configuration %}
## À propos de la configuration de {% data variables.product.prodname_dependency_review_action %}

{% data reusables.dependency-review.dependency-review-action-overview %}

Les options de configuration suivantes sont disponibles.

| Option | Obligatoire | Usage |
|------------------|-------------------------------|--------|
| `fail-on-severity` | Facultatif | Définit le seuil de gravité (`low`, `moderate`, `high`, `critical`).</br>L’action échoue sur toutes les demandes de tirage qui introduisent des vulnérabilités du niveau de gravité spécifié ou supérieur. |
{%- ifversion dependency-review-action-licenses %} | `allow-licenses` | Facultatif | Contient une liste des licences autorisées. Vous trouverez les valeurs possibles pour ce paramètre dans la page [Licences](/rest/licenses) de la documentation de l’API.</br>L’action échoue sur les demandes de tirage qui introduisent des dépendances à des licences qui ne correspondent pas à la liste.|{% endif %} {%- ifversion dependency-review-action-licenses %} | `deny-licenses` | Facultatif | Contient une liste des licences interdites. Vous trouverez les valeurs possibles pour ce paramètre dans la page [Licences](/rest/licenses) de la documentation de l’API.</br>L’action échoue sur les demandes de tirage (pull request) qui introduisent des dépendances avec des licences correspondant à list.|{% endif %}{% ifversion dependency-review-action-fail-on-scopes %} `fail-on-scopes` || Facultatifl | Contient une liste de chaînes représentant les environnements de build que vous souhaitez prendre en charge (`development`, `runtime`, `unknown`). </br>L’action échoue sur les demandes de tirage (pull request) qui introduisent des vulnérabilités dans les étendues correspondant à list.|{% endif %} | `allow-ghsas` | Facultatif | Contient une liste d’ID {% data variables.product.prodname_advisory_database %} qui peuvent être ignorés pendant la détection. Vous trouverez les valeurs possibles pour ce paramètre dans [{% data variables.product.prodname_advisory_database %}](https://github.com/advisories). | | `config-file` | Facultatif | Spécifie un chemin d'accès à un fichier de configuration. Le fichier de configuration peut être un fichier local dans le référentiel ou un fichier situé dans un référentiel externe.| | `external-repo-token` | Facultatif | Spécifie un jeton pour extraire le fichier de configuration, si le fichier réside dans un référentiel externe privé. Le jeton doit disposer d’un accès en lecture au référentiel.|

{% ifversion dependency-review-action-licenses %} {% tip %}

**Conseil :** les options `allow-licenses` et `deny-licenses` sont mutuellement exclusives.

{% endtip %} {% endif %}

## Configuration de {% data variables.product.prodname_dependency_review_action %}

Il existe deux méthodes pour configurer {% data variables.product.prodname_dependency_review_action %} : 
- Incorporer les options de configuration dans votre fichier de workflow. 
- Référencer un fichier de configuration dans votre fichier de workflow.

Notez que tous les exemples utilisent un numéro de version court pour l’action (`v3`) au lieu d’un numéro de version SemVer (par exemple, `v3.0.8`). Cela garantit que vous utilisez la version mineure la plus récente de l’action.
### Utilisation de la configuration d’incorporation pour configurer {% data variables.product.prodname_dependency_review_action %}

1. Ajoutez un nouveau workflow YAML à votre dossier `.github/workflows`.   
   
   {% ifversion ghes %}Pour `runs-on`, l’étiquette par défaut est `self-hosted`. Vous pouvez remplacer l’étiquette par défaut par l’étiquette de l’un de vos exécuteurs. {% endif %}
  ```yaml{:copy}
  name: 'Dependency Review'
  on: [pull_request]

  permissions:
    contents: read

  jobs:
    dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
   ```
1. Spécifiez vos paramètres.   

   Cet exemple de fichier {% data variables.product.prodname_dependency_review_action %} illustre comment utiliser les options de configuration disponibles.
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
     contents: read

   jobs:
     dependency-review:
     {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
           # Possible values: "critical", "high", "moderate", "low" 
           fail-on-severity: critical
  {% ifversion dependency-review-action-licenses %}
           # You can only include one of these two options: `allow-licenses` and `deny-licences`
           # ([String]). Only allow these licenses (optional)
           # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           allow-licenses: GPL-3.0, BSD-3-Clause, MIT
           # ([String]). Block the pull request on these licenses (optional)
           # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
           deny-licenses: LGPL-2.0, BSD-2-Clause
  {% endif %}
           # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
           # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
           allow-ghsas: GHSA-abcd-1234-5679, GHSA-efgh-1234-5679
  {% ifversion dependency-review-action-fail-on-scopes %}
           # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
           # Possible values: "development", "runtime", "unknown"
           fail-on-scopes: development, runtime
  {% endif %}
   ```
### Utilisation d’un fichier de configuration pour configurer {% data variables.product.prodname_dependency_review_action %}

1. Ajoutez un nouveau workflow YAML à votre dossier `.github/workflows` et utilisez `config-file` pour préciser que vous utilisez un fichier de configuration.

   {% ifversion ghes %}Pour `runs-on`, l’étiquette par défaut est `self-hosted`. Vous pouvez remplacer l’étiquette par défaut par l’étiquette de l’un de vos exécuteurs. {% endif %}
   ```yaml{:copy}
   name: 'Dependency Review'
   on: [pull_request]

   permissions:
    contents: read

   jobs:
     dependency-review:
       {% ifversion ghes %}runs-on: self-hosted
       {% else %}runs-on: ubuntu-latest
       {% endif %}steps:
         - name: 'Checkout Repository'
           uses: {% data reusables.actions.action-checkout %}
         - name: Dependency Review
           uses: actions/dependency-review-action@v3
           with:
            # ([String]). Representing a path to a configuration file local to the repository or in an external repository.
            # Possible values: An absolute path to a local file or an external file.
            config-file: './.github/dependency-review-config.yml'   
            # Syntax for an external file: OWNER/REPOSITORY/FILENAME@BRANCH
            config-file: 'github/octorepo/dependency-review-config.yml@main'

            # ([Token]) Use if your configuration file resides in a private external repository.
            # Possible values: Any GitHub token with read access to the private external repository.  
            external-repo-token: 'ghp_123456789abcde'
   ```
1. Créez le fichier de configuration dans le chemin que vous avez spécifié.   

   Ce fichier d'exemple YAML illustre la manière dont vous pouvez utiliser les options de configuration disponibles. 
   ```yaml{:copy}
     # Possible values: "critical", "high", "moderate", "low" 
     fail-on-severity: critical
   {% ifversion dependency-review-action-licenses %}
     # You can only include one of these two options: `allow-licenses` and `deny-licences`
     # ([String]). Only allow these licenses (optional)
     # Possible values: Any `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     allow-licenses: 
       - GPL-3.0
       - BSD-3-Clause
       - MIT
      # ([String]). Block the pull request on these licenses (optional)
      # Possible values: Any  `spdx_id` value(s) from https://docs.github.com/en/rest/licenses 
     deny-licenses: 
       - LGPL-2.0
       - BSD-2-Clause
   {% endif %}
      # ([String]). Skip these {% data variables.product.prodname_advisory_database %} IDs during detection (optional)
      # Possible values: Any valid {% data variables.product.prodname_advisory_database %} ID from https://github.com/advisories  
     allow-ghsas: 
       - GHSA-abcd-1234-5679 
       - GHSA-efgh-1234-5679
   {% ifversion dependency-review-action-fail-on-scopes %}
      # ([String]). Block pull requests that introduce vulnerabilities in the scopes that match this list (optional)
      # Possible values: "development", "runtime", "unknown"
     fail-on-scopes: 
       - development 
       - runtime
  {% endif %}
  ```
Pour plus d’informations sur les options de configuration, consultez [`dependency-review-action`](https://github.com/actions/dependency-review-action#readme).
{% endif %}
