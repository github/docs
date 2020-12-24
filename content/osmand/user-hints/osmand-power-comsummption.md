---
title: OsmAnd seems to drain too much battery power
versions: '*'
---

OsmAnd seems to drain too much battery power

There have on and off been user reports about this. We made lots of
measurements and could never really reproduce it, even though under some
circumstances OsmAnd is reported responsible for 90% of the battery
usage. Please be aware that OsmAnd does not run anything in background
except a service while needed for ongoing functionality live navigation or track recording.
The presence of the service is displayed in the Android notification area.
If you do not see anything there, OsmAnd is not consuming any power at all in the background.

On newer devices, typical power consumption for OsmAnd should be in this neighborhood:  

Device Funxtion | Battery Consumption per Hour
--- | ---
**Typical value for device asleep** with only standard apps active | 0.5 %
**Screen on** may typically account for | 6 %
**GPS active** may typically account for | 5 %
**Net effect of OsmAnd running** in the background, e.g. for track recording: | 0.5 %

The overall power consumption should result by adding these components as applicable, depending
how you use OsnAmd. Please report if you see huge deviations:

OsmAnd Funxtion | Battery Consumption per Hour
--- | ---
**Track recording** with screen off | 6 %
**Navigation**  with screen on | 11 %
**OsmAnd in the background not running the service for any purpose**: | 0
