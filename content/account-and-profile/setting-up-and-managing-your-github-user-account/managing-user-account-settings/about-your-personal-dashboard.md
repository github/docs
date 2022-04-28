---
title: About your personal dashboard
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
intro: 'You can visit your personal dashboard to keep track of issues and pull requests you''re working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you''re subscribed to, and explore recommended repositories.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Your personal dashboard
---
## Accessing your personal dashboard

Your personal dashboard is the first page you'll see when you sign in on {% data variables.product.product_name %}.

To access your personal dashboard once you're signed in, click the {% octicon "mark-github" aria-label="The github octocat logo" %} in the upper-left corner of any page on {% data variables.product.product_name %}.

## Finding your recent activity

In the "Recent activity" section of your news feed, you can quickly find and follow up with recently updated issues and pull requests you're working on. Under "Recent activity", you can preview up to 4 recent updates made in the last two weeks.

{% data reusables.dashboard.recent-activity-qualifying-events %}

## Finding your top repositories and teams

In the left sidebar of your dashboard, you can access the top repositories and teams you use.

![list of repositories and teams from different organizations](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

The list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include making commits and opening or commenting on issues and pull requests. The list of top repositories cannot be edited, but repositories will drop off the list 4 months after you last interacted with them.

You can also find a list of your recently visited repositories, teams, and project boards when you click into the search bar at the top of any page on {% data variables.product.product_name %}.

## Staying updated with activity from the community

{% if for-you-feed %}
The main section of your dashboard has two activity feeds:

- Following: Activity by people you follow and from repositories you watch.
- For you: Activity and recommendations based on your {% data variables.product.product_name %} network.

### Following feed

This feed shows activity from repositories and users you have shown a direct interest in, by following a user or watching a repository. For example, you'll see updates when a user you follow:

{% else %}
In the "All activity" section of your news feed, you can view updates from repositories you watch and users you follow.

You'll see updates in your news feed when a user you follow:
{% endif %}


- Stars a repository.
- Follows another user.{% ifversion fpt or ghes or ghec %}
- Creates a public repository.{% endif %}
- Opens an issue or pull request with "help wanted" or "good first issue" label on a repository you're watching.
- Pushes commits to a repository you watch.{% ifversion fpt or ghes or ghec %}
- Forks a public repository.{% endif %}
- Publishes a new release.

For more information about following people and watching repositories, see "[Following people](/get-started/exploring-projects-on-github/following-people)" and "[Be social](/get-started/quickstart/be-social)."

{% if for-you-feed %}
### For you feed

{% note %}

**Note:** This new tab is currently in public beta and subject to change. 

{% endnote %}

This feed shows activity and recommendations based on your network on {% data variables.product.product_name %}. It's designed to provide updates that inspire you, keep you up-to-date, and help you find new communities you want to participate in. Your network includes:

- Repositories you have starred
- Repositories you've contributed to
- Users you follow or sponsor
- Users you've collaborated with
- Organizations you follow

{% endif %}

## Exploring recommended repositories

In the "Explore repositories" section on the right side of your dashboard, you can explore recommended repositories in your communities. Recommendations are based on repositories you've starred or visited, the people you follow, and activity within repositories that you have access to.{% ifversion fpt or ghec %} For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

## Further reading

- "[About your organization dashboard](/articles/about-your-organization-dashboard)"
