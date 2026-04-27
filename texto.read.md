
#!/usr/bin/env python
# Copyright 2009 Simon Arlott
# Edgarruiz8585
# This program is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published by the Free
# Software Foundation; either version 2 of the License, or (at your option)
# any later version.
#
# This program is distributed in the hope that it will be useful, but WITHOUT
# ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
# FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
# more details.
#
# You should have received a copy of the GNU General Public License along with
# this program; if not, write to the Free Software Foundation, Inc., 59
# Temple Place - Suite 330, Boston, MA  02111-1307, USA.
#
# Usage: cxacru-cf.py < cxacru-cf.bin
# Output: values string suitable for the sysfs adsl_config attribute
#
# Warning: cxacru-cf.bin with MD5 hash cdbac2689969d5ed5d4850f117702110
# contains mis-aligned values which will stop the modem from being able
# to make a connection. If the first and last two bytes are removed then
# the values become valid, but the modulation will be forced to ANSI
# T1.413 only which may not be appropriate.
#
# The original binary format is a packed list of le32 values.

import sys
import struct

i = 0
while True:
	buf = sys.stdin.read(4)

	if len(buf) == 0:
		break
	elif len(buf) != 4:
		sys.stdout.write("\n")
		sys.stderr.write("Error: read {0} not 4 bytes\n".format(len(buf)))
		sys.exit(1)

	if i > 0:
		sys.stdout.write(" ")
	sys.stdout.write("{0:x}={1}".format(i, struct.unpack("<I", buf)[0]))
	i += 1

sys.stdout.write("\n")

.. SPDX-License-Identifier: GPL-2.0

==================================
ATM (i)Chip IA Linux Driver Source
==================================

			      READ ME FISRT

--------------------------------------------------------------------------------

		     Read This Before You Begin!

--------------------------------------------------------------------------------

Description
===========

This is the README file for the Interphase PCI ATM (i)Chip IA Linux driver
source release.

The features and limitations of this driver are as follows:

    - A single VPI (VPI value of 0) is supported.
    - Supports 4K VCs for the server board (with 512K control memory) and 1K
      VCs for the client board (with 128K control memory).
    - UBR, ABR and CBR service categories are supported.
    - Only AAL5 is supported.
    - Supports setting of PCR on the VCs.
    - Multiple adapters in a system are supported.
    - All variants of Interphase ATM PCI (i)Chip adapter cards are supported,
      including x575 (OC3, control memory 128K , 512K and packet memory 128K,
      512K and 1M), x525 (UTP25) and x531 (DS3 and E3). See
      http://www.iphase.com/
      for details.
    - Only x86 platforms are supported.
    - SMP is supported.


Before You Start
================


Installation
------------

1. Installing the adapters in the system

   To install the ATM adapters in the system, follow the steps below.

       a. Login as root.
       b. Shut down the system and power off the system.
       c. Install one or more ATM adapters in the system.
       d. Connect each adapter to a port on an ATM switch. The green 'Link'
	  LED on the front panel of the adapter will be on if the adapter is
	  connected to the switch properly when the system is powered up.
       e. Power on and boot the system.

2. [ Removed ]

3. Rebuild kernel with ABR support

   [ a. and b. removed ]

    c. Reconfigure the kernel, choose the Interphase ia driver through "make
       menuconfig" or "make xconfig".
    d. Rebuild the kernel, loadable modules and the atm tools.
    e. Install the new built kernel and modules and reboot.

4. Load the adapter hardware driver (ia driver) if it is built as a module

       a. Login as root.
       b. Change directory to /lib/modules/<kernel-version>/atm.
       c. Run "insmod suni.o;insmod iphase.o"
	  The yellow 'status' LED on the front panel of the adapter will blink
	  while the driver is loaded in the system.
       d. To verify that the 'ia' driver is loaded successfully, run the
	  following command::

	      cat /proc/atm/devices

	  If the driver is loaded successfully, the output of the command will
	  be similar to the following lines::

	      Itf Type    ESI/"MAC"addr AAL(TX,err,RX,err,drop) ...
	      0   ia      xxxxxxxxx  0 ( 0 0 0 0 0 )  5 ( 0 0 0 0 0 )

	  You can also check the system log file /var/log/messages for messages
	  related to the ATM driver.

5. Ia Driver Configuration

