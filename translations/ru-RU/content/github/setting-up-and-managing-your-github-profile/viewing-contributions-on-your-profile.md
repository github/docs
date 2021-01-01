---
title: Viewing contributions on your profile
intro: 'Your {% data variables.product.product_name %} profile shows off {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}your pinned repositories as well as{% endif %} a graph of your repository contributions over the past year.'
redirect_from:
  - /articles/viewing-contributions/
  - /articles/viewing-contributions-on-your-profile-page/
  - /articles/viewing-contributions-on-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Your contribution graph shows activity from public repositories. {% endif %}You can choose to show activity from {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}both public and {% endif %}private repositories, with specific details of your activity in private repositories anonymized. For more information, see "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)."

{% note %}

**Note:** Commits will only appear on your contributions graph if the email address you used to author the commits is connected to your account on {% data variables.product.product_name %}. For more information, see "[Why are my contributions not showing up on my profile?](/articles/why-are-my-contributions-not-showing-up-on-my-profile#your-local-git-commit-email-isnt-connected-to-your-account)"

{% endnote %}

### What counts as a contribution

On your profile page, certain actions count as contributions:

- Committing to a repository's default branch or `gh-pages` branch
- Opening an issue
- Proposing a pull request
- Submitting a pull request review{% if enterpriseServerVersions contains currentVersion or currentVersion == "github-ae@latest" %}
- Co-authoring commits in a repository's default branch or `gh-pages` branch{% endif %}

{% data reusables.pull_requests.pull_request_merges_and_contributions %}

### Popular repositories

This section displays your repositories with the most watchers. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}Once you [pin repositories to your profile](/articles/pinning-repositories-to-your-profile), this section will change to "Pinned repositories."{% endif %}

![Popular repositories](/assets/images/help/profile/profile_popular_repositories.png)

{% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}

### Pinned repositories

This section displays up to six public repositories and can include your repositories as well as repositories you've contributed to. To easily see important details about the repositories you've chosen to feature, each repository in this section includes a summary of the work being done, the number of [stars](/articles/saving-repositories-with-stars/) the repository has received, and the main programming language used in the repository. For more information, see "[Pinning repositories to your profile](/articles/pinning-repositories-to-your-profile)."

![Pinned repositories](/assets/images/help/profile/profile_pinned_repositories.png)

{% endif %}

### Contributions calendar

Your contributions calendar shows your contribution activity.

#### Viewing contributions from specific times

- Click on a day's square to show the contributions made during that 24-hour period.
- Press *Shift* and click on another day's square to show contributions made during that timespan.

{% note %}

**Note:** You can select up to a one-month range on your contributions calendar. If you select a larger timespan, we will only display one month of contributions.

{% endnote %}

![Your contributions graph](/assets/images/help/profile/contributions_graph.png)

#### How contribution event times are calculated

Timestamps are calculated differently for commits and pull requests:
- **Commits** use the time zone information in the commit timestamp. For more information, see "[Troubleshooting commits on your timeline](/articles/troubleshooting-commits-on-your-timeline)."
- **Pull requests** and **issues** opened on {% data variables.product.product_name %} use your browser's time zone. Those opened via the API use the timestamp or time zone [specified in the API call](https://developer.github.com/changes/2014-03-04-timezone-handling-changes).

### Обзор активности

{% data reusables.profile.activity-overview-summary %} For more information, see "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)."

![Activity overview section on profile](/assets/images/help/profile/activity-overview-section.png)

The organizations featured in the activity overview are prioritized according to how active you are in the organization. If you @mention an organization in your profile bio, and you’re an organization member, then that organization is prioritized first in the activity overview. For more information, see “[Mentioning people and teams](/articles/basic-writing-and-formatting-syntax/#mentioning-people-and-teams)” or "[Adding a bio to your profile](/articles/adding-a-bio-to-your-profile/)."

### Contribution activity

The contribution activity section includes a detailed timeline of your work, including commits you've made or co-authored, pull requests you've proposed, and issues you've opened. You can see your contributions over time by either clicking **Show more activity** at the bottom of your contribution activity or by clicking the year you're interested in viewing on the right side of the page. Important moments, like the date you joined an organization, proposed your first pull request, or opened a high-profile issue, are highlighted in your contribution activity. If you can't see certain events in your timeline, check to make sure you still have access to the organization or repository where the event happened.

![Contribution activity time filter](/assets/images/help/profile/contributions_activity_time_filter.png)

{% if currentVersion != "github-ae@latest" %}
### Viewing contributions from {% data variables.product.product_location_enterprise %} on {% data variables.product.prodname_dotcom_the_website %}
If your site administrator has enabled

{% data variables.product.prodname_unified_contributions %}, you can send {% data variables.product.prodname_enterprise %} contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile. For more information, see "[Sending your {% data variables.product.prodname_ghe_server %} contributions to your {% data variables.product.prodname_dotcom_the_website %}](/articles/sending-your-github-enterprise-server-contributions-to-your-github-com-profile)."
{% endif %}

### Дополнительная литература

- "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)"
- "[Why are my contributions not showing up on my profile?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
- "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)"
