---
title: Creating discussion category forms
shortTitle: Create discussion category forms
intro: You can customize the templates that are available for community members to use when they open new discussions in your repository.
versions:
  feature: discussion-category-forms
---

## About discussion category forms

You can encourage community members to include specific, structured information in their discussions by using discussion forms in your repository. With discussion category forms, you can create discussion templates that have customizable web form fields. Discussion forms are written in YAML using the {% data variables.product.prodname_dotcom %} form schema. For more information, see "[AUTOTITLE](/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema)."

{% data reusables.actions.learn-more-about-yaml %}

To use a discussion category form in your repository, you must create a new file and add it to the  `/.github/DISCUSSION_TEMPLATE/` folder in your repository.

You can also create discussion category forms for your organization. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

Discussion category forms are not supported for polls. For more information about polls, see "[AUTOTITLE](/discussions/collaborating-with-your-community-using-discussions/about-discussions#about-polls)."

Here is the rendered version of the issue form.

![Screenshot of a rendered discussion category form.](/assets/images/help/discussions/discussion-category-form-sample.png)

## Creating discussion category forms

People with write access to a repository can create a discussion category form.

1. Navigate to the repository where you want to create a discussion category form.
1. In your repository, create a file called `/.github/DISCUSSION_TEMPLATE/FORM-NAME.yml`, replacing `FORM-NAME` with the name for your discussion category form. {% data reusables.discussions.discussion-category-forms-name %} For more information about creating new files on GitHub, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
1. In the body of the new file, type the contents of your discussion category form. For more information, see "[AUTOTITLE](/discussions/managing-discussions-for-your-community/syntax-for-discussion-category-forms)."
1. Commit your file to the default branch of your repository. For more information, see "[AUTOTITLE](/repositories/working-with-files/managing-files/creating-new-files)."
