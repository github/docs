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

{% if org-profile-pin-private %}

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

{% if org-profile-pin-private %}

## Adding a member-only organization profile README

1. If your organization does not already have a `.github-private` repository, create a public `.github-private` repository. This action can be performed by any user that has write access to that repository.
2. In your organization's `.github-private` repository, create a `README.md` file in the `profile` folder.
3. Faça o commit das alterações para o arquivo `README.md`. The content of the `README.md` will be displayed in the member view of your organization's profile.

   ![Image of an organization's private README](/assets/images/help/organizations/org_member_readme.png)

## Pinning repositories to your organization's profile

You can pin repositories that you want to feature, such as those that are frequently used, to your organization's profile page. To choose which repositories to pin to your organization's profile, you must be an organization owner or administrator.

1. Navigate to your organization's profile page.
2. In the right sidebar of the page in the {% octicon "eye" aria-label="The eye octicon" %} "View as" link, choose the **Public** or **Member** profile view from the dropdown menu.

   ![Image of the organization profile view dropdown](/assets/images/help/organizations/org_profile_view.png)

3. In the pinned repositories section, select **Customize pins**.

   ![Image of the customize pins link](/assets/images/help/organizations/customize_pins_link.png)

   - If you haven't yet pinned any repositories to your organization's profile, you'll need to instead click **pin repositories** in the right sidebar of the profile page. ![Image of pin repositories link in right sidebar](/assets/images/help/organizations/pin_repositories_link.png)

4. In the "Edit pinned repositories" dialog box, select a combination of up to six public, {% ifversion not fpt %}private, or internal{% else %}or private{% endif %} repositories to display.

   ![Image of pinned repo dialog](/assets/images/help/organizations/pinned_repo_dialog.png)

5. Clique em **Save pins** (Salvar itens fixos).

{% endif %}
