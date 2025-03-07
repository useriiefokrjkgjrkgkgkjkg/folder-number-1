const TelegramBot = require('node-telegram-bot-api');

// Токен вашего бота
const token = '7701333383:AAHwSbJErpxpAYyouyQ-BtqJrEVw6BvJlGY';

// Создаем бота
const bot = new TelegramBot(token, { polling: true });

// URL вашего веб-приложения
const webAppUrl = 'https://folder-number-2.vercel.app/';

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  // Создаем клавиатуру с кнопкой
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: 'Открыть',
          web_app: { url: webAppUrl }
        }
      ]
    ]
  };

  // Отправляем сообщение с клавиатурой
  bot.sendMessage(chatId, 'Телеграмм НФТ рынок где ты сможешь торговать без проблем багов и ошибок', {
    reply_markup: keyboard
  });
});

console.log('Бот запущен!'); 