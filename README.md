# Разработать SPA Таблицу, типа как Excel в браузере.

## 1. 4 фиксированных колонки, не надо создавать новые или менять размер.

    	1. Четвёртая колонка - Дата (a)
    	2. Первая колонка - Название (b)
    		а. Сортировка Названий (по алфавиту)
    	3.Вторая колонка - Количество (c)
    		а. Сортировка по Количеству(от маленького к большому и наоборот)
    	4. Третья колонка - Расстояние (d)
    		а. Сортировка по расстоянию (дальше ближе)

Возникли вопрос с типом данных в таблице psql для расстояния. Для даты выбрал TIMESTAMP, для названий TEXT, для количества INTEGER. Расстояние хочется сделать в километрах, но вряд ли в таблицу будут заносить широту и долготу, поэтому использую числа с плавающей точкой, на случай, если данные не будут округлять.

## 2. Фильтрация: два выпадающих списка и текстовое поле.

    У меня фильтация сложнее примера из bootstrap: есть возможность ограничится поиском в конкретном столбце и выбрать тип сравнения, в примере всегда содержит

    1. В первом выпадающем списке - выбор колонки (Дата, сортировка, количество, расстояние)
    2. Опции для фильтрации значения из поля ввода во втором выпадающем списке :
      a. Равно =
      b. Больше >
      c. Меньше <
      d. Содержит (вообще есть такое значение или нет?) По умолчанию.
    3. Поле для ввода информации, с которой будет проводиться сравнения выбранной опцией (filter(5>)) <<<--- показать только строки из выбранной колонкой с значениями в этой колонке меньше пяти

## 3. Pagination для таблицы. Как в примере bootstrap ниже.

    	- При нажатии на номер страницы, без перезагрузки меняются данные в таблице.

[Ссылка на таблицу Bootstrap](https://mdbootstrap.com/docs/b4/jquery/tables/pagination/)

## 4. Нужна база данных, после непродолжительного поиска решил не мудрить и остановится на предложенном Postgres.

<br>
<br>
<br>
<br>

> # Что мне понравилось в примере, что я хочу добавить, если будет время.

Я только что нашёл отличный пример того, что мне нужно получить на Bootstrap'e, я даже не буду искать дальше ни дизайн, ни такую же таблицу на Реакте, я буду пользоваться этим примером

    Мне нравиться:
    1. Опция выбрать количество показываемых строк в таблице: 10, 50, 100.
    2. Поиск фильтрует таблицу динамически, от одного символа и больше, нет необходимости нажимать какие-то кнопки
    3. Пагинация работает без перезагрузки
    4. Фильтрация без перезагрузки
    5. В колонках показываются стрелочкой как сейчас рассортированы строки, у неактивного столбика серые, в активном черная стрелочка вниз или вверх, в зависимости от того, в какую сторону сортируется.
    6. Под таблицей string с текстом показывает какие строки таблицы сейчас видны сколько всего строк в таблице
    Пример:
    Showing 1 to 10 of 54 entries (filtered from 57 total entries)
    7. Когда включен фильтр, string с текстом показывает сколько сейчас строк на экране и их нумерацию.
    8. При нажатии на пагинацию меняется string под таблицей и показывает номера строк с x по y
    9. В самом низу таблицы продублированы названия колонок, чтобы я не терялся в них.
    10. У пагинации есть кнопки назад вперёд

    Короче я распишу на скриншоте

https://www.markdownguide.org/cheat-sheet/#basic-syntax

Заметки на полях
Вчера полдня потратил на настройку Postgres, react, express и webpack
Сегодня узнал про аббривиатуру PERN, нашёл большой курс на freecodecamp.com, разочарован, что вчера не попытался поискать больше информации, а начал с статьи на LogRocket, которой оказалось недостаточно.
Прежде чем бросаться с головой в программирование, нужно внимательно прочесть статью и подумать, достаточно ли информации она даёт или мне нужно искать дальше.
Изначально я использовал create-react-app, но быстро понял, что мне нужно конфигурировать свой сервер и я хочу, чтобы у меня один и тот же сервер отвечал за сборку и данные. Это усложнило мою задачу в разы, но я пока не теряю надежды разобраться.
Если до 17-18 часов мне не станет понятнее и я не смогу настроить сервер, то стоит вернуться к способу с двумя серверами: express, отвечающий за данные и react-dev server ну или промежуточный вариант, чтобы не было так стыдно - два сервера на express, подправить конфигурацию.
Мысли сбивчивые, я получил сильный удар по самолюбию, в очередной раз поспешил и потратил много времени зря.
Единственное, что утешает - я уже повозился со всеми частями стака, я не с нуля начинаю, какие-то знания в голове уже есть.

# PERN

## Postgresql

\? - help c основными командами
\l - \list - все базы данных
\с - подключится к базе данных, когда уже вошёл в psql
\d названиетаблицы - покажет название колонок и их тип
