const midtransClient = require("midtrans-client");
const { Order,Trip } = require("../models");

class Payment {
  static async initiateMidtransTrx(req, res, next) {
    try {
      const snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: "SB-Mid-server-CJYxjvKrjIpSbFKV-HMx2Y-y", // better di env
      });

      const {tripId} = req.params
      const orderId = Math.random()
    //   console.log(orderId);
      const trips = await Trip.findByPk(tripId)
    //   console.log(trips);
    //   const {orderId} = req.body
      console.log(orderId,"<<<<<<<<<<1");
      const amount = trips.price;
      let parameter = {
        //data detail order
        transaction_details: {
          order_id: orderId,
          gross_amount: amount,
        },
        //data jenis pembayaran
        credit_card: {
          secure: true,
        },
        //ini adalah data detail customer
        customer_details: {
          email: req.loginInfo.userId.email,
        },
      };

      //2 create transaction in midtrans
      const transaction = await snap.createTransaction(parameter);
      console.log(transaction, "<<<<<<<<<<<2");
      let transactionToken = transaction?.token;
      // console.log(transactionToken);
    //   console.log(req.loginInfo);
      await Order.create({
        orderId,
        amount,
        UserId: req.loginInfo.userId,
        TripId:tripId,
        orderStatus:"pending"
        //simpan transaction tokennya
      });
      // create order in our database
      //   console.log("transactionToken:", transactionToken);

      res.json({ message: "Order created", transactionToken });
    } catch (error) {
      next(error);
    }
  }
//   static async updateOrderStatus(req, res, next) {
//     try {
//         const { orderId } = req.body
//         // cari order bedasarkan order id
//         const order = await Order.findOne({
//             where: {
//                 orderId
//             }
//         })

//         if (!order) throw { name: "NotFound" }

//         // abis itu check midtrans status ordernya
//         const base64Key = Buffer.from("SB-Mid-server-CJYxjvKrjIpSbFKV-HMx2Y-y").toString('base64')
//         const { data } = await axios.get(`https://api.sandbox.midtrans.com/v2/${orderId}/status`, {
//             headers: {
//                 Authorization: `Basic ${base64Key}`
//             }
//         })

//         if (+data.status_code !== 200) {
//             throw { name: "BadRequest" }
//         }

//         if (data.transaction_status !== 'capture') {
//             throw { name: "BadRequest" }
//         }
//         // update order statusnya jadi paid
//         await order.update({
//             status: 'paid',
//             // paidDate: new Date()
//         })

//         res.status(200).json({
//             message: 'Payment success!'
//         })
//     } catch (err) {
//         console.log(err);
//         next(err)
//     }
// }
}

module.exports = Payment;
