---
title: Trace Address Search Issues
versions: '*'
---

## Issue: street or house is found in another city

Examples on Github: [1](https://github.com/osmandapp/OsmAnd/issues/10679), [2](https://github.com/osmandapp/OsmAnd/issues/10677), [3](https://github.com/osmandapp/OsmAnd/issues/10699).

This situation is typical and associated with the processing of borders for cities. It can be seen if you search for STREET or STREET + HOUSE without a city name, then a full-text search will find a house from another city.

How to OsmAnd is finding city boundaries (relation):
- OsmAnd searches for relations where admin_center / admin_centre refers to a node with place = city, town, village, etc.
- Otherwise, the link is checked for an exact match of the name. 
- Ways of relation are the boundaries. Inner / outer ways are supported.

## Possible causes

In OpenStreetMap:
- The city's boundaries are broken. How to fix [here](https://help.openstreetmap.org/questions/1053/how-do-i-fix-inconsistent-boundaries).
- The city has no borders ([example](https://github.com/osmandapp/OsmAnd/issues/10699)).
- City boundaries don't overlap correctly. OsmAnd must include the street in both cities. You can fix it in OpenStreetMap.

In OsmAnd
- The address begins to belong to the neighboring city. These cities are often villages, suburbs, districts. Or belong to the general area. Github: [1](https://github.com/osmandapp/OsmAnd/issues/10559),[2](https://github.com/osmandapp/OsmAnd/issues/10679),[3](https://github.com/osmandapp/OsmAnd/issues/10730)

## Examples

Using only OSM: You found - Wolności 223 Zabrze

- Open OSM maps and write Zabrze in search. Select a search result starting with the administrative boundary.
- You will see a map with the boundaries of the selected city.

Using Nominatim: You found - Wolności 223 Zabrze

- Enter the street with the house number without specifying the city. The search results will show the desired address belonging to another city. Enter the found name of the locality in nominatim, and its type will be indicated in the Address Rank line.
- You will see Wolności Maciejów in the search results.
- Open nominatim and write Maciejów in search. Select a search result with administrative
- You will see 20 (suburb / hamlet) in the Address Rank line.
Be careful when choosing a locality in the search results. There may be duplicates or similar cities in other regions and countries.
