---
title: Configuring issue templates for your repository
intro: You can customize the templates that are available for contributors to use when they open new issues in your repository.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Community
shortTitle: Configure
---

{% ifversion fpt or ghes %}

{% data reusables.repositories.default-issue-templates %}

{% endif %}

{% ifversion fpt or ghae or ghes %}

## Creating issue templates

{% endif %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
3. In the "Features" section, under "Issues," click **Set up templates**.
![Start template setup button](/assets/images/help/repository/set-up-templates.png)
4. Use the Add template drop-down menu, and click on the type of template you'd like to create.
![Add template drop-down menu](/assets/images/help/repository/add-template-drop-down-menu.png)
5. To preview or edit the template before committing it to the repository, click **Preview and edit**.
![Preview and edit button](/assets/images/help/repository/preview-and-edit-button.png)
6. To edit the template, click {% octicon "pencil" aria-label="The edit icon" %}, and type in the fields to edit their contents.
![Issue template edit button](/assets/images/help/repository/issue-template-edit-button.png)
7. To automatically set a default issue title, assign the issue to people with read access to the repository, or apply labels to your issue template, enter these details under "Optional additional information." You can also add these details in the issue template with `title`, `labels`, or `assignees` in a YAML frontmatter format.
![Additional info for issue template](/assets/images/help/repository/additional-issue-template-info.png)
8. When you're finished editing and previewing your template, click **Propose changes** in the upper right corner of the page.
![Propose changes button](/assets/images/help/repository/propose-changes-button.png)
9. Enter a commit message describing your changes.
![Issue template commit message field](/assets/images/help/repository/issue-template-commit-message-field.png)
10. Below the commit message fields, decide whether to commit your template directly to the default branch, or to create a new branch and open a pull request. For more information about pull requests, see "[About pull requests](/articles/about-pull-requests)."
![Issue template commit to main or open pull request choice](/assets/images/help/repository/issue-template-commit-to-master-or-open-pull-request.png)
11. Click **Commit changes**. Once these changes are merged into the default branch, the template will be available for contributors to use when they open new issues in the repository.

{% ifversion fpt %}

## Creating issue forms

{% data reusables.community.issue-forms-beta %}

With issue forms, you can create issue templates that have customizable web form fields. You can encourage contributors to include specific, structured information by using issue forms in your repository. Issue forms are written in YAML using the {% data variables.product.prodname_dotcom %} form schema. For more information, see "[Syntax for {% data variables.product.prodname_dotcom %}'s form schema](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)." {% data reusables.actions.learn-more-about-yaml %}

To use an issue form in your repository, you must create a new file and add it to the `.github/ISSUE_TEMPLATE` folder in your repository.

Here is an example of an issue form configuration file.

{% data reusables.community.issue-forms-sample %}

Here is the rendered version of the issue form.
  ![A rendered issue form](/assets/images/help/repository/sample-issue-form.png)

1. Choose a repository where you want to create an issue form. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see "[Creating a new repository](/articles/creating-a-new-repository)."
2. In your repository, create a file called `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, replacing `FORM-NAME` with the name for your issue form. For more information about creating new files on GitHub, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."
3. In the body of the new file, type the contents of your issue form. For more information, see "[Syntax for issue forms](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)."
4. Commit your file to the default branch of your repository. For more information, see "[Creating new files](/github/managing-files-in-a-repository/creating-new-files)."

{% endif %}

{% ifversion fpt or ghae or ghes %}
## Configuring the template chooser

{% data reusables.repositories.issue-template-config %}

You can encourage contributors to use issue templates by setting `blank_issues_enabled` to `false`. If you set `blank_issues_enabled` to `true`, people will have the option to open a blank issue.

{% note %}

**Note:** If you used the legacy workflow to manually create an `issue_template.md` file in the `.github` folder and enable blank issues in your *config.yml* file, the template in `issue_template.md` will be used when people chose to open a blank issue. If you disable blank issues, the template will never be used.

{% endnote %}

If you prefer to receive certain reports outside of {% data variables.product.product_name %}, you can direct people to external sites with `contact_links`.

Here is an example *config.yml* file.

```shell
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.community/
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Your configuration file will customize the template chooser when the file is merged into the repository's default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
3. In the file name field, type `.github/ISSUE_TEMPLATE/config.yml`.
  ![Configuration filename](/assets/images/help/repository/template-config-file-name.png)
4. In the body of the new file, type the contents of your configuration file.
  ![Configuration file content](/assets/images/help/repository/template-config-file-content.png)
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}
{% endif %}

## Further reading

- "[About issue and pull request templates](/articles/about-issue-and-pull-request-templates)"
- "[Manually creating a single issue template for your repository](/articles/manually-creating-a-single-issue-template-for-your-repository)"
