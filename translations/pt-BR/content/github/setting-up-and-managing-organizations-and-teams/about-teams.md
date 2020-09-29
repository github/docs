---
title: Sobre equipes
intro: As equipes são grupos de integrantes da organização que refletem sua empresa ou a estrutura do grupo com permissões de acesso em cascata e menções.
redirect_from:
  - /articles/about-teams
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

![Lista de equipes em uma organização](/assets/images/help/teams/org-list-of-teams.png)

Os proprietários da organização e os mantenedores de equipe podem dar às equipes acesso de administrador, leitura ou gravação aos repositórios da organização. Os integrantes da organização podem enviar uma notificação a uma equipe inteira mencionando o nome da equipe. Os integrantes da organização também podem enviar uma notificação a uma equipe inteira solicitando uma revisão dessa equipe. Os integrantes da organização podem solicitar revisões de equipes específicas com acesso de leitura ao repositório onde a pull request está aberta. As equipes podem ser designadas como proprietários de determinados tipos de área de código em um arquivo CODEOWNERS.

Para obter mais informações, consulte:
- "[Gerenciar o acesso da equipe a um repositório da organização](/articles/managing-team-access-to-an-organization-repository)"
- "[Mencionar pessoas e equipes](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)"
- "[Sobre proprietários do código](/articles/about-code-owners/)"

![Imagem de uma menção de equipe](/assets/images/help/teams/team-mention.png)

{% if currentVersion != "free-pro-team@latest" %}

Você também pode usar a sincronização LDAP para sincronizar os integrantes da equipe da {% data variables.product.product_location_enterprise %} e funções de equipe com os grupos LDAP estabelecidos. Isso permite estabelecer o controle de acesso baseado em função para usuários do servidor LDAP em vez de manualmente na {% data variables.product.product_location_enterprise %}. Para obter mais informações, consulte "[Habilitar a Sincronização LDAP](/enterprise/{{ currentVersion }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)".

{% endif %}

{% data reusables.organizations.team-synchronization %}

### Visibilidade da equipe

{% data reusables.organizations.types-of-team-visibility %}

### Páginas da equipe

Cada equipe tem sua própria página em uma organização. Na página de uma equipe, é possível exibir integrantes da equipe, equipes secundárias e os repositórios da equipe. Os proprietários da organização e os mantenedores de equipe podem acessar as configurações da equipe, bem como atualizar a descrição e a foto de perfil da equipe na página da equipe.

Os integrantes da organização podem criar e participar de discussões com a equipe. Para obter mais informações, consulte "[Sobre discussões de equipe](/articles/about-team-discussions)".

![Página da equipe listando integrantes e discussões da equipe](/assets/images/help/organizations/team-page-discussions-tab.png)

### Equipes aninhadas

Você pode refletir seu grupo ou a hierarquia da empresa na sua organização do {% data variables.product.product_name %} com vários níveis de equipes aninhadas. Uma equipe principal pode ter várias equipes secundárias, enquanto cada equipe secundária tem apenas uma equipe principal. Não é possível aninhar equipes secretas.

As equipes secundárias herdam as permissões de acesso da principal, simplificando o gerenciamento de permissões para grandes grupos. Os integrantes das equipes secundárias também recebem notificações quando a equipe principal é @mencionada, simplificando a comunicação com vários grupos de pessoas.

Por exemplo, se a estrutura da sua equipe for Funcionários > Engenharia > Engenharia de aplicativos > Identidade, conceder à Engenharia acesso de gravação a um repositório significa que a Engenharia de aplicativos e a Identidade também obterão esse acesso. Se você @mencionar a Equipe Identidade ou qualquer equipe na parte inferior da hierarquia da organização, elas serão as únicas que receberão uma notificação.

![Página das equipes com uma equipe principal e equipes secundárias](/assets/images/help/teams/nested-teams-eng-example.png)

Para entender facilmente quem compartilha permissões da equipe principal e faz menção, você pode ver todos os integrantes das equipes secundárias de uma equipe principal na guia Members (Integrantes) da página da equipe principal. Os integrantes de uma equipe secundária não são integrantes diretos da equipe principal.

![Página da equipe principal com todos os integrantes das equipes secundárias](/assets/images/help/teams/team-and-subteam-members.png)

Você pode escolher uma principal quando criar a equipe ou pode mover uma equipe na hierarquia da organização posteriormente. Para obter mais informações, consulte "[Mover uma equipe na hierarquia da sua organização](/articles/moving-a-team-in-your-organization-s-hierarchy)".

{% if currentVersion != "free-pro-team@latest" %}

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% endif %}

### Preparar para aninhar equipes em sua organização

Se a sua organização já tiver equipes, você deverá auditar as permissões de acesso ao repositório de cada equipe antes de aninhar equipes acima ou abaixo dela. Também é preciso considerar a nova estrutura que deseja implementar para a organização.

No topo da hierarquia da equipe, você deve fornecer às equipes principais permissões de acesso ao repositório que sejam seguras para cada integrante da equipe principal e suas equipes secundárias. À medida que desce pela hierarquia, você pode conceder às equipes secundárias adicionais, acesso mais granular a repositórios mais confidenciais.

1. Remova todos os integrantes das equipes existentes
2. Audite e ajuste as permissões de acesso ao repositório de cada equipe e forneça a cada equipe uma equipe principal
3. Crie qualquer equipe nova que desejar, escolha uma principal para cada equipe nova e forneça a ela acesso ao repositório
4. Adicione pessoas diretamente às equipes

### Leia mais

- "[Criar uma equipe](/articles/creating-a-team)"
- "[Adicionar integrantes da organização a uma equipe](/articles/adding-organization-members-to-a-team)"
