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
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/changing-your-github-username
versions:
  fpt: '*'
  ghes: '*'
topics:
  - Accounts
shortTitle: Mude seu nome de usuário
---

## Sobre alterações no nome de usuário

You can change your username to another username that is not currently in use.{% ifversion fpt %} If the username you want is not available, consider other names or unique variations. Using a number, hyphen, or an alternative spelling might help you find a similar username that's still available.

If you hold a trademark for the username, you can find more information about making a trademark complaint on our [Trademark Policy](/articles/github-trademark-policy/) page.

If you do not hold a trademark for the name, you can choose another username or keep your current username. O {% data variables.contact.github_support %} não pode liberar o nome de usuário indisponível para você. Para obter mais informações, consulte "[Alterar nome de usuário](#changing-your-username)".{% endif %}

Depois de alterar seu nome de usuário, o nome antigo será disponibilizado para reivindicação por qualquer pessoa. A maioria das referências aos seus repositórios sob o nome de usuário antigo muda automaticamente para o novo nome de usuário. No entanto, alguns links para seu perfil não são redirecionados automaticamente.

O {% data variables.product.product_name %} não pode configurar redirecionamentos para:
- [@menções](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) usando o nome de usuário antigo
- Links para [gists](/articles/creating-gists) que incluem o nome de usuário antigo

## Referências de repositório

Após alteração do nome de usuário, o {% data variables.product.product_name %} redirecionará automaticamente as referências para os repositórios.
- Os links da web para repositórios existentes continuarão funcionando. Esse processo pode demorar alguns minutos para ser concluído após a alteração.
- A linha de comando que faz push dos clones do repositório local para as URLs de controle do remote continuarão funcionando.

Se o novo proprietário do seu antigo nome de usuário criar um repositório com o mesmo nome do seu repositório, isso substituirá a entrada de redirecionamento e o seu redirecionamento para de funcionar. Por conta dessa possibilidade, é recomendável atualizar todas as URLs existentes do repositório remote após alteração do seu nome de usuário. Para obter mais informações, consulte "[Gerenciar repositórios remotos](/github/getting-started-with-github/managing-remote-repositories)".

## Links para a página de perfil anterior

Após alteração do nome de usuário, os links para sua página de perfil anterior, como `https://{% data variables.command_line.backticks %}/previoususername`, retornarão um erro 404. É recomendável atualizar qualquer link para sua conta do {% data variables.product.product_name %} de qualquer lugar{% ifversion fpt %}, como seu perfil no LinkedIn ou Twitter{% endif %}.

## Seus commits no Git

{% ifversion fpt %}Os commits do Git que foram associados ao seu endereço de e-mail `noreply` fornecido por {% data variables.product.product_name %} não serão atribuídos ao seu novo nome de usuário e não aparecerão no gráfico de contribuições.{% endif %} Se os seus commits do Git estiverem associados a outro endereço de e-mail que você adicionou [ à sua conta do GitHub](/articles/adding-an-email-address-to-your-github-account), {% ifversion fpt %}incluindo o ID do endereço de e-mail `noreply` fornecido por {% data variables.product.product_name %}, {% endif %}eles continuarão sendo atribuídos a você e aparecerão no gráfico de contribuições depois que você mudar seu nome de usuário. Para obter mais informações sobre como configurar o endereço de e-mail, consulte "[Configurar o endereço de e-mail do commit](/articles/setting-your-commit-email-address)".

## Alterar nome de usuário

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.account_settings %}
3. Na seção "Change username" (Alterar nome de usuário), clique em **Change username** (Alterar nome de usuário). ![Change Username button](/assets/images/help/settings/settings-change-username.png){% ifversion fpt %}
4. Leia os avisos sobre a mudança de seu nome de usuário. Se você ainda quiser alterar seu nome de usuário, clique em **I understand, let's change my username** (Compreendo, vamos alterar meu nome de usuário). ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-username-warning-button.png)
5. Digite um novo nome de usuário. ![Campo New Username (Novo nome de usuário)](/assets/images/help/settings/settings-change-username-enter-new-username.png)
6. Se o nome que você escolheu estiver disponível, clique em **Change my username** (Alterar meu nome de usuário). Se o nome que você escolheu estiver indisponível, tente um nome de usuário diferente ou uma das sugestões que aparecem. ![Botão de aviso Change Username (Alterar nome de usuário)](/assets/images/help/settings/settings-change-my-username-button.png)
{% endif %}

## Leia mais

- "[Por que os meus commits estão vinculados ao usuário incorreto?](/articles/why-are-my-commits-linked-to-the-wrong-user)"{% ifversion fpt %}
- "[{% data variables.product.prodname_dotcom %} Política de nome de usuário](/articles/github-username-policy)"{% endif %}
