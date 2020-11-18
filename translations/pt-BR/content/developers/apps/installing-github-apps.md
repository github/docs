---
title: Instalar aplicativos GitHub
intro: 'Quando seu aplicativo for público, qualquer pessoa pode instalar seu aplicativo nos seus repositórios através de{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_marketplace %} ou {% endif %}uma URL de instalação. Quando seu app é privado, você só pode instalar o aplicativo em repositórios dos quais você é proprietário.'
redirect_from:
  - /apps/installing-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% note %}

**Observação:** Seu {% data variables.product.prodname_github_app %} terá acesso a quaisquer repositórios que o aplicativo criar, mesmo que alguém instale apenas seu aplicativo em repositórios selecionados.

{% endnote %}

### Instalar o seu aplicativo GitHub privado no seu repositório

Depois de criar um aplicativo GitHub privado, é possível instalá-lo em um dos repositórios de organização ou usuário. Para obter mais informações, consulte "[Fluxo de instalação privado](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)".

1. Na [página de configurações dos aplicativos GitHub](https://github.com/settings/apps), selecione seu aplicativo.
2. Na barra lateral esquerda, clique em **Instalar aplicativo**.
3. Clique em **Instalar** ao lado de organização ou conta de usuário que contém o repositório correto.
4. Instale o aplicativo em todos os repositórios ou repositórios selecionados. ![Permissões de instalação do aplicativo](/assets/images/install_permissions.png)
5. Uma vez instalado, você verá as opções de configuração para o aplicativo na conta selecionada. Você pode fazer alterações aqui ou pode repetir as etapas anteriores para instalar o aplicativo em outra conta.

{% if currentVersion == "free-pro-team@latest" %}
### Oferecer seu aplicativo no GitHub Marketplace

Você pode oferecer uma versão paga ou gratuita do seu aplicativo em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace), onde as pessoas podem pesquisar e ver informações sobre seu aplicativo. O {% data variables.product.prodname_marketplace %} instala automaticamente um aplicativo GitHub quando um pedido é concluído.

Consulte "[Primeiros passos com o GitHub Marketplace](/marketplace/getting-started/)" para saber mais sobre a listagem do seu aplicativo no {% data variables.product.prodname_marketplace %}.

Para saber mais sobre como os usuários podem instalar seu aplicativo a partir do {% data variables.product.prodname_marketplace %}, consulte "[Comprar e instalar aplicativos no GitHub Marketplace](/articles/purchasing-and-installing-apps-in-github-marketplace)".

{% endif %}

### Permitir que pessoas instalem seu aplicativo público no repositório deles

Você pode habilitar outros para instalar seu aplicativo público, fornecendo a URL de instalação em locais como a página inicial do seu aplicativo. Em seguida, você pode apontar para a página inicial do aplicativo a partir da página inicial do GitHub.

 Se você estiver migrando de um aplicativo OAuth para um aplicativo GitHub, você pode usar parâmetros de consulta para pré-selecionar os repositórios e a conta ao instalar o aplicativo GitHub. Consulte "[Migrando os aplicativos OAuth para os aplicativos GitHub](/apps/migrating-oauth-apps-to-github-apps/)para obter mais informações.

Essas etapas pressupõem que você [criou um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/):

1. Na [página de configurações dos aplicativos GitHub](https://github.com/settings/apps), selecione o aplicativo público que você deseja configurar para que outras pessoas instalem.
2. Em "URL da página inicial", digite a URL para a página inicial do seu aplicativo e clique em **Salvar as alterações**. ![URL da página inicial](/assets/images/github-apps/github_apps_homepageURL.png)
3. O GitHub fornece uma página inicial para o seu aplicativo que inclui um link para a "URL da página inicial" do seu aplicativo. Para visitar a página inicial no GitHub, copie a URL do "Link público" e cole-a em um navegador. ![Link público](/assets/images/github-apps/github_apps_public_link.png)
4. Create a homepage for your app that includes the app installation URL: `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`.

### Autorizar usuários durante a instalação

Você pode simplificar o processo de autorização concluindo-o durante a instalação do aplicativo. Para fazer isso, selecione **Solicitar autorização de usuário (OAuth) durante a instalação** ao criar ou modificar seu aplicativo no GitHub. Consulte "[Criando um aplicativo GitHub](/apps/building-github-apps/creating-a-github-app/)" para saber mais.

Assim que alguém tiver instalado seu aplicativo, você deverá obter um token de acesso para o usuário. See steps 2 and 3 in "[Identifying users on your site](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)" to learn more.
### Preservar o estado do aplicativo durante a instalação

Você pode fornecer um parâmetro de `estado` na URL de instalação de um aplicativo para preservar o estado da página do aplicativo e fazer com que as pessoas retornem para seu estado após efetuarem a instalação, autenticação ou aceitarem as atualizações no seu aplicativo GitHub. Por exemplo, você poderia usar o `estado` para correlacionar uma instalação a um usuário ou conta.

Para preservar um estado, adicione-o à URL de instalação:

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
