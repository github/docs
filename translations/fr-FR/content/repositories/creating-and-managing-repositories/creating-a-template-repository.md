---
title: Création d’un modèle de dépôt
intro: 'Vous pouvez créer un modèle à partir d’un dépôt existant, afin que vous et d’autres utilisateurs puissiez générer de nouveaux dépôts avec les mêmes structure de répertoires, branches et fichiers.'
permissions: Anyone with admin permissions to a repository can make the repository a template.
redirect_from:
  - /articles/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-template-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-a-template-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Create a template repo
ms.openlocfilehash: 1ae0c562f1d92e8184ae749199f609bb223748d4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132338'
---
{% note %}

**Remarque** : Votre modèle de dépôt ne peut pas inclure des fichiers stockés à l’aide de {% data variables.large_files.product_name_short %}.

{% endnote %}

Pour créer un modèle de dépôt, vous devez créer un dépôt, puis transformer ce dépôt en modèle. Pour plus d’informations sur la création d’un dépôt, consultez « [Création d’un dépôt](/articles/creating-a-new-repository) ».

Une fois que vous avez transformé votre dépôt en modèle, toute personne ayant accès au dépôt peut en générer un nouveau avec la même structure de répertoire et les mêmes fichiers que votre branche par défaut. Ces personnes peuvent également choisir d’inclure toutes les autres branches dans votre dépôt. Les branches créées à partir d’un modèle ont des historiques séparés, si bien que vous ne pouvez pas créer de demandes de tirage ou de fusion entre les branches. Pour plus d’informations, consultez « [Création d’un dépôt à partir d’un modèle](/articles/creating-a-repository-from-a-template) ».

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
1. Sélectionnez **Modèle de dépôt**.
  ![Case à cocher pour transformer un dépôt en modèle](/assets/images/help/repository/template-repository-checkbox.png)
