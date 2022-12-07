---
title: Sobre a segurança da cadeia de suprimento
intro: 'O {% data variables.product.product_name %} ajuda você a proteger a cadeia de fornecedores, oferecendo desde o entendimento das dependências do ambiente até a identificação de vulnerabilidades nessas dependências{% ifversion fpt or ghec or ghes %} e aplicação de patch nelas{% endif %}.'
miniTocMaxHeadingLevel: 3
shortTitle: Supply chain security
redirect_from:
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
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
ms.openlocfilehash: d0f743db7d1f5a054a3eb8c7b4dbf81052aca50f
ms.sourcegitcommit: cfe91073c844cb762131b2de9fb41f7f9db792fc
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/24/2022
ms.locfileid: '148181233'
---
## Sobre a segurança da cadeia de suprimentos no GitHub

Com o uso acelerado de código aberto, a maioria dos projetos depende de centenas de dependências de código aberto. Isso coloca um problema de segurança: e se as dependências que você estiver usando forem vulneráveis? Você poderia colocar os seus usuários em risco de ataque da cadeia de suprimentos. Uma das coisas mais importantes que você pode fazer para proteger a cadeia de fornecedores é corrigir as dependências vulneráveis{% ifversion GH-advisory-db-supports-malware %} e substituir os malwares{% endif %}.

Você adiciona dependências diretamente à sua cadeia de suprimentos ao especificá-las em um arquivo de manifesto ou um arquivo de bloqueio. As dependências também podem ser incluídas transitoriamente, ou seja, até mesmo se você não especificar uma dependência em particular, mas a sua dependência a usa, portanto, você também depende dessa dependência.

O {% data variables.product.product_name %} oferece uma variedade de recursos para ajudar você a entender as dependências do ambiente{% ifversion ghae %} e conhecer as vulnerabilidades dessas dependências{% endif %}{% ifversion fpt or ghec or ghes %}, conhecer as vulnerabilidades nessas dependências e aplicar patch nelas{% endif %}. 

As funcionalidades da cadeia de suprimentos em {% data variables.product.product_name %} são:
- **Grafo de dependência**
- **Revisão de dependência**
- **{% data variables.product.prodname_dependabot_alerts %} ** {% ifversion fpt or ghec or ghes %}- **{% data variables.product.prodname_dependabot_updates %}**
  - **{% data variables.product.prodname_dependabot_security_updates %}**
  - **{% data variables.product.prodname_dependabot_version_updates %}** {% endif %}

O gráfico de dependências é fundamental para fornecer segurança da cadeia de suprimentos. O gráfico de dependências identifica todas as dependências a montante e as dependências públicas a jusante de um repositório ou pacote. É possível ver as dependências e algumas de suas propriedades, como informações de vulnerabilidade, no gráfico de dependências do repositório. 

As outras funcionalidades da cadeia de suprimentos em {% data variables.product.prodname_dotcom %} dependem das informações fornecidas pelo gráfico de dependências.

- A revisão de dependências usa o gráfico de dependências para identificar mudanças de dependências e ajuda você a entender o impacto de segurança dessas alterações ao revisar pull requests.
- O {% data variables.product.prodname_dependabot %} faz a referência cruzada dos dados de dependência fornecidos pelo grafo de dependência com a lista de avisos publicadas no {% data variables.product.prodname_advisory_database %}, verifica as dependências e gera {% data variables.product.prodname_dependabot_alerts %} quando é detectada uma possível vulnerabilidade {% ifversion GH-advisory-db-supports-malware %}ou malware{% endif %}.
{% ifversion fpt or ghec or ghes %}– As {% data variables.product.prodname_dependabot_security_updates %} usam o grafo de dependência e os {% data variables.product.prodname_dependabot_alerts %} para ajudar você a atualizar as dependências com vulnerabilidades conhecidas no repositório.

{% data variables.product.prodname_dependabot_version_updates %} não usa o gráfico de dependências e confia na versão semântica das dependências. {% data variables.product.prodname_dependabot_version_updates %} ajuda você a manter suas dependências atualizadas, mesmo quando elas não têm nenhuma vulnerabilidade.
{% endif %}

