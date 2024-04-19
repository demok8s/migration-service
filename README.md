# migration-service

This is the migration service microservice for creating and managing database migrations.

## Installation

To install and run this microservice locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/demok8s/migration-service.git
   ```

2. Navigate into the project directory:
   ```bash
   cd migration-service
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add the following environment variables to the `.env` file:
     ```plaintext
     MONGODB_URI=<your_mongo_db_URL>
     ```

5. Run migrations:
   ```bash
   npm run migrations
   ```

6. Migrations should now be applied to your database.

## Usage

- The service automatically applies migrations to the specified database using the provided environment variables.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Feel free to adjust the instructions and details according to your specific setup and requirements.