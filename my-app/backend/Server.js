const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MemberModel = require ('./models/Members')

const app = express();
const port = 3003;
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wellnessII',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(db=>console.log('DB is connected'))
.catch(err=> console.log(err));


app.post('/login', async (req, res) => {
    const { memId, password } = req.body;
    try {
        // Check if the member exists
        const user = await MemberModel.findOne({ memId });
        if (!user) {
            return res.status(404).json({ message: "Member ID not found" });
        }

        // Directly compare the provided password with the stored one
        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid Member ID or password" });
        }

        // If valid, return success with user data
        res.json({ memId: user.memId, role: user.role });
    } catch (error) {
        res.status(500).json({ message: "An error occurred during login" });
    }
});


app.listen(port,()=>{
    console.log('Example app listening on port ${port}');
});