{% ifversion fpt or ghec or ghes %} Para obter guias de melhores práticas sobre a segurança da cadeia de suprimentos de ponta a ponta, incluindo a proteção de contas pessoais, códigos e processos de build, confira "[Como proteger sua cadeia de suprimentos de ponta a ponta](/code-security/supply-chain-security/end-to-end-supply-chain/end-to-end-supply-chain-overview)".
{% endif %}

## Visão geral do recurso

### Qual é o gráfico de dependências

Para gerar o gráfico de dependência, {% data variables.product.company_short %} analisa as dependências explícitas de um repositório declaradas no manifesto e no arquivo de bloqueio. Quando habilitado, o gráfico de dependências analisa automaticamente todos os arquivos de manifesto de pacote conhecidos no repositório, e usa isto para construir um gráfico com nomes e versões conhecidas das dependências.

- O grafo de dependência inclui informações sobre as dependências _diretas_ e as dependências _transitivas_. 
- O gráfico de dependência é atualizado automaticamente quando você faz push de um commit para {% data variables.product.company_short %} que altera ou adiciona um manifesto compatível ou um arquivo de bloqueio para o branch padrão, e quando alguém fizer uma alteração no repositório de uma de suas dependências.
- Veja o grafo de dependência abrindo a página principal do repositório no {% data variables.product.product_name %} e acessando a guia **Insights**.

{% ifversion dependency-submission-api %} {% data reusables.dependency-submission.dependency-submission-link %} {% endif %}

Para obter mais informações sobre o grafo de dependência, confira "[Sobre o grafo de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)".

### O que é revisão de dependências

A revisão de dependências ajuda os revisores e colaboradores a entenderem as mudanças de dependência e seu impacto de segurança em cada pull request. 

- A revisão de dependências informa quais dependências foram adicionadas, removidas ou atualizadas em um pull request. Você pode usar as datas de versão, a popularidade das dependências e informações de vulnerabilidade para ajudar você a decidir se deseja aceitar a alteração.
- Veja a revisão de dependência para uma solicitação de pull mostrando a comparação avançada na guia **Arquivos Alterados**.

Para obter mais informações sobre a revisão de dependência, confira "[Sobre a revisão de dependência](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review)".

### O que é o Dependabot

O {% data variables.product.prodname_dependabot %} mantém as dependências atualizadas informando sobre as vulnerabilidades de segurança nas dependências{% ifversion fpt or ghec or ghes %} e abre solicitações de pull automaticamente a fim de atualizar as dependências para a próxima versão segura disponível quando um alerta do {% data variables.product.prodname_dependabot %} é disparado ou para a última versão quando um lançamento é publicado{% else %}, para que você possa atualizar essa dependência{% endif %}.

{% ifversion fpt or ghec or ghes %} O termo "{% data variables.product.prodname_dependabot %}" engloba os seguintes recursos:
- {% data variables.product.prodname_dependabot_alerts %} – Notificação exibida na guia **Segurança** do repositório e no grafo de dependência do repositório. O alerta inclui um link para o arquivo afetado no projeto, e informações sobre uma versão corrigida.
- {% data variables.product.prodname_dependabot_updates %}:
   - {% data variables.product.prodname_dependabot_security_updates %}—Atualizações acionadas para atualizar suas dependências para uma versão segura quando um alerta é acionado.
   - {% data variables.product.prodname_dependabot_version_updates %}— Atualizações agendadas para manter suas dependências atualizadas com a versão mais recente.

{% endif %}

{% ifversion fpt or ghec %}

{% data variables.product.prodname_dependabot_alerts %}, {% data variables.product.prodname_dependabot_security_updates %}, e {% data variables.product.prodname_dependabot_version_updates %} não usam {% data variables.product.prodname_actions %} quando são executados no {% data variables.product.product_name %}. No entanto, as solicitações de pull abertas pelo {% data variables.product.prodname_dependabot %} podem disparar fluxos de trabalho que executam ações. Para obter mais informações, confira "[Como automatizar o {% data variables.product.prodname_dependabot %} com o {% data variables.product.prodname_actions %}](/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions)".

