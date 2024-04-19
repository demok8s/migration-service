// migration.js

const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Connect to MongoDB using environment variables
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define schema for the user collection
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: { type: String, unique: true }, // Ensure email is unique
});

// Define schema for the blog collection
const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    user_id: Number, // Simple integer to represent the user who created the blog
});

// Define schema for the comment collection
const commentSchema = new mongoose.Schema({
    comment: String,
    user_id: Number, // Simple integer to represent the user who commented
    blog_id: Number, // Simple integer to represent the blog on which the comment was made
});

// Create User model
const User = mongoose.model('User', userSchema);

// Create Blog model
const Blog = mongoose.model('Blog', blogSchema);

// Create Comment model
const Comment = mongoose.model('Comment', commentSchema);

// Function to run migrations
async function runMigrations() {
    try {
        // Drop existing User, Blog, and Comment collections to start fresh
        await User.deleteMany();
        await Blog.deleteMany();
        await Comment.deleteMany();

        // Create users with empty data
        await User.create([
            { first_name: '', last_name: '', password: '', email: '' },
            // Add more users if needed
        ]);

        // Create blogs with empty data
        await Blog.create([
            { title: '', content: '', user_id: 1 }, // user_id is a placeholder here, replace with actual user ids
            // Add more blogs if needed
        ]);

        // Create comments with empty data
        await Comment.create([
            { comment: '', user_id: 1, blog_id: 1 }, // user_id and blog_id are placeholders, replace with actual ids
            // Add more comments if needed
        ]);

        console.log('Migration completed successfully!');
        process.exit(0); // Exit process after migration is done
    } catch (error) {
        console.error('Error during migration:', error);
        process.exit(1); // Exit process with error code
    }
}

// Run migrations when script is executed directly
if (require.main === module) {
    runMigrations();
}

module.exports = { runMigrations };
