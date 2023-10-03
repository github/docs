---
title: Tool Platform switcher
intro: Combines tool and platform switchers
defaultTool: desktop
defaultPlatform: mac
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
---

## Running a workflow

This page has a tool switcher

{% webui %}

1. this is webui content

{% endwebui %}

{% cli %}

this is cli content

```shell
cli content
```

{% endcli %}

{% desktop %}
  this is desktop content
{% enddesktop %}

{% webui %}

## Webui section

Webui section specific content

{% endwebui %}

{% desktop %}

## Desktop section

Desktop section specific content

{% enddesktop %}

## General

Bla bla

{% mac %}

## Macintosh until 1999

`mac` specific content.

{% endmac %}

{% windows %}

## Windows 95 was awesome

`windows` specific content.

{% endwindows %}

{% linux %}

## The year of Linux on the desktop

`linux` specific content.

{% endlinux %}
