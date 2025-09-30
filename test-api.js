// Script de test pour l'API contact
const testData = {
  name: "Test Utilisateur",
  email: "test@example.com",
  subject: "Test du formulaire de contact",
  message: "Ceci est un message de test pour vérifier que l'API contact fonctionne correctement avec Resend."
};

async function testContactAPI() {
  try {
    console.log('🚀 Test de l\'API contact...');
    console.log('📤 Données de test:', testData);
    console.log('🌐 URL:', 'http://localhost:5173/api/contact');

    const response = await fetch('http://localhost:5173/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Statut HTTP:', response.status);

    const result = await response.json();
    console.log('📨 Réponse:', result);

    if (response.ok) {
      console.log('✅ SUCCÈS: L\'email a été envoyé !');
      console.log('📧 Vérifiez votre boîte email:', process.env.CONTACT_EMAIL || 'ag.rabenandrasana@example.com');
    } else {
      console.log('❌ ÉCHEC: Erreur lors de l\'envoi');
      if (result.details) {
        console.log('🔍 Détails de l\'erreur:', result.details);
      }
    }
  } catch (error) {
    console.error('💥 Erreur de réseau:', error.message);
    console.log('💡 Conseil: Vérifiez que le serveur Vercel fonctionne sur le port 5173');
  }
}

// Exécuter le test
testContactAPI();