document.addEventListener('DOMContentLoaded', () => {
  const user = JSON.parse(localStorage.getItem("romu_user"));
  if (!user) return;

  const db = firebase.firestore();
  const container = document.getElementById('notifications-container');

  db.collection("notifications").where("uid", "==", user.uid)
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => {
      container.innerHTML = "";
      snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement('div');
        div.className = "notification-card";
        div.innerHTML = `<p>${data.message}</p><span>${new Date(data.timestamp?.toDate()).toLocaleString()}</span>`;
        container.appendChild(div);
      });
    });
});
