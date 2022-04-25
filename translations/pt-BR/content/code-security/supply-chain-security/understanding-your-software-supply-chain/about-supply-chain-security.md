---
title: Sobre a segurança da cadeia de suprimento
intro: '{% data variables.product.product_name %} ajuda você a proteger sua cadeia de suprimentos, de entender as dependências do seu ambiente, conhecer as vulnerabilidades nessas dependências{% ifversion fpt or ghec or ghes > 3.2 %} e corrigi-las{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Segurança da cadeia de suprimento
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: issue-4864
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Dependency review
  - Dependency graph
  - Vulnerabilities
  - Dependencies
  - Pull requests
  - Repositories
---

## Sobre a segurança da cadeia de suprimentos no GitHub

Com o uso acelerado de código aberto, a maioria dos projetos depende de centenas de dependências de código aberto. Isso coloca um problema de segurança: e se as dependências que você estiver usando forem vulneráveis? Você poderia colocar os seus usuários em risco de ataque da cadeia de suprimentos. Uma das coisas mais importantes que você pode fazer para proteger sua cadeia de suprimentos é corrigir suas vulnerabilidades.

Você adiciona dependências diretamente à sua cadeia de suprimentos ao especificá-las em um arquivo de manifesto ou um arquivo de bloqueio. As dependências também podem ser incluídas transitoriamente, ou seja, até mesmo se você não especificar uma dependência em particular, mas a sua dependência a usa, portanto, você também depende dessa dependência.

{% data variables.product.product_name %} oferece uma variedade de recursos para ajudar você a entender as dependências do seu ambiente{% ifversion ghes < 3.3 or ghae %} e conhecer as vulnerabilidades dessas dependências{% endif %}{% ifversion fpt or ghec or ghes > 3.2 %},conhecer as vulnerabilidades nessas dependências e corrigi-las{% endif %}.

As funcionalidades da cadeia de suprimentos em {% data variables.product.product_name %} são:
- **Gráfico de dependências**
{% ifversion fpt or ghec or ghes > 3.1 or ghae %}- **Revisão de Dependência**{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %} **
{% ifversion fpt or ghec or ghes > 3.2 %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}**{% endif %}

O gráfico de dependências é fundamental para fornecer segurança da cadeia de suprimentos. O gráfico de dependências identifica todas as dependências a montante e as dependências públicas a jusante de um repositório ou pacote. É possível ver as dependências e algumas de suas propriedades, como informações de vulnerabilidade, no gráfico de dependências do repositório.

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
As outras funcionalidades da cadeia de suprimentos em {% data variables.product.prodname_dotcom %} dependem das informações fornecidas pelo gráfico de dependências.

- A revisão de dependências usa o gráfico de dependências para identificar mudanças de dependências e ajuda você a entender o impacto de segurança dessas alterações ao revisar pull requests.
- Os dados de dependência de referência cruzada de {% data variables.product.prodname_dependabot %} fornecidos pelo gráfico de dependências com a lista de vulnerabilidades conhecidas publicadas no {% data variables.product.prodname_advisory_database %}, verifica suas dependências e gera {% data variables.product.prodname_dependabot_alerts %} quando uma potencial vulnerabilidade é detectada.
{% ifversion fpt or ghec or ghes > 3.2 %}- {% data variables.product.prodname_dependabot_security_updates %} usa o gráfico de dependências e  {% data variables.product.prodname_dependabot_alerts %} para ajudar você a atualizar dependências com vulnerabilidades conhecidas no seu repositório.

{% data variables.product.prodname_dependabot_version_updates %} não usa o gráfico de dependências e confia na versão semântica das dependências. {% data variables.product.prodname_dependabot_version_updates %} ajuda você a manter suas dependências atualizadas, mesmo quando elas não têm nenhuma vulnerabilidade.
{% endif %}
{% endif %}

{% ifversion ghes < 3.2 %}
Os dados de dependência de referência cruzada de {% data variables.product.prodname_dependabot %} fornecidos pelo gráfico de dependências com a lista de vulnerabilidades conhecidas publicadas no {% data variables.product.prodname_advisory_database %}, verifica suas dependências e gera {% data variables.product.prodname_dependabot_alerts %} quando uma potencial vulnerabilidade é detectada.
 {% endif %}

## Visão geral de recursos

### Qual é o gráfico de dependências

