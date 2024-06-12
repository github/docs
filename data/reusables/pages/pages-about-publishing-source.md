{% ifversion pages-custom-workflow %}

You can publish your site when changes are pushed to a specific branch, or you can write a {% data variables.product.prodname_actions %} workflow to publish your site. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}

If you do not need any control over the build process for your site, we recommend that you publish your site when changes are pushed to a specific branch. {% data reusables.pages.pages-about-branch-source %}

If you want to use a build process other than Jekyll or you do not want a dedicated branch to hold your compiled static files, we recommend that you write a {% data variables.product.prodname_actions %} workflow to publish your site. {% data variables.product.product_name %} provides starter workflows for common publishing scenarios to help you write your workflow.

{% else %}

Your {% data variables.product.prodname_pages %} site will publish whenever changes are pushed to a specific branch. {% data reusables.pages.pages-about-branch-source %}

{% endif %}
