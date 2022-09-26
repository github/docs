---
title: Configurar uma instância de preparo
intro: 'Você pode configurar uma instância do {% data variables.product.product_name %} em um ambiente separado e isolado e usá-la para validar e testar alterações.'
redirect_from:
  - /enterprise/admin/installation/setting-up-a-staging-instance
  - /admin/installation/setting-up-a-staging-instance
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Upgrades
shortTitle: Set up a staging instance
ms.openlocfilehash: 86006b3dd1fcdd7a7139f35934cafce1f208c8bb
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065359'
---
## Sobre instâncias de preparo

O {% data variables.product.company_short %} recomenda que você configure um ambiente separado para testar backups, atualizações ou alterações na configuração do {% data variables.product.product_location %}. Esse ambiente, que você deve isolar de seus sistemas de produção, é chamado de ambiente de preparo.

Por exemplo, para proteger contra perda de dados, você pode validar regularmente o backup da sua instância de produção. Você pode restaurar regularmente o backup de seus dados de produção em uma instância separada do {% data variables.product.product_name %} em um ambiente de preparo. Nesta instância de preparo, você também pode testar a atualização para a versão mais recente do recurso do {% data variables.product.product_name %}.

{% tip %}

**Dica:** talvez seja interessante reutilizar seu arquivo de licença do {% data variables.product.prodname_enterprise %}, desde que a instância de preparo não seja usada em uma capacidade de produção.

{% endtip %}

## Considerações sobre um ambiente de preparo

Para testar minuciosamente o {% data variables.product.product_name %} e recriar um ambiente com a maior semelhança possível com o ambiente de produção, considere os sistemas externos que interagem com sua instância. Por exemplo, faça os testes a seguir em seu ambiente de preparo.

- Autenticação, principalmente se você usa um provedor de autenticação externo, como o SAML
- Integração com um sistema externo de geração de tíquetes;
- Integração com um servidor de integração contínua;
- Software ou scripts externos que usam a {% data variables.product.prodname_enterprise_api %};
- Servidor externo SMTP para notificações de e-mail.

## Configurar uma instância de preparo

1. Faça backup da sua instância de produção usando o {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira a seção "Sobre dados de {% data variables.product.prodname_enterprise_backup_utilities %}" em "[Como configurar backups em seu dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#about-github-enterprise-server-backup-utilities)".
2. Configure uma nova instância para funcionar como ambiente de preparo. Você pode usar os mesmos guias para provisionar e instalar sua instância de preparo, assim como fez na instância de produção. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".
3. Opcionalmente, se você planeja testar a funcionalidade do {% data variables.product.prodname_actions %} em seu ambiente de teste, examine as considerações sobre seus logs e seu armazenamento. Para obter mais informações, veja "[Como usar um ambiente de preparo](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)".
4. Restaure o backup na sua instância de preparo. Para obter mais informações, confira a seção "Como restaurar um backup" de "[Como configurar backups em seu dispositivo](/enterprise/admin/guides/installation/configuring-backups-on-your-appliance#restoring-a-backup)".

## Leitura adicional

- "[Sobre atualizações em novas versões](/admin/overview/about-upgrades-to-new-releases)"
