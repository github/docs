Ao usar a interface de usuário web para tentar confirmar um segredo suportado para um repositório ou organização com digitalização de segredo como uma proteção de push habilitada {% data variables.product.prodname_dotcom %} bloqueará o commit.

Você verá um banner no topo da página com informações sobre a localização do segredo, e o segredo também será sublinhado no arquivo para que você possa encontrá-lo facilmente.

{% ifversion push-protection-custom-link-orgs %}

  ![Captura de tela que mostra o commit na interface de usuário da web bloqueado devido à proteção de push da digitalização de segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner-with-link.png)

{% else %}

  ![Captura de tela que mostra o commit na interface de usuário da web bloqueado devido à proteção de push da digitalização de segredo](/assets/images/help/repository/secret-scanning-push-protection-web-ui-commit-blocked-banner.png)

{% endif %}