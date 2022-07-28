{%- ifversion ghes %}
- {% data variables.product.prodname_actions %} deve ser habilitado para {% data variables.product.product_name %}. Um administrador do site pode habilitar e configurar {% data variables.product.prodname_actions %} na sua instância. Para obter mais informações, consulte "[Primeiros passos com {% data variables.product.prodname_actions %} for {% data variables.product.prodname_ghe_server %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server)".
{%- endif %}

- Você precisa ter acesso à máquina que você usará como um executor auto-hospedado em seu ambiente.

- {% data reusables.actions.self-hosted-runner-ports-protocols %} Para obter mais informações, consulte "[Sobre executores auto-hospedados](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-between-self-hosted-runners-and-github-ae)."
