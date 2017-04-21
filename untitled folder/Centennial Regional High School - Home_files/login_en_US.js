/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1492722219 */


/* :asset_packager_compatibility, 'config/asset_packages.yml' @ 1492722219 */


/* :files, 'public/javascripts/shared', ... @ (none) */


/* :files, 'app/views', ... @ (none) */


/* :files, 'app/views', ... @ (none) */


/* :class_inlines, 'app/views', ... @ 1492722219 */
/* app/views/login/checkout_flow_login.coffee @ 1492722218 */
(function(){Scribd.CheckoutFlowLogin=function(){function t(t,e){this.container=$(t),this.next_url=e,this.page_name="checkout_flow_login",this.forgot_pw_lb=null,this.container.track({action:"view",label:this.page_name}),this.container.dispatch("click",{default_input:function(){return function(t,e){var n;return n=$(e.target),n.removeClass("greyed"),n.attr("value")===n.attr("default")?n.attr("value",""):void 0}}(this),forgot_password:function(t){return function(){return t.forgot_pw_lb=Scribd.Lightbox.open("forgot_password_lb",Scribd.ForgotPasswordLightbox,t),!1}}(this)}),this.initialize_input_labels(),this.container.on("Scribd:Facebook:login_success",function(t){return function(){return window.location.href=t.next_url}}(this))}return t.prototype.initialize_input_labels=function(){var t,e,n,i,r;for(i=$(".default_input"),r=[],t=0,n=i.length;n>t;t++)e=i[t],e=$(e),""===e.attr("value")?(e.attr("value",e.attr("default")),r.push(e.addClass("greyed"))):r.push(void 0);return r},t.prototype.show=function(){return this.forgot_pw_lb?this.forgot_pw_lb.close():void 0},t}()}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{login:{checkout_flow_login:{you_re_almost_done_sign_into_your:"You're almost done! Sign into your Scribd account to save your purchase so you can access it later.",have_a_scribd_account:"Have a Scribd account?",email_address_or_username:"Email address or username",password:"Password",sign_in:"Sign in",forgot_your_password:"Forgot your password?",don_t_have_a_scribd_or_facebook:"Don't have a Scribd or Facebook account?",enter_the_email_address_to_which:"Enter the email address to which we should send your receipt. We will also send you a password so you can access your purchase later.",email_address:"Email Address",submit:"Submit"}}}});


/* app/views/shared/login/base_lightbox.coffee @ 1492722219 */
(function(){var t,e,n,i;i=React.DOM,e=i.div,n=i.label,(t=Scribd.R.component_builder("Shared.Login.BaseLightbox",{css_class:"autogen_class_views_shared_login_base_lightbox",routes:{static_privacy:"/privacy(.:format)",static_terms:"/terms(.:format)",login:"/login(.:format)",login_signup:"/login/signup(.:format)"}}))({render_disclaimer:function(){var t,n;return n=this.url_for("static_terms"),t=this.url_for("static_privacy"),e({className:"join_disclaimer",dangerouslySetInnerHTML:{__html:I18n.t("shared.login.base_lightbox.by_registering_a_scribd_account_you",{terms_href:n,privacy_href:t})}})},render_facebook_button:function(t){var e;return null==t&&(t=this.props.type),e=I18n.t("login"===t||"continue"===t?"shared.login.base_lightbox.continue_with_facebook":"shared.login.base_lightbox.sign_up_with_facebook"),Scribd.R.Shared.Login.FacebookLoginButton({ref:"facebook_button",label:e,type:this.props.type,login_params:this.props.login_params})},render_google_button:function(t){var e;return null==t&&(t=this.props.type),e=I18n.t("login"===t||"continue"===t?"shared.login.base_lightbox.continue_with_google":"shared.login.base_lightbox.sign_up_with_google"),Scribd.R.Shared.Login.GoogleLoginButton({ref:"google_button",label:e,type:this.props.type,login_params:this.props.login_params})},input_row:function(t){return t.errors=this.state.errors,Scribd.R.Shared.React.Forms.TextInput(t)}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{base_lightbox:{by_joining_you_agree_to_our:"By joining, you agree to our <a target='_blank' href='%{terms_href}'>Terms of Service</a> and <a target='_blank' href='%{privacy_href}'>Privacy Policy</a>",sign_in_with_facebook:"Sign in with Facebook",continue_with_facebook:"Continue with Facebook",join_with_facebook:"Join with Facebook",by_registering_a_scribd_account_you:"By registering a Scribd account, you agree to our <a href='%{terms_href}' target='_blank' tabIndex='0'>Terms of Service <span class=\"visually_hidden\">opens in a new window</span></a> and <a href='%{privacy_href}' target='_blank' tabIndex='0'>Privacy Policy <span class=\"visually_hidden\">opens in a new window</span></a>",sign_up_with_facebook:"Sign Up with Facebook",continue_with_google:"Continue with Google",sign_up_with_google:"Sign Up with Google"}}}}});


