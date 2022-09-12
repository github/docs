---
title: Configurar backups no appliance
shortTitle: Configuring backups
redirect_from:
  - /enterprise/admin/categories/backups-and-restores
  - /enterprise/admin/articles/backup-and-recovery
  - /enterprise/admin/articles/backing-up-github-enterprise
  - /enterprise/admin/articles/restoring-github-enterprise
  - /enterprise/admin/articles/backing-up-repository-data
  - /enterprise/admin/articles/restoring-enterprise-data
  - /enterprise/admin/articles/restoring-repository-data
  - /enterprise/admin/articles/backing-up-enterprise-data
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
  - /admin/configuration/configuring-backups-on-your-appliance
intro: 'Dentro de um plano de recuperação de desastre, é possível proteger os dados de produção no {% data variables.product.product_location %} configurando backups automatizados.'
versions:
  ghes: '*'
type: how_to
topics:
  - Backups
  - Enterprise
  - Fundamentals
  - Infrastructure
ms.openlocfilehash: 6a992c2861ce2c0de3b6d8672bf42f8818cda85a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332629'
---
## Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}

O {% data variables.product.prodname_enterprise_backup_utilities %} é um sistema de backup que você instala em um host separado, que usa instantâneos de backup do {% data variables.product.product_location %} em intervalos regulares em uma conexão de rede SSH segura. É possível usar um instantâneo para voltar uma instância do {% data variables.product.prodname_ghe_server %} a um estado anterior do host de backup.

Somente os dados adicionados desde o último instantâneo serão transferidos pela rede e ocuparão espaço adicional de armazenamento físico. Para minimizar o impacto no desempenho, os backups são feitos online com a menor prioridade de E/S de CPU. Não é necessário programar um período de manutenção para fazer backups.

Para obter informações mais detalhadas sobre recursos, requisitos e uso avançado, confira o [README do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Pré-requisitos

Para usar o {% data variables.product.prodname_enterprise_backup_utilities %}, você precisa ter um sistema de host Linux ou UNIX separado do {% data variables.product.product_location %}.

Também é possível integrar o {% data variables.product.prodname_enterprise_backup_utilities %} a um ambiente para fins de armazenamento permanente em longo prazo de dados essenciais.

Recomendamos que o host de backup e o {% data variables.product.product_location %} estejam geograficamente distantes um do outro. Essa medida garante que os backups estejam disponíveis para recuperação em casos de grandes desastres ou falhas de rede no site primário.

Os requisitos de armazenamento físico variam com base no uso do disco do repositório Git e nos padrões de crescimento esperados:

| Hardware | Recomendação |
| -------- | --------- |
| **vCPUs**  | 2 |
| **Memória** | 2 GB |
| **Storage** | Cinco vezes o armazenamento alocado da instância primária |

Podem ser necessários mais recursos, dependendo do seu uso, como atividade do usuário e integrações selecionadas.

## Instalar o {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**Observação:** para garantir que um dispositivo recuperado esteja disponível imediatamente, execute backups direcionados à instância primária mesmo em uma configuração de replicação geográfica.

{% endnote %}

1. Baixe a última [versão do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/releases) e extraia o arquivo com o comando `tar`.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Copie o arquivo incluído `backup.config-example` para `backup.config` e abra-o em um editor.
3. Defina o valor `GHE_HOSTNAME` como o nome do host ou o endereço IP da instância primária do {% data variables.product.prodname_ghe_server %}.

  {% note %}

  **Observação:** se o {% data variables.product.product_location %} for implantado como um cluster ou em uma configuração de alta disponibilidade usando um balanceador de carga, o `GHE_HOSTNAME` poderá ser o nome do host do balanceador de carga, desde que permita o acesso SSH (na porta 122) ao {% data variables.product.product_location %}.

  {% endnote %}

4. Defina o valor `GHE_DATA_DIR` como o local do sistema de arquivos em que deseja armazenar instantâneos de backup.
5. Abra a página de configurações da instância primária em `https://HOSTNAME/setup/settings` e adicione a chave SSH do host de backup à lista de chaves SSH autorizadas. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/enterprise/admin/guides/installation/accessing-the-administrative-shell-ssh/)".
6. Verifique a conectividade do SSH com o {% data variables.product.product_location %} usando o comando `ghe-host-check`.
  ```shell
  $ bin/ghe-host-check        
  ```         
  7. Para criar um backup completo inicial, execute o comando `ghe-backup`.
  ```shell
  $ bin/ghe-backup        
  ```

