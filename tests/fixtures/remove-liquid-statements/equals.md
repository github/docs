---
title: Equals Version To Deprecate
intro: Remove liquid and content
---

## 1
<div class="example1">

{% if currentVersion == "enterprise-server@2.13" %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% if currentVersion != "free-pro-team@latest" and currentVersion == "enterprise-server@2.13" %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% else %}

Bravo

{% if currentVersion == "enterprise-server@2.13" %}

Charlie

{% endif %}
{% endif %}

</div>

## 4
<div class="example4">

{% if currentVersion == "free-pro-team@latest" %}

Alpha

{% if currentVersion == "enterprise-server@2.13" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% if currentVersion == "enterprise-server@2.13" %}

Alpha

{% if currentVersion == "free-pro-team@latest" %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% if currentVersion == "enterprise-server@2.13" %}

Alpha

{% else %}

Charlie

{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.13" %}

Bravo

{% endif %}

{% endif %}

</div>
