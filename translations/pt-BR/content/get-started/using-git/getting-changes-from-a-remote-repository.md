---
title: Obter alterações de um repositório remote
intro: É possível usar comandos Git comuns para acessar repositórios remotes.
redirect_from:
  - /articles/fetching-a-remote
  - /articles/getting-changes-from-a-remote-repository
  - /github/using-git/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/getting-changes-from-a-remote-repository
  - /github/getting-started-with-github/using-git/getting-changes-from-a-remote-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Get changes from a remote
ms.openlocfilehash: 11996b33ccedea8169f472feb1804f2eed5a5d9d
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145101340'
---
## Opções para obter alterações

Esses comandos são muito úteis quando você interage com [um repositório remoto](/github/getting-started-with-github/about-remote-repositories). `clone` e `fetch` baixam o código remoto de uma URL remota de um repositório para o computador local, `merge` é usado para mesclar o trabalho de diferentes pessoas com o seu e `pull` é uma combinação de `fetch` e `merge`.

## Clonar um repositório

Para obter uma cópia completa do repositório de outro usuário, use `git clone` desta forma:

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>USERNAME</em>/<em>REPOSITORY</em>.git
# Clones a repository to your computer
```

Você pode escolher entre [várias URLs diferentes](/github/getting-started-with-github/about-remote-repositories) ao clonar um repositório. Quando estiver conectado em {% data variables.product.prodname_dotcom %}, esses URLs estarão disponíveis abaixo dos detalhes do repositório:

![Lista de URLs remote](/assets/images/help/repository/remotes-url.png)

Quando você executa `git clone`, as seguintes ações ocorrem:
- Uma pasta `repo` é criada
- Ele é inicializado como um repositório Git
- Um repositório remoto chamado `origin` é criado, apontando para a URL da qual você fez o clone
- Todos os arquivos e commits do repositório são baixados ali
- O branch-padrão foi desmarcado

Para cada branch `foo` no repositório remoto, um branch `refs/remotes/origin/foo` de acompanhamento remoto correspondente é criado no repositório local. Normalmente, você pode abreviar esses nomes de branches de acompanhamento remoto para `origin/foo`.

## Fazer fetch de um repositório remote

Use `git fetch` para recuperar o novo trabalho feito por outras pessoas. A busca em um repositório captura todos os novos branches e as tags de acompanhamento remoto *sem* mesclar essas alterações em seus branches.

Se você já tiver um repositório local com uma URL remota configurada para o projeto desejado, poderá capturar todas as novas informações usando `git fetch *remotename*` no terminal:

```shell
$ git fetch <em>remotename</em>
# Fetches updates made to a remote repository
```

Caso contrário, você sempre pode adicionar um novo remoto e, em seguida, procurar. Para obter mais informações, confira "[Como gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Fazer merge de alterações em seu branch local

O merge combina suas alterações locais com as alterações feitas por outras pessoas.

Geralmente, você faria um merge de um branch de acompanhamento remoto (por exemplo, um branch com fetch de um repositório remote) com seu branch local:

```shell
$ git merge <em>remotename</em>/<em>branchname</em>
# Merges updates made online with your local work
```

## Fazer pull de alterações de um repositório remote

`git pull` é um atalho conveniente para realizar `git fetch` e `git merge ` no mesmo comando:

```shell
$ git pull <em>remotename</em> <em>branchname</em>
# Grabs online updates and merges them with your local work
```

Como `pull` executa uma mesclagem nas alterações recuperadas, você deve garantir o commit do trabalho local antes de executar o comando `pull`. Se você encontrar [um conflito de mesclagem](/github/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line) que não pode resolver ou se decidir sair da mesclagem, use `git merge --abort` para levar o branch de volta para o local em que estava antes do pull.

## Leitura adicional

- ["Como trabalhar com repositórios remotos" do _livro_ Pro Git](https://git-scm.com/book/en/Git-Basics-Working-with-Remotes)"{% ifversion fpt or ghec %}
- "[Solução de problemas de conectividade](/articles/troubleshooting-connectivity-problems)"{% endif %}
