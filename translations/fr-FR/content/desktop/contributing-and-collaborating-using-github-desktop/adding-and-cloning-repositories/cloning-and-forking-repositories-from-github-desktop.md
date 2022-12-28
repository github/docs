---
title: Clonage et duplication (fork) de dépôts à partir de GitHub Desktop
intro: 'Vous pouvez utiliser {% data variables.product.prodname_desktop %} pour cloner et dupliquer des dépôts qui existent dans {% data variables.product.prodname_dotcom %}.'
redirect_from:
  - /desktop/contributing-to-projects/cloning-a-repository-from-github-desktop
  - /desktop/contributing-to-projects/cloning-and-forking-repositories-from-github-desktop
  - /desktop/contributing-and-collaborating-using-github-desktop/cloning-and-forking-repositories-from-github-desktop
versions:
  fpt: '*'
shortTitle: Clone & fork from Desktop
ms.openlocfilehash: e4182e56d0418e3aea07c94e0a3657ef8e104ea0
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145086496'
---
## À propos des dépôts locaux
Les dépôts sur {% data variables.product.prodname_dotcom %} sont des dépôts distants. Vous pouvez cloner ou dupliquer un dépôt avec {% data variables.product.prodname_desktop %} pour créer un dépôt local sur votre ordinateur.

Vous pouvez créer une copie locale d’un dépôt sur {% data variables.product.product_name %} auquel vous avez accès en clonant le dépôt. Si vous êtes propriétaire d’un dépôt ou si vous disposez d’autorisations d’accès en écriture, vous pouvez synchroniser les emplacements locaux et distants. Pour plus d’informations, consultez « [Synchronisation de votre branche](/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch) ».

Quand vous clonez un dépôt, les changements que vous poussez vers {% data variables.product.product_name %} affectent le dépôt d’origine. Pour apporter des changements sans affecter le projet d’origine, vous pouvez créer une copie distincte en dupliquant le dépôt. Vous pouvez créer une demande de tirage (pull request) pour proposer aux responsables de gestion d’incorporer les changements de votre duplication (fork) dans le dépôt amont d’origine. Pour plus d’informations, consultez « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) ».

Quand vous essayez d’utiliser {% data variables.product.prodname_desktop %} pour cloner un dépôt auquel vous n’avez pas accès en écriture, {% data variables.product.prodname_desktop %} vous invite à créer automatiquement une duplication. Vous pouvez utiliser votre duplication pour contribuer au dépôt amont d’origine ou pour travailler indépendamment sur votre propre projet. Les duplications existantes contribuent par défaut aux changements apportés à leurs dépôts amont. Vous pouvez modifier ce choix à tout moment. Pour plus d’informations, consultez « [Gestion du comportement de la duplication](#managing-fork-behavior) ».

Vous pouvez également cloner un dépôt directement à partir de {% data variables.product.prodname_dotcom %} ou {% data variables.product.prodname_enterprise %}. Pour plus d’informations, consultez « [Clonage d’un dépôt de {% data variables.product.prodname_dotcom %} vers {% data variables.product.prodname_desktop %}](/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/) ».

## Clonage d’un dépôt

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %}

## Duplication d’un dépôt
Si vous clonez un dépôt auquel vous n’avez pas accès en écriture, {% data variables.product.prodname_desktop %} crée une duplication (fork). Après avoir créé ou cloné une duplication, {% data variables.product.prodname_desktop %} vous demande comment vous comptez l’utiliser.

{% data reusables.desktop.choose-clone-repository %} {% data reusables.desktop.cloning-location-tab %} {% data reusables.desktop.cloning-repository-list %} {% data reusables.desktop.choose-local-path %} {% data reusables.desktop.click-clone %} {% data reusables.desktop.fork-type-prompt %}

## Gestion du comportement de la duplication
Vous pouvez changer le comportement d’une duplication avec le dépôt amont dans {% data variables.product.prodname_desktop %}.

{% data reusables.desktop.open-repository-settings %} {% data reusables.desktop.select-fork-behavior %}

## Création d’un alias pour un dépôt local
Vous pouvez créer un alias pour un dépôt local afin de différencier les dépôts du même nom dans {% data variables.product.prodname_desktop %}. La création d’un alias n’affecte pas le nom du dépôt sur {% data variables.product.prodname_dotcom %}. Dans la liste des dépôts, les alias apparaissent en italique.

1. Dans le coin supérieur gauche de {% data variables.product.prodname_desktop %}, à droite du nom du dépôt actuel, cliquez sur {% octicon "triangle-down" aria-label="The triangle-down icon" %}.
2. Cliquez avec le bouton droit sur le dépôt pour lequel vous souhaitez créer un alias, puis cliquez sur **Créer un alias**.
3. Tapez un alias pour le dépôt.
4. Cliquez sur **Créer un alias**.

## Pour aller plus loin
- [À propos des dépôts distants](/github/getting-started-with-github/about-remote-repositories)
