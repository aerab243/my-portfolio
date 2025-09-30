// Script de test pour l'API contact en production
const testData = {
  name: "Test Production",
  email: "test@production.com",
  subject: "Test API en production",
  message: "Ceci est un test de l'API contact déployée sur Vercel avec Resend."
};

async function testProductionAPI() {
  try {
    console.log('🚀 Test de l\'API contact en PRODUCTION...');
    console.log('📤 Données de test:', testData);
    console.log('🌐 URL: https://my-portfolio-knhizceun-arcan7s-projects.vercel.app/api/contact');

    const response = await fetch('https://my-portfolio-knhizceun-arcan7s-projects.vercel.app/api/contact', {
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
      console.log('✅ SUCCÈS: L\'email a été envoyé en PRODUCTION !');
      console.log('📧 Vérifiez votre boîte email: aerabenandrasana@gmail.com');
    } else {
      console.log('❌ ÉCHEC: Erreur lors de l\'envoi');
      if (result.details) {
        console.log('🔍 Détails de l\'erreur:', result.details);
      }
    }
  } catch (error) {
    console.error('💥 Erreur de réseau:', error.message);
  }
}

// Exécuter le test
testProductionAPI();