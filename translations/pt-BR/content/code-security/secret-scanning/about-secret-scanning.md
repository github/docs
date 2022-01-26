---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
  - /code-security/secret-security/about-secret-scanning
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

## Sobre o {% data variables.product.prodname_secret_scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

{% data variables.product.prodname_secret_scanning_caps %} irá fazer a varredura de todo o seu histórico do Git em todos os branches presentes no seu repositório {% data variables.product.prodname_dotcom %} para obter quaisquer segredos. Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. For details of the supported secrets and service providers, see "[{% data variables.product.prodname_secret_scanning_caps %} partners](/code-security/secret-scanning/secret-scanning-partners)."

{% data reusables.secret-scanning.partner-program-link %}

{% ifversion fpt or ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios públicos

{% data variables.product.prodname_secret_scanning_caps %} é automaticamente habilitado nos repositórios públicos. Quando você faz push para um repositório público, o {% data variables.product.product_name %} verifica segredos no conteúdo dos commits.

When {% data variables.product.prodname_secret_scanning %} detects a potential secret, we notify the service provider who issued the secret. The service provider validates the string and then decides whether they should revoke the secret, issue a new secret, or contact you directly. Their action will depend on the associated risks to you or them.

You cannot change the configuration of {% data variables.product.prodname_secret_scanning %} on public repositories.

{% ifversion fpt %}
Organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} can configure {% data variables.product.prodname_secret_scanning %} to run on private repositories. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning).
{% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios privados
{% elsif ghes or ghae %}
## Sobre {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} está disponível em todos os repositórios de propriedade da organização como parte de {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários.
{% endif %}

Se você é um administrador de repositório ou um proprietário de uma organização, você pode habilitar {% data variables.product.prodname_secret_scanning %} para {% ifversion ghec %} repositórios privados{% endif %} pertencentes a organizações. You can enable {% data variables.product.prodname_secret_scanning %} for all your organization's repositories, or for all new repositories within your organization.{% ifversion ghec %} {% data variables.product.prodname_secret_scanning_caps %} is not available for private repositories owned by user accounts.{% endif %} For more information, see "[Managing security and analysis settings for your repository](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" and "[Managing security and analysis settings for your organization](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)."

{% ifversion ghes > 3.1 or ghae or ghec %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns for a repository, organization, or enterprise. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."
{% elsif ghes < 3.2 %}
Versions 3.1 and lower of {% data variables.product.product_name %} do not allow you to define your own patterns for detecting secrets.
{% endif %}

### About {% data variables.product.prodname_secret_scanning %} alerts

When you push commits to a{% ifversion ghec %} private{% endif %} repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of the commits for secrets.

When {% data variables.product.prodname_secret_scanning %} detects a secret in a{% ifversion ghec %} private{% endif %} repository, {% data variables.product.prodname_dotcom %} generates an alert.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.
{% ifversion ghes > 3.0 or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} envia um alerta de e-mail para o contribuidor que fez o commit do segredo no repositório com um link para o alerta de {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} exibe um alerta no repositório.{% ifversion ghes = 3.0 %} Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

{% ifversion ghes > 3.0 or ghae or ghec %}
Para obter mais informações sobre a visualização e resolução de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes > 3.1 %}
You can use the security overview to see an organization-level view of which repositories have enabled {% data variables.product.prodname_secret_scanning %} and the alerts found. For more information, see "[Viewing the security overview](/code-security/security-overview/viewing-the-security-overview)."
{% endif %}

{%- ifversion ghec or ghes > 3.1 %}You can also use the REST API to {% elsif ghes = 3.1 %}You can use the REST API to {% endif %}
{%- ifversion ghec or ghes > 3.0 %}monitor results from {% data variables.product.prodname_secret_scanning %} across your {% ifversion ghec %}private {% endif %}repositories{% ifversion ghes > 3.1 %} or your organization{% endif %}. Para obter mais informações sobre pontos de extremidade da API, consulte "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Managing encrypted secrets for your codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
- "[Managing encrypted secrets for Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Encrypted secrets](/actions/security-guides/encrypted-secrets)"
