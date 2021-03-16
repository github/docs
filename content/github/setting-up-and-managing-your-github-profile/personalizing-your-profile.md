---
title: Personalizing your profile
intro: 'You can share information about yourself with other {% data variables.product.product_name %} users by setting a profile picture and adding a bio to your profile.'
redirect_from:
  - /articles/adding-a-bio-to-your-profile/
  - /articles/setting-your-profile-picture/
  - /articles/how-do-i-set-up-my-profile-picture/
  - /articles/gravatar-problems/
  - /articles/how-do-i-set-up-my-avatar/
  - /articles/personalizing-your-profile
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

### Changing your profile picture

Your profile picture helps identify you across {% data variables.product.product_name %} in pull requests, comments, contributions pages, and graphs.

When you sign up for an account, {% data variables.product.product_name %} provides you with a randomly generated "identicon". [Your identicon](https://github.com/blog/1586-identicons) generates from a hash of your user ID, so there's no way to control its color or pattern. You can replace your identicon with an image that represents you.

{% tip %}

**Tip**: Your profile picture should be a PNG, JPG, or GIF file under 1 MB in size. For the best quality rendering, we recommend keeping the image at about 500 by 500 pixels.

{% endtip %}

#### Setting a profile picture

{% data reusables.user_settings.access_settings %}
2. Under **Profile Picture**, click {% octicon "pencil" aria-label="The edit icon" %} **Edit**.
![Edit profile picture](/assets/images/help/profile/edit-profile-photo.png)
3. Click **Upload a photo...**.
![Update profile picture](/assets/images/help/profile/edit-profile-picture-options.png)
3. Crop your picture. When you're done, click **Set new profile picture**.
	![Crop uploaded photo](/assets/images/help/profile/avatar_crop_and_save.png)

#### Resetting your profile picture to the identicon

{% data reusables.user_settings.access_settings %}
2. Under **Profile Picture**, click {% octicon "pencil" aria-label="The edit icon" %} **Edit**.
![Edit profile picture](/assets/images/help/profile/edit-profile-photo.png)
3. To revert to your identicon, click **Remove photo**. If your email address is associated with a [Gravatar](https://en.gravatar.com/), you cannot revert to your identicon. Click **Revert to Gravatar** instead.
![Update profile picture](/assets/images/help/profile/edit-profile-picture-options.png)

### Changing your profile name

You can change the name that is displayed on your profile. This name may also be displayed next to comments you make on private repositories owned by an organization. For more information, see "[Managing the display of member names in your organization](/articles/managing-the-display-of-member-names-in-your-organization)."

{% data reusables.user_settings.access_settings %}
2. Under "Name", type the name you want to be displayed on your profile.
  ![Name field in profile settings](/assets/images/help/profile/name-field.png)

### Adding a bio to your profile

Add a bio to your profile to share information about yourself with other {% data variables.product.product_name %} users. With the help of [@mentions](/articles/basic-writing-and-formatting-syntax) and emoji, you can include information about where you currently or have previously worked, what type of work you do, or even what kind of coffee you drink. 

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}

For a longer-form and more prominent way of displaying customized information about yourself, you can also use a profile README. For more information, see "[Managing your profile README](/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)."

{% endif %}

{% note %}

**Note:**
  If you have the activity overview section enabled for your profile and you @mention an organization you're a member of in your profile bio, then that organization will be featured first in your activity overview. For more information, see "[Showing an overview of your activity on your profile](/articles/showing-an-overview-of-your-activity-on-your-profile)."

{% endnote %}

{% data reusables.user_settings.access_settings %}
2. Under **Bio**, add the content that you want displayed on your profile. The bio field is limited to 160 characters.
	![Update bio on profile](/assets/images/help/profile/bio-field.png)

  {% tip %}

  **Tip:** When you @mention an organization, only those that you're a member of will autocomplete. You can still @mention organizations that you're not a member of, like a previous employer, but the organization name won't autocomplete for you.

  {% endtip %}

3. Click **Update profile**.
	![Update profile button](/assets/images/help/profile/update-profile-button.png)

### Setting a status

You can set a status to display information about your current availability on {% data variables.product.product_name %}. Your status will show:
- on your {% data variables.product.product_name %} profile page.
- when people hover over your username or avatar on {% data variables.product.product_name %}.
- on a team page for a team where you're a team member. For more information, see "[About teams](/articles/about-teams/#team-pages)."
- on the organization dashboard in an organization where you're a member. For more information, see "[About your organization dashboard](/articles/about-your-organization-dashboard/)."

When you set your status, you can also let people know that you have limited availability on {% data variables.product.product_name %}.

![At-mentioned username shows "busy" note next to username](/assets/images/help/profile/username-with-limited-availibilty-text.png)

![Requested reviewer shows "busy" note next to username](/assets/images/help/profile/request-a-review-limited-availability-status.png)

If you select the "Busy" option, when people @mention your username, assign you an issue or pull request, or request a pull request review from you, a note next to your username will show that you're busy.

1. In the top right corner of {% data variables.product.product_name %}, click your profile photo, then click **Set your status** or, if you already have a status set, click your current status.
  ![Button on profile to set your status](/assets/images/help/profile/set-status-on-profile.png)
2. To add custom text to your status, click in the text field and type a status message.
  ![Field to type a status message](/assets/images/help/profile/type-a-status-message.png)
3. Optionally, to set an emoji status, click the smiley icon and select an emoji from the list.
  ![Button to select an emoji status](/assets/images/help/profile/select-emoji-status.png)
4. Optionally, if you'd like to share that you have limited availability, select "Busy."
  ![Busy option selected in Edit status options](/assets/images/help/profile/limited-availability-status.png)
5. Use the **Clear status** drop-down menu, and select when you want your status to expire. If you don't select a status expiration, you will keep your status until you clear or edit your status.
  ![Drop down menu to choose when your status expires](/assets/images/help/profile/status-expiration.png)
6. Use the drop-down menu and click the organization you want your status visible to. If you don't select an organization, your status will be public.
  ![Drop down menu to choose who your status is visible to](/assets/images/help/profile/status-visibility.png)
7. Click **Set status**.
  ![Button to set status](/assets/images/help/profile/set-status-button.png)

{% if currentVersion == "free-pro-team@latest" %}
### Displaying badges on your profile

When you participate in certain programs, {% data variables.product.prodname_dotcom %} automatically displays a badge on your profile.

| Badge | Program | Description |
| --- | --- | --- |
| {% octicon "north-star" aria-label="The North Star icon" %} | **{% data variables.product.prodname_arctic_vault %} Contributor** | If you authored any commit(s) on the default branch of a repository that was archived in the 2020 Arctic Vault program, you'll get an {% data variables.product.prodname_arctic_vault %} Contributor badge on your profile. For more information on the program, see [{% data variables.product.prodname_archive %}](https://archiveprogram.github.com). |
| {% octicon "cpu" aria-label="The Developer Program icon" %} | **Developer Program Member** | If you're a registered member of the GitHub Developer Program, building an app with the GitHub API, you'll get a Developer Program Member badge on your profile. For more information on the GitHub Developer Program, see [GitHub Developer](/program/). |
| {% octicon "heart-fill" aria-label="The GitHub Sponsor icon" %} | **GitHub Sponsor**  | If you sponsored an open source contributor through {% data variables.product.prodname_sponsors %} you'll get a GitHub Sponsor badge on your profile. For more information, see "[Sponsoring open source contributors](/github/supporting-the-open-source-community-with-github-sponsors/sponsoring-open-source-contributors)." |
| {% octicon "star-fill" aria-label="The star icon" %} | **Pro** | If you use {% data variables.product.prodname_pro %} you'll get a PRO badge on your profile. For more information about {% data variables.product.prodname_pro %}, see "[{% data variables.product.prodname_dotcom %}'s products](/github/getting-started-with-github/githubs-products#github-pro)." |

### Disabling badges on your profile

You can disable some of the badges for {% data variables.product.prodname_dotcom %} programs you're participating in, including the PRO and {% data variables.product.prodname_arctic_vault %} badges.

{% data reusables.user_settings.access_settings %}
2. Under "Profile settings", deselect the badge you want you disable.
  ![Checkbox to no longer display a badge on your profile](/assets/images/help/profile/display-pro-badge-checkbox.png)
3. Click **Update preferences**.

{% endif %}

### Further reading

- "[About your profile](/articles/about-your-profile)"
