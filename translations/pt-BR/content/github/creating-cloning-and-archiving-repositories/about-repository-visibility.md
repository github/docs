---
title: Sobre a visibilidade do repositório
intro: 'É possível restringir quem tem acesso a um repositório, escolhendo a visibilidade de um repositório: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %} público, interno ou privado{% else %} público ou privado{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre a visibilidade do repositório

Ao criar um repositório, você pode optar por tornar o repositório público ou privado. {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Se você estiver criando o repositório em uma organização{% if currentVersion == "free-pro-team@latest" %} que é propriedade de uma conta corporativa{% endif %}, você também poderá optar por tornar o repositório interno.{% endif %}

{% if currentVersion != "free-pro-team@latest" %}Se {% data variables.product.product_location_enterprise %} não estiver em modo privado ou atrás de um firewall, os repositórios p{% else %}P{% endif %}úblicos poderão ser acessados por qualquer pessoa na internet.{% if currentVersion != "free-pro-team@latest" %} Caso contrário, todos os repositórios públicos estarão disponíveis para todos que usarem o {% data variables.product.product_location_enterprise %}, incluindo os colaboradores externos.{% endif %} Os repositórios privados só poderão ser acessados por você ou por pessoas pessoas com as quais você compartilha explicitamente o acesso, e,para repositórios de organização, [alguns integrantes da organização](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization). {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}Os rpositórios internos podem ser acessados pelos {% if currentVersion == "free-pro-team@latest" %}integrantes da sua conta corporativa{% else %}e pelos integrantes de qualquer organização na sua instância{% endif %}. Para obter mais informações, consulte "[Sobre repositórios internos](#about-internal-repositories)."{% endif %}

Os proprietários da organização sempre têm acesso a todos os repositórios criados em uma organização. Para obter mais informações, consulte "[Níveis de permissão de repositório para uma organização](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)".

As pessoas com permissões de administrador para um repositório podem alterar a visibilidade de um repositório existente. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Sobre repositórios internos

{% note %}

**Observação:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Para obter mais informações sobre o innersource, consulte a documentação técnica do {% data variables.product.prodname_dotcom %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

Todos os {% if currentVersion == "free-pro-team@latest" %}integrantes da empresa{% else %}integrantes da organização{% endif %} têm permissões de leitura no repositório interno, mas repositórios internos não são visíveis para pessoas {% if currentVersion == "free-pro-team@latest" %}de fora da conta corporativa{% else %}que não são membros de uma organização{% endif %}, incluindo colaboradores externos nos repositórios da organização. Para mais informações consulte {% if currentVersion == "free-pro-team@latest" %}"[Funções para uma conta corporativa](/articles/roles-for-an-enterprise-account#enterprise-members)" e {% endif %}"[Níveis de permissão do repositório para uma organização](/articles/repository-permission-levels-for-an-organization)".

{% data reusables.repositories.internal-repo-default %}
Se um usuário for removido de

{% if currentVersion == "free-pro-team@latest" %}uma conta corporativa{% else %}todas as organizações na instância{% endif %} das bifurcações dos usuários de repositórios internos serão removidas automaticamente.
{% endif %}
