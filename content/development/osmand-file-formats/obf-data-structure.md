---
title: OBF Format Specification
versions: '*'
---

## Introduction
Talk about *.travel.obf, *.wiki.obf, *.roads.obf, ..

Many questions are about content of and issues with map data in the application. This topic unveils some technical details of the internal data format and data processing. It can be interesting for non-developers who are familar with the OSM data structure.

OsmAnd offline map data is contained in 'obf' files. 'obf' files have a complex structure and can consist of many parts. It is highly recommended to keep file sizes below 2 Gb. Currently obf files can have many parts consisting of multiple POI parts, multiple routing data parts, multiple Map parts, multiple Transport parts and multiple Address data parts. That list can be extended in future. To combine or split or delete some parts from the obf file use 'binary\_inspector' console tool provided with OsmAndMapCreator.
* POI, Transport part
* Map part
* Address part

> Q: How does mapcreator generate its list of all places that will appear later in OsmAnd's offline address search? What objects are used in detail for that? What nodes with a place tag are included, and which are excluded?
>
> A: All places that are visible in OsmAnd as Cities are taken from nodes that have the tag "place" [https://wiki.openstreetmap.org/wiki/Place.](https://wiki.openstreetmap.org/wiki/pPlace. "https://wiki.openstreetmap.org/wiki/Place.") Currently city, town, suburb, village, hamlet are used.
>
> Q: How does mapcreator handle an area polygon that is given via a relation with boundary=administrative? How do you associate a place given as a node with its boundary when it is present in the OSM data?
>
> A: Simply saying: it currently works by name. Mapcreator tries to visit all boundaries and creates a closed (!) boundary from the relation or from separated ways and associates it with only one name. After that it tries to match \*place\* with \*boundary name\* using the \*contains of\* algorithm. There is also an additional check if that boundary contains the place. If there are many boundaries of different admin\_level with the same name (containing each\_other like district/town/region having the same name) the highest admin\_level with exact matching will be chosen. TODO More details should be here (about districts of the city ...) ...
>
> Q: Where is documentation describing what admin level is right to build an association to a certain place node? What countries prefer what admin level?
>
> A: Currently the association between admin\_level relation and admin\_centre is not used. Because only few relations provide that information.
>
> Q: How does MapCreator know what street belongs to what place? Are there different cases when a boundary polygon is given and when there is none?
>
> A: There are many strategies to check and they are prioritized in the following order:
> - The most important are places and their boundaries. In order for the street management algorithm to work correctly, the place matching boundaries should be correct. If the street belongs to many boundaries, it will be registered in all appropriate places.
> - is\_in tag (it is deprecated). So if a street has the is\_in tag, it will be parsed and splitted by comma and the street will be attached to all relevant cities (by exact name matching). (TO CHECK: basic check street is in city radius?)
> - If the street doesn't belong to any boundary (not properly closed boundaries could be an issue here), it tries to find the closest/biggest city and register the stret in that city (sometimes it registers in a town at 1 km distance and misses the closest hamlet at only 100m distance).
>
> The last part is very inaccurate. That's why many streets get attached to a neighbor city.
>
> At MapCreator's preferences you have five more settings for street suffixes, zoom, smoothness and rendering ... what are the detailed effects that you can achieve with each of them? Are those settings actually used?
>
> Tools
>
> -   OsmAndMapCreator can display what streets are associated to what city (context menu -\> Show address). Local obf files should be present and configured in Settings.
> -   Binary inspector tool can show a list of streets for each city. Run the tool without parameters to see the possible parameters.
> -   Currently all index files contain gen.log. Viewing the log file you can find errors in the map creation process and that could give an answer why some streets are not in the proper address index place.
>
> Address Part - workflow
>
> There are these relations:
>
> city -\> 0..1 boundary
>
> boundary -\> 0..\*\* city (used to define suburb of city)
>
> iterate all Osm NODEs and register as cities if the tag = PLACE is present:
>
> -   extract cities (TOWN, CITY).
> -   extract villages (anything else).
>
> iterate all RELATIONs and WAYs with type=boundary and register all boundaries:
>
> -   boundary is called Entity (way or relation) with tag 'boundary=administrative' or with tag 'place=...'.
> -   boundary should be admin\_level \> 4 or not have an admin\_level.
> -   boundary is not always associated with a city (or state, ...).
> -   boundary can have 'admin\_center', 'label' member pointing to a city node.
> -   boundary exactly matches by name city node and the city node falls within the boundary.
> -   boundary matches start, end or substring by name city node and city node falls within the boundary.
>
> Many boundaries can be associated with one city. Here is the order on how the most important boundary is taken and associated with the city:
>
> -   Boundary is matched by name exactly and has the tag place.
> -   Boundary is matched by name exactly and has admin\_level 8 \> 7 \> 6 \> 9 \> 10 \> 5... or nothing.
> -   Boundary has admin\_id matching.
> -   All other cases including sorting of admin\_level.
>
> if the city doesn't have any assigned boundary then all boundaries that don't have cities centers and contain that city will be checked and the boundary with admin\_level \>=7 will be assigned.
>
> for each boundary, make a list of cities that are inside it.
>
> iterate all RELATIONS and find addresses ([Postal\_Addresses](https://wiki.openstreetmap.org/wiki/Relations/Proposed/Postal_Addresses)):
>
> relation with "address" tag type, and is "house" or "a6" address\_type.
>
> search for associated Street relation and house members.
>
> try to find the city for the street and city for house address.
>
> look up cities (we already must have found it in the steps before!).
>
> if we have city and street, register it to database:
>
> for streetregistration, see: register street for a city
>
> if street is registered, and we are processing street:
>
> iterate over all relation members:
>
> -   find street -\> write the nodes of the street to db
> -   find house -\> write the house to to the street
>
> if street is registered, and we are processing house:
>
> -   find house number
> -   find house border: if found, store: building for the street
>
> register street (street, location of street (los), cities):
>
> **Note:** we might register a street to more cities = this means, the street can be in nested areas, suburb, city, hamlet, etc... For each area, we want to register the street it is in.
>
> for each city:
>
> find existing street registration within the city:
>
> if street exists:
>
> -   if citypart is unknown -\> update the existing street's city part
> -   try to find city Part for our street, and lookup the street again
>
> if street does not exist: (might change after the lookup)
>
> -   register the street for city, city part, location, and street name
>
> findOrRegister street
>
> -   find close cities to the street
> -   if the street is in the boundary of the city, add the city for search
> -   if no city was find, using boundary, find closest city for the street
> -   register street: for the found cities
>
> iterate all NODES, then WAYS, then RELATIONS (iterate main entity)
>
> find ways - interpolations:
>
> -   for each interpolation, findOrRegister a street with the location of the interpolation
> -   for each two nodes create a building representing the interpolation
>
> for any entity, find addr:housenumber and addr:street tag (can also be the interpolation of nodes again!!!):
>
> -   skip if building for this entity already exists!
> -   findOrRegister streets for the street
> -   find the house number
> -   if housenumber contains '-', try to create interpolated house number (missing latlon2?)
> -   if housenumber contains '/', try to lookup second street addr:street2 --\> seems only for [RU osm](https://wiki.openstreetmap.org/wiki/RU:Key:addr):
> -   there are more variations for this: adr:housenumber2, addr2:street, addr2:housenumber etc...
> -   for each street, store the existing house
>
> for way with tag - name & tag - highway, but without addr:housenumber and addr:street:
>
> -   **Note**: this might be ways for cars, with names (highway, or so)
> -   skip if such street already exists
> -   findOrRegister the street for city
> -   write the nodes for each found street in each city
>
> Each relation with "postal\_code", store for later use.
>
> **Note**: this does not include the address:type = pc and addr:postalcode
>
> process post codes:
>
> -   for each stored postal\_code relation
> -   for each building member, update the postal\_code
>
> write the index:
>
> split cities to: cities+towns, suburbs (suburb with is\_in tag), villages (not city or town)
>
> write cities+towns using suburbs
>
> read street from cities+towns + apropriate suburbs for each town
>
> -   in here, there might be more streets with the same name for one city, in such case we try to find a cityPart for the street (suburb), where the street is in. There should be not more streets with same name within one city part!
>
> for each street
>
> -   for each building, register/create/find postcode, register the street
>
> write villages
>
> -   same as towns...
>
> write extracted postcodes and their streets
>