---
title: Práticas recomendadas para deixar a empresa
intro: 'Se você usa sua conta de usuário no {% data variables.product.product_name %} com finalidade pessoal e profissional, considere algumas práticas ao sair da empresa ou da organização.'
redirect_from:
  - /articles/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/best-practices-for-leaving-your-company
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/best-practices-for-leaving-your-company
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/best-practices-for-leaving-your-company
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Leaving your company
ms.openlocfilehash: c288584891981eab7ffe4204e2028b0e70cf1d08
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147687081'
---
Antes de sair da empresa, não se esqueça de atualizar as seguintes informações em sua conta pessoal:

- Cancele a verificação do endereço de email da sua empresa [excluindo-o nas configurações de Email](/articles/changing-your-primary-email-address). Você pode adicioná-lo novamente sem verificação para manter os commits associados vinculados à sua conta.
- [Altere o endereço de email principal](/articles/changing-your-primary-email-address) do email da sua empresa para o seu email pessoal.
- [Verifique o novo endereço de email principal](/articles/verifying-your-email-address).
- [Altere seu nome de usuário do GitHub](/articles/changing-your-github-username) para remover qualquer referência à sua empresa ou organização, se necessário.
- Se você habilitou a 2FA (autenticação de dois fatores) para sua conta pessoal, verifique se você (não sua empresa) controla o método de autenticação 2FA configurado. Para obter mais informações, confira "[Como configurar a autenticação de dois fatores](/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)".

## Saída das organizações

Se você estiver trabalhando com repositórios que pertencem a uma organização, o ideal será [se remover como membro da organização](/articles/removing-yourself-from-an-organization). Observe que, se você for o proprietário da organização, primeiro, deverá [transferir a propriedade da organização](/articles/transferring-organization-ownership) para outra pessoa.

A menos que você esteja usando um {% data variables.product.prodname_managed_user %}, você poderá acessar sua conta pessoal, mesmo após sair da organização. Para obter mais informações sobre {% data variables.product.prodname_emus %}, confira "[Sobre {% data variables.product.prodname_emus %}]({% ifversion not ghec%}/enterprise-cloud@latest{% endif %}/admin/identity-and-access-management/using-enterprise-managed-users-for-iam/about-enterprise-managed-users){% ifversion not ghec %}" na documentação do {% data variables.product.prodname_ghe_cloud %}.{% else %}."{% endif %}

## Remover associações profissionais a repositórios pessoais

Se você estiver colaborando profissionalmente com outra pessoa em repositórios que pertencem a sua conta pessoal, o ideal será [remover sua função como colaborador](/articles/removing-yourself-from-a-collaborator-s-repository) desses repositórios.

- [Pare de inspecionar os repositórios](https://github.com/watching) relacionados ao seu trabalho. Você não desejará mais receber essas notificações!
- [Transfira os repositórios dos quais você é o proprietário](/articles/how-to-transfer-a-repository) e nos quais outras pessoas talvez precisem continuar trabalhando depois que você sair deles.
- [Exclua os forks que pertencem a você](/articles/deleting-a-repository) relacionados ao trabalho que você estava fazendo. Não se preocupe, excluir uma bifurcação não exclui o repositório upstream.
- Exclua cópias locais de suas bifurcações que possam existir no seu computador:

```shell
$ rm -rf <em>work_directory</em>
```
