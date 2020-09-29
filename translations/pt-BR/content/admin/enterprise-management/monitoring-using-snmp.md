---
title: Monitorar usando SNMP
intro: 'O {% data variables.product.prodname_enterprise %} fornece dados sobre o uso de disco, CPU, memória e muito mais no SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp/
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
versions:
  enterprise-server: '*'
---

O SNMP é um padrão comum para monitorar dispositivos em uma rede. É altamente recomendável ativar o SNMP para monitorar a integridade da {% data variables.product.product_location_enterprise %} e saber quando adicionar mais memória, armazenamento ou potência do processador à máquina host.

O {% data variables.product.prodname_enterprise %} tem uma instalação SNMP padrão que permite aproveitar [vários plugins](http://www.monitoring-plugins.org/doc/man/check_snmp.html) disponíveis para Nagios ou qualquer outro sistema de monitoramento.

### Configurar SMTP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. No campo **Community string** (String de comunidade), insira a nova string da comunidade. Se deixada em branco, essa informação fica como `public` por padrão. ![Campo para adicionar a string da comunidade](/assets/images/enterprise/management-console/community-string.png)
{% data reusables.enterprise_management_console.save-settings %}
5. Teste a configuração SNMP executando o seguinte comando em uma estação de trabalho separada com suporte a SNMP na rede:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Isso deve retornar o horário do sistema no host do {% data variables.product.product_location_enterprise %}.

### Segurança baseada no usuário

Se habilitar o SNMP v3, você poderá aproveitar o aumento da segurança baseada no usuário por meio do User Security Model (USM). É possível especificar um nível de segurança para cada usuário:
- `noAuthNoPriv`: este nível de segurança não oferece autenticação nem privacidade.
- `authNoPriv`: este nível de segurança oferece autenticação, mas não privacidade. Para consultar o appliance, você precisará de nome de usuário e senha (com pelo menos oito caracteres). As informações são enviadas sem criptografia, de modo semelhante ao SNMPv2. O protocolo de autenticação pode ser MD5 ou SHA, e o padrão é SHA.
- `authPriv`: este nível de segurança oferece autenticação e privacidade. A autenticação (com senha de no mínimo oito caracteres) é necessária, e as respostas são criptografadas. Não é necessário usar uma senha de privacidade, mas, se houver, ela deve ter no mínimo oito caracteres. Se não houver senha de privacidade, a senha de autenticação será usada. O protocolo de privacidade pode ser DES ou AES, e o padrão é AES.

### Configurar usuários para o SNMP v3

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.access-monitoring %}
{% data reusables.enterprise_management_console.enable-snmp %}
4. Selecione **SNMP v3**. ![Botão para habilitar o SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. Em "Username" (Nome de usuário), digite o nome exclusivo do seu usuário SNMP v3. ![Campo para digitar o nome de usuário SNMP v3](/assets/images/enterprise/management-console/snmpv3-username.png)
6. No menu suspenso **Security Level** (Nível de segurança), clique no nível de segurança do seu usuário SNMP v3. ![Menu suspenso para o nível de segurança do usuário SNMP v3](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Para usuários SNMP v3 com nível de segurança `authnopriv`: ![Configurações para o nível de segurança authnopriv](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Para usuários SNMP v3 com nível de segurança `authpriv`: ![Configurações para o nível de segurança authpriv](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Como alternativa, em "Privacy password" (senha de privacidade), digite a senha de privacidade.
    - No lado direito de "Privacy password" (Senha de privacidade), no menu suspenso **Protocol** (Protocolo), clique no protocolo de privacidade que você deseja usar.
9. Clique em **Add user** (Adicionar usuário). ![Botão para adicionar usuário SNMP v3](/assets/images/enterprise/management-console/snmpv3-adduser.png)
{% data reusables.enterprise_management_console.save-settings %}

##### Consultar dados SNMP

As informações de hardware e software do appliance estão disponíveis no SNMP v3. Devido à falta de criptografia e privacidade para os níveis de segurança `noAuthNoPriv` e `authNoPriv`, a tabela `hrSWRun` (1.1.3.6.1.2.1.25.41) foi excluída dos relatórios SNMP resultantes. Incluímos esta tabela para o caso de você estar usando o nível de segurança `authPriv`.

Com o SNMP v2c, ficam disponíveis somente as informações em nível de hardware. Os aplicativos e serviços no {% data variables.product.prodname_enterprise %} não têm OIDs configurados para reportar métricas. Diversas MIBs estão disponíveis, o que pode ser visto ao executar `snmpwalk` em uma estação de trabalho à parte com suporte SNMP na rede:

```shell
# community-string é a string de sua comunidade
# hostname é o IP ou domínio da sua instância Enterprise
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Das MIBs disponíveis para SNMP, a mais útil é a `HOST-RESOURCES-MIB` (.1.3.6.1.2.1.25). Consulte a tabela a seguir para ver objetos importantes dessa MIB:

| Nome                       | OID                       | Descrição                                                                             |
| -------------------------- | ------------------------- | ------------------------------------------------------------------------------------- |
| hrSystemDate.2             | .1.3.6.1.2.1.25.1.2       | A noção dos hosts de data e hora locais de um dia.                                    |
| hrSystemUptime.0           | .1.3.6.1.2.1.25.1.1.0     | Tempo transcorrido desde a última inicialização do host.                              |
| hrMemorySize.0             | .1.3.6.1.2.1.25.2.2.0     | Quantidade de RAM no host.                                                            |
| hrSystemProcesses.0        | .1.3.6.1.2.1.25.1.6.0     | Número de contextos de processo carregados ou em execução no host.                    |
| hrStorageUsed.1            | .1.3.6.1.2.1.25.2.3.1.6.1 | Quantidade de espaço de armazenamento consumido no host, em hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | .1.3.6.1.2.1.25.2.3.1.4.1 | Tamanho em bytes de um hrStorageAllocationUnit.                                       |

Por exemplo, para consultar `hrMemorySize` com SNMP v3, execute o seguinte comando em outra estação de trabalho com suporte a SNMP na sua rede:
```shell
# username é o nome exclusivo do seu usuário do SNMP v3
# auth password é a senha de autenticação
# privacy password é a senha de privacidade
# hostname é o IP ou domínio da sua instância do Enterprise
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Para consultar `hrMemorySize` com SNMP v2c, execute o seguinte comando em outra estação de trabalho com suporte a SNMP na sua rede:
```shell
# community-string é a string da sua comunidade
# hostname é o IP ou domínio da sua instância do Enterprise
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Observação:** para evitar o vazamento de informações sobre os serviços em execução no seu appliance, a tabela `hrSWRun` (1.1.3.6.1.2.1.25.41) foi excluída dos relatórios SNMP resultantes, a menos que você esteja usando o nível de segurança `authPriv` com SNMP v3. Incluímos a tabela `hrSWRun` para o caso de você estar usando o nível de segurança `authPriv`.

{% endtip %}

Para obter mais informações sobre mapeamentos OID para atributos comuns do sistema no SNMP, consulte "[OID de SNMP do Linux para estatísticas de CPU, memória e disco](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)".
