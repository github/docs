---
title: Configuration de l’analyse des secrets pour vos dépôts
intro: 'Vous pouvez configurer la façon dont {% data variables.product.prodname_dotcom %} analyse vos référentiels pour les secrets qui correspondent aux modèles de sécurité avancés.'
product: '{% data reusables.gated-features.secret-scanning %}'
permissions: 'People with admin permissions to a repository can enable {% data variables.product.prodname_secret_scanning_GHAS %} for the repository.'
redirect_from:
  - /github/administering-a-repository/configuring-secret-scanning-for-private-repositories
  - /github/administering-a-repository/configuring-secret-scanning-for-your-repositories
  - /code-security/secret-security/configuring-secret-scanning-for-your-repositories
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Secret scanning
  - Advanced Security
  - Repositories
shortTitle: Configure secret scans
ms.openlocfilehash: 7739cca195f46043945f39f48aad8bf88aa97fed
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192936'
---
{% data reusables.secret-scanning.beta %} {% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Activation de l’{% data variables.product.prodname_secret_scanning_GHAS %}

Vous pouvez activer l’{% data variables.product.prodname_secret_scanning_GHAS %} pour tout dépôt appartenant à une organisation. Une fois activée, {% data reusables.secret-scanning.secret-scanning-process %} {% ifversion secret-scanning-issue-body-comments %}{% data reusables.secret-scanning.scan-issue-description-and-comments %}

{% note %}

**Remarque :** {% data variables.product.prodname_secret_scanning_caps %} pour les descriptions et les commentaires des problèmes est en version bêta publique et peut faire l’objet de modifications.

{% endnote %} {% endif %}

{% ifversion secret-scanning-enterprise-level %} {% note %}

**Remarque :** Si votre organisation appartient à un compte d’entreprise, un propriétaire d’entreprise peut également activer l’{% data variables.product.prodname_secret_scanning %} au niveau de l’entreprise. Pour plus d’informations, consultez « [Gestion des fonctionnalités {% data variables.product.prodname_GH_advanced_security %} pour votre entreprise](/admin/code-security/managing-github-advanced-security-for-your-enterprise/managing-github-advanced-security-features-for-your-enterprise) ».

{% endnote %} {% endif %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. Si {% data variables.product.prodname_advanced_security %} n’est pas déjà activé pour le dépôt, à droite de « {% data variables.product.prodname_GH_advanced_security %} », cliquez sur **Activer**.
   {% ifversion fpt or ghec %}![Activez {% data variables.product.prodname_GH_advanced_security %} pour votre dépôt](/assets/images/help/repository/enable-ghas-dotcom.png) {% elsif ghes or ghae %}![Activez {% data variables.product.prodname_GH_advanced_security %} pour votre dépôt](/assets/images/enterprise/3.1/help/repository/enable-ghas.png){% endif %}
2. Passez en revue l’impact de l’activation d’{% data variables.product.prodname_advanced_security %}, puis cliquez sur **Activer {% data variables.product.prodname_GH_advanced_security %} pour ce dépôt**.
3. Quand vous activez {% data variables.product.prodname_advanced_security %}, l’{% data variables.product.prodname_secret_scanning %} peut être automatiquement activée pour le dépôt en raison des paramètres de l’organisation. Si « {% data variables.product.prodname_secret_scanning_caps %} » s’affiche avec un bouton **Activer**, vous devez toujours activer l’{% data variables.product.prodname_secret_scanning %} en cliquant sur **Activer**. Si vous voyez un bouton **Désactiver**, l’{% data variables.product.prodname_secret_scanning %} est déjà activée. 
   ![Activer {% data variables.product.prodname_secret_scanning %} pour votre référentiel](/assets/images/help/repository/enable-secret-scanning-dotcom.png) {% ifversion secret-scanning-push-protection %}
1. Si vous souhaitez activer la protection des poussées, cliquez sur **Activer** à droite de « Protection des poussées ». {% data reusables.secret-scanning.push-protection-overview %} Pour plus d’informations, consultez « [Protection des poussées avec l’{% data variables.product.prodname_secret_scanning %}](/code-security/secret-scanning/protecting-pushes-with-secret-scanning) ».
   ![Activer la protection des poussées pour votre dépôt](/assets/images/help/repository/secret-scanning-enable-push-protection.png) {% endif %} {% ifversion ghae %}
1. Avant de pouvoir activer l’{% data variables.product.prodname_secret_scanning %}, vous devez d’abord activer {% data variables.product.prodname_GH_advanced_security %}. À droite de « {% data variables.product.prodname_GH_advanced_security %} », cliquez sur **Activer**.
   ![Activer {% data variables.product.prodname_GH_advanced_security %} pour votre dépôt](/assets/images/enterprise/github-ae/repository/enable-ghas-ghae.png)
2. Cliquez sur **Activer {% data variables.product.prodname_GH_advanced_security %} pour de dépôt** pour confirmer l’action.
   ![Confirmer l’activation de {% data variables.product.prodname_GH_advanced_security %} pour votre dépôt](/assets/images/enterprise/github-ae/repository/enable-ghas-confirmation-ghae.png)
3. À droite de « {% data variables.product.prodname_secret_scanning_caps %} », cliquez sur **Activer**.
   ![Activer l’{% data variables.product.prodname_secret_scanning %} pour votre dépôt](/assets/images/enterprise/github-ae/repository/enable-secret-scanning-ghae.png) {% endif %}

## Exclusion de répertoires de l’{% data variables.product.prodname_secret_scanning_GHAS %}

Vous pouvez utiliser un fichier *secret_scanning.yml* pour exclure des répertoires de l’{% data variables.product.prodname_secret_scanning %}. Par exemple, vous pouvez exclure des répertoires qui contiennent des tests ou du contenu généré de manière aléatoire.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez *.github/secret_scanning.yml*.
4. Sous **Modifier le nouveau fichier**, tapez `paths-ignore:` suivi des chemins que vous souhaitez exclure de l’{% data variables.product.prodname_secret_scanning %}.
    ``` yaml
    paths-ignore:
      - "foo/bar/*.js"
    ```
    
    Vous pouvez utiliser des caractères spéciaux tels que `*` pour filtrer les chemins. Pour plus d’informations sur les modèles de filtre, consultez « [Syntaxe de workflow pour GitHub Actions](/actions/reference/workflow-syntax-for-github-actions#filter-pattern-cheat-sheet) ».

    {% note %}
    
    **Remarques :**
    - S’il y a plus de 1 000 entrées dans `paths-ignore`, l’{% data variables.product.prodname_secret_scanning %} n’exclut que les 1 000 premiers répertoires des analyses.
    - Si la taille de *secret_scanning.yml* est supérieure à 1 Mo, l’{% data variables.product.prodname_secret_scanning %} ignore la totalité du fichier.
    
    {% endnote %}

Vous pouvez également ignorer des alertes individuelles de l’{% data variables.product.prodname_secret_scanning %}. Pour plus d’informations, consultez « [Gestion des alertes d’{% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning#managing-secret-scanning-alerts) ».

## Pour aller plus loin

- « [Gestion des paramètres de sécurité et d’analyse pour votre organisation](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization) »
- « [Définition des modèles personnalisés pour {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning) »
