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

Antes de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você deverá ter:
* [Verificado se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)
* [Gerar uma nova chave SSH e adicioná-la ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Depois de adicionar uma nova chave SSH à sua conta em {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, você poderá reconfigurar quaisquer repositórios locais para usar SSH. Para obter mais informações, consulte "[Alternar URLs remotos de HTTPS para SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.key-type-support %}

{% mac %}

{% include tool-switcher %}
{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Dica:** se `pbcopy` não estiver funcionando, você poderá localizar a pasta `.ssh` oculta, abrir o arquivo no seu editor de texto de preferência e copiá-lo na área de transferência.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "Personal MacBook Air".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
{% data reusables.user_settings.sudo-mode-popup %}

{% endwebui %}

{% endmac %}

{% windows %}

{% include tool-switcher %}

{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ clip &lt; ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Copies the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file to your clipboard
  ```

  {% tip %}

  **Dica:** se `clip` não estiver funcionando, você poderá localizar a pasta `.ssh` oculta, abrir o arquivo no seu editor de texto de preferência e copiá-lo na área de transferência.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "Personal MacBook Air".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
8. Se solicitado, confirme sua senha do {% data variables.product.product_name %}.![Caixa de diálogo Sudo mode (Modo sudo)](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endwindows %}

{% linux %}

{% include tool-switcher %}
{% webui %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ cat ~/.ssh/id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub
  # Then select and copy the contents of the id_{% ifversion ghae %}rsa{% else %}ed25519{% endif %}.pub file
  # displayed in the terminal to your clipboard
  ```

  {% tip %}

  **Dica:** Como alternativa, você pode localizar a pasta oculta de `.ssh`, abrir o arquivo no seu editor de texto favorito e copiá-lo na sua área de transferência.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "Personal MacBook Air".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
8. Se solicitado, confirme sua senha do {% data variables.product.product_name %}.![Caixa de diálogo Sudo mode (Modo sudo)](/assets/images/help/settings/sudo_mode_popup.png)

{% endwebui %}

{% endlinux %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Antes de poder usar o {% data variables.product.prodname_cli %} para adicionar uma chave SSH à sua conta, você deve efetuar a autenticação no {% data variables.product.prodname_cli %}. Para obter mais informações, consulte [`login login gh`](https://cli.github.com/manual/gh_auth_login) na documentação do {% data variables.product.prodname_cli %}.

Para adicionar uma chave SSH à sua conta do GitHub, use o subcomando `ssh-key add`, especificando a sua chave pública.

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
