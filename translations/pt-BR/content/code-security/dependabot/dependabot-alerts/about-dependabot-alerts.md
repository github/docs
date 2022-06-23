---
title: Sobre alertas do Dependabot
intro: '{% data variables.product.product_name %} envia {% data variables.product.prodname_dependabot_alerts %} quando detectamos que seu repositório usa uma dependência vulnerável{% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %}.'
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

{% data variables.product.prodname_dependabot_alerts %} diz que o seu código depende de um pacote inseguro.

Se o seu código depende de um pacote com uma vulnerabilidade de segurança, isto pode causar uma série de problemas para o seu projeto ou para as pessoas que o utilizam. Você deve atualizar para uma versão segura do pacote o mais rápido possível.{% ifversion GH-advisory-db-supports-malware %} Se o seu código usa malware, você precisa substituir o pacote por uma alternativa segura.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detecção de dependências inseguras

{% data reusables.dependabot.dependabot-alerts-beta %}

{% data variables.product.prodname_dependabot %} realiza uma digitalização para detectar dependências inseguras e envia {% data variables.product.prodname_dependabot_alerts %} quando:

{% ifversion fpt or ghec %}
- Um novo aviso é adicionado ao {% data variables.product.prodname_advisory_database %}. Para obter mais informações, consulte "[Pesquisar consultorias de segurança em {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)".{% else %}
- São sincronizados novos dados de consultoria com {% data variables.product.product_location %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
  {% note %}

  **Observação:** Apenas consultorias que foram revisados por {% data variables.product.company_short %} irão acionar {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- O gráfico de dependências para alterações de repositório. Por exemplo, quando um colaborador faz push de um commit para alterar os pacotes ou versões de que depende{% ifversion fpt or ghec %} ou quando o código de uma das alterações das dependências{% endif %}. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para obter uma lista dos ecossistemas nos quais {% data variables.product.product_name %} detecta dependências inseguras, consulte "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems).".

{% note %}

**Observação:** É importante manter seus manifestos atualizados e seu arquivos bloqueados. Se o gráfico de dependências não refletir corretamente suas dependências e versões atuais, você poderá perder alertas para dependências inseguras que você usar. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

## Configuração de {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom %} detecta dependências e malware vulneráveis em repositórios _públicos_ e exibe o gráfico de dependências, mas não gera {% data variables.product.prodname_dependabot_alerts %} por padrão. Proprietários de repositórios ou pessoas com acesso de administrador podem habilitar {% data variables.product.prodname_dependabot_alerts %} para repositórios públicos. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, consulte "[Configurando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."

Para obter informações sobre os requisitos de acesso para ações relacionadas a {% data variables.product.prodname_dependabot_alerts %}, consulte "[Funções do repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

{% data variables.product.product_name %} começa a gerar o gráfico de dependências imediatamente e gera alertas para quaisquer dependências inseguras assim que forem identificadas. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Para obter mais informações, consulte "[Gerenciando configurações do uso de dados de seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Quando {% data variables.product.product_name %} identifica uma dependência vulnerável{% ifversion GH-advisory-db-supports-malware %} ou{% endif %}de malware, geramos um alerta de {% data variables.product.prodname_dependabot %} e exibimos {% ifversion fpt or ghec or ghes %} na guia Segurança para o repositório e{% endif %} no gráfico de dependência do repositório. O alerta inclui {% ifversion fpt or ghec or ghes %} um link para o arquivo afetado no projeto, e {% endif %}informações sobre uma versão fixa. {% data variables.product.product_name %} também pode notificar os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação. Para obter mais informações, consulte "[Configurando notificações para {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

{% ifversion fpt or ghec or ghes > 3.2 %}
Para repositórios em que {% data variables.product.prodname_dependabot_security_updates %} estão habilitados, o alerta também pode conter um link para um pull request para atualizar o manifesto ou arquivo de bloqueio para a versão mínima que resolve a vulnerabilidade. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)."
{% endif %}

{% warning %}

**Observação**: As funcionalidades de segurança da {% data variables.product.product_name %} não afirmam capturar todas as vulnerabilidades{% ifversion GH-advisory-db-supports-malware %} e{% endif %}de malware. Mantemos ativamente {% data variables.product.prodname_advisory_database %} e geramos alertas com as informações mais atualizadas. No entanto, não podemos capturar tudo ou falar sobre vulnerabilidades conhecidas em um período de tempo garantido. Esses recursos não substituem a revisão humana de cada dependência em busca de possíveis vulnerabilidades ou algum outro problema, e nossa sugestão é consultar um serviço de segurança ou realizar uma revisão completa da dependência, quando necessário.

{% endwarning %}

## Acesso a {% data variables.product.prodname_dependabot_alerts %}

É possível ver todos os alertas que afetam um determinado projeto{% ifversion fpt or ghec %} na aba Segurança do repositório ou{% endif %} no gráfico de dependências do repositório. Para obter mais informações, consulte "[Visualizando e atualizando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)."

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}{% data variables.product.product_name %} nunca divulga publicamente dependências inseguras para qualquer repositório. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para pessoas ou repositórios de trabalho de equipes adicionais que você possui ou para os quais tem permissões de administrador. Para obter mais informações, consulte "[Gerenciar configurações de segurança e análise do repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %}
{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Para obter mais informações, consulte "[Configurando notificações para {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)."

Você também pode ver todos os {% data variables.product.prodname_dependabot_alerts %} que correspondem a uma consultoria particular em {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Leia mais

- "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Visualizando e atualizando {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %}
{% ifversion fpt or ghec %}- "[Privacidade em {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
