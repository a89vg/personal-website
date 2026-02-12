import { Router } from 'express';
import { validateContact } from '../middleware/validation.js';
import { sendContactEmail } from '../services/emailService.js';

const router = Router();

router.post('/contact', validateContact, async (req, res) => {
  try {
    await sendContactEmail(req.body);
    res.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.',
    });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.',
    });
  }
});

export default router;
