import mongoose from 'mongoose';

class Database {
    constructor() {
        if (!Database.instance) {
            Database.instance = this;
            this.connect();
        }
        return Database.instance;
    }

    async connect() {
        try {
            await mongoose.connect('mongodb://localhost:27017/demo-students', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });

            mongoose.connection.on('connected', () => {
                console.log('Mongoose default connection is open');
            });

            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Connect to MongoDB failure:', error.message);
        }
    }
}

const instance = new Database();
Object.freeze(instance);
export default instance;
