---
title: Showing your private contributions and achievements on your profile
intro: 'Your {% data variables.product.product_name %} profile shows a graph of your repository contributions over the past year. You can choose to show anonymized activity from {% ifversion fpt or ghes or ghec %}private and internal{% else %}private{% endif %} repositories{% ifversion fpt or ghes or ghec %} in addition to the activity from public repositories{% endif %}.'
redirect_from:
  - /articles/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /github/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-graphs-on-your-profile/publicizing-or-hiding-your-private-contributions-on-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
shortTitle: Private contributions and achievements
---

If you publicize your private contributions, people without access to the private repositories you work in won't be able to see the details of your private contributions. Instead, they'll see the number of private contributions you made on any given day. Your public contributions will include detailed information. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)."

{% note %}

**Note:** {% ifversion fpt or ghes or ghec %}On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt or ghec %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.location.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## Changing the visibility of your private contributions

You can choose to publicize your private contributions, which allows visitors to your profile to see private contribution counts, without further details.

If you choose to hide your private contributions, visitors will only see your public contributions.

{% data reusables.profile.access_profile %}
1. Above the contribution calendar, click **Contribution settings**.

   ![Screenshot of the "Contribution settings" link, highlighted with a dark orange outline.](/assets/images/help/profile/contribution-settings.png)

1. Click **Private contributions** to show or hide private contributions on your profile.

## Changing the visibility of achievements

{% data reusables.user-settings.access_settings %}
1. Under "Profile settings", select or deselect **Show Achievements on my profile.**
1. Click **Update preferences**.

{% ifversion hide-individual-achievements %}

## Hiding an individual achievement on your profile

You can hide an individual achievement on your profile. When hidden, badges are only visible to you.

{% data reusables.profile.access_profile %}
1. Under "Achievements", click the achievement you want to hide.

   ![Screenshot of the "Achievements" section of a user profile. A badge with a cowboy image is highlighted with a dark orange outline.](/assets/images/help/profile/achievements-on-profile.png)

1. Click {% octicon "eye" aria-label="Hide from profile" %}.

   ![Screenshot of an achievement. An open eye icon is highlighted with a dark orange outline.](/assets/images/help/profile/achievements-detail-view.png)

{% endif %}

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile)"
