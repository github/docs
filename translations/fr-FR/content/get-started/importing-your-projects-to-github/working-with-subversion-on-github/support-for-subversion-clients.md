---
title: Prise en charge des clients Subversion
intro: Les dépôts GitHub peuvent être accessibles à partir de clients Git et Subversion (SVN). Cet article traite de l’utilisation d’un client Subversion sur GitHub et de certains problèmes courants que vous pourriez rencontrer.
redirect_from:
  - /articles/support-for-subversion-clients
  - /github/importing-your-projects-to-github/support-for-subversion-clients
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/support-for-subversion-clients
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Support for Subversion clients
ms.openlocfilehash: 49422fbd5dd07b84975172f077091e92bcd5b543
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128930'
---
GitHub prend en charge les clients Subversion via le protocole HTTPS. Nous utilisons un pont Subversion pour communiquer des commandes svn à GitHub.

## Fonctionnalités de Subversion prises en charge sur GitHub

### Checkout

La première chose que vous voudrez faire est une extraction Subversion.  Du fait que les clones Git maintiennent le répertoire de travail (là où vous modifiez vos fichiers) séparé des données du dépôt, il n’y a qu’une seule branche dans le répertoire de travail à la fois.

Les extractions Subversion fonctionnent différemment : comme elles combinent les données du dépôt dans les répertoires de travail, il y a un répertoire de travail pour chaque branche et chaque étiquette que vous avez extraites. Pour les dépôts contenant beaucoup de branches et d’étiquettes, tout extraire peut générer une charge de bande passante supplémentaire, et il vaut donc mieux commencer par une extraction partielle.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.copy-clone-url %}

3. Effectuez une extraction vide du dépôt :
  ```shell
  $ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>
  > Checked out revision 1.
  $ cd <em>repo</em>
  ```

4. Obtenez la branche `trunk`. Le pont Subversion mappe la branche principale (trunk) à la branche Git HEAD.
  ```shell
  $ svn up trunk
  > A    trunk
  > A    trunk/README.md
  > A    trunk/gizmo.rb
  > Updated to revision 1.
  ```

5. Obtenez une extraction vide du répertoire `branches`.  C’est là où se trouvent toutes les branches vivantes autres que `HEAD`, et où vous créez des branches de fonctionnalité.
  ```shell
  $ svn up --depth empty branches
  Updated to revision 1.
  ```

### Créer des branches

Vous pouvez également créer des branches en utilisant le pont Subversion vers GitHub.

À partir de votre client svn, vérifiez que la branche par défaut est la branche active en mettant à jour `trunk` :
```shell
$ svn up trunk
> At revision 1.
```

Ensuite, vous pouvez utiliser `svn copy` pour créer une autre branche :
```shell
$ svn copy trunk branches/more_awesome
> A    branches/more_awesome
$ svn commit -m 'Added more_awesome topic branch'
> Adding    branches/more_awesome

> Committed revision 2.
```

Vous pouvez vérifier que la nouvelle branche existe bien dans la liste déroulante des branches du dépôt :

![capture instantanée de branche](/assets/images/help/branch/svnflow-branch-snapshot.png)

Vous pouvez aussi vérifier l’existence de la nouvelle branche via la ligne de commande :

```shell
$ git fetch
> From https://github.com/<em>user</em>/<em>repo</em>/
> * [new branch]    more_awesome -> origin/more_awesome
```

### Effectuer des commits sur Subversion

Après avoir ajouté quelques fonctionnalités et résolu quelques bogues, vous voudrez commiter ces modifications sur GitHub. Le processus est le même que ce que vous connaissez avec Subversion. Modifiez vos fichiers et utilisez `svn commit` pour enregistrer vos modifications :

```shell
$ svn status
> M    gizmo.rb
$ svn commit -m 'Guard against known problems'
> Sending    more_awesome/gizmo.rb
> Transmitting file data .
> Committed revision 3.
$ svn status
> ?    test
$ svn add test
> A    test
> A    test/gizmo_test.rb
$ svn commit -m 'Test coverage for problems'
> Adding    more_awesome/test
> Adding    more_awesome/test/gizmo_test.rb
> Transmitting file data .
> Committed revision 4.
```

### Basculement entre les branches

Pour basculer entre les branches, vous voudrez probablement commencer par une extraction de `trunk` :

```shell
$ svn co --depth empty https://github.com/<em>user</em>/<em>repo</em>/trunk
```

Vous pouvez ensuite basculer vers une autre branche :

```shell
$ svn switch https://github.com/<em>user</em>/<em>repo</em>/branches/more_awesome
```

## Rechercher le SHA de commit Git pour un commit Subversion

Le serveur Subversion de GitHub expose le SHA de commit Git pour chaque commit Subversion.

Pour voir le SHA de commit, vous devez demander la propriété distante non versionnée `git-commit`.

```shell
$ svn propget git-commit --revprop -r HEAD https://github.com/<em>user</em>/<em>repo</em>
05fcc584ed53d7b0c92e116cb7e64d198b13c4e3
```

Avec ce SHA de commit, vous pouvez, par exemple, rechercher le commit Git correspondant sur GitHub.

## Pour aller plus loin

* « [Propriétés de Subversion prises en charge par GitHub](/articles/subversion-properties-supported-by-github) »
