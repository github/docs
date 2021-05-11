---
title: Renaming an organization
intro: 'If your project or company has changed names, you can update the name of your organization to match.'
redirect_from:
  - /articles/what-happens-when-i-change-my-organization-s-name/
  - /articles/renaming-an-organization
  - /github/setting-up-and-managing-organizations-and-teams/renaming-an-organization
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Organizations
  - Teams
---

{% tip %}

**Tip:** Only organization owners can rename an organization. {% data reusables.organizations.new-org-permissions-more-info %}

{% endtip %}

### What happens when I change my organization's name?

After changing your organization's name, your old organization name becomes available for someone else to claim. When you change your organization's name, most references to your repositories under the old organization name automatically change to the new name. However, some links to your profile won't automatically redirect.

#### Changes that occur automatically

- {% data variables.product.prodname_dotcom %} automatically redirects references to your repositories.  Web links to your organization's existing **repositories** will continue to work. This can take a few minutes to complete after you initiate the change.
- You can continue pushing your local repositories to the old remote tracking URL without updating it. However, we recommend you update all existing remote repository URLs after changing your organization name. Because your old organization name is available for use by anyone else after you change it, the new organization owner can create repositories that override the redirect entries to your repository. For more information, see "[Managing remote repositories](/github/getting-started-with-github/managing-remote-repositories)."
- Previous Git commits will also be correctly attributed to users within your organization.

#### Changes that aren't automatic

After changing your organization's name:
- Links to your previous organization profile page, such as `https://{% data variables.command_line.backticks %}/previousorgname`, will return a 404 error. We recommend you update links to your organization from other sites{% if currentVersion == "free-pro-team@latest" %}, such as your LinkedIn or Twitter profiles{% endif %}.
- API requests that use the old organization's name will return a 404 error. We recommend you update the old organization name in your API requests.
- There are no automatic [@mention](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams) redirects for teams that use the old organization's name.{% if currentVersion == "free-pro-team@latest" %}
- If SAML single sign-on (SSO) is enabled for the organization, you must update the organization name in the application for {% data variables.product.prodname_ghe_cloud %} on your identity provider (IdP). If you don't update the organization name on your IdP, members of the organization will no longer be able to authenticate with your IdP to access the organization's resources. For more information, see "[Connecting your identity provider to your organization](/github/setting-up-and-managing-organizations-and-teams/connecting-your-identity-provider-to-your-organization)."{% endif %}

### Changing your organization's name

{% data reusables.profile.access_profile %}
{% data reusables.profile.access_org %}
{% data reusables.organizations.org_settings %}
4. Near the bottom of the settings page, under "Rename organization", click **Rename Organization**. ![Rename organization button](/assets/images/help/settings/settings-rename-organization.png)

### Дополнительная литература

* "[Why are my commits linked to the wrong user?](/articles/why-are-my-commits-linked-to-the-wrong-user)"
