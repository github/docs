---
title: Sobre o aplicativo
intro: 'Você pode construir integrações com as APIS de {% data variables.product.prodname_dotcom %} para adicionar flexibilidade e reduzir fricção no seu próprio fluxo de trabalho.{% if currentVersion == "free-pro-team@latest" %} Você também pode compartilhar integrações com outras pessoas em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrations/setting-up-a-new-integration/
  - /apps/building-integrations/
  - /apps/getting-started-with-building-apps/
  - /apps/about-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - aplicativos github
---

Os aplicativos no {% data variables.product.prodname_dotcom %} permitem que você automatize e melhore seu fluxo de trabalho. Você pode criar aplicativos para melhorar o seu fluxo de trabalho.{% if currentVersion == "free-pro-team@latest" %} Você também pode compartilhar ou vender aplicativos em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Para aprender como listar um aplicativo no {% data variables.product.prodname_marketplace %}, consulte "[Introdução ao GitHub Marketplace](/marketplace/getting-started/)".{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, mas o GitHub é compatível com {% data variables.product.prodname_oauth_app %}s e {% data variables.product.prodname_github_apps %}. Para obter informações sobre a escolha de um tipo de aplicativo, consulte "[Diferenças entre os aplicativos GitHub e os aplicativos OAuth](/developers/apps/differences-between-github-apps-and-oauth-apps)".

{% data reusables.apps.general-apps-restrictions %}

Para uma apresentação do processo de construção de um {% data variables.product.prodname_github_app %}, consulte "[Criando o seu primeiro {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

### Sobre o {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} são atores de primeira classe no GitHub. Um {% data variables.product.prodname_github_app %} age em seu próprio nome, tomando ações por meio da API diretamente usando sua própria identidade, o que significa que você não precisa manter um bot ou conta de serviço como um usuário separado.

O {% data variables.product.prodname_github_apps %} pode ser instalado diretamente em organizações e contas de usuários e conceder acesso a repositórios específicos. Eles vêm com webhooks integrados e permissões específicas e restritas. Ao configurar o {% data variables.product.prodname_github_app %}, você pode selecionar os repositórios que deseja que ele acesse. Por exemplo, você pode configurar um aplicativo denominado `MyGitHub` que escreve problemas no repositório `octocat` e _apenas_ no repositório `octocat`. Para instalar um {% data variables.product.prodname_github_app %}, você deve ser o proprietário de uma organização ou ter permissões de administrador em um repositório.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} são aplicativos que devem ser hospedados em algum lugar. Para obter as instruções do passo a passo que cobrem os servidores e hospedagem, consulte "[Construindo seu primeiro {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

Para melhorar seu fluxo de trabalho, você pode criar um {% data variables.product.prodname_github_app %} que contém vários scripts ou um aplicativo inteiro e, em seguida, conectar esse aplicativo a muitas outras ferramentas. Por exemplo, você pode conectar {% data variables.product.prodname_github_apps %} ao GitHub, Slack, ou a outros aplicativos que você pode ter, programas de e-mail ou outras APIs.

Tenha isso em mente ao criar {% data variables.product.prodname_github_apps %}:

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* Um {% data variables.product.prodname_github_app %} deve tomar ações independentes do usuário (a menos que o aplicativo esteja usando um token [user-to-server](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)). {% data reusables.apps.expiring_user_authorization_tokens %}

