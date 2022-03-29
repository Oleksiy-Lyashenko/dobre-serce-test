import SvgSelector from './SvgSelector';

const Pay = () => {
  return (
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

        <div className="pay__card">
          <div className="pay__number">
            <span className="pay__subtitle">Номер карти</span>

            <div className="pay__number__block">
              <input type="text" className="pay__input" />
              <input type="text" className="pay__input" />
              <input type="text" className="pay__input" />
              <input type="text" className="pay__input" />
            </div>
          </div>

          <div className="pay__sec-number">
            <div className="pay__sec-number__block">
              <span className="pay__subtitle">Термін дії</span>

              <input type="text" className="pay__input pay__input--sec-number" />
            </div>

            <div className="pay__sec-number__block">
              <span className="pay__subtitle">CVC/CVV</span>

              <input type="text" className="pay__input pay__input--sec-number" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
