namespace MyFitPal.Functions
{
    public class DatabaseAccessLayer
    {
        private readonly IConfiguration _configuration;

        public DatabaseAccessLayer(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GetConnectionString()
        {
            string connectionString = _configuration.GetConnectionString("MyDatabaseConnection");
            Console.WriteLine(connectionString);
            return connectionString;
        }
    }
}
