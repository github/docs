---
title: Creating a label
intro: 'In repositories where you have write access, you can create labels to organize issues and pull requests.'
redirect_from:
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests/
  - /articles/creating-a-label
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% tip %}

**Tip:** You can also create a label in the Labels drop-down menu within an issue or pull request.  

{% endtip %}

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-issue-pr %}
{% data reusables.project-management.labels %}
4. To the right of the search field, click **New label**.
{% data reusables.project-management.name-label %}
{% data reusables.project-management.label-description %}
{% data reusables.project-management.label-color-randomizer %}
{% data reusables.project-management.create-label %}

### Further reading

- "[About labels](/articles/about-labels)"
- "[Applying labels to issues and pull requests](/articles/applying-labels-to-issues-and-pull-requests)"
- "[Editing a label](/articles/editing-a-label)"
- "[Filtering issues and pull requests by labels](/articles/filtering-issues-and-pull-requests-by-labels)"{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.19" or currentVersion == "github-ae@latest" %}
- "[Managing default labels for repositories in your organization](/articles/managing-default-labels-for-repositories-in-your-organization)"
{% endif %}
