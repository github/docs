---
title: Sobre alertas do Dependabot
intro: 'O {% data variables.product.product_name %} envia {% data variables.product.prodname_dependabot_alerts %} quando detectamos que o repositório usa uma dependência vulnerável{% ifversion GH-advisory-db-supports-malware %} ou um malware{% endif %}.'
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
shortTitle: Dependabot alerts
ms.openlocfilehash: 737e5547e3aefd6b5c49780df0c78cdc73292ee4
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106738'
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "About alerts for vulnerable dependencies ".-->

## Sobre {% data variables.product.prodname_dependabot_alerts %}

{% ifversion GH-advisory-db-supports-malware %} {% data reusables.advisory-database.beta-malware-advisories %} {% endif %}

Os {% data variables.product.prodname_dependabot_alerts %} informam que o código depende de um pacote que não é seguro.

Quando o código depende de um pacote que tem uma vulnerabilidade de segurança, isso pode causar uma série de problemas para o projeto ou para as pessoas que o usam. Você deve atualizar o pacote para uma versão segura o quanto antes.{% ifversion GH-advisory-db-supports-malware %} Se o código usar malware, você precisará substituir o pacote por uma alternativa segura.{% endif %}

{% data reusables.security-advisory.link-browsing-advisory-db %}

## Detecção de dependências não seguras

{% data reusables.dependabot.dependabot-alerts-beta %}

O {% data variables.product.prodname_dependabot %} faz uma verificação para detectar dependências não seguras e envia {% data variables.product.prodname_dependabot_alerts %} quando:

{% ifversion fpt or ghec %}
- Uma nova vulnerabilidade é adicionada ao {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Procurar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database)".{% else %}
- Os novos dados de aviso são sincronizados do {% data variables.product.prodname_dotcom_the_website %} com o {% data variables.location.product_location %} por hora. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %} {% note %}

  **Observação:** apenas as consultorias que foram revisadas pelo {% data variables.product.company_short %} vão disparar {% data variables.product.prodname_dependabot_alerts %}.

  {% endnote %}
- Quanto o grafo de dependência de um repositório é alterado. Por exemplo, quando um colaborador efetua push de um commit para alterar os pacotes ou as versões dependentes{% ifversion fpt or ghec %} ou quando o código de uma das dependências é alterado{% endif %}. Para obter mais informações, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/about-the-dependency-graph)".

{% data reusables.repositories.dependency-review %}

Para obter uma lista dos ecossistemas nos quais o {% data variables.product.product_name %} detecta dependências não seguras, confira "[Ecossistemas de pacotes com suporte](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

{% note %}

**Observação:** é importante manter seus arquivos de manifesto e de bloqueio atualizados. Se o grafo de dependência não refletir corretamente as dependências e versões atuais, você poderá perder alertas sobre dependências não seguras que forem usadas. Você também pode receber alertas de dependências que você já não usa.

{% endnote %}

##  Configuração de {% data variables.product.prodname_dependabot_alerts %}

{% data reusables.repositories.enable-security-alerts %}

{% ifversion fpt or ghec %}O {% data variables.product.prodname_dotcom %} detecta dependências vulneráveis e malware em repositórios _públicos_ e exibe o grafo de dependência, mas não gera {% data variables.product.prodname_dependabot_alerts %} por padrão. Proprietários de repositórios ou pessoas com acesso de administrador podem habilitar {% data variables.product.prodname_dependabot_alerts %} para repositórios públicos. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.

Você também pode habilitar ou desabilitar {% data variables.product.prodname_dependabot_alerts %} em todos os repositórios pertencentes à sua conta de usuário ou de organização. Para obter mais informações, confira "[Como configurar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-dependabot-alerts)."

Para obter informações sobre os requisitos de acesso para ações relacionadas aos {% data variables.product.prodname_dependabot_alerts %}, confira "[Funções de repositório para uma organização](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization#access-requirements-for-security-features)".

