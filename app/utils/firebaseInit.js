const admin = require('firebase-admin');

const serviceAccount = require(`./chave_firabase.json`);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://testeanime-c0325.firebaseio.com'
});

module.exports = {
  messaging: admin.messaging()
}
