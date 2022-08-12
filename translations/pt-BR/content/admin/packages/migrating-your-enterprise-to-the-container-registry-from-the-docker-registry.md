---
title: Migrando sua empresa para o Registro do Container a partir do Registro Docker
intro: 'Você pode migrar imagens do Docker previamente armazenadas no registro do Docker em {% data variables.product.product_location %} para o {% data variables.product.prodname_container_registry %}.'
product: '{% data reusables.gated-features.packages %}'
permissions: 'Enterprise owners can migrate Docker images to the {% data variables.product.prodname_container_registry %}.'
versions:
  feature: docker-ghcr-enterprise-migration
shortTitle: Migrar para registro do contêiner
topics:
  - Containers
  - Docker
  - Migration
---

{% data reusables.package_registry.container-registry-ghes-beta %}

## Sobre o {% data variables.product.prodname_container_registry %}

{% data reusables.package_registry.container-registry-benefits %} Para obter mais informações, consulte "[Trabalhando com o {% data variables.product.prodname_container_registry %}](/packages/working-with-a-github-packages-registry/working-with-the-container-registry)".

Para obter mais informações sobre a configuração de {% data variables.product.prodname_registry %} para {% data variables.product.product_location %}, consulte "[Começando com {% data variables.product.prodname_registry %} para a sua empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".

## Sobre a migração do registro do Docker

{% data reusables.package_registry.container-registry-replaces-docker-registry %} Se o Registro do Docker em {% data variables.product.product_location %} contiver imagens, você deverá migrar manualmente as imagens para o {% data variables.product.prodname_container_registry %}.

{% ifversion ghes %}

{% note %}

**Observação**: {% data reusables.package_registry.container-registry-ghes-migration-availability %}

{% endnote %}

{% endif %}

{% data reusables.package_registry.container-registry-migration-namespaces %} Para obter mais informações sobre o impacto da migração para o {% data variables.product.prodname_container_registry %}, consulte "[Migrando para o  {% data variables.product.prodname_container_registry %} a partir do registro do Docker](/packages/working-with-a-github-packages-registry/migrating-to-the-container-registry-from-the-docker-registry#about-migration-from-the-docker-registry)".

## Fazendo a migração das organizações para o {% data variables.product.prodname_container_registry %}

Você pode começar uma migração das imagens do Docker de todas as suas organizações para o {% data variables.product.prodname_container_registry %}. A duração da operação de migração depende do número total de imagens a serem transferidas, e a carga geral na {% ifversion ghes %}sua instância{% elsif ghae %}{% data variables.product.product_name %}{% endif %}. Após uma migração bem-sucedida, {% data variables.product.product_name %} exibirá um resumo, e todos os próximos uploads das imagens do Docker usarão {% data variables.product.prodname_container_registry %}.

Se {% ifversion ghes %}um administrador do site{% elsif ghae %}um proprietário de uma empresa{% endif %} tiver notificações de e-mail para {% data variables.product.product_location %}, você receberá um e-mail depois que a migração estiver concluída. Para obter mais informações, consulte "[Configurar e-mail para notificações](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications).

{% note %}

**{% ifversion ghes %}Observações{% elsif ghae %}Observação{% endif %}**:

{%- ifversion ghes %}
- Durante a migração, o uso de CPU e memória para sua instância aumentará. Para garantir o desempenho da instância para seus usuários, {% data variables.product.company_short %} recomenda que você inicie a migração durante um período de atividade reduzida.
{%- endif %}
{% ifversion ghes %}- {% endif %}Durante a migração, não modifique as configurações da sua empresa{% ifversion ghes %} ou execute `ghe-config-apply` a partir de uma sessão SSH administrativa{% endif %}. {% ifversion ghes %}Estas ações acionarão uma configuração executada, que pode reiniciar serviços e a modificação {% elsif ghae %}destas configurações {% endif %} pode interromper a migração.
{%- ifversion ghes %}
- Após a migração, a pressão do armazenamento na sua instância aumentará devido à duplicação de arquivos de imagem no registro Docker e no {% data variables.product.prodname_container_registry %}. Uma versão futura de {% data variables.product.product_name %} removerá os arquivos duplicados quando todas as migrações estiverem concluídas.

Para obter mais informações sobre monitoramento do desempenho e armazenamento de {% data variables.product.product_location %}, consulte "[Acessando o painel de monitoramento](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)".
{% endif %}

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
1. Na barra lateral esquerda, clique em **Pacotes**.
1. À direita do número de pacotes a serem transferidos, clique em **Iniciar migração**. Durante a migração, {% data variables.product.product_name %} mostrará o progresso nesta página.

Depois que a migração for concluída, a página exibirá os resultados. Se uma migração falhar, a página mostrará as organizações que têm o pacote que gerou a falha.

## Executando novamente uma migração de organização com falha

Antes da migração, se um usuário criou um pacote no {% data variables.product.prodname_container_registry %} que tem um nome idêntico ao de um pacote existente no registro Docker, a migração falhará.

1. Exclua o contêiner afetado em {% data variables.product.prodname_container_registry %}. Para obter mais informações, consulte "[Excluir e restaurar um pacote](/packages/learn-github-packages/deleting-and-restoring-a-package#deleting-a-version-of-an-organization-scoped-package-on-github)".
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.packages-tab %}
1. À direita do número de pacotes para migrar, clique em **Executar novamente a migração**. Durante a migração, {% data variables.product.product_name %} mostrará o progresso nesta página.
1. Se a migração falhar novamente, comece da etapa 1 e execute a migração novamente.

{% ifversion ghes %}

## Monitorando o tráfego para os registros

Você pode usar o tráfego para o registro Docker e para {% data variables.product.prodname_container_registry %} no painel de monitoramento de {% data variables.product.product_location %}. O gráfico do "Registro de Pacotes de Container do GitHub" pode ajudar você a confirmar que você realizou com sucesso a migração de todas as imagens para {% data variables.product.prodname_container_registry %}. No gráfico, "v1" representa o tráfego para o registro Docker e "v2" representa o tráfego para {% data variables.product.prodname_container_registry %}. Para obter mais informações, consulte "[Acessar o painel do monitor](/admin/enterprise-management/monitoring-your-appliance/accessing-the-monitor-dashboard)".

{% endif %}