O {% data variables.product.product_name %} começa a gerar o grafo de dependência imediatamente e gera alertas sobre dependências não seguras assim que elas são identificadas. O gráfico geralmente é preenchido em minutos, mas isso pode levar mais tempo para repositórios com muitas dependências. Para obter mais informações, confira "[Como gerenciar configurações de uso de dados para seu repositório privado](/get-started/privacy-on-github/managing-data-use-settings-for-your-private-repository)".
{% endif %}

Quando o {% data variables.product.product_name %} identifica uma dependência vulnerável{% ifversion GH-advisory-db-supports-malware %} ou um malware{% endif %}, geramos um alerta do {% data variables.product.prodname_dependabot %} e o exibimos {% ifversion fpt or ghec or ghes %} na guia Segurança do repositório e{% endif %} no grafo de dependência do repositório. O alerta inclui {% ifversion fpt or ghec or ghes %}um link para o arquivo afetado no projeto e {% endif %}informações sobre uma versão corrigida. {% data variables.product.product_name %} também pode notificar os mantenedores dos repositórios afetados sobre o novo alerta de acordo com as suas preferências de notificação. Para obter mais informações, confira "[Como configurar notificações para o {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

{% ifversion fpt or ghec or ghes %} Para os repositórios em que as {% data variables.product.prodname_dependabot_security_updates %} estão habilitadas, o alerta também pode conter um link para uma solicitação de pull a fim de atualizar o arquivo de manifesto ou de bloqueio para a versão mínima que resolve a vulnerabilidade. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)".
{% endif %}

{% warning %}

**Observação**: os recursos de segurança do {% data variables.product.product_name %} não afirmam que capturam todas as vulnerabilidades{% ifversion GH-advisory-db-supports-malware %} e malwares{% endif %}. Mantemos ativamente um {% data variables.product.prodname_advisory_database %} e geramos alertas com as informações mais atualizadas. No entanto, não podemos capturar tudo nem informar sobre vulnerabilidades conhecidas em um período garantido. Esses recursos não substituem a análise humana de cada dependência em busca de possíveis vulnerabilidades ou outros problemas. Portanto, recomendamos que você busque serviços de segurança ou realize uma análise de dependências completa sempre que necessário.

{% endwarning %}

## Acesso a {% data variables.product.prodname_dependabot_alerts %}

É possível ver todos os alertas que afetam determinado projeto{% ifversion fpt or ghec %} na guia Segurança do repositório ou{% endif %} no grafo de dependência do repositório. Para saber mais, confira "[Como exibir e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)".

Por padrão, notificamos as pessoas com permissões de administrador nos repositórios afetados sobre os novos {% data variables.product.prodname_dependabot_alerts %}. {% ifversion fpt or ghec %}O {% data variables.product.product_name %} nunca divulga publicamente as dependências não seguras de nenhum repositório. Você também pode tornar o {% data variables.product.prodname_dependabot_alerts %} visível para outras pessoas ou equipes que trabalham com repositórios pertencentes a você ou para os quais tem permissões de administrador. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e de análise do seu repositório](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository#granting-access-to-security-alerts)".
{% endif %}

{% data reusables.notifications.vulnerable-dependency-notification-enable %} {% data reusables.notifications.vulnerable-dependency-notification-delivery-method-customization2 %} Para obter mais informações, confira "[Como configurar notificações para {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/configuring-notifications-for-dependabot-alerts)".

Você também pode ver todos os {% data variables.product.prodname_dependabot_alerts %} que correspondem a uma vulnerabilidade específica no {% data variables.product.prodname_advisory_database %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

{% ifversion fpt or ghec or ghes %}
## Leitura adicional

- "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)"
- "[Como exibir e atualizar {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"{% endif %} {% ifversion fpt or ghec %}─ "[Privacidade no {% data variables.product.prodname_dotcom %}](/get-started/privacy-on-github)"{% endif %}
