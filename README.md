# ibm_t_s

This is a client side script to get the audio file as a text format using ibm speach to text api easy to install and use

#Getting Node And npm installed 

Windows

https://phoenixnap.com/kb/install-node-js-npm-on-windows

Ubuntu

https://www.e2enetworks.com/help/how-to-install-nodejs-npm-on-ubuntu/

# Getting IBM credentials

Go to https://cloud.ibm.com/catalog/services/speech-to-text Sign up for a free IBM Cloud account or log in.
Click Create.

Go to https://cloud.ibm.com/resources On the Manage page, click Show Credentials to view your credentials.
Copy the API Key and URL values.

#Getting started

clone this repo to any directory

type npm update in command line


Go to line 5
edit the values in app.js with your ibm API key and URl values

`const speechToText = new SpeechToTextV1({
  authenticator: new IamAuthenticator({
    apikey: 'your_api',
  }),
  url: 'your_api_url',
});`



put the mp3 file in root directory rename the file to w.mp3

now run the below command in terminal or a command line

`node app.js > result.txt`

Once the process is over the converted text will be found in result.txt which is in the same folder where the aplication is unpacked.

Good luck and happy converting.


