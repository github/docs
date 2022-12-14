---
title: Publication d’un package
intro: 'Vous pouvez publier un package dans {% data variables.product.prodname_registry %} pour que d’autres puissent le télécharger et le réutiliser.'
product: '{% data reusables.gated-features.packages %}'
redirect_from:
  - /github/managing-packages-with-github-packages/publishing-a-package
  - /packages/publishing-and-managing-packages/publishing-a-package
permissions: Anyone with write permissions for a repository can publish a package to that repository.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: e13e33b6085fbdd736d77d7d8b4998595ea7ffcc
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145134363'
---
{% data reusables.package_registry.packages-ghes-release-stage %} {% data reusables.package_registry.packages-ghae-release-stage %}

## À propos des packages publiés

Vous pouvez aider les personnes à comprendre et à utiliser votre package en fournissant une description et d’autres détails tels que les instructions d’installation et d’utilisation dans la page du package. {% data variables.product.product_name %} fournit des métadonnées pour chaque version, telles que la date de publication, l’activité de téléchargement et les versions récentes. Pour obtenir un exemple de page de package, consultez [@Codertocat/hello-world-npm](https://github.com/Codertocat/hello-world-npm/packages/10696?version=1.0.1).

{% data reusables.package_registry.public-or-private-packages %} Un dépôt peut être connecté à plusieurs packages. Pour éviter toute confusion, assurez-vous que le fichier LISEZMOI et la description fournissent clairement des informations sur chaque package.

{% ifversion fpt or ghec %} Si une nouvelle version d’un package corrige une faille de sécurité, vous devez publier un avis de sécurité dans votre dépôt. {% data variables.product.prodname_dotcom %} passe en revue chaque avis de sécurité publié et peut l’utiliser pour envoyer des {% data variables.product.prodname_dependabot_alerts %} aux dépôts affectés. Pour plus d’informations, consultez « [À propos des avis de sécurité GitHub](/github/managing-security-vulnerabilities/about-github-security-advisories) ».
{% endif %}

## Publication d’un package

Vous pouvez publier un package sur {% data variables.product.prodname_registry %} à l’aide de tout {% ifversion fpt or ghae or ghec %}client de package pris en charge{% else %}type de package activé pour votre instance{% endif %} en suivant les mêmes instructions générales.

1. Créez ou utilisez un jeton d’accès existant avec les étendues appropriées pour la tâche que vous souhaitez accomplir. Pour plus d’informations, consultez « [À propos des autorisations pour {% data variables.product.prodname_registry %}](/packages/learn-github-packages/about-permissions-for-github-packages) ».
2. Authentifiez-vous auprès de {% data variables.product.prodname_registry %} avec votre jeton d’accès et les instructions de votre client de package.
3. Publiez le package à l’aide des instructions de votre client de package.

Pour obtenir des instructions spécifiques à votre client de package, consultez « [Utilisation d’un registre GitHub Packages](/packages/working-with-a-github-packages-registry) ».

Après avoir publié un package, vous pouvez l’afficher sur {% data variables.product.prodname_dotcom %}. Pour plus d’informations, consultez « [Affichage de packages](/packages/learn-github-packages/viewing-packages) ».
