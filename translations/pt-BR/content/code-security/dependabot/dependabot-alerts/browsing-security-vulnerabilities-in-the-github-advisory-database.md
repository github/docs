---
title: Pesquisar vulnerabilidades de segurança no banco de dados de consultoria do GitHub
intro: The {% data variables.product.prodname_advisory_database %} allows you to browse or search for vulnerabilities that affect open source projects  on {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
miniTocMaxHeadingLevel: 3
redirect_from:
- /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
- /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Security advisories
- Alerts
- Dependabot
- Vulnerabilities
- CVEs
ms.openlocfilehash: 0a44242676db751aaead576535d3ba14426c9ad6
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 05/17/2022
ms.locfileid: "145094810"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-security-vulnerabilities"></a>Sobre vulnerabilidades de segurança

{% data reusables.repositories.a-vulnerability-is %}

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>Sobre o {% data variables.product.prodname_advisory_database %}

O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades de segurança conhecidas, agrupadas em duas categorias: consultorias revisadas por {% data variables.product.company_short %} e consultorias não revisadas.

{% data reusables.repositories.tracks-vulnerabilities %}

### <a name="about--data-variablesproductcompany_short--reviewed-advisories"></a>Sobre as consultorias revisadas por {% data variables.product.company_short %}

As consultorias revisadas por {% data variables.product.company_short %} são vulnerabilidades de segurança que foram mapeadas para pacotes monitorados pelo gráfico de dependências de {% data variables.product.company_short %}.

Analisamos cuidadosamente cada consultoria com relação à sua validade. Cada consultoria revisada por {% data variables.product.company_short %} tem uma descrição completa e contém informações de pacote e ecossistema.

Se você habilitar {% data variables.product.prodname_dependabot_alerts %} para os seus repositórios, você será notificado automaticamente quando uma nova consultoria revisada por {% data variables.product.company_short %} afetar pacotes dos quais você depende. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### <a name="about-unreviewed-advisories"></a>Sobre consultorias não revisadas

As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional. 

{% data variables.product.prodname_dependabot %} não cria {% data variables.product.prodname_dependabot_alerts %} para consultorias não revisadas, pois esse tipo de consultoria não é verificado com relação à validade ou integralidade.

## <a name="about-security-advisories"></a>Sobre as consultorias de segurança

Cada consultoria de segurança contém informações sobre a vulnerabilidade, que pode incluir a descrição, gravidade, pacote afetado. ecossistema de pacote, versões afetadas e versões de patch, impacto e informações opcionais como, por exemplo, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, confira o "[Banco de Dados de Vulnerabilidades Nacionais](https://nvd.nist.gov/)" (National Vulnerability Database) do National Institute of Standards and Technology.

O nível de severidade é um dos quatro níveis possíveis definidos no "[CVSS (Sistema de Pontuação de Vulnerabilidade Comum), Seção 5](https://www.first.org/cvss/specification-document)".
- Baixo
- Médio/Moderado
- Alta
- Crítico

O {% data variables.product.prodname_advisory_database %} usa os níveis de CVSS descritos acima. Se {% data variables.product.company_short %} obtiver um CVE, o {% data variables.product.prodname_advisory_database %} usará a versão 3.1 do CVSS. Se o CVE for importado, o {% data variables.product.prodname_advisory_database %} será compatível com as versões 3.0 e 3.1 do CVSS.

{% data reusables.repositories.github-security-lab %}

## <a name="accessing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Acessar uma consultoria no {% data variables.product.prodname_advisory_database %}

1. Navegue até https://github.com/advisories.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos.
  ![Filtros suspensos](/assets/images/help/security/advisory-database-dropdown-filters.png) {% tip %}

   **Dica:** você pode usar a barra lateral à esquerda para explorar os avisos revisados e não revisados do {% data variables.product.company_short %} separadamente.

   {% endtip %}
3. Clique em qualquer consultoria para visualizar as informações.

{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. Para obter mais informações, confira o "[ evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)".

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Editando uma consultoria em {% data variables.product.prodname_advisory_database %}
Você pode sugerir melhorias para qualquer consultoria em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Pesquisar em {% data variables.product.prodname_advisory_database %}

Você pode procurar no banco de dados e usar qualificadores para limitar sua busca. Por exemplo, você pode procurar consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca em particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador  | Exemplo |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará os avisos revisados do {% data variables.product.company_short %}. |
| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) mostrará os avisos não verificados. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) mostrará o aviso com esta ID do {% data variables.product.prodname_advisory_database %}. |
| `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) mostrará o aviso com esse número de ID do CVE. |
| `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará apenas os avisos que afetam os pacotes npm. |
| `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará apenas os avisos com um nível de severidade alta. |
| `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará apenas os avisos que afetam a biblioteca lodash. |
| `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) mostrará apenas os avisos com esse número de CWE. |
| `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) mostrará apenas os avisos creditados à conta de usuário "octocat". |
| `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) classificará os resultados pelos avisos mais antigos primeiro. |
| `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) classificará os resultados pelos avisos mais recentes primeiro. |
| `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) classificará os resultados pela atualização menos recente primeiro. |
| `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) classificará os resultados pela atualização mais recente primeiro. |
| `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará apenas os avisos que foram retirados. |
| `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) mostrará apenas os avisos criados nessa data. |
| `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) mostrará apenas os avisos atualizados nessa data. |

## <a name="viewing-your-vulnerable-repositories"></a>Visualizar seus repositórios vulneráveis

Para qualquer consultoria revisada por {% data variables.product.company_short %} no {% data variables.product.prodname_advisory_database %}, você pode ver qual dos seus repositórios são afetados por essa vulnerabilidade de segurança. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navegue até https://github.com/advisories.
2. Clique em uma consultoria.
3. Na parte superior da página do aviso, clique em **Alertas do Dependabot**.
   ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário).
   ![Barra de pesquisa e menus suspensos usados para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para mais detalhes sobre a vulnerabilidade e para aconselhamento sobre como corrigir o repositório vulnerável clique no nome do repositório.

## <a name="further-reading"></a>Leitura adicional

- [Definição de "vulnerabilidade"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) do MITRE
