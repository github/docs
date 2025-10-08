---
title: Viewing contributions on your profile
intro: You can see a history of your contributions on your profile.
redirect_from:
  - /articles/viewing-contributions
  - /articles/viewing-contributions-on-your-profile-page
  - /articles/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/viewing-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/viewing-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile
  - /account-and-profile/concepts/viewing-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: View contributions
---

## Prerequisites

Before you view contributions on your profile, you should understand what counts as a contribution, and what other information your profile displays. See [AUTOTITLE](/account-and-profile/concepts/contributions-visible-on-your-profile).

## Viewing contributions in a specific time range

{% data reusables.profile.navigating-to-profile %}
1. To see a visual representation of your contributions, scroll down to the section labeled "NUMBER contributions in the last year".

    {% data reusables.profile.contribution-graph-commits %}

1. To view contributions made on a specific day, click the square corresponding to that day.
1. To view contributions made over a specific time span, click the square corresponding to the start of the time span, press <kbd>Shift</kbd>, then click the square corresponding to the end of the time span.

    > [!NOTE]
    > You can select up to a one-month range on your contributions calendar. If you select a larger time span, we will only display one month of contributions.

## Viewing a timeline of your contributions

{% data reusables.profile.navigating-to-profile %}
1. To see a timeline of your contributions, starting with your most recent work, scroll down to the "Contribution activity" section of the page.
1. Optionally, to explore older contributions:
    * At the bottom of the timeline, click **Show more activity**.
    * On the right side of the page, click the year you want to see contributions from.

## Next steps

To learn more about what counts as a contribution, see [AUTOTITLE](/account-and-profile/reference/why-are-my-contributions-not-showing-up-on-my-profile)

If you use {% data variables.product.prodname_ghe_server %} and your enterprise owner enables {% data variables.enterprise.prodname_unified_contributions %}, you can send enterprise contribution counts to your {% data variables.product.prodname_dotcom_the_website %} profile. See [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/sending-enterprise-contributions-to-your-githubcom-profile).
