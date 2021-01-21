const { getUserById, createUser } = require("../models/user");
module.exports = async function (req, res, next) {
    const currentUser = await getUserById(req.user.sub);
    console.log(req.user, "checkuserindb");
    if (!currentUser) {
        await createUser({
            userId: req.user.sub,
            email: req.user['https://vbi-ui.netlify.app/email'],
            name: req.user['https://vbi-ui.netlify.app/name']
        })
    }
    next();
}