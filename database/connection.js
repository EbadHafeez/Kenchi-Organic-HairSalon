import mongoose from "mongoose"

const db = async () => {
    await mongoose.connect('mongodb+srv://Namrah:Ebadismypassword1@kenchicluster.naraa2h.mongodb.net/Kenchi?retryWrites=true&w=majority')
}

export default db