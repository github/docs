---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning-partner %}'
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

{% data variables.product.prodname_secret_scanning_caps %} will scan your entire Git history on all branches present in your {% data variables.product.prodname_dotcom %} repository for secrets{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %}, even if the repository is archived{% endif %}.

{% ifversion fpt or ghec %}
{% data variables.product.prodname_secret_scanning_caps %} is available on {% data variables.product.prodname_dotcom_the_website %} in two forms:

1. **{% data variables.product.prodname_secret_scanning_partner_caps %}.** Runs automatically on all public repositories. Any strings that match patterns that were provided by secret scanning partners are reported directly to the relvant partner.

2. **{% data variables.product.prodname_secret_scanning_GHAS_caps %}.** You can enable and configure additional scanning for repositories owned by organizations that use {% data variables.product.prodname_ghe_cloud %} and have a license for {% data variables.product.prodname_GH_advanced_security %}. Any strings that match patterns provided by secret scannng partners, by other service providers, or defined by your organization are reported as alerts in the "Security" tab of repositories. If a string in a public repository matches a partner pattern, it is also reported to the partner.
{% endif %}

Os provedores de serviço podem fazer parceria com o {% data variables.product.company_short %} para fornecer os respectivos formatos de segredo para verificação. {% data reusables.secret-scanning.partner-program-link %}

{% ifversion fpt or ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning_partner %}

When you make a repository public, or push changes to a public repository, {% data variables.product.product_name %} always scans the code for secrets that match partner patterns. If {% data variables.product.prodname_secret_scanning %} detects a potential secret, we notify the service provider who issued the secret. O prestador do serviço irá validar a string e, em seguida, decidirá se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente. A sua ação dependerá dos riscos que associados a você ou a eles. For more information, see "[Supported secrets for partner patterns](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-partner-patterns)."

Você não pode alterar a configuração de {% data variables.product.prodname_secret_scanning %} em repositórios públicos.

{% ifversion fpt %}
{% note %}

**Note:** Organizations using {% data variables.product.prodname_ghe_cloud %} with {% data variables.product.prodname_GH_advanced_security %} can also enable {% data variables.product.prodname_secret_scanning_GHAS %} on any repository they own, including private repositories. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/secret-security/about-secret-scanning#about-secret-scanning-for-advanced-security).

{% endnote %}
{% endif %}

{% endif %}

{% ifversion not fpt %}

{% ifversion ghec %}
## Sobre o {% data variables.product.prodname_secret_scanning_GHAS %}
{% elsif ghes or ghae %}
## Sobre {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_name %}
{% endif %}

{% data variables.product.prodname_secret_scanning_GHAS_caps %} está disponível em todos os repositórios de propriedade da organização como parte de {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários. When you enable {% data variables.product.prodname_secret_scanning %} for a repository, {% data variables.product.prodname_dotcom %} scans the code for patterns that match secrets used by many service providers. For more information, see "{% ifversion ghec %}[Supported secrets for advanced security](/code-security/secret-scanning/secret-scanning-patterns#supported-secrets-for-advanced-security){% else %}[{% data variables.product.prodname_secret_scanning_caps %} patterns](/code-security/secret-scanning/secret-scanning-patterns){% endif %}."

If you're a repository administrator you can enable {% data variables.product.prodname_secret_scanning_GHAS %} for any repository{% ifversion ghec or ghes > 3.4 or ghae-issue-6329 %}, including archived repositories{% endif %}. Organization owners can also enable {% data variables.product.prodname_secret_scanning_GHAS %} for all repositories or for all new repositories within an organization. Para mais informações consulte "[Gerenciar as configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% ifversion ghes > 3.1 or ghae or ghec %}Também é possível definir padrões personalizados de {% data variables.product.prodname_secret_scanning %} para um repositório, organização ou empresa. Para obter mais informações, consulte "[Definir padrões personalizados para {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)".
{% elsif ghes < 3.2 %}
As versões 3.1 ou inferior a {% data variables.product.product_name %} não permitem que você defina seus próprios padrões para detecção de segredos.
{% endif %}

### Sobre alertas de {% data variables.product.prodname_secret_scanning %}

When you push commits to a repository with {% data variables.product.prodname_secret_scanning %} enabled, {% data variables.product.prodname_dotcom %} scans the contents of those commits for secrets that match patterns defined by service providers{% ifversion ghes > 3.1 or ghae or ghec %} and any custom patterns defined in your enterprise, organization, or repository{% endif %}.

If {% data variables.product.prodname_secret_scanning %} detects a secret, {% data variables.product.prodname_dotcom %} generates an alert.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.
{% ifversion ghes or ghae or ghec %}
- {% data variables.product.prodname_dotcom %} envia um alerta de e-mail para o contribuidor que fez o commit do segredo no repositório com um link para o alerta de {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} displays an alert in the "Security" tab of the repository.{% ifversion ghes = 3.0 %} For more information, see "[Managing alerts from {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

{% ifversion ghes or ghae or ghec %}
Para obter mais informações sobre a visualização e resolução de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% ifversion ghec or ghes > 3.1 %}
É possível usar a visão geral de segurança para ver uma visualização no nível de organização de quais repositórios habilitaram {% data variables.product.prodname_secret_scanning %} e os alertas encontrados. Para obter mais informações, consulte "[Visualizando a visão geral de segurança](/code-security/security-overview/viewing-the-security-overview)".
{% endif %}

{%- ifversion ghec or ghes > 3.1 %}Você também pode usar a API REST para {% elsif ghes = 3.1 %}Você pode usar a API REST para {% endif %}
monitor results from {% data variables.product.prodname_secret_scanning %} across your {% ifversion ghec %}private {% endif %}repositories{% ifversion ghes > 3.1 %} or your organization{% endif %}. Para obter mais informações sobre pontos de extremidade da API, consulte "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".

{% endif %}

## Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
{%- ifversion fpt or ghec %}
- "[Gerenciar segredos criptografados nos seus codespaces](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)"{% endif %}
{%- ifversion fpt or ghec or ghes > 3.2 %}
- "[Gerenciando segredos criptografados para o Dependabot](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/managing-encrypted-secrets-for-dependabot)"{% endif %}
- "[Segredos criptografados](/actions/security-guides/encrypted-secrets)"
