---
title: Pesquisando consultorias de segurança no banco de dados consultivo do GitHub
intro: 'Você pode fazer uma pesquisa em {% data variables.product.prodname_advisory_database %} para encontrar consultorias para risco de segurança sobre projetos de código aberto hospedados em {% data variables.product.company_short %}.'
shortTitle: Procurar banco de dados consultivo
miniTocMaxHeadingLevel: 3
redirect_from:
  - /github/managing-security-vulnerabilities/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/browsing-security-vulnerabilities-in-the-github-advisory-database
  - /code-security/dependabot/dependabot-alerts/browsing-security-vulnerabilities-in-the-github-advisory-database
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Security advisories
  - Alerts
  - Dependabot
  - Vulnerabilities
  - CVEs
---

<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## Sobre o {% data variables.product.prodname_advisory_database %}

The {% data variables.product.prodname_advisory_database %} contains a list of known security vulnerabilities {% ifversion GH-advisory-db-supports-malware %}and malware, {% endif %}grouped in two categories: {% data variables.product.company_short %}-reviewed advisories and unreviewed advisories.

{% data reusables.repositories.tracks-vulnerabilities %}

## Sobre tipos de consultorias de segurança

{% data reusables.advisory-database.beta-malware-advisories %}

Each advisory in the {% data variables.product.prodname_advisory_database %} is for a vulnerability in open source projects{% ifversion GH-advisory-db-supports-malware %} or for malicious open source software{% endif %}.

{% data reusables.repositories.a-vulnerability-is %} De modo geral, as vulnerabilidades no código são introduzidas por acidente e corrigidas logo após serem descobertas. Você deve atualizar seu código para usar a versão fixa da dependência assim que estiver disponível.

{% ifversion GH-advisory-db-supports-malware %}

Em contraste, o software malicioso, ou malware, é um código projetado intencionalmente para executar funções indesejadas ou nocivas. O malware pode apontar para hardware, software, dados confidenciais ou usuários de qualquer aplicativo que usar o malware. Você precisa remover o malware do seu projeto e encontrar uma alternativa mais segura para a dependência.

{% endif %}

### Consultorias revisadas por {% data variables.product.company_short %}

{% data variables.product.company_short %}-reviewed advisories are security vulnerabilities{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %} that have been mapped to packages in ecosystems we support. Analisamos cuidadosamente cada consultoria com relação à validade e nos asseguramos de que elas tenham uma descrição completa e contenham tanto o ecossistema como as informações sobre pacotes.

Geralmente, nós nomeamos nossos ecossistemas compatíveis após o registro do pacote associado à linguagem de programação de software. Nós revisamos as consultorias se eças não forem para uma vulnerabilidade em um pacote que vem de um registro compatível.

