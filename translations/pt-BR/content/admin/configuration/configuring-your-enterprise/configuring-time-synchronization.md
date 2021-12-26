---
title: Configurar a sincronização de hora
intro: 'O {% data variables.product.prodname_ghe_server %} sincroniza automaticamente o relógio conectando-se a servidores NTP. Você pode definir os servidores NTP usados para sincronizar o relógio ou pode usar os servidores NTP padrão.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock/
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings/
  - /enterprise/admin/articles/setting-ntp-servers/
  - /enterprise/admin/categories/time/
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  enterprise-server: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
---

### Alterar os servidores NTP padrão

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
2. Na barra lateral esquerda, clique em **Time** (Hora). ![Botão Time (Hora) na barra lateral do {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/sidebar-time.png)
3. Em "Primary NTP server" (Servidor NTP primário), digite o nome do host do servidor NTP primário. Em "Secondary NTP server" (Servidor NTP secundário), digite o nome do host do servidor NTP secundário. ![Campos de servidores NTP primário e secundário no {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. Na parte inferior da página, clique em **Save settings** (Salvar configurações). ![Botão Save settings (Salvar configurações) no {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Aguarde a conclusão da execução de suas configurações.

### Corrigir descompassos de tempo

O protocolo NTP corrige continuamente pequenas discrepâncias de sincronização de tempo. Você pode usar o shell administrativo para sincronizar a hora de imediato.

{% note %}

**Notas:**
 - Você não pode modificar o Tempo Universal Coordenado (UTC);
 - Você deve impedir seu hipervisor de tentar configurar o relógio da máquina virtual. Para obter mais informações, consulte a documentação fornecida pelo provedor de virtualização.

{% endnote %}

- Use o comando `chronyc` para sincronizar seu servidor com o servidor NTP configurado. Por exemplo:

```shell
$ sudo chronyc -a makestep
```
