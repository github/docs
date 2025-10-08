---
title: Inviting collaborators to a personal repository
intro: 'You can {% ifversion fpt or ghec %}invite users to become{% else %}add users as{% endif %} collaborators to your personal repository.'
redirect_from:
  - /articles/how-do-i-add-a-collaborator
  - /articles/adding-collaborators-to-a-personal-repository
  - /articles/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/inviting-collaborators-to-a-personal-repository
  - /github/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository
product: '{% data reusables.gated-features.user-repo-collaborators %}'
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Repositories
shortTitle: Invite collaborators
---

## Inviting a collaborator to a personal repository

You can send an invitation to collaborate in your repository directly to someone on {% data variables.product.prodname_dotcom %}{% ifversion fpt or ghec %}, or to the person's email address{% elsif ghes %}.{% endif %}.

1. Ask for the username of the person you're inviting as a collaborator.{% ifversion fpt or ghec %} If they don't have a username yet, they can sign up for {% data variables.product.prodname_dotcom %}. For more information, see [AUTOTITLE](/get-started/start-your-journey/creating-an-account-on-github).{% endif %}
{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Access" section of the sidebar, click **{% octicon "people" aria-hidden="true" aria-label="people" %} Collaborators**.
1. Click **Add people**.
1. In the search field, start typing the name of person you want to invite, then click a name in the list of matches.
1. Click **Add NAME to REPOSITORY**.
{% ifversion fpt or ghec %}
1. The user will receive an email inviting them to the repository. Once they accept your invitation, they will have collaborator access to your repository.
{% endif %}

## Next steps

* For reference information, see [AUTOTITLE](/account-and-profile/reference/permission-levels-for-a-personal-account-repository#collaborator-access-for-a-repository-owned-by-a-personal-account)
