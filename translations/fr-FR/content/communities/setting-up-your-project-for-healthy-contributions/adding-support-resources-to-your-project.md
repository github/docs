---
title: Ajout de ressources de support à votre projet
intro: "Vous pouvez créer un fichier\_SUPPORT pour expliquer aux utilisateurs comment obtenir de l’aide sur votre projet."
redirect_from:
  - /articles/adding-support-resources-to-your-project
  - /github/building-a-strong-community/adding-support-resources-to-your-project
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: Add support resources
ms.openlocfilehash: 12819511ac3784720398175ef2d313eca7d03afe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086529'
---
Pour diriger les utilisateurs vers des ressources de support spécifiques, vous pouvez ajouter un fichier SUPPORT à la racine, au dossier `docs` ou au dossier `.github` de votre dépôt. Quand une personne crée un problème dans votre dépôt, elle voit un lien vers le fichier SUPPORT de votre projet.

![Recommandations liées au support](/assets/images/help/issues/support_guidelines_in_issue.png)

{% ifversion fpt or ghes or ghec %}

Vous pouvez créer des ressources de support par défaut pour votre organisation ou votre compte personnel. Pour plus d’informations, consultez « [Création d’un fichier d’intégrité de la communauté par défaut](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) ».

{% endif %}

{% tip %}

**Conseil** : Pour aider les utilisateurs à trouver les recommandations de support, vous pouvez créer un lien vers votre fichier SUPPORT à partir d’autres emplacements dans le dépôt, par exemple le [fichier README](/articles/about-readmes/).

{% endtip %}

## Ajout de ressources de support à votre projet

{% data reusables.repositories.navigate-to-repo %} {% data reusables.files.add-file %}
3. Dans le champ du nom de fichier, tapez *SUPPORT.md* (tout en majuscules).
4. Sous l’onglet **Modifier le nouveau fichier**, ajoutez des informations sur la façon dont les utilisateurs peuvent obtenir un support pour votre projet.
5. Pour passer en revue votre fichier SUPPORT, cliquez sur **Aperçu**.
{% data reusables.files.write_commit_message %} {% data reusables.files.choose-commit-email %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}
