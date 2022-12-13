---
title: Sobre o banco de dados de avisos do GitHub
intro: 'O {% data variables.product.prodname_advisory_database %} contém uma lista de vulnerabilidades de segurança e conhecidas {% ifversion GH-advisory-db-supports-malware %} e malwares, {% endif %}agrupados em duas categorias: avisos examinados pelo {% data variables.product.company_short %} e avisos não examinados.'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Security advisories
  - Alerts
  - Vulnerabilities
  - CVEs
ms.openlocfilehash: 601fdd42050f112162898a255811c76aa23c6970
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159074'
---
## Sobre o {% data variables.product.prodname_advisory_database %}

{% data reusables.repositories.tracks-vulnerabilities %}

Os avisos de segurança são publicados como arquivos JSON no formato OSV (Vulnerabilidade de código aberto). Para obter mais informações sobre o formato OSV, confira "[Formato de vulnerabilidade de código aberto](https://ossf.github.io/osv-schema/)".

## Sobre tipos de avisos de segurança

{% data reusables.advisory-database.beta-malware-advisories %}

Cada aviso no {% data variables.product.prodname_advisory_database %} é sobre uma vulnerabilidade em projetos de código aberto {% ifversion GH-advisory-db-supports-malware %} ou sobre softwares de código aberto mal-intencionados{% endif %}. 

{% data reusables.repositories.a-vulnerability-is %} As vulnerabilidades no código geralmente são introduzidas por acidente e corrigidas logo que são descobertas. Você deve atualizar o código para usar a versão fixa da dependência assim que ela estiver disponível.

{% ifversion GH-advisory-db-supports-malware %}

Por outro lado, um software mal-intencionado ou um malware é um código projetado com a intenção de para executar funções indesejadas ou prejudiciais. O malware pode ter como alvo hardware, software, dados confidenciais ou usuários de qualquer aplicativo que o use. Você precisa remover o malware do projeto e encontrar uma substituição alternativa e mais segura para a dependência.

{% endif %}

### Avisos examinados pelo {% data variables.product.company_short %}

Os avisos examinados pelo {% data variables.product.company_short %} são vulnerabilidades de segurança{% ifversion GH-advisory-db-supports-malware %} ou malwares{% endif %} que foram mapeados para pacotes nos ecossistemas que contam com nosso suporte. Examinamos cuidadosamente a validade de cada aviso e garantimos que eles tenham uma descrição completa e contenham informações de ecossistema e pacote.

Geralmente, nomeamos os ecossistemas com suporte de acordo com o registro do pacote associado da linguagem de programação de software. Examinamos os avisos quando eles são de uma vulnerabilidade em um pacote proveniente de um registro com suporte.

- Composer (Registro: https://packagist.org/){% ifversion GH-advisory-db-erlang-support %}
- Erlang (Registro: https://hex.pm/){% endif %}
- Go (registro: https://pkg.go.dev/) {%- ifversion fpt or ghec or ghes > 3.6 or ghae > 3.6 %}
- GitHub Actions (https://github.com/marketplace?type=actions/) {% endif %}
- Maven (registro: https://repo.maven.apache.org/maven2)
- npm (registro: https://www.npmjs.com/)
- NuGet (registro: https://www.nuget.org/)
- pip (registro: https://pypi.org/){% ifversion dependency-graph-dart-support %}
- pub (registro: https://pub.dev/packages/registry){% endif %}
- RubyGems (registro: https://rubygems.org/)
- Rust (registro: https://crates.io/)

Se você tiver uma sugestão para um novo ecossistema que precisa de suporte, abra um [problema](https://github.com/github/advisory-database/issues) para discussão.

Se você habilitar o {% data variables.product.prodname_dependabot_alerts %} para os repositórios, você será notificado automaticamente quando um novo aviso examinado pelo {% data variables.product.company_short %} relatar uma vulnerabilidade {% ifversion GH-advisory-db-supports-malware %}ou um malware{% endif %} em pacotes dos quais você depende. Para obter mais informações, confira "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".

### Avisos não examinados

As consultorias não revisadas são vulnerabilidades de segurança que publicamos automaticamente no {% data variables.product.prodname_advisory_database %}, diretamente do feed de Dados de Vulnerabilidade Nacional. 

{% data variables.product.prodname_dependabot %} não cria {% data variables.product.prodname_dependabot_alerts %} para consultorias não revisadas, pois esse tipo de consultoria não é verificado com relação à validade ou integralidade.

## Sobre informações em avisos de segurança

Cada aviso de segurança contém informações sobre a vulnerabilidade{% ifversion GH-advisory-db-supports-malware %} ou malware,{% endif %}, o que pode incluir a descrição, a severidade, o pacote afetado, o ecossistema do pacote, as versões afetadas e as versões de patch, o impacto e informações opcionais como, referências, soluções alternativas e créditos. Além disso, a consultoria da lista de Bancos de Vulnerabilidade Nacional contêm um link para o registro CVE, onde você pode ler mais detalhes sobre a vulnerabilidade, suas pontuações CVSS e seu nível de gravidade qualitativa. Para obter mais informações, confira o "[Banco de Dados de Vulnerabilidades Nacionais](https://nvd.nist.gov/)" (National Vulnerability Database) do National Institute of Standards and Technology.

O nível de severidade é um dos quatro níveis possíveis definidos no "[CVSS (Sistema de Pontuação de Vulnerabilidade Comum), Seção 5](https://www.first.org/cvss/specification-document)".
- Baixo
- Médio/Moderado
- Alta
- Crítico

O {% data variables.product.prodname_advisory_database %} usa os níveis de CVSS descritos acima. Se {% data variables.product.company_short %} obtiver um CVE, o {% data variables.product.prodname_advisory_database %} usará a versão 3.1 do CVSS. Se o CVE for importado, o {% data variables.product.prodname_advisory_database %} será compatível com as versões 3.0 e 3.1 do CVSS.

{% data reusables.repositories.github-security-lab %}

## Leitura adicional

- "[Sobre os {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)"
- [Definição de "vulnerabilidade"](https://www.cve.org/ResourcesSupport/Glossary#vulnerability) do MITRE
