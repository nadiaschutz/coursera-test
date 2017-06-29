/*function appendScript(pathToScript) {
    var head = document.getElementsByTagName("body")[0];
    var js = document.createElement("script");
    js.type = "text/javascript";
    js.src = pathToScript;
    head.appendChild(js);
}*/

const DPID2110030512812706336545 = document.getElementById("dp-bot-init").getAttribute("dpid"); // DeepPIXELBOT - Staging
//document.body.innerHTML +=
var dp_bot_content = document.createElement("div");
dp_bot_content.innerHTML = [
        "    <div id=\"deeppixel-bot\" style=\"/*display: none !important;*/\">",
        "      <link rel=\"stylesheet\" href=\"https://prodbm-dot-deeppixel-corebot.appspot.com/css/theme.min.css" rel=\"stylesheet\">",
        "      <link rel=\"stylesheet\" href=\"https://prodbm-dot-deeppixel-corebot.appspot.com/css/application.min.css" rel=\"stylesheet\">",
        "      <!-- Google Fonts-->",
        "      <link href=\"https://fonts.googleapis.com/css?family=Raleway:100,300,400\" type=\"text/css\" rel=\"stylesheet\">",
        "      <link href=\"https://fonts.googleapis.com/css?family=Roboto:400,300\" type=\"text/css\" rel=\"stylesheet\">",
        "      <link href=\"https://fonts.googleapis.com/css?family=Montserrat\" type=\"text/css\" rel=\"stylesheet\">",
        "      <link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" type=\"text/css\" rel=\"stylesheet\">",
        "      <!--",
        "      <div class=\"hidden-xs\" style=\"background-image: url(&quot;dist/img/trybot.png&quot;);background-size: cover;height: 171px;width: 100px; bottom: 100px; right: 23px; position: fixed;\"></div>",
        "      -->",
        "      <div id=\"deepbot-button\" class=\"chaticon\">",
        "        <button class=\"deeppixel-chat-button\"></button>",
        "        <i class=\"my-pulsate white\"></i>",
        "        <i class=\"my-pulsate black\"></i>",
        "        <i class=\"my-pulsate blue\"></i>",
        "      </div>",
        "      <div>",
        "        <div id=\"chatview\" class=\"p1\">",
        "          <div id=\"profile\">",
        "            <div id=\"close\">",
        "              <div class=\"cy\"></div>",
        "              <div class=\"cx\"></div>",
        "            </div>",
        "            <p class = \"header\">Chat Window.</p>",
        "            <!-- <p>DeepBot</p> -->",
        "            <!-- <span>Let\'s Chat!</span> -->",
        "          </div>",
        "          <div id=\"parent-window\" style=\"max-height: calc(100% - 120px); height: calc(100% - 120px);\">",
        "            <div id=\"chat-messages\"></div>",
        "          </div>",
        "          <!-- <div id=\"sendmessage\"> -->",
        "          <!-- <input type=\"text\" id=\"send-input\" placeholder=\"Send message...\" /> -->",
        "          <!-- <input type=\"submit\" id=\"send\" onclick=\"sendChat()\"></input> -->",
        "          <!-- <button id=\"send\" type=\"button\" onclick=\"sendMessage(true)\"></button>            -->",
        "          <!-- </div> -->",
        "          <div id=\"notifications\">",
        "            <div id=\"feedback\" style=\"display:none;\">",
        "              <!-- <p>Was this helpful?</p> -->",
        "              <!-- <div class=\"btn-group\"> -->",
        "              <button class=\"btn\" onclick=\"feedbackResponse(true);\">That helped!</button>",
        "              <button class=\"btn\" onclick=\"feedbackResponse(false);\">That didn\'t help</button>",
        "              <!-- </div> -->",
        "            </div>",
        "            <div id=\"options\" style=\"display:none;\">",
        "              <p>Did you mean...</p>",
        "              <ul class=\"options-list\">",
        "              </ul>",
        "            </div>",
        "            <div class=\"loader\" style=\"display:none;\">",
        "              <span></span>",
        "              <span></span>",
        "              <span></span>",
        "            </div>",
        "            <!-- <span style=\"padding: 0;margin: 0;position: absolute;bottom: -8px;right: 0;font-size: 10px;font-weight: 100;\">Try \'menu\' for more info</span> -->",
        "          </div>",
        "          <div id=\"sendmessage\" >",
        "            <div class=\"form\">",
        "              <input type=\"text\" id=\"send-input\" placeholder=\"Ask me anything...\" />",
        "              <button onclick=\"sendMessage();\" id=\"send\"></button>",
        "            </div>",
        "          </div>",
        "        </div>",
        "      </div>",
        "    </div>",].join("\n");


document.getElementsByTagName("body")[0].appendChild(dp_bot_content);

// lazy load these scripts: as we are invoking working webpages we need to ensure that we have loaded JQ first
// before we do anything on our own
/*(function() {
    // Poll for jQuery to come into existance
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            // Load the script
            var script = document.createElement("SCRIPT");
            script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js';
            script.type = 'text/javascript';
            document.getElementsByTagName("head")[0].appendChild(script);
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
        $(function() {
            appendScript("https://prodbm-dot-deeppixel-corebot.appspot.com/js/theme.min.js");
            appendScript("https://prodbm-dot-deeppixel-corebot.appspot.com/js/application.min.js");

        });
    });
})();*/


