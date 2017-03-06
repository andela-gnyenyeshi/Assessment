import userController from '../controller/usercontroller';

export default function (app) {
  app.get('/api/v1/users', userController.fetchPhpUsers);
}