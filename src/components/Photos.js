import PhotoCard from './PhotoCard.js';
export default function Photos() {
  return (
    <div className="row">
        <PhotoCard
          src={require('../photo-1.jpg')}
          title="Мамуля ми!"
          bodyText="
            Люба матуся, тебе я вітаю,
            Усього найкращого в світі бажаю.
            Була щоб здорова, завжди посміхалась,
            Щоб сонечко зранку з тобою віталось.
          "
          />
        <PhotoCard
          src={require('../photo-2.jpg')}
          title="тебе!"
          bodyText="
            Бажаю тобі безліч посмішок щирих,
            Вечорів романтичних, світанків щасливих.
            Бажаю натхнення, в роботі наснаги,
            Від рідних і друзів побільше уваги.
        "
        />
        <PhotoCard
          src={require('../photo-4.jpg')}
          title="любимо!"
          bodyText="
            Бажаю тобі, щоб збулись твої мрії,
            В годину тривожну бажаю надії.
            Хай буде життя твоє щастям оздоблене,
            Вітаю матуся тебе з днем народження.
          "
          />
  </div>
  );
}