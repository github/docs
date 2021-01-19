---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.
Service providers can partner with

{% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning](/developers/overview/secret-scanning)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios públicos

{% data variables.product.prodname_secret_scanning_caps %} is automatically enabled on public repositories. Quando você faz push para um repositório público, o {% data variables.product.product_name %} verifica segredos no conteúdo dos commits. Se você alternar um repositório privado para público, o {% data variables.product.product_name %} verifica segredos em todo o repositório.

Quando o {% data variables.product.prodname_secret_scanning %} detecta um conjunto de credenciais, notificamos o provedor de serviço que emitiu o segredo. O provedor de serviço valida a credencial e decide se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente, o que dependerá dos riscos associados a você ou ao provedor de serviço. For an overview of how we work with token-issuing partners, see "[Secret scanning](/developers/overview/secret-scanning)."

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios privados
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_gt "enterprise-server@2.22" %}
### About {% data variables.product.prodname_secret_scanning %} on {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} is available on all organization-owned repositories as part of {% data variables.product.prodname_GH_advanced_security %}. It is not available on user-owned repositories.
{% endif %}

If you're a repository administrator or an organization owner, you can enable {% data variables.product.prodname_secret_scanning %} for {% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories that are owned by organizations. You can enable  {% data variables.product.prodname_secret_scanning %} for all your repositories, or for all new repositories within your organization.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} is not available for user-owned private repositories.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)."

When you push commits to a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} sends alerts.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.

- O {% data variables.product.prodname_dotcom %} exibe um alerta no repositório. Para obter mais informações, consulte "[Gerenciando alertas do {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."

Repository administrators and organization owners can grant users and teams access to {% data variables.product.prodname_secret_scanning %} alerts. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
To monitor results from
{% data variables.product.prodname_secret_scanning %} across your private repositories or your organization, you can use the {% data variables.product.prodname_secret_scanning %} API. For more information about API endpoints, see "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)."{% endif %}

{% data variables.product.prodname_dotcom %}  currently scans{% if currentVersion == "free-pro-team@latest" %} private{% endif %} repositories for secrets issued by the following service providers.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% note %}

**Nota: o ** {% data variables.product.prodname_secret_scanning_caps %} atualmente não permite que você defina seus próprios padrões para detecção de segredos.

{% endnote %}

### Leia mais

- "[Sobre proteger seu repositório](/github/administering-a-repository/about-securing-your-repository)"
- "[Keeping your account and data secure](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
