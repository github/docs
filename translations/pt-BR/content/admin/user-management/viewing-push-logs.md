---
title: Exibir logs de push
intro: 'Os administradores do site podem exibir uma lista de operações push do Git para qualquer repositório na {% data variables.product.product_location_enterprise %}.'
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs/
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
versions:
  enterprise-server: '*'
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

1. Navegue até um repositório.
{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.security-tab %}
4. Na barra lateral esquerda, clique em **Push Log** (Log de push). ![Guia de log de push](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

### Exibir os logs de push do repositório na linha de comando

1. Acesse o SSH no appliance. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)".
2. No repositório do Git adequado, abra o arquivo de log de auditoria:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "less audit_log"
  ```
