---
title: Navigation Voice Prompt Triggering
versions: '*'
---

**(Compiled by Hardy 2013, last reviewed 2021-01)**
## Principle
* Far-out prompts are simply triggered based on a **lead distance threshold**, derived by converting a meaningful lead time via the DEFAULT_SPEED of the base profile.
* For close prompts there is a combined approach using the
   * **lead distance threshold**, derived as above, but no later than the
   * **lead time threshold** as calculated using the current speed.
   * We pre-pone by the **POSITIONING_TOLERANCE** to allow for the possible distance over-estimation due to the positioning error.
* In addition, there is a user-configurable overall `VOICE_PROMPT_DELAY`, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate `VOICE_PROMPT_DELAY`!)
* For the announcement of TARGETS and INTERMEDIATE TARGETS, there is an additional user setting `ARRIVAL_DISTANCE_FACTOR` scaling the lead distance by a factor between 0.25 and 1.5.
* We mute prompts immediately once they appear to refer actions already passed, or if your direction of travel seems no in line with a current route.

## Base Profile Default Speeds
While these are now also user-adjustable, the defaults are
* Driving: 12.5 m/s (45 km/h)
* Cycling: 2.77 m/s (10 km/h)
* Walking: 1.11 m/s (4 km/h)
* Boat: 1.38 m/s (5 km/h)
* Ski: 1.38  m/s (5 km/h)
* Aircraft: 40 m/s (144 km/h)

## Trigger Behavior
Prompt type | Trigger time (sec) | Trigger distance (m) | Speed correction | Arrival setting | Comment
--- | --- | --- | --- | --- | --
Turn now | Driving: 7 s<br> Cycling: 3.2 s<br> Walking: 2 s | Driving: 45 m <br> Cycling: 10 m <br> Walking: 4 m | :heavy_check_mark: | :heavy_check_mark: | Time = max(8, sqrt(speed * 3.6)) <br> Dist = speed * 3.6
Turn in X m | 22 s | Driving: 275 m <br> Cycling: 60 m <br> Walking: 25 m | :heavy_check_mark: |  | Skipped if less 15 seconds before turn
Prepare to turn in X m | 115 s | Driving: 1 500 m <br> Cycling: 320 m <br> Walking: - m |  |  | Skipped if less 90 seconds before turn<br>Skipped if speed < 10 kmh
Long Prepare to turn in X m | 300 s | Driving: - m <br> Cycling: - m <br> Walking: - m |  |  | Skipped if less 250 seconds before turn<br>Skipped if speed < 110 kmh
------------
Long Prepare to turn in X m | 300 s | Driving: - m <br> Cycling: - m <br> Walking: - m |  |  | Skipped if less 250 seconds before turn<br>Skipped if speed < 110 kmh


Prompt type | Trigger,<br>Lead intervals|Refactored:<br>[typical trigger distance] | Speed correction | Arrival announcement
--- | --- | --- | --- | ---
Go Ahead | >3000 m out, after route calculation if no other prompt is due, or after a turn if next turn is more than PREPARE_LONG_DISTANCE away | PREPARE_LONG_DISTANCE = DEFAULT_SPEED * 300<br><br>[Driving: 3600 m, Walking: 600 m] |  
LONG_PREPARE_TURN | Only available for high speed vehicles (speed > 100 kmh) feedback<br>Driving: DISABLED<br>Cycling: DISABLED<br>Walking: DISABLED
PREPARE_TURN | Not available for low speed vehicles (speed < 10 kmh) feedback<br>Driving: 1500 m - 1200 m<br>Cycling: 200 m - 120 m<br>Walking: DISABLED | PREPARE_DISTANCE = DEFAULT_SPEED * 115<br><br>[Driving: 1380 m, Walking: 230 m]
TURN_IN | Driving: 300 m - 168 m or <25 sec<br>Cycling: 80 m - 60 m or <16 sec<br>Walking: 50 m - 30 m or <25 sec | TURN_IN_DISTANCE = DEFAULT_SPEED  * 22<br><br>[Driving: 264 m, Walking: 44 m] | :heavy_check_mark:
TURN_NOW | Driving: <60 m or <5 sec<br>Cycling: <30 m or <6 sec<br>Walking: 15 m or <7.5 sec | TURN_NOW_DISTANCE so that POSITIONING_TOLERANCE and DEFAULT_SPEED allow for a 3.6 sec lead time * manual_factor<br><br>[Driving: 43 m, Walking: 12 m]<br><br>**Suggestion:** Remove ARRIVAL_DISTANCE_FACTOR
Make a U-turn when possible | Mostly suppressed now. Should only sound if no route in forward direction was found at all (e.g. if you are heading down a one way road), or if a route in forward direction
ALARMS | 150 m<br>(100 m for TRAFFIC_CALMING) | LONG_ALARM_ANNOUNCE_RADIUS = 12 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[144 m, 24 m]<br>SHORT_ALARM_ANNOUNCE_RADIUS = 7 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[84 m, 14 m]<br><br>**Suggestion:** Factor in current speed like for TURN_NOW, remove ARRIVAL_DISTANCE_FACTOR
APPROACH a point | 1400 m | LONG_PNT_ANNOUNCE_RADIUS = 60 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[1920 m, 120 m]<br>SHORT_PNT_ANNOUNCE_RADIUS = 15 \* DEFAULT_SPEED \* ARRIVAL_DISTANCE_FACTOR<br>[180 m, 30 m]<br><br>**Suggestion:** Remove ARRIVAL_DISTANCE_FACTOR
ARRIVE at destination or intermediate destination point | 5 sec * ARRIVAL_DISTANCE_FACTOR | **Suggestion:** Use 2 * TURN_NOW
ARRIVE at waypoint | | **Suggestion:** Treat like ARRIVE at destination
PASSING nearby POI | no threshold | **Suggestion:** Treat like ARRIVE at destination, but for its along-the-route distance component
PASSING nearby FAVORITE | no threshold | **Suggestion:** Treat like ARRIVE at destination, but for its along-the-route distance component
GPS signal lost | Is played after GPS signal has been lost for continuous 20 sec and this was not caused by user action.

