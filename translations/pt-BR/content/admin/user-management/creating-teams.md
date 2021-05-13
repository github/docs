---
title: Criar equipes
intro: 'As organizações usam as equipes para criar grupos de integrantes e controlar o acesso aos repositórios. Os integrantes da equipe podem receber permissões de leitura, gravação ou administração em determinados repositórios.'
redirect_from:
  - /enterprise/admin/user-management/creating-teams
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

As equipes são essenciais para vários recursos de colaboração do {% data variables.product.prodname_dotcom %}, como as @menções, que chamam a atenção dos integrantes envolvidos em alguma questão específica. Para obter mais informações sobre como configurar equipes e permissões de equipe, consulte "[Níveis de permissão nos repositórios da organização](/enterprise/{{ currentVersion }}/user/articles/repository-permission-levels-for-an-organization/)".

Uma equipe pode representar um grupo dentro da empresa ou incluir pessoas com determinados interesses ou experiências. Por exemplo, uma equipe de especialistas em acessibilidade da {% data variables.product.product_location %} pode envolver pessoas de vários departamentos. As equipes podem representar interesses funcionais que complementam a hierarquia das divisões de uma empresa.

As organizações podem criar vários níveis de equipes aninhadas para refletir a estrutura hierárquica de uma empresa ou grupo. Para obter mais informações, consulte "[Sobre equipes](/enterprise/{{ currentVersion }}/user/articles/about-teams/#nested-teams)".

### Criar equipes

Fazer uma combinação prudente de equipes é uma forma poderosa de controlar o acesso ao repositório. Por exemplo, se a sua organização permitir que somente a equipe de engenharia da versão faça push do código para o branch de qualquer repositório, você poderia conceder permissões de **administração** aos repositórios da organização somente à equipe de engenharia, enquanto todas as outras equipes teriam permissão de **leitura**.

{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}

### Criar equipes com a Sincronização LDAP habilitada

Instâncias que usam o LDAP para fazer autenticação de usuários podem usar a Sincronização LDAP para gerenciar os integrantes de uma equipe. Configurar o **Distinguished Name (DN)** (nome diferenciado) no campo **LDAP group** (grupo LDAP) mapeará uma equipe a um grupo LDAP ou servidor LDAP. Se você usar a Sincronização LDAP para gerenciar os integrantes de uma equipe, não será possível gerenciar a sua equipe na {% data variables.product.product_location %}. Quando a Sincronização LDAP estiver habilitada, a equipe mapeada sincronizará seus integrantes em segundo plano e periodicamente no intervalo configurado. Para obter mais informações, consulte "[Habilitar a Sincronização LDAP](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync)".

{% data reusables.enterprise_user_management.ldap-sync-nested-teams %}

{% warning %}

**Notas:**
- A Sincronização LDAP gerencia somente a lista de integrantes da equipe. Você deve gerenciar os repositórios e permissões da equipe pelo {% data variables.product.prodname_ghe_server %}.
- Se um grupo LDAP mapeado para um DN for removido, por exemplo, se o grupo LDAP for excluído, todos os integrantes serão removidos da equipe sincronizada do {% data variables.product.prodname_ghe_server %}. Para corrigir o problema, mapeie a equipe para um novo DN, adicione novamente os integrantes e [sincronize manualmente o mapeamento](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap/#manually-syncing-ldap-accounts).
- Quando a Sincronização LDAP estiver ativada, se uma pessoa for removida de um repositório, ela perderá o acesso. No entanto, suas bifurcações não serão excluídas. Se a pessoa for adicionada a uma equipe e tiver acesso ao repositório original da organização dentro de três meses, seu acesso às bifurcações será restaurado automaticamente na sincronização seguinte.

{% endwarning %}

1. Verifique se a [sincronização LDAP está habilitada](/enterprise/{{ page.version }}/admin/guides/user-management/using-ldap#enabling-ldap-sync).
{% data reusables.profile.enterprise_access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.new_team %}
{% data reusables.organizations.team_name %}
6. Pesquise um DN do grupo do LDAP ao qual a equipe será mapeada. Se você não souber o DN, digite o nome do grupo do LDAP.
O {% data variables.product.prodname_ghe_server %} vai buscar correspondências e preenchimentos automáticos.
![Mapear grupo LDAP para DN](/assets/images/enterprise/orgs-and-teams/ldap-group-mapping.png)
{% data reusables.organizations.team_description %}
{% data reusables.organizations.team_visibility %}
{% data reusables.organizations.create-team-choose-parent %}
{% data reusables.organizations.create_team %}
