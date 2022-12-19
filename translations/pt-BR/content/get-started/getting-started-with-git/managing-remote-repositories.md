---
title: Gerenciar repositórios remote
intro: 'Aprenda a trabalhar com seus repositórios locais no seu computador e repositórios remotos hospedados no {% data variables.product.product_name %}.'
redirect_from:
  - /categories/18/articles
  - /remotes
  - /categories/managing-remotes
  - /articles/managing-remote-repositories
  - /articles/adding-a-remote
  - /github/using-git/adding-a-remote
  - /articles/changing-a-remote-s-url
  - /articles/changing-a-remotes-url
  - /github/using-git/changing-a-remotes-url
  - /articles/renaming-a-remote
  - /github/using-git/renaming-a-remote
  - /articles/removing-a-remote
  - /github/using-git/removing-a-remote
  - /github/using-git/managing-remote-repositories
  - /github/getting-started-with-github/managing-remote-repositories
  - /github/getting-started-with-github/getting-started-with-git/managing-remote-repositories
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manage remote repositories
ms.openlocfilehash: d89a9c008128154e7de045be0de54db04168cb33
ms.sourcegitcommit: 7fb7ec2e665856fc5f7cd209b53bd0fb1c9bbc67
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/29/2022
ms.locfileid: '148185048'
---
## Adicionar um repositório remoto

Para adicionar um novo controle remoto, use o comando `git remote add` no terminal, no diretório em que o repositório está armazenado.

O comando `git remote add` usa dois argumentos:
* Um nome de repositório remoto, por exemplo, `origin`
* Uma URL remota, por exemplo, `https://{% data variables.command_line.backticks %}/user/repo.git`

Por exemplo:

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/USER/REPO.git
# Set a new remote

$ git remote -v
# Verify new remote
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/USER/REPO.git (push)
```

Para obter mais informações sobre qual URL usar, confira "[Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".

### Solução de problemas: A origem remota já existe

Esse erro significa que você tentou adicionar um remoto com um nome que já existe no repositório local.

```shell
$ git remote add origin https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife.git
> fatal: remote origin already exists.
```

Para corrigir isso, você pode:
* Usar um nome diferente para o novo remoto
* Renomeie o repositório remoto existente antes de adicionar o novo repositório remoto. Para obter mais informações, confira "[Renomear um repositório remoto](#renaming-a-remote-repository)" abaixo.
* Exclua o repositório remoto existente antes de adicionar o novo repositório remoto. Para obter mais informações, confira "[Remover um repositório remoto](#removing-a-remote-repository)" abaixo.

## Alterar a URL de um repositório remoto

O comando `git remote set-url` altera uma URL do repositório remoto existente.

{% tip %}

**Dica:** Para obter informações sobre a diferença entre URLs HTTPS e SSH, confira "[Sobre repositórios remotos](/github/getting-started-with-github/about-remote-repositories)".

{% endtip %}

O comando `git remote set-url` usa dois argumentos:

* Um nome remote existente. Por exemplo, `origin` ou `upstream` são duas opções comuns.
* Uma nova URL para o remote. Por exemplo:
  * Se estiver atualizando para usar HTTPS, a URL poderá ser parecida com esta:
```shell
https://{% data variables.command_line.backticks %}/USERNAME/REPOSITORY.git
```
  * Se estiver atualizando para usar SSH, a URL poderá ser parecida com esta:
```shell
git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
```

### Alternar URLs remotes de SSH para HTTPS

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para seu projeto local.
3. Liste seus remotes existentes para obter o nome do remote que deseja alterar.
  ```shell
  $ git remote -v
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git (push)
  ```
4. Altere a URL do repositório remoto do SSH para HTTPS com o comando `git remote set-url`.
  ```shell
  $ git remote set-url origin https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git
  ```
5. Verifique se o URL remote foi alterado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```

Na próxima vez que você usar `git fetch`, `git pull` ou `git push` para o repositório remoto, deverá fornecer seu nome de usuário e senha do GitHub. {% data reusables.user-settings.password-authentication-deprecation %}

