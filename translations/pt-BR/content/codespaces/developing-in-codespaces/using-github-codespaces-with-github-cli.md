---
title: Como usar o GitHub Codespaces com a CLI do GitHub
shortTitle: GitHub CLI
intro: 'Você pode trabalhar com o {% data variables.product.prodname_github_codespaces %} diretamente de sua linha de comando usando `gh`, a interface de linha de comando {% data variables.product.product_name %}.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163494'
---
## Sobre a {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

É possível trabalhar com o {% data variables.product.prodname_github_codespaces %} na {% data variables.product.prodname_cli %} para fazer o seguinte:
  - [Listar todos os seus codespaces](#list-all-of-your-codespaces)
  - [Criar um novo codespace](#create-a-new-codespace)
  - [Parar um codespace](#stop-a-codespace)
  - [Excluir um codespace](#delete-a-codespace)
  - [Renomear um codespace](#rename-a-codespace)
  - [Usar o SSH em um codespace](#ssh-into-a-codespace)
  - [Abrir um codespace no {% data variables.product.prodname_vscode %}](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [Abrir um codespace no JupyterLab](#open-a-codespace-in-jupyterlab)
  - [Copiar um arquivo de/para um codespace](#copy-a-file-tofrom-a-codespace)
  - [Modificar as portas em um codespace](#modify-ports-in-a-codespace)
  - [Acessar os logs do codespace](#access-codespace-logs)
  - [Acessar recursos remotos](#access-remote-resources)
  - [Alterar o tipo de computador de um codespace](#change-the-machine-type-of-a-codespace)

## Como instalar a {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## Como usar a {% data variables.product.prodname_cli %}

Se você ainda não fez isso, execute `gh auth login` para se autenticar com sua conta do {% data variables.product.prodname_dotcom %}. 

Para usar `gh` a fim de trabalhar com o {% data variables.product.prodname_github_codespaces %}, digite `gh codespace SUBCOMMAND` ou o alias `gh cs SUBCOMMAND` dele.

Como exemplo de uma série de comandos que você pode usar para trabalhar com {% data variables.product.prodname_github_codespaces %}, você pode: 

* Liste seus codespaces atuais para verificar se você tem um codespace para um repositório específico:<br>
  `gh codespace list`
* Crie um codespace para o branch do repositório necessário:<br>
  `gh codespace create -r github/docs -b main`
* Use o SSH no novo codespace:<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* Encaminhe uma porta para o computador local:<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## Comandos `gh` do {% data variables.product.prodname_github_codespaces %}

As seções abaixo fornecem exemplos de comandos para cada uma das operações disponíveis.

Para ver uma referência completa de comandos `gh` do {% data variables.product.prodname_github_codespaces %}, incluindo detalhes de todas as opções disponíveis para cada comando, confira a ajuda online da {% data variables.product.prodname_cli %} para "[gh codespace](https://cli.github.com/manual/gh_codespace)". Como alternativa, na linha de comando, use `gh codespace --help` para ajuda geral ou `gh codespace SUBCOMMAND --help` para ajuda com um subcomando específico.

{% note %}

**Observação**: o sinalizador `-c CODESPACE_NAME`, usado com muitos comandos, é opcional. Se você omitir, será exibida uma uma lista de codespaces para você escolher.

{% endnote %}

### Listar todos os seus codespaces

```shell
gh codespace list
```

A lista inclui o nome exclusivo de cada codespace, que você pode usar em outros comandos `gh codespace`.

Um asterisco no final do nome do branch de um codespace indica que há nele alterações não confirmadas ou não enviadas por push.

### Criar um novo codespace

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

Para obter mais informações, confira "[Como criar um codespace para um repositório](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)".

### Parar um codespace

```shell
gh codespace stop -c CODESPACE-NAME
```

Para ver mais informações, confira "[Aprofundamento nos {% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### Excluir um codespace

```shell
gh codespace delete -c CODESPACE-NAME
```

Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

### Renomear um codespace

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

Para saber mais, confira "[Renomear um codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)".

### SSH em um codespace

Para executar comandos na máquina de codespace remoto, a partir do seu terminal, você pode fazer SSH no codespace.

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

**Nota**: {% data reusables.codespaces.ssh-server-installed %}

<br>Para saber mais sobre o arquivo `devcontainer.json` e a imagem de contêiner padrão, confira "[Introdução aos contêineres de desenvolvimento](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)".

{% endnote %}

{% data variables.product.prodname_github_codespaces %} copia suas chaves SSH no codespace ao criar para uma experiência de autenticação perfeita. É possível que se solicite a senha da sua chave SSH e, após isso, você obterá uma instrução de comando da máquina de codespace remoto.

Se você não tiver nenhuma chave SSH, siga as instruções descritas em "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### Abrir um codespace em {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c CODESPACE-NAME
```

É necessário ter o {% data variables.product.prodname_vscode_shortname %} instalado no computador local. Para saber mais, confira "[Usar o {% data variables.product.prodname_github_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)".

### Abrir um codespace no JupyterLab

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### Copiar um arquivo de/para um codespace

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

Use o prefixo `remote:` em um nome de arquivo ou de diretório para indicar que ele está no codespace. Assim como no comando UNIX `cp`, o primeiro argumento especifica a origem e o último especifica o destino. Se o destino for um diretório, você poderá especificar várias fontes. Use o sinalizador `-r` (recursivo) se uma das fontes for um diretório.

O local dos arquivos e diretórios no codespace é relativo ao diretório principal do usuário remoto.

#### Exemplos

* Copie um arquivo do computador local para o diretório `$HOME` de um codespace:

   `gh codespace cp myfile.txt remote:`

* Copiar um arquivo para o diretório no qual se faz o check-out de um repositório em um codespace:

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* Copiarum arquivo de um código para o diretório atual na máquina local:

   `gh codespace cp remote:myfile.txt .`

* Copie três arquivos locais para o diretório `$HOME/temp` de um codespace:

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* Copie três arquivos de um codespace para o diretório de trabalho atual na máquina local:

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* Copie um diretório local para o diretório `$HOME` de um codespace:

   `gh codespace cp -r mydir remote:`

* Copiar o diretório de um codespace para a máquina local, alterando o nome do diretório:

   `gh codespace cp -r remote:mydir mydir-localcopy`

Para obter mais informações sobre o comando `gh codespace cp`, incluindo sinalizadores adicionais que você pode usar, confira [o manual da {% data variables.product.prodname_cli %}](https://cli.github.com/manual/gh_codespace_cp).

### Modificar portas em um codespace

Você pode encaminhar uma porta em um codespace para uma porta local. A porta será encaminhada enquanto o processo estiver em execução. Para interromper o encaminhamento da porta, pressione <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

Para ver os detalhes das portas encaminhadas, insira `gh codespace ports` e escolha um codespace.

Você pode definir a visibilidade de uma porta encaminhada. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

Você pode definir a visibilidade de várias portas com um comando. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### Acessar registros de codespaces

Você pode ver o registro de criação de um codespace. Depois de entrar neste comando será solicitado que você digite a senha da sua chave SSH.

```shell
gh codespace logs -c CODESPACE-NAME
```

Para ver mais informações sobre o log de criação, confira "[logs do {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)".

### Acessar recursos remotos 
Você pode usar a extensão {% data variables.product.prodname_cli %} para criar uma ponte entre um codespace e seu computador local, e o codespace possa acessar qualquer recurso remoto que esteja acessível em seu computador. Para obter mais informações sobre como usar a extensão, confira "[Como usar dados {% data variables.product.prodname_cli %} para acessar recursos remotos](https://github.com/github/gh-net#codespaces-network-bridge)".

{% note %}

**Observação**: a extensão {% data variables.product.prodname_cli %} está atualmente na versão beta e sujeita a alterações. 

{% endnote %}

### Alterar o tipo de computador de um codespace

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

Para saber mais, confira a guia "{% data variables.product.prodname_cli %}" de "[Alterar o tipo de computador de um codespace](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)".
