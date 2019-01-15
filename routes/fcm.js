import express from 'express';
import admin from 'firebase-admin';
import serviceAccount from '../security/urbania.json';

const router = express.Router();

function sendPushNotificationByFcm(req, res) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://notificationfirebasetest.firebaseio.com"
  });

  const registrationToken = "co4DJEHbRVs:APA91bG0o3ewy87YQ0MVDWLvWzDR4zk2Qg4I43p46hmMHArsK15o_G7hFjq0dlGeiXyv8_H5w0xMJhNeo_mp9eRgz3mzNBn0TVFm-SXbHE37pxLVOvE5SZbLclsOJoPHBjbyQ73jkP1d";
  const topic = "news"

  var payload = {
    notification: {
        title: "Weriklandia News",
        body: "$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.",
      },
    apns: {
      payload: {
        aps: {
          alert: {
            title: "Weriklandia News",
            subtitle: "Breaking news",
            body: "$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day.",
          },
          badge: 1,
          content_available: "true",
        },
      },
    },
    token: registrationToken,
    data: {
      "otherName": "Data extra prueba",
      "attachment-url":"https://i.imgur.com/soraFfq.png"
    }
};
  admin.messaging().send(payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}

function root(req, res) {
  res.render('sendPush', { title: 'Send Push Notification' });
}

router.get('/', root);
router.post('/', sendPushNotificationByFcm);

export default router;