Para obter mais informações sobre uso avançado, confira o [README do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

## Programar um backup

Você pode agendar backups regulares no host de backup usando o comando `cron(8)` ou um serviço de agendamento de comando semelhante. A frequência configurada determinará o objetivo do ponto de recuperação (RPO) nos piores cenários do seu plano de recuperação. Por exemplo, ao programar backups diários à meia-noite, você pode perder até 24 horas de dados em caso de desastre. É recomendável começar com backups a cada hora, garantindo a possibilidade de perdas menores (no máximo de uma hora) caso os dados primários do site sejam destruídos.

Se as tentativas de backup forem sobrepostas, o comando `ghe-backup` será anulado com uma mensagem de erro, indicando a existência de um backup simultâneo. Nesse caso, é recomendável diminuir a frequência dos backups programados. Para obter mais informações, confira a seção "Como agendar backups" do [README do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups).

## Como restaurar um backup

No caso de interrupção prolongada ou evento catastrófico no site primário, você pode restaurar o {% data variables.product.product_location %} provisionando outro dispositivo do {% data variables.product.prodname_enterprise %} e executando uma restauração por meio do host de backup. Antes de restaurar um appliance, você deve adicionar a chave SSH do host de backup ao appliance de destino do {% data variables.product.prodname_enterprise %} como chave SSH autorizada.

{% ifversion ghes %} {% note %}

**Observação:** se o {% data variables.product.product_location %} tiver o {% data variables.product.prodname_actions %} habilitado, primeiro, você precisará configurar o provedor de armazenamento externo do {% data variables.product.prodname_actions %} no dispositivo substituto antes de executar o comando `ghe-restore`. Para obter mais informações, confira "[Backup e restauração do {% data variables.product.prodname_ghe_server %} com o {% data variables.product.prodname_actions %} habilitado](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)".

{% endnote %} {% endif %}

{% note %}

**Observação:** durante a execução de restaurações de backup no {% data variables.product.product_location %}, as mesmas regras de capacidade de suporte de versão se aplicam. Você só pode restaurar dados de no máximo duas versões do recursos para trás.

Por exemplo, se você receber um backup do GHES 3.0.x, você poderá restaurá-lo em uma instância GHES 3.2.x. No entanto, não é possível restaurar dados de um backup do GHES 2.22.x para 3.2.x, pois isso representa três saltos entre as versões (2.22 > 3.0 > 3.1 > 3.2). Primeiro, você deverá restaurar em uma instância de 3.1.x e, em seguida, atualizar para 3.2.x.

{% endnote %}

Para restaurar o {% data variables.product.product_location %} do último instantâneo bem-sucedido, use o comando `ghe-restore`. Você deverá ver uma saída semelhante à esta:

```shell
$ ghe-restore -c 169.154.1.1
> Checking for leaked keys in the backup snapshot that is being restored ...
> * No leaked keys found
> Connect 169.154.1.1:122 OK (v2.9.0)

> WARNING: All data on GitHub Enterprise appliance 169.154.1.1 (v2.9.0)
>          will be overwritten with data from snapshot 20170329T150710.
> Please verify that this is the correct restore host before continuing.
> Type 'yes' to continue: <em>yes</em>

> Starting restore of 169.154.1.1:122 from snapshot 20170329T150710
# ...output truncated
> Completed restore of 169.154.1.1:122 from snapshot 20170329T150710
> Visit https://169.154.1.1/setup/settings to review appliance configuration.
```

{% ifversion ip-exception-list %} Opcionalmente, para validar a restauração, configure uma lista de exceções de IP para permitir o acesso a uma lista especificada de endereços IP. Para obter mais informações, confira "[Validar alterações no modo de manutenção usando a lista de exceções de IP](/admin/configuration/configuring-your-enterprise/enabling-and-scheduling-maintenance-mode#validating-changes-in-maintenance-mode-using-the-ip-exception-list)".
{% endif %}

{% note %}

**Observação:** as configurações de rede são excluídas do instantâneo de backup. Você deve configurar manualmente a rede no appliance de destino do {% data variables.product.prodname_ghe_server %} conforme o seu ambiente.

{% endnote %}

Você pode usar essas opções adicionais com o comando `ghe-restore`:
- O sinalizador `-c` substitui as configurações, o certificado e os dados de licença no host de destino, mesmo que ele já esteja configurado. Omita esse sinalizador se você estiver configurando uma instância de preparo para fins de teste e se quiser manter a configuração no destino. Para obter mais informações, confira a seção "Como usar comandos de backup e restauração" do [README do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- O sinalizador `-s` permite que você selecione outro instantâneo de backup.
