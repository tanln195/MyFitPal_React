
using Microsoft.Extensions.FileProviders;
using MyFitPal.Functions;

namespace MyFitPal
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
            var builder = WebApplication.CreateBuilder(args);
            var startup = new Startup(builder.Configuration); // My custom startup class.

            // Add services to the container.

            builder.Services.AddControllersWithViews();
            startup.ConfigureServices(builder.Services); // Add services to the container.
            
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  policy =>
                                  {
                                      policy.WithOrigins("https://localhost:44430",
                                                          "https://localhost:7127")
                                                            .AllowAnyHeader()
                                                            .AllowAnyMethod(); ;
                                  });
            });


            var app = builder.Build();

            startup.Configure(app, app.Environment); // Configure the HTTP request pipeline.

            // Configure the HTTP request pipeline.
            if (!app.Environment.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller}/{action=Index}/{id?}");

            app.MapFallbackToFile("index.html");

            app.Run();
        }
    }
}