const { messaging } = require('./firebaseInit');

module.exports = {
  sendNotificationToClient: async (tokens, data) => {

    const response = await messaging.sendMulticast({ tokens, data })

    const successes = response.responses.filter(r => r.success === true)
      .length;
    const failures = response.responses.filter(r => r.success === false)
      .length;
    console.log(
      'Notifications sent:',
      `${successes} successful, ${failures} failed`
    );

    /* messaging
      .sendMulticast({ tokens, data })
      .then(response => {
        const successes = response.responses.filter(r => r.success === true)
          .length;
        const failures = response.responses.filter(r => r.success === false)
          .length;
        console.log(
          'Notifications sent:',
          `${successes} successful, ${failures} failed`
        );
      })
      .catch(error => {
        console.log('Error sending message:', error);
      }); */
  }
}
