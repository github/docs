---
title: 'Fase 2: Preparo para a habilitação em escala'
intro: 'Nesta fase, você prepara os desenvolvedores e coleta dados sobre os repositórios para garantir que suas equipes estejam prontas e que você tenha tudo o que precisa para programas piloto e a distribuição do {% data variables.product.prodname_code_scanning %} e do {% data variables.product.prodname_secret_scanning %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparation
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 79368897c125ff23541520a253a34a2aae8c7c27
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148108241'
---
{% note %}

Este artigo faz parte de uma série sobre a adoção do {% data variables.product.prodname_GH_advanced_security %} em escala. Para ver o artigo anterior desta série, confira "[Fase 1: Alinhar a estratégia de distribuição e as metas](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals)".

{% endnote %}

## Preparo para a habilitação do {% data variables.product.prodname_code_scanning %}
 
{% data reusables.code-scanning.about-code-scanning %} Para saber mais, confira "[Sobre o exame de códigos](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

A distribuição do {% data variables.product.prodname_code_scanning %} em centenas de repositórios pode ser complexa, especialmente quando feita de maneira ineficiente. Siga estas etapas para garantir uma distribuição eficiente e bem-sucedida. Como parte da preparação, você trabalhará com suas equipes, usará a automação para coletar dados sobre os repositórios e habilitará o {% data variables.product.prodname_code_scanning %}. 

### Preparo das equipes para o {% data variables.product.prodname_code_scanning %}

Primeiro, prepare suas equipes para usar o {% data variables.product.prodname_code_scanning %}. Quanto mais equipes usarem o {% data variables.product.prodname_code_scanning %}, mais dados você terá para conduzir planos de correção e monitorar o progresso da distribuição. Durante essa fase, concentre-se em utilizar APIs e executar eventos de habilitação internos.

Seu foco principal deve ser o preparo do maior número possível de equipes para o uso do {% data variables.product.prodname_code_scanning %}. Também é possível incentivar as equipes a fazer as correções adequadas, mas recomendamos priorizar a habilitação e o uso do {% data variables.product.prodname_code_scanning %}, em vez da correção de problemas, durante essa fase.
  
### Coleta de informações sobre os repositórios

É possível coletar informações programaticamente sobre as diferentes linguagens de programação usadas nos repositórios e usar esses dados para habilitar o {% data variables.product.prodname_code_scanning %} em todos os repositórios que usam a mesma linguagem por meio da API GraphQL do {% data variables.product.product_name %}.

{% note %}

**Nota:** é possível usar nossa ferramenta disponível publicamente para coletar esses dados sem executar manualmente as consultas GraphQL descritas neste artigo. Para saber mais, confira o repositório "[ghas-enablement tool](https://github.com/NickLiffen/ghas-enablement)".

{% endnote %}

Para coletar informações de repositórios pertencentes a várias organizações em sua empresa, use a consulta abaixo a fim de obter os nomes das organizações e, em seguida, inclua-os na consulta de repositório. Substitua OCTO-ENTERPRISE pelo nome da sua empresa.

