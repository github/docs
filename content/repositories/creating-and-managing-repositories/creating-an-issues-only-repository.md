---
title: Creating an issues-only repository
intro: '{% data variables.product.product_name %} does not provide issues-only access permissions, but you can accomplish this using a second repository which contains only the issues.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
---
1. Create a **private** repository to host the source code from your project.
1. Create a second repository with the permissions you desire to host the issue tracker.
1. Add a README file to the issues repository explaining the purpose of this repository and linking to the issues section.
1. Set your collaborators or teams to give access to the repositories as you desire.

Users with write access to both can reference and close issues back and forth across the repositories, but those without the required permissions will see references that contain a minimum of information.

For example, if you pushed a commit to the private repository's default branch with a message that read `Fixes organization/public-repo#12`, the issue would be closed, but only users with the proper permissions would see the cross-repository reference indicating the commit that closed the issue. Without the permissions, a reference still appears, but the details are omitted.
