---
title: Criando extensões da CLI do GitHub
intro: 'Aprenda a compartilhar novos comandos {% data variables.product.prodname_cli %} com outros usuários criando extensões personalizadas para {% data variables.product.prodname_cli %}.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065534'
---
## Sobre extensões de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Para obter mais informações sobre como usar extensões da {% data variables.product.prodname_cli %}, confira "[Como usar extensões da {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)".

É necessário um repositório para cada extensão que você criar. O nome do repositório precisa começar com `gh-`. O restante do nome do repositório é o nome da extensão. O repositório deve ter um arquivo executável na sua raiz com o mesmo nome que o repositório ou um conjunto de executáveis binários pré-compilados anexados a uma versão.

{% note %}

**Observação:** quando você confiar em um script executável, recomendaremos o uso de um script do Bash, porque o Bash é um interpretador amplamente disponível. Você pode usar scripts que não são de bash, mas o usuário deverá ter o intérprete necessário instalado para usar a extensão. Se você preferir não confiar que os usuários têm intérpretes instalados, considere uma extensão pré-compilada.

{% endnote %}

## Como criar uma extensão interpretada com `gh extension create`

{% note %}

**Observação**: a execução de `gh extension create` sem argumentos iniciará um assistente interativo.

{% endnote %}

Use o comando `gh extension create` para criar um projeto para sua extensão, incluindo um script do Bash que contém um código inicial.

1. Configure uma nova extensão usando o subcomando `gh extension create`. Substitua `EXTENSION-NAME` pelo nome da extensão.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Siga as instruções impressas para finalizar e, opcionalmente, publicar sua extensão.

## Como criar uma extensão pré-compilada no Go com `gh extension create`

Use o argumento `--precompiled=go` para criar um projeto baseado em Go para sua extensão, incluindo o scaffolding do Go, o scaffolding do fluxo de trabalho e o código inicial.

1. Configure uma nova extensão usando o subcomando `gh extension create`. Substitua `EXTENSION-NAME` pelo nome da extensão e especifique `--precompiled=go`.

    ```shell
    gh extension create --precompiled=go <em>EXTENSION-NAME</em>
    ```

1. Siga as instruções impressas para finalizar e, opcionalmente, publicar sua extensão.

## Como criar uma extensão pré-compilada que não é do Go com `gh extension create`

Use o argumento `--precompiled=other` para criar um projeto para sua extensão pré-compilada que não é do Go, incluindo o scaffolding do fluxo de trabalho.

1. Configure uma nova extensão usando o subcomando `gh extension create`. Substitua `EXTENSION-NAME` pelo nome da extensão e especifique `--precompiled=other`.

    ```shell
    gh extension create --precompiled=other <em>EXTENSION-NAME</em>
    ```

1. Adicione um código inicial para sua extensão na linguagem compilada escolhida.

1. Preencha `script/build.sh` com o código para compilar a extensão e verificar se ela pode ser compilada automaticamente.

1. Siga as instruções impressas para finalizar e, opcionalmente, publicar sua extensão.

## Criando uma extensão interpretada manualmente

1. Crie um diretório local chamado `gh-EXTENSION-NAME` para a extensão. Substitua `EXTENSION-NAME` pelo nome da extensão. Por exemplo, `gh-whoami`.

1. No diretório que você criou, adicione um arquivo executável com o mesmo nome do diretório.

  {% note %}

  **Observação:** verifique se o arquivo é executável. No UNIX, você pode executar `chmod +x file_name` na linha de comando para tornar `file_name` executável. No Windows, execute`git init -b main`, `git add file_name` e `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Escreva seu script no arquivo executável. Por exemplo:

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. No seu diretório, instale a extensão como uma extensão local.

   ```shell
   gh extension install .
   ```

1. Verifique se sua extensão funciona. Substitua `EXTENSION-NAME` pelo nome da extensão. Por exemplo, `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. No seu diretório, crie um repositório para publicar a sua extensão. Substitua `EXTENSION-NAME` pelo nome da extensão.

   ```shell
   git init -b main
   git add . && git commit -m "initial commit"
   gh repo create gh-<em>EXTENSION-NAME</em> --source=. --public --push
   ```

