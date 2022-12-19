---
title: Création d’extensions CLI GitHub
intro: 'Découvrez comment partager les nouvelles commandes {% data variables.product.prodname_cli %} avec d’autres utilisateurs en créant des extensions personnalisées pour {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
ms.openlocfilehash: e0f2979beca9a430f5afabf3a4f58fa5ea48ad30
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066720'
---
## À propos des extensions {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Pour plus d’informations sur l’utilisation d’extensions {% data variables.product.prodname_cli %}, consultez « [Utilisation d’extensions {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions) ».

Vous avez besoin d’un référentiel pour chaque extension que vous créez. Le nom du référentiel doit commencer par `gh-`. Le reste du nom du référentiel est le nom de l’extension. Le référentiel doit avoir un fichier exécutable à sa racine portant le même nom que le référentiel ou un ensemble d’exécutables binaires précompilés attachés à une mise en production.

{% note %}

**Remarque** : Lorsque vous utilisez un script exécutable, nous vous recommandons d’utiliser un script bash, car bash est un interpréteur largement disponible. Vous pouvez utiliser des scripts non bash, mais l’utilisateur doit avoir installé l’interpréteur nécessaire pour utiliser l’extension. Si vous préférez ne pas compter sur des interpréteurs qui doivent être installés, envisagez une extension précompilée.

{% endnote %}

## Création d’une extension interprétée avec `gh extension create`

{% note %}

**Remarque** : L’exécution de `gh extension create` sans argument démarre un assistant interactif.

{% endnote %}

Vous pouvez utiliser la commande `gh extension create` pour créer un projet pour votre extension, y compris un script bash qui contient du code de démarrage.

1. Configurez une nouvelle extension à l’aide de la sous-commande `gh extension create`. Remplacez `EXTENSION-NAME` par le nom de votre extension.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Suivez les instructions imprimées pour finaliser et éventuellement publier votre extension.

## Création d’une extension précompilée dans Go avec `gh extension create`

Vous pouvez utiliser l’argument `--precompiled=go` pour créer un projet Go pour votre extension, avec notamment la génération de modèles automatique Go, la génération workflows automatique et du code de démarrage.

1. Configurez une nouvelle extension à l’aide de la sous-commande `gh extension create`. Remplacez `EXTENSION-NAME` par le nom de votre extension et spécifiez `--precompiled=go`.

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. Suivez les instructions imprimées pour finaliser et éventuellement publier votre extension.

## Création d’une extension précompilée non Go avec `gh extension create`

Vous pouvez utiliser l’argument `--precompiled=other` pour créer un projet pour votre extension précompilée non Go, y compris la génération de workflows automatique.

1. Configurez une nouvelle extension à l’aide de la sous-commande `gh extension create`. Remplacez `EXTENSION-NAME` par le nom de votre extension et spécifiez `--precompiled=other`.

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. Ajoutez du code initial pour votre extension dans le langage compilé de votre choix.

1. Remplissez `script/build.sh` avec du code pour générer votre extension pour vous assurer que votre extension peut être générée automatiquement.

1. Suivez les instructions imprimées pour finaliser et éventuellement publier votre extension.

## Création manuelle d’une extension interprétée

1. Créez un répertoire local appelé `gh-EXTENSION-NAME` pour votre extension. Remplacez `EXTENSION-NAME` par le nom de votre extension. Par exemple : `gh-whoami`.