É possível [usar um auxiliar de credencial](/github/getting-started-with-github/caching-your-github-credentials-in-git) para que o Git se lembre do nome de usuário do GitHub e do {% data variables.product.pat_generic %} toda vez que se comunicar com o GitHub.

### Mudar as URLs remotas de HTTPS para SSH

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Altere o diretório de trabalho atual para seu projeto local.
3. Liste seus remotes existentes para obter o nome do remote que deseja alterar.
  ```shell
  $ git remote -v
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (fetch)
  > origin  https://{% data variables.command_line.codeblock %}/USERNAME/REPOSITORY.git (push)
  ```
4. Altere a URL do seu remoto de HTTPS para SSH com o comando `git remote set-url`.
  ```shell
  $ git remote set-url origin git@{% data variables.command_line.codeblock %}:USERNAME/REPOSITORY.git
  ```
5. Verifique se o URL remote foi alterado.
  ```shell
  $ git remote -v
  # Verify new remote URL
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (fetch)
  > origin  git@{% data variables.command_line.codeblock %}: USERNAME/REPOSITORY.git (push)
  ```

### Solução de problemas: Não há tal '[name]' remoto '

Este erro informa que o remote que você tentou alterar não existe:

```shell
$ git remote set-url sofake https://{% data variables.command_line.codeblock %}/octocat/Spoon-Knife
> fatal: No such remote 'sofake'
```

Verifique se você inseriu corretamente o nome do remote.

## Renomear um repositório remoto

Use o comando `git remote rename` para renomear um remoto existente.

O comando `git remote rename` usa dois argumentos:
* Um nome remoto existente, por exemplo, `origin`
* Um novo nome para o remoto, por exemplo, `destination`

## Exemplo

Esses exemplos pressupõem que você esteja [clonando usando HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), o que é recomendado.

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)

$ git remote rename origin destination
# Change remote name from 'origin' to 'destination'

$ git remote -v
# Verify remote's new name
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Solução de problemas: Não foi possível renomear a seção de configuração 'remote.[old name]' para 'remote.[new name]'

Este erro significa que o nome remoto antigo digitado não existe.

Você pode verificar quais remotos existem atualmente com o comando `git remote -v`:

```shell
$ git remote -v
# View existing remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

### Solução de problemas: Já existe um [new name] remoto

Esse erro informa que o nome de remote que você deseja usar já existe. Para resolver isso, use um nome remoto diferente ou renomeie o remoto original.

## Remover um repositório remoto 

Use o comando `git remote rm` para remover uma URL remota do repositório.

O comando `git remote rm` usa um argumento:
* Um nome de repositório remoto, por exemplo, `destination`

A remoção do URL remoto do repositório apenas desvincula os repositórios locais e remotos. Isso não exclui o repositório remoto.

## Exemplo

Esses exemplos pressupõem que você esteja [clonando usando HTTPS](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), o que é recomendado.

```shell
$ git remote -v
# View current remotes
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (fetch)
> destination  https://{% data variables.command_line.codeblock %}/FORKER/REPOSITORY.git (push)

$ git remote rm destination
# Remove remote
$ git remote -v
# Verify it's gone
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (fetch)
> origin  https://{% data variables.command_line.codeblock %}/OWNER/REPOSITORY.git (push)
```

{% warning %}

**Observação**: `git remote rm` não exclui o repositório remoto do servidor. Ele simplesmente remove o remoto e suas referências do repositório local.

{% endwarning %}

### Solução de problemas: Não foi possível remover a seção 'remote.[name]'

Esse erro informa que o remote que você tentou excluir não existe:

```shell
$ git remote rm sofake
> error: Could not remove config section 'remote.sofake'
```

Verifique se você inseriu corretamente o nome do remote.

## Leitura adicional

- "[Como trabalhar com repositórios remotos" do livro _Pro Git_](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)
