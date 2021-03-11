---
title: Enforcing policies for your enterprise
mapTopic: true
redirect_from:
  - /enterprise/admin/policies/enforcing-policies-for-your-enterprise
versions:
  enterprise-server: '*'
  github-ae: '*'
---


                          Special Hostnames in Tor
                               Nick Mathewson

1. Overview

  Most of the time, Tor treats user-specified hostnames as opaque:  When
  the user connects to www.torproject.org, Tor picks an exit node and uses
  that node to connect to "www.torproject.org".  Some hostnames, however,
  can be used to override Tor's default behavior and circuit-building
  rules.

  These hostnames can be passed to Tor as the address part of a SOCKS4a or
  SOCKS5 request.  If the application is connected to Tor using an IP-only
  method (such as SOCKS4, TransPort, or NATDPort), these hostnames can be
  substituted for certain IP addresses using the MapAddress configuration
  option or the MAPADDRESS control command.

2. .exit

  SYNTAX:  [hostname].[name-or-digest].exit
           [name-or-digest].exit

  Hostname is a valid hostname; [name-or-digest] is either the nickname of a
  Tor node or the hex-encoded digest of that node's public key.

  When Tor sees an address in this format, it uses the specified hostname as
  the exit node.  If no "hostname" component is given, Tor defaults to the
  published IPv4 address of the exit node.

  It is valid to try to resolve hostnames, and in fact upon success Tor
  will cache an internal mapaddress of the form
  "www.google.com.foo.exit=64.233.161.99.foo.exit" to speed subsequent
  lookups.

  The .exit notation is disabled by default as of Tor 0.2.2.1-alpha, due
  to potential application-level attacks.

  EXAMPLES:
     www.example.com.exampletornode.exit

        Connect to www.example.com from the node called "exampletornode".

     exampletornode.exit

        Connect to the published IP address of "exampletornode" using
        "exampletornode" as the exit.

3. .onion

  SYNTAX:  [digest].onion
           [ignored].[digest].onion

  The digest is the first eighty bits of a SHA1 hash of the identity key for
  a hidden service, encoded in base32.

  When Tor sees an address in this format, it tries to look up and connect to
  the specified hidden service.  See rend-spec.txt for full details.

  The "ignored" portion of the address is intended for use in vhosting, and
  is supported in Tor 0.2.4.10-alpha and later.

4. .noconnect

  SYNTAX:  [string].noconnect

  When Tor sees an address in this format, it immediately closes the
  connection without attaching it to any circuit. This is useful for
  controllers that want to test whether a given application is indeed
  using the same instance of Tor that they're controlling.

  This feature was added in Tor 0.1.2.4-alpha, and taken out in Tor
  0.2.2.1-alpha over fears that it provided another avenue for detecting
  Tor users via application-level web tricks.


                          Special Hostnames in Tor
                               Nick Mathewson

1. Overview

  Most of the time, Tor treats user-specified hostnames as opaque:  When
  the user connects to www.torproject.org, Tor picks an exit node and uses
  that node to connect to "www.torproject.org".  Some hostnames, however,
  can be used to override Tor's default behavior and circuit-building
  rules.

  These hostnames can be passed to Tor as the address part of a SOCKS4a or
  SOCKS5 request.  If the application is connected to Tor using an IP-only
  method (such as SOCKS4, TransPort, or NATDPort), these hostnames can be
  substituted for certain IP addresses using the MapAddress configuration
  option or the MAPADDRESS control command.

