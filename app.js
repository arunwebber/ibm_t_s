const SpeechToTextV1 = require('ibm-watson/speech-to-text/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
var fs = require('fs');

const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: '5lPQDSBzul2sGFTUUI4Go18DweLCarKetr8UqX-bXXUR',
  }),
  url: 'https://api.eu-gb.speech-to-text.watson.cloud.ibm.com/instances/fa215403-cf5c-47d7-b1b4-b617764fa5c9',
});

var files = ['w.mp3'];
for (var file in files) {
 var params = {
     audio: fs.createReadStream(files[file]),
     contentType: 'audio/mp3',
     timestamps: true,
     wordAlternativesThreshold: 0.9,
     keywords: ['colorado', 'tornado', 'tornadoes'],
     keywordsThreshold: 0.5
  };

speechToText.recognize(params, function (error, transcript) {
 if (error)
      console.log('Error:', error);
 else
  console.log('results:',transcript.result.results[0].alternatives[0].transcript)
  //  console.log(transcript.results[0].alternatives[0].transcript);
  });
 }

