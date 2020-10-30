---
title: Licenças
redirect_from:
  - /v3/licenses
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

The Licenses API returns metadata about popular open source licenses and information about a particular project's license file.

The Licenses API uses [the open source Ruby Gem Licensee](https://github.com/benbalter/licensee) to attempt to identify the project's license. Licensee matches the contents of a project's `LICENSE` file (if it exists) against a short list of known licenses. As a result, the API does not take into account the licenses of project dependencies or other means of documenting a project's license such as references to the license name in the documentation.

If a license is matched, the license key and name returned conforms to the [SPDX specification](https://spdx.org/).

**Note:** These endpoints will also return a repository's license information:

- [Obter um repositório](/v3/repos/#get-a-repository)
- [Listar repositórios para um usuário](/v3/repos/#list-repositories-for-a-user)
- [Listar repositórios da organização](/v3/repos/#list-organization-repositories)
- [Listar bifurcações](/v3/repos/forks/#list-forks)
- [Listar repositórios inspecionados por um usuário](/v3/activity/watching/#list-repositories-watched-by-a-user)
- [Listar repositórios da equipe](/v3/teams/#list-team-repositories)

{% warning %}

GitHub is a lot of things, but it’s not a law firm. As such, GitHub does not provide legal advice. Using the Licenses API or sending us an email about it does not constitute legal advice nor does it create an attorney-client relationship. If you have any questions about what you can and can't do with a particular license, you should consult with your own legal counsel before moving forward. In fact, you should always consult with your own lawyer before making any decisions that might have legal ramifications or that may impact your legal rights.

GitHub created the License API to help users get information about open source licenses and the projects that use them. We hope it helps, but please keep in mind that we’re not lawyers (at least not most of us aren't) and that we make mistakes like everyone else. For that reason, GitHub provides the API on an “as-is” basis and makes no warranties regarding any information or licenses provided on or through it, and disclaims liability for damages resulting from using the API.

{% endwarning %}

{% include rest_operations_at_current_path %}
