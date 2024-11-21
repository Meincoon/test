import arrowImg from '../../img/icons/arrow.svg'

function Form() {
  return (
    <form className="form">
      <h2 className="title form__title">Подписка на рассылку</h2>
      <input className="form__inp" type="email" name="email" id="email" placeholder="Email@gmail.com" />
      <button className="form__btn">Подписаться<img className="form__vector" src={arrowImg} alt="" /></button>
    </form>
  );
}

export default Form;
