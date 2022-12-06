---
title: Diferenças entre Aplicativos do GitHub e Aplicativos OAuth
intro: 'Entender as diferenças entre {% data variables.product.prodname_github_apps %} e {% data variables.product.prodname_oauth_apps %} ajudará você a decidir qual aplicativo você deseja criar. O {% data variables.product.prodname_oauth_app %} atua como usuário do GitHub, enquanto o {% data variables.product.prodname_github_app %} usa sua própria identidade quando instalado em uma organização ou em repositórios de uma organização.'
redirect_from:
  - /early-access/integrations/integrations-vs-oauth-applications
  - /apps/building-integrations/setting-up-a-new-integration/about-choosing-an-integration-type
  - /apps/differences-between-apps
  - /developers/apps/differences-between-github-apps-and-oauth-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
  - OAuth Apps
shortTitle: GitHub Apps & OAuth Apps
ms.openlocfilehash: d70304b71de11a4a24f2acc6c2545e78cbd19b0c
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148007645'
---
## Quem pode instalar aplicativos GitHub e autorizar aplicativos OAuth?

Você pode instalar os aplicativos GitHub em sua conta pessoal ou em organizações das quais você é proprietário. Se você tiver permissões de administrador em um repositório, você poderá instalar os aplicativos GitHub em contas de organização. Se um aplicativo GitHub for instalado em um repositório e exigir permissões de organização, o proprietário da organização deverá aprovar o aplicativo.

{% data reusables.apps.app_manager_role %}

Por outro lado, os usuários autorizam os Aplicativos OAuth, o que oferece ao aplicativo a capacidade de atuar como o usuário autenticado. Por exemplo, você pode autorizar um aplicativo OAuth que encontra todas as notificações para o usuário autenticado. Você sempre pode revogar as permissões de um aplicativo OAuth.

{% ifversion limit-app-access-requests %} {% data reusables.organizations.restricted-app-access-requests %}{% endif %}

{% data reusables.apps.deletes_ssh_keys %}

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ------ |
| Você deve ser proprietário de uma organização ou ter permissões de administrador em um repositório para instalar um aplicativo do GitHub em uma organização. Se um aplicativo GitHub for instalado em um repositório e exigir permissões de organização, o proprietário da organização deverá aprovar o aplicativo. | Você pode autorizar um aplicativo OAuth para ter acesso a recursos. |
| Você pode instalar um aplicativo GitHub no seu repositório pessoal. | Você pode autorizar um aplicativo OAuth para ter acesso a recursos.|
| Você deve ser um proprietário da organização, proprietário pessoal do repositório ou ter permissões de administrador em um repositório para desinstalar um aplicativo GitHub e remover seu acesso. | Você pode excluir um token de acesso do OAuth para remover o acesso. |
| Você deve ser um proprietário de uma organização ou ter permissões de administrador em um repositório para solicitar a instalação de um aplicativo GitHub. | Se uma política de aplicativos da organização estiver ativa, qualquer integrante da organização poderá solicitar a instalação de um aplicativo OAuth em uma organização. Um proprietário da organização deve aprovar ou negar a solicitação. |

## O que o aplicativo GitHub e o aplicativo OAuth podem acessar?

Os proprietários de contas podem usar um {% data variables.product.prodname_github_app %} em uma conta sem conceder acesso a outra. Por exemplo, você pode instalar um serviço de criação de terceiros na organização do seu empregador, mas decidir não conceder esse acesso de serviço de criação aos repositórios na sua conta pessoal. Um aplicativo GitHub permanece instalado se a pessoa que o configura sair da organização.

