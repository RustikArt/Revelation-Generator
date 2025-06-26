document.addEventListener('DOMContentLoaded', () => {
    const revelationDisplay = document.getElementById('revelation-display');
    const revelationText = document.getElementById('revelation-text');
    const errorMessage = document.getElementById('error-message');
    const countdownElement = document.getElementById('countdown');
    const getAnotherBtn = document.getElementById('get-another');
    const retryBtn = document.getElementById('retry-btn');

    let countdownTimer;
    let revelationCount = 0;

    // Générateur de révélations uniques et addictives
    function generateUniqueRevelation() {
        const revelationTypes = [
            'philosophical',
            'mystical',
            'humorous',
            'cosmic',
            'personal',
            'absurd',
            'prophetic'
        ];

        const type = revelationTypes[Math.floor(Math.random() * revelationTypes.length)];
        
        switch(type) {
            case 'philosophical':
                return generatePhilosophicalRevelation();
            case 'mystical':
                return generateMysticalRevelation();
            case 'humorous':
                return generateHumorousRevelation();
            case 'cosmic':
                return generateCosmicRevelation();
            case 'personal':
                return generatePersonalRevelation();
            case 'absurd':
                return generateAbsurdRevelation();
            case 'prophetic':
                return generatePropheticRevelation();
            default:
                return generatePhilosophicalRevelation();
        }
    }

    function generatePhilosophicalRevelation() {
        const subjects = [
            "La vérité que vous cherchez",
            "Le sens caché de vos actions",
            "Votre essence profonde",
            "Le mystère de votre existence",
            "La sagesse qui sommeille en vous"
        ];
        
        const verbs = [
            "réside dans",
            "se révèle à travers",
            "s'épanouit dans",
            "trouve son expression dans",
            "se manifeste par"
        ];
        
        const objects = [
            "les silences entre vos pensées",
            "la façon dont vous regardez les nuages",
            "votre manière unique de sourire aux inconnus",
            "les rêves que vous n'osez pas avouer",
            "la musique que vous fredonnez sans vous en rendre compte"
        ];

        const subject = subjects[Math.floor(Math.random() * subjects.length)];
        const verb = verbs[Math.floor(Math.random() * verbs.length)];
        const object = objects[Math.floor(Math.random() * objects.length)];

        return `${subject} ${verb} ${object}.`;
    }

    function generateMysticalRevelation() {
        const elements = [
            "Les étoiles ont aligné votre destin avec celui d'un chat orange qui vit à exactement 847 kilomètres de chez vous.",
            "Votre aura vibre à la fréquence exacte nécessaire pour faire pousser des tournesols géants dans une dimension parallèle.",
            "L'univers a choisi votre rire comme mélodie secrète pour réveiller les dragons endormis sous les océans.",
            "Vos pas créent des ondulations invisibles qui guident les papillons vers leurs destinations cosmiques.",
            "La lune vous a désigné(e) comme gardien(ne) officiel(le) des rêves oubliés de l'humanité."
        ];

        return elements[Math.floor(Math.random() * elements.length)];
    }

    function generateHumorousRevelation() {
        const situations = [
            "Votre chaussette droite complote secrètement avec votre grille-pain pour dominer le monde.",
            "Vous êtes destiné(e) à devenir champion(ne) du monde de cache-cache avec les télécommandes.",
            "Votre superpouvoir caché est de faire disparaître les stylos au moment exact où vous en avez besoin.",
            "Dans une vie antérieure, vous étiez un pingouin très respecté qui donnait des cours de danse à des flamants roses.",
            "Votre mission secrète sur Terre est de tester la résistance des chaises de bureau en tournant dessus."
        ];

        return situations[Math.floor(Math.random() * situations.length)];
    }

    function generateCosmicRevelation() {
        const cosmic = [
            "Votre existence fait vibrer 42 galaxies lointaines dans une harmonie parfaite que seuls les quasars peuvent entendre.",
            "Chaque fois que vous clignez des yeux, vous synchronisez l'orbite de 17 planètes dans la constellation d'Andromède.",
            "Votre empreinte énergétique est utilisée par une civilisation extraterrestre comme code d'accès à leur bibliothèque universelle.",
            "Les trous noirs se forment pour préserver l'écho de votre premier rire, créant des capsules temporelles d'émotion pure.",
            "Votre ADN contient la formule secrète pour créer des aurores boréales sur commande dans n'importe quel système solaire."
        ];

        return cosmic[Math.floor(Math.random() * cosmic.length)];
    }

    function generatePersonalRevelation() {
        const personal = [
            "Votre façon unique de tenir votre tasse de café révèle que vous possédez l'âme d'un explorateur de mondes perdus.",
            "La manière dont vous organisez vos pensées le matin détermine la couleur des couchers de soleil dans votre quartier.",
            "Votre intuition est en réalité un GPS cosmique qui vous guide vers les moments de pure magie quotidienne.",
            "Vos habitudes alimentaires influencent secrètement la croissance des fleurs sauvages dans un rayon de 50 kilomètres.",
            "Votre style de marche unique crée des chemins invisibles que suivent les esprits bienveillants de votre ville."
        ];

        return personal[Math.floor(Math.random() * personal.length)];
    }

    function generateAbsurdRevelation() {
        const absurd = [
            "Vous êtes techniquement propriétaire de 0,000001% de tous les nuages qui passent au-dessus de votre tête un jeudi.",
            "Votre ombre a été élue 'Ombre la Plus Photogénique' par un conseil secret de lampadaires urbains.",
            "Vous possédez le record mondial non-officiel de 'Personne Ayant Pensé le Plus Souvent aux Pandas en Une Semaine'.",
            "Votre respiration génère exactement la quantité d'oxygène nécessaire pour maintenir en vie un bonsaï mystique au Japon.",
            "Vous êtes l'inspiration secrète derrière 73% des mélodies que fredonnent les facteurs du monde entier."
        ];

        return absurd[Math.floor(Math.random() * absurd.length)];
    }

    function generatePropheticRevelation() {
        const prophecies = [
            "Dans exactement 42 jours, vous découvrirez un objet perdu qui changera votre perspective sur les petits bonheurs de la vie.",
            "Votre prochaine conversation avec un inconnu contiendra exactement 7 mots qui résonneront dans votre esprit pendant des années.",
            "Avant la fin de ce mois, vous vivrez un moment de synchronicité si parfait qu'il vous fera sourire pendant une semaine entière.",
            "Votre prochain rêve lucide vous révélera la solution à un problème que vous n'aviez même pas encore identifié.",
            "Dans les 21 prochains jours, vous croiserez le regard d'une personne qui deviendra importante dans votre histoire personnelle."
        ];

        return prophecies[Math.floor(Math.random() * prophecies.length)];
    }

    // Fonction pour afficher la révélation avec animation et compte à rebours
    function showRevelation(text) {
        revelationCount++;
        revelationText.textContent = text;
        revelationDisplay.classList.remove('hidden');
        errorMessage.classList.add('hidden');

        // Démarrer le compte à rebours
        let timeLeft = 15;
        countdownElement.textContent = timeLeft;

        countdownTimer = setInterval(() => {
            timeLeft--;
            countdownElement.textContent = timeLeft;
            
            // Changer la couleur du compte à rebours quand il devient urgent
            if (timeLeft <= 5) {
                countdownElement.style.color = '#ff6b6b';
                countdownElement.style.fontWeight = '700';
                countdownElement.style.animation = 'pulse 0.5s ease-in-out infinite';
            }

            if (timeLeft <= 0) {
                clearInterval(countdownTimer);
                hideRevelation();
            }
        }, 1000);

        // Mettre à jour le texte du bouton selon le nombre de révélations
        if (revelationCount === 1) {
            getAnotherBtn.innerHTML = '<i class="fas fa-redo"></i> J\'en veux une autre ! (0,99€)';
        } else if (revelationCount < 5) {
            getAnotherBtn.innerHTML = '<i class="fas fa-redo"></i> Encore une révélation ! (0,99€)';
        } else {
            getAnotherBtn.innerHTML = '<i class="fas fa-fire"></i> Je suis accro ! Une de plus ! (0,99€)';
        }
    }

    // Fonction pour cacher la révélation
    function hideRevelation() {
        revelationDisplay.style.animation = 'fadeOut 0.5s ease-out forwards';
        setTimeout(() => {
            revelationDisplay.classList.add('hidden');
            revelationDisplay.style.animation = '';
            revelationText.textContent = '';
            countdownElement.style.color = '#feca57';
            countdownElement.style.fontWeight = '700';
            countdownElement.style.animation = '';
        }, 500);
    }

    // Fonction pour afficher un message d'erreur
    function showError() {
        errorMessage.classList.remove('hidden');
        revelationDisplay.classList.add('hidden');
        if (countdownTimer) {
            clearInterval(countdownTimer);
        }
    }

    // Fonction pour créer l'ordre PayPal
    function createPayPalOrder(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.99',
                    currency_code: 'EUR'
                },
                description: `Révélation Unique et Éphémère #${revelationCount + 1}`
            }]
        });
    }

    // Fonction pour gérer l'approbation du paiement
    function onPayPalApprove(data, actions) {
        return actions.order.capture().then(function(details) {
            console.log('Transaction complétée par ' + details.payer.name.given_name);
            
            // Générer et afficher la révélation
            setTimeout(() => {
                const revelation = generateUniqueRevelation();
                showRevelation(revelation);
            }, 500);

            // Ajouter un effet de confettis (optionnel)
            createConfettiEffect();
            
        }).catch(function(error) {
            console.error('Erreur lors de la capture de la transaction:', error);
            showError();
        });
    }

    // Fonction pour créer un effet de confettis
    function createConfettiEffect() {
        const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.animation = 'confettiFall 3s linear forwards';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 50);
        }
    }

    // Ajouter l'animation CSS pour les confettis
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(720deg);
                opacity: 0;
            }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(style);

    // Configuration des boutons PayPal
    if (typeof paypal !== 'undefined') {
        paypal.Buttons({
            style: {
                layout: 'vertical',
                color: 'gold',
                shape: 'pill',
                label: 'pay',
                height: 50
            },
            createOrder: createPayPalOrder,
            onApprove: onPayPalApprove,
            onCancel: function(data) {
                console.log('Paiement annulé par l\'utilisateur.');
            },
            onError: function(err) {
                console.error('Une erreur PayPal est survenue:', err);
                showError();
            }
        }).render('#paypal-button-container');
    } else {
        // Si PayPal n'est pas chargé, afficher un message d'erreur
        document.getElementById('paypal-button-container').innerHTML = 
            '<p style="color: #ff6b6b; text-align: center; font-weight: 600;">Erreur: Veuillez configurer votre Client ID PayPal dans le fichier index.html</p>';
    }

    // Gestionnaire pour le bouton "Obtenir une autre révélation"
    getAnotherBtn.addEventListener('click', () => {
        if (countdownTimer) {
            clearInterval(countdownTimer);
        }
        hideRevelation();
        
        // Simuler un nouveau paiement pour la démo
        // En production, ceci déclencherait un nouveau processus de paiement PayPal
        setTimeout(() => {
            const revelation = generateUniqueRevelation();
            showRevelation(revelation);
            createConfettiEffect();
        }, 1000);
    });

    // Gestionnaire pour le bouton "Réessayer"
    retryBtn.addEventListener('click', () => {
        errorMessage.classList.add('hidden');
        location.reload(); // Recharger la page pour réinitialiser
    });

    // Ajouter des effets sonores (optionnel - nécessite des fichiers audio)
    function playSound(type) {
        // Cette fonction pourrait jouer des sons pour améliorer l'expérience
        // Par exemple: un son mystique à l'apparition de la révélation
        // ou un son de notification pour le compte à rebours
    }

    // Effet de particules au survol des éléments interactifs
    document.querySelectorAll('.feature, .get-another-btn, .retry-btn').forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = '';
        });
    });

    // Analytics simples (optionnel)
    function trackEvent(eventName, data = {}) {
        console.log(`Event: ${eventName}`, data);
        // Ici vous pourriez envoyer des données à Google Analytics ou autre
    }

    // Tracker les événements importants
    document.addEventListener('click', (e) => {
        if (e.target.closest('#paypal-button-container')) {
            trackEvent('paypal_button_clicked');
        }
        if (e.target.closest('#get-another')) {
            trackEvent('get_another_clicked', { revelationCount });
        }
    });

    // Message de bienvenue dans la console pour les curieux
    console.log(`
    🔮 Bienvenue dans le Générateur de Révélations Uniques ! 🔮
    
    Chaque révélation est générée de manière unique et disparaît à jamais.
    Développé avec ❤️ pour créer des moments magiques.
    
    Révélations générées: ${revelationCount}
    `);
});

