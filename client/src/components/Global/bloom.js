var insertForm2340864 = function () {
    var html2340864 =
      "<style text='text/css'>" +
      ".email-registration-form label{color: #404040;" +
      "                display: block;}" +
      "" +
      ".email-registration-form label.error{color:#900;" +
      "                display: inline-block; " +
      "                padding: 0 10px;}" +
      "" +
      ".email-registration-form .field{padding: 4px 0;}" +
      "" +
      ".email-registration-form .consent{padding-bottom: 4px;}" +
      "" +
      ".email-registration-form .field .required-star{color: #aa0000; " +
      "                display: inline-block; " +
      "                margin-left: 5px;}" +
      "" +
      ".email-registration-form .field .checkboxes{max-width:275px;" +
      "                border: 1px solid #A9A9A9;" +
      "                -webkit-transition: all .3s ease-out;" +
      "                -moz-transition: all .3s ease-out;" +
      "                transition: all .3s ease-out;}" +
      "" +
      ".email-registration-form .field .checkbox{display:block;" +
      "                position:relative;" +
      "                -moz-box-sizing:border-box;" +
      "                box-sizing:border-box;" +
      "                height:30px;" +
      "                line-height:26px;" +
      "                padding:2px 28px 2px 8px;" +
      "                border-bottom:1px solid rgba(0,0,0,0.1);" +
      "                color:#404040;  " +
      "                overflow:hidden;" +
      "                text-decoration:none; }" +
      "" +
      ".email-registration-form .field .checkbox input{opacity:0.01;" +
      "                position:absolute;" +
      "                left:-50px;  " +
      "                z-index:-5;}" +
      "" +
      ".email-registration-form .field .checkbox:last-child{border-bottom:none;}" +
      "" +
      ".email-registration-form .field .checkbox.selected{background: rgb(50, 142, 253);" +
      "                color:#fff; }" +
      "" +
      ".email-registration-form .field .checkbox.selected:before{color:#fff;" +
      "                line-height:30px;" +
      "                position:absolute;" +
      "                right:10px; }" +
      "" +
      ".email-registration-form .field input{padding: 4px; " +
      "                width: 275px;}" +
      "" +
      ".email-registration-form .errors{border: 1px solid #900;" +
      "                color: #900;  " +
      "                padding: 10px;}" +
      "" +
      ".email-registration-form .hidden{display: none;}" +
      "" +
      ".btn-group .btn-submit-email{padding: 4px 10px;}" +
      "" +
      "input, select, textarea, button{font-family: inherit;}" +
      "" +
      "</style>" +
      "" +
      '<div id="email-registration-form-container">' +
      '  <form id="email-registration-form" class="email-registration-form" method="post" action="javascript:void(0)">' +
      '    <div class="errors hidden"></div>' +
      '    <div class="section contact">' +
      "      <h3>Contact Information</h3>" +
      '      <div class="field text first-name required" >' +
      '<label for="first-name"><span class="label">First Name</span><span class="required-star">*</span></label>' +
      '<input id="first-name" name="first-name" class="required" type="text"></input>' +
      "</div>" +
      '<div class="field text last-name required" >' +
      '<label for="last-name"><span class="label">Last Name</span><span class="required-star">*</span></label>' +
      '<input id="last-name" name="last-name" class="required" type="text"></input>' +
      "</div>" +
      '<div class="field email email-address required" >' +
      '<label for="email-address"><span class="label">Email</span><span class="required-star">*</span></label>' +
      '<input id="email-address" name="email-address" class="email required" type="email" placeholder="someone@website.com"></input>' +
      "</div>" +
      '<div class="consent">I want to receive emails at this address</div>' +
      "" +
      "</div>" +
      '    <div class="section custom-fields">' +
      "      <h3>Additional Information</h3>" +
      '      <div class="field text CustomAccountField_2342912" >' +
      '<label for="CustomAccountField_2342912">I\'m most passionate about...</label>' +
      '<select id="CustomAccountField_2342912" name="CustomAccountField_2342912"><option value=""></option>' +
      '<option value="2343936">Rental assistance and skills training for families at risk of homelessness</option>' +
      '<option value="2343937">Immediate needs & shelter for already homeless families</option>' +
      '<option value="2343938">Community networking and support for newly housed families</option>' +
      "</select>" +
      "</div>" +
      "" +
      "</div>" +
      "    " +
      '    <div class="btn-group">' +
      '      <input class="btn btn-submit btn-submit-email" type="submit" value="Sign up"/>' +
      "    </div>" +
      "  </form>" +
      "</div>" +
      "" +
      "" +
      "";
    var successHtml2340864 =
      "<div class='donation-success'>" +
      "  <h2>Thank you for joining the Family Promise Family!</h2>" +
      "  <p>Your email address has been added to our mailing list. Please check your email shortly for more information on WHY your partnership makes the difference for families experiencing homelessness in our community.</p>" +
      '\u003cdiv class="social-media-buttons" style="margin-top:10px;"\u003e\u003cdiv id="twitter-buttons"\u003e\u003c/div\u003e\u003cdiv class="fb-like" data-href="https://facebook.com/familypromiseofspokane" data-layout="button_count" data-show-faces="true" style="padding-right: 10px;" data-action="like" \u003e\u003c/div\u003e\u003cdiv id="facebookShareOnly" class="fb-share-button" data-href="https://facebook.com/familypromiseofspokane" data-layout="button_count"\u003e\u003c/div\u003e\u003cscript type=\u0027text/javascript\u0027\u003edocument.getElementById(\u0027facebookShareOnly\u0027).setAttribute(\u0027data-href\u0027, window.location.href);\u003c/script\u003e\u003c/div\u003e \u003cscript\u003e\r\n                    if (navigator.userAgent.indexOf(\u0027Edge/\u0027) === -1) {\r\n                        !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");\r\n                        var twitterButtons = document.getElementById(\u0027twitter-buttons\u0027);\r\n                        twitterButtons.innerHTML = \u0027\u003cdiv id="tweetButton" style="float:left; margin-right:10px"\u003e \u003ca href="https://twitter.com/share" data-text="I just signed up for Family Promise of SpokaneTwitterHandle\u0026#39;s email list. You should too!" class="twitter-share-button"\u003eTweet\u003c/a\u003e \u003c/div\u003e\u003cdiv id="followButton"\u003e \u003ca href="https://twitter.com/SpokaneFP" class="twitter-follow-button"\u003eFollow\u003c/a\u003e \u003c/div\u003e\u0027;\r\n                        twitterButtons.style.height = \u002735px\u0027;\r\n                    }\r\n                \u003c/script\u003e \u003cdiv id="fb-root"\u003e\u003c/div\u003e \u003cscript\u003e(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1\u0026version=v2.8"; fjs.parentNode.insertBefore(js, fjs); }(document, \u0027script\u0027, \u0027facebook-jssdk\u0027));\u003c/script\u003e ' +
      "</div>";
    (function ($) {
      if (!Bloomerang.useEmailId("2340864")) {
        html2340864 =
          '<p style="color: red">Only one email sign-up form can be used on each page.</p>';
      }
      Bloomerang.Util.requireStripe();
      if (jQuery("#bloomerangForm2340864").length) {
        jQuery("#bloomerangForm2340864").after(html2340864);
      }
      if (Bloomerang.emailSignupFormLoaded) {
        return false;
      }
      Bloomerang.emailSignupFormLoaded = true;
      jQuery(".email-registration-form .section.captcha").attr(
        "style",
        "display: none"
      );
  
      Bloomerang.useKey("pub_6960e27f-1868-11eb-a68f-0a9ec140d269");
  
      // Register proper callbacks for various stages/outcomes of submission
      Bloomerang.Widget.Email.OnSubmit = function (args) {
        jQuery(".btn-submit-email")
          .val("Registering...")
          .prop("disabled", true)
          .addClass("disabled");
        var val = function (selector) {
          return jQuery(selector).val();
        };
        Bloomerang.Account.individual()
          .firstName(val(".email-registration-form #first-name"))
          .lastName(val(".email-registration-form #last-name"))
          .homeEmail(val(".email-registration-form #email-address"))
          .applyEmailSignupCustomFields();
  
        Bloomerang.Interaction.applyEmailSignupCustomFields();
      };
      Bloomerang.ValidateEmailSignupFormCaptcha = function () {
        if (
          typeof grecaptcha !== "undefined" &&
          jQuery("#captcha" + Bloomerang.Data.WidgetIds.EmailSignup).children()
            .length
        ) {
          var captchaResponse = grecaptcha.getResponse(
            jQuery(".email-registration-form").data("captcha-id")
          );
          if (captchaResponse) {
            jQuery(".email-registration-form .noCaptchaResponseError").hide();
            Bloomerang.captchaResponse(captchaResponse);
            return true;
          } else {
            jQuery(".email-registration-form .noCaptchaResponseError").show();
            return false;
          }
        } else return true;
      };
      Bloomerang.Api.OnSuccess = Bloomerang.Widget.Email.OnSuccess = function (
        response
      ) {
        jQuery("#email-registration-form-container").html(successHtml2340864);
        var distance = 100;
        var offset = jQuery("#email-registration-form-container").offset().top;
        var offsetTop = offset > distance ? offset - distance : offset;
        jQuery("html, body").animate({ scrollTop: offsetTop }, 500);
      };
      Bloomerang.Api.OnError = Bloomerang.Widget.Email.OnError = function (
        response
      ) {
        jQuery(".btn-submit-email")
          .val("Register")
          .prop("disabled", false)
          .removeClass("disabled");
        jQuery("#email-registration-form-container .errors")
          .removeClass("hidden")
          .html(response.Message);
        var distance = 100;
        var offset = jQuery("#email-registration-form-container .errors").offset()
          .top;
        var offsetTop = offset > distance ? offset - distance : offset;
        jQuery("html, body").animate({ scrollTop: offsetTop }, 500);
        if (
          typeof grecaptcha !== "undefined" &&
          jQuery("#captcha" + Bloomerang.Data.WidgetIds.EmailSignup).children()
            .length
        ) {
          grecaptcha.reset(jQuery(".email-registration-form").data("captcha-id"));
        }
      };
  
      Bloomerang.Util.applyEmailSignupCustomFields = function (obj, type) {
        // Clear any fields from a previous failed submission
        obj.clearCustomFields();
  
        // Apply all <input> (not multiselect), <select> and <textarea> fields
        jQuery(
          ".email-registration-form .section.custom-fields :input:not(a > input, select)[id*=" +
            type +
            "]"
        ).each(function () {
          if (jQuery(this).val().hasValue()) {
            obj.customFreeformField(
              jQuery(this).attr("id").toUntypedValue(),
              jQuery(this).val()
            );
          }
        });
  
        // Apply all <select> fields
        jQuery(
          ".email-registration-form .section.custom-fields select[id*=" +
            type +
            "]"
        ).each(function () {
          if (jQuery(this).val().hasValue()) {
            obj.customPickField(
              jQuery(this).attr("id").toUntypedValue(),
              jQuery(this).val()
            );
          }
        });
  
        // Apply all multiselect fields
        jQuery(
          ".email-registration-form .section.custom-fields .checkboxes[id*=" +
            type +
            "]"
        ).each(function () {
          obj.customPickField(
            jQuery(this).attr("id").toUntypedValue(),
            jQuery.map(jQuery(this).children(".checkbox.selected"), function (v) {
              return jQuery(v).attr("data-id");
            })
          );
        });
      };
  
      String.prototype.hasValue = function () {
        return this && jQuery.trim(this); //IE8 doesn't have a native trim function
      };
  
      Bloomerang.Account.applyEmailSignupCustomFields = function () {
        Bloomerang.Util.applyEmailSignupCustomFields(this, "Account");
        return this;
      };
  
      Bloomerang.Interaction.applyEmailSignupCustomFields = function () {
        Bloomerang.Util.applyEmailSignupCustomFields(this, "Interaction");
        return this;
      };
  
      String.prototype.toUntypedValue = function () {
        return this.substring(this.indexOf("_") + 1);
      };
  
      jQuery.validator.addMethod(
        "currency",
        function (value, element, options) {
          return (
            !value ||
            value
              .replace("$", "")
              .replace(".", "")
              .split(",")
              .join("")
              .match(/^\d+$/g)
          );
        },
        "Not a valid currency"
      );
  
      jQuery.validator.classRuleSettings.currency = { currency: true };
  
      jQuery.validator.addMethod(
        "number",
        function (value, element, options) {
          return (
            !value || value.replace(".", "").split(",").join("").match(/^\d+$/g)
          );
        },
        "Not a valid number"
      );
  
      jQuery.validator.classRuleSettings.number = { number: true };
  
      jQuery.validator.addMethod(
        "validYear",
        function (value, element, options) {
          try {
            return !value || value.match(/^[1-9]\d\d\d$/) ? true : false;
          } catch (e) {
            return false;
          }
        },
        function () {
          return "Must be a 4 digit year";
        }
      );
  
      jQuery.validator.classRuleSettings.validYear = { validYear: true };
  
      // Intercept form submission to validate then submit via API
      jQuery("#email-registration-form-container form").validate({
        submitHandler: function () {
          if (!Bloomerang.ValidateEmailSignupFormCaptcha()) {
            return false;
          }
  
          // Restore proper callbacks in case there are multiple widgets on the page
          Bloomerang.Api.OnSubmit = Bloomerang.Widget.Email.OnSubmit;
          Bloomerang.Api.OnSuccess = Bloomerang.Widget.Email.OnSuccess;
          Bloomerang.Api.OnError = Bloomerang.Widget.Email.OnError;
          Bloomerang.Api.joinMailingList();
        },
      });
    })(jQuery);
  };
  
  var startBloomerangLoad = function () {
    if (window.bloomerangLoadStarted == undefined) {
      window.bloomerangLoadStarted = true;
      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://crm.bloomerang.co/Content/Scripts/Api/Bloomerang-v2.js?nocache=2022-02-09";
      document.getElementsByTagName("head")[0].appendChild(script);
      waitForBloomerangLoad(function () {
        Bloomerang.Util.requireJQueryValidation(function () {
          insertForm2340864();
        });
      });
    } else {
      waitForBloomerangLoad(function () {
        Bloomerang.Util.requireJQueryValidation(function () {
          insertForm2340864();
        });
      });
    }
  };
  
  var waitForBloomerangLoad = function (callback) {
    if (typeof Bloomerang === "undefined" || !Bloomerang._isReady) {
      setTimeout(function () {
        waitForBloomerangLoad(callback);
      }, 500);
    } else {
      if (true) {
        callback();
      } else {
        window.bloomerangLoadStarted = undefined;
        Bloomerang = undefined; // The version of Blomerang.js is not what we want. So blow it away and reload.
        startBloomerangLoad();
      }
    }
  };
  
