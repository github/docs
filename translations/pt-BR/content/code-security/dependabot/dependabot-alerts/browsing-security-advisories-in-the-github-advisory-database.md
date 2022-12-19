---
title: Como procurar avisos de segurança no GitHub Advisory Database
intro: Você pode procurar avisos no {% data variables.product.prodname_advisory_database %} sobre riscos de segurança em projetos código aberto hospedados no {% data variables.product.company_short %}.
shortTitle: Browse Advisory Database
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
ms.openlocfilehash: 5a2612b6d2899aa4c730b76a2ac898254024563a
ms.sourcegitcommit: d186fc3b5766172b09b4e7370ae888c2523ac24a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 08/06/2022
ms.locfileid: "147508043"
---
<!--Marketing-LINK: From /features/security/software-supply-chain page "Browsing security vulnerabilities in the GitHub Advisory Database".-->

## <a name="about-the--data-variablesproductprodname_advisory_database-"></a>Sobre o {% data variables.product.prodname_advisory_database %}

O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades de segurança e conhecidas {% ifversion GH-advisory-db-supports-malware %} e malwares, {% endif %}agrupados em duas categorias: avisos examinados pelo {% data variables.product.company_short %} e avisos não examinados.

{% data reusables.repositories.tracks-vulnerabilities %}

## <a name="about-types-of-security-advisories"></a>Sobre tipos de avisos de segurança

{% data reusables.advisory-database.beta-malware-advisories %}

Cada aviso no {% data variables.product.prodname_advisory_database %} é sobre uma vulnerabilidade em projetos de código aberto {% ifversion GH-advisory-db-supports-malware %} ou sobre softwares de código aberto mal-intencionados{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} As vulnerabilidades no código geralmente são introduzidas por acidente e corrigidas logo que são descobertas. Você deve atualizar o código para usar a versão fixa da dependência assim que ela estiver disponível.

{% ifversion GH-advisory-db-supports-malware %}

Por outro lado, um software mal-intencionado ou um malware é um código projetado com a intenção de para executar funções indesejadas ou prejudiciais. O malware pode ter como alvo hardware, software, dados confidenciais ou usuários de qualquer aplicativo que o use. Você precisa remover o malware do projeto e encontrar uma substituição alternativa e mais segura para a dependência.

{% endif %}

### <a name="-data-variablesproductcompany_short--reviewed-advisories"></a>Avisos examinados pelo {% data variables.product.company_short %}

Os avisos examinados pelo {% data variables.product.company_short %} são vulnerabilidades de segurança{% ifversion GH-advisory-db-supports-malware %} ou malwares{% endif %} que foram mapeados para pacotes nos ecossistemas que contam com nosso suporte. Examinamos cuidadosamente a validade de cada aviso e garantimos que eles tenham uma descrição completa e contenham informações de ecossistema e pacote.

Geralmente, nomeamos os ecossistemas com suporte de acordo com o registro do pacote associado da linguagem de programação de software. Examinamos os avisos quando eles são de uma vulnerabilidade em um pacote proveniente de um registro com suporte.

