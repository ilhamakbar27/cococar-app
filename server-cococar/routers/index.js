const FrontController = require("../controller/frontController");
const Payment = require("../controller/payment");
const Authentication = require("../middlewares/auth");
const { isDriverAuthorization } = require("../middlewares/authorization");

const router = require("express").Router();

router.post("/register", FrontController.signup);
router.post("/login", FrontController.login);
router.post("/google-login", FrontController.googleLogin)
router.use(Authentication);
router.get('/users', FrontController.showUsers)
//initiate order
router.get('/payment/midtrans/initiate/:tripId', Payment.initiateMidtransTrx)
// router.patch('/payment/status', Payment.updateOrderStatus)
router.post("/add-trip", isDriverAuthorization, FrontController.addTrip);
router.get("/trip", FrontController.showTrips);
router.get("/trip/:id", FrontController.showTripsById);
router.put("/trip:id", isDriverAuthorization);
router.delete("/trip:id", isDriverAuthorization);

module.exports = router;
