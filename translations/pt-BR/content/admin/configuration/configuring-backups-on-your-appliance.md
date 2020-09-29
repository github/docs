---
title: Configurar backups no appliance
redirect_from:
  - /enterprise/admin/categories/backups-and-restores/
  - /enterprise/admin/articles/backup-and-recovery/
  - /enterprise/admin/articles/backing-up-github-enterprise/
  - /enterprise/admin/articles/restoring-github-enterprise/
  - /enterprise/admin/articles/backing-up-repository-data/
  - /enterprise/admin/articles/restoring-enterprise-data/
  - /enterprise/admin/articles/restoring-repository-data/
  - /enterprise/admin/articles/backing-up-enterprise-data/
  - /enterprise/admin/guides/installation/backups-and-disaster-recovery/
  - /enterprise/admin/installation/configuring-backups-on-your-appliance
  - /enterprise/admin/configuration/configuring-backups-on-your-appliance
intro: 'Como parte de um plano de recuperação de desastre, é possível proteger os dados de produção na {% data variables.product.product_location_enterprise %} configurando backups automatizados.'
versions:
  enterprise-server: '*'
---

### Sobre o {% data variables.product.prodname_enterprise_backup_utilities %}

O {% data variables.product.prodname_enterprise_backup_utilities %} é um sistema de backup a ser instalado em um host separado, que tira instantâneos de backup da {% data variables.product.product_location_enterprise %} em intervalos regulares em uma conexão de rede SSH segura. É possível usar um instantâneo para voltar uma instância do {% data variables.product.prodname_ghe_server %} a um estado anterior do host de backup.

Somente os dados adicionados desde o último instantâneo serão transferidos pela rede e ocuparão espaço adicional de armazenamento físico. Para minimizar o impacto no desempenho, os backups são feitos online com a menor prioridade de E/S de CPU. Não é necessário programar um período de manutenção para fazer backups.

