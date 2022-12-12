---
title: Como migrar sua empresa para o registro de contêiner do Registro do Docker
intro: 'Você pode migrar as imagens do Docker que estavam armazenadas no registro do Docker em {% data variables.location.product_location %} para o {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrate to Container registry
topics:
  - Containers
  - Docker
  - Migration
ms.openlocfilehash: 459039d5c3a059c961ac1126e37929906d7b0325
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106378'
---
{% data reusables.package_registry.container-registry-ghes-beta %}

## Sobre o {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obter mais informações, confira "[Como trabalhar com {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)."

Para obter mais informações de como configurar o {% data variables.product.prodname_registry %} para {% data variables.location.product_location %}, confira "[Introdução ao {% data variables.product.prodname_registry %} para a empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

## Sobre a migração do Registro do Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Se o registro do Docker em {% data variables.location.product_location %} contiver imagens, você precisará migrá-las manualmente para o {% data variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Observação**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Para obter mais informações sobre o impacto da migração para {% data variables.product.prodname_container_registry %}, confira "[Fazer migração para {% data variables.product.prodname_container_registry %} do Registro do Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)."

## Migrar organizações para {% data variables.product.prodname_container_registry %}

Você pode iniciar uma migração de todas as imagens do Docker de suas organizações para {% data variables.product.prodname_container_registry %}. A duração da operação de migração depende do número total de imagens a serem migradas e da carga geral na {% ifversion ghes %}sua instância{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Após uma migração bem-sucedida, {% data variables.product.product_name %} exibirá um resumo, e todos os uploads futuros de imagens do Docker usarão o {% data variables.product.prodname_container_registry %}.

Se {% ifversion ghes %}um administrador do site{% elsif ghae %}um proprietário corporativo{% endif %} tiver configurado notificações por email para {% data variables.location.product_location %}, você receberá um email após a conclusão da migração. Para obter mais informações, confira "[Como configurar o email para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)".

{% note %}

**{% ifversion ghes %}Observações{% elsif ghae %}Note{% endif %}** :

{%- ifversion ghes %}
- Durante a migração, o uso de CPU e memória para sua instância aumentará. Para garantir o desempenho da instância dos seus usuários, {% data variables.product.company_short %} recomenda que você inicie uma migração durante um período de atividade reduzida.
{%- endif %} {% ifversion ghes %}– {% endif %}Durante a migração, não modifique as configurações da sua empresa{% ifversion ghes %} nem execute `ghe-config-apply` de uma sessão SSH administrativa{% endif %}. {% ifversion ghes %}Essas ações vão disparar uma execução de configuração, que podem reiniciar serviços e {% elsif ghae %}Modificar essas configurações{% endif %} pode interromper a migração.
{%- ifversion ghes %}
- Após a migração, a pressão de armazenamento em sua instância aumentará devido à duplicação de arquivos de imagem no Registro do Docker e a {% data variables.product.prodname_container_registry %}. Uma versão futura de {% data variables.product.product_name %} removerá os arquivos duplicados quando todas as migrações estiverem concluídas.

Para obter mais informações sobre o monitoramento do desempenho e do armazenamento para {% data variables.location.product_location %}, confira "[Como acessar o painel do monitor](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)".
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Pacotes**.
1. À direita do número de pacotes a serem migrados, clique em **Iniciar migração**. Durante a migração, {% data variables.product.product_name %} exibirá o andamento nesta página.

Após a conclusão da migração, a página exibirá os resultados. Se uma migração falhar, a página mostrará as organizações que têm o pacote que causou a falha.

## Executar novamente uma migração de organização com falha

Antes da migração, se um usuário tiver criado um pacote no {% data variables.product.prodname_container_registry %} que tem um nome idêntico a um pacote existente no Registro do Docker, a migração falhará.

1. Exclua o contêiner afetado no {% data variables.product.prodname_container_registry %}. Para obter mais informações, confira "[Como excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)".
{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.packages-tab %}
1. À direita do número de pacotes a serem migrados, clique em **Executar migração novamente**. Durante a migração, {% data variables.product.product_name %} exibirá o andamento nesta página.
1. Se a migração falhar novamente, comece da etapa 1 e execute novamente a migração.
