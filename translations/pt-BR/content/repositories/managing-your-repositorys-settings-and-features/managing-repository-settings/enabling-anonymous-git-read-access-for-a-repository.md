---
title: Habilitar acesso de leitura anônimo do Git para um repositório
intro: 'Como administrador de repositório, você pode habilitar ou desabilitar o acesso de leitura anônimo do Git para repositórios públicos que atendam a certos requisitos.'
redirect_from:
  - /articles/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/enabling-anonymous-git-read-access-for-a-repository
  - /github/administering-a-repository/managing-repository-settings/enabling-anonymous-git-read-access-for-a-repository
versions:
  ghes: '*'
shortTitle: Anonymous Git read access
ms.openlocfilehash: b289f2e70096775e567be0c925675e9986424821
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145127035'
---
Os administradores de repositório poderão alterar a configuração do acesso de leitura anônimo do Git de um repositório específico se:
- Um administrador de site tiver habilitado o modo privado e o acesso de leitura anônimo do Git.
- O repositório é público na empresa e não é uma bifurcação.
- Um administrador de site não tiver desabilitado o acesso de leitura anônimo do Git do repositório.

{% data reusables.enterprise_user_management.exceptions-for-enabling-anonymous-git-read-access %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Ao lado de "Habilitar acesso de leitura anônimo do Git", clique em **Habilitar**.
![Botão "Habilitado" em "Acesso de leitura anônimo do Git"](/assets/images/help/repository/enable-git-read-access-for-a-repo.png)
4. Revise as alterações. Para confirmar, digite o nome do repositório e clique em **Entendi, habilitar o acesso de leitura anônimo do Git.**
