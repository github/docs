---
title: Sobre o aplicativo
intro: 'Você pode criar integrações com as APIs de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %} para adicionar flexibilidade e reduzir o atrito no seu próprio fluxo de trabalho.{% ifversion fpt or ghec %} Você também pode compartilhar integrações com outras pessoas em [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace).{% endif %}'
redirect_from:
  - /apps/building-integrationssetting-up-a-new-integration
  - /apps/building-integrations
  - /apps/getting-started-with-building-apps
  - /apps/about-apps
  - /developers/apps/about-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: a66af14f6047b2aff435ac4ac8dc83d7a1181e92
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107354'
---
Os aplicativos no {% data variables.product.prodname_dotcom %} permitem que você automatize e melhore seu fluxo de trabalho. Crie aplicativos para aprimorar seu fluxo de trabalho.{% ifversion fpt or ghec %} Você também pode compartilhar ou vender aplicativos no [{% data variables.product.prodname_marketplace %}](https://github.com/marketplace). Para saber como listar um aplicativo no {% data variables.product.prodname_marketplace %}, confira "[Introdução ao GitHub Marketplace](/marketplace/getting-started/)".{% endif %}

{% data reusables.marketplace.github_apps_preferred %}, mas o GitHub é compatível com {% data variables.product.prodname_oauth_apps %} e {% data variables.product.prodname_github_apps %}. Para obter informações sobre como escolher um tipo de aplicativo, confira "[Diferenças entre Aplicativos do GitHub e Aplicativos OAuth](/developers/apps/differences-between-github-apps-and-oauth-apps)".

{% data reusables.apps.general-apps-restrictions %}

Para ver um passo a passo do processo de criação de um {% data variables.product.prodname_github_app %}, confira "[Como criar seu primeiro {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

## Sobre os {% data variables.product.prodname_github_apps %}

{% data variables.product.prodname_github_apps %} são atores de primeira classe no GitHub. Um {% data variables.product.prodname_github_app %} age em seu próprio nome, tomando ações por meio da API diretamente usando sua própria identidade, o que significa que você não precisa manter um bot ou conta de serviço como um usuário separado.

O {% data variables.product.prodname_github_apps %} pode ser instalado diretamente em organizações e contas pessoais e conceder acesso a repositórios específicos. Eles vêm com webhooks integrados e permissões específicas e restritas. Ao configurar o {% data variables.product.prodname_github_app %}, você pode selecionar os repositórios que deseja que ele acesse. Por exemplo, você pode configurar um aplicativo chamado `MyGitHub` que grava os problemas no repositório `octocat` e _apenas_ no repositório `octocat`. Para instalar um {% data variables.product.prodname_github_app %}, você deve ser o proprietário de uma organização ou ter permissões de administrador em um repositório.

{% data reusables.apps.app_manager_role %}

{% data variables.product.prodname_github_apps %} são aplicativos que devem ser hospedados em algum lugar. Para ver instruções passo a passo que abrangem servidores e hospedagem, confira "[Como criar seu primeiro {% data variables.product.prodname_github_app %}](/apps/building-your-first-github-app)".

Para melhorar seu fluxo de trabalho, você pode criar um {% data variables.product.prodname_github_app %} que contém vários scripts ou um aplicativo inteiro e, em seguida, conectar esse aplicativo a muitas outras ferramentas. Por exemplo, você pode conectar {% data variables.product.prodname_github_apps %} ao GitHub, Slack, ou a outros aplicativos que você pode ter, programas de e-mail ou outras APIs.

Tenha isso em mente ao criar {% data variables.product.prodname_github_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-github-apps-allowed %} {% endif %}
* Um {% data variables.product.prodname_github_app %} deve executar ações independentemente de um usuário (a menos que o aplicativo esteja usando um token [de usuário para servidor](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests)). {% data reusables.apps.expiring_user_authorization_tokens %}

* Certifique-se de que o {% data variables.product.prodname_github_app %} integre repositórios específicos.
* O {% data variables.product.prodname_github_app %} deve conectar-se a uma conta pessoal ou organização.
* Não espere que o {% data variables.product.prodname_github_app %} saiba e faça tudo o que um usuário pode fazer.
* Não use {% data variables.product.prodname_github_app %}, se você precisa apenas de um serviço de "Login com GitHub". Mas um {% data variables.product.prodname_github_app %} pode usar um [fluxo de identificação do usuário](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/) para fazer logon dos usuários _e_ executar outras tarefas.
* Não crie um {% data variables.product.prodname_github_app %} se você _quiser apenas_ atuar como um usuário do GitHub e fazer tudo o que o usuário pode fazer.{% ifversion fpt or ghec %}
* {% data reusables.apps.general-apps-restrictions %}{% endif %}

Para começar a desenvolver {% data variables.product.prodname_github_apps %}, comece com "[Como criar um {% data variables.product.prodname_github_app %}](/apps/building-github-apps/creating-a-github-app/)".{% ifversion fpt or ghec %} Para saber como usar os Manifestos do {% data variables.product.prodname_github_app %}, que permitem que as pessoas criem {% data variables.product.prodname_github_apps %} pré-configurados, confira "[Como criar {% data variables.product.prodname_github_apps %} com base em um manifesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)".{% endif %}

## Sobre {% data variables.product.prodname_oauth_apps %}

OAuth2 é um protocolo que permite que os aplicativos externos solicitem autorização para detalhes privados na conta {% data variables.product.prodname_dotcom %} de um usuário sem acessar sua senha. Isto é preferido em relação à autenticação básica, porque os tokens podem ser limitados a tipos específicos de dados e podem ser revogados pelos usuários a qualquer momento.

{% data reusables.apps.deletes_ssh_keys %}

Um {% data variables.product.prodname_oauth_app %} usa {% data variables.product.prodname_dotcom %} como um provedor de identidade para efetuar a autenticação como o usuário que concede acesso ao aplicativo. Isso significa que, quando um usuário permite acesso ao {% data variables.product.prodname_oauth_app %}, ele concede permissões a _todos_ os repositórios aos quais ele tem acesso na conta e a todas as organizações às quais ele pertence que não bloquearam o acesso de terceiros.

Construir um {% data variables.product.prodname_oauth_app %} é uma boa opção se você estiver criando processos mais complexos do que um simples script pode gerenciar. Note que {% data variables.product.prodname_oauth_apps %} são aplicativos que precisam ser hospedados em algum lugar.

Tenha isso em mente ao criar {% data variables.product.prodname_oauth_apps %}:

{% ifversion fpt or ghec %}
* {% data reusables.apps.maximum-oauth-apps-allowed %} {% endif %}
* Um {% data variables.product.prodname_oauth_app %} deve sempre atuar como o usuário autenticado {% data variables.product.prodname_dotcom %} em todo o {% data variables.product.prodname_dotcom %} (por exemplo, ao fornecer notificações de usuário).
* Um {% data variables.product.prodname_oauth_app %} pode ser usado como um provedor de identidade, habilitando um "Login com {% data variables.product.prodname_dotcom %}" para o usuário autenticado.
* Não crie um {% data variables.product.prodname_oauth_app %}, se desejar que seu aplicativo atue em um único repositório. Com o escopo `repo` do OAuth, os {% data variables.product.prodname_oauth_apps %} podem atuar em _todos_ os repositórios do usuário autenticado.
* Não crie um {% data variables.product.prodname_oauth_app %} para atuar como um aplicativo para sua equipe ou empresa. {% data variables.product.prodname_oauth_apps %} efetua a autenticação como um usuário único. Portanto se uma pessoa criar um {% data variables.product.prodname_oauth_app %} para uma empresa usar e, posteriormente, sair da empresa, ninguém mais terá acesso.{% ifversion fpt or ghec %}
* {% data reusables.apps.oauth-apps-restrictions %}{% endif %}

Para obter mais informações sobre os {% data variables.product.prodname_oauth_apps %}, confira "[Como criar um {% data variables.product.prodname_oauth_app %}](/apps/building-oauth-apps/creating-an-oauth-app/)" e "[Como registrar seu aplicativo](/rest/guides/basics-of-authentication#registering-your-app)".

## {% data variables.product.pat_generic_caps %}s

Um [{% data variables.product.pat_generic %}](/articles/creating-a-personal-access-token-for-the-command-line/) é uma cadeia de caracteres que funciona de maneira semelhante a um [token OAuth](/apps/building-oauth-apps/authorizing-oauth-apps/), no qual você pode especificar as permissões por meio de [escopos](/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). Um {% data variables.product.pat_generic %} também é semelhante a uma senha, mas você pode ter várias delas e revogar o acesso a cada uma a qualquer momento.

Como exemplo, você pode habilitar um {% data variables.product.pat_generic %} a ser gravado nos repositórios. Depois, se você executar um comando cURL ou escrever um script que [crie um problema](/rest/reference/issues#create-an-issue) no repositório, precisará passar o {% data variables.product.pat_generic %} para autenticação. Você pode armazenar o {% data variables.product.pat_generic %} como uma variável de ambiente para evitar precisar digitá-lo a cada uso.

Considere o seguinte ao usar {% data variables.product.pat_generic %}s:

* Lembre-se de usar este token para representar apenas você.
* Você pode realizar solicitações de cURL únicas.
* Você pode executar scripts pessoais.
* Não configure um script para toda a sua equipe ou empresa usá-lo.
* Não configure uma conta pessoal compartilhada para atuar como um usuário de bot.
* Conceda ao token os privilégios mínimos necessários.
* Defina uma expiração para os {% data variables.product.pat_generic %}s, para manter suas informações seguras.

## Determinar qual integração criar

Antes de começar a criar integrações, você deverá determinar a melhor maneira de acessar autenticar e interagir com as APIs de {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %}{% else %}{% data variables.product.product_name %}{% endif %}. A imagem a seguir oferece algumas perguntas para você ao decidir usar {% data variables.product.pat_generic %}s, {% data variables.product.prodname_github_apps %} ou {% data variables.product.prodname_oauth_apps %} para integração.

![Introdução ao fluxo de perguntas dos aplicativos](/assets/images/intro-to-apps-flow.png)

Considere estas perguntas sobre como sua integração deve se comportar e o que é necessário para ter acesso:

* A minha integração funcionará apenas como eu ou será mais como um aplicativo?
* Quero que ela aja independentemente de mim com sua própria entidade?
* Ela irá acessar tudo o que eu puder acessar ou eu quero limitar seu acesso?
* É simples ou complexo? Por exemplo, {% data variables.product.pat_generic %}s são bons para scripts simples e cURLs, enquanto um {% data variables.product.prodname_oauth_app %} pode lidar com scripts mais complexos.

## Solicitar suporte

{% data reusables.support.help_resources %}
