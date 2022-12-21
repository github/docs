---
title: Résolution des problèmes liés au clients Codespaces
intro: Vous pouvez utiliser {% data variables.product.prodname_codespaces %} dans votre navigateur ou via {% data variables.product.prodname_vscode %}. Cet article indique les étapes à suivre pour résoudre les problèmes courants des clients.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
- Codespaces
shortTitle: Codespaces clients
ms.openlocfilehash: 9b8a04083665a1f2d555d568f855e3ebdf57fb56
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: "145104114"
---
## Résolution des problèmes liés à {% data variables.product.prodname_vscode %}

Quand vous connectez une version de bureau de {% data variables.product.prodname_vscode %} à un codespace, vous pouvez remarquer quelques différences par rapport à une utilisation dans un espace de travail normal, mais l’expérience reste assez similaire. 

Quand vous ouvrez un codespace dans votre navigateur à l’aide de {% data variables.product.prodname_vscode %} sur le web, vous pouvez remarquer plus de différences. Par exemple, certaines combinaisons de touches sont différentes ou absentes et certaines extensions peuvent se comporter différemment. Pour en obtenir un résumé, consultez : « [Limitations et adaptations connues](https://code.visualstudio.com/docs/remote/codespaces#_known-limitations-and-adaptations) » dans la documentation de {% data variables.product.prodname_vscode %}.

Vous pouvez consulter les problèmes connus et consigner de nouveaux problèmes avec l’expérience {% data variables.product.prodname_vscode %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+codespaces).

### {% data variables.product.prodname_vscode %} Insiders

{% data variables.product.prodname_vscode %} Insiders constitue la version la plus fréquente de {% data variables.product.prodname_vscode %}. Elle comporte toutes les fonctionnalités et les correctifs de bogues les plus récents, mais peut aussi parfois contenir de nouveaux problèmes à l’origine d’une rupture de build.

Si vous utilisez une build Insiders et remarquez une rupture de comportement, nous vous recommandons de passer à {% data variables.product.prodname_vscode %} Stable et de réessayer.

Dans la version de bureau de {% data variables.product.prodname_vscode %}, vous pouvez basculer vers la version Stable en fermant l’application {% data variables.product.prodname_vscode %} Insiders, en ouvrant l’application {% data variables.product.prodname_vscode %} Stable, puis en rouvrant votre codespace.

Dans la version web de {% data variables.product.prodname_vscode %}, vous pouvez cliquer sur {% octicon "gear" aria-label="The manage icon" %} en bas à gauche de l’éditeur et sélectionner **Basculer vers la version stable...** Si la version web ne se charge pas ou si l’icône {% octicon "gear" aria-label="The manage icon" %} n’est pas disponible, vous pouvez forcer le basculement vers {% data variables.product.prodname_vscode %} Stable en ajoutant `?vscodeChannel=stable` à l’URL de votre codespace et en chargeant le codespace à cette URL.

Si le problème n’est pas résolu dans {% data variables.product.prodname_vscode %} Stable, suivez les instructions de résolution des problèmes ci-dessus.

## Résolution des problèmes de navigateur

Si vous rencontrez des problèmes liés à l’utilisation de codespaces dans un navigateur non-Chromium, essayez de passer à un navigateur Chromium ou consultez les problèmes connus liés à votre navigateur dans le dépôt `microsoft/vscode` en recherchant les problèmes étiquetés avec le nom de votre navigateur, comme [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) ou [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari).

Si vous rencontrez des problèmes liés à l’utilisation de codespaces dans un navigateur Chromium, vous pouvez vérifier si vous rencontrez un autre problème connu avec {% data variables.product.prodname_vscode %} dans le dépôt [`microsoft/vscode`](https://github.com/microsoft/vscode/issues).