```graphql
query {
  enterprise(slug: "OCTO-ENTERPRISE") {
    organizations(first: 100) {
      totalCount
      nodes {
        name
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Para identificar quais repositórios usam quais linguagens, agrupe-os por linguagem no nível da organização. É possível modificar a consulta de exemplo do GraphQL abaixo, substituindo OCTO-ORG pelo nome da organização.

```graphql
query {
  organization(login: "OCTO-ORG") { 
    repositories(first: 100) {
      totalCount
      nodes {
        nameWithOwner
        languages(first: 100) {
          totalCount
          nodes {
            name
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
```

Para saber como executar consultas do GraphQL, confira "[Como formar chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

Em seguida, converta os dados da consulta do GraphQL em um formato legível, como uma tabela.

| Idioma                | Número de repositórios | Nome dos repositórios                           |
|-------------------------|-----------------|-----------------------------------------|
| JavaScript (TypeScript) | 4212            | org/repo<br /> org/repo |
| Python                  | 2012            | org/repo<br /> org/repo |
| Go                      | 983             | org/repo<br /> org/repo |
| Java                    | 412             | org/repo<br /> org/repo |
| Swift                   | 111             | org/repo<br /> org/repo |
| Kotlin                  | 82              | org/repo<br /> org/repo |
| C                       | 12              | org/repo<br /> org/repo |

É possível filtrar na tabela as linguagens que não têm suporte atualmente no {% data variables.product.prodname_GH_advanced_security %}.

Se você tiver repositórios com várias linguagens, formate os resultados do GraphQL de acordo com a tabela abaixo. Filtre as linguagens sem suporte, mas mantenha todos os repositórios com pelo menos uma linguagem com suporte. Será possível habilitar o {% data variables.product.prodname_code_scanning %} nesses repositórios e todas as linguagens com suporte serão examinadas.

| Linguagens            | Número de repositórios | Nome dos repositórios                            |
|------------------------|-----------------|------------------------------------------|
| JavaScript/Python/Go   | 16              | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12              | org/repo <br /> org/repo |

Ao compreender quais repositórios usam quais linguagens, é possível identificar aqueles que são candidatos para programas piloto na fase 3 e preparar-se para habilitar o {% data variables.product.prodname_code_scanning %} em todos os repositórios, uma linguagem por vez, na fase 5.

{% ifversion ghes %}

### Habilitação do {% data variables.product.prodname_code_scanning %} para o seu dispositivo

Antes de prosseguir com os programas piloto e com a distribuição do {% data variables.product.prodname_code_scanning %} em toda a empresa, primeiro você precisa habilitar o {% data variables.product.prodname_code_scanning %} para o seu dispositivo. Para saber mais, confira "[Como configurar o exame de códigos para o seu dispositivo](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)".

{% endif %}

## Preparo para a habilitação do {% data variables.product.prodname_secret_scanning %}

Se um projeto se comunica com um serviço externo, ele pode usar um token ou uma chave privada para a autenticação. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. O {% data variables.product.prodname_secret_scanning_caps %} examinará todo o histórico do Git em todos os branches presentes nos repositórios do {% data variables.product.prodname_dotcom %} em busca de segredos e alertará você{% ifversion secret-scanning-push-protection %} ou bloqueará o envio por push que contém o segredo{% endif %}. Para obter mais informações, confira "[Sobre a verificação de segredos](/code-security/secret-scanning/about-secret-scanning)".

### Considerações para a habilitação do {% data variables.product.prodname_secret_scanning %}

A funcionalidade {% data variables.product.prodname_secret_scanning %} do {% data variables.product.product_name %} é ligeiramente diferente do {% data variables.product.prodname_code_scanning %}, pois não requer nenhuma configuração específica por linguagem de programação ou por repositório e exige menos configuração geral para o início do uso. Isso significa que a habilitação do {% data variables.product.prodname_secret_scanning %} no nível organizacional pode ser fácil, mas clicar em **Habilitar tudo** no nível da organização e marcar a opção **Habilitar o {% data variables.product.prodname_secret_scanning %} automaticamente em cada novo repositório** tem alguns efeitos subjacentes que devem ser considerados:

- **Consumo de licença**  
  A habilitação do {% data variables.product.prodname_secret_scanning %} em todos os repositórios consumirá todas as suas licenças, mesmo que ninguém esteja usando o exame de códigos. Isso não é um problema, a menos que você planeje aumentar o número de desenvolvedores ativos em sua organização. Se o número de desenvolvedores ativos aumentar nos próximos meses, você excederá o limite de licença e não conseguirá usar o {% data variables.product.prodname_GH_advanced_security %} em repositórios recém-criados.
- **Alto volume inicial de segredos detectados**  
  Se você estiver habilitando o {% data variables.product.prodname_secret_scanning %} em uma organização grande, encontrará um alto número de segredos. Às vezes, as organizações podem se chocar com isso e disparar os alarmes. Se você deseja ativar o {% data variables.product.prodname_secret_scanning %} em todos os repositórios ao mesmo tempo, planeje sua resposta aos vários alertas que serão gerados em toda a organização.

O {% data variables.product.prodname_secret_scanning_caps %} pode ser habilitado para repositórios individuais. Para obter mais informações, confira "[Como configurar a {% data variables.product.prodname_secret_scanning %} para seus repositórios](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)". O {% data variables.product.prodname_secret_scanning_caps %} também pode ser habilitado para todos os repositórios em sua organização, conforme descrito acima. Para saber mais sobre a habilitação para todos os repositórios, confira "[Como gerenciar as configurações de segurança e de análise da sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

### Padrões personalizados para o {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %} {% note %}

**Observação:** atualmente, os padrões personalizados da {% data variables.product.prodname_secret_scanning %} estão em versão beta e sujeitos a alterações.

{% endnote %} {% endif %}

O {% data variables.product.prodname_secret_scanning_caps %} detecta um grande número de padrões predefinidos, mas também pode ser configurado para detectar padrões personalizados, como formatos de segredos exclusivos de sua infraestrutura ou usados por integradores que o {% data variables.product.prodname_secret_scanning %} do {% data variables.product.product_name %} não detecta atualmente. Saiba mais sobre os segredos com suporte para os padrões dos parceiros em "[Padrões de exame de segredos](/code-security/secret-scanning/secret-scanning-patterns)". 

Ao auditar os repositórios e falar com as equipes de segurança e de desenvolvimento, crie uma lista dos tipos de segredos que você usará posteriormente para configurar padrões personalizados para o {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, confira "[Como definir padrões personalizados para a verificação de segredos](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning)".


{% note %}

Para ver o próximo artigo desta série, confira "[Fase 3: Programas piloto](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)".

{% endnote %}
