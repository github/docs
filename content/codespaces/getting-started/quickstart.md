<html lang="en">

<head>
<meta name="generator" content="CoffeeCup Visual Site Designer, Version 7.0 Build 26 for Windows">
<meta http-equiv="Content-Type" content="text/html;charset=utf-8">
<meta http-equiv="generator" content="CoffeeCup Visual Site Designer (www.coffeecup.com)">
<meta name="created" content="Tue, 02 Feb 2016 14:57:33 GMT">


<title> Select Class </title>

<style type="text/css">

   /* TEXT STYLES */



   /* OBJECT STYLES */

div.Object7218 { position:absolute; top:185px; left:0px; width:980px; z-index:0; }
div.Object7219 { position:absolute; top:-1px; left:0px; width:980px; z-index:1; }

   /* BODY STYLES */

body {
 margin:0px;
 padding :0px;
 text-align:center;
 height:100%;
 width:100%;
 background-color: #e9e9e9;
}

.today_limit {
    float: right;
    background-color: #5b89c1;
    background: linear-gradient(0deg, #5b89c1 0%, #5ba4dc 100%);
    border-radius: 12px;
    padding: 6px 12px;
    color: white;
    font-family: OpenSans;
    font-size: 13px;
    margin: 7px 6px;
}

   /* IMAGE STYLES */

img { border:0 none}


   /* CONTAINER RULES */

#container { position:relative; margin:0px auto 0 auto; height:575px; width:980px; text-align:left; padding-left:0px;}

</style>


<!--html inserted by user -->
	<link rel="stylesheet" type="text/css" href="studenttools_ss.css?2122193407">
<script src="Interface/js/jquery-3.0.0.min.js" type="text/javascript"></script>


<link rel="stylesheet" href="/StudentFunctions/Interface/live/live_session.css?2122193406">

<script src="/StudentFunctions/Interface/live/live_session.js?2122193406" type="text/javascript"></script>
<script type="text/javascript">
    var live = CreateLiveSession([{"url":"https:\/\/ls2.acellus.com","token":{"user":"8162029289","sc":[{"s":10002671,"c":[]}],"date":1643822845,"hash":"r9ckkm1zHxK5WcWgb8cs1nbLEumrcJbZffiRsECek6M="}}],null,null);

    live.on('startCall', function(){
        $('video').each(function(){this.pause()});
        if (window.Android && typeof window.Android.tabletVideoPause === 'function') Android.tabletVideoPause();
        window.gamePause = true;
        $(document).unbind("keyup");
    });

    live.on('endCall', function(){
        // live.webrtc.emit('changeMedia', {restore: true});
        $('video').each(function(){this.play()});
        if (window.Android && typeof window.Android.tabletVideoResume === 'function') Android.tabletVideoResume();
        window.gamePause = false;
        startEventListeners();
        window.content('','','','','');
    });

    live.beforeRingCb = function(startRinging) {
        jQuery.ajax({
            type: "POST",
            url: "/Lib_PHP/acellusEngine.php",
            dataType: "html",
            async: false,
            data: {
                FunctionType: 'VerifySession',
                ajax: 'true'
            },
            success: function (ret) {
                if(ret == '|$'+'|http://www.acellus.com|'+'$|'){
                    alert('Your session has been logged out.');
                    reDirect('http://www.acellus.com');
                }else {
                    startRinging();
                }
            }
        });
    };

    /*Used in acellus_engine.html to request Live Sessions and update Live Class Monitor - real time.*/

    function newStudentStatus(jsonStr) {
        try {
            live.sendEvent(JSON.parse(jsonStr));
        } catch(e) {}
    }

    function requestLiveSession() {
        openMenu('main-help-menu');
        jQuery.ajax({
            type: "POST",
            url: "/Lib_PHP/acellusEngine.php",
            dataType: "html",
            async: false,
            data: {
                FunctionType: 'RequestLiveSession',
                ajax: 'true'
            },
            success: function (ret) {
                if(ret == '|$|http://www.acellus.com|$|'){
                    alert('Your session has been logged out.');
                    reDirect('http://www.acellus.com');
                }else {
                    var event = $.parseJSON(ret);
                    if (event.type == 'student request'){
                        live.sendEvent(event);
                        openLightbox("Thank you.  Your request has been saved to the queue.", "images/resource_live.png");
                    }else{
                        openLightbox("Your request for a live session could not be sent. Please try again later.", "images/resource_live.png");
                    }
                    setTimeout($.fn.closeLightbox, 2000);
                }
            },
            error: function () {
                confirmCb('There appears to be an issue with your Internet connection. Make sure you are online and try again.', function(r){
                    if (r) requestLiveSession();
                });
            }
        });
    }

</script>



<script type="text/javascript">

    function MediaServerError(){
        jQuery.ajax({
            type: "POST",
            url: "/Lib_PHP/acellusEngine.php",
            dataType: "html",
            async: false,
            data: {
                FunctionType: 'SwitchMediaServer',
                ajax: 'true'
            },
            success: function (ret) {
                $('#check_div').html("<img src='"+ret+"servercheck.gif' width='1' height='1' onerror='MediaServerError()' alt='server check'>"); //servercheck.gif
            },
            error: function (xhr, ajaxOptions, thrownError) {
            }
        });
    }

    function startClass(Location) {
        if (Location != '') parent.location = Location; //load class
    }



function startGoogle(){
    if(typeof ga == 'undefined') {
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-171261-8', 'auto', {
            'allowLinker': true,
            'userId': '8162029289'
          });
          ga('require', 'linker');
          ga('send', 'pageview', {
            'hitCallback': function() {}
          });
    }
}

