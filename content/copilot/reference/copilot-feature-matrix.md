---
title: Copilot feature matrix
intro: 'Identify which IDEs support which {% data variables.product.prodname_copilot %} features.'
versions:
  feature: copilot
topics:
  - Copilot
---

> [!NOTE]
> The {% data variables.product.prodname_copilot %} feature matrix is currently in {% data variables.release-phases.public_preview %} and is subject to change.

{% data variables.product.company_short %} recommends using the latest stable IDE and {% data variables.product.prodname_copilot_short %} extension versions to get the best {% data variables.product.prodname_copilot_short %} experience. 

**Key:**

* ✓ = supported
* ✗ = not supported
* P = under preview

<!-- Source for the following tables lives in data/tables/copilot-matrix.yml -->

## Features by IDE

The following table shows supported {% data variables.product.prodname_copilot_short %} features in the latest version of each IDE.

| Feature{%- for entry in tables.copilot.copilot-matrix.ides %} | {{ entry[0] }}{%- endfor %} |
|:----{%- for entry in tables.copilot.copilot-matrix.ides %}|:----:{%- endfor %}|
{%- for featureEntry in tables.copilot.copilot-matrix.ides["VS Code"].features %}
| {{ featureEntry[0] }}{%- for ideEntry in tables.copilot.copilot-matrix.ides %}{%- assign latestVersion = ideEntry[1].versions | last %}{%- assign supportLevel = ideEntry[1].features[featureEntry[0]][latestVersion] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{% for ideEntry in tables.copilot.copilot-matrix.ides %}

## Features by {{ ideEntry[0] }} version

{%- comment %} Use the predefined versionGroups from JSON data {%- endcomment %}
{%- for groupEntry in ideEntry[1].versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

### {{ ideEntry[0] }} {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry[1].features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}

{%- endfor %}

{% endfor %}
