if (V == 1) {
  document.write(`<div id="playerdiv" class="bitmovinplayer-container aspect-16x9">`)
  document.write(`
  <style>
  div#playerdiv {${hw}}
  .bitmovinplayer-ad-container, .bitmovinplayer-container{direction:ltr;}.bmpui-ui-watermark,#bmpui-id-184,#bmpui-id-132{display: none; !important}#bmpui-id-185{margin:9px 20px 0 10px}.bmpui-ui-buffering-overlay{background-color:#000000b3}.notloaded .bmpui-ui-buffering-overlay-indicator{display:inline-block!important}#playerdiv .bmpui-ui-buffering-overlay .bmpui-ui-buffering-overlay-indicator{background:#fff;height:1em;margin:.5em;width:1em;border-radius:10px</style>
    <script src="https://cdn.bitmovin.com/player/web/8/bitmovinplayer.js" type="text/javascript"></script>
  <video id="bitmovinplayer-video-playerdiv" src="blob:https://www.beinshottv.com/61bf6bce-ab5f-4cc2-b545-2a368cace293" webkit-playsinline="" playsinline=""></video>
  <div class="bitmovinplayer-poster">
  </div>
  <div id="bmpui-id-125" class="bmpui-ui-uicontainer bmpui-ui-skin-smallscreen bmpui-flexbox bmpui-controls-shown bmpui-layout-max-width-400 bmpui-player-state-paused" role="region" aria-label="Video player">
  <div class="bmpui-container-wrapper">
  <div id="bmpui-id-35" class="bmpui-ui-subtitle-overlay bmpui-hidden bmpui-controlbar-visible">
  <div class="bmpui-container-wrapper">
  </div>
  </div>
  <div id="bmpui-id-100" class="bmpui-ui-buffering-overlay bmpui-hidden">
  <div class="bmpui-container-wrapper">
  <div id="bmpui-id-101" class="bmpui-ui-buffering-overlay-indicator" role="img">
  </div>
  <div id="bmpui-id-102" class="bmpui-ui-buffering-overlay-indicator" role="img">
  </div>
  <div id="bmpui-id-103" class="bmpui-ui-buffering-overlay-indicator" role="img">
  </div>
  </div>
  </div>
  <div id="bmpui-id-104" class="bmpui-ui-cast-status-overlay bmpui-hidden">
  <div class="bmpui-container-wrapper">
  <span id="bmpui-id-105" class="bmpui-ui-cast-status-label">
  </span>
  </div>
  </div>
  <div id="bmpui-id-106" class="bmpui-ui-playbacktoggle-overlay">
  <div class="bmpui-container-wrapper">
  <button id="bmpui-id-107" aria-label="Play" class="bmpui-ui-hugeplaybacktogglebutton bmpui-stoptoggle bmpui-off bmpui-no-transition-animations" type="button" aria-pressed="false" tabindex="0" role="button">
  <span class="bmpui-label">Play/Pause</span><div class="bmpui-image">
  </div>
  </button>
  </div>
  </div>
  <div id="bmpui-id-108" class="bmpui-ui-recommendation-overlay bmpui-hidden">
  <div class="bmpui-container-wrapper">
  <button id="bmpui-id-109" aria-label="Replay" class="bmpui-ui-hugereplaybutton" type="button" aria-pressed="false" tabindex="0" role="button">
  <span class="bmpui-label">Replay</span>
  <div class="bmpui-image"></div>
  </button></div></div>
  <div id="bmpui-id-99" class="bmpui-ui-controlbar" role="region" aria-label="Video player controls">
  <div class="bmpui-container-wrapper">
  <div id="bmpui-id-98" class="bmpui-ui-container bmpui-controlbar-top">
  <div class="bmpui-container-wrapper">
  <span id="bmpui-id-89" class="bmpui-ui-playbacktimelabel bmpui-ui-playbacktimelabel-live bmpui-hidden bmpui-ui-playbacktimelabel-live-edge">Live</span>
  <div id="bmpui-id-96" class="bmpui-ui-seekbar bmpui-hidden" role="slider" aria-label="Video timeline" tabindex="0" aria-valuemin="0" aria-valuemax="0" aria-valuenow="0" aria-valuetext="Timeshift Value: 0">
  <div class="bmpui-seekbar">
  <div class="bmpui-seekbar-backdrop" style="transform: scaleX(0.99999);"></div><div class="bmpui-seekbar-bufferlevel" style="transform: scaleX(0.99999);">
  </div>
  <div class="bmpui-seekbar-seekposition" style="transform: scaleX(0);"></div>
  <div class="bmpui-seekbar-playbackposition" style="transform: scaleX(0.99999);">
  </div><div class="bmpui-seekbar-markers"></div>
  <div class="bmpui-seekbar-playbackposition-marker" style="transform: translateX(0px);"></div>
  </div>
  <div id="bmpui-id-90" class="bmpui-ui-seekbar-label bmpui-hidden">
  <div class="bmpui-container-wrapper">
  <div id="bmpui-id-95" class="bmpui-seekbar-label-inner">
  <div class="bmpui-container-wrapper">
  <div id="bmpui-id-93" class="bmpui-ui-component bmpui-seekbar-thumbnail" role="img"></div>
  <div id="bmpui-id-94" class="bmpui-seekbar-label-metadata">
  <div class="bmpui-container-wrapper">
  <span id="bmpui-id-92" class="bmpui-ui-label bmpui-seekbar-label-title">
  </span><span id="bmpui-id-91" class="bmpui-ui-label bmpui-seekbar-label-time"></span></div></div></div></div></div></div></div><span id="bmpui-id-97" class="bmpui-ui-playbacktimelabel bmpui-text-right bmpui-ui-playbacktimelabel-live bmpui-ui-playbacktimelabel-live-edge" style="min-width: 41px;">Live</span></div>
  </div></div></div>
  <div id="bmpui-id-118" class="bmpui-ui-titlebar"><div class="bmpui-container-wrapper">
  <span id="bmpui-id-110" class="bmpui-ui-label bmpui-label-metadata bmpui-label-metadata-title"></span><button id="bmpui-id-111" aria-label="Google Cast" class="bmpui-ui-casttogglebutton bmpui-off bmpui-hidden" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Google Cast</span></button>
  <button id="bmpui-id-112" aria-label="VR" class="bmpui-ui-vrtogglebutton bmpui-off bmpui-hidden" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">VR</span></button><button id="bmpui-id-113" aria-label="Picture-in-Picture" class="bmpui-ui-piptogglebutton bmpui-off bmpui-hidden" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Picture-in-Picture</span></button>
  <button id="bmpui-id-114" aria-label="Apple AirPlay" class="bmpui-ui-airplaytogglebutton bmpui-off bmpui-hidden" type="button" aria-pressed="false" tabindex="0" role="button">
  <span class="bmpui-label">Apple AirPlay</span>
  </button><button id="bmpui-id-115" aria-label="Mute" class="bmpui-ui-volumetogglebutton bmpui-unmuted" type="button" aria-pressed="false" tabindex="0" role="button" data-bmpui-volume-level-tens="10"><span class="bmpui-label">Mute</span></button><button id="bmpui-id-116" aria-label="Settings" class="bmpui-ui-settingstogglebutton bmpui-off" type="button" aria-pressed="false" tabindex="0" role="pop-up button" aria-owns="bmpui-id-49" aria-haspopup="true">
  <span class="bmpui-label">Settings</span></button><button id="bmpui-id-117" aria-label="Fullscreen" class="bmpui-ui-fullscreentogglebutton bmpui-off" type="button" aria-pressed="false" tabindex="0" role="button">
  <span class="bmpui-label">Fullscreen</span></button></div></div><div id="bmpui-id-50" class="bmpui-ui-settings-panel bmpui-hidden"><div class="bmpui-container-wrapper">
  <div id="bmpui-id-49" class="bmpui-ui-settings-panel-page bmpui-active" role="menu"><div class="bmpui-container-wrapper"><div id="bmpui-id-38" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-39" for="bmpui-id-37" class="bmpui-ui-label">Video Quality</label>
  <select id="bmpui-id-37" class="bmpui-ui-selectbox bmpui-ui-videoqualityselectbox"><option value="auto" selected="selected">auto</option><option value="234_200000">416x234, 200kbps</option><option value="360_450000">640x360, 450kbps</option><option value="480_800000">854x480, 800kbps</option>
  <option value="720_1800000">1280x720, 1800kbps</option><option value="1080_4000000">1920x1080, 4000kbps</option></select></div></div><div id="bmpui-id-41" class="bmpui-ui-settings-panel-item bmpui-last" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-42" for="bmpui-id-40" class="bmpui-ui-label">Speed</label><select id="bmpui-id-40" class="bmpui-ui-selectbox bmpui-ui-playbackspeedselectbox"><option value="0.25">0.25x</option><option value="0.5">0.5x</option><option value="1" selected="selected">normal</option><option value="1.5">1.5x</option><option value="2">2x</option></select></div></div><div id="bmpui-id-44" class="bmpui-ui-settings-panel-item bmpui-hidden" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-45" for="bmpui-id-43" class="bmpui-ui-label">Audio Track</label><select id="bmpui-id-43" class="bmpui-ui-selectbox bmpui-ui-audiotrackselectbox"></select></div></div><div id="bmpui-id-47" class="bmpui-ui-settings-panel-item bmpui-hidden" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-48" for="bmpui-id-46" class="bmpui-ui-label">Audio Quality</label><select id="bmpui-id-46" class="bmpui-ui-selectbox bmpui-ui-audioqualityselectbox"><option value="auto" selected="selected">auto</option></select></div></div><div id="bmpui-id-86" class="bmpui-ui-settings-panel-item bmpui-hidden" role="menubar" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-85" class="bmpui-ui-label"><span>Subtitles</span><button id="bmpui-id-83" aria-label="Subtitles" class="bmpui-ui-settingspanelpageopenbutton" type="button" aria-pressed="false" tabindex="0" role="menuitem" aria-haspopup="true" aria-owns="bmpui-id-51"><span class="bmpui-label">open</span></button></label><select id="bmpui-id-84" class="bmpui-ui-selectbox bmpui-ui-subtitleselectbox" aria-label="Select subtitle"><option value="null" selected="selected">off</option></select></div></div></div></div><div id="bmpui-id-51" class="bmpui-ui-settings-panel-page" role="menu"><div class="bmpui-container-wrapper"><div id="bmpui-id-54" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper">
  <label id="bmpui-id-55" for="bmpui-id-53" class="bmpui-ui-label">Font size</label><select id="bmpui-id-53" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsfontsizeselectbox"><option value="null">default</option><option value="50">50%</option><option value="75">75%</option><option value="100">100%</option><option value="150">150%</option><option value="200">200%</option><option value="300">300%</option><option value="400">400%</option></select></div></div><div id="bmpui-id-57" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-58" for="bmpui-id-56" class="bmpui-ui-label">Font family</label><select id="bmpui-id-56" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsfontfamilyselectbox"><option value="null">default</option><option value="monospacedserif">monospaced serif</option><option value="proportionalserif">proportional serif</option><option value="monospacedsansserif">monospaced sans serif</option><option value="proportionalsansserif">proportional serif</option><option value="casual">casual</option><option value="cursive">cursive</option><option value="smallcapital">small capital</option></select></div></div><div id="bmpui-id-60" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true">
  <div class="bmpui-container-wrapper">
  <label id="bmpui-id-61" for="bmpui-id-59" class="bmpui-ui-label">Font color
  </label>
  <select id="bmpui-id-59" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsfontcolorselectbox"><option value="null">default</option>
  <option value="white">white</option>
  <option value="black">black</option>
  <option value="red">red</option>
  <option value="green">green
  </option><option value="blue">blue</option>
  <option value="cyan">cyan</option>
  <option value="yellow">yellow</option>
  <option value="magenta">magenta</option></select></div>
  </div>
  <div id="bmpui-id-63" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-64" for="bmpui-id-62" class="bmpui-ui-label">Font opacity</label>
  <select id="bmpui-id-62" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsfontopacityselectbox"><option value="null">default</option>
  <option value="100">100%</option><option value="75">75%</option><option value="50">50%</option><option value="25">25%</option></select></div></div><div id="bmpui-id-66" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true">
  <div class="bmpui-container-wrapper"><label id="bmpui-id-67" for="bmpui-id-65" class="bmpui-ui-label">Character edge</label><select id="bmpui-id-65" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingscharacteredgeselectbox"><option value="null">default</option>
  <option value="raised">raised</option>
  <option value="depressed">depressed</option><option value="uniform">uniform</option><option value="dropshadowed">drop shadowed</option>
  </select></div></div><div id="bmpui-id-69" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-70" for="bmpui-id-68" class="bmpui-ui-label">Background color</label>
  <select id="bmpui-id-68" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsbackgroundcolorselectbox"><option value="null">default</option><option value="white">white</option><option value="black">black</option><option value="red">red</option><option value="green">green</option><option value="blue">blue</option><option value="cyan">cyan</option><option value="yellow">yellow</option><option value="magenta">magenta</option></select></div></div><div id="bmpui-id-72" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper">
  <label id="bmpui-id-73" for="bmpui-id-71" class="bmpui-ui-label">Background opacity</label><select id="bmpui-id-71" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingsbackgroundopacityselectbox"><option value="null">default</option><option value="100">100%</option><option value="75">75%</option><option value="50">50%</option><option value="25">25%</option><option value="0">0%</option></select></div></div>
  <div id="bmpui-id-75" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-76" for="bmpui-id-74" class="bmpui-ui-label">Window color</label><select id="bmpui-id-74" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingswindowcolorselectbox"><option value="null">default</option><option value="white">white</option><option value="black">black</option><option value="red">red</option><option value="green">green</option><option value="blue">blue</option><option value="cyan">cyan</option><option value="yellow">yellow</option><option value="magenta">magenta</option></select></div></div><div id="bmpui-id-78" class="bmpui-ui-settings-panel-item" role="menuitem" aria-haspopup="true"><div class="bmpui-container-wrapper"><label id="bmpui-id-79" for="bmpui-id-77" class="bmpui-ui-label">Window opacity</label><select id="bmpui-id-77" class="bmpui-ui-selectbox bmpui-ui-subtitlesettingswindowopacityselectbox"><option value="null">default</option><option value="100">100%</option><option value="75">75%</option><option value="50">50%</option><option value="25">25%</option><option value="0">0%</option></select></div></div><div id="bmpui-id-82" class="bmpui-ui-settings-panel-item bmpui-last" role="menubar"><div class="bmpui-container-wrapper"><button id="bmpui-id-80" aria-label="Back" class="bmpui-ui-settingspanelpagebackbutton" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Back</span></button><button id="bmpui-id-81" aria-label="Reset" class="bmpui-ui-subtitlesettingsresetbutton" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Reset</span></button></div></div><button id="bmpui-id-88" aria-label="Close" class="bmpui-ui-closebutton" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Close</span></button></div></div><button id="bmpui-id-87" aria-label="Close" class="bmpui-ui-closebutton" type="button" aria-pressed="false" tabindex="0" role="button"><span class="bmpui-label">Close</span></button></div></div><button id="bmpui-id-121" aria-label="Link to Homepage" class="bmpui-ui-watermark" type="button" aria-pressed="false" tabindex="0" role="link" data-url="http://bitmovin.com"><span class="bmpui-label">logo</span></button><div id="bmpui-id-122" class="bmpui-ui-errormessage-overlay bmpui-hidden">
  <div class="bmpui-container-wrapper"><canvas class="bmpui-ui-tvnoisecanvas"></canvas><span id="bmpui-id-123" class="bmpui-ui-errormessage-label"></span></div></div></div></div></div>`)
  document.write(`<script type="text/javascript">
  function override(url){ if (url.indexOf("licensing.bitmovin.com/licensing") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; if (url.indexOf("licensing.bitmovin.com/impression") > -1) return "data:text/plain;charset=utf-8;base64,eyJzdGF0dXMiOiJncmFudGVkIiwibWVzc2FnZSI6IlRoZXJlIHlvdSBnby4ifQ=="; return url;}
  var opens = XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open = function() {var url = override(arguments[1]);arguments[1] = url;return opens.apply(this, arguments);}
  var config = {key: "11d3698c-efdf-42f1-8769-54663995de2b",playback: {autoplay:true,muted: false,}};
  
  var source = {'hls':'${m3u8}'};
  
  var playerContainer = document.getElementById('playerdiv');
  var player = new bitmovin.player.Player(playerContainer, config);
  player.load(source).then(function() {player.play();console.log();});
  </script>`)
  document.write(`<style>.bitmovinplayer-ad-container, .bitmovinplayer-container{direction:ltr;}.bmpui-ui-watermark,#bmpui-id-184,#bmpui-id-132{display: none; !important}#bmpui-id-185{margin:9px 20px 0 10px}.bmpui-ui-buffering-overlay{background-color:#000000b3}.notloaded .bmpui-ui-buffering-overlay-indicator{display:inline-block!important}#playerdiv .bmpui-ui-buffering-overlay .bmpui-ui-buffering-overlay-indicator{background:#fff;height:1em;margin:.5em;width:1em;border-radius:10px</style>`)
  document.write(`</div>`)
}


