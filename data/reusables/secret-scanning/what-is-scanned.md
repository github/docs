{% ifversion fpt or ghec or ghes > 3.10 %}

Additionally, {% data variables.product.prodname_secret_scanning %} scans:{% ifversion secret-scanning-issue-body-comments %}
* Descriptions and comments in issues{% endif %}{% ifversion secret-scanning-backfills-historical-issues %}
* Titles, descriptions, and comments, in open and closed _historical_ issues{% ifversion ghec %}. A notification is sent to the relevant partner when a historical partner pattern is detected.{% endif %}{% endif %}{% ifversion secret-scanning-enhancements-prs-discussions %}
* Titles, descriptions, and comments in pull requests
* Titles, descriptions, and comments in {% data variables.product.prodname_discussions %}{% endif %}{% ifversion secret-scanning-enhancements-wikis %}
* Wikis{% endif %}

{% ifversion fpt or ghec %}
This additional scanning is free for public repositories.
{% endif %}

{% data reusables.secret-scanning.beta-prs-discussions-wikis-scanned %}

{% endif %}
