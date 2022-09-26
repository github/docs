---
title: Por que meus commits estão vinculados ao usuário errado?
redirect_from:
  - /articles/how-do-i-get-my-commits-to-link-to-my-github-account
  - /articles/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/why-are-my-commits-linked-to-the-wrong-user
  - /github/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user
intro: 'O {% data variables.product.product_name %} usa o endereço de e-mail no header do commit para vincular o commit a um usuário do GitHub. Se os commits estiverem sendo vinculados a outro usuário ou não estiverem vinculados a nenhum usuário, talvez você precise alterar as configurações locais do Git{% ifversion not ghae %} e/ou adicionar um endereço de email às configurações de email da conta{% endif %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Linked to wrong user
ms.openlocfilehash: 80a871c85aca151f06ca04d1d48d016bd14ed47f
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883032'
---
{% tip %}

**Observação**: se os commits estiverem vinculados a outro usuário, isso não significa que o usuário possa acessar seu repositório. Um usuário só poderá acessar um repositório seu se você adicioná-lo como colaborador ou incluí-lo em uma equipe que tenha acesso ao repositório.

{% endtip %}

## Commits vinculados a outro usuário

Se seus commits estiverem vinculados a outro usuário, isso significa que o endereço de e-mail nas configurações locais do Git está conectado à conta desse usuário em {% data variables.product.product_name %}. Nesse caso, você pode alterar o email nas configurações do Git local{% ifversion ghae %} para o endereço associado à sua conta no {% data variables.product.product_name %} a fim de vincular os commits futuros. Os commits antigos não serão vinculados. Para obter mais informações, confira "[Como configurar seu endereço de email de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".{% else %} e adicione o novo endereço de email à sua conta do {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para vincular commits futuros a ela.

1. Para alterar o endereço de email na configuração do Git local, siga as etapas descritas em "[Como definir seu endereço de email de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)". Se você trabalha em várias máquinas, precisa alterar essa configuração em cada uma deles.
2. Adicione o endereço de email da etapa 2 às configurações da sua conta seguindo as etapas descritas em "[Como adicionar um endereço de email à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account)".{% endif %}

Os commits criados a partir daí serão vinculados à sua conta.

## Commits não vinculados a nenhum usuário

Se seus commits não estiverem vinculados a nenhum usuário, o nome do autor do commit não será exibido como um link para o perfil de um usuário.

Para verificar o endereço de e-mail usado para esses commits e conectar commits à sua conta, siga estas etapas:

1. Navegue até o commit clicando no link da mensagem do commit.
![Link da mensagem de commit](/assets/images/help/commits/commit-msg-link.png)
2. Para ler uma mensagem sobre o motivo do commit não estar vinculado, posicione o cursor sobre o {% octicon "question" aria-label="Question mark" %} à direita do nome de usuário.
![Mensagem exibida quando o curso é posicionado sobre o commit](/assets/images/help/commits/commit-hover-msg.png)

  - **Autor não reconhecido (com endereço de email)** Se você receber essa mensagem com um endereço de email, o endereço usado para criar o commit não estará conectado à sua conta do {% data variables.product.product_name %}. {% ifversion not ghae %}Para vincular os commits, [adicione o endereço de email às configurações de email do GitHub](/articles/adding-an-email-address-to-your-github-account).{% endif %}{% ifversion not ghae %} Se o endereço de email tiver um Gravatar associado, o Gravatar será exibido ao lado do commit, em vez do Octocat cinza padrão.{% endif %}
  - **Autor não reconhecido (sem endereço de email)** Se você receber essa mensagem sem um endereço de email, isso indicará que você usou um endereço de email genérico que não pode ser conectado à sua conta do {% data variables.product.product_name %}.{% ifversion not ghae %} Você precisará [definir seu endereço de email de commit no Git](/articles/setting-your-commit-email-address) e [adicionar o novo endereço às configurações de email do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular os commits futuros. Os commits antigos não serão vinculados.{% endif %}
  - **Email inválido** O endereço de email nas configurações do Git local está em branco ou não está formatado como um endereço de email.{% ifversion not ghae %} Você precisará [definir seu endereço de email de commit no Git](/articles/setting-your-commit-email-address) e [adicionar o novo endereço às configurações de email do GitHub](/articles/adding-an-email-address-to-your-github-account) para vincular os commits futuros. Os commits antigos não serão vinculados.{% endif %}

{% ifversion ghae %} Você pode alterar o email nas configurações do Git local para o endereço associado à sua conta a fim de vincular os commits futuros. Os commits antigos não serão vinculados. Para obter mais informações, confira "[Como definir seu endereço de email de commit](/github/setting-up-and-managing-your-github-user-account/setting-your-commit-email-address#setting-your-commit-email-address-in-git)".
{% endif %}

{% warning %}

Caso a configuração local do Git contenha um endereço de e-mail genérico ou um endereço de e-mail já anexado à conta de outro usuário, os commits anteriores não serão vinculados à sua conta. Embora o Git permita que você altere o endereço de e-mail usado para commits anteriores, é recomendável evitar isso, principalmente em um repositório compartilhado.

{% endwarning %}

## Leitura adicional

* "[Pesquisa de commits](/search-github/searching-on-github/searching-commits)"