1. Opcionalmente, para ajudar outros usuários a descobrir sua extensão, adicione o tópico do repositório `gh-extension`. Isso fará com que a extensão seja exibida na [página do tópico `gh-extension`](https://github.com/topics/gh-extension). Para obter mais informações sobre como adicionar um tópico de repositório, confira "[Como classificar seu repositório com tópicos](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".

## Dicas para escrever extensões de {% data variables.product.prodname_cli %} interpretadas

### Manipulando argumentos e sinalizadores

Todos os argumentos de linha de comando após um comando `gh my-extension-name` serão transmitidos para o script de extensão. Em um script do Bash, você pode referenciar argumentos com `$1`, `$2` etc. Use argumentos para usar a entrada de usuário ou modificar o comportamento do script.

Por exemplo, este script manipula vários sinalizadores. Quando o script é chamado com o sinalizador `-h` ou `--help`, o script imprime o texto de ajuda em vez de continuar a execução. Quando o script é chamado com o sinalizador `--name`, o script define o próximo valor após o sinalizador como `name_arg`. Quando o script é chamado com o sinalizador `--verbose`, o script imprime outra saudação.

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

### Chamar comandos do núcleo em modo não interativo

Alguns comandos principais de {% data variables.product.prodname_cli %} principais pedirão entrada ao usuário. Ao escrever com esses comandos, a instrução é frequentemente indesejável. Para evitar a instrução, forneça a informação necessária explicitamente por meio de argumentos.

Por exemplo, para criar um problema de modo programático, especifique o título e o texto:

```shell
gh issue create --title "My Title" --body "Issue description"
```

### Buscando dados programaticamente

Muitos comandos básicos dão suporte ao sinalizador `--json` para a busca de dados por meio de programação. Por exemplo, para retornar um objeto JSON listando o número, título e status de mesclabilidade dos pull requests:

```shell
gh pr list --json number,title,mergeStateStatus
```

Se não houver um comando básico para buscar dados específicos do GitHub, você poderá usar o comando [`gh api`](https://cli.github.com/manual/gh_api) para acessar a API do GitHub. Por exemplo, para obter informações sobre o usuário atual:

```shell
gh api user
```

Todos os comandos que os dados JSON de saída também têm opções para filtrar esses dados em algo mais imediatamente utilizável por scripts. Por exemplo, para obter o nome do usuário atual:

```shell
gh api user --jq '.name'
```

Para obter mais informações, confira [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).

## Criando uma extensão pré-compilada manualmente

1. Crie um diretório local chamado `gh-EXTENSION-NAME` para a extensão. Substitua `EXTENSION-NAME` pelo nome da extensão. Por exemplo, `gh-whoami`.

1. No diretório que você criou, adicione um código-fonte. Por exemplo:

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

1. No seu diretório, instale a extensão como uma extensão local.

    ```shell
    gh extension install .
    ```

1. Construa o seu código. Por exemplo, com o Go, substituindo `YOUR-USERNAME` pelo seu nome de usuário do GitHub:

    ```shell
    go mod init github.com/<em>YOUR-USERNAME</em>/gh-whoami
    go mod tidy
    go build
    ```

1. Verifique se sua extensão funciona. Substitua `EXTENSION-NAME` pelo nome da extensão. Por exemplo, `whoami`.

    ```shell
    gh <em>EXTENSION-NAME</em>
    ```

1. No seu diretório, crie um repositório para publicar a sua extensão. Substitua `EXTENSION-NAME` pelo nome da extensão.

  {% note %}

  **Observação:** tenha cuidado para não fazer commit do binário produzido pela etapa de build para o controle de versão.

  {% endnote %}

    ```shell
    git init -b main
    echo "gh-<em>EXTENSION-NAME</em>" >> .gitignore
    git add main.go go.* .gitignore && git commit -m'Initial commit'
    gh repo create "gh-<em>EXTENSION-NAME</em>"
    ```

1. Crie uma versão para compartilhar sua extensão pré-compilada com outras pessoas. Faça a compilação para cada plataforma que você deseja suportar, anexando cada binário a uma versão como um ativo. Os executáveis binários anexados às versões precisam seguir uma convenção de nomenclatura e ter o sufixo <em>OS-ARCHITECTURE\[EXTENSION\]</em>.

  Por exemplo, uma extensão chamada `whoami` compilada para o Windows de 64 bits terá o nome `gh-whoami-windows-amd64.exe`, enquanto a mesma extensão compilada para o Linux de 32 bits terá o nome `gh-whoami-linux-386`. Para ver uma lista abrangente de combinações de sistema operacional e arquitetura reconhecidas por `gh`, confira [este código-fonte](https://github.com/cli/cli/blob/14f704fd0da58cc01413ee4ba16f13f27e33d15e/pkg/cmd/extension/manager.go#L696).

  {% note %}

  **Observação:** para que a sua extensão seja executada corretamente no Windows, o arquivo de ativo precisa ter uma extensão `.exe`. Não é necessária qualquer extensão para outros sistemas operacionais.

  {% endnote %}

  As versões podem ser criadas a partir da linha de comando. Por exemplo:

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
