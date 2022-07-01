const connect = require("../connect/connect")
connect();
const msg = require("../model/msg")
export default async function upload(req, res) {
    if (req.method == "POST") {
        try {
            // console.log(req.body)
            const msgData = req.body;
            const savedPost = new msg({
                name: msgData.name,
                email: msgData.email,
                message: msgData.message,
            })
            const responseData = await savedPost.save();
            console.log(responseData)
            // console.log(responseData)
            res.json({ success: "success", responseData })

        } catch (error) {
            res.json({ success: "unsuccessfull" })
        }
    }
}