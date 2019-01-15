import express from 'express';
import apn from 'apn';

const router = express.Router();


function sendPushNotification(req, res) {
    // token devices
    let tokens = ["09876545f6g7df8gdfg9df8g7d65fg4df5g6d78f9gd"];

    let service = new apn.Provider({
      token : {
        key: "./security/APNsAuthKey.p8", // obtained from your developer account
        keyId: "*****", // obtained from your developer account
        teamId: "****" // obtained from your developer account
      },
      production: false
    });

    let note = new apn.Notification({
      expiry: 5000,
      badge: 1,
      sound: "ping.aiff",
      mutableContent: 1,
      alert:  {
        title: "BREAKING NEWS",
        body: "Perú puesto 17 en la Clasificación Mundial!"
      },
      payload: {
        'data':{
          'attachment-url': 'https://pbs.twimg.com/media/C8vNRQOXkAAnJTE.jpg'
        }
      }
    });

    note.topic = "pe.com.orbis.OrbisMobile";

    res.send(`Sending: ${note.compile()} to ${tokens}`);
    service.send(note, tokens).then( result => {
        res.send("sent:", result.sent.length);
        res.send("failed:", result.failed.length);
        res.send(result.failed);
    });

    service.shutdown();
}

function root(req, res) {
  res.render('apn', { title: 'Send Push Notification' });
}

router.get('/', root);
router.post('/', sendPushNotification);



export default router;
