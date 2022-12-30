---
title: Création manuelle d’un seul modèle de problème pour votre dépôt
intro: 'Quand vous ajoutez un modèle de problème créé manuellement à votre dépôt, les contributeurs du projet voient automatiquement le contenu de ce modèle dans le corps du problème.'
redirect_from:
  - /articles/creating-an-issue-template-for-your-repository
  - /articles/manually-creating-a-single-issue-template-for-your-repository
  - /github/building-a-strong-community/manually-creating-a-single-issue-template-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Create an issue template
ms.openlocfilehash: 0d10da9cc3be128744a7b0465c016d1c6346b6f3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086510'
---
{% data reusables.repositories.legacy-issue-template-tip %}

Vous pouvez créer un sous-répertoire *ISSUE_TEMPLATE/* dans l’un des dossiers pris en charge pour y stocker plusieurs modèles de problème, puis utiliser le paramètre de requête `template` pour spécifier le modèle qui va remplir le corps du problème. Pour plus d’informations, consultez « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters) ».

Vous pouvez ajouter des informations préliminaires YAML à chaque modèle de problème pour préremplir le titre du problème, ajouter automatiquement des étiquettes et des personnes responsables, et attribuer au modèle un nom et une description qui s’afficheront dans le sélecteur de modèles à l’intention des utilisateurs qui créent un problème dans votre dépôt.

Voici un exemple d’informations préliminaires YAML.

```yaml
---
name: Tracking issue
about: Use this template for tracking new features.
title: "[DATE]: [FEATURE NAME]"
labels: tracking issue, needs triage
assignees: octocat
---
```
{% note %}

**Remarque :** Si une valeur présente dans les informations préliminaires comprend un caractère réservé YAML tel que `:`, vous devez placer la valeur entière entre guillemets. Par exemple, `":bug: Bug"` ou `":new: triage needed, :bug: bug"`.

{% endnote %}

{% ifversion fpt or ghec %}

{% data reusables.repositories.valid-community-issues %}

{% endif %}

{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Ajout d’un modèle de problème

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier :
    -  Pour rendre votre modèle de problème visible dans le répertoire racine du dépôt, tapez le nom de votre *modèle_de_problème*. Par exemple : `issue_template.md`.
  ![Nom du nouveau modèle de problème dans le répertoire racine](/assets/images/help/repository/issue-template-file-name.png)
    - Pour rendre votre modèle de problème visible dans le répertoire `docs` du dépôt, tapez *docs/* suivi du nom de votre *modèle_de_problème*. Par exemple `docs/issue_template.md`. ![Nouveau modèle de problème dans le répertoire docs](/assets/images/help/repository/issue-template-file-name-docs.png)
    - Pour stocker votre fichier dans un répertoire masqué, tapez *.github/* suivi du nom de votre *modèle_de_problème*. Par exemple : `.github/issue_template.md`.
  ![Nouveau modèle de problème dans le répertoire masqué](/assets/images/help/repository/issue-template-hidden-directory.png)
    - Pour créer plusieurs modèles de problème et utiliser le paramètre de requête `template` afin de spécifier un modèle permettant de remplir le corps du problème, tapez *.github/ISSUE_TEMPLATE/* , puis le nom de votre modèle de problème. Par exemple : `.github/ISSUE_TEMPLATE/issue_template.md`. Vous pouvez également stocker plusieurs modèles de problème dans un sous-répertoire `ISSUE_TEMPLATE` au sein du répertoire racine ou du répertoire `docs/`. Pour plus d’informations, consultez « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters) ».
  ![Nouveau modèle de problème multiple dans un répertoire masqué](/assets/images/help/repository/issue-template-multiple-hidden-directory.png)
4. Dans le corps du nouveau fichier, ajoutez votre modèle de problème. Vous pouvez inclure ce qui suit :
    - Informations préliminaires YAML
    - Comportement attendu et comportement réel
    - Les étapes pour reproduire le problème.
    - Spécifications telles que la version du projet, du système d’exploitation ou du matériel {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} Les modèles sont accessibles aux collaborateurs quand ils sont fusionnés avec la branche par défaut du dépôt.
{% data reusables.files.propose_new_file %}

## Pour aller plus loin

- « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) »
- « [Configuration des modèles de problème pour votre dépôt](/articles/configuring-issue-templates-for-your-repository) »
- « [À propos de l’automatisation des problèmes et des demandes de tirage avec des paramètres de requête](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters) »
- « [Création d’un problème](/articles/creating-an-issue) »
