# Лента сообщений

## Команды для запуска

```
npm install
npm run serve-json (в одном терминале)
npm run serve (в другом терминале)
```

### Описание

Проект показывает сообщения по json файлу формата:

```
{
              "date": "1999-08-31T23:55:22Z",
              "authorName": "Николай Носов",
              "authorUrl": "http://lib.ru/NOSOW/nezn1.txt",
              "content": "Ниф-Ниф решил, что проще и скорее всего смастерить дом из соломы. Ни с кем не посоветовавшись, он так и сделал. Уже к вечеру его хижина была готова. Ниф-Ниф положил на крышу последнюю соломинку и, очень довольный своим домиком, весело запел:",
              "contentPostTones": [
                {
                  "position": 0,
                  "tone": -1,
                  "length": 7
                },
                {
                  "position": 58,
                  "tone": -1,
                  "length": 6
                },
                {
                  "position": 149,
                  "tone": 1,
                  "length": 7
                },
                {
                  "position": 228,
                  "tone": 1,
                  "length": 12
                }
              ]
            },
            {
              "date": "1697-08-31T23:55:22Z",
              "authorName": "Шарль Перро",
              "authorUrl": "https://dlya-detey.com/skazki/sharlya-perro/112-krasnaya-shapochka.html",
              "content": "К счастью, мимо проходил лесник. Он уже издали заметил, что случилось что-то неладное: двери домика были распахнуты настежь, и оттуда доносился громкий храп. Лесник снял с плеча двустволку и подкрался к окну. Он чуть не вскрикнул, увидев развалившегося на бабушкиной кровати волка с вздувшимся брюхом. Не раздумывая, лесник вбежал в дом, выхватил из-за пояса охотничий нож и мгновенно распорол волку брюхо. Оттуда выскочила Красная Шапочка, а за ней и бабушка. Ох, как темно было в брюхе у волка! Страшно даже подумать, что бы было, не приди храбрый и находчивый лесник вовремя.",
              "contentPostTones": [
                {
                  "position": 0,
                  "tone": 0,
                  "length": 578
                }
              ]
            },
```

Где поле contentPostTones, показывает символы которые нужно закрасить по градиенту где (-1: красный, 0: желтый, 1 : зеленый)
