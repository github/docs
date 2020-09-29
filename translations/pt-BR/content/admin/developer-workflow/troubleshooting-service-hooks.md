---
title: Solução de problemas com hooks de serviço
intro: 'Se as cargas não estiverem sendo entregues, verifique se há problemas comuns.'
redirect_from:
  - /enterprise/admin/articles/troubleshooting-service-hooks/
  - /enterprise/admin/developer-workflow/troubleshooting-service-hooks
versions:
  enterprise-server: '*'
---

### Obter informações nas entregas

Você pode encontrar informações sobre a resposta mais recente de todas as entregas de hooks de serviço em qualquer repositório.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Hooks** na barra de navegação lateral. ![Barra lateral de hooks](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Latest Delivery** (Entrega mais recente) no hook de serviço que apresentou problemas. ![Detalhes de hooks](/assets/images/enterprise/settings/Enterprise-Hooks-Details.png)
5. Em **Remote Calls** (Chamadas remotas), você verá os cabeçalhos usados durante o POST para o servidor remoto e a resposta que o servidor remoto enviou de volta à instalação.

### Exibir a carga

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Hooks** na barra de navegação lateral. ![Barra lateral de hooks](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Latest Delivery** (Entrega mais recente) no hook de serviço que apresentou problemas.
5. Clique em **Delivery** (Entrega). ![Exibir a carga](/assets/images/enterprise/settings/Enterprise-Hooks-Payload.png)

### Exibir entregas anteriores

As entregas ficam armazenadas por 15 dias.

{% data reusables.enterprise_site_admin_settings.access-settings %}
2. Navegue até o repositório que você está investigando.
3. Clique no link **Hooks** na barra de navegação lateral. ![Barra lateral de hooks](/assets/images/enterprise/settings/Enterprise-Hooks-Sidebar.png)
4. Clique no link **Latest Delivery** (Entrega mais recente) no hook de serviço que apresentou problemas.
5. Para exibir outras entregas de um hook específico, clique em **More for this Hook ID** (Mais informações sobre este ID de hook): ![Exibir mais entregas](/assets/images/enterprise/settings/Enterprise-Hooks-More-Deliveries.png)
