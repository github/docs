---
title: About your profile
intro: 'Your profile page tells people the story of your work through the repositories you''re interested in, the contributions you''ve made, and the conversations you''ve had.'
redirect_from:
  - /articles/viewing-your-feeds
  - /articles/profile-pages
  - /articles/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profiles
---
You can add personal information about yourself in your bio, like previous places you've worked, projects you've contributed to, or interests you have that other people may like to know about. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#adding-a-bio-to-your-profile)."

{% ifversion fpt or ghes or ghec %}

{% data reusables.profile.profile-readme %}

![Screenshot of the profile page for @octocato. In the top-right corner, a profile README greets the viewer and lists information about the user's work.](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

People who visit your profile see a timeline of your contribution activity, like issues and pull requests you've opened, commits you've made, and pull requests you've reviewed. You can choose to display only public contributions or to also include private, anonymized contributions. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)" or "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)."

People who visit your profile can also see the following information.

- Repositories and gists you own or contribute to. {% ifversion fpt or ghes or ghec %}You can showcase your best work by pinning repositories and gists to your profile. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)."{% endif %}
- Repositories you've starred{% ifversion fpt or ghec %} and organized into lists{% endif %}. For more information, see "[AUTOTITLE](/get-started/exploring-projects-on-github/saving-repositories-with-stars)."
- An overview of your activity in organizations, repositories, and teams you're most active in. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-an-overview-of-your-activity-on-your-profile)."{% ifversion fpt or ghec %}
- Badges and Achievements that highlight your activity and show if you use {% data variables.product.prodname_pro %} or participate in programs like the {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, or the {% data variables.product.company_short %} Developer Program. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#displaying-badges-on-your-profile)."{% endif %}
{%- ifversion profile-pronouns %}
- Your pronouns if you've set them. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#adding-pronouns-to-your-profile).
{%- endif %}
{%- ifversion fpt or ghec %}
- Mutual connections you share with someone who is viewing your profile. The person viewing your profile can see which of the people they follow are also followed by you.
{%- endif %}

You can also set a status on your profile to provide information about your availability. For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile#setting-a-status)."

## Further reading

- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile)"
- "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/viewing-contributions-on-your-profile)"
