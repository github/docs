---
title: Navigation Voice Prompt Triggering
versions: '*'
---
# Navigation Voice Prompt Triggering
**(Compiled by Hardy 2013, to be reviewed)**
* Most prompts are triggered based on a fixed lead distance (which can depend on the base profile)
* For some close prompts we have a combined approach using
   * lead distance threshold
   * lead time threshold
   * GPS_TOLERANCE
   * current speed
   * DEFAULT_SPEED of the base profile
* There is a user-configurable additional and overall VOICE_PROMPT_DELAY, particularly needed for output type _Phone call audio_, where we emulate a call to a car stereo which comes with a noticeable delay. (Also all distances to be used in the prompts anticipate VOICE_PROMPT_DELAY!)
* For the announcement of TARGETS and INTERMEDIATE TARGETS, there is an additional user setting ARRIVAL_DISTANCE_FACTOR impacting the lead distance
* We mute TURN instructions immediately once your direction of travel or current position is not any more in line with the turn to be announced (account for GPS issues).

### Base Profile Default Speeds
* CAR: 12 m/s = 43 km/h
* BICYCLE: 5 m/s = 18 km/h)
* PEDESTRIAN: 2 m/s=7.2 km/h
* These are now also user-adjustable!

### Trigger Behavior
Prompt type | Trigger
--- | ---
GoAhead | \>3000 m out, after route calculation if no other prompt is due, or after a turn if next turn is more than PREPARE_LONG_DISTANCE away
<del>(TURN) PREPARE_LONG </del> | We now suppress this prompt as per user feedback<br><del>CAR: 3000 m - 2000 m<br>BICYCLE: 500 m - 30 0m<br>PEDESTRIAN: 100 m - 70 m</del>
(TURN) PREPARE | CAR: 1500 m - 1200 m<br>BICYCLE: 200 m - 120 m<br>PEDESTRIAN: 100m-70m
TURN_IN | CAR: 300 m - 168 m or \<25 sec<br>BICYCLE: 80 m - 60 m or \<16 sec<br>PEDESTRIAN: 50 m - 30 m or \<25 sec
TURN | CAR: \<60 m or \<5 sec<br>BICYCLE: \<30 m or \<6 sec<br>PEDESTRIAN: 15 m or \<7.5 sec
Make a U-turn when possible | Mostly suppressed now. Should only sound if no route in forward direction was found at all (e.g. if you are heading down a one way road), or if a route in forward directio
ALARMS | 150 m (100 m for TRAFFIC_CALMING)
approaching points | 1400 m
arrive at destination point or intermediate destination point | 5 sec * ARRIVAL_DISTANCE_FACTOR
arrive at waypoint | Treat like destinationPoint
passing nearby POI | no threshold, to be discussed
passing nearby FAVORITE | no threshold, to be discussed
GPS signal lost | Is played after GPS signal has been lost for continuous 20 sec and this was not caused by user action.

