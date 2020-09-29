---
title: Exibir botão de patrocinador no repositório
intro: Você pode adicionar um botão do patrocinador no repositório para aumentar a visibilidade das opções de financiamento do seu projeto de código aberto.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
versions:
  free-pro-team: '*'
---

### Sobre arquivos FUNDING

Para configurar o botão de patrocinador, edite um arquivo _FUNDING.yml_ na pasta `.github` do repositório, no branch padrão. É possível configurar o botão para incluir desenvolvedores patrocinados no {% data variables.product.prodname_sponsors %}, em plataformas de financiamento externas ou em uma URL de financiamento personalizado. Para obter mais informações a respeito do {% data variables.product.prodname_sponsors %}, consulte "[Sobre o GitHub Sponsors](/articles/about-github-sponsors)".

Você pode adicionar um nome de usuário, de pacote ou de projeto por plataforma de financiamento externa e até quatro URLs personalizadas. Você pode adicionar até quatro organizações ou desenvolvedores patrocinados no {% data variables.product.prodname_sponsors %}. Adicione cada plataforma em uma nova linha, usando a seguinte sintaxe:

| Plataforma                                                                         | Sintaxe                                                                  |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [CommunityBridge](https://communitybridge.org)                                     | `community_bridge: PROJECT-NAME`                                         |
| [{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` or `github: [USERNAME, USERNAME, USERNAME, USERNAME]` |
| [IssueHunt](https://issuehunt.io/)                                                 | `issuehunt: USERNAME`                                                    |
| [Ko-fi](https://ko-fi.com/)                                                        | `ko_fi: USERNAME`                                                        |
| [Liberapay](https://en.liberapay.com/)                                             | `liberapay: USERNAME`                                                    |
| [Open Collective](https://opencollective.com/)                                     | `open_collective: USERNAME`                                              |
| [Otechie](https://otechie.com/)                                                    | `otechie: USERNAME`                                                      |
| [Patreon](https://www.patreon.com/)                                                | `patreon: USERNAME`                                                      |
| [Tidelift](https://tidelift.com/)                                                  | `tidelift: PLATFORM-NAME/PACKAGE-NAME`                                   |
| URL personalizado                                                                  | `custom: LINK1` ou `custom: [LINK1, LINK2, LINK3, LINK4]`                |

Em Tidelift, use a sintaxe `platform-name/package-name` com os seguintes nomes de plataforma:

| Linguagem  | Nome da plataforma |
| ---------- | ------------------ |
| JavaScript | `npm`              |
| Python     | `pypi`             |
| Ruby       | `rubygems`         |
| Java       | `maven`            |
| PHP        | `packagist`        |
| C#         | `nuget`            |

Veja um exemplo de arquivo _FUNDING.yml_:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Observação:** se um URL personalizado em um array incluir `:`, você deverá colocar o URL entre aspas. Por exemplo, `"https://www.paypal.me/octocat"`.

{% endnote %}

Você pode criar um botão de patrocinador padrão para sua organização ou conta de usuário. Para obter mais informações, consulte "[Criando um arquivo padrão de integridade da comunidade](/github/building-a-strong-community/creating-a-default-community-health-file)."

{% note %}

Os links de financiamento permitem que projetos de código aberto recebam apoio financeiro direto da comunidade. Não apoiamos o uso de links de financiamento para outros fins (como publicidade) ou grupos de apoio político, de caridade ou comunitários. Se você estiver em dúvida se há suporte para o seu uso pretendido, entre em contato com {% data variables.contact.contact_support %}.

{% endnote %}

### Exibir botão de patrocinador no repositório

Qualquer pessoa com permissões de administrador pode habilitar um botão de patrocinador em um repositório.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Em Features (Recursos), desmarque **Sponsorships** (Patrocínios). ![Caixa de seleção para habilitar patrocínios](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Em "Patrocínios", clique em **Configurar botão de patrocinador** ou **Substituir links de financiamento**. ![Botão para configurar o botão de patrocinador](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. No editor de arquivos, siga as instruções descritas no arquivo _FUNDING.yml_ para adicionar links aos locais de financiamento. ![Editar o arquivo FUNDING para adicionar links aos locais de financiamento](/assets/images/help/sponsors/funding-yml-file.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

### Leia mais
- "[Sobre {% data variables.product.prodname_sponsors %} para colaboradores de código aberto](/github/supporting-the-open-source-community-with-github-sponsors/about-github-sponsors-for-open-source-contributors)"
- "[Perguntas frequentes com a equipe do {% data variables.product.prodname_sponsors %}](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" no {% data variables.product.prodname_blog %}
