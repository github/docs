---
title: Not Equals To Version To Deprecate
intro: Remove liquid only
---

## 1
<div class="example1">

{% ifversion ghes != 2.13 %}

Alpha

{% endif %}

</div>

## 2
<div class="example2">

{% ifversion fpt or ghes != 2.13 %}

Alpha

{% endif %}

</div>

## 3
<div class="example3">

{% ifversion fpt %}

Alpha

{% else %}

Bravo

{% ifversion ghes != 2.13 %}

Charlie

{% endif %}

{% endif %}

</div>

## 4
<div class="example4">

{% ifversion fpt %}

Alpha

{% ifversion ghes != 2.13 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% ifversion ghes != 2.13 %}

Alpha

{% ifversion fpt %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 6
<div class="example6">

{% ifversion not fpt and ghes != 2.13 %}

Alpha

{% endif %}

</div>
