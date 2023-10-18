Hey! Voici mon petit projet React! 
C'est une app React avec un serveur Node.js en coulisses. Pour la faire tourner, suis les étapes ci-dessous.

**Avant de commencer**
- Assure-toi d'avoir Node.js sur ta machine.
- T'auras aussi besoin de Docker et Docker Compose. Ils servent à lancer l'app et tout ce qui va avec dans des conteneurs.

**Lancer le bazar**
Récupère le code :
   git clone https://github.com/MelvinBridault/docker-react-app.git
   cd docker-react-app

Lance l'app en mode dev avec Docker :
docker-compose -f docker-compose.dev.yml up --build

Où ça se passe ?

Jette un œil à l'app React ici : http://localhost:8080
Si tu veux voir le serveur Node.js, c'est par là : http://localhost:5050
