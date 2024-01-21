import subscribeModel from "../models/subscribeModel.js";

export const subsribeController = async (req, res) => {
    try {
        const { email } = req.body;
        if (email.length === 0) {
            return res.send({ message: "Please enter valid email" });
        }
        if (!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))) {
            return res.send({ message: "Please enter valid email" });
        }

        const existingEmail = await subscribeModel.findOne({ email });
        if (!existingEmail) {
            await new subscribeModel({ email }).save();
        }
        res.status(200).send({
            success: true,
            message: "Thank you for subscrbing us",
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'unable to place your request of subscription please try again',
            error
        })
    }
}