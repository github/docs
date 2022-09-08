---
title: Exibir botão de patrocinador no repositório
intro: Você pode adicionar um botão do patrocinador no repositório para aumentar a visibilidade das opções de financiamento do seu projeto de código aberto.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
ms.openlocfilehash: 8fce9d4fe2b4aa697fa5d5a0ef0dfafb1caa4844
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147558339'
---
## Sobre arquivos FUNDING

Configure o botão de patrocinador editando um arquivo _FUNDING.yml_ na pasta `.github` do repositório, no branch padrão. É possível configurar o botão para incluir desenvolvedores patrocinados no {% data variables.product.prodname_sponsors %}, em plataformas de financiamento externas ou em uma URL de financiamento personalizado. Para obter mais informações sobre o {% data variables.product.prodname_sponsors %}, confira "[Sobre o GitHub Sponsors](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)".

Você pode adicionar um nome de usuário, de pacote ou de projeto por plataforma de financiamento externa e até quatro URLs personalizadas. Você pode adicionar uma organização e até quatro desenvolvedores patrocinados no {% data variables.product.prodname_sponsors %}. Adicione cada plataforma em uma nova linha, usando a seguinte sintaxe:

Plataforma | Sintaxe
-------- | -----
[LFX Mentorship (antigo CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` ou `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Otechie](https://otechie.com/)| `otechie: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
URL personalizada | `custom: LINK1` ou `custom: [LINK1, LINK2, LINK3, LINK4]`

Para o Tidelift, use a sintaxe `platform-name/package-name` com os seguintes nomes de plataformas:

Idioma | Nome da plataforma
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Veja um exemplo de arquivo _FUNDING.yml_:
```
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Observação:** se uma URL personalizada em uma matriz incluir `:`, você precisará colocar a URL entre aspas. Por exemplo, `"https://www.paypal.me/octocat"`.

{% endnote %}

Você pode criar um botão de patrocinador padrão para sua organização ou conta pessoal. Para obter mais informações, confira "[Como criar um arquivo padrão de integridade da comunidade](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)".

{% note %}

Os links de financiamento permitem que projetos de código aberto recebam apoio financeiro direto da comunidade. Não apoiamos o uso de links de financiamento para outros fins (como publicidade) ou grupos de apoio político, de caridade ou comunitários. Se você estiver em dúvida se há suporte para o seu uso pretendido, entre em contato com {% data variables.contact.contact_support %}.

{% endnote %}

## Exibir botão de patrocinador no repositório

Qualquer pessoa com permissões de administrador pode habilitar um botão de patrocinador em um repositório.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %}
3. Em Recursos, selecione **Patrocínios**.
  ![Caixa de seleção usada para habilitar os patrocínios](/assets/images/help/sponsors/sponsorships-checkbox.png)
4. Em "Patrocínios", clique no **botão Configurar patrocinador** ou **Substituir links de financiamento**.
  ![Botão usado para configurar o botão de patrocinador](/assets/images/help/sponsors/sponsor-set-up-button.png)
5. No editor de arquivos, siga as instruções descritas no arquivo _FUNDING.yml_ para adicionar links aos locais de financiamento.
  ![Editar o arquivo FUNDING para adicionar links aos locais de financiamento](/assets/images/help/sponsors/funding-yml-file.png) {% data reusables.files.write_commit_message %} {% data reusables.files.choose_commit_branch %} {% data reusables.files.propose_new_file %}

## Leitura adicional
- "[Sobre o {% data variables.product.prodname_sponsors %} para colaboradores de código aberto](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)".
- "[Perguntas frequentes com a equipe do {% data variables.product.prodname_sponsors %}](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/) no {% data variables.product.prodname_blog %}