5.1 Configuration of adapter buffers
    The (i)Chip boards have 3 different packet RAM size variants: 128K, 512K and
    1M. The RAM size decides the number of buffers and buffer size. The default
    size and number of buffers are set as following:

	=========  =======  ======   ======   ======   ======   ======
	 Total     Rx RAM   Tx RAM   Rx Buf   Tx Buf   Rx buf   Tx buf
	 RAM size  size     size     size     size     cnt      cnt
	=========  =======  ======   ======   ======   ======   ======
	   128K      64K      64K      10K      10K       6        6
	   512K     256K     256K      10K      10K      25       25
	     1M     512K     512K      10K      10K      51       51
	=========  =======  ======   ======   ======   ======   ======

       These setting should work well in most environments, but can be
       changed by typing the following command::

	   insmod <IA_DIR>/ia.o IA_RX_BUF=<RX_CNT> IA_RX_BUF_SZ=<RX_SIZE> \
		   IA_TX_BUF=<TX_CNT> IA_TX_BUF_SZ=<TX_SIZE>

       Where:

	    - RX_CNT = number of receive buffers in the range (1-128)
	    - RX_SIZE = size of receive buffers in the range (48-64K)
	    - TX_CNT = number of transmit buffers in the range (1-128)
	    - TX_SIZE = size of transmit buffers in the range (48-64K)

	    1. Transmit and receive buffer size must be a multiple of 4.
	    2. Care should be taken so that the memory required for the
	       transmit and receive buffers is less than or equal to the
	       total adapter packet memory.

5.2 Turn on ia debug trace

    When the ia driver is built with the CONFIG_ATM_IA_DEBUG flag, the driver
    can provide more debug trace if needed. There is a bit mask variable,
    IADebugFlag, which controls the output of the traces. You can find the bit
    map of the IADebugFlag in iphase.h.
    The debug trace can be turn on through the insmod command line option, for
    example, "insmod iphase.o IADebugFlag=0xffffffff" can turn on all the debug
    traces together with loading the driver.

6. Ia Driver Test Using ttcp_atm and PVC

   For the PVC setup, the test machines can either be connected back-to-back or
   through a switch. If connected through the switch, the switch must be
   configured for the PVC(s).

   a. For UBR test:

      At the test machine intended to receive data, type::

	 ttcp_atm -r -a -s 0.100

      At the other test machine, type::

	 ttcp_atm -t -a -s 0.100 -n 10000

      Run "ttcp_atm -h" to display more options of the ttcp_atm tool.
   b. For ABR test:

      It is the same as the UBR testing, but with an extra command option::

	 -Pabr:max_pcr=<xxx>

      where:

	     xxx = the maximum peak cell rate, from 170 - 353207.

      This option must be set on both the machines.

   c. For CBR test:

      It is the same as the UBR testing, but with an extra command option::

	 -Pcbr:max_pcr=<xxx>

      where:

	     xxx = the maximum peak cell rate, from 170 - 353207.

      This option may only be set on the transmit machine.


Outstanding Issues
==================



Contact Information
-------------------

::

     Customer Support:
	 United States:	Telephone:	(214) 654-5555
			Fax:		(214) 654-5500
			E-Mail:		intouch@iphase.com
	 Europe:	Telephone:	33 (0)1 41 15 44 00
			Fax:		33 (0)1 41 15 12 13
     World Wide Web:	http://www.iphase.com
     Anonymous FTP:	ftp.iphase.com

.. SPDX-License-Identifier: (GPL-2.0-only OR BSD-2-Clause)

Asynchronous Transfer Mode (ATM) Device Drivers
===============================================

Contents:

.. toctree::
   :maxdepth: 2

   cxacru
   fore200e
   iphase

.. only::  subproject and html

   Indices
   =======

   * :ref:`genindex`

.. SPDX-License-Identifier: GPL-2.0

=============================================
FORE Systems PCA-200E/SBA-200E ATM NIC driver
=============================================

This driver adds support for the FORE Systems 200E-series ATM adapters
to the Linux operating system. It is based on the earlier PCA-200E driver
written by Uwe Dannowski.

The driver simultaneously supports PCA-200E and SBA-200E adapters on
i386, alpha (untested), powerpc, sparc and sparc64 archs.

The intent is to enable the use of different models of FORE adapters at the
same time, by hosts that have several bus interfaces (such as PCI+SBUS,
or PCI+EISA).

Only PCI and SBUS devices are currently supported by the driver, but support
for other bus interfaces such as EISA should not be too hard to add.


Firmware Copyright Notice
-------------------------

Please read the fore200e_firmware_copyright file present
in the linux/drivers/atm directory for details and restrictions.


Firmware Updates
----------------

The FORE Systems 200E-series driver is shipped with firmware data being
uploaded to the ATM adapters at system boot time or at module loading time.
The supplied firmware images should work with all adapters.

