---
title: Table row headers
intro: A table with a Liquid tag that turns the first column into `<th>` cells
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
---

## Example table

{% rowheaders %}

|Preferences|Tom|Dick|Harry|
|---|---|---|---|
|Favorite fruit| Banana  | Apple | Mango
|Football or soccer|Soccer|Football|Sportsball??

{% endrowheaders %}

## Regular table

| Name | Seasons | Skill |
|---|---|---|
| Jill | 1 | Nunchucks |
| Sabrina | 3 | Knives |
| Kelly | 4 | Kicks |
