---
title: Manage visibility settings for private contributions {% ifversion hide-individual-achievements %}and achievements {% endif %}
intro: Show anonymized activity from private and internal repositories.
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/manage-visibility-settings-for-private-contributions-and-achievements
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions {% ifversion hide-individual-achievements %}and achievements{% endif %}
allowTitleToDifferFromFilename: true
contentType: how-tos
---

## Changing the visibility of your private contributions

{% data reusables.profile.access_profile %}
1. Above the contribution calendar, click **Contribution settings**.

   ![Screenshot of the "Contribution settings" link, highlighted with a dark orange outline.](/assets/images/help/profile/contribution-settings.png)

1. Click **Private contributions** to show or hide private contributions on your profile.

{% ifversion hide-individual-achievements %}

## Changing the visibility of achievements

{% data reusables.user-settings.access_settings %}
1. Under "Profile settings", select or deselect **Show Achievements on my profile.**
1. Click **Update preferences**.

## Hiding an individual achievement on your profile

You can hide an individual achievement on your profile. When hidden, badges are only visible to you.

{% data reusables.profile.access_profile %}
1. Under "Achievements", click the achievement you want to hide.

   ![Screenshot of the "Achievements" section of a user profile. A badge with a cowboy image is highlighted with a dark orange outline.](/assets/images/help/profile/achievements-on-profile.png)

1. Click {% octicon "eye" aria-label="Hide from profile" %}.

   ![Screenshot of an achievement. An open eye icon is highlighted with a dark orange outline.](/assets/images/help/profile/achievements-detail-view.png)

{% endif %}

## Next steps

For more information about contribution visibility, see [AUTOTITLE](/account-and-profile/reference/profile-contributions-reference#who-can-see-your-contributions-and-achievements).