Um Aplicativo OAuth _autorizado_ tem acesso a todos os recursos acessíveis do usuário ou do proprietário da organização.

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ------ |
| A instalação de um aplicativo GitHub permite ao aplicativo acesso a repositórios escolhidos de uma conta de usuário ou da organização. | A autorização de um aplicativo OAuth permite que o aplicativo acesso aos recursos acessíveis do usuário. Por exemplo, os repositórios que ele pode acessar. |
| O token de instalação de um aplicativo GitHub perde acesso aos recursos se um administrador remover repositórios da instalação. | Um token de acesso do OAuth perde acesso aos recursos quando o usuário perde acesso, como quando perdem acesso de gravação em um repositório. |
| Os tokens de acesso de instalação são limitados aos repositórios especificados com as permissões escolhidas pelo criador do aplicativo. | Um token de acesso OAuth é limitado por meio de escopos. |
| Os aplicativos GitHub podem solicitar acesso separado para problemas e pull requests sem acessar o conteúdo real do repositório. | Os Aplicativos OAuth precisam solicitar o escopo `repo` para obter acesso a problemas, solicitações de pull ou a qualquer item pertencente ao repositório. |
| Os aplicativos GitHub não estão sujeitos às políticas de aplicativo da organização. Um aplicativo GitHub só tem acesso aos repositórios que algum proprietário da organização concedeu. | Se uma política de aplicativo da organização estiver ativa, somente um proprietário da organização poderá autorizar a instalação de um aplicativo OAuth. Se instalado, o aplicativo OAuth obterá acesso a qualquer coisa visível para o token que o proprietário da organização tem dentro da organização aprovada. |
| Um aplicativo GitHub recebe um evento do webhook quando uma instalação é alterada ou removida. Isto informa ao criador do aplicativo quando receberam mais ou menos acesso aos recursos de uma organização. | Os aplicativos OAuth podem perder acesso a uma organização ou repositório a qualquer momento com na alteração de acesso do usuário concedido. O aplicativo OAuth não irá informá-lo quando perde acesso a um recurso. |

## Identificação baseada em token

{% note %}

**Observação:** os Aplicativos do GitHub também podem usar um token baseado no usuário. Para obter mais informações, confira "[Como identificar e autorizar usuários para Aplicativos do GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)".

{% endnote %}

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ----------- |
| Um aplicativo GitHub pode solicitar um token de acesso de instalação usando uma chave privada com um formato de token do JSON fora da banda. | Um aplicativo OAuth pode trocar um token de solicitação por um token de acesso após um redirecionamento por meio de uma solicitação da web. |
| Um token de instalação identifica o aplicativo como o bot dos Aplicativos do GitHub, como @jenkins-bot. | Um token de acesso identifica o aplicativo como o usuário que concedeu o token ao aplicativo, como @octocat. |
| Os tokens de instalação expiram após um tempo predefinido (atualmente, 1 hora). | Os tokens do OAuth permanecem ativos até que sejam cancelados pelo cliente. |
| {% data variables.product.prodname_github_apps %} instalado em organizações ou repositórios estão sujeitos a limites de taxa para solicitações de servidor para servidor. Para obter mais informações, confira "[Limites de taxa dos {% data variables.product.prodname_github_apps %}](/developers/apps/building-github-apps/rate-limits-for-github-apps)". | Os tokens OAuth usam o limite de taxa do usuário de {% ifversion fpt or ghec or ghes %}5.000{% elsif ghae %}15.000 solicitações{% endif %} por hora. |
| Os aumentos de limite de taxa podem ser concedidos no nível dos aplicativos GitHub (afetando todas as instalações) e no nível da instalação individual. | Os aumentos de limite de taxa são concedidos para cada aplicativo OAuth. Cada token concedido a esse aplicativo OAuth obtém o aumento do limite. |
| {% data variables.product.prodname_github_apps %} pode efetuar a autenticação em nome do usuário, que é chamado de solicitação de usuário para servidor. O fluxo de autorização é igual ao do aplicativo OAuth. Os tokens de usuário para servidor podem expirar e serem renovados com um token de atualização. Para obter mais informações, confira "[Como atualizar tokens de acesso de usuário para servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)" e "[Como identificar e autorizar usuários para Aplicativos do GitHub](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)". | O fluxo do OAuth usado por {% data variables.product.prodname_oauth_apps %} autoriza um {% data variables.product.prodname_oauth_app %} em nome do usuário. Este é o mesmo fluxo de uso na autorização de usuário para servidor do {% data variables.product.prodname_github_app %}. |

## Solicitar níveis de permissão para os recursos

