---
title: Following people
intro: 'You can follow people on {% data variables.product.product_name %} to receive notifications about their activity{% ifversion fpt or ghec %} and discover projects in their communities{% endif %}.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-follow %}'
redirect_from:
  - /articles/following-people
  - /github/getting-started-with-github/following-people
  - /github/getting-started-with-github/exploring-projects-on-github/following-people
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Profile
---

## About followers on {% data variables.product.product_name %}

When you follow people, you'll see their public activity on your personal dashboard.{% ifversion fpt or ghec %} If someone you follow stars a public repository, {% data variables.product.product_name %} may recommend the repository to you.{% endif %} For more information, see "[AUTOTITLE](/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-personal-account-settings/about-your-personal-dashboard#staying-updated-with-activity-from-the-community)."

You can unfollow someone if you do not wish to see their public activity on {% data variables.product.product_name %}.

## Following a user on {% data variables.product.product_name %}

{% data reusables.profile.navigate-to-user-profile %}
1. Under the user's profile picture, click **Follow**.

## Unfollowing a user on {% data variables.product.product_name %}

{% data reusables.profile.navigate-to-user-profile %}
1. Under the user's profile picture, click **Unfollow**.

## Viewing followed users on {% data variables.product.product_name %}

{% data reusables.profile.navigate-to-user-profile %}
1. Under the user's profile picture, click **following**.

   ![Screenshot of the sidebar of @octocat's profile page. A link, labeled "9 following", is outlined in dark orange.](/assets/images/help/profile/user-profile-following.png)

## Viewing followers on {% data variables.product.product_name %}

{% data reusables.profile.navigate-to-user-profile %}
1. Under the user's profile picture, click **followers**.

   ![Screenshot of the sidebar of @octocat's profile page. A people icon and a link, labeled "8.4k followers", are outlined in dark orange.](/assets/images/help/profile/user-profile-followers.png)

{% ifversion fpt or ghec %}

## Further reading

- "[AUTOTITLE](/get-started/exploring-projects-on-github/saving-repositories-with-stars)"
- "[AUTOTITLE](/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)"
{% endif %}
