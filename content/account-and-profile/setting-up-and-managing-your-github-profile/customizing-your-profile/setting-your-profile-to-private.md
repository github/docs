---
title: Setting your profile to private
intro: 'A private profile displays only limited information, and hides some activity.'
versions:
  fpt: '*'
topics:
  - Profiles
shortTitle: Set profile to private
---
## About private profiles

To hide parts of your profile page, you can make your profile private. This also hides your activity in various social features on {% data variables.product.prodname_dotcom %}. A private profile hides information from all users, and there is currently no option to allow specified users to see your activity.

After making your profile private, you can still view all your information when you visit your own profile.

Private profiles cannot receive sponsorships under [{% data variables.product.prodname_sponsors %}](/sponsors/getting-started-with-github-sponsors/about-github-sponsors). To be eligible for {% data variables.product.prodname_sponsors %}, your profile cannot be private.

## Differences between private and public profiles

When your profile is private, the following content is hidden from your profile page:

* Achievements and highlights
* Activity overview and activity feed
* Contribution graph
* Follower and following counts
* Follow and Sponsor buttons
* Organization memberships
* Stars, projects, packages, and sponsoring tabs
* Your pronouns

{% note %}

**Note**: When your profile is private, some optional fields are still publicly visible, such as the README, biography, and profile photo.

{% endnote %}

## Changes to reporting on your activities

By making your profile private, you will not remove or hide past activity; this setting only applies to your activity while the private setting is enabled.

When your profile is private, your {% data variables.product.prodname_dotcom %} activity will not appear in the following locations:

* Activity feeds for other users
* Discussions leaderboards
* Site-wide search results
* The [Trending](https://github.com/trending) page

{% note %}

**Note**: Your activity on public repositories will still be publicly visible to anyone viewing those repositories, and some activity data may still be available through the {% data variables.product.prodname_dotcom %} API.

{% endnote %}

## Changing your profile's privacy settings

{% data reusables.user-settings.access_settings %}
1. Navigate to the "Public profile" section, and scroll down to "Contributions & Activity"
1. Select the checkbox next to **Make profile private and hide activity**.
{% data reusables.user-settings.update-preferences %}
