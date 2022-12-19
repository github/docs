---
title: Fornecer dados para o GitHub Support
intro: 'Uma vez que {% data variables.contact.github_support %} não tem acesso ao seu ambiente, às vezes exigimos alguma informação adicional sobre você.'
shortTitle: Providing data
versions:
  ghes: '*'
redirect_from:
  - /enterprise/admin/guides/installation/troubleshooting
  - /enterprise/admin/articles/support-bundles
  - /enterprise/admin/guides/enterprise-support/providing-data-to-github-enterprise-support
  - /enterprise/admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/providing-data-to-github-support
  - /admin/enterprise-support/receiving-help-from-github-support/providing-data-to-github-support
topics:
  - Support
ms.openlocfilehash: 56a90a9449a92577d08e068095e5b0dc5b443bb2
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/10/2022
ms.locfileid: '146331909'
---
## Sobre os arquivos de diagnóstico e pacotes de suporte

{% data variables.contact.github_support %} pode solicitar que você forneça dados adicionais na forma de arquivos de registro excluídos. Existem três tipos de arquivo de registro que podem ser solicitados que você forneça.

Os arquivos de diagnóstico contêm informações sobre as configurações e o ambiente de uma instância de {% data variables.product.prodname_ghe_server %}, os pacotes de suporte contêm diagnósticos e registros dos últimos dois dias, e pacotes de suporte estendidos também contêm diagnósticos e registros, mas dos últimos sete dias.

## Sobre o arquivo de registro sanitização

Os tokens de autenticação, chaves e segredos são removidos dos arquivos de registro nos seguintes diretórios de registro contidos em um pacote de suporte ou arquivo de diagnóstico:

* `alambic-logs`
* `babeld-logs`
* `codeload-logs`
* `enterprise-manage-logs`
* `github-logs`
* `hookshot-logs`
* `lfs-server-logs`
* `semiotic-logs`
* `task-dispatcher-logs`
* `pages-logs`
* `registry-logs`
* `render-logs`
* `svn-bridge-logs`

## Criar e compartilhar arquivos de diagnóstico

Os arquivos de diagnóstico são uma visão geral das configurações e do ambiente de uma instância de {% data variables.product.prodname_ghe_server %} que contém:

- Informações da licença do cliente, incluindo o nome da empresa, data de validade e número de licenças de usuário
- Números de versão e SHAs;
- Arquitetura de VMs;
- Nome de host, modo privado, configurações de SSL;
- Listagens de carga e processo;
- Configurações de rede
- Método e detalhes de autenticação;
- Número de repositórios, usuários e outros dados de instalação.

Baixe o diagnóstico para sua instância do {% data variables.enterprise.management_console %} ou executando o utilitário de linha de comando `ghe-diagnostics`.

### Criar um arquivo de diagnóstico no {% data variables.enterprise.management_console %}

Você pode usar esse método se não tiver sua chave SSH disponível no momento.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Clique em **Baixar informações de diagnóstico**.

### Criar um arquivo de diagnóstico usando SSH

Você pode usar esse método sem entrar no {% data variables.enterprise.management_console %}.

Use o utilitário de linha de comando [ghe-diagnostics](/enterprise/admin/guides/installation/command-line-utilities#ghe-diagnostics) para recuperar o diagnóstico para sua instância.

```shell
$ ssh -p122 admin@<em>hostname</em> -- 'ghe-diagnostics' > diagnostics.txt
```

## Criar e compartilhar pacotes de suporte

Depois do envio da sua solicitação de suporte, podemos pedir que você compartilhe um pacote de suporte com a nossa equipe. O pacote de suporte é um arquivo tar compactado com gzip que inclui diagnósticos e logs importantes da sua instância, como:

- Logs relacionados à autenticação que podem ser úteis na solução de problemas de erros de autenticação, ou na configuração de LDAP, CAS ou SAML;
- Log do {% data variables.enterprise.management_console %};
- `github-logs/exceptions.log`: informações sobre os erros 500 encontrados no site
- `github-logs/audit.log`: logs de auditoria do {% data variables.product.prodname_ghe_server %}
- `babeld-logs/babeld.log`: logs de proxy do Git
- `system-logs/haproxy.log`: logs do HAProxy
- `elasticsearch-logs/github-enterprise.log`: logs do Elasticsearch
- `configuration-logs/ghe-config.log`: logs de configuração do {% data variables.product.prodname_ghe_server %}
- `collectd/logs/collectd.log`: logs do Collectd
- `mail-logs/mail.log`: logs de entrega de email SMTP

Para obter mais informações, confira "[Sobre o log de auditoria para sua empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/about-the-audit-log-for-your-enterprise)".

Os pacotes de suporte incluem logs dos últimos dois dias. Para obter logs dos últimos sete dias, você pode baixar um pacote de suporte estendido. Para obter mais informações, confira "[Como criar e compartilhar pacotes de suporte estendido](#creating-and-sharing-extended-support-bundles)".

{% tip %}

**Dica:** ao entrar em contato com o {% data variables.contact.github_support %}, você receberá um email de confirmação que conterá um link de referência do tíquete. Se o {% data variables.contact.github_support %} solicitar o upload de um pacote de suporte, você pode usar o link de referência do tíquete para fazer o upload requisitado.

{% endtip %}

### Criar um pacote de suporte no {% data variables.enterprise.management_console %}

Você pode usar essas etapas para criar e compartilhar um pacote de suporte se conseguir acessar o {% data variables.enterprise.management_console %} e se tiver acesso à internet.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.type-management-console-password %} {% data reusables.enterprise_management_console.support-link %}
5. Clique em **Baixar pacote de suporte**.
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Criar um pacote de suporte usando SSH

