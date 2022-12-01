---
title: À propos des propriétaires de code
intro: Vous pouvez utiliser un fichier CODEOWNERS pour définir des personnes ou des équipes qui sont responsables du code dans un référentiel.
redirect_from:
  - /articles/about-codeowners
  - /articles/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/about-code-owners
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/about-code-owners
product: '{% data reusables.gated-features.code-owners %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
ms.openlocfilehash: 12265f0627ca6d0feb34244aab1c021b5ae6cc10
ms.sourcegitcommit: 9315c7dae9a673a2f8958df7632bf1af206a0bed
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 12/01/2022
ms.locfileid: '148188237'
---
Les personnes disposant d’autorisations d’administrateur ou de propriétaire peuvent configurer un fichier CODEOWNERS dans un dépôt.

Les personnes que vous choisissez en tant que propriétaires de code doivent disposer d’autorisations d’écriture pour le dépôt. Lorsque le propriétaire du code est une équipe, cette équipe doit être visible et doit disposer d’autorisations d’écriture, même si chaque membre de l’équipe dispose déjà d’autorisations d’écriture directement, par le biais de l’appartenance à l’organisation ou par le biais d’une autre appartenance à l’équipe.

## À propos des propriétaires de code

Les propriétaires de code sont automatiquement demandés pour révision lorsqu’une personne ouvre une demande de tirage (pull request) qui modifie du code dont ils sont propriétaires. Les propriétaires de code ne sont pas automatiquement invités à réviser les brouillons de demandes de tirage. Pour plus d’informations sur les brouillons de demandes de tirage, consultez « [À propos des demandes de tirage](/github/collaborating-with-issues-and-pull-requests/about-pull-requests#draft-pull-requests) ». Lorsque vous marquez un brouillon de demande de tirage comme étant prêt pour révision, les propriétaires de code sont automatiquement avertis. Si vous convertissez une demande de tirage en brouillon, les personnes qui sont déjà abonnées aux notifications ne sont pas automatiquement désabonnées. Pour plus d’informations, consultez « [Modification de l’étape d’une demande de tirage](/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request) ».

Lorsqu’une personne disposant d’autorisations d’administrateur ou de propriétaire a activé les révisions requises, elle peut également exiger l’approbation d’un propriétaire de code avant que l’auteur puisse fusionner une demande de tirage dans le dépôt. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-pull-request-reviews-before-merging) ».

Si un fichier a un propriétaire de code, vous pouvez voir qui est le propriétaire du code avant d’ouvrir une demande de tirage. Dans le dépôt, vous pouvez accéder au fichier et pointer sur {% octicon "shield-lock" aria-label="The edit icon" %}.

![Propriétaire de code pour un fichier dans un dépôt](/assets/images/help/repository/code-owner-for-a-file.png)

## Emplacement du fichier CODEOWNERS

Pour utiliser un fichier CODEOWNERS, créez un fichier nommé `CODEOWNERS` dans le répertoire racine, `docs/` ou `.github/` du dépôt, dans la branche où vous souhaitez ajouter les propriétaires de code.

Chaque fichier CODEOWNERS affecte les propriétaires de code pour une branche unique dans le dépôt. Par conséquent, vous pouvez affecter différents propriétaires de code pour différentes branches, par exemple `@octo-org/codeowners-team` pour une base de code sur la branche par défaut et `@octocat` pour un site {% data variables.product.prodname_pages %} sur la branche `gh-pages`.

Pour que les propriétaires de code reçoivent des demandes de révision, le fichier CODEOWNERS doit se trouver sur la branche de base de la demande de tirage. Par exemple, si vous affectez `@octocat` en tant que propriétaire de code pour des fichiers *.js* sur la branche `gh-pages` de votre dépôt, `@octocat` recevra des demandes de révision lorsqu’une demande de tirage avec des modifications apportées à des fichiers *.js* sera ouverte entre la branche principale et `gh-pages`.

## Taille des fichiers CODEOWNERS

Les fichiers CODEOWNERS doivent avoir une taille inférieure à 3 Mo. Un fichier CODEOWNERS au-delà de cette limite ne sera pas chargé, ce qui signifie que les informations du propriétaire de code ne seront pas affichées et que les propriétaires de code appropriés ne seront pas invités à réviser les modifications dans une demande de tirage.

Pour réduire la taille de votre fichier CODEOWNERS, utilisez des modèles génériques afin de consolider plusieurs entrées en une entrée unique.

## Syntaxe de CODEOWNERS

{% warning %}

