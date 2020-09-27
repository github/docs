---
title: Habilitar enlace entre la información de GitHub y GitHub Enterprise
intro: 'Puedes habilitar un enlace que les permitirá a los usuarios navegar desde {{ site.data.variables.product.prodname_ghe_server }} hasta {{  site.data.variables.product.prodname_insights }}.'
product: '{{ site.data.reusables.gated-features.github-insights }}'
permissions: 'Los administradores del sitio de {{ site.data.variables.product.prodname_ghe_server }} pueden habilitar un enlace entre {{ site.data.variables.product.prodname_ghe_server }} y {{ site.data.variables.product.prodname_insights }}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '>=2.19'
---

Una vez que habilitas el enlace, cada usuario puede navegar directamente desde {{ site.data.variables.product.prodname_ghe_server }} hasta {{ site.data.variables.product.prodname_insights }}. Para obtener más información, consulta "[Navegar entre {{ site.data.variables.product.prodname_enterprise }} y {{ site.data.variables.product.prodname_insights }}](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)".

1. Conéctate al shell administrativo de {{ site.data.variables.product.prodname_ghe_server }}. Para obtener más información, consulta "[Acceder al shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)."
2. Ejecuta el siguiente comando.
  ```
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. Regresar a {{ site.data.variables.product.prodname_ghe_server }}.
{{ site.data.reusables.enterprise_site_admin_settings.access-settings }}
{{ site.data.reusables.enterprise_site_admin_settings.business }}
{{ site.data.reusables.enterprise-accounts.settings-tab }}
7. Under
{% octicon "gear" aria-label="The Settings gear" %} **Settings**, click **{{ site.data.variables.product.prodname_insights }}**.
  {% note %}

  **Nota:** Después de ejecutar el comando de configuración, tarda varios minutos hasta que esta opción se vuelve disponible en {{ site.data.variables.product.prodname_enterprise }}. Si no ves **{{ site.data.variables.product.prodname_insights }}**, espera o reinicia {{ site.data.variables.product.prodname_enterprise }}.

  {% endnote %}

  ![Pestaña {{ site.data.variables.product.prodname_insights }}](/assets/images/help/business-accounts/github-insights-tab.png)
3. Debajo de "URL de la instancia de {{ site.data.variables.product.prodname_insights }}", escribe la URL del servidor que usa tu empresa para {{ site.data.variables.product.prodname_insights }}. ![URL de la instancia de {{ site.data.variables.product.prodname_insights }}](/assets/images/help/business-accounts/insights-instance-url.png)
4. Haz clic en **Save (Guardar)**.
