---
title: About your profile
shortTitle: Personal profile
intro: 'Your profile page tells people your story through the information you share, the contributions you make, and the projects you showcase.'
redirect_from:
  - /articles/viewing-your-feeds
  - /articles/profile-pages
  - /articles/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/about-your-profile
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile
  - /account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/about-your-profile
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Profiles
---
You can tell other people a little bit about yourself by writing a bio. With the help of [@mentions](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) and emoji, you can include information about where you currently or have previously worked, what type of work you do, or even what kind of coffee you drink. The bio field is limited to 160 characters.

For a longer-form and more prominent way of displaying customized information about yourself, you can create a profile README. If you add a README file to the root of a public repository with the same name as your username, that README will automatically appear on your profile page.

If you have the activity overview section enabled for your profile and you @mention an organization you're a member of in your profile bio, then that organization will be featured first in your activity overview.

![Screenshot of the profile page for @octocato. In the top-right corner, a profile README greets the viewer and lists information about the user's work.](/assets/images/help/repository/profile-with-readme.png)

People who visit your profile can also see:

* A timeline of your contribution activity, like issues and pull requests you've opened, commits you've made, and pull requests you've reviewed
* Repositories and gists you own or contribute to. You can showcase your best work by pinning repositories and gists to your profile.
* Repositories you've starred{% ifversion fpt or ghec %} and organized into lists{% endif %}
* An overview of your activity in organizations, repositories, and teams you're most active in{% ifversion fpt or ghec %}
* Badges and Achievements that highlight your activity and show if you use {% data variables.product.prodname_pro %} or participate in programs like the {% data variables.product.prodname_arctic_vault %}, {% data variables.product.prodname_sponsors %}, or the {% data variables.product.company_short %} Developer Program{% endif %}
{%- ifversion profile-pronouns %}
* Your pronouns (if you have set them)
{%- endif %}
{%- ifversion fpt or ghec %}
* Mutual connections, including people both you and the viewer follow
{%- endif %}
* Your status message sharing information about your availability (if you have set one)

## Next steps

To start customizing your profile, see [AUTOTITLE](/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile) and [AUTOTITLE](/account-and-profile/how-tos/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme).
