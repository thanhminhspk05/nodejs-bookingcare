import express from 'express';
import homeController from '../controllers/homeController';

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/create-user', homeController.displayCreateUser);
    router.post('/verify-email', homeController.submitInfoAndVerifyEmail);
    router.get('/user-info', homeController.displayUserInfo);
    router.get('/edit-user', homeController.displayEditUser);
    router.post('/edit-success', homeController.editSuccess);
    router.get('/delete-user', homeController.deleteUser);

    // router.post('/post-crud', homeController.postCRUD);
    // router.get('/get-crud', homeController.displayGetCRUD);
    // router.post('/put-crud', homeController.putCRUD);

    return app.use('/', router);
};

module.exports = initWebRoutes;
