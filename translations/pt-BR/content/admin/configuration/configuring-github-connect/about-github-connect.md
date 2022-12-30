---
title: Sobre o GitHub Connect
intro: '{% data variables.product.prodname_github_connect %} melhora {% data variables.product.product_name %} dando-lhe acesso a funcionalidades e fluxos de trabalho adicionais que dependem do poder de {% data variables.product.prodname_dotcom_the_website %}.'
versions:
  ghes: '*'
  ghae: '*'
type: overview
topics:
  - Enterprise
  - GitHub Connect
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ac4ec1d8b619e56c38013f5ae38d5782b6faec88
ms.sourcegitcommit: 2e1852bcdd690cb66b9b5d69cb056a2bb2b9a6b4
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160813'
---
## Sobre o {% data variables.product.prodname_github_connect %}

O {% data variables.product.prodname_github_connect %} aprimora o {% data variables.product.product_name %}, o que permite que o {% data variables.location.product_location %} se beneficie do poder do {% data variables.product.prodname_dotcom_the_website %} de maneira limitada. Depois de habilitar o {% data variables.product.prodname_github_connect %}, é possível habilitar recursos e fluxos de trabalho adicionais que dependem do {% data variables.product.prodname_dotcom_the_website %}, como o {% data variables.product.prodname_dependabot_alerts %}, para vulnerabilidades de segurança acompanhadas no {% data variables.product.prodname_advisory_database %}.

O {% data variables.product.prodname_github_connect %} não abre o {% data variables.location.product_location %} para a Internet pública. Nenhum dos dados privados da sua empresa está exposto os usuários de {% data variables.product.prodname_dotcom_the_website %}. Em vez disso, {% data variables.product.prodname_github_connect %} transmite apenas os dados limitados necessários para os recursos individuais que você optar por habilitar. A menos que você habilite a sincronização de licença, nenhum dado pessoal será transmitido por {% data variables.product.prodname_github_connect %}. Para obter mais informações sobre os dados que são transmitidos pelo {% data variables.product.prodname_github_connect %}, confira "[Transmissão de dados para o {% data variables.product.prodname_github_connect %}](#data-transmission-for-github-connect)".

Habilitar {% data variables.product.prodname_github_connect %} não permitirá que usuários de {% data variables.product.prodname_dotcom_the_website %} façam alterações em {% data variables.product.product_name %}.

Para habilitar o {% data variables.product.prodname_github_connect %}, você configura uma conexão entre o {% data variables.location.product_location %} e uma conta da organização ou uma conta corporativa no {% data variables.product.prodname_dotcom_the_website %} que usa o {% data variables.product.prodname_ghe_cloud %}. {% data reusables.github-connect.connection-port-protocol %} Para obter mais informações, confira "[Como gerenciar o {% data variables.product.prodname_github_connect %}](/admin/configuration/configuring-github-connect/managing-github-connect)".

Após habilitar a licença {% data variables.product.prodname_github_connect %}, você poderá habilitar funcionalidades como {% ifversion ghes %} a sincronização automática de licença de usuário e {% endif %}{% data variables.product.prodname_dependabot_alerts %}. Para obter mais informações sobre todos os recursos disponíveis, confira "[Recursos do {% data variables.product.prodname_github_connect %}](#github-connect-features)".

## Funcionalidades de {% data variables.product.prodname_github_connect %}

Depois de configurar a conexão entre o {% data variables.location.product_location %} e o {% data variables.product.prodname_ghe_cloud %}, você pode habilitar recursos individuais do {% data variables.product.prodname_github_connect %} para sua empresa.

