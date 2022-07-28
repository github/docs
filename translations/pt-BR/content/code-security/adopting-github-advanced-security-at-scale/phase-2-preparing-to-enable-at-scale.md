---
title: 'Fase 2: Preparando para habilitar em escala'
intro: 'Nesta fase você vai preparar os desenvolvedores e coletar dados sobre seus repositórios para garantir que suas equipes estejam prontas e você tem tudo de que precisa para programas-piloto e para implementar {% data variables.product.prodname_code_scanning %} e {% data variables.product.prodname_secret_scanning %}.'
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Advanced Security
shortTitle: 2. Preparação
miniTocMaxHeadingLevel: 3
---

{% note %}

Este artigo faz parte de uma série sobre adoção de {% data variables.product.prodname_GH_advanced_security %} em escala. Para o artigo anterior dessa série, consulte "[Fase 1: Alinhe sua estratégia e metas de implementação](/code-security/adopting-github-advanced-security-at-scale/phase-1-align-on-your-rollout-strategy-and-goals). "

{% endnote %}

## Preparando-se para habilitar {% data variables.product.prodname_code_scanning %}

{% data reusables.code-scanning.about-code-scanning %} Para obter mais informações, consulte "[Sobre a digitalização de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning)".

A implementação de {% data variables.product.prodname_code_scanning %} em centenas de repositórios pode ser difícil, especialmente quando feita de forma ineficiente. Seguir estes passos garantirá que a sua implementação seja eficiente e bem-sucedida. Como parte da sua preparação, você irá trabalhar com suas equipes, usar automação para coletar dados sobre seus repositórios e habilitar {% data variables.product.prodname_code_scanning %}.

### Preparando as equipes para {% data variables.product.prodname_code_scanning %}

Primeiro, prepare suas equipes para usar {% data variables.product.prodname_code_scanning %}. Quanto mais equipes usarem {% data variables.product.prodname_code_scanning %}, mais dados você terá para conduzir planos de correção e monitorar o progresso na sua implementação. Durante essa etapa, focalize em usar as APIs e executar eventos de habilitação internos.

Seu foco principal deve ser a preparação do maior número possível de equipes para usar {% data variables.product.prodname_code_scanning %}. Você também pode incentivar as equipes a remediar adequadamente, mas recomendamos priorizar a capacitação e o uso de {% data variables.product.prodname_code_scanning %} sobre a correção de problemas durante esta fase.

### Coletando informações sobre seus repositórios

Você pode reunir programaticamente informações sobre as diferentes linguagens de programação usadas nos repositórios e usar esses dados para habilitar {% data variables.product.prodname_code_scanning %} em todos os repositórios que usam a mesma linguagem, usando API do GraphQL do {% data variables.product.product_name %}.

{% note %}

**Observação:** Para coletar esses dados sem executar manualmente as consultas do GraphQL descritas neste artigo, você pode usar nossa ferramenta disponível publicamente. Para obter mais informações, consulte o repositório "[ghas-enablement Tool](https://github.com/NickLiffen/ghas-enablement)".

{% endnote %}

Se você quiser coletar informações de repositórios pertencentes a várias organizações da sua empresa, você poderá usar a consulta abaixo para obter os nomes das suas organizações e depois colocá-los na consulta do repositório. Substitua OCTO-ENTERPRISE pelo nome da sua empresa.

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

É possível identificar quais repositórios usam quais linguagens compilando repositórios por linguagem no nível da organização. Você pode modificar a consulta do GraphQL de amostra abaixo, substituindo OCTO-ORG pelo nome da organização.

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

Para obter mais informações sobre a execução de consultas do GraphQL, consulte "[Criando chamadas com o GraphQL](/graphql/guides/forming-calls-with-graphql)".

Em seguida, converta os dados da consulta do GraphQL em um formato legível, como uma tabela.

| Linguagem               | Número de repositórios | Nome dos repositórios         |
| ----------------------- | ---------------------- | ----------------------------- |
| JavaScript (TypeScript) | 4212                   | org/repo<br /> org/repo |
| Python                  | 2012                   | org/repo<br /> org/repo |
| Go                      | 983                    | org/repo<br /> org/repo |
| Java                    | 412                    | org/repo<br /> org/repo |
| Swift                   | 111                    | org/repo<br /> org/repo |
| Kotlin                  | 82                     | org/repo<br /> org/repo |
| C                       | 12                     | org/repo<br /> org/repo |

Você pode filtrar as linguagens que atualmente não são compatíveis com {% data variables.product.prodname_GH_advanced_security %} a partir desta tabela.

Se você tiver repositórios com várias linguagens, você poderá formatar os resultados do GraphQL, conforme mostrado na tabela abaixo. Filtre as linguagens não compatíveis, mas mantenha todos os repositórios com pelo menos uma linguagem compatível. Você pode habilitar {% data variables.product.prodname_code_scanning %} nesses repositórios, e todas as linguagens compatíveis serão verificadas.

| Linguagem(s)           | Número de repositórios | Nome dos repositórios          |
| ---------------------- | ---------------------- | ------------------------------ |
| JavaScript/Python/Go   | 16                     | org/repo <br /> org/repo |
| Rust/TypeScript/Python | 12                     | org/repo <br /> org/repo |

