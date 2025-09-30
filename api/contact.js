const { Resend } = require('resend');

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Log pour débogage
  console.log('Requête reçue:', req.method);
  console.log('Variables env:', {
    hasApiKey: !!process.env.RESEND_API_KEY,
    contactEmail: process.env.CONTACT_EMAIL
  });

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      console.log('Validation échouée - champs manquants');
      return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation échouée - email invalide:', email);
      return res.status(400).json({ message: 'Email invalide' });
    }

    // Vérifier la clé API
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY manquante');
      return res.status(500).json({ 
        message: 'Configuration serveur incomplète - RESEND_API_KEY manquante' 
      });
    }

    console.log('Initialisation de Resend...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    console.log('Tentative envoi email...');

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'aerabenandrasana@gmail.com',
      subject: `Nouveau message depuis le portfolio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a;">Nouveau message depuis votre portfolio</h2>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #06b6d4;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #64748b; font-size: 14px;">
            Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend détaillée:', error);
      return res.status(500).json({
        message: 'Erreur lors de envoi email',
        details: error.message || 'Erreur inconnue de Resend'
      });
    }

    console.log('Email envoyé avec succès:', data);
    res.status(200).json({ 
      message: 'Message envoyé avec succès',
      id: data?.id || 'unknown'
    });
  } catch (error) {
    console.error('Erreur serveur détaillée:', error);
    res.status(500).json({
      message: 'Erreur serveur',
      details: error.message || 'Erreur inconnue'
    });
  }
};
