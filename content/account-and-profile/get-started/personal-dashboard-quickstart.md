---
title: Quickstart for your personal dashboard
redirect_from:
  - /hidden/about-improved-navigation-to-commonly-accessed-pages-on-github
  - /articles/opting-into-the-public-beta-for-a-new-dashboard
  - /articles/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/about-your-personal-dashboard
  - /github/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard
  - /account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-user-account-settings/about-your-personal-dashboard
  - /account-and-profile/get-started/about-your-personal-dashboard
intro: Your personal dashboard helps you track issues and pull requests, find your top repositories and teams, stay up-to-date with organizations and repositories you're subscribed to, and explore recommended repositories.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
shortTitle: Personal dashboard quickstart
contentType: get-started
---

## Accessing your personal dashboard

Your personal dashboard is the first page you'll see when you sign in on {% data variables.product.github %}.

To access your personal dashboard once you're signed in, click the {% octicon "mark-github" aria-label="The github octocat logo" %} in the upper-left corner of any page.

## Finding your recent activity

In the "Recent activity" section of your news feed, you can quickly find and follow up with recently updated issues and pull requests you're working on.

## Finding your top repositories and teams

In the global navigation menu, you can access the top repositories and teams you use. To open the menu, select {% octicon "three-bars" aria-label="Open global navigation menu" %} at the top left of any page.

  ![Screenshot of the navigation bar on {% data variables.product.github %}. The "Open global navigation menu" icon is outlined in dark orange.](/assets/images/help/navigation/global-navigation-menu-icon.png)

You can also find a list of your recently visited repositories, teams, and projects when you click into the search bar at the top of any page on {% data variables.product.github %}.

## Staying up-to-date with activity from the community

{% ifversion feed %}

{% data reusables.dashboard.feed-beta-note %}

The feed is designed to help you discover relevant content from projects you follow, keep up with your friends and community members, and track recent activity in your communities.

You can use the **{% octicon "filter" aria-hidden="true" aria-label="filter" %} Filter** dropdown in the upper right corner to filter the feed to show only the exact event types you'd like to see.

{% else %}
The main section of your dashboard has two activity feeds:

* Following: Activity by people you follow and from repositories you watch.
* For you: Activity and recommendations based on your {% data variables.product.github %} network.

### Following feed

This feed shows activity from repositories and users you have shown a direct interest in, by following a user or watching a repository.

For more information about following people and starring repositories, see [AUTOTITLE](/get-started/exploring-projects-on-github/following-people) and [AUTOTITLE](/get-started/exploring-projects-on-github/saving-repositories-with-stars).

### For you feed

{% data reusables.dashboard.for-you-feed-beta-note %}

This feed shows activity and recommendations based on your network on {% data variables.product.github %}. It's designed to provide updates that inspire you, keep you up-to-date, and help you find new communities you want to participate in.

{% endif %}

{% ifversion home-dashboard-view %}

## Working with {% data variables.product.prodname_copilot %} from your dashboard

{% data reusables.dashboard.home-dashboard-public-preview-note %}

The home dashboard view gives you visibility into your {% data variables.copilot.copilot_coding_agent %} sessions and helps you manage your most important tasks more efficiently. You can prompt {% data variables.product.prodname_copilot %} directly from the dashboard, track the latest agent sessions you've triggered, quickly access agent logs to see progress, and manage the resulting pull requests and tasks. This centralized view makes it easier to stay on top of your agent activities and follow up on their outcomes.

To view the updated home dashboard, which is currently in {% data variables.release-phases.public_preview %}, you will first need to enable **New Dashboard Experience** with feature preview. For more information, see [AUTOTITLE](/get-started/using-github/exploring-early-access-releases-with-feature-preview#exploring-public-preview-releases-with-feature-preview).

{% endif %}

## Next steps

To understand how {% data variables.product.github %} determines what is displayed on your personal dashboard, see [AUTOTITLE](/account-and-profile/reference/personal-dashboard).
