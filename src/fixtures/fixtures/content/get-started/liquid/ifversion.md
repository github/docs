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

<!--
  👋 If you're wondering what these __GHES_SUPPORTED* and __GHES_DEPRECATED*
  mean, they're just "macros" so that this fixture content doesn't get
  too tied to the past.
  You can type "3.9" if you want, but that version is only working right
  now/today and will eventually break tests as the values in
  `enterprise-server-releases.js` change over time.
-->

{% ifversion ghes > __GHES_DEPRECATED__[0] %}
condition-f
{% endif %}

{% ifversion ghes < __GHES_SUPPORTED__[-2] %}
condition-g
{% endif %}

{% ifversion ghes > __GHES_DEPRECATED__[0] and ghes < __GHES_SUPPORTED__[-2] %}
condition-h
{% endif %}

## ifversion with equality

{% ifversion not ghec %}
condition-i
{% endif %}

{% ifversion ghes != __GHES_SUPPORTED__[-1] %}
condition-j
{% endif %}

{% ifversion ghes = __GHES_SUPPORTED__[-1] %}
condition-k
{% endif %}

## ifversion with ors

{% ifversion fpt or ghec %}
condition-l
{% endif %}

## ifversion nested

{% ifversion ghes %}
condition-m
  {% ifversion ghes = __GHES_SUPPORTED__[-1] %}
  condition-n
  {% endif %}
{% endif %}

## ifversion combined operations

{% ifversion not fpt and ghes > __GHES_DEPRECATED__[0] %}
condition-o
{% endif %}
