
using Microsoft.EntityFrameworkCore;
using MyFitPal.Models;


namespace MyFitPal.Utility
{
    public class EFDataContext : DbContext
    {
        public EFDataContext(DbContextOptions<EFDataContext> options)
              : base(options){}
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //config primary key(User)
            modelBuilder.Entity<UserModel>().HasKey(s => s.UserId);
        }
        public DbSet<UserModel> Users { get; set; }
      
 
    }
}
