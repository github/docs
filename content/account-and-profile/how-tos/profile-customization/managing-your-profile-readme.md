----
title: Managing your profile README
intro: You can add a README to your {% data variables.product.prodname_dotcom %} profile to tell other people about yourself.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: Profile READMEs are not available to {% data variables.enterprise.prodname_managed_users %}.
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
  - /account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
contentType: how-tos
category:
  - Customize your profile
---

## Prerequisites

{% data variables.product.prodname_dotcom %} will display your profile README on your profile page if all of the following are true.

* You've created a repository with a name that matches your {% data variables.product.prodname_dotcom %} username.
* The repository is public.
* The repository contains a file named README.md in its root.
* The README.md file contains any content.

> [!NOTE]
> If you created a public repository with the same name as your username before July 2020, {% data variables.product.prodname_dotcom %} won't automatically show the repository's README on your profile. You can manually trigger a synchronization by editing the README file or choosing to rebuild your profile README in GitHub's account settings.

## Adding a profile README

{% data reusables.profile.create-profile-readme %}
1. Above the right sidebar, click **Edit README**.

   The generated README file is pre-populated with a template to give you some inspiration for your profile README.

## Formatting your profile README

Your profile README supports {% data variables.product.company_short %} Flavored Markdown, which means you can use rich formatting options to make your profile stand out.

### Suggested content for your profile README

Here are some ideas for content you might include in your profile README:

* **An introduction or "About me" section**: Write a brief introduction describing your background, interests, and professional goals
* **Skills and expertise**: List your technical skills, programming languages, frameworks, and tools you're proficient with
* **Professional experience**: Share highlights from your career, projects you're proud of, or roles you've held
* **Current focus**: Mention what you're currently learning, building, or working on
* **Contributions you're proud of**: Describe projects or contributions that showcase your best work
* **Guidance for collaboration**: Let people know how they can contribute to your projects or work with you
* **Hobbies and interests**: Share non-technical interests to help people get to know you better
* **Contact or social links**: Include ways for people to reach out or follow your work

### Formatting tips

* **Use headings and sections** to organize your content and make it easy to scan
* **Add emphasis** with bold (`**text**`) and italic (`*text*`) formatting
* **Create lists** to highlight key points and skills
* **Link to your pinned repositories** to showcase your best work
* **Use badges** to display your tech stack, achievements, or certifications
* **Add images and GIFs** to make your profile more visually interesting and engaging
* **Use tables** to organize information like languages, tools, or experience

For detailed formatting guidance, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).

### Using emojis

You can enhance your profile README with emojis to add personality and visual interest. For a summary of all the available emojis and their codes, see [Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/).

Common uses for emojis in profile READMEs include:
* 🎯 Highlighting goals or focus areas
* 💻 Marking technical skills or tools
* 🌱 Indicating learning or growth
* 📚 Referencing resources or learning materials
* 🤝 Showing collaboration interests
* ⚡ Emphasizing highlights or important points

## Editing your profile README

You can edit your profile README at any time:

1. Navigate to your GitHub profile
2. In the profile README section, click the edit icon (pencil) next to your README
3. Make your changes in the editor
4. Click **Save** to publish your updates

Changes to your profile README appear immediately on your profile page.

## Removing a profile README

The profile README will be removed from your {% data variables.product.prodname_dotcom %} profile if any of the following apply:

* The README file is removed or made empty
* The repository is made private
* The repository name no longer matches your username due to a change in either or both names

### Recommended removal methods

If you want to stop displaying your profile README, we recommend one of these approaches depending on your needs:

**Option 1: Make the repository private** (recommended if you want to keep the README for personal use)
1. Navigate to your username-named repository
2. Go to **Settings**
3. Under "Danger zone," find "Change repository visibility"
4. Select **Make private**
5. Confirm the change

For detailed steps, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility).