2. .exit

  SYNTAX:  [hostname].[name-or-digest].exit
           [name-or-digest].exit

  Hostname is a valid hostname; [name-or-digest] is either the nickname of a
  Tor node or the hex-encoded digest of that node's public key.

  When Tor sees an address in this format, it uses the specified hostname as
  the exit node.  If no "hostname" component is given, Tor defaults to the
  published IPv4 address of the exit node.

  It is valid to try to resolve hostnames, and in fact upon success Tor
  will cache an internal mapaddress of the form
  "www.google.com.foo.exit=64.233.161.99.foo.exit" to speed subsequent
  lookups.

  The .exit notation is disabled by default as of Tor 0.2.2.1-alpha, due
  to potential application-level attacks.

  EXAMPLES:
     www.example.com.exampletornode.exit

        Connect to www.example.com from the node called "exampletornode".

     exampletornode.exit

        Connect to the published IP address of "exampletornode" using
        "exampletornode" as the exit.

3. .onion

  SYNTAX:  [digest].onion
           [ignored].[digest].onion

  The digest is the first eighty bits of a SHA1 hash of the identity key for
  a hidden service, encoded in base32.

  When Tor sees an address in this format, it tries to look up and connect to
  the specified hidden service.  See rend-spec.txt for full details.

  The "ignored" portion of the address is intended for use in vhosting, and
  is supported in Tor 0.2.4.10-alpha and later.

4. .noconnect

  SYNTAX:  [string].noconnect

  When Tor sees an address in this format, it immediately closes the
  connection without attaching it to any circuit. This is useful for
  controllers that want to test whether a given application is indeed
  using the same instance of Tor that they're controlling.

  This feature was added in Tor 0.1.2.4-alpha, and taken out in Tor
  0.2.2.1-alpha over fears that it provided another avenue for detecting
  Tor users via application-level web tricks.


                          Special Hostnames in Tor
                               Nick Mathewson

1. Overview

  Most of the time, Tor treats user-specified hostnames as opaque:  When
  the user connects to www.torproject.org, Tor picks an exit node and uses
  that node to connect to "www.torproject.org".  Some hostnames, however,
  can be used to override Tor's default behavior and circuit-building
  rules.

  These hostnames can be passed to Tor as the address part of a SOCKS4a or
  SOCKS5 request.  If the application is connected to Tor using an IP-only
  method (such as SOCKS4, TransPort, or NATDPort), these hostnames can be
  substituted for certain IP addresses using the MapAddress configuration
  option or the MAPADDRESS control command.

2. .exit

  SYNTAX:  [hostname].[name-or-digest].exit
           [name-or-digest].exit

  Hostname is a valid hostname; [name-or-digest] is either the nickname of a
  Tor node or the hex-encoded digest of that node's public key.

  When Tor sees an address in this format, it uses the specified hostname as
  the exit node.  If no "hostname" component is given, Tor defaults to the
  published IPv4 address of the exit node.

  It is valid to try to resolve hostnames, and in fact upon success Tor
  will cache an internal mapaddress of the form
  "www.google.com.foo.exit=64.233.161.99.foo.exit" to speed subsequent
  lookups.

  The .exit notation is disabled by default as of Tor 0.2.2.1-alpha, due
  to potential application-level attacks.

  EXAMPLES:
     www.example.com.exampletornode.exit

        Connect to www.example.com from the node called "exampletornode".

     exampletornode.exit

        Connect to the published IP address of "exampletornode" using
        "exampletornode" as the exit.

3. .onion

  SYNTAX:  [digest].onion
           [ignored].[digest].onion

  The digest is the first eighty bits of a SHA1 hash of the identity key for
  a hidden service, encoded in base32.

  When Tor sees an address in this format, it tries to look up and connect to
  the specified hidden service.  See rend-spec.txt for full details.

  The "ignored" portion of the address is intended for use in vhosting, and
  is supported in Tor 0.2.4.10-alpha and later.

4. .noconnect

  SYNTAX:  [string].noconnect

  When Tor sees an address in this format, it immediately closes the
  connection without attaching it to any circuit. This is useful for
  controllers that want to test whether a given application is indeed
  using the same instance of Tor that they're controlling.

  This feature was added in Tor 0.1.2.4-alpha, and taken out in Tor
  0.2.2.1-alpha over fears that it provided another avenue for detecting
  Tor users via application-level web tricks.

