---
title: Configuration des modèles de problème pour votre dépôt
intro: Vous pouvez personnaliser les modèles que les contributeurs peuvent utiliser pour ouvrir de nouveaux problèmes dans votre dépôt.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Configure
ms.openlocfilehash: d415d95f8aeab1b053663437b6dbf6dd637e3039
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147431991'
---
{% ifversion fpt or ghes or ghec %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

## Création de modèles de problème

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Dans la section « Fonctionnalités », sous « Problèmes », cliquez sur **Configurer des modèles**.
![Bouton de démarrage de la configuration des modèles](/assets/images/help/repository/set-up-templates.png)
4. Utilisez le menu déroulant Ajouter un modèle, puis cliquez sur le type de modèle à créer.
![Menu déroulant Ajouter un modèle](/assets/images/help/repository/add-template-drop-down-menu.png)
5. Pour prévisualiser ou modifier le modèle avant de le commiter dans le dépôt, cliquez sur **Aperçu et modification**.
![Bouton Aperçu et modification](/assets/images/help/repository/preview-and-edit-button.png)
6. Pour modifier le modèle, cliquez sur {% octicon "pencil" aria-label="The edit icon" %}, puis tapez dans les champs pour modifier leur contenu.
![Bouton de modification du modèle de problème](/assets/images/help/repository/issue-template-edit-button.png)
7. Pour définir automatiquement un titre de problème par défaut, affecter le problème à des personnes disposant d’un accès en lecture au dépôt ou appliquer des étiquettes à votre modèle de problème, entrez ces détails sous « Informations supplémentaires facultatives ». Vous pouvez également ajouter ces détails dans le modèle de problème avec `title`, `labels` ou `assignees` dans un format d’informations préliminaires YAML.
![Informations supplémentaires sur le modèle de problème](/assets/images/help/repository/additional-issue-template-info.png)
8. Une fois que vous avez fini de modifier et de prévisualiser votre modèle, cliquez sur **Proposer des changements** dans le coin supérieur droit de la page.
![Bouton Proposer des changements](/assets/images/help/repository/propose-changes-button.png)
9. Entrez un message de commit décrivant vos changements.
![Champ de message de commit du modèle de problème](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Sous les champs de message de commit, choisissez si vous souhaitez commiter votre modèle directement dans la branche par défaut, ou créer une branche et ouvrir une demande de tirage (pull request). Pour plus d’informations sur les demandes de tirage, consultez « [À propos des demandes de tirage](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».
![Modèle de problème permettant de choisir entre un commit vers la branche main ou l’ouverture d’une demande de tirage](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Cliquez sur **Commiter les changements**. Une fois ces changements fusionnés avec la branche par défaut, les contributeurs peuvent utiliser le modèle quand ils ouvrent de nouveaux problèmes dans le dépôt.

{% ifversion fpt or ghec %}

## Création de formulaires de problème

{% data reusables.community.issue-forms-beta %}

Avec les formulaires de problème, vous pouvez créer des modèles de problème ayant des champs de formulaire web personnalisables. Vous pouvez encourager les contributeurs à inclure des informations spécifiques et structurées à l’aide des formulaires de problème dans votre dépôt. Les formulaires de problème sont écrits en YAML à l’aide du schéma de formulaire {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Syntaxe du schéma de formulaire de {% data variables.product.prodname_dotcom %}](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema) ». {% data reusables.actions.learn-more-about-yaml %}

Pour utiliser un formulaire de problème dans votre dépôt, vous devez créer un fichier et l’ajouter au dossier `.github/ISSUE_TEMPLATE` de votre dépôt.

Voici un exemple de fichier config de formulaire de problème.

{% data reusables.community.issue-forms-sample %}

Voici la version affichée du formulaire de problème.
  ![Formulaire de problème affiché](/assets/images/help/repository/sample-issue-form.png)

1. Choisissez un dépôt dans lequel vous souhaitez créer un formulaire de problème. Vous pouvez utiliser un dépôt existant auquel vous avez accès en écriture, ou créer un dépôt. Pour plus d’informations sur la création d’un dépôt, consultez « [Création d’un dépôt](/articles/creating-a-new-repository) ».
2. Dans votre dépôt, créez un fichier appelé `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, en remplaçant `FORM-NAME` par le nom de votre formulaire de problème. Pour plus d’informations sur la création de fichiers sur GitHub, consultez « [Création de fichiers](/github/managing-files-in-a-repository/creating-new-files) ».
3. Dans le corps du nouveau fichier, tapez le contenu de votre formulaire de problème. Pour plus d’informations, consultez « [Syntaxe des formulaires de problème](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms) ».
4. Commitez votre fichier dans la branche par défaut de votre dépôt. Pour plus d’informations, consultez « [Création de fichiers](/github/managing-files-in-a-repository/creating-new-files) ».

{% endif %}

## Configuration du sélecteur de modèles

{% data reusables.repositories.issue-template-config %}

Vous pouvez encourager les contributeurs à utiliser des modèles de problème en affectant la valeur `false` à `blank_issues_enabled`. Si vous affectez la valeur `true` à `blank_issues_enabled`, les utilisateurs peuvent ouvrir un problème vide, s’ils le souhaitent.

{% note %}

**Remarque :** Si vous avez utilisé le workflow hérité pour créer manuellement un fichier `issue_template.md` dans le dossier `.github` et activer les problèmes vides dans votre fichier *config.yml*, le modèle de `issue_template.md` sera utilisé quand les utilisateurs choisiront d’ouvrir un problème vide. Si vous désactivez les problèmes vides, le modèle ne sera jamais utilisé.

{% endnote %}

Si vous préférez recevoir certains rapports en dehors de {% data variables.product.product_name %}, vous pouvez diriger les utilisateurs vers des sites externes avec `contact_links`.

Voici un exemple de fichier *config.yml*.

```yaml{:copy}
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Votre fichier config personnalise le sélecteur de modèles quand le fichier est fusionné avec la branche par défaut du dépôt.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez `.github/ISSUE_TEMPLATE/config.yml`.
  ![Nom du fichier config](/assets/images/help/repository/template-config-file-name.png)
4. Dans le corps du nouveau fichier, tapez le contenu de votre fichier config.
  ![Contenu du fichier config](/assets/images/help/repository/template-config-file-content.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Pour aller plus loin

- « [À propos des modèles de problème et de demande de tirage](/articles/about-issue-and-pull-request-templates) »
- « [Création manuelle d’un seul modèle de problème pour votre dépôt](/articles/manually-creating-a-single-issue-template-for-your-repository) »
