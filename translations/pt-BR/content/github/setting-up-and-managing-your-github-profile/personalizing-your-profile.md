---
title: Personalizar seu perfil
intro: 'É possível compartilhar informações sobre você mesmo com outros usuários do {% data variables.product.product_name %} definindo uma imagem e adicionando uma bio ao seu perfil.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Alterar sua imagem de perfil

Sua imagem de perfil ajuda a identificá-lo no {% data variables.product.product_name %} em pull requests, comentários, páginas de contribuições e gráficos.

Ao se inscrever em uma conta, o {% data variables.product.product_name %} fornece a você uma "identicon" gerada aleatoriamente. [Sua identicon](https://github.com/blog/1586-identicons) é gerada a partir de um hash de seu ID de usuário e não há como controlar suas cores ou padrão. É possível substituir sua identicon por uma imagem que represente você.

{% tip %}

**Dica**: Sua imagem de perfil deve ser um arquivo PNG, JPG ou GIF com tamanho menor que 1 MB. Para melhor qualidade de renderização, recomendamos uma imagem de aproximadamente 500 por 500 pixels.

{% endtip %}

#### Definir uma imagem de perfil

{% data reusables.user_settings.access_settings %}
2. Em **Profile Picture** (Imagem de perfil), clique em {% octicon "pencil" aria-label="The edit icon" %} **Edit** (Editar). ![Editar imagem de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Clique em **Upload a photo...** (Fazer upload de uma foto...). ![Atualizar imagem de perfil](/assets/images/help/profile/edit-profile-picture-options.png)
3. Recorte sua imagem. Quando terminar, clique em **Set new profile picture** (Definir nova imagem de perfil). ![Cortar foto carregada](/assets/images/help/profile/avatar_crop_and_save.png)

#### Redefinir sua imagem de perfil para a identicon

{% data reusables.user_settings.access_settings %}
2. Em **Profile Picture** (Imagem de perfil), clique em {% octicon "pencil" aria-label="The edit icon" %} **Edit** (Editar). ![Editar imagem de perfil](/assets/images/help/profile/edit-profile-photo.png)
3. Para reverter para sua identicon, clique em **Remove photo** (Remover foto). Se o seu endereço de e-mail está associado a um [Gravatar](https://en.gravatar.com/), você não pode reverter para sua identicon. Em vez disso, clique em **Revert to Gravatar** (Reverter para Gravatar). ![Atualizar imagem de perfil](/assets/images/help/profile/edit-profile-picture-options.png)

### Alterar seu nome de perfil

Você pode alterar o nome que é exbido em seu perfil. Este nome também pode ser exibido ao lado dos comentários que você fizer em repositórios privados pertencentes a uma organização. Para obter mais informações, consulte "[Gerenciar a exibição de nomes de integrantes na organização](/articles/managing-the-display-of-member-names-in-your-organization)".

{% data reusables.user_settings.access_settings %}
2. Em "Name" (Nome), digite o nome que deseja exibir em seu perfil. ![Campo nome em configurações de perfil](/assets/images/help/profile/name-field.png)

### Adicionar uma bio ao seu perfil

Adicione uma bio em seu perfil para compartilhar informações sobre si mesmo com outros usuários {% data variables.product.product_name %}. Com a ajuda de [@menções](/articles/basic-writing-and-formatting-syntax) e emojis, você pode incluir informações sobre onde está trabalhando agora ou já trabalhou, que tipo de trabalho faz ou mesmo que tipo de café toma.

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

Para um formulário mais longo e uma maneira mais proeminente de exibir informações personalizadas sobre você, também é possível usar um LEIAME do perfil. Para obter mais informações, consulte "[Gerenciar seu perfil LEIAME](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)".

{% endif %}

{% note %}

**Observação:** Se a seção de visão geral de atividade está habilitada em seu perfil e na bio você faz @menção a uma organização da qual é integrante, a organização será a primeira apresentada na visão geral de atividade. Para obter mais informações, consulte "[Mostrar uma visão geral da sua atividade no seu perfil](/articles/showing-an-overview-of-your-activity-on-your-profile)".

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. Em **Bio**, adicione o conteúdo que deseja exibir em seu perfil. O campo bio é limitado a 160 caracteres. ![Atualizar a bio no perfil](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Dica:** Ao fazer @menção a uma organização, somente aquelas das quais você é integrante serão preenchidas automaticamente. Você ainda pode fazer @menção a organizações das quais não é integrante, como um empregador anterior, mas o nome da organização não será preenchido automaticamente.

  {% endtip %}

3. Clique em **Update profile** (Atualizar perfil). ![Botão Update profile (Atualizar perfil)](/assets/images/help/profile/update-profile-button.png)

### Definir um status

Você pode definir um status para exibir informações sobre sua disponibilidade atual no {% data variables.product.product_name %}. Seu status será mostrado:
- em sua página de perfil do {% data variables.product.product_name %}.
- quando as pessoas passarem o mouse em cima de seu nome de usuário ou avatar no {% data variables.product.product_name %}.
- em uma página de equipe da qual você é integrante. Para obter mais informações, consulte "[Sobre equipes](/articles/about-teams/#team-pages)".
- no painel da organização da qual você é integrante. Para obter mais informações, consulte "[Sobre o painel de sua organização](/articles/about-your-organization-dashboard/)".

Ao definir o seu status, você também pode informar às pessoas que sua disponibilidade é limitada no {% data variables.product.product_name %}.

![Usuário mencionado apresenta "busy" (ocupado) ao lado do nome de usuário](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![Revisor solicitado apresenta "busy" (ocupado) ao lado do nome de usuário](/assets/images/help/profile/request-a-review-limited-availability-status.png)

Se você selecionar a opção "Busy" (Ocupado), quando as pessoas fizerem @menção ao seu nome de usuário, atribuírem um problema ou pull request a você ou solicitarem a você uma revisão de pull request, uma observação ao lado do seu nome mostrará que você está ocupado.

1. No canto superior direito do {% data variables.product.product_name %}, clique em sua foto de perfil e em **Set your status** (Definir seu status) ou, se já tiver um status definido, clique em seu status atual. ![Botão no perfil para definir seu status](/assets/images/help/profile/set-status-on-profile.png)
2. Para adicionar um texto personalizado ao seu status, clique no campo de texto e digite uma mensagem. ![Campo para digitar mensagem de status](/assets/images/help/profile/type-a-status-message.png)
3. Opcionalmente, para definir um status com emoji, clique no ícone de carinhas e selecione um emoji da lista.![Botão para selecionar status com emoji](/assets/images/help/profile/select-emoji-status.png)
4. Como opção, se você deseja compartilhar que tem disponibilidade limitada, selecione "Busy" (Ocupado). ![Opção Busy (Ocupado) marcado nas opções Edit status (Editar status)](/assets/images/help/profile/limited-availability-status.png)
5. Use o menu suspenso **Clear status** (Limpar status) e selecione quando deseja que seu status expire. Caso não selecione um prazo de validade, o status será mantido até que você o limpe ou o edite. ![Menu suspenso para escolher quando o status expira](/assets/images/help/profile/status-expiration.png)
6. Use o menu suspenso e clique na organização para a qual você deseja que seu status esteja visível. Se não selecionar uma organização, seu status será público. ![Menu suspenso para escolher para quem seu status é visível](/assets/images/help/profile/status-visibility.png)
7. Clique em **Set status** (Definir status). ![Botão para definir o status](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Exibir selos no seu perfil

Ao participar de determinados programas, {% data variables.product.prodname_dotcom %} exibe automaticamente um selo no seu perfil.

| Selo                                                            | Programa                                                             | Descrição                                                                                                                                                                                                                                                                                                                                                                |
| --------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {% octicon "north-star" aria-label="The North Star icon" %}     | **{% data variables.product.prodname_arctic_vault %} Colaborador** | Se você criou algum(ns) commit(s) no branch-padrão de um repositório arquivado no programa Cofre do Ártico 2020, você receberá um selo de contribuidor de {% data variables.product.prodname_arctic_vault %} no seu perfil. Para obter mais informações sobre o programa, consulte [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com). |
| {% octicon "cpu" aria-label="The Developer Program icon" %}     | **Integrante do programa de desenvolvedores**                        | Se você for um integrante registrado do Programa de Desenvolvedor do GitHub, ao criar um aplicativo com a API do GitHub, você receberá um selo de integrante do programa de desenvolvedor no seu perfil. Para obter mais informações sobre o Programa de Desenvolvedor do GitHub, consulte o [Desenvolvedor do GitHub](/program/).                                       |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **Patrocinador do GitHub**                                           | Se você patrocinou um contribuidor de código aberto por meio de {% data variables.product.prodname_sponsors %}, você receberá um selo de patrocinador no seu perfil. Para obter mais informações, consulte "[Patrocinar contribuidores de código aberto](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)".        |
| {% octicon "star-fill" aria-label="The star icon" %}            | **Pro**                                                              | Se você usar {% data variables.product.prodname_pro %}, você receberá um selo PRO no seu perfil. Para obter mais informações sobre o {% data variables.product.prodname_pro %}, consulte "[Produtos do {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/githubs-products#github-pro)".                                                |

### Desabilitar selos no seu perfil

Você pode desabilitar alguns dos selos dos programas de {% data variables.product.prodname_dotcom %} dos quais você está participando, incluindo os selos PRO e {% data variables.product.prodname_arctic_vault %}.

{% data reusables.user_settings.access_settings %}
2. Em "Configurações de perfil", desmarque o selo que você deseja desabilitar. ![Caixa de seleção para deixar de exibir um selo no seu perfil](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. Clique em **Update preferences** (Atualizar preferências).

{% endif %}

### Leia mais

- "[Sobre seu perfil](/articles/about-your-profile)"
