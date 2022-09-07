---
title: 'Erro: permissão de usuário/repo negada a outro usuário/repo'
intro: O erro indica que a chave inserida está associada a outro repositório como uma chave de implantação e não tem acesso ao repositório que você está tentando entrar.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145083551'
---
Para corrigir isso, remova a chave de implantação do repositório e [adicione a chave à sua conta pessoal](/articles/adding-a-new-ssh-key-to-your-github-account).

Se a chave que você está usando se destinar a ser uma chave de implantação, confira [nosso guia sobre como implantar chaves](/guides/managing-deploy-keys) para obter mais detalhes.
