const checkAuth = (req, res, next) => {
    const isAdmin = true;
    if (isAdmin) {
        next()
    } else {
        console.log("YOU OUT");
    }
}
export default checkAuth;