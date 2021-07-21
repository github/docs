---
title: Licenses
redirect_from:
  - /v3/licenses
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
---

The Licenses API returns metadata about popular open source licenses and information about a particular project's license file.

The Licenses API uses [the open source Ruby Gem Licensee](https://github.com/benbalter/licensee) to attempt to identify the project's license. Licensee matches the contents of a project's `LICENSE` file (if it exists) against a short list of known licenses. As a result, the API does not take into account the licenses of project dependencies or other means of documenting a project's license such as references to the license name in the documentation.

If a license is matched, the license key and name returned conforms to the [SPDX specification](https://spdx.org/).

**Note:** These endpoints will also return a repository's license information:

- [Get a repository](/rest/reference/repos#get-a-repository)
- [List repositories for a user](/rest/reference/repos#list-repositories-for-a-user)
- [List organization repositories](/rest/reference/repos#list-organization-repositories)
- [List forks](/rest/reference/repos#list-forks)
- [List repositories watched by a user](/rest/reference/activity#list-repositories-watched-by-a-user)
- [List team repositories](/rest/reference/teams#list-team-repositories)

{% warning %}

GitHub is a lot of things, but it’s not a law firm. As such, GitHub does not provide legal advice. Using the Licenses API or sending us an email about it does not constitute legal advice nor does it create an attorney-client relationship. If you have any questions about what you can and can't do with a particular license, you should consult with your own legal counsel before moving forward. In fact, you should always consult with your own lawyer before making any decisions that might have legal ramifications or that may impact your legal rights.

GitHub created the License API to help users get information about open source licenses and the projects that use them. We hope it helps, but please keep in mind that we’re not lawyers (at least most of us aren't) and that we make mistakes like everyone else. For that reason, GitHub provides the API on an “as-is” basis and makes no warranties regarding any information or licenses provided on or through it, and disclaims liability for damages resulting from using the API.

{% endwarning %}

{% include rest_operations_at_current_path %}
