const notify = (title: string) => {
  if (Notification.permission === "granted") {
    new Notification(`${title}의 기한이 1시간 남았습니다`);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission(function (permission) {
      if (permission === "granted") {
        new Notification(`${title}의 기한이 1시간 남았습니다`);
      }
    });
  }
};

export default notify;
