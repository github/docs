---
title: Using GitHub Codespaces with GitHub CLI
shortTitle: GitHub CLI
intro: 'Você pode trabalhar com {% data variables.product.prodname_github_codespaces %} diretamente da sua linha de comando usando `gh`, a interface de linha de comando de {% data variables.product.product_name %}.'
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
---

## Sobre o {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %} Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_cli %}de](/github-cli/github-cli/about-github-cli)."

Você pode trabalhar com {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_cli %} para:
  - [Listar todos os seus codespaces](#list-all-of-your-codespaces)
  - [Criar um novo codespace](#create-a-new-codespace)
  - [Parar um codespace](#stop-a-codespace)
  - [Excluir um codespace](#delete-a-codespace)
  - [SSH em um codespace](#ssh-into-a-codespace)
  - [Abrir um codespace em {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Abra um codespace no JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Copiar um arquivo de/para um codespace](#copy-a-file-tofrom-a-codespace)
  - [Modificar portas em um codespace](#modify-ports-in-a-codespace)
  - [Acessar registros de codespaces](#access-codespace-logs)

## Instalar o {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}

## Usar {% data variables.product.prodname_cli %}

Se você ainda não o tiver feito, execute `login gh auth` para efetuar a autenticação com a sua conta de {% data variables.product.prodname_dotcom %}.

Para usar `gh` para trabalhar com {% data variables.product.prodname_codespaces %}, digite `gh codespace <COMMAND>` ou seu alias `gh cs <COMMAND>`.

Como exemplo de uma série de comandos que você pode usar para trabalhar com {% data variables.product.prodname_github_codespaces %}, você pode:

* Listar seus codespaces atuais, para verificar se você tem um codespace para um determinado repositório:<br> `gh codespace list`
* Criar um novo codespace para o branch do repositório requerido:<br> `gh codespace create -r github/docs -b main`
* SSH into the new codespace:<br> `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Encaminhar uma porta para sua máquina local:<br> `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## Comandos de `gh` para {% data variables.product.prodname_github_codespaces %}

As seções abaixo fornecem exemplos de comandos para cada uma das operações disponíveis.

Para obter uma referência completa de comandos `gh` para {% data variables.product.prodname_github_codespaces %}, incluindo detalhes de todas as opções disponíveis para cada comando, consulte a ajuda on-line de {% data variables.product.prodname_cli %} para "[gh codespace](https://cli.github.com/manual/gh_codespace)". Como alternativa, use o `gh code [<SUBCOMMAND>...] --help` na linha de comando.

{% note %}

**Nota**: O sinalizador `-c <em>codespace-name</em>`, usado com muitos comandos, é opcional. Se você omitir, será exibida uma uma lista de codespaces para você escolher.

{% endnote %}

### Listar todos os seus codespaces

```shell
gh codespace list
```

A lista inclui o nome único de cada codespace, que você pode usar em outros comandos `gh codespace`.

### Criar um novo codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Para obter mais informações, consulte "[Criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

### Parar um codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

For more information, see "[Deep dive into {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)."

### Excluir um codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Para obter mais informações, consulte "[Excluindo um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

### SSH em um codespace

Para executar comandos na máquina de codespace remoto, a partir do seu terminal, você pode fazer SSH no codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copia suas chaves SSH no codespace ao criar para uma experiência de autenticação perfeita. É possível que se solicite a senha da sua chave SSH e, após isso, você obterá uma instrução de comando da máquina de codespace remoto.

Se você não tiver nenhuma chave SSH, siga as instruções em "[Gerando uma nova chave SSH e adicionando-a ao agente ssh-ssh-](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### Abrir um codespace em {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Para obter mais informações, consulte "[Usando {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_vscode %}de](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)".

### Abra um codespace no JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### Copiar um arquivo de/para um codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Use o prefixo `remote:` em um arquivo ou diretório para indicar que está no codespace. Como o comando `cp` do UNIX, o primeiro argumento especifica a fonte e o último especifica o destino. Se o destino for um diretório, você poderá especificar várias fontes. Use o sinalizador `-r` (recursivo) se qualquer das fontes for um diretório.

O local dos arquivos e diretórios no codespace é relativo ao diretório principal do usuário remoto.

#### Exemplos

* Copie um arquivo da máquina local para o diretório `$HOME` de um codespace:

   `gh codespace cp myfile.txt remote:`

* Copiar um arquivo para o diretório no qual se faz o check-out de um repositório em um codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

* Copiarum arquivo de um código para o diretório atual na máquina local:

   `gh codespace cp remote:myfile.txt .`

* Copie três arquivos locais para o diretório `$HOME/temp` de um codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copie três arquivos de um codespace para o diretório de trabalho atual na máquina local:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copiar um diretório local para o diretório `$HOME` de um codespace:

   `gh codespace cp -r mydir remote:`

* Copiar o diretório de um codespace para a máquina local, alterando o nome do diretório:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Para obter mais informações sobre o comando `gh code cp`, incluindo sinalizadores adicionais que você pode usar, consulte [ o manual de {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Modificar portas em um codespace

Você pode encaminhar uma porta em um codespace para uma porta local. A porta será encaminhada enquanto o processo estiver em execução. Para parar de encaminhar a porta, pressione <kbd>Controle</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Para ver os detalhes das portas encaminhadas, digite `gh codespace ports` e, em seguida, escolha um codespace.

Você pode definir a visibilidade de uma porta encaminhada. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Você pode definir a visibilidade de várias portas com um comando. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Para obter mais informações, consulte "[Encaminhando portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### Acessar registros de codespaces

Você pode ver o registro de criação de um codespace. Depois de entrar neste comando será solicitado que você digite a senha da sua chave SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

For more information about the creation log, see "[{% data variables.product.prodname_github_codespaces %} logs](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)."
