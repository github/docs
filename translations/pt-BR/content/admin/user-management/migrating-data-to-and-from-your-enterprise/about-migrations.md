---
title: Sobre migrações
intro: 'Migração é o processo de transferência de dados de um local de *origem* (organização do {% data variables.product.prodname_dotcom_the_website %} ou uma instância do {% data variables.product.prodname_ghe_server %}) para uma instância de *destino* do {% data variables.product.prodname_ghe_server %}. É possível usar as migrações para transferir os dados ao alterar plataformas ou atualizar o hardware na sua instância.'
redirect_from:
  - /enterprise/admin/migrations/about-migrations
  - /enterprise/admin/user-management/about-migrations
  - /admin/user-management/about-migrations
versions:
  ghes: '*'
type: overview
topics:
  - Enterprise
  - Migration
ms.openlocfilehash: accb9c62655f8825077a00e05a93182b36cd6e8d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147541180'
---
## Tipos de migrações

Você pode fazer três tipos de migração:

- Migração de uma instância do {% data variables.product.prodname_ghe_server %} para outra do {% data variables.product.prodname_ghe_server %}: você pode migrar qualquer número de repositórios pertencentes a qualquer usuário ou organização na instância. Para executar a migração, você deve ter acesso de administrador do site a ambas as instâncias.
- Migração de uma organização do {% data variables.product.prodname_dotcom_the_website %} para uma instância do {% data variables.product.prodname_ghe_server %}: você pode migrar qualquer número de repositórios pertencentes à organização. Antes de executar uma migração, você precisa ter [acesso administrativo](/enterprise/user/articles/permission-levels-for-an-organization/) na organização do {% data variables.product.prodname_dotcom_the_website %} e acesso de administrador do site na instância de destino.
- As *execuções de avaliação* são migrações que importam dados para uma [instância de preparo](/enterprise/admin/guides/installation/setting-up-a-staging-instance/). Elas podem ser úteis para ver o que *aconteceria* se uma migração fosse aplicada ao {% data variables.product.product_location %}. **Recomendamos fortemente que você execute uma execução de avaliação em uma instância de preparo antes de importar dados para sua instância de produção.**

## Dados migrados

Durante uma migração, tudo gira em torno do repositório. A maioria dos dados associados ao repositório pode ser migrada. Por exemplo, um repositório em uma organização migrará o repositório *e* a organização, bem como todos os usuários, as equipes, os problemas e as solicitações de pull associadas ao repositório.

Os itens na tabela abaixo podem ser migrados com um repositório. Os itens não mostrados na lista de dados migrados não podem ser migrados, incluindo os ativos do {% data variables.large_files.product_name_short %}.

{% data reusables.enterprise_migrations.fork-persistence %}

|  Dados associados a um repositório migrado | Observações  |
|---------------------------------------------|--------|
| Usuários | As **@mentions** aos usuários são rescritas para corresponderem ao destino.
| Organizações | Os nomes e detalhes das organizações são migrados.
| Repositórios | Links para árvores, blobs, commits e linhas do Git são rescritas para corresponder ao destino. O migrador segue no máximo três redirecionamentos de repositório. Repositórios internos são migrados como repositórios privados. O status de arquivo morto não está definido.
| Wikis | Todos os dados da wiki são migrados.
| Teams | As **@mentions** às equipes são rescritas para corresponderem ao destino.
| Marcos | Os registros de data e hora são preservados.
| Quadros de projeto | Os quadros de projeto associados ao repositório e à organização proprietária do repositório são migrados.
| Problemas | As referências a problemas e os registros de data e hora são preservados.
| Comentários dos problemas | As referências cruzadas aos comentários são rescritas para a instância de destino.
| Solicitações de pull | As referências cruzadas a pull requests são rescritas para corresponder ao destino. Os registros de data e hora são preservados.
| Revisões de pull request | As revisões de pull request e os dados associados são migrados.
| Comentários das revisões de pull request | As referências cruzadas aos comentários são rescritas para a instância de destino. Os registros de data e hora são preservados.
| Comentários de commit | As referências cruzadas aos comentários são rescritas para a instância de destino. Os registros de data e hora são preservados.
| Versões | Todos os dados das versões são migrados.
| Ações feitas em problemas ou em pull requests | São preservadas todas as modificações em problemas ou pull requests, como atribuir usuários, renomear títulos e modificar etiquetas, bem como os registros de data e hora de cada ação.
|  Anexos de arquivo | Os [anexos de arquivo em problemas e solicitações de pull](/articles/file-attachments-on-issues-and-pull-requests) são migrados. Você pode desabilitar essa opção como parte da migração.
| Webhooks | Somente os webhooks ativos são migrados.
| Chaves de implantação de repositório | As chaves de implantação de repositório são migradas.
| Branches protegidos | As configurações de branches protegidos e os dados associados são migrados.
