---
title: Automatically generated release notes
intro: You can automatically generate release notes for your GitHub releases
permissions: Repository collaborators and people with write access to a repository can generate and customize automated release notes for a release.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automated release notes
communityRedirect:
  name: Provide GitHub Feedback
  href: 'https://github.com/github/feedback/discussions/categories/releases-feedback'
---

{% note %}

**Note:** {% data reusables.repositories.auto-gen-release-public-beta %}

{% endnote %}

## About automatically generated release notes

Automatically generated release notes provide an automated alternative to manually writing release notes for your {% data variables.product.prodname_dotcom %} releases. With automatically generated release notes, you can quickly generate an overview of the contents of a release. You can also customize your automated release notes, using labels to create custom categories to organize pull requests you want to include, and exclude certain labels and users from appearing in the output.

## Creating automatically generated release notes for a new release

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.releases %}
3. Click **Draft a new release**.
   ![Releases draft button](/assets/images/help/releases/draft_release_button.png)
4. {% ifversion fpt or ghec %}Click **Choose a tag** and type{% else %}Type{% endif %} a version number for your release. Alternatively, select an existing tag.
  {% ifversion fpt or ghec %}
  ![Enter a tag](/assets/images/help/releases/releases-tag-create.png)
5. If you are creating a new tag, click **Create new tag**.
![Confirm you want to create a new tag](/assets/images/help/releases/releases-tag-create-confirm.png)
  {% else %}
  ![Releases tagged version](/assets/images/enterprise/releases/releases-tag-version.png)
{% endif %}
6. If you have created a new tag, use the drop-down menu to select the branch that contains the project you want to release.
  {% ifversion fpt or ghec %}![Choose a branch](/assets/images/help/releases/releases-choose-branch.png)
  {% else %}![Releases tagged branch](/assets/images/enterprise/releases/releases-tag-branch.png)
  {% endif %}
7. To the top right of the description text box, click **Auto-generate release notes**.
  ![Auto-generate release notes](/assets/images/help/releases/auto-generate-release-notes.png)
8. Check the generated notes to ensure they include all (and only) the information you want to include.
9. Optionally, to include binary files such as compiled programs in your release, drag and drop or manually select files in the binaries box.
   ![Providing a DMG with the Release](/assets/images/help/releases/releases_adding_binary.gif)
10. To notify users that the release is not ready for production and may be unstable, select **This is a pre-release**.
   ![Checkbox to mark a release as prerelease](/assets/images/help/releases/prerelease_checkbox.png)
{%- ifversion fpt %}
11. Optionally, select **Create a discussion for this release**, then select the **Category** drop-down menu and click a category for the release discussion.
  ![Checkbox to create a release discussion and drop-down menu to choose a category](/assets/images/help/releases/create-release-discussion.png)
{%- endif %}
12. If you're ready to publicize your release, click **Publish release**. To work on the release later, click **Save draft**.
   ![Publish release and Draft release buttons](/assets/images/help/releases/release_buttons.png)


## Creating a template for automatically generated release notes

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type `.github/release.yml` to create the `release.yml` file in the `.github` directory.
  ![Create new file](/assets/images/help/releases/release-yml.png)
4. In the file, specify the pull request labels and authors you want to exclude from this release. You can also create new categories and list the pull request labels to be included in each of them. For more information, see "[Managing labels](/issues/using-labels-and-milestones-to-track-work/managing-labels)."

## Example configuration

{% raw %}
**release.yml**
```yaml{:copy}
# release.yml

changelog:
  exclude:
    labels:
      - ignore-for-release
    authors:
      - octocat
  categories:
    - title: Breaking Changes 🛠
      labels:
        - Semver-Major
        - breaking-change
    - title: Exciting New Features 🎉
      labels:
        - Semver-Minor
        - enhancement
    - title: Other Changes
      labels:
        - "*"
```
{% endraw %}

## Release template syntax

| Parameter | Description |Required | Value |
| :- | :- | :- | :- |
|`changelog` | Defines the contents within it as the custom template for your release notes.|Required. | No value accepted.|
|`exclude`| Creates a category of pull requests to be excluded from the release. Can be set at the top-level of the changelog to apply to all categories or applied on a per-category basis. |Optional | No value accepted.|
|`authors`| Specifies authors to be excluded from the release.| Optional for `exclude` category.| Accepts usernames and bots as values.|
|`categories`| Defines the nested contents as custom categories to be included in the template. |Optional | No value accepted.|
|`title`|  Creates an individual category. |Required if `categories` parameter exists.| Takes the category name as its value. |
|`labels`|  Specifies labels to be used by the enclosing category.| Required if `categories` parameter exists, optional for `exclude` parameter.| Accepts any labels, whether currently existing or planned for the future.|
|`"*"`| Catchall for any pull request not included within a category *above*. If used, it must be added at the end of the file. | Optional| No value accepted. |
