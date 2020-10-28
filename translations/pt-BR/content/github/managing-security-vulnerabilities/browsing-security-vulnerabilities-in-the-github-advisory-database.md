---
title: Pesquisar vulnerabilidades de segurança no banco de dados de consultoria do GitHub
intro: 'O {% data variables.product.prodname_advisory_database %} permite que você pesquise vulnerabilidades que afetam projetos de código aberto no {% data variables.product.company_short %}.'
shortTitle: Browsing the Advisory Database
versions:
  free-pro-team: '*'
---

### Sobre vulnerabilidades de segurança

{% data reusables.repositories.a-vulnerability-is %}

O {% data variables.product.product_name %} enviará {% data variables.product.prodname_dependabot_alerts %} se detectarmos que qualquer uma das vulnerabilidades do {% data variables.product.prodname_advisory_database %} afetam os pacotes dos quais seu repositório depende. Para obter mais informações, consulte "[Sobre alertas para dependências vulneráveis](/github/managing-security-vulnerabilities/about-alerts-for-vulnerable-dependencies)"

### Sobre o {% data variables.product.prodname_advisory_database %}

O {% data variables.product.prodname_advisory_database %} contém uma lista curada de vulnerabilidades de segurança que foram mapeadas para pacotes monitorados pelo gráfico de dependências de {% data variables.product.company_short %}. {% data reusables.repositories.tracks-vulnerabilities %}

Cada consultoria de segurança contém informações sobre a vulnerabilidade, incluindo descrição, gravidade, pacote afetado. ecossistema de pacote, versões afetadas e versões de patch, impacto e informações opcionais como, por exemplo, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, consulte a "[Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/)" do Instituto Nacional de Padrões e Tecnologia.

O nível de gravidade é um dos quatro níveis possíveis definidos no [Sistema de pontuação de vulnerabilidade comum (CVSS, Common Vulnerability Scoring System), Seção 2.1.2](https://www.first.org/cvss/specification-document):
- Baixo
- Moderado
- Alto
- Crítico

O {% data variables.product.prodname_advisory_database %} usa padrões a versão 3.0 do CVSS e os níveis de CVSS descritos acima. {% data variables.product.product_name %} não publica pontuações de CVSS.

{% data reusables.repositories.github-security-lab %}

### Acessar uma consultoria no {% data variables.product.prodname_advisory_database %}

1. Navegue até https://github.com/advisories.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos. ![Filtros do menu suspenso](/assets/images/help/security/advisory-database-dropdown-filters.png)
3. Clique em qualquer consultoria para visualizar as informações.

{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. Para obter mais informações, consulte "[ evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

### Pesquisar em {% data variables.product.prodname_advisory_database %}
Você pode pesquisar no banco de dados e usar qualificadores para restringir sua pesquisa com consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca específica.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier             | Exemplo                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará apenas as consultorias que afetam os pacotes NPM.                         |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará apenas as consultorias com um alto nível de gravidade.                    |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará apenas as consultorias que afetam a biblioteca de lodash.               |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) classificará os resultados, mostrando as consultorias mais antigas primeiro. |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) classificará os resultados mostrando as consultorias mais novas primeiro.  |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) classificará os resultados, mostrando os menos atualizados primeiro.         |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) classificará os resultados, mostrando os mais atualizados primeiro.        |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará apenas as consultorias que foram retiradas.                                 |
| `created:YYYY-MM-DD`  | [**created:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2019-10-31) mostrará apenas as consultorias criadas nessa data.                      |
| `updated:YYYY-MM-DD`  | [**updated:2019-10-31**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2019-10-31) mostrará somente as consultorias atualizadas nesta data.                 |

### Leia mais

- [Definição de "vulnerabilidade"](https://cve.mitre.org/about/terminology.html#vulnerability) da MITRE