/* app/views/shared/login/email_missing_lightbox.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s,a,c;a=React.DOM,s=a.input,r=a.h1,o=a.h2,i=a.form,n=a.div,t=a.a,e=Scribd.R.component_builder("Shared.Login.EmailMissingLightbox",{css_class:"autogen_class_views_shared_login_email_missing_lightbox autogen_class_views_shared_login_base_lightbox",parent:"Shared.Login.BaseLightbox",routes:{account_settings:"/account-settings(/:tab(/:filter))(.:format)"}}),c=React.PropTypes,e({enclosing_element_type:function(){return this.props.enclosing_element||Scribd.R.Shared.Lightbox},getInitialState:function(){return{}},componentDidMount:function(){return this.container().on("ajax:success",function(t){return function(e,n){return n.success?t.trigger("login:success",t.props.type):t.setState({errors:[{input:"word_user[primary_email]",message:I18n.t("shared.login.email_missing_lightbox.there_was_a_problem_setting_your")}]})}}(this)),this.container().on("ajax:error",function(t){return function(){return t.setState({errors:[{input:"word_user[primary_email]",message:I18n.t("shared.login.email_missing_lightbox.we_couldn_t_complete_your_request")}]})}}(this)),this.container().find("[data-autofocus]").focus()},render:function(){return[r({id:this.uid("lb_labelledby")},I18n.t("shared.login.email_missing_lightbox.one_more_thing")),o({},I18n.t("shared.login.email_missing_lightbox.we_ve_successfully_connected_your_facebook_account")),this.render_form()]},render_form:function(){return i({action:this.url_for("account_settings"),method:"put",className:"form",ref:"form","data-remote":!0,"data-json":!0,onSubmit:function(t){return function(e){return t.validate()?t.setState({loading:!0,error_message:null}):(e.preventDefault(),e.stopPropagation(),!1)}}(this),children:[this.input_row({"data-autofocus":!0,type:"text",className:"input",name:"word_user[primary_email]",placeholder:I18n.t("shared.login.email_missing_lightbox.email_address")}),n({className:"button_container"},this.common_button({onClick:function(t){return function(){return t.validate()?void 0:!1}}(this),className:"last_lb_item"},I18n.t("shared.login.email_missing_lightbox.submit")))]})},validate:function(){var t,e,n;return t=this.container().find("input[name='word_user[primary_email]']").val().trim(),n=[],e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,_.isEmpty(t)?n.push({input:"word_user[primary_email]",message:I18n.t("shared.login.email_missing_lightbox.please_enter_a_valid_email")}):e.test(t)||n.push({input:"word_user[primary_email]",message:I18n.t("shared.login.email_missing_lightbox.that_doesn_t_appear_to_be_a")}),this.setState({errors:{input:"word_user[primary_email]",message:n[0].message}}),!n.length}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{email_missing_lightbox:{there_was_a_problem_setting_your:"There was a problem setting your email",we_couldn_t_complete_your_request:"We couldn't complete your request",one_more_thing:"One more thing...",we_ve_successfully_connected_your_facebook_account:"We've successfully connected your Facebook account but didn't get your email. Please provide your email so we can finish setting up your account.",email_address:"Email Address",submit:"Submit",please_enter_a_valid_email:"Please enter a valid email",that_doesn_t_appear_to_be_a:"That doesn't appear to be a valid email address. Please try again."}}}}});


/* app/views/shared/login/facebook_login_button.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s,a;o=React.DOM,i=o.label,r=o.p,t=o.br,e=o.button,s=o.span,n=Scribd.R.component_builder("Shared.Login.FacebookLoginButton",{css_class:"autogen_class_views_shared_login_facebook_login_button",routes:{facebook_session:"/facebook_session"}}),a=React.PropTypes,n({propTypes:{label:a.string,login_params:a.object},getInitialState:function(){return{}},do_login:function(t){var e,n,i,r;n={};for(e in t)r=t[e],n["facebook_session["+e+"]"]=r;if(this.props.login_params){i=this.props.login_params;for(e in i)r=i[e],n[e]=r}return $.ajax({type:"post",url:this.url_for("facebook_session"),dataType:"json",data:Scribd.CSRF.with_token(n)})},render:function(){return[this.state.facebook_failed?r({className:"fb_fail_message error_msg"},I18n.t("shared.login.facebook_login_button.sorry_we_are_unable_to_log"),t({}),I18n.t("shared.login.facebook_login_button.please_try_again_later")):void 0,this.render_button()]},render_button:function(){return this.common_button({ref:"button",type:"button",className:classNames("facebook",{loading:this.state.loading}),disabled:this.state.loading,onClick:function(t){return function(e){return e.preventDefault(),t.state.loading?void 0:(t.trigger("login:track","signup_lightbox:facebook_btn:click"),t.setState({loading:!0,facebook_failed:!1}),Scribd.facebook||Scribd.Facebook.setup(),Scribd.Facebook.loaded.then(function(){return Scribd.facebook.login(function(e){return e?(null!=e?e.authResponse:void 0)?t.do_login(e.authResponse).then(function(e){return t.setState({loading:!1}),e.success?e.email_missing?t.trigger("login:show_missing_email",e):t.trigger("login:success",t.props.type,e):t.setState({facebook_failed:!0})}):void t.setState({loading:!1,facebook_failed:!0}):void t.setState({loading:!1})})}))}}(this),children:[s({},this.props.label||I18n.t("shared.login.facebook_login_button.sign_in_with_facebook")),s({className:"visually_hidden"}," "+I18n.t("shared.login.facebook_login_button.opens_in_a_new_window"))]})}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{facebook_login_button:{sorry_we_are_unable_to_log:"Sorry, we are unable to log you in via Facebook at this time.",please_try_again_later:"Please try again later.",sign_in_with_facebook:"Sign in with Facebook",opens_in_a_new_window:"opens in a new window"}}}}});


/* app/views/shared/login/forgot_password_lightbox.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s,a,c,l,u,d;u=React.DOM,a=u.input,r=u.h1,o=u.h2,i=u.form,c=u.label,n=u.div,l=u.p,t=u.a,s=u.h3,e=Scribd.R.component_builder("Shared.Login.ForgotPasswordLightbox",{css_class:"autogen_class_views_shared_login_forgot_password_lightbox autogen_class_views_shared_login_base_lightbox",parent:"Shared.Login.BaseLightbox",routes:{forgot_password:"/password/forgot(.:format)"}}),d=React.PropTypes,e({propTypes:{},getInitialState:function(){return{errors:[]}},enclosing_element_type:function(){return this.props.enclosing_element||Scribd.R.Shared.Lightbox},handle_response:function(t){return t.failure_message?(this.setState({errors:[{input:"email",message:t.failure_message}]}),void this.trigger("login:track","signup_lightbox:error:view",{error_type:"invalid_email"})):t.need_login?void this.setState({login_required:!0}):this.setState({success:!0})},componentDidMount:function(){return this.container().on("ajax:success",function(t){return function(e,n){return t.handle_response(n)}}(this)),this.container().on("ajax:error",function(t){return function(){return t.trigger("login:track","signup_lightbox:error:view",{error_type:"server_error"}),t.setState({errors:[{input:"email",message:I18n.t("shared.login.forgot_password_lightbox.we_couldn_t_complete_your_request")}]})}}(this)),this.container().on("ajax:complete",function(t){return function(){return t.setState({loading:!1})}}(this))},componentDidUpdate:function(){var t;return this.state.errors.length?(this.container().focus(),t=this.container().find("[name='"+this.state.errors[0].input+"']"),setTimeout(function(){return function(){return t.focus()}}(this),150)):void 0},render:function(){return[r({id:this.uid("lb_labelledby")},I18n.t("shared.login.forgot_password_lightbox.reset_password")),this.state.success?this.render_success():[o({},I18n.t("shared.login.forgot_password_lightbox.enter_your_email_address_and_we_ll")),this.render_email_form()]]},render_email_form:function(){return i({action:this.url_for("forgot_password"),method:"post",className:"form",ref:"form","data-remote":!0,"data-type":"json",onSubmit:function(t){return function(e){return t.validate_form()?t.setState({loading:!0,errors:[]}):(e.stopPropagation(),e.preventDefault(),!1)}}(this),children:[this.input_row({name:"email",type:"text",className:"input",label:I18n.t("shared.login.forgot_password_lightbox.email")}),this.state.login_required?n({className:"input_row login_required"},l({className:"label_message"},I18n.t("shared.login.forgot_password_lightbox.you_need_to_provide_a_login")),c({},a({type:"text",name:"login",className:"input",placeholder:I18n.t("shared.login.forgot_password_lightbox.login")}))):void 0,n({className:"button_container"},this.common_button({className:"submit_btn"},I18n.t("shared.login.forgot_password_lightbox.submit"))),n({className:"login_alt"},t({href:"#",className:"back_link last_lb_item",onClick:function(t){return function(e){return t.trigger("login:show_login"),e.preventDefault()}}(this)},I18n.t("shared.login.forgot_password_lightbox.back_to_sign_in")))]})},render_success:function(){return[s({},I18n.t("shared.login.forgot_password_lightbox.success")),o({className:"success_message",dangerouslySetInnerHTML:{__html:I18n.t("shared.login.forgot_password_lightbox.we_ve_sent_an_email_to_strong_escape_validated_email_strong",{escape_validated_email:escape(this.validated_email)})}})]},validate_form:function(){var t,e,n;return t=this.container().find("input[name=email]").val().trim(),e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=[],_.isEmpty(t)?n.push({input:"email",message:I18n.t("shared.login.forgot_password_lightbox.please_enter_your_email")}):e.test(t)?this.validated_email=t:n.push({input:"email",message:I18n.t("shared.login.forgot_password_lightbox.that_doesn_t_appear_to_be_a")}),this.setState({errors:n}),!n.length}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{forgot_password_lightbox:{we_couldn_t_complete_your_request:"We couldn't complete your request",reset_password:"Reset Password",enter_your_email_address_and_we_ll:"Enter your email address and we'll send you an email with a link to reset your password.",you_need_to_provide_a_login:"You need to provide a login for this account as well.",login:"Login",submit:"Submit",back_to_sign_in:"Back to Sign In",done:"Done.",check_your_inbox_for_a_link:"Check your inbox for a link to reset your password. (it may have ended up in your spam folder)",show:"Show",hide:"Hide",email:"Email",success:"Success!",we_ve_sent_an_email_to_strong_escape_validated_email_strong:"We've sent an email to <strong>%{escape_validated_email}</strong> with instructions to reset your password (it may take a minute). If it doesn't show up soon, try checking your spam folder.",please_enter_your_email:"Please enter your email",that_doesn_t_appear_to_be_a:"That doesn't appear to be a valid email address. Please try again."}}}}});


/* app/views/shared/login/google_login_button.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s;r=React.DOM,n=r.label,i=r.p,t=r.button,o=r.span,e=Scribd.R.component_builder("Shared.Login.GoogleLoginButton",{css_class:"autogen_class_views_shared_login_google_login_button"}),s=React.PropTypes,window.Scribd.Google={loaded:$.Deferred(),auth2:null,sign_out:function(t){return Scribd.Google.auth2.signOut().then(function(){return"function"==typeof t?t():void 0})}},window.googleOnLoad=function(){return gapi.load("auth2",function(){return Scribd.Google.auth2="development"===Scribd.rails_env?{attachClickHandler:function(){return function(){}}(this)}:gapi.auth2.init({client_id:"491264573595-hs5hu9ijbfl9g6khnkn2retrfr6lcua7.apps.googleusercontent.com",cookiepolicy:"single_host_origin"}),Scribd.Google.loaded.resolve()})},e({propTypes:{label:s.string,login_params:s.object,submit_url:s.string},getInitialState:function(){return{}},do_login:function(t){var e,n,i,r;if(n={},n.token=t,n.signup_source="google_signup",this.props.login_params){i=this.props.login_params;for(e in i)r=i[e],n[e]=r}return this.setState({loading:!0,google_failed:!1}),$.ajax({type:"post",url:"/open_id_connect/login",dataType:"json",data:Scribd.CSRF.with_token(n),success:function(t){return function(e){return e.email_missing?t.trigger("login:show_missing_email",e):t.trigger("login:success",t.props.type,e)}}(this),error:function(t){return function(){return t.setState({loading:!1,google_failed:!0})}}(this)})},componentDidMount:function(){return Scribd.Google.loaded.then(function(t){return function(){var e;return e=t.container().find("#gbtn"),t.container().on("click",".google.flat_btn",function(){return t.trigger("login:track","signup_lightbox:google_btn:click")}),Scribd.Google.auth2.attachClickHandler(e[0],{},function(e){return t.google_user=e,t.do_login(t.google_user.getAuthResponse().id_token)}),function(t){return console.error("google sign in error",JSON.stringify(t))}}}(this))},render:function(){return[this.state.google_failed?i({className:"google_fail_message error_msg"},I18n.t("shared.login.google_login_button.google_sign_in_failed")):void 0,this.render_button()]},render_button:function(){return this.common_button({ref:"button",className:"google",id:"gbtn",loading:this.state.loading,disabled:this.state.loading,children:[o({},this.props.label||I18n.t("shared.login.google_login_button.sign_in_with_google")),o({className:"visually_hidden"}," "+I18n.t("shared.login.google_login_button.opens_in_a_new_window"))]})}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{google_login_button:{google_sign_in_failed:"Google sign in failed",sign_in_with_google:"Sign In with Google",opens_in_a_new_window:"opens in a new window"}}}}});


/* app/views/shared/login/join_lightbox.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s,a,c,l,u;c=React.DOM,s=c.input,t=c.a,n=c.div,l=c.span,r=c.h1,o=c.h2,i=c.form,a=c.label,e=Scribd.R.component_builder("Shared.Login.JoinLightbox",{css_class:"autogen_class_views_shared_login_join_lightbox autogen_class_views_shared_login_base_lightbox",parent:"Shared.Login.BaseLightbox"}),u=React.PropTypes,e({propTypes:{type:u.oneOf(["join","login","have_email"]).isRequired,join_type:u.string,login_params:u.object,email:u.string,join_header_text:u.string,login_header_text:u.string},widget_css_classes:function(t){return t+" lightbox_join_archive"},enclosing_element_type:function(){return this.props.enclosing_element||Scribd.R.Shared.Lightbox},getInitialState:function(){return{show_google_btn:"test"===Scribd.rails_env||"login"===this.props.type||"google_option"===Scribd.nway_test_choice_value("google_sign_on"),errors:[]}},handle_error:function(t){var e,n,i,r,o,s;return n=_.first(t.errors),null!=n?(o=n.msg||I18n.t("shared.login.join_lightbox.we_couldn_t_complete_your_request"),r=n.input_name,i=[],i.push({input:r,message:o}),"email_taken"===o?(e=null!=(null!=(s=n.data)?s.email:void 0)?n.data.email:this.container().find("[name='email_address[email]']").val(),this.trigger("login:track","signup_lightbox:error:view",{error_type:"existing_email"}),void this.trigger("login:show_have_email",e)):(this.trigger("login:track","signup_lightbox:error:view",{error_type:"invalid_"+r}),this.setState({errors:i,loading:!1}))):void 0},componentDidMount:function(){return _.defer(function(t){return function(){return t.trigger("login:track","signup_lightbox:view")}}(this)),this.container().on("ajax:success",function(t){return function(e,n){return n.errors?t.handle_error(n):t.trigger("login:success",t.props.type,n)}}(this)),this.container().on("ajax:error",function(t){return function(){return t.setState({loading:!1,errors:[{input:null,message:I18n.t("shared.login.join_lightbox.we_couldn_t_complete_your_request")}]})}}(this)),this.container().find("input").on("focus",function(){return function(t){return $(t.currentTarget).data("initial_val",$(t.currentTarget).val().trim())}}(this)),this.container().find("input").on("blur",function(t){return function(e){var n;if(!t.state.loading&&(n=$(e.currentTarget).val().trim(),n!==$(e.currentTarget).data("initial_val")))return t.validate($(e.currentTarget).attr("name"))}}(this)),$(window).resize(_.debounce(function(t){return function(){return $(window).width()>450?void 0:t.container().trigger("scribd:lightbox_reshape")}}(this),50))},componentDidUpdate:function(){var t;return this.state.errors.length?(this.container().focus(),t=this.container().find("[name='"+this.state.errors[0].input+"']"),setTimeout(function(){return function(){return t.focus()}}(this),150)):void 0},render:function(){return[this.render_header(),this.render_alt_logins(),function(){switch(this.props.type){case"login":return this.render_login_form();case"join":return this.render_join_form();case"have_email":return this.render_password_form()}}.call(this)]},render_alt_logins:function(){return"have_email"!==this.props.type?[n({className:"facebook_row"},this.render_facebook_button()),this.state.show_google_btn?n({className:"google_row"},this.render_google_button()):void 0,n({className:"break",children:[l({},I18n.t("shared.login.join_lightbox.or_with_email"))]})]:void 0},archive_header:function(){if(this.props.doc_type)switch(this.props.doc_type){case"is_pmp":return I18n.t("shared.login.join_lightbox.sign_in_to_try_scribd_for");case"is_archive":return I18n.t("shared.login.join_lightbox.sign_up_today_for_unlimited_downloads_");case"other":return I18n.t("shared.login.join_lightbox.sign_up_to_download_document_title",{document_title:document.title})}},render_header:function(){var t,e,n,i,s,a;switch(this.props.type){case"login":a=null!=(e=this.props.login_header_text)?e:I18n.t("shared.login.join_lightbox.sign_in_");break;case"join":t="pmp"===this.props.join_type?I18n.t("shared.login.join_lightbox.join_today_and_read_free_for"):"archive"===this.props.join_type?null!=(n=this.archive_header())?n:I18n.t("shared.login.join_lightbox.sign_in_or_join_to_continue"):I18n.t("shared.login.join_lightbox.sign_up_to_start_your_free"),a=null!=(i=this.props.join_header_text)?i:t;break;case"have_email":a=I18n.t("shared.login.join_lightbox.welcome_back"),s=I18n.t("shared.login.join_lightbox.this_email_address_already_has_an")}return[r({id:this.uid("lb_labelledby")},a),"have_email"===this.props.type?o({className:"current_email"},this.props.email):void 0,s?o({className:"sub_title"},s):void 0]},render_password_form:function(){return this.form("password_form",[s({type:"hidden",name:"login_or_email",value:this.props.email}),n({className:"inputs",children:[this.input_row({type:"password",className:"input",name:"login_password",label:I18n.t("shared.login.join_lightbox.password")})]}),n({className:"button_container",children:[this.common_button({type:"submit",className:"submit_btn",ref:"submit_btn"},I18n.t("shared.login.join_lightbox.sign_in")),this.common_button({className:"text_btn forgot_password_btn no_spinner",onClick:function(t){return function(e){return t.trigger("login:track","signup_lightbox:forgot_password:click"),t.trigger("login:show_forgot_password"),e.preventDefault()}}(this)},I18n.t("shared.login.join_lightbox.forgot_password"))]}),n({className:"login_alt",children:[this.common_button({className:"text_btn last_lb_item no_spinner",onClick:function(t){return function(e){return t.trigger("login:show_join"),e.preventDefault()}}(this)},I18n.t("shared.login.join_lightbox.join_with_another_email_address"))]})])},render_join_form:function(){return this.form("join_form",[n({className:"inputs",children:[this.input_row({type:"text",className:"input",name:"word_user[name]",label:I18n.t("shared.login.join_lightbox.name"),maxLength:50}),this.input_row({type:"text",ref:"email_input",className:"input",name:"email_address[email]",label:I18n.t("shared.login.join_lightbox.email")}),this.input_row({type:"password",className:"input",name:"word_user[password]",label:I18n.t("shared.login.join_lightbox.password"),help_text:" "+I18n.t("shared.login.join_lightbox.at_least_6_characters")})]}),a({className:"join_option",children:[s({type:"checkbox",defaultChecked:null!=this.props.optin?this.props.optin:!0,name:"optin",value:"y"}),l({},I18n.t("shared.login.join_lightbox.send_me_updates_from_scribd"))]}),n({className:"button_container",children:[this.common_button({type:"submit",className:"submit_btn"},I18n.t("shared.login.join_lightbox.sign_up"))]}),this.render_disclaimer(),n({className:"login_alt",children:[n({},I18n.t("shared.login.join_lightbox.already_have_an_account")+" ",t({href:"#",className:"last_lb_item",onClick:function(t){return function(e){return t.trigger("login:show_login"),e.preventDefault()}}(this)},I18n.t("shared.login.join_lightbox.sign_in")))]})])},render_login_form:function(){return this.form("login_form",[n({className:"inputs",children:[this.input_row({type:"text",className:"input",name:"login_or_email",label:I18n.t("shared.login.join_lightbox.email")}),this.input_row({type:"password",className:"input",name:"login_password",label:I18n.t("shared.login.join_lightbox.password")})]}),n({className:"form_options",children:[a({className:"remember_me",children:[s({type:"checkbox",name:"rememberme",defaultChecked:!0}),l({className:"label_text"},I18n.t("shared.login.join_lightbox.remember_me"))]})]}),n({className:"button_container",children:[this.common_button({type:"submit",className:"submit_btn"},I18n.t("shared.login.join_lightbox.sign_in"))]}),t({href:"#",className:"forgot_password",onClick:function(t){return function(e){return t.trigger("login:track","signup_lightbox:forgot_password:click"),t.trigger("login:show_forgot_password"),e.preventDefault()}}(this)},I18n.t("shared.login.join_lightbox.forgot_password")),n({className:"login_alt",children:[I18n.t("shared.login.join_lightbox.new_to_scribd")+" ",t({href:"#",className:"join_today_link last_lb_item",onClick:function(t){return function(e){return t.trigger("login:show_join"),e.preventDefault()}}(this)},I18n.t("shared.login.join_lightbox.sign_up"))]})])},form:function(t,e){var n;return n=function(){switch(this.props.type){case"login":return this.url_for("login");case"have_email":return this.url_for("login");default:return this.url_for("login_signup")}}.call(this),i({action:n,ref:"form",method:"post",className:classNames(t,"form"),"data-remote":!0,"data-type":"json",onSubmit:function(t){return function(e){return t.trigger("login:track","signup_lightbox:"+t.props.type+":submit"),t.container().find("input[name*=password]").attr("type","password"),t.validate()?t.setState({loading:!0,errors:[]}):(e.stopPropagation(),e.preventDefault(),!1)}}(this),children:[this.render_login_params(),e]})},render_login_params:function(){var t,e;if(this.props.login_params){e=[];for(t in this.props.login_params)e.push(s({type:"hidden",name:"login_params["+t+"]",value:this.props.login_params[t]}));return e}},validate:function(t){var e;return null==t&&(t=null),this.state.loading?void 0:(e="validate_"+this.props.type,null!=this[e]?this[e](t):(console.info("no method to validate login form of type '"+this.props.type+"'"),!0))},validate_login:function(t){var e,n,i;return null==t&&(t=null),e=this.container().find("input[name=login_or_email]").val().trim(),i=this.container().find("input[name=login_password]").val().trim(),n=t?_.reject(this.state.errors,function(e){return e.input===t}):[],!_.isEmpty(e)||t&&"login_or_email"!==t||n.push({input:"login_or_email",message:I18n.t("shared.login.join_lightbox.please_enter_an_email")}),this.setState({errors:n,loading:!1}),!n.length},validate_join:function(t){var e,n,i,r,o;return null==t&&(t=null),r=this.container().find("input[name='word_user[name]']").val().trim(),e=this.container().find("input[name='email_address[email]']").val().trim(),o=this.container().find("input[name='word_user[password]']").val().trim(),i=t?_.reject(this.state.errors,function(e){return e.input===t}):[],n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,!_.isEmpty(r)||t&&"word_user[name]"!==t||i.push({input:"word_user[name]",message:I18n.t("shared.login.join_lightbox.please_enter_a_name")}),t&&"email_address[email]"!==t||(_.isEmpty(e)?i.push({input:"email_address[email]",message:I18n.t("shared.login.join_lightbox.please_enter_a_valid_email")}):n.test(e)||i.push({input:"email_address[email]",message:I18n.t("shared.login.join_lightbox.that_doesn_t_appear_to_be_a")})),!(_.isEmpty(o)||o.length<6)||t&&"word_user[password]"!==t||i.push({input:"word_user[password]",message:I18n.t("shared.login.join_lightbox.please_enter_a_password_that_is")}),this.setState({errors:i,loading:!1}),!i.length},validate_have_email:function(t){var e,n;return null==t&&(t=null),n=this.container().find("input[name='login_password']").val().trim(),e=t?_.reject(this.state.errors,function(e){return e.input===t}):[],_.isEmpty(n)&&e.push({input:"login_password",message:"Please enter your password to sign in"}),this.setState({errors:e}),!e.length}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{join_lightbox:{we_couldn_t_complete_your_request:"We couldn't complete your request",or:"or",welcome_back:"Welcome back",find_a_book_put_up_your:"Find a book, put up your feet, stay awhile",join_today_and_read_free_for:"Join today and read free for one month",there_s_a_world_of_books_waiting:"There's a world of books waiting for you.",this_email_address_already_has_an:"This email address already has an account. Please enter your password and sign in.",password:"Password",sign_in:"Sign in",forgot_password:"Forgot password?",join_with_another_email_address:"Join with another email address",name:"Name",email_address:"Email Address",send_me_scribd_news_from_time:"Send me Scribd news from time to time",join_now:"Join now",already_a_member:"Already a member?",email_address_or_username:"Email Address or Username",remember_me:"Remember me",not_a_member:"Not a member?",join_today:"Join today",join_today_for_unlimited_downloads_free:"Join today for unlimited downloads free for one month",unlimited_access_to_this_and_millions:"Unlimited access to this and millions of other documents from users from around the world.",or_with_email:"or with email",sign_in_:"Sign In",sign_up_today_for_unlimited_downloads:"Sign up today for unlimited downloads free for one month",sign_up_to_start_your_free:"Sign up to start your free 30 days",email:"Email",at_least_6_characters:"(at least 6 characters)",send_me_updates_from_scribd:"Send me updates from Scribd",sign_up:"Sign Up",already_have_an_account:"Already have an account?",new_to_scribd:"New to Scribd?",please_enter_an_email:"Please enter an email",please_enter_a_name:"Please enter a name",please_enter_a_valid_email:"Please enter a valid email",that_doesn_t_appear_to_be_a:"That doesn't appear to be a valid email address. Please try again.",please_enter_a_password_that_is:"Please enter a password that is at least 6 characters",sign_in_or_join_to_continue:"Sign in or join to continue",sign_in_to_try_scribd_for:"Sign in to try Scribd for free",sign_up_today_for_unlimited_downloads_:"Sign up today for unlimited downloads free for one month.",sign_up_to_download_document_title:"Sign up to download %{document_title}"}}}}});


/* app/views/shared/login/join_archive_lightbox.coffee @ 1492722219 */
(function(){var t,e;t=Scribd.R.component_builder("Shared.Login.JoinArchiveLightbox",{css_class:"autogen_class_views_shared_login_join_archive_lightbox autogen_class_views_shared_login_join_lightbox autogen_class_views_shared_login_base_lightbox",parent:"Shared.Login.JoinLightbox"}),e=React.PropTypes,t({enclosing_element_args:function(t){return t},render:function(){return[this.render_header(),this.render_alt_logins(),this.render_join_form()]}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{join_archive_lightbox:{sign_in_or_join_to_continue:"Sign in or join to continue",sign_in:"Sign in",join_with_email:"Join with email",continue_as_guest:"Continue as Guest",sign_in_to_try_scribd_for:"Sign in to try Scribd for free",sign_in_or_join_to_download:"Sign in or join to download",sign_in_to_read_the_full:"Sign in to read the full version",join_today:"Join Today",sign_up_today_for_unlimited_downloads:"Sign up today for unlimited downloads free for one month.",sign_up_to_download_document_title:"Sign up to download %{document_title}"}}}}});


