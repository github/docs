---
title: Referenciar e citar conteúdo
intro: Você pode usar ferramentas de terceiros para citar e referenciar conteúdo no GitHub.
redirect_from:
  - /articles/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/referencing-and-citing-content
  - /github/creating-cloning-and-archiving-repositories/archiving-a-github-repository/referencing-and-citing-content
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Reference & cite content
ms.openlocfilehash: e0bb3dabe5e9ebc8a4dff80797087c8adadfb710
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145127138'
---
## Emitir um identificador persistente para o repositório com o Zenodo

Para facilitar o referenciamento dos seus repositórios na literatura acadêmica, você pode criar identificadores persistentes, também conhecidos como identificadores de objetos digitais (DOIs). Use a ferramenta de arquivamento de dados [Zenodo](https://zenodo.org/about) para arquivar um repositório no {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} e emitir um DOI para os arquivos.

{% tip %}

**Dicas:**
- O Zenodo só pode acessar repositórios públicos. Portanto, verifique se o repositório que deseja arquivar é [público](/articles/making-a-private-repository-public).
- Caso deseje arquivar um repositório que pertence a uma organização, talvez o proprietário da organização precise [aprovar o acesso](/articles/approving-oauth-apps-for-your-organization) para o aplicativo Zenodo.
- Lembre-se de incluir uma [licença](/articles/open-source-licensing) no seu repositório para que os leitores saibam como podem reutilizar seu trabalho.

{% endtip %}

1. Navegue até o [Zenodo](http://zenodo.org/).
2. No canto superior esquerdo da tela, clique em **Fazer logon**. ![Botão de logon do Zenodo](/assets/images/help/repository/zenodo_login.png)
3. Clique em **Fazer logon com o GitHub**. ![Logon no Zenodo com o GitHub](/assets/images/help/repository/zenodo_login_with_github.png)
4. Leia as informações sobre as permissões de acesso e clique em **Autorizar aplicativo**. ![Autorização do Zenodo](/assets/images/help/repository/zenodo_authorize.png)
5. Navegue até a [página do Zenodo no GitHub](https://zenodo.org/account/settings/github/). ![Página do Zenodo no GitHub](/assets/images/help/repository/zenodo_github_page.png)
6. À direita do nome do repositório que deseja arquivar, alterne o botão de **Desativado** para **Ativado** para habilitá-lo para arquivamento. ![Habilitar o arquivamento do Zenodo no repositório](/assets/images/help/repository/zenodo_toggle_on.png)

O Zenodo arquiva seu repositório e emite uma nova DOI sempre que você cria uma [versão](/articles/about-releases/) do {% data variables.product.product_name %}. Siga as etapas descritas em "[Como criar versões](/articles/creating-releases/)" para criar uma.

## Divulgar e citar materiais de pesquisa com o Figshare

Os projetos de pesquisa acadêmica podem usar o serviço de gerenciamento de dados [Figshare](http://figshare.com) para divulgar e citar material de pesquisa. Para obter mais informações, acesse o [site de suporte do Figshare](https://knowledge.figshare.com/articles/item/how-to-connect-figshare-with-your-github-account).