- Composer (registry: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (registry: https://hex.pm/){% endif %}
- Go (registry: https://pkg.go.dev/)
- Maven (registry: https://repo1.maven.org/maven2/org/)
- npm (registry: https://www.npmjs.com/)
- NuGet (registry: https://www.nuget.org/)
- pip (registry: https://pypi.org/)
- RubyGems (registry: https://rubygems.org/)
- Rust (registry: https://crates.io/)

Se você tem uma sugestão para um novo ecossistema com o qual devemos ter compatibilidade, abra um problema de [](https://github.com/github/advisory-database/issues) para discussão.

If you enable {% data variables.product.prodname_dependabot_alerts %} for your repositories, you are automatically notified when a new {% data variables.product.company_short %}-reviewed advisory reports a vulnerability {% ifversion GH-advisory-db-supports-malware %}or malware{% endif %} for a package you depend on. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Consultorias não revisadas

As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional.

{% data variables.product.prodname_dependabot %} não cria {% data variables.product.prodname_dependabot_alerts %} para consultorias não revisadas, pois esse tipo de consultoria não é verificado com relação à validade ou integralidade.

## Sobre informações em consultorias de segurança

Each security advisory contains information about the vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware,{% endif %} which may include the description, severity, affected package, package ecosystem, affected versions and patched versions, impact, and optional information such as references, workarounds, and credits. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, consulte a "[Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/)" do Instituto Nacional de Padrões e Tecnologia.

O nível de gravidade é um dos quatro níveis possíveis definidos no [ Sistema de Pontuação de vulnerabilidade Comum (CVSS), Seção 5](https://www.first.org/cvss/specification-document)".
- Baixo
- Médio/Moderado
- Alto
- Crítico

O {% data variables.product.prodname_advisory_database %} usa os níveis de CVSS descritos acima. Se {% data variables.product.company_short %} obtiver um CVE, o {% data variables.product.prodname_advisory_database %} usará a versão 3.1 do CVSS. Se o CVE for importado, o {% data variables.product.prodname_advisory_database %} será compatível com as versões 3.0 e 3.1 do CVSS.

{% data reusables.repositories.github-security-lab %}

## Acessar uma consultoria no {% data variables.product.prodname_advisory_database %}

1. Navegue até https://github.com/advisories.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos. ![Filtros do menu suspenso](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% tip %}

   **Dica:** Você pode usar a barra lateral à esquerda para explorar as consultorias revisadas por {% data variables.product.company_short %} e as consultorias não revisadas separadamente.

   {% endtip %}
3. Click an advisory to view details. Por padrão, você verá consultorias revisadas por {% data variables.product.company_short %} para vulnerabilidades de segurança. {% ifversion GH-advisory-db-supports-malware %}To show malware advisories, use `type:malware` in the search bar.{% endif %}


{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. {% ifversion GH-advisory-db-supports-malware %}By default, queries will return {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities unless you specify `type:malware`.{% endif %} For more information, see the "[`security_advisory` webhook event](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## Editando uma consultoria em {% data variables.product.prodname_advisory_database %}
Você pode sugerir melhorias para qualquer consultoria em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, consulte "[Editando consultorias de segurança em {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)."

## Pesquisar em {% data variables.product.prodname_advisory_database %}

Você pode procurar no banco de dados e usar qualificadores para limitar sua busca. Por exemplo, você pode procurar consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca em particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier       | Exemplo                                                                                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed` | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará as consultorias revisadas por {% data variables.product.company_short %} para vulerabilidades de segurança. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:malware**](https://github.com/advisories?query=type%3Amalware) will show {% data variables.product.company_short %}-reviewed advisories for malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) will show unreviewed advisories. |
| `GHSA-ID`| [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) will show the advisory with this {% data variables.product.prodname_advisory_database %} ID. | | `CVE-ID`| [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) will show the advisory with this CVE ID number. | | `ecosystem:ECOSYSTEM`| [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) will show only advisories affecting NPM packages. | | `severity:LEVEL`| [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) will show only advisories with a high severity level. | | `affects:LIBRARY`| [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) will show only advisories affecting the lodash library. | | `cwe:ID`| [**cwe:352**](https://github.com/advisories?query=cwe%3A352) will show only advisories with this CWE number. | | `credit:USERNAME`| [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) will show only advisories credited to the "octocat" user account. | | `sort:created-asc`| [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) will sort by the oldest advisories first. | | `sort:created-desc`| [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) will sort by the newest advisories first. | | `sort:updated-asc`| [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) will sort by the least recently updated first. | | `sort:updated-desc`| [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) will sort by the most recently updated first. | | `is:withdrawn`| [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) will show only advisories that have been withdrawn. | | `created:YYYY-MM-DD`| [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) will show only advisories created on this date. | | `updated:YYYY-MM-DD`| [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) will show only advisories updated on this date. |

## Visualizar seus repositórios vulneráveis

For any {% data variables.product.company_short %}-reviewed advisory in the {% data variables.product.prodname_advisory_database %}, you can see which of your repositories are affected by that security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navegue até https://github.com/advisories.
2. Clique em uma consultoria.
3. Na parte superior da página da consultoria, clique em **Alertas do dependabot**. ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário). ![Barra de pesquisa e menus suspensos para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para mais detalhes sobre a vulnerabilidade e para aconselhamento sobre como corrigir o repositório vulnerável clique no nome do repositório.

{% ifversion security-advisories-ghes-ghae %}
## Accessing the local advisory database on {% data variables.product.product_location %}

If your site administrator has enabled {% data variables.product.prodname_github_connect %} for {% data variables.product.product_location %}, you can also browse reviewed advisories locally. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

You can use your local advisory database to check whether a specific security vulnerability is included, and therefore whether you'd get alerts for vulnerable dependencies. You can also view any vulnerable repositories.

1. Navigate to `https://HOSTNAME/advisories`.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos. ![Filtros do menu suspenso](/assets/images/help/security/advisory-database-dropdown-filters.png)
   {% note %}

   **Note:** Only reviewed advisories will be listed. Unreviewed advisories can be viewed in the {% data variables.product.prodname_advisory_database %} on {% data variables.product.prodname_dotcom_the_website %}. For more information, see "[Accessing an advisory in the GitHub Advisory Database](#accessing-an-advisory-in-the-github-advisory-database)".

   {% endnote %}
3. Click an advisory to view details.{% ifversion GH-advisory-db-supports-malware %} By default, you will see {% data variables.product.company_short %}-reviewed advisories for security vulnerabilities. To show malware advisories, use `type:malware` in the search bar.{% endif %}

You can also suggest improvements to any advisory directly from your local advisory database. For more information, see "[Editing advisories from {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### Viewing vulnerable repositories for {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

In the local advisory database, you can see which repositories are affected by each security vulnerability{% ifversion GH-advisory-db-supports-malware %} or malware{% endif %}. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navigate to `https://HOSTNAME/advisories`.
2. Clique em uma consultoria.
3. Na parte superior da página da consultoria, clique em **Alertas do dependabot**. ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário). ![Barra de pesquisa e menus suspensos para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para mais detalhes sobre a vulnerabilidade e para aconselhamento sobre como corrigir o repositório vulnerável clique no nome do repositório.

{% endif %}

## Leia mais

- [Definição de "vulnerabilidade"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) da MITRE
