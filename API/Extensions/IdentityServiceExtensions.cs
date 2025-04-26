using System;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace API.Extensions;

public static class IdentityServiceExtensions
{
    public static IServiceCollection AddIdentityServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options =>
    {
        var tokenKey = config["TokenKey"] ?? throw new ArgumentNullException("TokenKey is not set in the configuration.");
        if (tokenKey.Length < 64)
        {
            throw new ArgumentException("TokenKey must be at least 64 characters long.");
        }   
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(config["TokenKey"]!)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });
        return services;
    }

}
