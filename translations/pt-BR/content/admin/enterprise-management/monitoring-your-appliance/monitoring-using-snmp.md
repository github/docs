---
title: Monitorar usando SNMP
intro: 'O {% data variables.product.prodname_enterprise %} fornece dados sobre o uso de disco, CPU, memória e muito mais no SNMP.'
redirect_from:
  - /enterprise/admin/installation/monitoring-using-snmp
  - /enterprise/admin/articles/monitoring-using-snmp
  - /enterprise/admin/enterprise-management/monitoring-using-snmp
  - /admin/enterprise-management/monitoring-using-snmp
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Monitoring
  - Performance
ms.openlocfilehash: 0f156d2939cbc83e3b0a72bbc1cbaf72f0c886d7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145179149'
---
O SNMP é um padrão comum para monitorar dispositivos em uma rede. Recomendamos expressamente habilitar o SNMP para que você possa monitorar a integridade do {% data variables.product.product_location %} e saber quando adicionar mais memória, armazenamento ou potência do processador ao computador host.

O {% data variables.product.prodname_enterprise %} tem uma instalação SNMP padrão, ou seja, você pode aproveitar os [vários plug-ins](https://www.monitoring-plugins.org/doc/man/check_snmp.html) disponíveis para o Nagios ou para qualquer outro sistema de monitoramento.

## Configurar SMTP v2c

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. No campo **Cadeia de caracteres da comunidade**, insira uma nova cadeia de caracteres da comunidade. Se ele for deixado em branco, `public` será usado como padrão.
![Campo usado para adicionar a cadeia de caracteres da comunidade](/assets/images/enterprise/management-console/community-string.png) {% data reusables.enterprise_management_console.save-settings %}
5. Teste a configuração SNMP executando o seguinte comando em uma estação de trabalho separada com suporte a SNMP na rede:
  ```shell
  # community-string is your community string
  # hostname is the IP or domain of your Enterprise instance
  $ snmpget -v 2c -c <em>community-string</em> -O e <em>hostname</em> hrSystemDate.0
  ```

Isso retornará a hora do sistema no host do {% data variables.product.product_location %}.

## Segurança baseada no usuário

Se habilitar o SNMP v3, você poderá aproveitar o aumento da segurança baseada no usuário por meio do User Security Model (USM). É possível especificar um nível de segurança para cada usuário:
- `noAuthNoPriv`: esse nível de segurança não fornece autenticação nem privacidade.
- `authNoPriv`: esse nível de segurança fornece autenticação, mas sem privacidade. Para consultar o appliance, você precisará de nome de usuário e senha (com pelo menos oito caracteres). As informações são enviadas sem criptografia, de modo semelhante ao SNMPv2. O protocolo de autenticação pode ser MD5 ou SHA, e o padrão é SHA.
- `authPriv`: esse nível de segurança fornece autenticação com privacidade. A autenticação (com senha de no mínimo oito caracteres) é necessária, e as respostas são criptografadas. Não é necessário usar uma senha de privacidade, mas, se houver, ela deve ter no mínimo oito caracteres. Se não houver senha de privacidade, a senha de autenticação será usada. O protocolo de privacidade pode ser DES ou AES, e o padrão é AES.

## Configurar usuários para o SNMP v3

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.access-monitoring %} {% data reusables.enterprise_management_console.enable-snmp %}
4. Selecione **SNMP v3**.
![Botão usado para habilitar o SNMP v3](/assets/images/enterprise/management-console/enable-snmpv3.png)
5. Em "Username" (Nome de usuário), digite o nome exclusivo do seu usuário SNMP v3.
![Campo usado para digitar o nome de usuário do SNMP v3](/assets/images/enterprise/management-console/snmpv3-username.png)
6. No menu suspenso **Nível de segurança**, clique no nível de segurança do seu usuário do SNMP v3.
![Menu suspenso para o nível de segurança do usuário do SNMP v3](/assets/images/enterprise/management-console/snmpv3-securitylevel.png)
7. Para usuários do SNMP v3 com o nível de segurança `authnopriv`: ![Configurações para o nível de segurança authnopriv](/assets/images/enterprise/management-console/snmpv3-authnopriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
8. Para os usuários do SNMP v3 com o nível de segurança `authpriv`: ![Configurações para o nível de segurança authpriv](/assets/images/enterprise/management-console/snmpv3-authpriv.png)
    - {% data reusables.enterprise_management_console.authentication-password %}
    - {% data reusables.enterprise_management_console.authentication-protocol %}
    - Como alternativa, em "Privacy password" (senha de privacidade), digite a senha de privacidade.
    - No lado direito de "Senha de privacidade", no menu suspenso **Protocolo**, clique no protocolo de autenticação que deseja usar.
9. Clique em **Adicionar usuário**.
![Botão usado para adicionar o usuário do SNMP v3](/assets/images/enterprise/management-console/snmpv3-adduser.png) {% data reusables.enterprise_management_console.save-settings %}

#### Consultar dados SNMP

As informações de hardware e software do appliance estão disponíveis no SNMP v3. Devido à falta de criptografia e privacidade para os níveis de segurança `noAuthNoPriv` e `authNoPriv`, excluímos a tabela `hrSWRun` (1.3.6.1.2.1.25.4) dos relatórios resultantes do SNMP. Incluímos essa tabela se você usa o nível de segurança `authPriv`. Para obter mais informações, confira a "[Documentação de referência de OID](https://oidref.com/1.3.6.1.2.1.25.4)". 

Com o SNMP v2c, ficam disponíveis somente as informações em nível de hardware. Os aplicativos e serviços no {% data variables.product.prodname_enterprise %} não têm OIDs configurados para reportar métricas. Vários MIBs estão disponíveis, que você pode ver executando `snmpwalk` em uma estação de trabalho separada com suporte a SNMP na sua rede:

```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
$ snmpwalk -v 2c -c <em>community-string</em> -O e <em>hostname</em>
```

Dos MIBs disponíveis para o SNMP, o mais útil é `HOST-RESOURCES-MIB` (1.3.6.1.2.1.25). Consulte a tabela a seguir para ver objetos importantes dessa MIB:

| Nome | OID | Descrição |
| ---- | --- | ----------- |
| hrSystemDate.2 | 1.3.6.1.2.1.25.1.2 | A noção dos hosts de data e hora locais de um dia. |
| hrSystemUptime.0 | 1.3.6.1.2.1.25.1.1.0 | Tempo transcorrido desde a última inicialização do host. |
| hrMemorySize.0 | 1.3.6.1.2.1.25.2.2.0 | Quantidade de RAM no host. |
| hrSystemProcesses.0 | 1.3.6.1.2.1.25.1.6.0 | Número de contextos de processo carregados ou em execução no host. |
| hrStorageUsed.1 | 1.3.6.1.2.1.25.2.3.1.6.1 | Quantidade de espaço de armazenamento consumido no host, em hrStorageAllocationUnits. |
| hrStorageAllocationUnits.1 | 1.3.6.1.2.1.25.2.3.1.4.1 | Tamanho em bytes de um hrStorageAllocationUnit. |

Por exemplo, para consultar `hrMemorySize` com o SNMP v3, execute o seguinte comando em uma estação de trabalho separada com suporte a SNMP na sua rede:
```shell
# username is the unique username of your SNMP v3 user
# auth password is the authentication password
# privacy password is the privacy password
# hostname is the IP or domain of your Enterprise instance
$ snmpget -v 3 -u <em>username</em> -l authPriv \
  -A "<em>auth password</em>" -a SHA \
  -X "<em>privacy password</em>" -x AES \
  -O e <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

Com o SNMP v2c, para consultar `hrMemorySize`, execute o seguinte comando em uma estação de trabalho separada com suporte a SNMP na sua rede:
```shell
# community-string is your community string
# hostname is the IP or domain of your Enterprise instance
snmpget -v 2c -c <em>community-string</em> <em>hostname</em> HOST-RESOURCES-MIB::hrMemorySize.0
```

{% tip %}

**Observação:** para evitar o vazamento de informações sobre serviços em execução no dispositivo, excluímos a tabela `hrSWRun` (1.3.6.1.2.1.25.4) dos relatórios resultantes do SNMP, a menos que você esteja usando o nível de segurança `authPriv` com o SNMP v3. Se você estiver usando o nível de segurança `authPriv`, incluiremos a tabela `hrSWRun`.

{% endtip %}

Para obter mais informações sobre os mapeamentos de OID para atributos comuns do sistema no SNMP, confira "[OID do SNMP do Linux para CPU, memória e estatísticas de disco](http://www.linux-admins.net/2012/02/linux-snmp-oids-for-cpumemory-and-disk.html)".
