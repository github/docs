.. SPDX-License-Identifier: GPL-2.0
.. include:: <isonum.txt>

==========
Linux CAIF
==========

Copyright |copy| ST-Ericsson AB 2010

:Author: Sjur Brendeland/ sjur.brandeland@stericsson.com
:License terms: GNU General Public License (GPL) version 2


Introduction
============

CAIF is a MUX protocol used by ST-Ericsson cellular modems for
communication between Modem and host. The host processes can open virtual AT
channels, initiate GPRS Data connections, Video channels and Utility Channels.
The Utility Channels are general purpose pipes between modem and host.

ST-Ericsson modems support a number of transports between modem
and host. Currently, UART and Loopback are available for Linux.


Architecture
============

The implementation of CAIF is divided into:

* CAIF Socket Layer and GPRS IP Interface.
* CAIF Core Protocol Implementation
* CAIF Link Layer, implemented as NET devices.

::

  RTNL
   !
   !	      +------+	 +------+
   !	     +------+!	+------+!
   !	     !	IP  !!	!Socket!!
   +-------> !interf!+	! API  !+	<- CAIF Client APIs
   !	     +------+	+------!
   !		!	    !
   !		+-----------+
   !		      !
   !		   +------+		<- CAIF Core Protocol
   !		   ! CAIF !
   !		   ! Core !
   !		   +------+
   !	   +----------!---------+
   !	   !	      !		!
   !	+------+   +-----+   +------+
   +--> ! HSI  !   ! TTY !   ! USB  !	<- Link Layer (Net Devices)
	+------+   +-----+   +------+



Implementation
==============


CAIF Core Protocol Layer
------------------------

CAIF Core layer implements the CAIF protocol as defined by ST-Ericsson.
It implements the CAIF protocol stack in a layered approach, where
each layer described in the specification is implemented as a separate layer.
The architecture is inspired by the design patterns "Protocol Layer" and
"Protocol Packet".

CAIF structure
^^^^^^^^^^^^^^

