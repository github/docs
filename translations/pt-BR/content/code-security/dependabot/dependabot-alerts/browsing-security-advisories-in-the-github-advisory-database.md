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

O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades e malware de segurança conhecidas, agrupadas em duas categorias: consultorias revisadas por {% data variables.product.company_short %} e consultorias não revisadas.

{% data reusables.repositories.tracks-vulnerabilities %}

## Sobre tipos de consultorias de segurança

{% data reusables.advisory-database.beta-malware-advisories %}

Cada consultoria na {% data variables.product.prodname_advisory_database %} é para uma vulnerabilidade em projetos de código aberto ou para softwares de código aberto maliciosos.

{% data reusables.repositories.a-vulnerability-is %} De modo geral, as vulnerabilidades no código são introduzidas por acidente e corrigidas logo após serem descobertas. Você deve atualizar seu código para usar a versão fixa da dependência assim que estiver disponível.

Em contraste, o software malicioso, ou malware, é um código projetado intencionalmente para executar funções indesejadas ou nocivas. O malware pode apontar para hardware, software, dados confidenciais ou usuários de qualquer aplicativo que usar o malware. Você precisa remover o malware do seu projeto e encontrar uma alternativa mais segura para a dependência.

### Consultorias revisadas por {% data variables.product.company_short %}

As consultorias revisadas por {% data variables.product.company_short %} são vulnerabilidades de segurança ou malware que foram mapeados para pacotes nos ecossistemas que suportamos. Analisamos cuidadosamente cada consultoria com relação à validade e nos asseguramos de que elas tenham uma descrição completa e contenham tanto o ecossistema como as informações sobre pacotes.

Geralmente, nós nomeamos nossos ecossistemas compatíveis após o registro do pacote associado à linguagem de programação de software. Nós revisamos as consultorias se eças não forem para uma vulnerabilidade em um pacote que vem de um registro compatível.

