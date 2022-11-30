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
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: ce7d9dde9f86ea5159657203e13d9d191b6b7466
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106858'
---
## Sobre instâncias de preparo

O {% data variables.product.company_short %} recomenda que você configure um ambiente separado para testar backups, atualizações ou alterações na configuração do {% data variables.location.product_location %}. Esse ambiente, que você deve isolar de seus sistemas de produção, é chamado de ambiente de preparo.

Por exemplo, para proteger contra perda de dados, você pode validar regularmente o backup da sua instância de produção. Você pode restaurar regularmente o backup de seus dados de produção em uma instância separada do {% data variables.product.product_name %} em um ambiente de preparo. Nesta instância de preparo, você também pode testar a atualização para a versão mais recente do recurso do {% data variables.product.product_name %}.

{% tip %}

**Dica:** talvez seja interessante reutilizar seu arquivo de licença do {% data variables.product.prodname_enterprise %}, desde que a instância de preparo não seja usada em uma capacidade de produção.

{% endtip %}

## Considerações sobre um ambiente de preparo

Para testar minuciosamente o {% data variables.product.product_name %} e recriar um ambiente com a maior semelhança possível com o ambiente de produção, considere os sistemas externos que interagem com sua instância. Por exemplo, faça os testes a seguir em seu ambiente de preparo.

- Autenticação, principalmente se você usa um provedor de autenticação externo, como o SAML
- Integração com um sistema externo de geração de tíquetes;
- Integração com um servidor de integração contínua;
- Software ou scripts externos que usam a {% data variables.product.prodname_enterprise_api %}
- Servidor externo SMTP para notificações de e-mail.

## Configurar uma instância de preparo

Você pode instalar uma instância de preparo do zero e configurá-la como quiser. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.product_name %}](/admin/installation/setting-up-a-github-enterprise-server-instance) e "[Como configurar a empresa](/admin/configuration/configuring-your-enterprise)".

Como alternativa, você pode criar uma instância de preparo que reflita a configuração de produção restaurando um backup da instância de produção para a instância de preparo.