{% elsif ghes %}

{% data variables.product.prodname_dependabot_security_updates %} e {% data variables.product.prodname_dependabot_version_updates %} exigem que o {% data variables.product.prodname_actions %} seja executado no {% data variables.product.product_name %}. {% data variables.product.prodname_dependabot_alerts %} não exigem {% data variables.product.prodname_actions %}. Para obter mais informações, confira "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% elsif ghae %}

O {% data variables.product.prodname_actions %} não é necessário para que os {% data variables.product.prodname_dependabot_alerts %} sejam executados no {% data variables.product.product_name %}.

{% endif %}

{% ifversion dependabot-actions-support %}

{% data reusables.dependabot.dependabot-actions-support %} Para saber mais, confira "[Sobre {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/about-dependabot-security-updates)".

{% endif %}

#### Quais são os alertas do Dependabot

O {% data variables.product.prodname_dependabot_alerts %} destaca os repositórios afetados por uma vulnerabilidade recém-descoberta com base no grafo de dependência e no {% data variables.product.prodname_advisory_database %}, que contém os avisos de vulnerabilidades conhecidas {% ifversion GH-advisory-db-supports-malware %} e malwares{% endif %}. 

- O {% data variables.product.prodname_dependabot %} faz a verificação para detectar dependências não seguras e envia {% data variables.product.prodname_dependabot_alerts %} quando: {% ifversion fpt or ghec %}
   - Um novo aviso é adicionado ao {% data variables.product.prodname_advisory_database %}.{% else %}
   - Os novos dados de aviso são sincronizados do {% data variables.product.prodname_dotcom_the_website %} com o {% data variables.location.product_location %} por hora. {% data reusables.security-advisory.link-browsing-advisory-db %}{% endif %}
   - O gráfico de dependências para as alterações no repositório. 
- Os {% data variables.product.prodname_dependabot_alerts %} são exibidos {% ifversion fpt or ghec or ghes %} na guia **Segurança** do repositório e{% endif %} no grafo de dependência do repositório. O alerta inclui {% ifversion fpt or ghec or ghes %}um link para o arquivo afetado no projeto e {% endif %}informações sobre uma versão corrigida.

Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies)".

{% ifversion fpt or ghec or ghes %}
#### Quais são as atualizações do Dependabot

Há dois tipos de {% data variables.product.prodname_dependabot_updates %}: atualizações de _segurança_ e atualizações de _versão_ do {% data variables.product.prodname_dependabot %}. {% data variables.product.prodname_dependabot %} gera pull requests automáticos para atualizar suas dependências em ambos os casos, mas existem várias diferenças.

{% data variables.product.prodname_dependabot_security_updates %}:
 - Acionado por um alerta de {% data variables.product.prodname_dependabot %}
 - Atualizar dependências para a versão mínima que resolve uma vulnerabilidade conhecida
 - Compatível para os ecossistemas que o gráfico de dependências suporta
 - Não requer um arquivo de configuração, mas você pode usar um para substituir o comportamento padrão
 
{% data variables.product.prodname_dependabot_version_updates %}:
 - Requer um arquivo de configuração
 - Executar em um calendário que você configura
 - Atualizar dependências para a última versão que corresponde à configuração
 - Compatível para um grupo diferente de ecossistemas

Para obter mais informações sobre as {% data variables.product.prodname_dependabot_updates %}, confira "[Sobre as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-dependabot-security-updates)" e "[Sobre as {% data variables.product.prodname_dependabot_version_updates %}](/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/about-dependabot-version-updates)".
{% endif %}

## Disponibilidade de recursos

{% ifversion fpt or ghec %}

