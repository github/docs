---
title: Sobre alertas para dependências vulneráveis
intro: 'O {% data variables.product.product_name %} envia {% data variables.product.prodname_dependabot_alerts %} quando detectamos vulnerabilidades que afetam o seu repositório.'
redirect_from:
  - /articles/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-security-alerts-for-vulnerable-dependencies
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
  - /code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies
versions:
  free-pro-team: '*'
  enterprise-server: '>=3.0'
type: overview
topics:
  - Dependabot
  - Alerts
  - Vulnerabilities
  - Repositories
  - Dependencies
---

<!--For this article in earlier GHES versions, see /content/github/managing-security-vulnerabilities-->
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

### Sobre as dependências vulneráveis

{% data reusables.repositories.a-vulnerability-is %}

Quando o seu código depende de um pacote que tenha uma vulnerabilidade de segurança, essa dependência vulnerável pode causar uma série de problemas para o seu projeto ou para as pessoas que o usam.

### Detecção de dependências vulneráveis

{% data variables.product.prodname_dependabot %} detecta dependências vulneráveis e envia {% data variables.product.prodname_dependabot_alerts %} quando:

{% if currentVersion == "free-pro-team@latest" %}
- Uma nova vulnerabilidade foi adicionada ao {% data variables.product.prodname_advisory_database %}. Para obter mais informações, consulte "[Pesquisar vulnerabilidades de segurança em {% data variables.product.prodname_advisory_database %}](/github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database)" e "[Sobre {% data variables.product.prodname_security_advisories %}](/code-security/security-advisories/about-github-security-advisories)."{% else %}
- São sincronizados novos dados de consultoria com {% data variables.product.prodname_ghe_server %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
- O gráfico de dependências para alterações de repositório. Por exemplo, quando um colaborador faz push de um commit para alterar os pacotes ou versões de que depende{% if currentVersion == "free-pro-team@latest" %} ou quando o código de uma das dependências muda{% endif %}. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para obter uma lista dos ecossistemas para os quais o {% data variables.product.product_name %} pode detectar vulnerabilidades e dependências, consulte "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Observação:** É importante manter seus manifestos atualizados e seu arquivos bloqueados. Se o gráfico de dependências não refletir corretamente suas dependências e versões atuais, você poderá perder alertas para dependências vulneráveis que você usar. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

### Alertas do {% data variables.product.prodname_dependabot %} para dependências vulneráveis

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion == "free-pro-team@latest" %}{% data variables.product.prodname_dotcom %} detecta dependências vulneráveis em repositórios _públicos_ e gera {% data variables.product.prodname_dependabot_alerts %} por padrão. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para mais informações consulte "[Gerenciar as configurações de segurança e análise da sua conta de usuário](/github/setting-up-and-managing-your-github-user-account/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)".

Para informações sobre os requisitos de permissão para ações relacionadas a {% data variables.product.prodname_dependabot_alerts %}, consulte "[Níveis de permissão do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-permission-levels-for-an-organization#permission-requirements-for-security-features)".

{% data variables.product.product_name %} começa a gerar o gráfico de dependências imediatamente e gera alertas para quaisquer dependências vulneráveis assim que forem identificadas. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Para obter mais informações, consulte "[Gerenciando configurações do uso de dados de seu repositório privado](/github/understanding-how-github-uses-and-protects-your-data/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Quando {% data variables.product.product_name %} identifica uma dependência vulnerável, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. O alerta inclui um link para o arquivo afetado no projeto, e informações sobre uma versão corrigida. {% data variables.product.product_name %} também notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com suas preferências de notificação. Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)".

{% if currentVersion == "free-pro-team@latest" %}
Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, o alerta também pode conter um link para um pull request para atualizar o manifesto ou arquivo de bloqueio para a versão mínima que resolve a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% warning %}

**Observação**: Os recursos de segurança de {% data variables.product.product_name %} não reivindicam garantem que todas as vulnerabilidades sejam detectadas. Embora estejamos sempre tentando atualizar nosso banco de dados de vulnerabilidades e gerar alertas com nossas informações mais atualizadas. não seremos capazes de pegar tudo ou falar sobre vulnerabilidades conhecidas dentro de um período de tempo garantido. Esses recursos não substituem a revisão humana de cada dependência em busca de possíveis vulnerabilidades ou algum outro problema, e nossa sugestão é consultar um serviço de segurança ou realizar uma revisão completa de vulnerabilidade quando necessário.

{% endwarning %}

### Acesso a alertas de {% data variables.product.prodname_dependabot %}

É possível ver todos os alertas que afetam um determinado projeto{% if currentVersion == "free-pro-team@latest" %} na aba Segurança do repositório ou{% endif %} no gráfico de dependências do repositório. Para obter mais informações, consulte "[Visualizar e atualizar dependências vulneráveis no seu repositório](/github/managing-security-vulnerabilities/viewing-and-updating-vulnerable-dependencies-in-your-repository). "

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. {% if currentVersion == "free-pro-team@latest" %}{% data variables.product.product_name %} nunca divulga publicamente vulnerabilidades identificadas para qualquer repositório. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para pessoas ou repositórios de trabalho de equipes adicionais que você possui ou para os quais tem permissões de administrador. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %} Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/code-security/supply-chain-security/configuring-notifications-for-vulnerable-dependencies)".

Você também pode ver todos os {% data variables.product.prodname_dependabot_alerts %} que correspondem a uma vulnerabilidade particular em {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% if currentVersion == "free-pro-team@latest" %}
### Leia mais

- "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Exibir e atualizar dependências vulneráveis no repositório](/articles/viewing-and-updating-vulnerable-dependencies-in-your-repository)"
- "[Entender como o {% data variables.product.product_name %} usa e protege seus dados](/categories/understanding-how-github-uses-and-protects-your-data)"{% endif %}
