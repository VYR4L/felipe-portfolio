import axios from 'axios';

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const sendContactMessage = async (contactData: ContactData) => {
  try {
    const url = "https://formsubmit.co/ajax/fkz.zanatt@gmail.com";
    const formData = new FormData();

    Object.entries(contactData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    formData.append('_captcha', 'false');
    formData.append('_template', 'box');
    formData.append('_subject', `Nova mensagem de contato: ${contactData.subject}`);

    const response = await axios.post(url, formData, {
      headers: { 'Accept': 'application/json' }
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error);
    throw error;
  }
};