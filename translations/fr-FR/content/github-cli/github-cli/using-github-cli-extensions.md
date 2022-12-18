---
title: Utilisation des extensions CLI GitHub
intro: 'Découvrez comment utiliser des extensions personnalisées écrites par d’autres utilisateurs {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: 14bd68ea6cec8df656e59c05f6cd3fa313857158
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066709'
---
## À propos des extensions {% data variables.product.prodname_cli %}

{% note %}

**Remarque :** Les extensions en dehors de {% data variables.product.product_name %} et {% data variables.product.prodname_cli %} ne sont pas certifiées par {% data variables.product.product_name %} et sont régies par des conditions d’utilisation, une politique de confidentialité et une documentation de support distinctes. Pour atténuer les risques lors de l’utilisation d’extensions tierces, auditez le code source de l’extension avant d’installer ou de mettre à jour l’extension.

{% endnote %}

{% data reusables.cli.cli-extensions %} Pour plus d’informations sur la création d’extensions {% data variables.product.prodname_cli %}, consultez « [Création d’extensions {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions) ».

Les extensions sont installées localement et sont étendues à l’utilisateur. Par conséquent, si vous accédez à {% data variables.product.prodname_cli %} à partir d’un autre ordinateur ou qu’un autre utilisateur accède à {% data variables.product.prodname_cli %} à partir du même ordinateur, l’extension n’est pas disponible.

## Recherche d’extensions

Vous pouvez trouver des extensions en parcourant les [référentiels avec la rubrique `gh-extension`](https://github.com/topics/gh-extension).

## Installation des extensions

Pour installer une extension, utilisez la sous-commande `extensions install`. Remplacez le paramètre `repo` par le référentiel de l’extension. Vous pouvez utiliser l’URL complète, comme `https://github.com/octocat/gh-whoami`, ou simplement le propriétaire et le référentiel, comme `octocat/gh-whoami`.

Si le propriétaire et le référentiel sont utilisés, `gh` installe l’extension à l’aide du nom d’hôte auquel `gh` est actuellement authentifié. Le format d’URL complet est utile lors de l’installation d’extensions à partir d’un autre hôte. Par exemple, les utilisateurs sur {% data variables.product.prodname_ghe_server %} doivent utiliser l’URL de référentiel complète pour installer des extensions à partir de {% data variables.product.prodname_dotcom_the_website %} ou d’un autre hôte.

Pour installer une extension dans le développement à partir du répertoire actif, utilisez `.` comme valeur pour le paramètre `repo`.

```shell
gh extension install <em>repo</em>
```

Si vous disposez déjà d’une extension portant le même nom, la commande échoue. Par exemple, si vous avez installé `octocat/gh-whoami`, vous devez le désinstaller avant d’installer `hubot/gh-whoami`.

## Affichage des extensions installées

Pour afficher toutes les extensions installées, utilisez la sous-commande `extensions list`. La sortie vous indique également quelles extensions ont des mises à jour disponibles.

```shell
gh extension list
```

## Mise à jour des extensions

Pour mettre à jour une extension, utilisez la sous-commande `extensions upgrade`. Remplacez le paramètre `extension` par le nom de l’extension.

```shell
gh extension upgrade <em>extension</em>
```

Pour mettre à jour toutes les extensions installées, utilisez l’indicateur `--all`.

```shell
gh extension upgrade --all
```

## Désinstallation des extensions

Pour désinstaller une extension, utilisez la sous-commande `extensions remove`. Remplacez le paramètre `extension` par le nom de l’extension.

```shell
gh extension remove <em>extension</em>
```
