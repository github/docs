---
title: Sobre alertas para dependências vulneráveis
intro: '{% data variables.product.product_name %} envia {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} quando detectarmos vulnerabilidades que afetam o repositório.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---
 
### Sobre as dependências vulneráveis

{% data reusables.repositories.a-vulnerability-is %}

Quando o seu código depende de um pacote que tenha uma vulnerabilidade de segurança, essa dependência vulnerável pode causar uma série de problemas para o seu projeto ou para as pessoas que o usam.

### Detecção de dependências vulneráveis

 {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 1" %}{% data variables.product.prodname_dependabot %} detecta dependências vulneráveis e envia {% data variables.product.prodname_dependabot_short %} alertas{% else %}{% data variables.product.product_name %} detecta dependências vulneráveis e envia alertas de segurança{% endif %} quando:

{% if currentVersion == "free-pro-team@latest" %}
- Uma nova vulnerabilidade foi adicionada ao {% data variables.product.prodname_advisory_database %}. Para obter mais informações, consulte "[Pesquisar vulnerabilidades de segurança no {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)".
- São processados dados de nova vulnerabilidade retirados de [WhiteSource](https://www.whitesourcesoftware.com/vulnerability-database).{% else %}
- São sincronizados novos dados de consultoria com {% data variables.product.prodname_ghe_server %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações sobre dados de consultoria, consulte "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Procurar vulnerabilidades de segurança no {% data variables.product.prodname_advisory_database %}</a>{% endif %}
- O gráfico de dependências para alterações de repositório. Por exemplo, quando um colaborador faz push de um commit para alterar os pacotes ou versões de que depende{% if currentVersion == "free-pro-team@latest" %} ou quando o código de uma das dependências muda{% endif %}. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

Para obter uma lista dos ecossistemas para os quais o {% data variables.product.product_name %} pode detectar vulnerabilidades e dependências, consulte "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Observação:** É importante manter seus manifestos atualizados e seu arquivos bloqueados. Se o gráfico de dependências não refletir corretamente suas dependências e versões atuais, você poderá perder alertas para dependências vulneráveis que você usar. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" % %}
### Alertas do {% data variables.product.prodname_dependabot %} para dependências vulneráveis
{% else %}
### Alertas de segurança para dependências vulneráveis
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies in _public_ repositories and generates {% data variables.product.prodname_dependabot_alerts %} by default. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para mais informações consulte "[Gerenciar as configurações de segurança e análise da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization)".

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any vulnerable dependencies as soon as they are identified. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Para obter mais informações, consulte "[Gerenciando configurações do uso de dados de seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
Quando
{% data variables.product.product_name %} identifies a vulnerable dependency, we generate a {% data variables.product.prodname_dependabot_short %} alert and display it on the Security tab for the repository. The alert includes a link to the affected file in the project, and information about a fixed version. {% data variables.product.product_name %} also notifies the maintainers of affected repositories about the new alert according to their notification preferences. Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
For repositories where
{% data variables.product.prodname_dependabot_security_updates %} are enabled, the alert may also contain a link to a pull request to update the manifest or lock file to the minimum version that resolves the vulnerability. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-github-dependabot-security-updates)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Quando
{% data variables.product.product_name %} identifica uma dependência vulnerável, enviamos um alerta de segurança aos mantenedores dos repositórios afetados, com informações sobre a vulnerabilidade, um link para o arquivo afetado no projeto e informações sobre uma versão corrigida.
{% endif %}

{% warning %}

**Observação**: Os recursos de segurança de {% data variables.product.product_name %} não reivindicam garantem que todas as vulnerabilidades sejam detectadas. Though we are always trying to update our vulnerability database and generate alerts with our most up-to-date information, we will not be able to catch everything or tell you about known vulnerabilities within a guaranteed time frame. Esses recursos não substituem a revisão humana de cada dependência em busca de possíveis vulnerabilidades ou algum outro problema, e nossa sugestão é consultar um serviço de segurança ou realizar uma revisão completa de vulnerabilidade quando necessário.

{% endwarning %}

### Acesso a {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_short %}{% else %}alertas de segurança{% endif %}

É possível ver todos os alertas que afetam um determinado projeto{% if currentVersion == "free-pro-team@latest" %} na aba Segurança do repositório ou{% endif %} no gráfico de dependências do repositório.{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository){% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
By default, we notify people with admin permissions in the affected repositories about new
{% data variables.product.prodname_dependabot_short %} alerts.{% endif %} {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} never publicly discloses identified vulnerabilities for any repository. You can also make {% data variables.product.prodname_dependabot_short %} alerts visible to additional people or teams working repositories that you own or have admin permissions for. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-github-dependabot-alerts)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Enviamos alertas de segurança para as pessoas com permissões de administrador nos repositórios afetados por padrão.
O {% data variables.product.product_name %} nunca divulga publicamente vulnerabilidades identificadas para qualquer repositório.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contém currentVersion e currentVersion ver_lt "enterprise-server@2. 1" %} Para mais informações, consulte "[Escolher o método de entrega para suas notificações](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications).{% endif %}{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2. 0" %} Para mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-github-dependabot-security-updates)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
