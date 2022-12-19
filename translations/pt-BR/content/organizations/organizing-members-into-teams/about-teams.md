---
title: Sobre equipes
intro: As equipes são grupos de membros da organização que refletem a estrutura da sua empresa ou do grupo com menções e permissões de acesso em cascata.
redirect_from:
  - /articles/about-teams
  - /github/setting-up-and-managing-organizations-and-teams/about-teams
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
ms.openlocfilehash: 7b899cf08ca58170acdf8fb2fb2ad13d251b76e3
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145149841'
---
![Lista de equipes em uma organização](/assets/images/help/teams/org-list-of-teams.png)

Os proprietários da organização e os mantenedores da equipe podem conceder às equipes acesso de administrador, de leitura ou de gravação aos repositórios da organização. Os membros da organização podem enviar uma notificação para uma equipe inteira mencionando o nome da equipe. Os membros da organização também podem enviar uma notificação para uma equipe inteira solicitando uma análise dessa equipe. Os membros da organização podem solicitar análises de equipes específicas com acesso de leitura ao repositório no qual a solicitação de pull foi aberta. As equipes podem ser designadas como proprietários de determinados tipos de área de código em um arquivo CODEOWNERS.

Para obter mais informações, consulte:
- "[Como gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Como mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- "[Sobre os proprietários de código](/articles/about-code-owners/)"

![Imagem de uma menção de equipe](/assets/images/help/teams/team-mention.png)

{% ifversion ghes %}

Use também a Sincronização LDAP para sincronizar membros da equipe e funções de equipe do {% data variables.product.product_location %} com os grupos LDAP estabelecidos. Isso permite estabelecer o controle de acesso baseado em função para usuários do servidor LDAP em vez de manualmente no {% data variables.product.product_location %}. Para obter mais informações, confira "[Como habilitar a Sincronização LDAP](/enterprise/admin/authentication/using-ldap#enabling-ldap-sync)".

{% endif %}

{% data reusables.organizations.team-synchronization %}

## Visibilidade da equipe

{% data reusables.organizations.types-of-team-visibility %}

Você pode ver todas as equipes às quais você pertence no seu painel pessoal. Para obter mais informações, confira "[Sobre seu painel pessoal](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#finding-your-top-repositories-and-teams)".

## Páginas da equipe

Cada equipe tem sua própria página em uma organização. Na página de uma equipe, é possível exibir integrantes da equipe, equipes secundárias e os repositórios da equipe. Os proprietários da organização e os mantenedores de equipe podem acessar as configurações da equipe, bem como atualizar a descrição e a foto de perfil da equipe na página da equipe.

Os integrantes da organização podem criar e participar de discussões com a equipe. Para obter mais informações, confira "[Sobre as discussões em equipe](/organizations/collaborating-with-your-team/about-team-discussions)".

![Página da equipe listando integrantes e discussões da equipe](/assets/images/help/organizations/team-page-discussions-tab.png)

## Equipes aninhadas

Você pode refletir seu grupo ou a hierarquia da empresa na sua organização do {% data variables.product.product_name %} com vários níveis de equipes aninhadas. Uma equipe pai pode ter várias equipes filhas, enquanto cada equipe filha tem apenas uma equipe pai. Você não pode aninhar equipes secretas.

As equipes filhas herdam as permissões de acesso do pai, simplificando o gerenciamento de permissões para grandes grupos. Os membros das equipes filho também recebem notificações quando a equipe pai é @mentioned, simplificando a comunicação com vários grupos de pessoas.

Por exemplo, se a estrutura da sua equipe for Funcionários > Engenharia > Engenharia de aplicativos > Identidade, conceder à Engenharia acesso de gravação a um repositório significa que a Engenharia de aplicativo e a Identidade também obterão esse acesso. Se você @mention a Equipe de Identidade ou qualquer equipe na parte inferior da hierarquia da organização, elas serão as únicas que receberão uma notificação.

![Página das equipes com uma equipe principal e equipes secundárias](/assets/images/help/teams/nested-teams-eng-example.png)

Para entender facilmente quem compartilha permissões da equipe principal e faz menção, você pode ver todos os integrantes das equipes secundárias de uma equipe principal na guia Members (Integrantes) da página da equipe principal. Os integrantes de uma equipe secundária não são integrantes diretos da equipe principal.

![Página da equipe principal com todos os integrantes das equipes secundárias](/assets/images/help/teams/team-and-subteam-members.png)

Você pode escolher uma principal quando criar a equipe ou pode mover uma equipe na hierarquia da organização posteriormente. Para obter mais informações, confira "[Como mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

## Preparar para aninhar equipes em sua organização

Se a sua organização já tiver equipes, você deverá auditar as permissões de acesso ao repositório de cada equipe antes de aninhar equipes acima ou abaixo dela. Também é preciso considerar a nova estrutura que deseja implementar para a organização.

No topo da hierarquia da equipe, você deve fornecer às equipes principais permissões de acesso ao repositório que sejam seguras para cada integrante da equipe principal e suas equipes secundárias. À medida que desce pela hierarquia, você pode conceder às equipes secundárias adicionais, acesso mais granular a repositórios mais confidenciais.

1. Remova todos os integrantes das equipes existentes
2. Audite e ajuste as permissões de acesso ao repositório de cada equipe e forneça a cada equipe uma equipe principal
3. Crie qualquer equipe nova que desejar, escolha uma principal para cada equipe nova e forneça a ela acesso ao repositório
4. Adicione pessoas diretamente às equipes

## Leitura adicional

- "[Como criar uma equipe](/articles/creating-a-team)"
- "[Como adicionar membros da organização a uma equipe](/articles/adding-organization-members-to-a-team)"