Para gerar o gráfico de dependência, {% data variables.product.company_short %} analisa as dependências explícitas de um repositório declaradas no manifesto e no arquivo de bloqueio. Quando habilitado, o gráfico de dependências analisa automaticamente todos os arquivos de manifesto de pacote conhecidos no repositório, e usa isto para construir um gráfico com nomes e versões conhecidas das dependências.

- O gráfico de dependências inclui informações sobre suas dependências _diretas_ e dependências _transitivas_.
- O gráfico de dependência é atualizado automaticamente quando você faz push de um commit para {% data variables.product.company_short %} que altera ou adiciona um manifesto compatível ou um arquivo de bloqueio para o branch padrão, e quando alguém fizer uma alteração no repositório de uma de suas dependências.
- É possível ver o gráfico de dependências abrindo a página principal do repositório no {% data variables.product.product_name %} e acessando a aba **Insights**.

Para obter mais informações sobre o gráfico de dependências, consulte "[Sobre o gráfico de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

{% ifversion fpt or ghec or ghes > 3.1 or ghae %}
### O que é revisão de dependências

A revisão de dependências ajuda os revisores e colaboradores a entenderem as mudanças de dependência e seu impacto de segurança em cada pull request.

- A revisão de dependências informa quais dependências foram adicionadas, removidas ou atualizadas em um pull request. Você pode usar as datas de versão, a popularidade das dependências e informações de vulnerabilidade para ajudar você a decidir se deseja aceitar a alteração.
- Você pode ver a revisão de dependências para um pull request mostrando o diff avançado na aba**Arquivos alterados**.

Para obter mais informações sobre a análise de dependências, consulte "[Sobre a revisão de dependências](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

{% endif %}

### O que é o Dependabot

{% data variables.product.prodname_dependabot %} mantém suas dependências atualizadas informando você de qualquer vulnerabilidade de segurança em suas dependências{% ifversion fpt or ghec or ghes > 3.2 or ghae %} e abre automaticamente os pull requests para atualizar suas dependências para a próxima versão segura disponível quando um alerta der {% data variables.product.prodname_dependabot %} é acionado ou, na última versão, quando uma versão é publicada{% else %} para que você possa atualizar essa dependência{% endif %}.

{% ifversion fpt or ghec or ghes > 3.2 %}
O termo "{% data variables.product.prodname_dependabot %}" engloba as seguintes funcionalidades:
- {% data variables.product.prodname_dependabot_alerts %}—Notificação exibida na aba **Segurança** do repositório e no gráfico de dependências do repositório. O alerta inclui um link para o arquivo afetado no projeto, e informações sobre uma versão corrigida.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}—Atualizações acionadas para atualizar suas dependências para uma versão segura quando um alerta é acionado.
   - {% data variables.product.prodname_dependabot_version_updates %}— Atualizações agendadas para manter suas dependências atualizadas com a versão mais recente.
{% endif %}

#### Quais são os alertas do Dependabot

{% data variables.product.prodname_dependabot_alerts %} destaca repositórios afetados por uma vulnerabilidade recém-descoberta baseada no gráfico de dependências e no {% data variables.product.prodname_advisory_database %}, que contém as versões em listas de vulnerabilidades conhecidas.

- {% data variables.product.prodname_dependabot %} faz a digitalização para detectar dependências vulneráveis e envia {% data variables.product.prodname_dependabot_alerts %} quando:
{% ifversion fpt or ghec %}
   - Uma nova vulnerabilidade é adicionada ao {% data variables.product.prodname_advisory_database %}.{% else %}
   - São sincronizados novos dados de consultoria com {% data variables.product.product_location %} a cada hora a partir de {% data variables.product.prodname_dotcom_the_website %}. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - O gráfico de dependências para as alterações no repositório.
- {% data variables.product.prodname_dependabot_alerts %} são exibidos {% ifversion fpt or ghec or ghes > 3.0 %} na aba **Segurança** do repositório e{% endif %} no gráfico de dependências do repositório. O alerta inclui {% ifversion fpt or ghec or ghes > 3.0 %} um link para o arquivo afetado no projeto, e {% endif %}informações sobre uma versão fixa.

Para obter mais informações sobre {% data variables.product.prodname_dependabot_alerts %}, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes > 3.2 %}
#### Quais são as atualizações do Dependabot

