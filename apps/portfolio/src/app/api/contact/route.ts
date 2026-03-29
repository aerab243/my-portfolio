import { NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Le nom doit contenir au moins 2 caractères' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Le message doit contenir au moins 10 caractères' },
        { status: 400 }
      );
    }

    // Log pour le développement
    console.log('📧 Nouveau message de contact:', {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
    });

    // TODO: Implémenter l'envoi réel (Email, Slack, etc.)
    // Exemple avec Resend:
    // await resend.emails.send({
    //   from: 'Portfolio <noreply@votredomaine.com>',
    //   to: ['votre@email.com'],
    //   subject: `Nouveau message de ${name}`,
    //   text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    // });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur API contact:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