function runGoogleVideo(){
  var timeVal = 0;
  ga_video = setInterval(function() {
    timeVal += 270000;
    ga('send', 'event', {
      'eventCategory': 'ClassAction',
       'eventAction': 'Video',
       'eventLabel': 'Progress',
       'eventValue': timeVal,
       'hitCallback': function(){}
    });
  }, 270000);
}

function runGoogleProblem(){
  clearInterval(ga_video);
  ga('send', 'event', {
    'eventCategory': 'ClassAction',
    'eventAction': 'Problem',
    'hitCallback': function(){}
  });
}

startGoogle();

window.alertCb = function(t, cb){
    alert(t);
    if(typeof cb === 'function') cb();
};

window.confirmCb = function(t, cb){
    var r = confirm(t);
    if(typeof cb === 'function') cb(r);
};

window.promptCb = function(t, d, cb){
    var r = prompt(t, d);
    if(typeof cb === 'function') cb(r);
};
</script>

<!--end of html inserted by user -->
</head>

<body onload="">

<div id="container">

	<div class="Object7219"><link rel="stylesheet" type="text/css" href="css/notifications/badge_notifications.css" >
<link rel="stylesheet" href="Interface/live/live_session.css?2122193406">
<style type="text/css">

div.ObjectBanner { position:absolute; top:0px; left:0px; z-index:3; }
div.ObjectLogo { position:absolute; top: 16px; left: 20px; z-index:3; }
div.HeaderLinks { position:absolute; top:7px; left:292px; width:680px; z-index:3; }

.ObjectClasses { margin-left:5px; position: relative; cursor: pointer; z-index: 15; display: inline-block; }
.ObjectProgress, .ObjectCalendar, .ObjectHomework, .ObjectProgress, .ObjectScore, .ObjectLibrary, .ObjectBlog, .ObjectAttendance, .ObjectMessages, .ObjectCrisis { margin-left:-5px; position: relative; cursor: pointer; z-index: 15; display: inline-block; }
.menuLabel {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 10px;
        white-space: nowrap;
        font-size: 11px;
        font-family: "Open Sans", sans-serif;
        text-align: center;
        cursor:pointer;
        color: black;
    }

    .big-title {
        font-size:13pt;
        font-family:calibri, TrebuchetMS;
        font-weight:600;
    }

</style>
<script type="text/javascript">
    var timeVar = 0;

    function open_science_live_student () {
        var f = $('<form></form>').attr('method', 'post').attr('action', 'https://sciencelive.com/#latest_ep');
        $('<input>').attr('type', 'hidden').attr('name', 'AcellusID').val('8162029289').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'Name').val('Mitchell Douglas').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'SigningInTo').val('ScienceLive').appendTo(f);

        $('body').append(f);
        f.submit();
    }

    function open_science_fair() {
        // window.open("https://neighbors.acellus.com/view/blocks.php?id=24772", '_blank');//neighbors dot acellus cot com is /auth/student/redirect.php
        var f = $('<form></form>').attr('method', 'post').attr('target', '_blank').attr('action', 'https://neighbors.acellus.com/auth/student/redirect.php');
        $('<input>').attr('type', 'hidden').attr('name', 'id').val('24772').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'AcellusID').val('8162029289').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'Password').val('43gc3r').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'AcctType').val('Student').appendTo(f);
        $('<input>').attr('type', 'hidden').attr('name', 'redirect').val('view/view.php?id=24772').appendTo(f);

        $('body').append(f);
        f.submit();
    }

    function open_blog_post_student() {

        //    Flip blog_icon to NOT NEW
        if(timeVar != 1){
            $('#blog_icon').hide();
            timeVar = 1;
            window.open("/Lib_PHP/quickResponse.php?fname=clearBlogStatus&user=student", '_blank');
            setTimeout(function(){
                timeVar = 0;
            },5000);
        } else {
            return;
        }
    }
</script>

<div class="ObjectBanner"><img src="files/student_header.jpg" alt="" width="980px" height="186px"></div>

<div class="ObjectLogo"><img src="files/student_interface_logo.png" alt="Acellus" width="257" height="70"></div>
<div style="position:absolute; top:111px;">
<a href="selectclass.html" class="ObjectClasses" tabindex="1000"><img src="files/ClassesUp.png?1" alt="" width="81px" height="75px"><span class="menuLabel">Classes</span></a>

