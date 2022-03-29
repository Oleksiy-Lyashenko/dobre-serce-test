import Input from './Input';

const MainForm = () => {
  return (
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
  );
};

export default MainForm;