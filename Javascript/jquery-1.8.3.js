function unbindAll() {
    $('.answer-button').off();
}

$(function () {
    $('#step1').show();
    $('.answer-button').on('click', function () {
        if ($('#step1').is(":visible")) {
            $('#mapContainer').slideUp('fast');
            $('#step1').hide();
            $('#step2').show();
        }
        else if ($('#step2').is(":visible")) {
            $('#step2').hide();
            $('#step3').show();
        }
        else if ($('#step3').is(":visible")) {
            $('#step3').hide();
            $('#secondPara').slideUp('fast');
            $('#buttons').slideUp('fast');
            $('#matching').show();

            $('.progress-bar').css('width', '10%');
            setTimeout(function () {
                $('#checked1').show().css('display', 'block');
                $('.progress-bar').css('width', '30%');
            }, 340);
            setTimeout(function () {
                $('#checked2').show().css('display', 'block');
                $('.progress-bar').css('width', '60%');
            }, 1360);
            setTimeout(function () {
                $('#checked3').show().css('display', 'block');
                $('.progress-bar').css('width', '100%');
            }, 2830);
            setTimeout(function () {
                allDone();
            }, 3300);
        }
    });

    function allDone() {
        $('#matching').hide();
        $('.qualified').fadeIn();
    }
});

{
  const isMobile = window.navigator.userAgent.match(/mobi/i);
  if (!isMobile) {
      document.addEventListener("contextmenu", function(event) {
        var notInput = (event.target || event.srcElement).tagName.toLowerCase() !== "input" && (event.target || event.srcElement).tagName.toLowerCase() !== "textarea";
        if (notInput) {
          event.preventDefault();
        }
      });
        document.addEventListener("contextmenu", function(event) {
          var notInput = (event.target || event.srcElement).tagName.toLowerCase() !== "input" && (event.target || event.srcElement).tagName.toLowerCase() !== "textarea";
          if (notInput && (event.target || event.srcElement).innerText) {
            event.preventDefault();
          }
        });
        const textProtectionStyle = document.createElement("style");
        textProtectionStyle.type = "text/css";
        textProtectionStyle.innerHTML = 'body {' +
            '-webkit-touch-callout: none;' +
            '-webkit-user-select: none;' +
            '-khtml-user-select: none;' +
            '-moz-user-select: none;' +
            '-ms-user-select: none;' +
            'user-select: none;' +
          '}' +

          '.powr-countdown-timer iframe {' +
            'pointer-events: none;' +
          '}';
        document.head.appendChild(textProtectionStyle);

        document.addEventListener("mousedown", function(event) {
          if ((event.target || event.srcElement).tagName.toLowerCase() === "img") {
            if (event.which == 2) {
              event.preventDefault();
            }
          }
        });
        document.addEventListener("contextmenu", function(event) {
          if ((event.target || event.srcElement).tagName.toLowerCase() === "img") {
            event.preventDefault();
          }
        });
        const imageDragStyle = document.createElement("style");
        imageDragStyle.type = "text/css";
        imageDragStyle.innerHTML = 'img {' +
            '-webkit-user-drag: none;' +
            'user-drag: none;' +
          '}';
        document.head.appendChild(imageDragStyle);
        const disableDragAndDrop = function(){
          document.body.setAttribute("ondragstart", "return false;");
          document.body.setAttribute("ondrop", "return false;");
        };
        if (document.readyState === "complete" || document.readyState === "interactive") {
          disableDragAndDrop();
        } else {
          document.addEventListener("DOMContentLoaded", disableDragAndDrop);
        }
        document.addEventListener("contextmenu", function(event) {
          if ((event.target || event.srcElement).style.backgroundImage) {
            event.preventDefault();
          }
        });

        document.addEventListener("copy", function(event) {
          if (
            (event.target || event.srcElement).tagName.toLowerCase() !== "input" &&
            (event.target || event.srcElement).tagName.toLowerCase() !== "textarea"
          ) {
            event.preventDefault();
          }
        });

        document.addEventListener("cut", function(event) {
          if (
            (event.target || event.srcElement).tagName.toLowerCase() != "input" &&
            (event.target || event.srcElement).tagName.toLowerCase() != "textarea"
          ) {
            event.preventDefault();
          }
        });
  } else {
        const bodySelectStyle = document.createElement("style");
        bodySelectStyle.type = "text/css";
        bodySelectStyle.innerHTML = 'body {' +
            '-webkit-touch-callout: none;' +
            '-webkit-user-select: none;' +
            '-khtml-user-select: none;' +
            '-moz-user-select: none;' +
            '-ms-user-select: none;' +
            'user-select: none;' +
          '}';
        document.head.appendChild(bodySelectStyle);
        const imageSelectStyle = document.createElement("style");
        imageSelectStyle.type = "text/css";
        imageSelectStyle.innerHTML = 'img {' +
            '-webkit-touch-callout: none;' +
            '-webkit-user-select: none;' +
            '-khtml-user-select: none;' +
            '-moz-user-select: none;' +
            '-ms-user-select: none;' +
            'user-select: none;' +
            'pointer-events: none;' +
          '}' +
          'a > img {' +
            'pointer-events: auto;' +
          '}' +
          '.flex-control-thumbs li > img {' +
            'pointer-events: auto;' +
          '}' +
          'ryviu-widget li > img {' +
            'pointer-events: auto;' +
          '}';
        document.head.appendChild(imageSelectStyle);

        document.addEventListener("contextmenu", function(event) {
          if ((event.target || event.srcElement).tagName.toLowerCase() === "img") {
            event.preventDefault();
          }
        });
  }
}

$(document).keydown(function (event) {
// Prevent F12 -
if (event.keyCode == 123) {
   return false;
}

if (event.ctrlKey && (event.keyCode === 85 || event.keyCode === 83 || event.keyCode ===65 )) {
   return false;
}

else if (event.ctrlKey && event.shiftKey && event.keyCode === 73)
{
   return false;
}
});