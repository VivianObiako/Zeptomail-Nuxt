self.addEventListener('push', function (e) {
  data = e.data.json();
  var options = {
    body: data.notification.body,
    icon: data.notification.icon,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
  };
  e.waitUntil(
    self.registration.showNotification(data.notification.title, options)
  );
});