Para obter informações mais detalhadas sobre recursos, requisitos e uso avançado, consulte o [LEIAME do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

### Pré-requisitos

Para usar o {% data variables.product.prodname_enterprise_backup_utilities %}, você deve ter um sistema host Linux ou Unix separado da {% data variables.product.product_location_enterprise %}.

Também é possível integrar o {% data variables.product.prodname_enterprise_backup_utilities %} a um ambiente para fins de armazenamento permanente em longo prazo de dados essenciais.

É recomendável que o host de backup e a {% data variables.product.product_location_enterprise %} estejam geograficamente distantes. Essa medida garante que os backups estejam disponíveis para recuperação em casos de grandes desastres ou falhas de rede no site primário.

Os requisitos de armazenamento físico variam com base no uso do disco do repositório Git e nos padrões de crescimento esperados:

| Hardware          | Recomendação                                              |
| ----------------- | --------------------------------------------------------- |
| **vCPUs**         | 2                                                         |
| **Memória**       | 2 GB                                                      |
| **Armazenamento** | Cinco vezes o armazenamento alocado da instância primária |

Podem ser necessários mais recursos dependendo do uso, como atividade do usuário e integrações selecionadas.

### Instalar o {% data variables.product.prodname_enterprise_backup_utilities %}

{% note %}

**Observação:** para garantir a disponibilidade imediata de um appliance recuperado, faça backups visando a instância principal, mesmo em uma configuração de replicação geográfica.

{% endnote %}

1. Baixe a [versão mais recente do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils/releases) e extraia o arquivo com o comando `tar`.
  ```shell
  $ tar -xzvf /path/to/github-backup-utils-v<em>MAJOR.MINOR.PATCH</em>.tar.gz     
  ```
2. Copie o arquivo `backup.config-example` para `backup.config` e abra em um editor.
3. Defina o valor `GHE_HOSTNAME` para o nome de host ou endereço IP da instância primária do {% data variables.product.prodname_ghe_server %}.
4. Defina o valor `GHE_DATA_DIR` no local do arquivo do sistema onde você deseja arquivar os instantâneos de backup.
5. Abra a página das configurações da instância primária em `https://HOSTNAME/setup/settings` e adicione a chave SSH do host de backup à lista de chaves SSH autorizadas. Para obter mais informações, consulte [Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/).
5. Verifique a conectividade SSH com a {% data variables.product.product_location_enterprise %} usando o comando `ghe-host-check`.
  ```shell
  $ bin/ghe-host-check        
  ```
  6. Para criar um backup completo inicial, execute o comando `ghe-backup`.
  ```shell
  $ bin/ghe-backup        
  ```

Para obter mais informações sobre uso avançado, consulte o [arquivo LEIAME do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#readme).

### Programar um backup

É possível programar backups regulares no host de backup com o comando `cron(8)` ou um serviço de agendamento semelhante. A frequência configurada determinará o objetivo do ponto de recuperação (RPO) nos piores cenários do seu plano de recuperação. Por exemplo, ao programar backups diários à meia-noite, você pode perder até 24 horas de dados em caso de desastre. É recomendável começar com backups a cada hora, garantindo a possibilidade de perdas menores (no máximo de uma hora) caso os dados primários do site sejam destruídos.

Se houver sobreposição de tentativas de backup, o comando `ghe-backup` será interrompido com uma mensagem de erro, informando a existência de um backup simultâneo. Nesse caso, é recomendável diminuir a frequência dos backups programados. Para obter mais informações, consulte a seção "Agendar backups" do [ arquivo LEIAME do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#scheduling-backups).

### Restaurar um backup

Em caso de interrupção prolongada ou evento catastrófico no site primário, é possível restaurar a {% data variables.product.product_location_enterprise %} provisionando outro appliance do {% data variables.product.prodname_enterprise %} e executando uma restauração no host de backup. Antes de restaurar um appliance, você deve adicionar a chave SSH do host de backup ao appliance de destino do {% data variables.product.prodname_enterprise %} como chave SSH autorizada.

Para restaurar a {% data variables.product.product_location_enterprise %} do instantâneo mais recente bem-sucedido, use o comando `ghe-restore`. Você verá um conteúdo semelhante a este:

```shell
$ ghe-restore -c 169.154.1.1
> Verificando chaves vazadas no instantâneo do backup em restauração...
> * Sem chavez vazadas
> Conexão 169.154.1.1:122 OK (v2.9.0)

> AVISO: todos os dados no appliance GitHub Enterprise 169.154.1.1 (v2.9.0)
>          serão substituídos por dados do instantâneo 20170329T150710.
> Antes de prosseguir, confirme se o host de restauração está correto.
> Digite 'sim' para continuar: <em>sim</em>

> Iniciando restauração de 169.154.1.1:122 a partir do instantâneo 20170329T150710
# ...saída truncada
> Restauração concluída de 169.154.1.1:122 a partir do instantâneo 20170329T150710
> Acesse https://169.154.1.1/setup/settings para revisar a configuração do appliance.
```

{% note %}

**Observação:** as configurações de rede são excluídas do instantâneo de backup. Você deve configurar manualmente a rede no appliance de destino do {% data variables.product.prodname_ghe_server %} conforme o seu ambiente.

{% endnote %}

Você pode usar estas opções adicionais com o comando `ghe-restore`:
- O sinalizador `-c` substitui as configurações, os certificados e os dados de licença no host de destino, mesmo que já configurado. Omita esse sinalizador se você estiver configurando uma instância de preparo para fins de teste e se quiser manter a configuração no destino. Para obter mais informações, consulte a seção "Usar comandos de backup e restauração" do [LEIAME do {% data variables.product.prodname_enterprise_backup_utilities %}](https://github.com/github/backup-utils#using-the-backup-and-restore-commands).
- O sinalizador `-s` permite selecionar outro instantâneo de backup.
  