1. [Faça backup da instância de produção](#1-back-up-your-production-instance).
2. [Configure uma instância de teste](#2-set-up-a-staging-instance).
3. [Configure o {% data variables.product.prodname_actions %}](#3-configure-github-actions).
4. [Configure o {% data variables.product.prodname_registry %}](#4-configure-github-packages).
5. [Restaure o backup de produção](#5-restore-your-production-backup).
6. [Examine a configuração da instância](#6-review-the-instances-configuration).
7. [Aplique a configuração da instância](#7-apply-the-instances-configuration).

### 1. Fazer backup da instância de produção

Se você quiser testar alterações em uma instância que contenha os mesmos dados e configuração que a instância de produção, faça backup dos dados e da configuração da instância de produção usando {% data variables.product.prodname_enterprise_backup_utilities %}. Para obter mais informações, confira "[Como configurar backups no seu dispositivo](/admin/configuration/configuring-your-enterprise/configuring-backups-on-your-appliance)".

{% warning %}

**Aviso**: se você usa o {% data variables.product.prodname_actions %} ou o {% data variables.product.prodname_registry %} em produção, o backup incluirá a configuração de produção do armazenamento externo. Para evitar uma possível perda de dados gravando no armazenamento de produção da instância de preparo, configure cada recurso nas etapas 3 e 4 antes de restaurar o backup.

{% endwarning %}

### 2. Configurar uma instância de preparo

Configure uma nova instância para funcionar como ambiente de preparo. Você pode usar os mesmos guias para provisionar e instalar sua instância de preparo, assim como fez na instância de produção. Para obter mais informações, confira "[Como configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/admin/guides/installation/setting-up-a-github-enterprise-server-instance/)".

Se você planeja restaurar um backup da instância de produção, prossiga para a próxima etapa. Como alternativa, você pode configurar a instância manualmente e ignorar as etapas a seguir.

### 3. Configurar o {% data variables.product.prodname_actions %}

Opcionalmente, se você usa o {% data variables.product.prodname_actions %} na instância de produção, configure o recurso na instância de preparo antes de restaurar o backup de produção. Se você não usa o {% data variables.product.prodname_actions %}, pule para "[4. Configurar o {% data variables.product.prodname_registry %}](#4-configure-github-packages)".

{% warning %}

**Aviso**: se você não configurar o {% data variables.product.prodname_actions %} na instância de preparo antes de restaurar o backup de produção, a instância de preparo usará o armazenamento externo da instância de produção, o que poderá resultar em perda de dados. É altamente recomendável que você use um armazenamento externo diferente para a instância de preparo. Para obter mais informações, veja "[Como usar um ambiente de preparo](/admin/github-actions/advanced-configuration-and-troubleshooting/using-a-staging-environment)".

{% endwarning %}

{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. A fim de configurar a instância de preparo para usar um provedor de armazenamento externo para o {% data variables.product.prodname_actions %}, insira um dos comandos a seguir.
{% indented_data_reference reusables.actions.configure-storage-provider-platform-commands spaces=3 %} {% data reusables.actions.configure-storage-provider %}
1. Como preparação para habilitar o {% data variables.product.prodname_actions %} na instância de preparo, insira o comando a seguir.

   ```shell{:copy}
   ghe-config app.actions.enabled true
   ```

### 4. Configurar o {% data variables.product.prodname_registry %}

Opcionalmente, se você usa o {% data variables.product.prodname_registry %} na instância de produção, configure o recurso na instância de preparo antes de restaurar o backup de produção. Se você não usa o {% data variables.product.prodname_registry %}, pule para "[5. Restaurar o backup de produção](#5-restore-your-production-backup)".

{% warning %}

**Aviso**: se você não configurar o {% data variables.product.prodname_registry %} na instância de preparo antes de restaurar o backup de produção, a instância de preparo usará o armazenamento externo da instância de produção, o que poderá resultar em perda de dados. É altamente recomendável que você use um armazenamento externo diferente para a instância de preparo.

{% endwarning %}

1. Examine o backup que você vai restaurar para a instância de preparo.
   - Se você fez o backup com o {% data variables.product.prodname_enterprise_backup_utilities %} 3.5 ou posterior, o backup incluirá a configuração do {% data variables.product.prodname_registry %}. Siga para a próxima etapa.
   - Se você fez o backup com o {% data variables.product.prodname_enterprise_backup_utilities %} 3.4 ou anterior, configure o {% data variables.product.prodname_registry %} na instância de preparo. Para obter mais informações, confira "[Introdução ao {% data variables.product.prodname_registry %} na empresa](/admin/packages/getting-started-with-github-packages-for-your-enterprise)".
{% data reusables.enterprise_installation.ssh-into-staging-instance %}
1. Configure a conexão de armazenamento externo inserindo os comandos a seguir e substituindo os valores de espaço reservado pelos valores reais da sua conexão.
   - Armazenamento de Blobs do Azure:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "azure"
     ghe-config secrets.packages.azure-container-name "AZURE CONTAINER NAME"
     ghe-config secrets.packages.azure-connection-string "CONNECTION STRING"
     ```
   - Amazon S3:

     ```shell{:copy}
     ghe-config secrets.packages.blob-storage-type "s3"
     ghe-config secrets.packages.service-url "S3 SERVICE URL"
     ghe-config secrets.packages.s3-bucket "S3 BUCKET NAME"
     ghe-config secrets.packages.aws-access-key "S3 ACCESS KEY ID"
     ghe-config secrets.packages.aws-secret-key "S3 ACCESS SECRET"
     ```
1. Como preparação para habilitar o {% data variables.product.prodname_registry %} na instância de preparo, insira o comando a seguir.

   ```shell{:copy}
   ghe-config app.packages.enabled true
   ```

### 5. Restaurar o backup de produção

Use o comando `ghe-restore` para restaurar o restante dos dados do backup. Para obter mais informações, confira "[Como restaurar um backup](/admin/configuration/configuring-backups-on-your-appliance#restoring-a-backup)".

Se a instância de preparo já estiver configurada e você quiser substituir as configurações, o certificado e os dados de licença, adicione a opção `-c` ao comando. Para obter mais informações sobre a opção, confira [Como usar os comandos de backup e restauração](https://github.com/github/backup-utils/blob/master/docs/usage.md#restoring-settings-tls-certificate-and-license) na documentação do {% data variables.product.prodname_enterprise_backup_utilities %}.

### 6. Examinar a configuração da instância

Para acessar a instância de preparo usando o mesmo nome de host, atualize o arquivo de hosts local para resolver o nome do host da instância de preparo por endereço IP editando o arquivo `/etc/hosts` no macOS ou Linux ou o arquivo `C:\Windows\system32\drivers\etc` no Windows.

{% note %}

**Observação**: a instância de preparo precisa estar acessível por meio do mesmo nome do host que a instância de produção. Não há suporte para a alteração do nome do host de {% data variables.location.product_location %}. Para obter mais informações, confira "[Como configurar um nome do host](/admin/configuration/configuring-network-settings/configuring-a-hostname)".

{% endnote %}

Depois, examine a configuração da instância de preparo no {% data variables.enterprise.management_console %}. Para obter mais informações, confira "[{% data variables.enterprise.management_console %}](/admin/configuration/configuring-your-enterprise/accessing-the-management-console)".

{% warning %}

**Aviso**: se você configurou o {% data variables.product.prodname_actions %} ou o {% data variables.product.prodname_registry %} na instância de preparo, para evitar a substituição de dados de produção, verifique se a configuração de armazenamento externo no {% data variables.enterprise.management_console %} não corresponde à instância de produção.

{% endwarning %}

### 7. Aplicar a configuração da instância

Para aplicar a configuração do {% data variables.enterprise.management_console %}, clique em **Salvar configurações**.

## Leitura adicional

- "[Sobre atualizações em novas versões](/admin/overview/about-upgrades-to-new-releases)"
