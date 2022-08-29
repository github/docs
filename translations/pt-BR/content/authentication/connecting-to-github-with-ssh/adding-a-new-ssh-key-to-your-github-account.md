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
shortTitle: Adicionar uma nova chave SSH
---

## Sobre a adição de chaves SSH à sua conta

{% data reusables.ssh.about-ssh %} Para obter mais informações, consulte "[Sobre SSH](/authentication/connecting-to-github-with-ssh/about-ssh)".

{% ifversion ssh-commit-verification %}Você também pode usar SSH para assinar commits e etiquetas. Para obter mais informações sobre a assinatura de commit, consulte "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)".{% endif %}

Após gerar um par de chaves SSH, você deve adicionar a chave pública em {% ifversion fpt or ghec or ghes %}{% data variables.product.product_location %}{% elsif ghae %}{% data variables.product.product_name %}{% endif %} para habilitar o acesso SSH para a sua conta.

## Pré-requisitos

Antes de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, siga os seguintes passos.

1. Verifique se há chaves SSH existentes. Para obter mais informações, consulte "[Verificar as chaves SSH existentes](/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys)".
1. Gere uma nova chave SSH e adicione-a ao agente SSH da sua máquina. Para obter mais informações, consulte "[Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)".

## Adicionando uma nova chave SSH à sua conta

Depois de adicionar uma nova autenticação da chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá reconfigurar quaisquer repositórios locais para usar SSH. Para obter mais informações, consulte "[Alternar URLs remotos de HTTPS para SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% webui %}

{% data reusables.gpg.copy-ssh-public-key %}
{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH).
{% ifversion ssh-commit-verification %}
  ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key-with-auth.png)
{% else %}
  ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
{% endif %}
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se você estiver usando um laptop pessoal, você pode chamar essa chave de "laptop pessoal".
{% ifversion ssh-commit-verification %}
6. Selecione o tipo de chave, autenticação ou assinatura. Para obter mais informações sobre a assinatura de commit, consulte "[Sobre a verificação de assinatura de commit](/articles/about-commit-signature-verification)".
{% endif %}
7. Cole sua chave no campo "Key" (Chave).
{% ifversion ssh-commit-verification %}
  ![O campo de chave](/assets/images/help/settings/ssh-key-paste-with-type.png)
{% else %}
  ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
{% endif %}
8. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user-settings.sudo-mode-popup %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de poder usar o {% data variables.product.prodname_cli %} para adicionar uma chave SSH à sua conta, você deve efetuar a autenticação no {% data variables.product.prodname_cli %}. Para obter mais informações, consulte [`login login gh`](https://cli.github.com/manual/gh_auth_login) na documentação do {% data variables.product.prodname_cli %}.

{% ifversion ssh-commit-verification %}, atualmente você só pode usar {% data variables.product.prodname_cli %} para adicionar chaves de autenticação SSH, você não pode adicionar chaves de assinatura SSH.{% endif %}

Para adicionar uma chave de autenticação SSH à sua conta do GitHub, use o subcomando `ssh-key add`, especificando sua chave pública.

```shell
gh ssh-key add <em>key-file</em>
```

Para incluir um título para a nova chave, use o sinalizador `-t` ou `--title`.

```shell
gh ssh-key add <em>key-file</em> --title "personal laptop"
```

Se você gerou a sua chave SSH seguindo as instruções em "[Gerando uma nova chave SSH](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)", você pode adicionar a chave à sua conta usando este comando.

```shell
gh ssh-key add ~/.ssh/id_ed25519.pub
```

{% endcli %}

{% ifversion fpt or ghec %}
## Leia mais

- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
