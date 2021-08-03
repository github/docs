---
title: Exibir logs de push
intro: Os administradores do site podem ver uma lista de operações de push do Git para qualquer repositório na empresa.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
---
As entradas de log de push mostram o seguinte:

- Quem iniciou o push;
- Se o push foi forçado ou não;
- O branch para o qual o push foi feito;
- O protocolo usado para fazer push;
- O endereço IP de origem;
- O cliente Git usado para fazer push;
- Os hashes SHA de antes e depois da operação.

### Exibir os logs de push do repositório

1. Efetue o login em {% data variables.product.prodname_ghe_server %} como administrador do site.
1. Navegue até um repositório.
1. No canto superior direito da página do repositório, clique em
{% octicon "rocket" aria-label="The rocket ship" %}.
    ![Ícone de foguete para acessar as configurações de administrador do site](/assets/images/enterprise/site-admin-settings/access-new-settings.png)
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. Na barra lateral esquerda, clique em **Push Log** (Log de push). ![Guia de log de push](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% if enterpriseServerVersions contains currentVersion %}
### Exibir os logs de push do repositório na linha de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
1. No repositório do Git adequado, abra o arquivo de log de auditoria:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
{% endif %}
