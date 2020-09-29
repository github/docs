---
title: Sobre alertas de segurança para dependências vulneráveis
intro: '{% data variables.product.product_name %} sends security alerts when we detect vulnerabilities affecting your repository.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

### Sobre vulnerabilidades de segurança

{% data reusables.repositories.a-vulnerability-is %} Depending on the severity level and the way your project uses the dependency, vulnerabilities can cause a range of problems for your project or the people who use it. Você pode rastrear e resolver vulnerabilidades para determinados tipos de dependência no seu repositório do {% data variables.product.product_name %}.

If {% data variables.product.prodname_dotcom %} detects a vulnerability from the {% data variables.product.prodname_advisory_database %} or [WhiteSource](https://www.whitesourcesoftware.com/GitHubSecurityAlerts) in one of the dependencies in your repository's dependency graph, we'll send you a security alert. For more information about the {% data variables.product.prodname_advisory_database %}, see "<a href="/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database" class="dotcom-only">Browsing security vulnerabilities in the {% data variables.product.prodname_advisory_database %}</a>."

{% if currentVersion == "free-pro-team@latest" %}
### Alerts and automated security updates for vulnerable dependencies
{% else %}
### Alertas de segurança para dependências vulneráveis
{% endif %}

When a new vulnerability is added to the GitHub Advisory Database, we identify{% if currentVersion == "free-pro-team@latest" %} public{% endif %} repositories{% if currentVersion == "free-pro-team@latest" %} (and private repositories that have opted in to vulnerability detection){% endif %} that use the affected version of the dependency{% if currentVersion == "free-pro-team@latest" %}, send a security alert to repository maintainers, and generate an automated security update{% else %} and send a security alert to repository maintainers{% endif %}.

Each security alert includes a severity level{% if currentVersion == "free-pro-team@latest" %}, a link to the affected file in your project, and a link to a pull request containing an automated security update that resolves the vulnerability{% else %} and a link to the affected file in your project{% endif %}. Quando disponível, o alerta incluirá mais detalhes sobre a vulnerabilidade.

Você pode ver todos os alertas que afetam um projeto específico{% if currentVersion == "free-pro-team@latest" %} na guia Alerts (Alertas) do repositório ou{% endif %} no gráfico de dependência do repositório.{% if currentVersion == "free-pro-team@latest" %} Para obter mais informações, consulte "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)".{% endif %}

Enviamos alertas de segurança para as pessoas com permissões de administrador nos repositórios afetados por padrão. O {% data variables.product.product_name %} nunca divulga publicamente vulnerabilidades identificadas em algum repositório.{% if currentVersion == "free-pro-team@latest" %} Você também pode habilitar alertas de segurança para mais pessoas ou equipes que trabalham nos repositórios que pertencem à organização. Para obter mais informações, consulte "[Gerenciar alertas para dependências vulneráveis nos repositórios da sua organização](/articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories)".{% endif %}

{% data reusables.repositories.enable-security-alerts %}
{% if currentVersion == "free-pro-team@latest" %}
Automated security updates update vulnerable dependencies to the minimum version that resolves the vulnerability. Automated security updates are automatically enabled in repositories that use the dependency graph and security alerts, but you can choose to disable automatic pull requests and generate security updates manually instead. For more information, see "[Configuring automated security updates](/github/managing-security-vulnerabilities/configuring-automated-security-updates)."

O {% data variables.product.prodname_dotcom %} detecta e alerta sobre dependências vulneráveis em repositórios _públicos_ por padrão. Para receber alertas de segurança para dependências vulneráveis em um repositório _privado_, um proprietário ou uma pessoa com acesso de administrador ao repositório deve habilitar o gráfico de dependência e os alertas de segurança no repositório. Para obter mais informações, consulte "[Aceitar ou recusar o uso de dados de seu repositório privado](/articles/opting-into-or-out-of-data-use-for-your-private-repository)".
{% endif %}

Para obter uma lista de linguagens aceitas em que o {% data variables.product.product_name %} pode detectar vulnerabilidades e dependências, consulte "[Listar os pacotes dos quais um repositório depende](/articles/listing-the-packages-that-a-repository-depends-on)".

{% warning %}

**Observação**: os recursos de segurança do {% data variables.product.product_name %}, como os alertas de segurança, não têm a pretensão de capturar todas as vulnerabilidades. Embora estejamos sempre tentando atualizar nosso banco de dados de vulnerabilidades e alertar você com nossas informações mais atualizadas, não podemos capturar tudo nem alertar sobre vulnerabilidades conhecidas dentro de um prazo garantido. Esses recursos não substituem a revisão humana de cada dependência em busca de possíveis vulnerabilidades ou algum outro problema, e nossa sugestão é consultar um serviço de segurança ou realizar uma revisão completa de vulnerabilidade quando necessário.

{% endwarning %}

### Configurar notificações para alertas de segurança

By default, you will receive security alerts by email{% if currentVersion == "free-pro-team@latest" %}, grouped by the specific vulnerability{% endif %}. You can also choose to receive security alerts in a weekly email summarizing alerts for up to 10 of your repositories, in your web notifications, or in the {% data variables.product.product_name %} user interface. For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#security-alert-options){% else %}"[Choosing the delivery method for your notifications ](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications){% endif %}."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" % %}{% data reusables.repositories.security-alerts-x-github-severity %} For more information, see {% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" %}"[Configuring notifications](/github/managing-subscriptions-and-notifications-on-github/configuring-notifications#filtering-email-notifications){% else %}"[About email notifications](/github/receiving-notifications-about-activity-on-github/about-email-notifications){% endif %}."{% endif %}

### Leia mais

{% if currentVersion == "free-pro-team@latest" %}- "[Configuring automated security updates](/github/managing-security-vulnerabilities/configuring-automated-security-updates)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
- [Definição de "vulnerabilidade"](https://cve.mitre.org/about/terminology.html#vulnerability) da MITRE
