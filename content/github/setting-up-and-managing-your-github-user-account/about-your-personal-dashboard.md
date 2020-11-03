---
title: About your personal dashboard
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github/
  - /articles/opting-into-the-public-beta-for-a-new-dashboard/
  - /articles/about-your-personal-dashboard
intro: 'You can visit your personal dashboard to keep track of issues and pull requests you''re working on or following, navigate to your top repositories and team pages, stay updated on recent activities in organizations and repositories you''re subscribed to, and explore recommended repositories.'
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Accessing your personal dashboard

Your personal dashboard is the first page you'll see when you sign in on {% data variables.product.product_name %}.

To access your personal dashboard once you're signed in, click the {% octicon "mark-github" aria-label="The github octocat logo" %} in the upper-left corner of any page on {% data variables.product.product_url %}.

### Finding your recent activity

In the "Recent activity" section of your news feed, you can quickly find and follow up with recently updated issues and pull requests you're working on. Under "Recent activity", you can preview up to 12 recent updates made in the last two weeks.

{% data reusables.dashboard.recent-activity-qualifying-events %}

### Finding your top repositories and teams

In the left sidebar of your dashboard, you can access the top repositories and teams you use.

![list of repositories and teams from different organizations](/assets/images/help/dashboard/repositories-and-teams-from-personal-dashboard.png)

The list of top repositories is automatically generated, and can include any repository you have interacted with, whether it's owned directly by your account or not. Interactions include making commits and opening or commenting on issues and pull requests. The list of top repositories cannot be edited, but repositories will drop off the list 4 months after you last interacted with them.

You can also find a list of your recently visited repositories, teams, and project boards when you click into the search bar at the top of any page on {% data variables.product.product_name %}.

### Staying updated with activity from the community

In the "All activity" section of your news feed, you can view updates from repositories you're subscribed to and people you follow. The "All activity" section shows updates from repositories you watch or have starred, and from users you follow.

You'll see updates in your news feed when a user you follow:
- Stars a repository.
- Follows another user.
- Creates a public repository.
- Opens an issue or pull request with "help wanted" or "good first issue" label on a repository you're watching.
- Pushes commits to a repository you watch.
- Forks a public repository.

For more information about starring repositories and following people, see "[Saving repositories with stars](/articles/saving-repositories-with-stars/)" and "[Following people](/articles/following-people)."

### Exploring recommended repositories

In the "Explore repositories" section on the right side of your dashboard, you can explore recommended repositories in your communities. Recommendations are based on repositories you've starred or visited, the people you follow, and activity within repositories that you have access to.{% if currentVersion == "free-pro-team@latest" %} For more information, see "[Finding ways to contribute to open source on {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/finding-ways-to-contribute-to-open-source-on-github)."{% endif %}

### Further reading

- "[About your organization dashboard](/articles/about-your-organization-dashboard)"
