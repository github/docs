---
title: Habilitar um link entre o GitHub Insights e o GitHub Enterprise
intro: 'Você pode habilitar um link que permitirá que os usuários naveguem de {% data variables.product.prodname_ghe_server %} para {% data variables.product.prodname_insights %}.'
permissions: 'Site administrators for {% data variables.product.prodname_ghe_server %} can enable a link between {% data variables.product.prodname_ghe_server %} and {% data variables.product.prodname_insights %}.'
redirect_from:
  - /github/installing-and-configuring-github-insights/navigating-between-github-insights-and-github-enterprise
  - /github/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
  - /insights/installing-and-configuring-github-insights/enabling-a-link-between-github-insights-and-github-enterprise
versions:
  enterprise-server: '*'
---

Após habilitar o link, cada usuário poderá navegar diretamente de {% data variables.product.prodname_ghe_server %} para {% data variables.product.prodname_insights %}. Para obter mais informações, consulte "[Navegando entre {% data variables.product.prodname_enterprise %} e {% data variables.product.prodname_insights %}](/insights/exploring-your-usage-of-github-enterprise/navigating-between-github-enterprise-and-github-insights)".

1. Entre em contato com o shell administrativo para {% data variables.product.prodname_ghe_server %}. Para obter mais informações, consulte "[Acessar o shell administrativo (SSH)](/enterprise/{{ currentVersion }}/admin/guides/installation/accessing-the-administrative-shell-ssh/)".
2. Execute o comando a seguir.
  ```shell
  ghe-config 'app.github.insights-available' 'true' && ghe-config-apply
  ```
3. Volte para o {% data variables.product.prodname_ghe_server %}.
{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
7. Em {% octicon "gear" aria-label="The Settings gear" %} **Configurações**, clique em **{% data variables.product.prodname_insights %}**.
  {% note %}

  **Observação:** Após executar o comando de configuração, leva vários minutos para que esta opção fique disponível em {% data variables.product.prodname_enterprise %}. Se você não vir **{% data variables.product.prodname_insights %}**, aguarde ou reinicie o {% data variables.product.prodname_enterprise %}.

  {% endnote %}

  ![Aaba {% data variables.product.prodname_insights %}](/assets/images/help/business-accounts/github-insights-tab.png)
3. Em "URL da instância do {% data variables.product.prodname_insights %}", digite a URL do servidor que sua empresa usa para {% data variables.product.prodname_insights %}. ![URL da instância do {% data variables.product.prodname_insights %}](/assets/images/help/business-accounts/insights-instance-url.png)
4. Clique em **Salvar**.
