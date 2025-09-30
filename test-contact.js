// Script de test pour l'API contact
// À exécuter avec: node test-contact.js

const testData = {
  name: "Test User",
  email: "test@example.com",
  subject: "Test du formulaire",
  message: "Ceci est un message de test pour vérifier que l'API fonctionne."
};

async function testContactAPI() {
  try {
    console.log('Test de l\'API contact...');
    console.log('Données de test:', testData);

    const response = await fetch('http://localhost:5173/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log('Statut:', response.status);
    console.log('Réponse:', result);

    if (response.ok) {
      console.log('✅ Test réussi !');
    } else {
      console.log('❌ Test échoué');
    }
  } catch (error) {
    console.error('Erreur lors du test:', error);
  }
}

testContactAPI();