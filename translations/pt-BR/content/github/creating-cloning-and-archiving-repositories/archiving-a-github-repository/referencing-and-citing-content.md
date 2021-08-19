---
title: Referenciar e citar conteúdo
intro: Você pode usar ferramentas de terceiros para citar e referenciar conteúdo no GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
versions:
  free-pro-team: '*'
topics:
  - Repositories
---

### Emitir um identificador persistente para o repositório com o Zenodo

Para facilitar o referenciamento dos seus repositórios na literatura acadêmica, você pode criar identificadores persistentes, também conhecidos como identificadores de objetos digitais (DOIs). Você pode usar a ferramenta de arquivamento de dados [Zenodo](https://zenodo.org/about) para arquivar um repositório do {% data variables.product.product_name %} e emitir um DOI para o arquivo.

{% tip %}

**Dicas:**
- O Zenodo consegue acessar apenas repositórios públicos, então verifique se o repositório que você deseja arquivar está configurado como [público](/articles/making-a-private-repository-public).
- Se você quiser arquivar um repositório que pertence a uma organização, o proprietário da organização talvez precise [aprovar o acesso](/articles/approving-oauth-apps-for-your-organization) ao aplicativo Zenodo.
- Lembre-se de incluir uma [licença](/articles/open-source-licensing) no repositório para que os leitores saibam como podem reutilizar seu trabalho.

{% endtip %}

1. Acesse o [Zenodo](http://zenodo.org/).
2. No canto superior esquerdo da tela, clique em **Log in** (Fazer login). ![Botão de login do Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Clique em **Log in with GitHub** (Fazer login com o GitHub). ![Login no Zenodo com o GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Leia as informações sobre permissões de acesso e clique em **Authorize application** (Autorizar aplicativo). ![Autorizar o Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Acesse a página do [GitHub no Zenodo](https://zenodo.org/account/settings/github/). ![Página do GitHub no Zenodo](/assets/images/help/repository/zenodo_github_page.png)
6. À direita do nome do repositório que você deseja arquivar, altere o botão de **Off** para **On** para habilitar o repositório para arquivamento. ![Habilitar arquivamento do Zenodo no repositório](/assets/images/help/repository/zenodo_toggle_on.png)

O Zenodo arquiva o repositório e emite um novo DOI sempre que você cria uma nova [versão ](/articles/about-releases/) do {% data variables.product.product_name %}. Siga as etapas do artigo "[Criar versões](/articles/creating-releases/)" para criar uma versão.

### Divulgar e citar materiais de pesquisa com o Figshare

Os integrantes de instituições acadêmicas podem usar o serviço de gerenciamento de dados [Figshare](http://figshare.com) para publicar e citar materiais de pesquisa. Para obter mais informações, consulte o [site de suporte do Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