- Compositor (registro: https://packagist.org/)
- Erlang (registro: https://hex.pm/)
- Go (registry: https://pkg.go.dev/)
- Maven (registry: https://repo1.maven.org/maven2/org/)
- npm (registry: https://www.npmjs.com/)
- NuGet (registry: https://www.nuget.org/)
- pip (registry: https://pypi.org/)
- RubyGems (registry: https://rubygems.org/)
- Rust (registry: https://crates.io/)

Se você tem uma sugestão para um novo ecossistema com o qual devemos ter compatibilidade, abra um problema de [](https://github.com/github/advisory-database/issues) para discussão.

Se você habilitar {% data variables.product.prodname_dependabot_alerts %} para seus repositórios, você será notificado automaticamente quando uma nova consultoria revisada por {% data variables.product.company_short %} relatar uma vulnerabilidade ou malware de um pacote de que você depende. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Consultorias não revisadas

As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional.

{% data variables.product.prodname_dependabot %} não cria {% data variables.product.prodname_dependabot_alerts %} para consultorias não revisadas, pois esse tipo de consultoria não é verificado com relação à validade ou integralidade.

## Sobre informações em consultorias de segurança

Cada consultoria de segurança contém informações sobre a vulnerabilidade ou malware, que pode incluir a descrição, gravidade, pacote afetado. ecossistema de pacote, versões afetadas e versões de patch, impacto e informações opcionais como, por exemplo, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, consulte a "[Base de Dados de Vulnerabilidade Nacional](https://nvd.nist.gov/)" do Instituto Nacional de Padrões e Tecnologia.

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
3. Clique em qualquer consultoria para visualizar as informações. Por padrão, você verá consultorias revisadas por {% data variables.product.company_short %} para vulnerabilidades de segurança. Para mostrar as consultorias de malware, use `type:malware` na barra de pesquisa.


{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. Por padrão, as consultas retornarão consultorias revisadas por {% data variables.product.company_short %} para vulnerabilidades de segurança, a menos que você especifique `type:malware`. Para obter mais informações, consulte "[ evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## Editando uma consultoria em {% data variables.product.prodname_advisory_database %}
Você pode sugerir melhorias para qualquer consultoria em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, consulte "[Editando consultorias de segurança em {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)."

## Pesquisar em {% data variables.product.prodname_advisory_database %}

Você pode procurar no banco de dados e usar qualificadores para limitar sua busca. Por exemplo, você pode procurar consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca em particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualifier             | Exemplo                                                                                                                                                                                       |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type:reviewed`       | [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará as consultorias revisadas por {% data variables.product.company_short %} para vulerabilidades de segurança. |
| `type:malware`        | [**tipo:malware**](https://github.com/advisories?query=type%3Amalware) mostrará as consultorias revisadas por {% data variables.product.company_short %} para malware.                        |
| `type:unreviewed`     | [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) mostrará as consultorias não revisadas.                                                                          |
| `GHSA-ID`             | [**GHSA-49wp-qq6x-g2rf**](https://github.com/advisories?query=GHSA-49wp-qq6x-g2rf) mostrará a consultoria com o ID de {% data variables.product.prodname_advisory_database %}.              |
| `CVE-ID`              | [**CVE-2020-28482**](https://github.com/advisories?query=CVE-2020-28482) mostrará a consultoria com este ID de CVE.                                                                           |
| `ecosystem:ECOSYSTEM` | [**ecosystem:npm**](https://github.com/advisories?utf8=%E2%9C%93&query=ecosystem%3Anpm) mostrará apenas as consultorias que afetam os pacotes NPM.                                            |
| `severity:LEVEL`      | [**severity:high**](https://github.com/advisories?utf8=%E2%9C%93&query=severity%3Ahigh) mostrará apenas as consultorias com um alto nível de gravidade.                                       |
| `affects:LIBRARY`     | [**affects:lodash**](https://github.com/advisories?utf8=%E2%9C%93&query=affects%3Alodash) mostrará apenas as consultorias que afetam a biblioteca de lodash.                                  |
| `cwe:ID`              | [**cwe:352**](https://github.com/advisories?query=cwe%3A352) mostrará apenas as consultorias com este número de CWE.                                                                          |
| `credit:USERNAME`     | [**credit:octocat**](https://github.com/advisories?query=credit%3Aoctocat) mostrará apenas as consultorias creditadas na conta de usuário "octocat".                                          |
| `sort:created-asc`    | [**sort:created-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-asc) classificará os resultados, mostrando as consultorias mais antigas primeiro.                    |
| `sort:created-desc`   | [**sort:created-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Acreated-desc) classificará os resultados mostrando as consultorias mais novas primeiro.                     |
| `sort:updated-asc`    | [**sort:updated-asc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-asc) classificará os resultados, mostrando os menos atualizados primeiro.                            |
| `sort:updated-desc`   | [**sort:updated-desc**](https://github.com/advisories?utf8=%E2%9C%93&query=sort%3Aupdated-desc) classificará os resultados, mostrando os mais atualizados primeiro.                           |
| `is:withdrawn`        | [**is:withdrawn**](https://github.com/advisories?utf8=%E2%9C%93&query=is%3Awithdrawn) mostrará apenas as consultorias que foram retiradas.                                                    |
| `created:YYYY-MM-DD`  | [**created:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=created%3A2021-01-13) mostrará apenas as consultorias criadas nessa data.                                         |
| `updated:YYYY-MM-DD`  | [**updated:2021-01-13**](https://github.com/advisories?utf8=%E2%9C%93&query=updated%3A2021-01-13) mostrará somente as consultorias atualizadas nesta data.                                    |

## Visualizar seus repositórios vulneráveis

Para qualquer consultoria revisada por {% data variables.product.company_short %} no {% data variables.product.prodname_advisory_database %}, você pode ver qual dos seus repositórios são afetados por essa vulnerabilidade de segurança ou malwware. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, consulte "[Sobre {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navegue até https://github.com/advisories.
2. Clique em uma consultoria.
3. Na parte superior da página da consultoria, clique em **Alertas do dependabot**. ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário). ![Barra de pesquisa e menus suspensos para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para mais detalhes sobre a vulnerabilidade e para aconselhamento sobre como corrigir o repositório vulnerável clique no nome do repositório.

## Leia mais

- [Definição de "vulnerabilidade"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) da MITRE
