You can either create a repository or choose an existing repository for your site.

If you want to create a {% data variables.product.prodname_pages %} site for a repository where not all of the files in the repository are related to the site, you will be able to configure a publishing source for your site. For example, you can have a dedicated branch and folder to hold your site source {% ifversion pages-custom-workflow %}files, or you can use a custom {% data variables.product.prodname_actions %} workflow to build and deploy your site source files. {% data reusables.actions.settings-ui.settings-actions-pages-custom-workflow %}{% else %}files.{% endif %}

{% ifversion fpt or ghec %}If the account that owns the repository uses {% data variables.product.prodname_free_user %} or {% data variables.product.prodname_free_team %} for organizations, the repository must be public.{% endif %}

 If you want to create a site in an existing repository, skip to the "[Creating your site](#creating-your-site)" section.