* Certifique-se de que o {% data variables.product.prodname_github_app %} integre repositórios específicos.
* O {% data variables.product.prodname_github_app %} deve conectar-se a uma conta pessoal ou organização.
* Não espere que o {% data variables.product.prodname_github_app %} saiba e faça tudo o que um usuário pode fazer.
* Não use {% data variables.product.prodname_github_app %}, se você precisa apenas de um serviço de "Login com GitHub". No entanto, um {% data variables.product.prodname_github_app %} pode usar um [fluxo de identificação de usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) para iniciar sessão de usuários em _e_ fazer outras coisas.
* Não crie um {% data variables.product.prodname_github_app %} se você _apenas_ quiser atuar como um usuário do GitHub e fazer tudo o que o usuário pode fazer.{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Para começar a desenvolver {% data variables.product.prodname_github_apps %}, comece com "[Criar um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/). {% if currentVersion == "free-pro-team@latest" %} Para aprender como usar manifestos de {% data variables.product.prodname_github_app %}, que permite às pessoas criar {% data variables.product.prodname_github_apps %} pré-configurados, consulte "[Criar {% data variables.product.prodname_github_apps %} a partir de um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/).{% endif %}

### Sobre {% data variables.product.prodname_oauth_app %}s

OAuth2 é um protocolo que permite que os aplicativos externos solicitem autorização para detalhes privados na conta {% data variables.product.prodname_dotcom %} de um usuário sem acessar sua senha. Isto é preferido em relação à autenticação básica, porque os tokens podem ser limitados a tipos específicos de dados e podem ser revogados pelos usuários a qualquer momento.

{% data reusables.apps.deletes_ssh_keys %}

Um {% data variables.product.prodname_oauth_app %} usa {% data variables.product.prodname_dotcom %} como um provedor de identidade para efetuar a autenticação como o usuário que concede acesso ao aplicativo. Isso significa que, quando um usuário concede acesso {% data variables.product.prodname_oauth_app %}, ele concedem permissões a _todos_ os repositórios aos quais tem acesso em sua conta, e também a qualquer organização a que pertence que não bloqueou o acesso de terceiros.

Construir um {% data variables.product.prodname_oauth_app %} é uma boa opção se você estiver criando processos mais complexos do que um simples script pode gerenciar. Observe que {% data variables.product.prodname_oauth_app %}s são aplicativos que precisam ser hospedados em algum lugar.

Tenha isso em mente ao criar {% data variables.product.prodname_oauth_app %}s:

{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* Um {% data variables.product.prodname_oauth_app %} deve sempre atuar como o usuário autenticado {% data variables.product.prodname_dotcom %} em todo o {% data variables.product.prodname_dotcom %} (por exemplo, ao fornecer notificações de usuário).
* Um {% data variables.product.prodname_oauth_app %} pode ser usado como um provedor de identidade, habilitando um "Login com {% data variables.product.prodname_dotcom %}" para o usuário autenticado.
* Não crie um {% data variables.product.prodname_oauth_app %}, se desejar que seu aplicativo atue em um único repositório. Com o escopo do OAuth do `repositório`, {% data variables.product.prodname_oauth_app %}s podem agir em _todos os_ os repositórios dos usuários autenticados.
* Não crie um {% data variables.product.prodname_oauth_app %} para atuar como um aplicativo para sua equipe ou empresa. {% data variables.product.prodname_oauth_app %}s efetuam a autenticação como um único usuário. Portanto, se uma pessoa criar um {% data variables.product.prodname_oauth_app %} para a empresa usar e depois sair da empresa, ninguém mais terá acesso a ele.{% if currentVersion == "free-pro-team@latest" %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Para obter mais informações sobre {% data variables.product.prodname_oauth_app %}, consulte "[Criar um {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" e "[Registrando seu aplicativo](/rest/guides/basics-of-authentication#registering-your-app)".

### Tokens de acesso pessoal

Um [token de acesso pessoal](/articles/creating-a-personal-access-token-for-the-command-line/) é uma string de caracteres que funciona da mesma forma que um [token do OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/), cujas permissões você pode especificar por meio de [escopos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Um token de acesso pessoal também é semelhante a uma senha, mas você pode ter muitos delas e você pode revogar o acesso a cada uma a qualquer momento.

Como exemplo, você pode habilitar um token de acesso pessoal para escrever em seus repositórios. Em seguida, se você executar um comando cURL ou escrever um script que [cria um problema](/rest/reference/issues#create-an-issue) no seu repositório, você informaria o token de acesso pessoal para efetuar a autenticação. Você pode armazenar o token de acesso pessoal como uma variável de ambiente para evitar ter de digitá-lo toda vez que você usá-lo.

Tenha em mente essas ideias ao usar os tokens de acesso pessoais:

* Lembre-se de usar este token para representar apenas você.
* Você pode realizar solicitações de cURL únicas.
* Você pode executar scripts pessoais.
* Não configure um script para toda a sua equipe ou empresa usá-lo.
* Não configure uma conta de usuário compartilhada para atuar como um usuário bot.

### Determinar qual integração criar

Antes de começar a criar integrações, você deve determinar a melhor maneira de acessar, autenticar e interagir com as APIs do {% data variables.product.prodname_dotcom %}. A imagem a seguir oferece algumas perguntas para você ao decidir usar tokens de acesso pessoal, {% data variables.product.prodname_github_apps %}, ou {% data variables.product.prodname_oauth_app %}s para sua integração.

![Introdução ao fluxo de perguntas dos aplicativos](/assets/images/intro-to-apps-flow.png)

Considere estas perguntas sobre como sua integração deve se comportar e o que é necessário para ter acesso:

* A minha integração funcionará apenas como eu ou será mais como um aplicativo?
* Quero que ela aja independentemente de mim com sua própria entidade?
* Ela irá acessar tudo o que eu puder acessar ou eu quero limitar seu acesso?
* É simples ou complexo? Por exemplo, tokens de acesso pessoal são bons para scripts simples e cURLs, enquanto um {% data variables.product.prodname_oauth_app %} pode lidar com scripts mais complexos.

### Solicitar suporte

{% data reusables.support.help_resources %}
