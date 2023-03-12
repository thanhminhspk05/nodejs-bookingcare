import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomePage = async (req, res) => {
    return res.render('homepage.ejs');
};

let displayCreateUser = (req, res) => {
    return res.render('createUser.ejs');
};

let submitInfoAndVerifyEmail = async (req, res) => {
    await CRUDService.createNewUser(req.body);
    return res.render('verifyEmail.ejs');
};

let displayUserInfo = async (req, res) => {
    let data = await CRUDService.getAllUsers();
    return res.render('displayUser.ejs', {
        dataTable: data,
    });
};

let displayEditUser = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserInfoById(userId);
        return res.render('editUser.ejs', { user: userData });
    } else {
        return res.send('User not found');
    }
};

let editSuccess = async (req, res) => {
    let data = req.body;
    await CRUDService.updateUserData(data);
    res.send('User has been updated');
};

let deleteUser = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUserById(id);
    }
    return res.send('User has been deleted');
};

module.exports = {
    getHomePage: getHomePage,
    displayCreateUser: displayCreateUser,
    submitInfoAndVerifyEmail: submitInfoAndVerifyEmail,
    displayUserInfo: displayUserInfo,
    displayEditUser: displayEditUser,
    editSuccess: editSuccess,
    deleteUser: deleteUser,
};
