---
title: Copilot feature matrix
intro: Identify which IDEs support which {% data variables.product.prodname_copilot %} features.
versions:
  feature: copilot
category:
  - Learn about Copilot
contentType: reference
---

> [!NOTE]
> The {% data variables.product.prodname_copilot %} feature matrix is currently in {% data variables.release-phases.public_preview %} and is subject to change.

{% data variables.product.company_short %} recommends using the latest stable IDE and {% data variables.product.prodname_copilot_short %} extension versions to get the best {% data variables.product.prodname_copilot_short %} experience. 

**Key:**

{% for level in tables.copilot.matrix-meta.supportLevels %}
* {{ level.symbol }} = {{ level.label }}
{%- endfor %}
{%- assign anyNotApplicable = false %}
{%- for ideKey in tables.copilot.matrix-meta.ideOrder %}
  {%- assign naList = tables.copilot.matrix[ideKey].notApplicable %}
  {%- if naList and naList.size > 0 %}{% assign anyNotApplicable = true %}{% endif %}
{%- endfor %}
{%- if anyNotApplicable %}
* — = does not apply to this IDE
{%- endif %}

{%- comment %}
Source for the following tables lives in:
  data/tables/copilot/matrix-meta.yml   shared config: ideOrder, featureOrder, supportLevels
  data/tables/copilot/matrix/<ide>.yml  one file per IDE, owned by that IDE's product owner
{%- endcomment %}

{% ides %}

## Features by IDE

The following table shows supported {% data variables.product.prodname_copilot_short %} features in the latest version of each IDE.

{%- comment %}
This loop generates the "Features by IDE" comparison table:
- Column order comes from matrix-meta.ideOrder
- Row order comes from matrix-meta.featureOrder, so a feature that ships first in an
  IDE other than VS Code still appears here
- For each cell, looks up the feature in that IDE's latest version (versions | first)
- A feature listed in an IDE's `notApplicable` renders as — (does not apply), which is
  distinct from ✗ (not supported)
Example row: | Agent mode | ✓ | ✓ | P | ✗ | ... |
{%- endcomment %}
{%- assign matrix = tables.copilot.matrix %}
{%- assign meta = tables.copilot.matrix-meta %}

| Feature{%- for ideKey in meta.ideOrder %} | {{ matrix[ideKey].name }}{%- endfor %} |
|:----{%- for ideKey in meta.ideOrder %}|:----:{%- endfor %}|
{%- for feature in meta.featureOrder %}
| {{ feature }}{%- for ideKey in meta.ideOrder %}{%- assign ide = matrix[ideKey] %}{%- assign latestVersion = ide.versions | first %}{%- assign supportLevel = ide.features[feature][latestVersion] %} | {%- if ide.notApplicable contains feature -%}—{%- else -%}{%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endif -%}{%- endfor %} |
{%- endfor %}

{% endides %}

{% vscode %}

{% assign ideEntry = tables.copilot.matrix.vs-code %}

## Features by VS Code version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## VS Code {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvscode %}

{% visualstudio %}

{% assign ideEntry = tables.copilot.matrix.visual-studio %}

## Features by Visual Studio version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Visual Studio {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvisualstudio %}

{% jetbrains %}

{% assign ideEntry = tables.copilot.matrix.jetbrains %}

## Features by JetBrains version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## JetBrains {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endjetbrains %}

{% eclipse %}

{% assign ideEntry = tables.copilot.matrix.eclipse %}

## Features by Eclipse version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Eclipse {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endeclipse %}

{% xcode %}

{% assign ideEntry = tables.copilot.matrix.xcode %}

## Features by Xcode version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## Xcode {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endxcode %}

{% vimneovim %}

{% assign ideEntry = tables.copilot.matrix.neovim %}

## Features by NeoVim version

The following table shows supported {% data variables.product.prodname_copilot_short %} features across recent versions of the {% if ideEntry.versionType == "extension" %}{% data variables.copilot.copilot_extension %} for the {% endif %}IDE.

{%- comment %} Use the predefined versionGroups from the IDE's data file {%- endcomment %}
{% for groupEntry in ideEntry.versionGroups %}
  {%- assign groupName = groupEntry[0] %}
  {%- assign groupVersions = groupEntry[1] %}

## NeoVim {{ groupName }}

| Feature{%- for version in groupVersions %} | {{ version }}{%- endfor %} |
|:----{%- for version in groupVersions %}|:----:{%- endfor %}|
{%- for featureEntry in ideEntry.features %}
| {{ featureEntry[0] }}{%- for version in groupVersions %}{%- assign supportLevel = featureEntry[1][version] %} | {%- case supportLevel -%}{%- when "supported" %}✓{%- when "preview" %}P{%- when "closing-down" %}C{%- else %}✗{%- endcase -%}{%- endfor %} |
{%- endfor %}
{%- comment %} Features that do not apply to this IDE at all, rendered as — not ✗ {%- endcomment %}
{%- for naFeature in ideEntry.notApplicable %}
| {{ naFeature }}{%- for version in groupVersions %} | —{%- endfor %} |
{%- endfor %}

{% endfor %}

{% endvimneovim %}
