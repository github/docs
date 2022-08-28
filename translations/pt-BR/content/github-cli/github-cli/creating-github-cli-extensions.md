---
title: Criando extensões da CLI do GitHub
intro: 'Aprenda a compartilhar novos comandos {% data variables.product.prodname_cli %} com outros usuários criando extensões personalizadas para {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
---

## Sobre extensões de {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-extensions %} Para obter mais informações sobre como usar as extensões de {% data variables.product.prodname_cli %}, consulte "[Usando extensões de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)".

É necessário um repositório para cada extensão que você criar. O nome do repositório deve iniciar com `gh-`. O restante do nome do repositório é o nome da extensão. Na raiz do repositório, deve haver um arquivo executável com o mesmo nome do repositório. Este arquivo será executado quando a extensão for chamada.

{% note %}

**Observação**: Recomendamos que o arquivo executável seja um script de bash, porque bash é um intérprete amplamente disponível. Você pode usar scripts que não são de bash, mas o usuário deverá ter o intérprete necessário instalado para usar a extensão.

{% endnote %}

## Criando uma extensão com `gh extension create`

Você pode usar o comando `gh extension create` para criar um projeto para sua extensão, incluindo um script de bash que contém um código inicial.

1. Configure uma nova extensão usando a o subcomando `gh extension create`. Substitua `EXTENSION-NAME` pelo nome da sua extensão.

    ```shell
    gh extension create <em>EXTENSION-NAME</em>
    ```

1. Siga as instruções impressas para finalizar e, opcionalmente, publicar sua extensão.

## Criando uma extensão manualmente

1. Crie um diretório local denominado `gh-EXTENSION-NAME` para a sua extensão. Substitua `EXTENSION-NAME` pelo nome da sua extensão. Por exemplo, `gh-whoami`.

1. No diretório que você criou, adicione um arquivo executável com o mesmo nome do diretório.

  {% note %}

  **Observação:** Certifique-se de que seu arquivo seja executável. No Unix, você pode executar `chmod +x file_name` na linha de comando para tornar `file_name` executável. No Windows, você pode executar `git init -b main`, `git add file_name` e, em seguida, `git update-index --chmod=+x file_name`.

  {% endnote %}

1. Escreva seu script no arquivo executável. Por exemplo:

  ```bash
  #!/usr/bin/env bash
  set -e
  exec gh api user --jq '"You are @\(.login) (\(.name))."'
  ```

1. No seu diretório, instale a extensão como uma extensão local.

   ```bash
   gh extension install .
   ```

1. Verifique se sua extensão funciona. Substitua `EXTENSION-NAME` pelo nome da sua extensão. Por exemplo, `whoami`.

   ```shell
   gh <em>EXTENSION-NAME</em>
   ```

1. No seu diretório, crie um repositório para publicar a sua extensão. Substitua `EXTENSION-NAME` pelo nome da sua extensão.

   ```shell
   git init -b main
   gh repo create gh-<em>EXTENSION-NAME</em> --confirm
   git add . && git commit -m "initial commit" && git push --set-upstream origin main
   ```

1. Opcionalmente, para ajudar outros usuários a descobrir sua extensão, adicione o tópico do repositório `gh-extension`. Isso fará com que a extensão apareça na página do tópico</a> de

`gh-extension`. Para obter mais informações sobre como adicionar um tópico do repositório, consulte "[Classificando seu repositório com tópicos](/github/administering-a-repository/managing-repository-settings/classifying-your-repository-with-topics)".</p></li> </ol> 
   
   

## Dicas para escrever extensões de {% data variables.product.prodname_cli %}



### Manipulando argumentos e sinalizadores

Todos os argumentos de linha de comando após um `gh my-extension-name` serão passados para o script da extensão. Em um script de bash, você pode fazer referência a argumentos com `$1`, `$2`, etc. Você pode usar argumentos para inserir o usuário ou modificar o comportamento do script.

Por exemplo, este script manipula vários sinalizadores. Quando o script é chamado com o sinalizador `-h` ou `--help` flag, o script imprime texto ao invés de continuar a execução. Quando o script é chamado com o o sinalizador `--name`, o script define o próximo valor após o sinalizador para `name_arg`. Quando o script é chamado com o sinalizador `--verbose`, o script imprime uma saudação diferente.



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



```bash
gh issue create --title "My Title" --body "Issue description"
```




### Buscando dados programaticamente

Muitos comandos principais são compatíveis o sinalizador `--json` para obter dados programaticamente. Por exemplo, para retornar um objeto JSON listando o número, título e status de mesclabilidade dos pull requests:


```bash
gh pr list --json number,title,mergeStateStatus
```


Se não houver um comando do núcleo para buscar dados específicos do GitHub, você poderá usar o comando [`gh api`](https://cli.github.com/manual/gh_api) para acessar a API do GitHub. Por exemplo, para obter informações sobre o usuário atual:


```bash
gh api user
```


Todos os comandos que os dados JSON de saída também têm opções para filtrar esses dados em algo mais imediatamente utilizável por scripts. Por exemplo, para obter o nome do usuário atual:



```bash
gh api user --jq '.name'
```


Para obter mais informações, consulte [`gh help formatting`](https://cli.github.com/manual/gh_help_formatting).



## Próximas etapas

Para ver mais exemplos de extensões {% data variables.product.prodname_cli %}, consulte [repositórios com o tópico de extensão `gh-extension`](https://github.com/topics/gh-extension).
