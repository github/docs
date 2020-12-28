---
title: Inviting collaborators to a personal repository
intro: 'You can {% if currentVersion == "free-pro-team@latest" %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator/
  - /articles/adding-collaborators-to-a-personal-repository/
  - /articles/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

Repositories owned by an organization can grant more granular access. For more information, see "[Access permissions on {% data variables.product.product_name %}](/articles/access-permissions-on-github)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.20" or currentVersion == "github-ae@latest" %}
{% data reusables.organizations.org-invite-expiration %}
{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

{% note %}

**Note:** {% data variables.product.company_short %} limits the number of people who can be invited to a repository within a 24-hour period. If you exceed this limit, either wait 24 hours or create an organization to collaborate with more people.

{% endnote %}

{% endif %}

1. Ask for the username of the person you're inviting as a collaborator.{% if currentVersion == "free-pro-team@latest" %} If they don't have a username yet, they can sign up for {% data variables.product.prodname_dotcom %} For more information, see "[Signing up for a new {% data variables.product.prodname_dotcom %} account](/articles/signing-up-for-a-new-github-account)".{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
{% if currentVersion == "free-pro-team@latest" %}
{% data reusables.repositories.navigate-to-manage-access %}
1. Click **Invite a collaborator**.
  !["Invite a collaborator" button](/assets/images/help/repository/invite-a-collaborator-button.png)
2. In the search field, start typing the name of person you want to invite, then click a name in the list of matches.
  ![Search field for typing the name of a person to invite to the repository](/assets/images/help/repository/manage-access-invite-search-field-user.png)
3. Click **Add NAME to REPOSITORY**.
    ![Button to add collaborator](/assets/images/help/repository/add-collaborator-user-repo.png)
{% else %}
5. In the left sidebar, click **Collaborators**.
![Repository settings sidebar with Collaborators highlighted](/assets/images/help/repository/user-account-repo-settings-collaborators.png)
6. Under "Collaborators", start typing the collaborator's username.
7. Select the collaborator's username from the drop-down menu.
   ![Collaborator list drop-down menu](/assets/images/help/repository/repo-settings-collab-autofill.png)
8. Click **Add collaborator**.
   ![Add button](/assets/images/help/repository/repo-settings-collab-add.png)
{% endif %}
{% if currentVersion == "free-pro-team@latest" %}
9. The user will receive an email inviting them to the repository. Once they accept your invitation, they will have collaborator access to your repository.
{% endif %}

### Further reading

- "[Permission levels for a user account repository](/articles/permission-levels-for-a-user-account-repository/#collaborator-access-for-a-repository-owned-by-a-user-account)"
- "[Removing a collaborator from a personal repository](/articles/removing-a-collaborator-from-a-personal-repository)"
- "[Removing yourself from a collaborator's repository](/articles/removing-yourself-from-a-collaborator-s-repository)"
- "[Organizing members into teams](/articles/organizing-members-into-teams)"
