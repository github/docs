---
title: About your profile
intro: 'Your profile page tells people the story of your work through the repositories you''re interested in, the contributions you''ve made, and the conversations you''ve had.'
redirect_from:
  - /articles/viewing-your-feeds/
  - /articles/profile-pages/
  - /articles/about-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Profiles
---

You can add personal information about yourself in your bio, like previous places you've worked, projects you've contributed to, or interests you have that other people may like to know about. For more information, see "[Adding a bio to your profile](/articles/personalizing-your-profile/#adding-a-bio-to-your-profile)."

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

{% data reusables.profile.profile-readme %}

![Profile README file displayed on profile](/assets/images/help/repository/profile-with-readme.png)

{% endif %}

People who visit your profile see a timeline of your contribution activity, like issues and pull requests you've opened, commits you've made, and pull requests you've reviewed. You can choose to display only public contributions or to also include private, anonymized contributions. For more information, see "[Viewing contributions on your profile page](/articles/viewing-contributions-on-your-profile-page)" or "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)."

People who visit your profile can also see the following information.

- Repositories and gists you own or contribute to. {% if currentVersion == "free-pro-team@latest" or enterpriseServerVersions contains currentVersion %}You can showcase your best work by pinning repositories and gists to your profile. For more information, see "[Pinning items to your profile](/github/setting-up-and-managing-your-github-profile/pinning-items-to-your-profile)."{% endif %}
- Repositories you've starred. For more information, see "[Saving repositories with stars](/articles/saving-repositories-with-stars/)."
- An overview of your activity in organizations, repositories, and teams you're most active in. For more information, see "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)."{% if currentVersion == "free-pro-team@latest" %}
- Badges that show if you use {% data variables.product.prodname_pro %} or participate in programs like the {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, or the {% data variables.product.company_short %} Developer Program. For more information, see "[Personalizing your profile](/github/setting-up-and-managing-your-github-profile/personalizing-your-profile#displaying-badges-on-your-profile)."{% endif %}

You can also set a status on your profile to provide information about your availability. For more information, see "[Setting a status](/articles/personalizing-your-profile/#setting-a-status)."

### Дополнительная литература

- "[How do I set up my profile picture?](/articles/how-do-i-set-up-my-profile-picture)"
- "[Publicizing or hiding your private contributions on your profile](/articles/publicizing-or-hiding-your-private-contributions-on-your-profile)"
- "[Viewing contributions on your profile](/articles/viewing-contributions-on-your-profile)"
