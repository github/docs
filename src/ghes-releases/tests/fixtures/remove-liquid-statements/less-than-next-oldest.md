---
title: Less Than Version To Deprecate
intro: Remove liquid and content
---

## 1
<div class="example1">

Alpha

{% ifversion ghes < 2.14 %}

Bravo

{% endif %}

</div>

## 2
<div class="example2">

Alpha

{% ifversion fpt or ghes < 2.14 %}

Bravo

{% endif %}

</div>

## 3
<div class="example3">

{% ifversion fpt %}

Alpha

{% else %}

Bravo

{% ifversion ghes < 2.14 %}

Charlie

{% endif %}

{% endif %}

</div>

## 4

<div class="example4">

{% ifversion fpt %}

Alpha

{% ifversion ghes < 2.14 %}

Bravo

{% endif %}

{% else %}

Charlie

{% endif %}

</div>

## 5
<div class="example5">

{% ifversion ghes < 2.14 %}

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

{% ifversion ghes < 2.16 %}

Alpha

{% else %}

Charlie

{% ifversion not fpt and ghes < 2.14 %}

Bravo

{% endif %}

{% endif %}

</div>

## 7
<div class="example7">

{% ifversion not fpt and ghes < 2.14 %}

Alpha

{% ifversion ghes < 2.14 %}

Bravo

{% else %}

Charlie

{% endif %}

{% endif %}

</div>

## 8
<div class="example8">

{% ifversion ghes < 2.14 %}

Alpha

{% else %}

Bravo

{% ifversion ghes > 2.16 %}

Charlie

{% else %}

Delta

{% endif %}

Echo

{% endif %}

</div>
