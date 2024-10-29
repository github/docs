---
title: Displaying a sponsor button in your repository
intro: You can add a sponsor button in your repository to increase the visibility of funding options for your open source project.
redirect_from:
  - /github/building-a-strong-community/displaying-a-sponsor-button-in-your-repository
  - /articles/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/displaying-a-sponsor-button-in-your-repository
  - /github/administering-a-repository/managing-repository-settings/displaying-a-sponsor-button-in-your-repository
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Display a sponsor button
---
## About FUNDING files

You can configure your sponsor button by editing a `FUNDING.yml` file in your repository's `.github` folder, on the default branch. You can configure the button to include sponsored developers in {% data variables.product.prodname_sponsors %}, external funding platforms, or a custom funding URL. For more information about {% data variables.product.prodname_sponsors %}, see "[AUTOTITLE](/sponsors/getting-started-with-github-sponsors/about-github-sponsors)."

You can add one username, package name, or project name per external funding platform and up to four custom URLs. You can add one organization and up to four sponsored developers in {% data variables.product.prodname_sponsors %}. Add each platform on a new line, using the following syntax.

Platform | Syntax
-------- | -----
[LFX Mentorship (formerly CommunityBridge)](https://lfx.linuxfoundation.org/tools/mentorship) | `community_bridge: PROJECT-NAME`
[{% data variables.product.prodname_sponsors %}](https://github.com/sponsors) | `github: USERNAME` or `github: [USERNAME, USERNAME, USERNAME, USERNAME]`
[IssueHunt](https://issuehunt.io/) | `issuehunt: USERNAME`
[Ko-fi](https://ko-fi.com/) | `ko_fi: USERNAME`
[Liberapay](https://en.liberapay.com/) | `liberapay: USERNAME`
[Open Collective](https://opencollective.com/) | `open_collective: USERNAME`
[Patreon](https://www.patreon.com/) | `patreon: USERNAME`
[Tidelift](https://tidelift.com/) | `tidelift: PLATFORM-NAME/PACKAGE-NAME`
[Polar](https://www.polar.sh/) | `polar: USERNAME`
[Buy Me a Coffee](https://www.buymeacoffee.com/) | `buy_me_a_coffee: USERNAME`
[thanks.dev](https://thanks.dev/) | `thanks_dev: USERNAME`
Custom URL | `custom: LINK1` or `custom: [LINK1, LINK2, LINK3, LINK4]`

For Tidelift, use the `platform-name/package-name` syntax with the following platform names.

Language | Platform name
-------- | -------------
JavaScript | `npm`
Python | `pypi`
Ruby | `rubygems`
Java | `maven`
PHP | `packagist`
C# | `nuget`

Here's an example `FUNDING.yml` file:

```yaml
github: [octocat, surftocat]
patreon: octocat
tidelift: npm/octo-package
custom: ["https://www.paypal.me/octocat", octocat.com]
```

{% note %}

**Note:** If a custom URL in an array includes `:`, you must wrap the URL in quotes. For example, `"https://www.paypal.me/octocat"`.

{% endnote %}

You can create a default sponsor button for your organization or personal account. For more information, see "[AUTOTITLE](/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)."

{% note %}

Funding links provide a way for open source projects to receive direct financial support from their community. We don’t support the use of funding links for other purposes, such as for advertising, or supporting political, community, or charity groups. If you have questions about whether your intended use is supported, please visit {% data variables.contact.contact_support_page %}.

{% endnote %}

## Displaying a sponsor button in your repository

Anyone with admin permissions can enable a sponsor button in a repository.

{% data reusables.repositories.navigate-to-repo %}
{% data reusables.repositories.sidebar-settings %}
1. On the "General" settings page, in the "Features" section, select **Sponsorships**.
1. In the "Sponsorships" box, click **Set up sponsor button** or **Override funding links**.
1. In the file editor, follow the instructions in the `FUNDING.yml` file to add links to your funding locations.
{% data reusables.files.write_commit_message %}
{% data reusables.files.choose_commit_branch %}
{% data reusables.files.propose_new_file %}

## Further reading

* "[AUTOTITLE](/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors)"
* "[FAQ with the {% data variables.product.prodname_sponsors %} team](https://github.blog/2019-06-12-faq-with-the-github-sponsors-team/)" on {% data variables.product.prodname_blog %}
