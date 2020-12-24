---
title: Route calculation is slow
versions: '*'
---

--ADJUST LINKS--

Please be aware that there are 2 offline routing engines in the app: a
Java based approach and a "Native" (C++) routing. The Java based
approach is used in 'Safe Mode', it is 10 times slower than native mode
and it has strict memory limitations. If you experience it and you see
messages 'Not enough memory to compute', please go to Settings —
'General' — 'Safe mode' and make sure the option is disabled.

For native routing there are different limitations for different phones,
depending on memory & processor. In general, native routing should
handle \< 300 km routes nicely. The route calculation should take
between 15 sec and 4 minutes. It is prudent to not wait much longer than
4 minutes, because most likely the program will crash.

The only known workaround to compute long routes is to insert
intermediate destinations. Two additional intermediate destinations
should be enough even for very long routes.

How to calculate routes longer than 250km?

Many long routes (\> 200-250km) cannot not be calculated by OsmAnd's
offline routing engine today. If the app does not show a route after 7-8
minutes of calculation time, consider [placing
waypoints](https://osmand.net/features/navigation#Navigation_services)
(pick e.g. places on motorways). 3-4 waypoints will be enough to
calculate even 1000km routes.

For Android version you can create a Navigation Profile with Third-party
routing (BRouter). Read more about it
[here](https://osmand.net/features/navigation-profiles#create_brouter).
