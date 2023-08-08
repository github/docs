---
title: Ifversion liquid tag
intro: 'Tests functionality of `ifversion` and its operators {% ifversion not fpt %}(not on fpt){% else %}(on fpt){% endif %}'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

## ifversion without operators

This section isn't conditioned.

{% ifversion fpt %}
condition-a
{% endif %}

{% ifversion fpt %}
condition-b
{% else %}
condition-c
{% endif %}

{% ifversion fpt %}
condition-d
{% elsif ghes %}
condition-e
{% endif %}

## ifversion with ranges

{% ifversion ghes > 3.5 %}
condition-f
{% endif %}

{% ifversion ghes < 3.7 %}
condition-g
{% endif %}

{% ifversion ghes > 3.5 and ghes < 3.7 %}
condition-h
{% endif %}

## ifversion with equality

{% ifversion not ghec %}
condition-i
{% endif %}

{% ifversion ghes != 3.6 %}
condition-j
{% endif %}

{% ifversion ghes = 3.6 %}
condition-k
{% endif %}

## ifversion with ors

{% ifversion fpt or ghec %}
condition-l
{% endif %}

## ifversion nested

{% ifversion ghes %}
condition-m
  {% ifversion ghes = 3.6 %}
  condition-n
  {% endif %}
{% endif %}

## ifversion combined operations

{% ifversion not fpt and ghes > 3.5 %}
condition-o
{% endif %}