Ao contrário dos aplicativos OAuth, os aplicativos GitHub têm permissões direcionadas que lhes permitem solicitar acesso apenas ao que precisam. Por exemplo, uma Integração Contínua (CI) do aplicativo GitHub pode solicitar acesso de leitura ao conteúdo do repositório e acesso de gravação à API de status. Outro aplicativo GitHub não pode ter acesso de leitura ou de gravação para o código, mas ainda assim pode gerenciar problemas, etiquetas e marcos. Os aplicativos OAuth não podem usar permissões granulares.

| Access | Aplicativos do GitHub (permissões `read` ou `write`) | Aplicativos OAuth |
| ------ | ----- | ----------- |
| **Para acesso a repositórios públicos** | O repositório público precisa ser escolhido durante a instalação. | Escopo `public_repo`. |
| **Para acesso ao código/ao conteúdo do repositório** | Conteúdo do repositório | Escopo `repo`. |
| **Para acesso a problemas, rótulos e marcos** | Problemas | Escopo `repo`. |
| **Para acesso a solicitações de pull, rótulos e marcos** | Solicitações de pull | Escopo `repo`. |
| **Para acesso a status de commits (para builds de CI)** | Status do commit | Escopo `repo:status`. |
| **Para acesso a implantações e a status de implantações** | Implantações | Escopo `repo_deployment`. |
| **Para receber eventos por meio de um webhook** | Um aplicativo de GitHub inclui um webhook por padrão. | Escopo `write:repo_hook` ou `write:org_hook`. |

## Descoberta de repositório

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ----------- |
| Os Aplicativos do GitHub podem examinar `/installation/repositories` para ver os repositórios que a instalação pode acessar. | Os Aplicativos OAuth podem examinar `/user/repos` em busca de uma exibição de usuário ou `/orgs/:org/repos` em busca de uma exibição de organização dos repositórios acessíveis. |
| Os aplicativos GitHub recebem webhooks quando os repositórios são adicionados ou removidos da instalação. | Os aplicativos OAuth criam webhooks de organização para notificações quando um novo repositório é criado dentro de uma organização. |

## Webhooks

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ----------- |
| Por padrão, os aplicativos GitHub têm um único webhook que recebe os eventos que estão configurados para receber para cada repositório ao qual têm acesso. | Os aplicativos OAuth solicitam o escopo do webhook para criar um webhook do repositório para cada repositório do qual precisam receber eventos. |
| O aplicativo GitHub recebe certos eventos a nível da organização com a permissão do integrante da organização. | Os aplicativos OAuth solicitam o escopo do webhook da organização para criar um webhook da organização para cada organização da qual precisam para receber eventos a nível da organização. |
| Os webhooks são desabilitados automaticamente quando o aplicativo GitHub é desinstalado. | Os webhooks não serão desabilitados automaticamente se o token de acesso de um aplicativo OAuth for excluído e não houver como limpá-los automaticamente. Você precisará solicitar que os usuários façam isso manualmente.|

## Acesso Git

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ----------- |
| Os aplicativos GitHub solicitam a permissão de conteúdo do repositório e usam seu token de instalação para fazer a autenticação por meio do [Git baseado em HTTP](/apps/building-github-apps/authenticating-with-github-apps/#http-based-git-access-by-an-installation). | Os aplicativos OAuth solicitam o escopo da `write:public_key` e [criam uma chave de implantação](/rest/reference/deployments#create-a-deploy-key) por meio da API. Depois, você pode usar essa chave para executar comandos do Git. |
| O token é usado como senha HTTP. | O token é usado como nome de usuário HTTP. |

## Máquina vs. contas de bot

Contas de usuário de máquina são contas pessoais baseadas no OAuth que separam sistemas automatizados usando o sistema de usuário do GitHub.

As contas do bot são específicas para os aplicativos GitHub e são construídas em todos os aplicativos GitHub.

| Aplicativos GitHub | Aplicativos OAuth |
| ----- | ----------- |
| Os bots do aplicativo GitHub não consomem uma estação {% data variables.product.prodname_enterprise %}. | Uma conta de usuário de máquina consome uma estação {% data variables.product.prodname_enterprise %}. |
| Como um bot do aplicativo GitHub nunca recebe uma senha, um cliente não pode entrar diretamente nele. | Um nome de usuário e senha são concedidos a uma conta de usuário de máquina para ser gerenciada e protegida pelo cliente. |
