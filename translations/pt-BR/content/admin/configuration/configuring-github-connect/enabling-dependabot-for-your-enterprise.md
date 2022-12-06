---
title: Habilitando o Dependabot para sua empresa
intro: 'Você pode permitir que os usuários para {% data variables.location.product_location %} encontrem e corrijam vulnerabilidades nas dependências do código habilitando {% data variables.product.prodname_dependabot_alerts %}{% ifversion ghes %} e {% data variables.product.prodname_dependabot_updates %}{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Dependabot
redirect_from:
  - /enterprise/admin/installation/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-security-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /enterprise/admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-github-enterprise-server-and-github-enterprise-cloud/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-alerts-for-vulnerable-dependencies-on-github-enterprise-server
  - /admin/configuration/managing-connections-between-your-enterprise-accounts/enabling-the-dependency-graph-and-dependabot-alerts-on-your-enterprise-account
  - /admin/configuration/configuring-github-connect/enabling-the-dependency-graph-and-dependabot-alerts-for-your-enterprise
permissions: 'Enterprise owners can enable {% data variables.product.prodname_dependabot %}.'
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Security
  - Dependency graph
  - Dependabot
ms.openlocfilehash: 009b6199e0212c531caaf48b220342853d656248
ms.sourcegitcommit: 6bd8fe6d49214743f82fa2dc71847c241f140c87
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/07/2022
ms.locfileid: '148135668'
---
## Sobre {% data variables.product.prodname_dependabot %} para {% data variables.product.product_name %}

O {% data variables.product.prodname_dependabot %} ajuda os usuários para {% data variables.location.product_location %} a encontrar e corrigir vulnerabilidades nas dependências.{% ifversion ghes %} Você pode habilitar {% data variables.product.prodname_dependabot_alerts %} para notificar os usuários sobre dependências vulneráveis e {% data variables.product.prodname_dependabot_updates %} para corrigir as vulnerabilidades e manter as dependências atualizadas com a última versão.

{% data variables.product.prodname_dependabot %} é apenas um dos muitos recursos disponíveis para fortalecer a segurança da cadeia de suprimentos de {% data variables.location.product_location %}. Para obter mais informações sobre os outros recursos, confira "[Sobre a segurança da cadeia de suprimentos da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/about-supply-chain-security-for-your-enterprise)".

### Sobre {% data variables.product.prodname_dependabot_alerts %}
{% endif %}

{% data reusables.dependabot.dependabot-alerts-beta %}

Com {% data variables.product.prodname_dependabot_alerts %}, o {% data variables.product.prodname_dotcom %} identifica dependências vulneráveis nos repositórios e cria alertas no {% data variables.location.product_location %}, usando dados do {% data variables.product.prodname_advisory_database %} e o serviço de grafo de dependência.

{% data reusables.repositories.tracks-vulnerabilities %}

Após habilitar o recurso {% data variables.product.prodname_dependabot_alerts %} para a sua empresa, os dados de vulnerabilidade serão sincronizados entre o {% data variables.product.prodname_advisory_database %} e a sua instância uma vez a cada hora. Apenas as consultorias revisadas por {% data variables.product.company_short %} estão sincronizados. {% data reusables.security-advisory.link-browsing-advisory-db %} 

Também é possível sincronizar os dados de vulnerabilidade manualmente a qualquer momento. Para obter mais informações, confira "[Como ver os dados de vulnerabilidade da sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/viewing-the-vulnerability-data-for-your-enterprise)".

{% note %}

**Observação:** quando você habilita {% data variables.product.prodname_dependabot_alerts %}, nenhum código ou informação sobre o código para {% data variables.location.product_location %} é carregado no {% data variables.product.prodname_dotcom_the_website %}. 

{% endnote %}

Quando {% data variables.location.product_location %} recebe informações sobre uma vulnerabilidade, ele identifica os repositórios em {% data variables.location.product_location %} que usam a versão afetada da dependência e gera {% data variables.product.prodname_dependabot_alerts %}. Você pode escolher se quer ou não notificar os usuários automaticamente sobre o novo {% data variables.product.prodname_dependabot_alerts %}. 

Para repositórios com {% data variables.product.prodname_dependabot_alerts %} habilitado, a digitalização é acionada em qualquer push para o branch padrão que contém um arquivo de manifesto ou arquivo de bloqueio. Além disso, quando um novo registro de vulnerabilidade é adicionado a {% data variables.location.product_location %}, o {% data variables.product.product_name %} verifica todos os repositórios existentes em {% data variables.location.product_location %} e gera alertas sobre repositórios vulneráveis. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)".

{% ifversion ghes %}
### Sobre {% data variables.product.prodname_dependabot_updates %}

{% data reusables.dependabot.beta-security-and-version-updates %}

Após habilitar {% data variables.product.prodname_dependabot_alerts %}, você poderá optar por habilitar {% data variables.product.prodname_dependabot_updates %}. Quando as {% data variables.product.prodname_dependabot_updates %} estão habilitadas para o {% data variables.location.product_location %}, os usuários podem configurar repositórios para que as dependências sejam atualizadas e mantidas seguras automaticamente. 

{% note %} 

**Observação:** As {% data variables.product.prodname_dependabot_updates %} do {% data variables.product.product_name %} exigem o {% data variables.product.prodname_actions %} com executores auto-hospedados.

{% endnote %}

Por padrão, os executores do {% data variables.product.prodname_actions %} corredores usados pelo {% data variables.product.prodname_dependabot %} precisam de acesso à Internet para baixar pacotes atualizados de gerenciadores de pacotes upstream. Para {% data variables.product.prodname_dependabot_updates %} da plataforma {% data variables.product.prodname_github_connect %}, o acesso à Internet oferece aos executores um token que permite acesso a dependências e avisos hospedados no {% data variables.product.prodname_dotcom_the_website %}.

