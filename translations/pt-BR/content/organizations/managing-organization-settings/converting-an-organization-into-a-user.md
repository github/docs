---
title: Converter uma organização em usuário
intro: 'Não é possível converter uma organização em uma conta pessoal, mas você pode criar uma conta pessoal e transferir os repositórios da organização para ela.'
redirect_from:
  - /articles/converting-an-organization-into-a-user
  - /github/setting-up-and-managing-organizations-and-teams/converting-an-organization-into-a-user
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Convert organization to user
ms.openlocfilehash: ef6baa2db188570476ee36d5f6932a87d615d2ec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145149792'
---
{% ifversion fpt or ghec %}

{% note %}

**Observação**: depois que uma conta é excluída, o nome de usuário no momento da exclusão fica indisponível para reutilização por 90 dias. Para reutilizar o nome de usuário de uma organização imediatamente, você deverá alterar o nome de usuário antes de excluir a organização.

 {% endnote %}

1. [Inscreva-se](/articles/signing-up-for-a-new-github-account) para criar uma conta no GitHub.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} para a nova conta pessoal.
4. [Transfira cada repositório da organização](/articles/how-to-transfer-a-repository) para a nova conta pessoal.
5. [Renomeie a organização](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) para disponibilizar o nome de usuário atual.
6. [Renomeie o usuário](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/changing-your-github-username) para o nome da organização.
7. [Exclua a organização](/organizations/managing-organization-settings/deleting-an-organization-account).


{% else %}

1. Inscreva-se para criar uma conta pessoal do GitHub Enterprise.
2. [Altere a função do usuário para um proprietário](/articles/changing-a-person-s-role-to-owner).
3. {% data variables.product.signin_link %} para a nova conta pessoal.
4. [Transfira cada repositório da organização](/articles/how-to-transfer-a-repository) para a nova conta pessoal.
5. [Exclua a organização](/articles/deleting-an-organization-account).
6. [Renomeie o usuário](/articles/changing-your-github-username) para o nome da organização.

{% endif %}
