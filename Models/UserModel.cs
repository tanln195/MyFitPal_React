namespace MyFitPal.Models
{
    public class UserModel
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }
        public DateTime BirthDay { get; set; }
        public string Avatar { get; set; }
        public string Address { get; set; }
    }

    public class FormUserView{
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }
        public DateTime BirthDay { get; set; }
        public IFormFile Avatar { get; set; }
        public string Address { get; set; }
    }

}
