---
title: Résolution des problèmes de vérification GPG pour GitHub Codespaces
shortTitle: GPG verification
intro: Cet article fournit des conseils sur la résolution des problèmes liés à la signature de vos commits dans les codespaces.
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
ms.openlocfilehash: f3a6537d1ee9087803054347689591c2b217e42e
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167110'
---
Si vous activez la vérification GPG, {% data variables.product.prodname_github_codespaces %} signe automatiquement vos commits dans les codespaces que vous créez à partir des dépôts sélectionnés. Pour plus d’informations, consultez « [Gestion de la vérification GPG pour {% data variables.product.prodname_github_codespaces %}](/codespaces/managing-your-codespaces/managing-gpg-verification-for-github-codespaces) ».

{% data reusables.codespaces.gpg-in-active-codespaces %}

Si {% data variables.product.prodname_github_codespaces %} ne parvient pas à signer un commit, vous pouvez voir une erreur semblable à celle-ci.

```Shell
$ git commit -m 'Initial commit'
error: gpg failed to sign the data
fatal: failed to write commit object
```

Vous pouvez rencontrer cette erreur si : 

- Vous avez désactivé la vérification GPG, et vous essayez d’effectuer un commit normal non signé dans un codespace existant.
- Vous avez activé la vérification GPG, mais vous avez remplacé la configuration Git nécessaire à {% data variables.product.prodname_github_codespaces %} pour signer vos commits, par exemple en liant {% data variables.product.prodname_github_codespaces %} à un dépôt de dotfiles qui contient les fichiers config Git.

## Erreurs après la désactivation de la vérification GPG

Quand vous activez la vérification GPG, {% data variables.product.prodname_github_codespaces %} signe tous les commits que vous effectuez dans les codespaces par défaut. Pour ce faire, il affecte `true` à la valeur de configuration Git `commit.gpgsign`.

Si vous avez désactivé la vérification GPG, et si vous travaillez dans un codespace existant, cette valeur est toujours `true`. Cela signifie que {% data variables.product.prodname_github_codespaces %} va essayer de signer vos commits, mais qu’il ne pourra pas le faire, car vous avez désactivé le paramètre de vérification GPG.

Pour continuer à effectuer des commits normaux et non signés dans votre codespace, réinitialisez `commit.gpgsign` à la valeur par défaut `false` en entrant la commande suivante dans le terminal.

```Shell{:copy}
git config --unset commit.gpgsign
```

Pour vérifier que la valeur a été correctement supprimée de votre configuration, vous pouvez entrer `git config --list`. Vous ne devez pas voir de valeur pour `commit.gpgsign` dans la liste.

## Erreurs causées par un conflit de configuration

Pour signer automatiquement vos commits, {% data variables.product.prodname_github_codespaces %} définit certaines valeurs de configuration Git dans votre codespace. Si vous remplacez les valeurs définies par {% data variables.product.prodname_github_codespaces %}, vous ne pourrez peut-être pas signer vos commits. 

Vous pouvez remplacer ces valeurs par inadvertance si vous avez lié {% data variables.product.prodname_github_codespaces %} à un dépôt de dotfiles qui contient des fichiers config Git. Pour plus d’informations sur l’utilisation des dotfiles avec {% data variables.product.prodname_github_codespaces %}, consultez « [Personnalisation de {% data variables.product.prodname_github_codespaces %} pour votre compte](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#dotfiles) ».

### Recherche des conflits de configuration

Pour signer vos commits avec GPG, {% data variables.product.prodname_github_codespaces %} définit automatiquement les valeurs de configuration Git suivantes au niveau du système.

| Paramètre de configuration | Valeur requise |
| --------------------- | -------------- |
| `user.name` | Doit correspondre au nom complet défini dans votre profil {% data variables.product.prodname_dotcom %} |
| `credential.helper` | Il doit être défini sur `/.codespaces/bin/gitcredential_github.sh` |
| `gpg.program` | Il doit être défini sur `/.codespaces/bin/gh-gpgsign` |

Pour vérifier que ces valeurs sont correctement définies dans un codespace, vous pouvez utiliser la commande `git config --list --show-origin`. Dans la mesure où {% data variables.product.prodname_github_codespaces %} définit cette configuration au niveau du système, les paramètres de configuration nécessaires doivent provenir de `/usr/local/etc/gitconfig`.

```Shell
$ git config --list --show-origin
file:/usr/local/etc/gitconfig   credential.helper=/.codespaces/bin/gitcredential_github.sh
file:/usr/local/etc/gitconfig   user.name=Mona Lisa
file:/usr/local/etc/gitconfig   gpg.program=/.codespaces/bin/gh-gpgsign
```

En plus des valeurs listées ci-dessus, vous pouvez rencontrer des erreurs si les dotfiles utilisés dans vos codespaces contiennent l’une des valeurs suivantes.

- Valeur de configuration Git `user.signingkey`
- Valeur de configuration Git `commit.gpgsign`
- `GITHUB_TOKEN` défini manuellement

### Suppression d’une configuration en conflit

Si vous souhaitez que la vérification GPG automatique pour {% data variables.product.prodname_github_codespaces %} reste activée, vous devez supprimer les configurations en conflit dans les dotfiles utilisés au sein de vos codespaces.

Par exemple, si le fichier `.gitconfig` global sur votre machine locale contient une valeur `gpg.program`, et si vous avez poussé ce fichier vers un dépôt de dotfiles lié à {% data variables.product.prodname_github_codespaces %}, vous pouvez supprimer `gpg.program` dans ce fichier, et le définir à la place au niveau du système sur votre machine locale.

{% note %}

**Remarque :** Tout changement apporté à votre dépôt de dotfiles s’applique aux nouveaux codespaces que vous créez, mais pas à vos codespaces existants.

{% endnote %}

1. Sur votre machine locale, ouvrez un terminal.
2. Pour supprimer la valeur en conflit de `~/.gitconfig` (Mac/Linux) ou `C:\Users\YOUR-USER\.gitconfig` (Windows), utilisez la commande `git config --global --unset`.

   ```Shell
   $ git config --global --unset gpg.program
   ```
3. Poussez le changement vers votre dépôt de dotfiles sur {% data variables.product.prodname_dotcom %}.
4. Éventuellement, pour conserver votre configuration locale, définissez à nouveau la valeur dans un fichier config Git que vous ne poussez pas vers votre dépôt de dotfiles. 

   Par exemple, vous pouvez utiliser l’indicateur `--system` pour définir la configuration `PATH/etc/gitconfig` dans le fichier au niveau du système, où `PATH` correspond au répertoire dans lequel Git est installé sur votre système.
   
   ```Shell
   $ git config --system gpg.program gpg2
   ```

Si votre dépôt de dotfiles contient un script d’installation dans un fichier reconnu tel que `install.sh`, vous pouvez également utiliser la variable d’environnement `$CODESPACES` pour ajouter une logique conditionnelle, par exemple en définissant uniquement `gpg.program` quand vous n’êtes pas dans un codespace. Dans l’exemple suivant, `-z "$CODESPACES"` retourne `true` si vous n’êtes pas dans un codespace.

```Shell{:copy}
if [ -z "$CODESPACES" ]; then
  git config --global gpg.program gpg2
fi
```

## Pour aller plus loin
- « [À propos de la vérification des signatures de commit](/authentication/managing-commit-signature-verification/about-commit-signature-verification) »
- [`git config`](https://git-scm.com/docs/git-config) dans la documentation officielle de Git
