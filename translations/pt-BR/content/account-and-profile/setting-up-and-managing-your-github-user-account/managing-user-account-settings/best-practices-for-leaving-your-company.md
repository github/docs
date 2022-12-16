---
title: Práticas recomendadas para deixar a empresa
intro: If you use your account on {% data variables.product.product_name %} for both personal and work purposes, there are a few things to keep in mind when you leave your company or organization.
redirect_from:
- /articles/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
- /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
- Accounts
shortTitle: Leaving your company
ms.openlocfilehash: 4384955c0b81e887cb2671a537291b438664e621
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145085297"
---
Antes de sair da empresa, não se esqueça de atualizar as seguintes informações em sua conta pessoal:

- Cancele a verificação do endereço de email da sua empresa [excluindo-o nas configurações de Email](/articles/changing-your-primary-email-address). Você pode adicioná-lo novamente sem verificação para manter os commits associados vinculados à sua conta.
- [Altere o endereço de email principal](/articles/changing-your-primary-email-address) do email da sua empresa para o seu email pessoal.
{% ifversion fpt or ghec %}
- [Verifique o novo endereço de email principal](/articles/verifying-your-email-address).
{% endif %}
- [Altere seu nome de usuário do GitHub](/articles/changing-your-github-username) para remover qualquer referência à sua empresa ou organização, se necessário.

## <a name="leaving-organizations"></a>Saída das organizações

Se você estiver trabalhando com repositórios que pertencem a uma organização, o ideal será [se remover como membro da organização](/articles/removing-yourself-from-an-organization). Observe que, se você for o proprietário da organização, primeiro, deverá [transferir a propriedade da organização](/articles/transferring-organization-ownership) para outra pessoa.

## <a name="removing-professional-associations-with-personal-repositories"></a>Remover associações profissionais a repositórios pessoais

Se você estiver colaborando profissionalmente com outra pessoa em repositórios que pertencem a sua conta pessoal, o ideal será [se remover como colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) desses repositórios.

- [Pare de inspecionar os repositórios](https://github.com/watching) relacionados ao seu trabalho. Você não desejará mais receber essas notificações!
- [Transfira os repositórios dos quais você é o proprietário](/articles/how-to-transfer-a-repository) e nos quais outras pessoas talvez precisem continuar trabalhando depois que você sair deles.
- [Exclua os forks que pertencem a você](/articles/deleting-a-repository) relacionados ao trabalho que você estava fazendo. Não se preocupe, excluir uma bifurcação não exclui o repositório upstream.
- Exclua cópias locais de suas bifurcações que possam existir no seu computador:

```shell
$ rm -rf <em>work_directory</em>
```
