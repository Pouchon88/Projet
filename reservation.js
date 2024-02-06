function makeReservation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Vous pouvez ajouter ici la logique pour envoyer la réservation au serveur
    // ou simplement afficher les détails de la réservation dans la console
    console.log('Réservation confirmée :');
    console.log('Date :', date);
    console.log('Heure :', time);
    console.log('Nombre de convives :', guests);

    // Afficher une notification
    showNotification('Réservation confirmée ! Merci.');

    // Vous pouvez également rediriger l'utilisateur vers une page de confirmation
    // window.location.href = 'confirmation.html';
}

// script.js

function makeReservation() {
    // Votre logique de réservation ici...

    // Affichage de la notification
    if ('Notification' in window) {
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification('Réservation confirmée', {
                    body: 'Votre réservation a été effectuée avec succès. Nous avons hâte de vous accueillir!',
                    icon: 'images/cafe.png' // Remplacez par le chemin de votre icône
                });
            }
        });
    }
}
// script.js

function validateReservation() {
    // Récupère la date actuelle
    var currentDate = new Date();
    
    // Récupère la date choisie par l'utilisateur
    var chosenDate = new Date(document.getElementById('reservationDate').value);

    // Vérifie si la date choisie n'est pas antérieure à la date actuelle
    if (chosenDate < currentDate) {
        // Affiche un message d'erreur
        alert("La date de réservation ne peut pas être antérieure à la date actuelle.");
        return false; // Empêche l'envoi du formulaire
    }

    // Autres validations et logique de réservation ici...

    return true; // Permet l'envoi du formulaire si tout est valide
}

