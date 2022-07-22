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

If you publicize your private contributions, people without access to the private repositories you work in won't be able to see the details of your private contributions. Instead, they'll see the number of private contributions you made on any given day. Your public contributions will include detailed information. For more information, see "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)."

{% note %}

**Note:** {% ifversion fpt or ghes or ghec %}On {% ifversion fpt or ghec %}{% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}{% data variables.product.product_name %}{% endif %}, public contributions on your profile are visible {% ifversion fpt or ghec %}to anyone in the world who can access {% data variables.product.prodname_dotcom_the_website %}{% elsif ghes %}only to other users of {% data variables.product.product_location%}{% endif %}.{% elsif ghae %}On {% data variables.product.prodname_ghe_managed %}, only other members of your enterprise can see the contributions on your profile.{% endif %}

{% endnote %}

## Changing the visibility of your private contributions

{% data reusables.profile.access_profile %}
1. Publicize or hide your private contributions on your profile:
    - To publicize your private contributions, above your contributions graph, use the **Contribution settings** drop-down menu, and select **Private contributions**. Visitors will see your private contribution counts without further details.
  ![Enable visitors to see private contributions from contribution settings drop-down menu](/assets/images/help/profile/private-contributions-on.png)
    - To hide your private contributions, above your contributions graph, use the **Contribution settings** drop-down menu, and unselect **Private contributions.** Visitors will only see your public contributions.
   ![Enable visitors to see private contributions from contribution settings drop-down menu](/assets/images/help/profile/private-contributions-off.png)

## Changing the visibility of Achievements

{% data reusables.user-settings.access_settings %}
1. Show or hide Achievements on your profile:
    - To show Achievements on your profile, navigate to **Profile settings**, and select the checkbox next to **Show Achievements on my profile.**
  ![Enable visitors to see Achievements from profile settings](/assets/images/achievements-profile-settings-off.png)
    - To hide Achievements from your profile, navigate to **Profile settings**, and unselect the checkbox next to **Show Achievements on my profile.**
  ![Hide Achievements from visitors in profile settings](/assets/images/achievements-profile-settings-on.png)

## Further reading

- "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)"
- "[Why are my contributions not showing up on my profile?](/articles/why-are-my-contributions-not-showing-up-on-my-profile)"
