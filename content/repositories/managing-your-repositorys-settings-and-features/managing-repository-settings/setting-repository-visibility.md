---
title: Setting repository visibility
intro: You can choose who can view your repository.
redirect_from:
  - /articles/making-a-private-repository-public
  - /articles/making-a-public-repository-private
  - /articles/converting-a-public-repo-to-a-private-repo
  - /articles/setting-repository-visibility
  - /github/administering-a-repository/setting-repository-visibility
  - /github/administering-a-repository/managing-repository-settings/setting-repository-visibility
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Repository visibility
---
## About repository visibility changes

Organization owners can restrict the ability to change repository visibility to organization owners only. For more information, see "[Restricting repository visibility changes in your organization](/organizations/managing-organization-settings/restricting-repository-visibility-changes-in-your-organization)."

{% ifversion ghec %}

Members of an {% data variables.product.prodname_emu_enterprise %} can only set the visibility of repositories owned by their personal account to private, and repositories in their enterprise's organizations can only be private or internal. For more information, see "[About {% data variables.product.prodname_emus %}](/admin/authentication/managing-your-enterprise-users-with-your-identity-provider/about-enterprise-managed-users)."

{% endif %}

We recommend reviewing the following caveats before you change the visibility of a repository.

{% ifversion ghes or ghae %}

{% warning %}

**Warning:** Changes to the visibility of a large repository or repository network may affect data integrity. Visibility changes can also have unintended effects on forks. {% data variables.product.company_short %} recommends the following before changing the visibility of a repository network.

- Wait for a period of reduced activity on {% data variables.product.product_location %}.

- Contact your {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %} before proceeding. Your {% ifversion ghes %}site administrator{% elsif ghae %}enterprise owner{% endif %} can contact {% data variables.contact.contact_ent_support %} for further guidance.

{% endwarning %}

{% endif %}

### Making a repository private
{% ifversion fpt or ghes or ghec %}
* {% data variables.product.product_name %} will detach public forks of the public repository and put them into a new network. Public forks are not made private.{% endif %}
{%- ifversion ghes or ghec or ghae %}
* If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository. {% ifversion fpt or ghes or ghec %}The visibility of any forks will also change to private.{% elsif ghae %}If the internal repository has any forks, the visibility of the forks is already private.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"
{%- endif %}

{%- ifversion fpt %}
* If you're using {% data variables.product.prodname_free_user %} for personal accounts or organizations, some features won't be available in the repository after you change the visibility to private. Any published {% data variables.product.prodname_pages %} site will be automatically unpublished. If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see "[{% data variables.product.company_short %}'s products](/get-started/learning-about-github/githubs-products) and "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."
{%- endif %}

{%- ifversion fpt or ghec %}
* {% data variables.product.prodname_dotcom %} will no longer include the repository in the {% data variables.product.prodname_archive %}. For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."
* {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %}, will stop working{% ifversion ghec %} unless the repository is owned by an organization that is part of an enterprise with a license for {% data variables.product.prodname_advanced_security %} and sufficient spare seats{% endif %}. {% data reusables.advanced-security.more-info-ghas %}
{%- endif %}

{%- ifversion ghes %}
* Anonymous Git read access is no longer available. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/user/articles/enabling-anonymous-git-read-access-for-a-repository)."
{%- endif %}

{% ifversion ghes or ghec or ghae %}

### Making a repository internal

* Any forks of the repository will remain in the repository network, and {% data variables.product.product_name %} maintains the relationship between the root repository and the fork. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% ifversion fpt or ghes or ghec %}

### Making a repository public

* {% data variables.product.product_name %} will detach private forks and turn them into a standalone private repository. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% ifversion fpt or ghec %}
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Once your repository is public, you can also view your repository's community profile to see whether your project meets best practices for supporting contributors. For more information, see "[Viewing your community profile](/articles/viewing-your-community-profile)."
* The repository will automatically gain access to {% data variables.product.prodname_GH_advanced_security %} features.

For information about improving repository security, see "[Securing your repository](/code-security/getting-started/securing-your-repository)."{% endif %}

{% endif %}

## Changing a repository's visibility

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", to the right of to "Change repository visibility", click **Change visibility**.
   ![Change visibility button](/assets/images/help/repository/repo-change-vis.png)
4. Select a visibility.
{% ifversion fpt or ghec %}
   ![Dialog of options for repository visibility](/assets/images/help/repository/repo-change-select.png){% else %}
   ![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. To verify that you're changing the correct repository's visibility, type the name of the repository you want to change the visibility of.
6. Click **I understand, change repository visibility**.
{% ifversion fpt or ghec %}
   ![Confirm change of repository visibility button](/assets/images/help/repository/repo-change-confirm.png){% else %}
   ![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}


## Further reading
- "[About repositories](/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility)"
