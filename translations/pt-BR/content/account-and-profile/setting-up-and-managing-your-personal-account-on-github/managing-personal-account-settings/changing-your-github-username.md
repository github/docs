---
title: Alterar seu nome de usuário do GitHub
intro: 'Você pode alterar o nome de usuário da sua conta em {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_location %} se sua instância usar autenticação integrada{% endif %}.'
redirect_from:
  - /articles/how-to-change-your-username
  - /articles/changing-your-github-user-name
  - /articles/renaming-a-user
  - /articles/what-happens-when-i-change-my-username
  - /articles/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/changing-your-github-username
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Mude seu nome de usuário
---

{% ifversion ghec or ghes %}

{% note %}

{% ifversion ghec %}

**Observação**: Integrantes de {% data variables.product.prodname_emu_enterprise %} não podem mudar nomes de usuário. O administrador do IdP da empresa controla seu nome de usuário para {% data variables.product.product_name %}. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% elsif ghes %}

**Observação**: Se você efetuar o login em {% data variables.product.product_location %} com as credenciais do LDAP ou logon único (SSO), somente seu administrador local poderá alterar seu nome de usuário. Para obter mais informações sobre métodos de autenticação para {% data variables.product.product_name %}, consulte "[Efetuando a autenticação de usuários para {% data variables.product.product_location %}](/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance)".

{% endif %}

{% endnote %}

{% endif %}

## Sobre alterações no nome de usuário

Você pode alterar seu nome de usuário para outro nome de usuário que não está atualmente em uso.{% ifversion fpt or ghec %} Se o nome de usuário que você deseja não estiver disponível, considere outros nomes ou variações exclusivas. Usar um número, hífen ou uma ortografia alternativa pode ajudar você a encontrar um nome de usuário semelhante que ainda está disponível.

Se você tem uma marca registrada para o nome de usuário, você pode encontrar mais informações sobre como fazer uma reclamação de marca registrada na nossa página de [Política da marca registrada](/free-pro-team@latest/github/site-policy/github-trademark-policy).

Se você não tiver uma marca registrada para o nome, você poderá escolher outro nome de usuário ou manter seu nome de usuário atual. O {% data variables.contact.github_support %} não pode liberar o nome de usuário indisponível para você. Para obter mais informações, consulte "[Alterar nome de usuário](#changing-your-username)".{% endif %}

Depois de alterar seu nome de usuário, o nome antigo será disponibilizado para reivindicação por qualquer pessoa. A maioria das referências aos seus repositórios sob o nome de usuário antigo muda automaticamente para o novo nome de usuário. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

O {% data variables.product.product_name %} não pode configurar redirecionamentos para:
- [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) usando o nome de usuário antigo
- Links para [gists](/articles/creating-gists) que incluem o nome de usuário antigo

{% ifversion fpt or ghec %}

Se você for integrante de um {% data variables.product.prodname_emu_enterprise %}, não será possível alterar seu nome de usuário. {% data reusables.enterprise-accounts.emu-more-info-account %}

{% endif %}

## Referências de repositório

Após alteração do nome de usuário, o {% data variables.product.product_name %} redirecionará automaticamente as referências para os repositórios.
- Os links da web para repositórios existentes continuarão funcionando. Esse processo pode demorar alguns minutos para ser concluído após a alteração.
- A linha de comando que faz push dos clones do repositório local para as URLs de controle do remote continuarão funcionando.

Se o novo proprietário do seu antigo nome de usuário criar um repositório com o mesmo nome do seu repositório, isso substituirá a entrada de redirecionamento e o seu redirecionamento para de funcionar. Por conta dessa possibilidade, é recomendável atualizar todas as URLs existentes do repositório remote após alteração do seu nome de usuário. Para obter mais informações, consulte "[Gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Links para a página de perfil anterior

Após alteração do nome de usuário, os links para sua página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, retornarão um erro 404. Recomendamos atualizar todos os links para a sua conta em {% data variables.product.product_location %} a partir de outro lugar{% ifversion fpt or ghec %}, como seu LinkedIn ou perfil do Twitter{% endif %}.

## Seus commits no Git

{% ifversion fpt or ghec %}Os commits do Git que foram associados ao seu endereço de e-mail `noreply` fornecido por {% data variables.product.product_name %} não serão atribuídos ao seu novo nome de usuário e não aparecerão no gráfico de contribuições.{% endif %} Se os seus commits do Git estiverem associados a outro endereço de e-mail que você adicionou [ à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt or ghec %}incluindo o ID do endereço de e-mail `noreply` fornecido por {% data variables.product.product_name %}, {% endif %}eles continuarão sendo atribuídos a você e aparecerão no gráfico de contribuições depois que você mudar seu nome de usuário. Para obter mais informações sobre como configurar o endereço de e-mail, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address)".

## Alterar nome de usuário

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.account_settings %}
3. Na seção "Alterar nome de usuário", clique em **Alterar nome de usuário**. ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt or ghec %}
4. Leia os avisos sobre a mudança de seu nome de usuário. Se você ainda quiser alterar seu nome de usuário, clique em **Eu entendo, vamos alterar o meu nome de usuário**. ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Digite um novo nome de usuário. ![Campo New Username (Novo nome de usuário)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Se o nome de usuário que você escolheu estiver disponível, clique em **Alterar meu nome de usuário**. Se o nome que você escolheu estiver indisponível, tente um nome de usuário diferente ou uma das sugestões que aparecem. ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Leia mais

- "[Por que os meus commits estão vinculados ao usuário incorreto?](/pull-requests/committing-changes-to-your-project/troubleshooting-commits/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt or ghec %}
- "[{% data variables.product.prodname_dotcom %} Política de nome de usuário](/free-pro-team@latest/github/site-policy/github-username-policy)"{% endif %}
