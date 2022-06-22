---
title: Sobre alertas do Dependabot
intro: '{% data variables.product.product_name %} sends {% data variables.product.prodname_dependabot_alerts %} when we detect that your repository uses a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
shortTitle: Alertas do Dependabot
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Sobre {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %}
{% data reusables.advisory-database.beta-malware-advisories %}
{% endif %}

{% data variables.product.prodname_dependabot_alerts %} tell you that your code depends on a package that is insecure.

If your code depends on a package with a security vulnerability, this can cause a range of problems for your project or the people who use it. You should upgrade to a secure version of the package as soon as possible.{% ifversion GH-advisory-db-supports-malware %} If your code uses malware, you need to replace the package with a secure alternative.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detection of insecure dependencies

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} performs a scan to detect insecure dependencies, and sends {% data variables.product.prodname_dependabot_alerts %} when:

{% ifversion fpt or ghec %}
- A new advisory is added to the {% data variables.product.prodname_advisory_database %}. For more information, see "[Browsing security advisories in the {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)."{% else %}
- São sincronizados novos dados de consultoria com {% data variables.product.product_location %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Observação:** Apenas consultorias que foram revisados por {% data variables.product.company_short %} irão acionar {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- O gráfico de dependências para alterações de repositório. Por exemplo, quando um colaborador faz push de um commit para alterar os pacotes ou versões de que depende{% ifversion fpt or ghec %} ou quando o código de uma das alterações das dependências{% endif %}. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

For a list of the ecosystems that {% data variables.product.product_name %} detects insecure dependencies in, see "[Supported package ecosystems](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)."

{% note %}

**Observação:** É importante manter seus manifestos atualizados e seu arquivos bloqueados. If the dependency graph doesn't accurately reflect your current dependencies and versions, then you could miss alerts for insecure dependencies that you use. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

## Configuration of {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detects vulnerable dependencies and malware in _public_ repositories and displays the dependency graph, but does not generate {% data variables.product.prodname_dependabot_alerts %} by default. Proprietários de repositórios ou pessoas com acesso de administrador podem habilitar {% data variables.product.prodname_dependabot_alerts %} para repositórios públicos. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."

Para obter informações sobre os requisitos de acesso para ações relacionadas a {% data variables.product.prodname_dependabot_alerts %}, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} starts generating the dependency graph immediately and generates alerts for any insecure dependencies as soon as they are identified. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Para obter mais informações, consulte "[Gerenciando configurações do uso de dados de seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

When {% data variables.product.product_name %} identifies a vulnerable dependency{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}, we generate a {% data variables.product.prodname_dependabot %} alert and display it {% ifversion fpt or ghec or ghes %} on the Security tab for the repository and{% endif %} in the repository's dependency graph. O alerta inclui {% ifversion fpt or ghec or ghes %} um link para o arquivo afetado no projeto, e {% endif %}informações sobre uma versão fixa. {% data variables.product.product_name %} também pode notificar os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação. For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

{% ifversion fpt or ghec or ghes > 3.2 %}
Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, o alerta também pode conter um link para um pull request para atualizar o manifesto ou arquivo de bloqueio para a versão mínima que resolve a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% warning %}

**Note**: {% data variables.product.product_name %}'s security features do not claim to catch all vulnerabilities{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. We actively maintain {% data variables.product.prodname_advisory_database %} and generate alerts with the most up-to-date information. However, we cannot catch everything or tell you about known vulnerabilities within a guaranteed time frame. These features are not substitutes for human review of each dependency for potential vulnerabilities or any other issues, and we recommend consulting with a security service or conducting a thorough dependency review when necessary.

{% endwarning %}

## Acesso a {% data variables.product.prodname_dependabot_alerts %}

É possível ver todos os alertas que afetam um determinado projeto{% ifversion fpt or ghec %} na aba Segurança do repositório ou{% endif %} no gráfico de dependências do repositório. For more information, see "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} never publicly discloses insecure dependencies for any repository. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para pessoas ou repositórios de trabalho de equipes adicionais que você possui ou para os quais tem permissões de administrador. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} For more information, see "[Configuring notifications for {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

You can also see all the {% data variables.product.prodname_dependabot_alerts %} that correspond to a particular advisory in the {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Leia mais

- "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Viewing and updatng {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacidade em {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
