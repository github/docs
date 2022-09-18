---
title: Ignorar arquivos
redirect_from:
  - /git-ignore
  - /ignore-files
  - /articles/ignoring-files
  - /github/using-git/ignoring-files
  - /github/getting-started-with-github/ignoring-files
  - /github/getting-started-with-github/getting-started-with-git/ignoring-files
intro: 'Você pode configurar o Git para ignorar arquivos dos quais você não deseja fazer o check-in para {% data variables.product.product_name %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 4e98e0a4eb4f2f75056621bd0123c651a04a9b6d
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145126737'
---
## Configurar arquivos ignorados para um único repositório

Você pode criar um arquivo *.gitignore* no diretório raiz do repositório para informar o Git de quais arquivos e diretórios devem ser ignorados durante um commit.
Para compartilhar as regras de ignorar com outros usuários que clonam o repositório, faça commit do arquivo *.gitignore* no repositório.

O GitHub mantém uma lista oficial de arquivos *.gitignore* recomendados para vários sistemas operacionais, ambientes e linguagens populares no repositório público `github/gitignore`. Use também o gitignore.io para criar um arquivo *.gitignore* para seu sistema operacional, sua linguagem de programação ou seu IDE. Para obter mais informações, confira "[github/gitignore](https://github.com/github/gitignore)" e o site "[gitignore.io](https://www.gitignore.io/)".

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue para o local do seu repositório do Git.
3. Crie um arquivo *.gitignore* para seu repositório.
   ```shell
   $ touch .gitignore
  ```

   Se o comando for bem-sucedido, não haverá saída.
   
Para ver um exemplo de arquivo *.gitignore*, confira "[Algumas configurações comuns do .gitignore](https://gist.github.com/octocat/9257657)" no repositório do Octocat.

Se você deseja ignorar um arquivo que já foi ingressado, você deve cancelar o rastreamento do arquivo antes de adicionar uma regra para ignorá-lo. No seu terminal, deixe de rastrear o arquivo.

```shell
$ git rm --cached <em>FILENAME</em>
```

## Configurar arquivos ignorados para todos os repositórios no seu computador

Crie também um arquivo *.gitignore* global para definir uma lista de regras a fim de ignorar os arquivos de todos os repositórios Git no computador. Por exemplo, crie o arquivo em *~/.gitignore_global* e adicione algumas regras a ele.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Configure o Git para usar o arquivo de exclusão *~/.gitignore_global* para todos os repositórios Git.
  ```shell
  $ git config --global core.excludesfile ~/.gitignore_global
  ```

## Como excluir arquivos locais sem criar um arquivo *.gitignore*

Caso não deseje criar um arquivo *.gitignore* para compartilhar com outras pessoas, crie regras que não sejam confirmadas no repositório. Você pode usar essa técnica para arquivos que você gerou localmente e que não espera que outros usuários o façam, como arquivos criados pelo seu editor.

Use seu editor de texto favorito para abrir o arquivo chamado *.git/info/exclude* na raiz do repositório Git. Qualquer regra que você adicionar aqui não será verificada e ignorará arquivos somente em seu repositório local.

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Navegue para o local do seu repositório do Git.
3. Usando seu editor de texto favorito, abra o arquivo *.git/info/exclude*.

## Leitura Adicional

* [Como ignorar arquivos](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_ignoring) no livro Pro Git
* [.gitignore](https://git-scm.com/docs/gitignore) nas páginas de manual do Git
* [Uma coleção de modelos *.gitignore* úteis](https://github.com/github/gitignore) no repositório github/gitignore
* Site [gitignore.io](https://www.gitignore.io/)
