---
title: Gestion des étiquettes
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour créer, pousser et afficher des étiquettes.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
  - /desktop/contributing-and-collaborating-using-github-desktop/managing-tags
versions:
  fpt: '*'
ms.openlocfilehash: 980e47f6e3300995f6312499b23768d6f0401f36
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145086487'
---
## À propos des étiquettes dans {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} vous permet de créer des étiquettes annotées. Les étiquettes sont associées aux commits. Vous pouvez donc utiliser une étiquette pour marquer un point individuel dans l’historique de votre dépôt, notamment un numéro de version pour une mise en production. Pour plus d’informations sur les étiquettes de mise en production, consultez « [À propos des mises en production](/github/administering-a-repository/about-releases) ».

{% data reusables.desktop.tags-push-with-commits %}

## Création d’une étiquette

{% data reusables.desktop.history-tab %} {% data reusables.desktop.create-tag %} {% data reusables.desktop.name-tag %} {% data reusables.desktop.confirm-tag %}

## Visualisation des étiquettes

{% data reusables.desktop.history-tab %}
2. Cliquez sur le commit.
  {% note %}

  **Remarque** : {% data variables.product.prodname_desktop %} affiche une flèche {% octicon "arrow-up" aria-label="The up arrow icon" %} si l’étiquette n’a pas été poussée vers le dépôt distant.

  {% endnote %}

  ![Visualisation d’une étiquette dans l’historique](/assets/images/help/desktop/viewing-tags-in-history.png)

3. Toutes les étiquettes associées au commit sont visibles dans les métadonnées de ce commit.
![Visualisation d’une étiquette dans le commit](/assets/images/help/desktop/viewing-tags-in-commit.png)

## Suppression des étiquettes

{% note %}

**Remarque** : Vous pouvez uniquement supprimer les étiquettes associées aux commits qui n’ont pas encore été poussés.

{% endnote %}

{% data reusables.desktop.history-tab %} {% data reusables.desktop.delete-tag %}

## Pour aller plus loin

- « [Les bases de Git - Étiquetage](https://git-scm.com/book/en/v2/Git-Basics-Tagging) » dans la documentation de Git
