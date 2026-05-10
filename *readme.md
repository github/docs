ATTENTION
================
Before doing anything, please read the first FAQ point in this file, especially if
you plan to build commercial software from this client. Also make sure you
understand the licenses of the code. OpenVPN for Android is GPL-licensed. You
_CANNOT_ build a closed sourced custom UI application without acquiring a different
(paid) license for UI code.
The use of the AIDL API to control OpenVPN for Android from an external app is 
not subject to the license. The remoteExample project is licensed under the Apache 2.0 license.
When in doubt, mail me about it.
See the file todo.txt for ideas/not-yet-implemented features (and the bug tracker).
Build instructions:
- Install sdk, ndk, cmake (e.g. with Android studio), swig (3.0+), on
  Windows perl might be needed for mbedtls
Fetch the git submodules (the default urls for the submodules work as
long as the main repo url is on github):
  git submodule init
  git submodule update
Build the project using "gradle build" (Or use Android Studio). Ensure that
the swig executable is the path, otherwise the build will fail.
Android studio tends to the whole build of binaries in its sync gradle
phase to 15 minutes for initial gradle sync are completely normal.
To have a version with UI be sure to select the UI variant in Android studio under
build variants.
The native build should work with Windows and Linux but is rarely tested
since my main development platform is macOS.
FAQ
Q: Why are you not answering my questions about modifying
   ics-openvpn/why do not help build my app on top of ics-openvpn? I
   thought this is open source.
A: There are many people building/wanting to build commercial VPN
   clients on top of my of my client. These client often do not even
   honour the license of my app or the license of OpenVPN. Even if
   these modified software do honour the license, I don't like doing
   unpaid work/giving advice for free to commercial software
   developers.
   
   If you have a legitimate non-commercial open source project, I will
   gladly help you, but please understand my initial reservations.
Q: How is the OpenVPN version different from normal OpenVPN
A: OpenVPN for Android uses a OpenVPN  master branch + dual stack
   client patches.  A git repository of the OpenVPN source code and
   changes is under: https://github.com/schwabe/openvpn/
Q: What is minivpn?
A: minivpn is only a executable that links against libopenvpn, which
   is the normal openvpn built as a library. It is done this way so
   the Android Play/Store apk will treat the library as a normal
   library and update it on updates of the application. Also, the
   application does not need to take care of keeping minivpn up to
   date because it contains no code. For almost all intents and
   purposes minivpn + libopenvpn.so is the same as the normal openvpn
   binary.
Q: How do I start a VPN by name from an external app?
A: public class StartOpenVPNActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.main);
        
    	final String EXTRA_NAME = "de.blinkt.openvpn.api.profileName";
        Intent shortcutIntent = new Intent(Intent.ACTION_MAIN);
		shortcutIntent.setClassName("de.blinkt.openvpn", "de.blinkt.openvpn.api.ConnectVPN");
		shortcutIntent.putExtra(EXTRA_NAME,"upb ssl");
		startActivity(shortcutIntent);
    }
}
or from the shell:
am start -a android.intent.action.MAIN -n de.blinkt.openvpn/.LaunchVPN -e de.blinkt.openvpn.shortcutProfileName Home
Q: How can I control the app from an external app?
A: There is an AIDL interface. See src/de/blinkt/openvpn/api/IOpenVPNAPIService.aidl. See the normal Android documentation how to use AIDL. 
   See also the example project under remoteExample.
   

