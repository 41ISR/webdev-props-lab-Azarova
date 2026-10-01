export const MenuCard = ({title, weight, price, rating, description, image, category}) => {
    return ( <div className="course-card__body">
            <span className="course-card__category">{category}</span>
            <h3 className="course-card__title">{title}</h3>
            <p className="course-card__meta">8 недель · Начальный уровень</p>
            <div className="course-card__footer">
              <span className="course-card__price">15 000 ₽</span>
              <span className="course-card__rating">★ 4.8</span>
            </div>
            <button className="btn btn--primary btn--full">Записаться</button>
          </div>