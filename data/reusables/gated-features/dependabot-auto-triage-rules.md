{% data variables.dependabot.auto_triage_rules %} are available for the following repository types:

* All repositories for {% data variables.dependabot.github_presets %}{% ifversion fpt %}
* Public repositories for {% data variables.dependabot.custom_rules %}{% elsif ghec or ghes %}
* Organization-owned repositories with [{% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security) enabled for {% data variables.dependabot.custom_rules %}{% endif %}
