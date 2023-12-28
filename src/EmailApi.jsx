/*** EmailApi.jsx ***/

import emailjs from '@emailjs/browser';

/** It is ok to expose emailjs's service IDs / public key because it only allows for 
 ** emails using predefined templates.
 **
 ** - https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
 **
 **/
const EMAIL_SERVICE_CONFIG = {
  'SERVICE_ID': 'service_qjmf49n',
  'NEW_MESSAGE_TEMPLATE_ID': 'template_03c550z',
  'NEW_SIGNUP_TEMPLATE_ID': 'template_f7vwgs1',
  'PUBLIC_KEY': '5oXcSvd3IsWhOBaD7'
}

function send_email(templateName, templateParams, onSuccess, onFailure)
{
    function errorCallback(error) {
        onFailure();
    }

    function successCallback(response) {
        onSuccess();
    }

    try {
        emailjs.send(EMAIL_SERVICE_CONFIG.SERVICE_ID, templateName, templateParams, EMAIL_SERVICE_CONFIG.PUBLIC_KEY)
               .then(successCallback, errorCallback);
    } catch (error) {
        errorCallback(error);
    }
}

function new_message(contactInfo, onSuccess, onFailure) 
{
  send_email(EMAIL_SERVICE_CONFIG.NEW_MESSAGE_TEMPLATE_ID, contactInfo.to_object(), onSuccess, onFailure);
}

function new_tutoring_signup(signupInfo, onSuccess, onFailure) 
{
  send_email(EMAIL_SERVICE_CONFIG.NEW_SIGNUP_TEMPLATE_ID, signupInfo.to_object(), onSuccess, onFailure);
}

const EmailApi = {
  'new_message': new_message,
  'new_tutoring_signup': new_tutoring_signup
}

export default EmailApi;