Você pode usar esses passos para criar e compartilhar um pacote de suporte se você tiver acesso de SSH ao {% data variables.product.product_location %} e tiver acesso à internet de saída.

{% data reusables.enterprise_enterprise_support.use_ghe_cluster_support_bundle %}

1. Baixe o pacote de suporte via SSH:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o' > support-bundle.tgz
  ```
  Para obter mais informações sobre o comando `ghe-support-bundle`, confira "[Utilitários de linha de comando](/enterprise/admin/guides/installation/command-line-utilities#ghe-support-bundle)".
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Carregar um pacote de suporte usando sua conta corporativa

{% data reusables.enterprise-accounts.access-enterprise-on-dotcom %} {% data reusables.enterprise-accounts.settings-tab %}
3. Na barra lateral esquerda, clique em **Licenciamento da empresa**.
  ![Captura de tela que mostra o link "Licenciamento da empresa" na barra lateral das configurações da conta corporativa.](/assets/images/help/enterprises/enterprise-licensing-tab.png)
4. Em "Ajuda do {% data variables.product.prodname_enterprise %}", clique em **Carregar um pacote de suporte**.
  ![Captura de tela que mostra "Carregar um link de pacote de suporte".](/assets/images/enterprise/support/upload-support-bundle.png)
5. Em "Selecione uma conta corporativa", selecione a conta associada ao pacote de suporte no menu suspenso.
  ![Captura de tela que mostra o menu suspenso usado para selecionar a conta corporativa do pacote de suporte.](/assets/images/enterprise/support/support-bundle-account.png)
6. Em "Carregar um pacote de suporte para o {% data variables.contact.enterprise_support %}", para selecionar o pacote de suporte, clique em **Escolher arquivo** ou arraste o arquivo de pacote de suporte para **Escolher arquivo**.
  ![Captura de tela que mostra o botão "Escolher arquivo" para carregar um arquivo de pacote de suporte.](/assets/images/enterprise/support/choose-support-bundle-file.png)
7. Clique em **Carregar**.

### Fazer upload de um pacote de suporte usando SSH

Você pode fazer upload diretamente de um pacote de suporte para o nosso servidor nas seguintes situações:
- Você tem acesso de SSH a {% data variables.product.product_location %}.
- As conexões HTTPS de saída na porta TCP 443 são permitidas por meio do {% data variables.product.product_location %} para _enterprise-bundles.github.com_ e _esbtoolsproduction.blob.core.windows.net_.

1. Faça upload do pacote para o nosso servidor de pacotes de suporte:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u'
  ```

## Criar e compartilhar pacotes de suporte estendidos

Os pacotes de suporte incluem os logs dos últimos dois dias, enquanto os pacotes de suporte _estendidos_ incluem os logs dos últimos sete dias. Se os eventos que o {% data variables.contact.github_support %} está investigando tiverem ocorrido há mais de dois dias, poderemos solicitar que você compartilhe um pacote de suporte estendido. Você precisará do acesso SSH para baixar um pacote estendido, e não é possível fazer o download de um pacote estendido no {% data variables.enterprise.management_console %}.

Para evitar que fiquem grandes demais, os pacotes só têm logs que não passaram por rotação nem compactação. A rotação de arquivos de registro no {% data variables.product.prodname_ghe_server %} acontece em várias frequências (diária ou semanalmente) para diferentes arquivos, dependendo das expectativas de tamanho dos registros.

### Criar um pacote de suporte estendido usando SSH

Você pode usar essas etapas para criar e compartilhar um pacote de suporte estendido se você tiver acesso de SSH ao {% data variables.product.product_location %} e tiver acesso à internet de saída.

1. Baixe o pacote de suporte estendido por meio do SSH adicionando o sinalizador `-x` ao comando `ghe-support-bundle`:
  ```shell
  $ ssh -p 122 admin@<em>hostname</em> -- 'ghe-support-bundle -o -x' > support-bundle.tgz
  ```
{% data reusables.enterprise_enterprise_support.sign-in-to-support %} {% data reusables.enterprise_enterprise_support.upload-support-bundle %}

### Fazer upload de um pacote de suporte estendido usando SSH

Você pode fazer upload diretamente de um pacote de suporte para o nosso servidor nas seguintes situações:
- Você tem acesso de SSH a {% data variables.product.product_location %}.
- As conexões HTTPS de saída na porta TCP 443 são permitidas por meio do {% data variables.product.product_location %} para _enterprise-bundles.github.com_ e _esbtoolsproduction.blob.core.windows.net_.

1. Faça upload do pacote para o nosso servidor de pacotes de suporte:
  ```shell
  $ ssh -p122 admin@<em>hostname</em> -- 'ghe-support-bundle -u -x'
  ```

## Leitura adicional

- "[Sobre o Suporte do GitHub](/support/learning-about-github-support/about-github-support)"
- "[Como gerar uma verificação de integridade para sua empresa](/enterprise-server@latest/admin/enterprise-management/monitoring-your-appliance/generating-a-health-check-for-your-enterprise)"
