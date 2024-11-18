---
title: Viewing contributions on your profile
intro: 'Your {% data variables.product.product_name %} profile shows off your pinned repositories, Achievements, and a graph of your repository contributions over the past year.'
redirect_from:
  - /articles/viewing-contributions
  - /articles/viewing-contributions-on-your-profile-page
  - /articles/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: View contributions
---
Your contribution graph and Achievements show activity from public repositories. You can choose to show activity from both public and private repositories, with specific details of your activity in private repositories anonymized. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)."

{% note %}

**Note:** Commits will only appear on your contributions graph if the email address you used to author the commits is connected to your account on {% data variables.product.product_name %}. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

{% endnote %}

## What counts as a contribution

On your profile page, certain actions count as contributions:

* Committing to a repository's default branch or `gh-pages` branch
* Creating a branch
* Opening an issue
* Opening a discussion
* Answering a discussion
* Proposing a pull request
* Submitting a pull request review{% ifversion ghes %}
* Co-authoring commits in a repository's default branch or `gh-pages` branch{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

## Popular repositories

This section displays your repositories with the most watchers. Once you [pin repositories to your profile](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile), this section will change to "Pinned."

## Pinned

This section displays up to six public repositories or gists. Important details are listed for each of the items you've chosen to feature. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)."

![Screenshot of the "Pinned repositories" section of a user's profile page.](/assets/images/help/profile/profile-pinned-repositories.png)

## Contributions calendar

Your contributions calendar shows your contribution activity.

### Viewing contributions from specific times

* Click on a day's square to show the contributions made during that 24-hour period.
* Press _Shift_ and click on another day's square to show contributions made during that time span.

{% note %}

**Note:** You can select up to a one-month range on your contributions calendar. If you select a larger time span, we will only display one month of contributions.

{% endnote %}

![Screenshot of the contributions graph on a user profile.](/assets/images/help/profile/contributions-graph.png)

### How contribution event times are calculated

Timestamps are calculated differently for commits and pull requests:
* **Commits** use the time zone information in the commit timestamp. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/troubleshooting-commits-on-your-timeline)."
* **Pull requests** and **issues** opened on {% data variables.product.product_name %} use your browser's time zone. Those opened via the API use the timestamp or time zone [specified in the API call](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

## Activity overview

{% data reusables.profile.activity-overview-summary %} For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-an-overview-of-your-activity-on-your-profile)."

![Screenshot of the activity overview section of a user profile.](/assets/images/help/profile/activity-overview-section.png)

The organizations featured in the activity overview are prioritized according to how active you are in the organization. If you @mention an organization in your profile bio, and you’re an organization member, then that organization is prioritized first in the activity overview. For more information, see "[AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#mentioning-people-and-teams)" or "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile)."

## Contribution activity

The contribution activity section includes a detailed timeline of your work, including commits you've made or co-authored, pull requests you've proposed, and issues you've opened.

You can see your contributions over time by either clicking **Show more activity** at the bottom of your contribution activity or by clicking the year you're interested in viewing on the right side of the page.

Important moments, like the date you joined an organization, proposed your first pull request, or opened a high-profile issue, are highlighted in your contribution activity.

If you can't see certain events in your timeline, check to make sure you still have access to the organization or repository where the event happened.

## Viewing contributions from {% data variables.product.prodname_enterprise %} on {% data variables.product.prodname_dotcom_the_website %}

If you use {% ifversion fpt or ghec %}{% data variables.product.prodname_ghe_server %}{% else %}{% data variables.product.product_name %}{% endif %} and your enterprise owner enables {% data variables.enterprise.prodname_unified_contributions %}, you can send enterprise contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile)."
