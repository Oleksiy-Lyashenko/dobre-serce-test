import React from 'react';
import Input from './components/Input';
// import hand from './assets/hand-right-outline_1.svg';
import SvgSelector from './components/SvgSelector';

const App = () => {
  return (
    <div className="page">
      <h1 className="page__title">Заповніть форму</h1>

      <div className="page__handle">
        <span className="page__handle__text page__handle__text--active">Фіз. особа</span>

        <span className="page__handle__text">Юр. особа</span>
      </div>

      <div className="block-form">
        <div className="block">
          <div className="block__double">
            <Input name="Ім'я" type="text" />
            <Input name="Прізвище" type="text" />
          </div>
          <Input name="Назва компанії, організації" type="text" />
          <Input name="Email-адрес" type="email" />
          <Input name="Номер телефону" type="phone" />
        </div>

        <div className="block">
          <Input name="Країна" type="text" />
          <div className="block__double" type="text">
            <Input name="Місто" type="text" />
            <Input name="Штат, район" type="text" />
          </div>
          <Input name="Адресса" type="text" />
          <Input name="Поштовий індекс" type="text" />
        </div>
      </div>

      <h1 className="page__title">Види допомоги</h1>

      <h4 className="page__subtitle">Ви можете змінити вид допомоги</h4>

      <div className="card-block">
        <div className="card-block__view">
          <SvgSelector id="svg-hand" text="Зробити" />
          <SvgSelector id="svg-wallet" text="Фінансова допомога" />
          <SvgSelector id="svg-clothes" text="Матеріальна допомога" />
          <SvgSelector id="svg-heart" text="Волонтерство" />
        </div>
      </div>

      <div className="pay">
        <div className="pay__view">
          <span className="pay__title">Спосіб оплати</span>

          <div className="pay__box">
            <SvgSelector id="svg-visa" text="Карта Visa/MasterCard" />
            <SvgSelector id="svg-privat" text="Приват24" />
            <SvgSelector id="svg-terminal" text="Термінали України" />
            <SvgSelector id="svg-webmoney" text="Webmoney" />
            <SvgSelector id="svg-paypal" text="PayPal" />
          </div>
        </div>

        <div className="pay__form">
          <span className="pay__title">Введіть наступні дані</span>

          <div className='pay__card'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
