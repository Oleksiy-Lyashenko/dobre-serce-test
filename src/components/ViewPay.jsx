import SvgSelector from './SvgSelector';

const ViewPay = () => {
  return (
    <div className="card-block">
      <div className="card-block__view">
        <SvgSelector id="svg-hand" text="Зробити" />
        <SvgSelector id="svg-wallet" text="Фінансова допомога" />
        <SvgSelector id="svg-clothes" text="Матеріальна допомога" />
        <SvgSelector id="svg-heart" text="Волонтерство" />
      </div>
    </div>
  );
};

export default ViewPay;
