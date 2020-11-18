'use strict'
const { sendNotificationToClient } = require('../../utils/notify')

class MessageController {
  async getList({ request, response }) {
    //const { name, message } = req.body;
    //const columns = 'name, message';
    //const values = `'${name}', '${message}'`;
    console.log('entrou 1')
    try {
      //const data = await messagesModel.insertWithReturn(columns, values);
      const tokens = ['c4krbTZjyQQcEr_BHbzcPa:APA91bFuIQ-WhlZ2TCdu73dhqhX4cNP9jNZAzERFx884keX4zVg5mX9WSFmkHwk_NvjiaOhEOzpWSl5izm1-3-vO55qRaG1tbct9FRQHey_kwOxclWx-KDTIUG60IQ1eHMSkJ6sraNtn'];
      const notificationData = {
        title: 'New message',
        body: 'meu amigo',
      };
      console.log('entrou 2')
      await sendNotificationToClient(tokens, notificationData);
      console.log('entrou 3')
      response.status(200).json({ messages: 'meu amigo kkkkkkkkkkk' });
    } catch (err) {
      response.status(200).json({ messages: err.stack });
    }
  }
}

module.exports = MessageController