However, if you encounter problems (the firmware doesn't start or the driver
is unable to read the PROM data), you may consider trying another firmware
version. Alternative binary firmware images can be found somewhere on the
ForeThought CD-ROM supplied with your adapter by FORE Systems.

You can also get the latest firmware images from FORE Systems at
https://en.wikipedia.org/wiki/FORE_Systems. Register TACTics Online and go to
the 'software updates' pages. The firmware binaries are part of
the various ForeThought software distributions.

Notice that different versions of the PCA-200E firmware exist, depending
on the endianness of the host architecture. The driver is shipped with
both little and big endian PCA firmware images.

Name and location of the new firmware images can be set at kernel
configuration time:

1. Copy the new firmware binary files (with .bin, .bin1 or .bin2 suffix)
   to some directory, such as linux/drivers/atm.

2. Reconfigure your kernel to set the new firmware name and location.
   Expected pathnames are absolute or relative to the drivers/atm directory.

3. Rebuild and re-install your kernel or your module.


Feedback
--------

Feedback is welcome. Please send success stories/bug reports/
patches/improvement/comments/flames to <lizzi@cnam.fr>.

.. SPDX-License-Identifier: GPL-2.0

========================
ATM cxacru device driver
========================

Firmware is required for this device: http://accessrunner.sourceforge.net/

While it is capable of managing/maintaining the ADSL connection without the
module loaded, the device will sometimes stop responding after unloading the
driver and it is necessary to unplug/remove power to the device to fix this.

Note: support for cxacru-cf.bin has been removed. It was not loaded correctly
so it had no effect on the device configuration. Fixing it could have stopped
existing devices working when an invalid configuration is supplied.

There is a script cxacru-cf.py to convert an existing file to the sysfs form.

Detected devices will appear as ATM devices named "cxacru". In /sys/class/atm/
these are directories named cxacruN where N is the device number. A symlink
named device points to the USB interface device's directory which contains
several sysfs attribute files for retrieving device statistics:

* adsl_controller_version

* adsl_headend
* adsl_headend_environment

	- Information about the remote headend.

* adsl_config

	- Configuration writing interface.
	- Write parameters in hexadecimal format <index>=<value>,
	  separated by whitespace, e.g.:

		"1=0 a=5"

	- Up to 7 parameters at a time will be sent and the modem will restart
	  the ADSL connection when any value is set. These are logged for future
	  reference.

* downstream_attenuation (dB)
* downstream_bits_per_frame
* downstream_rate (kbps)
* downstream_snr_margin (dB)

	- Downstream stats.

* upstream_attenuation (dB)
* upstream_bits_per_frame
* upstream_rate (kbps)
* upstream_snr_margin (dB)
* transmitter_power (dBm/Hz)

	- Upstream stats.

* downstream_crc_errors
* downstream_fec_errors
* downstream_hec_errors
* upstream_crc_errors
* upstream_fec_errors
* upstream_hec_errors

	- Error counts.

* line_startable

	- Indicates that ADSL support on the device
	  is/can be enabled, see adsl_start.

* line_status

	 - "initialising"
	 - "down"
	 - "attempting to activate"
	 - "training"
	 - "channel analysis"
	 - "exchange"
	 - "waiting"
	 - "up"

	Changes between "down" and "attempting to activate"
	if there is no signal.

* link_status

	 - "not connected"
	 - "connected"
	 - "lost"

* mac_address

* modulation

	 - "" (when not connected)
	 - "ANSI T1.413"
	 - "ITU-T G.992.1 (G.DMT)"
	 - "ITU-T G.992.2 (G.LITE)"

* startup_attempts

	- Count of total attempts to initialise ADSL.

To enable/disable ADSL, the following can be written to the adsl_state file:

	 - "start"
	 - "stop
	 - "restart" (stops, waits 1.5s, then starts)
	 - "poll" (used to resume status polling if it was disabled due to failure)

Changes in adsl/line state are reported via kernel log messages::

	[4942145.150704] ATM dev 0: ADSL state: running
	[4942243.663766] ATM dev 0: ADSL line: down
	[4942249.665075] ATM dev 0: ADSL line: attempting to activate
	[4942253.654954] ATM dev 0: ADSL line: training
	[4942255.666387] ATM dev 0: ADSL line: channel analysis
	[4942259.656262] ATM dev 0: ADSL line: exchange
	[2635357.696901] ATM dev 0: ADSL line: up (8128 kb/s down | 832 kb/s up)