---
title: Instalar aplicativos GitHub
intro: 'Quando seu aplicativo é público, qualquer pessoa pode usar {% ifversion fpt or ghec %} o {% data variables.product.prodname_marketplace %} ou {% endif %}uma URL de instalação para instalar o aplicativo no seu repositório. Quando seu app é privado, somente você pode instalar o aplicativo em repositórios que você possui.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145083993'
---
{% note %}

**Observação:** seu {% data variables.product.prodname_github_app %} terá acesso a todos os repositórios que o aplicativo criar, mesmo que alguém instale apenas seu aplicativo em repositórios selecionados.

{% endnote %}

## Instalar o seu aplicativo GitHub privado no seu repositório

Depois de criar um aplicativo GitHub privado, é possível instalá-lo em um dos repositórios de organização ou usuário. Para obter mais informações, confira "[Fluxo de instalação privada](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)".

1. Na [página de configurações dos Aplicativos do GitHub](https://github.com/settings/apps), selecione seu aplicativo.
2. Na barra lateral esquerda, clique em **Instalar Aplicativo**.
3. Clique em **Instalar** ao lado da conta pessoal ou de organização que contém o repositório correto.
4. Instale o aplicativo em todos os repositórios ou repositórios selecionados.
![Permissões de instalação do aplicativo](/assets/images/install_permissions.png)
5. Uma vez instalado, você verá as opções de configuração para o aplicativo na conta selecionada. Você pode fazer alterações aqui ou pode repetir as etapas anteriores para instalar o aplicativo em outra conta.

{% ifversion fpt or ghec %}
## Oferecer seu aplicativo no GitHub Marketplace

Você pode oferecer uma versão paga ou gratuita do seu aplicativo no [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), em que as pessoas podem pesquisar e ver detalhes sobre seu aplicativo. O {% data variables.product.prodname_marketplace %} instala automaticamente um aplicativo GitHub quando um pedido é concluído.

Confira "[Introdução ao GitHub Marketplace](/marketplace/getting-started/)" para saber mais sobre como listar seu aplicativo no {% data variables.product.prodname_marketplace %}.

Para saber mais sobre como os usuários podem instalar seu aplicativo por meio do {% data variables.product.prodname_marketplace %}, confira "[Como comprar e instalar aplicativos no GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace)".

{% endif %}

## Permitir que pessoas instalem seu aplicativo público no repositório deles

Você pode habilitar outros para instalar seu aplicativo público, fornecendo a URL de instalação em locais como a página inicial do seu aplicativo. Em seguida, você pode apontar para a página inicial do aplicativo a partir da página inicial do GitHub.

 Se você estiver migrando de um aplicativo OAuth para um aplicativo GitHub, você pode usar parâmetros de consulta para pré-selecionar os repositórios e a conta ao instalar o aplicativo GitHub. Confira "[Como migrar Aplicativos OAuth para Aplicativos do GitHub](/apps/migrating-oauth-apps-to-github-apps/)" para saber mais.

Essas etapas pressupõem que você [tenha criado um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/):

1. Na [página de configurações dos Aplicativos do GitHub](https://github.com/settings/apps), selecione o aplicativo público que deseja configurar para que outras pessoas o instalem.
2. Na "URL da Home Page", digite a URL da home page do aplicativo e clique em **Salvar alterações**.
![URL da homepage](/assets/images/github-apps/github_apps_homepageURL.png)
3. O GitHub fornece uma página inicial para o seu aplicativo que inclui um link para a "URL da página inicial" do seu aplicativo. Para visitar a página inicial no GitHub, copie a URL do "Link público" e cole-a em um navegador.
![Link público](/assets/images/github-apps/github_apps_public_link.png)
4. Crie uma home page para seu aplicativo que inclua a URL de instalação do aplicativo: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

## Autorizar usuários durante a instalação

Você pode simplificar o processo de autorização concluindo-o durante a instalação do aplicativo. Para fazer isso, selecione **Solicitar autorização do usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo no GitHub. Confira "[Como criar um Aplicativo do GitHub](/apps/building-github-apps/creating-a-github-app/)" para saber mais.

Assim que alguém tiver instalado seu aplicativo, você deverá obter um token de acesso para o usuário. Confira as etapas 2 e 3 em "[Como identificar usuários no seu site](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)" para saber mais.
## Preservar o estado do aplicativo durante a instalação

Você pode fornecer um parâmetro `state` na URL de instalação de um aplicativo para preservar o estado da página do aplicativo e levar as pessoas de volta a esse estado depois que elas instalarem, se autenticarem ou aceitarem atualizações no Aplicativo do GitHub. Por exemplo, você pode usar o `state` para correlacionar uma instalação a um usuário ou a uma conta.

Para preservar um estado, adicione-o à URL de instalação:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