Com {% data variables.product.prodname_dependabot_updates %}, {% data variables.product.company_short %} cria automaticamente pull requests para atualizar dependências de duas maneiras.

- **{% data variables.product.prodname_dependabot_version_updates %}** : os usuários adicionam um arquivo de configuração do {% data variables.product.prodname_dependabot %} ao repositório para habilitar o {% data variables.product.prodname_dependabot %} a fim de criar solicitações de pull quando uma nova versão de uma dependência rastreada for lançada. Para obter mais informações, confira "[Sobre as {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
- **{% data variables.product.prodname_dependabot_security_updates %}** : os usuários alternam uma configuração de repositório para habilitar o {% data variables.product.prodname_dependabot %} a fim de criar solicitações de pull quando o {% data variables.product.prodname_dotcom %} detecta uma vulnerabilidade em uma das dependências do grafo de dependência do repositório. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)" e "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)".
{% endif %}

## Habilitando {% data variables.product.prodname_dependabot_alerts %}

Antes de poder habilitar {% data variables.product.prodname_dependabot_alerts %}:
- Você deve habilitar {% data variables.product.prodname_github_connect %}. Para obter mais informações, confira "[Como gerenciar o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".{% ifversion ghes %}
- Você deve habilitar o gráfico de dependências. Para obter mais informações, confira "[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)".{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %} {%- ifversion dependabot-updates-github-connect %}
1. No "{% data variables.product.prodname_dependabot %}", à direita de "Os usuários podem receber alertas de vulnerabilidade de dependências do código-fonte", selecione o menu suspenso e clique em **Habilitado sem notificações**. Opcionalmente, para habilitar alertas com notificações, clique em **Habilitado com notificações**.

   ![Captura de tela do menu suspenso para habilitar a digitalização de repositórios com relação a vulnerabilidades](/assets/images/enterprise/site-admin-settings/dependabot-alerts-dropdown.png)

{%- else %}
1. Em "Os repositórios podem ser verificados quanto a vulnerabilidades", selecione o menu suspenso e clique em **Habilitado sem notificações**. Opcionalmente, para habilitar alertas com notificações, clique em **Habilitado com notificações**.
   ![Menu suspenso usado para habilitar a verificação de vulnerabilidades nos repositórios](/assets/images/enterprise/site-admin-settings/enable-vulnerability-scanning-in-repositories.png) {%- endif %} {% tip %}

   **Dica**: recomendamos configurar os {% data variables.product.prodname_dependabot_alerts %} sem notificações nos primeiros dias para evitar uma sobrecarga de emails. Após alguns dias, você poderá habilitar as notificações para receber {% data variables.product.prodname_dependabot_alerts %}, como de costume.

   {% endtip %}

{% ifversion dependabot-updates-github-connect %}
## Habilitar o {% data variables.product.prodname_dependabot_updates %}

Após habilitar {% data variables.product.prodname_dependabot_alerts %} para a sua empresa, você poderá habilitar {% data variables.product.prodname_dependabot_updates %}.

{% ifversion ghes %} {% data reusables.dependabot.enabling-actions-for-ghes %} Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_actions %} para GitHub Enterprise Server](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/getting-started-with-github-actions-for-github-enterprise-server)".

{% data variables.product.prodname_dependabot_updates %} não são compatíveis em {% data variables.product.product_name %} se sua empresa usar clustering.
{% endif %}

{% data reusables.enterprise_site_admin_settings.sign-in %} {% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.advanced-security-tab %}
1. Em "Segurança", selecione **{% data variables.product.prodname_dependabot_security_updates %}** .

   ![Captura de tela da caixa de seleção para habilitar ou desabilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/enterprise/management-console/enable-dependabot-updates.png)

{% data reusables.enterprise_management_console.save-settings %}
1. Clique em **Acessar sua instância**.
1. Configure executores auto-hospedados dedicados para criar as solicitações de pull que atualizarão as dependências. Isso é necessário porque os fluxos de trabalho usam um rótulo de executor específico. Para obter mais informações, confira "[Como gerenciar executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %} na sua empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.github-connect-tab %}
1. No "{% data variables.product.prodname_dependabot %}", à direita de "Os usuários podem atualizar com facilidade as dependências não vulneráveis do código-fonte", clique em **Habilitar**.

   ![Captura de tela do menu suspenso para habilitar a atualização de dependências vulneráveis](/assets/images/enterprise/site-admin-settings/dependabot-updates-button.png)

{% endif %} {% ifversion ghes %}

Ao habilitar {% data variables.product.prodname_dependabot_alerts %}, você também deve considerar relizar a configuração de {% data variables.product.prodname_actions %} para {% data variables.product.prodname_dependabot_security_updates %}. Este recurso permite aos desenvolvedores corrigir a vulnerabilidades nas suas dependências. Para obter mais informações, confira "[Como gerenciar executores auto-hospedados para {% data variables.product.prodname_dependabot_updates %} na sua empresa](/admin/github-actions/enabling-github-actions-for-github-enterprise-server/managing-self-hosted-runners-for-dependabot-updates)".

Se você precisar de segurança aprimorada, recomendamos a configuração do {% data variables.product.prodname_dependabot %} para usar registros privados. Para obter mais informações, confira "[Gerenciar segredos criptografados do {% data variables.product.prodname_dependabot %}](/code-security/dependabot/working-with-dependabot/managing-encrypted-secrets-for-dependabot)".

{% endif %}
