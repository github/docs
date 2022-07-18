---
title: Personalizando o perfil da sua organização
intro: Você pode compartilhar informações sobre sua organização personalizando o perfil da sua organização.
versions:
  fpt: '*'
  ghec: '*'
  ghes: '>3.3'
  ghae: issue-4749
topics:
  - Organizations
shortTitle: Personalizar perfil da organização
---

{% ifversion org-profile-pin-private %}

## Sobre a página de perfil da sua organização

Você pode personalizar a página de visão geral da sua organização para mostrar o conteúdo dedicado a usuários públicos ou integrantes da organização. Os integrantes da sua organização que estão conectados em {% data variables.product.prodname_dotcom %} são exibidos em uma visualização de integrantes quando visitam a página de perfil da sua organização. Os usuários que não são integrantes da sua organização serão mostrados como público.

![Imagem de uma página de perfil da organização](/assets/images/help/organizations/new_organization_page.png)
{% endif %}

### Repositórios fixos

Você pode dar aos usuários acesso fácil a repositórios importantes ou usados com frequência, ao escolher até seis repositórios para usuários públicos e seis repositórios para integrantes da organização. Assim que você fixar os repositórios no perfil da organização, a seção "Fixado" será exibida acima da seção "Repositórios" na página de perfil.

Apenas os proprietários da organização podem fixar repositórios. Para obter mais informações, consulte "[Fixando repositórios no perfil da sua organização](#pinning-repositories-to-your-organizations-profile)".

### READMEs do perfil da organização

Você pode compartilhar informações sobre como se envolver com a sua organização criando um README do perfil da organização para usuários públicos e integrantes da organização. {% data variables.product.prodname_dotcom %} mostra o README do perfil da sua organização na aba "Visão geral" da sua organização.

Você pode escolher quais informações incluir no README do perfil da sua organização. Aqui estão alguns exemplos de informação que podem ser úteis.

- Uma seção "Sobre" que descreve sua organização
- Orientação para obter ajuda na organização

Você pode formatar o texto e incluir emoji, imagens e GIFs no README do perfil da sua organização usando o Markdown enriquecido de {% data variables.product.company_short %}. Para obter mais informações, consulte "[Começando a escrever e formatar no {% data variables.product.prodname_dotcom %}](/github/writing-on-github/getting-started-with-writing-and-formatting-on-github)".

## Adicionando um README de perfil público da organização

1. Se sua organização ainda não tiver um repositório público de `.github`, crie um repositório público de `.github`.
2. No repositório `.github` da sua organização, crie um arquivo `README.md` na pasta `perfil`.
3. Faça o commit das alterações para o arquivo `README.md`. O conteúdo do `README.md` será exibido no perfil público da sua organização.

   ![Imagem do README público de uma organização](/assets/images/help/organizations/org_public_readme.png)

{% ifversion org-profile-pin-private %}

## Adicionando um perfil README de organização somente apenas para membros

1. Se sua organização ainda não tiver um repositório `.github-private`, crie um repositório privado denominado `.github-private`.
2. No repositório `.github-private` da sua organização, crie um arquivo `README.md` na pasta `perfil`.
3. Faça o commit das alterações para o arquivo `README.md`. O conteúdo do `README.md` será exibido no modo de exibição do integrante do perfil da sua organização.

   ![Imagem do README privado de uma organização](/assets/images/help/organizations/org_member_readme.png)

## Fixando repositórios no perfil da sua organização

Você pode fixar repositórios que deseja destacar, como aqueles que são usados com frequência, na página de perfil da sua organização. Para escolher quais repositórios deseja fixar no perfil da sua organização, você deve ser proprietário ou administrador da organização.

1. Acesse a página de perfil da sua organização.
2. Na barra lateral direita da página no link {% octicon "eye" aria-label="The eye octicon" %} "Visualizar como" escolha o perfil **público** ou **integrante** no menu suspenso.

   ![Imagem da lista de visualização de perfil da organização](/assets/images/help/organizations/org_profile_view.png)

3. Na seção de repositórios fixados, selecione **Personalizar fixação**.

   ![Imagem do link da fixação personalizada](/assets/images/help/organizations/customize_pins_link.png)

   - Se você ainda não fixou nenhum repositório no perfil da sua organização. você deverá clicar em **fixar repositórios** na barra lateral direita da página de perfil. ![Imagem do link dos repositórios fixados na barra lateral direita](/assets/images/help/organizations/pin_repositories_link.png)

4. Na caixa de diálogo "Editar repositórios fixados", selecione uma combinação de até seis repositórios públicos, {% ifversion not fpt %}privados ou internos{% else %}ou{% endif %} privados a serem exibidos.

   ![Imagem de diálogo de repositório fixado](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Clique em **Save pins** (Salvar itens fixos).

{% endif %}
