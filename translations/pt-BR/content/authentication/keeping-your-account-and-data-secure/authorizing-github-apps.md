---
title: Autorizando aplicativos GitHub
intro: 'Você pode autorizar um {% data variables.product.prodname_github_app %} para permitir que um aplicativo recupere informações sobre sua conta de {% data variables.product.prodname_dotcom %} e, em algumas circunstâncias, para fazer mudanças em {% data variables.product.prodname_dotcom %} em seu nome.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
redirect_from:
  - /github/authenticating-to-github/keeping-your-account-and-data-secure/authorizing-github-apps
---

Os plicativos de terceiros que precisam verificar a sua identidade {% data variables.product.prodname_dotcom %}, ou interagir com os dados em {% data variables.product.prodname_dotcom %} em seu nome, podem pedir para que você autorize {% data variables.product.prodname_github_app %} a fazê-lo.

Ao autorizar o {% data variables.product.prodname_github_app %}, você deve ter certeza de que se trata de um aplicativo confiável, examinar por quem foi desenvolvido e analisar os tipos de informação que o aplicativo quer acessar.

Durante a autorização, você será solicitado a conceder a permissão {% data variables.product.prodname_github_app %} para:
* **Verifique sua identidade de {% data variables.product.prodname_dotcom %}**<br/> Quando autorizado, o {% data variables.product.prodname_github_app %} poderá recuperar programaticamente seu perfil público do GitHub, bem como alguns dados privados (como seu endereço de e-mail), dependendo do nível de acesso solicitado.
* **Pode saber quais recursos você pode acessar**<br/> Quando autorizado, o {% data variables.product.prodname_github_app %} poderá ler programaticamente os _recursos privados_ {% data variables.product.prodname_dotcom %} que você pode acessar (como repositórios privados  de {% data variables.product.prodname_dotcom %}) _, em que _ uma instalação do {% data variables.product.prodname_github_app %} também está presente. O aplicativo pode usar isso, por exemplo, para que possa exibir uma lista de repositórios apropriada.
* **Agir no seu nome**<br/> O aplicativo pode precisar executar tarefas em {% data variables.product.prodname_dotcom %}, como você. Isso pode incluir criar um problema ou comentar em um pull request. Essa capacidade de agir no seu nome limita-se aos recursos de {% data variables.product.prodname_dotcom %} em que _tanto_ você quanto {% data variables.product.prodname_github_app %} têm acesso. Em alguns casos, no entanto, é possível que o aplicativo nunca faça alterações em seu nome.

## Quando um {% data variables.product.prodname_github_app %} age em seu nome?

As situações nas quais um {% data variables.product.prodname_github_app %} atua em seu nome variam de acordo com o propósito do {% data variables.product.prodname_github_app %} e o contexto em que ele está sendo usado.

Por exemplo, um ambiente de desenvolvimento integrado (IDE) pode usar um {% data variables.product.prodname_github_app %} para interagir em seu nome para fazer push das alterações que você criou através do IDE de volta para repositórios em {% data variables.product.prodname_dotcom %}.  O {% data variables.product.prodname_github_app %} vai conseguir isso por meio de uma solicitação de usuário para servidor [](/get-started/quickstart/github-glossary#user-to-server-request).

Quando um {% data variables.product.prodname_github_app %} age em seu nome desta forma, isto é identificado no GitHub por meio de um ícone especial que mostra um avatar pequeno para {% data variables.product.prodname_github_app %} no seu próprio avatar, semelhante ao mostrado abaixo.

![Um problema criado por uma slicitação de "usuário para servidor" de um {% data variables.product.prodname_github_app %}](/assets/images/help/apps/github-apps-new-issue.png)

## Até que ponto um {% data variables.product.prodname_github_app %} pode saber quais recursos você pode acessar e agir em seu nome?

A medida que um {% data variables.product.prodname_github_app %} pode saber quais recursos você pode acessar e agir em seu nome, após autorizá-lo, é limitada por:

* As organizações ou repositórios nos quais o aplicativo está instalado
* As permissões que o aplicativo solicitou
* Seu acesso a recursos de {% data variables.product.prodname_dotcom %}

Vamos usar um exemplo para explicar isso.

A usuária Alice de {% data variables.product.prodname_dotcom %} efetua o login em um aplicativo web de terceiros, ExempleApp, usando sua identidade de {% data variables.product.prodname_dotcom %}. Durante este processo, Alice autoriza o ExemploApp a executar ações em seu nome.

No entanto, a atividade que o ExampleApp pode executar em nome de Alice no {% data variables.product.prodname_dotcom %} é restringido: pelos repositórios nos quais o aplicativo é instalado, as permissões que o ExampleApp solicitou e o acesso de Alice aos recursos de {% data variables.product.prodname_dotcom %}.

Isto significa que, para o ExempleApp criar um novo problema em nome da Alice, em um repositório denominado Repo A, todas as afirmações a seguir devem ser verdadeiras:

* {% data variables.product.prodname_github_app %} do ExampleApp solicita acesso de gravação aos problemas.
* Um usuário que tenha acesso de administrador ao repositório A deve ter instalado o {% data variables.product.prodname_github_app %} do ExampleApp no repositório A.
* Alice deve ter lido a permissão para o Repo A. Para obter informações sobre quais permissões são necessárias para executar várias atividades, consulte "[Funções do Repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization).".
