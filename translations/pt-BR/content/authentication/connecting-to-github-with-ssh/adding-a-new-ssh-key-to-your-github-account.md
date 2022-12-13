---
title: Adicionar uma nova chave SSH à sua conta do GitHub
intro: 'Para configurar sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} para usar sua chave SSH nova (ou existente) chave SSH, você também deverá adicionar a chave à sua conta.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account
  - /github/authenticating-to-github/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Add a new SSH key
ms.openlocfilehash: 041d72c2cf48d6d5b8ce0e6b609b0982b54f2e97
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147653303'
---
## Sobre a adição de chaves SSH à sua conta

{% data reusables.ssh.about-ssh %} Para obter mais informações, confira "[Sobre o SSH](/authentication/connecting-to-github-with-ssh/about-ssh)."

{% ifversion ssh-commit-verification %} Você também pode usar SSH para assinar confirmações e marcas. Para obter mais informações sobre como assinar uma confirmação, confira "[Sobre a verificação de assinaturas de confirmação](/articles/about-commit-signature-verification)".{% endif %}

Depois de gerar um par de chaves SSH, você precisa adicionar a chave pública a {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar o acesso SSH para sua conta.

## Pré-requisitos

Antes de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, conclua as etapas a seguir.

1. Verifique se há chaves SSH existentes. Para obter mais informações, confira "[Como verificar se há chaves SSH existentes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".
1. Gere uma nova chave SSH e adicione-a ao agente SSH do computador. Para obter mais informações, confira "[Como gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Como adicionar uma nova chave SSH à sua conta

Depois de adicionar uma nova chave SSH de autenticação à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá reconfigurar qualquer repositório local para usar SSH. Para obter mais informações, confira "[Como alternar URLs remotas de HTTPS para SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %} {% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
4. Clique em **Nova chave SSH** ou **Adicionar chave SSH**.
{% ifversion ssh-commit-verification %} ![Botão da chave SSH](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png) {% else %} ![Botão da chave SSH](/assets/images/help/settings/ssh-add-ssh-key.png) {% endif %}
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um laptop pessoal, você poderá chamar essa chave de "Laptop pessoal".
{% ifversion ssh-commit-verification %}
6. Selecione o tipo de chave: autenticação ou assinatura. Para obter mais informações sobre a assinatura de confirmações, confira "[Sobre a verificação de assinaturas de confirmação](/articles/about-commit-signature-verification)".
{% endif %}
7. Cole sua chave no campo "Key" (Chave).
{% ifversion ssh-commit-verification %} ![O campo da chave](/assets/images/help/settings/ssh-key-paste-with-type.png) {% else %} ![O campo da chave](/assets/images/help/settings/ssh-key-paste.png) {% endif %}
8. Clique em **Adicionar chave SSH**.
  ![Botão Adicionar chave](/assets/images/help/settings/ssh-add-key.png) {% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de poder usar o {% data variables.product.prodname_cli %} para adicionar uma chave SSH à sua conta, você deve efetuar a autenticação no {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[`gh auth login`](https://cli.github.com/manual/gh_auth_login)" na documentação da {% data variables.product.prodname_cli %}.

{% ifversion ssh-commit-verification %} No momento, você só pode usar {% data variables.product.prodname_cli %} para adicionar chaves de autenticação SSH, não é possível adicionar chaves de assinatura SSH.{% endif %}

Para adicionar uma chave de autenticação SSH à sua conta do GitHub, use o subcomando `ssh-key add` especificando a chave pública.

```shell
gh ssh-key add <em>key-file</em>
```

Para incluir um título para a nova chave, use o sinalizador `-t` ou `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Se você gerou sua chave SSH seguindo as instruções descritas em "[Como gerar uma nova chave SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", adicione a chave à sua conta com este comando.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Leitura adicional

- "[Como autorizar uma chave SSH para uso com o logon único do SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)" {% endif %}
