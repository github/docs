---
title: Setting repository visibility
intro: You can choose who can view your repository.
redirect_from:
  - /articles/making-a-private-repository-public/
  - /articles/making-a-public-repository-private/
  - /articles/converting-a-public-repo-to-a-private-repo/
  - /articles/setting-repository-visibility
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - repositories
---

### About repository visibility changes

Organization owners can restrict the ability to change repository visibility to organization owners only. For more information, see "[Restricting repository visibility changes in your organization](/github/setting-up-and-managing-organizations-and-teams/restricting-repository-visibility-changes-in-your-organization)."

We recommend reviewing the following caveats before you change the visibility of a repository.

#### Making a repository private
{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}
* {% data variables.product.product_name %} will detach public forks of the public repository and put them into a new network. Public forks are not made private.{% endif %}
* If you change a repository's visibility from internal to private, {% data variables.product.prodname_dotcom %} will remove forks that belong to any user without access to the newly private repository. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}The visibility of any forks will also change to private.{% elsif currentVersion == "github-ae@latest" %}If the internal repository has any forks, the visibility of the forks is already private.{% endif %} For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"{% if currentVersion == "free-pro-team@latest" %}
* If you're using {% data variables.product.prodname_free_user %} for user accounts or organizations, some features won't be available in the repository after you change the visibility to private. {% data reusables.gated-features.more-info %}{% endif %}
* Any published {% data variables.product.prodname_pages %} site will be automatically unpublished.{% if currentVersion == "free-pro-team@latest" %} If you added a custom domain to the {% data variables.product.prodname_pages %} site, you should remove or update your DNS records before making the repository private, to avoid the risk of a domain takeover. For more information, see "[Managing a custom domain for your {% data variables.product.prodname_pages %} site](/articles/managing-a-custom-domain-for-your-github-pages-site)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_dotcom %} will no longer include the repository in the {% data variables.product.prodname_archive %}. For more information, see "[About archiving content and data on {% data variables.product.prodname_dotcom %}](/github/creating-cloning-and-archiving-repositories/about-archiving-content-and-data-on-github#about-the-github-archive-program)."{% endif %}{% if currentVersion == "free-pro-team@latest" %}
* {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %}, will stop working unless the repository is owned by an organization that is part of an enterprise with a license for {% data variables.product.prodname_advanced_security %} and sufficient spare seats. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% if enterpriseServerVersions contains currentVersion %}
* Anonymous Git read access is no longer available. For more information, see "[Enabling anonymous Git read access for a repository](/enterprise/{{ currentVersion }}/user/articles/enabling-anonymous-git-read-access-for-a-repository)."{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.19" %}

#### Making a repository internal

{% note %}

**Note:** {% data reusables.gated-features.internal-repos %}

{% endnote %}

* Any forks of the repository will remain in the repository network, and {% data variables.product.product_name %} maintains the relationship between the root repository and the fork. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility)"

{% endif %}

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

#### Making a repository public

* {% data variables.product.product_name %} will detach private forks and turn them into a standalone private repository. For more information, see "[What happens to forks when a repository is deleted or changes visibility?](/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility#changing-a-private-repository-to-a-public-repository)"{% if currentVersion == "free-pro-team@latest" %}
* If you're converting your private repository to a public repository as part of a move toward creating an open source project, see the [Open Source Guides](http://opensource.guide) for helpful tips and guidelines. You can also take a free course on managing an open source project with [{% data variables.product.prodname_learning %}]({% data variables.product.prodname_learning_link %}). Once your repository is public, you can also view your repository's community profile to see whether your project meets best practices for supporting contributors. For more information, see "[Viewing your community profile](/articles/viewing-your-community-profile)."
* The repository will automatically gain access to {% data variables.product.prodname_GH_advanced_security %} features.

For information about improving repository security, see "[About securing your repository](/github/administering-a-repository/about-securing-your-repository)."{% endif %}

{% endif %}

{% if currentVersion == "free-pro-team@latest" or currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

### Changing a repository's visibility

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", to the right of to "Change repository visibility", click **Change visibility**.
   ![Change visibility button](/assets/images/help/repository/repo-change-vis.png)
4. Select a visibility.
{% if currentVersion == "free-pro-team@latest" %}
   ![Dialog of options for repository visibility](/assets/images/help/repository/repo-change-select.png){% else %}
   ![Dialog of options for repository visibility](/assets/images/enterprise/repos/repo-change-select.png){% endif %}
5. To verify that you're changing the correct repository's visibility, type the name of the repository you want to change the visibility of.
6. Click **I understand, change repository visibility**.
{% if currentVersion == "free-pro-team@latest" %}
   ![Confirm change of repository visibility button](/assets/images/help/repository/repo-change-confirm.png){% else %}
   ![Confirm change of repository visibility button](/assets/images/enterprise/repos/repo-change-confirm.png){% endif %}
{% endif %}

{% if currentVersion ver_lt "enterprise-server@2.22" %}

### Making a repository private

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository private", click **Make private**.
   ![Make private button](/assets/images/help/repository/repo-makeprivate.png)
4. Read the warnings about making a repository private.
   ![Warnings popup](/assets/images/help/repository/repo-privateconfirm.png)
5. Type the name of the repository that you want to make private, for example `accountname/reponame`.
6. Click **I understand, make this repository private**.

### Making a repository public

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository public", click **Make public**.
   ![Make public button](/assets/images/help/repository/repo-makepublic.png)
4. Read the warnings about making a repository public.
  ![Pop-up with information about making a private repository public](/assets/images/help/repository/repo-publicconfirm.png)
5. Type the name of the repository that you want to make public, for example `accountname/reponame`.
6. Click **I understand, make this repository public**.

{% if currentVersion ver_gt "enterprise-server@2.19" %}
### Making a repository internal

{% data reusables.organizations.internal-repos-enterprise %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. Under "Danger Zone", next to "Make this repository internal", click **Make internal**.
   ![Make internal button](/assets/images/help/repository/repo-makeinternal.png)
4. Read the warnings about making a repository internal.
   ![Warnings popup](/assets/images/help/repository/repo-internalconfirm.png)
5. Type the name of the repository that you want to make internal, for example `accountname/reponame`.
6. Click **I understand, make this repository internal**.
{% endif %}

{% endif %}

### Further reading
- "[About repository visibility](/github/creating-cloning-and-archiving-repositories/about-repository-visibility)"
