---
title: Renommer un référentiel
intro: Vous pouvez renommer un dépôt si vous êtes propriétaire d’une organisation ou disposez d’autorisations d’administrateur pour le dépôt.
redirect_from:
  - /articles/renaming-a-repository
  - /github/administering-a-repository/renaming-a-repository
  - /github/administering-a-repository/managing-repository-settings/renaming-a-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: d0067d96dce2f2cf9fe8bb2dd519668780d861ff
ms.sourcegitcommit: bd8b3e152f17d90acf222a0d50ba9595184c1f5f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/27/2022
ms.locfileid: '148111672'
---
Lorsque vous renommez un référentiel, toutes les informations existantes, à l’exception des URL du site du projet, sont automatiquement redirigées vers le nouveau nom, notamment :

* Problèmes
* Wikis
* Étoiles
* Abonnés

Pour plus d’informations sur les sites de projet, consultez « [À propos de {% data variables.product.prodname_pages %}](/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) ».

En plus de rediriger le trafic web, toutes les opérations `git clone`, `git fetch` et `git push` ciblant l’emplacement précédent continuent de fonctionner comme si elles étaient effectuées sur le nouvel emplacement. Toutefois, pour éviter toute confusion, nous vous recommandons vivement de mettre à jour tous les clones locaux existants de façon à ce qu’ils pointent vers la nouvelle URL du référentiel. Pour ce faire, vous pouvez utiliser `git remote` sur la ligne de commande :

```shell
$ git remote set-url origin NEW_URL
```

Pour plus d’informations, consultez « [Gestion des dépôts distants](/github/getting-started-with-github/managing-remote-repositories) ».

{% ifversion fpt or ghec %}

Si vous comptez renommer un référentiel associé à un site {% data variables.product.prodname_pages %}, nous vous recommandons d’utiliser un domaine personnalisé pour votre site. Cela garantit que l’URL du site n’est pas affectée par le changement de nom du référentiel. Pour plus d’informations, consultez « [À propos des domaines personnalisés et du site {% data variables.product.prodname_pages %}](/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) ». 

{% endif %}

{% note %}

**Remarque :** {% data variables.product.prodname_dotcom %} ne redirige pas les appels vers une action hébergée par un référentiel renommé. Tout workflow qui utilise cette action échoue avec l’erreur `repository not found`. Créez plutôt un référentiel et une action avec le nouveau nom et archivez l’ancien référentiel. Pour plus d’informations, consultez « [Archivage des dépôts](/repositories/archiving-a-github-repository/archiving-repositories) ».

{% endnote %}

{% warning %}

**Avertissement** : si vous créez un référentiel sous votre compte à l’avenir, ne réutilisez pas le nom d’origine du référentiel renommé. Si vous le faites, les redirections vers le dépôt renommé ne fonctionneront plus.

{% endwarning %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Sous le titre **Nom du référentiel**, saisissez le nouveau nom de votre référentiel.
   ![Renommer le référentiel](/assets/images/help/repository/repository-name-change.png)
4. Cliquez sur **Renommer**. Vous avez terminé !
