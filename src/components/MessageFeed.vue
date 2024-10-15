<template>
    <div class="message-feed">
      <div v-for="(message, index) in displayedMessages" :key="index" class="message">
        <h4>
          <a :href="message.authorUrl">{{ message.authorName }}</a> - {{ formatDate(message.date) }}
        </h4>
        <p v-html="getColoredContent(message.content, message.contentPostTones)" />
        <hr />
      </div>
      <button @click="loadMoreMessages" v-if="!allMessagesLoaded">Загрузить ещё</button>
    </div>
  </template>
  
  <script>
  import { getMonthName } from '@/utils/month.js';
  
  export default {
    data() {
      return {
        messages: [],
        displayedMessages: [],
        allMessagesLoaded: false,
        messagesPerPage: 10,
        currentPage: 1,
      };
    },
    async created() {
      await this.loadMessages();
      this.displayedMessages = this.messages.slice(0, this.messagesPerPage);
    },
    methods: {
      async loadMessages() {
        const response = await fetch("http://localhost:3000/messages");
        this.messages = await response.json();
      },
      // Загрузка сообщений
      loadMoreMessages() {
        const nextMessages = this.messages.slice(
          this.currentPage * this.messagesPerPage,
          (this.currentPage + 1) * this.messagesPerPage
        );
        this.displayedMessages = [...this.displayedMessages, ...nextMessages];
        this.currentPage++;
        if (this.displayedMessages.length >= this.messages.length) {
          this.allMessagesLoaded = true;
        }
      },
      // Вставка градиента
      getColoredContent(content, tones) {
        let segments = [];
        let lastIndex = 0;
  
        tones.forEach(tone => {
          const start = tone.position;
          const length = tone.length;
          const toneValue = tone.tone;
          const color = this.getColorByTone(toneValue);
  
          if (lastIndex < start) {
            segments.push(content.slice(lastIndex, start));
          }
  
          const coloredText = `<span style="color: ${color}">${content.slice(start, start + length)}</span>`;
          segments.push(coloredText);
  
          lastIndex = start + length;
        });
  
        if (lastIndex < content.length) {
          segments.push(content.slice(lastIndex));
        }
  
        return segments.join('');
      },
      // Градиент
      getColorByTone(tone) {
        if (tone === 0) return "yellow";
        if (tone < 0) return `rgba(255, 0, 0, ${Math.abs(tone)})`;
        return `rgba(0, 255, 0, ${tone})`;
      },
      // Формирование даты
      formatDate(date) {
        const dateObj = new Date(date);

        const hours = String(dateObj.getUTCHours()).padStart(2, '0');
        const minutes = String(dateObj.getUTCMinutes()).padStart(2, '0');
        const day = String(dateObj.getUTCDate()).padStart(2, '0');
        const month = getMonthName(dateObj.getUTCMonth() + 1);
        const year = dateObj.getUTCFullYear();
  
        return `${hours}:${minutes}, ${day} ${month} ${year}`;
      },
    },
  };
  </script>
  
  <style scoped>
  a {
    text-decoration: none;
    cursor: pointer;
    color: purple;
  }
  p,
  h4 {
    color: white;
  }
  .message-feed {
    width: 600px;
    margin: 0 auto;
  }
  .message {
    margin-bottom: 25px;
  }
  button {
    margin: 20px auto;
    display: block;
    border: none;
    border-radius: 10px;
    text-decoration: none;
    color: white;
    background: #0B63F6;
    box-shadow: 0 5px 0 #003CC5;
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
  button:hover {
    background: #003CC5;
    box-shadow: none;
    position: relative;
    top: 5px;
    cursor: pointer;
  }
  </style>
  