Uma compreensão de quais repositórios estão usando quais çinguagens ajudará você a identificar repositórios candidatos a programas piloto na fase 3 e irá preparar você para habilitar {% data variables.product.prodname_code_scanning %} em todos os repositórios, uma linguagem de cada vez, na fase 5.

{% ifversion ghes %}

### Habilitando {% data variables.product.prodname_code_scanning %} para o seu dispositivo

Antes de poder prosseguir com programas-piloto e implementar {% data variables.product.prodname_code_scanning %} em toda a sua empresa, você deve primeiro habilitar {% data variables.product.prodname_code_scanning %} para o seu dispositivo. Para obter mais informações, consulte "[Configurando a digitalização de código para o seu dispositivo](/admin/code-security/managing-github-advanced-security-for-your-enterprise/configuring-code-scanning-for-your-appliance)".

{% endif %}

## Preparando-se para habilitar {% data variables.product.prodname_secret_scanning %}

Se um projeto se comunica com um serviço externo, ele pode usar um token ou chave privada para autenticação. Se você marcar um segredo em um repositório, qualquer pessoa que tenha acesso de leitura ao repositório pode usar o segredo para acessar o serviço externo com seus privilégios. {% data variables.product.prodname_secret_scanning_caps %} irá digitalizar todo o seu histórico do Git em todas as ramificações presentes nos seus repositórios de {% data variables.product.prodname_dotcom %} com relação a segredos e alertar você {% ifversion secret-scanning-push-protection %} ou bloquear o push que contém o{% endif %} segredo. Para obter mais informações, consulte "[Sobre a varredura de segredos](/code-security/secret-scanning/about-secret-scanning)."

### Considerações ao habilitar {% data variables.product.prodname_secret_scanning %}

O recurso de {% data variables.product.product_name %}de {% data variables.product.prodname_secret_scanning %} é um pouco diferente do {% data variables.product.prodname_code_scanning %}, pois não requer nenhuma configuração específica por linguagem de programação ou por repositório e menos configuração geral para dar os primeiros passos. Isso significa que habilitar {% data variables.product.prodname_secret_scanning %} no nível da organização pode ser fácil, mas clicar em **Habilitar tudo** no nível da organização e marcar a opção **Habilitar automaticamente {% data variables.product.prodname_secret_scanning %} para cada novo repositório** tem alguns efeitos a jusante dos quais você deve estar ciente:

- **Consumo de licença**  
  Habilitar {% data variables.product.prodname_secret_scanning %} para todos os repositórios consumirá todas as suas licenças, mesmo que ninguém esteja usando a digitalização do código. Isso é bom, a menos que você planeje aumentar o número de desenvolvedores ativos na sua organização. Se o número de desenvolvedores ativos aumentar nos próximos meses, você poder[a exceder seu limite de licença e, em seguida, não será possível usar {% data variables.product.prodname_GH_advanced_security %} em repositórios recém-criados.
- **Volume alto inicial de segredos detectados**  
  Se você está habilitando {% data variables.product.prodname_secret_scanning %} em uma grande organização, esteja preparado para ver um grande número de segredos encontrados. Às vezes, isto é um choque para as organizações e o alarme é ativado. Se você deseja habilitar o {% data variables.product.prodname_secret_scanning %} em todos os repositórios de uma vez, planeje como você responderá a vários alertas em toda a organização.

{% data variables.product.prodname_secret_scanning_caps %} pode ser habilitado para para repositórios individuais. Para obter mais informações, consulte "[Configurar {% data variables.product.prodname_secret_scanning %} para os seus repositórios](/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories)". {% data variables.product.prodname_secret_scanning_caps %} também pode ser habilitado para todos os repositórios da sua organização, conforme descrito acima. Para obter mais informações sobre como havilitar todos os repositórios, consulte "[Gerenciando as configurações de segurança e análise para sua organização](/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-security-and-analysis-settings-for-your-organization)".

### Padrões personalizados para {% data variables.product.prodname_secret_scanning %}

{% ifversion ghae %}
{% note %}

**Observação:** Os padrões personalizados para {% data variables.product.prodname_secret_scanning %} estão atualmente em fase beta e sujeitos a alterações.

{% endnote %}
{% endif %}

O {% data variables.product.prodname_secret_scanning_caps %} detecta um grande número de padrões, mas também pode ser configurado para detectar padrões personalizados, como formatos secretos exclusivos da sua infraestrutura ou usados pelos integradores que {% data variables.product.product_name %}de {% data variables.product.prodname_secret_scanning %} não detecta atualmente. Para obter mais informações sobre segredos compatíveis com padrões de parceiros, consulte "[Padrões de digitalização de segredos](/code-security/secret-scanning/secret-scanning-patterns)".

Enquanto você audita os seus repositórios e fala com equipes de segurança e desenvolvedores, crie uma lista dos tipos de segredo que você usará mais tarde para configurar padrões personalizados para {% data variables.product.prodname_secret_scanning %}. Para obter mais informações, consulte "[Definindo padrões personalizados para digitalização de segredo](/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning). "


{% note %}

Para o próximo artigo dessa série, consulte "[Fase 3: Programas-piloto](/code-security/adopting-github-advanced-security-at-scale/phase-3-pilot-programs)."

{% endnote %}
