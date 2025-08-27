Additionally, {% data variables.product.prodname_secret_scanning %} scans:
* Descriptions and comments in issues
* Titles, descriptions, and comments, in open and closed _historical_ issues{% ifversion fpt or ghec %}. A notification is sent to the relevant partner when a historical partner pattern is detected.{% endif %}
* Titles, descriptions, and comments in pull requests
* Titles, descriptions, and comments in {% data variables.product.prodname_discussions %}{% ifversion secret-scanning-enhancements-wikis %}
* Wikis{% endif %}

{% ifversion fpt or ghec %}
This additional scanning is free for public repositories.
{% endif %}

{% data reusables.secret-scanning.beta-prs-discussions-wikis-scanned %}