- Composer (Registro: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (Registro: https://hex.pm/){% endif %}
- Go (Registro: https://pkg.go.dev/) {% ifversion fpt or ghec or ghes > 3.6 or ghae-issue-7508 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registro: https://repo1.maven.org/maven2/org/)
- npm (registro: https://www.npmjs.com/)
- NuGet (registro: https://www.nuget.org/)
- pip (registro: https://pypi.org/)
- RubyGems (registro: https://rubygems.org/)
- Rust (registro: https://crates.io/)

Se você tiver uma sugestão para um novo ecossistema que precisa de suporte, abra um [problema](https://github.com/github/advisory-database/issues) para discussão.

Se você habilitar o {% data variables.product.prodname_dependabot_alerts %} para os repositórios, você será notificado automaticamente quando um novo aviso examinado pelo {% data variables.product.company_short %} relatar uma vulnerabilidade {% ifversion GH-advisory-db-supports-malware %}ou um malware{% endif %} em pacotes dos quais você depende. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### <a name="unreviewed-advisories"></a>Avisos não examinados

As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional. 

{% data variables.product.prodname_dependabot %} não cria {% data variables.product.prodname_dependabot_alerts %} para consultorias não revisadas, pois esse tipo de consultoria não é verificado com relação à validade ou integralidade.

## <a name="about-information-in-security-advisories"></a>Sobre informações em avisos de segurança

Cada aviso de segurança contém informações sobre a vulnerabilidade{% ifversion GH-advisory-db-supports-malware %} ou malware,{% endif %}, o que pode incluir a descrição, a severidade, o pacote afetado, o ecossistema do pacote, as versões afetadas e as versões de patch, o impacto e informações opcionais como, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, confira o "[Banco de Dados de Vulnerabilidades Nacionais](https://nvd.nist.gov/)" (National Vulnerability Database) do National Institute of Standards and Technology.

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
3. Clique em um aviso para examinar as informações. Por padrão, você verá os avisos examinados pelo {% data variables.product.company_short %} sobre vulnerabilidades de segurança. {% ifversion GH-advisory-db-supports-malware %}Para mostrar avisos de malware, use `type:malware` na barra de pesquisa.{% endif %}


{% note %}

O banco de dados também pode ser acessado usando a API do GraphQL. {% ifversion GH-advisory-db-supports-malware %}Por padrão, as consultas retornarão avisos examinados por {% data variables.product.company_short %} para vulnerabilidades de segurança, a menos que você especifique `type:malware`.{% endif %} Para obter mais informações, confira o "[evento de webhook `security_advisory`](/webhooks/event-payloads/#security_advisory)."

{% endnote %}

## <a name="editing-an-advisory-in-the--data-variablesproductprodname_advisory_database-"></a>Editando uma consultoria em {% data variables.product.prodname_advisory_database %}
Você pode sugerir melhorias para qualquer consultoria em {% data variables.product.prodname_advisory_database %}. Para obter mais informações, confira "[Como editar avisos de segurança no {% data variables.product.prodname_advisory_database %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/editing-security-advisories-in-the-github-advisory-database)".

## <a name="searching-the--data-variablesproductprodname_advisory_database-"></a>Pesquisar em {% data variables.product.prodname_advisory_database %}

Você pode procurar no banco de dados e usar qualificadores para limitar sua busca. Por exemplo, você pode procurar consultorias criadas em uma determinada data, em um ecossistema específico ou em uma biblioteca em particular.

{% data reusables.time_date.date_format %} {% data reusables.time_date.time_format %}

{% data reusables.search.date_gt_lt %}

| Qualificador  | Exemplo |
| ------------- | ------------- |
| `type:reviewed`| [**type:reviewed**](https://github.com/advisories?query=type%3Areviewed) mostrará os avisos examinados pelo {% data variables.product.company_short %} sobre vulnerabilidades de segurança. |
{% ifversion GH-advisory-db-supports-malware %}| `type:malware` | [**type:reviewed**](https://github.com/advisories?query=type%3Amalware) mostrará os avisos examinados pelo {% data variables.product.company_short %} sobre malware. |
{% endif %}| `type:unreviewed`| [**type:unreviewed**](https://github.com/advisories?query=type%3Aunreviewed) mostrará os avisos não verificados. |
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

Para qualquer aviso examinado pelo {% data variables.product.company_short %} no {% data variables.product.prodname_advisory_database %}, você pode ver qual dos repositórios são afetados por essa vulnerabilidade de segurança{% ifversion GH-advisory-db-supports-malware %} ou esse malware{% endif %}. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navegue até https://github.com/advisories.
2. Clique em uma consultoria.
3. Na parte superior da página do aviso, clique em **Alertas do Dependabot**.
   ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário).
   ![Barra de pesquisa e menus suspensos usados para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obter mais detalhes sobre o aviso e para recomendações de como corrigir o repositório vulnerável, clique no nome do repositório.

{% ifversion security-advisories-ghes-ghae %}
## <a name="accessing-the-local-advisory-database-on--data-variablesproductproduct_location-"></a>Como acessar o banco de dados de aviso local em {% data variables.product.product_location %}

Se o administrador do site tiver habilitado {% data variables.product.prodname_github_connect %} para {% data variables.product.product_location %}, você também poderá procurar avisos examinados localmente. Para obter mais informações, confira "[Sobre o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/about-github-connect)".

Você pode usar seu banco de dados de aviso local para verificar se uma vulnerabilidade de segurança específica está incluída e, portanto, se você receberia alertas para dependências vulneráveis. Você também pode exibir repositórios vulneráveis. 

1. Navegue até `https://HOSTNAME/advisories`.
2. Opcionalmente, para filtrar a lista, use qualquer um dos menus suspensos.
  ![Filtros suspensos](/assets/images/help/security/advisory-database-dropdown-filters.png) {% note %}

   **Observação:** apenas avisos examinados serão listados. Os avisos não examinados podem ser exibidos em {% data variables.product.prodname_advisory_database %} em {% data variables.product.prodname_dotcom_the_website %}. Para obter mais informações, confira "[Como acessar um aviso no Banco de Dados Consultivo do GitHub](#accessing-an-advisory-in-the-github-advisory-database)". 

   {% endnote %}
3. Clique em um aviso para exibir detalhes. {% ifversion GH-advisory-db-supports-malware %} Por padrão, você verá avisos examinados por {% data variables.product.company_short %} para vulnerabilidades de segurança. Para mostrar avisos de malware, use `type:malware` na barra de pesquisa.{% endif %}

Você também pode sugerir aprimoramentos em qualquer aviso diretamente do banco de dados de aviso local. Para obter mais informações, confira "[Como editar avisos de {% data variables.product.product_location %}](/code-security/dependabot/dependabot-alerts/editing-security-advisories-in-the-github-advisory-database#editing-advisories-from-your-github-enterprise-server-instance)".

### <a name="viewing-vulnerable-repositories-for--data-variablesproductproduct_location-"></a>Como exibir repositórios vulneráveis para {% data variables.product.product_location %}

{% data reusables.repositories.enable-security-alerts %}

No banco de dados de aviso local, você pode ver quais repositórios são afetados por cada vulnerabilidade de segurança{% ifversion GH-advisory-db-supports-malware %} ou malware{% endif %}. Para ver um repositório vulnerável, você deve ter acesso a {% data variables.product.prodname_dependabot_alerts %} para esse repositório. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#access-to-dependabot-alerts)".

1. Navegue até `https://HOSTNAME/advisories`.
2. Clique em uma consultoria.
3. Na parte superior da página do aviso, clique em **Alertas do Dependabot**.
   ![Alertas do Dependabot](/assets/images/help/security/advisory-database-dependabot-alerts.png)
4. Opcionalmente, para filtrar a lista, use a barra de pesquisa ou os menus suspensos. O menu suspenso "Organização" permite filtrar {% data variables.product.prodname_dependabot_alerts %} por proprietário (organização ou usuário).
   ![Barra de pesquisa e menus suspensos usados para filtrar alertas](/assets/images/help/security/advisory-database-dependabot-alerts-filters.png)
5. Para obter mais detalhes sobre o aviso e para recomendações de como corrigir o repositório vulnerável, clique no nome do repositório.

{% endif %}

## <a name="further-reading"></a>Leitura adicional

- [Definição de "vulnerabilidade"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) do MITRE
