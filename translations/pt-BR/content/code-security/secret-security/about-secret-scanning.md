---
title: Sobre a varredura de segredo
intro: 'O {% data variables.product.product_name %} verifica repositórios em busca de tipos de segredos conhecidos a fim de impedir o uso fraudulento de segredos que sofreram commit acidentalmente.'
product: '{% data reusables.gated-features.secret-scanning %}'
redirect_from:
  - /github/administering-a-repository/about-token-scanning
  - /articles/about-token-scanning
  - /articles/about-token-scanning-for-private-repositories
  - /github/administering-a-repository/about-secret-scanning
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
  github-ae: '*'
type: overview
topics:
  - Secret scanning
  - Advanced Security
---

{% data reusables.secret-scanning.beta %}
{% data reusables.secret-scanning.enterprise-enable-secret-scanning %}

Se o seu projeto se comunicar com um serviço externo, você pode usar um token ou uma chave privada para autenticação. Tokens e chaves privadas são exemplos de segredos que um provedor de serviços pode publicar. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. Recomendamos que você armazene segredos em um local dedicado e seguro fora do repositório do seu projeto.

{% data variables.product.prodname_secret_scanning_caps %} irá fazer a varredura de todo o seu histórico do Git em todos os branches presentes no seu repositório {% data variables.product.prodname_dotcom %} para obter quaisquer segredos. Service providers can partner with {% data variables.product.company_short %} to provide their secret formats for scanning.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."
{% endif %}

{% data reusables.secret-scanning.about-secret-scanning %}

{% if currentVersion == "free-pro-team@latest" %}
### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios públicos

{% data variables.product.prodname_secret_scanning_caps %} é automaticamente habilitado nos repositórios públicos. Quando você faz push para um repositório público, o {% data variables.product.product_name %} verifica segredos no conteúdo dos commits. Se você alternar um repositório privado para público, o {% data variables.product.product_name %} verifica segredos em todo o repositório.

Quando o {% data variables.product.prodname_secret_scanning %} detecta um conjunto de credenciais, notificamos o provedor de serviço que emitiu o segredo. O provedor de serviço valida a credencial e decide se deve revogar o segredo, emitir um novo segredo ou entrar em contato com você diretamente, o que dependerá dos riscos associados a você ou ao provedor de serviço. For an overview of how we work with token-issuing partners, see "[Secret scanning partner program](/developers/overview/secret-scanning-partner-program)."

O {% data variables.product.product_name %} atualmente verifica repositórios públicos para encontrar segredos emitidos pelos seguintes provedores de serviços.

{% data reusables.secret-scanning.partner-secret-list-public-repo %}

### Sobre o {% data variables.product.prodname_secret_scanning %} para repositórios privados
{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Sobre {% data variables.product.prodname_secret_scanning %} em {% data variables.product.product_name %}

{% data variables.product.prodname_secret_scanning_caps %} está disponível em todos os repositórios de propriedade da organização como parte de {% data variables.product.prodname_GH_advanced_security %}. Não está disponível em repositórios pertencentes a usuários.
{% endif %}

Se você é um administrador de repositório ou um proprietário de uma organização, você pode habilitar {% data variables.product.prodname_secret_scanning %} para {% if currentVersion == "free-pro-team@latest" %} repositórios privados{% endif %} pertencentes a organizações. Você pode habilitar  {% data variables.product.prodname_secret_scanning %} para todos os seus repositórios ou para todos os novos repositórios da organização.{% if currentVersion == "free-pro-team@latest" %} {% data variables.product.prodname_secret_scanning_caps %} não está disponível para repositórios privados pertencentes a usuários.{% endif %} Para mais informações, consulte "[Gerenciar configurações de segurança e análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)" e "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.1" or currentVersion == "github-ae@next" %}You can also define custom {% data variables.product.prodname_secret_scanning %} patterns that only apply to your repository or organization. For more information, see "[Defining custom patterns for {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/defining-custom-patterns-for-secret-scanning)."{% endif %}

Quando você faz push dos commits para um repositório{% if currentVersion == "free-pro-team@latest" %} privado{% endif %} com {% data variables.product.prodname_secret_scanning %} habilitado, {% data variables.product.prodname_dotcom %} verifica o conteúdo dos segredos dos commits.

Quando {% data variables.product.prodname_secret_scanning %} detecta um segredo em um{% if currentVersion == "free-pro-team@latest" %} privado{% endif %} repositório, {% data variables.product.prodname_dotcom %} gera um alerta.

- O {% data variables.product.prodname_dotcom %} envia um alerta de email para os administradores do repositório e proprietários da organização.
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
- {% data variables.product.prodname_dotcom %} envia um alerta de e-mail para o contribuidor que fez o commit do segredo no repositório com um link para o alerta de {% data variables.product.prodname_secret_scanning %} relacionado. O autor do commit pode visualizar o alerta no repositório e resolver o alerta.
{% endif %}
- {% data variables.product.prodname_dotcom %} exibe um alerta no repositório.{% if currentVersion == "enterprise-server@3.0" %} Para obter mais informações, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)".{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" or currentVersion == 'github-ae@next' %}
Para obter mais informações sobre a visualização e resolução de alertas de {% data variables.product.prodname_secret_scanning %}, consulte "[Gerenciar alertas de {% data variables.product.prodname_secret_scanning %}](/github/administering-a-repository/managing-alerts-from-secret-scanning)."{% endif %}

Os administradores do repositório e proprietários da organização podem conceder acesso aos usuários aos alertas de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
Para monitorar os resultados de {% data variables.product.prodname_secret_scanning %} nos seus repositórios privados ou na sua organização, você pode usar a API de {% data variables.product.prodname_secret_scanning %}. Para obter mais informações sobre pontos de extremidade da API, consulte "[{% data variables.product.prodname_secret_scanning_caps %}](/rest/reference/secret-scanning)".{% endif %}

{% data variables.product.prodname_dotcom %}  atualmente faz a varredura de repositórios{% if currentVersion == "free-pro-team@latest" %} privados{% endif %} para segredos emitidos pelos seguintes provedores de serviços.

{% data reusables.secret-scanning.partner-secret-list-private-repo %}

{% if currentVersion ver_lt "enterprise-server@3.2" or currentVersion == "github-ae@latest" %}
{% note %}

**Nota: o ** {% data variables.product.prodname_secret_scanning_caps %} atualmente não permite que você defina seus próprios padrões para detecção de segredos.

{% endnote %}
{% endif %}

### Leia mais

- "[Protegendo o seu repositório](/code-security/getting-started/securing-your-repository)"
- "[Manter a conta e os dados seguros](/github/authenticating-to-github/keeping-your-account-and-data-secure)"
