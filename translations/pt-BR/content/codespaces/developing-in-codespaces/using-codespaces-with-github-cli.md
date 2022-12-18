---
title: Usando codespaces com a CLI do GitHub
shortTitle: GitHub CLI
intro: Você pode trabalhar com os {% data variables.product.prodname_github_codespaces %} diretamente na linha de comando usando `gh`, a interface de linha de comando do {% data variables.product.product_name %}.
product: '{% data reusables.gated-features.codespaces %}'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
type: how_to
topics:
- Codespaces
- CLI
- Developer
ms.openlocfilehash: 3ad93a4c72d2f2fedc526b3593ad4a39597e8fc3
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 07/13/2022
ms.locfileid: "145179786"
---
## <a name="about--data-variablesproductprodname_cli-"></a>Sobre a {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} Para obter mais informações, confira "[Sobre a {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)".

Você pode trabalhar com {% data variables.product.prodname_codespaces %} em {% data variables.product.prodname_cli %} para:
- [Listar seus codespaces](#list-all-of-your-codespaces)
- [Criar um codespace](#create-a-new-codespace)
- [Parar um codespace](#stop-a-codespace)
- [Excluir um codespace](#delete-a-codespace)
- [Usar o SSH em um codespace](#ssh-into-a-codespace)
- [Abrir um codespace no {% data variables.product.prodname_vscode %}](#open-a-codespace-in-visual-studio-code)
- [Abrir um codespace no JupyterLab](#open-a-codespace-in-jupyterlab)
- [Copiar um arquivo de/para um codespace](#copy-a-file-tofrom-a-codespace)
- [Modificar as portas em um codespace](#modify-ports-in-a-codespace)
- [Acessar os logs do codespace](#access-codespace-logs)

## <a name="installing--data-variablesproductprodname_cli-"></a>Como instalar a {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## <a name="using--data-variablesproductprodname_cli-"></a>Como usar a {% data variables.product.prodname_cli %}

Se você ainda não fez isso, execute `gh auth login` para se autenticar com sua conta do {% data variables.product.prodname_dotcom %}. 

Para usar `gh` para trabalhar com o {% data variables.product.prodname_codespaces %}, digite `gh codespace <COMMAND>` ou o alias `gh cs <COMMAND>`.

Como exemplo de uma série de comandos que você pode usar para trabalhar com {% data variables.product.prodname_github_codespaces %}, você pode: 

* Liste seus codespaces atuais para verificar se você tem um codespace para um repositório específico:<br>
  `gh codespace list`
* Crie um codespace para o branch do repositório necessário:<br>
  `gh codespace create -r github/docs -b main`
* Use o SSH no novo codespace:<br>
  `gh codespace ssh -c mona-github-docs-v4qxrv7rfwv9w`
* Encaminhe uma porta para o computador local:<br>
  `gh codespace ports forward 8000:8000 -c mona-github-docs-v4qxrv7rfwv9w`

## <a name="gh-commands-for--data-variablesproductprodname_github_codespaces-"></a>Comandos `gh` do {% data variables.product.prodname_github_codespaces %}

As seções abaixo fornecem exemplos de comandos para cada uma das operações disponíveis.

Para ver uma referência completa de comandos `gh` do {% data variables.product.prodname_github_codespaces %}, incluindo detalhes de todas as opções disponíveis para cada comando, confira a ajuda online da {% data variables.product.prodname_cli %} para "[gh codespace](https://cli.github.com/manual/gh_codespace)". Como alternativa, use `gh codespace [<SUBCOMMAND>...] --help` na linha de comando.

{% note %}

**Observação**: o sinalizador `-c <em>codespace-name</em>`, usado com muitos comandos, é opcional. Se você omitir, será exibida uma uma lista de codespaces para você escolher.

{% endnote %}

### <a name="list-all-of-your-codespaces"></a>Listar todos os seus codespaces

```shell
gh codespace list
```

A lista inclui o nome exclusivo de cada codespace, que você pode usar em outros comandos `gh codespace`.

### <a name="create-a-new-codespace"></a>Criar um novo codespace

```shell
gh codespace create -r <em>owner/repository</em> [-b <em>branch</em>]
```

Para obter mais informações, confira "[Como criar um codespace](/codespaces/developing-in-codespaces/creating-a-codespace)".

### <a name="stop-a-codespace"></a>Parar um codespace

```shell
gh codespace stop -c <em>codespace-name</em>
```

Para obter mais informações, confira "[Aprofundamento no Codespaces](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)".

### <a name="delete-a-codespace"></a>Excluir um codespace

```shell
gh codespace delete -c <em>codespace-name</em>
```

Para obter mais informações, confira "[Como excluir um codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)".

### <a name="ssh-into-a-codespace"></a>SSH em um codespace

Para executar comandos na máquina de codespace remoto, a partir do seu terminal, você pode fazer SSH no codespace.

```shell
gh codespace ssh -c <em>codespace-name</em>
```

{% data variables.product.prodname_github_codespaces %} copia suas chaves SSH no codespace ao criar para uma experiência de autenticação perfeita. É possível que se solicite a senha da sua chave SSH e, após isso, você obterá uma instrução de comando da máquina de codespace remoto.

Se você não tiver nenhuma chave SSH, siga as instruções descritas em "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

### <a name="open-a-codespace-in--data-variablesproductprodname_vscode-"></a>Abrir um codespace em {% data variables.product.prodname_vscode %}

```shell
gh codespace code -c <em>codespace-name</em>
```

Para obter mais informações, confira "[Como usar o {% data variables.product.prodname_codespaces %} no {% data variables.product.prodname_vscode %}](/codespaces/developing-in-codespaces/using-codespaces-in-visual-studio-code)".

### <a name="open-a-codespace-in-jupyterlab"></a>Abrir um codespace no JupyterLab

```shell
gh codespace jupyter -c <em>codespace-name</em>
```

### <a name="copy-a-file-tofrom-a-codespace"></a>Copiar um arquivo de/para um codespace

```shell
gh codespace cp [-r] <em>source(s)</em> <em>destination</em> 
```

Use o prefixo `remote:` em um nome de arquivo ou de diretório para indicar que ele está no codespace. Assim como no comando UNIX `cp`, o primeiro argumento especifica a origem e o último especifica o destino. Se o destino for um diretório, você poderá especificar várias fontes. Use o sinalizador `-r` (recursivo) se uma das fontes for um diretório.

O local dos arquivos e diretórios no codespace é relativo ao diretório principal do usuário remoto.

#### <a name="examples"></a>Exemplos

* Copie um arquivo do computador local para o diretório `$HOME` de um codespace:

   `gh codespace cp myfile.txt remote:`

* Copiar um arquivo para o diretório no qual se faz o check-out de um repositório em um codespace:

   `gh codespace cp myfile.txt remote:/workspaces/<REPOSITORY-NAME>`

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

### <a name="modify-ports-in-a-codespace"></a>Modificar portas em um codespace

Você pode encaminhar uma porta em um codespace para uma porta local. A porta será encaminhada enquanto o processo estiver em execução. Para interromper o encaminhamento da porta, pressione <kbd>Control</kbd>+<kbd>C</kbd>.

```shell
gh codespace ports forward <em>codespace-port-number</em>:<em>local-port-number</em> -c <em>codespace-name</em>
```

Para ver os detalhes das portas encaminhadas, insira `gh codespace ports` e escolha um codespace.

Você pode definir a visibilidade de uma porta encaminhada. {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility <em>codespace-port</em>:<em>private|org|public</em> -c <em>codespace-name</em>
```

Você pode definir a visibilidade de várias portas com um comando. Por exemplo:

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c <em>codespace-name</em>
```

Para obter mais informações, confira "[Como encaminhar portas no seu codespace](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)".

### <a name="access-codespace-logs"></a>Acessar registros de codespaces

Você pode ver o registro de criação de um codespace. Depois de entrar neste comando será solicitado que você digite a senha da sua chave SSH.

```shell
gh codespace logs -c <em>codespace-name</em>
```

Para obter mais informações sobre o log de criação, confira "[Logs do Codespaces](/codespaces/troubleshooting/codespaces-logs#creation-logs)".
