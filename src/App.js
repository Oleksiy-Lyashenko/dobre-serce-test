
import {
  ViewPay,
  Pay,
  PageTitle,
  PageSubtitle,
  MainForm,
  ChangeViewFrom,
  Button,
} from './components';

const App = () => {
  return (
    <div className="page">
      <PageTitle>Заповніть форму</PageTitle>

      <ChangeViewFrom />
      <MainForm />

      <PageTitle>Види допомоги</PageTitle>
      <PageSubtitle>Ви можете змінити вид допомоги</PageSubtitle>

      <ViewPay />
      <Pay />

      <Button>Допомогти</Button>
    </div>
  );
};

export default App;
