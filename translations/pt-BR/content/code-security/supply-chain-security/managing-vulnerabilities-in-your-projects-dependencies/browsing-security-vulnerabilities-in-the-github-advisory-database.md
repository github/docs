---
title: Pesquisar vulnerabilidades de segurança no banco de dados de consultoria do GitHub
intro: 'O {% data variables.product.prodname_advisory_database %} permite que você pesquise vulnerabilidades que afetam projetos de código aberto no {% data variables.product.company_short %}.'
shortTitle: Navegar no banco de dados da consultoria
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  free-pro-team: '*'
topics:
  - Security
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

### Sobre vulnerabilidades de segurança

{% data reusables.repositories.a-vulnerability-is %}

O {% data variables.product.product_name %} enviará {% data variables.product.prodname_dependabot_alerts %} se detectarmos que qualquer uma das vulnerabilidades do {% data variables.product.prodname_advisory_database %} afetam os pacotes dos quais seu repositório depende. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"

### Sobre o {% data variables.product.prodname_advisory_database %}

O {% data variables.product.prodname_advisory_database %} contém uma lista curada de vulnerabilidades de segurança que foram mapeadas para pacotes monitorados pelo gráfico de dependências de {% data variables.product.company_short %}. {% data reusables.repositories.tracks-vulnerabilities %}

Cada consultoria de segurança contém informações sobre a vulnerabilidade, incluindo descrição, gravidade, pacote afetado. ecossistema de pacote, versões afetadas e versões de patch, impacto e informações opcionais como, por exemplo, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, consulte a "[Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/)" do Instituto Nacional de Padrões e Tecnologia.

O nível de gravidade é um dos quatro níveis possíveis definidos no [ Sistema de Pontuação de vulnerabilidade Comum (CVSS), Seção 5](https://www.first.org/cvss/specification-document)".
- Baixo
- Médio/Moderado
- Alto
- Crítico

O {% data variables.product.prodname_advisory_database %} usa os níveis de CVSS descritos acima. Se {% data variables.product.company_short %} obtiver um CVE, o {% data variables.product.prodname_advisory_database %} usará a versão 3.1 do CVSS. Se o CVE for importado, o {% data variables.product.prodname_advisory_database %} será compatível com as versões 3.0 e 3.1 do CVSS.

{% data reusables.repositories.github-security-lab %}

### Acessar uma consultoria no {% data variables.product.prodname_advisory_database %}

1. Navegue até https://github.com/advisories.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos. ![Filtros do menu suspenso](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Clique em qualquer consultoria para visualizar as informações.

{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. Para obter mais informações, consulte "[ evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

### Pesquisar em {% data variables.product.prodname_advisory_database %}

Você pode procurar no banco de dados e usar qualificadores para limitar sua busca. Por exemplo, você pode procurar consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca em particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier             | Exemplo                                                                                                                                                                          |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) mostrará a consultoria com o ID de {% data variables.product.prodname_advisory_database %}. |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) mostrará a consultoria com este ID de CVE.                                                              |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará apenas as consultorias que afetam os pacotes NPM.                               |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará apenas as consultorias com um alto nível de gravidade.                          |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará apenas as consultorias que afetam a biblioteca de lodash.                     |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) mostrará apenas as consultorias com este número de CWE.                                                             |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) mostrará apenas as consultorias creditadas na conta de usuário "octocat".                             |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) classificará os resultados, mostrando as consultorias mais antigas primeiro.       |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) classificará os resultados mostrando as consultorias mais novas primeiro.        |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) classificará os resultados, mostrando os menos atualizados primeiro.               |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) classificará os resultados, mostrando os mais atualizados primeiro.              |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará apenas as consultorias que foram retiradas.                                       |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) mostrará apenas as consultorias criadas nessa data.                            |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) mostrará somente as consultorias atualizadas nesta data.                       |

### Visualizar seus repositórios vulneráveis

Para qualquer vulnerabilidade em {% data variables.product.prodname_advisory_database %}, você pode ver qual dos seus repositórios tem um alerta {% data variables.product.prodname_dependabot %} para essa vulnerabilidade. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)"

1. Navegue até https://github.com/advisories.
2. Clique em uma consultoria.
3. Na parte superior da página da consultoria, clique em **Alertas do dependabot**. ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário). ![Barra de pesquisa e menus suspensos para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para mais detalhes sobre a vulnerabilidade e para aconselhamento sobre como corrigir o repositório vulnerável clique no nome do repositório.

### Leia mais

- [Definição de "vulnerabilidade"](https://cve.mitre.org/about/terminology.html#vulnerability) da MITRE
