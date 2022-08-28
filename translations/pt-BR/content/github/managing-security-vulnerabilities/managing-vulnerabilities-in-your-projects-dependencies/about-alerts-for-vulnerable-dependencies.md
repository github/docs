---
title: Sobre alertas para dependências vulneráveis
intro: '{% data variables.product.product_name %} envia {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot_alerts %}{% else %}alertas de segurança{% endif %} quando detectarmos vulnerabilidades que afetam o repositório.'
versions:
  enterprise-server: <=2.22
topics:
  - Security
redirect_from:
  - /github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies
---

<!--See /content/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies for the current version of this article -->

### Sobre as dependências vulneráveis

{% data reusables.repositories.a-vulnerability-is %}

Quando o seu código depende de um pacote que tenha uma vulnerabilidade de segurança, essa dependência vulnerável pode causar uma série de problemas para o seu projeto ou para as pessoas que o usam.

### Detecção de dependências vulneráveis

 {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %} detecta dependências vulneráveis e envia {% data variables.product.prodname_dependabot_alerts %}{% else %}{% data variables.product.product_name %} detecta dependências vulneráveis e envia alertas de segurança{% endif %} quando:

- São sincronizados novos dados de consultoria com {% data variables.product.prodname_ghe_server %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}
- O gráfico de dependências para alterações de repositório. Por exemplo, quando um contribuidor faz push de um commit para alterar os pacotes ou versões de que ele depende. Para obter mais informações, consulte "[Sobre o gráfico de dependência](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para obter uma lista dos ecossistemas para os quais o {% data variables.product.product_name %} pode detectar vulnerabilidades e dependências, consulte "[Ecossistemas de pacotes compatíveis](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Observação:** É importante manter seus manifestos atualizados e seu arquivos bloqueados. Se o gráfico de dependências não refletir corretamente suas dependências e versões atuais, você poderá perder alertas para dependências vulneráveis que você usar. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

{% if currentVersion ver_gt "enterprise-server@2.21" % %}
### Alertas do {% data variables.product.prodname_dependabot %} para dependências vulneráveis
{% else %}
### Alertas de segurança para dependências vulneráveis
{% endif %}

{% data reusables.repositories.enable-security-alerts %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Quando {% data variables.product.product_name %} identifica uma dependência vulnerável, geramos um alerta de {% data variables.product.prodname_dependabot %} e o exibimos na aba Segurança do repositório. O alerta inclui um link para o arquivo afetado no projeto, e informações sobre uma versão corrigida. {% data variables.product.product_name %} também notifica os mantenedores dos repositórios afetados sobre o novo alerta de acordo com suas preferências de notificação. Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)".
{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Quando {% data variables.product.product_name %} identifica uma dependência vulnerável, enviamos um alerta de segurança de para os mantenedores dos repositórios afetados, com informações sobre a vulnerabilidade, um link para o arquivo afetado no projeto, bem como informações sobre uma versão corrigida.
{% endif %}

{% warning %}

**Observação**: Os recursos de segurança de {% data variables.product.product_name %} não reivindicam garantem que todas as vulnerabilidades sejam detectadas. Embora estejamos sempre tentando atualizar nosso banco de dados de vulnerabilidades e gerar alertas com nossas informações mais atualizadas. não seremos capazes de pegar tudo ou falar sobre vulnerabilidades conhecidas dentro de um período de tempo garantido. Esses recursos não substituem a revisão humana de cada dependência em busca de possíveis vulnerabilidades ou algum outro problema, e nossa sugestão é consultar um serviço de segurança ou realizar uma revisão completa de vulnerabilidade quando necessário.

{% endwarning %}

### Acesso a {% if currentVersion ver_gt "enterprise-server@2.21" %}{% data variables.product.prodname_dependabot %}{% else %}alertas de segurança{% endif %}

É possível ver todos os alertas que afetam um determinado projeto no gráfico de dependências do repositório.

{% if currentVersion ver_gt "enterprise-server@2.21" %}
Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}.{% endif %}

{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.22" %}
Enviamos alertas de segurança para as pessoas com permissões de administrador nos repositórios afetados por padrão. O {% data variables.product.product_name %} nunca divulga publicamente vulnerabilidades identificadas para qualquer repositório.
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization %}{% if enterpriseServerVersions contains currentVersion and currentVersion ver_lt "enterprise-server@2.21" %} Para obter mais informações, consulte "[Escolher o método de entrega para as suas notificações](/github/receiving-notifications-about-activity-on-github/choosing-the-delivery-method-for-your-notifications).{% endif %}{% if currentVersion ver_gt "enterprise-server@2.20" %} Para obter mais informações, consulte "[Configurar notificações para dependências vulneráveis](/github/managing-security-vulnerabilities/configuring-notifications-for-vulnerable-dependencies)."{% endif %}
