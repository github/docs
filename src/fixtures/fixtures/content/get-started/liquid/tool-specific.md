---
title: Tool switching Liquid tags
intro: Demonstrates the HTML that becomes of a the different tool Liquid tags like `webui`, `cli`, and `codespaces`
defaultTool: webui
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
type: tutorial
---

## Running a workflow

This page has a tool switcher

{% webui %}

1. This is webui content

{% endwebui %}

{% cli %}

This is cli content

```shell
cli content
```

{% endcli %}

{% desktop %}
  This is desktop content
{% enddesktop %}

{% webui %}

## Webui section

Webui section specific content

{% endwebui %}

{% desktop %}

## Desktop section

Desktop section specific content

{% enddesktop %}