1. Dans le répertoire que vous avez créé, ajoutez un fichier exécutable portant le même nom que le répertoire.

  {% note %}

  **Remarque :** Assurez-vous que votre fichier est exécutable. Sur Unix, vous pouvez exécuter `chmod +x file_name` dans la ligne de commande pour rendre `file_name` exécutable. Sur Windows, vous pouvez exécuter `git init -b main`, `git add file_name`, puis `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Écrivez votre script dans le fichier exécutable. Par exemple :

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. À partir de votre répertoire, installez l’extension en tant qu’extension locale.

   ```shell
   gh extension install .
   ```

1. Vérifiez que votre extension fonctionne. Remplacez `EXTENSION-NAME` par le nom de votre extension. Par exemple : `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. À partir de votre répertoire, créez un référentiel pour publier votre extension. Remplacez `EXTENSION-NAME` par le nom de votre extension.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. Si vous le souhaitez, pour aider d’autres utilisateurs à découvrir votre extension, ajoutez la rubrique de référentiel `gh-extension`. Cela permet d’afficher l’extension sur la [page de la rubrique `gh-extension`](https://github.com/topics/gh-extension). Pour plus d’informations sur l’ajout d’une rubrique de référentiel, consultez « [Classification de votre référentiel avec des rubriques](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics) ».

## Conseils pour écrire des extensions {% data variables.product.prodname_cli %} interprétées

### Gestion des arguments et des indicateurs

Tous les arguments de ligne de commande qui suivent une commande `gh my-extension-name` sont passés au script d’extension. Dans un script bash, vous pouvez référencer des arguments avec `$1`, `$2`, etc. Vous pouvez utiliser des arguments pour prendre des entrées utilisateur ou modifier le comportement du script.

Par exemple, ce script gère plusieurs indicateurs. Lorsque le script est appelé avec l’indicateur `-h` ou `--help`, le script imprime le texte d’aide au lieu de poursuivre l’exécution. Lorsque le script est appelé avec l’indicateur `--name`, le script définit la valeur suivante après l’indicateur sur `name_arg`. Lorsque le script est appelé avec l’indicateur `--verbose`, le script imprime un message d’accueil différent.

```bash
#!/usr/bin/env bash
set -e

verbose=""
name_arg=""
while [ $# -gt 0 ]; do
  case "$1" in
  --verbose)
    verbose=1
    ;;
  --name)
    name_arg="$2"
    shift
    ;;
  -h|--help)
    echo "Add help text here."
    exit 0
    ;;
  esac
  shift
done

if [ -z "$name_arg" ]
then
  echo "You haven't told us your name."
elif [ -z "$verbose" ]
then
  echo "Hi $name_arg"
else
  echo "Hello and welcome, $name_arg"
fi
```

### Appel de commandes de base en mode non interactif

Certaines commandes essentielles de {% data variables.product.prodname_cli %} invitent l’utilisateur à saisir une entrée. Lors de l’écriture de scripts avec ces commandes, une invite est souvent indésirable. Pour éviter toute invite, fournissez les informations nécessaires explicitement par le biais d’arguments.

Par exemple, pour créer un problème par programmation, spécifiez le titre et le corps :

```shell
gh issue create --title "My Title" --body "Issue description"
```

### Extraction de données par programme

De nombreuses commandes de base prennent en charge l’indicateur `--json` pour extraire des données par programme. Par exemple, pour retourner un objet JSON répertoriant le nombre, le titre et l’état de fusion des demandes de tirage :

```shell
gh pr list --json number,title,mergeStateStatus
```

S’il n’existe pas de commande principale pour extraire des données spécifiques à partir de GitHub, vous pouvez utiliser la commande [`gh api`](https://cli.github.com/manual/gh_api) pour accéder à l’API GitHub. Par exemple, pour extraire des informations sur l’utilisateur actuel :

```shell
gh api user
```

Toutes les commandes qui génèrent des données JSON ont également des options pour filtrer ces données dans quelque chose de plus immédiatement utilisable par des scripts. Par exemple, pour obtenir le nom de l’utilisateur actuel :

```shell
gh api user --jq '.name'
```

Pour plus d’informations, consultez [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Création manuelle d’une extension précompilée

1. Créez un répertoire local appelé `gh-EXTENSION-NAME` pour votre extension. Remplacez `EXTENSION-NAME` par le nom de votre extension. Par exemple : `gh-whoami`.

1. Dans le répertoire que vous avez créé, ajoutez du code source. Par exemple :

    ```go
    package main
    import (
      "github.com/cli/go-gh"
      "fmt"
    )

    func main() {
      args := []string{"api", "user", "--jq", `"You are @\(.login) (\(.name))"` }
      stdOut, _, err := gh.Exec(args...)
      if err != nil {
        fmt.Println(err)
        return
      }
      fmt.Println(stdOut.String())
    }
    ```

1. À partir de votre répertoire, installez l’extension en tant qu’extension locale.

    ```shell
    gh extension install .
    ```

1. Générez votre code. Par exemple, avec Go, en remplaçant `YOUR-USERNAME` par votre nom d’utilisateur GitHub :

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. Vérifiez que votre extension fonctionne. Remplacez `EXTENSION-NAME` par le nom de votre extension. Par exemple : `whoami`.

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. À partir de votre répertoire, créez un référentiel pour publier votre extension. Remplacez `EXTENSION-NAME` par le nom de votre extension.

  {% note %}

  **Remarque :** Veillez à ne pas valider le binaire produit par votre étape de compilation dans le contrôle de version.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. Créez une version pour partager votre extension précompilée avec d’autres personnes. Compilez pour chaque plateforme que vous souhaitez prendre en charge, en attachant chaque fichier binaire à une version en tant que ressource. Les exécutables binaires attachés aux versions doivent suivre une convention d’affectation de noms et avoir un suffixe <em>OS-ARCHITECTURE\[EXTENSION\]</em>.

  Par exemple, une extension nommée `whoami` compilée pour Windows 64 bits aurait le nom `gh-whoami-windows-amd64.exe`, tandis que la même extension compilée pour Linux 32 bits aurait le nom `gh-whoami-linux-386`. Pour afficher une liste exhaustive de combinaisons de système d’exploitation et d’architecture reconnues par `gh`, consultez [ce code source](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Remarque :** Pour que votre extension s’exécute correctement sur Windows, son fichier de ressources doit avoir une extension `.exe`. Aucune extension n’est nécessaire pour les autres systèmes d’exploitation.

  {% endnote %}

  Les mises en production peuvent être créées à partir de la ligne de commande. Par exemple :

  ```shell
  git tag v1.0.0
  git push origin v1.0.0
  GOOS=windows GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-windows-amd64.exe
  GOOS=linux GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-linux-amd64
  GOOS=darwin GOARCH=amd64 go build -o gh-<em>EXTENSION-NAME</em>-darwin-amd64
  gh release create v1.0.0 ./*amd64*

1. Optionally, to help other users discover your extension, add the repository topic `gh-extension`. This will make the extension appear on the [`gh-extension` topic page](https://github.com/topics/gh-extension). For more information about how to add a repository topic, see "[Classifying your repository with topics](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)."


## Tips for writing precompiled {% data variables.product.prodname_cli %} extensions

### Automating releases

Consider adding the [gh-extension-precompile](https://github.com/cli/gh-extension-precompile) action to a workflow in your project. This action will automatically produce cross-compiled Go binaries for your extension and supplies build scaffolding for non-Go precompiled extensions.

### Using {% data variables.product.prodname_cli %} features from Go-based extensions

Consider using [go-gh](https://github.com/cli/go-gh), a Go library that exposes pieces of `gh` functionality for use in extensions.

## Next steps

To see more examples of {% data variables.product.prodname_cli %} extensions, look at [repositories with the `gh-extension` topic](https://github.com/topics/gh-extension).
