You can either create a repository or choose an existing repository for your site.

If you want to create a {% data variables.product.prodname_pages %} site for a repository where not all of the files in the repository are related to the site, you will be able to configure a publishing source for your site. For example, you can have a dedicated branch and folder to hold your site source files{% ifversion pages-custom-workflow %}, or you can use a custom {% data variables.product.prodname_actions %} workflow to build and deploy your site source files{% endif %}.

{% ifversion fpt or ghec %}如果拥有仓库的帐户使用组织的 {% data variables.product.prodname_free_user %} 或 {% data variables.product.prodname_free_team %}，仓库必须是公共的。{% endif %}

如果要在现有仓库中创建站点，请跳至“[创建站点](#creating-your-site)”一节。
