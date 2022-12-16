---
title: Installation d’un package
intro: 'Vous pouvez installer un package à partir de {% data variables.product.prodname_registry %} et utiliser le package comme dépendance dans votre propre projet.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/installing-a-package
  - /packages/publishing-and-managing-packages/installing-a-package
  - /packages/manage-packages/installing-a-package
permissions: You can install any package that you have permission to view.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 86c095ab1eddc969e4e04f3305059678ffcb9c20
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134367'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## À propos de l’installation de packages

Vous pouvez effectuer une recherche sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} pour trouver des packages dans {% data variables.product.prodname_registry %} que vous pouvez installer dans votre propre projet. Pour plus d’informations, consultez « [Recherche de packages dans {% data variables.product.prodname_registry %}](/search-github/searching-on-github/searching-for-packages) ».

Une fois que vous avez trouvé un package, vous pouvez lire la description ainsi que les instructions d’installation et d’utilisation du package dans la page du package.

## Installation d’un package

Vous pouvez installer un package à partir de {% data variables.product.prodname_registry %} à l’aide de tout {% ifversion fpt or ghae or ghec %}client de package pris en charge{% else %}type de package activé pour votre instance{% endif %} en suivant les mêmes instructions générales.

1. Authentifiez-vous auprès de {% data variables.product.prodname_registry %} à l’aide des instructions de votre client de package. Pour plus d’informations, consultez « [Authentification auprès de GitHub Packages](/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages) ».
2. Installez le package à l’aide des instructions de votre client de package.

Pour obtenir des instructions spécifiques à votre client de package, consultez « [Utilisation d’un registre {% data variables.product.prodname_registry %}](/packages/working-with-a-github-packages-registry) ».
