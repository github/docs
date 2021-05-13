---
title: Criar réplica de alta disponibilidade
intro: 'Em uma configuração ativa/passiva, o appliance réplica é uma cópia redundante do appliance primário. Em caso de falha no appliance primário, o modo de alta disponibilidade permitirá que a réplica atue como appliance primário, mitigando as interrupções de serviço.'
redirect_from:
  - /enterprise/admin/installation/creating-a-high-availability-replica
  - /enterprise/admin/enterprise-management/creating-a-high-availability-replica
versions:
  enterprise-server: '*'
topics:
  - Enterprise
---

{% data reusables.enterprise_installation.replica-limit %}

### Criar réplica de alta disponibilidade

1. Configure um novo appliance do {% data variables.product.prodname_ghe_server %} na plataforma desejada. O appliance réplica deve refletir as configurações de CPU, RAM e armazenamento do appliance primário. É recomendável instalar o appliance réplica em um ambiente independente. Hardware, software e componentes de rede subjacentes devem ser isolados dos do appliance primário. Se estiver em um provedor de nuvem, use uma região ou zona separada. Para obter mais informações, consulte [Configurar uma instância do {% data variables.product.prodname_ghe_server %}](/enterprise/{{ currentVersion }}/admin/guides/installation/setting-up-a-github-enterprise-server-instance).
2. Em um navegador, vá até o novo endereço IP do appliance réplica e faça o upload da sua licença do {% data variables.product.prodname_enterprise %}.
3. Defina uma senha de administrador correspondente à senha no appliance primário e continue.
4. Clique em **Configure as Replica** (Configurar como réplica). ![Opções de instalação com link para configurar a nova instância como réplica](/assets/images/enterprise/management-console/configure-as-replica.png)
5. Em "Add new SSH key" (Adicionar nova chave SSH), digite a chave SSH. ![Adicionar chave SSH](/assets/images/enterprise/management-console/add-ssh-key.png)
6. Clique em **Add key** (Adicionar chave) e em **Continue** (Continuar).
6. Conecte-se ao endereço IP do appliance réplica usando SSH.
  ```shell
  $ ssh -p 122 admin@<em>REPLICA IP</em>
  ```
7. Para gerar um par de chaves para replicação, use o comando `ghe-repl-setup` com o endereço IP do appliance primário e copie a chave pública que ele retorna.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.add-ssh-key-to-primary %}
9. Para verificar a conexão com o primário e habilitar o modo de réplica para a nova réplica, execute `ghe-repl-setup` novamente.
  ```shell
  $ ghe-repl-setup <em>PRIMARY IP</em>
  ```
{% data reusables.enterprise_installation.replication-command %}
11. Para verificar o status do canal de replicação de cada armazenamento de dados, use o comando `ghe-repl-status`.
  ```shell
  $ ghe-repl-status
  ```

### Criar réplicas com replicação geográfica

Este exemplo de configuração usa um primário e duas réplicas, localizados em três regiões geográficas diferentes. Mesmo que os três nós estejam em redes diferentes, todos os nós precisam estar acessíveis entre si. No mínimo, as portas administrativas necessárias devem ficar abertas para todos os outros nós. Para obter mais informações sobre os requisitos de portas, consulte "[Portas de rede](/enterprise/{{ currentVersion }}/admin/guides/installation/network-ports/#administrative-ports)".

1. Crie a primeira réplica da mesma forma que você faria em uma configuração padrão de dois nós executando `ghe-repl-setup` na primeira réplica.
  ```shell
  (replica1)$ ghe-repl-setup <em>PRIMARY IP</em>
  (replica1)$ ghe-repl-start
  ```
2. Crie a segunda réplica e use o comando `ghe-repl-setup --add`. O sinalizador `--add` impede a substituição da configuração de replicação atual e adiciona a nova réplica à configuração.
  ```shell
  (replica2)$ ghe-repl-setup --add <em>PRIMARY IP</em>
  (replica2)$ ghe-repl-start
  ```
3. Por padrão, as réplicas são configuradas no mesmo centro de dados e agora tentarão propagar a partir de um nó existente no mesmo centro de dados. Configure as réplicas para datacenters diferentes definindo outros valores na opção do datacenter. Você pode especificar os valores que preferir, desde que sejam diferentes uns dos outros. Execute o comando `ghe-repl-node` em cada nó e especifique o datacenter.

  No primário:
  ```shell
  (primary)$ ghe-repl-node --datacenter <em>[PRIMARY DC NAME]</em>
  ```
  Na primeira réplica:
  ```shell
  (replica1)$ ghe-repl-node --datacenter <em>[FIRST REPLICA DC NAME]</em>
  ```
  Na segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --datacenter <em>[SECOND REPLICA DC NAME]</em>
  ```
  {% tip %}

  **Dica:** você pode definir as opções `--datacenter` e `--active` simultaneamente.

  {% endtip %}
4. Um nó de réplica ativo armazenará cópias dos dados do appliance e solicitações do usuário final do serviço. Um nó inativo armazenará cópias dos dados do appliance, mas não as solicitações do usuário final do serviço. Habilite o modo ativo usando o sinalizador `--active` ou use o sinalizador `--inactive` para o modo inativo.

  Na primeira réplica:
  ```shell
  (replica1)$ ghe-repl-node --active
  ```
  Na segunda réplica:
  ```shell
  (replica2)$ ghe-repl-node --active
  ```
5. Para aplicar a configuração, use o comando `ghe-config-apply` no primário.
  ```shell
  (primary)$ ghe-config-apply
  ```

### Configurar DNS de localização geográfica

Configure o Geo DNS usando os endereços IP dos nós primário e das réplicas. Você também pode criar um DNS CNAME para o nó primário (por exemplo, `primary.github.example.com`) para acessar o nó primário via SSH ou fazer backup usando `backup-utils`.

Para fins de teste, é possível adicionar entradas ao arquivo `hosts` da estação de trabalho local (por exemplo, `/etc/hosts`). Essas entradas de exemplo resolverão as solicitações de `HOSTNAME` para `replica2`. É possível segmentar hosts específicos comentando linhas diferentes.

```
# <primary IP>     <em>HOSTNAME</em>
# <replica1 IP>    <em>HOSTNAME</em>
<replica2 IP>    <em>HOSTNAME</em>
```

### Leia mais

- [Sobre a configuração de alta disponibilidade](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration)
- [Utilitários para gerenciamento de replicações](/enterprise/{{ currentVersion }}/admin/guides/installation/about-high-availability-configuration/#utilities-for-replication-management)
- [Sobre a replicação geográfica](/enterprise/{{ currentVersion }}/admin/guides/installation/about-geo-replication/)