**Option 2: Delete the README file** (if you want to remove the content but keep the repository public)
1. Navigate to your username-named repository
2. Click the `README.md` file
3. Click the delete button (trash icon)
4. Commit the deletion

**Option 3: Clear the README content** (if you want to replace it with something else later)
1. Edit the `README.md` file
2. Delete all content
3. Commit the change

## Updating your profile README

To keep your profile fresh and accurate, consider updating your README:

* When you learn new skills or technologies
* After completing significant projects
* When your focus or goals change
* To refresh formatting, images, or styling
* To highlight new achievements or contributions

## Tips for an effective profile README

* **Keep it concise**: Visitors often skim profiles, so prioritize key information
* **Highlight your best work**: Link to your most impressive or relevant projects
* **Show your personality**: Your README is a chance to stand out—make it uniquely you
* **Keep it up to date**: An outdated README may give a negative impression
* **Use white space**: Don't overcrowd your README—use spacing to improve readability
* **Test formatting**: Preview your changes before saving to ensure everything looks good
* **Avoid clutter**: Too many emojis, images, or styling can distract from your message

## Examples of profile READMEs

For inspiration, check out these well-designed profile READMEs:

* **GitHub's own examples**: Visit profiles of popular open-source contributors
* **Showcase repositories**: Search GitHub for "awesome profile README" for curated collections
* **Community templates**: Many developers share profile README templates for you to customize

## Next steps

* **Learn profile formatting**: For detailed formatting options, see [AUTOTITLE](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github)
* **Pin your best projects**: Showcase your work by pinning repositories to your profile. See [AUTOTITLE](/account-and-profile/how-tos/profile-customization/pinning-items-to-your-profile)
* **Personalize your profile**: Add a bio, profile picture, and status. See [AUTOTITLE](/account-and-profile/tutorials/personalize-your-profile)
* **Enhance your resume**: Use your profile to demonstrate skills to potential employers. See [AUTOTITLE](/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume)
* **Reference information**: For more profile settings and options, see [AUTOTITLE](/account-and-profile/reference/profile-reference)
-
title: Managing your profile README
intro: You can add a README to your {% data variables.product.prodname_dotcom %} profile to tell other people about yourself.
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
permissions: Profile READMEs are not available to {% data variables.enterprise.prodname_managed_users %}.
redirect_from:
  - /github/setting-up-and-managing-your-github-profile/managing-your-profile-readme
  - /github/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
  - /account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
  - /account-and-profile/how-tos/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
shortTitle: Your profile README
contentType: how-tos
category:
  - Customize your profile
---

## Prerequisites

{% data variables.product.prodname_dotcom %} will display your profile README on your profile page if all of the following are true.

* You've created a repository with a name that matches your {% data variables.product.prodname_dotcom %} username.
* The repository is public.
* The repository contains a file named README.md in its root.
* The README.md file contains any content.

> [!NOTE]
> If you created a public repository with the same name as your username before July 2020, {% data variables.product.prodname_dotcom %} won't automatically show the repository's README on your profile. You can manually share the repository's README to your profile by going to the repository on {% data variables.product.prodname_dotcom %} and clicking **Share to profile**.

## Adding a profile README

{% data reusables.profile.create-profile-readme %}
1. Above the right sidebar, click **Edit README**.

  The generated README file is pre-populated with a template to give you some inspiration for your profile README.

For a summary of all the available emojis and their codes, see [Emoji cheat sheet](https://www.webfx.com/tools/emoji-cheat-sheet/).

## Removing a profile README

The profile README will be removed from your {% data variables.product.prodname_dotcom %} profile if any of the following apply:

* The README file is removed or made empty.
* The repository is made private.
* The repository name no longer matches your username due to a change in either or both names.

The method you choose depends upon your needs, but if you're unsure, we recommend making your repository private. For steps on how to make your repository private, see [AUTOTITLE](/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility#changing-a-repositorys-visibility).

## Next steps

* For reference information, see [AUTOTITLE](/account-and-profile/reference/profile-reference).