The Core CAIF implementation contains:

      -	Simple implementation of CAIF.
      -	Layered architecture (a la Streams), each layer in the CAIF
	specification is implemented in a separate c-file.
      -	Clients must call configuration function to add PHY layer.
      -	Clients must implement CAIF layer to consume/produce
	CAIF payload with receive and transmit functions.
      -	Clients must call configuration function to add and connect the
	Client layer.
      - When receiving / transmitting CAIF Packets (cfpkt), ownership is passed
	to the called function (except for framing layers' receive function)

Layered Architecture
====================

The CAIF protocol can be divided into two parts: Support functions and Protocol
Implementation. The support functions include:

      - CFPKT CAIF Packet. Implementation of CAIF Protocol Packet. The
	CAIF Packet has functions for creating, destroying and adding content
	and for adding/extracting header and trailers to protocol packets.

The CAIF Protocol implementation contains:

      - CFCNFG CAIF Configuration layer. Configures the CAIF Protocol
	Stack and provides a Client interface for adding Link-Layer and
	Driver interfaces on top of the CAIF Stack.

      - CFCTRL CAIF Control layer. Encodes and Decodes control messages
	such as enumeration and channel setup. Also matches request and
	response messages.

      - CFSERVL General CAIF Service Layer functionality; handles flow
	control and remote shutdown requests.

      - CFVEI CAIF VEI layer. Handles CAIF AT Channels on VEI (Virtual
	External Interface). This layer encodes/decodes VEI frames.

      - CFDGML CAIF Datagram layer. Handles CAIF Datagram layer (IP
	traffic), encodes/decodes Datagram frames.

      - CFMUX CAIF Mux layer. Handles multiplexing between multiple
	physical bearers and multiple channels such as VEI, Datagram, etc.
	The MUX keeps track of the existing CAIF Channels and
	Physical Instances and selects the appropriate instance based
	on Channel-Id and Physical-ID.

      - CFFRML CAIF Framing layer. Handles Framing i.e. Frame length
	and frame checksum.

      - CFSERL CAIF Serial layer. Handles concatenation/split of frames
	into CAIF Frames with correct length.

::

		    +---------+
		    | Config  |
		    | CFCNFG  |
		    +---------+
			 !
    +---------+	    +---------+	    +---------+
    |	AT    |	    | Control |	    | Datagram|
    | CFVEIL  |	    | CFCTRL  |	    | CFDGML  |
    +---------+	    +---------+	    +---------+
	   \_____________!______________/
			 !
		    +---------+
		    |	MUX   |
		    |	      |
		    +---------+
		    _____!_____
		   /	       \
	    +---------+	    +---------+
	    | CFFRML  |	    | CFFRML  |
	    | Framing |	    | Framing |
	    +---------+	    +---------+
		 !		!
	    +---------+	    +---------+
	    |	      |	    | Serial  |
	    |	      |	    | CFSERL  |
	    +---------+	    +---------+


In this layered approach the following "rules" apply.

      - All layers embed the same structure "struct cflayer"
      - A layer does not depend on any other layer's private data.
      - Layers are stacked by setting the pointers::

		  layer->up , layer->dn

      -	In order to send data upwards, each layer should do::

		 layer->up->receive(layer->up, packet);

      - In order to send data downwards, each layer should do::

		 layer->dn->transmit(layer->dn, packet);


CAIF Socket and IP interface
============================

The IP interface and CAIF socket API are implemented on top of the
CAIF Core protocol. The IP Interface and CAIF socket have an instance of
'struct cflayer', just like the CAIF Core protocol stack.
Net device and Socket implement the 'receive()' function defined by
'struct cflayer', just like the rest of the CAIF stack. In this way, transmit and
receive of packets is handled as by the rest of the layers: the 'dn->transmit()'
function is called in order to transmit data.

Configuration of Link Layer
---------------------------
The Link Layer is implemented as Linux network devices (struct net_device).
Payload handling and registration is done using standard Linux mechanisms.

The CAIF Protocol relies on a loss-less link layer without implementing
retransmission. This implies that packet drops must not happen.
Therefore a flow-control mechanism is implemented where the physical
interface can initiate flow stop for all CAIF Channels.

.. SPDX-License-Identifier: GPL-2.0

CAIF
====

Contents:

.. toctree::
   :maxdepth: 2

   linux_caif
   caif
.. SPDX-License-Identifier: GPL-2.0
.. include:: <isonum.txt>


================
Using Linux CAIF
================


:Copyright: |copy| ST-Ericsson AB 2010

:Author: Sjur Brendeland/ sjur.brandeland@stericsson.com

Start
=====

If you have compiled CAIF for modules do::

    $modprobe crc_ccitt
    $modprobe caif
    $modprobe caif_socket
    $modprobe chnl_net


Preparing the setup with a STE modem
====================================

If you are working on integration of CAIF you should make sure
that the kernel is built with module support.

There are some things that need to be tweaked to get the host TTY correctly
set up to talk to the modem.
Since the CAIF stack is running in the kernel and we want to use the existing
TTY, we are installing our physical serial driver as a line discipline above
the TTY device.

To achieve this we need to install the N_CAIF ldisc from user space.
The benefit is that we can hook up to any TTY.

The use of Start-of-frame-extension (STX) must also be set as
module parameter "ser_use_stx".

Normally Frame Checksum is always used on UART, but this is also provided as a
module parameter "ser_use_fcs".

::

    $ modprobe caif_serial ser_ttyname=/dev/ttyS0 ser_use_stx=yes
    $ ifconfig caif_ttyS0 up

PLEASE NOTE:
		There is a limitation in Android shell.
		It only accepts one argument to insmod/modprobe!

Trouble shooting
================

There are debugfs parameters provided for serial communication.
/sys/kernel/debug/caif_serial/<tty-name>/

* ser_state:   Prints the bit-mask status where

  - 0x02 means SENDING, this is a transient state.
  - 0x10 means FLOW_OFF_SENT, i.e. the previous frame has not been sent
    and is blocking further send operation. Flow OFF has been propagated
    to all CAIF Channels using this TTY.

* tty_status: Prints the bit-mask tty status information

  - 0x01 - tty->warned is on.
  - 0x02 - tty->low_latency is on.
  - 0x04 - tty->packed is on.
  - 0x08 - tty->flow_stopped is on.
  - 0x10 - tty->hw_stopped is on.
  - 0x20 - tty->stopped is on.

* last_tx_msg: Binary blob Prints the last transmitted frame.

  This can be printed with::

	$od --format=x1 /sys/kernel/debug/caif_serial/<tty>/last_rx_msg.

  The first two tx messages sent look like this. Note: The initial
  byte 02 is start of frame extension (STX) used for re-syncing
  upon errors.

  - Enumeration::

        0000000  02 05 00 00 03 01 d2 02
                 |  |     |  |  |  |
                 STX(1)   |  |  |  |
                    Length(2)|  |  |
                          Control Channel(1)
                             Command:Enumeration(1)
                                Link-ID(1)
                                    Checksum(2)

  - Channel Setup::

        0000000  02 07 00 00 00 21 a1 00 48 df
                 |  |     |  |  |  |  |  |
                 STX(1)   |  |  |  |  |  |
                    Length(2)|  |  |  |  |
                          Control Channel(1)
                             Command:Channel Setup(1)
                                Channel Type(1)
                                    Priority and Link-ID(1)
				      Endpoint(1)
					  Checksum(2)

* last_rx_msg: Prints the last transmitted frame.

  The RX messages for LinkSetup look almost identical but they have the
  bit 0x20 set in the command bit, and Channel Setup has added one byte
  before Checksum containing Channel ID.

  NOTE:
	Several CAIF Messages might be concatenated. The maximum debug
	buffer size is 128 bytes.

Error Scenarios
===============

- last_tx_msg contains channel setup message and last_rx_msg is empty ->
  The host seems to be able to send over the UART, at least the CAIF ldisc get
  notified that sending is completed.

- last_tx_msg contains enumeration message and last_rx_msg is empty ->
  The host is not able to send the message from UART, the tty has not been
  able to complete the transmit operation.

- if /sys/kernel/debug/caif_serial/<tty>/tty_status is non-zero there
  might be problems transmitting over UART.

  E.g. host and modem wiring is not correct you will typically see
  tty_status = 0x10 (hw_stopped) and ser_state = 0x10 (FLOW_OFF_SENT).

  You will probably see the enumeration message in last_tx_message
  and empty last_rx_message.