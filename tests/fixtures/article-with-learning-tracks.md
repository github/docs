---
title: Article with learning tracks
versions:
  free-pro-team: '*'
learningTracks:
  - track_1
  - track_2
  - non_existing_track
  - '{% if currentVersion == "free-pro-team@latest" %}dotcom_only_track{% endif %}'
  - '{% if currentVersion != "free-pro-team@latest" %}enterprise_only_track{% endif %}'
layout: product-sublanding
---
