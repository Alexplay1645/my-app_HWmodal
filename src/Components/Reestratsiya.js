import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../App.css';

export function Reestratsiya() {
  return (
    <div className="modal-body">
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Ім’я" className="input" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Електронна адреса" className="input" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control type="password" placeholder="Пароль" className="input" />
        </Form.Group>

        <Button type="submit" className="btn-submit">
          Увійти
        </Button>

        <div className="policy">
          Реєструючись — Ви автоматично погоджуєтесь з політикою конфіденційності та умовами використання
        </div>

        <Button variant="light" className="btn-google">
        <img src="https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png" alt="Google" className="google-icon-img" />
          Авторизуватись через Google
        </Button>
      </Form>
    </div>
  );
}