/* app/views/shared/login/lightboxes.coffee @ 1492722219 */
(function(){var t,e,n,i,r;i=React.DOM,t=i.a,n=i.p,e=Scribd.R.component_builder("Shared.Login.Lightboxes",{css_class:"autogen_class_views_shared_login_lightboxes"}),r=React.PropTypes,e({propTypes:{track_location:r.string,track_page:r.string,initial_view:r.oneOf(["join","login","forgot_password"])},getInitialState:function(){return{view:this.props.initial_view||"join",login_params:$.extend({},this.props.login_params)}},set_login_params:function(t){return this.setState({login_params:t})},widget_css_classes:function(t){return classNames(t,"lightbox_"+this.state.view,"sign_in_container")},get_next_url:function(){var t,e,n;return null!=this.props.next_url?this.props.next_url:(t=window.location.href,Scribd.current_doc&&(null!=(n=Scribd.read_page)?n.epub:void 0)&&!t.match(/#/)&&(e=Scribd.read_page.epub.currentPageOffset(),t=t+"#position="+e),t)},componentDidMount:function(){return $("#overlay").addClass("login_mode"),this.dispatch({"login:success":function(e){return function(n,i,r){return e.trigger("login:track","signup_lightbox:successful_submission:view"),setTimeout(function(){return e.setState({login_type:i,resolved:!0},function(){var n,o,s;return o=e.get_next_url(),null!=o.resolve?(Scribd.Lightbox.close(),o.resolve(i,r)):(e.switch_view("loading"),"#"!==o?(t=document.createElement("a"),t.href=o,n=""+t.hostname+t.pathname+t.search,s=""+window.location.hostname+window.location.pathname+window.location.search,n===s?(window.location=o,window.location.reload()):window.location=o):void 0)})},50)}}(this),"login:show_have_email":function(t){return function(e,n){return t.setState({email:n}),t.switch_view("have_email"),$(".lightbox").focus()}}(this),"login:show_missing_email":function(t){return function(){return t.switch_view("missing_email")}}(this),"login:show_join":function(t){return function(){return t.switch_view("join")}}(this),"login:show_login":function(t){return function(){return t.switch_view("login")}}(this),"login:show_forgot_password":function(t){return function(){return t.switch_view("forgot_password")}}(this),"login:track":function(t){return function(e,n,i){return t.container().track_rats(n,$.extend({loc:t.props.track_location,page:t.props.track_page||Scribd.page_name,type:t.state.view},i))}}(this)}),this.container().on("Scribd:lightbox:closed",function(t){return function(){var e;if(!t.state.resolved)return e=t.get_next_url(),null!=e.reject?e.reject():void 0}}(this))},switch_view:function(t){return this.setState({view:t},function(e){return function(){return e.trigger("login:view_changed",t)}}(this))},render:function(){var t,e;return e=this.state.view,t=function(){switch(this.state.view){case"join":case"login":case"have_email":return Scribd.R.Shared.Login.JoinLightbox;case"forgot_password":return Scribd.R.Shared.Login.ForgotPasswordLightbox;case"missing_email":return Scribd.R.Shared.Login.EmailMissingLightbox;case"loading":return Scribd.R.Shared.Login.LoadingLightbox;default:throw new Error("Invalid view: "+this.state.view)}}.call(this),setTimeout(function(){var t;return null!=(t=Scribd.Lightbox.current_open)?t.container.focus():void 0},100),t(this.extend_props({key:e,ref:"current_lightbox",type:e,email:this.state.email,login_params:this.state.login_params,login_type:this.state.login_type}))}})}).call(this);


/* app/views/shared/login/loading_lightbox.coffee @ 1492722219 */
(function(){var t,e,n,i,r,o,s;o=React.DOM,r=o.label,n=o.h1,i=o.h3,e=o.div,t=Scribd.R.component_builder("Shared.Login.LoadingLightbox",{css_class:"autogen_class_views_shared_login_loading_lightbox"}),s=React.PropTypes,t({widget_css_classes:function(t){return t+" loading_lb"},enclosing_element_type:function(){return this.props.enclosing_element||Scribd.R.Shared.Lightbox},enclosing_element_args:function(t){return t.show_close=!1,t},propTypes:{login_type:s.string.isRequired},label:function(){return I18n.t("join"===this.props.login_type?"shared.login.loading_lightbox.sign_up_successful":"shared.login.loading_lightbox.sign_in_successful")},render:function(){return[n({},this.label()),i({},I18n.t("shared.login.loading_lightbox.now_bringing_you_back")),e({className:"scribd_spinner loader","data-size":30})]}})}).call(this),(Scribd.translations=Scribd.translations||[]).push({en_US:{shared:{login:{loading_lightbox:{sign_up_successful:"Sign Up Successful",sign_in_successful:"Sign In Successful",now_bringing_you_back:"Now bringing you back..."}}}}});


/* :class_inlines, 'spec_javascripts/js_spec', ... @ (none) */
