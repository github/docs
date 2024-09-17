---
title: About collaborative development models
intro: The way you use pull requests depends on the type of development model you use in your project. You can use the fork and pull model or the shared repository model.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/getting-started/about-collaborative-development-models
  - /articles/types-of-collaborative-development-models
  - /articles/about-collaborative-development-models
  - /github/collaborating-with-issues-and-pull-requests/about-collaborative-development-models
  - /github/collaborating-with-pull-requests/getting-started/about-collaborative-development-models
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Collaborative development
---
## Fork and pull model

In the fork and pull model, anyone can fork an existing ("upstream") repository to which they have read access and the owner of the upstream repository allows it. Be aware that a fork and its upstream share the same git data. This means that all content uploaded to a fork is accessible from the upstream and all other forks of that upstream. You do not need permission from the upstream repository to push to a fork of it you created. You can optionally allow anyone with push access to the upstream repository to make changes to your pull request branch. This model is popular with open-source projects as it reduces the amount of friction for new contributors and allows people to work independently without upfront coordination.

{% tip %}

**Tip:** {% data reusables.open-source.open-source-guide-general %} {% data reusables.open-source.open-source-learning %}

{% endtip %}

## Shared repository model

In the shared repository model, collaborators are granted push access to a single shared repository and topic branches are created when changes need to be made. Pull requests are useful in this model as they initiate code review and general discussion about a set of changes before the changes are merged into the main development branch. This model is more prevalent with small teams and organizations collaborating on private projects.

## Further reading

* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork)"