Há dois tipos de {% data variables.product.prodname_dependabot_updates %}: {% data variables.product.prodname_dependabot %} atualizações de _segurança_ e atualizações de _versão_. {% data variables.product.prodname_dependabot %} gera pull requests automáticos para atualizar suas dependências em ambos os casos, mas existem várias diferenças.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Acionado por um alerta de {% data variables.product.prodname_dependabot %}
 - Atualizar dependências para a versão mínima que resolve uma vulnerabilidade conhecida
 - Compatível para os ecossistemas que o gráfico de dependências suporta

{% data variables.product.prodname_dependabot_version_updates %}:
 - Executar em um calendário que você configura
 - Atualizar dependências para a última versão que corresponde à configuração
 - Compatível para um grupo diferente de ecossistemas

Para obter mais informações sobre {% data variables.product.prodname_dependabot_updates %}, consulte "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" e "[Sobre {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
{% endif %}

## Disponibilidade de recursos

{% ifversion fpt or ghec %}

Repositórios públicos:
- **Gráfico de dependência**—habilitado por padrão e não pode ser desabilitado.
- **Revisão de dependência**—habilitado por padrão e não pode ser desabilitado.
- **{% data variables.product.prodname_dependabot_alerts %}**—não habilitado por padrão. {% data variables.product.prodname_dotcom %} detecta dependências vulneráveis e exibe informações no gráfico de dependência, mas não gera {% data variables.product.prodname_dependabot_alerts %} por padrão. Os proprietários do repositório ou pessoas com acesso de administrador podem habilitar {% data variables.product.prodname_dependabot_alerts %}. Você também pode habilitar ou desabilitar alertas do Dependabot para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, consulte "[Gerenciando configurações de segurança e análise da sua conta de usuário](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciando configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Repositórios privados:
- **Gráfico de dependência**—não habilitado por padrão. O recurso pode ser habilitado pelos administradores do repositório. Para obter mais informações, consulte "[Explorar as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Revisão de dependência**— disponível em repositórios privados pertencentes a organizações que usam {% data variables.product.prodname_ghe_cloud %} e têm uma licença para {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, consulte a [documentação de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Revisão de dependência**— disponível em repositórios privados pertencentes a organizações, desde que você tenha uma licença para {% data variables.product.prodname_GH_advanced_security %} e o gráfico de dependências habilitado. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" e "[Explorando as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}**—não habilitado por padrão. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios. Você também pode habilitar ou desabilitar alertas do Dependabot para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, consulte "[Gerenciando configurações de segurança e análise da sua conta de usuário](/account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/managing-security-and-analysis-settings-for-your-user-account)" ou "[Gerenciando configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Qualquer tipo de repositório:
- **{% data variables.product.prodname_dependabot_security_updates %}**—não habilitado por padrão. É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações sobre habilitar atualizações de segurança, consulte "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
- **{% data variables.product.prodname_dependabot_version_updates %}**—não habilitado por padrão. As pessoas com permissões de gravação em um repositório podem habilitar {% data variables.product.prodname_dependabot_version_updates %}. Para obter mais informações sobre habilitar atualizações de versão, consulte "[Configurar {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}

{% ifversion ghes or ghae %}
- **Gráfico de dependência** e **{% data variables.product.prodname_dependabot_alerts %}**—não habilitado por padrão. Ambas as funcionalidades são configuradas a nível empresarial pelo proprietário da empresa. For more information, see {% ifversion ghes %}"[Enabling the dependency graph for your enterprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" and {% endif %}"[Enabling {% data variables.product.prodname_dependabot %} for your enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)."
- **Revisão de dependência**—disponível quando o gráfico de dependências está habilitado para {% data variables.product.product_location %} e {% data variables.product.prodname_advanced_security %} está habilitado para a organização ou repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."
{% endif %}
{% ifversion ghes > 3.2 %}
- **{% data variables.product.prodname_dependabot_security_updates %}**—não habilitado por padrão. É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter mais informações sobre habilitar atualizações de segurança, consulte "[Configurar {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)."
- **{% data variables.product.prodname_dependabot_version_updates %}**—não habilitado por padrão. As pessoas com permissões de gravação em um repositório podem habilitar {% data variables.product.prodname_dependabot_version_updates %}. Para obter mais informações sobre habilitar atualizações de versão, consulte "[Configurar {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)."
{% endif %}
