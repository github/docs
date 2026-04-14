# {{ pageTitle }}

{{ pageIntro }}

{{ manualContent }}

{% for item in changelogItems %}

## Schema changes for {{ item.date }}

{% for schemaChange in item.schemaChanges %}

### {{ schemaChange.title }}

{% for change in schemaChange.changes %}- {{ change }}
{% endfor %}

{% endfor %}

{% for previewChange in item.previewChanges %}

### {{ previewChange.title }}

{% for change in previewChange.changes %}- {{ change }}
{% endfor %}

{% endfor %}

{% for upcomingChange in item.upcomingChanges %}

### {{ upcomingChange.title }}

{% for change in upcomingChange.changes %}- {{ change }}
{% endfor %}

{% endfor %}

{% endfor %}
