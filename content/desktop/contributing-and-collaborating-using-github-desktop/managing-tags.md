---
title: Managing tags
intro: 'You can use {% data variables.product.prodname_desktop %} to create, push, and view tags.'
redirect_from:
  - /desktop/contributing-to-projects/managing-tags
versions:
  free-pro-team: '*'
---

### About tags in {% data variables.product.prodname_desktop %}

{% data variables.product.prodname_desktop %} allows you to create annotated tags. You can use a tag to mark an individual point in your repository's history, including a version number for a release. For more information about release tags, see "[About releases](/github/administering-a-repository/about-releases)."

{% data reusables.desktop.tags-push-with-commits %}

### Creating a tag

{% data reusables.desktop.history-tab %}
{% data reusables.desktop.create-tag %}
{% data reusables.desktop.name-tag %}
{% data reusables.desktop.confirm-tag %}

### Viewing tags

{% data reusables.desktop.history-tab %}
2. Click the commit.
  {% note %}

  **Note**: {% data variables.product.prodname_desktop %} displays an arrow {% octicon "arrow-up" aria-label="The up arrow icon" %} if the tag has not been pushed to the remote repository.

  {% endnote %}

  ![Viewing a tag in the history](/assets/images/help/desktop/viewing-tags-in-history.png)

3. All tags associated with the commit are visible in that commit's metadata.
![Viewing a tag in the commit](/assets/images/help/desktop/viewing-tags-in-commit.png)
