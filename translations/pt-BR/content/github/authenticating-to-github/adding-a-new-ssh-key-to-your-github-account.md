---
title: Adicionar uma nova chave SSH à sua conta do GitHub
intro: 'Para configurar sua conta do {% data variables.product.product_name %} para usar a chave SSH nova (ou a existente), você também precisará adicioná-la à sua conta do {% data variables.product.product_name %}.'
redirect_from:
  - /articles/adding-a-new-ssh-key-to-your-github-account
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---

Antes de adicionar uma nova chave SSH à suas conta do {% data variables.product.product_name %}, você deve ter:
* [Verificado se há chaves SSH existentes](/articles/checking-for-existing-ssh-keys)
* [Gerado uma nova chave SSH e adicionado-a ao ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

Depois de adicionar uma nova chave SSH à sua conta do {% data variables.product.product_name %}, você pode configurar qualquer repositório local para usar SSH. Para obter mais informações, consulte "[Alternar URLs remotos de HTTPS para SSH](/github/getting-started-with-github/managing-remote-repositories/#switching-remote-urls-from-https-to-ssh)".

{% data reusables.ssh.dsa-support %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
{% tip %}

**Tip**: You can also add an SSH key using the {% data variables.product.prodname_cli %}. For more information, see "[`gh ssh-key add`](https://cli.github.com/manual/gh_ssh-key_add)" in the {% data variables.product.prodname_cli %} documentation.

{% endtip %}
{% endif %}

{% mac %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ pbcopy &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
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

{% endmac %}

{% windows %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ clip &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
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

{% endwindows %}

{% linux %}

1. Copie a chave pública SSH para a sua área de transferência.

  Se o seu arquivo de chave pública SSH tiver um nome diferente do código de exemplo, modifique o nome do arquivo para corresponder à sua configuração atual. Ao copiar sua chave, não adicione novas linhas nem espaços em branco.

  ```shell
  $ sudo apt-get update
  $ sudo apt-get install xclip
  # Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

  $ xclip -selection clipboard &lt; ~/.ssh/id_ed25519.pub
  # Copies the contents of the id_ed25519.pub file to your clipboard
  ```
  {% tip %}

  **Dica:** se `xclip` não estiver funcionando, você poderá localizar a pasta `.ssh` oculta, abrir o arquivo no seu editor de texto de preferência e copiá-lo na área de transferência.

  {% endtip %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
4. Clique em **New SSH key** (Nova chave SSH) ou **Add SSH key** (Adicionar chave SSH). ![Botão SSH Key (Chave SSH)](/assets/images/help/settings/ssh-add-ssh-key.png)
5. No campo "Title" (Título), adicione uma etiqueta descritiva para a nova chave. Por exemplo, se estiver usando um Mac pessoal, você poderá chamar essa chave de "Personal MacBook Air".
6. Cole sua chave no campo "Key" (Chave). ![O campo de chave](/assets/images/help/settings/ssh-key-paste.png)
7. Clique em **Add SSH key** (Adicionar chave SSH). ![O botão Add key (Adicionar chave)](/assets/images/help/settings/ssh-add-key.png)
8. Se solicitado, confirme sua senha do {% data variables.product.product_name %}.![Caixa de diálogo Sudo mode (Modo sudo)](/assets/images/help/settings/sudo_mode_popup.png)

{% endlinux %}

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Autorizar uma chave SSH para uso com logon único de SAML](/articles/authorizing-an-ssh-key-for-use-with-saml-single-sign-on)"
{% endif %}
