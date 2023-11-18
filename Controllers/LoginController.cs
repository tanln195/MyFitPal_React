using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MyFitPal.Models;
using System.IO;
using System.Security.Cryptography;
using MyFitPal.Utility;
using Microsoft.AspNetCore.Cors;

namespace MyFitPal.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        public EFDataContext _db;
        public LoginController(EFDataContext db)
        {
            _db = db;
        }

        [HttpPost("login")]
        //[Route("login")]
        [HttpPost("api/login")]
        //[EnableCors("MyPolicy")] // Required for this path.
        [EnableCors("_myAllowSpecificOrigins")]
        public ActionResult PostLogin(FormUserView _user)
        {
            try
            {
                Console.WriteLine(_user.Username);
                var check = _db.Users.Where(s => s.Username == _user.Username && s.Password == GetMD5(_user.Password)).FirstOrDefault();
                if (check.UserId > 0)
                {
                    return Ok(check);
                }
                return Ok(0);

            }
            catch (Exception e)
            {
                return Ok(e);
            }
        }

        [HttpPost]
        [Route("register")]
        public async Task<ActionResult> Post([FromForm] FormUserView _user)
        {
            var check = _db.Users.Where(s => s.Email == _user.Email.ToLower()).ToList();
            if (check.Count() > 0)
            {
                return Ok(-1);
            }
            var user = new UserModel
            {
                Username = _user.Username,
                Age = _user.Age,
                Email = _user.Email.ToLower(),
                Address = _user.Address,
                Password = GetMD5(_user.Password),
                BirthDay = _user.BirthDay

            };
            var filesPath = Directory.GetCurrentDirectory() + "/images";
            //get filename
            string ImageName = Path.GetFileName(_user.Avatar.FileName);
            var fullFilePath = Path.Combine(filesPath, ImageName);
            using (var stream = new FileStream(fullFilePath, FileMode.Create))
            {
                await _user.Avatar.CopyToAsync(stream);
            }
            user.Avatar = filesPath + "/" + ImageName;

            _db.Users.Add(user);
            await _db.SaveChangesAsync();
            int _insertID = user.UserId;
            if (_insertID > 0)
            {
                return Ok(_insertID);
            }
            return Ok(0);
        }


        //create a string MD5
        public static string GetMD5(string str)
        {
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] fromData = Encoding.UTF8.GetBytes(str);
            byte[] targetData = md5.ComputeHash(fromData);
            string byte2String = null;

            for (int i = 0; i < targetData.Length; i++)
            {
                byte2String += targetData[i].ToString("x2");

            }
            return byte2String;
        }



        private readonly IConfiguration configuration;


        private string DbConnection()
        {
            var dbAccess = new Functions.DatabaseAccessLayer(configuration);
            string dbString = dbAccess.GetConnectionString();
            return dbString;
        }

        //public void login(username, password){
        //    repository.save()
        //}
    }
}

// ui lấy value từ mấy cái field: setState
// ui: fetch(localhost:8000/login)