**Avertissement :** il existe certaines règles de syntaxe pour les fichiers gitignore qui *ne fonctionnent pas* dans les fichiers CODEOWNERS :
- Échappement d’un modèle commençant par `#` à l’aide de `\` afin qu’il soit traité comme un modèle et non comme un commentaire
- Utilisation de `!` pour nier un modèle
- Utilisation de `[ ]` pour définir une plage de caractères

{% endwarning %}

Un fichier CODEOWNERS utilise un modèle qui suit la plupart des mêmes règles que celles utilisées dans les fichiers [gitignore](https://git-scm.com/docs/gitignore#_pattern_format). Le modèle est suivi d’un ou plusieurs noms d’utilisateur ou noms d’équipe {% data variables.product.prodname_dotcom %} au format `@username` ou `@org/team-name` standard. Les utilisateurs et les équipes doivent avoir un accès `write` explicite au dépôt, même si les membres de l’équipe ont déjà un accès.

{% ifversion fpt or ghec%}Dans la plupart des cas, vous{% else %}Vous{% endif %} pouvez également faire référence à un utilisateur par une adresse e-mail qui a été ajoutée à son compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, par exemple `user@example.com`. {% ifversion fpt or ghec %} Vous ne pouvez pas utiliser une adresse e-mail pour faire référence à un {% data variables.enterprise.prodname_managed_user %}. Pour plus d’informations sur {% data variables.enterprise.prodname_managed_users %}, consultez « [À propos d’{% data variables.product.prodname_emus %}](/enterprise-cloud@latest/admin/identity-and-access-management/managing-iam-with-enterprise-managed-users/about-enterprise-managed-users){% ifversion fpt %} » dans la documentation {% data variables.product.prodname_ghe_cloud %}.{% else %}. »{% endif %}{% endif %}

Les chemins CODEOWNERS respectent la casse, car {% data variables.product.prodname_dotcom %} utilise un système de fichiers qui respecte la casse. Les fichiers CODEOWNERS étant évalués par {% data variables.product.prodname_dotcom %}, même les systèmes qui ne respectent pas la casse (par exemple macOS) doivent utiliser des chemins et des fichiers dont la casse est correcte dans le fichier CODEOWNERS.

{% ifversion codeowners-errors %} Si une ligne de votre fichier CODEOWNERS contient une syntaxe non valide, cette ligne est ignorée. Quand vous accédez au fichier CODEOWNERS dans votre dépôt sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.location.product_location %}{% endif %}, vous pouvez voir les erreurs mises en surbrillance. Une liste d’erreurs dans le fichier CODEOWNERS d’un dépôt est également accessible via l’API. Pour plus d’informations, consultez « [Dépôts](/rest/reference/repos#list-codeowners-errors) » dans la documentation de l’API REST.
{% else %} Si une ligne de votre fichier CODEOWNERS contient une syntaxe non valide, le fichier ne sera pas détecté et ne sera pas utilisé pour demander des révisions.
{% endif %}

### Exemple de fichier CODEOWNERS
```
# This is a comment.
# Each line is a file pattern followed by one or more owners.

# These owners will be the default owners for everything in
# the repo. Unless a later match takes precedence,
# @global-owner1 and @global-owner2 will be requested for
# review when someone opens a pull request.
*       @global-owner1 @global-owner2

# Order is important; the last matching pattern takes the most
# precedence. When someone opens a pull request that only
# modifies JS files, only @js-owner and not the global
# owner(s) will be requested for a review.
*.js    @js-owner #This is an inline comment.

# You can also use email addresses if you prefer. They'll be
# used to look up users just like we do for commit author
# emails.
*.go docs@example.com

# Teams can be specified as code owners as well. Teams should
# be identified in the format @org/team-name. Teams must have
# explicit write access to the repository. In this example,
# the octocats team in the octo-org organization owns all .txt files.
*.txt @octo-org/octocats

# In this example, @doctocat owns any files in the build/logs
# directory at the root of the repository and any of its
# subdirectories.
/build/logs/ @doctocat

# The `docs/*` pattern will match files like
# `docs/getting-started.md` but not further nested files like
# `docs/build-app/troubleshooting.md`.
docs/*  docs@example.com

# In this example, @octocat owns any file in an apps directory
# anywhere in your repository.
apps/ @octocat

# In this example, @doctocat owns any file in the `/docs`
# directory in the root of your repository and any of its
# subdirectories.
/docs/ @doctocat

# In this example, any change inside the `/scripts` directory
# will require approval from @doctocat or @octocat.
/scripts/ @doctocat @octocat

# In this example, @octocat owns any file in the `/apps`
# directory in the root of your repository except for the `/apps/github`
# subdirectory, as its owners are left empty.
/apps/ @octocat
/apps/github
```

## CODEOWNERS et protection de branche
Les propriétaires de dépôts peuvent ajouter des règles de protection de branche pour s’assurer que le code modifié est révisé par les propriétaires des fichiers modifiés. Pour plus d’informations, consultez « [À propos des branches protégées](/github/administering-a-repository/defining-the-mergeability-of-pull-requests/about-protected-branches) ».

## Pour aller plus loin

- « [Création de fichiers](/articles/creating-new-files) »
- « [Invitation de collaborateurs à un dépôt personnel](/articles/inviting-collaborators-to-a-personal-repository) »
- « [Gestion de l’accès d’un individu à un dépôt d’organisation](/articles/managing-an-individual-s-access-to-an-organization-repository) »
- « [Gestion de l’accès de l’équipe à un dépôt de l’organisation](/articles/managing-team-access-to-an-organization-repository) »
- « [Affichage d’une révision de demande de tirage](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/viewing-a-pull-request-review) »
