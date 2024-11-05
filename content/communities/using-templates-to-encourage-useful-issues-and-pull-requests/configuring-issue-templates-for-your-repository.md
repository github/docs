---
title: Configuring issue templates for your repository
intro: You can customize the templates that are available for contributors to use when they open new issues in your repository.
redirect_from:
  - /github/building-a-strong-community/creating-issue-templates-for-your-repository
  - /articles/configuring-issue-templates-for-your-repository
  - /github/building-a-strong-community/configuring-issue-templates-for-your-repository
versions:
  fpt: '*'
  ghec: '*'
  ghes: '*'
topics:
  - Community
shortTitle: Configure
---

{% data reusables.repositories.default-issue-templates %}

## Creating issue templates

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. In the "Features" section, under **Issues**, click **Set up templates**. You may need to enable **Issues** and refresh the page before you can see the button.

![Screenshot of the "Features" section of a repository's settings, with the "Issues" setting ticked and the green "Set up templates" button visible.](/assets/images/help/repository/set-up-issue-templates-button.png)
1. Use the **Add template** dropdown menu, and click on the type of template you'd like to create.

   ![Screenshot of the "Add template" dropdown menu expanded to show the standard "Bug report" and "Feature request" templates. In addition, the "Custom template" is listed.](/assets/images/help/repository/add-template-drop-down-menu.png)
1. To preview or edit the template before committing it to the repository, next to the template, click **Preview and edit**.
1. To edit the template, click {% octicon "pencil" aria-label="Edit template" %}, and type in the fields to edit their contents.

   ![Screenshot of the preview of an issue template. To the right of the template name, a pencil icon is outlined in dark orange.](/assets/images/help/repository/issue-template-edit-button.png)
1. To automatically set a default issue title, assign the issue to people with read access to the repository, or apply labels to issues raised from the template, use the fields under "Optional additional information." You can also add these details in the issue template with `title`, `labels`, or `assignees` in a YAML frontmatter format.
1. When you're finished editing and previewing your template, click **Propose changes** in the upper right corner of the page.
1. In the "Commit message" field, type a commit message describing your changes.
1. Below the commit message fields, select whether to commit your template directly to the default branch, or to create a new branch and open a pull request. For more information about pull requests, see "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)."
1. Click **Commit changes**. Once these changes are merged into the default branch, the template will be available for contributors to use when they open new issues in the repository.

{% ifversion issue-forms %}

## Creating issue forms

{% data reusables.community.issue-forms-beta %}

With issue forms, you can create issue templates that have customizable web form fields. You can encourage contributors to include specific, structured information by using issue forms in your repository. Issue forms are written in YAML using the {% data variables.product.prodname_dotcom %} form schema. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)." {% data reusables.actions.learn-more-about-yaml %}

To use an issue form in your repository, you must create a new file and add it to the `.github/ISSUE_TEMPLATE` folder in your repository.

Here is an example of an issue form configuration file.

{% data reusables.community.issue-forms-sample %}

Here is the rendered version of the issue form.

![Screenshot of a rendered issue form, with a mix of text fields and dropdown menus.](/assets/images/help/repository/sample-issue-form.png)

1. Choose a repository where you want to create an issue form. You can use an existing repository that you have write access to, or you can create a new repository. For more information about creating a repository, see "[AUTOTITLE](/repositories/creating-and-managing-repositories/creating-a-new-repository)."
1. In your repository, create a file called `.github/ISSUE_TEMPLATE/FORM-NAME.yml`, replacing `FORM-NAME` with the name for your issue form. For more information about creating new files on GitHub, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
1. In the body of the new file, type the contents of your issue form. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)."
1. Commit your file to the default branch of your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."

{% endif %}

## Configuring the template chooser

{% data reusables.repositories.issue-template-config %}

You can encourage contributors to use issue templates by setting `blank_issues_enabled` to `false`. If you set `blank_issues_enabled` to `true`, people will have the option to open a blank issue.

{% note %}

**Note:** If you used the legacy workflow to manually create an `issue_template.md` file in the `.github` folder and enable blank issues in your _config.yml_ file, the template in `issue_template.md` will be used when people choose to open a blank issue. If you disable blank issues, the template will never be used.

{% endnote %}

If you prefer to receive certain reports outside of {% data variables.product.product_name %}, you can direct people to external sites with `contact_links`.

Here is an example _config.yml_ file.

```yaml copy
blank_issues_enabled: false
contact_links:
  - name: {% data variables.product.prodname_gcf %}
    url: https://github.com/orgs/community/discussions
    about: Please ask and answer questions here.
  - name: {% data variables.product.prodname_dotcom %} Security Bug Bounty
    url: https://bounty.github.com/
    about: Please report security vulnerabilities here.
```

Your configuration file will customize the template chooser when the file is merged into the repository's default branch.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.files.add-file %}
1. In the file name field, type `.github/ISSUE_TEMPLATE/config.yml`.
1. In the body of the new file, type the contents of your configuration file.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Changing the order of templates

You can set the order in which your issue templates will appear in the template chooser by making changes to the template filenames. The templates in `.github/ISSUE_TEMPLATE` are listed alphanumerically and grouped by filetype, with YAML files appearing before Markdown files.

To control the order of your templates, prefix the filenames with a number. For example: `1-bug.yml`, `2-feature-request.yml`, and `3-epic.yml`.

If you have 10 or more templates, alphanumeric ordering means that `11-bug.yml` will be positioned between `1-feature.yml` and `2-support.yml`. You can keep your intended ordering by prefixing your numeric filenames with an additional `0`. For example: `01-feature.yml`, `02-support.yml`, and `11-bug.yml`.

## Further reading

* "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)"
* "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/manually-creating-a-single-issue-template-for-your-repository)"
