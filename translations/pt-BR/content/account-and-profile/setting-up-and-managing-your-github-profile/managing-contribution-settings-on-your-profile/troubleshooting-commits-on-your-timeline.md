---
title: Solucionar problemas de commits na linha do tempo
intro: 'Você pode ver detalhes sobre commits na linha do tempo do seu perfil. Se os commits esperados não forem exibidos no seu perfil ou você não conseguir encontrar detalhes do commit na sua página de perfil, a data do commit e a data de criação do commit poderão ser diferentes.'
redirect_from:
  - /articles/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/troubleshooting-commits-on-your-timeline
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/troubleshooting-commits-on-your-timeline
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Troubleshoot commits
ms.openlocfilehash: 2a1c89fa158f562bc93e1c76489a077a43e410c3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147079396'
---
## Comportamento esperado para exibir detalhes do commit

Na linha do tempo da sua página de perfil, você pode clicar no número de commits ao lado de um determinado repositório para ver mais detalhes sobre os commits nesse período de tempo, inclusive um diff de alterações específicas feitas em um repositório.

![Link de commit na linha do tempo do perfil](/assets/images/help/profile/commit-link-on-profile-timeline.png)

![Detalhes da confirmação](/assets/images/help/commits/commit-details.png)

## Detalhes do commit ausentes em commits na linha do tempo

Se você clicar em um link de commit na sua página de perfil e não vir todos os commits esperados na página de commits do repositório, talvez o histórico de commits no Git tenha sido reescrito e a data de criação do commit e a data do commit sejam diferentes.

![Página Repositório com a mensagem "Nenhum commit encontrado para octocat"](/assets/images/help/repository/no-commits-found.png)

## Como o GitHub usa a data do commit e a data de criação do Git

No Git, a data do autor é quando alguém cria um commit pela primeira vez com `git commit`. A data do commit é idêntica à data do autor, a menos que alguém altere a data do commit usando `git commit --amend`, um push forçado, uma troca de base ou outros comandos do Git.

Na sua página do perfil, a data de criação é usada para calcular quando um commit foi feito. Já em um repositório, a data do commit é usada para calcular quando um commit foi feito no repositório.

Na maioria das vezes, a data de criação e a data do commit são as mesmas, mas você poderá perceber que a sequência de commits está fora de ordem caso o histórico de commits seja alterado. Para obter mais informações, confira "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"

## Ver detalhes do commit ausentes em commits na linha do tempo

Use o comando `git show` com o sinalizador `--pretty=fuller` para verificar se a data do autor do commit e a data do commit são diferentes.

```shell
$ git show <em>Your commit SHA number</em> --pretty=fuller
commit <em>Your commit SHA number</em>
Author:     octocat <em>user email</em>
AuthorDate: Tue Apr 03 02:02:30 2018 +0900
Commit:     Sally Johnson <em>user email</em>
CommitDate: Tue Apr 10 06:25:08 2018 +0900
```

Se a data de criação e do commit forem diferentes, é possível alterar manualmente a data do commit na URL para ver os detalhes do commit.

Por exemplo:
- Esta URL usa a data de autor `2018-04-03`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-03T00:00:00Z&until=2018-04-03T23:59:59Z`
- Esta URL usa a data de commit `2018-04-10`:

  `https://github.com/your-organization-or-personal-account/your-repository/commits?author=octocat&since=2018-04-10T00:00:00Z&until=2018-04-10T23:59:59Z`

Quando você abrir a URL com a data do commit modificada, poderá ver os detalhes do commit.

![Detalhes da confirmação](/assets/images/help/commits/commit-details.png)

## Commits esperados ausentes na linha do tempo

Se você não estiver vendo os commits esperados na linha do tempo, talvez o histórico de commits no Git tenha sido reescrito e a data de criação do commit e a data do commit sejam diferentes. Para ver outras possibilidades, confira "[Por que minhas contribuições não aparecem no meu perfil?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