<a href="progress.html" class="ObjectProgress" tabindex="1001"><img src="files/ProgressUp.png?1" alt="" width="81px" height="75px"><span class="menuLabel">Progress</span></a>

<a href="messages.html" class="ObjectMessages" tabindex="1002"><img src="files/MessagesUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Messages</span></a>

<a href="attendance.html" class="ObjectAttendance" tabindex="1003"><img src="files/AttendanceUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Attendance</span></a>

<a href="calendar.html" class="ObjectCalendar" tabindex="1004"><img src="files/CalendarUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Calendar</span></a>

<a href="score.html" class="ObjectScore" tabindex="1005"><img src="files/ScoreUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Score</span></a>

<a href="homework.html" class="ObjectHomework" tabindex="1006"><div class="navBadge" style="top: 6px; position: relative; left: 65px;"><span class="badge yellow">6</span></div><img src="files/HomeworkUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Special Lessons</span></a>

<a href="library.html" class="ObjectLibrary" tabindex="1007"><img src="files/LibraryUp.png?1"  alt="" width="81px" height="75px"><span class="menuLabel">Library</span></a>

    <a class="ObjectBlog" href="javascript:open_science_fair();" title="Enter the Acellus Science Fair." tabindex="1009"><img id="sciencefair_icon" src="files/ScienceFairUp.png?1" style="height: 70px; margin-bottom: 5px;" alt=""><span class="menuLabel">Science Fair</span></a>
    <a class="ObjectBlog" href="javascript:open_science_live_student();" tabindex="1010"><img id="live_icon" src="files/ScienceLiveUp.png?3" style="height: 70px; margin-bottom: 5px;" alt=""><span class="menuLabel">Roger Billings</span></a>
    <a class="ObjectBlog" href="javascript:open_blog_post_student();" tabindex="1011"><div id="blog_icon" class="navBadge" style="top: 6px; position: relative; left: 75px;"></div><img id="blog_icon" src="files/BlogUp.png" alt="" width="106px" height="75px"><span class="menuLabel">Student Blog</span></a>
</div>


<div class="HeaderLinks"><table style="margin:0px; padding:0px; float:right;" align="right">

        <tr>

            <td class="account_text">Welcome, Mitchell&nbsp;&nbsp;</td>

            <td class="account_divider">|&nbsp;&nbsp;</td>

            <td class="account_text">Acellus Academy</td>

            <td class="account_divider">&nbsp;&nbsp;|&nbsp;&nbsp;</td>

            
                <td>
                    <a href="parentemail.html" class="account_link" tabindex="1008">Parent Registration</a>
                </td>

                <td class="account_divider">&nbsp;&nbsp;|&nbsp;&nbsp;</td>

            
            <td>
                <a class="account_link" href="/Lib_PHP/logout.php" tabindex="1010">Sign Out</a>
            </td>

        </tr>
    </table></div>
</div>

<div class="Object7218">
    <div style="background-color:#ffffff; width:100%; min-height:354px;">

<table style="margin:0 auto; width: 600px; padding-top: 12px;" cellspacing="0" cellpadding="10px">

<tr>

<td style="border-bottom: solid 1px #BDBDBD;">
    <img src="files/icon_selectclass.png" style="position: relative; top: 10px;" alt="" width="32px" height="26px">
    &nbsp;&nbsp;<span class="big-title">Select a Class to Begin:</span></td>
</tr>

</table>

<table class="select_class_table" style="margin:0 auto; width: 600px;" cellspacing="0" cellpadding="10px">
<!--<div onclick="parent.location='Interface/pdf/pdf_viewer.html'">See PDF</div>-->

    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303978298");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Full - Grade 6 Math</span>
                    </td>
	</tr>

    
    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303979334");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Grade 6 Social Studies</span>
                    </td>
	</tr>

    
    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303978482");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Grade 6 Language Arts/Reading</span>
                    </td>
	</tr>

    
    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303979396");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Social Emotional Learning - Middle School</span>
                    </td>
	</tr>

    
    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303977854");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Grade 6 Science</span>
                    </td>
	</tr>

    
    <tr onclick='startClass("Interface/acellus_engine.html?ClassID=303980784");' tabindex="1">
        <td style="padding: 0; cursor:pointer;">
            <span class="selectclasstitle" style="float:left">Robotics Dance Programming</span>
                    </td>
	</tr>

    

</table>

</div>

<table style="width:100%; background-color:#ffffff;">
    <tr>
        <td style="text-align:left; height: 35px;">&nbsp;&nbsp;<span class="account_text" style="color:#4C4C4C; font-size:11px;">Copyright &#169; 2003 - 2022 Acellus Corporation.&nbsp;&nbsp;All Rights Reserved.</span></td>
    </tr>
</table>

<div id="check_div" style="visibility:hidden;"></div></div>
</div>
</body>
</html>
