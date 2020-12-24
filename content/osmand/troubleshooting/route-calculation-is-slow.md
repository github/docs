---
title: Route calculation is slow
versions: '*'
---

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
