---
title: Alterar seu nome de usuário do GitHub
intro: 'Você pode alterar seu nome de usuário do {% data variables.product.product_name %} a qualquer momento.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre alterações no nome de usuário

Você pode alterar seu nome de usuário para outro que não esteja em uso no momento.{% if currentVersion == "free-pro-team@latest" %} Se o nome de usuário desejado não estiver disponível, você será informado se é possível solicitar a liberação dele quando digitá-lo.

Se o nome de usuário não estiver qualificado para liberação e você não detém uma marca comercial para este nome de usuário, é possível escolher outro ou manter o atual. O {% data variables.contact.github_support %} não pode liberar o nome de usuário indisponível para você. Para obter mais informações, consulte "[Alterar nome de usuário](#changing-your-username)".{% endif %}

Depois de alterar seu nome de usuário, o nome antigo será disponibilizado para reivindicação por qualquer pessoa. A maioria das referências aos seus repositórios sob o nome de usuário antigo muda automaticamente para o novo nome de usuário. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

O {% data variables.product.product_name %} não pode configurar redirecionamentos para:
- [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) usando o nome de usuário antigo
- Links para [gists](/articles/creating-gists) que incluem o nome de usuário antigo

### Referências de repositório

Após alteração do nome de usuário, o {% data variables.product.product_name %} redirecionará automaticamente as referências para os repositórios.
- Os links da web para repositórios existentes continuarão funcionando. Esse processo pode demorar alguns minutos para ser concluído após a alteração.
- A linha de comando que faz push dos clones do repositório local para as URLs de controle do remote continuarão funcionando.

Se o novo proprietário do seu antigo nome de usuário criar um repositório com o mesmo nome do seu repositório, isso substituirá a entrada de redirecionamento e o seu redirecionamento para de funcionar. Por conta dessa possibilidade, é recomendável atualizar todas as URLs existentes do repositório remote após alteração do seu nome de usuário. Para obter mais informações, consulte "[Alterar o URL de um remote](/articles/changing-a-remote-s-url)".

### Links para a página de perfil anterior

Após alteração do nome de usuário, os links para sua página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, retornarão um erro 404. É recomendável atualizar qualquer link para sua conta do {% data variables.product.product_name %} de qualquer lugar{% if currentVersion == "free-pro-team@latest" %}, como seu perfil no LinkedIn ou Twitter{% endif %}.

### Seus commits no Git

{% if currentVersion == "free-pro-team@latest"%}Os commits do Git que estavam associados ao seu endereço de e-mail `noreply` fornecido pelo {% data variables.product.product_name %} não serão atribuídos ao seu novo nome de usuário e não aparecerão no gráfico de contribuições.{% endif %} Se seus commits do Git estiverem associados a outro endereço de e-mail que você [adicionou à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%}incluindo o endereço de e-mail `noreply` fornecido pelo {% data variables.product.product_name %} com base na ID, {% endif %}eles continuarão sendo atribuídos a você e aparecerão no gráfico de contribuição depois da alteração do nome de usuário. Para obter mais informações sobre como configurar o endereço de e-mail, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address)".

### Alterar nome de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Na seção "Change username" (Alterar nome de usuário), clique em **Change username** (Alterar nome de usuário). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Leia os avisos sobre a mudança de seu nome de usuário. Se você ainda quiser alterar seu nome de usuário, clique em **I understand, let's change my username** (Compreendo, vamos alterar meu nome de usuário). ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Digite um novo nome de usuário. ![Campo New Username (Novo nome de usuário)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Se o nome que você escolheu estiver disponível, clique em **Change my username** (Alterar meu nome de usuário). Se o nome que você escolheu estiver indisponível, tente um nome de usuário diferente ou uma das sugestões que aparecem. ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Leia mais

- "[Alterar o URL de um remote](/articles/changing-a-remote-s-url)"
- "[Por que meus commits estão vinculados ao usuário errado?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% if currentVersion == "free-pro-team@latest" %}
- "[{% data variables.product.prodname_dotcom %} Política de nome de usuário](/articles/github-username-policy)"{% endif %}
