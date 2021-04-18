---
title: Sobre a visibilidade do repositório
intro: 'Você pode restringir quem tem acesso a um repositório escolhendo a visibilidade de um repositório: {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 9" %}público, interno ou privado{% elsif currentVersion == "github-ae@latest" %}privado ou interno{% else %} público ou privado{% endif %}.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### Sobre a visibilidade do repositório

{% if currentVersion == "github-ae@latest" %}Ao criar um repositório pertencente à sua conta de usuário, o repositório é sempre privado. Ao criar um repositório pertencente a uma organização, você pode optar por tornar o repositório privado ou interno.{% else %}Ao criar um repositório, você pode escolher tornar o repositório público ou privado.{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 9" %} Se você estiver criando o repositório em uma organização{% if currentVersion == "free-pro-team@latest" %} pertencente a uma conta corporativa{% endif %}, você também poderá optar por tornar o repositório interno.{% endif %}{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
Se
{% data variables.product.product_location %} não está em modo privado ou por trás de um firewall, repositórios públicos podem ser acessados por todos na internet. Caso contrário, os repositórios públicos estarão disponíveis para todos usando {% data variables.product.product_location %}, incluindo colaboradores externos. Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização. {% if currentVersion ver_gt "enterprise-server@2.19" %} Repositórios internos podem ser acessados pelo integrantes da empresa. Para obter mais informações, consulte "[Sobre repositórios internos](#about-internal-repositories)."{% endif %}
{% elsif currentVersion == "github-ae@latest" %}
Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização. Repositórios internos podem ser acessados por todos os integrantes da empresa. Para obter mais informações, consulte "[Sobre repositórios internos](#about-internal-repositories)."
{% else %}
Os repositórios públicos podem ser acessados por todos na internet. Os repositórios só podem ser acessados por você, pelas pessoas com as quais você compartilha explicitamente o acesso e, para repositórios da organização, por determinados integrantes da organização. Os repositórios internos podem ser acessados por todos os integrantes da empresa. Para obter mais informações, consulte "[Sobre repositórios internos](#about-internal-repositories)."
{% endif %}

Os proprietários da organização sempre têm acesso a todos os repositórios criados em uma organização. Para obter mais informações, consulte "[Níveis de permissão de repositório para uma organização](/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization)".

As pessoas com permissões de administrador para um repositório podem alterar a visibilidade de um repositório existente. Para obter mais informações, consulte "[Configurar visibilidade do repositório](/github/administering-a-repository/setting-repository-visibility)".

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}
### Sobre repositórios internos

{% note %}

**Observação:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

{% data reusables.repositories.about-internal-repos %} Para obter mais informações sobre o innersource, consulte a documentação técnica do {% data variables.product.prodname_dotcom %}"[Uma introdução ao innersource](https://resources.github.com/whitepapers/introduction-to-innersource/)".

Todos os integrantes da empresa têm permissões de leitura no repositório interno, mas os repositórios internos não são visíveis para pessoas {% if currentVersion == "free-pro-team@latest" %}que estão fora da empresa{% else %}que não são integrantes de uma organização{% endif %}, incluindo colaboradores externos em repositórios da organização. Para mais informações, consulte {% if currentVersion == "free-pro-team@latest" or "github-ae@latest" %}"[Funções em uma empresa](/github/setting-up-and-managing-your-enterprise/roles-in-an-enterprise#enterprise-members)" e {% endif %}"[Níveis de permissão do repositório](/articles/repository-permission-levels-for-an-organization) da organização.

{% data reusables.repositories.internal-repo-default %}

Se um usuário for removido de todas as organizações pertencentes à empresa, essas bifurcações do usuário dos repositórios internos do usuário serão removidas automaticamente.
{% endif %}