Repositórios públicos:
- **Grafo de dependência** – habilitado por padrão, não podendo ser desabilitado.
- **Revisão de dependência** – habilitada por padrão, não podendo ser desabilitada.
- **{% data variables.product.prodname_dependabot_alerts %}** : não habilitado por padrão. O {% data variables.product.prodname_dotcom %} detecta dependências não seguras e exibe informações no grafo de dependência, mas não gera {% data variables.product.prodname_dependabot_alerts %} por padrão. Os proprietários do repositório ou pessoas com acesso de administrador podem habilitar {% data variables.product.prodname_dependabot_alerts %}. 
  Você também pode habilitar ou desabilitar alertas do Dependabot para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise da sua conta de usuário](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" ou "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Repositórios privados:
- **Grafo de dependência** – não habilitado por padrão. O recurso pode ser habilitado pelos administradores do repositório. Para obter mais informações, confira "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)".
{% ifversion fpt %}
- **Revisão de dependência** – disponível em repositórios privados pertencentes a organizações que usam o {% data variables.product.prodname_ghe_cloud %} e têm uma licença do {% data variables.product.prodname_GH_advanced_security %}. Para obter mais informações, confira a [documentação do {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/supply-chain-security/understanding-your-software-supply-chain/about-dependency-review).
{% elsif ghec %}
- **Revisão de dependência** – disponível em repositórios privados pertencentes a organizações, desde que você tenha uma licença do {% data variables.product.prodname_GH_advanced_security %} e o grafo de dependência habilitado. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)" e "[Como explorar as dependências de um repositório](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#enabling-and-disabling-the-dependency-graph-for-a-private-repository)". {% endif %}
- **{% data variables.product.prodname_dependabot_alerts %}** : não habilitado por padrão. Os proprietários de repositórios privados ou pessoas com acesso de administrador, podem habilitar o {% data variables.product.prodname_dependabot_alerts %} ativando o gráfico de dependências e {% data variables.product.prodname_dependabot_alerts %} para seus repositórios.
  Você também pode habilitar ou desabilitar alertas do Dependabot para todos os repositórios pertencentes à sua conta de usuário ou organização. Para obter mais informações, confira "[Como gerenciar as configurações de segurança e análise da sua conta de usuário](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/managing-security-and-analysis-settings-for-your-personal-account)" ou "[Como gerenciar as configurações de segurança e análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

Qualquer tipo de repositório:
- **{% data variables.product.prodname_dependabot_security_updates %}** : não habilitado por padrão. É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter informações sobre como habilitar as atualizações de segurança, confira "[Como configurar as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}** : não habilitado por padrão. As pessoas com permissões de gravação em um repositório podem habilitar {% data variables.product.prodname_dependabot_version_updates %}. Para obter informações sobre como habilitar as atualizações de versão, confira "[Como configurar as {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}

{% ifversion ghes or ghae %}
- **Grafo de dependência** e **{% data variables.product.prodname_dependabot_alerts %}** – não habilitados por padrão. Ambas as funcionalidades são configuradas a nível empresarial pelo proprietário da empresa. Para obter mais informações, confira {% ifversion ghes %}"[Como habilitar o grafo de dependência para sua empresa](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise)" e {% endif %}"[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
- **Revisão de dependência** – Disponível quando o grafo de dependência está habilitado para a {% data variables.location.product_location %} e o {% data variables.product.prodname_advanced_security %} está habilitada para a organização ou o repositório. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".
{% endif %} {% ifversion ghes %}
- **{% data variables.product.prodname_dependabot_security_updates %}** : não habilitado por padrão. É possível habilitar o {% data variables.product.prodname_dependabot_security_updates %} para qualquer repositório que use {% data variables.product.prodname_dependabot_alerts %} e o gráfico de dependências. Para obter informações sobre como habilitar as atualizações de segurança, confira "[Como configurar as {% data variables.product.prodname_dependabot_security_updates %}](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates)".
- **{% data variables.product.prodname_dependabot_version_updates %}** : não habilitado por padrão. As pessoas com permissões de gravação em um repositório podem habilitar {% data variables.product.prodname_dependabot_version_updates %}. Para obter informações sobre como habilitar as atualizações de versão, confira "[Como configurar as {% data variables.product.prodname_dependabot_version_updates %}](/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates)".
{% endif %}