Recurso | Descrição | Mais informações | ------- | ----------- | ---------------- | {% ifversion ghes %} Sincronização automática da licença de usuário | Gerencie o uso de licença nas suas implantações do {% data variables.product.prodname_enterprise %} sincronizando automaticamente as licenças de usuário do {% data variables.location.product_location %} com o {% data variables.product.prodname_ghe_cloud %}. | "[Habilitar a sincronização automática de licença de usuário para sua empresa](/admin/configuration/configuring-github-connect/enabling-automatic-user-license-sync-for-your-enterprise)"{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot %} | Permitir que os usuários encontrem e corrijam vulnerabilidades em dependências de código. | "[Como habilitar o {% data variables.product.prodname_dependabot %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)"{% endif %} Ações do {% data variables.product.prodname_dotcom_the_website %} | Permita que os usuários usem ações do {% data variables.product.prodname_dotcom_the_website %} em arquivos de fluxo de trabalho. | "[Como habilitar o acesso automático às ações do {% data variables.product.prodname_dotcom_the_website %} usando o {% data variables.product.prodname_github_connect %}](/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect)"{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Analise seus dados agregados do GitHub Enterprise Server e nos ajude a aprimorar os produtos GitHub. | "[Como habilitar as {% data variables.product.prodname_server_statistics %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)"{% endif %} Pesquisa unificada | Permita que os usuários incluam repositórios no {% data variables.product.prodname_dotcom_the_website %} nos resultados da pesquisa do {% data variables.location.product_location %}. | "[Como habilitar a {% data variables.enterprise.prodname_unified_search %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-search-for-your-enterprise)" Contribuições unificadas | Permita que os usuários incluam contagens de contribuição anônimas para os respectivos trabalhos do {% data variables.location.product_location %} nos grafos de contribuição do {% data variables.product.prodname_dotcom_the_website %}. | "[Como habilitar as {% data variables.enterprise.prodname_unified_contributions %} para sua empresa](/admin/configuration/configuring-github-connect/enabling-unified-contributions-for-your-enterprise)"

## Transmissão de dados para {% data variables.product.prodname_github_connect %} 

Quando {% data variables.product.prodname_github_connect %} está habilitada, um registro em {% data variables.product.prodname_ghe_cloud %} armazena informações sobre a conexão. Os dados adicionais são transmitidos se você habilitar os recursos individuais de {% data variables.product.prodname_github_connect %}.

{% note %}

**Observação:** nenhum repositório, problema ou solicitação de pull é transmitido do {% data variables.product.product_name %} para o {% data variables.product.prodname_dotcom_the_website %} pelo {% data variables.product.prodname_github_connect %}.

{% endnote %}

### Dados transmitidos quando {% data variables.product.prodname_github_connect %} estiver habilitado

Ao habilitar {% data variables.product.prodname_github_connect %} ou funcionalidades específicas de{% data variables.product.prodname_github_connect %}, um registro em {% data variables.product.prodname_ghe_cloud %} irá armazenar as seguintes informações sobre a conexão.
{% ifversion ghes %}
- A parte da chave pública da sua licença do {% data variables.product.prodname_ghe_server %};
- Um hash da sua licença do {% data variables.product.prodname_ghe_server %};
- O nome do cliente da sua licença do {% data variables.product.prodname_ghe_server %};
- A versão do {% data variables.location.product_location_enterprise %}{% endif %}
- O nome do host do {% data variables.location.product_location %}
- A conta da organização ou a conta corporativa no {% data variables.product.prodname_ghe_cloud %} que está conectada ao {% data variables.location.product_location %}
- O token de autenticação usado pelo {% data variables.location.product_location %} para fazer solicitações ao {% data variables.product.prodname_ghe_cloud %}
- Se o protocolo TLS estiver habilitado e configurado no {% data variables.location.product_location %}{% ifversion ghes %}
- Os recursos do {% data variables.product.prodname_github_connect %} que estão habilitados no {% data variables.location.product_location %} e a data e a hora da habilitação{% endif %}
- O limite de inatividade para sua empresa
- O número de usuários inativos para sua empresa
- Uma contagem de estações que consomem a licença, que não inclui usuários suspensos

O {% data variables.product.prodname_github_connect %} sincroniza os dados da conexão acima entre o {% data variables.location.product_location %} e o {% data variables.product.prodname_ghe_cloud %} semanalmente, a partir do dia e da hora aproximada que o {% data variables.product.prodname_github_connect %} foi habilitado.

### Dados transmitidos por recursos individuais de {% data variables.product.prodname_github_connect %}

Os dados adicionais são transmitidos se você habilitar as funcionalidades individuais de {% data variables.product.prodname_github_connect %}.

Recurso | Dados | De que forma os dados fluem? | Onde os dados são usados? | ------- | ---- | --------- | ------ |{% ifversion ghes %} Sincronização automática de licença de usuário | ID de usuário e endereços de email de cada usuário do {% data variables.product.product_name %} | Do {% data variables.product.product_name %} para o {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} |{% endif %}{% ifversion ghes or ghae %} {% data variables.product.prodname_dependabot_alerts %} | Alertas de vulnerabilidade | Do {% data variables.product.prodname_dotcom_the_website %} para o {% data variables.product.product_name %} | {% data variables.product.product_name %} |{% endif %}{% ifversion dependabot-updates-github-connect %} {% data variables.product.prodname_dependabot_updates %} | As dependências e os metadados de cada repositório de dependência<br><br>Se uma dependência for armazenada em um repositório privado no {% data variables.product.prodname_dotcom_the_website %}, os dados só serão transmitidos se o {% data variables.product.prodname_dependabot %} estiver configurado e autorizado para acessar esse repositório. | Do {% data variables.product.prodname_dotcom_the_website %} para o {% data variables.product.product_name %} | {% data variables.product.product_name %} {% endif %} Ações do {% data variables.product.prodname_dotcom_the_website %} | Nome da ação, ação (arquivo YAML do {% data variables.product.prodname_marketplace %}) | Do {% data variables.product.prodname_dotcom_the_website %} para o {% data variables.product.product_name %}<br><br>De {% data variables.product.product_name %} até {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %}{% ifversion server-statistics %} {% data variables.product.prodname_server_statistics %} | Agregar métricas de uso do {% data variables.product.prodname_ghe_server %}. Para obter a lista completa de métricas, confira "[Sobre {% data variables.product.prodname_server_statistics %}](/admin/monitoring-activity-in-your-enterprise/analyzing-how-your-team-works-with-server-statistics/about-server-statistics#server-statistics-data-collected)." | De {% data variables.product.product_name %} a {% data variables.product.prodname_ghe_cloud %} | {% data variables.product.prodname_ghe_cloud %} {% endif %} | Pesquisa unificada | Termos de pesquisa, resultados da pesquisa | De {% data variables.product.prodname_dotcom_the_website %} a {% data variables.product.product_name %}<br><br>Do {% data variables.product.product_name %} para o {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.product_name %} | Contribuições unificadas | Contagens de contribuições | Do {% data variables.product.product_name %} para o {% data variables.product.prodname_dotcom_the_website %} | {% data variables.product.prodname_dotcom_the_website %} |

## Leitura adicional

- "[Contas Enterprise](/graphql/guides/managing-enterprise-accounts)" na documentação da API do GraphQL
