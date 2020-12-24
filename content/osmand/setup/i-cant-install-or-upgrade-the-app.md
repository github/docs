---
title: I can't install or upgrade the app
versions: '*'
---

If you have an error "-25/-26/-27" please read below, otherwise please
contact support. The issue you are experiencing is now confirmed as
Xiaomi MIUI's integrated anti-virus' fault. To avoid error
"-25/-26/-27", you need to freeze the "Guard Provider" process before
updating OsmAnd. Then, once updated, you can re-enable the process.
There are many ways and tools to freeze a process. We suggest you to
google it yourself, although some of our users used 3C Toolbox or App
Master, but we leave this to your preference.

To freeze a process, follow these steps: go to App Manager --\> Apps tab
--\> filter by System Apps --\> select the "Guard Provider" --\> tap the
Manage button (bottom right, four little squares) --\> Freeze. To
unfreeze, repeat the same procedure. Unfortunately "App Master" does not
do freeze in the OsmAnd Free version. 3C Toolbox does the trick, but you
will find the "Guard Provider" process as "com.securitycore.miui\_t"
under "Apps" with the filter on "System".

**I can't uninstall the app**

Sometimes you might want to uninstall the app because you want to
install the paid version or a nightly develompment build, and you find
that the "UNINSTALL" option is inactive. This is because OsmAnd has been
configured as "Device Manager" by you as user.\
 In hiking/cycling mode OsmAnd can be configured to switch off the
screen and switch it on just before a navigational change of direction
is necessary. To make this possible in Android, OsmAnd is added to the
"Device administrators" section. This is the reason you can't uninstall
OsmAnd.

To uninstall OsmAnd in such a case you need to go to (Android)
"Settings-\>Security-\>device administrators" and uncheck OsmAnd as a
device administrator. After having done that you can uninstall OsmAnd.
