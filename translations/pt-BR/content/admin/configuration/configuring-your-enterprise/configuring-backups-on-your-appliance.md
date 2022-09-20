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
ms.openlocfilehash: 4403ec24aa3da63f6700ae4bfcd2392ec0cfd194
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147861649'
---
## Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}

O {% data variables.product.prodname_enterprise_backup_utilities %} é um sistema de backup que você instala em um host separado, que usa instantâneos de backup do {% data variables.product.product_location %} em intervalos regulares em uma conexão de rede SSH segura. É possível usar um instantâneo para voltar uma instância do {% data variables.product.prodname_ghe_server %} a um estado anterior do host de backup.

Somente os dados adicionados desde o último instantâneo serão transferidos pela rede e ocuparão espaço adicional de armazenamento físico. Para minimizar o impacto no desempenho, os backups são feitos online com a menor prioridade de E/S de CPU. Não é necessário programar um período de manutenção para fazer backups.

As principais versões e números de versão para {% data variables.product.prodname_enterprise_backup_utilities %} se alinham às versões de recurso de {% data variables.product.product_name %}. Damos suporte às quatro versões mais recentes de ambos os produtos. Para obter mais informações, confira "[Versões do {% data variables.product.product_name %}](/admin/all-releases)".

Para obter informações detalhadas sobre recursos, requisitos e uso avançado, confira [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

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

Para obter mais informações, confira os [requisitos do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

## Instalar o {% data variables.product.prodname_enterprise_backup_utilities %}

Para instalar {% data variables.product.prodname_enterprise_backup_utilities %} no seu backup, recomendamos clonar o repositório Git do projeto. Essa abordagem permite buscar novas versões diretamente usando o Git, e o arquivo de configuração de backup existente, `backup.config`, será preservado ao instalar uma nova versão.

Como alternativa, se o computador host não puder acessar a Internet, você poderá baixar cada versão do {% data variables.product.prodname_enterprise_backup_utilities %} como um arquivo compactado e extrair e instalar o conteúdo. Para obter mais informações, confira [Introdução](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

Os instantâneos de backup são gravados no caminho do disco definido pela variável de diretório de dados `GHE_DATA_DIR` em seu arquivo `backup.config`. Os instantâneos precisam ser armazenados em um sistema de arquivos que dê suporte a links simbólicos e rígidos.

{% note %}

**Nota:** recomendamos garantir que seus instantâneos não sejam mantidos em um subdiretório do diretório de instalação {% data variables.product.prodname_enterprise_backup_utilities %} de dados, para evitar substituir inadvertidamente o diretório de dados ao atualizar as versões {% data variables.product.prodname_enterprise_backup_utilities %}.

{% endnote %}

1. Para clonar o [repositório de projeto {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/) para um diretório local no host de backup, execute o comando a seguir.

  ```
  $ git clone https://github.com/github/backup-utils.git /path/to/target/directory/backup-utils
  ```
1. Para alterar para o diretório do repositório local, execute o comando a seguir.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Para copiar o arquivo incluído `backup.config-example` no `backup.config`, execute o comando a seguir.

   ```shell
   cp backup.config-example backup.config
   ```
1. Para personalizar sua configuração, edite `backup.config` em um editor de texto.
   1. Defina o valor `GHE_HOSTNAME` como o nome do host ou o endereço IP da instância primária do {% data variables.product.prodname_ghe_server %}.

     {% note %}

     **Observação:** se o {% data variables.product.product_location %} for implantado como um cluster ou em uma configuração de alta disponibilidade usando um balanceador de carga, o `GHE_HOSTNAME` poderá ser o nome do host do balanceador de carga, desde que permita o acesso SSH (na porta 122) ao {% data variables.product.product_location %}.

     Para garantir que um dispositivo recuperado esteja disponível imediatamente, execute backups direcionados à instância primária mesmo em uma configuração de replicação geográfica.

     {% endnote %}
   1. Defina o valor `GHE_DATA_DIR` como o local do sistema de arquivos em que deseja armazenar instantâneos de backup. É recomendável escolher um local no mesmo sistema de arquivos que o host de backup, mas fora de onde você clonou o repositório Git na etapa 1.
1. Para conceder acesso ao host de backup à instância, abra a página de configurações da instância principal em `http(s)://HOSTNAME/setup/settings` e adicione a chave SSH do host de backup à lista de chaves SSH autorizadas. Para obter mais informações, confira "[Como acessar o shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh#enabling-access-to-the-administrative-shell-via-ssh)".
1. Em seu host de backup, verifique a conectividade do SSH com o {% data variables.product.product_location %} usando o comando `ghe-host-check`.

  ```shell
  ./bin/ghe-host-check
  ```         
1. Para criar um backup completo inicial, execute o comando a seguir.

  ```shell
  ./bin/ghe-backup
  ```

Para obter informações sobre o uso avançado, confira [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#readme) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

## Atualizar o {% data variables.product.prodname_enterprise_backup_utilities %}

Ao atualizar o {% data variables.product.prodname_enterprise_backup_utilities %}, você precisa escolher uma versão que funcionará com sua versão atual do {% data variables.product.product_name %}. Sua instalação do {% data variables.product.prodname_enterprise_backup_utilities %} precisa ter pelo menos a mesma versão que {% data variables.product.product_location %} e não pode ter mais do que duas versões posteriores. Para obter mais informações, confira os [requisitos de versão do {% data variables.product.prodname_ghe_server %}](https://github.com/github/backup-utils/blob/master/docs/requirements.md#github-enterprise-server-version-requirements) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.
Você pode atualizar {% data variables.product.prodname_enterprise_backup_utilities %} em um repositório Git buscando e fazendo check-out das alterações mais recentes.

Como alternativa, se você não usar um repositório Git para sua instalação, poderá extrair um novo arquivo no local ou mudar sua abordagem para usar um repositório Git.

### Verificar o tipo de instalação

Você pode verificar o método de instalação do {% data variables.product.prodname_enterprise_backup_utilities %} e determinar a melhor forma de atualizar sua instalação.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Para verificar se existe um diretório de trabalho válido dentro de um repositório Git, execute o comando a seguir.

   ```
   git rev-parse --is-inside-work-tree
   ```

   Se a saída é `true`, {% data variables.product.prodname_enterprise_backup_utilities %} foi instalado clonando o repositório Git do projeto. Se a saída inclui `fatal: not a git repository (or any of the parent directories)`, {% data variables.product.prodname_enterprise_backup_utilities %} foi provavelmente instalado extraindo um arquivo morto compactado.
Se a instalação estiver em um repositório Git, você poderá instalar a versão mais recente usando o Git. Se a instalação for de um arquivo morto compactado, você poderá baixar e extrair a versão mais recente ou reinstalar o {% data variables.product.prodname_enterprise_backup_utilities %} usando o Git para simplificar atualizações futuras.

- [Atualizar uma instalação em um repositório Git](#upgrading-an-installation-in-a-git-repository)
- [Usar o Git em vez de arquivos compactados para upgrades](#using-git-instead-of-compressed-archives-for-upgrades)

### Atualizar uma instalação em um repositório Git

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %} {% note %}

  **Nota:** é recomendável criar uma cópia do arquivo `backup.config` existente em um local temporário, como `$HOME/backup.config`, antes de atualizar dados {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Baixe as atualizações de projeto mais recentes executando o comando `git fetch`.

  ```shell
  git fetch
  ```

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %} {% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}

### Usar o Git em vez de arquivos compactados para upgrades

Se o host de backup tiver conectividade com a Internet e você tiver usado anteriormente um arquivo compactado (`.tar.gz`) para instalar ou atualizar o {% data variables.product.prodname_enterprise_backup_utilities %}, recomendamos usar um repositório Git para sua instalação. A atualização usando o Git requer menos trabalho e preserva sua configuração de backup.

{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-directory %}
1. Para fazer backup da configuração existente do {% data variables.product.prodname_enterprise_backup_utilities %}, copie o arquivo `backup.config` atual para um local seguro, como seu diretório inicial.

  ```
  $ cp backup.config $HOME/backup.config.saved-$(date +%Y%m%d-%H%M%S)
  ```

1. Altere para o diretório local no seu host de backup em que deseja isntalar o repositório Git do {% data variables.product.prodname_enterprise_backup_utilities %}.
1. Para clonar o [repositório de projeto](https://github.com/github/backup-utils/) para o diretório no seu host de backup, execute o comando a seguir.

  ```
  git clone https://github.com/github/backup-utils.git
  ```
1. Para alterar para o repositório clonado, execute o comando a seguir.

  ```
  cd backup-utils
  ```
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-update-repo %}
1. Para restaurar a configuração de backup anterior, copie o arquivo de configuração de backup existente para o diretório do repositório local. Substitua o caminho no comando pelo local do arquivo salvo na etapa 2.

  ```
  $ cp PATH/TO/BACKUP/FROM/STEP/2 backup.config
  ```
  
  {% note %}

  **Nota:** você pode escolher para onde deseja restaurar seu arquivo de configuração de backup após a clonagem. Para obter mais informações sobre onde os arquivos de configuração podem estar localizados, confira [Introdução](https://github.com/github/backup-utils/blob/master/docs/getting-started.md) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

  {% endnote %}

1. Para confirmar se os caminhos para diretórios ou scripts no arquivo de configuração de backup estão corretos, examine o arquivo em um editor de texto.
{% data reusables.enterprise_backup_utilities.enterprise-backup-utils-verify-upgrade %}
1. Exclua seu antigo diretório de Utilitários de Backup do GitHub Enterprise Server da etapa 1 (em que a instalação de arquivos compactados estava localizada).

## Programar um backup

Você pode agendar backups regulares no host de backup usando o comando `cron(8)` ou um serviço de agendamento de comando semelhante. A frequência configurada determinará o objetivo do ponto de recuperação (RPO) nos piores cenários do seu plano de recuperação. Por exemplo, ao programar backups diários à meia-noite, você pode perder até 24 horas de dados em caso de desastre. É recomendável começar com backups a cada hora, garantindo a possibilidade de perdas menores (no máximo de uma hora) caso os dados primários do site sejam destruídos.

Se as tentativas de backup forem sobrepostas, o comando `ghe-backup` será anulado com uma mensagem de erro, indicando a existência de um backup simultâneo. Nesse caso, é recomendável diminuir a frequência dos backups programados. Para obter informações, confira a seção "Agendar backups" do [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#scheduling-backups) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.

## Como restaurar um backup

No caso de interrupção prolongada ou evento catastrófico no site primário, você pode restaurar o {% data variables.product.product_location %} provisionando outro dispositivo do {% data variables.product.prodname_enterprise %} e executando uma restauração por meio do host de backup. Antes de restaurar um appliance, você deve adicionar a chave SSH do host de backup ao appliance de destino do {% data variables.product.prodname_enterprise %} como chave SSH autorizada.

{% note %}

**Observação:** durante a execução de restaurações de backup no {% data variables.product.product_location %}, as mesmas regras de capacidade de suporte de versão se aplicam. Você só pode restaurar dados de no máximo duas versões do recursos para trás.

Por exemplo, se você fizer um backup do {% data variables.product.product_name %} 3.0.x, poderá restaurar o backup para uma instância 3.2.x do {% data variables.product.product_name %}. Não é possível restaurar dados de um backup do {% data variables.product.product_name %} 2.22.x para uma instância que executa 3.2.x, porque ela seria três saltos entre as versões (2.22 ara 3.0 para 3.1 para 3.2). Primeiro, você precisa restaurar em uma instância que executa a versão 3.1.x e, em seguida, atualizar para a 3.2.x.

{% endnote %}

Para restaurar o {% data variables.product.product_location %} do último instantâneo bem-sucedido, use o comando `ghe-restore`.

{% note %}

**Nota:** antes de restaurar um backup, verifique se:
- O modo de manutenção está habilitado na instância primária e todos os processos ativos foram concluídos. Para obter mais informações, confira "[Como habilitar o modo de manutenção](/enterprise/admin/guides/installation/enabling-and-scheduling-maintenance-mode/)".
- A replicação é interrompida em todas as réplicas em configurações de alta disponibilidade. Para obter mais informações, confira o comando `ghe-repl-stop` em "[Sobre a configuração de alta disponibilidade](/admin/enterprise-management/configuring-high-availability/about-high-availability-configuration#ghe-repl-stop)".
- Se o {% data variables.product.product_location %} tiver o {% data variables.product.prodname_actions %} habilitado, primeiro, você precisará configurar o provedor de armazenamento externo do {% data variables.product.prodname_actions %} no dispositivo substituto. Para obter mais informações, confira "[Backup e restauração do {% data variables.product.prodname_ghe_server %} com o {% data variables.product.prodname_actions %} habilitado](/admin/github-actions/backing-up-and-restoring-github-enterprise-server-with-github-actions-enabled)".

{% endnote %}

Ao executar o comando `ghe-restore`, você deverá ver uma saída semelhante a esta:

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
- O sinalizador `-c` substitui as configurações, o certificado e os dados de licença no host de destino, mesmo que ele já esteja configurado. Omita esse sinalizador se você estiver configurando uma instância de preparo para fins de teste e se quiser manter a configuração no destino. Para obter mais informações, confira a seção "Usar comandos de backup e restauração" do [{% data variables.product.prodname_enterprise_backup_utilities %} README](https://github.com/github/backup-utils#using-the-backup-and-restore-commands) na documentação do projeto do {% data variables.product.prodname_enterprise_backup_utilities %}.
- O sinalizador `-s` permite que você selecione outro instantâneo de backup.
