---
title: Alterar seu nome de usuário do GitHub
intro: 'Você pode alterar seu nome de usuário do {% data variables.product.product_name %} a qualquer momento.'
redirect_from:
  - /articles/how-to-change-your-username/
  - /articles/changing-your-github-user-name/
  - /articles/renaming-a-user/
  - /articles/what-happens-when-i-change-my-username/
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
versions:
  free-pro-team: '*'
  enterprise-server: '*'
topics:
  - Accounts
---

### Sobre alterações no nome de usuário

Você pode alterar oseu nome de usuário para outro nome de usuário que não está atualmente em uso.{% if currentVersion == "free-pro-team@latest" %} Se o nome de usuário que você deseja não estiver disponível, você verá informações sobre se pode solicitar a liberação do nome de usuário ao digitar o nome de usuário desejado.

Se o nome de usuário não estiver qualificado para liberação e você não detém uma marca comercial para este nome de usuário, é possível escolher outro ou manter o atual. O {% data variables.contact.github_support %} não pode liberar o nome de usuário indisponível para você. Para obter mais informações, consulte "[Alterar nome de usuário](#changing-your-username)".{% endif %}

Depois de alterar seu nome de usuário, o nome antigo será disponibilizado para reivindicação por qualquer pessoa. A maioria das referências aos seus repositórios sob o nome de usuário antigo muda automaticamente para o novo nome de usuário. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

O {% data variables.product.product_name %} não pode configurar redirecionamentos para:
- [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) usando o nome de usuário antigo
- Links para [gists](/articles/creating-gists) que incluem o nome de usuário antigo

### Referências de repositório

Após alteração do nome de usuário, o {% data variables.product.product_name %} redirecionará automaticamente as referências para os repositórios.
- Os links da web para repositórios existentes continuarão funcionando. Esse processo pode demorar alguns minutos para ser concluído após a alteração.
- A linha de comando que faz push dos clones do repositório local para as URLs de controle do remote continuarão funcionando.

Se o novo proprietário do seu antigo nome de usuário criar um repositório com o mesmo nome do seu repositório, isso substituirá a entrada de redirecionamento e o seu redirecionamento para de funcionar. Por conta dessa possibilidade, é recomendável atualizar todas as URLs existentes do repositório remote após alteração do seu nome de usuário. Para obter mais informações, consulte "[Gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

### Links para a página de perfil anterior

Após alteração do nome de usuário, os links para sua página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, retornarão um erro 404. Recomendamos atualizar todos os links para a sua conta de {% data variables.product.product_name %} de outro lugar{% if currentVersion == "free-pro-team@latest" %}, como, por exemplo, o seu perfil do LinkedIn ou do Twitter{% endif %}.

### Seus commits no Git

{% if currentVersion == "free-pro-team@latest"%}commits do Git associados ao seu endereço de e-mail `noreply` fornecido por {% data variables.product.product_name %} não serão atribuídos ao seu novo nome de usuário e não aparecerão no seu gráfico de contribuições.{% endif %} Se seus commits Git estiverem associados a outro endereço de e-mail que você [adicionou à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account), {% if currentVersion == "free-pro-team@latest"%}incluindo o endereço de e-mail `noreply` baseado em ID fornecido por {% data variables.product.product_name %}, {% endif %} ele continuará a ser atribuído a você e aparecerá no gráfico de contribuições depois de mudar o seu nome de usuário. Para obter mais informações sobre como configurar o endereço de e-mail, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address)".

### Alterar nome de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Na seção "Change username" (Alterar nome de usuário), clique em **Change username** (Alterar nome de usuário). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% if currentVersion == "free-pro-team@latest" %}
4. Leia os avisos sobre a mudança de seu nome de usuário. Se você ainda quiser alterar seu nome de usuário, clique em **I understand, let's change my username** (Compreendo, vamos alterar meu nome de usuário). ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Digite um novo nome de usuário. ![Campo New Username (Novo nome de usuário)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Se o nome que você escolheu estiver disponível, clique em **Change my username** (Alterar meu nome de usuário). Se o nome que você escolheu estiver indisponível, tente um nome de usuário diferente ou uma das sugestões que aparecem. ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

### Leia mais

- "[Por que os meus commits estão vinculados ao usuário incorreto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% if currentVersion == "free-pro-team@latest" %}
- "[{% data variables.product.prodname_dotcom %} Política de nome de usuário](/articles/github-username-policy)"{% endif %}
