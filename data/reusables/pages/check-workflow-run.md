{% ifversion fpt %} 
1. If your {% data variables.product.prodname_pages %} site is built from a public repository, it is built and deployed with a {% data variables.product.prodname_actions %} workflow run unless you've configured your {% data variables.product.prodname_pages %} site to use a different CI tool{% ifversion pages-custom-workflow %} or you are publishing with a custom {% data variables.product.prodname_actions %} workflow instead of publishing from a branch{% endif %}. For more information about how to view the workflow status, see "[Viewing workflow run history](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history)."

{% note %}

{% data reusables.pages.pages-builds-with-github-actions-public-beta %}

{% endnote %}{% endif %}
