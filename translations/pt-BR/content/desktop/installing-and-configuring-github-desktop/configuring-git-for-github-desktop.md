---
title: Configurar o Git para o GitHub Desktop
shortTitle: Configurar o Git
intro: 'Caso ainda não tenha o Git instalado, configure-o antes de usar o GitHub Desktop.'
redirect_from:
  - /desktop/getting-started-with-github-desktop/configuring-git-for-github-desktop
versions:
  free-pro-team: '*'
---

{% data variables.product.prodname_desktop %} usa o endereço de e-mail que você definiu na configuração local do Git para conectar commits à sua conta no {% data variables.product.product_name %}.

{% data reusables.desktop.update-email-address %}

{% tip %}

**Dica**: Qualquer pessoa poderá ver o endereço de e-mail na configuração do seu Git se fizer commits públicos. Para obter mais informações, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address/)";

{% endtip %}

{% mac %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.mac-select-desktop-menu %}
7. Na janela de Preferências, clique em **Git**. ![O Painel Git no menu Preferences (Preferências)](/assets/images/help/desktop/mac-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![O campo de nome da configuração do Git](/assets/images/help/desktop/mac-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![Endereço de e-mail colado no campo de configuração do Git](/assets/images/help/desktop/mac-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/mac-save-git-config.png)

{% endmac %}

{% windows %}

{% data reusables.desktop.sign-in-choose-product %}
{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.desktop.copy-email-git-config %}
{% data reusables.desktop.return-to-desktop %}
{% data reusables.desktop.windows-choose-options %}
8. Na janela de Opções, clique em **Git**. ![O Painel Git no menu Options (Opções)](/assets/images/help/desktop/windows-select-git-pane.png)
{% data reusables.desktop.name-field-git-config %}
  ![O campo de nome da configuração do Git](/assets/images/help/desktop/windows-name-git-config.png)
{% data reusables.desktop.paste-email-git-config %}
  ![Endereço de e-mail colado no campo de configuração do Git](/assets/images/help/desktop/windows-email-git-config.png)
{% data reusables.desktop.click-save-git-config %}
  ![Botão para salvar no campo de configuração do Git](/assets/images/help/desktop/windows-save-git-config.png)

{% endwindows %}

### Leia mais

- "[Adicionar um endereço de e-mail à conta do GitHub](/articles/adding-an-email-address-to-your-github-account/)"
- "[Configurar o endereço de e-mail do commit no Git](/articles/setting-your-commit-email-address/)"
