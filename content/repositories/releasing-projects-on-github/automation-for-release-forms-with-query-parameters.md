---
title: Automation for release forms with query parameters
intro: 'To quickly create releases by auto-populating the new release form with customized information, you can add query parameters to the URL for the release form page.'
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
---
Query parameters are optional parts of a URL you can customize to share a specific web page view, such as search filter results, an issue template, or the release form page on {% data variables.product.prodname_dotcom %}. To create your own query parameters, you must match the key and value pair.

You must have the proper permissions for any action to use the equivalent query parameter. For example, you must have permission to create releases to pre-fill the releases form. For more information, see "[AUTOTITLE](/repositories/releasing-projects-on-github/managing-releases-in-a-repository)."

If you create an invalid URL using query parameters, or if you don’t have the proper permissions, the URL will return a 404 error page.  

## Supported query parameters

Query parameter | Example
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` creates a release based on a tag named "v1.0.1".
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` creates a release based on the latest commit to the "release-1.0.1" branch.
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` creates a release named "octo-1.0.1" based on a tag named "v1.0.1".
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` creates a release with the description "Adds widget support" in the release body.
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` creates a release that will be identified as non-production ready.

## Further reading

* "[AUTOTITLE](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)"
* "[AUTOTITLE](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request)"
